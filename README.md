# Portfolio of Ned Schwartz

This is the code for my online portfolio. I'm a front-end web developer and designer whose been working on the web for over 15 years.

# [🌐 theinterned.net](http://theinterned.net)

or

# [🌐 theinterned.github.io](http://theinterned.github.io)


## Default by Design
In the spirit of **[Default Design](http://blog.linedandunlined.com/post/404940995/default-systems-in-graphic-design)**, all the colors used in this design are [CSS spec Color Module Level 3 named colors](https://www.w3.org/TR/css3-color/) and all the fonts are traditional web-safe font-stack fonts (with a serious attempt to get Adrian Frutiger's work to show up on your screen). Also this makes text more usable faster for the reader.

### Usage

Just clone the repo, install node modules and run `yarn start`:

```shell
$ yarn install
$ yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to Test

The unit tests are powered by [Jest](https://jestjs.io/) and are pretty basic.
shell
```
$ yarn test
```

### How to Build

```shell
$ yarn build                # Builds a static site to /build folder
```

### How to Deploy

```shell
$ yarn deploy                # Deploys the project to GitHub Pages
```

The static build is pushed to the https://github.com/theinterned/theinterned.github.io repo where it is hosted as a Github page.

**Source code repo:** https://github.com/theinterned/theinterned.net

**Github page repo:** https://github.com/theinterned/theinterned.github.io

_The code for this site was developed starting from [create-react-app](https://github.com/facebook/create-react-app)._