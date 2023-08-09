import { useState } from "react";
import PropTypes from "prop-types";

export default function PositionPage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description, qualification, skills, experience } = props;
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 border border-gray-300 rounded  mt-2 m-auto">
      <div
        className={`flex justify-between items-center cursor-pointer px-4 py-3 rounded-t ${
          isOpen ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180 " : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all text-start bg-gray-50 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="sub-job">
          <h3 className="sub-job-title">JOB DESCRIPTION</h3>
          <p className="sub-job-desc">{description}</p>
        </div>
        <div className="sub-job">
          <h3 className="sub-job-title">QUALIFICATION </h3>
          <p className="sub-job-desc">{qualification}</p>
        </div>
        <div className="sub-job">
          <h3 className="sub-job-title">SKILLS </h3>
          <p className="sub-job-desc">{skills}</p>
        </div>
        <div className="sub-job">
          <h3 className="sub-job-title">EXPERIENCE </h3>
          <p className="sub-job-desc">{experience} Years</p>
        </div>
      </div>
    </div>
  );
}

PositionPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};
