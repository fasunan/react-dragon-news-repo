import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    console.log(form.get("password"));
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w3/4 lg:w-1/2 mx-auto">
        <h2 className="text-3xl my-10 text-center"> Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          <p className="text-center">
            New Here...? please
            <Link to={"/register"}>
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
