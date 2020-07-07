import React, { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

import { A, H, P } from "../typography"
import Icon from "../Icon"

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
  user-select: none;

  & > li:first-child {
    font-weight: var(--font-medium);
    margin-right: 1rem;
  }

  & > li:not(:first-child) {
    padding: 0rem 1.3rem;
  }

  & > li.active-filter {
    background: ${props => props.theme.mainColor};
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
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 3rem;
  margin-top: 4rem;

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
      font-size: var(--font-xs);
    }

    svg {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`

const skillsData = {
  Technologies: [
    "Javascript",
    "PHP",
    "Node.js",
    "GraphQL",
    "Redux",
    "Apollo GraphQL",
    "Styled-Components",
    "Sass",
    "CSS3",
    "HTML5",
  ],
  Databases: ["MySQL", "Firebase", "MongoDB"],
  Frameworks: ["React", "Gatsby", "Bootstrap"],
}

const About = () => {
  const [currentFilter, setFilter] = useState(null)

  const renderSkills = () => {
    const skillHTML = (skill, idx) => (
      <li key={idx}>
        <Icon type={skill.toLowerCase()} />
        <P as="span" small>
          {skill}
        </P>
      </li>
    )

    if (currentFilter && currentFilter in skillsData) {
      return skillsData[currentFilter].map((skill, idx) =>
        skillHTML(skill, idx)
      )
    }

    return Object.values(skillsData)
      .flat()
      .map((skill, idx) => skillHTML(skill, idx))
  }

  const onFilterClick = e => {
    const newFilter = e.target.innerText.trim()
    if (currentFilter === newFilter) {
      setFilter(null)
      return
    }
    setFilter(newFilter)
  }

  return (
    <AboutStyles id="about">
      <H>About Me</H>

      <H as="h4">A Web Software Developer</H>

      <P>
        I create performant and secure apps to make humans life easier, I also
        occasionally write articles on Javascript and other frameworks/tools.
      </P>

      <P>
        I started my coding journey back when I first learned C++ in college, I
        liked how you could tell a computer to do something for you, so, I fell
        in love with it, and since then I have been coding most of the time.
      </P>

      <P>
        I have over two years of experience, The technologies I work with are
        JavaScript, PHP, GraphQL, HTML and CSS with a focus on the frameworks
        React.js, Gatsby, Node and Express.
      </P>

      <P>
        I am currently freelancing so if you have any web development needs,
        feel free to{" "}
        <A
          to="contact"
          as={ScrollLink}
          smooth={true}
          offset={100}
          duration={1500}
        >
          contact
        </A>
        .
      </P>

      <SkillsContainer>
        <H as="h4">What I've worked with so far</H>

        <SkillsFilters>
          <li>Filters:</li>
          {Object.keys(skillsData).map((filter, idx) => (
            <li
              key={idx}
              className={currentFilter === filter ? "active-filter" : ""}
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
