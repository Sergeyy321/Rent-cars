import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { El, Btn, IsEmpty } from "./Favorite.styled";
import { deleteFavorite } from "../../Redux/operations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Favorite = () => {
  const favoriteList = useSelector((state) => state.advert.favoriteList);
  const notify = () => {
    toast("Car was delete", { autoClose: 3000 });
  };
  const dispatch = useDispatch();
  const handleDelete = (carId) => {
   return dispatch(deleteFavorite(carId));
  };
  const isEmpty = () => {
    if (favoriteList.length === 0) {
      return true;
    }
  };
  return (
    <div>
      <Header />
      <div>
        {isEmpty() && (
          <IsEmpty>Favorite list is empty.You need to add something</IsEmpty>
        )}
        <ul>
          {favoriteList.map((car) => (
            <El key={car.id}>
              {car.make}
              {car.model}, {car.year}
              <div>Rental price: {car.rentalPrice}</div>
              <Btn
                onClick={() => {
                  handleDelete(car.id);
                  notify();
                }}
              >
                Delete
              </Btn>
              <ToastContainer autoClose={false} />
            </El>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
