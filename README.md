# Project Overview

Capstone level 2 project aims to build a 3-page application that showcases advanced web development skills, including API integration, object-oriented programming with JavaScript, and sophisticated styling using SCSS with a 7-1 architecture. The application will consume an API to display meaningful data tailored to the project's theme, ensuring relevance and coherence in its presentation.

# How sass-7-1-template is implemented

-Below is the explanation of the 7-1 folder structure.
Files can be renamed, added or removed as per project requirments.
Shown structure is for demostration purposes.

## Setting up the Folder Structure for the 7-1 Pattern
// base/, components/, layout/, pages/, themes/, abstracts/, vendors/

### Base Folder
//_base.scss: // Basic setup, like box-sizing, font-sizes, etc.
//_typography.scss: // Typography rules such as font-family, font-size, line-height.

### Components Folder
//_buttons.scss: // Styles for various buttons.
//_cards.scss: // Basic card component styles.

### Layout Folder
// _header.scss: // Styles for the header section.
// _footer.scss: // Styles for the footer.

### Pages Folder
// _home.scss: // Specific styles for the home page.
// _about.scss: // Specific styles for the about page.

### Themes Folder
// _fall-season.scss: // Define different themes, like dark mode or alternate color schemes.

### Abstracts Folder
// _variables.scss: // Define your color palette, font stacks, etc.
// _mixins.scss: // Commonly used mixins.

### Vendors Folder
// _bootstrap.scss: // If using Bootstrap or any other third-party CSS frameworks.
// _tailwind.scss: // If using tailwind or any other third-party CSS frameworks.

### Main SCSS File
// main.scss: // Import all above files using @import statements.

# Project Setup details
### Create/Define Repository Name
Repository name: Capstone-Level2
### File Structure
index.html

dashboard.html

about.html

main.scss (with 7-1 structure folders)

home.js

dashboard.js

about.js

README.md

### Development Log
Day 1: Project Initialization and API Selection

Created the project repository and initialized with base files.

Researched and selected an appropriate API for the project.

Checked retreived API data with Postman, and selected key value pairs to show desired data on the page.

Outlined the application's 3-page structure.

### Day 2: API Integration and Class Implementation

Developed functions for fetching data from the API.

Started integrating API data into the frontend.

checking of retrieved data for proper integration and frontend display.

Defined desired color scheme for pages and tweaked for better visibility and contrast.

### Day 3: Frontend Development and SCSS Styling
Designed the UI for all three pages.

Applied SCSS styling using the 7-1 pattern.

Published page on Netlify, implemented form data submission functionality on the page.

Tested responsive design across different screen sizes with the help of Dev Tools.

Outlined and fixed bugs in the code for page's responseive design.

### Day 4: Finalizing Features and Testing
Completed all application features.

Conducted thorough testing for bugs and usability issues.

Prepared for deployment.

## Project Deployed
GitHub Repository and Live page links povided with assignment submission

# Reflection

This capstone project proved to be a great oppertunity to showcase my skills to develop API integrated page, populating real time data from source API and presenting endusers with the desired information.

With the help of SaSS, it was easy to manage files and folders across the project keeping the project neat and tidy.

## Challenges:

### Integrating data from two APIs
Wanted to bring in data from two diffenet API's to show on the page with the help of one Zip code provided by the user.

It needed some research and understanding, so initially I tested javascript code to display each API data seperately and then integerted it to keep the code DRY.  Integrated and optamized code with the help for AI.

### Responsive design

Bringing live data form APIs can be challenging to maintain page's overall look across different screen sizes.

To overcome this challenge I had to fix image sizes coming from different news articles and apply certain height and width to containers to avoid data spill out. Media queries were used to display elements properly on different screens.

### Possible Future Improvements

This project can be enhanced in future by providing advanced weather and news search options if required by endusers.

Even more APIs can be integrated, such as a BMI calculator along with calories calculator for a highly personalized user experience.