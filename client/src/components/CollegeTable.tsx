import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import CollegeRow from './CollegeRow'

interface Props {
  colleges: Array<{
    id: number
    Name: string
    YearFounded: number
    City: string
    State: string
    Country: string
    NoOfStudents: number
    Courses: string
  }>
}

function CollegeTable({ colleges }: Props): ReactElement {
  return (
    <Table striped bordered hover>
      {/* <Row>
          {colleges &&
            colleges.map((college) => {
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
          <th>College Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {colleges &&
          colleges.map((college) => {
            // console.log(college)
            return (
              <CollegeRow
                key={college.id}
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
      </tbody>
    </Table>
  )
}

export default CollegeTable
