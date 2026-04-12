import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterReducer';
import { selectFilter } from 'redux/filter/filterSelector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        defaultValue={filter}
        onInput={e => {
          dispatch(changeFilter(e.currentTarget.value));
        }}
      />
    </div>
  );
};
