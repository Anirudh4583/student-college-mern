import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
// import { Collapse, Fade } from 'react-bootstrap'
import StudentTable from '../components/StudentTable'

type props = {
  collegeId: number
}

function FromCollegeStudents({ collegeId }: props): ReactElement {
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
      .post<resType[]>('http://localhost:3001/student/from-college', {
        collegeId: collegeId,
      })
      .then((res) => {
        console.log('getAll api response 🚀', res)
        setStudents(res.data)
      })
  }, [collegeId])
  return (
    <>
      <Container fluid className="p-3">
        <div className=" h3">All Colleges</div>

        {students && <StudentTable students={students} />}
      </Container>
    </>
  )
}

export default FromCollegeStudents
