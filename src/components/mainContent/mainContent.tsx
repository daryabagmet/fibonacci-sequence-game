import { useContext } from 'react'
import GameContext from '../../context/gameContext'
import InfoPanel from '../infoPanel/infoPanel'
import PolygonsWrapper from '../polygonsWrapper/polygonsWrapper'
import Modal from '../modal/modal'

const MainContent = () => {
  const { move, showModal, setShowModal, resetGame } = useContext(GameContext)
  const maxIndex = 10
  const currentIndex = showModal ? maxIndex : move

  const handleCloseModal = () => {
    setShowModal(false)
    resetGame()
  }

  return (
    <>
      <div className="container flex align-center flex-wrap">
        <InfoPanel />
        <PolygonsWrapper />
      </div>
      {showModal && (
        <Modal>
          <h2 className="font-600 font-m modal-title">
            Current index is {currentIndex}
          </h2>
          <p className="font-s modal-text">The game will restart</p>
          <div className="flex justify-end modal-btn-wrapper">
            <button
              className="btn primary-btn btn-width-m"
              onClick={handleCloseModal}
            >
              Ok
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default MainContent
