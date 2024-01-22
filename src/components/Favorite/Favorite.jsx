import React from "react";
import { Header } from "../Header/Header";
import { Footer } from '../Footer/Footer'
import { useSelector, useDispatch } from "react-redux";
import { El,Btn } from "./Favorite.styled";
import { deleteFavorite } from "../../Redux/operations";
export const Favorite = () => {
  const favoriteList = useSelector((state) => state.advert.favoriteList);
  const dispatch = useDispatch();
  const handleDelete = (carId) => {
    dispatch(deleteFavorite(carId));
  };
  return (
    <div>
      <Header />
      <div>
 
        <ul>
          {favoriteList.map((car) => (
            <El key={car.id}>
              {car.make}
              {car.model}, {car.year}
              <div>Rental price: {car.rentalPrice}</div>
              <Btn
                onClick={() => {
                  handleDelete(car.id);
                }}
              >
                Delete
              </Btn>
            </El>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
