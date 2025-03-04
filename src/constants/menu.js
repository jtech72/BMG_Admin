const MENU_ITEMS = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'dashboard',
        label: 'Dashboard',
        isTitle: false,
        icon: 'uil-servers',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/dashboard',
    },
    {
        key: 'leads',
        label: 'Auction Leads',
        isTitle: false,
        icon: 'uil-chart',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/leads',
    },
    {
        key: 'categories',
        label: 'Categories',
        isTitle: false,
        icon: 'uil-cell',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/categories',
    },
    {
        key: 'products',
        label: 'Products',
        isTitle: false,
        icon: 'uil-box',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/products',
    },
    {
        key: 'users',
        label: 'Buyers/Sellers',
        isTitle: false,
        icon: ' uil-users-alt',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/buyer&seller',
    },
    {
        key: 'orders',
        label: 'Orders',
        isTitle: false,
        icon: 'uil-border-clear',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/orders',
    },
    {
        key: 'faq',
        label: 'Faq',
        isTitle: false,
        icon: ' uil-chat-info',
        // badge: { variant: 'success', text: '4' },
        url: '/bmg/faq',
    },
   
];

export default MENU_ITEMS;
