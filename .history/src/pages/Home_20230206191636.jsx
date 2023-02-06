import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import SearchComponent from '../components/SearchComponent'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <SearchComponent /> 
        </>
    )
}

export default Home