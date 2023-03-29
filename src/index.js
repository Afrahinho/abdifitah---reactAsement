import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const Navbar = () => {
  return (
    <div className='container'>
      <div className='menu'>
        <h1 className='title'>Menu</h1>
        <button className='btn'>
          <a href='#'>Home</a>
        </button>
        <button className='btn'>
          <a href='#'>About</a>
        </button>
        <button className='btn'>
          <a href='#'>Contact</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar``;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
