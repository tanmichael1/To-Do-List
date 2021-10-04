import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="aboutMain">
          <h1 data-testid="about-page-header">About</h1>
          <p>
            This is a simple to-do list app to demonstrate my React knowledge.
          </p>
        </div>
        <div className="aboutFooter">
          <p>
            <a
              className="transition duration-500 ease-in-out border-b border-pink-600 font-medium text-pink-600 hover:text-pink-500"
              href="https://github.com/tanmichael1/To-Do-List"
              target="_blank"
              rel="noreferrer"
            >
              View the code on GitHub &rarr;
            </a>
          </p>

          <p>
            <NavLink
              exact
              to="/"
              className="transition duration-500 ease-in-out border-b border-pink-600 font-medium text-pink-600 hover:text-pink-500"
            >
              &larr; Back to Todo List
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
