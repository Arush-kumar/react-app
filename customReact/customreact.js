function customRender(reactElem, container){
/*
  const domElement = document.createElement(reactElem.type)
  domElement.innerHTML = reactElem.Children
  domElement.setAttribute('href', reactElem.props.href)
  domElement.setAttribute('target', reactElem.props.target)

  container.appendChild(domElement)
  */

  const domElement = document.createElement(reactElem.type)
  domElement.innerHTML = reactElem.Children
  for (const prop in reactElem.props) {
      if(prop === 'children') continue;
      domElement.setAttribute(prop, reactElem.props[prop])
    }
    container.appendChild(domElement)
  }


const reactElem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  Children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElem, mainContainer)