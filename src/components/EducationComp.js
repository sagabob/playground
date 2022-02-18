import React from 'react'

const EducationComp = (eductionInfo) => {
    return (
        <div className="education-item-wrapper">
            <div className="education-item">
                <div className="education-icon">
                    <a href={eductionInfo.provider_link} target="_blank" rel="noreferrer" ><img src={eductionInfo.icon_link} alt="" /></a>
                </div>
                <div className="meta">
                    <span className="meta-title">{eductionInfo.title}</span>
                    <span >
                        <span>{eductionInfo.start}</span>
                        <span>&#8213;</span>
                        <span>{eductionInfo.end}</span>
                    </span>
                </div>
            </div>
            <div className="education-notes">
                <ul >
                    {eductionInfo.notes.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EducationComp