import Header from "./Components/Header.js";
import './App.css';
import TextAreaDiv from "./Components/TextAreaDiv.js";


function App() {
  return (
    <div className="main-app-div">
      <Header home="Home" links="Word Counter" contact="Contact" aboutus="About Us" />
      <TextAreaDiv />
    </div>
  );
}

export default App;
