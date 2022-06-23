import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/all");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    console.log(id)
    if (window.confirm("Are you sure that you wanted to delete that user ?")) {
      const response = await axios.delete(`http://localhost:5000/delete/${id}`);
      if (response.status === 200) {

        getUsers();
      }
    }
  };

  // console.log("data=>", data);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Id</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Password</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Contact}</td>
                  <td>
                    <Link to={`/update/${item.Id}`}>
                      <button className="btn btn-editor">Edit </button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteUser(item.Id)}
                    >
                      Delete{" "}
                    </button>
                    <Link to={`/view/${item.Id}`}>
                      <button className="btn btn-view">View </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Home;
