import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CollegeTable from '../components/CollegeTable'
// import { Collapse, Fade } from 'react-bootstrap'

function Colleges(): ReactElement {
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

  const [colleges, setColleges] = useState<resType[]>()

  useEffect(() => {
    axios
      .get<resType[]>('https://college-student-server.herokuapp.com/college/')
      .then((res) => {
        console.log('getAll api response 🚀', res)
        setColleges(res.data)
      })
    console.info(
      '%cTIP: take a look @ similar colleges of #05 to experience no data',
      'color: red; font-size: 20px;',
    )
  }, [])
  return (
    <>
      <Container fluid className="p-3">
        <div className=" h3">All Colleges</div>

        {colleges && <CollegeTable colleges={colleges} />}
      </Container>
    </>
  )
}

export default Colleges
