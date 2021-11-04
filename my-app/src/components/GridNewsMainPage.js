import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

class GridNewsMainPage extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "75px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Box
                                sx={{
                                    width: 500,
                                    height: 300,
                                    backgroundColor: 'primary.dark',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}

export default GridNewsMainPage;