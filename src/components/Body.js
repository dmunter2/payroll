import React from 'react';
import NavBar from './homepage/NavBar';
import Header from './homepage/Header'
import {Route} from 'react-router-dom';
import Employ from './Employ';
import Hours from './homepage/alldata/Hours';
import NonCompleted from './homepage/alldata/NonCompleted';




function Body(){


    return(
        <div className='body-holder'>
            <NavBar />
            <div className='header_section_holder'>
                <Header />
                <div>
                    {/* I know there is a more efficient way to do this.. i will come back to it */}
                    <Route exact path='/' component={Employ}/>
                    <Route exact path='/employees' component={Employ} />

                    <Route path='/hours' component={Hours} />
                    <Route path='/noncompleted' component={NonCompleted} />
                </div>
            </div>
        </div>
    )
}

export default Body;




// {/* <InputField /> */}
    // <Payroll />