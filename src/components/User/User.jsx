import { NavLink } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone}=user
    return (
        <div className="user">
            <h4>id: {id}</h4>
            <h4>Name: {name}</h4>
        <h4>Email:{email}</h4>
            <h4>Phone: {phone}</h4>
            <NavLink to={`/user/${id}`}><button>Show Details</button></NavLink>
        </div>
    );
};

export default User;