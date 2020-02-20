import React, { useState } from 'react';
import {connect} from 'react-redux';
import {adduser} from '../redux/actions'
import { Menu } from 'semantic-ui-react'

class InputField extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={
            user: ''
        }
    }

    changeHandler(e){
        e.preventDefault()
        this.setState({user: e.target.value})
    }

    clickHandler(e){
        e.preventDefault();
        this.props.adduser(this.state.user)
        console.log(this.state.user)
        this.setState({user: ''})

    }

    render(){

        return (
            <div>
                <input
                    placeholder='input'
                    onChange={this.changeHandler.bind(this)}
                    name='user'
                    value={this.state.user}


                />
                <button onClick={this.clickHandler.bind(this)}>Submit</button>




            </div>

        )
    }
}

export default connect(
    null,
    {adduser}
)(InputField);
