<script lang="ts">
    import { base } from '$app/paths';
</script>

<!-- TAGS: ai, econ -->
<!-- DATE: 2022-07 -->
# Modeling some failure modes of AI

*This is the second section in a series on modeling AI governance. You
might want to start at the
[beginning]({base}/posts/ai-gov-series-1-intro/).*

In this section, we present some potential ways in which AI may cause
harm and show how we might fit these problems into [our model]({base}/posts/ai-gov-series-1-intro/).

The harms discussed here are all near-term harms in the sense that they
are currently occurring to some extent and may worsen within the next
few decades. These may not be the most significant harms in the big
picture, but they may translate to bigger problems in the long term, and
they're arguably easier to conceptualize so can be good for tuning our
thinking.

<!-- ENDPREVIEW -->

## Some potential harms

We'll start by discussing some broad classes of failure modes. In the
next subsection, we'll take a couple of more specific examples and show
how they can be modelled.

### Information degradation

One broad way that AI may cause harm in the near term is by degrading
the quality of information (particularly in online media) in a way that
is harmful to democratic processes or pushes people to make suboptimal
consumption decisions (in terms of what they purchase and how they spend
their time & attention).

This sort of thing is particularly visible in the case of online ad &
content recommendation. Major internet companies make money by
collecting information about their users and using that information to
give users targeted ads. This can become problematic when (1) use of
information constitutes a breach of privacy, and (2) ad recommendation
systems increase click-through rates not just by providing relevant ads
but by manipulating users' preferences and/or attention. Ad
recommendation is closely linked with the issue of content
recommendation -- also driven by AI: since more engagement with content
= more ads, and has been associated with "filter bubbles," spreading of
false information, proliferation of inflammatory content, etc. It seems
reasonable that more capable AI may increase these harms if implementers
don't take sufficient care.

### Labor market effects

If AI replaces human labor faster than it increases productivity, it can
constitute transfer of wealth away from laborers, which may be socially
undesirable. Even if labor's absolute share of income is not reduced,
automation causes holders of capital to have a larger *relative* share
of wealth (which some people may find problematic) and tends to cause at
least temporary unemployment as the labor market adjusts. Beyond their
economic undesirability, these changes may also be politically
destabilizing. AI may eventually obviate all human labor, which would
necessitate [a drastic change in economic
thinking](https://www.dropbox.com/s/ynfbi7280tedflp/NonexistentFuture.pdf?dl=0).

### Dependence for critical systems

If AI is used in critical systems (like the electricity grid,
production/shipping supply chains, or military infrastructure), they may
become vulnerable to disasters or hacking that compromise the AI's
integrity or force it to go offline. It might be prohibitively difficult
to ensure that AI systems don't have serious security vulnerabilities
and won't sometimes behave unpredictibly, making this potentially more
of a concern than with traditional computer systems (which is already a
big concern).

### Surveillance

AI could enable close surveillance, which, among other things, would be
a boon to totalitarian governments.

### Bad actors

AI can allow whoever has money to have outsized influences on others
since an AI trained for a given task can be replicated many times,
constrained only by the cost of hardware. This isn't inherently a
problem but could have very bad consequences if someone with antisocial
intentions has enough resources.

This is clearly concerning insofar as it enables violence: people could
buy drones to kill or otherwise harm others, enabling new types of
crime, terrorism, and warfare. In the past, people's capacity for
violence has been limited by their own physical strength and their
ability to recruit others; in the future, they may be limited only their
ability to purchase or build intelligent bots.

## Modeling examples

What follows are some examples of how the model framework can be used
for these types of harms. The idea here is not to derive any particular
results, but just to give some inspiration about how to adapt [our
model]({base}/posts/ai-gov-series-1-intro/) to these scenarios.

### Content recommendation

Let's assume first that the AI involved is not sufficiently advanced
that alignment with the manager is a big concern, so $x = \hat
x$. We'll let $x$ denote exposure
to content (including ads). If the manager/content provider behaves like
a monopoly (which is not so unrealistic; e.g., there is not strong
competitor to YouTube), then they simply set $t(x) = u(x)$, (charging consumers / advertisers the maximum they will pay
for a given amount of content & advertising) and set $x$ to maximize $u(x) - c(x)$.

There are lots of ways we can make this scenario more interesting. For
example, suppose a social planner wants to intervene to maximize the
users' welfare. Then the problem is to choose $t$
to maximize
$$u(x) - t(x)$$
subject to
$$x =
\text{argmax}_{x} \left \{ t(x) - c(x) \right \}$$
and
$$t(x) - c(x) \geq 0.$$

We could also assume, for example, that consumers differ in their
utilities $u$, or that multiple, possibly
different, content providers are competing for users.

Now let's assume that the AI is imperfectly aligned, so it recommends
content by achieving a proxy objective $\hat x$
that sometimes differs from the true objective $x$;
i.e., for some $\hat x$, $\hat x \neq
\xi(x)$. To make this concrete, let's suppose that
$$\xi(\hat x) = 1 - (x - \alpha)^2,$$
for some
constant $\alpha$, which the manager can choose
for some cost. This is an inverted parabola with its vertex at
$\alpha$; thus, the true objective is maximized at
$\hat x = \alpha$; the manager's payoff can be
increased either by moving $\hat x$ closer to
$\alpha$ (changing the AI's performance) or moving
$\alpha$ closer to a point with lower cost
(changing the AI's alignment). The social planner now chooses
$t$ to maximize
$$u(x) - t(x)$$
with
$$x = 1 - (\hat x - \alpha)^2$$
subject to
$$\hat x, \alpha = \text{argmax}_{\hat x,\ \alpha}
\left\{ t(\hat x) - c(\hat x; \alpha) \right\}.$$

Note that in this example, the manager knows how $x$ and $\hat x$ are related, so the
"alignment" problem here is really just a transformation of the
manager's cost function. Typically, we worry more about cases where the
proxy goal does not match the true goal, and the manager is either
unaware of this or how some uncertainty about the relationship between
the two. We'll look at an example of this below.

### Automation of labor

Let's suppose that we have some product whose production can be
partially automated, with the amount of automation represented here by
$x$.

We'll have laborers take the role of the "public" in this example.
Taking some inspiration from [Acemoglu and
Restrepo](https://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.33.2.3), we
know that automation is likely to be beneficial to workers only if it
increases productivity enough to offset the displacement effect of
automation. Therefore, if we assume that automation has decreasing
marginal productivity (so new automation becomes less productive at
higher levels), then laborers should have their welfare
$u(x)$ be concave in $x$,
reaching a maximum at a point that we'll call $x^*$ and decreasing thereafter.

Continuing the assumption of decreasing marginal productivity and
assuming also that the manager's cost of $x$ is not
concave, the manager's *net* cost $c(x)$ should be
convex, with a minimum at a point that we'll call
$x^\dagger$.

Consequently, with these assumptions, in the absence of transfers
between the laborers and the manager, laborers will prefer
$x^*$, and the manager will prefer
$x^\dagger$. If what we care about is the welfare
of the laborers, then we're probably worried about situations where the
manager can choose the level of automation, and $x^\dagger \neq
x^*$. In that case, the laborers (or someone acting
in their interest) may be willing to transfer some wealth to the manager
in order to shift $x$ -- the problem to be solved
is to choose $t$ to maximize
$$u(x) -
t(x)$$
subject to
$$\hat x =
\text{argmax}_x\{t(x) - c(x)\}.$$
You'll notice
that this is the same problem as in the content recomendation example
(although, of course, the variables/functions represent different things
here).

To explore how poor alignment might be a problem in this example, let's
suppose that the manager specifies the AI's proxy objective as something
like, "Automate as much of the production process as possible." The AI
might realize that if it increases its productivity, then the manager
will choose a higher level of automation, but it could achieve the same
result by simply automating more than the manager wants it to. If the AI
does this and the manager is unaware, then the manager will think that
they are choosing a level $\hat x$ of automation,
but actually $x \> \hat x$. The manager will then
choose a level of automation that is higher than the optimum; if
$x^\dagger < x^*$, then this is also bad for
the laborers. We could also suppose that the manager knows that the AI
will do this, but doesn't know by how much -- let's say that
$$x = \hat x + \delta$$
where $\delta$ is some nonnegative random variable. Then the manager chooses
$\hat x$ to maximize the expected value of
$t(\hat x + \delta) - c(\hat x + \delta)$ given
their prior on $\delta$. The manager should end up
better off than if they were unaware of the AI's manipulation but will
still be worse off than if they knew exactly what input $\hat
x$ to choose. The outcome also depends on the
information that the laborers have. For example, if the laborers (or
their representative that makes transfers for them) have the same
information about $\delta$ as the manager, the
transfer-choice problem is to choose $t$ to
maximize
$$\mathbb E[u(\hat x + \delta)-t(\hat x + \delta) |
\mathcal I]$$
subject to
$$\hat x =
\text{argmax}_{\hat x} \mathbb E[t(\hat x + \delta) - c(\hat x +
\delta) | \mathcal I],$$
where $\mathcal
I$ is the common information about
$\delta$.

------------------------------------------------------------------------

In the [next section]({base}/posts/ai-gov-series-3-s-p/),
we'll consider a formulation of this model meant to capture a tradeoff
between safety and performance.