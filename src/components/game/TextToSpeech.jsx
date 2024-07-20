import { useEffect } from 'react'

const TextToSpeech = ({ text, lang = 'es-AR' }) => {
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
  }, [text, lang])

  return null
}

export default TextToSpeech
