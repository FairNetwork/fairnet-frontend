import './utility.scss';
import { useUtilityContent } from '../../hooks/utility';
import { useScrollTop } from '../../hooks/scroll';

const Utility = () => {
    useScrollTop();

    const content = useUtilityContent();

    return <div className="utility">{content}</div>;
};

Utility.displayName = 'Utility';

export default Utility;
