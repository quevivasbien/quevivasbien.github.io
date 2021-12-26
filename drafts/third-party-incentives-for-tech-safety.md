# Third-party incentives for safety in technology

## The model

Suppose that $N$ agents make tradeoffs between safety, $s \in [0, 1]$, and performance, $p > 0$, in the development of a new technology. Each agent $i$ faces an independent probability $1 - s_i$ that their efforts will cause a disaster. If a disaster occurs, then each agent pays a cost $d_i$; otherwise, they get an expected reward, $r_i(p_i, p_{-i})$ corresponding to their performance and the performances of their competitors. The expected payoff for agent $i$ is therefore
$$\left( \prod_j s_j \right) r_i(p_i, p_{-i}) - \left( 1 - \prod_j s_j \right)d_i.$$

We assume that the reward $r_i$ is increasing and concave in $p_i$. In addition, each agent faces a cost of $C_i(s_i, p_i)$, which we assume to be nonnegative, increasing in both $s_i$ and $p$, and convex (with all positive second derivatives).

Therefore, in a Nash equilibrium, each agent chooses $s_i$ and $p_i$ to maximize
$$\left( \prod_j s_j \right) r_i(p_i, p_{-i}) - \left( 1 - \prod_j s_j \right)d_i - C_i(s_i, p_i),$$
subject to the choices of the other agents. If the reward and cost functions are differentiable and we have an interior solution (which should be the case if $C \rightarrow \infty$ as $s \rightarrow 1$), then the following first-order conditions hold for all $i$:

$$\begin{equation}
\left( \prod_{j \neq i} s_j \right) \left( r_i(p_i, p_{-i}) + d_i \right) = \frac{\partial C_i}{\partial s_i} (s_i, p_i)
\end{equation}$$
$$\begin{equation}
\left( \prod_j s_j \right) \frac{\partial r_i}{\partial p_i}(p_i, p_{-i}) = \frac{\partial C_i}{\partial p_i} (s_i, p_i)
\end{equation}$$

We can glean some useful insights just from the conditions above. From condition (1) in particular, we can see that factors that increase an agent's investment in safety include:

* Other agents investing in safety. This implies that safety may be subject to a collective action problem, where investing in safety is not worthwhile unless other agents are already investing in safety. It could also work the other way around, where agents may want to free ride on the safety investments of others.
* Greater reward in the absence of disaster. If $r_i$ is increasing in $p_i$, then higher performance incentivizes more safety, all else equal.
* Greater cost of disaster. Agents that have more to lose from disaster will spend more on safety.

## Opportunity for third-party intervention

Notice that the safety decisions of each agent affect all the other agents, so safety is a positive externality and will be undersupplied. This makes it worthwhile to consider actions that could be taken by a third party to increase equilibrium safety.

To make the scenario concrete, suppose that agents are competing to develop machine learning systems, and there is a third-party input to performance -- say, a supplier of AI accelerator chips -- with an interest in increasing safety. The third party supplier is considering charging higher prices to agents that it considers to be unsafe; in the context of the model above, it wants to increase $\partial C_i / \partial p_i$ for agents with low $s_i$. What will be the outcome of this intervention?

For now, let's look at the case where there is only one agent to get an intuition for what matters in a basic setting before we complicate things again. With one agent, conditions (1) and (2) become

$$\begin{equation}
r(p) + d = \frac{\partial C}{\partial s}(s, p)
\end{equation}$$
and
$$\begin{equation}
s\frac{\partial r}{\partial p}(p) = \frac{\partial C}{\partial p}(s, p).
\end{equation}$$

We can analyze this as a comparative statics problem. [SOME DIAGRAMS WOULD BE VERY HELPFUL HERE.] We assume that the third-party's intervention increases the right side of equation (4); therefore, the left side of (4) must increase. To see what combinations of changes in $s$ and $p$ are acceptable, we can look at equation (3): the left side of (3) is increasing in $p$, and -- assuming that the intervention doesn't change $\partial^2 C / \partial s^2$ or $\partial^2 C / \partial s \partial p$ -- the right side is increasing in both $s$ and $p$. If
$$\begin{equation}
\frac{\partial r}{\partial p}(p) < \frac{\partial^2 C}{\partial s \partial p}(s, p)
\end{equation}$$
then any change in $s$ must be accompanied by an opposite change in $p$. Otherwise, $s$ and $p$ will move together.

Let's first take the case where $s$ and $p$ move in opposite directions. If $p$ increases, then the left side of (4) decreases, which is the wrong direction of what we want. Therefore, $s$ would have to increase substantially to make up for this; this is impossible, however, since we concluded that $s$ and $p$ must move in opposite directions. (And this is to say nothing of the fact that the right side of (4) is increasing in $s$ as well.) Therefore, $p$ must decrease, and $s$ must increase. This is good, since the goal of the intervention is to increase safety. 

Now let's consider the case where $s$ and $p$ move in the same direction. In this case, if $p$ increases, then we can make up for this by increasing $s$; however, since the right side of (4) is increasing in $s$, this can only balance out the equation if
$$\frac{\partial r}{\partial p}(p) \gg \frac{\partial^2 C}{\partial p \partial s}(s, p),$$
which contradicts the assumption that (5) is false. Therefore, if $p$ and $s$ move together, then they must both decrease. This is not what we want.

What is the main takeaway from the analysis so far? The key thing in this setup that determines whether safety increases or decreases is inequality (5). Although (5) arises out of a heavily-stylized model, it is actually saying something that is quite intuitive and should be generally helpful beyond the context of this model: the right side of the inequality tells us how the price of performance improvements changes as safety increases (or, equivalently, how the price of safety improvements changes as performance increases), while the left side tells us how much the agent values additional performance -- if it is costly to have high levels of both safety and performance, relative to the benefit received from performance, then the agent will be more likely to trade safety against performance when the cost of performance rises. (Note that the alternative here is to decrease both performance and safety, with the idea being that the hit to performance can be mitigated by taking a hit to safety.)

If we use equation (4) to substitute for $\partial r / \partial p$ in (5), we get the result that $s$ and $p$ will move in different directions in response to a performance cost increase if
$$\begin{equation}
\frac{1}{s} \frac{\partial C}{\partial p} < \frac{\partial^2 C}{\partial s \partial p}.
\end{equation}$$
This inequality is most helpful in the multi-agent case, as we'll see later, but it also helps us think of the problem from a different angle in this case. The cost of each additional unit of performance increases as safety increases; we can think of the left side of (6) as the average increase in the unit cost of performance for each unit of safety, and we can think of the right side of (6) as the increase in the unit cost of performance for the next unit of safety. (It's an average cost versus marginal cost comparison, although in this case, the "cost" is itself a marginal cost with respect to a different factor.) Inequality (6) is thus saying that if the next (marginal) unit of safety involves a greater than average increase in the marginal cost of performance, then safety and performance will move in opposite directions in response to the intervention. [wording here is confusing...]

Before moving onto the case with multiple agents, let's consider what happens if we change one of the assumptions made above: what if the cross derivative of costs is changed by the intervention? This seems quite likely since the intervention changes the price derivative. We assumed that $\partial^2 C / \partial s \partial p > 0$, meaning that improvements to performance are more expensive at higher levels of safety (and, under reasonable assumptions, improvements to safety are more expensive at higher levels of performance). How would we expect this to change if all improvements to performance become more expensive? Although we don't really know, it seems intuitive that if there is a change, it would probably be in the direction of an even higher cross derivative. This makes it more likely that (5) holds, putting us in the scenario where $p$ decreases and $s$ increases. Again, the story told by (5) is that we want the agent to prefer to trade performance for safety rather than decreasing both.

## The multi-agent case

The simplest case of the multi-agent case is the symmetric case (where all agents are identical). In this case, conditions (1) and (2) simply become
$$\begin{equation}
s^{N-1} \left( r(p) + d \right) = \frac{\partial C}{\partial s}(s, p)
\end{equation}$$
$$\begin{equation}
s^N \frac{\partial r}{\partial p}(p) = \frac{\partial C}{\partial p}(s, p)
\end{equation}$$

This leads to essentially the same dynamics as before, with the equivalent to inequality (5) being
$$s^{N-1} \frac{\partial r}{\partial p}(p) < \frac{\partial^2 C}{\partial s \partial p} (s, p).$$
The main difference here is that marginal reward of performance can be larger relative to the cost cross derivative than in the single agent case, since $s^{N-1} < 1$. This means that it should be easier to get agents to increase safety (though at the same time, it's harder to mitigate the risk of disaster since we now have $N$ possible failure points).

Now we can move on to the unsymmetric, multi-agent case as described by (1) and (2) in their general form. Here, the equivalent of inequality (5) is
$$\begin{equation}
\left( \prod_{j\neq i} s_j \right)(r(p_i, p_{-i}) + d_i) < \frac{\partial^2 C_i}{\partial s_i \partial p_i}(s_i, p_i).
\end{equation}$$
The story here is more or less the same as before but is complicated by the fact that each agent's reaction to the intervention depends on the reactions of the other agents. Here, inequality (6) becomes helpful, since it provides an equivalent condition to (9) that still holds in the multi-agent case and depends only on the safety and performance of a single agent: if
$$\frac{1}{s_i}\frac{\partial C_i}{\partial p_i} < \frac{\partial^2 C_i}{\partial s_i \partial p_i},$$
then agent $i$ will respond to the intervention by changing $s_i$ and $p_i$ in opposite directions. If the intervention increases $\partial C_i / \partial p_i$, then this means that $p_i$ will decrease, and $s_i$ will increase. As explained earlier, we can interpret this condition as saying that the agent's key consideration is whether the marginal impact of safety on the unit performance cost is greater than the average impact of safety on that cost.

## Takeaways

[For the intervention to work, cross derivative should be high relative to marginal benefit of performance. Equivalently cross derivative should be high relative to safety-averaged marginal cost of performance. Explain what that translates to intuitively.]