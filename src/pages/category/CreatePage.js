import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form, Container, Button, Row, Col } from "react-bootstrap";

const schema = yup.object().shape({
  name: yup.string().required("ชื่อหมวดหมู่ห้ามว่าง"),
});

const CreatePage = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    //   console.log(data)
    const apiUrl = "https://api.codingthailand.com/api/category";
    const resp = await axios.post(apiUrl, {
      name: data.name,
    });
    alert(resp.data.message)
    history.replace('/category')
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicnameEmail">
              <Form.Label>หมวดหมู่ข่าว</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              บันทึก
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePage;
