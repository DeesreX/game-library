import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import Footer from '../components/footer';


function Home() {
    return (
        <div className='homecontainer'>
            <Hero />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;