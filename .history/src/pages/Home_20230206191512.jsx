import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Status from '../components/Search/Status'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Status /> 
        </>
    )
}

export default Home