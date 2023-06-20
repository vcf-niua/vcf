import { useState } from "react"
import { 
    Card
} from '@mui/material';

import styles from '@/styles/InfoCard.module.scss';

export default function Infocard(props) {

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
    
    return (
        <>
            <Card 
                className={styles.customIndicatorCard}
                style={style}
                onClick={handleCardClick}
                
            >
                <div className={styles.icon}>
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