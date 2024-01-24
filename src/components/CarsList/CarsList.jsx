import {
  List,
  Cart,
  Btn,
  Img,
  ListInfo,
  Favorite,
  BtnFavorite,
  LoadMore,
  ListName,
  ModelStyle,
  
} from "./CarsList.styled";
import { fetchCars } from "../../Redux/operations";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";
import Heart from '../img/heart.svg'
import BlueHeart from "../img/blue-heart.svg";
import { Modal } from '../Modal/Modal'
import { addFavorite,deleteFavorite } from "../../Redux/operations";
export const CarsList = () => {
  const selectCars = (state) => state.advert.cars;
  const cars = useSelector(selectCars);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
 
  dispatch(fetchCars(currentPage + 1));
    setCurrentPage((prevPage) => 
      prevPage + 1
    );
};
  useEffect(() => {
    
    dispatch(fetchCars());
  }, [dispatch]);
 
 const learnMoreClick = (car) => {
   setSelectedCar(car);
   setIsModalOpen(true);
 };

  const favoriteList = useSelector((state) => state.advert.favoriteList);

  const isLoading = useSelector(state => state.advert.isLoading);

   
  const addToFavorites = (car) => {
//  const isFavorited = (car) => {
//    favoriteList.find((el) => {
//      if (el.id === car.id) {
//        console.log(1);
//        return <Favorite src={BlueHeart} />;
//      }
//      <Favorite src={Heart} />;
//    });
//  };
    
    // if (isFavorited) {
    //   dispatch(deleteFavorite(car));
    // } else {
      dispatch(addFavorite(car));
     
  };

    return (
      <div>
        <NavBar  />
        {isLoading === true && <Loader />}
        <List>
          {cars.map((car) => (
            <Cart key={car.id}>
              <Img src={car.img} />
              <BtnFavorite onClick={() => addToFavorites(car)}>
              <Favorite
                  src={Heart}
                 
                />
              </BtnFavorite>
              <ListName>
                <div>
                  {car.make} <ModelStyle>{car.model}</ModelStyle>,{car.year}
                </div>

                <div>{car.rentalPrice}</div>
              </ListName>

              <ListInfo>
                <li>{car.address}|</li>
                <li>{car.type}|</li>
                <li>{car.model}|</li>
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
