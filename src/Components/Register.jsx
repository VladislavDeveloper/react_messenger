import { Link } from "react-router-dom"


import "./Register.scss"

const RegisterPage = () => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const dateOfBirth = form.dateOfBirth.value;

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Date of birth: ${dateOfBirth}`);
    }

    return (
        <div className="register_page">
            <div className="register_page_content_block">
                <h2>Register</h2>
                <form className="register_form" onSubmit={handleSubmitForm}>
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