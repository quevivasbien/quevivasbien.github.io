<!-- TAGS: ai, econ -->
<!-- DATE: 2023-03 -->
# Roles for third parties in promoting safe AI innovation

*This is a summary of a paper I have been working on with Robert Trager and Nicholas Emery-Xu. Feel free to reach out for the full version.*

This paper builds on [our previous work](https://arxiv.org/pdf/2302.11436.pdf), where
we introduced a model where innovators compete to be the first to
develop advanced AI technology, allocating resources between safety and
performance research. In that paper, we made some observations on how
changes in compute pricing affect safety. Here, we suggest and evaluate
a few other ways that third parties could promote safer strategies on
the part of AI innovators.

The basic interventions we look at are:

1. Providing subsidies that can be used only for safety research
2. Providing subsidies only if innovators can certify they will meet a threshold level of safety
3. Penalizing innovators if they fail to meet a threshold level of safety

Roughly speaking, all of these interventions are better at promoting
safety than simply providing compute subsidies to be used at innovators’
discretion. The main takeaway is that interventions 2 and 3 can be significantly more effective (both in terms of cost and the resulting increase in safety) than intervention 1.

<!-- ENDPREVIEW -->

## Targeted subsidies for safety spending

Here, we consider the case where innovators receive discounted prices
for inputs to their safety research programs (and not to any programs
meant to improve performance/capabilities).

Key takeaways:

* If all innovators are roughly identical, subsidizing everyone’s safety spending always increases equilibrium safety.
* If innovators are not identical, or we offer different subsidies to different innovators, this intervention may not be as effective, or may be counterproductive, but it at least seems difficult to actively do harm.

## Subsidies contingent on safety certification

Here, we consider the case where a third party audits innovators’
spending plans; if their plans fulfill some threshold safety
requirement, they are certified safe and receive a subsidy on all their
spending.

Key takeaways:

* If the threshold safety requirement is too low or too high, this policy is ineffective (innovators will either qualify for the subsidy without changing their behavior or not bother qualifying since the requirements are too difficult to fulfill).
* If the threshold safety requirement is chosen appropriately (as high as possible while still being attractive to fulfill), this can be a very effective intervention.

<h3 id="an-important-clarification">An important clarification</h3>
This intervention is not the same as identifying actors who are
deemed to be <q>safer</q> than others and offering them subsidies: the
key difference is that here the subsidy is based on the level of safety
that will be achieved <em>after the fact</em>. That is, innovators only
qualify if they will achieve a safety target after being given the
subsidy. This avoids the potential problem of actors who are relatively
safe before being subsidized becoming less safe after being subsidized,
or less safety-conscious actors not selected for subsidies behaving
recklessly in reaction to their safety-conscious competitors recieving
subsidies.

## Penalties for safety violations

Here, we again consider a case where a third party audits innovators
and certifies them as safe (or not). However, in this case, there is no
subsidy for passing the audit; instead, innovators who fail are
penalized.

Key takeaways:

* This exhibits similar characteristics to the previous intervention (where certified innovators receive subsidies rather than escaping penalties).
* Ideally, in equilibrium, nobody pays the penalties, and all innovators act safely at no cost to third parties.

### Why would innovators agree to this?

An AI race may behave like a prisoner’s dilemma, where everyone would
prefer to adopt safer strategies but won’t since defecting (taking a
riskier, high-performance, strategy) while everyone else is playing safe
destabilizes the equilibrium. Making defection more costly may therefore
be desirable to everyone if it makes the case where everyone plays
safely a stable equilibrium. (Innovators may actually prefer more severe
penalties if that is what it takes to ensure that their competitors
won’t defect.)
