import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main/Main';

const App = (): JSX.Element => {

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
