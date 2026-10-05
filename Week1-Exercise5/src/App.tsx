import { useState } from 'react';

function App() {
 const [count,setCount] = useState<number>(0);

 return (
   <div>
     <h1>Counter: {count}</h1>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     <button onClick={() => setCount(count - 1)}>Decrement</button>
   </div>
 );
}

export default App;