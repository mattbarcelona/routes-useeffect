import { Link, Outlet } from 'react-router-dom'

function HeaderLog() {
  return (
    <>
    <nav>
      <Link to={"/help"}> Help</Link>
      <Link to={"/help/faqs"}> Faqs</Link>
    </nav>
    <Outlet />
    </>

  )
}

export default HeaderLog