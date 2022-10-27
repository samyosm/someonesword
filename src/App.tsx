import { useState } from 'react'
import { Button } from './components/Button';
import Header from './components/Header';
import { TextControl } from './components/TextControl';

function App() {
  const [isModeSending, setIsModeSending] = useState(true);

  return (
    <div className="h-full w-full flex flex-col justify-between p-10">
      <Header />

      <div>
        <Button />
        <TextControl />
      </div>

      <Button />
    </div>
  )
}

export default App
