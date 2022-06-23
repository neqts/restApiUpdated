import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import axios from "axios";
import "./Company.css";


const Company = () => {

    const [data, setData] = useState([]);
    const getAbout = async () => {
        const response = await axios.get("http://localhost:5000/about");
        if (response.status === 200) {
            setData(response.data);
        }
    };
    useEffect(() => {
        getAbout();
    });


    return <div ><h1 class='about-header'>ABOUT</h1>
        {data &&
            data.map((item, index) => {
                return (
                    <div key={index} class='about-main'>
                        <div class='about-wrapper'>
                            <p class="about-text">{item.Text}  </p>
                        </div>
                    </div>
                );

            })}

        <Footer /></div>;
};

export default Company;