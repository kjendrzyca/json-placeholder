import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import App from './App'
import './index.css'

var helloState = {
  name: 'hello',
  url: '/hello',
  component: () => <App />
}

var aboutState = {
  name: 'about',
  url: '/about',
  component: () => <h3>Its the UI-Router hello world app!</h3>
}

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
    <div>
      <UISrefActive class="active">
        <UISref to="hello"><a>App</a></UISref>
      </UISrefActive>
      <UISrefActive class="active">
        <UISref to="about"><a>About</a></UISref>
      </UISrefActive>

      <UIView/>
    </div>
  </UIRouter>,
  document.getElementById('root')
)
