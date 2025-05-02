import './fairSite.scss';
import Technologies from './technologies/Technologies';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';

const FairSite = () => {
    return (
        <div className="fair-site">
            <h1>Deine maßgeschneiderte Website mit FairSite</h1>
            <p>
                Wir gestalten Deine perfekte Online-Präsenz – von der ersten Idee bis zur fertigen
                Website. Mit FairSite erhältst Du eine professionelle, benutzerfreundliche und
                responsive Website, die genau zu Deinen Bedürfnissen passt.
            </p>
            <Technologies />
            <Reviews />
            <Contact />
        </div>
    );
};

FairSite.displayName = 'FairSite';

export default FairSite;
