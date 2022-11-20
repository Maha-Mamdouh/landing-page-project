# Landing Page Project

## An introduction to the project

Manipulating **HTML** content and **CSS** Style by **JavaScript** (JS) is the main idea of the landing-page project. In this project, I built an interactive navigation bar based on the available sections. The style of this bar and the Sections are changed according to the viewport. Also, I added a scroll-up button and only showed the first paragraph in each section with the option to see more / see less.

## Table of contents

- [Landing Page Project](#Landing-Page-Project)
    - [An introduction to the project](#An-introduction-to-the-project)
    - [Table of contents](#table-of-contents)
    - [Prject Files and Folder](#Prject-Files-and-Folder)
    - [Project Essential Elements](#Project-Essential-Elements)
        - [Navigation bar](#Navigation-bar)
        - [Active Sections](#Active-Sections)
        - [Scroll Button](#Scroll-Button)
        - [Back to Navigation Bar](#Back-to-Navigation-Bar)
        - [show/hide header](#show/hide-header)
        - [show/hide paragraphs](#show/hide-paragraphs)
        - [Extra style](#Extra-style)


## Prject Files and Folder

[(Back to top)](#table-of-contents)

This project conatains:
- Index.html file.
- css Folder:
    - styles.css file: CSS Source File.
- JS folder:
    - app.js: JavaScript Source File. 

## Project Essential Elements

### Navigation bar

[(Back to top)](#table-of-contents)

While building Navbar, I used *.querySelectorAll()* method to select all section in HTML file, created and styled the corresponding li elements.

*for more details please read: app.js (Lines 25, 65-75).*

### Active Sections

[(Back to top)](#table-of-contents)

To change the style of the current section in the viewport, *.addEventListener()* method is used with scroll event. Then, I created a main function called *activeSec()* to to determine this section and a helper function *secToActive()* to toggle the class "your-active-class".

*for more details please read: app.js (Lines 91,26-63).*

### Scroll Button

[(Back to top)](#table-of-contents)

In this part, adding a smooth scroll behavior to our document was the first step. The next step was the creation of an \<i> element as a scroll button. For styling this button, I added a *Font Awesome Kit* in the **index.html** file and used *.style.cssText* property and appended it to \<body> element. 
Secondly, I used *.addEventListener()* with scroll event again to show/hide the icon according to the windows-width and element-size.

*for more details please read*: 
* index.html (line: 12).
* app.js (Lines: 95-132).

### Back to Navigation Bar

[(Back to top)](#table-of-contents)

Changing the background of an element of the navbar while viewing a specific section was not the right choice, Because it interferes with the function of the hover selector. To solve this problem, I changed the .borderTop and .borderBottom properties instead (The idea was inspired by browsing Facebook). This selector  is also not working on mobile devices so i googled the problem and found a solution in the following  
https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/
which leaded to change a litte in css code.

*for more details please read*: 
* styles.css (line: 85-91).
* app.js (Lines: 62, 134-150).


### show/hide header

[(Back to top)](#table-of-contents)

For idle time, i used *setTimeout()* and *clearTimeout()* methods to set the idle time after passing 5 seconds. This gives the possibility of showing and hiding the header. 

*for more details please read: app.js (Lines: 153-166)*.


### show/hide paragraphs 

[(Back to top)](#table-of-contents)

Every section has at least one paragraph. I tried here to create a button to show and hide other paragraphs in all sections, this made the page more smaller and simpler. \<span> and \<button> elements with *.innerHTML* property and addEventListener method are used for this purpose. 

*for more details please read: app.js (Lines: 169-199)*.

### Extra style

[(Back to top)](#table-of-contents)

I love to justify the text-Align for any paragraphs :) 

*for more details please read: app.js (Lines: 202-206)*.