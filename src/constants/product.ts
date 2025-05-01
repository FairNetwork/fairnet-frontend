import { Product } from '../types/product';
import fairSite from '../assets/FairSite.png';
import fairFit from '../assets/FairFit.png';

export const PRODUCTS: Product[] = [
    {
        id: '01968c70-e6e8-72a3-b1e4-bc452099c0f1',
        name: 'FairFit',
        description:
            'Du willst aktiv werden, weißt aber nicht wo?\n' +
            'FairFit hilft Dir, das passende Sportangebot zu finden – von Fitnessstudio bis Fußballverein.\n' +
            'Übersichtlich. Vergleichbar. Fair.\n' +
            'So findest Du schnell das, was wirklich zu Dir passt – und bleibst motiviert dabei.\n' +
            '\n',
        image: fairFit,
        route: '/fairfit'
    },
    {
        id: '01968c70-d377-7ad2-8d05-1bff576d424b',
        name: 'FairSite',
        description:
            'Deine Idee verdient mehr als einen Baukasten.\n' +
            'FairSite steht für individuell entwickelte Websites, die genau zu Dir passen – technisch sauber, visuell stark, mit klarer Haltung.\n' +
            'Ob für Dein Herzensprojekt, Dein Business oder Deinen Verein:\n' +
            'Du bringst die Vision, wir bringen sie online.',
        image: fairSite,
        route: '/fairsite'
    }
];
