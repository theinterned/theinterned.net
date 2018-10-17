import React, { Component } from 'react';
import styled from 'styled-components';
import { colour, font } from './style/tokens';
import { linkColours } from './style/utils';

const bpLinks = 'screen and (min-width:42rem)';

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
  margin: -1rem -1rem 3rem;
  padding: 8rem 2rem 10rem;
  font-family: ${font.family.serif};
  text-align: center;
  font-style: italic;
  font-weight: normal;
  border-color: ${[colour.border[0], colour.border[0], colour.border[1], colour.border[1]].join(' ')};
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
`;

const Link = styled.a`
  ${linkColours()}
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0 0 6rem;
  float: left;
  width: 100%;
  padding: .2rem 0;
  background-color: white;
  border-color: $c-border;
  border-style: solid;
  border-width: .2rem 0;
  @media ${bpLinks} {
    border: 0 none;
    padding: 0;
  }
`;

const NavItem = styled.li`
  display: block;
  margin: 0;
  font-weight: 600;
  letter-spacing: .15rem;
  background-color: white;
  text-align: center;
  padding: 0;
  @media ${bpLinks} {
    padding: .2rem 0;
    float: left;
    width: calc((1/5)*100%);
    border-color: ${colour.border[1]};
    border-style: solid;
    border-width: .2rem 0;
    transition: padding .2s, margin .2s, background-color .3s .1s;
    &:hover {
      background-color: ${colour.border[1]};
      padding: .6rem 0;
      margin: -.4rem 0;
    }
  }
`;

const NavLink = styled.a`
  ${linkColours({
    normal: colour.text,
    visited: colour.text
  })}
  &:hover { background-color: white; }
  text-decoration: none;
  display: block;
  background-color: ${colour.background};
  text-decoration: none;
  transition: background-color .5s .15s;
  padding: 1rem 0;
  border-color: ${colour.border[1]};
  border-style: solid;
  border-width: .1rem 0;
  @media $(bp-links) {
    border-width: .2rem 0;
  }
`;

const Footer = styled.footer`
  text-align: center;
  clear: left;
  opacity: .2;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`;

class App extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <>
        <Title>Hi, I&rsquo;m Ned<br/>
          &mdash;<br/>
          I design & build<br/>
          web apps.</Title>
        <Nav>
          <NavItem><NavLink href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">CV</NavLink></NavItem>
          <NavItem><NavLink href="https://dribbble.com/theinterned">Dribbble</NavLink></NavItem>
          <NavItem><NavLink href="https://github.com/theinterned">Github</NavLink></NavItem>
          <NavItem><NavLink href="https://medium.com/@theinterned">Medium</NavLink></NavItem>
          <NavItem><NavLink href="https://ca.linkedin.com/in/neddo">Linkedin</NavLink></NavItem>
        </Nav>
        
        <Footer>
          <p>&copy; 2001 – {year} Ned Schwartz &bull; <Link href="https://raw.githubusercontent.com/theinterned/theinterned.net/master/LICENSE">MIT license</Link>.</p>
        </Footer>
      </>
    );
  }
}

export default App;
