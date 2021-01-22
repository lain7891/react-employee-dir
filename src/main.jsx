import React from 'react';
import DataPh from './components/DataPlaceHolder';
import Search from "./components/Search";
import Navbar from "./components/Navbar"



export default class Main extends React.Component{
state={
    name: ""
}

    searchMethod = (event)=> {
console.log(event.target.value);
this.setState({name:event.target.value})
    }
    render(){
        return(
<>
<Navbar/>
            <Search searchMethod={this.searchMethod}/>
            <DataPh/>
           
            </>
        )
    }

}
