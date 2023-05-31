import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText ,Box} from '@material-ui/core';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';


const MyComponent = () => {
    const [isListOpen, setIsListOpen] = useState(false);

    const handleCardClick = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                {/* <Typography variant='h1'  >Heading 1</Typography>
<Typography variant='h2' component="h1" >Heading 2</Typography> */}
                <Button variant='text' href='http://google.com'> Text </Button>
                <Button variant='contained'> Text </Button>
                <Button variant='outlined'> Text </Button>
                <Button variant='outlined'> Text </Button>
            </Stack>
            <Stack spacing={2} direction='row'>

                {/* <Typography variant='h1'  >Heading 1</Typography>
<Typography variant='h2' component="h1" >Heading 2</Typography> */}
                <Button variant='text' href='http://google.com'> Text </Button>
                <Button variant='contained'> Text </Button>
                <Button variant='outlined'> Text </Button>
                <Button variant='outlined'> Text </Button>
            </Stack>
            <Stack spacing={2} direction='row' >

                {/* <Typography variant='h1'  >Heading 1</Typography>
<Typography variant='h2' component="h1" >Heading 2</Typography> */}
                <Button variant='text' size='small'> Small </Button>
                <Button variant='contained' size='medium'> medium Text </Button>
                <Button variant='outlined' size='large'> Large  </Button>
                <Button variant='outlined' color='error' > Text </Button>
            </Stack>
            <Stack spacing={2} direction='row' display='block' >

                {/* <Typography variant='h1'  >Heading 1</Typography>
<Typography variant='h2' component="h1" >Heading 2</Typography> */}
                <Button variant='text' size='small'> Small </Button>
                <Button variant='contained' size='medium'> medium Text </Button>
                <Button variant='outlined' size='large' endIcon={<ReplyAllIcon/>}> Large  </Button>
                <Button variant='outlined' color='error' startIcon={<ReplyAllIcon/>}> Text </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
            <IconButton>
                <SendIcon color='success' size='large'/>
                <SendIcon color='error' size='small' />
                <SendIcon color='error' size='medium'/>
            </IconButton>
            </Stack>

            <Stack direction='row'>
                
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color='warning' variant='contained'> Pending </Button>
                <Button color='success' variant='contained'> Confirm </Button>
                <Button color='error' variant='contained'> Reject </Button>
    </ButtonGroup>
            </Stack>

            <Typography variant='h1'  sx={{color:'primary.main',fontSize:"100px"}}>Heading 1</Typography>
            <Box sx={{color:'primary.main',  }}> Having a fun</Box>
        </Stack>


    );
};

export default MyComponent;
