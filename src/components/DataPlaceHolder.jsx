import React from 'react';
import Employee from './Employee';

import Api from '../utils/API';

export default class DataPH extends Component {
    state={
        order: 'descend'
    }
    headers = [
        {name: 'Name', width: "10%"},
        {name: 'Image', width: '10%'},
        {name: 'Phone'},
        {name: 'Email'},
        {name: 'DOB'}
    ]

    // create a method tat determines the order of the sort - provide two options
    // hint: conditionals
    sortMethod = header => {
        if(this.state.order === "descend"){
            this.setState({
                order: "ascend"
            })
        }else  {
           this.setState({
               order: "descend"
           })
        }
    }
    // creating the display for the dataarea - this area will hold the table (employee.jsx) that will hold the actual data
    render(){
        return(
          <>
            // Nav Bar
            <div>
                {/* hold your employee component - along  with the methods needed to render the desired layout */}
                <Employee/>
            </div>
          </>
        )
    }
}