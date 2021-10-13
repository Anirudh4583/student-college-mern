import axios from 'axios'
import { useEffect, useState } from 'react'

type resType = {
  data: string
}

function App() {
  const [data, setData] = useState<resType[]>()

  useEffect(() => {
    axios.get<resType[]>('http://localhost:3001/hello').then((res) => {
      console.log(res)
      setData(res.data)
    })
  }, [])
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{data}</h2>
    </div>
  )
}

export default App
