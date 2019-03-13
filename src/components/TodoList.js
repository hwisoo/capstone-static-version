import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function TodoList() {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={3000}
      >
        <h2>Todos</h2>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </CSSTransitionGroup>
    </div>
  );
}
