import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import ShowPage from './ShowPage.js';
import ShowPage2 from './ShowPage2.js';
import ShowPage3 from './ShowPage3.js';
import ShowPage4 from './ShowPage4.js';
import ShowPage5 from './ShowPage5.js';
import ShowPage6 from './ShowPage6.js';
import ShowPage7 from './ShowPage7.js';
import LoadingScreen from "./container/LoadingScreen/LoadingScreen.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Router>
    <Routes>
    <Route index element={<App />} />
    <Route path="/project01" element={<ShowPage />} />
    <Route path="/project02" element={<ShowPage2 />} />
    <Route path="/project03" element={<ShowPage3 />} />
    <Route path="/project04" element={<ShowPage4 />} />
    <Route path="/project05" element={<ShowPage5 />} />
    <Route path="/project06" element={<ShowPage6 />} />
    <Route path="/project07" element={<ShowPage7 />} />
     </Routes>
    </Router>
        </>
      )}
    </React.StrictMode>
  );
}
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
