import React, {useCallback, useMemo} from 'react';
import './tool.scss';
import {ITool} from "../../../types/tool";
import {IS_DEVELOPMENT, IS_QA} from "../../../constants/environment";

const Tool = ({qaUrl, url, slogan, title, image}: ITool) => {
    const handleClick = useCallback(() => {
        window.open( IS_DEVELOPMENT || IS_QA ? qaUrl : url, '_blank');
    },[qaUrl, url]);

    return useMemo(() => (
            <div className="tool" onClick={handleClick}>
                <img src={image} alt={title} className="tool__image"/>
                <div className="tool__content">
                    <h2 className="tool__title">{title}</h2>
                    <p className="tool__slogan">{slogan}</p>
                </div>
            </div>),
        [handleClick, image, slogan, title]
    );
}

Tool.displayName = 'Tool'

export default Tool;
