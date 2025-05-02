import './fairSite.scss';
import Technologies from './technologies/Technologies';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';

const FairSite = () => {
    return (
        <div className="fair-site">
            <h1>Deine Website, so individuell wie Du</h1>
            <p>
                Stell Dir eine Website vor, die nicht nur gut aussieht, sondern Dich wirklich
                weiterbringt. Mit <b>FairSite</b> entsteht Deine Online-Präsenz – durchdacht,
                professionell und auf Deine Ziele abgestimmt.
                <br />
                <br />
                Von der ersten Idee bis zum letzten Klick:{' '}
                <b>Du bekommst alles, was Deine Website stark macht</b>.
            </p>
            <Technologies />
            <Reviews />
            <Contact />
        </div>
    );
};

FairSite.displayName = 'FairSite';

export default FairSite;
