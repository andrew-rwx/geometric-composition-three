import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createCone } from './components/cone.js';
import { createSphere } from './components/sphere.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import{Loop} from './systems/Loop'
// These variables are module-scoped: we cannot access them
// from outside the module
//#endregioncamera;

let camera;
let scene;
let renderer;
let loop;
class World {

constructor(container) {
  camera = createCamera();
  scene = createScene();
  renderer = createRenderer();
  loop=new Loop(camera,scene,renderer);
  container.appendChild(renderer.domElement);

  const cube=createCube();
  const cone=createCone();
  const sphere=createSphere();
  const light=createLights();
  scene.add(cube,cone,sphere,light);

  loop.updatables.push(cube);
  loop.updatables.push(cone);
  loop.updatables.push(sphere);
  const resizer = new Resizer(container,camera,renderer);
}

render() {
  // draw a single frame
  renderer.render(scene,camera);
}

start(){
  loop.start();
}

stop(){
  loop.stop();
}


}


export { World };
