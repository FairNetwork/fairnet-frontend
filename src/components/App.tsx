import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Allotment, type AllotmentHandle} from 'allotment';
import './app.scss';
import {calculateBiggestTextWidth} from '../utils/calculate';
import LeftItem from './left-item/LeftItem';
import {APP_LEFT_ELEMENTS, BOTTOM_NAVIGATION_BAR_ITEMS} from '../constants/app';
import {useLocation, useMatch, useNavigate} from 'react-router-dom';
import Tools from './tools/Tools';
import fairnetLogo from '../assets/FairNet-Logo.png';
import BottomNavigationBar from './shared/bottom-navigation-bar/BottomNavigationBar';
import clsx from 'clsx';

const App = () => {
    const allotmentRef = useRef<AllotmentHandle>(null);
    const [snapAnchor, setSnapAnchor] = useState(0);

    const navigate = useNavigate();
    const toolsRouteMatch = useMatch('/');
    const location = useLocation();

    const isMobile = window.innerWidth < 1025;

    // Handle drag end for Allotment pane resizing
    const handleAllotmentDragEnd = useCallback(
        (sizes: number[]) => {
            const [leftSize] = sizes;

            if (typeof leftSize === 'number' && leftSize < snapAnchor) {
                const closeToSnap = Math.abs(leftSize - snapAnchor) > Math.abs(leftSize - 62);
                allotmentRef.current?.resize([closeToSnap ? 62 : snapAnchor]);
            }
        },
        [snapAnchor]
    );

    // Handle navigation item click
    const handleItemClick = useCallback(
        (route: string) => {
            navigate(route);
        },
        [navigate]
    );

    // Calculate snap anchor on mount based on text width
    useEffect(() => {
        const biggestTextWidth = calculateBiggestTextWidth(APP_LEFT_ELEMENTS.map(({text}) => text));
        setSnapAnchor(biggestTextWidth + 77); // 67px + padding and margins
    }, []);

    // Memoized left elements for the left pane
    const leftElements = useMemo(
        () =>
            APP_LEFT_ELEMENTS.map(({icon, text, route}) => (
                <LeftItem
                    key={route}
                    onClick={handleItemClick}
                    text={text}
                    icon={icon}
                    isActive={route === location.pathname}
                    route={route}
                />
            )),
        [handleItemClick, location.pathname]
    );

    // Determine the right pane content
    const rightElement = useMemo(() => {
        return toolsRouteMatch ? <Tools/> : <Tools/>;
    }, [toolsRouteMatch]);

    // Right pane class based on device type
    const rightElementClasses = clsx('app__content__right-wrapper', {
        'app__content__right-wrapper--mobile': isMobile,
    });

    return useMemo(
        () => (
            <div className="app">
                {!isMobile ? (
                    <>
                        <header className="app__header">
                            <img src={fairnetLogo} alt="FairNet Logo"/>
                        </header>
                        <main className="app__content">
                            <Allotment
                                separator={false}
                                onDragEnd={handleAllotmentDragEnd}
                                ref={allotmentRef}
                                proportionalLayout={true}
                            >
                                <Allotment.Pane minSize={62} maxSize={300} preferredSize={snapAnchor + 50}>
                                    <div className="app__content__left-wrapper">{leftElements}</div>
                                </Allotment.Pane>
                                <Allotment.Pane>
                                    <div className={rightElementClasses}>{rightElement}</div>
                                </Allotment.Pane>
                            </Allotment>
                        </main>
                    </>
                ) : (
                    <>
                        <div className={rightElementClasses}>{rightElement}</div>
                        <BottomNavigationBar items={BOTTOM_NAVIGATION_BAR_ITEMS} onClick={handleItemClick} currentRoute={location.pathname}/>
                    </>
                )}
            </div>
        ),
        [handleAllotmentDragEnd, handleItemClick, isMobile, leftElements, rightElement, rightElementClasses, snapAnchor]
    );
};

export default App;
