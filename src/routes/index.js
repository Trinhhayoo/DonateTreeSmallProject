import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
