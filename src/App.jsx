import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 // Navbar
import Navbar from "./Components/Navbar.jsx";
// pages
import Home from "./Pages/Home.jsx";
import Tutorials from "./Pages/Tutorials.jsx";
import About from "./Pages/About.jsx";
import Docs from "./Pages/Docs.jsx";

  // Documentation
import Introduction from "./Documentation/Introduction.jsx";
import InstallGit from "./Documentation/Installgit.jsx";
import GitBasics from "./Documentation/Git-basics.jsx";
import Populargitcommands from "./Documentation/Populargitcommands.jsx";
import BranchMerging from "./Documentation/BranchMerging.jsx";
import GitHubBasics from "./Documentation/GitHubBasics.jsx";
import PushToGithub from "./Documentation/pushtoGithub.jsx";
import DeploymentGuide  from "./Documentation/DeploymentGuide.jsx";
import MastertoGitHub from "./Documentation/MastertoGitHub.jsx";
import GitError from "./Documentation/GitError.jsx";
import BestPractices from "./Documentation/BestPractices.jsx";




function App() {
  return (
    <Router>
        {/* components */}
      <Navbar />
      
      <Routes>
        {/* pages */}
          <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/Tutorials" element={<Tutorials />} />
           <Route path="/About" element={<About/>} />

             {/* Documentation */}
        <Route path="/introduction" element={<Introduction />} />
         <Route path="/InstallGit" element={<InstallGit />} />
          <Route path="/Git-basics" element={<GitBasics />} />
           <Route path="/Popular-git-commands" element={<Populargitcommands />} />
            <Route path="/git-branches" element={<BranchMerging />} />
              <Route path="/github-basics" element={<GitHubBasics />} />
              <Route path="/Push-to-github" element={<PushToGithub />} />
               <Route path="/Deployment" element={<DeploymentGuide />} />
                <Route path="/MasterGithub" element={<MastertoGitHub />} />
                <Route path="/git-errors" element={<GitError />} />
                 <Route path="/best-practices" element={<BestPractices />} />
               
                
      </Routes>
     
    </Router>

  );
}

export default App;
