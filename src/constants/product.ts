import { Product } from '../types/product';
import comingSoon from '../assets/ComingSoon.png';
import fairSite from '../assets/FairSite.png';
import fairFit from '../assets/FairFit.png';

export const PRODUCTS: Product[] = [
    {
        id: '01968c70-e6e8-72a3-b1e4-bc452099c0f1',
        name: 'FairFit',
        description: `<p>
    Schluss mit unübersichtlichen Angeboten. Mit <b>FairFit</b> vergleichst Du Fitnessstudios, Kurse und Sportangebote auf einen Blick – und findest genau das, 
    was <b>zu Dir, Deinem Alltag und Deinem Ziel</b> passt.
    <br /><br />
    So wird Bewegung endlich wieder einfach. Und Spaß macht sie auch.
</p>`,
        image: fairFit,
        route: '/fairfit'
    },
    {
        id: '01968c70-d377-7ad2-8d05-1bff576d424b',
        name: 'FairSite',
        description: `<p>
    Du willst sichtbar werden – professionell, authentisch, auf den Punkt. <b>FairSite</b> entwickelt Deine Website genau so, wie sie zu Dir passt: 
    <b>modern, individuell und ehrlich</b>.
    <br /><br />
    Egal ob Start-up, Verein oder Herzensprojekt – <b>mit FairSite bist Du bereit für Deinen Auftritt</b>.
</p>`,
        image: fairSite,
        route: '/fairsite'
    },
    {
        id: '01968d2b-b0c7-799f-91c1-e4aea12e1640',
        name: 'FairCharge',
        description: `<p>
    Warum wegwerfen, wenn man etwas Besseres daraus machen kann? <b>FairCharge</b> gibt alten Akkus ein neues Leben – als nachhaltige Powerbanks für Deinen Alltag.
    <br /><br />
    So schaffst Du mit uns <b>aus Abfall echte Energie</b> – für Dich und die Umwelt.
</p>`,
        image: comingSoon,
        route: '/faircharge'
    }
];
