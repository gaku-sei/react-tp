/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { all as allPhotos, create as createPhoto } from '../actions/photos';
import { close as closeModal } from '../actions/modals';
import { select as selectAlbum } from '../actions/album';

import Menu from './Menu';
import CreatePhotoModal from '../components/CreatePhotoModal';

class App extends Component {
  componentWillMount() {
    this.props.allPhotos();
  }

  async createPhoto({ albumId, ...rest }) {
    const { allPhotos, closeModal, createPhoto } = this.props;

    await createPhoto({ albumId, ...rest });

    await allPhotos({ albumId });

    selectAlbum(albumId);

    closeModal('createPhoto');
  }

  render() {
    const { children, closeModal, modals } = this.props;

    return (
      <MuiThemeProvider>
        <div className="app">
          <Menu />
          {children}
          <CreatePhotoModal
            onCreate={this.createPhoto.bind(this)}
            onRequestClose={closeModal.bind(null, 'createPhoto')}
            open={modals.createPhoto}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(({ modals }) => ({
  modals,
}), {
  allPhotos,
  closeModal,
  createPhoto,
  selectAlbum,
})(App);
