import React from 'react';

const Employee = (props) => {
  return (
    <div>
      
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
  {/* {this.props.results.map(results => {
   <tr>
   <th scope="row">1</th>
   <td>{props.firstName}</td>
   <td>{props.lastName}</td>
   <td>{props.email}</td>
 </tr>
        
})}; */}
  {props.employees.map(employee => {
    return (
      <tr>
      <th scope="row">1</th>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
     </tr>
    )

  })}

 
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
    </div>
  );
};

export default Employee;


// import React, { Component } from 'react';
// // import API from "../utils/API";
// // import axios from "axios";

// // import axios from "axios";

// class Employee extends Component {

// state={
//    employees: "",
// };

// componentDidMount(){
//     this.randomEmployee();
// };


//     render() {
//         return (
//             <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
//         );
//     }
// }

// export default Employee;

