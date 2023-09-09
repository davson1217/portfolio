import React from "react";
import '../styles/section-header.css'

const SectionHeader = ({title, classNames}) => {
    return (
        <header className={`underline-title mb-5 ${classNames.join(' ')}`}>{title}</header>
    )
}

export default SectionHeader;