import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/system/app/'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

//HOT RELOADING
// const rootEl = document.getElementById('root')
// ReactDOM.render(<App />, rootEl)
// if (module.hot) {
//   module.hot.accept('./components/system/app/', () => {
//     const NextApp = require('./components/system/app/').default
//     ReactDOM.render(<NextApp />, rootEl)
//   })
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
