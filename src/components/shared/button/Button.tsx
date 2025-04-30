import { CSSProperties, FC, ReactNode, useMemo } from 'react';
import './button.scss';

export enum ButtonType {
    Default,
    Outline
}

interface ButtonProps {
    children: ReactNode;
    onClick?: VoidFunction;
    style?: CSSProperties;
    isDisabled?: boolean;
    type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
    children,
    isDisabled,
    onClick,
    style,
    type = ButtonType.Default
}) => {
    const typeStyles: CSSProperties = useMemo(() => {
        if (type === ButtonType.Outline) {
            return {
                backgroundColor: 'transparent',
                border: '1px solid var(--primary-color)',
                color: 'var(--primary-color)'
            };
        }

        return {};
    }, []);

    return (
        <button
            className="button"
            onClick={!isDisabled ? onClick : undefined}
            style={{ ...style, opacity: isDisabled ? 0.5 : undefined, ...typeStyles }}>
            {children}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
