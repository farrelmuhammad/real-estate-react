import React from 'react'
import Banner from '../components/Banner'
import FindSearch from '../components/FindSearch'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <FindSearch />
        </>
    )
}

export default Home