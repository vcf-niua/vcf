import { useState } from "react"
import {
    Card,
    CardContent,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    CardHeader,
    Divider
} from '@mui/material';
import Link from 'next/link';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import InfoCard from '@/components/InfoCard';
import pagesStyle from '@/styles/SpecificTool.module.scss';

export default function CardWithList(props) {
    console.log(props.cities)
    const [listOpenState, setListOpenState] = useState(false);

    const handleCardClick = () => {
        setListOpenState(!listOpenState);
    };

    function renderList(listData) {
        console.log(listData)
        return (
            <Card className={`${pagesStyle.listContainer} ${pagesStyle.cardListInner}`} style={{marginTop:"10px", boxShadow: "none", backgroundColor: '#f6f6f6'}}>
                <List component="nav"  style={{transition: "transform 250ms linear"}}>
                    {listData.map((item, index) => (
                       <div key={index}>
                            <Link className={pagesStyle.citiesList} href={'/city/' + item}>
                                <ListItem className={pagesStyle.cityTool}>
                                    <ListItemText primary={item} className={pagesStyle.cityTool}/>
                                </ListItem>
                            </Link>
                        <Divider component="li" sx={{ backgroundColor: '#2D6E93' }}/>
                       </div>
                    ))}
               
                </List>
            </Card>
        )
    }
    {/*  */ }
    return (
        <Grid item xs={12} sm={12} md={12}>
            <InfoCard
                icon={props.icon || <LocationCityIcon/>}
                className={pagesStyle.icon}
                {...props}
                onClick={handleCardClick}
                showHover="showHover"
            />
            {listOpenState && renderList(props.listData)}
            
        </Grid>
    )
}