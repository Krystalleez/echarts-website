window.__EC_DOC_option_gl_mapbox3D = {
  "style": {
    "desc": "<p>Mapbox 地图样式。同 <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/</a></p>\n"
  },
  "center": {
    "desc": "<p>Mapbox 地图中心经纬度。经纬度用数组表示，例如：</p>\n<pre><code class=\"lang-ts\">mapbox3D: {\n    center: [104.114129, 37.550339],\n    zoom: 3\n}\n</code></pre>\n"
  },
  "zoom": {
    "desc": "<p>Mapbox 地图的缩放等级。见 <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom</a></p>\n"
  },
  "bearing": {
    "desc": "<p>Mapbox 地图的旋转角度。见 <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing</a></p>\n"
  },
  "pitch": {
    "desc": "<p>视角俯视的倾斜角度。默认为<code class=\"codespan\">0</code>，也就是垂直于地图表面。最大的值是<code class=\"codespan\">60</code>。见 <a href=\"https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch</a></p>\n"
  },
  "altitudeScale": {
    "desc": "<p>海拔的缩放。</p>\n"
  },
  "shading": {
    "desc": "<p>mapbox3D中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\n只显示颜色，不受光照等其它因素的影响。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\n通过经典的 <a href=\"https://en.wikipedia.org/wiki/Lambertian_reflectance\" target=\"_blank\">lambert</a> 着色表现光照带来的明暗。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\n真实感渲染，配合 <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> 和 <a href=\"#globe.postEffect\">postEffect</a> 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">基于物理的渲染（PBR）</a> 来表现真实感材质。</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>真实感材质相关的配置项，在 <a href=\"#mapbox3D.shading\">shading</a> 为<code class=\"codespan\">&#39;realistic&#39;</code>时有效。</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p><code class=\"codespan\">roughness</code>属性用于表示材质的粗糙度，<code class=\"codespan\">0</code>为完全光滑，<code class=\"codespan\">1</code>完全粗糙，中间的值则是介于这两者之间。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">roughness</code>分别是<code class=\"codespan\">0.2</code>（光滑）与<code class=\"codespan\">0.8</code>（粗糙）的效果。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>当你想要表达更复杂的材质时。你可以直接将 <code class=\"codespan\">roughness</code> 设置为如下用每个像素存储粗糙度的贴图。</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>贴图中颜色越白的地方值越大，就越粗糙。你可以从 <a href=\"http://freepbr.com/\" target=\"_blank\">http://freepbr.com/</a> 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p><code class=\"codespan\">metalness</code>属性用于表示材质是金属还是非金属，<code class=\"codespan\">0</code>为非金属，<code class=\"codespan\">1</code>为金属，中间的值则是介于这两者之间。通常设成<code class=\"codespan\">0</code>和<code class=\"codespan\">1</code>就能满足大部分场景了。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">metalness</code>分别设成<code class=\"codespan\">1</code>与<code class=\"codespan\">0</code>的效果区别。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>跟 <a href=\"#mapbox3D.realisticMaterial.roughness\">roughness</a> 一样 你可以直接将 <code class=\"codespan\">metalness</code> 设置为金属度贴图。</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为完全光滑，<code class=\"codespan\">1</code>的时候为完全粗糙。</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为非金属，<code class=\"codespan\">1</code>的时候为金属。</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>材质细节的法线贴图。</p>\n<p>使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>lambert 材质相关的配置项，在 <a href=\"#mapbox3D.shading\">shading</a> 为<code class=\"codespan\">&#39;lambert&#39;</code>时有效。</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>color 材质相关的配置项，在 <a href=\"#mapbox3D.shading\">shading</a> 为<code class=\"codespan\">&#39;color&#39;</code>时有效。</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "light": {
    "desc": "<p>光照相关的设置。在 <a href=\"#mapbox3D.shading\">shading</a> 为 <code class=\"codespan\">&#39;color&#39;</code> 的时候无效。</p>\n<p>光照的设置会影响到组件以及组件所在坐标系上的所有图表。</p>\n<p>合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。</p>\n"
  },
  "light.main": {
    "desc": "<p>场景主光源的设置，在 <a href=\"#globe\">globe</a> 组件中就是太阳光。</p>\n"
  },
  "light.main.color": {
    "desc": "<p>主光源的颜色。</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>主光源的强度。</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>主光源是否投射阴影。默认为关闭。</p>\n<p>开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。</p>\n<p>下图是开启阴影以及关闭阴影的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"></img>\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"></img>\n</div>\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>阴影的质量。可选<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>下图是低质量和高质量阴影的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"></img>\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"></img>\n</div>\n"
  },
  "light.main.alpha": {
    "desc": "<p>主光源绕 x 轴，即上下旋转的角度。配合 <a href=\"#mapbox3D.light.main.beta\">beta</a> 控制光源的方向。</p>\n<p>如下示意图：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p><a href=\"#globe\">globe</a> 组件中可以通过 <a href=\"#globe.light.main.time\">time</a> 控制日光的时间。</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>主光源绕 y 轴，即左右旋转的角度。</p>\n"
  },
  "light.ambient": {
    "desc": "<p>全局的环境光设置。</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>环境光的颜色。</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>环境光的强度。</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>ambientCubemap 会使用纹理作为环境光的光源，会为物体提供漫反射和高光反射。可以通过 <a href=\"#mapbox3D.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> 和 <a href=\"#mapbox3D.light.ambientCubemap.specularIntensity\">specularIntensity</a> 分别设置漫反射强度和高光反射强度。</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>环境光贴图的 url，支持使用<code class=\"codespan\">.hdr</code>格式的 HDR 图片。可以从 <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> 等网站获取 <code class=\"codespan\">.hdr</code> 的资源。</p>\n<p>例如：</p>\n<pre><code class=\"lang-ts\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // 解析 hdr 时使用的曝光值\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>漫反射的强度。</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>高光反射的强度。</p>\n"
  },
  "postEffect": {
    "desc": "<p>后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。</p>\n<p>下面分别是关闭和开启 <code class=\"codespan\">postEffect</code> 的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n\n<p>注意在开启 postEffect 的时候默认会开启 <a href=\"#mapbox3D.temporalSuperSampling\">temporalSuperSampling</a> 在画面静止后持续对画面增强，包括抗锯齿、景深、SSAO、阴影等。</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>是否开启后处理特效。默认关闭。</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现<code class=\"codespan\">0 - 255</code>范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。如下图：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>是否开启光晕特效。</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>光晕的强度，默认为 0.1</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>景深效果。景深效果是模拟摄像机的光学成像效果，在对焦的区域相对清晰，离对焦的区域越远则会逐渐模糊。</p>\n<p>景深效果可以让观察者集中注意力到对焦的区域，而且让画面的镜头感更强，大景深还能塑造出微距的模型效果。</p>\n<p>下面分别是关闭和开启景深的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"></img>\n</div>\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>是否开启景深。</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>初始的焦距，用户可以点击区域自动聚焦。</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>完全聚焦的区域范围，在此范围内的物体时完全清晰的，不会有模糊</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>镜头的<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94\" target=\"_blank\">F值</a>，值越小景深越浅。</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>焦外的模糊半径</p>\n<p>不同模糊半径的区别：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"></img>\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"></img>\n</div>\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>屏幕空间的环境光遮蔽效果。环境光遮蔽效果可以让拐角处、洞、缝隙等大部分光无法到达的区域变暗，是传统的阴影贴图的补充，可以让整个场景更加自然，有层次。</p>\n<p>下面是无 SSAO 和有 SSAO 的效果对比：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"></img>\n</div>\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>同 <a href=\"#mapbox3D.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>是否开启环境光遮蔽。默认不开启。</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>环境光遮蔽的质量。支持<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code>。</p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>环境光遮蔽的采样半径。半径越大效果越自然，但是需要设置较高的<code class=\"codespan\">&#39;quality&#39;</code>。</p>\n<p>下面是半径值较小与较大之间的区别：</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"></img>\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"></img>\n</div>\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>环境光遮蔽的强度。值越大颜色越深。</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>颜色纠正和调整。类似 Photoshop 中的 Color Adjustments。</p>\n<p>下图同个场景调整为冷色系和暖色系的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"></img>\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"></img>\n</div>\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>是否开启颜色纠正。</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>颜色查找表，推荐使用。</p>\n<p>颜色查找表是一张像下面这样的纹理图片。</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>这张是基础的查找表图片，你可以直接拿来使用，为了方便将场景色调调整你想要的效果，你可以将场景截图后在 Photoshop 等图像处理软件中调整颜色到想要的效果，然后将相同的调整应用到上面这张查找表的图片上。</p>\n<p>比如调成冷色调后，查找表的纹理图片就会成为下面这样：</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>然后那这张纹理图片就作为该配置项的值，就可以得到相同的在 Photoshop 里调整好的效果了。</p>\n<p>当然如果你只是想得到一张截图，完全可以不这样操作，但是如果你想在可以实时交互的作品中能方便的调整到理想的色调，这个就非常有用了。</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>画面的曝光。</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>画面的亮度。</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>画面的对比度。</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>画面的饱和度。</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>在开启 <a href=\"#mapbox3D.postEffect\">postEffect</a> 后，WebGL 默认的 MSAA (Multi Sampling Anti Aliasing) 会无法使用。这时候通过 FXAA (Fast Approximate Anti-Aliasing) 可以廉价方便的解决抗锯齿的问题，FXAA 会对一些场景的边缘部分进行模糊从而解决锯齿的问题，这在一些场景上效果还不错，但是在 echarts-gl 中，需要保证很多文字和线条边缘的锐利清晰，因此 FXAA 并不是那么适用。这时候我们可以通过设置更高的<code class=\"codespan\">devicePixelRatio</code>来使用超采样，如下所示：</p>\n<pre><code class=\"lang-ts\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>但是设置更高的<code class=\"codespan\">devicePixelRatio</code> 对电脑性能有很高的要求，所以更多时候我们建议使用 echarts-gl 中的 <a href=\"#mapbox3D.temporalSuperSampling\">temporalSuperSampling</a>，在画面静止后会持续分帧对一个像素多次抖动采样，从而达到超采样抗锯齿的效果。</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>是否开启 FXAA。默认为不开启。</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>分帧超采样。在开启 <a href=\"#mapbox3D.postEffect\">postEffect</a> 后，WebGL 默认的 MSAA 会无法使用，所以我们需要自己解决锯齿的问题。</p>\n<p>分帧超采样是用来解决锯齿问题的方法，它在画面静止后会持续分帧对一个像素多次抖动采样，从而达到抗锯齿的效果。而且在这个分帧采样的过程中，echarts-gl 也会对 <a href=\"#mapbox3D.postEffect\">postEffect</a> 中一些需要采样保证效果的特效，例如 <a href=\"#mapbox3D.postEffect.SSAO\">SSAO</a>, <a href=\"#mapbox3D.postEffect.depthOfField\">景深</a>，以及阴影进行渐进增强。</p>\n<p>下面是未开启和开启<code class=\"codespan\">temporalSuperSampling</code>的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"></img>\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"></img>\n</div>\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>是否开启分帧超采样。默认在开启 <a href=\"#mapbox3D.postEffect\">postEffect</a> 后也会同步开启。</p>\n"
  }
}