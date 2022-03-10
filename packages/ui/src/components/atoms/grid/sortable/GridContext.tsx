import React, { Component, createContext } from "react";
import sampleItems from './sampleItems';

// Helper functions

function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

// Context

const GridContext = createContext({ items: [] });

export class GridProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: sampleItems,
      moveItem: this.moveItem,
      setItems: this.setItems
    };
  }

  render() {
    return (
         /* @ts-expect-error */
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }

  setItems = items => this.setState({ items });

  moveItem = (sourceId, destinationId) => {
       /* @ts-expect-error */
    const sourceIndex = this.state.items.findIndex(
      item => item.id === sourceId
    );
    /* @ts-expect-error */
    const destinationIndex = this.state.items.findIndex(
      item => item.id === destinationId
    );

    // If source/destination is unknown, do nothing.
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState(state => ({
         /* @ts-expect-error */
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };
}

export default GridContext;
