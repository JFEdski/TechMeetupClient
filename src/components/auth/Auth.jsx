import Login from "./login/Login";

function Auth(props) {
    return (
        <div style={{ width: '50%', display: 'inline-block' }}>
            <h2>Login</h2>
            <Login setToken={props.setToken} />
        </div>
    )
};

export default Auth;