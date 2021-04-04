import React from 'react';
import Layout from './src/components/Layout';
import { ArtworkListProvider } from './src/components/ArtworkListContext';
import { ListViewProvider } from './src/components/ListViewContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
    return <ArtworkListProvider>
              <ListViewProvider>
                {element} 
              </ListViewProvider>
            </ArtworkListProvider>
}

