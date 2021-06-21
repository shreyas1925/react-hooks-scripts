import React, { useState } from "react";

const Register = () => {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const inputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setRegistration({ ...registration, [name]: value });
  };

  const submitFun = (e) => {
    e.preventDefault();

    const newRecord = { ...registration, id: new Date().getTime.toString() };

    setRecords([...records, newRecord]);

    setRegistration({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={submitFun}>
        <div>
          <label htmlFor="name">Fullname</label>
          <input
            type="text"
            name="name"
            id="name"
            value={registration.name}
            autoComplete="off"
            onChange={inputs}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={registration.email}
            autoComplete="off"
            onChange={inputs}
          />
        </div>
        <div>
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={registration.password}
            autoComplete="off"
            onChange={inputs}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={registration.phone}
            autoComplete="off"
            onChange={inputs}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>

      <div>
        {records.map((curElem) => {
          return (
            <div key={curElem.id}>
              <p>{curElem.name}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Register;
