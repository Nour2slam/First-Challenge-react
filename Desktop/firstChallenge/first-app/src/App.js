
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
     <Component2 num="20" name="اكاديمية ترميز" title="اكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها"/>
     <Component2 name="Hello World !" title="This is hello world article"/>
     <Component2 name="post3" title="this is body of post3"/>
     <Component2 name="Article Card" title="Introduction to programming" />
     <Component2 name="Blog Card" title="Learn Web Development" />
      </div>
      <div>
       <ReturnParentButton />
      </div></div>
    
    </div>
  );
}

export default App;
