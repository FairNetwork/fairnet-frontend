import './homeIntro.scss';
import image from '../../../assets/Intro_Background.png';

const HomeIntro = () => {
    return (
        <div className="home-intro" style={{ backgroundImage: `url(${image})` }}>
            <div className="home-intro__content">
                <h1>Was bedeutet fair für Dich?</h1>
                <p>
                    „Fair ist nicht, wenn jeder das Gleiche bekommt. Fair ist, wenn jeder das
                    bekommt, was er braucht.“ ~ Unbekannt
                </p>
            </div>
        </div>
    );
};

HomeIntro.displayName = 'HomeIntro';

export default HomeIntro;
