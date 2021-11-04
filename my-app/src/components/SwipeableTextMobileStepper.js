import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Что приготовить на новый год',
    imgPath:
      'https://picsum.photos/1024/600?random=1',
  },
  {
    label: '8 новых рецептов борща',
    imgPath:
      'https://picsum.photos/1024/600?random=2',
  },
  {
    label: 'Домашная паста с белыми грибами',
    imgPath:
      'https://picsum.photos/1024/600?random=3',
  },
  {
    label: 'Сытные сырные супы',
    imgPath:
      'https://picsum.photos/1024/600?random=4',
  },
  {
    label: 'Готовим пасту дома',
    imgPath:
      'https://picsum.photos/1024/600?random=5',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '5vh', MaxHeight: 700, maxWidth: 1050}}>
      <Paper
        square
        elevation={0}
        sx={{
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography sx={{
          
          bgcolor: 'none',
          color: 'White',
          p: 2,
          position: 'absolute',
          zIndex: 'modal',}}
          variant="h2"
          align='center'>
            {images[activeStep].label}
          </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        >

        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  MaxHeight: 600,
                  maxWidth: 1024,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0, 0, 0.9],
                  }
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div> ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      sx={{display: "fixed", position: 'absolute', marginTop: "675px"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
          }

        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
