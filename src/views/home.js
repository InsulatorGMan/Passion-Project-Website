import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jolly Knotty Rhinoceros</title>
        <meta property="og:title" content="Jolly Knotty Rhinoceros" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="home-navbar-interactive"
      ></header>
      <div className="home-hero">
        <h1 className="home-text">
          <span className="home-text01">How to help</span>
          <br></br>
          <span>The Homeless</span>
          <br></br>
        </h1>
        <div className="home-container1"></div>
      </div>
      <h1 className="home-text05">
        <span>Stats</span>
        <br></br>
      </h1>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text08">
            <span>180,000</span>
            <span>+</span>
          </h1>
          <span className="home-text11">Homeless</span>
          <span className="home-text12">In Chicago alone</span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text13">7%</h1>
          <span className="home-text14">Low Income</span>
          <span className="home-text15">Low income population</span>
        </div>
      </div>
      <div className="home-steps">
        <h1 className="home-text16">
          <span>The Plan</span>
          <br></br>
        </h1>
        <div className="home-container2">
          <div className="home-container3">
            <div className="home-step">
              <h1 className="home-text19">
                <span>1</span>
              </h1>
              <h1 className="home-text21">
                <span>The Question</span>
                <br></br>
              </h1>
              <span className="home-text24">
                <span>
                  It all began when I had the question, Why don&apos;t homeless
                  people take advantage of government programs
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-step1">
              <h1 className="home-text27">
                <span>2</span>
              </h1>
              <h1 className="home-text29">
                <span>Research</span>
                <br></br>
              </h1>
              <span className="home-text32">
                When researching I found that many programs exist to help these
                homeless people yet most do not take advantage of them.
              </span>
            </div>
          </div>
          <div className="home-container4">
            <div className="home-step2">
              <h1 className="home-text33">3</h1>
              <h1 className="home-text34">Ideas</h1>
              <span className="home-text35">
                <span>
                  My idea is that the ~7% of the population that are homeless
                  don&apos;t have access to internet or lack a way of finding
                  out that these programs exist and can help them.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-step3">
              <h1 className="home-text38">
                <span>4</span>
              </h1>
              <h1 className="home-text40">The Product</h1>
              <span className="home-text41">
                <span>
                  My idea is to create ways of advertising to homeless people
                  about these programs. By either putting pamphlet stations
                  where they can read about the services or by renting
                  billboards. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
