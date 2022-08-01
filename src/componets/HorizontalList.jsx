import React from 'react'
import { Box, List, ListItem } from '@mui/material'
import BodyPartCard from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const HorizontalList = ({ data, selectedPart, setSelectedBodyPart }) => {
    return (
        <List   sx={{
            display:"flex",
            flexDirection:"row",
            padding:'0',
            overflow:"auto",
            maxWidth:"100%"

        }}>
            {
                data.map((val)=>(
                    <ListItem 
                      key={val}
                      onclick = {()=>{}}
                      sx={{cursor:'pointer'}}
                    >
                        {val}
                    </ListItem>
                ))
            }    
         </List>
    )
}

export default HorizontalList