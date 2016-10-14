/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ContentSort from 'material-ui/svg-icons/content/sort';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import { select as selectAlbum } from '../actions/album';
import { all as allPhotos } from '../actions/photos';
import { open as openModal } from '../actions/modals';

import config from '../config';

type Props = {
  allPhotos?: Function;
  albumId?: ?string;
  openModal?: Function;
  photos?: Array<Photo>;
  selectAlbum?: Function;
}

class Menu extends Component<void, Props, void> {
  async handleChange(event, index, albumId) {
    const { selectAlbum, allPhotos } = this.props;

    await selectAlbum(albumId);

    allPhotos({ albumId });
  }

  render() {
    const { albumId, openModal, photo } = this.props;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <DropDownMenu value={albumId} onChange={this.handleChange.bind(this)}>
            <MenuItem value={null} primaryText="Tous les albums" />
            {config.albumsNames.map((name, i) => (
              <MenuItem key={i} value={name} primaryText={`Album ${name}`} />
            ))}
          </DropDownMenu>
          {!photo ? null : (
            <ToolbarTitle text={photo.title} />
          )}
        </ToolbarGroup>
        <ToolbarGroup>
          {/*
            <ToolbarTitle text="Tri" />
            <ContentSort style={{ color: '#9e9e9e', marginTop: 15 }} />
          */}
          <ToolbarSeparator />
          <RaisedButton onClick={openModal.bind(null, 'createPhoto')} label="Ajouter une image" primary />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default connect(({ album: albumId, photo }) => ({
  albumId,
  photo,
}), {
  allPhotos,
  openModal,
  selectAlbum,
})(Menu);
