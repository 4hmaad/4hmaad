import styled from "styled-components"

export default styled.code`
  background: ${props => props.theme.codeBackground};
  color: ${props => props.theme.codeColor};
  padding: 0.2rem 1rem;
  font-size: var(--font-sm);
`
