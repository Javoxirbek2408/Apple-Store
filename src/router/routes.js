import { v4 as uuid } from 'uuid';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';


export const routes = [
    {
        id: uuid(),  // har bir obyektga alohida id quyib beradi
        name: 'Home', // homega path shart emas
        component: Home,
        path: "/"
    },
    {
        id: uuid(),
        name: 'Search',
        component: Search,
        path: '/search', // path berish shart
    }
]