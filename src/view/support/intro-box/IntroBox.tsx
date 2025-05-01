import './introBox.scss';

const IntroBox = () => {
    return (
        <div className="intro-box">
            <h2>Wir spenden 10% unseres Gewinns</h2>
            <p>
                Bei FairNet glauben wir daran, dass Unternehmen eine Verantwortung tragen. Deshalb
                spenden wir 10% unseres jährlichen Gewinns an Organisationen, die Kindern neue
                Chancen ermöglichen.
            </p>
        </div>
    );
};

IntroBox.displayName = 'IntroBox';

export default IntroBox;
