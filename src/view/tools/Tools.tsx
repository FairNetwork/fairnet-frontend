import './tools.scss';
import ToolCards from './tool-cards/ToolCards';
import { useScrollTop } from '../../hooks/scroll';

const Tools = () => {
    useScrollTop();

    return (
        <div className="tools" id="tools">
            <div className="tools__headline">
                Entdecke eine vielfältige Auswahl an digitalen Tools!
            </div>
            <ToolCards />
        </div>
    );
};

Tools.displayName = 'Tools';

export default Tools;
