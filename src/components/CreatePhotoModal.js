/* @flow */

import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

type Props = {
  onCreate: Function;
  onRequestClose: Function;
  open: boolean;
}

type State = {
  photo: Photo;
}

export default class CreatePhotoModal extends Component<void, Props, State> {
  state = {
    photo: this.emptyPhoto,
  }

  get emptyPhoto() {
    return {
      albumId: null,
      title: '',
      url: '',
    };
  }

  updatePhoto(field, event, value, ...rest) {
    this.setState({
      photo: {
        ...this.state.photo,
        [field]: value,
      },
    });
  }

  createPhoto() {
    const { onCreate: create } = this.props;
    const { photo } = this.state;

    create(photo);

    this.setState({
      photo: this.emptyPhoto,
    });
  }

  render() {
    const { onRequestClose, open = false } = this.props;
    const { photo } = this.state;

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
        <div>
          <TextField
            fullWidth
            floatingLabelText="Titre"
            name="title"
            onChange={this.updatePhoto.bind(this, 'title')}
            value={photo.title}
          />
        </div>
        <div>
          <TextField
            fullWidth
            floatingLabelText="URL"
            name="url"
            onChange={this.updatePhoto.bind(this, 'url')}
            type="url"
            value={photo.url}
          />
        </div>
        <div>
          <TextField
            fullWidth
            floatingLabelText="Thumbnail"
            name="thumbnailUrl"
            onChange={this.updatePhoto.bind(this, 'thumbnailUrl')}
            type="thumbnailUrl"
            value={photo.thumbnailUrl || ''}
          />
        </div>
        <div>
          <SelectField
            fullWidth
            floatingLabelText="ID de l'album"
            name="albumId"
            onChange={(event, key, value) => this.updatePhoto('albumId', event, value)}
            value={photo.albumId}
          >
            <MenuItem primaryText="Album 1" value={1} />
            <MenuItem primaryText="Album 2" value={2} />
            <MenuItem primaryText="Album 3" value={3} />
            <MenuItem primaryText="Album 4" value={4} />
            <MenuItem primaryText="Album 5" value={5} />
          </SelectField>
        </div>
      </Dialog>
    );
  }
}
