import React, { Component } from 'react';
import axios from "axios";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

class Search extends Component {

    state= {employees: ["name", "location", "email", "dob", "phoneNumber"]};

    componentDidMount(){
        this.getEmployees();
    };


    getEmployees = () => {
        axios.get("https://randomuser.me/api/").then((response)=>{
            console.log(response.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Search by Employee Name</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <select className="form-select" aria-label="Default select example">
                    <option>Choose</option>
                    {this.state.employees.map((employee, index)=>(
                        <option value={employee} key={index}>{employee}</option>
                    ))}
       
</select>
        
                 </div>
                </div>
     
                       </div>
        );
    }
}

export default Search;