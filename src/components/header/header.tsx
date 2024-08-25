import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import './header.css'

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="header flex align-center">
      <Logo className="logo" />
      <h1 className="title font-xl font-600">{title}</h1>
    </div>
  )
}

export default Header
