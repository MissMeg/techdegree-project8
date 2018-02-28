```
______          _           _     _____ 
| ___ \        (_)         | |   |  _  |
| |_/ / __ ___  _  ___  ___| |_   \ V / 
|  __/ '__/ _ \| |/ _ \/ __| __|  / _ \ 
| |  | | | (_) | |  __/ (__| |_  | |_| |
\_|  |_|  \___/| |\___|\___|\__| \_____/
              _/ |                      
             |__/                       
-----------------------------------------------------
```

## Project by: Megan Roberts
## Tech Dregree Track: Fullstack JavaScript
## Project Title: Using Gulp to Build a Front End Website
## Project Requirements:
```
    1) As a developer, I should be able to run the npm install command to install all of the dependencies for the build process.
    2) As a developer, I should be able to run the gulp scripts command at the command line to concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder.
    3) As a developer, I should be able to run the gulp styles command at the command line to compile the project’s SCSS files into CSS, then concatenate and minify into an all.min.css file that is then copied to the dist/styles folder.
    4) As a developer, when I run the gulp scripts or gulp styles commands at the command line, source maps are generated for the JavaScript and CSS files respectively.
    5) As a developer, I should be able to run the gulp images command at the command line to optimize the size of the project’s JPEG and PNG files, and then copy those optimized images to the dist/content folder.
    6) As a developer, I should be able to run the gulp clean command at the command line to delete all of the files and folders in the dist folder.
    7) As a developer, I should be able to run the gulp build command at the command line to run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.
    8) As a developer, I should be able to run the gulp command at the command line to run the build task and serve my project using a local web server.
```
## Exceeds Expectations Requirements:
```
    1) As a developer, when I run the default gulp command, it should continuously watch for changes to any .scss file in my project. 
       When there is a change to one of the .scss files, the gulp styles command is run and the files are compiled, concatenated, and minified to the dist folder. My project should then reload in the browser, displaying the changes.
```
## Project Description:
In this project you’ll be provided a website with HTML, SCSS, JPEGs, PNGs and JavaScript files. You’ll be required to set up a Gulp build process to prepare the website for deployment.

The build process must fulfill the following criteria:

Concatenate and minify the JavaScript files
Compile SCSS into CSS in a concatenated and minified file
Generate JavaScript and CSS source maps
Compress any JPEG or PNG files
All output for the build process should be in a dist folder for distribution or deployment.