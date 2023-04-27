const e=[{slug:"wiggle-game",tags:["programming"],date:"2023-04-26",title:"Making a multiplayer game with SvelteKit & Firebase",preview:`<p>A few months back, I created a CLI clone of the Boggle word game. This was originally just a toy project I wrote on a weekend to try out some Rust crates for CLIs, but I wanted to return to this idea and see if I could make a browser-based version where multiple players could compete to find words.</p>
<p>I chose to use SvelteKit for this, since I've found Svelte to be a very friendly web framework. I hadn't previously made any non-static web apps with Svelte, so I also figured this would be good chance to try out some of SvelteKit's server-side features. I originally intended to build the project with SvelteKit's Node adapter and host it on an AWS server along with my own database, though after a great deal of fiddling I realized I could accomplish the same objective with much less hassle using Firebase's realtime database. I also ended up hosting the app on Vercel, instead of GitHub Pages like I have in the past, in order to make use of some of SvelteKit's SSR features (which are helpful for dynamic page routing).</p>`},{slug:"fractal-friends",tags:["programming","math"],date:"2023-04-25",title:"Fractal friends",preview:"<p>Continuing with my theme of making every hobby programming project I do have some relation to the Mandelbrot set, I recently whipped up a fun little app that allows you to explore the Mandelbrot set's associated Julia sets.</p>"},{slug:"fractal-pixels",tags:["programming"],date:"2023-04",title:"Trying out React",preview:`</h1>
<p>
    I recently took the time to learn how to use React (I had previously learned Svelte, which is what this site is built with, but wanted to be familiar with a more commonly-used web framework). As a motivating project, I created a browser-based puzzle game.
</p>`},{slug:"third-party-roles",tags:["ai","econ"],date:"2023-03",title:"Roles for third parties in promoting safe AI innovation",preview:`<p><em>This is a summary of a paper I have been working on with Robert Trager and Nicholas Emery-Xu. Feel free to reach out for the full version.</em></p>
<p>This paper builds on our previous work, where
we introduced a model where innovators compete to be the first to
develop advanced AI technology, allocating resources between safety and
performance research. In that paper, we made some observations on how
changes in compute pricing affect safety. Here, we suggest and evaluate
a few other ways that third parties could promote safer strategies on
the part of AI innovators.</p>
<p>The basic interventions we look at are:</p>
<ol>
<li>Providing subsidies that can be used only for safety research</li>
<li>Providing subsidies only if innovators can certify they will meet a threshold level of safety</li>
<li>Penalizing innovators if they fail to meet a threshold level of safety</li>
</ol>
<p>Roughly speaking, all of these interventions are better at promoting
safety than simply providing compute subsidies to be used at innovators’
discretion. The main takeaway is that interventions 2 and 3 can be significantly more effective (both in terms of cost and the resulting increase in safety) than intervention 1.</p>`},{slug:"mandelbrot-wasm",tags:["programming","math"],date:"2023-03",title:"Yet another Mandelbrot explorer",preview:`<p>I've made quite a few attempts at creating a visualizer for the Mandelbrot set. This has become something of a go-to project for me when learning a new programming language and has been a not-insignificant factor in motivating me to learn some new technologies.</p>
<p>I have made a few iterations on explorers making use of WebAssembly, starting with a dreadfully slow attempt using C++'s emscripten compiler, and culminating in a Rust-based version I made a few months back. Most of these iterations suffered from rendering artifacts due to off-by-one errors in delegating calculations to web workers, collecting the results, and stitching them together on the HTML canvas. I finally got around to fixing those artifacts and now have a version of the Mandelbrot explorer that I feel quite happy with (though, of course, I already have in mind more improvements).</p>`},{slug:"problem-group-epistemics",tags:["econ","epistemology","math"],date:"2023-01",title:"A potential problem with group epistemics",preview:`<p>My goal here is to describe a potential problem that groups of people
may have when trying to collectively figure out the truth of some
subject.</p>
<p>The basic idea is that people may use each others' beliefs to inform
their own beliefs, without properly accounting for the fact that others'
beliefs are based on some of the same evidence as their own beliefs.</p>
<p>In what follows I present a simplified example of how this might happen,
a bit of math to guide our thinking, and some illustrative plots.</p>
<p>The basic takeaway is that a failure to "de-correlate" others' beliefs
from the supporting evidence leads to sub-optimal epistemics. In
particular:</p>
<ul>
<li>Groups that make this error may be overconfident in their beliefs.</li>
<li>This can make it harder to recover accurate beliefs if the first
    people to explore a topic reach conclusions far from the truth.</li>
</ul>`},{slug:"compute-pricing-safety-tax",tags:["ai","econ"],date:"2022-11",title:"Compute pricing and the AI safety tax",preview:`</h1>
<p><em>This is a summary of a paper I created with Robert Trager and Nicholas Emery-Xu. The full version is available on arXiv.</em></p>

<p>Using a model in which actors compete to develop a potentially
dangerous new technology (advanced AI), we study how changes in the
price of compute affect actors’ spending on safety. In the model, actors
split spending between safety and performance, with safety determining
the probability of a “disaster” outcome, and performance determining the
actors’ competitiveness relative to their peers. This allows us to
formalize the idea of a <em>safety tax</em>, where actors’ spending on
safety comes at the cost of spending on performance (and vice
versa).</p>`},{slug:"ai-gov-series-5-s-p-3",tags:["ai","econ"],date:"2022-07",title:"Subsidies/taxes for safety-conscious actors",preview:`<p><em>This is the fifth section in a series on modeling AI governance. You
might want to start at the
beginning.</em></p>
<p>In this post, we’ll use the safety-performance model to explore the
question of whether we should give higher or lower factor prices to
agents that are more concerned about safety.</p>`},{slug:"ai-gov-series-4-s-p-2",tags:["ai","econ"],date:"2022-07",title:"Safety and performance with competing managers",preview:`<p><em>This is the fourth section in a series on modeling AI governance. You
might want to start at the
beginning.</em></p>
<p>In the last section,
we considered a specialized version of the AI governance model that
captures a tradeoff between safety and performance. In this section,
we'll expand the model to have multiple, competing actors.</p>`},{slug:"ai-gov-series-3-s-p",tags:["ai","econ"],date:"2022-07",title:"A model with a safety/performance tradeoff",preview:`<p><em>This is the third section in a series on modeling AI governance. You
might want to start at the
beginning.</em></p>
<p>Building from our <a href="{base}/posts/ai-gov-series-1-intro/">AI governance
model</a>, let's make some
assumptions that allow us to describe a scenario in which we have an
explicit tradeoff between safety and performance.</p>`},{slug:"ai-gov-series-2-simple-harms",tags:["ai","econ"],date:"2022-07",title:"Modeling some failure modes of AI",preview:`<p><em>This is the second section in a series on modeling AI governance. You
might want to start at the
beginning.</em></p>
<p>In this section, we present some potential ways in which AI may cause
harm and show how we might fit these problems into our model.</p>
<p>The harms discussed here are all near-term harms in the sense that they
are currently occurring to some extent and may worsen within the next
few decades. These may not be the most significant harms in the big
picture, but they may translate to bigger problems in the long term, and
they're arguably easier to conceptualize so can be good for tuning our
thinking.</p>`},{slug:"ai-gov-series-1-intro",tags:["ai","econ"],date:"2022-07",title:"An economic model for AI governance",preview:`<p><em>This is the first section in a series on modeling AI governance.</em></p>
<p>The goal here is to formulate a basic economic framework for thinking
about problems in AI governance. This framework should be general enough
to cover the most concerning ways in which AI could be harmful. The
emphasis here will be on the <em>governance</em> of AI technology, rather than
on the technical aspects of AI safety -- that is, the goal is to think
about how the organizations developing AI should be
regulated/incentivized, rather than the specifics of what those
organizations should be doing.</p>
<p>A model for AI governance should encapsulate the relationship between
the public, the organizations creating the AI (the "managers"), and the
AI itself. To be able to capture the ways in which things could go awry
from the perspective of the public, we need to allow the AI's objective
to be imperfectly aligned with the managers' objective, which itself may
be imperfectly aligned with the public's objective -- problems can arise
due to misalignment on either of these levels. One way to formalize this
is with the model presented here.</p>`},{slug:"info-theory-for-ml",tags:["ai","math"],date:"2021-12",title:"Information theory for machine learning",preview:`<p>Why is it that courses on machine learning tend to start by covering
some basic concepts from information theory? This post is a short
explainer of why information theory is relevant to the formal study of
machine learning.</p>
<h2>Machine learning as model-fitting</h2>
<p>If we want to get anywhere, we need to start with a solid concept of
what “machine learning” actually means. Basically, we want a computer to
be able to process and utilize complicated patterns in data. This is, of
course, what we do whenever we fit a statistical model to data, and it
turns out that the sorts of algorithms used for machine learning are
really just complicated statistical models: neural networks, for
example, are in their simplest form a set of linear regressions stacked
on top of each other.</p>
<p>Let’s make this more explicit: a machine learning model is a highly
flexible statistical model – it has many parameters, which allow it to
fit a variety of statistical distributions. When we train a machine
learning model, we are finding the parameters of the model that make the
model approximate the training data as closely as possible. (Note that
by statistical model, we mean a description of a probability
distribution, e.g., a specification of a probability density function.)</p>`},{slug:"redundant-ai-alignment",tags:["ai"],date:"2021-10",title:"“Redundant” AI alignment",preview:`<p>Let’s suppose that you’ve somehow created a superhuman artificial
general intelligence and have figured out how to align this AI’s
objectives with the preferences of any given person. (That is, you can
tell this AI to look out for someone, and the AI will then figure out
what that person wants and do its best to facilitate those desires.)
This seems like good progress, but we’re not out of the danger zone yet:
what else can we do to keep this situation from getting out of control?</p>
<p>One idea is to create not one, but many, instances of this AI and tell
each one to advocate for different people, the idea being that if one of
the instances gets out of control, the others can reign it in and shut
it down. The question that I want to answer here is how well we should
expect that strategy to work.</p>`},{slug:"hyde-park-crime",tags:["data"],date:"2020-09",title:"Hyde Park crime map",preview:`</h1>
<p>
    The University of Chicago Police Department has a site where you can see the various incidents reported to the department each day.
    I wanted to be able to visualize where these incidents were concentrated, and
    since each event is labeled with an address, I figured I could create a map to
    do that.
</p>`},{slug:"derailed-new-world",tags:["econ"],date:"2020-09",title:"Derailed new world",preview:`</h1>
<p>There are lots of reasons to be concerned about our collective future. In my essay Building utopia, I outlined a few which give me pause, especially with respect to our ability to develop into a better society over the very long term. Although some of those concerns are significantly underrepresented relative to their gravity (e.g., it seems like only the effect altruists are taking extinction threats seriously), there is one of them that I see getting almost no attention, at least within the reasonably wide net of information-collection I have tried to cast: that would be the threat that I previously labeled as "derailment." This essay is a more in-depth explanation of what I mean by that term and why I worry about it.</p>`},{slug:"chicago-groceries",tags:["data"],date:"2020-09",title:"Chicago grocery stores and food deserts",preview:`</h1>
<p>I've fallen in love with Chicago's data portal website. There are lots of very interesting data sets to explore, and most of them don't need too much cleaning to start pulling insights out of. One that caught my eye was a list of grocery stores compiled in 2011 to study food deserts (places with poor access to nutritional food from grocery stores) in Chicago. Apparently this was part of a city effort to improve access to food throughout the city. I did a bit of analysis/visualization on that data, but I was curious to know the state of grocery stores in Chicago in 2020.`},{slug:"chicago-crime-2020",tags:["data"],date:"2020-09",title:"Crime in Chicago, so far in 2020",preview:`</h1>
<p>I realized that I was doing things the hard way when I made my map of crime in Hyde Park -- the City of Chicago has an excellent site where they make available all sorts of data -- including crime data -- in various formats. The best part is that each event is pre-labeled with GPS coordinates, so not only did I not need to scrape the website for the data, I didn't have to geocode the events either. I downloaded all of the data for 2020 up to now (early September) and made a few visualizations as an extension of my Hyde Park project. (I would have used all the data they have, since 2001, but my little laptop was not having fun chugging through the 7 million+ observations in there, and I figured the 2020 data will give a more current picture, anyway.)</p>`},{slug:"non-euclidean-gravity",tags:["math"],date:"2020-08",title:"Non-euclidean gravity",preview:`<p>So I was reviewing linear algebra today and found myself asking the
question, "How would gravity work in a space with a different notion of
distance?"</p>`},{slug:"building-utopia",tags:["econ","ethics"],date:"2020-07",title:"Building utopia",preview:`</h1>
<h2>What is my goal? What is humanity’s goal?</h2>

<p>
    I’ve been spending a lot of time reading and thinking about extending ethics
    — specifically, the possible answers to the question, “What should I do?” —
    from a personal level to the level of groups of individuals, up to the level
    of the entirety of humankind and beyond. My thinking on this subject is
    largely based on my idea of desire satisfaction as a reasonable basis for moral thinking, as well as the sort of thinking that underlies the traditional economic
    analysis of well-being, which is strongly rooted in utilitarianism. My
    interest in this stems both from a personal fascination, almost an
    obsession, with thinking carefully about what I <em>should</em> spend my
    time and resources doing (How is it that everyone is not constantly asking
    this question?), and from my professional stake in understanding how people
    go about translating their preferences into action and how these individual
    preferences and actions interact on a larger scale to produce the
    sophisticated social mechanics of communities, nations, and international
    bodies: I am about to be submerged full time in rigorous study whose
    theoretical underpinnings rely on specific, technical assumptions about how
    all this works, so it only makes sense to carefully consider how appropriate
    those assumptions are and how we can reasonably translate the positive
    declarations of empirical economic analysis (and scientific investigation
    more generally) into normative statements about <em>what </em>we should
    collectively be using our finite resources for. Specifically, I want to
    carefully consider what the priorities of human society should be and how I
    can use my own resources and aptitudes to contribute to those priorities.
</p>`},{slug:"very-rough-moral-theory",tags:["ethics"],date:"2020-06",title:"A [very rough] moral theory of everything",preview:`<p>I’ve written before about what I think is a good
    foundation for thinking systematically about morality, specifically, answering the question,
    “What should I do?” To summarize, the basic principle is that a person should take actions that
    will get that person what he or she wants. At its root, the sort of morality that emerges from
    that principle is more or less an egoistic preference utilitarianism, although I do want to
    emphasize once again that endorsing a concept of morality that revolves around the fulfillment
    of personal desires is <em>not</em> the same thing as saying that we should go around lying,
    cheating, stealing, killing, and otherwise giving no regard to the consequences of our actions
    on others and on future events. I personally (and I think this is true for most people) find
    that focusing
        on the well-being of others leads to highly desirable outcomes; I am also a big
    proponent of long-term thinking.</p>

<p>The idea of morality begs to be extended beyond just the self, and not just in the sense of
    considering how your actions impact those around you, which is what I have considered before,
    but also in the sense of moving past the question, “What should <em>I</em> do?” and answering
    the question, “What should <em>we</em> do?” Making that step is the goal of this essay. Keep in
    mind that the conclusions I make here only hold if you’re willing to go along for the ride and
    first accept the premises I adopt.</p>`},{slug:"epistemological-rock-bottom",tags:["epistemology"],date:"2019-08",title:"Hitting epistemological rock bottom",preview:`</h1>
<h2 id="cogito-ergo-sum">Cogito ergo sum</h2>
<p>If I had to compile a list of famous declarations from philosophy, I might stick Descartes’
    <em>cogito</em> – “I think, therefore I am” – at the top. Descartes arrived at that
    conclusion after indulging in a “method of doubt” where he attempted to strip himself of all
    preconceptions and examine every way he might be deceived in his ideas about what is true.
    He finally reached the point where all he could say was that since he experienced himself
    thinking, he must, at least as a cognitive entity, exist. From there, he attempted to
    reconstruct all his other ideas about reality (although honestly his arguments from that
    point are a tad suspicious, and I think most people who’ve read the <em>Meditations</em>
    would agree with me). I for a long time admired this willingness to strip back one’s
    experience of reality to its bare bones, to keep asking the critical question – “Why do I
    believe what I believe?” – until the most basic, solid truths were obtained.</p>`},{slug:"relationship-with-ea",tags:["ethics"],date:"2019-07",title:"My passionate, complicated relationship with effective altruism",preview:`</h1>
<p>I came across Peter Singer’s most famous ideas during my last semester of high school. I was taking a class on the philosophy of ethics from UVU. After struggling through some excessively wordy defense of deontological morality, I started flipping absentmindedly through the textbook (which was essentially a compilation of diverse philosophical ideas about morality), and found Peter Singer’s “Famine, Affluence, and Morality.” I read the entire thing (as well as a few other essays making similar arguments) and was, at the time, quite convinced. <span id="more-227"></span>The main takeaways I got were the following:</p>
<ul>
<li>If it is within our power to reduce or eliminate suffering, we should do so.</li>
<li>Suffering that occurs at a distance (e.g. in poor, developing countries) is morally relevant.</li>
<li>Suffering due to poverty does not need to exist. It should be possible to eliminate this sort of suffering given a well-thought-out, coordinated effort.</li>
<li>Almost anyone in a country like the U.S. is hugely more wealthy than the typical person in countries where the worst poverty exists. This wealth disparity can be leveraged to have an outsized impact on improving the well-being of the global poor.</li>
</ul>`},{slug:"deeper-with-axiom-m",tags:["ethics"],date:"2019-07",title:"Diving deeper with Axiom M",preview:`</h1>
<p>I earlier made some
    rather dubitable statements that warrant a bit more careful consideration. Here’s the relevant
    text:</p>
<blockquote>
    <p><em>People ought to act in a way that will get them what they want.</em>…</p>
</blockquote>
<blockquote>
    <p>Note that I am not suggesting that we should blindly follow whatever whims flutter across our
        minds. What I am suggesting is that we should endeavor to put ourselves in states that we
        prefer to all other feasible options. Giving precedence to transitory wants is a bad
        strategy for Getting What You Want since those desires are likely to change quickly, making
        them difficult to satisfy in any meaningful way. (As a general maxim, an important part of
        the project of Getting What You Want is wanting the right things in the first place.)</p>
</blockquote>
<blockquote>
    <p>…it’s helpful to have desires that are actually achievable. It may even be worthwhile to
        intentionally train yourself to desire things that are more feasible.</p>
</blockquote>`}];export{e as p};
