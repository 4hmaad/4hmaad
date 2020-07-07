import React from "react"
import simpleIcons from "simple-icons"

const Icon = ({ type, className, fill }) => {
  const icon = simpleIcons.get(type)
  fill = fill ? fill : `#${icon.hex}`

  console.log(icon)

  return (
    <div
      style={{
        fill,
        display: "inline-block",
      }}
      className={className}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}

export default Icon
