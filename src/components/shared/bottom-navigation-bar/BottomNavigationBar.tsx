import React, {FC} from 'react';
import './bottomNavigationBar.scss';
import Icon from "../icon/Icon";
import clsx from "clsx";

export interface NavItem {
    label?: string;
    icon: string;
    route: string;
}

interface BottomNavigationBarProps {
    items: NavItem[];
    currentRoute: string;
    onClick: (route: string) => void;
}

const BottomNavigationBar: FC<BottomNavigationBarProps> = ({items, onClick, currentRoute}) => {
    return (
        <nav className="bottom-navigation-bar">
            {items.map(({icon, route, label}, index) => {
                const isActive = currentRoute === route;

                return (
                    <button
                        className={clsx(
                            'bottom-navigation-bar__item-wrapper',
                            {'bottom-navigation-bar__item-wrapper--active': isActive}
                        )}
                        key={index}
                        onClick={() => onClick(route)}
                    >
                        <Icon icon={icon} size={20}/>
                        <span className="bottom-navigation-bar__item-wrapper__label">{label}</span>
                    </button>
                );
            })}
        </nav>
    );
};

BottomNavigationBar.displayName = 'BottomNavigationBar';

export default BottomNavigationBar;
