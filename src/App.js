
import "./App.css";
import Home from "./components/pages/Home/Home.js"
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout.js"

import Events from "./components/event/viewevent.js"
import AddEvent from "./components/event/addevent.js"
import UpdateEvent from "./components/event/updateevent.js"

import ViewSession from "./components/sessions/ViewSession/ViewSession";

import SingleSession from "./components/sessions/SingleSession/SingleSession";
import Addsession from "./components/sessions/AddSession/AddSession.js"
import About from "./components/pages/Aboutus/About.js"
import "@stripe/stripe-js";
import View from "./components/sehan/view.js"
import Edit from "./components/sehan/Edit";
import Details from "./components/sehan/Details";
import New from "./components/sehan/New";
import Donate from "./components/Donate/Donate.js";
import Sponsor from "./components/sponger/Sponger.js"
import ViewSingleEvent from "./components/event/viewsingleevent.js"
import Cancel from "./components/cardalert/failure/failure.js"
import { UserContextProvider } from "./components/context/UserContext.js"
// import Viewsession from "./components/sessions/ViewSession/ViewSession";
import Editsession from "./components/sessions/Editsession/Editsession";
import Index from './components/sessions/index'
// import ViewSession from "./components/sessions/ViewSession/ViewSession";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sponsor-a-child" element={<Sponsor />} />
            <Route path="/create" element={<Addsession />} />
            <Route path="/edit/:id" element={<Editsession />} />
            <Route path="/post/:id" element={<SingleSession />} />
            <Route path="/sessions" element={<Index />} />
            <Route path="/view" element={<View />} />
            <Route path="/details" element={<Details />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/new" element={<New />} />
            <Route path="/cancel" element={<Cancel />} />
              <Route path="/Events" element={<Events />} />
          <Route path="/Events/Add" element={<AddEvent />} />
          <Route path="/Events/ViewEvent/:id" element={<ViewSingleEvent />} />
          <Route path="/Events/Update/:id" element={<UpdateEvent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>

  );
}

export default App;