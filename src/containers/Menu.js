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
  value: number;
}

class Menu extends Component<void, Props, State> {
  state = {
    value: 0,
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    const { photos: [selectedPhoto = {}] } = this.props;

    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
            <MenuItem value={0} primaryText="Tous les albums" />
            <MenuItem value={1} primaryText="Album 1" />
            <MenuItem value={2} primaryText="Album 2" />
            <MenuItem value={3} primaryText="Album 3" />
            <MenuItem value={4} primaryText="Album 4" />
            <MenuItem value={5} primaryText="Album 5" />
          </DropDownMenu>
          {!selectedPhoto ? null : (
            <ToolbarTitle text={selectedPhoto.title} />
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

export default connect(({ photos }) => ({
  photos,
}), {
  allPhotos,
})(Menu);
