const MENU_ITEMS = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'dashboard',
        label: 'Dashboard',
        isTitle: false,
        icon: 'uil-dashboard',
        url: '/bmg/dashboard',
    },
    {
        key: 'leads',
        label: 'Auction Leads',
        isTitle: false,
        icon: 'uil-chart',
        url: '/bmg/leads',
    },
    {
        key: 'categories',
        label: 'Categories',
        isTitle: false,
        icon: 'uil-cell',
        url: '/bmg/categories',
    },
    {
        key: 'products',
        label: 'Products',
        isTitle: false,
        icon: 'uil-box',
        url: '/bmg/products',
    },
    {
        key: 'users',
        label: 'Buyers/Sellers',
        isTitle: false,
        icon: ' uil-users-alt',
        url: '/bmg/buyer&seller',
    },
    {
        key: 'orders',
        label: 'Orders',
        isTitle: false,
        icon: 'uil-bill',
        url: '/bmg/orders',
    },
    {
        key: 'faq',
        label: 'Faq',
        isTitle: false,
        icon: ' uil-comment-exclamation',
        url: '/bmg/faq',
    },
    {
        key: 'notification',
        label: 'Notification',
        isTitle: false,
        icon: 'uil-comment-alt-notes',
        url: '/bmg/notification',
    },
    {
        key: 'enquiry',
        label: 'Enquiry',
        isTitle: false,
        icon: 'uil-comments-alt',
        url: '/bmg/enquiry',
    },
   
];

export default MENU_ITEMS;
