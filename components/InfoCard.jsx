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
        // if(props && props.cardType === 'stateMenu'){
        //     setListToolState(!listToolState)
        //     props.showDescriptionOfTool(!listToolState, props.eachGrid)
        // }else if(props && props.cardType === 'checkMenu'){
        //     setListOpenState(false);
        // }else {
        //     setListOpenState(!listOpenState);
        // }
    };

    let style = {}

    if(props.onClick) {
        style['cursor'] = 'pointer'
    }
    
    return (
       <>
        <Card 
            className={`${styles.customIndicatorCard}`}
            style={style}
            onClick={handleCardClick}
            p={2}
        >
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.content}>
                <p style={{fontSize: props.data ? "": "initial"}}>{props.title}</p>
                
                {props.data ? (<h2>{props.data}</h2>) : ''}
            </div>
        </Card>
            {/* {listOpenState && renderList(props.cityList)} */}
            {props.children}
            
       </>
    )
}