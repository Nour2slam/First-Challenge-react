
// import './App.css';
import HeaderComponen from "./HeaderComponen";
import  "./HeaderComponenStyle.css"
import Component2 from  "./Component2";
import './Component2Style.css'
import ReturnParentButton from "./ParentButtonComponent";
import "./ParentButton.css"
function App() {
  let styles = {
    display : "flex" ,
    flexDirection : "row",
    justifyContent : "center",
    gap : "20px",
    marginTop : "170px",

  }
  return (
    <div className="App">
      <header className="App-header">
     <HeaderComponen />
      </header>
      <div style={styles}>
      <div className="secondComponent">
     <Component2 />
     <Component2 />
     <Component2 />
     <Component2 />
     <Component2 />
      </div>
      <div>
       <ReturnParentButton />
      </div></div>
    
    </div>
  );
}

export default App;
