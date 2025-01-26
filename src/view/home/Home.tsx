import './home.scss';
import { useScrollTop } from '../../hooks/scroll';

const Home = () => {
    useScrollTop();

    return (
        <div className="home" id="home">
            <div className="home__headline">Home</div>
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
