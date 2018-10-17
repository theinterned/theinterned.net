import React from 'react';
import styled from 'styled-components';
import { colour, font } from './style/tokens';
import { linkColours } from './style/utils';

const bpLinks = 'screen and (min-width:42rem)';
const navBorderWidths = '.2rem 0';
const navBorderColor = colour.border[1];

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
`;

const Link = styled.a`
  ${linkColours()}
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0 0 6rem;
  padding: ${navBorderWidths};
  border-color: ${navBorderColor};
  border-style: solid;
  border-width: ${navBorderWidths};

  @media ${bpLinks} {
    display: flex;
    border: 0 none;
    padding: 0;
  }
`;

const NavItem = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  font-weight: 600;
  letter-spacing: .15rem;
  text-align: center;
  border-color: ${navBorderColor};
  border-style: solid;
  border-width: 0;

  &:first-child {
    border-top-width: 0.1rem;
  }
  &:last-child {
    border-bottom-width: 0.1rem;
  }
  
  @media ${bpLinks} {
    flex: 1;
    padding: ${navBorderWidths};
    background-color: ${colour.background};
    transition: padding .2s, margin .2s, background-color .3s .1s;

    &, 
    &:first-child, 
    &:last-child {
      border-width: ${navBorderWidths};
    }

    &:hover {
      background-color: ${navBorderColor};
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
  border-color: ${navBorderColor};
  border-style: solid;
  border-width: 0.1rem 0;

  @media ${bpLinks} {
    border-width: ${navBorderWidths};
  }
`;

const Footer = styled.footer`
  text-align: center;
  opacity: .2;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`;

const App = ({
  year = new Date().getFullYear()
}) => (
  <>
    <Title>Hi, I&rsquo;m Ned<br/>
      &mdash;<br/>
      I design & build<br/>
      web apps.
    </Title>

    <Nav>
      <NavItem><NavLink href="https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0">CV</NavLink></NavItem>
      <NavItem><NavLink href="https://medium.com/@theinterned">Medium</NavLink></NavItem>
      <NavItem><NavLink href="https://github.com/theinterned">Github</NavLink></NavItem>
      <NavItem><NavLink href="https://twitter.com/theinterned">Twitter</NavLink></NavItem>
      <NavItem><NavLink href="https://dribbble.com/theinterned">Dribbble</NavLink></NavItem>
      <NavItem><NavLink href="https://ca.linkedin.com/in/neddo">Linkedin</NavLink></NavItem>
    </Nav>
    
    <Footer>
      <p>&copy; 2001 – {year} Ned Schwartz &bull; <Link href="https://raw.githubusercontent.com/theinterned/theinterned.net/master/LICENSE">MIT license</Link>.</p>
    </Footer>
  </>
);

export default App;
