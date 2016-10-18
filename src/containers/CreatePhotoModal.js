/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import CreatePhotoForm from './CreatePhotoForm';

type Props = {
  onCreate: Function;
  onRequestClose: Function;
  open: boolean;
  photo?: Photo;
}

class CreatePhotoModal extends Component<void, Props, void> {
  createPhoto() {
    const { photo, onCreate: create } = this.props;

    create(photo);
  }

  render() {
    const { onRequestClose, open = false } = this.props;


    const actions = [
      <FlatButton label="Annuler" primary onTouchTap={onRequestClose} />,
      <FlatButton label="Créer" primary onTouchTap={this.createPhoto.bind(this)} />,
    ];

    return (
      <Dialog
        actions={actions}
        title="Création d'une photo"
        onRequestClose={onRequestClose}
        open={open}
      >
        <CreatePhotoForm />
      </Dialog>
    );
  }
}

export default connect(
  ({ form: { createPhoto: { values: photo = {} } = {} } }) => ({
    photo,
  })
)(CreatePhotoModal);
