import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <h1>Custom App || Chai</h1>
    )
}

/*
const ReactElem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to visit google'
}
  */


const anotherUser = " chai aur code"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
)


const anotherElemnet = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
     reactElement
)



