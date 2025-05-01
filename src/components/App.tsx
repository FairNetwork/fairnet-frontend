import { useContent } from '../hooks/content';
import ColorSchemeProvider from './shared/color-scheme-provider/ColorSchemeProvider';
import { THEME } from '../constants/theme';
import { useColorMode } from '../hooks/color';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import './app.scss';
import ScrollBar from './shared/scroll-bar/ScrollBar';
import { useScrollTop } from '../hooks/scroll';

const App = () => {
    useScrollTop();

    const content = useContent();
    const colorMode = useColorMode();

    return (
        <ColorSchemeProvider colors={THEME} colorMode={colorMode}>
            <div className="app">
                <div className="app__wrapper">
                    <Header />
                    <ScrollBar topOffset={76} bottomOffset={68}>
                        <div className="app__wrapper__content">
                            <div className="app__wrapper__content__spacer" />
                            {content}
                            <Footer />
                        </div>
                    </ScrollBar>
                </div>
            </div>
        </ColorSchemeProvider>
    );
};

App.displayName = 'App';

export default App;
