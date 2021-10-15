import { ReactElement } from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  id: number
  Name: string
  Batch: number
  CollegeId: number
  Skills: string
}

function StudentRow({
  id,
  Name,
  Batch,
  CollegeId,
  Skills,
}: Props): ReactElement {
  // console.log('location 📍, location)

  return (
    // <Col className="" key={Id} lg={3} md={4} sm={5}>
    //   <Card className="mb-3" style={{ width: '18rem' }}>
    //     <Card.Body>
    //       <Card.Title>
    //         {Id}. {Name}
    //       </Card.Title>

    //       <Card.Subtitle className="mb-2 text-muted">
    //         Estd. {YearFounded}
    //       </Card.Subtitle>
    //       <Button variant="outline-info" className="p-1" disabled>
    //         {Courses}
    //       </Button>
    //       <Card.Text>
    //         <span className="fw-bold">Location:</span>{' '}
    //         {City + ', ' + State + ', ' + Country}
    //         <br />
    //         <span className="fw-bold">Total Students:</span> {NoOfStudents}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>
    <tr key={id}>
      <td>{id}</td>
      <td>{Name}</td>
      <td>{Batch}</td>
      <td>{CollegeId}</td>
      <td>
        <Button variant="outline-info">{Skills}</Button>
      </td>
    </tr>
  )
}

export default StudentRow

// StudentRow.defaultProps = {
//   Id,
//   Name,
//   Batch,
//   CollegeId,
//   Skills,
// }
