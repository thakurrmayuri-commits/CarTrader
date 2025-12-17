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
        path: "/car/:id",
        component: () => import("../Pages/CarDetails.tsx"),
        //exact: true,
    },
    {
        path: "/newcar",
        component: () => import("../Pages/NewCar.tsx"),
        //exact: true,
    },
    {
        path: "/oldInventery",
        component: () => import("../Pages/UsedCar.tsx"),
        //exact: true,
    },

    {
        path: "/wishlist",
        component: () => import("../Pages/WishList.tsx"),
        //exact: true, 
    },
    {
        path: "/cart",
        component: () => import("../Pages/Cart.tsx"),
        //exact: true,
    },

    {
        path: "/login",
        component: () => import("../Pages/LogIn.tsx"),
        //exact: true,
    },

]