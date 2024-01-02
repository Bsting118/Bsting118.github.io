/*==============================================================================================
    JS Program for generating portfolio project cards - Brendan Sting's bee portfolio website
    File: projects.js
    Made by: Brendan Sting
    JavaScript map() code provided by: Kunaal from Modern Web
    Last revision date: 1-2-2024
================================================================================================*/

// Portfolio Project object declaration
class PortfolioProject
{
    constructor(name, about, tags, liveAt, github, image, languages)
    {
        this.name = name;
        this.about = about;
        this.tags = tags;
        this.liveAt = liveAt;
        this.github = github;
        this.image = image;
        this.languages = languages;
    }

    // Class accessors:
    getName()
    {
        return this.name;
    }

    getAbout()
    {
        return this.about;
    }

    getTags()
    {
        return this.tags;
    }

    getProjectImage()
    {
        return this.image;
    }

    getProgrammingLangs()
    {
        return this.languages;
    }
}

// Programming Languages Percent Utilization object declaration
class ProgrammingLangsPercents
{
    constructor(pctHTML, pctCSS, pctJS, pctNodejs, pctCSharp, pctCPlusPlus, pctC, pctJava, 
                pctPython, pctOther)
    {
        // Consider changing to a list later on like so: this.langs = [pctHTML, pctCSS, ...];
        this.html = pctHTML;
        this.css = pctCSS;
        this.javascript = pctJS;
        this.nodejs = pctNodejs;
        this.csharp = pctCSharp;
        this.cplusplus = pctCPlusPlus;
        this.c = pctC;
        this.java = pctJava;
        this.python = pctPython;
        this.other = pctOther;
    }
}

// List of project objects, defined with project attributes/properties:
let projects = [];

function addNewProject(nameString, aboutString, tagsString, liveLinkString, githubLinkString, imageString, programmingLangsObj, projectArray)
{
    if (Array.isArray(projectArray) != true)
    {
        console.log("WARN: Could not add project as the destination container is not of type array. Aborting...");
        return;
    }
    else
    {
        var showcaseItem = new PortfolioProject(nameString, aboutString, tagsString, liveLinkString, githubLinkString, imageString, programmingLangsObj);
        projectArray.push(showcaseItem); // Append to the end of the list of experiences
    }

}

/*---LIST AND ADD PORTFOLIO PROJECTS HERE TO CREATE MORE CARDS---*/

// Card 1.
addNewProject('AI-Powered Portfolio Website', 'As advised by my adjunct game development professor, Corbin Reeves \
(who you can go connect with on my LinkedIn profile), I implemented my own portfolio website \
to showcase myself, my skills, and most importantly my projects! Furthermore, I really \
wanted to spice things up so I used Chat-GPT to guide my Three.js designs. On top of that, \
my interest in graphics programming motivated me to incorporate a hologram shader in GLSL as a clone \
of my HLSL holo-shader I made in Unity\'s Shader Graph. My final hologram GLSL shader I use on this website \
is an edited derivative of Anderson Mancini\'s \"Holographic Material\" shader. Also, special thanks to both \
Modern Web and Zetafonts for providing the initial website design and Eastman font family, respectively. \
\n\nTIP: you can preview this shader by clicking on my branded \"Bee-Sting Icon\" at the top!',
'Front-end/UI', '#frontPage-render', '[GitHub Project link here!]', 
'Images/website_projectcard_image.png', new ProgrammingLangsPercents('40%', '60%', '65%', '10%', '0%',
'0%', '0%', '0%', '0%', '0%'), projects);

// Card 2.
addNewProject('My Neon Pyramids', 'After taking a Vanilla JavaScript course on LinkedIn Learning, \
I started looking into some advanced CSS techniques to complement my new front-end JS skills. Long story short, I got \
a YouTube video recommendation of neon cubes being implemented using almost pure CSS; the thumbnail made my jaw drop \
and thus I wanted to implement my own version of the design. Instead of simple cubes, I challenged myself to render \
pyramids instead, still having that glowing neon-like underlighting. After some div tweaks, I got the effect I wanted \
and could style my pyramids in any neon color I desired (it ended up as green because I just love Razer\'s theme).', 
'Front-end/UI', 'https://youtu.be/q40X4lD-cg8', 'https://github.com/Bsting118/NeonPyramids',
'Images/neon_pyramid_image.png', new ProgrammingLangsPercents('10%', '90%', '0%', '0%',
'0%', '0%', '0%', '0%', '0%', '0%'), projects);

// Card 3.
addNewProject('Pirate XR', 'One of my classes I took in my Senior I term at Kettering University \
was \'Introduction to Virtual Reality\'. The only graded item in this class was your VR prototype app; \
no tests, no quizzes, not even a homework assignment. Hence, it was really vital to do well on the project to pass this \
class. However, I didn\'t want to just pass this class; I wanted to ace it. In turn, I formed a group of \
of three classmates for a dev team: myself, Zach Freytag, and Matthew Herber. Together, we would tackle implementing \
a rigorous VR app design concept: a full-fledged first-person Pirate VR game. The plan was that Zach would handle \
implementing the steering and skybox, Matt would then take on cannon mechanics and target spawning, and I would \
take care of the game\'s design, VR-UI, shaders, and misc. game assets. There were some tough times where \
some of us got hung up in workload for other classes, but I ultimately stepped up like a project manager and \
directed how to pivot around our reduced time and availability to still get the game\'s prototype done on time. \
In the end, we had our Pirate VR game prototype fully working and received an A on the project and flying colors \
from our professor, Dr. Giuseppe Turini. \n\nDespite my pride with this project, I still believe there is worthwhile \
room for improvement and upgrades to the game\'s implementation, as user feedback has shown great desire for the \
game\'s finalized release. For this reason, I am still continuing development on our Pirate VR game, Pirate XR!', 
'Game Development, Game Design', 'https://youtu.be/LvgLIFf_6oE?si=y1Ho9bS_E7-A6tfB', 'https://github.com/Bsting118/PirateXR',
'Images/pirate_xr_image.png', new ProgrammingLangsPercents('0%', '0%', '0%', '0%',
'90%', '0%', '0%', '0%', '0%', '10%'), projects);

// Card 4.
addNewProject('Defeature Model Thesis', 'At the start of my Sophomore II Fall co-op term at Nexteer \
Automotive, I was introduced to production supervisor Brett Close and his EPS Core Mechanical CAE group. After \
exchanging greetings, Brett made it clear he needed a computer science programmer to provide expertise and development \
on a script to automate the process of deparameterizing their MBD models of steering systems that they build in MSC Adams \
software, so that they are able to be safely shared with the customer. \n\nUpon further investigation with Brett, it was \
realized that the MBD models can be simply handled as a text file, derived from their .cmd format, and then converted back later. \
Knowing this, I proposed that a Python program would be optimal for simple text file manipulation, and Brett agreed to pioneer this route. \
After several months of development, the Python program ended up turning into a full-scale application from taking extra time to develop a \
tkinter GUI and compiling process with PyInstaller. Everything was documented and tested on CAE team members\' work computers w/o Python \
installed, thanks to PyInstaller bundling, which ended up impressing Brett so much that he bestowed me with a \
\'Nexteer Gold High-Five\' award. Later on, I returned to the group to discuss writing it up as my BSCS thesis, which fast-forward to \
present day is now approved and published with Kettering University, open-source. You can find my thesis at it\'s public GitHub on my profile!', 
'Customized/Enterprise Software Development', 'https://youtu.be/GFuhflRwYtc', 'https://github.com/Bsting118/DefeatureModel',
'Images/defeature_model_image.png', new ProgrammingLangsPercents('0%', '0%', '0%', '0%',
'0%', '0%', '0%', '0%', '90%', '10%'), projects);

// Card 5.
addNewProject('Sting\'s Unity-URP-Shader Compilation', 'Throughout my CS320 Graphics Programming course at Kettering University, we studied and developed a \
variety of HLSL shaders using Unity\'s Shader Graph tool. Our final project was to be a compilation of our learning with material shaders, which ended up being \
my \"Scorebubble\" shader that\'s inspired by the game series, \'Little Big Planet\'. The Graphics Programming class itself sparked such a newfound love for shaders \
that I even went ahead and made an additional shader on my own time: a dynamic potion shader that had not only liquid physics, but responsive VFX bubbles as well! \
All in all, this Unity project, called \"Sting\'s Unity-URP-Shader Compilation\", was assembled and committed by me to showcase all my shaders I programmed whilst at Kettering University, \
both inside and outside my Graphics Programming class. If you are able to, go check out it\'s GitHub and run them for yourself on Unity\'s Universal Render Pipeline! \
\n\nNote that since both the \"Scorebubble\" and dynamic potion shader were such large projects, they have individual project cards of their own. However, \
you can still find both of their HLSL source code inside this shader compilation\'s Unity project folders. ', 
'Graphics Programming', 'https://youtu.be/Nqz7Fd6_VZA?si=ENoV7N_ptkDbEDhs', 'https://github.com/Bsting118/Unity-URP-Shaders',
'Images/Shader_Compilation_image.png', new ProgrammingLangsPercents('0%', '0%', '0%', '0%', '20%', '0%', '0%', '0%', '0%', '80%'), projects);

// Card 6. 
addNewProject('Scorebubble HLSL Shader', 'Near the end of my Graphics Programming course at Kettering, I was tasked with the final project of making my own shader in Unity. \
This shader could be anything I wanted it to be, so I thought long and hard about some of the wicked cool stuff I\'ve seen done in previous games that I have played. \
Then, I remembered one of my favorite childhood games called \'Little Big Planet\' and its memorable score bubbles. I just had to re-create it. The first steps to making \
this whimsical shader involved getting the inner-glow to render without any additional objects or materials; just using the one base material\'s sphere. This required \
an emissive saturation of its center core or geometry, which ended up being powered by a centered sphere mask formula. Afterwards, the only other main step was to \
add a sinusoidal time function to the shader to make the emissive core grow and shrink constantly, to give a \"pulsating\" effect. Lastly, I polished up the final shader \
with a reflection probe on its outer sphere mask to give a glass-like globe appearance to really sell its \"bubble\" look. \
\n\nIn the end, I must admit, my \"Scorebubble\" shader in Unity looked REALLY close to the real thing in \'Little Big Planet\'. Who knows, maybe I\'ll use it in a game sometime!', 
'Graphics Programming','https://youtu.be/rfpKYbpU6Ts?si=GPtNl10b6BoU9GR2', 'https://github.com/Bsting118/Unity-URP-Shaders',
'Images/Scorebubble_shader_image.png', new ProgrammingLangsPercents('0%', '0%', '0%', '0%', '10%', '0%', '0%', '0%', '0%', '90%'), projects);

// Card 7.
addNewProject('Dynamic Potion HLSL Shader', 'After my Graphics Programming class at Kettering ended, I felt the need to explore the world of shaders a bit more \
with incorporating VFX this time around. So, during my free-time, I whipped up a potion shader design that I wanted to create where the shader\'s level of \"liquid\" \
would affect how many VFX bubble particles were emitted by the shader. Additionally, I also wanted the potion shader to have mock-bubbles rising up in its \"liquid\" \
as well. Making the mock-bubbles rise in the shader\'s liquid material was easy, it only required a bubble texture be mapped to a blend function and updated by Unity\'s \
time module, with being directed by the vector direction of \"UP\" or +Y. The hard part was getting the bubble VFX particles to talk with the potion shader\'s liquid level. \
Nonetheless, the hard problem of linking the two together was solved through a \'BoundBubbles.cs\' C# script attached to the VFX PotionBubbles object which would \
fetch a reference to the potion liquid\'s shader via accessing the liquid object\'s rendered material property and its corresponding \"_Fill\" variable value.  \
\n\nOverall, it was a challenging personal shader project that expanded upon my \"Intro to Graphics Programming\" course at Kettering and yielded a very pleasing result. \
Also, changing the fill level of the potion liquid shader and seeing the VFX bubbles react to it in play-mode was really addicting to mess with during my testing!', 
'Graphics Programming', 'https://youtu.be/UbyRDRH9FnI?si=i6ZkkVEMRbmdiz-F', 'https://github.com/Bsting118/Unity-URP-Shaders',
'Images/Dynamic_potion_shader_image.png', new ProgrammingLangsPercents('0%', '0%', '0%', '0%', '30%', '0%', '0%', '0%', '0%', '70%'), projects);

/*---END OF PROJECT CARDS FOR PORTFOLIO---*/

/* ---Let's make a more code-efficient way of assembling those project cards--- */ 

// Get the project-gallery HTML element from the DOM document:
let projectGallery = document.querySelector('.project-gallery');

// Callback function to create a new project in the DOM by adding HTML comps. with JavaScript object data:
// *** Chat-GPT AI helped develop this code to be safer than the innerHTML way! ***
const createProjects = (data) => {
    const hexBox = document.createElement("div");
    hexBox.classList.add("hex-box");
  
    const span = document.createElement("span");
    hexBox.appendChild(span);
  
    const projectCard = document.createElement("a");
    projectCard.href = "#project-info";
    projectCard.classList.add("project-card");
    projectCard.setAttribute("data-tags", data.getTags());
    projectCard.setAttribute("data-info", JSON.stringify(data));
  
    const image = document.createElement("img");
    image.src = data.getProjectImage();
    image.classList.add("project-image");
    image.alt = "";
  
    const tags = document.createElement("span");
    tags.classList.add("tags");
    tags.textContent = data.getName();
  
    projectCard.appendChild(image);
    projectCard.appendChild(tags);
  
    hexBox.appendChild(projectCard);
  
    projectGallery.appendChild(hexBox);
}
  

/*
(DOM Console Testing)

JSON.stringify(projOne):
========================
'{"name":"AI-Powered Portfolio Website","about":"[Insert stuff about your project here!]","tags":"Front-end/UI",
"liveAt":"[Public link to your project here!]","github":"[GitHub Project link here!]",
"image":"/website_projectcard_image.png","languages":{"html":"40%","css":"70%","javascript":"55%",
"nodejs":"10%","csharp":"0%","cplusplus":"0%","c":"0%","java":"0%","python":"0%","other":"0%"}}' 

*/

// Map each item in the projects list, alias "project", to the callback function in createProjects:
projects.map((project, i) => {
    createProjects(project); // Create those projects cards for each project item!!! :D
});
