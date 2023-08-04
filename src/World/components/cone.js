import {ConeGeometry,Mesh,MeshBasicMaterial } from "three";

function createCone(){
    const geometry=new ConeGeometry(1.5,2.5,30);
    const material=new MeshBasicMaterial({color:"red",
                                          wireframe:true});
    const cone=new Mesh(geometry,material);
    cone.position.set(4,2,-4);

    cone.tick=()=>{
        cone.rotation.z +=0.01;
    }
    return cone;
}

export{createCone};