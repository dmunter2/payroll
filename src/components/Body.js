import React from 'react';
import Navigation from './Navigation';
import Header from './Header'
import {Route} from 'react-router-dom';
import Employees from './Employees';
import Hours from './Hours';
import NotDone from './NotDone';




function Body(){


    return(
        <div className='body-holder'>
            <Navigation />
            <div className='header_section_holder'>
                <Header />
                <div>
                    {/* I know there is a more efficient way to do this.. i will come back to it */}
                    <Route exact path='/' component={Employees}/>
                    <Route exact path='/employees' component={Employees} />

                    <Route path='/hours' component={Hours} />
                    <Route path='/notdone' component={NotDone} />
                </div>
            </div>
        </div>
    )
}

export default Body;




// {/* <InputField /> */}
    // <Payroll />