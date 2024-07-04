import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const MyJob = () => {
    return(
        <>
            <h1>Esta es la página de My job</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/profile"}>Profile</Link>
                    </li>
                </ul>
            </nav>
            <Button/>
        </>
    )
}

export default MyJob;