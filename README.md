## Skoove Fullstack Coding Challenge "collaborative list"

This is a [Next.js](https://nextjs.org/) project

It was set up with Node version 20, NPM version 10.

## Run

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

Top-level folders

- server -- The server part is a Websocket server, running on the same port 3000 as the Web server
- app -- the React client-side code
- public -- static files, not used here (yet)
- types -- shared types between client and server

## Challenge

The expected functionality is a collaborative list, like a one-dimensional spreadsheet.

It is designed to scale to thousands of rows, therefore we don't want to send the entire list over the wire when this is not necessary.

As long as only one user is active at any given time, the collaborative list should work fine. It is possible to update a given row, insert a row (before the given cell), and delete a row.

Problems start appearing when there are many globally distributed concurrent users on the collaborative list. Users report that data they enter on a given line overwrites other cells than they expect. Sometimes, other cells than the ones intended get deleted, etc.

Your mission is to identify the underlying cause of the problem and propose a fix. Think about how you can convince technical and non-technical stakeholders that your fix works before going live.

In your coded solution, focus on the functional aspects and the core problem. If you do notice other issues (visual or code styling, performance, etc.) do write them down and mention them in the interview, a two-line summary is enough -- one line for the problem description, one line for the approach for addressing it. This is a nice-to-have, not a hard requirement.
