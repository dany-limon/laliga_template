const path = require('path')

//theme --> https://github.com/styleguidist/react-styleguidist/blob/master/src/styles/theme.js
module.exports = {
  theme: {
    color: {
      sidebarBackground: '#25282A',
      link: 'white',
      linkHover: '#DFA405'
    },
    fontFamily: {
      base: '"CoreSans"'
    }
  },
  styles: {
    Playground: {
      preview: {
        height: '100%',
        background: '#D8D8D8'
      }
    }
  },
  components: ['src/components/atoms/**/*.js', 'src/components/molecules/**/*.js'],
  ignore: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**/test.js', '**/index.js', '**/styled.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
    Logo: path.join(__dirname, 'src/styleguide/Logo')
  },
  sections: [
    {
      name: 'Atoms',
      components: 'src/components/atoms/**/*.js'
    },
    {
      name: 'Molecules',
      components: 'src/components/molecules/**/*.js'
    }
  ]
}
