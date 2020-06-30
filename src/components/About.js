import React, { useState } from "react"
import styled from "styled-components"
import { A, H, P } from "./typography"
import ArrowIcon from "./../../static/arrow.svg"

const AboutStyles = styled.section`
  padding: var(--section-padding);
`

const SkillsContainer = styled.div``

const SkillsFilters = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  & > li:first-child {
    font-weight: var(--font-medium);
    margin-right: 1rem;
  }

  & > li:not(:first-child) {
    padding: 0rem 1.3rem;
  }

  & > li.active-filter {
    background: ${props => props.theme.yellow};
    border-radius: 4px;
    border: none;

    & > a {
      color: ${props => props.theme.dark};
    }
  }
`

const SkillsUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;

  & > li {
    display: flex;
    align-items: center;
  }

  & > li::before {
    content: "";
    background-image: url(${ArrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    width: 4rem;
  }
`

const skillsData = {
  technologies: [
    "Javascript (ES6+)",
    "PHP",
    "GraphQL",
    "Styled-Components",
    "CSS (Grid + FlexBox)",
    "SCSS",
    "HTML5",
  ],
  databases: ["MySQL", "Firebase", "MongoDB"],
  frameworks: ["React.js", "Gatsby.js", "Bootstrap (CSS)"],
}

const filters = ["Technologies", "Databases", "Frameworks"]

const About = () => {
  const [currentFilter, setFilter] = useState(null)

  const renderSkills = () => {
    if (currentFilter && currentFilter in skillsData) {
      return skillsData[currentFilter].map(skill => <li>{skill}</li>)
    }

    return Object.values(skillsData)
      .flat()
      .map(skill => <li>{skill}</li>)
  }

  const onFilterClick = e => {
    const newFilter = e.target.innerText.toLowerCase()
    if (currentFilter === newFilter) {
      setFilter(null)
      return
    }
    setFilter(newFilter)
  }

  return (
    <AboutStyles>
      <H>About Me</H>

      <H as="h4"> A Full-Stack Web Developer</H>

      <P>
        I am passionate about making performant web and mobile apps, I also
        occasionally write articles on Javascript and other frameworks/tools.
      </P>

      <P>
        I started my coding journey back in 2018 when I first learned C++ in
        college, I liked how you could tell a computer to do something for you
        so, I fell in love with it, and since then I have been coding most of
        time.
      </P>
      <P>
        I have almost two years of experience in web development, The
        technologies I work with are JavaScript, PHP, GraphQL, HTML and CSS with
        a focus on the frameworks React.js, Gatsby, Next.js, Node and Express.
      </P>

      <P>
        I am currently freelancing so if you have any web development needs,
        feel free to <A href="#contact">contact</A>.
      </P>

      <SkillsContainer>
        <H as="h3">Skills</H>

        <SkillsFilters>
          <li>Filters:</li>
          {filters.map(filter => (
            <li
              className={
                currentFilter === filter.toLowerCase() && "active-filter"
              }
            >
              <A onClick={onFilterClick}>{filter}</A>
            </li>
          ))}
        </SkillsFilters>

        <SkillsUl>{renderSkills()}</SkillsUl>
      </SkillsContainer>
    </AboutStyles>
  )
}
export default About
