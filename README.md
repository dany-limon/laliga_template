
Boiler Template de LaLiga. Desarrollada en ReactJS.

## Create React App

This project was bootstrapped with Create React App


## Scripts

* Des: ```yarn start```
* Test: ```yarn test``` | ```yarn test --coverage```
* Prod:
    * build --> ```yarn build``` 
    * analyze --> ```yarn analyze```
* Style guide 
    * des: ```yarn styleguide``` 



## Proyect Folder Structure

```
  /
  ├── public    
        ├── index.html                  
  ├── index.js                     
  ├── src/                          
        ├── api/            
        ├── assets/                   
        ├── config/         
        ├── redux/                                
        ├── components/                       
```


## Assets Folder Structure

```
  /                  
  ├── src/                                   
        ├── assets/    
            ├── fonts/   
            ├── images/ 
            ├── i18n/             
```


## Config Folder Structure

```
  /                   
  ├── src/                                       
        ├── config/     
            ├── api
            ├── paths  
            ├── redux
            ├── styled      
```


## Redux Folder Structure

```
  /                 
  ├── src/                                 
        ├── redux/     
            ├── auth/          
            ├── navigation/  
            ...
```

```
<duck>/
    ├── index.js        
    ├── actions.js      --> Simple actions with Flux Standard Action pattern
    ├── operations.js   --> Asyncs actions (thunks)
    ├── reducers.js     --> Reducer 
    ├── tests.js        --> Test
    ├── types.js        --> Simple actions types
    ├── utils.js        --> Other functions
```


## Visual Components Folder Structure

```                   
  ├── src/                                                    
        ├── components/             
            ├── system/    
            ├── pages/       
            ├── organisms/          
            ├── molecules/          
            ├── atoms/              
```

```
<component>/
    ├── container.js  --> Redux Container Component
    ├── index.js      --> index/dinamic imports (react-loadable)
    ├── view.js       --> Presentational Component 
    ├── utils.js      --> Internal utils
    ├── styles.css    --> old css clases
    ├── styled.js     --> Styled components
    ├── readme.md     --> Style Guidist
    ├── test.js       --> Correct render test
```


## Real Hot Reloading

[hot-reloading-create-react-app](https://medium.com/superhighfives/hot-reloading-create-react-app-73297a00dcad)


## Code Formatter with Prettier

- Install prettier (VSCode extension)


## Linter with ESLint

- Install ESLint (VSCode extension)


## Styled Components

* [repo](https://github.com/styled-components)
* [doc](https://www.styled-components.com/)
* Import styled from macro 'styled-components/macro'
* Macro Config by babel-plugin-macros.config.js
* All components with styled-components:
    - Have the suffix 'Styled'
    - They are inside styled.js


## React Style Guidist

* [repo](https://github.com/styleguidist/react-styleguidist)
* [doc](https://react-styleguidist.js.org/docs/getting-started.html)
* Components with react-styleguidist have readme.md
* Config by styleguide.config.js
* Static web --> /styleguide/index.html


## Main Libraries

* [react-router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/reactjs/redux/)
| [Redux Thunk](https://github.com/gaearon/redux-thunk)
| [Redux Persist](https://github.com/rt2zz/redux-persist)
| [Redux Logger](https://github.com/LogRocket/redux-logger)
* [Axios](https://github.com/axios/axios)
* [Lodash](https://lodash.com/)
* [Moment](https://momentjs.com/)
* [Jest](https://facebook.github.io/jest/)
