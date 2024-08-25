import { useContext } from 'react'
import GameContext from '../../context/gameContext'

const InfoPanel: React.FC = () => {
  const { move, addMove, removeMove, resetGame } = useContext(GameContext)

  return (
    <div className="flex align-center justify-between w-full info-panel">
      <div className="flex align-center justify-between gap-s">
        <span className="font-m font-500">Current Index</span>
        <span className="font-l font-700">{move}</span>
      </div>
      <div className="flex align-center justify-between gap-s">
        <button
          className="btn primary-btn btn-width-m"
          onClick={() => addMove()}
        >
          Add
        </button>
        <button
          className="btn primary-btn btn-width-m"
          onClick={() => removeMove()}
        >
          Remove
        </button>
        <button
          className="btn secondary-btn btn-width-m"
          onClick={() => resetGame()}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default InfoPanel
