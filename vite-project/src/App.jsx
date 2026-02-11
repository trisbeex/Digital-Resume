import { useState } from 'react'
import Avatar from './components/Avatar.jsx'
import SpeechBubble from './components/SpeechBubble.jsx'
import './App.css'
import Typewriter from './components/TypewriterText.jsx'
import DialogueController from './components/DialogueController.jsx'


function App() {

    return (
    <>
      <DialogueController/>
      <Avatar />
    </>
  )
}

export default App
