import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setUser({ ...response.data[0] });
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>Id:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user && user.Name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user && user.Email}</span>
          <br />
          <br />
          <strong>Number:</strong>
          <span>{user && user.Contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit"> Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
