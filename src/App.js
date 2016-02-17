import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import globalStyles from '../lib/css/global.scss';
import styles from './App.scss';

class App extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <div className="app">
        <h1 styleName='title'>Hi, I&rsquo;m Ned</h1>
        <div styleName="blurb">
          <p>I’m a seasoned web developer and designer with over 15 years of
            experience working on high profile, heavily-trafficked websites.</p>
          <p>Most recently, I was the lead designer and front-end developer
            on <a href="http://getcarta.com" className="carta">Carta</a>, a
            cloud-based social inventory and order management app. I was
            responsible for the design and development of Carta’s beautiful and
            responsive interface. Carta is a rich and non-trivial business app
            and I learned a great deal about balancing complexity and ease of
            use.</p>
          <p>Yes this website is very bare-bones: It's <a href="https://github.com/theinterned/theinterned.net">
            under construction</a> like all of the web! I'm looking for work now
            and wanted to get something up ASAP &mdash; <a href="mailto:ned@theinterned.net?subject=let%27s%20work%20together%20to%20make%20the%20internet%20great!">Hire me!</a></p>
          <p styleName="CV_dl">
            <a href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">↬ Here's my CV as a PDF</a>
          </p>
        </div>
        <ul styleName="links">
          <li styleName="link" className="CV"><a href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">CV</a></li>
          <li styleName="link" className="dribbble"><a href="https://dribbble.com/theinterned">Dribbble</a></li>
          <li styleName="link" className="github"><a href="https://github.com/theinterned">Github</a></li>
          <li styleName="link" className="instapaper"><a href="https://www.instapaper.com/p/theinterned">Instapaper</a></li>
          <li styleName="link" className="linkdin"><a href="https://ca.linkedin.com/in/neddo">Linkedin</a></li>
        </ul>
        <footer styleName="foot">
          <p>&copy; {year} Ned Schwartz &bull; <a href="https://raw.githubusercontent.com/theinterned/theinterned.net/master/LICENSE">MIT license</a>.</p>
        </footer>
      </div>
    );
  }
}

export default CSSModules(App, styles);
