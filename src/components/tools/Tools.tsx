import React, {useMemo} from 'react';
import './tools.scss';
import {TOOLS} from "../../constants/tool";
import Tool from "./tool/Tool";

const Tools = () => {
    return useMemo(() => (
        <div className="tools">
            <h1>Tools</h1>
            <div className="tools__content">
                {TOOLS.map(({url, qaUrl, slogan, image, title}) => (
                    <Tool url={url} qaUrl={qaUrl} image={image} title={title} slogan={slogan}/>
                ))}
            </div>
        </div>
    ), []);
}

Tools.displayName = 'Tools'

export default Tools;
