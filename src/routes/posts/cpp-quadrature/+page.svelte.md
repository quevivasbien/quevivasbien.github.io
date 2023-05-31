<script lang="ts">
</script>

<!-- TAGS: math, programming -->

<!-- DATE: 2023-05-31 -->

# Numerical integration from scratch in C&#43;&#43;

<!-- ENDPREVIEW -->

## Setting up the problem

Let's suppose that we have the integral
$$
\int_a^b f(x) dx.
$$

The naive approach, which is typically taught in introductory calculus classes, is to pick some step size $h$ and divide the interval $[a, b]$ into subintervals of size $h$, giving us points
$$
x_0 = a,\ x_1 = a + h,\ \dots,\ x_n = x_{n-1}+h,\ \dots,\ x_N = b
$$

Then, we can approximate the integral within each subinterval with something like the midpoint rule,
$$
\int_{x_{n-1}}^{x_n} f(x) dx \approx hf\left(\frac{x_{n-1} + x_n}{2}\right)
$$

or the trapezoidal rule,
$$
\int_{x_{n-1}}^{x_n} f(x) dx \approx \frac{h}{2} (f(x_{n-1}) + f(x_n)).
$$

Here's a simple implementation of the midpoint rule:

```cpp
// integrate function f on [a, b] with midpoint rule and step size h 
template <typename Function>
double integrate_midpoint(Function&& f, double a, double b, double h) {
    double result = 0;
    double x0 = a;
    while (x0 < b) {
        // set subinterval endpoint
        double x1 = x0 + h;
        if (x1 > b) {
            x1 = b;
            h = b - x0;
        }
        // add midpoint, scaled by h
        result += h * f((x0 + x1) / 2.0);
        // move forward
        x0 = x1;
    }
    return result;
}
```

Each of these methods will have some amount of error associated with them. That error will be smaller if we use a smaller subinterval size $h$, but it would be nice to be able to be able to bound the error more directly.

## How to get arbitrarily low error?

Let's suppose that we have some level of error, $\epsilon$, that we can tolerate. That is, if $S_n$ is our approximation (computed with something like the midpoint or trapezoidal rule), then we want to ensure that

$$
\left| \int_a^b f(x) dx - S_n \right| < \epsilon.
$$

Here's one algorithm we could use to come up with a suitable approximation.

1. Start with an arbitrary step size $h$.
2. Estimate the error for $S_n$ with a stepsize of $h$
3. If the error is low enough, accept the approximation $S_n$. Otherwise, choose a smaller $h$, and go back to step 2.

The tricky part here is in step 2: how do we determine the error of a given approximation?

## Calculating error for adaptive step sizes

There is one more modification we can make here: depending on how volatile the function is in different parts of its domain, it might make sense to use different step sizes in different parts of the interval $[a, b]$. From here on, we'll use the notation $h_n$ to denote the size of the nth subinterval ($h_n = x_n - x_{n-1}$), and we'll call $I_n$ the integral over that subinterval:
$$
I_n = \int_{x_{n-1}}^{x_n} f(x) dx
$$

Let's see if we can get an estimate for the error in a given subinterval, starting with the trapezoidal rule. We want to figure out the error introduced in the nth block,
$$
I_n - T_n := \int_{x_{n-1}}^{x_n} f(x) dx - \frac{h_n}{2} (f(x_{n-1}) + f(x_n)).
$$

The trick is to take the Taylor series approximation of this, which gives us
$$
I_n - T_n = -\frac{h_n^3}{12} f''(x_{n-1}) + \text{higher-order terms}.
$$

This tells us how quickly the error will diminish as we decrease the step size (it scales with $h_n^3$), but we still don't have an exact error estimate, since this depends on the value of $f''(x_{n-1})$.

However, if we do the same thing with the midpoint approximation:
$$
I_n - M_n := \int_{x_{n-1}}^{x_n} f(x) dx - h_n f\left( \frac{x_{n-1} + x_n}{2} \right),
$$
we get
$$
I_n - M_n = \frac{h_n^3}{24} f''(x_{n-1}) + \text{higher-order terms}.
$$

The thing to notice is that
$$
T_n - M_n = (I_n - M_n) - (I_n - T_n) \approx \frac{h_n^3}{24} + \frac{h_n^3}{12} = \frac{3h_n^3}{24} \approx 3(I_n - M_n).
$$

This means that we can use the difference between the trapezoidal and midpoint approximations as an estimate for the error of the midpoint approximation! Specifically, $\frac{1}{3} (T_n - M_n)$ is a third-order approximation for the error $I_n - M_n$.

We can also use this to figure out how big of a step size we should use in order to get a desired amount of error.

The error we have is $\epsilon_n \approx h_n^3 / 24$, and if we want to get some target error $\hat \epsilon_n$, we should instead choose $\hat h_n$ so that $\hat \epsilon_n \approx \hat h_n^3 / 24$.

This gives us
$$
\frac{\hat \epsilon_n}{\epsilon_n} \approx \left( \frac{\hat h_n}{h_n} \right)^3
$$

Therefore, we can choose the new step size as
$$
\hat h_n \approx h_n \left( \frac{\hat \epsilon_n }{\epsilon} \right)^{1/3}.
$$

This gives us a method for *adaptive quadrature* with global error $\epsilon$:

1. Start with a step size $h_n$.
2. Let $x_n = x_{n-1}+h_n$, and compute the triangle rule $T_n$ and midpoint rule $M_n$ approximations on the interval $[x_{n-1}, x_n]$.
3. Estimate the error of the $M_n$ approximation as $\epsilon_n = \frac{1}{3} (I_n - M_n)$.
4. The desired error is $\hat \epsilon_n = \hat h \epsilon / (b - a)$. If $\epsilon_n \leq \hat \epsilon_n$, then we accept the step size $h_n$ and the approximation $M_n$. Otherwise, we choose a new step size $\hat h_n = h_n [\hat\epsilon / \epsilon]^{1/3}$ and go back to step 2.

Here's a basic implementation in code:

```cpp
// integrate function f on [a, b] with midpoint rule and adaptive step size
// error param is desired global error bound
double integrate_adaptive(Function&& f, double a, double b, double error) {
    double result = 0;
    double x0 = a;
    double h = b - a;
    while (x0 < b) {
        // set subinterval endpoint
        double x1 = x0 + h;
        if (x1 > b) {
            x1 = b;
            h = b - x0;
        }
        // calculate midpoint and trapezoidal approximations
        double mn = h * f((x0 + x1) / 2.0);
        double tn = h * (f(x0) + f(x1)) / 2.0;
        // compute estimated error of mn, compare to target
        double error_target = error * h / (b - a);
        double error_est = abs(tn - mn) / 3.0;
        if (error_est < error_target) {
            // accept approximation and move on
            result += mn;
            x0 = x1;
        }
        // choose new step size
        h *= 0.9 * pow(error_target / error_est, 1.0 / 3.0);
    }
    return result;
}
```
