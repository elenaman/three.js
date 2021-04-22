const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();
const clock = new THREE.Clock()
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('webgl').appendChild(renderer.domElement);

let geometrie = new THREE.SphereGeometry(20, 24, 24);
//var textureLoader = new THREE.TextureLoader();
//var texture = textureLoader.load("textura.png");

//texture.wrapS = THREE.RepeatWrapping;
//texture.wrapT = THREE.RepeatWrapping;
//texture.repeat.set(4, 4);
let material = new THREE.MeshStandardMaterial({
	color: 0xffffff,
});

material.bumpMap = THREE.ImageUtils.loadTexture('AmbientOcclusionMap.png')
material.bumpScale = 10
const sphere = new THREE.SphereGeometry(0.5, 16, 8);


var light1 = new THREE.PointLight(0xff0040, 10, 40);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
scene.add(light1);


var light2 = new THREE.PointLight(0x0040ff, 2, 50);
light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff })));
scene.add(light2);

var light3 = new THREE.PointLight(0x80ff80, 2, 50);
light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 })));
scene.add(light3);

var light4 = new THREE.PointLight(0xffaa00, 2, 50);
light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 })));
scene.add(light4);




//let lumina = new THREE.SpotLight(0xffffff, 10);
//lumina.position.x = 6;
//lumina.position.y = 8;
//lumina.position.z = -20;

//scene.add(lumina);

let sfera = new THREE.Mesh(geometrie, material);

scene.add(sfera);

camera.position.x = 0;
camera.position.y = 6;
camera.position.z = 100;
camera.lookAt(new THREE.Vector3(0, 0, 0));
animate()

function animate() {

	requestAnimationFrame(animate);

	render();

}
function render() {

	const time = Date.now() * 0.0005;
	const delta = clock.getDelta();


	light1.position.x = Math.sin(time * 0.7) * 30;
	light1.position.y = Math.cos(time * 0.5) * 40;
	light1.position.z = Math.cos(time * 0.3) * 30;

	light2.position.x = Math.cos(time * 0.3) * 30;
	light2.position.y = Math.sin(time * 0.5) * 40;
	light2.position.z = Math.sin(time * 0.7) * 30;

	light3.position.x = Math.sin(time * 0.7) * 30;
	light3.position.y = Math.cos(time * 0.3) * 40;
	light3.position.z = Math.sin(time * 0.5) * 30;

	light4.position.x = Math.sin(time * 0.3) * 30;
	light4.position.y = Math.cos(time * 0.7) * 40;
	light4.position.z = Math.sin(time * 0.5) * 30;

	renderer.render(scene, camera);

}