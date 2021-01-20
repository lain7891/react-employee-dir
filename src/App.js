import React from "react";
import Employee from "./components/Employee";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
// import Footer from './components/Footer';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Search} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/Employee" component={Employee} />
    </Router>
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
