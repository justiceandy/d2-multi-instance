import React, {useState} from 'react';
import {
  DndContext, 
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { Grid,  } from '../../AccountList.styled';
import { SortableItem } from '../../../item/AccountItemSortable';
import AccountItem from '../../../item/AccountItem';


export default function SortableAccounts({ list, queState }:any) {

  const setItems = ({ active, over, items }) => {
      const payload = {
          id: active.data.current.sortable.index,
          old: active.data.current.sortable.index,
          new: over.data.current.sortable.index,
      }
      
      console.log(payload);
      return true;
  };

  return (
    <Grid>
        <DndContext 
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >
        <SortableContext 
            items={list}
            strategy={rectSortingStrategy}
        >
            {list.map(item => <SortableItem key={item.id} id={item.id}>
            <AccountItem name={item.name} QueState={queState} id={item.id} />
            </SortableItem>
            )}
        </SortableContext>
        </DndContext>
    </Grid>
  );
  
  function handleDragEnd(event) {
    const {active, over} = event;
    if (active.id !== over.id) {
      setItems({ active, over, items: list })
    }
  }
}
