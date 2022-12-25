// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'barbar',
            title: 'Barbars',
            type: 'item',
            url: '/barbars',
            icon: icons.ProfileOutlined,
            target: false,
        },
        {
            id: 'customer',
            title: 'Customers',
            type: 'item',
            url: '/customers',
            icon: icons.ProfileOutlined,
            target: false
        }
    ]
};

export default pages;
