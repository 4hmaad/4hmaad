import React from "react"
import Code from "../Code"

import { H, P, A, Ul, InlineCode, Bold } from "./index"

const mdxComponents = {
  h1: props => <H as="h1" {...props}></H>,
  h2: props => <H as="h2" {...props}></H>,
  h3: props => <H as="h3" {...props}></H>,
  h4: props => <H as="h4" {...props}></H>,
  h5: props => <H as="h5" {...props}></H>,
  p: props => <P {...props} />,
  ul: props => <Ul {...props} />,
  strong: props => <Bold {...props} />,
  span: props => <P as="span" {...props} />,
  a: props => <A target="_blank" {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  pre: props => {
    if (props.children.props.mdxType !== "code") return

    return (
      <Code
        codeString={props.children.props.children.trim()}
        language={
          props.children.props.className &&
          props.children.props.className.replace("language-", "")
        }
        {...props.children.props}
      />
    )
  },
}

export default mdxComponents
