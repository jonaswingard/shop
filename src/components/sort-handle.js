import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>:HANDLE:</span>);

export default DragHandle;
