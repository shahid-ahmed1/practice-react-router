import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
    const errors = useRouteError();
    const {status,statusText}=errors;
    console.log(errors)
    return (
 <div >
    <div className="class">
    <div>
    <h1>{status}</h1>
    <h2>{statusText}</h2>
    
    
    </div>  
    {
        status===404 && <div>
            <h2>Page Not Pound</h2>
            <h3>got back where you from</h3>
            <NavLink to='/'><button>Home</button></NavLink>
        </div>
    }
        
        </div>    
</div>
    );
};

export default Error;