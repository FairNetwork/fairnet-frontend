import './homeIntro.scss';
const image =
    'https://image.geo.de/30141740/t/kd/v4/w1440/r0/-/01-monatsgewinner-2018-05-lars-lykke-cewe-owib-jpg--80669-.jpg';

const HomeIntro = () => {
    return (
        <div className="home-intro" style={{ backgroundImage: `url(${image})` }}>
            <div className="home-intro__content">
                <h1>Was ist schon Fair?</h1>
                <p>
                    „Gerechtigkeit ist nicht, dass alle das Gleiche bekommen, sondern dass jeder das
                    bekommt, was er verdient.“ – Aristoteles
                </p>
            </div>
        </div>
    );
};

HomeIntro.displayName = 'HomeIntro';

export default HomeIntro;
