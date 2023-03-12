<script lang="ts">
    import { base } from "$app/paths";
</script>

<!-- TAGS: ai, econ -->
<!-- DATE: 2022-07 -->
# An economic model for AI governance

*This is the first section in a series on modeling AI governance.*

The goal here is to formulate a basic economic framework for thinking
about problems in AI governance. This framework should be general enough
to cover the most concerning ways in which AI could be harmful. The
emphasis here will be on the *governance* of AI technology, rather than
on the technical aspects of AI safety -- that is, the goal is to think
about how the organizations developing AI should be
regulated/incentivized, rather than the specifics of what those
organizations should be doing.

A model for AI governance should encapsulate the relationship between
the public, the organizations creating the AI (the "managers"), and the
AI itself. To be able to capture the ways in which things could go awry
from the perspective of the public, we need to allow the AI's objective
to be imperfectly aligned with the managers' objective, which itself may
be imperfectly aligned with the public's objective -- problems can arise
due to misalignment on either of these levels. One way to formalize this
is with the model presented here.

<!-- ENDPREVIEW -->

## Interactions between managers and the AI

We suppose that the AI is programmed to create some good $x$, which we call the "true objective." If the AI is not perfectly
aligned, then we suppose that the manager can only specify a "proxy
objective" $\hat x$ for the AI, which is related
to $x$ via an "alignment distribution"
$$x \sim \xi(\hat x).$$
In the general case, the outcome
$x$ is a random variable, reflecting the manager's
uncertainty about what the AI will do given some instructions -- this
captures the idea that the manager may not fully understand the AI or
may be unable to exactly specify the true objective. In some cases, we
might assume that $x$ is a deterministic function
of $\hat x$, in which cases we may write $x =
\xi(\hat x)$. In the case of perfect alignment, we
have $\xi(\hat x) = x$.

We assume that the manager receives a benefit $\rho(x)$ from a given level of realized $x$ and
faces a cost $c(\hat x)$ for training/hosting the
AI with proxy objective $\hat x$. The manager's
goal is therefore to choose $\hat x$ to maximize
$$\mathbb E[\rho(x) | \hat x] - c(\hat x).$$

## Interactions between managers and the public

Sometimes, we will be interested in considering just the manager's
problem; however, to analyze many questions relevant to AI governance,
we will also want to consider the public's well-being. To do this, we'll
suppose that the public gains a utility $u(x)$ from
a realized value $x$.

We'll frequently be interested in cases where the public (or a
representative for the public) pays the manager for $x$ according to a transfer schedule $t(x)$.
In these cases, we'll generally suppose that $\rho(x) =
t(x)$; i.e., the public's payment to the manager is
what incentivizes the manager to produce $x$. If
the public chooses $t$, then the public's problem
is to choose the $t$ that maximizes
$$\mathbb E[u(x) - t(x) | \hat x]$$
subject to
$$\hat x = \text{argmax}_{\hat x} \left\{ \mathbb E[t(x)| \hat x] - c(\hat x) \right\}.$$
(We've implicitly assumed
here that the public and manager have the same beliefs/information about
$\xi$, which is clearly not true in some important
cases. We'll consider this in more depth later.)

If the manager chooses $t$, then they simply choose
it along with $\hat x$ to maximize their payoff
subject to some constraint on the minimum payoff that the public is
willing to accept.

## Key features

There are, of course, a lot of specific assumptions we could make to
specialize the model for specific scenarios, but even the basic
structure here gets us a long way. The important features are that (1)
we have two parties -- the public and the manager(s) -- who have
different incentives and each want to maximize their payoffs and (2) the
manager has direct control only over a proxy objective, and the way in
which that objective translates into the manager's true objective may be
uncertain. Note that without the second feature, this would be a
relatively standard control theory problem.

------------------------------------------------------------------------

In the [next section]({base}/posts/ai-gov-series-2-simple-harms/), we'll see
how this model may be applied to some potential harms of AI.