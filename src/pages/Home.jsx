import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    return(
        <>
            <h1>Esta es la página de Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/myjob"}>MyJob</Link>
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

export default Home;