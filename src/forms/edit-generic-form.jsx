import React from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import CustomTextFiled from 'form-controls/CustomTextFiled';
import SelectFiled from 'form-controls/SelectFiled';
import { Box, Button } from '@mui/material';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    surname: {
      type: 'string',
    },
    time: {
      type: 'string',
      label: 'hkjhsd',
    },
    booleanWithCustomLabels: {
      type: 'boolean',
      oneOf: [
        { const: true, title: 'Custom label for true' },
        { const: false, title: 'Custom label for false' },
      ],
    },
    collections: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};

const uiSchema = {
  time: {
    'ui:widget': 'alt-datetime',
    'ui:options': {
      hideClearButton: true,
      hideNowButton: true,
    },
  },
  booleanWithCustomLabels: {
    'ui:widget': 'select', // or "select"
  },
};

const widgets = {
  TextWidget: CustomTextFiled,
};

const GenericEditForm = () => {
  return (
    <Form
      templates={{
        ObjectFieldTemplate: (props) => (
          <Box margin={3}>
            {props.description}
            {props.properties.map((element, i) => {
              return <Box key={i}>{element.content}</Box>;
            })}
          </Box>
        ),
        ButtonTemplates: {
          AddButton: (props) => (
            <Button {...props} variant="contained">
              Add
            </Button>
          ),
          MoveDownButton: (props) => (
            <Button {...props} variant="contained">
              Move down
            </Button>
          ),
          MoveUpButton: (props) => (
            <Button {...props} variant="contained">
              Move Up
            </Button>
          ),
          RemoveButton: (props) => (
            <Button {...props} variant="contained">
              Remove
            </Button>
          ),
          SubmitButton: (props) => (
            <Button {...props} variant="contained">
              Submit
            </Button>
          ),
        },
      }}
      schema={schema}
      validator={validator}
      onChange={(data) => console.log(data)}
      widgets={widgets}
      uiSchema={uiSchema}
    />
  );
};

export default GenericEditForm;
