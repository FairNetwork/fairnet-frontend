import React,{ useMemo} from 'react';
import './home.scss';

const Home = () => {
    return useMemo(()=>(
        <div className="home">
            Test

        </div>
    ),[]);
}

Home.displayName = 'Home'

export default Home;
