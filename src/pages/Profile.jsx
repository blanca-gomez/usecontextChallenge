import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";


const Profile = () => {
    return(
        <>
            <h1>Esta es la página de Profile</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/myjob"}>MyJob</Link>
                    </li>
                </ul>
            </nav>
            <Button/>
        </>
    )
}

export default Profile;