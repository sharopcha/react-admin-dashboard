import { Check, Lens, TripOrigin } from '@mui/icons-material';
import {
  Stepper,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  styled,
} from '@mui/material';
import React from 'react';

const CustomStepper = () => {
  const actions = [
    {
      actionId: '2378yuy8g23b',
      action: 'Arrived',
      date: 'On way',
      active: true,
      completed: false,
    },
    {
      actionId: '23dfsfsdg23b',
      action: 'Shipped from Madrid',
      date: '12 Jun 8:00 AM',
      active: false,
      completed: false,
    },
    {
      actionId: '23sdfsdg23b',
      action: 'Arrived in Madrid',
      date: '10 Jun 6:00 AM',
      active: false,
      completed: false,
    },
    {
      actionId: '23trhrth8g23b',
      action: 'Shipped from Seville',
      date: 'Jun 8 4:00 PM',
      active: false,
      completed: false,
    },
  ];

  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[700]
        : theme.palette.secondary[200],
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Lens fontSize="small" className=".QontoStepIcon-circle" />
        ) : (
          <TripOrigin fontSize="small" className=".QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <Stepper
      orientation="vertical"
      activeStep={3}
      sx={{
        flexDirection: 'column-reverse',
      }}
    >
      {actions.reverse().map((action) => (
        <Step key={action.actionId}>
          <StepLabel StepIconComponent={QontoStepIcon}>
            {action.action}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
