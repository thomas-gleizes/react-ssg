import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/profile/Profile"
import ProfileSettings from "../pages/profile/Settings"

export const routes: { path: string; element: React.FC }[] = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/profil", element: Profile },
  { path: "/profil/settings", element: ProfileSettings }
]
