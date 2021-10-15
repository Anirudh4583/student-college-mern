import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import StudentRow from './StudentRow'

interface Props {
  students: Array<{
    id: number
    Name: string
    Batch: number
    CollegeId: number
    Skills: string
  }>
}

function CollegeTable({ students }: Props): ReactElement {
  return (
    <Table striped bordered hover>
      {/* <Row>
          {students &&
            students.map((college) => {
              console.log(college)
              return (
                <College
                  Id={college.id}
                  Name={college.Name}
                  YearFounded={college.YearFounded}
                  City={college.City}
                  State={college.State}
                  Country={college.Country}
                  NoOfStudents={college.NoOfStudents}
                  Courses={college.Courses}
                />
              )
            })}
        </Row> */}

      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Batch</th>
          <th>College ID</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((student) => {
            // console.log(student)
            return (
              <StudentRow
                key={student.id}
                id={student.id}
                Name={student.Name}
                Batch={student.Batch}
                CollegeId={student.CollegeId}
                Skills={student.Skills}
              />
            )
          })}
      </tbody>
    </Table>
  )
}

export default CollegeTable
