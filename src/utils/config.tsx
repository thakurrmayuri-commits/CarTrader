export const ROUTES = [

    {
        path: "*",
        component: () => import("../Pages/404.tsx"),
        exact: false,
    },
    {
        path: "/",
        component: () => import("../Pages/Home.tsx"),
        exact: false,
    },
    {
        path: "/car/:id",
        component: () => import("../Pages/CarDetails.tsx"),
        exact: false,
    },
    {
        path: "/newcar",
        component: () => import("../Pages/NewCar.tsx"),
        exact: false,
    },
    {
        path: "/oldInventery",
        component: () => import("../Pages/UsedCar.tsx"),
        exact: false,
    },
    {
        path: "/about",
        component: () => import("../Pages/About.tsx"),
        exact: false,
    },
    {
        path: "/wishlist",
        component: () => import("../Pages/WishList.tsx"),
        exact: true,
    },
    {
        path: "/cart",
        component: () => import("../Pages/Cart.tsx"),
        exact: true,
    },

    {
        path: "/login",
        component: () => import("../Pages/LogIn.tsx"),
        exact: false,
    },

]