import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link style={{ margin: "0px 10px" }} to="/login">
                Login
            </Link>
            <Link to="/register">Register</Link>
            <Link style={{ margin: "0px 10px" }} to="/products">
                Product
            </Link>
        </div>
    );
};
