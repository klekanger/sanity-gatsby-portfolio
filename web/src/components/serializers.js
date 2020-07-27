import React from "react";
import Figure from "./figure";

const serializers = {
  types: {
    figure: Figure,
    code: (props) => (
      <div style={{ backgroundColor: "#333", padding: "10px", width: "85vw", overflowX: "scroll" }}>
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      </div>
    ),
  },
};

export default serializers;
