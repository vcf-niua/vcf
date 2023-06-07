import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import styles from '@/styles/Map.module.scss';

export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(82.678211);
    const [lat] = useState(22.287897);
    const [zoom] = useState(3.9);
    const [indiaBoundary, setIndiaBoundary] = useState();
    const hoveredStateId = useRef();

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `/map_styles/light.json`,
            center: [lng, lat],
            zoom: zoom,
            minZoom: 3
        });

        map.current.on('load', () => {
            fetch('/maps/india_states.geojson')
                .then(res => res.json())
                .then(setIndiaBoundary)
        })

    });

    useEffect(() => {
        if(indiaBoundary) {
            map.current.addSource('india-boundary-vcf', {
                type: 'geojson',
                data: indiaBoundary,
                promoteId: 'id'
            })
            map.current.addLayer({
                'id': 'india-boundary-vcf-layer',
                'type': 'fill',
                'source': 'india-boundary-vcf',
                'layout': {},
                'paint': {
                    'fill-color': '#badcf1',
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        0.9,
                        0.5
                    ]
                }
            }, 'border_india')

            map.current.addLayer({
                'id': 'india-boundary-vcf-layer-line',
                'type': 'line',
                'source': 'india-boundary-vcf',
                'layout': {},
                'paint': {
                    'line-color': '#144665',
                    'line-width': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        3.5,
                        2
                    ]
                }
            }, 'border_india')

            map.current.on('mousemove', 'india-boundary-vcf-layer', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateId.current) {
                        map.current.setFeatureState(
                            { source: 'india-boundary-vcf', id: hoveredStateId.current },
                            { hover: false }
                        );
                    }

                    // console.log(e.features[0])
                    hoveredStateId.current = e.features[0].id;
                    map.current.setFeatureState(
                        { source: 'india-boundary-vcf', id: hoveredStateId.current },
                        { hover: true }
                    );
                }
            })

            map.current.on('mouseleave', 'india-boundary-vcf-layer', (e) => {
                console.log('mouseleave')
                if (hoveredStateId.current) {
                    map.current.setFeatureState(
                        { source: 'india-boundary-vcf', id: hoveredStateId.current },
                        { hover: false }
                    );
                }
                hoveredStateId.current = null;
            })
        }
    }, [indiaBoundary])

    return (
        <div className={styles.map_container}>
            <div ref={mapContainer} className={styles.map} />
        </div>
    );
}