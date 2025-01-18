import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="nav">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/contact'>Conact</NavLink>
    <NavLink to='/about'>About Us</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
    <NavLink to='/users'>Users</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;