import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
// import { Collapse, Fade } from 'react-bootstrap'
import StudentTable from '../components/StudentTable'

function Students(): ReactElement {
  type resType = {
    id: number
    Name: string
    Batch: number
    CollegeId: number
    Skills: string
  }

  const [students, setStudents] = useState<resType[]>()

  useEffect(() => {
    axios
      .post<resType[]>('https://college-student-server.herokuapp.com/student/')
      .then((res) => {
        console.log('getAll students api response 🚀', res)
        setStudents(res.data)
      })
  }, [])
  return (
    <>
      <Container fluid className="p-3">
        <div className=" h3">All Students (100 out of 10000)</div>

        {students && <StudentTable students={students} />}
      </Container>
    </>
  )
}

export default Students
