import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    to: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export const AnimatedCounter: FC<AnimatedCounterProps> = ({
    to,
    duration = 4,
    prefix = '',
    suffix = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString('de-DE'));

    const [display, setDisplay] = useState('0');

    useMotionValueEvent(rounded, 'change', (latest) => {
        setDisplay(latest);
    });

    useEffect(() => {
        if (isInView) {
            animate(count, to, {
                duration,
                ease: 'easeOut'
            });
        }
    }, [isInView, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {display}
            {suffix}
        </span>
    );
};
