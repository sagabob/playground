import React, { useState, useContext } from 'react'
import ProfileHeaderPanel from '../panels/ProfileHeaderPanel'
import ExperiencePanel from '../panels/ExperiencePanel'
import SkillPanel from '../panels/SkillPanel'
import AppContext from '../AppContext'
import { TabContainer } from '../styles/container-styles'
import CertificatePanel from '../panels/CertificatePanel'
import HobbyPanel from '../panels/HobbyPanel'
import SportPanel from '../panels/SportPanel'
import { TabOffSetTop_About } from '../layouts/layout_config'
import { detectTabStyleBasedOnScreenMode } from '../utils/helpers'

const About = () => {
  const [tabActive, setTabActive] = useState(0);
  const { screenSizeMode, scrollValue } = useContext(AppContext);


  const outputTabClassAndStyle = (inputScreenSizeMode, inputScrollValue) => {

    const stickyTabStyle = detectTabStyleBasedOnScreenMode(inputScreenSizeMode);
    const isTabSticky = inputScrollValue > TabOffSetTop_About;
    const appliedTabStyle = isTabSticky ? stickyTabStyle : {};
    const appliedTabClassName = isTabSticky ? "panel" : "panel is-shadowless is-primary half-bottom-margin";

    return { appliedTabStyle, appliedTabClassName }
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>About</h2>
          <ProfileHeaderPanel />
          <div className="container mt-6">
            <div className="columns">
              <div className="column is-8">
                <article id="profile-tab-wrapper" className={outputTabClassAndStyle(screenSizeMode, scrollValue).appliedTabClassName} style={outputTabClassAndStyle(screenSizeMode, scrollValue).appliedTabStyle}>
                  <div className="tabs is-centered  is-toggle">
                    <ul>
                      <li className={tabActive === 0 ? "is-active" : ""} onClick={() => setTabActive(0)}><a>Experience</a></li>
                      <li className={tabActive === 1 ? "is-active" : ""} onClick={() => setTabActive(1)}><a>Skills</a></li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <div className="columns">
              <div className="column is-8">
                <div className="panel-wrapper">
                  <TabContainer isActive={0 === tabActive}>
                    <ExperiencePanel />
                  </TabContainer >
                  <TabContainer isActive={1 === tabActive}>
                    <SkillPanel />
                  </TabContainer>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel-wrapper">
                  <CertificatePanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About