import {
  DndContext, 
  closestCenter,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { Grid } from './AccountList.styled';
import { SortableItem } from '../item/AccountItemSortable';
import AccountItem from '../item/AccountItem';


export default function SortableAccounts({ list, queState }:any) {

  const setItems = ({ active, over, items }) => {
    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);
    
    const arrayMoved = arrayMove(items, oldIndex, newIndex);
    console.log('old', active, 'new', over);
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
