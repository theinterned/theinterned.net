export const colour = {
  background: 'AliceBlue',
  border: [
    'MistyRose',
    'PowderBlue',
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