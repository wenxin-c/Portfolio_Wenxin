import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroSegment from '../src/components/intro_segment.js'
import SkillSegment from '../src/components/skill_segment.js'
import Introduction from '../src/pages/introduction.js'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Introduction />}>
                <Route index element={<IntroSegment />} />
                <Route path="Skills" element={<SkillSegment />} />
            </Route>
            
          
        </Routes>
    </BrowserRouter>
  );
}


export default App;
