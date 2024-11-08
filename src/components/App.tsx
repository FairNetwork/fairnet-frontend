import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Allotment, type AllotmentHandle} from 'allotment';
import './app.scss';
import {calculateBiggestTextWidth} from "../utils/calculate";
import LeftItem from "./left-item/LeftItem";
import {APP_LEFT_ELEMENTS} from "../constants/app";
import {useLocation, useMatch, useNavigate} from "react-router-dom";
import Tools from "./tools/Tools";
import fairnetLogo from "../assets/FairNet-Logo.png";

const App = () => {
    const allotmentRef = useRef<AllotmentHandle>(null);

    const [snapAnchor, setSnapAnchor] = useState(0);

    const navigate = useNavigate();
    const toolsRouteMatch = useMatch('/')
    const location = useLocation()

    const handleAllotmentDragEnd = useCallback(
        (sizes: number[]) => {
            const [leftSize] = sizes;

            // noinspection SuspiciousTypeOfGuard
            if (typeof leftSize === 'number' && leftSize < snapAnchor) {
                if (Math.abs(leftSize - snapAnchor) > Math.abs(leftSize - 62)) {
                    allotmentRef.current?.resize([62]);
                } else {
                    allotmentRef.current?.resize([snapAnchor]);
                }
            }
        },
        [snapAnchor],
    );

    const handleItemClick = useCallback(
        (route: string) => {
            console.log(route)
                    navigate(route)
        },
        [navigate],
    );

    useEffect(() => {
        const biggestTextWidth = calculateBiggestTextWidth(APP_LEFT_ELEMENTS.map(({text})=> text));

        // 67 pixels = 42 pixels icon width + 5 pixels gap + 2x 10 pixels outside padding + 10 pixels text margin
        setSnapAnchor(biggestTextWidth + 77);
    }, []);

    const leftElements = useMemo(()=>{
        return APP_LEFT_ELEMENTS.map(({icon,text,route})=> <LeftItem onClick={handleItemClick} text={text} icon={icon} isActive={route === location.pathname} route={route} />)
    },[handleItemClick, location.pathname])

    const rightElement = useMemo(()=>{
        switch (true) {
            case toolsRouteMatch !== null:
            default:
                return <Tools/>
        }
    },[toolsRouteMatch])

    return useMemo(()=>(
        <div className="app">
            <div className="app__header">
                <img src={fairnetLogo} alt='FairNet Logo'/>
            </div>
            <div className="app__content">
                <Allotment
                    separator={false}
                    onDragEnd={handleAllotmentDragEnd}
                    ref={allotmentRef}
                    proportionalLayout={true}
                >
                    <Allotment.Pane minSize={62} maxSize={300} preferredSize={snapAnchor + 50} >
                        <div className="app__content__left-wrapper">
                            {leftElements}
                        </div>
                    </Allotment.Pane>
                    <Allotment.Pane>
                        <div className="app__content__right-wrapper">
                            {rightElement}
                        </div>
                    </Allotment.Pane>
                </Allotment>
            </div>

        </div>
    ),[handleAllotmentDragEnd, leftElements, rightElement, snapAnchor]);
}

export default App;
