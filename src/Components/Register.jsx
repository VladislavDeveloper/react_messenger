import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { registerNewUserAction } from "../Store/Profile/actions"


import "./Register.scss"

const RegisterPage = () => {

    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const dateOfBirth = form.dateOfBirth.value;

        dispatch({
            type: 'REGISTER_NEW_USER',
            userName,
            email,
            password,
            dateOfBirth
        })
    }

    return (
        <div className="register_page">
            <div className="register_page_content_block">
                <h2>Register</h2>
                <form className="register_form" onSubmit={handleSubmitForm}>
                    <label>
                        <input type="text" name="userName" placeholder="username..." />
                    </label>
                    <label>
                        <input type="email" name="email" placeholder="Your email..." />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Password" />
                    </label>
                    <label>
                        <input type="date" name="dateOfBirth" placeholder="Password" />
                    </label>
                    <button type="submit">Enter</button>
                </form>
                <Link to="/sign-in">Already have an acount ? Log in !</Link>
            </div>
        </div>
    )
}

export default RegisterPage