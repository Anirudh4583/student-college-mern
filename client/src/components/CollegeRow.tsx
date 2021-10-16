import { ReactElement, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'

interface Props {
  Id: number
  Name: string
  YearFounded: number
  City: string
  State: string
  Country: string
  NoOfStudents: number
  Courses: string
}

function CollegeRow({
  Id,
  Name,
  YearFounded,
  City,
  State,
  Country,
  NoOfStudents,
  Courses,
}: Props): ReactElement {
  const [show, setShow] = useState(false)
  const location = useLocation()
  const history = useHistory()
  // console.log('location 📍, location)

  const handleClose = () => setShow(false)
  function handleSimilar() {
    history.push(`/colleges/similar/${Id}`)
    setShow(false)
  }

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
    <tr key={Id}>
      <td>{Id}</td>
      <td>
        <Button variant="link" onClick={() => setShow(true)}>
          {Name}
        </Button>
      </td>
      <td>{City + ', ' + State + ', ' + Country}</td>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>
            {Id}. {Name}
          </Modal.Title>
          Estd. {YearFounded}
        </Modal.Header>
        <Modal.Body>
          <span className="fw-bold">Location:</span>{' '}
          {City + ', ' + State + ', ' + Country}
          <br />
          <span className="fw-bold">Total Students:</span> {NoOfStudents}
          <br />
          <Button variant="outline-info" className="p-1">
            {Courses}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button
            variant="success"
            onClick={() => history.push(`/students/view/${Id}`)}
          >
            View Students
          </Button>
          {!location.pathname.match('/colleges/similar/*') && (
            <Button variant="primary" onClick={handleSimilar}>
              Explore Similar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </tr>
  )
}

export default CollegeRow

CollegeRow.defaultProps = {
  Id: 1,
  Name: 'Dukie',
  YearFounded: 2013,
  City: 'Cachadinha',
  State: 'Viana do Castelo',
  Country: 'Portugal',
  NoOfStudents: 126,
  Courses: 'Chemistry',
}
