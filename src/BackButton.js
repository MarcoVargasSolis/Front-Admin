import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css';

const BackButton = () =>{
    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate(-1)
    };

    return(
        <button className="Back-button" onClick={handleBackClick}>
            Atras
        </button>
    );
};

export default BackButton;