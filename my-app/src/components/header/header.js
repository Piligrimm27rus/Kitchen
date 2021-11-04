import React from 'react';
import '../../App.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const RouteContextMenu = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    flex: 1,
    alignItems: 'center',
    marginLeft: 50
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 18,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


class Header extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className="tool-bar">

                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>

                            <HomeIcon />

                        </IconButton>

                        <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Кухня
                        </Typography>

                        <RouteContextMenu>
                            <Stack spacing={5} direction="row">
                                <Button variant="contained" href="#outlined-buttons1" ms={2}>Главная</Button>
                                <Button variant="contained" href="#outlined-buttons2" ms={2}>Рецепты</Button>
                                <Button variant="contained" href="#outlined-buttons3" ms={2}>Уроки</Button>
                                <Button variant="contained" href="#outlined-buttons4" ms={2}>Авторы</Button>
                                <Button variant="contained" href="#outlined-buttons5" ms={2}>Идеи</Button>
                            </Stack>
                        </RouteContextMenu>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>

                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Log in</Button>
                            <Button variant="outlined">Sign in</Button>
                        </Stack>



                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default Header;