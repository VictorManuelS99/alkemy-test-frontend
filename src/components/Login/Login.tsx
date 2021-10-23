import { useFormik } from "formik";
import * as Yup from "yup";
import { BiLoader } from "react-icons/bi";
import { useToasts } from "react-toast-notifications";

import {
  Field,
  MessageError,
  Spinner,
  StyledForm,
  StyledLogin,
} from "./Login.style";
import { AuthUser } from "../../util/types/Auth.types";
import { login } from "../../util/services/AuthService";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../app/features/authSlice";
import { useRef } from "react";

export const Login = () => {
  const { replace } = useHistory();
  const { addToast } = useToasts();
  const dispatch = useAppDispatch();
  const loading = useRef<HTMLDivElement>(null);

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Formato incorrecto")
      .max(50, "35 caracteres max.")
      .required("Ingresar email"),
    password: Yup.string().required("Ingresar password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => submitLogin(values),
    validationSchema: loginSchema,
  });

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    values,
  } = formik;

  const submitLogin = async (values: AuthUser) => {
    try {
      const { token } = await login(values);
      localStorage.setItem("token", token);
      dispatch(loginUser({ token }));
      replace("/");
      addToast("Bienvenido", { appearance: "success", autoDismiss: false });
    } catch (error) {
      addToast("Credenciales incorrectas", {
        appearance: "error",
        autoDismiss: false,
      });
    }
  };

  return (
    <StyledLogin>
      <div className="Login-box">
        <h2 className="Login-title">Login</h2>
        <StyledForm onSubmit={handleSubmit}>
          <Field>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <MessageError>{errors.email}</MessageError>
            ) : null}
          </Field>

          <Field>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <MessageError>{errors.password}</MessageError>
            ) : null}
          </Field>

          <button type="submit" disabled={!isValid}>
            <Spinner ref={loading}>
              <BiLoader />
            </Spinner>
            Ingresar
          </button>
        </StyledForm>
      </div>
    </StyledLogin>
  );
};
