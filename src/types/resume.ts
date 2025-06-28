export interface ResumeSection {
  [fieldName: string]: string;
}

export interface Resume {
  [sectionId: string]: ResumeSection;
}
