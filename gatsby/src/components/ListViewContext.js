import React, { useState, useLayoutEffect, useContext } from 'react'

const ListViewContext = React.createContext();

export const ListViewProvider = ({ children }) => {
    
    const [view, setView] = useState(null)

    return(
      <ListViewContext.Provider value={[view, setView]}>
        {children}
      </ListViewContext.Provider>
    )
}

export default ListViewContext;