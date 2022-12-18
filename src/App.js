import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroSegment from '../src/components/intro_segment.js'
import SkillSegment from '../src/components/skill_segment.js'
import EducationSegment from '../src/components/education_segment.js'
import ProjectSegment from '../src/components/project_segment.js'
import ExperienceSegment from './components/experience_segment.js'
import Introduction from '../src/pages/introduction.js'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Introduction />}>
                <Route index element={<IntroSegment />} />
                <Route path="Skills" element={<SkillSegment />} />
                <Route path="Education" element={<EducationSegment />}/>
                <Route path="Projects" element={<ProjectSegment />}/>
                <Route path="Experience" element={<ExperienceSegment />}/>
            </Route>
            
          
        </Routes>
    </BrowserRouter>
  );
}


export default App;
