import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Cell } from 'recharts'
import { PieChart, Pie, Tooltip } from 'recharts'

function Charts(): ReactElement {
  type resType = {
    name: string
    value: number
  }

  const [states, setStates] = useState<resType[]>()
  const [courses, setCourses] = useState<resType[]>()
  const history = useHistory()

  useEffect(() => {
    axios
      .get<resType[]>('http://localhost:3001/college/group-states')
      .then((res) => {
        console.log('get clg states api response 🚀', res)
        setStates(res.data)
      })

    axios
      .get<resType[]>('http://localhost:3001/college/group-courses')
      .then((res) => {
        console.log('get clg courses api response 🚀', res)
        setCourses(res.data)
      })
  }, [])

  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#FF2233',
    '#CC44FF',
  ]

  return (
    <>
      <div className="d-flex p-5 ms-5 overflow-hidden mb-0 flex-md-column flex-sm-column flex-lg-row">
        <PieChart width={1000} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={states}
            cx={200}
            cy={200}
            outerRadius={140}
            fill="#8884d8"
            label
            onClick={(e) => history.push(`/colleges/state/${e.name}`)}
            cursor="pointer"
          />
          <Tooltip />
        </PieChart>
        <PieChart width={800} height={400}>
          <Pie
            data={courses}
            cx={120}
            cy={200}
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
            onClick={(e) => history.push(`/colleges/course/${e.name}`)}
            cursor="pointer"
          >
            {courses &&
              courses.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
        </PieChart>
      </div>
      <div className="d-flex justify-content-around flex-md-column flex-sm-column flex-lg-row">
        <h5 className="me-3">Fig.1 College States PieChart</h5>
        <div className=""></div>
        <h5 className="ms-3">Fig.2 College Courses PieChart</h5>
      </div>
    </>
  )
}

export default Charts
