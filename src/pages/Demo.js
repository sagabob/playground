import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProfileData from '../content/profile.json'

const Demo = () => {
    return (
        <div className="app-wrapper">
            <div className="container app-content">
                <h2>Playground</h2>
                <div className="container mt-6">
                    <div className="columns is-multiline">
                        <div className="column is-one-quarter-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-mobile">
                            {ProfileData.projects.map((item, index) => (
                                <ProjectCard {...item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo