import * as React from "react";

import Trigger from "../Trigger/Trigger";
import Body from "../Body/Body";

export interface DropdownProps {
  children: JSX.Element[];
}

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
    return (
      <div>
        <Trigger>Yo</Trigger>
        <Body>More stuff here</Body>
      </div>
    );
  }
}
