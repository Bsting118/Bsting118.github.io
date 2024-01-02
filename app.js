/*================================================================================================
    JS Program for bundling event listener functionalities - Brendan Sting's bee portfolio website
    (e.g., filter buttons, project card display, experience cards and their folder buttons, etc.)
    File: app.js
    Made by: Brendan Sting
    JavaScript skeleton & sample callback code provided by: Kunaal from Modern Web
    Last revision date: 1-2-2024
==================================================================================================*/

// Projects:
let projectCards = [...document.querySelectorAll('.project-card')];
let projectCardBorders = [...document.querySelectorAll('.hex-box')]; // Added

// Project details container:
let projectName = document.querySelector('.project-details .name');
let projectImage = document.querySelector('.project-details .image');
let projectDetail = document.querySelector('.project-details .details');

// Experience cards:
let expCards = [...document.querySelectorAll('.experience-card')];


// Buttons:
let liveButton = document.querySelector('#live-button');
let gitHubButton = document.querySelector('#github-button');
let expButtons = [...document.querySelectorAll('.card-icon.exp')];

// Downloaders (check support!):
let allDownloaders = [...document.querySelectorAll('a[download]')];

// Progress bars: 
let progressTrack = [...document.querySelectorAll('.progress-track')];

// Project card selection:
projectCards.map((project, i) => {
    project.addEventListener('click', () => {

        projectCards.map(card => card.classList.remove('active'));
        projectCardBorders.map(card => card.classList.remove('active'));

        project.classList.add('active');
        project.parentElement.classList.add('active');

        let data = JSON.parse(project.getAttribute('data-info')); 
        console.log(data);

        setUpProjectInfo(data);
    })
})

const setUpProjectInfo = (data) => {
    projectImage.src = data.image;
    projectName.innerText = data.name;
    projectDetail.innerText = data.about;
    liveButton.href = data.liveAt;
    gitHubButton.href = data.github;

    progressTrack.map((item) => {
        let progress = item.querySelector('.progress');

        progress.style.width = data.languages[item.getAttribute('data-name')];
    })
}

// Filters:

// Using Spread Syntax ([...]) to create a shallow copy of entire filter buttons in DOM into array:
const filters = [...document.querySelectorAll('.filter-button')];

filters.map((button, i) => {
    // For each button in the DOM, as capture in the filters list, attach an event listener:
    button.addEventListener('click', () => {
        // The event listener does the following when an OnClick() event happens:
        filters.map(item => item.classList.remove('selected')); // Every filter item is wiped of active status

        // This button, that is clicked, shall receive active-selected status now:
        button.classList.add('selected');

        // The tag containing a string of related programming languages to a project:
        let tag = button.getAttribute('filter-value');

        // Add the functionality to filter button selection where depending on button, certain cards are displayed:
        projectCards.map(project => {
            // If tag on the selected filter button is for 'All' projects, then:
            if(tag == 'All')
            {
                // YOLO, display each and every one (an override, essentially):
                project.style.display = null;
                project.parentElement.style.display = null;

            }
            // Else if a project card does NOT have the tag assigned to the filter button, then:
            else if(!project.getAttribute('data-tags').includes(tag))
            {
                project.style.display = 'none'; // Set the <div> element to not be displayed
                project.parentElement.style.display = 'none';
            }
            // Else, the project does have the tag, then:
            else
            {
                project.style.display = null; // Display it specifically
                project.parentElement.style.display = null;
            }
        })
    })
})

// Experience card selection:

const expCharLimit = 40;
const hintActionPhrase = "\n\n(Click on the folder button to see more!)";

expButtons.map((workButton, i) => {
    workButton.addEventListener('click', () => {
      // ...
      // When clicked, the website should:
      //  1. Change the file icon to open 
      //  2. List more details of the job or work
      //  3. Mark it as opened
      //  4. If clicked again and it was marked open then mark it closed
      //  5. When closed, the icon should be the default closed file icon and text should be shortened
      // ...
      let expParent = workButton.parentElement;
      let details = expParent.querySelector(".card-info");
      let data = JSON.parse(expParent.getAttribute('data-info')); 
      let fullDetails = data.summary;

      // Get the state before and check whether it was open or closed:
      if (expParent.classList.contains("open"))
      {
        // Update the state:
        expParent.classList.remove("open");
        expParent.classList.add("closed");

        // If you end up changing over to a different icon supplier or have made your own icon classes, change this:
        workButton.classList.remove("fa-solid", "fa-folder-open", "fa-lg");
        workButton.classList.add("fa-solid", "fa-folder", "fa-lg");

        // Cut-off the text past X amount of characters with "...": 
        details.innerText = cutoffText(undefined, expCharLimit, details) + hintActionPhrase;
      }
      else if (expParent.classList.contains("closed"))
      {
        // Update the state:
        expParent.classList.remove("closed");
        expParent.classList.add("open");

        // If you end up changing over to a different icon supplier or have made your own icon classes, change this:
        workButton.classList.remove("fa-solid", "fa-folder", "fa-lg");
        workButton.classList.add("fa-solid", "fa-folder-open", "fa-lg");

        // Reveal the full detailed data about the experience:
        details.innerText = fullDetails;
      }
      else
      {
        expParent.classList.add("closed");
        console.log("WARN: Work experiences were not correctly initialized. Added default closed tag; please re-click.");
      }
    })
})

  // ...
  // When called, this should:
  //  1. Make the folder icon default to closed
  //  2. Make the experience details default to being cut
  // ...
  expCards.map((card, i ) => {
    let initDetails = card.querySelector(".card-info");
    initDetails.innerText = cutoffText(undefined, expCharLimit, initDetails) + hintActionPhrase;
  })

// JS default active project card (the 1st is set as the one to preview on load):
projectCards[0].classList.add('active');
projectCards[0].parentElement.classList.add('active');
setUpProjectInfo(projects[0]);

// Navigation Bar:

const navbar = document.querySelector('nav');

// Move the navbar down, using a background fade-in technique, after scrolling down past a threshold:
window.addEventListener('scroll', () => {

    if (scrollY > 195)
    {
        navbar.classList.add('bg');
    }
    else
    {
        navbar.classList.remove('bg');
    }
})

// Check that Downloaders are supported in the browser that my portfolio is on:
let aTagTest = document.createElement("a");
var downloadAttrIsSupported = ("download" in aTagTest);
aTagTest.remove();
allDownloaders.forEach(function(element) 
{
    if (downloadAttrIsSupported == false)
    {
        element.removeAttribute("download");
    }
    else
    {
        console.log("MSG: Downloaders are supported! Yay!");
    }
});


/*------------ Self-made Script Snippet to limit chars per line in a paragraph tag ------------*/

/*=======================*/
/*Made by: Brendan Sting */
/*=======================*/

/* --- Limit text inside a <p> tag with vanilla JavaScript; version 8 --- */

/* === LATEST WORKING VERSION === */

// Tries to find the last available blank space to resort to:
function findLastBlankSpaceStartingFrom(inString, startIndex)
{
  for (let loopIndex = startIndex; loopIndex > -1; loopIndex--)
  {
    if (inString[loopIndex] == " ")
    {
      return loopIndex;
    }
  }
  
  return -1; // Darn, we couldn't find it; handle it
}

// Frees any chars that have been disconnected from the current substring line by past newline characters (also from <br> tags)
function freeUpAnyNewlineSeparatedCharSpace(inString, upUntilThisPoint, startingFromHere) //upUntilThisPoint = startAt index, startingFromHere = lastCharIndex
{
  var extraAvailableChars = 0;
  let startCountingSwitchEnabled = false;

  if (startingFromHere > upUntilThisPoint)
  {
    for (let loopIndex = startingFromHere; loopIndex >= upUntilThisPoint; loopIndex--)
    {
      if (inString[loopIndex] == '\n')
      {
        startCountingSwitchEnabled = true;
      }

      if (startCountingSwitchEnabled)
      {
        extraAvailableChars++;
      }
    }
  }
  else
  {
    for (let loopIndex = startingFromHere; loopIndex <= upUntilThisPoint; loopIndex++)
    {
      if (inString[loopIndex] == '\n')
      {
        startCountingSwitchEnabled = true;
      }

      if (startCountingSwitchEnabled)
      {
        extraAvailableChars++;
      }
    }
  }
  
  return extraAvailableChars;
}

function getNewEndpointBeforeLineOverflow(ofThisString, atLastCharIndex, startOfLine)
{
  var finalCharIndex = atLastCharIndex;

  // If last char index on the line is below the last char of the entire string, then:
  if (atLastCharIndex < (ofThisString.length - 1))
  {
    // If there's a non-blank, non-space character past the last char to limit to, then:
    if ((ofThisString[atLastCharIndex] != ' ') && (ofThisString[atLastCharIndex + 1] != ' '))
    {
      // Try and find a previous blank space to resort to and end on:
      var prevBlankIndex = findLastBlankSpaceStartingFrom(ofThisString, (atLastCharIndex)); 

      if ((prevBlankIndex != -1) && (prevBlankIndex >= startOfLine)) // Did we find a valid blank space within this portion of the line?
      {
        finalCharIndex = prevBlankIndex; //Index of the blank space now
      }
    }
  }
  else 
  {
    // If the initial overflow index point, the last char point, is past or at the string's final valid char index,
    // then we have no choice but to reposition it at the text's final char index:
    finalCharIndex = (ofThisString.length - 1);
  }
  
  return finalCharIndex; 
  
}


function truncateText(selector, maxLength, startAt) {
    var element = document.querySelector(selector);
    var truncated = element.innerText;
    let lastCharIndex = (startAt + maxLength) - 1;
    
    // BASE CASE:
    if (startAt >= truncated.length)
    {
      return "";
    }
    // If the currently looked at substring is longer than the limit, cut it:
    if (truncated.substring(startAt).length > maxLength) 
    {
        lastCharIndex = getNewEndpointBeforeLineOverflow(truncated, lastCharIndex, startAt);
        
        var extraLineSpace = freeUpAnyNewlineSeparatedCharSpace(truncated, startAt, lastCharIndex);
        if (extraLineSpace > 0)
        {
          lastCharIndex = lastCharIndex + extraLineSpace;
          lastCharIndex = getNewEndpointBeforeLineOverflow(truncated, lastCharIndex, startAt)
        }
        
        truncated = truncated.substring(startAt, (lastCharIndex+1)); //Stop at either maxLength or blankSpace+1
        
        // Allow the front-end programmer to input tabs or spaces at the front with &emsp; or &nbsp; (etc.), but if it's a raw space then cut it out:
        // (This conditional structure has been reduced thanks to the power of .innerText)
        if (truncated[startAt] == ' ')
        {
          truncated = truncated.trim() + '\n';
        }
        else
        {
          truncated = truncated.trimEnd() + '\n';
        }
      
    }
    
    // Else, just write it out with no newline needed:
    else
    {
      truncated = truncated.substring(startAt);
    }
    
    // Recursive return:
    return truncated + truncateText(selector, maxLength, (lastCharIndex+1) );
    
}

/*------------ END OF Self-made Script Snippet to limit chars per line------------*/

/*------------ Adapted Snippet to cutoff text with '...' past a certain length ------------*/

/*==================================================================================================*/
/*Originally Made by: Josh                                                                          */
/*Modified by: Brendan Sting                                                                        */
/*Src: https://stackoverflow.com/questions/21447269/how-to-limit-the-length-of-text-in-a-paragraph  */
/*==================================================================================================*/
function cutoffText(selector, maxLength, optionalPreselectedElement) 
{
  if (optionalPreselectedElement === undefined) 
  {
    var element = document.querySelector(selector);
    var truncated = element.innerText;

    if (truncated.length > maxLength) 
    {
      truncated = truncated.substring(0, maxLength) + '...';
    }
  }
  else
  {
    var truncated = optionalPreselectedElement.innerText;

    if (truncated.length > maxLength) 
    {
      truncated = truncated.substring(0, maxLength) + '...';
    }
  }

  return truncated;
}

/*-------- END OF Adapted Snippet to cutoff text with '...' past a certain length ---------*/

/*######################## MAIN DRIVER CODE - EDIT HERE ########################*/
let mySelector = '.about-excerpt';
let aboutParagraph = document.querySelector(mySelector);
aboutParagraph.innerText = truncateText(mySelector, 70, 0);
let mySecondSelector = '.credit';
let creditsFooter = document.querySelector(mySecondSelector);
creditsFooter.innerText = truncateText(mySecondSelector, 100, 0);
/*##############################################################################*/


/* Add the About list header once the excerpt's lines have been limited: */

// *** Chat-GPT AI helped develop this code to work more coherent with the paragraph limiting code! ***

// Create a new span element
var newSpan = document.createElement("span");
newSpan.className = "about-span";
newSpan.textContent = "About-B: ";

// Append the new span element to the paragraph
aboutParagraph.insertBefore(newSpan, aboutParagraph.firstChild);


/* Modify offset of Download button respective to the size of the About image: */

// Function to be executed upon each interval trigger (to auto-update):
function determinePosOfDownloader()
{
  // Get the downloader element itself first and foremost:
  let downloadButton = document.getElementById("resume-downloader");

  // Get heights of both download button and the About image
  var downloadButtonHeight = downloadButton.offsetHeight;
  var aboutImageHeight = document.getElementById("about-image-box").offsetHeight;

  // "If the downloader is bigger or equal to a quarter of my image's size, then:"
  if (downloadButtonHeight >= (aboutImageHeight / 4))
  {
    // Put it at the base so it doesn't cover up my awesome photo!
    downloadButton.style.transform = 'translate(-50%, 170%)';
  }
  else
  {
    // It will look like an overlaid ribbon so keep it up a bit higher!
    downloadButton.style.transform = 'translate(-50%, 50%)';
  }
}

/*######################## MAIN DRIVER CODE - EDIT HERE ########################*/
// Determine on website startup:
determinePosOfDownloader();

// Determine repeatedly each time browser window is resized: 
window.addEventListener('resize', determinePosOfDownloader);
/*##############################################################################*/

// Toggle Button displayed by Media Screen Query:
const toggleButton = document.querySelector('.toggle-button');
const linksContainer = document.querySelector('.links-container');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  linksContainer.classList.toggle('active');
});
