import { useEffect } from 'react'

const TextToSpeech = ({ text, lang = 'es-MX' }) => {
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
        window.speechSynthesis.cancel()
      }
    }
  }, [text, lang])

  return null
}

export default TextToSpeech
