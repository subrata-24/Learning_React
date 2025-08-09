import React from "react"
import CounterView from "./features/counter/CounterView"
import PostView from "./features/post/PostView"

function App() {

  return (
    <div>
      <CounterView />
      <PostView/>
    </div>
  )
}

export default App

//constant -> action creator -> reducer -> store -> provider -> usestae
