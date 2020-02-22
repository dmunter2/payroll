import React from "react";
import {Link} from 'react-router-dom';


const Navigation = () => {

    return(
        <div className='navbar'>
            <Link className='navbar_item' to='/employees'>Employees</Link>
            <Link className='navbar_item' to='/notdone'>Non Completed</Link>
            <Link className='navbar_item' to='hours'>Assign Hours</Link>
        </div>
    )
}

export default Navigation;