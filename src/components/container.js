import React from "react"

const Container = ({ children, style }) => (
  <div className="ui container" style={style}>
    {children}
  </div>
)

export default Container
