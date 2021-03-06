import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { successColor, warningColor } from '../utils/colors'

const ComppactProjectCard = (projectInfo) => {
    return (
        <div className='card project-compact-card' >
            <div className="project-card-section">
                <div className="project-wrapper">
                    <div className="project-image-area">
                        <img className="project-image" src={projectInfo.project_image} alt="location" />
                    </div>
                    <div className="project-header-wrapper">
                        <div className="project-header">
                            <div className="project-icon">
                                <div className="h-avatar">
                                    <img src={projectInfo.main_tool_icon} className="avatar" alt="" />                                    
                                </div>
                            </div>
                            <div className="meta">
                                <span className="meta-title">{projectInfo.title}</span>
                                <span >
                                    <span>{projectInfo.start_time}</span>
                                    <span>&#8213;</span>
                                    <span>{projectInfo.end_time}</span>
                                </span>
                            </div>
                            <div className="project-status">
                                <FontAwesomeIcon icon={faCheckCircle} color={projectInfo.isUpdated ? successColor : warningColor} data-tooltip="Tooltip Text"/>
                            </div>
                        </div>
                        <div className="project-notes">
                            <span>{projectInfo.note}</span>
                        </div>
                    </div>
                    <div className="project-notes-compact">
                        <div className="avatar-stack">
                            {projectInfo.tools.map((item, index) => (
                                <div key={index} className="h-avatar is-small">
                                    <a href={item.tool_link} className="avatar-link"><img className="avatar" src={item.tool_icon} alt="" /></a>
                                </div>
                            ))}
                        </div>
                        <a href={projectInfo.source_link} className="card-footer-item" target="_blank" rel="noreferrer"><span>View Source</span><FontAwesomeIcon icon={faExternalLink} /></a>
                        <a href={projectInfo.app_link} className="card-footer-item" target="_blank" rel="noreferrer"><span>View App</span><FontAwesomeIcon icon={faExternalLink} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComppactProjectCard