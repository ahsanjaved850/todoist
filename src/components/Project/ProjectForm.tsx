import React, { useRef, useState } from "react";
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
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
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

  const handleInputChange = () => {
    const projectName = projectNameRef.current?.value || "";
    setIsButtonDisabled(projectName.trim() === "");
  };

  return (
    <ProjectFormDiv>
      <ProjectData>
        <h3>Add Project</h3>
        <ProjectFormLayout>
          <h3>Name</h3>
          <StyledInput
            type="text"
            inputRef={projectNameRef}
            disableUnderline
            onChange={handleInputChange}
          />
        </ProjectFormLayout>
        <ProjectButtons>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="proBtn"
            onClick={handleProjectName}
            disabled={isButtonDisabled}
          >
            Add Project
          </button>
        </ProjectButtons>
      </ProjectData>
    </ProjectFormDiv>
  );
};

export default ProjectForm;
