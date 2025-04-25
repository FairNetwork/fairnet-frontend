import './home.scss';
import { useScrollTop } from '../../hooks/scroll';
import HomeIntro from './home-intro/HomeIntro';
import HomeTechnologies from './home-technologies/HomeTechnologies';

const Home = () => {
    useScrollTop();

    return (
        <div className="home">
            <HomeIntro />
            <HomeTechnologies />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
