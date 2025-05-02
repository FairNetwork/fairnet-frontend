import { FC, ReactNode } from 'react';
import './badge.scss';

interface BadgeProps {
    children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => {
    return <div className="badge">{children}</div>;
};

Badge.displayName = 'Badge';

export default Badge;
