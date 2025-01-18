# tanstack-table

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/naveenkchelluboina/tanstack-table)

https://af18b97f-b751-4635-a2a5-8f5c2e2e679b.mock.pstmn.io/warehouse


const handleChange = (
      newValue: MultiValue<Warehouse>,
      actionMeta: ActionMeta<Warehouse>
    ) => {
      if (actionMeta.action === 'clear' || newValue.length === 0) {
        setSelectedWarehouses([]);
        setFilteredWarehouses(originalFilteredWarehouses);
        setOriginalFilteredWarehouses([]);
      } else if (newValue.some((option) => option.value === 'select_all')) {
        if (selectedWarehouses.length === filteredWarehouses.length) {
          setSelectedWarehouses([]);
          onChange([]);
        } else {
          setSelectedWarehouses(filteredWarehouses);
          onChange(filteredWarehouses);
        }
      } else {
        setSelectedWarehouses([...newValue]);
      }
  
      if (originalFilteredWarehouses.length > 0) {
        setFilteredWarehouses(originalFilteredWarehouses);
      } else {
        setFilteredWarehouses(filteredWarehouses);
      }
  
      onChange(newValue as any);
    };