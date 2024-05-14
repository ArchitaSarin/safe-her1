import React from 'react';
import '../Styles/art.css';
import ArtCard from './individual components/artCard.js';

function ArtDisplay() {
    return (
        <div className="art-display-index">
            <ArtCard size="small" />
            <ArtCard size="medium" />
            <ArtCard size="large" />
        </div>
    )
}

export default ArtDisplay;