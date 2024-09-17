import { MacroNode } from "@flyde/core";

export interface Config {
}

export const Macro: MacroNode<Config> = {
  id: "",
  displayName: "",
  defaultStyle: {
    icon: "",
  },
  description: "",
  runFnBuilder: (config) => {
    return (inputs, outputs) => {
      outputs.out.next()
    };
  },
  definitionBuilder: (config) => {
    return {
      displayName: "",
      description: "",
      inputs: {
        in: {
          displayName: "",
          description: "",
        },
      },
      outputs: {
        out: {
          displayName: "",
          description: "",
        },
      },
    }
  },
  defaultData: {
  },
  editorConfig: {
    type: "custom",
    editorComponentBundlePath: "../../dist/ui/*.js",
  },
};
