
import styled from "styled-components";
import mainImg from '../img/panie-w-salonie-samochodowym-kobieta-kupuje-samochod-elegancka-kobieta-w-niebieskiej-sukience-kierownik-przekazuje-klucze-klientowi.jpg'
export const Main = styled.div`
  background-image: url(${mainImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  margin-top: 70px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
  @media (min-width: 768px) {
    background-color: #cbcbcb;
    margin-left: 24px;
    border-radius: 15px;
    opacity: 0.8;
    padding:16px;
  }
`;

export const Title = styled.h1`
  color: #121417;
  display:flex;
  justify-content:center;
  margin-top:34px;
  font-family: Manrope;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const El = styled.li`
  list-style:none;
  margin-top:10px;
`;