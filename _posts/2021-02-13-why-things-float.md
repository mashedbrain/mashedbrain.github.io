---
layout: post
title: "Why do things float ?"
libraries:
  - math
---
Many will say: *"Because of density!"*

It is true but with this explanation it's hard to understand — at an intuitive level — what's really going on, because there are a few issues:

1. It doesn't explain why less dense objects go up, as density does not have a direction
2. It doesn't work in space (or any [zero gravity](https://en.wikipedia.org/wiki/Weightlessness) environment)
3. We actually need the *average* density. Take a rubber duck, it floats on water even though rubber is denser than water. You can say that this is because the *average* density (which includes the air inside) of the rubber duck is less than the density of water, but we loose physical meaning and deeper understanding, even though it is mathematically true
4. Take a piece of [aluminium](https://en.wikipedia.org/wiki/Aluminium), it sinks in water. Melt it and re-form it in the shape of a [rowboat](https://en.wikipedia.org/wiki/Rowing). It will float. This is because density is a strange property for many real-world objects, like boats for example. What's the density of a boat ? It depends on its mass and volume, but what counts has its volume ? Does it change when the cabin is opened instead of closed ? When do you have to account for air ?

{% include svg.html src="boat_density.svg" %}

For these reasons we have to move away from density to achieve deeper understanding of the phenomena.

## Archimedes' principle

The "dense things sink" idea actually comes from [Archimedes' principle](https://en.wikipedia.org/wiki/Archimedes'_principle), which states:

<blockquote class="big no-border"><p>Any object, totally or partially immersed in a <a href="https://en.wikipedia.org/wiki/Fluid">fluid</a>, is buoyed up by a force equal to the <a href="https://en.wikipedia.org/wiki/Weight">weight</a> of the fluid <a href="https://en.wikipedia.org/wiki/Displacement_(fluid)">displaced</a> by the object.</p></blockquote>

{% include svg.html src="archimedes.svg" %}

The principle tells us that there is a force (called the *[buoyant force](https://en.wikipedia.org/wiki/Buoyancy)*) pointing upwards. We can now understand that there are 2 opposite forces acting on an object partially or fully immersed in a fluid: **weight** (due to gravity), and the **buoyant force** (or *buoyancy*). The buoyant force is present even if the object is sinking.

{% include svg.html src="buoyant_force.svg" %}

We can easily deduce a few things:

1. If an object floats (fully or partially immersed), then $$weight = buoyancy$$
2. If an object sinks, then $$weight > buoyancy$$
3. If an object rises, then $$weight < buoyancy$$

You can also think of the Archimedes' principle as a "gravitational battle" between the object and the displaced fluid, where the heavier one wins (sinks).

We should note that the *center of buoyancy* (where the buoyant force is exerted, same concept as the [center of gravity](https://en.wikipedia.org/wiki/Center_of_mass#Center_of_gravity)) does **not** match the center of gravity of the object, but is located at the center of gravity of the displaced fluid. [Here](https://physics.stackexchange.com/a/257168) is a good explanation:

<blockquote class="big"><p>Let us suppose we remove the object and fill the space left (in the  fluid) with the same fluid. Assume this portion of fluid become solid  without changing its volume or density. It will be in equilibrium with  the fluid. Now suppose the buoyancy force on this solidified portion is  off the center of mass. This would imply non vanishing resultant force  or torque and the solidified portion would not be in equilibrium. A kind of inverse argument can also be given. Suppose the center of buoyancy  coincides with the center of mass of an object immersed in a fluid. Then you would never observe resultant torque (by means of rotations) on any object. And that is empirically not true.<br><br>— <a href="https://physics.stackexchange.com/users/63097/diracology">Diracology</a></p></blockquote>

This is very important for [ship stability](https://en.wikipedia.org/wiki/Ship_stability). If you want your ship to be **stable**, you will design it so that its center of gravity is beneath its center of buoyancy, which will cause the ship to *"want"* to not be tilted. Here is an example of stable ship:

{% include svg.html src="ship_stability.svg" %}

As you can see, when the ship is tilted its weight and buoyancy will force it to go back to its stable position.

The next question should be obvious: What is the cause of the buoyant force ? Why does it exist ?

## Pressure distribution

Let's immerse a cube in a fluid, and think about the pressure exerted on its surface.

{% include svg.html src="cube_buoyancy.svg" %}

Everybody knows that pressure increases with depth, which mean that there is less pressure at the top of the cube than at the bottom. Forces on the sides are balanced (they cancel each other out, there is no net force on the horizontal direction). Therefore, the resultant force will point upwards. This is the buoyant force.

**Thought experiment**: From our explanation, it is necessary for some fluid to be located under the object so that it can exert a force upwards. Let's have a cube with perfectly flat faces that sinks in a fluid to touch the bottom of the perfectly flat container so that there is no fluid between them. Is there still a buoyant force ?

{% include svg.html src="buoyant_force_experiment.svg" %}

The answer is **no**, there is no upward buoyant force. The force is still there but it behaves differently: the cube is actually pushed downwards (in addition to its own weight) by the fluid above it. It would act like a [suction cup](https://en.wikipedia.org/wiki/Suction_cup). It might also be useful to think of the cube as part of the container.

Why is there a pressure gradient in the first place ?

## Vertical pressure gradients

This is very intuitive, pressure increases with depth because the pressure of a horizontal cross-section of fluid is due to the weight of the fluid above it. You can think about it with a column of water:

{% include svg.html src="pressure_gradient.svg" %}

<p style="text-align: center"><i class="light-color">Note: there is no need to consider the cross-section's area because it is equal to 1m²</i></p>

It's why things don't float in [zero gravity](https://en.wikipedia.org/wiki/Weightlessness), there is no weight so the fluid has no pressure gradient. Therefore, the same pressure is exerted on every side of the object. For things to float, you need [gravity](https://en.wikipedia.org/wiki/Gravity) (or more generally, a [reference frame](https://en.wikipedia.org/wiki/Frame_of_reference) under [acceleration](https://en.wikipedia.org/wiki/Acceleration)).

Something interesting to note is that pressure increases *almost* linearly in water, but exponentially in the atmosphere. How can this be possible ?

The key difference between water and air is their [compressibility](https://en.wikipedia.org/wiki/Compressibility) — how much their volume changes when pressure is exerted. The pressure of water increases with depth at an impressive rate (around 1 [bar](https://en.wikipedia.org/wiki/Bar_(unit)) each 10 meters), but its density hardly changes. This is why we say that water is *almost [incompressible](https://en.wikipedia.org/wiki/Compressibility)*. Here is the data for seawater at 0 °C (*[source](https://www.britannica.com/science/seawater/Density-of-seawater-and-pressure)*):

| depth (m) | pressure (decibars)<br><small>*not including atmospheric pressure*</small> | density (g/cm³) |
| --------- | ------------------------------------------------------------ | --------------- |
| 0         | $$\approx$$0                                                 | 1.02813         |
| 1 000     | $$\approx$$1 000                                             | 1.03285         |
| 2 000     | $$\approx$$2 000                                             | 1.03747         |
| 4 000     | $$\approx$$4 000                                             | 1.04640         |
| 6 000     | $$\approx$$6 000                                             | 1.05495         |
| 8 000     | $$\approx$$8 000                                             | 1.06315         |
| 10 000    | $$\approx$$10 000                                            | 1.07104         |

The density of seawater at the bottom of the deepest part of the ocean is only [increased by 5%](https://en.wikipedia.org/wiki/Mariana_Trench) even though the pressure there is around 1000 times [standard atmospheric pressure](https://en.wikipedia.org/wiki/Standard_atmosphere_(unit)).

Let's visualize this with a bunch of molecules:

{% include svg.html src="density_change.svg" %}

This means that as you get to a lower altitude in the atmosphere, the weight doesn't just increase because there is a higher column of air above it, it also changes because there are more molecules per volume (i.e. it's denser). [Learn more about this here.](https://physics.stackexchange.com/a/392447)

---

The reason things float is all about **weight**: weight of the object, weight of the displaced fluid, weight of the column of fluid.

And I think those are beautiful ideas.

