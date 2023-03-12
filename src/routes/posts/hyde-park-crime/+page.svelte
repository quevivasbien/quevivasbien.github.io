<script lang="ts">
    import Figure from "$lib/components/Figure.svelte";

    import ucpd_map2 from "$lib/img/hyde-park-crime/ucpd_map2.png";
    import hyde_park_daily_incidents from "$lib/img/hyde-park-crime/hyde_park_daily_incidents.png";
    import thefts_robberies_by_hour from "$lib/img/hyde-park-crime/thefts_robberies_by_hour.png";
    import violent_crimes_hourly from "$lib/img/hyde-park-crime/violent_crimes_hourly.png";
    import hyde_park_hourly_incidents from "$lib/img/hyde-park-crime/hyde_park_hourly_incidents.png";
</script>

<!-- TAGS: data -->
<!-- DATE: 2020-09 -->
<h1>Hyde Park crime map</h1>

<p>
    The University of Chicago Police Department has <a
        href="https://incidentreports.uchicago.edu/incidentReportArchive.php"
        >a site</a
    > where you can see the various incidents reported to the department each day.
    I wanted to be able to visualize where these incidents were concentrated, and
    since each event is labeled with an address, I figured I could create a map to
    do that.
</p>

<!-- ENDPREVIEW -->

<Figure src={ucpd_map2} />
<p>
    To create this, I used Python's Requests and Beautiful Soup libraries to
    scrape the incident report archives, gathering all incidents from 1
    September 2019 to 1 September 2020. I then cleaned up the data and used the <a
        href="https://pypi.org/project/geocoder/">Geocoder</a
    >
    Python library to get GPS coordinates for each incident address. (I wasn't
    able to get coordinates for some events that didn't occur at proper numeric
    addresses.) The final product is just a Matplotlib scatterplot of those
    coordinates overlaid on an
    <a href="https://www.openstreetmap.org/">OpenStreetMap</a> view of Hyde Park.
</p>
<p>
    You can see that most incidents are concentrated at the University of
    Chicago hospital, with a few on the university campus, and most of the rest
    around the main stores and other businesses in the area. There are, of
    course, a significant number of incidents in residential areas as well.
</p>
<hr />
<p>
    The incidents also have information about when they were reported, so I
    generated plots of the days and times of day that they were generally
    reported:
</p>
<Figure src={hyde_park_daily_incidents} />
<Figure src={hyde_park_hourly_incidents} />
<p>
    The daily counts are interesting -- you can clearly see a sizable decrease
    in crimes during the holidays, and the unrest in May/June shows up as well.
    The hourly counts are not quite what I expected; I found it odd that most
    crimes were committed in the middle of the day, although I guess that is
    when most people are out and about.
</p>
<p>
    I also broke down the hourly counts by type of crime, as you can see below.
</p>
<Figure src={thefts_robberies_by_hour} />
<Figure src={violent_crimes_hourly} />
<p>
    Overall, the data are interesting and worth perusing for anyone who lives in
    Hyde Park. I'm sure there are many more insights that could be extracted
    from the data I collected.
</p>
