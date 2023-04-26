<script lang="ts">
</script>

<!-- DATE: 2023-04-26 -->
<!-- TAGS: programming -->
# Making a multiplayer game with SvelteKit & Firebase

A few months back, I created a [CLI clone](https://github.com/quevivasbien/boggle) of the Boggle word game. This was originally just a toy project I wrote on a weekend to try out some Rust crates for CLIs, but I wanted to return to this idea and see if I could make a browser-based version where multiple players could compete to find words.

I chose to use SvelteKit for this, since I've found Svelte to be a very friendly web framework. I hadn't previously made any non-static web apps with Svelte, so I also figured this would be good chance to try out some of SvelteKit's server-side features. I originally intended to build the project with [SvelteKit's Node adapter](https://kit.svelte.dev/docs/adapter-node) and host it on an AWS server along with my own database, though after a great deal of fiddling I realized I could accomplish the same objective with much less hassle using Firebase's [realtime database](https://firebase.google.com/docs/database). I also ended up hosting the app on Vercel, instead of GitHub Pages like I have in the past, in order to make use of some of SvelteKit's SSR features (which are helpful for dynamic page routing).

<!-- ENDPREVIEW -->

The latest version is playable [here](https://wiggle-game.vercel.app). You can check out the code on [GitHub](https://github.com/quevivasbien/wiggle).
