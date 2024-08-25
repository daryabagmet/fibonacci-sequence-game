import { nanoid } from 'nanoid'
import { createContext, ReactElement, ReactNode, useState } from 'react'
import { ReactComponent as Circle } from '../assets/img/circle.svg'
import { ReactComponent as Square } from '../assets/img/square.svg'
import { ReactComponent as Triangle } from '../assets/img/triangle.svg'

const defaultContext: GameContextType = {
  move: 0,
  items: [],
  addMove: () => {},
  removeMove: () => {},
  resetGame: () => {},
  showModal: false,
  setShowModal: () => {},
}

export interface GameContextType {
  move: number
  items: Item[]
  addMove: () => void
  removeMove: () => void
  resetGame: () => void
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export interface Item {
  id: string
  value: number
  icon: ReactElement | null
}

interface GameProviderProps {
  children: ReactNode
}

const getItemIcon = (value: number): React.ReactElement | null => {
  const max = 3 //max figures quantity
  const figureIndex = (value - 1) % max

  if (figureIndex === 0) {
    return <Square />
  } else if (figureIndex === 1) {
    return <Circle />
  } else if (figureIndex === 2) {
    return <Triangle />
  }
  return null
}

const GameContext = createContext<GameContextType>(defaultContext)

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const fibSequenceArr: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  const [move, setMove] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState<Item[]>([])

  const addMove = () => {
    if (move >= 9) {
      setShowModal(true)
    } else {
      const fibIndex = move + 1
      const nextFib = fibSequenceArr[fibIndex]
      const newItem = {
        id: nanoid(),
        value: nextFib,
        icon: getItemIcon(fibIndex),
      }
      setMove(fibIndex)
      setItems([...items, newItem])
    }
  }

  const removeMove = () => {
    if (move === 0) return

    const fibIndex = move - 1
    const lastItem = items[items.length - 1]

    setMove(fibIndex)
    setItems(items.filter((item) => item.id !== lastItem.id))
  }

  const resetGame = () => {
    setMove(0)
    setItems([])
  }

  return (
    <GameContext.Provider
      value={{
        move,
        items,
        addMove,
        removeMove,
        resetGame,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
