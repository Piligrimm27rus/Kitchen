import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const sources = [
    {
        gridColumn: '1',
        sourceName: 'Рецепты',
        gridRow: '1'
    },
    {
        gridColumn: '2',
        sourceName: 'Авторы',
        gridRow: '1'
    },
    {
        gridColumn: '3',
        sourceName: 'Редакция',
        gridRow: '1'
    },
    {
        gridColumn: '4',
        sourceName: 'Рассылка',
        gridRow: '1'
    },
    {
        gridColumn: '1',
        sourceName: 'Идеи',
        gridRow: '2'
    },
    {
        gridColumn: '2',
        sourceName: 'База',
        gridRow: '2'
    },
    {
        gridColumn: '3',
        sourceName: 'Реклама',
        gridRow: '2'
    },
    {
        gridColumn: '4',
        sourceName: 'Условия использования',
        gridRow: '2'
    },
    {
        gridColumn: '1',
        sourceName: 'Журнал',
        gridRow: '3'
    },
    {
        gridColumn: '2',
        sourceName: 'Школа «еды»',
        gridRow: '3'
    },
    {
        gridColumn: '3',
        sourceName: 'FAQ',
        gridRow: '3'
    },
    {
        gridColumn: '4',
        sourceName: 'Сообщить об ошибке',
        gridRow: '3'
    }
];

class GridSourceFooter extends React.Component {
    render() {
        return (
            <Box sx={{borderTop: 1, borderColor: '#d9d9d9'}}>
                <Box sx={{ paddingTop: 5, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width:'50%', margin: '0 auto' }}>
                    {sources.map((items, index) => (
                        <Grid sx={{ gridRow: items.gridRow, gridColumn: items.gridColumn, fontWeight: 'fontWeightLight', justifyContent: 'center', alignItems: 'center', display: 'flex', paddingBottom: 2 }}>
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
                                variant="subtitle1"
                            >
                                {sources[index].sourceName}
                            </Typography>
                        </Grid>
                    ))}
                </Box>
            </Box>
        )
    }
}

export default GridSourceFooter;