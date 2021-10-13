import React, { ReactElement } from 'react'

interface Props {}

function view({}: Props): ReactElement {
  return (
    <div>
      <h1>test view</h1>
    </div>
  )
}

export default view
