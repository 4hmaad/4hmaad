import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

const Pre = styled.pre`
  text-align: left;
  margin: 2rem 0;
  padding: 0.5rem;
  overflow-x: auto;
  border-radius: 3px;
  font-family: var(--font-code);
  & .token-line {
    line-height: 1.6;
  }
`
const LineNo = styled.span`
  display: inline-block;
  min-width: 3.2rem;
  user-select: none;
  opacity: 0.3;
  margin-right: 0.5rem;
`

const Code = ({ codeString, language }) => {
  console.log(codeString, language)
  console.log(defaultProps)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log({ className, style, tokens, getLineProps, getTokenProps })

        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
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
