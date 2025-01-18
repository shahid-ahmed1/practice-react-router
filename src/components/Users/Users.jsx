
import { useLoaderData } from 'react-router-dom';
import User from '../User/User'
const Users = () => {
    const users = useLoaderData();
    return (
        <div >
           <h3 className='footer'> this is users {users.length} </h3>
           <div className='users'>
           {
            
            users.map(user=><User key={user.id} user={user}></User>)
           } 
           </div>
        </div>
    );
};

Users.propTypes = {
    
};

export default Users;