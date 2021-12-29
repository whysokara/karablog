import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email.."
        />{" "}
        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
