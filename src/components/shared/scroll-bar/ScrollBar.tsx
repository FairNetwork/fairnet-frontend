import React, { useRef, useEffect, useState, FC, ReactNode } from 'react';
import './scrollBar.scss';

type ScrollBarProps = {
    children: ReactNode;
    topOffset?: number;
    bottomOffset?: number;
};

const ScrollBar: FC<ScrollBarProps> = ({ children, topOffset = 0, bottomOffset = 0 }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [thumbHeight, setThumbHeight] = useState(0);
    const [thumbTop, setThumbTop] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);

    const updateScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const { scrollTop, scrollHeight, clientHeight } = container;
        const availableHeight = clientHeight - topOffset - bottomOffset;

        const canScroll = scrollHeight > clientHeight;
        setIsScrollable(canScroll);

        if (!canScroll) {
            setThumbHeight(0);
            setThumbTop(0);
            return;
        }

        const heightRatio = clientHeight / scrollHeight;
        const newThumbHeight = Math.max(heightRatio * availableHeight, 20); // Mindesthöhe
        const scrollRatio = scrollTop / (scrollHeight - clientHeight);
        const newThumbTop = topOffset + scrollRatio * (availableHeight - newThumbHeight);

        setThumbHeight(newThumbHeight);
        setThumbTop(newThumbTop);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        updateScroll();
        container.addEventListener('scroll', updateScroll);
        window.addEventListener('resize', updateScroll);

        return () => {
            container.removeEventListener('scroll', updateScroll);
            window.removeEventListener('resize', updateScroll);
        };
    }, [topOffset, bottomOffset]);

    return (
        <div className="scroll-bar">
            <div className="scroll-bar__scroll-container" id="scroll-bar" ref={containerRef}>
                {children}
            </div>
            {isScrollable && (
                <div
                    className="scroll-bar__scroll-thumb"
                    style={{
                        height: `${thumbHeight}px`,
                        top: `${thumbTop}px`,
                        bottom: `${bottomOffset}px`
                    }}
                />
            )}
        </div>
    );
};

ScrollBar.displayName = 'ScrollBar';

export default ScrollBar;
