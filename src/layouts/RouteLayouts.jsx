
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const RouteLayouts = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RouteLayouts
