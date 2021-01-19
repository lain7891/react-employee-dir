import React from "react";
import Employee from "./components/Employee";
// import Footer from './components/Footer';
// import Header from './components/Header';


class App extends React.Component{
  render(){
    return(
<div className="App">
<h1>Hello</h1>
{/* <Header/> */}
<Employee/>
{/* <Footer/> */}
</div>
    )
  }
}

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
