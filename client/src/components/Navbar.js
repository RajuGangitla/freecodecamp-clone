import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div>
        <nav className="nav">
          <div className="nav-left">
            <input type="text" placeholder="Search 9000+playlists" />
            <button>Search</button>
          </div>
          <div className="nav-middle">
            <h3 onClick={() => navigate("/")}>freeCodeCamp</h3>
          </div>
          <div className="nav-right">
            <button onClick={user ? logoutUser : () => navigate("/signin")}>
              {user ? "logout": "Sign in"}
            </button>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #0a0a23;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .nav-left input[type="text"] {
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 20px;
    background-color: #3b3b4f;
    width: 100%;
    max-width: 400px;
    color: white;
  }

  .nav-left button {
    margin-left: 10px;
    background-color: #feac32;
    color: black;
    border-color: #feac32;
    font-size: 18px;
    font-family: "Lato", Arial;
  }

  .nav-right button {
    margin-left: 10px;
    background-color: #feac32;
    color: black;
    border-color: #feac32;
    font-size: 18px;
    font-family: "Lato", Arial;
  }

  button:hover {
    background-color: #fecc4c;
  }

  .nav-middle h3 {
    font-size: 28px;
    font-family: "Lato", Arial;
    font-weight: 500;
    color: white;
    cursor: pointer;
    letter-spacing: 2px;
    margin: 0;
    padding-right: 10px;
  }
`;
