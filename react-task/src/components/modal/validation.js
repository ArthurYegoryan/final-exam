import * as Yup from "yup";

export const validation = Yup.object({
    username: Yup.string().min(3).required("Username required!"),
    email: Yup.string().email().required("Email required!"),
    password: Yup.string().min(8).required("Password required!"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")]),
});