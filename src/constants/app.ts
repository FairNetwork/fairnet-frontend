import {LeftElement} from "../types/leftElement";
import {NavItem} from "../components/shared/bottom-navigation-bar/BottomNavigationBar";

export const APP_LEFT_ELEMENTS: LeftElement[] = [
    {icon: 'bi bi-cpu', text: 'Tools', route: '/'},
    {icon: 'bi bi-person-raised-hand', text: 'Über uns', route: '/about-us'},
    {icon: 'bi bi-postcard', text: 'Kontakt', route: '/contact'},
]

export const BOTTOM_NAVIGATION_BAR_ITEMS: NavItem[] = APP_LEFT_ELEMENTS.map(({icon,text,route})=>({icon, label: text, route}))
