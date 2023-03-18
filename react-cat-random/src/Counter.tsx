import React from "react";

interface ICounterProps {
  count: number;
  handleFunction: () => void;
}

export default function Counter(props: ICounterProps): React.ReactElement {
  return (
    <button id="button-1" onClick={props.handleFunction}>
      The refreshing count is: {props.count}.
    </button>
  );
}
