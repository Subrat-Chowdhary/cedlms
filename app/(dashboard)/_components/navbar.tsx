import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center bg-white text-black">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}