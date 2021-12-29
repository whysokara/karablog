import "./register.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username.."
        />
        <label htmlFor="">email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email.."
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
