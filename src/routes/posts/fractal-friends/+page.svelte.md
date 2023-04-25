<script lang="ts">
    import Figure from "$lib/components/Figure.svelte";
    import 'prism-themes/themes/prism-one-light.min.css';
    import mandelbrot_src from "$lib/img/fractal-friends/mandelbrot.png";
    import julia_src from "$lib/img/fractal-friends/julia.png";
</script>

<!-- DATE: 2023-04-25 -->
<!-- TAGS: programming, math -->
# Fractal friends

Continuing with my theme of making every hobby programming project I do have some relation to the Mandelbrot set, I recently whipped up a fun little app that allows you to explore the Mandelbrot set's associated Julia sets.

<!-- ENDPREVIEW -->

You can check the app out [here](https://quevivasbien.github.io/fractal-friends/) or keep reading if you want to understand what's going on first.

## Some math for those interested

### The Mandelbrot set

The Mandelbrot set is defined as the set of complex numbers $c$ such that the sequence
$$\begin{align*}
    z_0 &= c \\
    z_1 &= z_0^2 + c \\
    z_2 &= z_1^2 + c \\
    &\ \ \vdots \\
    z_n &= z_{n-1}^2 + c \\
    &\ \ \vdots
\end{align*}$$

does *not* diverge. Roughly put, a point is in the Mandelbrot set if we can continue squaring it and adding the original value forever without it getting arbitrarily large. We can generate images of the Mandelbrot set by giving assigning each pixel a complex value based on its x and y coordinates. (Typically, we'll have x coordinates represent the real part, and the y coordinates represent the imaginary part, so the pixel at position $(x, y)$ would represent the complex number $x + yi$, where $i$ is the imaginary unit, $\sqrt{-1}$.) We can then assign colors to each pixel depending on whether they are or aren't inside the set.

In practice, we set some maximum number of iterations for each point, which we can call $n_\text{max}$. We can take advantage of the fact that the $\{z_n\}$ sequence always diverges if there is any point $z_n$ with $\|z_n\| > 2$, and assume that a point belongs to the set if its corresponding sequence hasn't gone outside that limit after $n_\text{max}$ iterations (i.e., if $\forall n \leq n_\text{max}, \|z_n\| \leq 2$). We can then even create a gradient of colors outside the set based on how many iterations it takes until we get a value bigger than 2. (Of course, this won't be 100% accurate for any finite $n_\text{max}$, but we don't have infinite computing power to check iterations until the end of time, so we have to make do with checking finitely many iterations.)

Here's some code we can use to check each point (adapted from [here](https://github.com/quevivasbien/fractal-friends/blob/master/src/lib/Mandelbrot.ts)):
```ts
mandelbrotIteration(c: Complex) {
    let z = c;
    for (let i = 0; i < this.maxIterations; i++) {
        z = z.mul(z).add(c);
        if (z.abs() > 2) {
            return i / this.maxIterations;
        }
    }
    return 1;
}
```

<Figure src={mandelbrot_src} caption="The central, white, region in this image is the interior of the Mandelbrot set." />

### Julia sets

Given some function $f$ that maps complex numbers onto other complex numbers (and satisfies some other technical requirements), we can define a set of complex numbers $z$ such that the sequence
$$\begin{align*}
    z_0 &= z \\
    z_1 &= f(z_0) \\
    z_2 &= f(z_1) \\
    &\ \ \vdots \\
    z_{n} &= f(z_{n-1}) \\
    &\ \ \vdots
\end{align*}$$

does not diverge.

The Julia set for $f$ is the *boundary* of this set.

Here, we're interested in the Julia sets based on functions of the form $f_c(z) = z^2 + c$, which, you may notice, is the same as the function used to define the Mandelbrot set. The difference here is that, when generating the Mandelbrot set, the number $c$ that we add at each step is different for each point in the set (and equal to the starting value of the iteration), whereas when we generate these Julia sets, we add the same number $c$ regardless of the starting value of our iteration. That is, every number $c$ in the complex plane generates its own Julia set.

The code below shows an iteration we could use to render the Julia set for $f_c(z)$ (adapted from [here](https://github.com/quevivasbien/fractal-friends/blob/master/src/lib/Julia.ts)).
```ts
juliaIteration(z: Complex) {
    for (let i = 0; i < this.maxIterations; i++) {
        z = z.mul(z).add(this.c as Complex);
        if (z.abs() > 2) {
            return i / this.maxIterations;
        }
    }
    return 1;
}
```
Notice that the value $c$ we add at each iteration is independent of the starting value $z$. This means that each point in the Mandelbrot set has its own associated Julia set. In fact, the Julia set for $f_c(z) = z^2 + c$ will be nonempty if and only if $c$ is within the Mandelbrot set.

The app I created allows you to explore the relationship between the position of these $c$ points in the Mandelbrot set and their associated Julia sets. Check it out [here](https://quevivasbien.github.io/fractal-friends/).

<Figure src={julia_src} caption="A rendering of the Julia set for the function f(z)=z²+c
 with c = 0.27 - 0.56i. The Julia set is technically the boundary of the central white region." />