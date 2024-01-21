import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { CarsList } from '../CarsList/CarsList'
import { NavBar } from '../NavBar/NavBar'
export const Catalog =() => {
    return (
        <div>
            <Header />    
            <NavBar />
            <CarsList/>       
            <Footer/>
            </div>
    )
}