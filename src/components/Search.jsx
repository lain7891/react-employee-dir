
// import DataPh from "./DataPlaceHolder";
// import React, { useContext } from "react";
// import DataAreaContext from "../utils/DataAreaContext"

const styles = {
    form: {
        paddingTop: 20,
        margin: 30,
        float: "right",
        marginTop: 10,
        position: "relative",
      
    }
}

// const Search = () => {
//     const searchMethod = useSearchMethod(DataPH);

//     return (
// <div className="search">
//     <form className="form-line">
//         <input
//         className="form-control mr-sm-2"
//         type="search"
//         placeholder="Search"
//         aria-labe="Search"
//         onChange={e => searchMethod.handleInputChange(e)}
//         />
//          <button className="btn my-2 my-sm-0" type="submit">
//         Search
//     </button>
//     </form>
// </div>

//     )
// }
function Search ({handleInputChange}){
// const context = useContext(DataAreaContext)


    return(
        <>
        <div style={styles.form}>
            <form className="form-inline"> 
                
                <input  
                className="form-control mr-sm-2"
                type="Search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleInputChange} 
                style={styles.form}
                >

                </input>
            </form>
        </div>
        </>
    )
}

// class Search extends Component {

//     state= {employees: []};

//     componentDidMount(){
//         this.getEmployees();
//     };


//     getEmployees = () => {
//         axios.get("https://randomuser.me/api/").then((response)=>{
//             console.log(response.data);
//             this.setState({employees: (response.data.message)})
//             // console.log(Object.keys(response.data.message))
//         })
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <h1 className="text-center">Search by Employee Name</h1>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                     <select className="form-select" aria-label="Default select example">
//                     <option>Choose</option>
//                     {this.state.employees.map((employee)=>(
//                         <option value={employee} key={employee.id}>{employee}</option>
//                     ))}
       
// </select>
        
//                  </div>
//                 </div>
     
//                        </div>
//         );
//     }
// }

export default Search;