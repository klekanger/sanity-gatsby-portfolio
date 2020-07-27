// Component for deserializing/rendering codesnippets
// Used by Sanitys BaseBlockContent component

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        padding: '10px',
        overflowX: 'scroll',
      }}
    >
      <SyntaxHighlighter language={props.node.language} style={atomOneDark}>
        {props.node.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
