import React, { Component } from 'react';
import styled from 'styled-components';
import { lighten, borderColor } from 'polished';
import logo from './logo.svg';

const colour = {
  MistyRose: 'rgb(255,228,225)',
  AliceBlue: 'rgb(240,248,255)',
  PowderBlue: 'rgb(176,224,230)',
  BlueViolet: 'rgb(138,43,226)',
  Blue: 'rgb(0,0,255)',
  MediumBlue: 'rgb(0,0,205)',
  DarkBlue: 'rgb(0,0,139)',

  background: 'AliceBlue',
  border: [
    'MistyRose',
    lighten(0.06, 'PowderBlue'),
  ],
  text: 'DarkBlue',

  link: 'Blue',
  linkHover: 'MediumBlue',
  linkVisited: 'BlueViolet',
  get linkActive() { return this.linkVisited },
}

const font = {
  family: {
    serif: 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif',
    sans:  '"Avenir Next", Avenir, Frutiger, "Frutiger Linotype", "Segoe UI", Futura, "Century Gothic", CenturyGothic, "Helvetica Neue", Helvetica, sans-serif',
  }
}

console.log('colour', colour);
console.log('font :', font);

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  margin: -1rem -1rem 3rem;
  padding: 8rem 2rem 10rem;
  font-family: serif;
  text-align: center;
  font-style: italic;
  font-weight: normal;
  ${borderColor(colour.border[0], colour.border[0], colour.border[1], colour.border[1])}
  border-style: solid;
  border-width: 1.5rem;
  background-color: white;
  @media screen {
    @media (min-width: 321px), (min-height: 569px) { /* > iphone 5 screen */
      font-size: 5rem;
    }
    @media (min-width: 376px) and (max-height: 415px), (min-height: 628px) { /* > iphone 6 screen */
      padding: 10rem 2rem 12rem;
      margin: 0 0 3rem;
    }
    @media (min-width: 415px) and (min-height: 737px) { /* > iphone 6+ screen */
      font-size: 6rem;
      padding: 18rem 2rem;
    }
  }
`

class App extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div className="page home_page">
        <Title>Hi, I&rsquo;m Ned<br/>
          &mdash;<br/>
          I design & build<br/>
          web apps.</Title>
        <ul className="links">
          <li className="link CV"><a href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">CV</a></li>
          <li className="link dribbble"><a href="https://dribbble.com/theinterned">Dribbble</a></li>
          <li className="link github"><a href="https://github.com/theinterned">Github</a></li>
          <li className="link instapaper"><a href="https://www.instapaper.com/p/theinterned">Instapaper</a></li>
          <li className="link linkdin"><a href="https://ca.linkedin.com/in/neddo">Linkedin</a></li>
        </ul>
        <div className="blurb">
          <p>I’m a seasoned web developer and designer with almost 20 years of
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

export default App;
