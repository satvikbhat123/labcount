import { useState } from 'react'
<<<<<<< HEAD
=======
import './App.css'
>>>>>>> 9d12b1cb9d1e8dcfd66c306df560240fdd198d24

function App() {
  const [count, setCount] = useState(0)
  const[step,setStep]=useState(1)
  const increase=()=>setCount(count+step)
  const decrease=()=>setCount(count-step>=0?count-step:0)
  const reset=()=>setCount(0)

  return (
    <>
<<<<<<< HEAD
      <div>
        <h1>counter app</h1>
        <h2>counter value:{count}</h2>
        <div>
          <label>step value:</label>
          <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
        </div>
      </div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
=======
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
>>>>>>> 9d12b1cb9d1e8dcfd66c306df560240fdd198d24
    </>
  )
}

export default App
