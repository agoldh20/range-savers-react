import React, {useEffect, useState} from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Main = (): JSX.Element => {
    const [component, setComponent] = useState('home');

    useEffect(() => {
        document.querySelectorAll<HTMLElement>('.btn.btn-success').forEach(el => {
            el.style.color = 'rgba(255, 255, 255, 0.7)';
        })
        document.querySelector<HTMLElement>(`#${component}-header-button`)!.style.color = '#e6a756';
    },[component])

    const showComponent = () => {
        switch (component) {
            case 'home':
                return (<Home/>);
            case 'about':
                return (<About/>);
            case 'product':
                return (<Product/>);
            case 'contact':
                return (<Contact/>);
            default:
                return (<Home/>);
        }
    };


    return (
        <div className="main">
            <Header setComponent={setComponent}/>
            <div className="container">
                {showComponent()}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
