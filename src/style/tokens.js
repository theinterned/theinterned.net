import { lighten } from 'polished';

export const colour = {
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

export const font = {
  family: {
    serif: 'Times, TimesNewRoman, "Times New Roman", Baskerville, Georgia, serif',
    sans:  '"Avenir Next", Avenir, Frutiger, "Frutiger Linotype", "Segoe UI", Futura, "Century Gothic", CenturyGothic, "Helvetica Neue", Helvetica, sans-serif',
  }
}