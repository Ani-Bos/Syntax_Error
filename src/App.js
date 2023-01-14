import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Signup from "./pages/Login/Signup"
import Login from "./pages/Login/Login"
import Password from "./pages/Login/Password";
import SideNav from "./components/SideNavbar/SideNavbar";
function App() {
  //  return <Home />;
  return <SideNav/>
  // return <Signup />;
  //  return <Login />;
  //  return <Password/>;
  // <Router>
  //   <Routes>
  //     <Route exact path="/" element={<Home/>} />
  //   </Routes>
  // </Router>;
}

export default App;

