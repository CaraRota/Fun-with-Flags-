import { useEffect, useState } from 'react'
import SpeakerIcon from '../uicomponents/icons/SpeakerIcon'

const TextToSpeech = ({ text, lang = 'es-AR', showSpeaker = true }) => {
  const [replay, setReplay] = useState(false)

  useEffect(() => {
    const speak = () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = lang
        window.speechSynthesis.speak(utterance)
      } else {
        console.error('Text-to-speech not supported in this browser.')
      }
    }
    speak()
    return () => {
      if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel()
        }
        window.speechSynthesis.onvoiceschanged = null
      }
    }
  }, [text, lang, replay])

  return (
    showSpeaker && (
      <button onClick={() => setReplay(!replay)}>
        <SpeakerIcon className='size-6' />
      </button>
    )
  )
}

export default TextToSpeech
