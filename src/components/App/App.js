import TodoList from "../Util/TodoList";
import React, {useState} from "react";
function App() {
  
  const mainDivStyling = {
    // boxSizing: "border-box",
    // margin: "0px",
    // padding: "0px",
    display: "flex",
    backgroundColor: "purple",
    justifyContent: "center", 
    alignItems: "center",
    height: "100vh",
    padding: "15px",
  }
  const titleStyling = {
    display: "flex",
    backgroundColor: "#282c34",
    justifyContent: "center", 
    alignItems: "center",
    width: "500px",
    flexDirection: "column",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",

  }
  const headingColor = {
    color: "goldenrod",
    fontSize: "2rem",
    letterSpacing: "4px",
  }
  // const todos = [
  //   {
  //     id: 1,
  //     text: "learn react",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     text: "learn javascript",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     text: "learn mongodb",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 4,
  //     text: "learn express",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 5,
  //     text: "learn node",
  //     isCompleted: false,
  //   },
  // ]
 
  return (
    <>
      <div style={mainDivStyling}>
        <div style={titleStyling}>
          <h1 style={headingColor}>Accio Todo</h1>
         
          {/* List */}
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
