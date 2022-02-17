import React from 'react'
import ProfileData from '../content/profile.json'
import CertificationComp from '../components/CertificationComp'
import SkillAltComp from '../components/SkillAltComp'

const CertificatePanel = () => {
    return (
        <div className="card is-profile-card">
            <div className="profile-card-section">
                <h4 >
                    Tools
                </h4>
                <div className="section-content">
                    <div className="skill-wrapper">
                        {ProfileData.skills.tools.map((skill, index) => (
                            <SkillAltComp {...skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="profile-card-section">
                <h4 >
                    Certificates
                </h4>
                <div className="section-content">
                    <div className="certification-wrapper">
                        {ProfileData.skills.certificates.map((skill, index) => (
                            <CertificationComp {...skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificatePanel