<script lang="ts">
    import Figure from "$lib/components/Figure.svelte";
    import { base } from "$app/paths";
    
    import food_deserts_2020 from "$lib/img/chicago-groceries/food_deserts_2020.png";
    import grocery_stores_2020 from "$lib/img/chicago-groceries/grocery_stores_2020.png";
</script>

<!-- TAGS: data -->
<!-- DATE: 2020-09 -->
<h1>Chicago grocery stores and food deserts</h1>

<p>I've fallen in love with Chicago's <a href="https://data.cityofchicago.org/">data portal</a> website. There are lots of very interesting data sets to explore, and most of them don't need too much cleaning to start pulling insights out of. One that caught my eye was a list of grocery stores compiled in 2011 to study food deserts (places with poor access to nutritional food from grocery stores) in Chicago. Apparently this was part of a city effort to improve access to food throughout the city. I did a bit of analysis/visualization on that data, but I was curious to know the state of grocery stores in Chicago in 2020. <!-- ENDPREVIEW -->To do this, I made use of a <a href="https://data.cityofchicago.org/Community-Economic-Development/Business-Licenses-Current-Active/uupf-x98q">list of business licenses</a> with basically every business in the city. I filtered the businesses to include (as best as I could) just grocery stores and also added in some grocery stores outside but close to the city limits.</p>
<p>The first thing I did was to calculate the distance to the nearest grocery store for every point in the city. This gave me the graphic below (you'll notice I'm recycling the OpenStreetMap map from my post on <a href="{base}/posts/chicago-crime-2020">crime in Chicago</a>).</p>
<Figure src={food_deserts_2020} />
<p>Most of the areas far from grocery stores are on top of parks or in less-populated areas, but you can see there still are some spots in urban areas that are over a kilometer away from the nearest grocery store. A kilometer might not seem like much, but I speak from experience in saying that it is a pain to have to walk that far to get groceries if you don't have a car (especially if you're trying to provide for more than just yourself), and we also have to keep in mind that some of these stores are more the corner "food and liquor" sort of thing than a full-blown supermarket (I tried filtering out those smaller stores but didn't find a way to do that in a non-arbitrary way with the data available).</p>
<p>The second visualization I made is a map showing the location of every store in the city, as well as some coloration showing an accesibility score that takes into account both the number of nearby stores and the distance to those stores.</p>
<Figure src={grocery_stores_2020} />
<p>I actually like this map better than the previous one because it doesn't have the obscuring bubble-ish effect like in the previous one. The story it tells is much the same, though.</p>
