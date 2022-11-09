import { useState } from 'react'

import Track from './widgets/Track'
import TweetCard from './widgets/TweetCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Track>
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </Track>
    </div>
  )
}

export default App
