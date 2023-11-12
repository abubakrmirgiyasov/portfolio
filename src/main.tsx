import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App";

// static files
import "./assets/styles/app.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
