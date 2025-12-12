export const ROUTES = [

    {
        path: "*",
        component: () => import("../Pages/404.tsx"),
        //exact: false,
    },
    {
        path: "/",
        component: () => import("../Pages/Home.tsx"),
        //exact: true,
    },
    {
        path: "/product/:id",
        component: () => import("../Pages/EditCar.tsx"),
        //exact: true,
    },
    {
        path: "/newcar",
        component: () => import("../Pages/NewCar.tsx"),
        //exact: true,
    },
    {
        path: "/about",
        component: () => import("../Pages/EditCar.tsx"),
        //exact: true,
    },

    {
        path: "/login",
        component: () => import("../Pages/LogIn.tsx"),
        //exact: true,
    },

]