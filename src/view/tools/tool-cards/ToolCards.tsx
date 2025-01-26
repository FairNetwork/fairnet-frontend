import './toolCards.scss';
import { useCallback, useMemo } from 'react';
import Card from "../../../components/shared/card/Card";
import {TOOLS} from "../../../constants/tools";
import ToolCard from "./tool-card/ToolCard";

const ToolCards = () => {
    const handleButtonClick = useCallback(
        (url: string) => {
            window.open(url,'_blank')
        },
        []
    );

    const content = useMemo(() => {
        return TOOLS.map(({ url,name,image }) => {
            return (
                <Card buttonText="Besuchen" onButtonClick={() => handleButtonClick(url)}>
                    <ToolCard name={name} image={image} />
                </Card>
            );
        });
    }, [handleButtonClick]);

    return <div className="tool-cards">{content}</div>;
};

ToolCards.displayName = 'ToolCards';

export default ToolCards;
