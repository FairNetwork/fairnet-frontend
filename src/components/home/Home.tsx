import React,{ useMemo} from 'react';
import './home.scss';

const Home = () => {
    const test = ""

    return useMemo(()=>(
        <div className="home">
            Test

        </div>
    ),[]);
}

Home.displayName = 'Home'

export default Home;
