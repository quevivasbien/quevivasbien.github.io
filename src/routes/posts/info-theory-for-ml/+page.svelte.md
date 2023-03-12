<!-- TAGS: ai, math -->
<!-- DATE: 2021-12 -->
# Information theory for machine learning

Why is it that courses on machine learning tend to start by covering
some basic concepts from information theory? This post is a short
explainer of why information theory is relevant to the formal study of
machine learning.

## Machine learning as model-fitting

If we want to get anywhere, we need to start with a solid concept of
what “machine learning” actually means. Basically, we want a computer to
be able to process and utilize complicated patterns in data. This is, of
course, what we do whenever we fit a statistical model to data, and it
turns out that the sorts of algorithms used for machine learning are
really just complicated statistical models: neural networks, for
example, are in their simplest form a set of linear regressions stacked
on top of each other.

Let’s make this more explicit: a machine learning model is a highly
flexible statistical model – it has many parameters, which allow it to
fit a variety of statistical distributions. When we train a machine
learning model, we are finding the parameters of the model that make the
model approximate the training data as closely as possible. (Note that
by statistical model, we mean a description of a probability
distribution, e.g., a specification of a probability density function.)

<!-- ENDPREVIEW -->

In a typical case, we have a data distribution $X$ with labels $Y$, related with a conditional
distribution $P_{Y|X}$. If we want
to create a model that predicts labels from data, we introduce a model
$\hat P_{Y|X; \theta}$, and
choose the parameters $\theta$ to
make $\hat P_{Y|X; \theta}$ as
close as possible to $P_{Y|X}$.

## Entropy

The natural question, of course, is what it means for one distribution
to be “as close as possible” to another distribution. This is where
information theory starts showing its usefulness. Intuitively, two
distributions are “close” if they convey similar information, i.e., if
sampling from one allows us to learn more or less the same thing as
sampling from the other. This suggests that the metric we can use to
measure distributional “closeness” should be something related to
information content.

And now the concept of *entropy* enters the stage. The entropy of a
distribution is a measure of how much information the distribution
contains – high-entropy distributions contain little information, and
low-entropy distributions contain lots of information. Formally, the
entropy of a random variable $X$
with p.d.f. $p_X$ is $$H(X) = - \mathbb E[\log p_X(X)].$$
We don’t typically talk about the information content of statistical
distributions, so this concept can seem a bit mysterious at first, and
it’s worth thinking about what entropy really means in a statistical
context. It may be helpful to think in terms of how “predictable” a
distribution is: highly “predictable” distributions have low entropy,
while “unpredictable” distributions have high entropy. A distribution
that takes only a few values with regular probabilities is “predictable”
and therefore will have low entropy, while a distribution that can take
many values with non-neglible probabilties is “unpredictable” and will
have relatively high entropy.

## Conditional entropy

What if we want to describe how much one distribution gives about
another? Here there are a few different concepts that we can make use
of. First, we have *conditional entropy*. Formally, conditional entropy
is defined as
$$H(Y|X) = -\mathbb E[\log
p_{Y|X}(Y|X)].$$
Since
$$p_{Y|X}(y|x) = \frac{p_{X,Y}(x,
y)}{p_X(x)},$$
we can decompose conditional entropy of $Y|X$ into the difference of the
entropies of the joint distribution of $X$ and $Y$ and of $X$ alone:
$$H(Y|X) = H([X, Y]) - H(X)$$
Intutively, conditional entropy tells us how predictable $Y$ is, given that we already know $X$. As an example, suppose that $X$ describes the outcome of the roll of
a die, and $Y$ describes whether
the same die roll is even or odd. If we know $X$, then we also know $Y$, i.e., $Y$ is completely predictable given $X$; therefore, $H(Y|X)$ is as low as possible. On the
other hand, if $X$ gives us no
information about $Y$, then $H(Y|X) = H(Y)$.

Conditional entropy is useful for thinking about the relationship
between distributions, but only in situations where we know the joint
distribution of the random variables involved. That is, if we have some
model $p_{X, Y}$ for the joint
distribution of $X$ and $Y$, then we can use conditional entropy
to think about how much information $X$ gives about $Y$ and vice versa. However, if the goal
is instead to compare alternative models for the same data, we need a
different tool. This is where *cross-entropy* comes in, which is a key
concept in machine learning.

## Cross-entropy

Here we return to the canonical example presented in the first section:
we have data $X$ with labels $Y$, with a conditional distribution
described by $P_{Y|X}$, and we
want to find parameters $\theta$
so that our model $\hat
P_{X|Y;\theta}$ is “as close as possible” to $P_{X|Y}$. The typical way we describe
this is with the cross-entropy
$$H(P, \hat
P) := -\mathbb E_{Y|X \sim P} [\hat P_{Y|X;
\theta}(Y|X)].$$
Notice that this is similar to the
definition of entropy, but here we are sampling from the population
distribution but using our model distribution inside the expectation.

(Also note that this is different from joint entropy, which I denoted by
$H([X, Y])$ earlier. Sometimes
people use the same notation for both, which can be confusing.)

Why is this useful? When we are doing machine learning, we don’t
actually know the form of the population distribution $P$ – that’s what we’re trying to figure
out – so we can’t plug anything into its p.d.f.; however, we can sample
from it by sampling from our training data. In training the model $\hat P$, we want to make $\hat P$ as informative as possible over
the data, so we choose $\theta$ to
minimize $H(P, \hat P)$.

You can check that $H(P, \hat P)$
is bounded below by $H(P)$ –
therefore, we often normalize cross-entropy by the entropy of the target
distribution to get a value called the Kullback-Leibler (KL) divergence:
$$D_{KL}(P, \hat P) := H(P, \hat P) -
H(P)$$
A KL divergence of zero indicates minimum cross entropy;
intuitively, our model fits the population distribution as well as
possible.

## Conclusion

In machine learning, our goal is typically to find a parameterized
distribution that fits the data as well as possible. We don’t know the
ideal distribution of the data, but using an information-theoretic value
like cross-entropy we can compare candidate models and say which is
closest to the ideal distribution (as reflected in training data). The
process of training is the process of exploring the parameter space to
find the best (closest to the population distribution) model.