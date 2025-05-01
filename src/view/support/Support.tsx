import './support.scss';
import Organizations from './organizations/Organizations';
import IntroBox from './intro-box/IntroBox';
import Impact from './impact/Impact';

const Support = () => {
    return (
        <div className="support">
            <h1>Unser Beitrag für eine bessere Zukunft</h1>
            <IntroBox />
            <Organizations />
            <Impact />
        </div>
    );
};

Support.displayName = 'Support';

export default Support;
