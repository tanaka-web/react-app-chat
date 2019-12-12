import * as React from "react";

export interface AppProps { hoge: string; fuga: string; }

export class App extends React.Component<AppProps, {}> {
  render() {
    return <h1>{this.props.hoge} {this.props.fuga}!</h1>;
  }
}