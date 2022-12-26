import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroSegment from '../src/components/intro_segment.js'
import SkillSegment from '../src/components/skill_segment.js'
import EducationSegment from '../src/components/education_segment.js'
import ProjectSegment from '../src/components/project_segment.js'
import ExperienceSegment from './components/experience_segment.js'
import CCASegment from '../src/components/cca_segment.js'
import AwardsSegment from '../src/components/awards_segment.js'
import Introduction from '../src/pages/introduction.js'
import PMaster from '../src/pages/pmaster.js'
import PosterSegment from '../src/components/pmaster_poster.js'
import DescriptionSegment from '../src/components/pmaster_description.js'
import TechSegment from './components/pmaster_tech.js'
import ScreenshotSegment from './components/pmaster_screenshot.js'
import ScrollToTop from "./pages/wrapper.js";

function App() {
  return (
    <BrowserRouter basename='/Portfolio_Wenxin'>
    <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Routes>
              
                <Route path="/" element={<Introduction />}>
                    <Route index element={<IntroSegment />} />
                    <Route path="Skills" element={<SkillSegment />} />
                    <Route path="Education" element={<EducationSegment />}/>
                    <Route path="Projects" element={<ProjectSegment />}>
                        
                    </Route>
                    <Route path="Experience" element={<ExperienceSegment />}/>
                    <Route path="CCA" element={<CCASegment />}/>
                    <Route path="Awards" element={<AwardsSegment />} />
                </Route>
                <Route path="/Projects/PMaster" element={<PMaster />}>
                    <Route index element={<DescriptionSegment />} />
                    <Route path="Poster" element={<PosterSegment />} />
                    <Route path="Tech" element={<TechSegment/>}/>
                    <Route path="Screenshot" element={<ScreenshotSegment />} />
                </Route>
                
              
            </Routes>
          </header>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}


export default App;
