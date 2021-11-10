import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const autors = [
    {
        gridColumn: '3/4',
        place: '№1',
        autorName: 'Пепе Ржеловский',
        imgPath:
            'https://picsum.photos/100/100?random=1',
    },
    {
        gridColumn: '5/6',
        place: '№2',
        autorName: 'Пепего Кири-Вили',
        imgPath:
            'https://picsum.photos/100/100?random=2',
    },
    {
        gridColumn: '7/8',
        place: '№3',
        autorName: 'Марадонс Проклятый',
        imgPath:
            'https://picsum.photos/100/100?random=3',
    }
];

class GridBestAutors extends React.Component {
    render() {
        return (
            <Box sx={{marginBottom: 10}}>
                <Typography variant="overline" noWrap component="div" sx={
                    {
                        marginTop: 5,
                        marginBottom: 1,
                        textAlign: 'center',
                        display: { xs: 'none', sm: 'block' }
                    }}>
                    Лучшие авторы недели
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)' }}>
                    {autors.map((items, index) => (
                        <Grid sx={{ gridRow: '2', gridColumn: autors[index].gridColumn, fontWeight: 'fontWeightLight' }}>
                            <Box
                                component="img"
                                sx={{
                                    borderRadius: '50%', width: '100%',
                                    '&:hover': {
                                        opacity: [0, 0, 0.9],

                                    }
                                }}
                                src={items.imgPath}
                            />
                            <Typography sx={{
                                bgcolor: 'none',
                                p: 2,
                            }}
                                variant="h6"
                                textAlign='center'>
                                {autors[index].place}
                            </Typography>

                            <Typography href="#" underline="none" sx={{
                                width: '0 auto',
                                bgcolor: 'none',
                                p: 2,
                                paddingTop: 0,
                                '&:hover': {
                                    opacity: [0, 0, 0.9],
                                }
                            }}
                                textAlign='center'
                                variant="h5"
                            >
                                {autors[index].autorName}
                            </Typography>



                        </Grid>
                    ))}

                </Box>
            </Box>
        )
    }
}

export default GridBestAutors;