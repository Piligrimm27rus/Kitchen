import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const images = [
    {
        source: "Идеи • Всюду жизнь",
        label: 'Как приготовить римскую пасту качо-э-пепе',
        imgPath:
            'https://picsum.photos/500/300?random=1',
    },
    {
        source: 'Идеи • Мастер класс',
        label: 'Итальянский оливье - салат каппон-магро',
        imgPath:
            'https://picsum.photos/500/300?random=2',
    },
    {
        source: 'Идеи • Рецепты шефов',
        label: 'Лучшие рецепты итальянских шефов',
        imgPath:
            'https://picsum.photos/500/300?random=3',
    },
    {
        source: 'Идеи • Рецепты',
        label: 'Классические итальянские рецепты',
        imgPath:
            'https://picsum.photos/500/300?random=4',
    },
    {
        source: 'Идеи • Заготовки',
        label: 'Варенье из дыни',
        imgPath:
            'https://picsum.photos/500/300?random=5',
    },
    {
        source: 'Идеи • Завтраки',
        label: 'Классические сырники',
        imgPath:
            'https://picsum.photos/500/300?random=6',
    },
];

class GridNewsMainPage extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "75px" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {images.map((items, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>

                            <Typography sx={{
                                bgcolor: 'none',
                                color: 'White',
                                p: 2,
                                position: 'absolute',
                                zIndex: 'modal',
                                paddingBottom: '100px'
                            }}
                                variant="h6"
                                textAlign='center'>
                                {images[index].source.toUpperCase()}
                            </Typography>

                            <Link href="#" underline="none" sx={{
                                width: 600,
                                height: 0,
                                bgcolor: 'none',
                                color: 'White',
                                p: 2,
                                paddingTop: 0,
                                position: 'absolute',
                                zIndex: 'modal',
                                '&:hover': {
                                    opacity: [0, 0, 0.9],
                                  }
                            }}
                                textAlign='center'
                                variant="h4"
                                >
                                {images[index].label}
                            </Link>


                            <Box
                                component="img"
                                sx={{ width: '100%', height: 300 , '&:hover': {
                                opacity: [0, 0, 0.9],
                              }}}
                                src={items.imgPath}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}

export default GridNewsMainPage;