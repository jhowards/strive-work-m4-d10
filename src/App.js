import "./App.css";
import Sidebar from "./Components/Sidebar";
import PlayBar from "./Components/PlayBar";
import Homepage from "./Components/Homepage";
import AlbumPage from "./Components/AlbumPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid flexbody px-0">
      <Router>
        <Sidebar />
        <PlayBar />
        <Route path="/" exact component={Homepage} />
        <Route path="/album/:id" exact component={AlbumPage} />
      </Router>
    </div>
  );
}

export default App;
