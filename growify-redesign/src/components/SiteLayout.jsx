import { Outlet } from 'react-router-dom'
import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'

function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  )
}

export default SiteLayout
