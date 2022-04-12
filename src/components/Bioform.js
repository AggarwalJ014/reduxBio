import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bioform extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className='container fluid'>
                <form onSubmit={this.props.submit}>
                    <div className='form-group'>
                        <label htmlFor="uName">Name:</label><br />
                        <input onChange={this.props.inputName} className='form-control' value={this.props.valueName} id="uName" name="uName" /><br />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label><br />
                        <input onChange={this.props.inputEmail} className='form-control' value={this.props.valueEmail}   id="email" name="email"   /><br />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="gender">Gender:</label><br />
                        <input onChange={this.props.inputGender} className='form-control' value={this.props.valueGender}   id="gender" name="gender"   /><br />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="age">Age:</label><br />
                        <input onChange={this.props.inputAge} className='form-control' value={this.props.valueAge} id="age" name="age"    /><br />
                    </div>
                    <button className='btn btn-success' type='submit' >Submit</button>
                </form>
            </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        inputName: (event)=>{
            const action= {type: 'NAME_ADDED', text: event.target.value};
            dispatch(action);
        },
        inputEmail: (event)=>{
            const action= {type: 'EMAIL_ADDED', text: event.target.value};
            dispatch(action);
        },
        inputGender: (event)=>{
            const action= {type: 'GENDER_ADDED', text: event.target.value};
            dispatch(action);
        },
        inputAge: (event)=>{
            const action= {type: 'AGE_ADDED', text: event.target.value};
            dispatch(action);
        },
        submit: ()=>{
            const action= {type: 'SUBMITTED'};
            dispatch(action);
        }

    }
}


const mapStateToProps=(state)=>{
    return{
        valueName: state.valueName
    }
}
   

export default connect(mapStateToProps, mapDispatchToProps)(Bioform)
