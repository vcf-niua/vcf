import { useState } from "react"
import { 
    Card, 
    CardContent, 
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import NoteAltIcon from '@mui/icons-material/NoteAlt';


export default function CardWithList(props) {
    const [listOpenState, setListOpenState] = useState(false);
    
    const handleCardClick = () => {
        setListOpenState(!listOpenState);
    };

function renderList(cityList) {
        console.log(cityList)
        return (
            <Card style={{backgroundColor:'#1A76D2'}}>
                <List component="nav">
                {cityList.map((item, index)=> (
                    <ListItem button>
                    <ListItemText primary={item.cities_name} style={{color:"white",textAlign:"center"}}     />
                </ListItem>
                
                ))}
               
            </List>
            </Card>
        )
    }
{/*  */}
    return (
        <Grid item xs={6} sm={6} md={3}>
            <Card style={{ height: "100px" }} onClick={() => handleCardClick(props.cityList)}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}>
                            <NoteAltIcon />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography > {props.stateName} </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {listOpenState && renderList(props.cityList)}
        </Grid>
    )
}