import axios from "axios";

export default {
    getRandomEmployee: function(){
        return axios.get("https://randomuser.me/api/?results=50")
    }
};


// randomEmployee = () => {
//     axios.get("https://randomuser.me/api/").then(response => {
//         console.log(response.data.results);
//         this.setState({
//             employees: response.data.results,
//         })
//     }).catch((err) => {
//         console.log(err)
//     })
   
// // API.getRandomEmployee().then(res => this.setState({employees: res.data})).catch(err => console.log(err))
// };