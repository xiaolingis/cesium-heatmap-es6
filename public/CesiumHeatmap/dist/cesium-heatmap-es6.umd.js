/*! cesium-heatmap-es6 v0.5.0 - cesium-heatmap-es6.umd.js, 244561e45232c58ac3fa, Mon May 30 2022 22:17:51 GMT+0800 (中国标准时间) */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("Cesium"));else if("function"==typeof define&&define.amd)define(["Cesium"],e);else{var i="object"==typeof exports?e(require("Cesium")):e(t.Cesium);for(var a in i)("object"==typeof exports?exports:t)[a]=i[a]}}(window,(function(t){return function(t){var e={};function i(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(e,i){e.exports=t},function(t,e,i){var a,r;a=this,r=function(){var t,e={defaultRadius:40,defaultRenderer:"canvas2d",defaultGradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},i=function(){var t=function(t){this._coordinator={},this._data=[],this._radi=[],this._min=0,this._max=1,this._xField=t.xField||t.defaultXField,this._yField=t.yField||t.defaultYField,this._valueField=t.valueField||t.defaultValueField,t.radius&&(this._cfgRadius=t.radius)},i=e.defaultRadius;return t.prototype={_organiseData:function(t,e){var a=t[this._xField],r=t[this._yField],n=this._radi,s=this._data,o=this._max,h=this._min,d=t[this._valueField]||1,u=t.radius||this._cfgRadius||i;return s[a]||(s[a]=[],n[a]=[]),s[a][r]?s[a][r]+=d:(s[a][r]=d,n[a][r]=u),s[a][r]>o?(e?this.setDataMax(s[a][r]):this._max=s[a][r],!1):{x:a,y:r,value:d,radius:u,min:h,max:o}},_unOrganizeData:function(){var t=[],e=this._data,i=this._radi;for(var a in e)for(var r in e[a])t.push({x:a,y:r,radius:i[a][r],value:e[a][r]});return{min:this._min,max:this._max,data:t}},_onExtremaChange:function(){this._coordinator.emit("extremachange",{min:this._min,max:this._max})},addData:function(){if(arguments[0].length>0)for(var t=arguments[0],e=t.length;e--;)this.addData.call(this,t[e]);else{var i=this._organiseData(arguments[0],!0);i&&this._coordinator.emit("renderpartial",{min:this._min,max:this._max,data:[i]})}return this},setData:function(t){var e=t.data,i=e.length;this._data=[],this._radi=[];for(var a=0;a<i;a++)this._organiseData(e[a],!1);return this._max=t.max,this._min=t.min||0,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},removeData:function(){},setDataMax:function(t){return this._max=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setDataMin:function(t){return this._min=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setCoordinator:function(t){this._coordinator=t},_getInternalData:function(){return{max:this._max,min:this._min,data:this._data,radi:this._radi}},getData:function(){return this._unOrganizeData()}},t}(),a=function(){var t=function(t){var e=t.gradient||t.defaultGradient,i=document.createElement("canvas"),a=i.getContext("2d");i.width=256,i.height=1;var r=a.createLinearGradient(0,0,256,1);for(var n in e)r.addColorStop(n,e[n]);return a.fillStyle=r,a.fillRect(0,0,256,1),a.getImageData(0,0,256,1).data},e=function(t,e){var i=document.createElement("canvas"),a=i.getContext("2d"),r=t,n=t;if(i.width=i.height=2*t,1==e)a.beginPath(),a.arc(r,n,t,0,2*Math.PI,!1),a.fillStyle="rgba(0,0,0,1)",a.fill();else{var s=a.createRadialGradient(r,n,t*e,r,n,t);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=s,a.fillRect(0,0,2*t,2*t)}return i};function i(e){var i=e.container,a=this.shadowCanvas=document.createElement("canvas"),r=this.canvas=e.canvas||document.createElement("canvas"),n=(this._renderBoundaries=[1e4,1e4,0,0],getComputedStyle(e.container)||{});r.className="heatmap-canvas",this._width=r.width=a.width=+n.width.replace(/px/,""),this._height=r.height=a.height=+n.height.replace(/px/,""),this.shadowCtx=a.getContext("2d"),this.ctx=r.getContext("2d"),r.style.cssText=a.style.cssText="position:absolute;left:0;top:0;",i.style.position="relative",i.appendChild(r),this._palette=t(e),this._templates={},this._setStyles(e)}return i.prototype={renderPartial:function(t){this._drawAlpha(t),this._colorize()},renderAll:function(t){this._clear(),this._drawAlpha(function(t){for(var e=[],i=t.min,a=t.max,r=t.radi,n=(t=t.data,Object.keys(t)),s=n.length;s--;)for(var o=n[s],h=Object.keys(t[o]),d=h.length;d--;){var u=h[d],c=t[o][u],l=r[o][u];e.push({x:o,y:u,value:c,radius:l})}return{min:i,max:a,data:e}}(t)),this._colorize()},_updateGradient:function(e){this._palette=t(e)},updateConfig:function(t){t.gradient&&this._updateGradient(t),this._setStyles(t)},setDimensions:function(t,e){this._width=t,this._height=e,this.canvas.width=this.shadowCanvas.width=t,this.canvas.height=this.shadowCanvas.height=e},_clear:function(){this.shadowCtx.clearRect(0,0,this._width,this._height),this.ctx.clearRect(0,0,this._width,this._height)},_setStyles:function(t){this._blur=0==t.blur?0:t.blur||t.defaultBlur,t.backgroundColor&&(this.canvas.style.backgroundColor=t.backgroundColor),this._opacity=255*(t.opacity||0),this._maxOpacity=255*(t.maxOpacity||t.defaultMaxOpacity),this._minOpacity=255*(t.minOpacity||t.defaultMinOpacity),this._useGradientOpacity=!!t.useGradientOpacity},_drawAlpha:function(t){for(var i=this._min=t.min,a=this._max=t.max,r=(t=t.data||[]).length,n=1-this._blur;r--;){var s,o=t[r],h=o.x,d=o.y,u=o.radius,c=Math.min(o.value,a),l=h-u,p=d-u,m=this.shadowCtx;this._templates[u]?s=this._templates[u]:this._templates[u]=s=e(u,n),m.globalAlpha=(c-i)/(a-i),m.drawImage(s,l,p),l<this._renderBoundaries[0]&&(this._renderBoundaries[0]=l),p<this._renderBoundaries[1]&&(this._renderBoundaries[1]=p),l+2*u>this._renderBoundaries[2]&&(this._renderBoundaries[2]=l+2*u),p+2*u>this._renderBoundaries[3]&&(this._renderBoundaries[3]=p+2*u)}},_colorize:function(){var t=this._renderBoundaries[0],e=this._renderBoundaries[1],i=this._renderBoundaries[2]-t,a=this._renderBoundaries[3]-e,r=this._width,n=this._height,s=this._opacity,o=this._maxOpacity,h=this._minOpacity,d=this._useGradientOpacity;t<0&&(t=0),e<0&&(e=0),t+i>r&&(i=r-t),e+a>n&&(a=n-e);for(var u=this.shadowCtx.getImageData(t,e,i,a),c=u.data,l=c.length,p=this._palette,m=3;m<l;m+=4){var f,g=c[m],v=4*g;v&&(f=s>0?s:g<o?g<h?h:g:o,c[m-3]=p[v],c[m-2]=p[v+1],c[m-1]=p[v+2],c[m]=d?p[v+3]:f)}u.data=c,this.ctx.putImageData(u,t,e),this._renderBoundaries=[1e3,1e3,0,0]},getValueAt:function(t){var e=this.shadowCtx.getImageData(t.x,t.y,1,1).data[3],i=this._max,a=this._min;return Math.abs(i-a)*(e/255)>>0},getDataURL:function(){return this.canvas.toDataURL()}},i}(),r=(t=!1,"canvas2d"===e.defaultRenderer&&(t=a),t),n=function(){for(var t={},e=arguments.length,i=0;i<e;i++){var a=arguments[i];for(var r in a)t[r]=a[r]}return t},s=function(){var t=function(){function t(){this.cStore={}}return t.prototype={on:function(t,e,i){var a=this.cStore;a[t]||(a[t]=[]),a[t].push((function(t){return e.call(i,t)}))},emit:function(t,e){var i=this.cStore;if(i[t])for(var a=i[t].length,r=0;r<a;r++)(0,i[t][r])(e)}},t}(),a=function(t){var e=t._renderer,i=t._coordinator,a=t._store;i.on("renderpartial",e.renderPartial,e),i.on("renderall",e.renderAll,e),i.on("extremachange",(function(e){t._config.onExtremaChange&&t._config.onExtremaChange({min:e.min,max:e.max,gradient:t._config.gradient||t._config.defaultGradient})})),a.setCoordinator(i)};function s(){var s=this._config=n(e,arguments[0]||{});if(this._coordinator=new t,s.plugin){var o=s.plugin;if(!e.plugins[o])throw new Error("Plugin '"+o+"' not found. Maybe it was not registered.");var h=e.plugins[o];this._renderer=new h.renderer(s),this._store=new h.store(s)}else this._renderer=new r(s),this._store=new i(s);a(this)}return s.prototype={addData:function(){return this._store.addData.apply(this._store,arguments),this},removeData:function(){return this._store.removeData&&this._store.removeData.apply(this._store,arguments),this},setData:function(){return this._store.setData.apply(this._store,arguments),this},setDataMax:function(){return this._store.setDataMax.apply(this._store,arguments),this},setDataMin:function(){return this._store.setDataMin.apply(this._store,arguments),this},configure:function(t){return this._config=n(this._config,t),this._renderer.updateConfig(this._config),this._coordinator.emit("renderall",this._store._getInternalData()),this},repaint:function(){return this._coordinator.emit("renderall",this._store._getInternalData()),this},getData:function(){return this._store.getData()},getDataURL:function(){return this._renderer.getDataURL()},getValueAt:function(t){return this._store.getValueAt?this._store.getValueAt(t):this._renderer.getValueAt?this._renderer.getValueAt(t):null}},s}();return{create:function(t){return new s(t)},register:function(t,i){e.plugins[t]=i}}},t.exports?t.exports=r():a.h337=r()},function(t,e,i){"use strict";i.r(e),i.d(e,"CesiumHeatmap",(function(){return n}));var a=i(0),r=i(1);class n{constructor(t,e){var i,n,s;if(this.bounds=[0,0,0,0],this.lastCameraHeight=0,this.initRadius=10,this.viewer=t,this.initOptions=Object.assign({},e),null===(i=this.initOptions)||void 0===i?void 0:i.points){const t=this.getBounds(this.initOptions.points);this.bounds=t;const{container:e,width:i,height:o}=this.createContainer(t);this.element=e;const h=[],d=[];for(let e in this.initOptions.points){const a=this.initOptions.points[e],r={x:(a.x-t[0])/(t[2]-t[0])*i,y:(t[3]-a.y)/(t[3]-t[1])*o,value:a.value};"number"==typeof a.value&&d.push(a.value),h.push(r)}let u=Math.min(...d),c=Math.max(...d);if(null===(n=this.initOptions)||void 0===n?void 0:n.heatmapDataOptions){const{min:t,max:e}=this.initOptions.heatmapDataOptions;"number"==typeof t&&(u=t),"number"==typeof e&&(c=e)}this.heatmapDataOptions={min:u,max:c};const l={max:c,min:u,data:h},p={maxOpacity:.9,minOpacity:.1,gradient:{".3":"blue",".5":"green",".7":"yellow",".95":"red"}},m=this.initOptions.heatmapOptions?Object.assign(Object.assign({},p),this.initOptions.heatmapOptions):p;(null===(s=this.heatmapOptions)||void 0===s?void 0:s.radius)&&(this.initRadius=this.heatmapOptions.radius),this.heatmapOptions=Object.assign({},m);const f=Object.assign(Object.assign({},m),{container:e});this.heatmap=r.create(f),this.heatmap.setData(l),this.createLayer(),this.initOptions.noLisenerCamera||this.addLisener(),this.initOptions.zoomToLayer&&t&&this.viewer.camera.flyTo({destination:a.Rectangle.fromDegrees(...t)})}}updateHeatMapMaxMin(t){const{min:e,max:i}=t;this.heatmap&&("number"==typeof e&&(this.heatmap.setDataMin(e),this.heatmapDataOptions&&(this.heatmapDataOptions.min=e)),"number"==typeof i&&(this.heatmap.setDataMax(i),this.heatmapDataOptions&&(this.heatmapDataOptions.max=i))),this.updateLayer()}updateHeatmap(t){const{heatmapOptions:e}=this;this.heatmap.configure(Object.assign(Object.assign({},e),t)),this.updateLayer()}updateRadius(t){var e;const{heatmapOptions:i}=this,a=this.heatmap.getData();if(null==a?void 0:a.data)for(let e in a.data){a.data[e].radius=t}this.heatmap.setData(a),this.heatmapOptions=Object.assign(Object.assign({},i),{radius:t}),this.updateLayer(),(null===(e=this.initOptions)||void 0===e?void 0:e.onRadiusChange)&&this.initOptions.onRadiusChange(t)}remove(){this.element&&(document.body.removeChild(this.element),this.element=void 0,this.provider instanceof a.ImageryLayer?(this.provider&&this.viewer.imageryLayers.remove(this.provider),this.createSingleTileImageryLayer()):this.provider instanceof a.Primitive?this.viewer.scene.primitives.remove(this.provider):this.provider instanceof a.Entity&&this.viewer.entities.remove(this.provider),this.cameraMoveEnd&&(this.viewer.camera.moveEnd.removeEventListener(this.cameraMoveEnd),this.cameraMoveEnd=void 0))}createLayer(){"primitive"===this.initOptions.renderType?this.createPrimitive():"imagery"===this.initOptions.renderType?this.createSingleTileImageryLayer():this.createEntity()}createPrimitive(){const t=this.heatmap.getDataURL();this.provider=this.viewer.scene.primitives.add(new a.Primitive({geometryInstances:new a.GeometryInstance({geometry:new a.RectangleGeometry({rectangle:a.Rectangle.fromDegrees(...this.bounds),vertexFormat:a.EllipsoidSurfaceAppearance.VERTEX_FORMAT})}),appearance:new a.EllipsoidSurfaceAppearance({aboveGround:!1}),show:!0})),this.provider&&(this.provider.appearance.material=new a.Material({fabric:{type:"Image",uniforms:{image:t}}}))}createSingleTileImageryLayer(){const t=this.heatmap.getDataURL();this.provider=this.viewer.imageryLayers.addImageryProvider(new a.SingleTileImageryProvider({url:t,rectangle:a.Rectangle.fromDegrees(...this.bounds)}))}getImageMaterialProperty(){const t=this.heatmap.getDataURL();return new a.ImageMaterialProperty({image:t})}createEntity(){this.provider=this.viewer.entities.add({show:!0,rectangle:{coordinates:a.Rectangle.fromDegrees(...this.bounds),material:this.getImageMaterialProperty()}})}updateLayer(){const t=this.heatmap.getDataURL();this.provider instanceof a.ImageryLayer?(this.provider&&this.viewer.imageryLayers.remove(this.provider),this.createSingleTileImageryLayer()):this.provider instanceof a.Primitive?this.provider.appearance.material.uniforms.image=t:this.provider instanceof a.Entity&&this.provider.rectangle&&(this.provider.rectangle.material=this.getImageMaterialProperty())}addLisener(){const t=6375e3;this.cameraMoveEnd=()=>{var e;if(this.heatmapOptions&&this.heatmap&&this.heatmapDataOptions){const i=this.viewer.camera.getMagnitude(),a=(null===(e=null==this?void 0:this.initOptions)||void 0===e?void 0:e.cameraHeightDistance)?this.initOptions.cameraHeightDistance:1e3;if(Math.abs(i-this.lastCameraHeight)>a){this.lastCameraHeight=i;{const e=parseInt((this.initRadius+(100-this.initRadius)*(i-t)/3625e3).toFixed(0));e&&this.updateRadius(e)}}}},this.viewer.camera.moveEnd.addEventListener(this.cameraMoveEnd)}getBounds(t){if(t){let e=180,i=-180,a=90,r=-180;t.forEach((function(t){const{x:n,y:s}=t;e=n<e?n:e,a=s<a?s:a,i=n>i?n:i,r=s>r?s:r}));const n=i-e?i-e:1,s=r-a?r-a:1;return[e-n/10,a-s/10,i+n/10,r+s/10]}return[0,0,0,0]}createContainer(t){const e=document.createElement("div"),i=parseInt((1e3/(t[2]-t[0])*(t[3]-t[1])).toFixed(0));return e.setAttribute("style",`width:1000px;height:${i}px;display:none;`),document.body.appendChild(e),{container:e,width:1e3,height:i}}}}])}));