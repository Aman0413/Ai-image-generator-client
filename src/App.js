import React from 'react';
import Prompt from './componets/prompt/Prompt';
import { Route, Routes } from 'react-router-dom';
import CommunityPost from './componets/communityposts/CommunityPost';
import Navbar from './componets/navbar/Navbar';
import Footer from './componets/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Prompt />} />
        <Route path="/community" element={<CommunityPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
