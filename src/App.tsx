import Header from './components/header/header'
import MainContent from './components/mainContent/mainContent'
import { GameProvider } from './context/gameContext'

function App() {
  const title = 'Fibonacci Sequence' //main title

  return (
    <GameProvider>
      <Header title={title} />
      <MainContent />
    </GameProvider>
  )
}

export default App
