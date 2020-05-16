const routes = [{
        path: '/',
        component: () => import('layouts/frontend.vue'),
        children:[{
            name: 'login',
            path: '/',
            component: () => import('pages/Auth/Login.vue'),
        }]
    },
    {
        path: '/dashboard',
        component: () => import('layouts/backend.vue'),
        meta:{ auth:true },
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('pages/Dashboard/MainDashboard.vue')
            },
            {
                path: '/account',
                name: 'account',
                caption: 'Account',
                component: () => import('pages/Account/UserPage.vue')
            }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
