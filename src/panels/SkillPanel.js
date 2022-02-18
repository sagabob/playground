import React from 'react';

import ProfileData from '../content/profile.json'
import SkillComp from '../components/SkillComp';


const SkillPanel = () => {
    return <>
        <div className="card is-profile-card">
            <div className="profile-card-section">
                <h4>Skills</h4>
                <div className="section-content">
                    <div className="skill-wrapper">
                        {ProfileData.skills.skill_list.map((skill, index) => (
                            <SkillComp {...skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="profile-card-section">
                <h4>Frameworks / Platforms</h4>
                <div className="section-content">
                    <div className="skill-wrapper">
                        {ProfileData.skills.frameworks.map((skill, index) => (
                            <SkillComp {...skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SkillPanel;
