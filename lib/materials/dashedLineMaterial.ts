import * as THREE from "three";

export function createDashedLineMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      dashSize: { value: 1 },
      gapSize: { value: 1 },
      time: { value: 0 },
      color: { value: new THREE.Color("#00ffff") },
    },
    vertexShader: `
      varying float vDash;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDash = position.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float dashSize;
      uniform float gapSize;
      uniform float time;
      uniform vec3 color;
      varying float vDash;

      void main() {
        float totalSize = dashSize + gapSize;
        float current = mod(vDash + time * 5.0, totalSize);
        if (current > dashSize) discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}
