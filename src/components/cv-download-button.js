import React from 'react';
import '../styles/download-btn.css';

const CvDownloadButton = () => {
    return (
        <a className="bg-success cv-download-btn p-1" href="My_Resume.pdf" download="david_olurebi_cv.pdf">
            Download CV
        </a>
    );
};

export default CvDownloadButton;