import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Añadimos Bootstrap a nuestro proyecto //npm install bootstrap o npm install bootstrap --save
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//Importante: Los estilos propios deben ir debajo de bootstrap
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
