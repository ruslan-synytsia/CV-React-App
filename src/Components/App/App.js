import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from "../Common/Notfound/NotFound";
import Contacts from "../Pages/Contacts/Contacts";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";
import Main from "../Pages/Main/Main";
import Layout from "../Common/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />} >
          <Route path={'*'} element={<NotFound />} />
          <Route path={'contacts'} element={<Contacts />} />
          <Route path={'projects'} element={<Projects />} />
          <Route path={'about'} element={<About />} />
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;
