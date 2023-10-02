// src/components/Assistant/Assistant.tsx
import React from 'react';
import { Box,Heading } from '@chakra-ui/react';
import ThreeDObject from './ThreeDObject';

// interface AssistantProps {
//   // Define assistant props here
// }

const Assistant: React.FC = () => {
  return (
    <Box
      position="fixed"
      bottom="20px"
      left="20px"
      // Add other styling properties to make it transparent and animated
    >
<Heading color={'black'}>bjnk</Heading>
      {/* Other assistant content */}
      <ThreeDObject />
    </Box>
  );
};

export default Assistant;
