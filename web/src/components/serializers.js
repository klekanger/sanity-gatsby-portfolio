import React from "react";
import Figure from "./figure";

const serializers = {
  types: {
    figure: Figure,
    code: (props) => (
      <pre data-language={props.node.language} style={{ backgroundColor: "#333", padding: "10px" }}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default serializers;
