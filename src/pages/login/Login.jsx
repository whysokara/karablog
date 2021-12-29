import "./login.css";
import Sidebar from "../../components/sidebar/Sidebar";
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
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
