import { CodeNode } from "@flyde/core";
import fs from "fs";
import path from "path";

export const ReplaceInTemplate: CodeNode = {
  id: "ReplaceInTemplate",
  displayName: "Replace In Template",
  description: "Reads a template file and replaces specified strings, then writes to an output directory",
  inputs: {
    outputDir: { description: "The directory to write the output file to" },
    fileName: { description: "The name of the output file" },
    templatePath: { description: "The file path of the template" },
    replacements: { description: "An array of objects with 'from' and 'to' properties for string replacement"}
  },
  outputs: { result: { description: "Confirmation of operation completion" } },
  run: ({ outputDir, fileName, templatePath, replacements }, { result }) => {
    fs.readFile(templatePath, "utf8", (err, data) => {
      if (err) throw err;
      let modifiedContent = data;
      const repdata : Array<object> = replacements
      repdata.forEach((values) => {
        const regex = new RegExp(values["from"], "g")
        modifiedContent = modifiedContent.replace(regex, values["to"])
      });
      const outputFilePath = path.join(outputDir, fileName);
      fs.writeFile(outputFilePath, modifiedContent, (err) => {
        if (err) throw err;
        result.next(`File written to ${outputFilePath}`);
      });
    });
  },
};