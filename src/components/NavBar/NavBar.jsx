import { ToastContainer, toast } from "react-toastify";
import { Title, Btn, Container, Inputs } from "./NavBar.styled";
import "react-toastify/dist/ReactToastify.css";

export const NavBar = () => {
  const notify = () => {
    toast("Car was delete");
  };

  return (
    <Container>
      <Title>
        Car brand
        <div>
          {" "}
          <select value="">
            <option value="">Enter the text</option>

            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            <option value="Hummer">Hummer</option>
            <option value="Subaru">Subaru</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Lincoln">Lincoln</option>
            <option value="GMC">GMC</option>
            <option value="Hyundai">Hyundai</option>
          </select>
        </div>
      </Title>
      <Title>
        Price/1hour
        <div>
          {" "}
          <select>
            <option value="" disabled selected hidden>
              To $
            </option>

            <option value="">30</option>
            <option value="">40</option>
            <option value="">50</option>
            <option value="">60</option>
            <option value="">70</option>
            <option value="">80</option>
          </select>
        </div>
      </Title>
      <Title>
        Car mileage/km
        <div>
          {" "}
          <Inputs type="text" placeholder="From"></Inputs>
          <Inputs type="text" placeholder="To"></Inputs>
        </div>
      </Title>

      <Btn onClick={notify}>Search</Btn>
    </Container>
  );
};
