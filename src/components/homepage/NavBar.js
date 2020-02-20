import React from "react";
import {Link} from 'react-router-dom';


const NavBar = () => {

    return(
        <div className='navbar'>
            <Link to='/employees'>Employees</Link>
            <Link to='/noncompleted'>Non Completed</Link>
            <Link to='hours'>Assign Hours</Link>



        </div>
    )
}

export default NavBar