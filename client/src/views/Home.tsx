import { ReactElement } from 'react'
import { useHistory } from 'react-router'

function Home(): ReactElement {
  const history = useHistory()

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: '90vh' }}
      >
        <button
          className="btn btn-info m-4"
          onClick={() => history.push('/colleges/all')}
          style={{
            background:
              'linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.5))',
          }}
        >
          Explore Colleges 🏫✨
        </button>
        <button
          className="btn btn-info m-4"
          onClick={() => history.push('/students/all')}
          style={{
            background:
              'linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.5))',
          }}
        >
          Examine Students 👩‍🎓👨‍🎓
        </button>
      </div>
    </div>
  )
}

export default Home
