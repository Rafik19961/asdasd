import { Link } from "react-router-dom";
import style from "./registration.module.scss";

const Registration = () => {
  return (
    <div className="container-fluid">
      <div className="image-holder"></div>
      <form method="post">
        <h2 className="text-center">
          <strong>Create</strong> an account.
        </h2>
        <div className="row justify-content-center m-5">
        <div className="col-sm-6 ">
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control mt-5"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control mt-5"
            type="password"
            name="password-repeat"
            placeholder="Password (repeat)"
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" />I agree to the
              license terms.
            </label>
          </div>
        </div>
        <div class="form-group">
          <button className="btn btn-primary btn-block mt-5" type="submit">
            Sign Up
          </button>
        </div>
        <a href="#" class="already">
          You already have an account? Login here.
        </a>

        </div>

        </div>
       
        
      </form>
    </div>
  );
};
export default Registration;
