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
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import pagesStyle from '@/styles/SpecificTool.module.scss';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import InfoCard from '@/components/InfoCard';

export default function CardWithList(props) {
    console.log(props.cities)
    const [listOpenState, setListOpenState] = useState(false);

    const handleCardClick = () => {
        setListOpenState(!listOpenState);
    };

    function renderList(cityList) {
        return (
            <Card className={`${pagesStyle.listContainer} ${pagesStyle.cardListInner}`} style={{marginTop:"10px", boxShadow: "none"}}>
                <List component="nav"  style={{transition: "transform 250ms linear"}}>
                    {cityList.map((item, index) => (
                       <div>
                         <ListItem className={pagesStyle.cityTool}>
                            <ListItemText primary={item.cities_name} className={pagesStyle.title}/>
                        </ListItem>
                        <Divider component="li" sx={{ backgroundColor: '#2D6E93' }}/>
                       </div>
                    ))}
               
                </List>
            </Card>
        )
    }
    {/*  */ }
    return (
        <Grid item xs={6} sm={6} md={3}>
            <InfoCard
                icon=<LocationCityIcon className={pagesStyle.icon} />
                title={props.stateName} cityList={props.cities}
                data={"2 Cities"}
            />
            {/* <Card className={`${pagesStyle.customIndicatorCard} ${pagesStyle.cardList}`} onClick={() => handleCardClick(props.cityList)}>
                
                <CardHeader

                    avatar={<LocationCityIcon className={pagesStyle.icon} />}
                    title={props.stateName} 
                    subheader="2 Cities"
                    subheaderTypographyProps={{variant:'h6',color:"#fff" }}

                />
                

            </Card> */}
            {listOpenState && renderList(props.cityList)}
            
        </Grid>
    )
}