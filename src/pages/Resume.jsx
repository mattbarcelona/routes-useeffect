import { studies, experiences } from "../data/resume";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <>
      <div>
        <h3>Studies</h3>
        <ul>
          {studies.map((study) => (
            <li>
              {study.title} - {study.institution}({study.date})
            </li>
          ))}
        </ul>
      </div>
      <div className="divExperience">
        <h3>Experiences</h3>
        <ul>
          {experiences.map((experience) => (
            <li>
              {experience.title} -{experience.company}({experience.date})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Resume;
