import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

const schema = yup.object().shape({
  email: yup.string().required("อีเมลห้ามว่าง").email("รูปแบบอีเมลไม่ถูกต้อง"),
  password: yup
    .string()
    .required("รหัสผ่านห้ามว่าง")
    .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป"),
});

const LoginPage = () => {
  const history = useHistory();
  const { addToast } = useToasts();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      //   console.log(data)
      const apiUrl = "https://api.codingthailand.com/api/login";
      const resp = await axios.post(apiUrl, {
        email: data.email,
        password: data.password,
      });

      //   console.log(resp.data)
      localStorage.setItem("token", JSON.stringify(resp.data));

      //get profile
      const UrlProfile = "https://api.codingthailand.com/api/profile";
      const respProfile = await axios.get(UrlProfile, {
        headers: {
          Authorization: "Bearer " + resp.data.access_token,
        },
      });

      //   console.log(respProfile.data.data.user)
      localStorage.setItem(
        "profile",
        JSON.stringify(respProfile.data.data.user)
      );

      addToast("เข้าสู่ระบบเรียบร้อยแล้ว", { appearance: "success" });
      
      history.replace("/");
      history.go(0);
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={register}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
