import styled from "styled-components";

export const Styled = styled.div`
width:80px;
padding:10px;
border-radius:15px;
background-color:orange;
a{
    text-decoration:none;
    color:black;
}
a.active{
    color: white;
  }  
`

export const StyledList = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  padding: 10px;
  background-color: #9298c1;
`;