import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <h1>Learn to code — for free.</h1>
        <h1>Build projects.</h1>
        <h1>Earn certifications.</h1>
        <h3>
          Since 2014, more than 40,000 freeCodeCamp3.org graduates have gotten
          jobs at tech companies including:
        </h3>
        <div className="logo-row">
          <div className="img1">
            <img src="/images/apple.png" alt="" />
          </div>
          <div className="img1">
            <img src="/images/google.png" alt="" />
          </div>
          <div className="img1">
            <img src="/images/microsoft.jpg" alt="" />
          </div>
          <div className="img1">
            <img src="/images/spotify.png" alt="" />
          </div>
          <div className="img1">
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>
        <div className="button1">
          <Link to='/signin'>
            <button>Get started (it's free)</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default HomePage;

const Wrapper = styled.div`
  /* Style for the container div */
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;

  /* Style for the h1 elements */
  h1 {
    font-size: 48px;
    margin: 20px 0;
  }

  /* Style for the h3 element */
  h3 {
    font-size: 26px;
    margin: 40px 0;
  }

  /* Style for the logo-row container */
  .logo-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
  }

  /* Style for the img1 container */
  .img1 {
    margin-right: 20px;
  }

  .img1:last-child {
    margin-right: 0;
  }

  /* Style for the images */
  .img1 img {
    width: 100px;
    height: auto;
  }

  button {
    margin-left: 10px;
    background-color: #feac00;
    color: black;
    border-color: #feac32;
    padding: 0.7rem 3.4rem;
    font-size: 28px;
    letter-spacing: 2px;
    font-family: "Lato", Arial;
  }

  button:hover {
    background-color: #fecc4c;
  }

  .button1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
