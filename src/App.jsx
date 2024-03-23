import React from 'react';
import Login from './Components/Login/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage } from './Components/Homepage/Homepage';

function App() {
    const user = localStorage.getItem("token");

    return (
        <Routes>
            {user && <Route path="/homepage" exact element={<Homepage />} /> }
            <Route path="/" exact element={<Login />} />
            <Route path="/homepage" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default App;


 