import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import styled from "styled-components";

const CoursesList = () => {
  const { getAllCourses, courses } = useAppContext();

  useEffect(() => {
    getAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);

  return (
    <Wrapper>
      <div>
        {courses.map((course) => {
          return (
            <div key={course._id} className="courseList">
              <p>
                {course.title} ({course.duration})
              </p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default CoursesList;

const Wrapper = styled.div`
  .courseList {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    text-align: left;
    background-color: #d0d0d5;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: solid 3px #0a0a23;
  }
  
  .courseList:hover {
    background-color: #0a0a23;
    color: white;
  }
  p {
    font-size: 1.1rem;
    font-family: "Lato", Arial;
    margin: 0;
  }
`;
