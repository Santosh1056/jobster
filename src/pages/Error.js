import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error-img" />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you looking for</p>
        <Link to="/">back home</Link>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;