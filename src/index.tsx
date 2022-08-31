// before 18
// import { render } from 'react-dom'
// in react 18
import { createRoot } from 'react-dom/client'
import { App } from './App'

// 2 parametros /1. O que quero renderizar, /2. em qual elemento renderizar
// render(<App />, document.getElementById('root'))
createRoot(document.getElementById('root')).render(<App />)
