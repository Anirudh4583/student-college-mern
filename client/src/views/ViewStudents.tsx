import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
// import { Collapse, Fade } from 'react-bootstrap'
import StudentTable from '../components/StudentTable'

function ViewStudents(): ReactElement {
  type resType = {
    id: number
    Name: string
    Batch: number
    CollegeId: number
    Skills: string
  }

  type paramType = {
    collegeId: string
  }

  const [students, setStudents] = useState<resType[]>()
  const params = useParams<paramType>()

  useEffect(() => {
    axios
      .post<resType[]>('http://localhost:3001/student/from-college', {
        collegeId: params.collegeId,
      })
      .then((res) => {
        console.log('get students from college api response 🚀', res)
        setStudents(res.data)
      })
  }, [params.collegeId])
  return (
    <>
      <Container fluid className="p-3">
        <div className=" h3">All Students Enrolled in </div>

        {students && <StudentTable students={students} />}
      </Container>
    </>
  )
}

export default ViewStudents
