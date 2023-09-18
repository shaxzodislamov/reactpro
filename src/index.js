import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Poisk from "./Components/Poiskovik";
import Kurierlar_item from "./Components/kurierlar_item";
import Kurier from "./Components/Kurier";
import Kurier_info from "./Components/Kurier_info";
import Tashkilot from "./Page/Tashkilot";
import Adminadd from "./Components/Adminadd";
import Base from "./Page/Base";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Base/>
  </React.StrictMode>
);


