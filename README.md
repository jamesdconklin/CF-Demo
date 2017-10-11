# CF-Demo
Simple Task list, demonstrating React, Drag-and-drop, and async error handling.

## Features
 - List of Tasks
 - New tasks can be created and existing tasks persisted by the top-most buttons
 - Tasks can be reordered by dragging, with illegal drops reverting to the original ordering.
 - Tasks can be renamed or deleted.
 - Tasks are initially loaded from an external API.
 - Alerts display for failures in loading from or writing to the external API.

## Usage

Clone the repository:

`$ git clone git@github.com:jamesdconklin/CF-Demo.git`

Install dependencies:

`$ npm i`

Run webpack.

`$ npm run build`

The javascript compiles to `dist/bundle.js`. Opening `dist/index.html` in a browser should suffice for interacting with the demo.

## Disclosures

This project was put together as a demonstration of skill for a job application. I am responsible only for the front-end code.
