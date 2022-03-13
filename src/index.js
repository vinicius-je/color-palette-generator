import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OptionsSelectedProvider } from './Context/OptionSelectedContext';
import { ColorProvider } from './Context/ColorsContext';
import { MyPaletteProvider } from './Context/MyPaletteContext';

ReactDOM.render(
  <React.StrictMode>
    <MyPaletteProvider>
    <ColorProvider>
    <OptionsSelectedProvider>
      <App />
    </OptionsSelectedProvider>
    </ColorProvider>
    </MyPaletteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
