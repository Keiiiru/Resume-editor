import { useState } from "react";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";
import "./App.css";
import type { Resume } from "./types/resume";
import { ResumeContext } from "./context/ResumeContext";

function App() {
  const [resume, setResume] = useState<Resume>({});

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      <div className="wrapper">
        <Editor />
        <Preview />
      </div>
    </ResumeContext.Provider>
  );
}

export default App;
