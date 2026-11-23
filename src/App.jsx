import { useState } from 'react'
import './App.css'
import Story from "./components/Story.jsx";

import pic_1 from "./assets/image_1.jpg"
import pic_2 from "./assets/image_2.jpg"

function Content(){
  return(
      <div>
        <h3>My Component</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid aspernatur consectetur dolore doloribus enim excepturi harum id nulla omnis perferendis placeat quae, quaerat qui vel velit veritatis. Culpa.</p>
        <hr/>
      </div>);
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/*<Content/>*/}
        {/*<Content/>*/}
        {/*<Content/>*/}
        {/*<Content/>*/}
        <Story pic={pic_1} title="Hello My Component" data_1="My data 1" data_2="My data 2" />
        <Story pic={pic_2} title="React" data_1="React Components" data_2="Passing Data" />
      </div>
  )
}
//props == properties == data
export default App
