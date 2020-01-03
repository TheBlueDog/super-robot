module.exports = {
  theme: {
    fontSize: {
      '2xs': '.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.625rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      'display-sm': '3rem',
      'display-md': '3.5rem',
      'display-lg': '4rem',
    },
    colors: {
      black: '#151515',
      white: '#FFFFFF',
      gray: {
        'lightest': '#F8F8F8',
        'lighter': '#DFDFDF',
        'light': '#BFBFBF',
        '': '#9F9F9F',
        'dark': '#606060',
        'darker': '#404040', 
        'darkest': '#2B2B2B',
      },
      red: {
        'lightest': '#FADFDC',
        'lighter': '#FCCAC5',
        'light': '#F2877B',
        '': '#E65340',
        'dark': '#A82B1E',
        'darker': '#4F0E08',
        'darkest': '#210300',
      },
      orange: {
        'lightest': '#FFECE0',
        'lighter': '#FCDAC5',
        'light': '#FAAE7F',
        '': '#F58440',
        'dark': '#C65A18',
        'darker': '#6D2F08',
        'darkest': '#401900',
      },
      yellow: {
        'lightest': '#FAF7DC',
        'lighter': '#F6F0C1',
        'light': '#FCEE8D',
        '': '#F9E54E',
        'dark': '#D9BC00',
        'darker': '#8C7500',
        'darkest': '#5C4E00',
      },
      greenblue: {
        'lightest': '#DBF2F1',
        'lighter': '#BEEDEC',
        'light': '#8FE6E5',
        '': '#28CECB',
        'dark': '#009B98',
        'darker': '#004D4C',
        'darkest': '#002625',
      },
      violet: {
        'lightest': '#ECE6FF',
        'lighter': '#DCD2F2',
        'light': '#B39AD7',
        '': '#7E5BAF',
        'dark': '#4E2C7E',
        'darker': '#250F43',
        'darkest': '#100026',
      },
      pink: {
        'lightest': '#FADEF0',
        'lighter': '#FACDEA',
        'light': '#F2A5D6',
        '': '#E673BB',
        'dark': '#BA2F7E',
        'darker': '#590B32',
        'darkest': '#260404',
      },
      green: {
        'lightest': '#E4F0E4',
        'lighter': '#CBE2CB',
        'light': '#87D692',
        '': '#50BA5F',
        'dark': '#288835',
        'darker': '#0D3F14',
        'darkest': '#001A03',
      },
      blue: {
        'lightest': '#DFEFFA',
        'lighter': '#C8E3F5',
        'light': '#77BDE7',
        '': '#2890CE',
        'dark': '#00619B',
        'darker': '#00304D',
        'darkest': '#001726',
      },
      violetred: {
        'lightest': '#F6E1FA',
        'lighter': '#E9CEEE',
        'light': '#CFA1D7',
        '': '#A466AF',
        'dark': '#73377E',
        'darker': '#3C1243',
        'darkest': '#200026',
      },
      redorange: {
        'lightest': '#F7E4DC',
        'lighter': '#F5D0C2',
        'light': '#F09677',
        '': '#E97E5A',
        'dark': '#AD3C16',
        'darker': '#531B07',
        'darkest': '#260A00',
      },
      orangeyellow: {
        'lightest': '#FFEDD6',
        'lighter': '#FCE0BD',
        'light': '#FCC582',
        '': '#F9A845',
        'dark': '#C67718',
        'darker': '#6D3F08',
        'darkest': '#402300',
      },
      yellowgreen: {
        'lightest': '#F0F7DA',
        'lighter': '#E5EFC6',
        'light': '#CDE78A',
        '': '#B6D860',
        'dark': '#84A338',
        'darker': '#384813',
        'darkest': '#121A00',
      },
      app: {
        'brand-primary': '#00619B',
        'brand-primary-dark': '#00304D', 
        'brand-primary-highlight': '#77BDE7', 
        'brand-primary-light': '#C8E3F5',
        'brand-secondary': '#FCC582',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'Avenir Next',
        ],
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: []
}
