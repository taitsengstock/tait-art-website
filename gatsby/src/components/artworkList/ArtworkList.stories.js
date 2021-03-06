import React, { useContext, useState } from 'react';
import {ListViewContext} from './../ListViewContext'
import { ArtworkList } from './ArtworkList';

// const [view, setView] = useState('carousel')

//๐ This default export determines where your story goes in the story list
export default {
  title: 'ArtworkList',
  component: ArtworkList,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => (
  <ArtworkList />
)

export const Primary = Template.bind({});

Primary.args = {
  /*๐ The args you need here will depend on your component */

};