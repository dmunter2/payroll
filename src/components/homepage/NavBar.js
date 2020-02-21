import React from "react";
import {Link} from 'react-router-dom';


const NavBar = () => {

    return(
        <div className='navbar'>
            <Link className='navbar_item' to='/employees'>Employees</Link>
            <Link className='navbar_item' to='/noncompleted'>Non Completed</Link>
            <Link className='navbar_item' to='hours'>Assign Hours</Link>
        </div>
    )
}

export default NavBar