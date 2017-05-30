import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, pushStateLocationPlugin} from 'ui-router-react'
import Photos from './Photos'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UIRouter plugins={[pushStateLocationPlugin]}>
    <Photos
      resolves={{
        photos: []
      }}
    />
  </UIRouter>, div)
})
