## KLIQ test

### Setup

The Nest.js serve will need to be ran to enable the 'dynamic' data. cd into the api folder then run *nest start --watch*.

to Run the SPA, cd into 'add' while inside the root 'kliq' directory then run *npm run start* to serve the frontend.

### Improvements / considerations

- A more comprehensive styles folder with typography and global stylesheets. Common styles etc.
- An SVG component which uses <use xlink> syntax to serve up predefined svgs instead of the mess i made within the sidebar content.
- No mobile design given, but a focus on mobile first development
- In its current configuration, the sidebar will always be present, regardless of new routes, due to the structure and projection within the app.component.html. 

### Notes

- The main content background can be changed within the routing file directly without the need for css. I understand not every page could be grey. See page-wrapper component.
- The Nest.js app was purely to serve simple data, there was no real conventions followed other than a boilerplate controller.

