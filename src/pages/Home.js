import React from 'react'
import BackgroundAnimation from '../components/BackgroundAnimation'

const Home = () => {

  return (
    <>
      <BackgroundAnimation > </BackgroundAnimation >
        <div className="app-wrapper" >
          <div className="container app-content">
            <h2>HOME</h2>
            <div className="container mt-6">
              <div className="columns is-centered">
                <div className="column is-6">
                  <section id="terminal">
                    <nav className="terminal_nav">
                      <div className="terminal_nav__btns">
                        <button class="terminal_nav__btn t-exit">&#10005;</button>
                        <button class="terminal_nav__btn">&#9723;</button>
                        <button class="terminal_nav__btn">&#9472;</button>
                      </div>
                      <p class="terminal_nav__title">Terminal</p>
                    </nav>
                    <section id="terminal_body">
                      <div class="terminal__text">- 👋 Hi, my name is Bob Pham, a full-stack DotNet developer</div>
                      <div class="terminal__text">- 📌 Living in Melbourne, Australia</div>
                      <div class="terminal__text">- 📫 Reach me: bobpham.tdp@gmail.com</div>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}

export default Home