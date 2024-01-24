import React from "react";
import { Header } from "../Header/Header";

import { List, Title, El, Main } from "./HomePage.styled";
import { Footer } from "../Footer/Footer";
export const HomePage = () => {
  return (
    <div>
      <Header />
      <Main>
        <Title>
          {" "}
          "Drive the Moment, Rent the Journey – Your Key to Unforgettable
          Adventures!"
        </Title>
        <List>
          <El>
            <h2> Diverse Fleet:</h2>

            <div>
              Car rental companies typically offer a diverse fleet of vehicles
              to cater to different customer needs. This includes compact cars
              for fuel efficiency, SUVs for family travel, luxury cars for
              special occasions, and more.
            </div>
          </El>
          <El>
            <h2> Flexible Rental Periods:</h2>
            <div>
              Car rental services provide flexibility in terms of rental
              periods, allowing customers to rent a vehicle for a few hours, a
              day, a week, or even longer. This flexibility is beneficial for
              various purposes such as short trips, vacations, or business
              travel.
            </div>
          </El>
          <El>
            <h2> Insurance Options:</h2>
            <div>
              Car rental companies offer various insurance options to provide
              peace of mind to customers during their rental period. These
              options often include collision damage waivers, liability
              coverage, and additional coverage for personal belongings.
            </div>
          </El>
        </List>
      </Main>
      <Footer />
    </div>
  );
};
