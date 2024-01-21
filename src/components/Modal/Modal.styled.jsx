import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  position: relative;
  padding: 16px 35px;
  border-radius: 8px;
  width:469px;
`;
export const RentCar = styled.a`
margin-top:24px;
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-decoration:none;
  width:168px;
  :hover {
 opacity:0.6;
  }
`;

export const CloseBtn = styled.button`
    position:absolute;
    right:16px;
    top:16px;
    width:24px;
    height:24px;
    background-color:transparent;
    border:0;
`
export const Image = styled.img`
display:flex;
margin-top:24px;
  width: 469px;
  height: 314px;
  border-radius:15px;
`;

export const CarModel = styled.div`
  display: flex;
 
`;