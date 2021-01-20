
import React, { Component } from 'react';
// import API from "../utils/API";
import axios from "axios";

// import axios from "axios";

class Employee extends Component {

state={
   employees: "",
};

componentDidMount(){
    this.randomEmployee();
};

randomEmployee = () => {
    axios.get("https://randomuser.me/api/").then(response => {
        console.log(response.data.results);
        this.setState({
            employees: response.data.results,
        })
    }).catch((err) => {
        console.log(err)
    })
   
// API.getRandomEmployee().then(res => this.setState({employees: res.data})).catch(err => console.log(err))
};

    render() {
        return (
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        );
    }
}

export default Employee;

