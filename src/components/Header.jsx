import { Divider, IconButton, Toolbar,Typography,Badge } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { makeStyles } from '@mui/styles'; // Correct import for makeStyles

const styles=makeStyles((theme)=>({
    title:{
        flexGrow:1,
    },
    tagline:{
        fontSize:20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily:"Montserrat"
    }
}))

const Header=()=>{
    const classes=styles();
    return(
        <>
        <Toolbar>
            <IconButton color='inherit'>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>Blogging Website</Typography>
            <IconButton color='inherit'>
                <Badge color='primary' badgeContent={6}>
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <IconButton color='inherit'>
                <AccountBoxIcon/>
            </IconButton>
        </Toolbar>
            <Divider/>
            <Typography variant="p" className={classes.tagline}>Express your emotions through words</Typography>
        </>
    )
}

export default Header;