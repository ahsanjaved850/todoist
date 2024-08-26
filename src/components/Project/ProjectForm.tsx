import React, { useRef } from "react";
import {
  ProjectData,
  ProjectFormDiv,
  ProjectFormLayout,
  StyledInput,
  ProjectButtons,
} from "./project.style";
import { useNavigate } from "react-router-dom";

interface ProjectFormProps {
  onClose: () => void;
  addProjectName: (name: string) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  onClose,
  addProjectName,
}) => {
  const projectNameRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleProjectName = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectName = projectNameRef.current?.value;
    if (projectName) {
      addProjectName(projectName);
      navigate(`/myprojects/${projectName}`);
      onClose();
    }
  };

  return (
    <ProjectFormDiv>
      <ProjectData>
        <h3>Add Project</h3>
        <ProjectFormLayout>
          <h3>Name</h3>
          <StyledInput type="text" inputRef={projectNameRef} disableUnderline />
        </ProjectFormLayout>
        <ProjectButtons>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="proBtn" onClick={handleProjectName}>
            Add Project
          </button>
        </ProjectButtons>
      </ProjectData>
    </ProjectFormDiv>
  );
};

export default ProjectForm;
