import React from "react";
import {Container} from "@mui/material";
import { MyBar } from "../components/Drawer";
import users from "../assets/static/users-svgrepo-com.svg";
import { Diagram } from "../components/diagram";
import { DateRange } from "../components/dateRange"; 
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
  } from '@mui/material';

export const DeviceStatisticPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MyBar />
            <Container>
                <Diagram/>
                <DateRange/>
               {/*  {getImageList() } */} {/* Render the ImageList on the right side */}
            </Container>
        </div>
    
    );
}