import React from "react"
import "../styles/NoMatch.css"
import Background from '../kevin/Background'

export default function Nomatch() {
  return (
    <div class="stars">
      <div class="central-body">
        <div>
        <Background />
          <img
            class="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
        </div>
        <div>
          <a href="http://localhost:3000/" class="btn-go-home">
            GO BACK HOME
          </a>
        </div>
      </div>
      <div class="objects">
        <img
          class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
          />
          <img
            class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
          />
        </div>
      </div>
      {/* <div class="glowing_stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div> */}
    </div>
  )
}
