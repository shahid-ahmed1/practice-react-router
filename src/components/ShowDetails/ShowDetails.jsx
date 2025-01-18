
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const user = useLoaderData();
    const {name,email}=user;
    return (
        <div  >
            <div >
     <h2>Details about user: {name}</h2>
     <h2>Email {email}</h2>
            </div>
            
        </div>
    );
};

export default ShowDetails;