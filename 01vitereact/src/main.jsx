import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>Custom App</h1>
    )
}


// const ReactElement ={
//     typeof: 'a',
//     props: {
//         herf: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "Code Aur React";

const reactElement = React.createElement(
    'a',
    {href:'https://google.com' , target: '_blank'},
    'Visit Google',
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
   
     //ReactElement 
     // <App />
    reactElement
    
)
