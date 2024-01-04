/*==================================================================================
    ThreeJS script for 3-D JSON web models - Brendan Sting's bee portfolio website
    File: script.js
    Made by: Brendan Sting
    JavaScript scene skeleton provided by: ChatGPT 3.5
    Last revision date: 1-2-2024
====================================================================================*/

//import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';
//import * as THREE from './node_modules/three';

// Import any shaders:
//import HolographicMaterial from './HologramGLSLShader';
import HolographicMaterial from './HologramGLSLShader.js';

const redHoloMaterial = new HolographicMaterial({hologramColor: '#ed3434', depthTest: true, enableBlinking: false, side:THREE.DoubleSide});
const blueHoloMaterial = new HolographicMaterial({hologramColor: '#0394fc', depthTest: true, enableBlinking: false, side:THREE.DoubleSide});

// Import any GLSL loaders for the shaders on-hand:
//import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// For GitHub pages, use Three.js revision 127 due to import header in GLTFLoader.js file being latest relative-PATH based:
import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';

// Prep the elements to be initialized inside our function workspaces:
let scene, camera, renderer, beeObj, lampObj, redHoloLampObj, blueHoloLampObj;
let lightSwitch = document.querySelector(".logo"); // Make the light switch the "Bee-Sting" branded logo
let lightState = false;
let lastHoloState = "none";
const loader = new THREE.ObjectLoader();
const glLoader = new GLTFLoader();
const canvas = document.querySelector('canvas.WEBGL_BCKGRND');

// Sampling lights:
const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ); //a no-shadow gradient light
const ambLight = new THREE.AmbientLight( 0xf7b345, 0.3 ); // soft orange light
const directionalLight = new THREE.DirectionalLight( 0xf7b345, 0.8 ); // a directional white light, 1/2 intensity

// FPS-related variables for controlling animation progression:
const fps_limit = 120;
const frameLengthInterval_ms = 1000 / (fps_limit);
var endpointFromLastTime;
var deltaTime;

const renderedSection = document.querySelector('#frontPage-render');

function init() {
  // Set up the scene
  scene = new THREE.Scene();

  // Set up the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  // Add any lighting:
  lightSwitch.addEventListener('click', () => {
    // Update the light's state:
    if (lightState == false)
    {
      lightState = true;
      lastHoloState = "blue";
      scene.remove(blueHoloLampObj);
      scene.add(lampObj);
    }
    else 
    {
      lightState = false;
      lastHoloState = "red";
      scene.remove(lampObj);
    }
  })

  // Add responsive holograms (spawn vs. despawn):
  lightSwitch.addEventListener('mouseover', () => {
    
    if (lightState == false) 
    {
      lastHoloState = "blue";
    }
    else
    {
      lastHoloState = "red";
    }

    if (lastHoloState == "blue")
    {
      if (redHoloLampObj)
      {
        scene.remove(redHoloLampObj);
      }
      
      scene.add(blueHoloLampObj);
      scene.remove(lampObj);
    }
    else if (lastHoloState == "red")
    {
      if (blueHoloLampObj)
      {
        scene.remove(blueHoloLampObj);
      }
      
      scene.add(redHoloLampObj);
      scene.remove(lampObj);
    }
  })

  lightSwitch.addEventListener('mouseout', () => {
    if (lastHoloState == "blue")
    {
      scene.remove(blueHoloLampObj);
    }
    else if (lastHoloState == "red")
    {
      scene.remove(redHoloLampObj);
    }

    if (lightState == true)
    {
      scene.add(lampObj);
    }
  })

  // Set up the renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Allow renderer's segment to be easily referenced in the DOM:
  renderedSection.appendChild(renderer.domElement);

  // AI helping with the loader setup ;)

  // 1. Load the bee in a cube:
  loader.load(
    // resource URL
    "Models/beeInCubeFinal.json",
  
    // onLoad callback
    // Here the loaded data is assumed to be an object
    function ( obj ) {
      beeObj = obj;
      beeObj.position.set(0, -0.5, 0);
      // Make sure to auto-size bee object:
      beeObj.matrixAutoUpdate = true;
    
      // Add the loaded object to the scene
      scene.add( beeObj );
    }

  );

  // 2. Load the ceiling light:
  loader.load(
    "Models/ceilingLightHollowV4.json",

    function (obj) {
      lampObj = obj;
      lampObj.position.set(0, 2, 0);
      lampObj.scale.set(0.75, 0.75, 0.75);
      
    }
  );

  // 3. Load the ceiling light's RED hologram:
  glLoader.load('Models/ceilingLightHollowV5GLB.glb', function(gltf)
  {
    redHoloLampObj = gltf.scene; //Get the full GROUP mesh of the entire lamp
    
    const holoLampMeshArray = redHoloLampObj.children[0].children; //Store mesh objects inside a constant ref.
    holoLampMeshArray[0].material = redHoloMaterial; // the cone's material
    holoLampMeshArray[1].material = redHoloMaterial; // the cylinder's material
    holoLampMeshArray[2].material = redHoloMaterial; // the sphere's material
    gltf.scene.position.set(0, 2, 0);
    gltf.scene.scale.set(0.75, 0.75, 0.75);

  });

  // 3. Load the ceiling light's BLUE hologram:
  glLoader.load('Models/ceilingLightHollowV5GLB.glb', function(gltf)
  {
    blueHoloLampObj = gltf.scene; //Get the full GROUP mesh of the entire lamp
    
    const holoLampMeshArray = blueHoloLampObj.children[0].children; //Store mesh objects inside a constant ref.
    holoLampMeshArray[0].material = blueHoloMaterial; // the cone's material
    holoLampMeshArray[1].material = blueHoloMaterial; // the cylinder's material
    holoLampMeshArray[2].material = blueHoloMaterial; // the sphere's material
    gltf.scene.position.set(0, 2, 0);
    gltf.scene.scale.set(0.75, 0.75, 0.75);

  });

  // Start the animation
  animate();
}

//###############################################################################################################################
// === BUG FIX: CAP FPS AT 120 FPS TO PREVENT "...the animation [from running] faster on high refresh-rate screens..." ===
// === SEE https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame FOR INFO ===
//###############################################################################################################################
// Render or animate loop function, just like a game Update() loop:
function animate(atTimeFrame) 
{
  // If our last endpoint in time has not changed, then update it to current time:
  if (!endpointFromLastTime)
  {
    endpointFromLastTime = atTimeFrame;
  }

  // Request to animate a frame and capture its frame length to see if it exceeded the frame interval limit based on FPS:
  requestAnimationFrame(animate);
  deltaTime = atTimeFrame - endpointFromLastTime;

  // If we passed the interval, then reset endpoint:
  if (deltaTime > frameLengthInterval_ms)
  {
    // Update time stuff
    endpointFromLastTime = atTimeFrame - (deltaTime % frameLengthInterval_ms);

    // Try drawing stuff here instead:
    if (beeObj)
    {
      // Rotate the bee top-down (Y-axis rotation)
      let baseSpeed = applyRotationalDrag(1, 0.15, canvas);

      beeObj.rotation.y += baseSpeed;
    }

    renderer.render(scene, camera);

    if (lastHoloState == "red")
    {
      redHoloMaterial.update();
    }
    else if (lastHoloState == "blue")
    {
      blueHoloMaterial.update();
    }
  }

  // Wrap it in a defined if-statement to stop the program from complaining at the start about not being able to access the property of a non-existing object
  // (For more info, see: https://discourse.threejs.org/t/cannot-read-property-rotation-of-undefined/24193)
  /*if (beeObj)
  {
    // Rotate the bee top-down (Y-axis rotation)
    let baseSpeed = applyRotationalDrag(1, 0.15, canvas);

    beeObj.rotation.y += baseSpeed;
  }

  renderer.render(scene, camera);

  if (lastHoloState == "red")
  {
    redHoloMaterial.update();
  }
  else if (lastHoloState == "blue")
  {
    blueHoloMaterial.update();
  }
  */
}

function applyRotationalDrag(speed, dragAmt, objectUsedToScale)
{
  let newSpeed = (speed / (dragAmt * objectUsedToScale.clientHeight)) 
  return newSpeed;
}

// Initialize the 3D scene
console.log(THREE.REVISION);
init();
