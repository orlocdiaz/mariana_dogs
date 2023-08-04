// //mio

// import './App.css';
// import axios from 'axios';
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import Home from './pages/home/home';

// import DogCreated from './components/DogCreated/DogCreated';
// import Detail from './components/Detail/Detail';
// import NavBar from './components/NavBar/NavBar';

// axios.defaults.baseURL='http://localhost:3001';

// function App() {

//  const location= useLocation();

//   return (
//     <div className="App">
//       {location.pathname !== "/"&& <NavBar/>}
//       <Routes>
//         <Route  exact path="/" Component={LandingPage}/>;
//         <Route  path="/home" Component={Home}/>;
//         <Route  path="/create" Component={DogCreated}/>;
//         <Route  path="/detail/:id" Component={Detail}/>;

//       </Routes>

//     </div>
//   );
// }

// export default App;

//**********************************

// import './App.css';
// // import axios from 'axios';
// // //import React, {useState} from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';
// import Home from './components/Home/Home';
// import LandingPage from './components/LandingPage/LandingPage';
// import DogCreated from './components/DogCreated/DogCreated';
// import Detail from './components/Detail/Detail';
// import NavBar from './components/NavBar/NavBar';
// import Error404 from './components/Error404/Error404';

// axios.defaults.baseURL='http://localhost:3001';

// function App() {

//  const location= useLocation();

//   return (
//     <div className="App">
//       <Home/>
//       <Detail/>
//       <Create/>
//       <Landing/>

//     </div>
//   );
// }

// export default App;
////////////////////////

// import React, { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './views/home/Home'
// import { Nav } from './components/nav/Nav'
// import Breed from './views/breed/Breed'
// import Landing from './views/landing/Landing'
// import CreateBreed from './views/createBreed/CreateBreed'

// function App() {
//   const [input, setInput] = useState('')

//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/" component={Landing} />
//         <Route path="/">
//           <Nav setInput={setInput} input={input} />
//           <Route
//             exact
//             path="/home"
//             render={() => <Home setInput={setInput} input={input} />}
//           />
//           <Route exact path="/create" component={CreateBreed} />
//           <Route
//             exact
//             path="/detail/:id"
//             render={({ match }) => <Breed id={match.params.id}></Breed>}
//           ></Route>
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

//

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/landing';
import Detail from './pages/detail/detail';
import Home from './pages/home/home';
// import { Form } from 'react-router-dom';
import Form from './pages/form/form';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/detail/:id" element={<Detail />} />;
        <Route path="/create" element={<Form />} />;
      </Routes>
    </div>
  );
}

export default App;
