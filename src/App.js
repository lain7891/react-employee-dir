import React from "react";
import Employee from "./components/Employee";

import { HashRouter as Router, Route } from "react-router-dom";
import Main from './main';
import DataPlaceHolder from "./components/DataPlaceHolder"
// import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    // <Router basename="/">
    //   <Route exact path="/" component={Search} />
    //   <Route exact path="/Search" component={Search} />
    //   <Route exact path="/Employee" component={Employee} />
    //   <Route exact path="/DataPlaceHolder" component={DataPlaceHolder}/>
    // </Router>
    <>
<Main/>
    </>
  );
}

// class App extends React.Component{
//   render(){
//     return(
// <div className="App">
// <h1>Hello</h1>
// {/* <Header/> */}
// <Employee/>
// {/* <Footer/> */}

// </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//      <Header/>

// <Employee/>
// <Footer/>
//     </div>
//   );
// }

export default App;
