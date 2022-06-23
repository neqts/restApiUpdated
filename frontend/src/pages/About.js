import React, { useState, useEffect } from "react";
import "./About.css";
import axios from "axios";

import Footer from "./Footer";


const initialState = {
  text: "",
};

const About = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const { text } = state;
  useEffect(() => {
    getPosts();
  });

  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/allPosts");
    if (response.status === 200) {
      setData(response.data);
    }
  };






  const addPost = async (data) => {
    const response = await axios.post("http://localhost:5000/addPost", data);
    if (response.status === 200) {
      window.confirm("Post added succesfuly");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      window.confirm("Please provide value into each input field");
    } else {
      addPost(state)
    }
  };

  return (
    <div className="container">
      <form
        action=""
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name">Post</label>
        <input
          id="text"
          name="text"
          placeholder="Enter text ..."
          type="text"
          onChange={handleInputChange}
          value={text}
        />

        <input type="submit" value="Add" />

        {data &&
          data.map((item, index) => {
            return (
              <div key={index} class='container'>
                <div class='wrapper'>
                  <span class='date'> {date}</span>
                  <p class="text">{item.Text}  </p>
                </div>
              </div>
            );

          })}
      </form>
      <Footer />
    </div>
  );
};

export default About;
