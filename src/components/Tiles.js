import React from 'react';
import '../App.css';
import {Tile} from "./Tile";
import Masonry from 'react-masonry-css';

export const Tiles = ({filters, data}) => {
    let tileData = data.filter(d => {
        if (filters.type !== '' || filters.category !== '' || filters.season !== '' || filters.color !== '') {
            return d.type === filters.type ||
                d.categories.includes(filters.category) ||
                d.seasons.includes(filters.season) ||
                d.colors.includes(filters.color);
        }
        return d;
    }).map(d => {
        return <Tile key={d.name} data={d}/>
    });

    return (
        <Masonry id="tiles" breakpointCols={{default: 6, 1400: 5, 1200: 4, 1000: 3, 800: 2, 600: 1}} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {tileData}
        </Masonry>
    );
};
