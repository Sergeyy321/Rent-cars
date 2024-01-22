import styled from "styled-components";


export const List = styled.ul`

display: flex;
flex-wrap: wrap;
gap:29px;
`;

export const Cart = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
  list-style: none;
`;

export const Btn = styled.button`
margin-top:28px;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  background-color: #3470ff;
  color: white;
  border-radius: 12px;
  border: 1px solid #3470ff;
  :hover {
    opacity: 0.5;
  }
`;

export const Img = styled.img`
  width:274px;
  height:268px;

`

export const ListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const Favorite = styled.img`
  width: 18px;
  height: 18px;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: transparent;
  :hover {
    opacity: 0.5;
  }
`

export const LoadMore = styled.button`
margin-left:auto;
margin-right:auto;
  color: #3470ff;
  background-color:transparent;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border:0;
  text-decoration-line: underline;
`;
export const ListName = styled.div`
  display: flex;
  justify-content: space-between;
  li {
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

`;

export const ModelStyle = styled.span`
  color: #3470ff;
`;
