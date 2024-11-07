import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Allotment, type AllotmentHandle} from 'allotment';
import './app.scss';
import {calculateBiggestTextWidth} from "../utils/calculate";
import Home from "./home/Home";
import LeftItem from "./left-item/LeftItem";

const App = () => {
    const allotmentRef = useRef<AllotmentHandle>(null);

    const [snapAnchor, setSnapAnchor] = useState(0);

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

    useEffect(() => {
        const biggestTextWidth = calculateBiggestTextWidth(['Neu', 'Chats']);

        // 67 pixels = 42 pixels icon width + 5 pixels gap + 2x 10 pixels outside padding + 10 pixels text margin
        setSnapAnchor(biggestTextWidth + 77);
    }, []);

    return useMemo(()=>(
        <div className="app">
            <div className="app__header">Logo</div>
            <div className="app__content">
                <Allotment
                    separator={false}
                    onDragEnd={handleAllotmentDragEnd}
                    ref={allotmentRef}
                    proportionalLayout={true}
                >
                    <Allotment.Pane minSize={62} maxSize={300} preferredSize={snapAnchor + 50} >
                        <div className="app__content__left-wrapper">
                            <LeftItem onClick={()=>{}} text='Start' icon="bi bi-house" isActive={true} route="" />
                            <LeftItem onClick={()=>{}} text='Test' icon="" isActive={false} route="" />
                        </div>
                    </Allotment.Pane>
                    <Allotment.Pane>
                        <div className="app__content__right-wrapper">
                            <Home/>
                        </div>
                    </Allotment.Pane>
                </Allotment>
            </div>

        </div>
    ),[handleAllotmentDragEnd, snapAnchor]);
}

export default App;
