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
} from '@mui/material';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import pagesStyle from '@/styles/SpecificTool.module.scss';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function CardWithList(props) {
    const [listOpenState, setListOpenState] = useState(false);

    const handleCardClick = () => {
        setListOpenState(!listOpenState);
    };

    function renderList(cityList) {
        return (
            <Card className={pagesStyle.listContainer}>
                <List component="nav"  style={{transition: "transform 250ms linear"}}>
                    {cityList.map((item, index) => (
                        <ListItem  className={pagesStyle.cityTool}>
                            <ListItemText primary={item.cities_name} />
                        </ListItem>
                        
                    ))}

                </List>
            </Card>
        )
    }
    {/*  */ }
    return (
        <Grid item xs={6} sm={6} md={3}>
            <Card className={pagesStyle.customIndicatorCard} onClick={() => handleCardClick(props.cityList)}>
                
                <CardHeader

                    avatar={<LocationCityIcon className={pagesStyle.icon} />}
                    title={props.stateName} 
                    subheader="2 Cities"
                    subheaderTypographyProps={{variant:'h6',color:"#fff" }}

                />
                

            </Card>
            {listOpenState && renderList(props.cityList)}
        </Grid>
    )
}