import "./Modal.css";
import { openCloseModal } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import Button from "../buttons/Button";
import { validation } from "./validation";
import { addUserDataToDB } from "../../services/api/addUserDataToDB";
import { useState } from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const [ addedSuccess, setAddedSuccess ] = useState(false);
    const [ addedError, setAddedError ] = useState(false);

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const onSubmitHandler = async (values) => {
        console.log("Values: ", values);
        console.log("mtanq");
        const added = addUserDataToDB(values);

        if (added) setAddedSuccess(true);
        else setAddedError(true);
    }

    return (
        <div>
            <div className="modal">
                <div onClick={() => dispatch(openCloseModal())} className="overlay"></div>
                <div className="modal-content">
                    <h2>Registration</h2>
                    <div className="modal-reg-form">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validation}
                            onSubmit={(values) => onSubmitHandler(values)}
                        >
                            <Form>
                                <Field placeholder="Username" type="text" name="username"></Field> <br />
                                <Field placeholder="Email" type="email" name="email"></Field> <br />
                                <Field placeholder="Password" type="password" name="password"></Field> <br />
                                <Field placeholder="Confirm Password" type="password" name="confirmPassword"></Field> <br />
                                <Button label="Submit" type="submit" /> <br />
                                {addedSuccess &&
                                    <small className="success-message">Successfully registered!</small>
                                }
                                {addedError &&
                                    <small className="error-message">Error occured, try again!</small>
                                }
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;