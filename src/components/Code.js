import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 2rem 0;
  padding: 2rem 3rem;
  overflow-x: auto;
  border-radius: 3px;
  font-family: var(--font-code);
  font-size: var(--font-md);
  & .token-line {
    line-height: 1.7;
  }
`
const LineNo = styled.span`
  display: inline-block;
  min-width: 3.2rem;
  user-select: none;
  opacity: 0.3;
  margin-right: 0.5rem;
  display: none;
`
const LanguageName = styled.span`
  position: absolute;
  color: ${props => props.theme.light};
  background: ${props => props.theme.codeColor};
  text-transform: uppercase;
  bottom: 0;
  border-top-left-radius: 4px;
  right: 0;
  padding: 0.05rem 0.8rem;
  font-size: var(--font-xs);
`

const Code = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )
      }}
    </Highlight>
  )
}

export default Code
