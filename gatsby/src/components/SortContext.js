import React, { useState, useLayoutEffect, useContext } from 'react'

const SortContext = React.createContext();

export const SortContextProvider = ({ children }) => {
    
    const [sort, setSort] = useState(null)

    return(
      <SortContext.Provider value={[sort, setSort]}>
        {children}
      </SortContext.Provider>
    )
}

export default SortContext;