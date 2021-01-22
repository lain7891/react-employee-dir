import React from 'react';
import Employee from './Employee';
import API from '../utils/API';

import Search from "./Search"

export default class DataPH extends React.Component {
    state = {
        order: 'descend',
        employees: [],
        filteredEmployees: []
    }
    headers = [
        {name: 'Name', width: "10%"},
        {name: 'Image', width: '10%'},
        {name: 'Phone'},
        {name: 'Email'},
        {name: 'DOB'}
    ]

    componentDidMount() {
       API.getRandomEmployee().then((results) => {
console.log(results);
this.setState({employees:results.data.results, filteredEmployees: results.data.results})
       }
       );
    }

    //   loadEmployee = () => {
    //     API.getRandomEmployee()
    //       .then(res =>
    //         this.setState({
    //           order: res.data
    //         })
    //       )
    //       .catch(err => console.log(err));
    //   };
    // create a method tat determines the order of the sort - provide two options
    // hint: conditionals

    // handleInputChange = (event) => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value} = event.target;

    
    //     const filteredList = this.state.employees.filter((employee) => {
    //         let values =employee.name.first.toLowerCase();
    //       return values.indexOf(name.toLowerCase()) !== -1;
    //     });
    
    //     // Updating the input's state
    //     this.setState({
    //       filteredEmployees: filteredList,
    //       name: value
    //     });
    //   };

      handleInputChange= (event) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        const filteredEmployees = this.state.employees.filter((employee) => {
          return (
            employee.name.first.includes(value) ||
            employee.name.last.includes(value)
          );
        });
        this.setState({
          [name]: value,
          filteredEmployees: filteredEmployees,
        });
      };

      handleButtonClickForFirstName = () => {
        // console.log("clicked button");
        const sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
          return a.name.first < b.name.first ? -1 : 1;
        });
        // console.log(sortedEmployees);
        this.setState({
          employees: sortedEmployees,
        });
      };
    // sortMethod = header => {
    //     const sort = type => {
    //         const types = {
    //             employees: "name"
    //         };
    //         const sortProperty = types[type];
    //     }
    //     // if(this.state.employees === "descend"){
    //     //     this.setState({
    //     //         employees: "ascend"
    //     //     })
    //     // }else  {
    //     //    this.setState({
    //     //        employees: "descend"
    //     //    })
    //     }
    // }
    // creating the display for the dataarea - this area will hold the table (employee.jsx) that will hold the actual data
    render(){
        return(
          <>
          
            <div>
               
                {/* hold your employee component - along  with the methods needed to render the desired layout */}
                <Employee filteredEmployees={this.state.filteredEmployees} key={this.state.results}/>
                <Search employees={this.state.employees}/>
            </div>
          </>
        )
    }
}