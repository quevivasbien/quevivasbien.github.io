<script lang="ts">
    import Figure from "$lib/components/Figure.svelte";

    import fig1_110 from "$lib/img/non-euclidean-gravity/1-110.gif";
    import fig1110 from "$lib/img/non-euclidean-gravity/1110.gif";
    import fig2001 from "$lib/img/non-euclidean-gravity/2001.gif";
    import figl1 from "$lib/img/non-euclidean-gravity/l1.gif";
    import figl2 from "$lib/img/non-euclidean-gravity/l2.gif";
    import figl05 from "$lib/img/non-euclidean-gravity/l05.gif";
    import figlinf from "$lib/img/non-euclidean-gravity/linf.gif";
</script>

<!-- TAGS: math -->
<!-- DATE: 2020-08 -->
# Non-euclidean gravity

So I was reviewing linear algebra today and found myself asking the
question, "How would gravity work in a space with a different notion of
distance?"

<!-- ENDPREVIEW -->

In normal (Euclidean) space, distance is measured with the Euclidean
norm

$$\| x \| = \left( \sum x_i^2
\right)^{1/2}$$

so the distance between vectors *x* and *y* is

$$d(x, y)) = \| x - y \| = \left( \sum
(x_i - y_i)^2 \right)^{1/2}$$

If the points at *x* and *y* have mass *m<sub>x</sub>* and
*m<sub>y</sub>*, respectively, then Newton's law of gravity tells us
that the gravitational force with which *x* pulls on *y* is

$$\frac{G(x-y)m_x
m_y}{\|x-y\|^3}$$

where *G* is a special "gravitational constant."

I programmed in Python a basic simulation that calculated the force
acting on a particle moving near a much larger mass and then
experimented with changing the norm used to calculate the gravitational
force.

You can see the normal case below. The particle orbits the central mass
in an ellipse with the central mass at one of the foci just like we see
in the real world (hats off to Kepler). I've added in the background a
gradient that indicates where the central mass's gravitational force is
strongest (keep in mind that all force vectors point toward the center).
I've also added coloration to the path that the orbiting particle
traces, so it is more yellowish when it is moving quickly.

<Figure src={figl2} />

The first thing I tried was to use a different norm from the class of
p-norms. A p-norm has the form

$$\|x\|_p = \left( \sum x_i^p
\right)^{1/p}$$
for a given *p*. (You technically only get a
proper norm for *p ≥ 1*.) Notice that that Euclidean norm is just the
p-norm when *p = 2*. Below I've shown the same simulation with various
other values of *p*.


<Figure src={figl05} caption="p = 0.5" />

<Figure src={figl1} caption="p = 1" />

<Figure src={figlinf} caption="p = ∞" />

You can see that each of these behave strangely, since the gravitational
forces are concentrated in a sort of X-shaped pattern in each. This can
lead to some unstable behavior like the chaos that's going on in the
last image (I don't think that this was particular to *p = ∞*; I
probably could get something similar to happen in the first two by
changing the particle's initial position and velocity and the central
mass.)

------------------------------------------------------------------------

The next thing I tried was to experiment with norms induced by inner
products. The norm induced by an inner product is

$$\|x\|_{\langle \rangle} =
\sqrt{\langle x, x \rangle}$$

and the Euclidean norm is induced by the Euclidean inner product, or
"dot product,"

$$\langle x, y \rangle = x \cdot y =
\sum x_i y_i$$

For any positive-definite matrix *M*,

$$\langle x, y \rangle_M = x^T M
y$$

is a valid inner product. With this in mind, I was able to run my
simulation with norms induced by inner products generated from various
positive-definite matrices. You can see the results below.

<Figure src={fig1_110} caption="M = [ 2 -1 ; -1 1 ]" />

<Figure src={fig1110} caption="M = [ 2 1 ; 1 1 ]" />

<Figure src={fig2001} caption="M = [ 4 0 ; 0 1 ]" />

These didn't turn out to be quite as exciting as I thought they might
be, although they are still reasonably interesting: it looks like the
force field is simply transformed linearly, with the given
transformation having something to do with the matrix used to generate
the norm. The particles' orbits still appear to be ellipses, although
the center mass is no longer positioned at a focus of the ellipse. I can
see myself spending a lot of time figuring out what exactly is going on
here, but I've already spent way too much time on this for now, so that
will have to wait for another time.
