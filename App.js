import React, { Component } from 'react'
import Errorboundary from './Errorboundary'

function App() {
  return (
    <div className='App'>
        <Errorboundary>
        <Component a={["pinapple","banana","pinapple","guava"]}/>
        </Errorboundary>
    </div>
  )
}

export default App