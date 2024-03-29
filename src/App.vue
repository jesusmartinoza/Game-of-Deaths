<template>
  <div id="app">

    <div class="header">
      <router-link to="/">
        <img id="logo" src="./assets/game_of_deaths.png" alt="Game of Deaths">
      </router-link>

      <router-link to="/stats">
        <button id="stats">Worlwide</button>
      </router-link>
    </div>

    <transition appear
      name="fade"
      mode="out-in">
        <router-view class="view"/>
    </transition>

    <!-- Background crossfade animation -->
    <div class="crossfade">
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
    </div>

  </div>
</template>

<script>
import FancyButton from './components/FancyButton.vue'

export default {
  created() {
    this.$store.dispatch('onAuthStateChanged');
  },

  components: {
    FancyButton
  },

  metaInfo: {
    // Children can override the title.
    title: 'Game of Deaths | GoT Final Season',
    // Define meta tags here.
    meta: [
      {vmid: "og:image", property: "og:image", content:"https://gameofdeaths.com/who_will_die_in_game_of_thrones.png"},
      {vmid: "og:image:type", property: "og:image:type", content:"image/png"},
      {vmid: "og:image:width", property: "og:image:width", content:"789"},
      {vmid: "og:image:height", property: "og:image:height", content:"454"},
      {vmid: "og:type", property: "og:type", content:"website"},
      {vmid: "og:title", property: "og:title", content:"Game of Deaths | Season 8"},
      {vmid: "og:description", property: "og:description", content:"Who will die in season 8 of Game of Thrones?"},
      {vmid: "twitter:card", name: "twitter:card", content:"summary"},
      {vmid: "twitter:site", name: "twitter:site", content:"@game_of_deaths"},
      {vmid: "twitter:creator", name: "twitter:creator", content:"@game_of_deaths"},
      {vmid: "twitter:title", name: "twitter:title", content:"Game of Deaths for Season 8 of GoT"},
      {vmid: "twitter:description", name: "twitter:description", content:"Who will die in season 8 of Game of Thrones?"},
      {vmid: "twitter:image", name: "twitter:image", content:"https://gameofdeaths.com/who_will_die_in_game_of_thrones.png"},
    ]
  }
}
</script>

<style scoped>
#stats {
  background: #0000;
  border-color: #FFB309;
  box-shadow: 0px 0 5px 0 #FFB309aa;
  color: #FFB309;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  height: 40px;
  padding: 8px 12px;
  position: absolute;
  right: 1em;
  transition: all .3s;
}

#stats:hover {
  background: #FFB309;
  color: #000;
}

.header {
  text-align: center;
}

@media screen and (max-width: 700px) {
  #stats {
    display: block;
    margin: auto;
    position: relative !important;
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Cinzel|Crimson+Text');

#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100%;
  margin-top: 60px;
  padding-bottom: 1em;
  width: 100%;
}

#logo {
  cursor: pointer;
  flex-grow: 8;
  margin-bottom: 2em;
  max-width: 400px;
  width: 85%;
}

.characters {
  align-items: center;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  -webkit-transition: opacity 1s, transform 500ms ease; /* Safari */
  transition: opacity 1s, transform 500ms ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(8px);
}

.glow-text {
  text-shadow: 0px 0px 4px #ffa8;
}

/** OCSS */
.margin-bottom {
  margin-bottom: 1em;
}

.margin-top {
  margin-top: 1em;
}

.hide {
  display: none;
}

.show {
  display: auto;
}

.social-btns {
 display: block;
 margin: auto;
 text-align: center;
}

body {
  background-color: #000;
}

body, .view {
  height: 100%;
}

html {
  min-height: 100%;
  position: relative;
}

#king-of-westeros {
  margin: auto;
  margin-top: 1.5em;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* Background animation
   ========================================================================== */
/**/
.crossfade > figure {
  animation: imageAnimation 75s linear 0s infinite;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100vh;
  left: 0px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: -9999;
}

.crossfade > figure:nth-child(1) { background-image: url('./assets/wallpapers/game_of_thrones_wallpaper.jpg'); }

.crossfade > figure:nth-child(2) {
  animation-delay: 15s;
  background-image: url('./assets/wallpapers/game_of_thrones_wallpaper_2.jpg');
}

.crossfade > figure:nth-child(3) {
  animation-delay: 30s;
  background-image: url('./assets/wallpapers/game_of_thrones_wallpaper_3.jpg');
}

.crossfade > figure:nth-child(4) {
  animation-delay: 45s;
  background-image: url('./assets/wallpapers/game_of_thrones_wallpaper_4.jpg');
}

.crossfade > figure:nth-child(5) {
  animation-delay: 60s;
  background-image: url('./assets/wallpapers/game_of_thrones_wallpaper_5.jpg');
}
@keyframes
imageAnimation {
 0% {
 animation-timing-function: ease-in;
 opacity: 0;
}
 8% {
 animation-timing-function: ease-out;
 opacity: 1;/*1;*/
}
 20% {
 opacity: 1;/*1;*/
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
}

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
</style>
