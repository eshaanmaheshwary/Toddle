import "./App.css";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <Navbar />
      <br /> <br /> <br />
      <Welcome />
      <div className="container-fluid">
        <div className="p-3 rounded bg-dark">
          <center>
            <Button />
          </center>
        </div>
      </div>
      <Modal/>
     
    </>
  );
}

export default App;
