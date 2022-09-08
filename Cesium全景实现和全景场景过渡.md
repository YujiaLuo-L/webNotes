## 全景实现
在Cesium中全景的实现其实是通过Three.js的方法实现的。
看下面一段代码：
````javascript
 /**
   * 根据6面体进行创建全景
   * @param imagePath 图片路径
   */
  loadCube(imagePath: string) {
    if (!THREE) {
      console.warn('lazy load three.js, must be run after createScene Promise.resolve.');
      return;
    }
    // 此处顺序不能打乱,d,l,f,u,r,b
    // Three天空盒子的图片顺序是，右、左、上、下、后、前。这里的顺序和three的不一样，但在下面做了镜像
    const imgList = [
      `${imagePath}_d.jpg`,
      `${imagePath}_l.jpg`,
      `${imagePath}_f.jpg`,
      `${imagePath}_u.jpg`,
      `${imagePath}_r.jpg`,
      `${imagePath}_b.jpg`,
    ];
    this.uniforms = [] as any; 
    Promise.all(
      imgList.map(
        (val, index) =>
          new Promise((resolve, reject) => {
            // 纹理加载
            new THREE.TextureLoader().load(
              val,
              (texture) => {
                this.uniforms[index] = {
                  time: { value: this.time },
                  texture3: { value: this.texture[index] },
                  texture4: { value: texture },
                };
                resolve(
                    // 着色器材质
                  new THREE.ShaderMaterial({
                    uniforms: this.uniforms[index],
                    vertexShader: //顶点着色器
                      'varying vec2 vUv;' +
                      'void main() {' +
                      'vUv=uv;' +
                      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);}',
                    fragmentShader: //片段着色器
                      'uniform sampler2D texture3;uniform sampler2D texture4;varying vec2 vUv;' +
                      'uniform bool isoriginColor;' +
                      'uniform float time;' +
                      'void main() {' +
                      'vec2 position =-1.0+2.0*vUv;' +
                      'vec4 color3=texture2D(texture3,vUv); vec4 color4=texture2D(texture4,vUv);' +
                      'vec3 tarcolor=color3.rgb;' +
                      'if(isoriginColor == false){ tarcolor = mix(color3.rgb, color4.rgb,time);}' +  //
                      'gl_FragColor = vec4(tarcolor, 1.0);' +
                      '}',
                  })
                );
                this.texture[index] = texture;
              },
              () => {},
              (err) => {
                reject(err);
              }
            );
          })
      )
    )
      .then((materials: any) => {
        const geometry = new THREE.BoxGeometry(200, 200, 200);
        geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, -1));
        const mesh = new THREE.Mesh(geometry, materials);
        this.scene?.add(mesh);
        this.time = 0.0;
        this.animate();
      })
      .catch((err) => {
        console.error(err);
        ElMessage.error('全景数据加载失败！');
      });
  }
````
