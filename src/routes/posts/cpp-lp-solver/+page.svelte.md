<script lang="ts">
</script>

<!-- DATE: 2023-05-12 -->
<!-- TAGS: math, programming -->
# Linear programming from scratch in C&#43;&#43;

A linear programming problem is a type of problem commonly encountered in applied math. Roughly put, the goal is to maximize a linear function subject to linear constraints. <!-- HIDE --> In its canonical form, we want to choose a vector $x$ that maximizes the objective $c^T x$ (where $c$ is a given vector), subject to the constraints $A x \leq b$ ($A$ being a matrix, $b$ a vector, and the inequality being applied coordinatewise) and $x \geq 0$ (again, coordinatewise). <!-- ENDHIDE --> If you aren't familiar with this, it might be worth reading more about it on [Wikipedia](https://en.wikipedia.org/wiki/Linear_programming). Or not -- I don't know how you want to spend your time; maybe you should take a walk around your neighborhood instead.

<!-- ENDPREVIEW -->


To the reader who is still around, or perhaps has taken their walk and decided to come back and read this, I suppose I should inject here a bit of personal anecdote to enliven this otherwise drab report.

## The just-promised anecdote

In my first semester at the University of Utah, after transferring there to escape the opressive regime of the HCO, I took a numerical analysis class from a lovely German gentleman who I could describe as the personification of the absentminded professor trope. This man imbued upon me and my classmates the importance of never inverting matrices, staying away from singularities, and other such lessons. He also spent a great deal of time expounding in an increasingly arcane fashion upon the merits and mysteries of Bezier curves. He really loved Bezier curves.

At some point between discussing the condition numbers of matrices and the generalization of Bezier curves to higher dimensions, we touched upon numerical methods for linear programming. The common approach, as I was led to understand, is an algorithm known as the "simplex method." This is not, as luck would have it, a pernicious vector for herpes, but a clever strategy of crawling along the edges of the linear program's feasible region (that is, the space bounded by the constraints $Ax \leq b$ and $x \geq 0$ -- if you're at all attempting to follow along, you can think of this region as a sort of mathematical jewel, with flat faces joined by straight edges). The intrepid simplexer walks along the edges, from one vertex (point of the jewel, where two or more edges meet) to the next, deciding at each fork in the road simply to follow the path that brings him closer to his objective (i.e., the product $c^T x$). This algorithm was apparently conceived by a man named George while he was bored working for the Army Air Forces in World War II.

## Fast-forward several years

Naturally, I remember very little of what was taught in that class, though I do retain a disdain for inverting matrices, along with a confused fondness for Bezier curves. This amnesia extended also to the lesson we had on linear programming, leaving me only with the faint recollection that if I ever found myself in the situation where the Python package repository was not available, and I had to solve a linear programming problem, my best bet was something to do with a simplex.

To this date I have not yet found myself in a situation where the Python package repository was not available when I had to solve a linear programming problem. I have, however, had occasion to do that latter, that is, solve a linear programming problem or two, the most recent event being when I created [a nifty tool for finding correlated equilibria](https://github.com/quevivasbien/CorrelatedEquilibria.jl). (A correlated equilibrium is a type of game-theoretic equilibrium -- similar to Nash equilibrium -- that happens to be efficiently solved as a linear program.)

This refreshed for me my memory of the thereto-forgotten adventuring simplexer, so when I recently decided to refresh my knowledge of the arcane mysteries of Mr. Stroustrup and write me some good ol' C++, I understandably decided to take a stab implementing the simplex method. And, for extra fun, I decided not to bother with C++'s wonderful (read: horrid) package management ecosystem and write the underlying matrix library from scratch.

So [here is my tribute](https://github.com/quevivasbien/simplexer) to my German professor, to Bored George, and to the accursed Mr. Stroustrup. Is it elegant? Not particularly. Does it work? Barely. Have you really read this entire post? Apparently so -- or you've just skipped to the bottom, in which case I'd call you a filthy cheater, but to be honest I really can't blame you.