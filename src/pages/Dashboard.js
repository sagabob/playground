import React from 'react'
import ComppactProjectCard from '../components/ComppactProjectCard'
import ProjectCard from '../components/ProjectCard'
import ProfileData from '../content/profile.json'

const Dashboard = () => {

  return (
    <div className="app-wrapper">
      <div className="container app-content">
        <h2>Playground</h2>
        <div className="container mt-6">
          <div className="row is-flex is-flex-direction-row">
            {ProfileData.projects.map((group_item, index) => (
              index % 2 === 0 ? (
                <div className="column is-one-quarter-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-mobile" key={index}>
                  <ProjectCard {...group_item} key={index} />
                </div>)
                : (<div className="column is-one-quarter-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-mobile" key={index}>
                  <ComppactProjectCard  {...group_item} key={index} />
                </div>)
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard