import React, { useState, useContext } from 'react'
import ProfileHeaderPanel from '../panels/ProfileHeaderPanel'
import ExperiencePanel from '../panels/ExperiencePanel'
import SkillPanel from '../panels/SkillPanel'
import AppContext from '../AppContext'
import { TabContainer } from '../styles/container-styles'
import { IsDesktop } from '../utils/constants';
import CertificatePanel from '../panels/CertificatePanel'
import HobbyPanel from '../panels/HobbyPanel'

const About = () => {
  const [tabActive, setTabActive] = useState(0);
  const { screenSizeMode, scrollValue } = useContext(AppContext);


  const outputTabClassAndStyle = (inputScreenSizeMode, inputScrollValue) => {

    const stickyTabStyle = {
      "position": "fixed",
      "top": inputScreenSizeMode !== IsDesktop ? "47px" : "0px",
      "left": "0px",
      "width": "100vw",
      "zIndex": 25,
      "backgroundColor": "#77d2f3"
    };

    let tabOffSetTop = 350

    const isTabSticky = inputScrollValue > tabOffSetTop;
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
                      <li className={tabActive === 2 ? "is-active" : ""} onClick={() => setTabActive(2)}><a>Hobbies</a></li>
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
                  <TabContainer isActive={2 === tabActive}>
                    <HobbyPanel />
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