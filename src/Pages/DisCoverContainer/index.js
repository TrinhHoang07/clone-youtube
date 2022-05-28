import { DisCover } from './export';
import './DisCoverContainer.scss';
import { useEffect } from 'react';
function DisCoverContainer() {

    useEffect(() => {
        document.title = 'Khám phá - Youtube';
    }, []);

    return (
        <div className="discover-container">
            <DisCover />
        </div>
    )
}

export default DisCoverContainer;