import React from 'react'
import Registration from "./component/Registration/Registration"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer/Footer.jsx';
import Navbar from "./component/Navbar/Navbar";
import TodoParent from './component/todoParent/TodoParent';
import Dnd from "./component/Dnd"
import Modal from "./component/Modal/Modal.jsx"
import Chart from './component/Chart/Chart';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<TodoParent />} />
          <Route path="/validation" element={<Registration />} />
          <Route path="/dnd" element={<Dnd />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/charts" element={<Chart />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
