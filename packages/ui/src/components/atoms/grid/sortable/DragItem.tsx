import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";


const DragItem = memo(({ id, onMoveItem, children }:any) => {
  const ref = useRef(null);
  const [{ isDragging }, connectDrag] = useDrag({
    item: { id, type: "IMG" },
    type: 'Card',
    collect: monitor => {
      console.log('collect')
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  const [, connectDrop] = useDrop({
    accept: "IMG",
    hover(hoveredOverItem) {
      console.log('hover2')
      /* @ts-expect-error */
      if (hoveredOverItem.id !== id) {
        /* @ts-expect-error */
        onMoveItem(hoveredOverItem.id, id);
      }
    }
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      forwardedRef: ref,
      style: containerStyle
    })
  );
});

export default DragItem;
