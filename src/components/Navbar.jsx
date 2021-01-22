import React from 'react';

const styles = {
    navbar: {
        background: "lightBlue",
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
        fontSize: "10%",
        fontColor: "white",
        textAlign: "center"

    }
}

const Navbar = () => {
    return (
     
        <nav className="navbar" style={styles.navbar}>
          <div className="container">
            <span className="h1" >Employee Directory</span>
          </div>
        </nav>
    );
};

export default Navbar;