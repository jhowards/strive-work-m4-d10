import "./App.css";
import Sidebar from "./Components/Sidebar";
import PlayBar from "./Components/PlayBar";
import Homepage from "./Components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div class="container-fluid flexbody px-0">
          <Sidebar />
          <PlayBar />
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/album/:id" exact component={ShowDetail} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
