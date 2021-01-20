import React, { Component } from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

class Search extends Component {
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
  <option selected>Choose an Employee</option>
  <option value="mary">Mary</option>
  <option value="bob">Bob</option>
  <option value="sam">Sam</option>         
</select>
        
                 </div>
                </div>
     
                       </div>
        );
    }
}

export default Search;