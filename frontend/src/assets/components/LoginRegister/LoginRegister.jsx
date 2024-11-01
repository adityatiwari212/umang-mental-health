import api from "../../../api";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";
import { ACCESS_TOKEN,  USER_INFO_AGE, USER_INFO_FIRSTNAME, USER_INFO_ID, USER_INFO_LASTNAME, USER_INFO_LOCATION } from "../../../constants";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(true);
  }, []);

  const handleSubmitButton = async () => {
    setLoading(true);
    try {
      let url = `/api/umang2/user/${login ? "login" : "create"}`;
      console.log("url is" , url);
      const payload = login
        ? { email, password }
        : { email, password, firstName, lastName, age, location };
      console.log("payload is" , payload)
      const res = await api.post(url, payload);
      console.log("res is" ,res)
      if (login) {
        localStorage.setItem(ACCESS_TOKEN, res.data.token);
        localStorage.setItem(USER_INFO_ID , res.data.user._id)
        localStorage.setItem(USER_INFO_FIRSTNAME , res.data.user.firstName)
        localStorage.setItem(USER_INFO_LASTNAME , res.data.user.lastName)

        localStorage.setItem(USER_INFO_AGE , res.data.user.age)
        localStorage.setItem(USER_INFO_LOCATION , res.data.user.location)
        // localStorage.setItem(USER_INFO_ID , res.data.user._id)
        
        navigate(`/`);
      } else {
        setLogin(true);
        handleSubmitButton();
      }
    } catch (error) {
      alert(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <>Loading ....</>
  ) : (
    <>
      <div className={`container-${login ? "left" : "right"}`}>
        <div className="half-left">
          <form className="form" method="post">
            <div className="email">
              Enter your email <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              Enter your Password <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {!login && (
              <>
                <div className="firstName">
                  Enter your First Name <br />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="lastName">
                  Enter your Last Name <br />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="age">
                  Enter your Age <br />
                  <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="location">
                  Enter your Location <br />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </>
            )}
          </form>
          <button onClick={handleSubmitButton}>
            {`${login ? `Login` : `Register`}`}
          </button>
          <button onClick={() => setLogin(!login)}>
            {`${login ? `Register on the website` : `Login with your account`}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
