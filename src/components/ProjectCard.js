import React from 'react'

const ProjectCard = (projectInfo) => {
  return (
    <div className='card project-card'>
      <div className="project-card-section">
        
        <div className="section-content">
          <div className="project-wrapper">
            <div className="project-item-wrapper">
              <div className="project-item">
                <div className="project-icon">
                  <a href={projectInfo.link} target="_blank" rel="noreferrer" ><img src={projectInfo.main_tool_icon} alt="" /></a>
                </div>
                <div className="meta">
                  <span className="meta-title">{projectInfo.title}</span>
                  <span >
                    <span>{projectInfo.start_time}</span>
                    <span>&#8213;</span>
                    <span>{projectInfo.end_time}</span>
                  </span>                  
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard