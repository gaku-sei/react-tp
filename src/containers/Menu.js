/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentSort from 'material-ui/svg-icons/content/sort';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import { all as allPhotos } from '../actions/photos';

type Props = {
  photos: Array<Photo>;
}

type State = {
  albumId: number;
}

class Menu extends Component<void, Props, State> {
  state = {
    albumId: 0,
  }

  handleChange(event, index, albumId) {
    const { allPhotos } = this.props;

    allPhotos({ albumId });

    this.setState({ albumId });
  }

  render() {
    const { photo } = this.props;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <DropDownMenu value={this.state.albumId} onChange={this.handleChange.bind(this)}>
            <MenuItem value={0} primaryText="Tous les albums" />
            <MenuItem value={1} primaryText="Album 1" />
            <MenuItem value={2} primaryText="Album 2" />
            <MenuItem value={3} primaryText="Album 3" />
            <MenuItem value={4} primaryText="Album 4" />
            <MenuItem value={5} primaryText="Album 5" />
          </DropDownMenu>
          {!photo ? null : (
            <ToolbarTitle text={photo.title} />
          )}
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Tri" />
          <ContentSort style={{ color: '#9e9e9e', marginTop: 15 }} />
          <ToolbarSeparator />
          <RaisedButton label="Ajouter une image" primary />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default connect(({ photo }) => ({
  photo,
}), {
  allPhotos,
})(Menu);
