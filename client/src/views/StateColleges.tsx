import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import CollegeTable from '../components/CollegeTable'
import nodata from '../assets/nodata.jpg'
// import { Collapse, Fade } from 'react-bootstrap'

function StateColleges(): ReactElement {
  type resType = {
    id: number
    Name: string
    YearFounded: number
    City: string
    State: string
    Country: string
    NoOfStudents: number
    Courses: string
  }

  type paramType = {
    State: string
  }

  const [colleges, setColleges] = useState<resType[] | undefined>(undefined)
  const params = useParams<paramType>()
  console.log(params)

  useEffect(() => {
    axios
      .post<resType[]>('http://localhost:3001/college/state', {
        State: params.State,
      })
      .then((res) => {
        console.log(res)
        setColleges(res.data)
      })
  }, [params.State])
  return (
    <>
      <Container fluid className="p-3">
        <div className=" h3">
          Colleges in the State of{' '}
          <Button variant="outline-info" className="p-1">
            {params.State}
          </Button>
        </div>
        {/* {console.log('colleges 😰', colleges)} */}

        {colleges && colleges?.length > 0 ? (
          <CollegeTable colleges={colleges} />
        ) : (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img width="500" height="500" src={nodata} alt="no data" />
            <Link className="btn btn-primary" to="/colleges/all">
              Go Back
            </Link>
          </div>
        )}
      </Container>
    </>
  )
}

export default StateColleges
