import React, {FC} from 'react';
import './leftItem.scss';
import clsx from "clsx";
import Icon from "../shared/icon/Icon";

interface LeftItemProps {
    icon: string;
    isActive: boolean;
    onClick: (route: string) => void;
    route: string;
    text: string;
}

const LeftItem: FC<LeftItemProps> = ({ icon, isActive, onClick, route, text }) => {
    const handleClick = () => onClick(route);

    const classes = clsx('left-item', {
        'left-item--active': isActive,
    });

    return (
        <div className={classes} onClick={handleClick}>
            <div className="left-item__icon">
                <Icon color="white" icon={icon} size={21} style={{cursor: 'pointer'}}/>
            </div>
            <div className="left-item__text ellipsis">{text}</div>
        </div>
    );
};

LeftItem.displayName = 'LeftItem';

export default LeftItem;
