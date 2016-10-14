type Photo = {
  id?: number;
  title?: string;
  albumId?: number | null;
  thumbnailUrl?: string;
  url?: string;
}

type Action = {
  type: string;
}

type PhotoQuery = {
  albumId?: string;
}

declare module 'material-ui/Dialog' {
  declare var exports: any;
}

declare module 'material-ui/FlatButton' {
  declare var exports: any;
}

declare module 'material-ui/RaisedButton' {
  declare var exports: any;
}

declare module 'material-ui/DropDownMenu' {
  declare var exports: any;
}

declare module 'material-ui/MenuItem' {
  declare var exports: any;
}

declare module 'material-ui/GridList' {
  declare var exports: any;
}

declare module 'material-ui/Toolbar' {
  declare var exports: any;
}

declare module 'material-ui/TextField' {
  declare var exports: any;
}

declare module 'material-ui/SelectField' {
  declare var exports: any;
}

declare module 'material-ui/styles/MuiThemeProvider' {
  declare var exports: any;
}
