import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterWrapper, FilterInput, Button } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(''));
  };

  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </label>

        <Button type="button" onClick={clearFilter}>
          Clear
        </Button>
      </FilterWrapper>
    </>
  );
};
