import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AddNewProduct } from "../../store/team/api_actions";
import { Helmet } from "react-helmet";

const initialValues = {
  photo: "",
  name: "",
  title: "",
  about: "",
};

const validationSchema = Yup.object().shape({
  photo: Yup.string().required("photo is required"),
  name: Yup.string().required("name is required"),
  title: Yup.string().required("title is required"),
  about: Yup.string().required("about is required"),
});

const AddNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNew = async (values) => {
    dispatch(AddNewProduct(values));
    toast.success("Successfully added!");
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Add new</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <StyledAdd>
        <h2>Add Page</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={addNew}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="photo">Photo url</label>
              <Field
                type="text"
                className="form-control"
                id="photo"
                name="photo"
                placeholder="Enter icon"
              />
              <ErrorMessage
                name="photo"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter fullname"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="about">About</label>
              <Field
                type="text"
                className="form-control"
                id="about"
                name="about"
                placeholder="About member"
              />
              <ErrorMessage
                name="about"
                component="div"
                className="text-danger"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </StyledAdd>
    </>
  );
};

const StyledAdd = styled.div`
  min-height: 100vh;
  padding-top: 120px;
  width: 80%;
  margin: 0 auto;
  button {
    margin-top: 20px;
    background: #dc3545;
    padding: 8px 18px;
    outline: none;
    border: none;
    &:hover {
      background: #ca2b3a;
    }
  }
  @media screen and (min-width: 920px) {
    width: 50%;
  }
`;

export default AddNew;
