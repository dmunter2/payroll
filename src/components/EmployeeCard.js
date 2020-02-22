import React from "react";


const EmployeeCard = ({name, title, wage, key}) => {

    return (
        <div className='employees'>
            <h1>{name} {title} {wage}</h1>
        </div>
    )
}

export default EmployeeCard;