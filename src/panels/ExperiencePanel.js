import React from 'react'
import profileData from '../content/profile.json';
import WorksplaceComp from '../components/WorkplaceComp';

const ExperiencePanel = () => {
    return (
        <div className="card is-profile-card">
            <div className="profile-card-section">
                <h4 >
                    Technical Summary
                </h4>
                <div className="section-content">
                    <p className="bio-description">
                        {profileData.experience.technical_highlight.summary}
                    </p>
                    <ul className="bio-highlight">
                        {profileData.experience.technical_highlight.highlights.map((x, index) =>
                        (<li key={index}>
                            {x}
                        </li>))}
                    </ul>
                </div>
            </div>
            <div className="profile-card-section">
                <h4 >
                    Experience
                </h4>
                <div className="section-content">
                    <div className="experience-wrapper">
                        {profileData.experience.workplaces.map((worksplace, index) => (
                            <WorksplaceComp {...worksplace} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePanel