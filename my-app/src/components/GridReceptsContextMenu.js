import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import CustomizedHookAdd from './CustomizedHookAdd';
import CustomizedHookExlude from './CustomizedHookExlude';


const category = [
  { label: 'Любая категория', category_id: 0 },
  { label: 'Заготовки', category_id: 1 },
  { label: 'Выпечка и десерты', category_id: 2 },
  { label: 'Основные блюда', category_id: 3 },
  { label: 'Завтраки', category_id: 4 },
  { label: 'Салаты', category_id: 5 },
  { label: 'Супы', category_id: 6 },
  { label: 'Паста и пицца', category_id: 7 },
  { label: 'Закуски', category_id: 8 },
  { label: 'Сендвичи', category_id: 9 },
  { label: 'Ризотто', category_id: 10 },
  { label: 'Напитки', category_id: 11 },
  { label: 'Соусы и маринады', category_id: 12 },
  { label: 'Бульоны', category_id: 13 },
];
const dish = [
  { label: 'Любое блюдо', category_id: 0, dish_id: 0 },
  { label: 'Варенье', category_id: 1, dish_id: 1 },
  { label: 'Салаты на зиму', category_id: 1, dish_id: 2 },
  { label: 'Соленья и консервация', category_id: 1, dish_id: 3 },
  { label: 'Ачма', category_id: 2, dish_id: 4 },
  { label: 'Безе, меренги', category_id: 2, dish_id: 5 },
  { label: 'Беляши', category_id: 2, dish_id: 6 },
  { label: 'Бисквит', category_id: 2, dish_id: 7 },
  { label: 'Бисквитное печенье', category_id: 2, dish_id: 8 },
  { label: 'Бисквитный торт', category_id: 2, dish_id: 9 },
];
const kitchen = [
  { label: 'Все кухни', kitchen_id: 1 },
  { label: 'Абхазская', kitchen_id: 2 },
  { label: 'Австралийская', kitchen_id: 3 },
  { label: 'Австрийская', kitchen_id: 4 },
  { label: 'Авторская', kitchen_id: 5 },
  { label: 'Азербайджанская', kitchen_id: 6 },
  { label: 'Американская', kitchen_id: 7 },
  { label: 'Арабская', kitchen_id: 8 },
  { label: 'Аргентинская', kitchen_id: 9 },
  { label: 'Армянская', kitchen_id: 10 },
  { label: 'Афганская', kitchen_id: 11 },
  { label: 'Африканская', kitchen_id: 12 },
  { label: 'Башкирская', kitchen_id: 13 },
  { label: 'Белорусская', kitchen_id: 14 },
  { label: 'Бельгийская', kitchen_id: 15 },
  { label: 'Болгарская', kitchen_id: 16 },
  { label: 'Бразильская', kitchen_id: 17 },
  { label: 'Британская', kitchen_id: 18 },
  { label: 'Венгерская', kitchen_id: 19 },
  { label: 'Восточно-индийская', kitchen_id: 20 },
  { label: 'Вьетнамская', kitchen_id: 21 },
  { label: 'Голландская', kitchen_id: 22 },
  { label: 'Греческая', kitchen_id: 23 },
  { label: 'Грузинская', kitchen_id: 24 },
  { label: 'Датская', kitchen_id: 25 },
  { label: 'Еврейская', kitchen_id: 26 },
  { label: 'Европейская', kitchen_id: 27 },
  { label: 'Египетская', kitchen_id: 28 },
  { label: 'Индийская', kitchen_id: 29 },
  { label: 'Индонезийская', kitchen_id: 30 },
  { label: 'Ирландская', kitchen_id: 31 },
  { label: 'Испанская', kitchen_id: 32 },
  { label: 'Итальянская', kitchen_id: 33 },
  { label: 'Казахская', kitchen_id: 34 },
  { label: 'Камбоджийская', kitchen_id: 35 },
  { label: 'Карибская', kitchen_id: 36 },
  { label: 'Каталонская', kitchen_id: 37 },
  { label: 'Кипрская', kitchen_id: 38 },
  { label: 'Киргизская', kitchen_id: 39 },
  { label: 'Китайская', kitchen_id: 40 },
  { label: 'Корейская', kitchen_id: 41 },
  { label: 'Креольская', kitchen_id: 42 },
  { label: 'Крымская', kitchen_id: 43 },
  { label: 'Кубинская', kitchen_id: 44 },
  { label: 'Кухня Вестероса', kitchen_id: 45 },
  { label: 'Латвийская', kitchen_id: 46 },
  { label: 'Латиноамериканская', kitchen_id: 47 },
  { label: 'Ливанская', kitchen_id: 48 },
  { label: 'Литовская', kitchen_id: 49 },
  { label: 'Малайзийская', kitchen_id: 50 },
  { label: 'Мальтийская', kitchen_id: 51 },
  { label: 'Марокканская', kitchen_id: 52 },
  { label: 'Мексиканская', kitchen_id: 53 },
  { label: 'Мировая', kitchen_id: 54 },
  { label: 'Молдавская', kitchen_id: 55 },
  { label: 'Немецкая', kitchen_id: 56 },
  { label: 'Норвежская', kitchen_id: 57 },
  { label: 'Одесская', kitchen_id: 58 },
  { label: 'Осетинская', kitchen_id: 59 },
  { label: 'Пакистанская', kitchen_id: 60 },
  { label: 'Паназиатская', kitchen_id: 61 },
  { label: 'Пенджабская', kitchen_id: 62 },
  { label: 'Персидская', kitchen_id: 63 },
  { label: 'Перуанская', kitchen_id: 64 },
  { label: 'Польская', kitchen_id: 65 },
  { label: 'Португальская', kitchen_id: 66 },
  { label: 'Раджастанская', kitchen_id: 67 },
  { label: 'Румынская', kitchen_id: 68 },
  { label: 'Русская', kitchen_id: 69 },
  { label: 'Северно-индийская', kitchen_id: 70 },
  { label: 'Сербская', kitchen_id: 71 },
  { label: 'Сингапурская', kitchen_id: 72 },
  { label: 'Сирийская', kitchen_id: 73 },
  { label: 'Сицилийская', kitchen_id: 74 },
  { label: 'Скандинавская', kitchen_id: 75 },
  { label: 'Советская', kitchen_id: 76 },
  { label: 'Средиземноморская', kitchen_id: 77 },
  { label: 'Таджикская', kitchen_id: 78 },
  { label: 'Тайская', kitchen_id: 79 },
  { label: 'Татарская', kitchen_id: 80 },
  { label: 'Турецкая', kitchen_id: 81 },
  { label: 'Туркменская', kitchen_id: 82 },
  { label: 'Узбекская', kitchen_id: 83 },
  { label: 'Украинская', kitchen_id: 84 },
  { label: 'Филиппинская', kitchen_id: 85 },
  { label: 'Финская', kitchen_id: 86 },
  { label: 'Французская', kitchen_id: 87 },
  { label: 'Хорватская', kitchen_id: 88 },
  { label: 'Черкесская', kitchen_id: 89 },
  { label: 'Черногорская', kitchen_id: 90 },
  { label: 'Чеченская', kitchen_id: 91 },
  { label: 'Чешская', kitchen_id: 92 },
  { label: 'Шведская', kitchen_id: 93 },
  { label: 'Швейцарская', kitchen_id: 94 },
  { label: 'Шотландская', kitchen_id: 95 },
  { label: 'Эстонская', kitchen_id: 96 },
  { label: 'Югославская', kitchen_id: 97 },
  { label: 'Южно-индийская', kitchen_id: 98 },
  { label: 'Японская', kitchen_id: 99 },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

Button.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default function GridReceptsContextMenu() {
  const [categoryChoosed, setValue] = React.useState(category[0].category_id);
  const [dishChoosed, setValueDish] = React.useState(dish[0].dish_id);
  const [kitchenChoosed, setValueKitchen] = React.useState(kitchen[0].kitchen_id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)' }}>

        <Autocomplete disablePortal
          onChange={(event, newValue) => {
            setValue(newValue !== null ? newValue.category_id : 0);
          }}
          options={category} sx={{ width: 200, gridRow: '2', gridColumn: '3/4', fontWeight: 'fontWeightLight' }} renderInput={(params) => <TextField {...params} label="Категория" />} />
        <Autocomplete onChange={(event, newValue) => {
          setValueDish(newValue.dish_id);
        }} disablePortal options={dish.filter(d => d.category_id === categoryChoosed)} sx={{ width: 200, gridRow: '2', gridColumn: '5/6', fontWeight: 'fontWeightLight' }} renderInput={(params) => <TextField {...params} label="Блюдо" />} />
        <Autocomplete onChange={(event, newValue) => {
          setValueKitchen(newValue.kitchen_id);
        }} disablePortal options={kitchen} sx={{ width: 200, gridRow: '2', gridColumn: '7/8', fontWeight: 'fontWeightLight' }} renderInput={(params) => <TextField {...params} label="Кухня" />} />

      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1 }}>

        <Button onClick={handleOpen} variant="contained" sx={{ gridRow: '2', gridColumn: '2/4', fontWeight: 'fontWeightLight' }}>+ Ингредиенты, детали</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CustomizedHookAdd />

            <CustomizedHookExlude />
          </Box>
        </Modal>


        <Button variant="contained" sx={{ gridRow: '2', gridColumn: '4/6', fontWeight: 'fontWeightLight' }} onClick=
          {() => alert(JSON.stringify(
            {
              category: categoryChoosed,
              dish: dishChoosed,
              kitchen: kitchenChoosed,
              addFood: localStorage.getItem('addFood'),
              exludeFood: localStorage.getItem('exludeFood')
            },
            null, 2))} color="success">Подобрать рецепт</Button>

      </Box>
    </div>
  );
}