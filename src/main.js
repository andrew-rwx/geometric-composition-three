import { World } from './World/World.js';

function main() {

    // create a new world
    const container=document.getElementById("scene-container");
    const world = new World(container);
  
    // draw the scene
    world.start();
  }
  

main();
