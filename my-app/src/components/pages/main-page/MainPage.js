import React from 'react';
import '../../../App.css';
import GridReceptsContextMenu from './../../GridReceptsContextMenu';
import SwipeableTextMobileStepper from './../../SwipeableTextMobileStepper';
import GridNewsMainPage from './../../GridNewsMainPage';
import Typography from '@mui/material/Typography';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="overline" noWrap component="div" sx={
                    { 
                        marginTop: 5,
                        marginBottom: 1,
                        textAlign: 'center', 
                        display: { xs: 'none', sm: 'block' } }}>
                    Подбор рецептов
                </Typography>

                <GridReceptsContextMenu />

                <SwipeableTextMobileStepper/>

                <GridNewsMainPage/>
            </div>
        )
    }
}

export default MainPage;