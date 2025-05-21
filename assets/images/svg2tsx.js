#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

function toPascalCase(str) {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

async function convertSvgToTsx(svgPath, outputDir) {
  try {
    const svgFileName = path.basename(svgPath, '.svg');
    const componentName = toPascalCase(svgFileName);
    const tsxFileName = `${svgFileName}.tsx`;
    const outputPath = path.join(outputDir, tsxFileName);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Convert SVG to JS using SVGR
    const jsContent = execSync(`npx @svgr/cli --typescript -- ${svgPath}`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });

    // Generate the TypeScript content
    const tsxContent = `import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface ${componentName}Props extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

${jsContent
  .replace(/import \* as React from "react";/g, '')
  .replace(/import type { SVGProps } from "react";/g, '')
  .replace(/const \w+ = \(props: SVGProps<SVGSVGElement>\) =>/, `const ${componentName} = (props: ${componentName}Props) =>`)
  .replace(/export default \w+;/, `export default ${componentName};`)
}`;

    fs.writeFileSync(outputPath, tsxContent);
    console.log(`✅ Converted ${svgPath} to ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${svgPath}:`, error.message);
    process.exit(1);
  }
}

async function processDirectory(inputPath, outputDir) {
  try {
    const files = await readdir(inputPath);

    for (const file of files) {
      const fullPath = path.join(inputPath, file);
      const fileStat = await stat(fullPath);

      if (fileStat.isDirectory()) {
        const newOutputDir = path.join(outputDir, file);
        await processDirectory(fullPath, newOutputDir);
      } else if (file.endsWith('.svg')) {
        await convertSvgToTsx(fullPath, outputDir);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${inputPath}:`, error.message);
    process.exit(1);
  }
}

async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
      console.log('Usage: svg-to-tsx <input-path> <output-directory>');
      console.log('  input-path: can be a single SVG file or a directory containing SVG files');
      console.log('  output-directory: where the TSX files will be written');
      process.exit(1);
    }

    const inputPath = args[0];
    const outputDir = args[1];

    const inputStat = await stat(inputPath);

    if (inputStat.isDirectory()) {
      await processDirectory(inputPath, outputDir);
    } else if (inputPath.endsWith('.svg')) {
      await convertSvgToTsx(inputPath, outputDir);
    } else {
      console.error('❌ Input must be an SVG file or a directory containing SVG files');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

main();
