import React from 'react';
import DataPh from './components/DataPlaceHolder';
import Search from "./components/Search";
export default class Main extends React.Component{
    render(){
        return(
<>
<Search/>
            <DataPh/>
            </>
        )
    }
}