import CoursesList from "../components/CoursesList";
import styled from "styled-components";

const CoursesPage = () => {
  return (
    <Wrapper>
      <div>
        <h3>Welcome to freeCodeCamp.org</h3>
        <div className="para">
          <h4>"The best revenge is massive success."</h4>
          <h5 className="text-center">-Frank Sinatra </h5>
        </div>
        <CoursesList />
      </div>
    </Wrapper>
  );
};
export default CoursesPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .text-center {
    font-family: Hack-ZeroSlash, monospace;
  }

  h4{
    padding: 15px 0px 5px 0px;
  }
`;
