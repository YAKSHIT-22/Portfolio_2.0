const tl=gsap.timeline({defaults:{duration:0.75,ease: "power1.out"}});
var audio = new Audio('./assets/windcalm.m4a');
audio.volume = 0.1
window.addEventListener('click',()=>{
    gsap.to('.heading', {opacity:0, duration:0.75, ease:'power1.out'});
    tl.fromTo('.easter',{y:"100%"},{y:"0%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<10%")
    tl.fromTo('.easter1',{y:"100%"},{y:"0%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<10%")
    audio.play();
}, { once: true });

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
}, false);

tl.fromTo('.heading-text',{y:"100%"},{y:0,delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
tl.fromTo('.headinginner',{x:"-101%"},{x:"0%",duration:2.4,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<25%");
tl.fromTo('.heading-cta',{opacity:0},{opacity:1,ease:"power4.in"},);
let btn = document.querySelector('.button-open')
gsap.set('.navbar-menu',{y:"101%"})
btn.addEventListener('click',()=>{

  tl.fromTo('.navbar-menu',{y:"101%"},{y:"0%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'})
  tl.fromTo('.navbar',{y:"100%"},{y:0,delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<30%");
})
let btn1 = document.querySelector('.button-close')
// gsap.set('.navbar-menu',{y:"100%"})
btn1.addEventListener('click',()=>{
  tl.fromTo('.navbar',{y:"0%"},{y:"-100%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
  tl.fromTo('.navbar-menu',{y:"0%"},{y:"101%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<75%")
  tl.fromTo('.easter',{y:"100%"},{y:"0%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<")
    tl.fromTo('.easter1',{y:"100%"},{y:"0%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<")
})

let home = document.querySelector(".button-home")
let about = document.querySelector(".button-about")
let work = document.querySelector(".button-work")
let contact = document.querySelector(".button-contact")
home.addEventListener('click',()=>{
    tl.fromTo('.navbar',{y:"0%"},{y:"-100%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
    tl.fromTo('.navbar-menu',{y:"0%"},{y:"101%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<75%")
    setTimeout(()=>{
        location.href="./index.html"
    },3000);
  })
  about.addEventListener('click',()=>{
    tl.fromTo('.navbar',{y:"0%"},{y:"-100%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
    tl.fromTo('.navbar-menu',{y:"0%"},{y:"101%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<75%")
    setTimeout(()=>{
        location.href="./about.html"
    },3000);
  })
  work.addEventListener('click',()=>{
    tl.fromTo('.navbar',{y:"0%"},{y:"-100%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
    tl.fromTo('.navbar-menu',{y:"0%"},{y:"101%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<75%")
    setTimeout(()=>{
        location.href="./work.html"
    },3000);
  })
  contact.addEventListener('click',()=>{
    tl.fromTo('.navbar',{y:"0%"},{y:"-100%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'});
    tl.fromTo('.navbar-menu',{y:"0%"},{y:"101%",delay:0.4,stagger:.3,ease:'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})'},"<75%")
    setTimeout(()=>{
        location.href="./contact.html"
    },3000);
  })

const settings = {
  speed: 0.3,
  density: 2.25,
  strength: 0.06,
  frequency: 3.0,
  amplitude: 6.0,
  intensity: 2,
};


const noise = `
  // GLSL textureless classic 3D noise "cnoise",
  // with an RSL-style periodic variant "pnoise".
  // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
  // Version: 2011-10-11
  //
  // Many thanks to Ian McEwan of Ashima Arts for the
  // ideas for permutation and gradient selection.
  //
  // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
  // Distributed under the MIT license. See LICENSE file.
  // https://github.com/ashima/webgl-noise
  //

  vec3 mod289(vec3 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x)
  {
    return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  // Classic Perlin noise, periodic variant
  float pnoise(vec3 P, vec3 rep)
  {
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }
`;

const rotation = `
  mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
      c, 0.0, -s,
      0.0, 1.0, 0.0,
      s, 0.0, c
    );
  }
  
  vec3 rotateY(vec3 v, float angle) {
    return rotation3dY(angle) * v;
  }  
`;

const vertexShader = `  
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;
  uniform float uFrequency;
  uniform float uAmplitude;
  
  ${noise}
  
  ${rotation}
  
  void main() {
    vUv = uv;
    
    float t = uTime * uSpeed;
    float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

    vec3 pos = position + (normal * distortion);
    float angle = sin(uv.y * uFrequency + t) * uAmplitude;
    pos = rotateY(pos, angle);    
    
    vDistort = distortion;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }  
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vDistort;
  
  uniform float uTime;
  uniform float uIntensity;
  
  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }     
  
  void main() {
    float distort = vDistort * uIntensity;
    
    vec3 brightness = vec3(0.3, 0.4, 0.9);
    vec3 contrast = vec3(0.5, 0.6, 0.5);
    vec3 oscilation = vec3(1.0, 1.0, 1.0);
    vec3 phase = vec3(0.0, 0.1, 0.2);
  
    vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
    
    gl_FragColor = vec4(color, 1.0);
  }  
`;

class Scene {
   
  constructor() {
    
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setClearColor('black', 1);
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 4);    
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xe5e3dc );
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2();
    this.mouseTarget = new THREE.Vector2();

    
    this.init();
    this.animate();    
   
  }
 
  
  init() {
    this.addElements();
    this.addEvents();
  } 
  
 
    
  
  
  addElements() {
    const geometry = new THREE.IcosahedronBufferGeometry(.8, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: settings.speed },
        uNoiseDensity: { value: settings.density },
        uNoiseStrength: { value: settings.strength },
        uFrequency: { value: settings.frequency },
        uAmplitude: { value: settings.amplitude },
        uIntensity: { value: settings.intensity },
      },
      // wireframe: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 0, 0)
    this.mesh.rotation.set(0, 2.0, 0.0);
    this.scene.add(this.mesh);
    
  }
  
  addEvents() {
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('mousemove', this.mouseMove.bind(this));
  }  
  mouseMove(e) {
    // Calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    this.mouse.x = (e.clientX / window.innerWidth) - 0.5;
  this.mouse.y =  (e.clientY / window.innerHeight) - 0.5;
}
  resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.camera.aspect = width / height;
    this.renderer.setSize(width, height);

    this.camera.updateProjectionMatrix();
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    this.render();
  }
  
  render() {

    
    // Update uniforms
    this.mesh.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.mesh.material.uniforms.uSpeed.value = settings.speed;    
    this.mesh.material.uniforms.uNoiseDensity.value = settings.density;
    this.mesh.material.uniforms.uNoiseStrength.value = settings.strength;
    this.mesh.material.uniforms.uFrequency.value = settings.frequency;
    this.mesh.material.uniforms.uAmplitude.value = settings.amplitude;
    this.mesh.material.uniforms.uIntensity.value = settings.intensity;

    
    this.renderer.render(this.scene, this.camera);
  }  
}

new Scene();


// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()
// scene.background = new THREE.Color( 0xe5e3dc );

// //galaxy
// const parameters = { }
// parameters.count = 100000
// parameters.size = 0.01
// parameters.radius = 5
// parameters.branches = 6
// parameters.spin = 1
// parameters.randomness = 0.341
// parameters.randomnessPower = 3
// parameters.insideColor = '#ff6030'
// parameters.outsideColor = '#1b3984'

// let geometry = null
// let material = null
// let points = null

// const generateGalaxy = () =>{
     

//     if(points !== null)
//     {
//         geometry.dispose()
//         material.dispose()
//         scene.remove(points)
//     }

//        geometry = new THREE.BufferGeometry()
//        const positions = new Float32Array(parameters.count*3)
//        const colors = new Float32Array(parameters.count*3)
//        const colorInside = new THREE.Color(parameters.insideColor)
//        const colorOutside = new THREE.Color(parameters.outsideColor)
       

//        for(let i = 0; i < parameters.count; i++)
//        {
//            // Position
//            const i3 = i * 3
   
//            const radius = Math.random() * parameters.radius
   
//            const spinAngle = radius * parameters.spin
//            const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
           
//            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
//            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
//            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
   
//            positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX
//            positions[i3 + 1] = randomY
//            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
        
//            // Color
//            const mixedColor = colorInside.clone()
//            mixedColor.lerp(colorOutside, radius / parameters.radius)
           
//            colors[i3    ] = mixedColor.r
//            colors[i3 + 1] = mixedColor.g
//            colors[i3 + 2] = mixedColor.b
//        }

//     geometry.setAttribute('position',new THREE.BufferAttribute(positions,3))
//     geometry.setAttribute('color',new THREE.BufferAttribute(colors,3))
    
//     material = new THREE.PointsMaterial({
//         size: parameters.size,
//         sizeAttenuation:true,
//         depthWrite:false,
//         blending: THREE.AdditiveBlending,
//         vertexColors: true
//     })
//     points = new THREE.Points(geometry, material)
    
                


//     scene.add(points)
    
   

// }
// generateGalaxy()

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }
// const renderer = new THREE.WebGLRenderer({
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// document.body.appendChild(renderer.domElement)
// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 6;
// camera.position.y = 1;

// camera.rotateOnAxis(new THREE.Vector3(0, 1, 1), degInRad(45)); 
// function degInRad(deg) {
//   return deg * Math.PI / 180;
// } 
// scene.add(camera)
 



// /**
//  * Renderer
//  */

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     points.rotation.y = elapsedTime*0.5  
//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()
