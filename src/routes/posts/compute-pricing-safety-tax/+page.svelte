<script lang="ts">
    import Figure from '$lib/components/Figure.svelte';

    import fig1 from '$lib/img/compute-pricing-safety-tax/claim-theta-regimes.png';
    import fig2 from "$lib/img/compute-pricing-safety-tax/claim-A-beliefs-diff.png";
</script>

<!-- TAGS: ai, econ -->
<!-- DATE: 2022-11 -->
<h1>Compute pricing and the AI safety tax</h1>

<p><em>This is a summary of a paper I created with Robert Trager and Nicholas Emery-Xu. The full version is <a href="https://arxiv.org/abs/2302.11436">available on arXiv</a>.</em></p>

<p>Using a model in which actors compete to develop a potentially
dangerous new technology (advanced AI), we study how changes in the
price of compute affect actors’ spending on safety. In the model, actors
split spending between safety and performance, with safety determining
the probability of a “disaster” outcome, and performance determining the
actors’ competitiveness relative to their peers. This allows us to
formalize the idea of a <em>safety tax</em>, where actors’ spending on
safety comes at the cost of spending on performance (and vice
versa).</p>

<!-- ENDPREVIEW -->

<p>Below we summarize some insights from this model, explained in more
detail in the full paper.</p>
<h2 id="importance-of-safetys-returns-to-scale">Importance of safety’s
returns to scale</h2>
<p>In addition to the tradeoff introduced by forcing actors to split
spending between safety and performance, we also allow for the
possibility that safety may be more costly when performance is higher.
(It may be more difficult to ensure that more advanced AI systems are
safe.) The rate at which the cost of safety scales with performance is
critical to understanding how actors will respond to changes in the
price of compute.</p>
<blockquote>
<p>We find that, when actors are identical to each other, a
<em>decrease</em> in the price of compute leads to an <em>increase</em>
in safety if and only if the production of safety is able to outpace the
production of performance in terms of having higher returns to scale
(i.e., if a uniform increase in spending on both safety and performance
causes safety to increase relative to performance).</p>
</blockquote>
<p>This relationship is illustrated in Figure <a
href="#fig:claim-theta-regimes" data-reference-type="ref"
data-reference="fig:claim-theta-regimes">1</a>. The takeaway here is
that, if we expect safety research to require an increasingly large
portion of compute resources as performance/capabilities increase, then
making compute more expensive is likely to improve safety. We can
interpret this as a reframing of the idea that slowing down AI
development may be a good way to improve safety.</p>
<Figure src={fig1} caption = "Aggregate safety increases with price when the cost of safety increases quickly with higher performance. In the model, the parameter θ determines how the cost of safety scales with performance – higher θ means that the cost of safety increases quickly as performance increases." id="fig:claim-theta-regimes" />

<h2
id="monopolies-good-for-safety-competition-encourages-risk-taking">Monopolies
good for safety, competition encourages risk-taking</h2>
<p>When there is less competitive pressure to increase performance,
actors are able to spend more on safety. Safety therefore tends to be
higher if one actor has an overwhelming competitive advantage (meaning
they are able to produce performance at a much lower cost, either
because they are more efficient or because they face a lower compute
price). Safety is relatively lower when competitors are evenly matched,
and can actually be especially bad if one actor has only a small
advantage, since then laggards might find it beneficial to catch up by
trading safety for performance.</p>
<blockquote>
<p>Providing a subsidy to a single actor may have a positive or negative
effect on aggregate safety, but safety can be made arbitrarily high by
providing a sufficiently large subsidy to a single actor.</p>
</blockquote>
<p>This insight is not particularly helpful if we are not able to
provide an enormous subsidy sufficient to give an actor a decisive
advantage, since if the subsidy provided is not large enough, it may
actually have a negative effect on safety. It’s therefore worth
considering whom (if anyone) should be subsidized if we can only provide
a modest subsidy.</p>
<blockquote>
<p>In general, subsidizing actors with a performance advantage is better
for safety than subsidizing performance laggards, though this is
sensitive to some assumptions.</p>
</blockquote>
<p>The intuition here is that a subsidy for a performance leader further
reduces the competitive pressure on that actor, while a subsidy for a
performance laggard just brings them into closer competition with the
leader(s).</p>
<h2
id="often-unclear-whether-to-subsidize-safety-conscious-actors">Often
unclear whether to subsidize safety-conscious actors</h2>
<p>In the case where we cannot give a single player a decisive edge, we
might think that helping safety-conscious actors is a good idea. It
turns out that this is not always the case; the effect of such an
intervention depends on a number of factors, including what exactly is
meant by being “safety-conscious.” The basic concern here is that
providing a safety-conscious actor with a subsidy might encourage their
competitor(s) to take on more risk in order to catch up, while the
safety-conscious actor will not take on as much risk to be competitive
if their competitor is subsidized instead.</p>
<blockquote>
<p>If a safety-conscious actor’s competitor believes that there is
near-zero risk of disaster, it is typically better to subsidize the
safety-conscious actor. However, the right course of action is unclear
if the difference in beliefs is not so stark.</p>
</blockquote>
<p>Figure <a href="#fig:claim-A-beliefs-diff" data-reference-type="ref"
data-reference="fig:claim-A-beliefs-diff">2</a> shows an example
illustration of this claim.</p>
<Figure src={fig2} caption="If a safety-conscious player’s competitor is sufficiently unconcerned about disaster, it is typically better to subsidize the safety-conscious player. Shown here is an example with various assumptions about the strength of the safety-performance tradeoff (θ). Notice that in some cases it is better to subsidize the competitor if they are only moderately less safety-conscious than the safety-conscious player." id="fig:claim-A-beliefs-diff" />

<h2 class="unnumbered" id="some-policy-implications">Some policy
implications</h2>
<p>There is still a lot of work to do with this sort of model, but we
can already give some suggestions relevant for policy.</p>
<ul>
<li><p>Increasing compute prices (or otherwise making AI progress more
difficult) may be helpful if we are worried about safety keeping pace
with capabilities/performance.</p></li>
<li><p>Policies that bring actors into closer competition are likely bad
for safety. Backing a single, dominant actor may be better.</p></li>
<li><p>Subsidizing an actor may have an unforeseen negative effect on
safety if competitors respond by taking on more risk to catch up.
Providing subsidies to an actor tends to be helpful only when they
already have an advantage and/or their competitors are very unconcerned
about disaster.</p></li>
</ul>
<p>As a general observation, simply changing prices for one or more
actors does not come across as an especially promising way to improve
safety. Providing subsidies/taxes conditional on actors’ strategies
(e.g., giving a discount to actors who pass a safety audit) is probably
much better – we are currently looking more into this sort of
intervention.</p>