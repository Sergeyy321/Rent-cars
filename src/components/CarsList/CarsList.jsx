import {
  List,
  Cart,
  Btn,
  Img,
  ListInfo,
  Favorite,
  BtnFavorite,
  LoadMore
} from "./CarsList.styled";
import { fetchCars } from "../../Redux/operations";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";
import Heart from '../img/heart.svg'
import { Modal } from '../Modal/Modal'
import { addFavorite } from "../../Redux/operations";
export const CarsList = () => {
  const selectCars = (state) => state.advert.cars;
  const cars = useSelector(selectCars);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
 
  dispatch(fetchCars(currentPage + 1));
  setCurrentPage((prevPage) => prevPage + 1);
};
  useEffect(() => {
    
    dispatch(fetchCars());
  }, [dispatch]);
 
 const learnMoreClick = (car) => {
   setSelectedCar(car);
   setIsModalOpen(true);
 };
    const addToFavorites = (car) => {
    dispatch(addFavorite(car))
      
  };
  
const isLoading = useSelector(state => state.advert.isLoading);
    return (
      <div>
        <NavBar />
        {isLoading === true && <Loader />}
        <List>
          {cars.map((car) => (
            <Cart key={car.id}>
              <Img src={car.img} />
              <BtnFavorite onClick={() => addToFavorites(car)}>
                <Favorite src={Heart} />
              </BtnFavorite>
              <h2>
                {car.make}
                {car.year}
              </h2>
              <h2>{car.rentalPrice}</h2>
              <ListInfo>
                <li>{car.address}</li>
                <li>{car.type}</li>
                <li>{car.model}</li>
                <li>{car.id}</li>
              </ListInfo>
              <Btn onClick={() => learnMoreClick(car)}>Learn more</Btn>
              {isModalOpen && (
                <Modal
                  car={selectedCar}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </Cart>
          ))}
        </List>

        <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
      </div>
    );
};
