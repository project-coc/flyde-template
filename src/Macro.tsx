import React,{ useState , useEffect } from "react";
import { MacroEditorComp } from "@flyde/core";
import { Config } from "./Macro.flyde";
import { Card, Elevation } from "@blueprintjs/core";

export const MacroEditor: MacroEditorComp<Config> = ({
  value,
  onChange,
}) => {
  const [label, setContent] = useState(value.label);

  useEffect(() => {
    onChange({ label });
  }, [label, onChange]);
  
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
    <h1><input 
        type="text"
        value={label}
        onLoad={() => onChange}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", padding: "8px 6px" }}
      /></h1>
    </Card>
  );
};

export default MacroEditor;
