import { Link } from "react-router-dom"

import "./SignIn.scss"

const SignIn = () => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }
    return (
        <div className="sign_in_page">
            <div className="sign_in_content_block">
                <h2>Sign In</h2>
                <form className="sign_in_form" onSubmit={handleSubmitForm}>
                    <label>
                        <input type="email" name="email" placeholder="Your email..." />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Password" />
                    </label>
                    <button type="submit">Enter</button>
                </form>
                <Link to="/register">Don't have an account ? Register now !</Link>
            </div>

        </div>
    )
}

export default SignIn