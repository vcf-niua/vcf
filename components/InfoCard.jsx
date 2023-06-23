import { useState } from "react"
import { 
    Card
} from '@mui/material';

import styles from '@/styles/InfoCard.module.scss';

export default function Infocard(props) {
// alert(props.data)
    const extStyle = props.showHover ? styles.customIndicatorCard2 : styles.customIndicatorCard;
    const handleCardClick = (e) => {
        if(props.onClick) {
            // console.log(e, props.title)
            props.onClick(e, props.title)
        }
       
    };

    let style = {}

    if(props.onClick) {
        style['cursor'] = 'pointer'
    }

    if(props.backgroundColor) {
        style['backgroundColor'] = props.backgroundColor
    }
    
    return (
        <>
            <Card 
                className={extStyle}
                style={style}
                onClick={handleCardClick}
                data= "color"
            >
                <div className={styles.icon} style={{width: props.iconWidth}}>
                    {props.icon}
                </div>
                <div className={styles.content}>
                    <p style={{fontSize: props.data ? "": "initial"}}>{props.title} </p>
                    <p> {}</p>
                    {props.data ? (<h2>{props.data}</h2>) : ''}
                </div>
            </Card>
            
            {props.children}
            
        </>
    )
}