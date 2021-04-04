import React, { useContext } from 'react';
import ListViewContext from './ListViewContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare,
  faTh,
} from '@fortawesome/free-solid-svg-icons';

export default function ListToolbar() {
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
    </div>
  );
}