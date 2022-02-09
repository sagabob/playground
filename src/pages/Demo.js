import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { IsMobile, IsTablet, IsDesktop, TabOffsetFromTop , TabOffsetFromTop1} from '../utils/constants'


const Demo = () => {
  const { screenSizeMode, scrollValue } = useContext(AppContext);

  const stickyTabStyle = {
    "position": "fixed",
    "top": screenSizeMode !== IsDesktop ? "47px" : "0px",
    "left": "0px",   
    "zIndex": 27,  
    "width": "100vw"     
  };

  const stickyTabStyle1 = {
    "position": "fixed",
    "top": screenSizeMode !== IsDesktop ? "110px" : "63px",
    "left": "0px",   
    "zIndex": 25,  
    "width": "100vw"     
  };

  const isTabSticky = (scrollValue > TabOffsetFromTop)
  const appliedTabStyle = isTabSticky ? stickyTabStyle : {};

  const isTabSticky1 = (scrollValue > TabOffsetFromTop1)
  const appliedTabStyle1 = isTabSticky1 ? stickyTabStyle1 : {};
  const appliedTabClassName = isTabSticky ? "panel has-background-grey p-3" : "panel  m-2 has-background-grey p-3 is-shadowless";
  const appliedTabClassName1 = isTabSticky ? "panel has-background-danger p-3" : "panel  m-2 has-background-danger p-3 is-shadowless";

  return (
    <>
      <div className="app-wrapper">
        <div className="container app-content">
          <h2>Demo</h2>
          <div className="app-body">
            <div className="columns">
              <div className="column is-4">
                <article className="panel  is-link">
                  <p className="panel-heading">
                    Menu
                  </p>
                  <a className="panel-block is-active">
                    Link 1
                  </a>
                  <a className="panel-block">
                    Link 2
                  </a>
                  <a className="panel-block">
                    Link 3
                  </a>
                  <a className="panel-block">
                    Link 4
                  </a>
                  <a className="panel-block">
                    Link 5
                  </a>
                  <a className="panel-block">
                    Link 6
                  </a>
                </article>
              </div>
              <div className="column is-8">
                <article className="panel is-shadowless is-primary has-background-grey-lighter">
                  <p className="panel-heading">
                    Sales
                  </p>
                  <div className="box">
                    Heading
                  </div>
                  <div className={appliedTabClassName} style={appliedTabStyle}>
                    <div className="buttons has-addons">
                      <button class="button">Yes</button>
                      <button class="button">Maybe</button>
                      <button class="button">No</button>
                    </div>
                  </div>

                  <div className="box h-1 m-3 has-background-info-light">
                    content
                  </div>
                  <div className="box h-1 m-3 has-background-success-light">
                    content 1
                  </div>
                  <div className={appliedTabClassName1} style={appliedTabStyle1}>
                    <div className="buttons has-addons is-centered">
                      <button class="button">Yes</button>
                      <button class="button">Maybe</button>
                      <button class="button">No</button>
                    </div>
                  </div>
                  <div className="box h-1 m-3 has-background-danger-light">
                    content 2
                  </div>
                  <div className="box h-1 m-3 has-background-warning-light ">
                    content 3
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo