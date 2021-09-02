// Artwork.stories.js

import React from 'react';

import { Artwork } from './Artwork';
import usePlaceholder from "../../utils/usePlaceholder"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Artwork',
  component: Artwork,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

const placeholder = usePlaceholder()
console.log(placeholder)

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Artwork {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  artworkImage: placeholder.asset.fluid,
};