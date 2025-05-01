import React from 'react';
import { motion } from 'framer-motion';
import './burgerMenu.scss';

interface BurgerMenuProps {
    isOpen: boolean;
    onClick: () => void;
    color?: string;
    size?: number;
    width?: number;
    gap?: number;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
    isOpen,
    onClick,
    color = 'var(--primary-text-color)',
    size = 2,
    width = 24,
    gap = 4
}) => {
    const transition = { duration: 0.3, ease: 'easeInOut' };

    return (
        <button
            onClick={onClick}
            className="burger-menu"
            style={{
                width: `${width}px`,
                height: `${size * 2 + gap}px`,

                gap: `${gap}px`
            }}
            aria-label="Toggle menu">
            <motion.span
                initial={false}
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? (size + gap) / 2 : 0
                }}
                transition={transition}
                className="burger-menu__top"
                style={{
                    backgroundColor: color,
                    height: `${size}px`
                }}
            />
            <motion.span
                initial={false}
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -(size + gap) / 2 : 0
                }}
                transition={transition}
                className="burger-menu__bottom"
                style={{
                    backgroundColor: color,
                    height: `${size}px`
                }}
            />
        </button>
    );
};

BurgerMenu.displayName = 'BurgerMenu';

export default BurgerMenu;
