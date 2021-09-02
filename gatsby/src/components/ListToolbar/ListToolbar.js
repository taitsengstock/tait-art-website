import React, { useContext } from 'react';
import ListViewContext from '../ListViewContext';
import SortContext from '../SortContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import Select from '../Select/Select';

export default function ListToolbar() {

  const [sort, setSort] = useContext(SortContext)
  const [view, setView] = useContext(ListViewContext)

  return (
    <div css={css`
        display: grid;
        grid-template-columns: 1fr;
        padding: 1rem;
    `}>
      <div css={css`
          justify-self: end;
      `}>
        <button 
          onClick={() => setView('carousel')}
          css={css`
            margin-right: 0.5rem;
          `}
        >
          <FontAwesomeIcon
            icon={faSquare}
          />
        </button>
        <button onClick={() => setView('grid')}>
          <FontAwesomeIcon
            icon={faTh}
          />
        </button>
      </div> 
      <div css={css`
          justify-self: end;
      `}>
        <Select onChange={(e) => setSort(e.target.value)}>
          <option value="mrf">Most Recent first</option>
          <option value="of">Oldest First</option>
        </Select>
      </div>
    </div>
  );
}