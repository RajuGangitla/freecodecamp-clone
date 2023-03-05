import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { setupUser, user } = useAppContext();
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    setRegister(!register);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      setupUser({ values, endPoint: "register" });
    } else {
      setupUser({ values, endPoint: "login" });
    }
    setValues({ name: "", email: "", password: "" });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/courses");
      }, 1000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div>
        <Form className="form-container" onSubmit={handleSubmit}>
          <h1>{register ? "Register" : "Login"}</h1>
          {register ? (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </Form.Group>
          ) : (
            ""
          )}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {register ? "Register" : "Login"}
          </Button>
          <h6
            onClick={handleRegister}
            className="text-center mt-2"
            style={{ color: "navy", cursor: "pointer" }}
          >
            {register ? "Already a user Click here" : "New user? Click here"}
          </h6>
        </Form>
      </div>
    </Wrapper>
  );
};
export default SignInPage;

const Wrapper = styled.div`
  font-family: "Lato", Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  .form-container {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #d0d0d5;
    border: 4px solid #1b1b32;
  }

  .form-container h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    font-weight: bold;
  }

  .form-control {
    border-radius: 5px;
  }

  .form-control:focus {
    box-shadow: none;
  }

  .btn-primary {
    width: 100%;
    background-color: #0a0a23;
    margin-top: 20px;
    border: none;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .btn-primary:hover {
    background-color: #3b3b4f;
  }
`;
