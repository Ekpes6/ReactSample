import React from "react";

const AuthButton = props => {
    let { isLoggedIn } = props;

    return isLoggedIn ? <button>Login</button> : <button>Logout</button>
};

export default AuthButton;