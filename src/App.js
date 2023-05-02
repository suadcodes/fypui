import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/layouts/Layout.js';
import PageNotFound from "./components/pages/AppPages/About.js";
import Events from "./components/pages/AppPages/Events.js";
import './components/pages/scss/App.scss';
import HomePage from "./components/pages/AppPages/HomePage.js";
import ProfilePage from "./components/pages/AppPages/Profile.js";
import About from "./components/pages/AppPages/About.js"
//import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path ='/Matches' element ={<Events/>}/>
          <Route path ='/Home' element ={<HomePage/>}/>
          <Route path ='/Profile' element ={<ProfilePage/>}/>
          <Route path ='/About' element ={<About/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>

  );
}


