import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Cell } from 'recharts'
import { PieChart, Pie, Tooltip } from 'recharts'

function Charts(): ReactElement {
  type resType = {
    name: string
    value: number
  }

  const [states, setStates] = useState<resType[]>()
  const [courses, setCourses] = useState<resType[]>()

  useEffect(() => {
    axios.get<resType[]>('http://localhost:3001/college/states').then((res) => {
      console.log('get clg states api response 🚀', res)
      setStates(res.data)
    })

    axios
      .get<resType[]>('http://localhost:3001/college/courses')
      .then((res) => {
        console.log('get clg states api response 🚀', res)
        setCourses(res.data)
      })
  }, [])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="d-flex p-5 ms-5 overflow-hidden">
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
          onClick={(e) => console.log(e)}
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
  )
}

export default Charts
