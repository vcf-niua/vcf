import { useState } from "react"
import { 
    Card,
    List,
    ListItem,
    ListItemText,
    Grid,
    Divider
} from '@mui/material';


import styles from '@/styles/InfoCard.module.scss';

export default function Infocard(props) {

    const [listOpenState, setListOpenState] = useState(false);

    const handleCardClick = () => {
        setListOpenState(!listOpenState);
    };
    
    function renderList(cityList) {
       
        return (
            <Card className={`${styles.listContainer} ${styles.cardListInner}`} style={{marginTop:"10px", boxShadow: "none"}} >
                <List component="nav"  style={{transition: "transform 250ms linear"}}>
                    {cityList.map((item, index) => (
                       <div>
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
        <Card className={styles.customIndicatorCard} onClick={() => handleCardClick(props.cityList)}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.content}>
                <p>{props.title}</p>
                {props.data ? (<h2>{props.data}</h2>) : ''}
            </div>
            {listOpenState && renderList(props.cityList)}
        </Card>
    )
}