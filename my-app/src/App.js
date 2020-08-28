import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <table cellspacing="10">
          <tr>
            <td>
              <img
                className="main-img"
                src="./images/coast.jpg"
                alt="Coast"
                height="500px"
                width="1000px"
              />
            </td>
            <td>
              <h1>Max Guerin</h1>
              <p>
                <em>Junior Web Developer.</em>
              </p>
              <p>
                Learning how to create a website using HTML to start with. Learn
                CSS and Javascript further down the track.
              </p>
            </td>
          </tr>
        </table>

        <hr size="3" noshade />
        <h3>Things I've learned</h3>
        <ul>
          <li>How to start a new page.</li>
          <li>Using header tags, paragraph tages, and lists.</li>
          <li>Tables and Links.</li>
        </ul>
        <hr size="3" noshade />
        <h3>Work Experience</h3>
        <table cellspacing="10">
          <thead>
            <tr>
              <th>Dates</th>
              <th>Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2008-2012</td>
              <td>Snowboard Instructor</td>
            </tr>
            <tr>
              <td>2010-2018</td>
              <td>Trail builder</td>
            </tr>
          </tbody>
        </table>
        <hr size="3" noshade />
        <h3> Skills </h3>
        <table cellspacing="10">
          <tr>
            <td>Snowboarding</td>
            <td>
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                ⭐⭐⭐⭐⭐
              </span>
            </td>
            <td>Surfing</td>
            <td>
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                ⭐⭐⭐
              </span>
            </td>
          </tr>
          <tr>
            <td>Mountain Biking</td>
            <td>
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                ⭐⭐⭐⭐⭐
              </span>
            </td>
            <td>Web Development</td>
            <td>
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                ⭐
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
