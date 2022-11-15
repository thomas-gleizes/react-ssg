import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/profile/Profile.jsx";
import ProfileSettings from "../pages/profile/Settings.jsx";

export const routes = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/profil", element: Profile },
  { path: "/profil/settings", element: ProfileSettings },
];
