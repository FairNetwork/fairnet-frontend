import './introBox.scss';

const IntroBox = () => {
    return (
        <div className="intro-box">
            <h2>Mit Dir bewirken wir mehr</h2>
            <p>
                FairNet steht für digitale Lösungen mit Herz. Deshalb fließen{' '}
                <b>10 % unseres Gewinns</b> direkt in Projekte, die <b>Kindern neue Chancen</b>{' '}
                geben – Bildung, Sicherheit und ein besseres Morgen.
                <br />
                <br />
                Mit Deiner Entscheidung unterstützt <b>Du nicht nur Dich selbst</b>, sondern machst
                auch die Welt ein Stück gerechter.
            </p>
        </div>
    );
};

IntroBox.displayName = 'IntroBox';

export default IntroBox;
