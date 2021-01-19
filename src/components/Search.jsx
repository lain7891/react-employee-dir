import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Search extends Component {
    render() {
        return (
            <div>
                
            <InputGroup className="mb-3">
             
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
           
            
           
                       </div>
        );
    }
}

export default Search;