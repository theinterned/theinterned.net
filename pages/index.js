/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './index.scss';

export default class extends Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <div className="page home_page">
        <h1 className="title">Hi, I&rsquo;m Ned<br/>
          &mdash;<br/>
          I design & build<br/>
          web apps.</h1>
        <ul className="links">
          <li className="link CV"><a href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">CV</a></li>
          <li className="link dribbble"><a href="https://dribbble.com/theinterned">Dribbble</a></li>
          <li className="link github"><a href="https://github.com/theinterned">Github</a></li>
          <li className="link instapaper"><a href="https://www.instapaper.com/p/theinterned">Instapaper</a></li>
          <li className="link linkdin"><a href="https://ca.linkedin.com/in/neddo">Linkedin</a></li>
        </ul>
        <div className="blurb">
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
          <p className="CV_dl">
            <a href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">↬ Here's my CV as a PDF</a>
          </p>
        </div>
        <footer className="foot">
          <p>&copy; {year} Ned Schwartz &bull; <a href="https://raw.githubusercontent.com/theinterned/theinterned.net/master/LICENSE">MIT license</a>.</p>
        </footer>
      </div>
    );
  }

}
