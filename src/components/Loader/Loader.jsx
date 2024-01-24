import { ColorRing } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderStyled>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#2c2b2b", "#7c7c7c", "#686867", "#ddded9", "#849b87"]}
      />
    </LoaderStyled>
  );
};
