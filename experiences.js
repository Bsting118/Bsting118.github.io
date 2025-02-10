/*================================================================================================
    JS Program for generating portfolio experience cards - Brendan Sting's bee portfolio website
    File: experiences.js
    Made by: Brendan Sting
    JavaScript map() code provided by: Kunaal from Modern Web
    Last revision date: 1-2-2024
==================================================================================================*/

// Experiences object declaration
class JobExperience
{
    constructor(icon, time, title, company, summary)
    {
        this.icon = icon; // Open or closed folder
        this.time = time; // Timeframe of Job
        this.title = title; // Job Title
        this.company = company; // Company
        this.summary = summary; // Job Description
    }

    // Class accessors:
    getIcon()
    {
        return this.icon;
    }

    getTime()
    {
        return this.time;
    }

    getJobTitle()
    {
        return this.title;
    }

    getEmployer()
    {
        return this.company;
    }

    getJobSummary()
    {
        return this.summary;
    }
}

// List of experience objects, defined with experience attributes/properties:
let experiences = [];

function addNewJobExperience(iconString, timeframeString, jobTitleString, companyString, summaryString, experienceArray)
{
    if (Array.isArray(experienceArray) != true)
    {
        return;
    }
    else
    {
        var jobItem = new JobExperience(iconString, timeframeString, jobTitleString, companyString, summaryString);
        experienceArray.push(jobItem); // Append to the end of the list of experiences
    }

}

function addListOfClassesFromArray(toElement, fromThisArray)
{
    const arrayLength = fromThisArray.length;
    let classIndex = 0;

    while (classIndex < arrayLength)
    {
        toElement.classList.add(fromThisArray[classIndex]);
        classIndex++;
    }
}

/*---LIST AND ADD JOB EXPERIENCES HERE TO CREATE MORE CARDS---*/

// Card 6.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Dec 2024 - Current",
"Junior Game Engineer | ", "Azure Ravens Entertainment LLC", "While under the engineering team at Azure Ravens, \
I studied the event architecture of Unreal Engine to convert various Unreal Blueprint event graphs into C++ parent script components. \
Along the way, I documented a style guide of best practices when converting Azure Ravens\' Blueprints to C++ so that the end-product scripts \
would have a more consistent functionality and layout to them. Further, I was also able to help debug existing systems through the \
C++ conversion process by being able to spot holes in certain areas of logic to which I could offer up more programmatic solutions to them. \
Currently working with the team at Azure Ravens to-date has been a blast, as the studio in Ypsilanti, MI, is a whimiscal yet cozy work environment!", experiences);

// Card 5.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Jan 2024 - Nov 2024",
"Junior Game Programmer | ", "Miraculum Games", "Contributed to Miraculum's development team with FMOD game audio scripts, \
state-based C# systems like Dash and ladder-climbing abilities, and custom UI loops, all within the Unity Game Engine. \
These contributions were made all for Miraculum's newest 2D platformer title, \"Fiadh\", which is still undergoing development. \
The development of \"Fiadh\" is currently on hold until more investor funding can come in for the game, which is why my time there got cut short. \
Nonetheless, I still acquired various soft skills with development, such as coordinated merging and code reviews in Unity DevOps Version Control, \
as well as various mathematical skills such as working with Bezier curves + splines in game development. \
The designers at Miraculum will also vouch that I was well-known for making LOTS of development documentation in Notion; \
what can I say, I just like to write down workflows so it\'s easier on the next person that crosses that bridge.  \
The best part by far was just being able to work in a real game production environment, as it was a dream come true! ", experiences);

// Card 4.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Apr 2021 - Dec 2023",
"Production - Rotational CS Co-op | ", "Nexteer Automotive", "Programmed and developed enterprise software for EPS CAE \
Core Mechanical team using Python 3 and Excel VBA. Python was used to implement the Defeature Model application to save \
hours of manually editing MBD models' parameters. Meanwhile, VBA was used to implement a full Excel macro script that \
would create several scorecard sheets which contained a summary of correlated data to the customer's specifications, \
pulling from tens of thousands data cells that correlated against various sine and hysteresis curves. It took me three \
months for part one and the initial macro design, and another three months to work on part two and final test coverage! \
But let me tell you: visualizing my algorithms and their efficiency all in real-time inside Excel was just purely \
mesmerizing.", experiences);

// Card 3.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Apr 2021 - Rotated",
"Manufacturing IT - Rotational CS Co-op | ", "Nexteer Automotive", "Gained experience with SQL, PowerAutomate, \
and SharePoint lists for back-end storage which was utilized in several manufacturing apps. Some of the manufacturing \
apps I developed were a confined space PowerApp and an hourly overtime form linked to a PowerBI analytics lookup. \
Before manufacturing IT, I never knew about the Microsoft PowerApps, PowerAutomate, and relational DB IT tech stack; \
its ease of use was just so smooth that I just had to use it for my cloud computing project in my CS351 class at Kettering \
University!", experiences);

// Card 2.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Apr 2021 - Rotated",
"Controls Engineering - Rotational CS Co-op | ", "Nexteer Automotive", "Worked with Nexteer's machine DWG drawing files to \
design, print, and deliver electrical machine schematics to the corresponding machine's electrical panel. Additionally, \
I also later developed PLC ladder-logic programs and HMI screen-UI's, using Rockwell's Studio 5000 software, \
after I had enough controls and electrical engineering experience under my belt. One of my most memorable projects \
in production was an HMI-controlled badge scanner with MFA at Plant 3!", experiences);

// Card 1.
addNewJobExperience("fa-solid fa-folder fa-lg card-icon exp", "Oct 2020 - Dec 2020",
"LiDAR-Camera Calibration Programmer | ", "Kettering University", "Worked and researched under Dr. Zadeh to \
develop and calibrate an advanced vision system with cameras and LiDAR for Navistar. The system was driven by a \
powerful Nvidia Drive AGX GPU (formerly a Drive PX2 GPU) that had ports for both camera and LiDAR devices as well \
as its own Ubuntu OS. Along the way, I also had the opportunity to research more about Python and its neural network \
capabilities which were used in conjunction with the cameras for specific object detection and classification. \
Furthermore, I also worked with ROS in order to manage and execute the point-cloud based calibration, using ROS nodes and \
rosrun commands from the Nvidia Drive's Ubuntu terminal.", experiences);

/*---END OF JOB EXPERIENCE CARDS FOR PORTFOLIO---*/

// Get the experience and education container HTML element from the DOM document:
let experienceGallery = document.querySelector('.education-experience-container');

/*----------------------------------- SAMPLE OF WHAT SHOULD BE ADDED -----------------------------------
<div class="education-experience-container">

        <div class="experience-card">
          <i class="fa-solid fa-folder fa-lg card-icon exp"></i>
          <!--<i class="fa-solid fa-folder-open"></i>-->
          <span class="time">Apr 2021 - Current</span>
          <h3 class="card-title">Production - Rotational CS Co-op | <span>Nexteer Automotive</span></h3>
          <p class="card-info">[I DID XYZ AT THIS PLACE, ABC WAS MY ROLE.]</p>
        </div>

        ...
*/

// Setup the element tree (fill in text values in app.js):
const createExperiences  = (data) => {
    const experienceCard = document.createElement("div");
    experienceCard.classList.add("experience-card");
    experienceCard.classList.add("closed");
    experienceCard.setAttribute("data-info", JSON.stringify(data));

    const icon = document.createElement("i");
    let cleanedIconString = data.getIcon().split(' ');
    addListOfClassesFromArray(icon, cleanedIconString);

    const spanTime = document.createElement("span");
    spanTime.classList.add("time");
    spanTime.textContent = data.getTime();

    const headerTitle = document.createElement("h3");
    headerTitle.classList.add("card-title");
    headerTitle.textContent = data.getJobTitle();
    const spanCompany =  document.createElement("span");
    spanCompany.textContent = data.getEmployer();
    headerTitle.appendChild(spanCompany);

    const jobInfo = document.createElement("p");
    jobInfo.classList.add("card-info");
    jobInfo.textContent = data.getJobSummary();

    experienceCard.appendChild(icon);
    experienceCard.appendChild(spanTime);
    experienceCard.appendChild(headerTitle);
    experienceCard.appendChild(jobInfo);

    // Make sure to insert at the top (preferred above education segment)
    experienceGallery.insertBefore(experienceCard, experienceGallery.firstChild);
}

// Map each item in the experiences list, alias "experience", to the callback function in createExperiences:
experiences.map((experience, i) => {
    createExperiences(experience); // Create those experience cards for each experience item!!! :D
});