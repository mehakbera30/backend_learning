
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Feed from './pages/Feed';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Post/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
