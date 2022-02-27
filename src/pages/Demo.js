import React from 'react'
import ComppactProjectCard from '../components/ComppactProjectCard'
import ProjectCard from '../components/ProjectCard'
import ProfileData from '../content/profile.json'

const Demo = () => {

    const numberOfGroups = 4
    const groups = []
    for (let i = 0; i < numberOfGroups; i++)
        groups[i] = []

    let totalLength = ProfileData.projects.length    
    let times = Math.ceil(totalLength/numberOfGroups)
    
    for (let t = 0; t < times; t++) {
        for (let m = 0; m < numberOfGroups; m++) {
            let ele = numberOfGroups * t + m
            if (ele < totalLength)
                groups[m].push(ProfileData.projects[ele])
        }
    }


     
    return (
        <div className="app-wrapper">
            <div className="container app-content">
                <h2>Playground</h2>
                <div className="container mt-6">
                    <div className="columns is-multiline">
                        {groups.map((group_item, index) => (
                            <div className="column is-one-quarter-fullhd is-one-quarter-widescreen is-one-third-desktop is-one-third-tablet is-mobile" key ={index}>
                            {group_item.map((item, subindex) => (
                                index%2===0 ?<ProjectCard {...item} key={subindex} />: <ComppactProjectCard  {...item} key={subindex} />                                
                            ))}
                            </div>
                        ))}                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo