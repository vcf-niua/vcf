import { useState } from "react"
import { 
    Card,
    List,
    ListItem,
    ListItemText,
    Grid,
    Divider,
    Typography
} from '@mui/material';


import styles from '@/styles/InfoCard.module.scss';

export default function Infocard(props) {

    const [listOpenState, setListOpenState] = useState(false);
    const [listToolState, setListToolState] = useState(false);

    const handleCardClick = (e) => {
        if(props.onClick) {
            props.onClick(e)
        }
       
    };

    let style = {}

    if(props.onClick) {
        style['cursor'] = 'pointer'
    }
    
    return (
       <>
        <Card 
            style={{backgroundColor: '#144665', color: '#fff', boxShadow: 'none'}}
            className={styles.customIndicatorCard}
            // style={style}
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