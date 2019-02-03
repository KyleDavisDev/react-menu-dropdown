import * as React from "react";

export interface DropdownProps {}

export interface DropdownState {}

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div />;
  }
}
