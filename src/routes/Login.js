import { useState } from "react";

const Login = (props) => {
  const [state, setState] = useState({
    emial: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div>
      <input
        type="email"
        value={state.email}
        className="input"
        placeholder="What is your name???"
        onChange={onChange}
      />
      <input
        type="submit"
        value="Login"
        className="loginbtn"
        onChange={onChange}
      />
      <hr />
    </div>
  );
};
export default Login;
