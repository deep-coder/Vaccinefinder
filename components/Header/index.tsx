import style from './header.module.css'

export interface HeaderProps {
  title?: React.ReactNode
}

const renderTitle = (props: HeaderProps): React.ReactElement => {
  const { title } = props
  return <div>{title}</div>
}

const Header: React.FC<HeaderProps> = (props) => {
  return <div className={style.h}>{renderTitle(props)}</div>
}

export default Header
