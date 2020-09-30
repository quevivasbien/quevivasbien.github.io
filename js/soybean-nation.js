var money = 10;
var stockpile = 0;
var num_acres = 1;
var land_prod = 1.0;
var harvest_times = [false, false, false, true];
var year = 0;
var season = 0;
const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
var interest_rate = 0.05;
var land_supply_var = 1.0;
var land_demand_var = 1.0;
var soy_demand_var = 30.0;
var soy_demand_const = 15.0;
var recent_sells = 10.0;
var ad_budget = 0;
var research_budget = 0;
var sell_frac = 1.0;
var price_descrim = false;

// Helper string format function
String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k]);
  }
  return a;
}
// Helper array sum function
function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
}


function runGame() {
  updateVisuals();
  updateMoney();
  updateStockpile();

  // listen for sell stockpile keyboard command
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 83) {
      sellStockpile();
    }
  });

  // create gameflow delayed loop
  function loopGameFlow() {
    setTimeout(function() {
      nextSeason();
      if (money + getFarmValue() >= 0) {
        loopGameFlow();
      }
    }, 2000);
  }
  loopGameFlow();
}


function getFarmValue() {
  // present value of future revenue plus land value
  return num_acres * land_prod * sum(harvest_times) * getSoyPrice(false, frac=1) * (1 + interest_rate) / interest_rate + num_acres * getLandPrice();
}


function getLandPrice() {
  // solution of supply and demand where s = lsv * q**2 - q * q_soy, d = ldv / q
  let descrim = (num_acres*land_supply_var)**2 + 4 * land_supply_var * land_demand_var;
  let price = land_demand_var * (2 * land_supply_var) / (-num_acres*land_supply_var + Math.sqrt(descrim));
  if (isNaN(price) || price <= 0) {
    price = 0.01;
  }
  return price;
}


function getSoyPrice(update_visual=false, frac=sell_frac) {
  let multiplier;
  if (price_descrim && stockpile != 0) {
    // integrate 1/x demand from 0 to stockiled amount
    multiplier = (Math.log(recent_sells + stockpile*frac) - Math.log(recent_sells)) / (stockpile*frac);
  }
  else {
    multiplier = 1 / (recent_sells + stockpile*frac);
  }
  let price = soy_demand_var * multiplier * Math.log10(ad_budget+11);
  if (price < 0) {
    price = 0;
  }
  if (update_visual) {
    elem = document.getElementById('soy-price');
    if (price < 0.01) {
      elem.innerHTML = 'Soy sell price: <$0.01';
    }
    else {
      elem.innerHTML = 'Soy sell price: ${0}'.format(price.toFixed(2));
    }
    // also update slider status output
    if (document.getElementById('slidecontainer').style.display != 'none') {
      slider_output = document.getElementById('partial-sale-status');
      slider = document.getElementById('partial-sale-slider');
      slider_output.innerHTML = 'Selling {0}% of stockpile, revenue will be ${1}'.format(
        slider.value,
        ((slider.value / 100) * stockpile * price).toFixed(2)
      );
    }
  }
  return price;
}


function updateVisuals() {
  document.getElementById('date').innerHTML = '{0}, year {1}'.format(seasons[season], year);
  document.getElementById('num-acres').innerHTML = 'Number of acres: {0}'.format(num_acres);
  document.getElementById('land-prod').innerHTML = 'Land productivity: {0}'.format(land_prod.toFixed(2));
  document.getElementById('farm-value').innerHTML = 'Farm value: ${0}'.format(getFarmValue().toFixed(2));
  document.getElementById('buy-acres-price').innerHTML = 'Price: ${0}/acre'.format(getLandPrice().toFixed(2));
  getSoyPrice(true);
}


function updateMoney(animation=null) {
  let elem = document.getElementById('money');
  if (money >= 0) {
    elem.innerHTML = 'Money: ${0}'.format(money.toFixed(2));
  }
  else {
    elem.innerHTML = 'Money: -${0}'.format(-money.toFixed(2));
  }
  if (animation) {
    elem.style.animation = null;
    void elem.offsetWidth;
    if (animation === 'green') {
      elem.style.animation = 'flash-green 0.5s 2';
    }
    else if (animation === 'red') {
      elem.style.animation = 'flash-red 0.5s 2';
    }
  }
}

function updateStockpile(animation=null) {
  let elem = document.getElementById('stockpile');
  elem.innerHTML = 'Soy stockpiled: {0}'.format(stockpile.toFixed(1));
  if (animation) {
    elem.style.animation = null;
    void elem.offsetWidth;
    if (animation === 'green') {
      elem.style.animation = 'flash-green 0.5s 2';
    }
    else if (animation === 'red') {
      elem.style.animation = 'flash-red 0.5s 2';
    }
  }
  // need to include price update here since it depends on stockpile amt
  getSoyPrice(true);
}


function updateBudgets() {
  let status = document.getElementById('budget-status');
  let ad_ent = document.getElementById('ad-budget');
  let ad_val = parseFloat(ad_ent.value);
  if (isNaN(ad_val) || ad_val < 0) {
    status.innerHTML = 'Ad budget needs to be a nonnegative number.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
    ad_ent.value = 0;
  }
  else {
    ad_budget = ad_val;
  }
  let research_ent = document.getElementById('research-budget');
  let research_val = parseFloat(research_ent.value);
  if(isNaN(research_val) || research_val < 0) {
    status.innerHTML = 'Research budget needs to be a nonnegative number.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
    research_ent.value = 0;
  }
  else {
    research_budget = research_val;
  }
  if (research_budget > 0) {
    // roll dice for research
    let proba = Math.log10(research_budget/10+1) / (1 + Math.log10(research_budget/10+1));
    if (Math.random() < proba) {
      land_prod += 0.05 * Math.random() * Math.log2(research_budget + 1);
      let prod_elem = document.getElementById('land-prod');
      prod_elem.style.animation = null;
      void prod_elem.offsetWidth;
      prod_elem.style.animation = 'flash-green 1s 2';
    }
  }
  if (ad_budget > 0) {
    // roll dice for advertising
    let proba = Math.log2(ad_budget/10+1) / (1 + Math.log2(ad_budget/10+1));
    if (Math.random() < proba) {
      soy_demand_const += Math.random() * Math.log2(ad_budget + 1);
      soy_demand_var = soy_demand_const + 0.5 * soy_demand_var;
      getSoyPrice(true);
    }
  }
  if (soy_demand_const > 15.0) {
    // soy demand slowly reverts to baseline
    soy_demand_const = 15 + 0.99 * (soy_demand_const - 15);
    soy_demand_var = soy_demand_const + 0.5 * soy_demand_var;
    getSoyPrice(true);
  }
  if (ad_budget > 0 || research_budget > 0) {
    money -= (ad_budget + research_budget);
    updateMoney('red');
  }
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}


function nextSeason() {
  season++;
  if (season === 4) {
    season = 0;
    year++;
  }
  land_supply_var = 0.5 + 0.5 * land_supply_var + (Math.random()*0.05 - 0.025);  // AR1
  land_demand_var = 0.5 + 0.5 * land_demand_var + (Math.random()*0.1 - 0.05); // AR1, more volatile
  soy_demand_var = soy_demand_const + 0.5 * soy_demand_var + (2*Math.random() - 1);
  recent_sells *= 0.5; // decay rate for demand
  updateBudgets();
  updateVisuals();
  // harvest if able
  if (harvest_times[season]) {
    stockpile += 2 * num_acres * land_prod * Math.random();
    updateStockpile('green');
  }
  // subtract debt payment, compounded quarterly
  if (money < 0) {
    money -= (-interest_rate * money / 4);
    updateMoney('red');
  }
  // check game over
  if (money + getFarmValue() < 0) {
    game_over = document.getElementById('game-over');
    game_over.style.display = 'block';
    for (c of game_over.children) {
      c.style.color = 'red';
    }
  }
}


function sellStockpile() {
  money += (stockpile * sell_frac * getSoyPrice());
  updateMoney('green');
  recent_sells += stockpile * sell_frac;
  stockpile *= (1 - sell_frac);
  updateStockpile('red');
}


function buyAcres() {
  let num_to_buy = parseInt(document.getElementById('buy-acres-num').value);
  let status = document.getElementById('buy-acres-status');
  if (isNaN(num_to_buy) || num_to_buy <= 0) {
    status.innerHTML = 'Number of acres to buy must be a positive integer.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else if (getLandPrice() * num_to_buy > money + getFarmValue()) {
    status.innerHTML = 'You can\'t afford to buy that many acres.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else {
    if (num_to_buy === 1) {
      status.innerHTML = 'You purchased an acre for ${0}'.format(getLandPrice().toFixed(2));
    }
    else {
      status.innerHTML = 'You purchased {0} acres for ${1}'.format(num_to_buy, (num_to_buy * getLandPrice()).toFixed(2));
    }
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-green 1s 2';
    money -= (getLandPrice() * num_to_buy);
    updateMoney('red');
    num_acres += num_to_buy;
  }
  document.getElementById('buy-acres-num').value = null;
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}


function activateSpringHarvest() {
  if (harvest_times[1]) {
    return; // already upgraded
  }
  let status = document.getElementById('upgrade-status');
  if (money + getFarmValue() < 100.0) {
    status.innerHTML = 'You can\'t afford that upgrade.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else {
    let button = document.getElementById('activate-spring-harvest');
    button.classList.remove('unpressed');
    button.classList.add('pressed');
    status.innerHTML = 'You can now harvest in the spring.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-green 1s 2';
    harvest_times[1] = true;
    money -= 100;
    updateMoney('red');
  }
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}

function activateSummerHarvest() {
  if (harvest_times[2]) {
    return; // already upgraded
  }
  let status = document.getElementById('upgrade-status');
  if (money + getFarmValue() < 500.0) {
    status.innerHTML = 'You can\'t afford that upgrade.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else {
    let button = document.getElementById('activate-summer-harvest');
    button.classList.remove('unpressed');
    button.classList.add('pressed');
    status.innerHTML = 'You can now harvest in the summer.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-green 1s 2';
    harvest_times[2] = true;
    money -= 500;
    updateMoney('red');
  }
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}


function activatePartialSale() {
  slidecontainer = document.getElementById('slidecontainer');
  if (slidecontainer.style.display != 'none') {
    return; // already upgraded
  }
  let status = document.getElementById('upgrade-status');
  if (money + getFarmValue() < 150.0) {
    status.innerHTML = 'You can\'t afford that upgrade.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else {
    let button = document.getElementById('activate-partial-sale');
    button.classList.remove('unpressed');
    button.classList.add('pressed');
    status.innerHTML = 'You can now sell a fraction of your stockpile at a time.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-green 1s 2';
    slidecontainer.style.display = 'block';
    var slider = document.getElementById("partial-sale-slider");
    var slider_output = document.getElementById("partial-sale-status");
    slider_output.innerHTML = 'Selling {0}% of stockpile, revenue will be ${1}'.format(
      slider.value,
      ((slider.value / 100) * stockpile * getSoyPrice()).toFixed(2)
    );
    slider.oninput = function() {
      slider_output.innerHTML = 'Selling {0}% of stockpile, revenue will be ${1}'.format(
        this.value,
        ((this.value / 100) * stockpile * getSoyPrice()).toFixed(2)
      );
      sell_frac = slider.value / 100;
      // need to include price update here since it depends on sell frac
      getSoyPrice(true);
    }
    money -= 150;
    updateMoney('red');
  }
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}


function activatePriceDiscrim() {
  if (price_descrim) {
    return; // already upgraded
  }
  let status = document.getElementById('upgrade-status');
  if (money + getFarmValue() < 2000.0) {
    status.innerHTML = 'You can\'t afford that upgrade.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-red 1s 2';
  }
  else {
    let button = document.getElementById('activate-price-discrim');
    button.classList.remove('unpressed');
    button.classList.add('pressed');
    status.innerHTML = 'You can now price discriminate.';
    status.style.animation = null;
    void status.offsetWidth;
    status.style.animation = 'flash-green 1s 2';
    price_descrim = true;
    money -= 2000;
    updateMoney('red');
  }
  setTimeout(function() {
    status.innerHTML = null;
  }, 2000);
}
