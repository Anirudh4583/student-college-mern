// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Colleges from './views/Colleges'
import Students from './views/Students'
import Home from './views/Home'

function App() {
  const location = useLocation()
  // type resType = {
  //   data: string
  // }

  // const [data, setData] = useState<resType[]>()

  // useEffect(() => {
  //   axios.get<resType[]>('http://localhost:3001/hello').then((res) => {
  //     console.log(res)
  //     setData(res.data)
  //   })
  // }, [])

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand ms-2"></Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/colleges" component={Colleges} />
        <Route path="/students" component={Students} />
      </Switch>
    </>
  )
}

export default App
