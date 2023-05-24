import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/createuser" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
