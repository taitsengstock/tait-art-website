import React from 'react';
import Layout from './src/components/Layout';
import { ArtworkListProvider } from './src/components/ArtworkListContext';
import { ListViewProvider } from './src/components/ListViewContext';
import { SortContextProvider } from './src/components/SortContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
    return <ArtworkListProvider>
              <ListViewProvider>
                <SortContextProvider>
                  {element} 
                </SortContextProvider>
              </ListViewProvider>
            </ArtworkListProvider>
}

