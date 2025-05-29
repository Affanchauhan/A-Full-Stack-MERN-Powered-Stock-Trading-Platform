
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const AuthForm = ({ initialForm = 'signup' }) => {
  const [isActive, setIsActive] = useState(initialForm === 'signin');
  const [showSigninPassword, setShowSigninPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (password && confirmPassword) {
      setPasswordMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === 'signup' && !passwordMatch) return;
    console.log(`${formType} form submitted`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="bg-white rounded shadow position-relative overflow-hidden"
        style={{ maxWidth: '500px', width: '100%', height: '600px' }}
      >
        {/* Toggle Button */}
        <button
          className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm"
          style={{ width: '42px', height: '42px', zIndex: 5}}
          onClick={toggleForm}
        >
          <FontAwesomeIcon
            icon={isActive ? faArrowLeft : faArrowRight}
            className="text-danger"
          />
        </button>

        {/* Forms Wrapper */}
        <div className="position-relative w-100 h-100">
          {/* Sign In Form */}
          <form
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center gap-3 p-4"
            style={{
              transform: isActive ? 'translateX(-100%)' : 'translateX(0)',
              transition: 'transform 0.5s ease, opacity 0.3s',
              opacity: isActive ? 0 : 1,
              zIndex: isActive ? 1 : 2,
            }}
            onSubmit={(e) => handleSubmit(e, 'signin')}
          >
            <h2 className="text-center mb-3">Sign In</h2>

            <div className="form-group position-relative">
              <input
                type="text"
                className="form-control py-3 px-4 rounded-pill border-0 bg-light"
                id="signin-username"
                required
                placeholder="Email or Username"
              />
            </div>

            <div className="form-group position-relative">
  <input
    type={showSigninPassword ? 'text' : 'password'}
    className="form-control py-3 px-4 rounded-pill border-0 bg-light"
    id="signin-password"
    required
    placeholder="Password"
  />
  <FontAwesomeIcon
    icon={showSigninPassword ? faEyeSlash : faEye}
    className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted cursor-pointer"
    onClick={() => setShowSigninPassword(!showSigninPassword)}
    style={{ right: '16px' , cursor: 'pointer',}}
    
  />
</div>


            <button type="submit" className="btn btn-danger py-3 rounded-pill fw-bold"  style={{backgroundColor:"rgba(var(--bs-link-color-rgb)", border:"none"}}>
              Login
            </button>

            <div className="d-flex justify-content-between mt-2">
              <a href="#" className="text-decoration-none text-muted">
                Forgot Password?
              </a>
              <a
                href="#"
                className="text-decoration-none text-muted"
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(true);
                }}
              >
                Sign Up
              </a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center gap-3 p-4"
            style={{
              transform: isActive ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.5s ease, opacity 0.3s',
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
            }}
            onSubmit={(e) => handleSubmit(e, 'signup')}
          >
            <h2 className="text-center mb-3">Create Your Account</h2>

            <div className="form-group position-relative">
              <input
                type="text"
                className="form-control py-3 px-4 rounded-pill border-0 bg-light"
                id="signup-username"
                required
                placeholder="Username"
              />
            </div>

            <div className="form-group position-relative">
              <input
                type="email"
                className="form-control py-3 px-4 rounded-pill border-0 bg-light"
                id="signup-email"
                required
                placeholder="Email"
              />
            </div>

           <div className="form-group position-relative">
  <input
    type={showSigninPassword ? 'text' : 'password'}
    className="form-control py-3 px-4 pe-5 rounded-pill border-0 bg-light"
    id="signin-password"
    required
    placeholder="Password"
  />
  <span
    onClick={() => setShowSigninPassword(!showSigninPassword)}
    style={{
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      zIndex: 10,
    }}
  >
    <FontAwesomeIcon
      icon={showSigninPassword ? faEyeSlash : faEye}
      className="text-muted"
      style={{ cursor: 'pointer',}}
    />
  </span>
</div>

            <div className="form-group position-relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={`form-control py-3 px-4 rounded-pill border-0 ${
                  !passwordMatch && confirmPassword ? 'is-invalid' : 'bg-light'
                }`}
                id="signup-confirm-password"
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ right: '16px', cursor: 'pointer', }}
              />
              {!passwordMatch && confirmPassword && (
                <div className="invalid-feedback d-block">Passwords must match</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-danger py-3 rounded-pill fw-bold"
              style={{backgroundColor:"rgba(var(--bs-link-color-rgb)", border:"none"}}
              disabled={!passwordMatch}
            >
              Register
            </button>

            <div className="d-flex justify-content-center mt-2">
              <a
                href="#"
                className="text-decoration-none text-muted"
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(false);
                }}
              >
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
