import Footer from './components/footer/Footer'
import MainPage from './components/MainPage'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <main className='max-w-screen-sm mx-auto p-3'>
      <Navbar />
      <MainPage />
      <Footer />
    </main>
  )
}

export default App
