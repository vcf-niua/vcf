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

    const handleCardClick = () => {
        if(props && props.cardType === 'stateMenu'){
            setListToolState(!listToolState)
            props.showDescriptionOfTool(!listToolState, props.eachGrid)
        }else{
            setListOpenState(!listOpenState);
        }
    };
    
    function renderList(cityList) {
       
        return (
            <Card className={`${styles.listContainer} ${styles.cardListInner}`}
             style={{marginTop:"10px", boxShadow: "none"}} >
                <List component="nav"  style={{transition: "transform 250ms linear"}}>
                    {cityList.map((item, index) => (
                       <div key={index}>
                         <ListItem className={styles.cityTool}>
                            <ListItemText primary={item.cities_name} className={styles.title}/>
                        </ListItem>
                        <Divider component="li" sx={{ backgroundColor: '#2D6E93' }}/>
                       </div>
                    ))}
               
                </List>
            </Card>
        )
    }

    
    return (
       <>
        <Card className={`${styles.customIndicatorCard}`}
         onClick={() => handleCardClick()}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.content}>
                <p style={{fontSize: props.data ? "": "initial"}}>{props.title}</p>
                
                {props.data ? (<h2>{props.data}</h2>) : ''}
            </div>
        </Card>
            {listOpenState && renderList(props.cityList)}
            
       </>
    )
}