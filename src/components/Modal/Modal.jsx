import React from "react";
import {
  ModalWrapper,
  ModalContent,
  RentCar,
  CloseBtn,
  Image,
  CarModel,
} from "./Modal.styled";
import { ListInfo } from "../CarsList/CarsList.styled";
import { useEffect } from "react";
import close from '../img/x.svg'
export const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!car) {
    return null;
  }
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <img src={close} alt="" />
        </CloseBtn>
        {<Image src={car.img} />}
        <CarModel>
                  <p>{car.make}  </p>
                  
          <p>{car.model}, </p>
          <p>{car.year}</p>
        </CarModel>
        <ListInfo>
          <li>{car.address}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.id}</li>
        </ListInfo>
        <p>{car.description}</p>
        <p>Accessories and functionalities:</p>
        {car.accessories} {car.functionalities}
        <p>Rental Conditions: </p>
        {car.rentalConditions}
        <RentCar href="tel:+380730000000">Rental car</RentCar>
      </ModalContent>
    </ModalWrapper>
  );
};


