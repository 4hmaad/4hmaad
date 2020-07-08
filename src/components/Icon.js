import React from "react"
import icons from "./../data/icons.js"

const Icon = ({ type, className, size = "" }) => {
  type = type.replace(/[^A-Z0-9]/gi, "")

  return (
    <svg
      role="img"
      className={className}
      fill={icons[type].fill}
      style={{ width: `${size}`, height: `${size}` }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icons[type].title}</title>
      <path d={icons[type].path} />
    </svg>
  )
}

export default Icon
