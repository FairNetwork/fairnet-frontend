import './home.scss';
import HomeIntro from './home-intro/HomeIntro';
import HomeSection from './home-section/HomeSection';

const Home = () => {
    return (
        <div className="home">
            <HomeIntro />
            <HomeSection
                headline={'Warum FairNet? – Weil Gutes einfach besser wirkt'}
                text={
                    <p>
                        Mit Deiner Entscheidung für uns investierst Du nicht nur in Qualität,
                        sondern auch in Gerechtigkeit: <br />
                        Ein Teil unseres Gewinns fließt in Projekte, die Kindern neue{' '}
                        <b>Chancen schenken</b>.
                        <br />
                        <br />
                        Du bist der <b>Held</b> Deiner Geschichte – und der eines <b>Kindes</b>.
                    </p>
                }
                route="/support"
                buttonText="Mehr erfahren"
            />
            <HomeSection
                headline={'Kinderleicht zur eigenen Website'}
                text={
                    <p>
                        Dein Traum von einer eigenen Website? Wir machen ihn wahr – <b>einfach</b>,{' '}
                        <b>transparent</b> und mit Dir <b>gemeinsam</b>. Egal ob Start-up, Verein
                        oder Herzensprojekt:
                        <br /> Wir nehmen Dich an die Hand und sorgen für den perfekten Auftritt.
                        <br />
                        <br />
                        Los geht’s – Deine Website wartet schon auf Dich.
                    </p>
                }
                style={{
                    backgroundColor: 'var(--section-background-color)'
                }}
                route="/fairsite"
                buttonText="Mehr erfahren"
            />
            <HomeSection
                headline="Etwas Positives bewegen – digital, sozial und fair"
                text={
                    <p>
                        Unsere Projekte entstehen mit dem Anspruch, echten Mehrwert zu schaffen –
                        für <b>Dich</b>, für <b>andere</b>, für eine faire Zukunft.
                        <br />
                        <br />
                        Weil <b>gutes</b> eben <b>gut tut</b>.
                    </p>
                }
                route="/products"
                buttonText="Unsere Projekte"
            />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
