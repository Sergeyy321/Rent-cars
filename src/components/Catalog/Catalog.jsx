import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { CarsList } from '../CarsList/CarsList'
export const Catalog =() => {
    return (
        <div>
            <Header />    
            <CarsList/>       
            <Footer/>
            </div>
    )
}