import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h3 className="text-center">Error</h3>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
