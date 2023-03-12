<script lang="ts">
    import { base } from "$app/paths";
    import Figure from "$lib/components/Figure.svelte";

    import chicago_crime from "$lib/img/chicago-crime/chicago_crime.png";
    import chicago_crime_no_log from "$lib/img/chicago-crime/chicago_crime_no_log.png";
    import chicago_violent_crime from "$lib/img/chicago-crime/chicago_violent_crime.png";
    import crime_per_pop from "$lib/img/chicago-crime/crime_per_pop.png";
    import crime_per_pop_no_log from "$lib/img/chicago-crime/crime_per_pop_no_log.png";
    import daily_crimes from "$lib/img/chicago-crime/daily_crimes.png";
    import daily_violent_crimes from "$lib/img/chicago-crime/daily_violent_crimes.png";
    import daily_homicides from "$lib/img/chicago-crime/daily_homicides.png";
</script>

<!-- TAGS: data -->
<!-- DATE: 2020-09 -->
<h1>Crime in Chicago, so far in 2020</h1>

<p>I realized that I was doing things the hard way when I made <a href="{base}/posts/hyde-park-crime/">my map of crime in Hyde Park</a> -- the City of Chicago has <a href="https://data.cityofchicago.org/">an excellent site</a> where they make available all sorts of data -- including crime data -- in various formats. The best part is that each event is pre-labeled with GPS coordinates, so not only did I not need to scrape the website for the data, I didn't have to geocode the events either. I downloaded all of the data for 2020 up to now (early September) and made a few visualizations as an extension of my Hyde Park project. (I would have used all the data they have, since 2001, but my little laptop was not having fun chugging through the 7 million+ observations in there, and I figured the 2020 data will give a more current picture, anyway.)</p>

<!-- ENDPREVIEW -->

<p>The first thing I made was this attractive-looking map of where crimes are concentrated. It's a log-scale hex-bin map of almost the entire city (reddish colors indicate more crimes per area). I honestly want to hang this on my wall; it's very interesting to look at closely (of course, that's just me being a map nerd).</p>
  <Figure src={chicago_crime} />
<p>You can see that Hyde Park seems to exist in a little bubble of crime, which is not surprising. Downtown has the highest concentration of crimes, which is surprising based on the fact that people there tend to be more wealthy than the average person in the city, but not surprising based on the fact that the concentration of people there is considerably higher than anywhere else in the city. I'm sure the looting that's been occuring of the past few months has also contributed to that. The large sections of the city where mainly economically disadvantaged, African American people live have very high rates of crime. On the other hand, the sections of the city dominated by Latin Americans have relatively low crime rates (compare with <a href="https://upload.wikimedia.org/wikipedia/commons/5/53/Race_and_ethnicity_2010-_Chicago_%285560488484%29.png">this excellent map from Wikipedia</a>). The lower-density suburbs have low crime rates.</p>
<p>The non-log-scaled version is also helpful for identifying especially high-crime areas:</p>
<Figure src={chicago_crime_no_log} />
<p>I also filtered the data to look only and violent crimes and see if there was any significant difference between the distribution of these crimes and the overall distribution.</p>
<Figure src={chicago_violent_crime} />
<p>There doesn't seem to be too much of a difference here, although it looks like the distrubution of violent crime might have more to do with the neighborhood and less to do with the population density; I'd have to do a more careful analysis with population data on hand to be sure, though.</p>
<hr>
<p>The big issue with these above graphics is that they don't control for the population of the area: we would expect areas with higher population to have higher crime, all else equal (as I mentioned with respect to the high crime present downtown). So if we want to get an idea of how prevalent crime is <i>per capita</i> we need to normalize the data by population. Luckily, the city <a href="https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Population-by-2010-Census-Block/5yjb-v3mj">has data available</a> -- based on the 2010 census -- that tell the population living in every census tract in the city. Using <a href="https://geo.fcc.gov/api/census/">a handy API from the FCC</a>, I was able to find which census blocks each of the crimes in the data set occured in, match this to the city's population data, and generate a version of the crime map normalized by population.</p>
<p>Here's a log-scaled version:</p>
<Figure src={crime_per_pop} />
<p>And here's a linearly-scaled version:</p>
<Figure src={crime_per_pop_no_log} />
<p>Disentangling the crime data from the population density, we can get a better idea of which areas really seem to have a problem with crime. The linearly-scaled version pinpoints several hotspots of inordinately high crime, and the log-scaled version provides an overview for the entire city. This normalization still has some drawbacks, though: for example, the area between I-90 and the river, between the Willis Tower and Chinatown, is highlighted here as an area of especially high crime, but that area is mostly a business district -- very few people live there, so the population scaling is exaggerating the crime rates.</p>
<hr>
<p>The last thing I did was to take a look at how the crime rates have changed throughout the year.</p>
<Figure src={daily_crimes} />
<p>This is interesting. You can see a sizable lull in April and May, I'm guessing due to lockdown restrictions that kept people in their houses. The Black Lives Matter protests at the end of May and beginnning of June show up very clearly, as does the looting in early August.</p>
<p>Again, I broke down the data by type of crime as well. Here's the timeline for violent crimes:</p>
<Figure src={daily_violent_crimes} />
<p>And here are the data for just homicides:</p>
<Figure src={daily_homicides} />
<p>These last two provide some interesting insights into how the dynamics of crime have changed since the COVID-19 lockdowns. Even though overall crime was down in April and May, homicides were significantly elevated (at least compared to the previous months; I'd have to look at data from years before to know what is typical for the season). Overall crime is still down compared to the beginning of the year, but violent crime has, since the beginning of June, been above what it was at the beginning of the year.</p>