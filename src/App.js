import React from 'react'
import "./App.css";
import NavBar from '../src/components/navbar/NavBar';
import Header from "../src/containers/header/Header"
import Article from "../src/containers/header/Header";
import Brand from "../src/components/brand/Brand";
import CTA from "../src/components/cta/CTA";
import Blog from "../src/containers/Blog/Blog";
import Features from "../src/containers/features/Features";
import Footer from "../src/containers/footer/Footer";
import Possibility from "../src/containers/possibility/Possibility"
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';



const App = () => {
    return (
        <divv className="App">
            <div className='gradient__bg'>
                <NavBar />
                <Header />

            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </divv>
    )
}

export default App