import { MacroNode } from "@flyde/core";

export interface Config {
  label: string;
}

export const Macro: MacroNode<Config> = {
  id: "Macro",
  displayName: "Macro",
  defaultStyle: {
    icon: "comment",
  },
  description: "Macro node",
  runFnBuilder: (config) => {
    return (_,outputs) => {
      outputs.out.next(config.label)
    };
  },
  definitionBuilder: (config) => {
    return {
      displayName: config.label,
      description: "node",
      inputs: {
        in: {
          displayName: "in",
          description: "in",
        },
      },
      outputs: {
        out: {
          displayName: "out",
          description: "out",
        },
      },
    }
  },
  defaultData: {
    label: "hello,world"
  },
  editorConfig: {
    type: "custom",
    editorComponentBundlePath: "../../dist/ui/Macro.js",
  },
};
