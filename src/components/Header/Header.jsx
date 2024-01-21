import React from 'react'
import { NavLink } from 'react-router-dom';
import { Styled, StyledList } from "./Header.styled";
export  const  Header =()=> {
  return (
    <StyledList>
      <Styled>
        <NavLink to="/" >
          {" "}
          HomePage{" "}
        </NavLink>
      </Styled>
      <Styled>
        <NavLink to="/catalog" >
          Catalog
        </NavLink>
      </Styled>
      <Styled>
        <NavLink to="/favorites" >
          {" "}
          Favorite{" "}
        </NavLink>
      </Styled>
    </StyledList>
  );
}
