import React from "react";
import { Header } from "../Header/Header";
import { Footer } from '../Footer/Footer'
import { useSelector } from "react-redux";
import { El } from "./Favorite.styled";
export const Favorite = () => {
  const favoriteList = useSelector((state) => state.advert.favoriteList);
  

  return (
    <div>
      <Header />
      <div>
        <ul>
          {favoriteList.map((car) => (
            <El key={car.id}>
              {car.make}
              {car.model}, {car.year}
              <div> {car.rentalPrice}</div>
              <button>Delete</button>
            </El>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
