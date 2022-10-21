import React  from 'react';

import "./pages.css"

import {Link} from 'react-router-dom'





const MyAccount = () => (
  <div className="p-con">
    <div className="person-container">
      <img
        className="person-img"
        src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000"
        alt="person"
      />
      <h1 className="person-name">Avinash Potnuru</h1>
      <p className="age">Age:27</p>
      <p className="email">avinas*******@gmail.com</p>
      <Link to="/">
        <button className="sub-button" type="button">
          Logout
        </button>
      </Link>
    </div>
  
  </div>
)





export default MyAccount;

