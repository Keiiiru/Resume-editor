import { createContext } from "react";
import type { Resume } from "../types/resume";

interface ResumeContextType {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);
