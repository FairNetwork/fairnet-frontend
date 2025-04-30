import './homeTechnologies.scss';

const HomeTechnologies = () => {
    return (
        <div className="home-technologies">
            <div className="home-technologies__intro">
                <h1>Technologie die begeistert</h1>
                <p>Wir vertrauen auf eine Auswahl an bekannten Technologien und Unternehmen.</p>
            </div>
            <div className="home-technologies__stack"></div>
        </div>
    );
};

HomeTechnologies.displayName = 'HomeTechnologies';

export default HomeTechnologies;
