import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import styles from '@/styles/Map.module.scss';

export default function Map(props){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(82.678211);
    const [lat] = useState(22.287897);
    const [zoom] = useState(props.zoom || 3.9);
    const [indiaBoundary, setIndiaBoundary] = useState();
    const hoveredStateId = useRef();

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `/map_styles/light.json`,
            center: [lng, lat],
            zoom: zoom,
            minZoom: 3,
            maxZoom: 5
        });

        map.current.on('load', () => {
            fetch('/maps/india_states.geojson')
                .then(res => res.json())
                .then(setIndiaBoundary)
        })

    }, []);

    useEffect(() => {
        if(props.layerData) {
            map.current.addSource('vcf-states-source', {
                type: 'geojson',
                data: props.layerData,
                promoteId: 'name'
            })

            map.current.addLayer({
                'id': 'vcf-states-layer',
                'type': 'circle',
                'source': 'vcf-states-source',
                'layout': {},
                'paint': {
                    'circle-color': '#FBB328',
                    'circle-opacity': 0.9,
                    'circle-stroke-color': '#144665',
                    'circle-stroke-width': 2,
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'cities']],
                        0, 0,
                        1, 6,
                        10, 24
                    ]
                }
            }, 'border')

            map.current.on('click', 'vcf-states-layer', (e) => {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var prop = e.features[0].properties;
                
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                
                new maplibregl.Popup()
                .setLngLat(coordinates)
                .setHTML('<h2>' + prop.name + '</h2><p># of cities: ' + prop.cities + '</p>')
                .addTo(map.current);
            })

            map.current.on('mouseenter', 'vcf-states-layer', function () {
                map.current.getCanvas().style.cursor = 'pointer';
            });
            
            map.current.on('mouseleave', 'vcf-states-layer', function () {
                map.current.getCanvas().style.cursor = '';
            });
        }
    }, [props.layerData])

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
                        0.2
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
                        2.5,
                        1
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