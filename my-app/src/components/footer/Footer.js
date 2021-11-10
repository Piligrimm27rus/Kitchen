import React from 'react';
import '../../App.css';
import GridSourceFooter from "./../GridSourceFooter";
import Box from '@mui/material/Box';
import KitchenIcon from '@mui/icons-material/Kitchen';
import Typography from '@mui/material/Typography';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <GridSourceFooter/>

                <Box sx={{borderTop: 1, borderColor: '#d9d9d9', marginTop: 2, display: 'flex',  justifyContent:'center', alignItems:'center', margin: '0 auto',}}>
                    <KitchenIcon fontSize='large' sx={{margin: '0px', padding:'0', position:'absolute', backgroundColor: 'white'}}/>

                    <Typography variant="overline"  sx={
                    {
                        position: 'absolute',
                        marginTop: 10,
                        marginBottom: 1,
                        textAlign: 'center'
                    }}>
                    © ООО «Кухня», 2021. ВСЕ ПРАВА ЗАЩИЩЕНЫ. ДЛЯ ЛИЦ СТАРШЕ 18 ЛЕТ.
                </Typography>
                </Box>
            </div>
        )
    }
}

export default Footer;