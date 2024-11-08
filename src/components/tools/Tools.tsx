import React,{ useMemo} from 'react';
import './tools.scss';

const Tools = () => {
    const test = ""

    return useMemo(()=>(
        <div className="tools">
            Test

        </div>
    ),[]);
}

Tools.displayName = 'Tools'

export default Tools;
