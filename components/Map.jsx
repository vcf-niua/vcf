import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import styles from '@/styles/Map.module.scss';

export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(79.378211);
    const [lat] = useState(22.287897);
    const [zoom] = useState(3.5);

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `/map_styles/light.json`,
            center: [lng, lat],
            zoom: zoom,
            minZoom: 3
        });

    });

    return (
        <div className={styles.map_container}>
            <div ref={mapContainer} className={styles.map} />
        </div>
    );
}