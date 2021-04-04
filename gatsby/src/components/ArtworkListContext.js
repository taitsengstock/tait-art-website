import React, { useState, useLayoutEffect, useContext } from 'react'


const ArtworkListContext = React.createContext();

export const ArtworkListProvider = ({ children }) => {

    const [show, setShow] = useState(null)

    return(
      <ArtworkListContext.Provider value={[show, setShow] }>
        {children}
      </ArtworkListContext.Provider>
    )
}

export default ArtworkListContext;