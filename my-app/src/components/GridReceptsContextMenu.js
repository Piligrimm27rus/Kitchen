import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



Button.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default function GridReceptsContextMenu() {
  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)' }}>

        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '3/4', fontWeight: 'fontWeightLight' }}>Любая категория ↓</Button>
        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '5/6', fontWeight: 'fontWeightLight' }}>Любое блюдо ↓</Button>
        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '7/8', fontWeight: 'fontWeightLight' }}>Любая кухня ↓</Button>

      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1}}>

        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '2/4', fontWeight: 'fontWeightLight' }}>+ Ингредиенты, детали</Button>
        {/* The second non-visible column has width of 1/4 */}
        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '4/6', fontWeight: 'fontWeightLight' }} color="success">Подобрать рецепт</Button>

      </Box>
    </div>
  );
}