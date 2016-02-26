# Portfolio of Ned Schwartz

This is the code for my online portfolio. I'm a front-end web developer and designer whose been working on the web for over 15 years.

# [🌐 theinterned.net](http://theinterned.net)

or

# [🌐 theinterned.github.io](http://theinterned.github.io)


## Default by Design
In the spirit of **[Default Design](http://blog.linedandunlined.com/post/404940995/default-systems-in-graphic-design)**, all the colors used in this design are [CSS spec Color Module Level 3 named colors](https://www.w3.org/TR/css3-color/) and all the fonts are traditional web-safe font-stack fonts (with a serious attempt to get Adrian Frutiger's work to show up on your screen). Also this makes text more usable faster for the reader.

### Usage

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone -o react-static-boilerplate -b master --single-branch \
      https://github.com/koistya/react-static-boilerplate.git MyApp
$ cd MyApp
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to GitHub Pages
```

Alternatively, you can build a production release to manually deploy to S3, Firebase, Netlify, and other static hosts. Simply run the command below and copy the generated `build` folder to your static host.

```shell
$ npm run build release         # Build production release
```

### How to Update

You can always fetch and merge the recent changes from this repo back into
your own project:

```shell
$ git checkout master
$ git fetch react-static-boilerplate
$ git merge react-static-boilerplate/master
$ npm install
```

_The code for this site was developed starting from [Konstantin Tarkus's](https://github.com/koistya) [react-sytatic-boilerplate](https://github.com/koistya/react-static-boilerplate)_.

**Source code repo:** https://github.com/theinterned/theinterned.net

**Github page repo:** https://github.com/theinterned/theinterned.github.io
