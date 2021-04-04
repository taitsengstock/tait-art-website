// Artwork.stories.js

import React from 'react';

import { Artwork } from './Artwork';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Artwork',
  component: Artwork,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Artwork {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
};