export const useHeader = () => {
    const shouldShowMenu = false;

    const items = [
        { name: 'Hilfsprojekte', route: '/support' },
        { name: 'FairSite', route: '/fairsite' },
        { name: 'Produkte', route: '/products' }
    ];

    return { shouldShowMenu, items };
};
