import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Register.css'

import Footer from "./Footer";
const initialState = {
    Name: "",
    Email: "",
    Contact: "",
};

const Register = () => {
    const [state, setState] = useState(initialState);

    const { Name, Email, Contact } = state;

    const { id } = useParams();

    const addUser = async (data) => {
        const response = await axios.post("http://localhost:5000/addUser", data);
        if (response.status === 200) {
            window.confirm("User added succesfuly");
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Name || !Email || !Contact) {
            window.confirm("Please provide value into each input field");
        } else {
            if (!id) {
                addUser(state);
            }
            window.location.reload()
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };



    return (
        <div className="container">
            <div style={{ marginTop: "100px", width: "400px" }}>
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
                    <label htmlFor="Name">Name</label>
                    <input
                        id="Name"
                        name="Name"
                        placeholder="Enter Name ..."
                        type="text"
                        onChange={handleInputChange}
                        value={Name}
                    />
                    <label htmlFor="Email">Password</label>
                    <input
                        id="Email"
                        class='password'
                        name="Email"
                        placeholder="Enter Password ..."
                        type="password"
                        onChange={handleInputChange}
                        value={Email}
                    />
                    <label htmlFor="number">Contact</label>
                    <input
                        id="Contact"
                        name="Contact"
                        placeholder="Enter Contact ..."
                        type="number"
                        onChange={handleInputChange}
                        value={Contact}
                    />
                    <input type="submit" value="Register" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;