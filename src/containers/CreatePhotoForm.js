/* @flow */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import config from '../config';

const RenderTextField = ({ input, label, name }) => (
  <TextField
    fullWidth
    floatingLabelText={label}
    name={name}
    {...input}
  />
);

const RenderSelectField = ({ children, input, label, name }) => (
  <SelectField
    fullWidth
    floatingLabelText={label}
    name={name}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
  >
    {children}
  </SelectField>
);

class CreatePhotoForm extends Component {
  render() {
    return (
      <div>
        <div>
          <Field component={RenderTextField} label="Titre" name="title" />
        </div>
        <div>
          <Field component={RenderTextField} label="URL" name="url" />
        </div>
        <div>
          <Field component={RenderTextField} label="Thumbnail" name="thumbnailUrl" />
        </div>
        <div>
          <Field component={RenderSelectField} label="ID de l'album" name="albumId">
            {config.albumsNames.map((name, i) => (
              <MenuItem key={i} primaryText={`Album ${name}`} value={name} />
            ))}
          </Field>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'createPhoto',
})(CreatePhotoForm);
