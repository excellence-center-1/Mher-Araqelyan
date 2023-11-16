import Auth from "./pages/Auth"
import Gallery from "./pages/Gallery"
import { GALLERY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: GALLERY_ROUTE,
        Component: Gallery
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]
