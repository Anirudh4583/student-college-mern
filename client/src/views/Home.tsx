import React, { ReactElement } from 'react'
import { useHistory } from 'react-router'

interface Props {}

function Home({}: Props): ReactElement {
  const history = useHistory()

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: '90vh' }}
      >
        <div
          className="btn btn-info m-4"
          onClick={() => history.push('/colleges')}
        >
          Explore Colleges 🏫✨
        </div>
        <div
          className="btn btn-info m-4"
          onClick={() => history.push('/students')}
        >
          Examine Students 👩‍🎓👨‍🎓
        </div>
      </div>
    </div>
  )
}

export default Home
