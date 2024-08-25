import ReactDOM from 'react-dom'
import './modal.css'

interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.body,
  )
}

export default Modal
