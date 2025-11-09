import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Swal from 'sweetalert2'
import {useNavigate } from "react-router-dom";
import ball from "../assets/ball.png";
export default function login() {
   const navigate = useNavigate();
   const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test("is-valid", "Enter a valid email or phone number", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        (u.email === email || u.phone === email) &&
        u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      Swal.fire({
        title: `Welcome back, ${foundUser.username}!`,
        icon: "success",
        draggable: true,
      });
      resetForm();
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email/phone or password",
      });
    }
  };
  return (
    <div>
      <div className="flex md:flex-row sm:flex=col flex-col">
        <div>
          <img className="md:w-2xl sm:w-sm" src={ball}/>
        </div>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      <Form className="container mx-auto flex flex-col gap-4 items-center mt-20">
        <h2 className="font-medium text-3xl">
          Welcome Back
        </h2>
        <p className="mr-[46%] font-bold font-sans">Email</p>
        <Field
          name="email"
          type="email"
          className="w-[50%] input rounded-lg focus:outline-none"
          placeholder="Enter your email address"
        />
        <ErrorMessage name="email" component="div" className="text-red-600" />
        <p className="mr-[43.5%] font-bold font-sans">Password</p>
        <Field
          name="password"
          type="password"
          className="w-[50%] input rounded-lg focus:outline-none"
          placeholder="Enter your password"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-600"
        />
        <button
          type="submit"
          className="w-[50%] bg-blue-700 text-white px-6 py-2 mt-4 font-bold cursor-pointer font-sans"
        >
          Log In
        </button>
        <div className="flex gap-2">
          <p className="text-gray-400 font-light mb-12">Don’t have an account? </p>
          <a href="/register" className="text-blue-400 font-light">
            Create one
          </a>
        </div>
      </Form>
    </Formik>
     </div>
    </div>
  );
}
