import { SphereGeometry,MeshBasicMaterial, Mesh } from "three"

function createSphere(){
    const geometry=new SphereGeometry(1,32,16);
    const material=new MeshBasicMaterial({color: "silver",
                                          wireframe:true});
    const sphere=new Mesh(geometry,material);
    sphere.position.set(-4,2,-3);
    sphere.tick=()=>{
        sphere.rotation.x += 0.01;
        
    }
    return sphere;
}

export{createSphere};