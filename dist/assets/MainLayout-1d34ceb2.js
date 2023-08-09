import{r as ee,g as Kg,R as Nl,j as Ge,b as Qg,u as Jg,D as $g,O as e0}from"./index-07b8d0e5.js";import{u as t0}from"./user-e932d91f.js";import{d as n0}from"./dayjs.min-b9add960.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="154",i0=0,hd=1,r0=2,s0=0,pf=1,Dl=2,Ni=3,nr=0,xn=1,$n=2,Gt=0,Bs=1,dd=2,pd=3,md=4,a0=5,Ls=100,o0=101,l0=102,vd=103,gd=104,u0=200,c0=201,f0=202,h0=203,km=204,Hm=205,d0=206,p0=207,m0=208,v0=209,g0=210,Gm=0,Vm=1,Qc=2,Fl=3,Ol=4,Wm=5,Xm=6,mf=7,jm=0,x0=1,S0=2,Oi=0,y0=1,_0=2,M0=3,Ym=4,E0=5,qm=300,Ws=301,Xs=302,Jc=303,$c=304,kl=306,Ai=1e3,Hn=1001,ef=1002,at=1003,xd=1004,rc=1005,Ve=1006,T0=1007,Va=1008,It=1009,w0=1010,A0=1011,vf=1012,Zm=1013,$i=1014,Kt=1015,ei=1016,Km=1017,Qm=1018,wr=1020,R0=1021,Wt=1023,gf=1024,P0=1025,qr=1026,Zr=1027,xf=1028,Jm=1029,$m=1030,ev=1031,tv=1033,sc=33776,ac=33777,oc=33778,lc=33779,Sd=35840,yd=35841,_d=35842,Md=35843,C0=36196,Ed=37492,Td=37496,wd=37808,Ad=37809,Rd=37810,Pd=37811,Cd=37812,bd=37813,Dd=37814,Ld=37815,Ud=37816,Id=37817,Nd=37818,Fd=37819,Od=37820,zd=37821,uc=36492,b0=36283,Bd=36284,kd=36285,Hd=36286,Hl=3e3,Ti=3001,En=3200,ir=3201,Sf=0,D0=1,Ar="",ct="srgb",zi="srgb-linear",nv="display-p3",cc=7680,L0=519,U0=512,I0=513,N0=514,F0=515,O0=516,z0=517,B0=518,k0=519,Gd=35044,tf="300 es",nf=1035,er=2e3,zl=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,l=a.length;o<l;o++)a[o].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const Oa=Math.PI/180,Wa=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function yf(n,e){return(n%e+e)%e}function H0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function G0(n,e,t){return n!==e?(t-n)/(e-n):0}function za(n,e,t){return(1-t)*n+t*e}function V0(n,e,t,i){return za(n,e,1-Math.exp(-t*i))}function W0(n,e=1){return e-Math.abs(yf(n,e*2)-e)}function X0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function j0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Y0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function q0(n,e){return n+Math.random()*(e-n)}function Z0(n){return n*(.5-Math.random())}function K0(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q0(n){return n*Oa}function J0(n){return n*Wa}function rf(n){return(n&n-1)===0&&n!==0}function $0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ex(n,e,t,i,a){const o=Math.cos,l=Math.sin,u=o(t/2),f=l(t/2),p=o((e+i)/2),d=l((e+i)/2),m=o((e-i)/2),v=l((e-i)/2),S=o((i-e)/2),M=l((i-e)/2);switch(a){case"XYX":n.set(u*d,f*m,f*v,u*p);break;case"YZY":n.set(f*v,u*d,f*m,u*p);break;case"ZXZ":n.set(f*m,f*v,u*d,u*p);break;case"XZX":n.set(u*d,f*M,f*S,u*p);break;case"YXY":n.set(f*S,u*d,f*M,u*p);break;case"ZYZ":n.set(f*M,f*S,u*d,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ll={DEG2RAD:Oa,RAD2DEG:Wa,generateUUID:Zs,clamp:gn,euclideanModulo:yf,mapLinear:H0,inverseLerp:G0,lerp:za,damp:V0,pingpong:W0,smoothstep:X0,smootherstep:j0,randInt:Y0,randFloat:q0,randFloatSpread:Z0,seededRandom:K0,degToRad:Q0,radToDeg:J0,isPowerOfTwo:rf,ceilPowerOfTwo:$0,floorPowerOfTwo:Bl,setQuaternionFromProperEuler:ex,normalize:kn,denormalize:Ua};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*a+e.x,this.y=o*a+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,i,a,o,l,u,f,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,l,u,f,p)}set(e,t,i,a,o,l,u,f,p){const d=this.elements;return d[0]=e,d[1]=a,d[2]=u,d[3]=t,d[4]=o,d[5]=f,d[6]=i,d[7]=l,d[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,l=i[0],u=i[3],f=i[6],p=i[1],d=i[4],m=i[7],v=i[2],S=i[5],M=i[8],T=a[0],y=a[3],g=a[6],w=a[1],E=a[4],P=a[7],C=a[2],U=a[5],F=a[8];return o[0]=l*T+u*w+f*C,o[3]=l*y+u*E+f*U,o[6]=l*g+u*P+f*F,o[1]=p*T+d*w+m*C,o[4]=p*y+d*E+m*U,o[7]=p*g+d*P+m*F,o[2]=v*T+S*w+M*C,o[5]=v*y+S*E+M*U,o[8]=v*g+S*P+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],l=e[4],u=e[5],f=e[6],p=e[7],d=e[8];return t*l*d-t*u*p-i*o*d+i*u*f+a*o*p-a*l*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],l=e[4],u=e[5],f=e[6],p=e[7],d=e[8],m=d*l-u*p,v=u*f-d*o,S=p*o-l*f,M=t*m+i*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=m*T,e[1]=(a*p-d*i)*T,e[2]=(u*i-a*l)*T,e[3]=v*T,e[4]=(d*t-a*f)*T,e[5]=(a*o-u*t)*T,e[6]=S*T,e[7]=(i*f-p*t)*T,e[8]=(l*t-i*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,l,u){const f=Math.cos(o),p=Math.sin(o);return this.set(i*f,i*p,-i*(f*l+p*u)+l+e,-a*p,a*f,-a*(-p*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new dt;function iv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Wd={};function Ba(n){n in Wd||(Wd[n]=!0,console.warn(n))}function ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tx=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),nx=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ix(n){return n.convertSRGBToLinear().applyMatrix3(nx)}function rx(n){return n.applyMatrix3(tx).convertLinearToSRGB()}const sx={[zi]:n=>n,[ct]:n=>n.convertSRGBToLinear(),[nv]:ix},ax={[zi]:n=>n,[ct]:n=>n.convertLinearToSRGB(),[nv]:rx},gi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return zi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=sx[e],a=ax[t];if(i===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ds;class rv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Xa("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let l=0;l<o.length;l++)o[l]=ks(o[l]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ks(t[i]/255)*255):t[i]=ks(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class sv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let l=0,u=a.length;l<u;l++)a[l].isDataTexture?o.push(dc(a[l].image)):o.push(dc(a[l]))}else o=dc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;class Xt extends sr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Hn,a=Hn,o=Ve,l=Va,u=Wt,f=It,p=Xt.DEFAULT_ANISOTROPY,d=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Zs(),this.name="",this.source=new sv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=l,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ti?ct:Ar),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Ti:Hl}set encoding(e){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?ct:Ar}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=qm;Xt.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*a+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*a+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*a+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const f=e.elements,p=f[0],d=f[4],m=f[8],v=f[1],S=f[5],M=f[9],T=f[2],y=f[6],g=f[10];if(Math.abs(d-v)<.01&&Math.abs(m-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(d+v)<.1&&Math.abs(m+T)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(p+1)/2,P=(S+1)/2,C=(g+1)/2,U=(d+v)/4,F=(m+T)/4,Z=(M+y)/4;return E>P&&E>C?E<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(E),a=U/i,o=F/i):P>C?P<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),i=U/a,o=Z/a):C<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(C),i=F/o,a=Z/o),this.set(i,a,o,t),this}let w=Math.sqrt((y-M)*(y-M)+(m-T)*(m-T)+(v-d)*(v-d));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(m-T)/w,this.z=(v-d)/w,this.w=Math.acos((p+S+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gt extends sr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ti?ct:Ar),this.texture=new Xt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ve,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class av extends Xt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=at,this.minFilter=at,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka extends Xt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=at,this.minFilter=at,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ov extends gt{constructor(e=1,t=1,i=1,a={}){super(e,t,a),this.isWebGLMultipleRenderTargets=!0;const o=this.texture;this.texture=[];for(let l=0;l<i;l++)this.texture[l]=o.clone(),this.texture[l].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.texture.length;a<o;a++)this.texture[a].image.width=e,this.texture[a].image.height=t,this.texture[a].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Bi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,l,u){let f=i[a+0],p=i[a+1],d=i[a+2],m=i[a+3];const v=o[l+0],S=o[l+1],M=o[l+2],T=o[l+3];if(u===0){e[t+0]=f,e[t+1]=p,e[t+2]=d,e[t+3]=m;return}if(u===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=T;return}if(m!==T||f!==v||p!==S||d!==M){let y=1-u;const g=f*v+p*S+d*M+m*T,w=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const C=Math.sqrt(E),U=Math.atan2(C,g*w);y=Math.sin(y*U)/C,u=Math.sin(u*U)/C}const P=u*w;if(f=f*y+v*P,p=p*y+S*P,d=d*y+M*P,m=m*y+T*P,y===1-u){const C=1/Math.sqrt(f*f+p*p+d*d+m*m);f*=C,p*=C,d*=C,m*=C}}e[t]=f,e[t+1]=p,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,o,l){const u=i[a],f=i[a+1],p=i[a+2],d=i[a+3],m=o[l],v=o[l+1],S=o[l+2],M=o[l+3];return e[t]=u*M+d*m+f*S-p*v,e[t+1]=f*M+d*v+p*m-u*S,e[t+2]=p*M+d*S+u*v-f*m,e[t+3]=d*M-u*m-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,p=u(i/2),d=u(a/2),m=u(o/2),v=f(i/2),S=f(a/2),M=f(o/2);switch(l){case"XYZ":this._x=v*d*m+p*S*M,this._y=p*S*m-v*d*M,this._z=p*d*M+v*S*m,this._w=p*d*m-v*S*M;break;case"YXZ":this._x=v*d*m+p*S*M,this._y=p*S*m-v*d*M,this._z=p*d*M-v*S*m,this._w=p*d*m+v*S*M;break;case"ZXY":this._x=v*d*m-p*S*M,this._y=p*S*m+v*d*M,this._z=p*d*M+v*S*m,this._w=p*d*m-v*S*M;break;case"ZYX":this._x=v*d*m-p*S*M,this._y=p*S*m+v*d*M,this._z=p*d*M-v*S*m,this._w=p*d*m+v*S*M;break;case"YZX":this._x=v*d*m+p*S*M,this._y=p*S*m+v*d*M,this._z=p*d*M-v*S*m,this._w=p*d*m-v*S*M;break;case"XZY":this._x=v*d*m-p*S*M,this._y=p*S*m-v*d*M,this._z=p*d*M+v*S*m,this._w=p*d*m+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],l=t[1],u=t[5],f=t[9],p=t[2],d=t[6],m=t[10],v=i+u+m;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(d-f)*S,this._y=(o-p)*S,this._z=(l-a)*S}else if(i>u&&i>m){const S=2*Math.sqrt(1+i-u-m);this._w=(d-f)/S,this._x=.25*S,this._y=(a+l)/S,this._z=(o+p)/S}else if(u>m){const S=2*Math.sqrt(1+u-i-m);this._w=(o-p)/S,this._x=(a+l)/S,this._y=.25*S,this._z=(f+d)/S}else{const S=2*Math.sqrt(1+m-i-u);this._w=(l-a)/S,this._x=(o+p)/S,this._y=(f+d)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,l=e._w,u=t._x,f=t._y,p=t._z,d=t._w;return this._x=i*d+l*u+a*p-o*f,this._y=a*d+l*f+o*u-i*p,this._z=o*d+l*p+i*f-a*u,this._w=l*d-i*u-a*f-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+a*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=a,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const S=1-t;return this._w=S*l+t*this._w,this._x=S*i+t*this._x,this._y=S*a+t*this._y,this._z=S*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(f),d=Math.atan2(p,u),m=Math.sin((1-t)*d)/p,v=Math.sin(t*d)/p;return this._w=l*m+this._w*v,this._x=i*m+this._x*v,this._y=a*m+this._y*v,this._z=o*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(o),i*Math.cos(o),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,l=e.y,u=e.z,f=e.w,p=f*t+l*a-u*i,d=f*i+u*t-o*a,m=f*a+o*i-l*t,v=-o*t-l*i-u*a;return this.x=p*f+v*-o+d*-u-m*-l,this.y=d*f+v*-l+m*-o-p*-u,this.z=m*f+v*-u+p*-l-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,l=t.x,u=t.y,f=t.z;return this.x=a*f-o*u,this.y=o*l-i*f,this.z=i*u-a*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new O,Xd=new Bi;class qa{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox),ps.applyMatrix4(e.matrixWorld),this.union(ps);else{const a=e.geometry;if(a!==void 0)if(t&&a.attributes!==void 0&&a.attributes.position!==void 0){const o=a.attributes.position;for(let l=0,u=o.count;l<u;l++)Yi.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else a.boundingBox===null&&a.computeBoundingBox(),ps.copy(a.boundingBox),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const i=e.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),$o.subVectors(this.max,_a),ms.subVectors(e.a,_a),vs.subVectors(e.b,_a),gs.subVectors(e.c,_a),xr.subVectors(vs,ms),Sr.subVectors(gs,vs),Fr.subVectors(ms,gs);let t=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-Fr.z,Fr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,Fr.z,0,-Fr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-Fr.y,Fr.x,0];return!mc(t,ms,vs,gs,$o)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,ms,vs,gs,$o))?!1:(el.crossVectors(xr,Sr),t=[el.x,el.y,el.z],mc(t,ms,vs,gs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new O,new O,new O,new O,new O,new O,new O,new O],Yi=new O,ps=new qa,ms=new O,vs=new O,gs=new O,xr=new O,Sr=new O,Fr=new O,_a=new O,$o=new O,el=new O,Or=new O;function mc(n,e,t,i,a){for(let o=0,l=n.length-3;o<=l;o+=3){Or.fromArray(n,o);const u=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),f=e.dot(Or),p=t.dot(Or),d=i.dot(Or);if(Math.max(-Math.max(f,p,d),Math.min(f,p,d))>u)return!1}return!0}const ux=new qa,Ma=new O,vc=new O;class Ks{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ux.setFromPoints(e).getCenter(i);let a=0;for(let o=0,l=e.length;o<l;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ma,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(vc)),this.expandByPoint(Ma.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new O,gc=new O,tl=new O,yr=new O,xc=new O,nl=new O,Sc=new O;class Gl{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){gc.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(gc);const o=e.distanceTo(t)*.5,l=-this.direction.dot(tl),u=yr.dot(this.direction),f=-yr.dot(tl),p=yr.lengthSq(),d=Math.abs(1-l*l);let m,v,S,M;if(d>0)if(m=l*f-u,v=l*u-f,M=o*d,m>=0)if(v>=-M)if(v<=M){const T=1/d;m*=T,v*=T,S=m*(m+l*v+2*u)+v*(l*m+v+2*f)+p}else v=o,m=Math.max(0,-(l*v+u)),S=-m*m+v*(v+2*f)+p;else v=-o,m=Math.max(0,-(l*v+u)),S=-m*m+v*(v+2*f)+p;else v<=-M?(m=Math.max(0,-(-l*o+u)),v=m>0?-o:Math.min(Math.max(-o,-f),o),S=-m*m+v*(v+2*f)+p):v<=M?(m=0,v=Math.min(Math.max(-o,-f),o),S=v*(v+2*f)+p):(m=Math.max(0,-(l*o+u)),v=m>0?o:Math.min(Math.max(-o,-f),o),S=-m*m+v*(v+2*f)+p);else v=l>0?-o:o,m=Math.max(0,-(l*v+u)),S=-m*m+v*(v+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(gc).addScaledVector(tl,v),S}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),a=qi.dot(qi)-i*i,o=e.radius*e.radius;if(a>o)return null;const l=Math.sqrt(o-a),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,l,u,f;const p=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(i=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(i=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),d>=0?(o=(e.min.y-v.y)*d,l=(e.max.y-v.y)*d):(o=(e.max.y-v.y)*d,l=(e.min.y-v.y)*d),i>l||o>a||((o>i||isNaN(i))&&(i=o),(l<a||isNaN(a))&&(a=l),m>=0?(u=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),i>f||u>a)||((u>i||i!==i)&&(i=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,a,o){xc.subVectors(t,e),nl.subVectors(i,e),Sc.crossVectors(xc,nl);let l=this.direction.dot(Sc),u;if(l>0){if(a)return null;u=1}else if(l<0)u=-1,l=-l;else return null;yr.subVectors(this.origin,e);const f=u*this.direction.dot(nl.crossVectors(yr,nl));if(f<0)return null;const p=u*this.direction.dot(xc.cross(yr));if(p<0||f+p>l)return null;const d=-u*yr.dot(Sc);return d<0?null:this.at(d/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,i,a,o,l,u,f,p,d,m,v,S,M,T,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,l,u,f,p,d,m,v,S,M,T,y)}set(e,t,i,a,o,l,u,f,p,d,m,v,S,M,T,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=o,g[5]=l,g[9]=u,g[13]=f,g[2]=p,g[6]=d,g[10]=m,g[14]=v,g[3]=S,g[7]=M,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/xs.setFromMatrixColumn(e,0).length(),o=1/xs.setFromMatrixColumn(e,1).length(),l=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(a),p=Math.sin(a),d=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const v=l*d,S=l*m,M=u*d,T=u*m;t[0]=f*d,t[4]=-f*m,t[8]=p,t[1]=S+M*p,t[5]=v-T*p,t[9]=-u*f,t[2]=T-v*p,t[6]=M+S*p,t[10]=l*f}else if(e.order==="YXZ"){const v=f*d,S=f*m,M=p*d,T=p*m;t[0]=v+T*u,t[4]=M*u-S,t[8]=l*p,t[1]=l*m,t[5]=l*d,t[9]=-u,t[2]=S*u-M,t[6]=T+v*u,t[10]=l*f}else if(e.order==="ZXY"){const v=f*d,S=f*m,M=p*d,T=p*m;t[0]=v-T*u,t[4]=-l*m,t[8]=M+S*u,t[1]=S+M*u,t[5]=l*d,t[9]=T-v*u,t[2]=-l*p,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const v=l*d,S=l*m,M=u*d,T=u*m;t[0]=f*d,t[4]=M*p-S,t[8]=v*p+T,t[1]=f*m,t[5]=T*p+v,t[9]=S*p-M,t[2]=-p,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const v=l*f,S=l*p,M=u*f,T=u*p;t[0]=f*d,t[4]=T-v*m,t[8]=M*m+S,t[1]=m,t[5]=l*d,t[9]=-u*d,t[2]=-p*d,t[6]=S*m+M,t[10]=v-T*m}else if(e.order==="XZY"){const v=l*f,S=l*p,M=u*f,T=u*p;t[0]=f*d,t[4]=-m,t[8]=p*d,t[1]=v*m+T,t[5]=l*d,t[9]=S*m-M,t[2]=M*m-S,t[6]=u*d,t[10]=T*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,fx)}lookAt(e,t,i){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),_r.crossVectors(i,Qn),_r.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),_r.crossVectors(i,Qn)),_r.normalize(),il.crossVectors(Qn,_r),a[0]=_r.x,a[4]=il.x,a[8]=Qn.x,a[1]=_r.y,a[5]=il.y,a[9]=Qn.y,a[2]=_r.z,a[6]=il.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,l=i[0],u=i[4],f=i[8],p=i[12],d=i[1],m=i[5],v=i[9],S=i[13],M=i[2],T=i[6],y=i[10],g=i[14],w=i[3],E=i[7],P=i[11],C=i[15],U=a[0],F=a[4],Z=a[8],A=a[12],D=a[1],V=a[5],ae=a[9],j=a[13],$=a[2],ie=a[6],fe=a[10],se=a[14],I=a[3],G=a[7],X=a[11],z=a[15];return o[0]=l*U+u*D+f*$+p*I,o[4]=l*F+u*V+f*ie+p*G,o[8]=l*Z+u*ae+f*fe+p*X,o[12]=l*A+u*j+f*se+p*z,o[1]=d*U+m*D+v*$+S*I,o[5]=d*F+m*V+v*ie+S*G,o[9]=d*Z+m*ae+v*fe+S*X,o[13]=d*A+m*j+v*se+S*z,o[2]=M*U+T*D+y*$+g*I,o[6]=M*F+T*V+y*ie+g*G,o[10]=M*Z+T*ae+y*fe+g*X,o[14]=M*A+T*j+y*se+g*z,o[3]=w*U+E*D+P*$+C*I,o[7]=w*F+E*V+P*ie+C*G,o[11]=w*Z+E*ae+P*fe+C*X,o[15]=w*A+E*j+P*se+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],l=e[1],u=e[5],f=e[9],p=e[13],d=e[2],m=e[6],v=e[10],S=e[14],M=e[3],T=e[7],y=e[11],g=e[15];return M*(+o*f*m-a*p*m-o*u*v+i*p*v+a*u*S-i*f*S)+T*(+t*f*S-t*p*v+o*l*v-a*l*S+a*p*d-o*f*d)+y*(+t*p*m-t*u*S-o*l*m+i*l*S+o*u*d-i*p*d)+g*(-a*u*d-t*f*m+t*u*v+a*l*m-i*l*v+i*f*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],l=e[4],u=e[5],f=e[6],p=e[7],d=e[8],m=e[9],v=e[10],S=e[11],M=e[12],T=e[13],y=e[14],g=e[15],w=m*y*p-T*v*p+T*f*S-u*y*S-m*f*g+u*v*g,E=M*v*p-d*y*p-M*f*S+l*y*S+d*f*g-l*v*g,P=d*T*p-M*m*p+M*u*S-l*T*S-d*u*g+l*m*g,C=M*m*f-d*T*f-M*u*v+l*T*v+d*u*y-l*m*y,U=t*w+i*E+a*P+o*C;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=w*F,e[1]=(T*v*o-m*y*o-T*a*S+i*y*S+m*a*g-i*v*g)*F,e[2]=(u*y*o-T*f*o+T*a*p-i*y*p-u*a*g+i*f*g)*F,e[3]=(m*f*o-u*v*o-m*a*p+i*v*p+u*a*S-i*f*S)*F,e[4]=E*F,e[5]=(d*y*o-M*v*o+M*a*S-t*y*S-d*a*g+t*v*g)*F,e[6]=(M*f*o-l*y*o-M*a*p+t*y*p+l*a*g-t*f*g)*F,e[7]=(l*v*o-d*f*o+d*a*p-t*v*p-l*a*S+t*f*S)*F,e[8]=P*F,e[9]=(M*m*o-d*T*o-M*i*S+t*T*S+d*i*g-t*m*g)*F,e[10]=(l*T*o-M*u*o+M*i*p-t*T*p-l*i*g+t*u*g)*F,e[11]=(d*u*o-l*m*o-d*i*p+t*m*p+l*i*S-t*u*S)*F,e[12]=C*F,e[13]=(d*T*a-M*m*a+M*i*v-t*T*v-d*i*y+t*m*y)*F,e[14]=(M*u*a-l*T*a-M*i*f+t*T*f+l*i*y-t*u*y)*F,e[15]=(l*m*a-d*u*a+d*i*f-t*m*f-l*i*v+t*u*v)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,l=e.x,u=e.y,f=e.z,p=o*l,d=o*u;return this.set(p*l+i,p*u-a*f,p*f+a*u,0,p*u+a*f,d*u+i,d*f-a*l,0,p*f-a*u,d*f+a*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,l){return this.set(1,i,o,0,e,1,l,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,l=t._y,u=t._z,f=t._w,p=o+o,d=l+l,m=u+u,v=o*p,S=o*d,M=o*m,T=l*d,y=l*m,g=u*m,w=f*p,E=f*d,P=f*m,C=i.x,U=i.y,F=i.z;return a[0]=(1-(T+g))*C,a[1]=(S+P)*C,a[2]=(M-E)*C,a[3]=0,a[4]=(S-P)*U,a[5]=(1-(v+g))*U,a[6]=(y+w)*U,a[7]=0,a[8]=(M+E)*F,a[9]=(y-w)*F,a[10]=(1-(v+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=xs.set(a[0],a[1],a[2]).length();const l=xs.set(a[4],a[5],a[6]).length(),u=xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],xi.copy(this);const p=1/o,d=1/l,m=1/u;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=d,xi.elements[5]*=d,xi.elements[6]*=d,xi.elements[8]*=m,xi.elements[9]*=m,xi.elements[10]*=m,t.setFromRotationMatrix(xi),i.x=o,i.y=l,i.z=u,this}makePerspective(e,t,i,a,o,l,u=er){const f=this.elements,p=2*o/(t-e),d=2*o/(i-a),m=(t+e)/(t-e),v=(i+a)/(i-a);let S,M;if(u===er)S=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(u===zl)S=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=d,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,l,u=er){const f=this.elements,p=1/(t-e),d=1/(i-a),m=1/(l-o),v=(t+e)*p,S=(i+a)*d;let M,T;if(u===er)M=(l+o)*m,T=-2*m;else if(u===zl)M=o*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*d,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xs=new O,xi=new Ze,cx=new O(0,0,0),fx=new O(1,1,1),_r=new O,il=new O,Qn=new O,jd=new Ze,Yd=new Bi;class Za{constructor(e=0,t=0,i=0,a=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],l=a[4],u=a[8],f=a[1],p=a[5],d=a[9],m=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,S),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-gn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,p),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-d,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class Hs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hx=0;const qd=new O,Ss=new Bi,Zi=new Ze,rl=new O,Ea=new O,dx=new O,px=new Bi,Zd=new O(1,0,0),Kd=new O(0,1,0),Qd=new O(0,0,1),mx={type:"added"},Jd={type:"removed"};class Gn extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new O,t=new Za,i=new Bi,a=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ze},normalMatrix:{value:new dt}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rl.copy(e):rl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ea,rl,this.up):Zi.lookAt(rl,Ea,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Ss.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let a=0,o=this.children.length;a<o;a++){const l=this.children[a].getObjectsByProperty(e,t);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let o=0,l=a.length;o<l;o++){const u=a[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let p=0,d=f.length;p<d;p++){const m=f[p];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,p=this.material.length;f<p;f++)u.push(o(e.materials,this.material[f]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(o(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),p=l(e.textures),d=l(e.images),m=l(e.shapes),v=l(e.skeletons),S=l(e.animations),M=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),M.length>0&&(i.nodes=M)}return i.object=a,i;function l(u){const f=[];for(const p in u){const d=u[p];delete d.metadata,f.push(d)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Gn.DEFAULT_UP=new O(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new O,Ki=new O,yc=new O,Qi=new O,ys=new O,_s=new O,$d=new O,_c=new O,Mc=new O,Ec=new O;let sl=!1;class Mi{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Si.subVectors(e,t),a.cross(Si);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Si.subVectors(a,t),Ki.subVectors(i,t),yc.subVectors(e,t);const l=Si.dot(Si),u=Si.dot(Ki),f=Si.dot(yc),p=Ki.dot(Ki),d=Ki.dot(yc),m=l*p-u*u;if(m===0)return o.set(-2,-1,-1);const v=1/m,S=(p*f-u*d)*v,M=(l*d-u*f)*v;return o.set(1-S-M,M,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Qi),Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,a,o,l,u,f){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),this.getInterpolation(e,t,i,a,o,l,u,f)}static getInterpolation(e,t,i,a,o,l,u,f){return this.getBarycoord(e,t,i,a,Qi),f.setScalar(0),f.addScaledVector(o,Qi.x),f.addScaledVector(l,Qi.y),f.addScaledVector(u,Qi.z),f}static isFrontFacing(e,t,i,a){return Si.subVectors(i,t),Ki.subVectors(e,t),Si.cross(Ki).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Si.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,o){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),Mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}getInterpolation(e,t,i,a,o){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let l,u;ys.subVectors(a,i),_s.subVectors(o,i),_c.subVectors(e,i);const f=ys.dot(_c),p=_s.dot(_c);if(f<=0&&p<=0)return t.copy(i);Mc.subVectors(e,a);const d=ys.dot(Mc),m=_s.dot(Mc);if(d>=0&&m<=d)return t.copy(a);const v=f*m-d*p;if(v<=0&&f>=0&&d<=0)return l=f/(f-d),t.copy(i).addScaledVector(ys,l);Ec.subVectors(e,o);const S=ys.dot(Ec),M=_s.dot(Ec);if(M>=0&&S<=M)return t.copy(o);const T=S*p-f*M;if(T<=0&&p>=0&&M<=0)return u=p/(p-M),t.copy(i).addScaledVector(_s,u);const y=d*M-S*m;if(y<=0&&m-d>=0&&S-M>=0)return $d.subVectors(o,a),u=(m-d)/(m-d+(S-M)),t.copy(a).addScaledVector($d,u);const g=1/(y+T+v);return l=T*g,u=v*g,t.copy(i).addScaledVector(ys,l).addScaledVector(_s,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vx=0;class ar extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Bs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=km,this.blendDst=Hm,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cc,this.stencilZFail=cc,this.stencilZPass=cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(t){const o=a(e.textures),l=a(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},al={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=gi.workingColorSpace){return this.r=e,this.g=t,this.b=i,gi.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=gi.workingColorSpace){if(e=yf(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=Tc(l,o,e+1/3),this.g=Tc(l,o,e),this.b=Tc(l,o,e-1/3)}return gi.toWorkingColorSpace(this,a),this}setStyle(e,t=ct){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=a[1],u=a[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return gi.fromWorkingColorSpace(Ln.copy(this),e),Math.round(gn(Ln.r*255,0,255))*65536+Math.round(gn(Ln.g*255,0,255))*256+Math.round(gn(Ln.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gi.workingColorSpace){gi.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,a=Ln.g,o=Ln.b,l=Math.max(i,a,o),u=Math.min(i,a,o);let f,p;const d=(u+l)/2;if(u===l)f=0,p=0;else{const m=l-u;switch(p=d<=.5?m/(l+u):m/(2-l-u),l){case i:f=(a-o)/m+(a<o?6:0);break;case a:f=(o-i)/m+2;break;case o:f=(i-a)/m+4;break}f/=6}return e.h=f,e.s=p,e.l=d,e}getRGB(e,t=gi.workingColorSpace){return gi.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ct){gi.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,a=Ln.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),yi.h+=e,yi.s+=t,yi.l+=i,this.setHSL(yi.h,yi.s,yi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(al);const i=za(yi.h,al.h,t),a=za(yi.s,al.s,t),o=za(yi.l,al.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new qe;qe.NAMES=lv;class uv extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new O,ol=new ve;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gd,this.updateRange={offset:0,count:-1},this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),a=kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),i=kn(i,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class cv extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fv extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tr extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gx=0;const ci=new Ze,wc=new Gn,Ms=new O,Jn=new qa,Ta=new qa,vn=new O;class ti extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?fv:cv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new dt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new tr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Ta.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(Jn.min,Ta.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Ta.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Ta.min),Jn.expandByPoint(Ta.max))}Jn.getCenter(i);let a=0;for(let o=0,l=e.count;o<l;o++)vn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(vn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],f=this.morphTargetsRelative;for(let p=0,d=u.count;p<d;p++)vn.fromBufferAttribute(u,p),f&&(Ms.fromBufferAttribute(e,p),vn.add(Ms)),a=Math.max(a,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,o=t.normal.array,l=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,p=[],d=[];for(let D=0;D<u;D++)p[D]=new O,d[D]=new O;const m=new O,v=new O,S=new O,M=new ve,T=new ve,y=new ve,g=new O,w=new O;function E(D,V,ae){m.fromArray(a,D*3),v.fromArray(a,V*3),S.fromArray(a,ae*3),M.fromArray(l,D*2),T.fromArray(l,V*2),y.fromArray(l,ae*2),v.sub(m),S.sub(m),T.sub(M),y.sub(M);const j=1/(T.x*y.y-y.x*T.y);isFinite(j)&&(g.copy(v).multiplyScalar(y.y).addScaledVector(S,-T.y).multiplyScalar(j),w.copy(S).multiplyScalar(T.x).addScaledVector(v,-y.x).multiplyScalar(j),p[D].add(g),p[V].add(g),p[ae].add(g),d[D].add(w),d[V].add(w),d[ae].add(w))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let D=0,V=P.length;D<V;++D){const ae=P[D],j=ae.start,$=ae.count;for(let ie=j,fe=j+$;ie<fe;ie+=3)E(i[ie+0],i[ie+1],i[ie+2])}const C=new O,U=new O,F=new O,Z=new O;function A(D){F.fromArray(o,D*3),Z.copy(F);const V=p[D];C.copy(V),C.sub(F.multiplyScalar(F.dot(V))).normalize(),U.crossVectors(Z,V);const j=U.dot(d[D])<0?-1:1;f[D*4]=C.x,f[D*4+1]=C.y,f[D*4+2]=C.z,f[D*4+3]=j}for(let D=0,V=P.length;D<V;++D){const ae=P[D],j=ae.start,$=ae.count;for(let ie=j,fe=j+$;ie<fe;ie+=3)A(i[ie+0]),A(i[ie+1]),A(i[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const a=new O,o=new O,l=new O,u=new O,f=new O,p=new O,d=new O,m=new O;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,y),d.subVectors(l,o),m.subVectors(a,o),d.cross(m),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,y),u.add(d),f.add(d),p.add(d),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),d.subVectors(l,o),m.subVectors(a,o),d.cross(m),i.setXYZ(v+0,d.x,d.y,d.z),i.setXYZ(v+1,d.x,d.y,d.z),i.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(u,f){const p=u.array,d=u.itemSize,m=u.normalized,v=new p.constructor(f.length*d);let S=0,M=0;for(let T=0,y=f.length;T<y;T++){u.isInterleavedBufferAttribute?S=f[T]*u.data.stride+u.offset:S=f[T]*d;for(let g=0;g<d;g++)v[M++]=p[S++]}return new kt(v,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,a=this.attributes;for(const u in a){const f=a[u],p=e(f,i);t.setAttribute(u,p)}const o=this.morphAttributes;for(const u in o){const f=[],p=o[u];for(let d=0,m=p.length;d<m;d++){const v=p[d],S=e(v,i);f.push(S)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const p=l[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let o=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],d=[];for(let m=0,v=p.length;m<v;m++){const S=p[m];d.push(S.toJSON(e.data))}d.length>0&&(a[f]=d,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const p in a){const d=a[p];this.setAttribute(p,d.clone(t))}const o=e.morphAttributes;for(const p in o){const d=[],m=o[p];for(let v=0,S=m.length;v<S;v++)d.push(m[v].clone(t));this.morphAttributes[p]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,d=l.length;p<d;p++){const m=l[p];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new Ze,zr=new Gl,ll=new Ks,tp=new O,Es=new O,Ts=new O,ws=new O,Ac=new O,ul=new O,cl=new ve,fl=new ve,hl=new ve,np=new O,ip=new O,rp=new O,dl=new O,pl=new O;class hi extends Gn{constructor(e=new ti,t=new uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=a.length;o<l;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){ul.set(0,0,0);for(let f=0,p=o.length;f<p;f++){const d=u[f],m=o[f];d!==0&&(Ac.fromBufferAttribute(m,e),l?ul.addScaledVector(Ac,d):ul.addScaledVector(Ac.sub(t),d))}t.add(ul)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(o),zr.copy(e.ray).recast(e.near),!(ll.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ll,tp)===null||zr.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(o).invert(),zr.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,i){let a;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,p=o.attributes.uv,d=o.attributes.uv1,m=o.attributes.normal,v=o.groups,S=o.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,T=v.length;M<T;M++){const y=v[M],g=l[y.materialIndex],w=Math.max(y.start,S.start),E=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let P=w,C=E;P<C;P+=3){const U=u.getX(P),F=u.getX(P+1),Z=u.getX(P+2);a=ml(this,g,e,i,p,d,m,U,F,Z),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(u.count,S.start+S.count);for(let y=M,g=T;y<g;y+=3){const w=u.getX(y),E=u.getX(y+1),P=u.getX(y+2);a=ml(this,l,e,i,p,d,m,w,E,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,T=v.length;M<T;M++){const y=v[M],g=l[y.materialIndex],w=Math.max(y.start,S.start),E=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=w,C=E;P<C;P+=3){const U=P,F=P+1,Z=P+2;a=ml(this,g,e,i,p,d,m,U,F,Z),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=M,g=T;y<g;y+=3){const w=y,E=y+1,P=y+2;a=ml(this,l,e,i,p,d,m,w,E,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function xx(n,e,t,i,a,o,l,u){let f;if(e.side===xn?f=i.intersectTriangle(l,o,a,!0,u):f=i.intersectTriangle(a,o,l,e.side===nr,u),f===null)return null;pl.copy(u),pl.applyMatrix4(n.matrixWorld);const p=t.ray.origin.distanceTo(pl);return p<t.near||p>t.far?null:{distance:p,point:pl.clone(),object:n}}function ml(n,e,t,i,a,o,l,u,f,p){n.getVertexPosition(u,Es),n.getVertexPosition(f,Ts),n.getVertexPosition(p,ws);const d=xx(n,e,t,i,Es,Ts,ws,dl);if(d){a&&(cl.fromBufferAttribute(a,u),fl.fromBufferAttribute(a,f),hl.fromBufferAttribute(a,p),d.uv=Mi.getInterpolation(dl,Es,Ts,ws,cl,fl,hl,new ve)),o&&(cl.fromBufferAttribute(o,u),fl.fromBufferAttribute(o,f),hl.fromBufferAttribute(o,p),d.uv1=Mi.getInterpolation(dl,Es,Ts,ws,cl,fl,hl,new ve),d.uv2=d.uv1),l&&(np.fromBufferAttribute(l,u),ip.fromBufferAttribute(l,f),rp.fromBufferAttribute(l,p),d.normal=Mi.getInterpolation(dl,Es,Ts,ws,np,ip,rp,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a:u,b:f,c:p,normal:new O,materialIndex:0};Mi.getNormal(Es,Ts,ws,m.normal),d.face=m}return d}class Ka extends ti{constructor(e=1,t=1,i=1,a=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:l};const u=this;a=Math.floor(a),o=Math.floor(o),l=Math.floor(l);const f=[],p=[],d=[],m=[];let v=0,S=0;M("z","y","x",-1,-1,i,t,e,l,o,0),M("z","y","x",1,-1,i,t,-e,l,o,1),M("x","z","y",1,1,e,i,t,a,l,2),M("x","z","y",1,-1,e,i,-t,a,l,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new tr(p,3)),this.setAttribute("normal",new tr(d,3)),this.setAttribute("uv",new tr(m,2));function M(T,y,g,w,E,P,C,U,F,Z,A){const D=P/F,V=C/Z,ae=P/2,j=C/2,$=U/2,ie=F+1,fe=Z+1;let se=0,I=0;const G=new O;for(let X=0;X<fe;X++){const z=X*V-j;for(let Y=0;Y<ie;Y++){const he=Y*D-ae;G[T]=he*w,G[y]=z*E,G[g]=$,p.push(G.x,G.y,G.z),G[T]=0,G[y]=0,G[g]=U>0?1:-1,d.push(G.x,G.y,G.z),m.push(Y/F),m.push(1-X/Z),se+=1}}for(let X=0;X<Z;X++)for(let z=0;z<F;z++){const Y=v+z+ie*X,he=v+z+ie*(X+1),de=v+(z+1)+ie*(X+1),pe=v+(z+1)+ie*X;f.push(Y,he,pe),f.push(he,de,pe),I+=6}u.addGroup(S,I,A),S+=I,v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const a in i)e[a]=i[a]}return e}function Sx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hv(n){return n.getRenderTarget()===null?n.outputColorSpace:zi}const dv={clone:js,merge:Nn};var yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const l=this.uniforms[a].value;l&&l.isTexture?t.uniforms[a]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[a]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[a]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[a]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[a]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[a]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[a]={type:"m4",value:l.toArray()}:t.uniforms[a]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vl extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Vl{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,p=l.fullHeight;o+=l.offsetX*a/f,t-=l.offsetY*i/p,a*=l.width/f,i*=l.height/p}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Rs=1;class pv extends Gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const a=new _n(As,Rs,e,t);a.layers=this.layers,this.add(a);const o=new _n(As,Rs,e,t);o.layers=this.layers,this.add(o);const l=new _n(As,Rs,e,t);l.layers=this.layers,this.add(l);const u=new _n(As,Rs,e,t);u.layers=this.layers,this.add(u);const f=new _n(As,Rs,e,t);f.layers=this.layers,this.add(f);const p=new _n(As,Rs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,l,u,f]=t;for(const p of t)this.remove(p);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,u,f,p]=this.children,d=e.getRenderTarget(),m=e.toneMapping,v=e.xr.enabled;e.toneMapping=Oi,e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,u),e.setRenderTarget(i,4),e.render(t,f),i.texture.generateMipmaps=S,e.setRenderTarget(i,5),e.render(t,p),e.setRenderTarget(d),e.toneMapping=m,e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class mv extends Xt{constructor(e,t,i,a,o,l,u,f,p,d){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,a,o,l,u,f,p,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?ct:Ar),this.texture=new mv(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ve}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ka(5,5,5),o=new pt({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Gt});o.uniforms.tEquirect.value=t;const l=new hi(a,o),u=t.minFilter;return t.minFilter===Va&&(t.minFilter=Ve),new pv(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,a);e.setRenderTarget(o)}}const Rc=new O,Mx=new O,Ex=new dt;let Hr=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Rc.subVectors(i,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ex.getNormalMatrix(e),a=this.coplanarPoint(Rc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Br=new Ks,vl=new O;class vv{constructor(e=new Hr,t=new Hr,i=new Hr,a=new Hr,o=new Hr,l=new Hr){this.planes=[e,t,i,a,o,l]}set(e,t,i,a,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=er){const i=this.planes,a=e.elements,o=a[0],l=a[1],u=a[2],f=a[3],p=a[4],d=a[5],m=a[6],v=a[7],S=a[8],M=a[9],T=a[10],y=a[11],g=a[12],w=a[13],E=a[14],P=a[15];if(i[0].setComponents(f-o,v-p,y-S,P-g).normalize(),i[1].setComponents(f+o,v+p,y+S,P+g).normalize(),i[2].setComponents(f+l,v+d,y+M,P+w).normalize(),i[3].setComponents(f-l,v-d,y-M,P-w).normalize(),i[4].setComponents(f-u,v-m,y-T,P-E).normalize(),t===er)i[5].setComponents(f+u,v+m,y+T,P+E).normalize();else if(t===zl)i[5].setComponents(u,m,T,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gv(){let n=null,e=!1,t=null,i=null;function a(o,l){t(o,l),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Tx(n,e){const t=e.isWebGL2,i=new WeakMap;function a(p,d){const m=p.array,v=p.usage,S=n.createBuffer();n.bindBuffer(d,S),n.bufferData(d,m,v),p.onUploadCallback();let M;if(m instanceof Float32Array)M=n.FLOAT;else if(m instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=n.SHORT;else if(m instanceof Uint32Array)M=n.UNSIGNED_INT;else if(m instanceof Int32Array)M=n.INT;else if(m instanceof Int8Array)M=n.BYTE;else if(m instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version}}function o(p,d,m){const v=d.array,S=d.updateRange;n.bindBuffer(m,p),S.count===-1?n.bufferSubData(m,0,v):(t?n.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):n.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),d.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const d=i.get(p);d&&(n.deleteBuffer(d.buffer),i.delete(p))}function f(p,d){if(p.isGLBufferAttribute){const v=i.get(p);(!v||v.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m===void 0?i.set(p,a(p,d)):m.version<p.version&&(o(m.buffer,p,d),m.version=p.version)}return{get:l,remove:u,update:f}}class Wl extends ti{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,l=t/2,u=Math.floor(i),f=Math.floor(a),p=u+1,d=f+1,m=e/u,v=t/f,S=[],M=[],T=[],y=[];for(let g=0;g<d;g++){const w=g*v-l;for(let E=0;E<p;E++){const P=E*m-o;M.push(P,-w,0),T.push(0,0,1),y.push(E/u),y.push(1-g/f)}}for(let g=0;g<f;g++)for(let w=0;w<u;w++){const E=w+p*g,P=w+p*(g+1),C=w+1+p*(g+1),U=w+1+p*g;S.push(E,P,U),S.push(P,C,U)}this.setIndex(S),this.setAttribute("position",new tr(M,3)),this.setAttribute("normal",new tr(T,3)),this.setAttribute("uv",new tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,MS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ES=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bS=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,US=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:wx,alphahash_pars_fragment:Ax,alphamap_fragment:Rx,alphamap_pars_fragment:Px,alphatest_fragment:Cx,alphatest_pars_fragment:bx,aomap_fragment:Dx,aomap_pars_fragment:Lx,begin_vertex:Ux,beginnormal_vertex:Ix,bsdfs:Nx,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Wx,color_vertex:Xx,common:jx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Kx,emissivemap_fragment:Qx,emissivemap_pars_fragment:Jx,colorspace_fragment:$x,colorspace_pars_fragment:eS,envmap_fragment:tS,envmap_common_pars_fragment:nS,envmap_pars_fragment:iS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:vS,envmap_vertex:sS,fog_vertex:aS,fog_pars_vertex:oS,fog_fragment:lS,fog_pars_fragment:uS,gradientmap_pars_fragment:cS,lightmap_fragment:fS,lightmap_pars_fragment:hS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:pS,lights_pars_begin:mS,lights_toon_fragment:gS,lights_toon_pars_fragment:xS,lights_phong_fragment:SS,lights_phong_pars_fragment:yS,lights_physical_fragment:_S,lights_physical_pars_fragment:MS,lights_fragment_begin:ES,lights_fragment_maps:TS,lights_fragment_end:wS,logdepthbuf_fragment:AS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:CS,map_fragment:bS,map_pars_fragment:DS,map_particle_fragment:LS,map_particle_pars_fragment:US,metalnessmap_fragment:IS,metalnessmap_pars_fragment:NS,morphcolor_vertex:FS,morphnormal_vertex:OS,morphtarget_pars_vertex:zS,morphtarget_vertex:BS,normal_fragment_begin:kS,normal_fragment_maps:HS,normal_pars_fragment:GS,normal_pars_vertex:VS,normal_vertex:WS,normalmap_pars_fragment:XS,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:qS,iridescence_pars_fragment:ZS,opaque_fragment:KS,packing:QS,premultiplied_alpha_fragment:JS,project_vertex:$S,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:uy,skinning_vertex:cy,skinnormal_vertex:fy,specularmap_fragment:hy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:vy,transmission_pars_fragment:gy,uv_pars_fragment:xy,uv_pars_vertex:Sy,uv_vertex:yy,worldpos_vertex:_y,background_vert:My,background_frag:Ey,backgroundCube_vert:Ty,backgroundCube_frag:wy,cube_vert:Ay,cube_frag:Ry,depth_vert:Py,depth_frag:Cy,distanceRGBA_vert:by,distanceRGBA_frag:Dy,equirect_vert:Ly,equirect_frag:Uy,linedashed_vert:Iy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:zy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:Hy,meshnormal_vert:Gy,meshnormal_frag:Vy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:jy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:Zy,points_vert:Ky,points_frag:Qy,shadow_vert:Jy,shadow_frag:$y,sprite_vert:e_,sprite_frag:t_},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Fi={basic:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Nn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Nn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Nn([ye.points,ye.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Nn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Nn([ye.common,ye.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Nn([ye.sprite,ye.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Nn([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Nn([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Fi.physical={uniforms:Nn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const gl={r:0,b:0,g:0};function n_(n,e,t,i,a,o,l){const u=new qe(0);let f=o===!0?0:1,p,d,m=null,v=0,S=null;function M(y,g){let w=!1,E=g.isScene===!0?g.background:null;switch(E&&E.isTexture&&(E=(g.backgroundBlurriness>0?t:e).get(E)),E===null?T(u,f):E&&E.isColor&&(T(E,1),w=!0),n.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),w=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),w=!0;break}(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===kl)?(d===void 0&&(d=new hi(new Ka(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:js(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=E.colorSpace!==ct,(m!==E||v!==E.version||S!==n.toneMapping)&&(d.material.needsUpdate=!0,m=E,v=E.version,S=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(p===void 0&&(p=new hi(new Wl(2,2),new pt({name:"BackgroundMaterial",uniforms:js(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=E,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=E.colorSpace!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),p.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||v!==E.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,m=E,v=E.version,S=n.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function T(y,g){y.getRGB(gl,hv(n)),i.buffers.color.setClear(gl.r,gl.g,gl.b,g,l)}return{getClearColor:function(){return u},setClearColor:function(y,g=1){u.set(y),f=g,T(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(y){f=y,T(u,f)},render:M}}function i_(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,u={},f=y(null);let p=f,d=!1;function m($,ie,fe,se,I){let G=!1;if(l){const X=T(se,fe,ie);p!==X&&(p=X,S(p.object)),G=g($,se,fe,I),G&&w($,se,fe,I)}else{const X=ie.wireframe===!0;(p.geometry!==se.id||p.program!==fe.id||p.wireframe!==X)&&(p.geometry=se.id,p.program=fe.id,p.wireframe=X,G=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,Z($,ie,fe,se),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function v(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function S($){return i.isWebGL2?n.bindVertexArray($):o.bindVertexArrayOES($)}function M($){return i.isWebGL2?n.deleteVertexArray($):o.deleteVertexArrayOES($)}function T($,ie,fe){const se=fe.wireframe===!0;let I=u[$.id];I===void 0&&(I={},u[$.id]=I);let G=I[ie.id];G===void 0&&(G={},I[ie.id]=G);let X=G[se];return X===void 0&&(X=y(v()),G[se]=X),X}function y($){const ie=[],fe=[],se=[];for(let I=0;I<a;I++)ie[I]=0,fe[I]=0,se[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:fe,attributeDivisors:se,object:$,attributes:{},index:null}}function g($,ie,fe,se){const I=p.attributes,G=ie.attributes;let X=0;const z=fe.getAttributes();for(const Y in z)if(z[Y].location>=0){const de=I[Y];let pe=G[Y];if(pe===void 0&&(Y==="instanceMatrix"&&$.instanceMatrix&&(pe=$.instanceMatrix),Y==="instanceColor"&&$.instanceColor&&(pe=$.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;X++}return p.attributesNum!==X||p.index!==se}function w($,ie,fe,se){const I={},G=ie.attributes;let X=0;const z=fe.getAttributes();for(const Y in z)if(z[Y].location>=0){let de=G[Y];de===void 0&&(Y==="instanceMatrix"&&$.instanceMatrix&&(de=$.instanceMatrix),Y==="instanceColor"&&$.instanceColor&&(de=$.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),I[Y]=pe,X++}p.attributes=I,p.attributesNum=X,p.index=se}function E(){const $=p.newAttributes;for(let ie=0,fe=$.length;ie<fe;ie++)$[ie]=0}function P($){C($,0)}function C($,ie){const fe=p.newAttributes,se=p.enabledAttributes,I=p.attributeDivisors;fe[$]=1,se[$]===0&&(n.enableVertexAttribArray($),se[$]=1),I[$]!==ie&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,ie),I[$]=ie)}function U(){const $=p.newAttributes,ie=p.enabledAttributes;for(let fe=0,se=ie.length;fe<se;fe++)ie[fe]!==$[fe]&&(n.disableVertexAttribArray(fe),ie[fe]=0)}function F($,ie,fe,se,I,G,X){X===!0?n.vertexAttribIPointer($,ie,fe,I,G):n.vertexAttribPointer($,ie,fe,se,I,G)}function Z($,ie,fe,se){if(i.isWebGL2===!1&&($.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const I=se.attributes,G=fe.getAttributes(),X=ie.defaultAttributeValues;for(const z in G){const Y=G[z];if(Y.location>=0){let he=I[z];if(he===void 0&&(z==="instanceMatrix"&&$.instanceMatrix&&(he=$.instanceMatrix),z==="instanceColor"&&$.instanceColor&&(he=$.instanceColor)),he!==void 0){const de=he.normalized,pe=he.itemSize,Re=t.get(he);if(Re===void 0)continue;const Ie=Re.buffer,We=Re.type,xt=Re.bytesPerElement,rn=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||he.gpuType===Zm);if(he.isInterleavedBufferAttribute){const je=he.data,K=je.stride,Tt=he.offset;if(je.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Y.locationSize;Xe++)C(Y.location+Xe,je.meshPerAttribute);$.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)P(Y.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Xe=0;Xe<Y.locationSize;Xe++)F(Y.location+Xe,pe/Y.locationSize,We,de,K*xt,(Tt+pe/Y.locationSize*Xe)*xt,rn)}else{if(he.isInstancedBufferAttribute){for(let je=0;je<Y.locationSize;je++)C(Y.location+je,he.meshPerAttribute);$.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<Y.locationSize;je++)P(Y.location+je);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let je=0;je<Y.locationSize;je++)F(Y.location+je,pe/Y.locationSize,We,de,pe*xt,pe/Y.locationSize*je*xt,rn)}}else if(X!==void 0){const de=X[z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Y.location,de);break;case 3:n.vertexAttrib3fv(Y.location,de);break;case 4:n.vertexAttrib4fv(Y.location,de);break;default:n.vertexAttrib1fv(Y.location,de)}}}}U()}function A(){ae();for(const $ in u){const ie=u[$];for(const fe in ie){const se=ie[fe];for(const I in se)M(se[I].object),delete se[I];delete ie[fe]}delete u[$]}}function D($){if(u[$.id]===void 0)return;const ie=u[$.id];for(const fe in ie){const se=ie[fe];for(const I in se)M(se[I].object),delete se[I];delete ie[fe]}delete u[$.id]}function V($){for(const ie in u){const fe=u[ie];if(fe[$.id]===void 0)continue;const se=fe[$.id];for(const I in se)M(se[I].object),delete se[I];delete fe[$.id]}}function ae(){j(),d=!0,p!==f&&(p=f,S(p.object))}function j(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:m,reset:ae,resetDefaultState:j,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:P,disableUnusedAttributes:U}}function r_(n,e,t,i){const a=i.isWebGL2;let o;function l(p){o=p}function u(p,d){n.drawArrays(o,p,d),t.update(d,o,1)}function f(p,d,m){if(m===0)return;let v,S;if(a)v=n,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](o,p,d,m),t.update(d,o,m)}this.setMode=l,this.render=u,this.renderInstances=f}function s_(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const f=o(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),T=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,P=l||e.has("OES_texture_float"),C=E&&P,U=l?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:M,maxAttributes:T,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:P,floatVertexTextures:C,maxSamples:U}}function a_(n){const e=this;let t=null,i=0,a=!1,o=!1;const l=new Hr,u=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const S=m.length!==0||v||i!==0||a;return a=v,i=m.length,S},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,v){t=d(m,v,0)},this.setState=function(m,v,S){const M=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,g=n.get(m);if(!a||M===null||M.length===0||o&&!y)o?d(null):p();else{const w=o?0:i,E=w*4;let P=g.clippingState||null;f.value=P,P=d(M,v,E,S);for(let C=0;C!==E;++C)P[C]=t[C];g.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(m,v,S,M){const T=m!==null?m.length:0;let y=null;if(T!==0){if(y=f.value,M!==!0||y===null){const g=S+T*4,w=v.matrixWorldInverse;u.getNormalMatrix(w),(y===null||y.length<g)&&(y=new Float32Array(g));for(let E=0,P=S;E!==T;++E,P+=4)l.copy(m[E]).applyMatrix4(w,u),l.normal.toArray(y,P),y[P+3]=l.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function o_(n){let e=new WeakMap;function t(l,u){return u===Jc?l.mapping=Ws:u===$c&&(l.mapping=Xs),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping;if(u===Jc||u===$c)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const p=new _f(f.height/2);return p.fromEquirectangularTexture(n,l),e.set(l,p),l.addEventListener("dispose",a),t(p.texture,l.mapping)}else return null}}return l}function a(l){const u=l.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Mf extends Vl{constructor(e=-1,t=1,i=1,a=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,l=o+p*this.view.width,u-=d*this.view.offsetY,f=u-d*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,sp=[.125,.215,.35,.446,.526,.582],Wr=20,Pc=new Mf,ap=new qe;let Cc=null;const Gr=(1+Math.sqrt(5))/2,Ps=1/Gr,op=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Gr,Ps),new O(0,Gr,-Ps),new O(Ps,0,Gr),new O(-Ps,0,Gr),new O(Gr,Ps,0),new O(-Gr,Ps,0)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Cc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc),e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:ei,format:Wt,colorSpace:zi,depthBuffer:!1},a=lp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(o)),this._blurMaterial=u_(o,e,t)}return a}_compileMaterial(e){const t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,i,a){const u=new _n(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,v=d.toneMapping;d.getClearColor(ap),d.toneMapping=Oi,d.autoClear=!1;const S=new uv({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),M=new hi(new Ka,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(ap),T=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(u.up.set(0,f[g],0),u.lookAt(p[g],0,0)):w===1?(u.up.set(0,0,f[g]),u.lookAt(0,p[g],0)):(u.up.set(0,f[g],0),u.lookAt(0,0,p[g]));const E=this._cubeSize;xl(a,w*E,g>2?E:0,E,E),d.setRenderTarget(a),T&&d.render(M,u),d.render(e,u)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=v,d.autoClear=m,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const o=a?this._cubemapMaterial:this._equirectMaterial,l=new hi(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;xl(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,Pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=op[(a-1)%op.length];this._blur(e,a-1,a,o,l)}t.autoClear=i}_blur(e,t,i,a,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,a,"latitudinal",o),this._halfBlur(l,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,l,u){const f=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new hi(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),T=o/M,y=isFinite(o)?1+Math.floor(d*T):Wr;y>Wr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const g=[];let w=0;for(let F=0;F<Wr;++F){const Z=F/T,A=Math.exp(-Z*Z/2);g.push(A),F===0?w+=A:F<y&&(w+=2*A)}for(let F=0;F<g.length;F++)g[F]=g[F]/w;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:E}=this;v.dTheta.value=M,v.mipInt.value=E-i;const P=this._sizeLods[a],C=3*P*(a>E-Ns?a-E+Ns:0),U=4*(this._cubeSize-P);xl(t,C,U,3*P,2*P),f.setRenderTarget(t),f.render(m,Pc)}}function l_(n){const e=[],t=[],i=[];let a=n;const o=n-Ns+1+sp.length;for(let l=0;l<o;l++){const u=Math.pow(2,a);t.push(u);let f=1/u;l>n-Ns?f=sp[l-n+Ns-1]:l===0&&(f=0),i.push(f);const p=1/(u-2),d=-p,m=1+p,v=[d,d,m,d,m,m,d,d,m,m,d,m],S=6,M=6,T=3,y=2,g=1,w=new Float32Array(T*M*S),E=new Float32Array(y*M*S),P=new Float32Array(g*M*S);for(let U=0;U<S;U++){const F=U%3*2/3-1,Z=U>2?0:-1,A=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];w.set(A,T*M*U),E.set(v,y*M*U);const D=[U,U,U,U,U,U];P.set(D,g*M*U)}const C=new ti;C.setAttribute("position",new kt(w,T)),C.setAttribute("uv",new kt(E,y)),C.setAttribute("faceIndex",new kt(P,g)),e.push(C),a>Ns&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lp(n,e,t){const i=new gt(n,e,t);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function u_(n,e,t){const i=new Float32Array(Wr),a=new O(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function up(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function cp(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Ef(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c_(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,p=f===Jc||f===$c,d=f===Ws||f===Xs;if(p||d)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new sf(n)),m=p?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(p&&m&&m.height>0||d&&m&&a(m)){t===null&&(t=new sf(n));const v=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,v),u.addEventListener("dispose",o),v.texture}else return null}}}return u}function a(u){let f=0;const p=6;for(let d=0;d<p;d++)u[d]!==void 0&&f++;return f===p}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function f_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function h_(n,e,t,i){const a={},o=new WeakMap;function l(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const T=v.morphAttributes[M];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}v.removeEventListener("dispose",l),delete a[v.id];const S=o.get(v);S&&(e.remove(S),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(m,v){return a[v.id]===!0||(v.addEventListener("dispose",l),a[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const M in v)e.update(v[M],n.ARRAY_BUFFER);const S=m.morphAttributes;for(const M in S){const T=S[M];for(let y=0,g=T.length;y<g;y++)e.update(T[y],n.ARRAY_BUFFER)}}function p(m){const v=[],S=m.index,M=m.attributes.position;let T=0;if(S!==null){const w=S.array;T=S.version;for(let E=0,P=w.length;E<P;E+=3){const C=w[E+0],U=w[E+1],F=w[E+2];v.push(C,U,U,F,F,C)}}else{const w=M.array;T=M.version;for(let E=0,P=w.length/3-1;E<P;E+=3){const C=E+0,U=E+1,F=E+2;v.push(C,U,U,F,F,C)}}const y=new(iv(v)?fv:cv)(v,1);y.version=T;const g=o.get(m);g&&e.remove(g),o.set(m,y)}function d(m){const v=o.get(m);if(v){const S=m.index;S!==null&&v.version<S.version&&p(m)}else p(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:d}}function d_(n,e,t,i){const a=i.isWebGL2;let o;function l(v){o=v}let u,f;function p(v){u=v.type,f=v.bytesPerElement}function d(v,S){n.drawElements(o,S,u,v*f),t.update(S,o,1)}function m(v,S,M){if(M===0)return;let T,y;if(a)T=n,y="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[y](o,S,u,v*f,M),t.update(S,o,M)}this.setMode=l,this.setIndex=p,this.render=d,this.renderInstances=m}function p_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function m_(n,e){return n[0]-e[0]}function v_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function g_(n,e,t){const i={},a=new Float32Array(8),o=new WeakMap,l=new Ht,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function f(p,d,m){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=S!==void 0?S.length:0;let T=o.get(d);if(T===void 0||T.count!==M){let $=function(){ae.dispose(),o.delete(d),d.removeEventListener("dispose",$)};T!==void 0&&T.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let Z=0;w===!0&&(Z=1),E===!0&&(Z=2),P===!0&&(Z=3);let A=d.attributes.position.count*Z,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const V=new Float32Array(A*D*4*M),ae=new av(V,A,D,M);ae.type=Kt,ae.needsUpdate=!0;const j=Z*4;for(let ie=0;ie<M;ie++){const fe=C[ie],se=U[ie],I=F[ie],G=A*D*4*ie;for(let X=0;X<fe.count;X++){const z=X*j;w===!0&&(l.fromBufferAttribute(fe,X),V[G+z+0]=l.x,V[G+z+1]=l.y,V[G+z+2]=l.z,V[G+z+3]=0),E===!0&&(l.fromBufferAttribute(se,X),V[G+z+4]=l.x,V[G+z+5]=l.y,V[G+z+6]=l.z,V[G+z+7]=0),P===!0&&(l.fromBufferAttribute(I,X),V[G+z+8]=l.x,V[G+z+9]=l.y,V[G+z+10]=l.z,V[G+z+11]=I.itemSize===4?l.w:1)}}T={count:M,texture:ae,size:new ve(A,D)},o.set(d,T),d.addEventListener("dispose",$)}let y=0;for(let w=0;w<v.length;w++)y+=v[w];const g=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(n,"morphTargetBaseInfluence",g),m.getUniforms().setValue(n,"morphTargetInfluences",v),m.getUniforms().setValue(n,"morphTargetsTexture",T.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",T.size)}else{const S=v===void 0?0:v.length;let M=i[d.id];if(M===void 0||M.length!==S){M=[];for(let E=0;E<S;E++)M[E]=[E,0];i[d.id]=M}for(let E=0;E<S;E++){const P=M[E];P[0]=E,P[1]=v[E]}M.sort(v_);for(let E=0;E<8;E++)E<S&&M[E][1]?(u[E][0]=M[E][0],u[E][1]=M[E][1]):(u[E][0]=Number.MAX_SAFE_INTEGER,u[E][1]=0);u.sort(m_);const T=d.morphAttributes.position,y=d.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const P=u[E],C=P[0],U=P[1];C!==Number.MAX_SAFE_INTEGER&&U?(T&&d.getAttribute("morphTarget"+E)!==T[C]&&d.setAttribute("morphTarget"+E,T[C]),y&&d.getAttribute("morphNormal"+E)!==y[C]&&d.setAttribute("morphNormal"+E,y[C]),a[E]=U,g+=U):(T&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),y&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),a[E]=0)}const w=d.morphTargetsRelative?1:1-g;m.getUniforms().setValue(n,"morphTargetBaseInfluence",w),m.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:f}}function x_(n,e,t,i){let a=new WeakMap;function o(f){const p=i.render.frame,d=f.geometry,m=e.get(f,d);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==p&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return m}function l(){a=new WeakMap}function u(f){const p=f.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:l}}const xv=new Xt,Sv=new av,yv=new ka,_v=new mv,fp=[],hp=[],dp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let o=fp[a];if(o===void 0&&(o=new Float32Array(a),fp[a]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(o,u)}return o}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xl(n,e){let t=hp[e];t===void 0&&(t=new Int32Array(e),hp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function S_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function E_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;mp.set(i),n.uniformMatrix2fv(this.addr,!1,mp),fn(t,i)}}function T_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;pp.set(i),n.uniformMatrix3fv(this.addr,!1,pp),fn(t,i)}}function w_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;dp.set(i),n.uniformMatrix4fv(this.addr,!1,dp),fn(t,i)}}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function I_(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2D(e||xv,a)}function N_(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||yv,a)}function F_(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||_v,a)}function O_(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Sv,a)}function z_(n){switch(n){case 5126:return S_;case 35664:return y_;case 35665:return __;case 35666:return M_;case 35674:return E_;case 35675:return T_;case 35676:return w_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return C_;case 5125:return b_;case 36294:return D_;case 36295:return L_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function B_(n,e){n.uniform1fv(this.addr,e)}function k_(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function H_(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function G_(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function V_(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W_(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X_(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j_(n,e){n.uniform1iv(this.addr,e)}function Y_(n,e){n.uniform2iv(this.addr,e)}function q_(n,e){n.uniform3iv(this.addr,e)}function Z_(n,e){n.uniform4iv(this.addr,e)}function K_(n,e){n.uniform1uiv(this.addr,e)}function Q_(n,e){n.uniform2uiv(this.addr,e)}function J_(n,e){n.uniform3uiv(this.addr,e)}function $_(n,e){n.uniform4uiv(this.addr,e)}function eM(n,e,t){const i=this.cache,a=e.length,o=Xl(t,a);cn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==a;++l)t.setTexture2D(e[l]||xv,o[l])}function tM(n,e,t){const i=this.cache,a=e.length,o=Xl(t,a);cn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==a;++l)t.setTexture3D(e[l]||yv,o[l])}function nM(n,e,t){const i=this.cache,a=e.length,o=Xl(t,a);cn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==a;++l)t.setTextureCube(e[l]||_v,o[l])}function iM(n,e,t){const i=this.cache,a=e.length,o=Xl(t,a);cn(i,o)||(n.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==a;++l)t.setTexture2DArray(e[l]||Sv,o[l])}function rM(n){switch(n){case 5126:return B_;case 35664:return k_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return j_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return Q_;case 36295:return J_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=z_(t.type)}}class aM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rM(t.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,l=a.length;o!==l;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function vp(n,e){n.seq.push(e),n.map[e.id]=e}function lM(n,e,t){const i=n.name,a=i.length;for(bc.lastIndex=0;;){const o=bc.exec(i),l=bc.lastIndex;let u=o[1];const f=o[2]==="]",p=o[3];if(f&&(u=u|0),p===void 0||p==="["&&l+2===a){vp(t,p===void 0?new sM(u,n,e):new aM(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new oM(u),vp(t,m)),t=m}}}class Ul{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);lM(o,l,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,l=t.length;o!==l;++o){const u=t[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const l=e[a];l.id in t&&i.push(l)}return i}}function gp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let uM=0;function cM(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=a;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}function fM(n){switch(n){case zi:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function xp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+cM(n.getShaderSource(e),l)}else return a}function hM(n,e){const t=fM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dM(n,e){let t;switch(e){case y0:t="Linear";break;case _0:t="Reinhard";break;case M0:t="OptimizedCineon";break;case Ym:t="ACESFilmic";break;case E0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ia).join(`
`)}function mM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=n.getActiveAttrib(e,a),l=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function Ia(n){return n!==""}function Sp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(n){return n.replace(gM,SM)}const xM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SM(n,e){let t=Fe[e];if(t===void 0){const i=xM.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return af(t)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(n){return n.replace(yM,_M)}function _M(n,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Mp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function wM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jm:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function AM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function RM(n,e,t,i){const a=n.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=MM(t),p=EM(t),d=TM(t),m=wM(t),v=AM(t),S=t.isWebGL2?"":pM(t),M=mM(o),T=a.createProgram();let y,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ia).join(`
`),y.length>0&&(y+=`
`),g=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(y=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[S,Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Oi?dM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,hM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),l=af(l),l=Sp(l,t),l=yp(l,t),u=af(u),u=Sp(u,t),u=yp(u,t),l=_p(l),u=_p(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=w+y+l,P=w+g+u,C=gp(a,a.VERTEX_SHADER,E),U=gp(a,a.FRAGMENT_SHADER,P);if(a.attachShader(T,C),a.attachShader(T,U),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T),n.debug.checkShaderErrors){const A=a.getProgramInfoLog(T).trim(),D=a.getShaderInfoLog(C).trim(),V=a.getShaderInfoLog(U).trim();let ae=!0,j=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,T,C,U);else{const $=xp(a,C,"vertex"),ie=xp(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+$+`
`+ie)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||V==="")&&(j=!1);j&&(this.diagnostics={runnable:ae,programLog:A,vertexShader:{log:D,prefix:y},fragmentShader:{log:V,prefix:g}})}a.deleteShader(C),a.deleteShader(U);let F;this.getUniforms=function(){return F===void 0&&(F=new Ul(a,T)),F};let Z;return this.getAttributes=function(){return Z===void 0&&(Z=vM(a,T)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=U,this}let PM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(a)===!1&&(l.add(a),a.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bM(e),t.set(e,i)),i}}class bM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,a,o,l){const u=new Hs,f=new CM,p=[],d=a.isWebGL2,m=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return A===0?"uv":`uv${A}`}function y(A,D,V,ae,j){const $=ae.fog,ie=j.geometry,fe=A.isMeshStandardMaterial?ae.environment:null,se=(A.isMeshStandardMaterial?t:e).get(A.envMap||fe),I=se&&se.mapping===kl?se.image.height:null,G=M[A.type];A.precision!==null&&(S=a.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const X=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,z=X!==void 0?X.length:0;let Y=0;ie.morphAttributes.position!==void 0&&(Y=1),ie.morphAttributes.normal!==void 0&&(Y=2),ie.morphAttributes.color!==void 0&&(Y=3);let he,de,pe,Re;if(G){const Vn=Fi[G];he=Vn.vertexShader,de=Vn.fragmentShader}else he=A.vertexShader,de=A.fragmentShader,f.update(A),pe=f.getVertexShaderID(A),Re=f.getFragmentShaderID(A);const Ie=n.getRenderTarget(),We=j.isInstancedMesh===!0,xt=!!A.map,rn=!!A.matcap,je=!!se,K=!!A.aoMap,Tt=!!A.lightMap,Xe=!!A.bumpMap,st=!!A.normalMap,et=!!A.displacementMap,Nt=!!A.emissiveMap,mt=!!A.metalnessMap,ot=!!A.roughnessMap,St=A.anisotropy>0,sn=A.clearcoat>0,hn=A.iridescence>0,N=A.sheen>0,R=A.transmission>0,le=St&&!!A.anisotropyMap,ge=sn&&!!A.clearcoatMap,xe=sn&&!!A.clearcoatNormalMap,Me=sn&&!!A.clearcoatRoughnessMap,Ne=hn&&!!A.iridescenceMap,Te=hn&&!!A.iridescenceThicknessMap,ce=N&&!!A.sheenColorMap,Oe=N&&!!A.sheenRoughnessMap,ze=!!A.specularMap,He=!!A.specularColorMap,be=!!A.specularIntensityMap,De=R&&!!A.transmissionMap,lt=R&&!!A.thicknessMap,Ct=!!A.gradientMap,B=!!A.alphaMap,_e=A.alphaTest>0,ne=!!A.alphaHash,Se=!!A.extensions,we=!!ie.attributes.uv1,vt=!!ie.attributes.uv2,Lt=!!ie.attributes.uv3;return{isWebGL2:d,shaderID:G,shaderType:A.type,shaderName:A.name,vertexShader:he,fragmentShader:de,defines:A.defines,customVertexShaderID:pe,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,instancing:We,instancingColor:We&&j.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:zi,map:xt,matcap:rn,envMap:je,envMapMode:je&&se.mapping,envMapCubeUVHeight:I,aoMap:K,lightMap:Tt,bumpMap:Xe,normalMap:st,displacementMap:v&&et,emissiveMap:Nt,normalMapObjectSpace:st&&A.normalMapType===D0,normalMapTangentSpace:st&&A.normalMapType===Sf,metalnessMap:mt,roughnessMap:ot,anisotropy:St,anisotropyMap:le,clearcoat:sn,clearcoatMap:ge,clearcoatNormalMap:xe,clearcoatRoughnessMap:Me,iridescence:hn,iridescenceMap:Ne,iridescenceThicknessMap:Te,sheen:N,sheenColorMap:ce,sheenRoughnessMap:Oe,specularMap:ze,specularColorMap:He,specularIntensityMap:be,transmission:R,transmissionMap:De,thicknessMap:lt,gradientMap:Ct,opaque:A.transparent===!1&&A.blending===Bs,alphaMap:B,alphaTest:_e,alphaHash:ne,combine:A.combine,mapUv:xt&&T(A.map.channel),aoMapUv:K&&T(A.aoMap.channel),lightMapUv:Tt&&T(A.lightMap.channel),bumpMapUv:Xe&&T(A.bumpMap.channel),normalMapUv:st&&T(A.normalMap.channel),displacementMapUv:et&&T(A.displacementMap.channel),emissiveMapUv:Nt&&T(A.emissiveMap.channel),metalnessMapUv:mt&&T(A.metalnessMap.channel),roughnessMapUv:ot&&T(A.roughnessMap.channel),anisotropyMapUv:le&&T(A.anisotropyMap.channel),clearcoatMapUv:ge&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(A.sheenRoughnessMap.channel),specularMapUv:ze&&T(A.specularMap.channel),specularColorMapUv:He&&T(A.specularColorMap.channel),specularIntensityMapUv:be&&T(A.specularIntensityMap.channel),transmissionMapUv:De&&T(A.transmissionMap.channel),thicknessMapUv:lt&&T(A.thicknessMap.channel),alphaMapUv:B&&T(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(st||St),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:vt,vertexUv3s:Lt,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(xt||B),fog:!!$,useFog:A.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:j.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:A.toneMapped?n.toneMapping:Oi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$n,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:Se&&A.extensions.derivatives===!0,extensionFragDepth:Se&&A.extensions.fragDepth===!0,extensionDrawBuffers:Se&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function g(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)D.push(V),D.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(w(D,A),E(D,A),D.push(n.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function w(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function E(A,D){u.disableAll(),D.isWebGL2&&u.enable(0),D.supportsVertexTextures&&u.enable(1),D.instancing&&u.enable(2),D.instancingColor&&u.enable(3),D.matcap&&u.enable(4),D.envMap&&u.enable(5),D.normalMapObjectSpace&&u.enable(6),D.normalMapTangentSpace&&u.enable(7),D.clearcoat&&u.enable(8),D.iridescence&&u.enable(9),D.alphaTest&&u.enable(10),D.vertexColors&&u.enable(11),D.vertexAlphas&&u.enable(12),D.vertexUv1s&&u.enable(13),D.vertexUv2s&&u.enable(14),D.vertexUv3s&&u.enable(15),D.vertexTangents&&u.enable(16),D.anisotropy&&u.enable(17),A.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.skinning&&u.enable(4),D.morphTargets&&u.enable(5),D.morphNormals&&u.enable(6),D.morphColors&&u.enable(7),D.premultipliedAlpha&&u.enable(8),D.shadowMapEnabled&&u.enable(9),D.useLegacyLights&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),A.push(u.mask)}function P(A){const D=M[A.type];let V;if(D){const ae=Fi[D];V=dv.clone(ae.uniforms)}else V=A.uniforms;return V}function C(A,D){let V;for(let ae=0,j=p.length;ae<j;ae++){const $=p[ae];if($.cacheKey===D){V=$,++V.usedTimes;break}}return V===void 0&&(V=new RM(n,D,A,o),p.push(V)),V}function U(A){if(--A.usedTimes===0){const D=p.indexOf(A);p[D]=p[p.length-1],p.pop(),A.destroy()}}function F(A){f.remove(A)}function Z(){f.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:P,acquireProgram:C,releaseProgram:U,releaseShaderCache:F,programs:p,dispose:Z}}function LM(){let n=new WeakMap;function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function t(o){n.delete(o)}function i(o,l,u){n.get(o)[l]=u}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function UM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tp(){const n=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function l(m,v,S,M,T,y){let g=n[e];return g===void 0?(g={id:m.id,object:m,geometry:v,material:S,groupOrder:M,renderOrder:m.renderOrder,z:T,group:y},n[e]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=S,g.groupOrder=M,g.renderOrder=m.renderOrder,g.z=T,g.group=y),e++,g}function u(m,v,S,M,T,y){const g=l(m,v,S,M,T,y);S.transmission>0?i.push(g):S.transparent===!0?a.push(g):t.push(g)}function f(m,v,S,M,T,y){const g=l(m,v,S,M,T,y);S.transmission>0?i.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function p(m,v){t.length>1&&t.sort(m||UM),i.length>1&&i.sort(v||Ep),a.length>1&&a.sort(v||Ep)}function d(){for(let m=e,v=n.length;m<v;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:f,finish:d,sort:p}}function IM(){let n=new WeakMap;function e(i,a){const o=n.get(i);let l;return o===void 0?(l=new Tp,n.set(i,[l])):a>=o.length?(l=new Tp,o.push(l)):l=o[a],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function zM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BM(n,e){const t=new NM,i=FM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)a.probe.push(new O);const o=new O,l=new Ze,u=new Ze;function f(d,m){let v=0,S=0,M=0;for(let V=0;V<9;V++)a.probe[V].set(0,0,0);let T=0,y=0,g=0,w=0,E=0,P=0,C=0,U=0,F=0,Z=0;d.sort(zM);const A=m===!0?Math.PI:1;for(let V=0,ae=d.length;V<ae;V++){const j=d[V],$=j.color,ie=j.intensity,fe=j.distance,se=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=$.r*ie*A,S+=$.g*ie*A,M+=$.b*ie*A;else if(j.isLightProbe)for(let I=0;I<9;I++)a.probe[I].addScaledVector(j.sh.coefficients[I],ie);else if(j.isDirectionalLight){const I=t.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity*A),j.castShadow){const G=j.shadow,X=i.get(j);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,a.directionalShadow[T]=X,a.directionalShadowMap[T]=se,a.directionalShadowMatrix[T]=j.shadow.matrix,P++}a.directional[T]=I,T++}else if(j.isSpotLight){const I=t.get(j);I.position.setFromMatrixPosition(j.matrixWorld),I.color.copy($).multiplyScalar(ie*A),I.distance=fe,I.coneCos=Math.cos(j.angle),I.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),I.decay=j.decay,a.spot[g]=I;const G=j.shadow;if(j.map&&(a.spotLightMap[F]=j.map,F++,G.updateMatrices(j),j.castShadow&&Z++),a.spotLightMatrix[g]=G.matrix,j.castShadow){const X=i.get(j);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,a.spotShadow[g]=X,a.spotShadowMap[g]=se,U++}g++}else if(j.isRectAreaLight){const I=t.get(j);I.color.copy($).multiplyScalar(ie),I.halfWidth.set(j.width*.5,0,0),I.halfHeight.set(0,j.height*.5,0),a.rectArea[w]=I,w++}else if(j.isPointLight){const I=t.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity*A),I.distance=j.distance,I.decay=j.decay,j.castShadow){const G=j.shadow,X=i.get(j);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,a.pointShadow[y]=X,a.pointShadowMap[y]=se,a.pointShadowMatrix[y]=j.shadow.matrix,C++}a.point[y]=I,y++}else if(j.isHemisphereLight){const I=t.get(j);I.skyColor.copy(j.color).multiplyScalar(ie*A),I.groundColor.copy(j.groundColor).multiplyScalar(ie*A),a.hemi[E]=I,E++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_FLOAT_1,a.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_HALF_1,a.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=S,a.ambient[2]=M;const D=a.hash;(D.directionalLength!==T||D.pointLength!==y||D.spotLength!==g||D.rectAreaLength!==w||D.hemiLength!==E||D.numDirectionalShadows!==P||D.numPointShadows!==C||D.numSpotShadows!==U||D.numSpotMaps!==F)&&(a.directional.length=T,a.spot.length=g,a.rectArea.length=w,a.point.length=y,a.hemi.length=E,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=U+F-Z,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=Z,D.directionalLength=T,D.pointLength=y,D.spotLength=g,D.rectAreaLength=w,D.hemiLength=E,D.numDirectionalShadows=P,D.numPointShadows=C,D.numSpotShadows=U,D.numSpotMaps=F,a.version=OM++)}function p(d,m){let v=0,S=0,M=0,T=0,y=0;const g=m.matrixWorldInverse;for(let w=0,E=d.length;w<E;w++){const P=d[w];if(P.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(g),v++}else if(P.isSpotLight){const C=a.spot[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(g),M++}else if(P.isRectAreaLight){const C=a.rectArea[T];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(g),u.identity(),l.copy(P.matrixWorld),l.premultiply(g),u.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const C=a.point[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(g),S++}else if(P.isHemisphereLight){const C=a.hemi[y];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(g),y++}}}return{setup:f,setupView:p,state:a}}function wp(n,e){const t=new BM(n,e),i=[],a=[];function o(){i.length=0,a.length=0}function l(m){i.push(m)}function u(m){a.push(m)}function f(m){t.setup(i,m)}function p(m){t.setupView(i,m)}return{init:o,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function kM(n,e){let t=new WeakMap;function i(o,l=0){const u=t.get(o);let f;return u===void 0?(f=new wp(n,e),t.set(o,[f])):l>=u.length?(f=new wp(n,e),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:i,dispose:a}}class Mv extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=En,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(n,e,t){let i=new vv;const a=new ve,o=new ve,l=new Ht,u=new Mv({depthPacking:ir}),f=new HM,p={},d=t.maxTextureSize,m={[nr]:xn,[xn]:nr,[$n]:$n},v=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new hi(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let g=this.type;this.render=function(C,U,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;const Z=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Gt),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ae=g!==Ni&&this.type===Ni,j=g===Ni&&this.type!==Ni;for(let $=0,ie=C.length;$<ie;$++){const fe=C[$],se=fe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;a.copy(se.mapSize);const I=se.getFrameExtents();if(a.multiply(I),o.copy(se.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/I.x),a.x=o.x*I.x,se.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/I.y),a.y=o.y*I.y,se.mapSize.y=o.y)),se.map===null||ae===!0||j===!0){const X=this.type!==Ni?{minFilter:at,magFilter:at}:{};se.map!==null&&se.map.dispose(),se.map=new gt(a.x,a.y,X),se.map.texture.name=fe.name+".shadowMap",se.camera.updateProjectionMatrix()}n.setRenderTarget(se.map),n.clear();const G=se.getViewportCount();for(let X=0;X<G;X++){const z=se.getViewport(X);l.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),V.viewport(l),se.updateMatrices(fe,X),i=se.getFrustum(),P(U,F,se.camera,fe,this.type)}se.isPointLightShadow!==!0&&this.type===Ni&&w(se,F),se.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(Z,A,D)};function w(C,U){const F=e.update(T);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,S.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gt(a.x,a.y)),v.uniforms.shadow_pass.value=C.map.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,F,v,T,null),S.uniforms.shadow_pass.value=C.mapPass.texture,S.uniforms.resolution.value=C.mapSize,S.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,F,S,T,null)}function E(C,U,F,Z){let A=null;const D=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)A=D;else if(A=F.isPointLight===!0?f:u,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const V=A.uuid,ae=U.uuid;let j=p[V];j===void 0&&(j={},p[V]=j);let $=j[ae];$===void 0&&($=A.clone(),j[ae]=$),A=$}if(A.visible=U.visible,A.wireframe=U.wireframe,Z===Ni?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:m[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const V=n.properties.get(A);V.light=F}return A}function P(C,U,F,Z,A){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const ae=e.update(C),j=C.material;if(Array.isArray(j)){const $=ae.groups;for(let ie=0,fe=$.length;ie<fe;ie++){const se=$[ie],I=j[se.materialIndex];if(I&&I.visible){const G=E(C,I,Z,A);n.renderBufferDirect(F,null,ae,G,C,se)}}}else if(j.visible){const $=E(C,j,Z,A);n.renderBufferDirect(F,null,ae,$,C,null)}}const V=C.children;for(let ae=0,j=V.length;ae<j;ae++)P(V[ae],U,F,Z,A)}}function XM(n,e,t){const i=t.isWebGL2;function a(){let B=!1;const _e=new Ht;let ne=null;const Se=new Ht(0,0,0,0);return{setMask:function(we){ne!==we&&!B&&(n.colorMask(we,we,we,we),ne=we)},setLocked:function(we){B=we},setClear:function(we,vt,Lt,Qt,Vn){Vn===!0&&(we*=Qt,vt*=Qt,Lt*=Qt),_e.set(we,vt,Lt,Qt),Se.equals(_e)===!1&&(n.clearColor(we,vt,Lt,Qt),Se.copy(_e))},reset:function(){B=!1,ne=null,Se.set(-1,0,0,0)}}}function o(){let B=!1,_e=null,ne=null,Se=null;return{setTest:function(we){we?Ie(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(we){_e!==we&&!B&&(n.depthMask(we),_e=we)},setFunc:function(we){if(ne!==we){switch(we){case Gm:n.depthFunc(n.NEVER);break;case Vm:n.depthFunc(n.ALWAYS);break;case Qc:n.depthFunc(n.LESS);break;case Fl:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Wm:n.depthFunc(n.GEQUAL);break;case Xm:n.depthFunc(n.GREATER);break;case mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=we}},setLocked:function(we){B=we},setClear:function(we){Se!==we&&(n.clearDepth(we),Se=we)},reset:function(){B=!1,_e=null,ne=null,Se=null}}}function l(){let B=!1,_e=null,ne=null,Se=null,we=null,vt=null,Lt=null,Qt=null,Vn=null;return{setTest:function(Ft){B||(Ft?Ie(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(Ft){_e!==Ft&&!B&&(n.stencilMask(Ft),_e=Ft)},setFunc:function(Ft,Wn,Sn){(ne!==Ft||Se!==Wn||we!==Sn)&&(n.stencilFunc(Ft,Wn,Sn),ne=Ft,Se=Wn,we=Sn)},setOp:function(Ft,Wn,Sn){(vt!==Ft||Lt!==Wn||Qt!==Sn)&&(n.stencilOp(Ft,Wn,Sn),vt=Ft,Lt=Wn,Qt=Sn)},setLocked:function(Ft){B=Ft},setClear:function(Ft){Vn!==Ft&&(n.clearStencil(Ft),Vn=Ft)},reset:function(){B=!1,_e=null,ne=null,Se=null,we=null,vt=null,Lt=null,Qt=null,Vn=null}}}const u=new a,f=new o,p=new l,d=new WeakMap,m=new WeakMap;let v={},S={},M=new WeakMap,T=[],y=null,g=!1,w=null,E=null,P=null,C=null,U=null,F=null,Z=null,A=!1,D=null,V=null,ae=null,j=null,$=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,se=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(I)[1]),fe=se>=1):I.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),fe=se>=2);let G=null,X={};const z=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),he=new Ht().fromArray(z),de=new Ht().fromArray(Y);function pe(B,_e,ne,Se){const we=new Uint8Array(4),vt=n.createTexture();n.bindTexture(B,vt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<ne;Lt++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(_e+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return vt}const Re={};Re[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ie(n.DEPTH_TEST),f.setFunc(Fl),et(!1),Nt(hd),Ie(n.CULL_FACE),Xe(Gt);function Ie(B){v[B]!==!0&&(n.enable(B),v[B]=!0)}function We(B){v[B]!==!1&&(n.disable(B),v[B]=!1)}function xt(B,_e){return S[B]!==_e?(n.bindFramebuffer(B,_e),S[B]=_e,i&&(B===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=_e),B===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function rn(B,_e){let ne=T,Se=!1;if(B)if(ne=M.get(_e),ne===void 0&&(ne=[],M.set(_e,ne)),B.isWebGLMultipleRenderTargets){const we=B.texture;if(ne.length!==we.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Lt=we.length;vt<Lt;vt++)ne[vt]=n.COLOR_ATTACHMENT0+vt;ne.length=we.length,Se=!0}}else ne[0]!==n.COLOR_ATTACHMENT0&&(ne[0]=n.COLOR_ATTACHMENT0,Se=!0);else ne[0]!==n.BACK&&(ne[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function je(B){return y!==B?(n.useProgram(B),y=B,!0):!1}const K={[Ls]:n.FUNC_ADD,[o0]:n.FUNC_SUBTRACT,[l0]:n.FUNC_REVERSE_SUBTRACT};if(i)K[vd]=n.MIN,K[gd]=n.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(K[vd]=B.MIN_EXT,K[gd]=B.MAX_EXT)}const Tt={[u0]:n.ZERO,[c0]:n.ONE,[f0]:n.SRC_COLOR,[km]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[m0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[h0]:n.ONE_MINUS_SRC_COLOR,[Hm]:n.ONE_MINUS_SRC_ALPHA,[v0]:n.ONE_MINUS_DST_COLOR,[p0]:n.ONE_MINUS_DST_ALPHA};function Xe(B,_e,ne,Se,we,vt,Lt,Qt){if(B===Gt){g===!0&&(We(n.BLEND),g=!1);return}if(g===!1&&(Ie(n.BLEND),g=!0),B!==a0){if(B!==w||Qt!==A){if((E!==Ls||U!==Ls)&&(n.blendEquation(n.FUNC_ADD),E=Ls,U=Ls),Qt)switch(B){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dd:n.blendFunc(n.ONE,n.ONE);break;case pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case md:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case md:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}P=null,C=null,F=null,Z=null,w=B,A=Qt}return}we=we||_e,vt=vt||ne,Lt=Lt||Se,(_e!==E||we!==U)&&(n.blendEquationSeparate(K[_e],K[we]),E=_e,U=we),(ne!==P||Se!==C||vt!==F||Lt!==Z)&&(n.blendFuncSeparate(Tt[ne],Tt[Se],Tt[vt],Tt[Lt]),P=ne,C=Se,F=vt,Z=Lt),w=B,A=!1}function st(B,_e){B.side===$n?We(n.CULL_FACE):Ie(n.CULL_FACE);let ne=B.side===xn;_e&&(ne=!ne),et(ne),B.blending===Bs&&B.transparent===!1?Xe(Gt):Xe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),u.setMask(B.colorWrite);const Se=B.stencilWrite;p.setTest(Se),Se&&(p.setMask(B.stencilWriteMask),p.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),p.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ot(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){D!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),D=B)}function Nt(B){B!==i0?(Ie(n.CULL_FACE),B!==V&&(B===hd?n.cullFace(n.BACK):B===r0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),V=B}function mt(B){B!==ae&&(fe&&n.lineWidth(B),ae=B)}function ot(B,_e,ne){B?(Ie(n.POLYGON_OFFSET_FILL),(j!==_e||$!==ne)&&(n.polygonOffset(_e,ne),j=_e,$=ne)):We(n.POLYGON_OFFSET_FILL)}function St(B){B?Ie(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function sn(B){B===void 0&&(B=n.TEXTURE0+ie-1),G!==B&&(n.activeTexture(B),G=B)}function hn(B,_e,ne){ne===void 0&&(G===null?ne=n.TEXTURE0+ie-1:ne=G);let Se=X[ne];Se===void 0&&(Se={type:void 0,texture:void 0},X[ne]=Se),(Se.type!==B||Se.texture!==_e)&&(G!==ne&&(n.activeTexture(ne),G=ne),n.bindTexture(B,_e||Re[B]),Se.type=B,Se.texture=_e)}function N(){const B=X[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(B){he.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function be(B){de.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function De(B,_e){let ne=m.get(_e);ne===void 0&&(ne=new WeakMap,m.set(_e,ne));let Se=ne.get(B);Se===void 0&&(Se=n.getUniformBlockIndex(_e,B.name),ne.set(B,Se))}function lt(B,_e){const Se=m.get(_e).get(B);d.get(_e)!==Se&&(n.uniformBlockBinding(_e,Se,B.__bindingPointIndex),d.set(_e,Se))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),v={},G=null,X={},S={},M=new WeakMap,T=[],y=null,g=!1,w=null,E=null,P=null,C=null,U=null,F=null,Z=null,A=!1,D=null,V=null,ae=null,j=null,$=null,he.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),u.reset(),f.reset(),p.reset()}return{buffers:{color:u,depth:f,stencil:p},enable:Ie,disable:We,bindFramebuffer:xt,drawBuffers:rn,useProgram:je,setBlending:Xe,setMaterial:st,setFlipSided:et,setCullFace:Nt,setLineWidth:mt,setPolygonOffset:ot,setScissorTest:St,activeTexture:sn,bindTexture:hn,unbindTexture:N,compressedTexImage2D:R,compressedTexImage3D:le,texImage2D:Oe,texImage3D:ze,updateUBOMapping:De,uniformBlockBinding:lt,texStorage2D:Te,texStorage3D:ce,texSubImage2D:ge,texSubImage3D:xe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:He,viewport:be,reset:Ct}}function jM(n,e,t,i,a,o,l){const u=a.isWebGL2,f=a.maxTextures,p=a.maxCubemapSize,d=a.maxTextureSize,m=a.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let T;const y=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,R){return g?new OffscreenCanvas(N,R):Xa("canvas")}function E(N,R,le,ge){let xe=1;if((N.width>ge||N.height>ge)&&(xe=ge/Math.max(N.width,N.height)),xe<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Me=R?Bl:Math.floor,Ne=Me(xe*N.width),Te=Me(xe*N.height);T===void 0&&(T=w(Ne,Te));const ce=le?w(Ne,Te):T;return ce.width=Ne,ce.height=Te,ce.getContext("2d").drawImage(N,0,0,Ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ne+"x"+Te+")."),ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function P(N){return rf(N.width)&&rf(N.height)}function C(N){return u?!1:N.wrapS!==Hn||N.wrapT!==Hn||N.minFilter!==at&&N.minFilter!==Ve}function U(N,R){return N.generateMipmaps&&R&&N.minFilter!==at&&N.minFilter!==Ve}function F(N){n.generateMipmap(N)}function Z(N,R,le,ge,xe=!1){if(u===!1)return R;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Me=R;return R===n.RED&&(le===n.FLOAT&&(Me=n.R32F),le===n.HALF_FLOAT&&(Me=n.R16F),le===n.UNSIGNED_BYTE&&(Me=n.R8)),R===n.RG&&(le===n.FLOAT&&(Me=n.RG32F),le===n.HALF_FLOAT&&(Me=n.RG16F),le===n.UNSIGNED_BYTE&&(Me=n.RG8)),R===n.RGBA&&(le===n.FLOAT&&(Me=n.RGBA32F),le===n.HALF_FLOAT&&(Me=n.RGBA16F),le===n.UNSIGNED_BYTE&&(Me=ge===ct&&xe===!1?n.SRGB8_ALPHA8:n.RGBA8),le===n.UNSIGNED_SHORT_4_4_4_4&&(Me=n.RGBA4),le===n.UNSIGNED_SHORT_5_5_5_1&&(Me=n.RGB5_A1)),(Me===n.R16F||Me===n.R32F||Me===n.RG16F||Me===n.RG32F||Me===n.RGBA16F||Me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function A(N,R,le){return U(N,le)===!0||N.isFramebufferTexture&&N.minFilter!==at&&N.minFilter!==Ve?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function D(N){return N===at||N===xd||N===rc?n.NEAREST:n.LINEAR}function V(N){const R=N.target;R.removeEventListener("dispose",V),j(R),R.isVideoTexture&&M.delete(R)}function ae(N){const R=N.target;R.removeEventListener("dispose",ae),ie(R)}function j(N){const R=i.get(N);if(R.__webglInit===void 0)return;const le=N.source,ge=y.get(le);if(ge){const xe=ge[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&$(N),Object.keys(ge).length===0&&y.delete(le)}i.remove(N)}function $(N){const R=i.get(N);n.deleteTexture(R.__webglTexture);const le=N.source,ge=y.get(le);delete ge[R.__cacheKey],l.memory.textures--}function ie(N){const R=N.texture,le=i.get(N),ge=i.get(R);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),l.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)n.deleteFramebuffer(le.__webglFramebuffer[xe]),le.__webglDepthbuffer&&n.deleteRenderbuffer(le.__webglDepthbuffer[xe]);else{if(n.deleteFramebuffer(le.__webglFramebuffer),le.__webglDepthbuffer&&n.deleteRenderbuffer(le.__webglDepthbuffer),le.__webglMultisampledFramebuffer&&n.deleteFramebuffer(le.__webglMultisampledFramebuffer),le.__webglColorRenderbuffer)for(let xe=0;xe<le.__webglColorRenderbuffer.length;xe++)le.__webglColorRenderbuffer[xe]&&n.deleteRenderbuffer(le.__webglColorRenderbuffer[xe]);le.__webglDepthRenderbuffer&&n.deleteRenderbuffer(le.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let xe=0,Me=R.length;xe<Me;xe++){const Ne=i.get(R[xe]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),l.memory.textures--),i.remove(R[xe])}i.remove(R),i.remove(N)}let fe=0;function se(){fe=0}function I(){const N=fe;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),fe+=1,N}function G(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function X(N,R){const le=i.get(N);if(N.isVideoTexture&&sn(N),N.isRenderTargetTexture===!1&&N.version>0&&le.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(le,N,R);return}}t.bindTexture(n.TEXTURE_2D,le.__webglTexture,n.TEXTURE0+R)}function z(N,R){const le=i.get(N);if(N.version>0&&le.__version!==N.version){xt(le,N,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,le.__webglTexture,n.TEXTURE0+R)}function Y(N,R){const le=i.get(N);if(N.version>0&&le.__version!==N.version){xt(le,N,R);return}t.bindTexture(n.TEXTURE_3D,le.__webglTexture,n.TEXTURE0+R)}function he(N,R){const le=i.get(N);if(N.version>0&&le.__version!==N.version){rn(le,N,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture,n.TEXTURE0+R)}const de={[Ai]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[ef]:n.MIRRORED_REPEAT},pe={[at]:n.NEAREST,[xd]:n.NEAREST_MIPMAP_NEAREST,[rc]:n.NEAREST_MIPMAP_LINEAR,[Ve]:n.LINEAR,[T0]:n.LINEAR_MIPMAP_NEAREST,[Va]:n.LINEAR_MIPMAP_LINEAR},Re={[U0]:n.NEVER,[k0]:n.ALWAYS,[I0]:n.LESS,[F0]:n.LEQUAL,[N0]:n.EQUAL,[B0]:n.GEQUAL,[O0]:n.GREATER,[z0]:n.NOTEQUAL};function Ie(N,R,le){if(le?(n.texParameteri(N,n.TEXTURE_WRAP_S,de[R.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,de[R.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,de[R.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,pe[R.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,pe[R.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(R.wrapS!==Hn||R.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,D(R.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,D(R.minFilter)),R.minFilter!==at&&R.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Re[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===at||R.minFilter!==rc&&R.minFilter!==Va||R.type===Kt&&e.has("OES_texture_float_linear")===!1||u===!1&&R.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(n.texParameterf(N,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function We(N,R){let le=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",V));const ge=R.source;let xe=y.get(ge);xe===void 0&&(xe={},y.set(ge,xe));const Me=G(R);if(Me!==N.__cacheKey){xe[Me]===void 0&&(xe[Me]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,le=!0),xe[Me].usedTimes++;const Ne=xe[N.__cacheKey];Ne!==void 0&&(xe[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&$(R)),N.__cacheKey=Me,N.__webglTexture=xe[Me].texture}return le}function xt(N,R,le){let ge=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=n.TEXTURE_3D);const xe=We(N,R),Me=R.source;t.bindTexture(ge,N.__webglTexture,n.TEXTURE0+le);const Ne=i.get(Me);if(Me.version!==Ne.__version||xe===!0){t.activeTexture(n.TEXTURE0+le),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Te=C(R)&&P(R.image)===!1;let ce=E(R.image,Te,!1,d);ce=hn(R,ce);const Oe=P(ce)||u,ze=o.convert(R.format,R.colorSpace);let He=o.convert(R.type),be=Z(R.internalFormat,ze,He,R.colorSpace);Ie(ge,R,Oe);let De;const lt=R.mipmaps,Ct=u&&R.isVideoTexture!==!0,B=Ne.__version===void 0||xe===!0,_e=A(R,ce,Oe);if(R.isDepthTexture)be=n.DEPTH_COMPONENT,u?R.type===Kt?be=n.DEPTH_COMPONENT32F:R.type===$i?be=n.DEPTH_COMPONENT24:R.type===wr?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:R.type===Kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===qr&&be===n.DEPTH_COMPONENT&&R.type!==vf&&R.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=$i,He=o.convert(R.type)),R.format===Zr&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,R.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=wr,He=o.convert(R.type))),B&&(Ct?t.texStorage2D(n.TEXTURE_2D,1,be,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,be,ce.width,ce.height,0,ze,He,null));else if(R.isDataTexture)if(lt.length>0&&Oe){Ct&&B&&t.texStorage2D(n.TEXTURE_2D,_e,be,lt[0].width,lt[0].height);for(let ne=0,Se=lt.length;ne<Se;ne++)De=lt[ne],Ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,De.width,De.height,ze,He,De.data):t.texImage2D(n.TEXTURE_2D,ne,be,De.width,De.height,0,ze,He,De.data);R.generateMipmaps=!1}else Ct?(B&&t.texStorage2D(n.TEXTURE_2D,_e,be,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ze,He,ce.data)):t.texImage2D(n.TEXTURE_2D,0,be,ce.width,ce.height,0,ze,He,ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ct&&B&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,be,lt[0].width,lt[0].height,ce.depth);for(let ne=0,Se=lt.length;ne<Se;ne++)De=lt[ne],R.format!==Wt?ze!==null?Ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,De.width,De.height,ce.depth,ze,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,De.width,De.height,ce.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,De.width,De.height,ce.depth,ze,He,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,De.width,De.height,ce.depth,0,ze,He,De.data)}else{Ct&&B&&t.texStorage2D(n.TEXTURE_2D,_e,be,lt[0].width,lt[0].height);for(let ne=0,Se=lt.length;ne<Se;ne++)De=lt[ne],R.format!==Wt?ze!==null?Ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,De.width,De.height,ze,He,De.data):t.texImage2D(n.TEXTURE_2D,ne,be,De.width,De.height,0,ze,He,De.data)}else if(R.isDataArrayTexture)Ct?(B&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,be,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ze,He,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,ze,He,ce.data);else if(R.isData3DTexture)Ct?(B&&t.texStorage3D(n.TEXTURE_3D,_e,be,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ze,He,ce.data)):t.texImage3D(n.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,ze,He,ce.data);else if(R.isFramebufferTexture){if(B)if(Ct)t.texStorage2D(n.TEXTURE_2D,_e,be,ce.width,ce.height);else{let ne=ce.width,Se=ce.height;for(let we=0;we<_e;we++)t.texImage2D(n.TEXTURE_2D,we,be,ne,Se,0,ze,He,null),ne>>=1,Se>>=1}}else if(lt.length>0&&Oe){Ct&&B&&t.texStorage2D(n.TEXTURE_2D,_e,be,lt[0].width,lt[0].height);for(let ne=0,Se=lt.length;ne<Se;ne++)De=lt[ne],Ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ze,He,De):t.texImage2D(n.TEXTURE_2D,ne,be,ze,He,De);R.generateMipmaps=!1}else Ct?(B&&t.texStorage2D(n.TEXTURE_2D,_e,be,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,He,ce)):t.texImage2D(n.TEXTURE_2D,0,be,ze,He,ce);U(R,Oe)&&F(ge),Ne.__version=Me.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function rn(N,R,le){if(R.image.length!==6)return;const ge=We(N,R),xe=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+le);const Me=i.get(xe);if(xe.version!==Me.__version||ge===!0){t.activeTexture(n.TEXTURE0+le),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ne=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!Ne&&!Te?ce[ne]=E(R.image[ne],!1,!0,p):ce[ne]=Te?R.image[ne].image:R.image[ne],ce[ne]=hn(R,ce[ne]);const Oe=ce[0],ze=P(Oe)||u,He=o.convert(R.format,R.colorSpace),be=o.convert(R.type),De=Z(R.internalFormat,He,be,R.colorSpace),lt=u&&R.isVideoTexture!==!0,Ct=Me.__version===void 0||ge===!0;let B=A(R,Oe,ze);Ie(n.TEXTURE_CUBE_MAP,R,ze);let _e;if(Ne){lt&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,B,De,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){_e=ce[ne].mipmaps;for(let Se=0;Se<_e.length;Se++){const we=_e[Se];R.format!==Wt?He!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,we.width,we.height,He,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,De,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,we.width,we.height,He,be,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,De,we.width,we.height,0,He,be,we.data)}}}else{_e=R.mipmaps,lt&&Ct&&(_e.length>0&&B++,t.texStorage2D(n.TEXTURE_CUBE_MAP,B,De,ce[0].width,ce[0].height));for(let ne=0;ne<6;ne++)if(Te){lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,He,be,ce[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,ce[ne].width,ce[ne].height,0,He,be,ce[ne].data);for(let Se=0;Se<_e.length;Se++){const vt=_e[Se].image[ne].image;lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,vt.width,vt.height,He,be,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,De,vt.width,vt.height,0,He,be,vt.data)}}else{lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,be,ce[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,De,He,be,ce[ne]);for(let Se=0;Se<_e.length;Se++){const we=_e[Se];lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,He,be,we.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,De,He,be,we.image[ne])}}}U(R,ze)&&F(n.TEXTURE_CUBE_MAP),Me.__version=xe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function je(N,R,le,ge,xe){const Me=o.convert(le.format,le.colorSpace),Ne=o.convert(le.type),Te=Z(le.internalFormat,Me,Ne,le.colorSpace);i.get(R).__hasExternalTextures||(xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,Te,R.width,R.height,R.depth,0,Me,Ne,null):t.texImage2D(xe,0,Te,R.width,R.height,0,Me,Ne,null)),t.bindFramebuffer(n.FRAMEBUFFER,N),St(R)?v.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,xe,i.get(le).__webglTexture,0,ot(R)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,xe,i.get(le).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(N,R,le){if(n.bindRenderbuffer(n.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let ge=n.DEPTH_COMPONENT16;if(le||St(R)){const xe=R.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Kt?ge=n.DEPTH_COMPONENT32F:xe.type===$i&&(ge=n.DEPTH_COMPONENT24));const Me=ot(R);St(R)?v.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ge,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ge,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){const ge=ot(R);le&&St(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,R.width,R.height):St(R)?v.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{const ge=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let xe=0;xe<ge.length;xe++){const Me=ge[xe],Ne=o.convert(Me.format,Me.colorSpace),Te=o.convert(Me.type),ce=Z(Me.internalFormat,Ne,Te,Me.colorSpace),Oe=ot(R);le&&St(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ce,R.width,R.height):St(R)?v.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,ce,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ce,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),X(R.depthTexture,0);const ge=i.get(R.depthTexture).__webglTexture,xe=ot(R);if(R.depthTexture.format===qr)St(R)?v.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(R.depthTexture.format===Zr)St(R)?v.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Xe(N){const R=i.get(N),le=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");Tt(R.__webglFramebuffer,N)}else if(le){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]=n.createRenderbuffer(),K(R.__webglDepthbuffer[ge],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),K(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(N,R,le){const ge=i.get(N);R!==void 0&&je(ge.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),le!==void 0&&Xe(N)}function et(N){const R=N.texture,le=i.get(N),ge=i.get(R);N.addEventListener("dispose",ae),N.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=R.version,l.memory.textures++);const xe=N.isWebGLCubeRenderTarget===!0,Me=N.isWebGLMultipleRenderTargets===!0,Ne=P(N)||u;if(xe){le.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)le.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(le.__webglFramebuffer=n.createFramebuffer(),Me)if(a.drawBuffers){const Te=N.texture;for(let ce=0,Oe=Te.length;ce<Oe;ce++){const ze=i.get(Te[ce]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&N.samples>0&&St(N)===!1){const Te=Me?R:[R];le.__webglMultisampledFramebuffer=n.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let ce=0;ce<Te.length;ce++){const Oe=Te[ce];le.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const ze=o.convert(Oe.format,Oe.colorSpace),He=o.convert(Oe.type),be=Z(Oe.internalFormat,ze,He,Oe.colorSpace,N.isXRRenderTarget===!0),De=ot(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,be,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,le.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(le.__webglDepthRenderbuffer=n.createRenderbuffer(),K(le.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,R,Ne);for(let Te=0;Te<6;Te++)je(le.__webglFramebuffer[Te],N,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te);U(R,Ne)&&F(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Te=N.texture;for(let ce=0,Oe=Te.length;ce<Oe;ce++){const ze=Te[ce],He=i.get(ze);t.bindTexture(n.TEXTURE_2D,He.__webglTexture),Ie(n.TEXTURE_2D,ze,Ne),je(le.__webglFramebuffer,N,ze,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D),U(ze,Ne)&&F(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(u?Te=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ge.__webglTexture),Ie(Te,R,Ne),je(le.__webglFramebuffer,N,R,n.COLOR_ATTACHMENT0,Te),U(R,Ne)&&F(Te),t.unbindTexture()}N.depthBuffer&&Xe(N)}function Nt(N){const R=P(N)||u,le=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ge=0,xe=le.length;ge<xe;ge++){const Me=le[ge];if(U(Me,R)){const Ne=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(Me).__webglTexture;t.bindTexture(Ne,Te),F(Ne),t.unbindTexture()}}}function mt(N){if(u&&N.samples>0&&St(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],le=N.width,ge=N.height;let xe=n.COLOR_BUFFER_BIT;const Me=[],Ne=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(N),ce=N.isWebGLMultipleRenderTargets===!0;if(ce)for(let Oe=0;Oe<R.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<R.length;Oe++){Me.push(n.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&Me.push(Ne);const ze=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(ze===!1&&(N.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),ce){const He=i.get(R[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,le,ge,0,0,le,ge,xe,n.NEAREST),S&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<R.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ze=i.get(R[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function ot(N){return Math.min(m,N.samples)}function St(N){const R=i.get(N);return u&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function sn(N){const R=l.render.frame;M.get(N)!==R&&(M.set(N,R),N.update())}function hn(N,R){const le=N.colorSpace,ge=N.format,xe=N.type;return N.isCompressedTexture===!0||N.format===nf||le!==zi&&le!==Ar&&(le===ct?u===!1?e.has("EXT_sRGB")===!0&&ge===Wt?(N.format=nf,N.minFilter=Ve,N.generateMipmaps=!1):R=rv.sRGBToLinear(R):(ge!==Wt||xe!==It)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),R}this.allocateTextureUnit=I,this.resetTextureUnits=se,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=he,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=je,this.useMultisampledRTT=St}function YM(n,e,t){const i=t.isWebGL2;function a(o,l=Ar){let u;if(o===It)return n.UNSIGNED_BYTE;if(o===Km)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Qm)return n.UNSIGNED_SHORT_5_5_5_1;if(o===w0)return n.BYTE;if(o===A0)return n.SHORT;if(o===vf)return n.UNSIGNED_SHORT;if(o===Zm)return n.INT;if(o===$i)return n.UNSIGNED_INT;if(o===Kt)return n.FLOAT;if(o===ei)return i?n.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===R0)return n.ALPHA;if(o===Wt)return n.RGBA;if(o===gf)return n.LUMINANCE;if(o===P0)return n.LUMINANCE_ALPHA;if(o===qr)return n.DEPTH_COMPONENT;if(o===Zr)return n.DEPTH_STENCIL;if(o===nf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===xf)return n.RED;if(o===Jm)return n.RED_INTEGER;if(o===$m)return n.RG;if(o===ev)return n.RG_INTEGER;if(o===tv)return n.RGBA_INTEGER;if(o===sc||o===ac||o===oc||o===lc)if(l===ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Sd||o===yd||o===_d||o===Md)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===Sd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===_d)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Md)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===C0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Ed||o===Td)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(o===Ed)return l===ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===Td)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===wd||o===Ad||o===Rd||o===Pd||o===Cd||o===bd||o===Dd||o===Ld||o===Ud||o===Id||o===Nd||o===Fd||o===Od||o===zd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(o===wd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ad)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Rd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Pd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Cd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===bd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Dd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ld)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ud)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Id)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Nd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Fd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Od)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===zd)return l===ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===uc)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(o===uc)return l===ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===b0||o===Bd||o===kd||o===Hd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(o===uc)return u.COMPRESSED_RED_RGTC1_EXT;if(o===Bd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===kd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Hd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===wr?i?n.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:a}}class qM extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Na extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,l=null;const u=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,i),g=this._getHandJoint(p,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const d=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=d.position.distanceTo(m.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tf extends Xt{constructor(e,t,i,a,o,l,u,f,p,d){if(d=d!==void 0?d:qr,d!==qr&&d!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===qr&&(i=$i),i===void 0&&d===Zr&&(i=wr),super(null,a,o,l,u,f,d,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:at,this.minFilter=f!==void 0?f:at,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class KM extends sr{constructor(e,t){super();const i=this;let a=null,o=1,l=null,u="local-floor",f=1,p=null,d=null,m=null,v=null,S=null,M=null;const T=t.getContextAttributes();let y=null,g=null;const w=[],E=[],P=new _n;P.layers.enable(1),P.viewport=new Ht;const C=new _n;C.layers.enable(2),C.viewport=new Ht;const U=[P,C],F=new qM;F.layers.enable(1),F.layers.enable(2);let Z=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=w[z];return Y===void 0&&(Y=new Dc,w[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=w[z];return Y===void 0&&(Y=new Dc,w[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=w[z];return Y===void 0&&(Y=new Dc,w[z]=Y),Y.getHandSpace()};function D(z){const Y=E.indexOf(z.inputSource);if(Y===-1)return;const he=w[Y];he!==void 0&&(he.update(z.inputSource,z.frame,p||l),he.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",ae);for(let z=0;z<w.length;z++){const Y=E[z];Y!==null&&(E[z]=null,w[z].disconnect(Y))}Z=null,A=null,e.setRenderTarget(y),S=null,v=null,m=null,a=null,g=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){u=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(z){p=z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",V),a.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:S}),g=new gt(S.framebufferWidth,S.framebufferHeight,{format:Wt,type:It,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Y=null,he=null,de=null;T.depth&&(de=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=T.stencil?Zr:qr,he=T.stencil?wr:$i);const pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:o};m=new XRWebGLBinding(a,t),v=m.createProjectionLayer(pe),a.updateRenderState({layers:[v]}),g=new gt(v.textureWidth,v.textureHeight,{format:Wt,type:It,depthTexture:new Tf(v.textureWidth,v.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Re=e.properties.get(g);Re.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(f),p=null,l=await a.requestReferenceSpace(u),X.setContext(a),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ae(z){for(let Y=0;Y<z.removed.length;Y++){const he=z.removed[Y],de=E.indexOf(he);de>=0&&(E[de]=null,w[de].disconnect(he))}for(let Y=0;Y<z.added.length;Y++){const he=z.added[Y];let de=E.indexOf(he);if(de===-1){for(let Re=0;Re<w.length;Re++)if(Re>=E.length){E.push(he),de=Re;break}else if(E[Re]===null){E[Re]=he,de=Re;break}if(de===-1)break}const pe=w[de];pe&&pe.connect(he)}}const j=new O,$=new O;function ie(z,Y,he){j.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const de=j.distanceTo($),pe=Y.projectionMatrix.elements,Re=he.projectionMatrix.elements,Ie=pe[14]/(pe[10]-1),We=pe[14]/(pe[10]+1),xt=(pe[9]+1)/pe[5],rn=(pe[9]-1)/pe[5],je=(pe[8]-1)/pe[0],K=(Re[8]+1)/Re[0],Tt=Ie*je,Xe=Ie*K,st=de/(-je+K),et=st*-je;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(st),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Nt=Ie+st,mt=We+st,ot=Tt-et,St=Xe+(de-et),sn=xt*We/mt*Nt,hn=rn*We/mt*Nt;z.projectionMatrix.makePerspective(ot,St,sn,hn,Nt,mt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function fe(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;F.near=C.near=P.near=z.near,F.far=C.far=P.far=z.far,(Z!==F.near||A!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,A=F.far);const Y=z.parent,he=F.cameras;fe(F,Y);for(let de=0;de<he.length;de++)fe(he[de],Y);he.length===2?ie(F,P,C):F.projectionMatrix.copy(P.projectionMatrix),se(z,F,Y)};function se(z,Y,he){he===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const de=z.children;for(let pe=0,Re=de.length;pe<Re;pe++)de[pe].updateMatrixWorld(!0);z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Wa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(z){f=z,v!==null&&(v.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)};let I=null;function G(z,Y){if(d=Y.getViewerPose(p||l),M=Y,d!==null){const he=d.views;S!==null&&(e.setRenderTargetFramebuffer(g,S.framebuffer),e.setRenderTarget(g));let de=!1;he.length!==F.cameras.length&&(F.cameras.length=0,de=!0);for(let pe=0;pe<he.length;pe++){const Re=he[pe];let Ie=null;if(S!==null)Ie=S.getViewport(Re);else{const xt=m.getViewSubImage(v,Re);Ie=xt.viewport,pe===0&&(e.setRenderTargetTextures(g,xt.colorTexture,v.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(g))}let We=U[pe];We===void 0&&(We=new _n,We.layers.enable(pe),We.viewport=new Ht,U[pe]=We),We.matrix.fromArray(Re.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Re.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),pe===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),de===!0&&F.cameras.push(We)}}for(let he=0;he<w.length;he++){const de=E[he],pe=w[he];de!==null&&pe!==void 0&&pe.update(de,Y,p||l)}I&&I(z,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),M=null}const X=new gv;X.setAnimationLoop(G),this.setAnimationLoop=function(z){I=z},this.dispose=function(){}}}function QM(n,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,hv(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,w,E,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(y,g):g.isMeshToonMaterial?(o(y,g),m(y,g)):g.isMeshPhongMaterial?(o(y,g),d(y,g)):g.isMeshStandardMaterial?(o(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,P)):g.isMeshMatcapMaterial?(o(y,g),M(y,g)):g.isMeshDepthMaterial?o(y,g):g.isMeshDistanceMaterial?(o(y,g),T(y,g)):g.isMeshNormalMaterial?o(y,g):g.isLineBasicMaterial?(l(y,g),g.isLineDashedMaterial&&u(y,g)):g.isPointsMaterial?f(y,g,w,E):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===xn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===xn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const w=e.get(g).envMap;if(w&&(y.envMap.value=w,y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const E=n.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*E,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function u(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function f(y,g,w,E){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*w,y.scale.value=E*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,w){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const w=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function JM(n,e,t,i){let a={},o={},l=[];const u=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(w,E){const P=E.program;i.uniformBlockBinding(w,P)}function p(w,E){let P=a[w.id];P===void 0&&(M(w),P=d(w),a[w.id]=P,w.addEventListener("dispose",y));const C=E.program;i.updateUBOMapping(w,C);const U=e.render.frame;o[w.id]!==U&&(v(w),o[w.id]=U)}function d(w){const E=m();w.__bindingPointIndex=E;const P=n.createBuffer(),C=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,C,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,P),P}function m(){for(let w=0;w<u;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const E=a[w.id],P=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let U=0,F=P.length;U<F;U++){const Z=P[U];if(S(Z,U,C)===!0){const A=Z.__offset,D=Array.isArray(Z.value)?Z.value:[Z.value];let V=0;for(let ae=0;ae<D.length;ae++){const j=D[ae],$=T(j);typeof j=="number"?(Z.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,A+V,Z.__data)):j.isMatrix3?(Z.__data[0]=j.elements[0],Z.__data[1]=j.elements[1],Z.__data[2]=j.elements[2],Z.__data[3]=j.elements[0],Z.__data[4]=j.elements[3],Z.__data[5]=j.elements[4],Z.__data[6]=j.elements[5],Z.__data[7]=j.elements[0],Z.__data[8]=j.elements[6],Z.__data[9]=j.elements[7],Z.__data[10]=j.elements[8],Z.__data[11]=j.elements[0]):(j.toArray(Z.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,Z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(w,E,P){const C=w.value;if(P[E]===void 0){if(typeof C=="number")P[E]=C;else{const U=Array.isArray(C)?C:[C],F=[];for(let Z=0;Z<U.length;Z++)F.push(U[Z].clone());P[E]=F}return!0}else if(typeof C=="number"){if(P[E]!==C)return P[E]=C,!0}else{const U=Array.isArray(P[E])?P[E]:[P[E]],F=Array.isArray(C)?C:[C];for(let Z=0;Z<U.length;Z++){const A=U[Z];if(A.equals(F[Z])===!1)return A.copy(F[Z]),!0}}return!1}function M(w){const E=w.uniforms;let P=0;const C=16;let U=0;for(let F=0,Z=E.length;F<Z;F++){const A=E[F],D={boundary:0,storage:0},V=Array.isArray(A.value)?A.value:[A.value];for(let ae=0,j=V.length;ae<j;ae++){const $=V[ae],ie=T($);D.boundary+=ie.boundary,D.storage+=ie.storage}if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=P,F>0){U=P%C;const ae=C-U;U!==0&&ae-D.boundary<0&&(P+=C-U,A.__offset=P)}P+=D.storage}return U=P%C,U>0&&(P+=C-U),w.__size=P,w.__cache={},this}function T(w){const E={boundary:0,storage:0};return typeof w=="number"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function y(w){const E=w.target;E.removeEventListener("dispose",y);const P=l.indexOf(E.__bindingPointIndex);l.splice(P,1),n.deleteBuffer(a[E.id]),delete a[E.id],delete o[E.id]}function g(){for(const w in a)n.deleteBuffer(a[w]);l=[],a={},o={}}return{bind:f,update:p,dispose:g}}function $M(){const n=Xa("canvas");return n.style.display="block",n}class Ev{constructor(e={}){const{canvas:t=$M(),context:i=null,depth:a=!0,stencil:o=!0,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=l;const S=new Uint32Array(4),M=new Int32Array(4);let T=null,y=null;const g=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ct,this.useLegacyLights=!0,this.toneMapping=Oi,this.toneMappingExposure=1;const E=this;let P=!1,C=0,U=0,F=null,Z=-1,A=null;const D=new Ht,V=new Ht;let ae=null;const j=new qe(0);let $=0,ie=t.width,fe=t.height,se=1,I=null,G=null;const X=new Ht(0,0,ie,fe),z=new Ht(0,0,ie,fe);let Y=!1;const he=new vv;let de=!1,pe=!1,Re=null;const Ie=new Ze,We=new ve,xt=new O,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return F===null?se:1}let K=i;function Tt(b,J){for(let oe=0;oe<b.length;oe++){const q=b[oe],ue=t.getContext(q,J);if(ue!==null)return ue}return null}try{const b={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kr}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Se,!1),K===null){const J=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&J.shift(),K=Tt(J,b),K===null)throw Tt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xe,st,et,Nt,mt,ot,St,sn,hn,N,R,le,ge,xe,Me,Ne,Te,ce,Oe,ze,He,be,De,lt;function Ct(){Xe=new f_(K),st=new s_(K,Xe,e),Xe.init(st),be=new YM(K,Xe,st),et=new XM(K,Xe,st),Nt=new p_(K),mt=new LM,ot=new jM(K,Xe,et,mt,st,be,Nt),St=new o_(E),sn=new c_(E),hn=new Tx(K,st),De=new i_(K,Xe,hn,st),N=new h_(K,hn,Nt,De),R=new x_(K,N,hn,Nt),Oe=new g_(K,st,ot),Ne=new a_(mt),le=new DM(E,St,sn,Xe,st,De,Ne),ge=new QM(E,mt),xe=new IM,Me=new kM(Xe,st),ce=new n_(E,St,sn,et,R,v,f),Te=new WM(E,R,st),lt=new JM(K,Nt,st,et),ze=new r_(K,Xe,Nt,st),He=new d_(K,Xe,Nt,st),Nt.programs=le.programs,E.capabilities=st,E.extensions=Xe,E.properties=mt,E.renderLists=xe,E.shadowMap=Te,E.state=et,E.info=Nt}Ct();const B=new KM(E,K);this.xr=B,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(ie,fe,!1))},this.getSize=function(b){return b.set(ie,fe)},this.setSize=function(b,J,oe=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,fe=J,t.width=Math.floor(b*se),t.height=Math.floor(J*se),oe===!0&&(t.style.width=b+"px",t.style.height=J+"px"),this.setViewport(0,0,b,J)},this.getDrawingBufferSize=function(b){return b.set(ie*se,fe*se).floor()},this.setDrawingBufferSize=function(b,J,oe){ie=b,fe=J,se=oe,t.width=Math.floor(b*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,b,J)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,J,oe,q){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,J,oe,q),et.viewport(D.copy(X).multiplyScalar(se).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,J,oe,q){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,J,oe,q),et.scissor(V.copy(z).multiplyScalar(se).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){et.setScissorTest(Y=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(b=!0,J=!0,oe=!0){let q=0;if(b){let ue=!1;if(F!==null){const Pe=F.texture.format;ue=Pe===tv||Pe===ev||Pe===Jm}if(ue){const Pe=F.texture.type,Be=Pe===It||Pe===$i||Pe===vf||Pe===wr||Pe===Km||Pe===Qm,Ye=ce.getClearColor(),Ke=ce.getClearAlpha(),ft=Ye.r,Qe=Ye.g,Je=Ye.b;Be?(S[0]=ft,S[1]=Qe,S[2]=Je,S[3]=Ke,K.clearBufferuiv(K.COLOR,0,S)):(M[0]=ft,M[1]=Qe,M[2]=Je,M[3]=Ke,K.clearBufferiv(K.COLOR,0,M))}else q|=K.COLOR_BUFFER_BIT}J&&(q|=K.DEPTH_BUFFER_BIT),oe&&(q|=K.STENCIL_BUFFER_BIT),K.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),xe.dispose(),Me.dispose(),mt.dispose(),St.dispose(),sn.dispose(),R.dispose(),De.dispose(),lt.dispose(),le.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ft),B.removeEventListener("sessionend",Wn),Re&&(Re.dispose(),Re=null),Sn.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Nt.autoReset,J=Te.enabled,oe=Te.autoUpdate,q=Te.needsUpdate,ue=Te.type;Ct(),Nt.autoReset=b,Te.enabled=J,Te.autoUpdate=oe,Te.needsUpdate=q,Te.type=ue}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){const J=b.target;J.removeEventListener("dispose",we),vt(J)}function vt(b){Lt(b),mt.remove(b)}function Lt(b){const J=mt.get(b).programs;J!==void 0&&(J.forEach(function(oe){le.releaseProgram(oe)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,J,oe,q,ue,Pe){J===null&&(J=rn);const Be=ue.isMesh&&ue.matrixWorld.determinant()<0,Ye=Ql(b,J,oe,q,ue);et.setMaterial(q,Be);let Ke=oe.index,ft=1;q.wireframe===!0&&(Ke=N.getWireframeAttribute(oe),ft=2);const Qe=oe.drawRange,Je=oe.attributes.position;let Ut=Qe.start*ft,Ot=(Qe.start+Qe.count)*ft;Pe!==null&&(Ut=Math.max(Ut,Pe.start*ft),Ot=Math.min(Ot,(Pe.start+Pe.count)*ft)),Ke!==null?(Ut=Math.max(Ut,0),Ot=Math.min(Ot,Ke.count)):Je!=null&&(Ut=Math.max(Ut,0),Ot=Math.min(Ot,Je.count));const Xn=Ot-Ut;if(Xn<0||Xn===1/0)return;De.setup(ue,q,Ye,oe,Ke);let jn,bt=ze;if(Ke!==null&&(jn=hn.get(Ke),bt=He,bt.setIndex(jn)),ue.isMesh)q.wireframe===!0?(et.setLineWidth(q.wireframeLinewidth*je()),bt.setMode(K.LINES)):bt.setMode(K.TRIANGLES);else if(ue.isLine){let nt=q.linewidth;nt===void 0&&(nt=1),et.setLineWidth(nt*je()),ue.isLineSegments?bt.setMode(K.LINES):ue.isLineLoop?bt.setMode(K.LINE_LOOP):bt.setMode(K.LINE_STRIP)}else ue.isPoints?bt.setMode(K.POINTS):ue.isSprite&&bt.setMode(K.TRIANGLES);if(ue.isInstancedMesh)bt.renderInstances(Ut,Xn,ue.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Rt=Math.min(oe.instanceCount,nt);bt.renderInstances(Ut,Xn,Rt)}else bt.render(Ut,Xn)},this.compile=function(b,J){function oe(q,ue,Pe){q.transparent===!0&&q.side===$n&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,Ri(q,ue,Pe),q.side=nr,q.needsUpdate=!0,Ri(q,ue,Pe),q.side=$n):Ri(q,ue,Pe)}y=Me.get(b),y.init(),w.push(y),b.traverseVisible(function(q){q.isLight&&q.layers.test(J.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights(E.useLegacyLights),b.traverse(function(q){const ue=q.material;if(ue)if(Array.isArray(ue))for(let Pe=0;Pe<ue.length;Pe++){const Be=ue[Pe];oe(Be,b,q)}else oe(ue,b,q)}),w.pop(),y=null};let Qt=null;function Vn(b){Qt&&Qt(b)}function Ft(){Sn.stop()}function Wn(){Sn.start()}const Sn=new gv;Sn.setAnimationLoop(Vn),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(b){Qt=b,B.setAnimationLoop(b),b===null?Sn.stop():Sn.start()},B.addEventListener("sessionstart",Ft),B.addEventListener("sessionend",Wn),this.render=function(b,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(J),J=B.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,J,F),y=Me.get(b,w.length),y.init(),w.push(y),Ie.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),he.setFromProjectionMatrix(Ie),pe=this.localClippingEnabled,de=Ne.init(this.clippingPlanes,pe),T=xe.get(b,g.length),T.init(),g.push(T),to(b,J,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(I,G),this.info.render.frame++,de===!0&&Ne.beginShadows();const oe=y.state.shadowsArray;if(Te.render(oe,b,J),de===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(T,b),y.setupLights(E.useLegacyLights),J.isArrayCamera){const q=J.cameras;for(let ue=0,Pe=q.length;ue<Pe;ue++){const Be=q[ue];no(T,b,Be,Be.viewport)}}else no(T,b,J);F!==null&&(ot.updateMultisampleRenderTarget(F),ot.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(E,b,J),De.resetDefaultState(),Z=-1,A=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function to(b,J,oe,q){if(b.visible===!1)return;if(b.layers.test(J.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(J);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||he.intersectsSprite(b)){q&&xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ie);const Be=R.update(b),Ye=b.material;Ye.visible&&T.push(b,Be,Ye,oe,xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||he.intersectsObject(b))){const Be=R.update(b),Ye=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xt.copy(b.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),xt.copy(Be.boundingSphere.center)),xt.applyMatrix4(b.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ye)){const Ke=Be.groups;for(let ft=0,Qe=Ke.length;ft<Qe;ft++){const Je=Ke[ft],Ut=Ye[Je.materialIndex];Ut&&Ut.visible&&T.push(b,Be,Ut,oe,xt.z,Je)}}else Ye.visible&&T.push(b,Be,Ye,oe,xt.z,null)}}const Pe=b.children;for(let Be=0,Ye=Pe.length;Be<Ye;Be++)to(Pe[Be],J,oe,q)}function no(b,J,oe,q){const ue=b.opaque,Pe=b.transmissive,Be=b.transparent;y.setupLightsView(oe),de===!0&&Ne.setGlobalState(E.clippingPlanes,oe),Pe.length>0&&io(ue,Pe,J,oe),q&&et.viewport(D.copy(q)),ue.length>0&&lr(ue,J,oe),Pe.length>0&&lr(Pe,J,oe),Be.length>0&&lr(Be,J,oe),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function io(b,J,oe,q){const ue=st.isWebGL2;Re===null&&(Re=new gt(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?ei:It,minFilter:Va,samples:ue?4:0})),E.getDrawingBufferSize(We),ue?Re.setSize(We.x,We.y):Re.setSize(Bl(We.x),Bl(We.y));const Pe=E.getRenderTarget();E.setRenderTarget(Re),E.getClearColor(j),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear();const Be=E.toneMapping;E.toneMapping=Oi,lr(b,oe,q),ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re);let Ye=!1;for(let Ke=0,ft=J.length;Ke<ft;Ke++){const Qe=J[Ke],Je=Qe.object,Ut=Qe.geometry,Ot=Qe.material,Xn=Qe.group;if(Ot.side===$n&&Je.layers.test(q.layers)){const jn=Ot.side;Ot.side=xn,Ot.needsUpdate=!0,ro(Je,oe,q,Ut,Ot,Xn),Ot.side=jn,Ot.needsUpdate=!0,Ye=!0}}Ye===!0&&(ot.updateMultisampleRenderTarget(Re),ot.updateRenderTargetMipmap(Re)),E.setRenderTarget(Pe),E.setClearColor(j,$),E.toneMapping=Be}function lr(b,J,oe){const q=J.isScene===!0?J.overrideMaterial:null;for(let ue=0,Pe=b.length;ue<Pe;ue++){const Be=b[ue],Ye=Be.object,Ke=Be.geometry,ft=q===null?Be.material:q,Qe=Be.group;Ye.layers.test(oe.layers)&&ro(Ye,J,oe,Ke,ft,Qe)}}function ro(b,J,oe,q,ue,Pe){b.onBeforeRender(E,J,oe,q,ue,Pe),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ue.onBeforeRender(E,J,oe,q,b,Pe),ue.transparent===!0&&ue.side===$n&&ue.forceSinglePass===!1?(ue.side=xn,ue.needsUpdate=!0,E.renderBufferDirect(oe,J,q,ue,b,Pe),ue.side=nr,ue.needsUpdate=!0,E.renderBufferDirect(oe,J,q,ue,b,Pe),ue.side=$n):E.renderBufferDirect(oe,J,q,ue,b,Pe),b.onAfterRender(E,J,oe,q,ue,Pe)}function Ri(b,J,oe){J.isScene!==!0&&(J=rn);const q=mt.get(b),ue=y.state.lights,Pe=y.state.shadowsArray,Be=ue.state.version,Ye=le.getParameters(b,ue.state,Pe,J,oe),Ke=le.getProgramCacheKey(Ye);let ft=q.programs;q.environment=b.isMeshStandardMaterial?J.environment:null,q.fog=J.fog,q.envMap=(b.isMeshStandardMaterial?sn:St).get(b.envMap||q.environment),ft===void 0&&(b.addEventListener("dispose",we),ft=new Map,q.programs=ft);let Qe=ft.get(Ke);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Be)return so(b,Ye),Qe}else Ye.uniforms=le.getUniforms(b),b.onBuild(oe,Ye,E),b.onBeforeCompile(Ye,E),Qe=le.acquireProgram(Ye,Ke),ft.set(Ke,Qe),q.uniforms=Ye.uniforms;const Je=q.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Ne.uniform),so(b,Ye),q.needsLights=$l(b),q.lightsStateVersion=Be,q.needsLights&&(Je.ambientLightColor.value=ue.state.ambient,Je.lightProbe.value=ue.state.probe,Je.directionalLights.value=ue.state.directional,Je.directionalLightShadows.value=ue.state.directionalShadow,Je.spotLights.value=ue.state.spot,Je.spotLightShadows.value=ue.state.spotShadow,Je.rectAreaLights.value=ue.state.rectArea,Je.ltc_1.value=ue.state.rectAreaLTC1,Je.ltc_2.value=ue.state.rectAreaLTC2,Je.pointLights.value=ue.state.point,Je.pointLightShadows.value=ue.state.pointShadow,Je.hemisphereLights.value=ue.state.hemi,Je.directionalShadowMap.value=ue.state.directionalShadowMap,Je.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Je.spotShadowMap.value=ue.state.spotShadowMap,Je.spotLightMatrix.value=ue.state.spotLightMatrix,Je.spotLightMap.value=ue.state.spotLightMap,Je.pointShadowMap.value=ue.state.pointShadowMap,Je.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Ut=Qe.getUniforms(),Ot=Ul.seqWithValue(Ut.seq,Je);return q.currentProgram=Qe,q.uniformsList=Ot,Qe}function so(b,J){const oe=mt.get(b);oe.outputColorSpace=J.outputColorSpace,oe.instancing=J.instancing,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Ql(b,J,oe,q,ue){J.isScene!==!0&&(J=rn),ot.resetTextureUnits();const Pe=J.fog,Be=q.isMeshStandardMaterial?J.environment:null,Ye=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zi,Ke=(q.isMeshStandardMaterial?sn:St).get(q.envMap||Be),ft=q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Qe=!!oe.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Je=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,Ot=!!oe.morphAttributes.color,Xn=q.toneMapped?E.toneMapping:Oi,jn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,bt=jn!==void 0?jn.length:0,nt=mt.get(q),Rt=y.state.lights;if(de===!0&&(pe===!0||b!==A)){const An=b===A&&q.id===Z;Ne.setState(q,b,An)}let tt=!1;q.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Rt.state.version||nt.outputColorSpace!==Ye||ue.isInstancedMesh&&nt.instancing===!1||!ue.isInstancedMesh&&nt.instancing===!0||ue.isSkinnedMesh&&nt.skinning===!1||!ue.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ke||q.fog===!0&&nt.fog!==Pe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ne.numPlanes||nt.numIntersection!==Ne.numIntersection)||nt.vertexAlphas!==ft||nt.vertexTangents!==Qe||nt.morphTargets!==Je||nt.morphNormals!==Ut||nt.morphColors!==Ot||nt.toneMapping!==Xn||st.isWebGL2===!0&&nt.morphTargetsCount!==bt)&&(tt=!0):(tt=!0,nt.__version=q.version);let wn=nt.currentProgram;tt===!0&&(wn=Ri(q,J,ue));let an=!1,Jt=!1,di=!1;const jt=wn.getUniforms(),Yt=nt.uniforms;if(et.useProgram(wn.program)&&(an=!0,Jt=!0,di=!0),q.id!==Z&&(Z=q.id,Jt=!0),an||A!==b){if(jt.setValue(K,"projectionMatrix",b.projectionMatrix),st.logarithmicDepthBuffer&&jt.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),A!==b&&(A=b,Jt=!0,di=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const An=jt.map.cameraPosition;An!==void 0&&An.setValue(K,xt.setFromMatrixPosition(b.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&jt.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ue.isSkinnedMesh)&&jt.setValue(K,"viewMatrix",b.matrixWorldInverse)}if(ue.isSkinnedMesh){jt.setOptional(K,ue,"bindMatrix"),jt.setOptional(K,ue,"bindMatrixInverse");const An=ue.skeleton;An&&(st.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),jt.setValue(K,"boneTexture",An.boneTexture,ot),jt.setValue(K,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ur=oe.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0&&st.isWebGL2===!0)&&Oe.update(ue,oe,wn),(Jt||nt.receiveShadow!==ue.receiveShadow)&&(nt.receiveShadow=ue.receiveShadow,jt.setValue(K,"receiveShadow",ue.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Yt.envMap.value=Ke,Yt.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Jt&&(jt.setValue(K,"toneMappingExposure",E.toneMappingExposure),nt.needsLights&&Jl(Yt,di),Pe&&q.fog===!0&&ge.refreshFogUniforms(Yt,Pe),ge.refreshMaterialUniforms(Yt,q,se,fe,Re),Ul.upload(K,nt.uniformsList,Yt,ot)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ul.upload(K,nt.uniformsList,Yt,ot),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&jt.setValue(K,"center",ue.center),jt.setValue(K,"modelViewMatrix",ue.modelViewMatrix),jt.setValue(K,"normalMatrix",ue.normalMatrix),jt.setValue(K,"modelMatrix",ue.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const An=q.uniformsGroups;for(let $r=0,es=An.length;$r<es;$r++)if(st.isWebGL2){const ta=An[$r];lt.update(ta,wn),lt.bind(ta,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Jl(b,J){b.ambientLightColor.needsUpdate=J,b.lightProbe.needsUpdate=J,b.directionalLights.needsUpdate=J,b.directionalLightShadows.needsUpdate=J,b.pointLights.needsUpdate=J,b.pointLightShadows.needsUpdate=J,b.spotLights.needsUpdate=J,b.spotLightShadows.needsUpdate=J,b.rectAreaLights.needsUpdate=J,b.hemisphereLights.needsUpdate=J}function $l(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,J,oe){mt.get(b.texture).__webglTexture=J,mt.get(b.depthTexture).__webglTexture=oe;const q=mt.get(b);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=oe===void 0,q.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,J){const oe=mt.get(b);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(b,J=0,oe=0){F=b,C=J,U=oe;let q=!0,ue=null,Pe=!1,Be=!1;if(b){const Ke=mt.get(b);Ke.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(K.FRAMEBUFFER,null),q=!1):Ke.__webglFramebuffer===void 0?ot.setupRenderTarget(b):Ke.__hasExternalTextures&&ot.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);const ft=b.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Be=!0);const Qe=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ue=Qe[J],Pe=!0):st.isWebGL2&&b.samples>0&&ot.useMultisampledRTT(b)===!1?ue=mt.get(b).__webglMultisampledFramebuffer:ue=Qe,D.copy(b.viewport),V.copy(b.scissor),ae=b.scissorTest}else D.copy(X).multiplyScalar(se).floor(),V.copy(z).multiplyScalar(se).floor(),ae=Y;if(et.bindFramebuffer(K.FRAMEBUFFER,ue)&&st.drawBuffers&&q&&et.drawBuffers(b,ue),et.viewport(D),et.scissor(V),et.setScissorTest(ae),Pe){const Ke=mt.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ke.__webglTexture,oe)}else if(Be){const Ke=mt.get(b.texture),ft=J||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ke.__webglTexture,oe||0,ft)}Z=-1},this.readRenderTargetPixels=function(b,J,oe,q,ue,Pe,Be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){et.bindFramebuffer(K.FRAMEBUFFER,Ye);try{const Ke=b.texture,ft=Ke.format,Qe=Ke.type;if(ft!==Wt&&be.convert(ft)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Qe===ei&&(Xe.has("EXT_color_buffer_half_float")||st.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(Qe!==It&&be.convert(Qe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Kt&&(st.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=b.width-q&&oe>=0&&oe<=b.height-ue&&K.readPixels(J,oe,q,ue,be.convert(ft),be.convert(Qe),Pe)}finally{const Ke=F!==null?mt.get(F).__webglFramebuffer:null;et.bindFramebuffer(K.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(b,J,oe=0){const q=Math.pow(2,-oe),ue=Math.floor(J.image.width*q),Pe=Math.floor(J.image.height*q);ot.setTexture2D(J,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,b.x,b.y,ue,Pe),et.unbindTexture()},this.copyTextureToTexture=function(b,J,oe,q=0){const ue=J.image.width,Pe=J.image.height,Be=be.convert(oe.format),Ye=be.convert(oe.type);ot.setTexture2D(oe,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,oe.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,oe.unpackAlignment),J.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,q,b.x,b.y,ue,Pe,Be,Ye,J.image.data):J.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,q,b.x,b.y,J.mipmaps[0].width,J.mipmaps[0].height,Be,J.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,q,b.x,b.y,Be,Ye,J.image),q===0&&oe.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(b,J,oe,q,ue=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,Be=b.max.y-b.min.y+1,Ye=b.max.z-b.min.z+1,Ke=be.convert(q.format),ft=be.convert(q.type);let Qe;if(q.isData3DTexture)ot.setTexture3D(q,0),Qe=K.TEXTURE_3D;else if(q.isDataArrayTexture)ot.setTexture2DArray(q,0),Qe=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,q.unpackAlignment);const Je=K.getParameter(K.UNPACK_ROW_LENGTH),Ut=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Ot=K.getParameter(K.UNPACK_SKIP_PIXELS),Xn=K.getParameter(K.UNPACK_SKIP_ROWS),jn=K.getParameter(K.UNPACK_SKIP_IMAGES),bt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,bt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,bt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,b.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,b.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,b.min.z),oe.isDataTexture||oe.isData3DTexture?K.texSubImage3D(Qe,ue,J.x,J.y,J.z,Pe,Be,Ye,Ke,ft,bt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Qe,ue,J.x,J.y,J.z,Pe,Be,Ye,Ke,bt.data)):K.texSubImage3D(Qe,ue,J.x,J.y,J.z,Pe,Be,Ye,Ke,ft,bt),K.pixelStorei(K.UNPACK_ROW_LENGTH,Je),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ut),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Ot),K.pixelStorei(K.UNPACK_SKIP_ROWS,Xn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,jn),ue===0&&q.generateMipmaps&&K.generateMipmap(Qe),et.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ot.setTextureCube(b,0):b.isData3DTexture?ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ot.setTexture2DArray(b,0):ot.setTexture2D(b,0),et.unbindTexture()},this.resetState=function(){C=0,U=0,F=null,et.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Ti:Hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?ct:zi}}class eE extends Ev{}eE.prototype.isWebGL1Renderer=!0;let ja=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class jl extends Xt{constructor(e=null,t=1,i=1,a,o,l,u,f,p=at,d=at,m,v){super(null,l,u,f,p,d,a,o,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tE extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ap=new O,Rp=new O,Pp=new Ze,Lc=new Gl,Sl=new Ks;class nE extends Gn{constructor(e=new ti,t=new tE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Ap.fromBufferAttribute(t,a-1),Rp.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Ap.distanceTo(Rp);e.setAttribute("lineDistance",new tr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=o,e.ray.intersectsSphere(Sl)===!1)return;Pp.copy(a).invert(),Lc.copy(e.ray).applyMatrix4(Pp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,p=new O,d=new O,m=new O,v=new O,S=this.isLineSegments?2:1,M=i.index,y=i.attributes.position;if(M!==null){const g=Math.max(0,l.start),w=Math.min(M.count,l.start+l.count);for(let E=g,P=w-1;E<P;E+=S){const C=M.getX(E),U=M.getX(E+1);if(p.fromBufferAttribute(y,C),d.fromBufferAttribute(y,U),Lc.distanceSqToSegment(p,d,v,m)>f)continue;v.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(v);Z<e.near||Z>e.far||t.push({distance:Z,point:m.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,l.start),w=Math.min(y.count,l.start+l.count);for(let E=g,P=w-1;E<P;E+=S){if(p.fromBufferAttribute(y,E),d.fromBufferAttribute(y,E+1),Lc.distanceSqToSegment(p,d,v,m)>f)continue;v.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(v);U<e.near||U>e.far||t.push({distance:U,point:m.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=a.length;o<l;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}const Cp=new O,bp=new O;class iE extends nE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)Cp.fromBufferAttribute(t,a),bp.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Cp.distanceTo(bp);e.setAttribute("lineDistance",new tr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rE extends Xt{constructor(e,t,i,a,o,l,u,f,p){super(e,t,i,a,o,l,u,f,p),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:Ve,this.magFilter=o!==void 0?o:Ve,this.generateMipmaps=!1;const d=this;function m(){d.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Dp extends Xt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=at,this.minFilter=at,this.generateMipmaps=!1,this.needsUpdate=!0}}class sE extends Xt{constructor(e,t,i,a,o,l,u,f,p){super(e,t,i,a,o,l,u,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class aE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let l=1;l<=e;l++)i=this.getPoint(l/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const o=i.length;let l;t?l=t:l=e*i[o-1];let u=0,f=o-1,p;for(;u<=f;)if(a=Math.floor(u+(f-u)/2),p=i[a]-l,p<0)u=a+1;else if(p>0)f=a-1;else{f=a;break}if(a=f,i[a]===l)return a/(o-1);const d=i[a],v=i[a+1]-d,S=(l-d)/v;return(a+S)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const l=this.getPoint(a),u=this.getPoint(o),f=t||(l.isVector2?new ve:new O);return f.copy(u).sub(l).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,a=[],o=[],l=[],u=new O,f=new Ze;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new O)}o[0]=new O,l[0]=new O;let p=Number.MAX_VALUE;const d=Math.abs(a[0].x),m=Math.abs(a[0].y),v=Math.abs(a[0].z);d<=p&&(p=d,i.set(1,0,0)),m<=p&&(p=m,i.set(0,1,0)),v<=p&&i.set(0,0,1),u.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],u),l[0].crossVectors(a[0],o[0]);for(let S=1;S<=e;S++){if(o[S]=o[S-1].clone(),l[S]=l[S-1].clone(),u.crossVectors(a[S-1],a[S]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(gn(a[S-1].dot(a[S]),-1,1));o[S].applyMatrix4(f.makeRotationAxis(u,M))}l[S].crossVectors(a[S],o[S])}if(t===!0){let S=Math.acos(gn(o[0].dot(o[e]),-1,1));S/=e,a[0].dot(u.crossVectors(o[0],o[e]))>0&&(S=-S);for(let M=1;M<=e;M++)o[M].applyMatrix4(f.makeRotationAxis(a[M],S*M)),l[M].crossVectors(a[M],o[M])}return{tangents:a,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function wf(){let n=0,e=0,t=0,i=0;function a(o,l,u,f){n=o,e=u,t=-3*o+3*l-2*u-f,i=2*o-2*l+u+f}return{initCatmullRom:function(o,l,u,f,p){a(l,u,p*(u-o),p*(f-l))},initNonuniformCatmullRom:function(o,l,u,f,p,d,m){let v=(l-o)/p-(u-o)/(p+d)+(u-l)/d,S=(u-l)/d-(f-l)/(d+m)+(f-u)/m;v*=d,S*=d,a(l,u,v,S)},calc:function(o){const l=o*o,u=l*o;return n+e*o+t*l+i*u}}}const yl=new O,Uc=new wf,Ic=new wf,Nc=new wf;class oE extends aE{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new O){const i=t,a=this.points,o=a.length,l=(o-(this.closed?0:1))*e;let u=Math.floor(l),f=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/o)+1)*o:f===0&&u===o-1&&(u=o-2,f=1);let p,d;this.closed||u>0?p=a[(u-1)%o]:(yl.subVectors(a[0],a[1]).add(a[0]),p=yl);const m=a[u%o],v=a[(u+1)%o];if(this.closed||u+2<o?d=a[(u+2)%o]:(yl.subVectors(a[o-1],a[o-2]).add(a[o-1]),d=yl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(m),S),T=Math.pow(m.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(d),S);T<1e-4&&(T=1),M<1e-4&&(M=T),y<1e-4&&(y=T),Uc.initNonuniformCatmullRom(p.x,m.x,v.x,d.x,M,T,y),Ic.initNonuniformCatmullRom(p.y,m.y,v.y,d.y,M,T,y),Nc.initNonuniformCatmullRom(p.z,m.z,v.z,d.z,M,T,y)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(p.x,m.x,v.x,d.x,this.tension),Ic.initCatmullRom(p.y,m.y,v.y,d.y,this.tension),Nc.initCatmullRom(p.z,m.z,v.z,d.z,this.tension));return i.set(Uc.calc(f),Ic.calc(f),Nc.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new O().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class lE extends ar{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Lp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uE{constructor(e,t,i){const a=this;let o=!1,l=0,u=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){u++,o===!1&&a.onStart!==void 0&&a.onStart(d,l,u),o=!0},this.itemEnd=function(d){l++,a.onProgress!==void 0&&a.onProgress(d,l,u),l===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return f?f(d):d},this.setURLModifier=function(d){return f=d,this},this.addHandler=function(d,m){return p.push(d,m),this},this.removeHandler=function(d){const m=p.indexOf(d);return m!==-1&&p.splice(m,2),this},this.getHandler=function(d){for(let m=0,v=p.length;m<v;m+=2){const S=p[m],M=p[m+1];if(S.global&&(S.lastIndex=0),S.test(d))return M}return null}}}const cE=new uE;class Af{constructor(e){this.manager=e!==void 0?e:cE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Af.DEFAULT_MATERIAL_NAME="__DEFAULT";class fE extends Af{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Lp.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=Xa("img");function f(){d(),Lp.add(e,this),t&&t(this),o.manager.itemEnd(e)}function p(m){d(),a&&a(m),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){u.removeEventListener("load",f,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class Yl extends Af{constructor(e){super(e)}load(e,t,i,a){const o=new Xt,l=new fE(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class hE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Up(){return(typeof performance>"u"?Date:performance).now()}class H{constructor(e){this.value=e}clone(){return new H(this.value.clone===void 0?this.value:this.value.clone())}}class Tv{constructor(e,t,i=0,a=1/0){this.ray=new Gl(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return of(e,this,i,t),i.sort(Ip),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)of(e[a],this,i,t);return i.sort(Ip),i}}function Ip(n,e){return n.distance-e.distance}function of(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const a=n.children;for(let o=0,l=a.length;o<l;o++)of(a[o],e,t,!0)}}class dE{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);var wv={exports:{}},Qr={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Qr.ConcurrentRoot=1;Qr.ContinuousEventPriority=4;Qr.DefaultEventPriority=16;Qr.DiscreteEventPriority=1;Qr.IdleEventPriority=536870912;Qr.LegacyRoot=0;wv.exports=Qr;var Fs=wv.exports;function pE(n){let e;const t=new Set,i=(p,d)=>{const m=typeof p=="function"?p(e):p;if(m!==e){const v=e;e=d?m:Object.assign({},e,m),t.forEach(S=>S(e,v))}},a=()=>e,o=(p,d=a,m=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let v=d(e);function S(){const M=d(e);if(!m(v,M)){const T=v;p(v=M,T)}}return t.add(S),()=>t.delete(S)},f={setState:i,getState:a,subscribe:(p,d,m)=>d||m?o(p,d,m):(t.add(p),()=>t.delete(p)),destroy:()=>t.clear()};return e=n(i,a,f),f}const mE=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Np=mE?ee.useEffect:ee.useLayoutEffect;function Av(n){const e=typeof n=="function"?pE(n):n,t=(i=e.getState,a=Object.is)=>{const[,o]=ee.useReducer(y=>y+1,0),l=e.getState(),u=ee.useRef(l),f=ee.useRef(i),p=ee.useRef(a),d=ee.useRef(!1),m=ee.useRef();m.current===void 0&&(m.current=i(l));let v,S=!1;(u.current!==l||f.current!==i||p.current!==a||d.current)&&(v=i(l),S=!a(m.current,v)),Np(()=>{S&&(m.current=v),u.current=l,f.current=i,p.current=a,d.current=!1});const M=ee.useRef(l);Np(()=>{const y=()=>{try{const w=e.getState(),E=f.current(w);p.current(m.current,E)||(u.current=w,m.current=E,o())}catch{d.current=!0,o()}},g=e.subscribe(y);return e.getState()!==M.current&&y(),g},[]);const T=S?v:m.current;return ee.useDebugValue(T),T};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const i=[t,e];return{next(){const a=i.length<=0;return{value:i.shift(),done:a}}}},t}var Rv={exports:{}},Fc={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function vE(){return Fp||(Fp=1,function(n){function e(I,G){var X=I.length;I.push(G);e:for(;0<X;){var z=X-1>>>1,Y=I[z];if(0<a(Y,G))I[z]=G,I[X]=Y,X=z;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],X=I.pop();if(X!==G){I[0]=X;e:for(var z=0,Y=I.length,he=Y>>>1;z<he;){var de=2*(z+1)-1,pe=I[de],Re=de+1,Ie=I[Re];if(0>a(pe,X))Re<Y&&0>a(Ie,pe)?(I[z]=Ie,I[Re]=X,z=Re):(I[z]=pe,I[de]=X,z=de);else if(Re<Y&&0>a(Ie,X))I[z]=Ie,I[Re]=X,z=Re;else break e}}return G}function a(I,G){var X=I.sortIndex-G.sortIndex;return X!==0?X:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var f=[],p=[],d=1,m=null,v=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(I){for(var G=t(p);G!==null;){if(G.callback===null)i(p);else if(G.startTime<=I)i(p),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(p)}}function P(I){if(T=!1,E(I),!M)if(t(f)!==null)M=!0,fe(C);else{var G=t(p);G!==null&&se(P,G.startTime-I)}}function C(I,G){M=!1,T&&(T=!1,g(Z),Z=-1),S=!0;var X=v;try{for(E(G),m=t(f);m!==null&&(!(m.expirationTime>G)||I&&!V());){var z=m.callback;if(typeof z=="function"){m.callback=null,v=m.priorityLevel;var Y=z(m.expirationTime<=G);G=n.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(f)&&i(f),E(G)}else i(f);m=t(f)}if(m!==null)var he=!0;else{var de=t(p);de!==null&&se(P,de.startTime-G),he=!1}return he}finally{m=null,v=X,S=!1}}var U=!1,F=null,Z=-1,A=5,D=-1;function V(){return!(n.unstable_now()-D<A)}function ae(){if(F!==null){var I=n.unstable_now();D=I;var G=!0;try{G=F(!0,I)}finally{G?j():(U=!1,F=null)}}else U=!1}var j;if(typeof w=="function")j=function(){w(ae)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ie=$.port2;$.port1.onmessage=ae,j=function(){ie.postMessage(null)}}else j=function(){y(ae,0)};function fe(I){F=I,U||(U=!0,j())}function se(I,G){Z=y(function(){I(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,fe(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(I){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var X=v;v=G;try{return I()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=v;v=I;try{return G()}finally{v=X}},n.unstable_scheduleCallback=function(I,G,X){var z=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?z+X:z):X=z,I){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=X+Y,I={id:d++,callback:G,priorityLevel:I,startTime:X,expirationTime:Y,sortIndex:-1},X>z?(I.sortIndex=X,e(p,I),t(f)===null&&I===t(p)&&(T?(g(Z),Z=-1):T=!0,se(P,X-z))):(I.sortIndex=Y,e(f,I),M||S||(M=!0,fe(C))),I},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(I){var G=v;return function(){var X=v;v=G;try{return I.apply(this,arguments)}finally{v=X}}}}(Oc)),Oc}var Op;function gE(){return Op||(Op=1,Fc.exports=vE()),Fc.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE=function(e){var t={},i=ee,a=gE(),o=Object.assign;function l(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)s+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,f=Symbol.for("react.element"),p=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),M=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),C=Symbol.iterator;function U(r){return r===null||typeof r!="object"?null:(r=C&&r[C]||r["@@iterator"],typeof r=="function"?r:null)}function F(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case d:return"Fragment";case p:return"Portal";case v:return"Profiler";case m:return"StrictMode";case y:return"Suspense";case g:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case M:return(r.displayName||"Context")+".Consumer";case S:return(r._context.displayName||"Context")+".Provider";case T:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case w:return s=r.displayName||null,s!==null?s:F(r.type)||"Memo";case E:s=r._payload,r=r._init;try{return F(r(s))}catch{}}return null}function Z(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return F(s);case 8:return s===m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function A(r){var s=r,c=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(c=s.return),r=s.return;while(r)}return s.tag===3?c:null}function D(r){if(A(r)!==r)throw Error(l(188))}function V(r){var s=r.alternate;if(!s){if(s=A(r),s===null)throw Error(l(188));return s!==r?null:r}for(var c=r,h=s;;){var x=c.return;if(x===null)break;var _=x.alternate;if(_===null){if(h=x.return,h!==null){c=h;continue}break}if(x.child===_.child){for(_=x.child;_;){if(_===c)return D(x),r;if(_===h)return D(x),s;_=_.sibling}throw Error(l(188))}if(c.return!==h.return)c=x,h=_;else{for(var L=!1,k=x.child;k;){if(k===c){L=!0,c=x,h=_;break}if(k===h){L=!0,h=x,c=_;break}k=k.sibling}if(!L){for(k=_.child;k;){if(k===c){L=!0,c=_,h=x;break}if(k===h){L=!0,h=_,c=x;break}k=k.sibling}if(!L)throw Error(l(189))}}if(c.alternate!==h)throw Error(l(190))}if(c.tag!==3)throw Error(l(188));return c.stateNode.current===c?r:s}function ae(r){return r=V(r),r!==null?j(r):null}function j(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=j(r);if(s!==null)return s;r=r.sibling}return null}function $(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){if(r.tag!==4){var s=$(r);if(s!==null)return s}r=r.sibling}return null}var ie=Array.isArray,fe=e.getPublicInstance,se=e.getRootHostContext,I=e.getChildHostContext,G=e.prepareForCommit,X=e.resetAfterCommit,z=e.createInstance,Y=e.appendInitialChild,he=e.finalizeInitialChildren,de=e.prepareUpdate,pe=e.shouldSetTextContent,Re=e.createTextInstance,Ie=e.scheduleTimeout,We=e.cancelTimeout,xt=e.noTimeout,rn=e.isPrimaryRenderer,je=e.supportsMutation,K=e.supportsPersistence,Tt=e.supportsHydration,Xe=e.getInstanceFromNode,st=e.preparePortalMount,et=e.getCurrentEventPriority,Nt=e.detachDeletedInstance,mt=e.supportsMicrotasks,ot=e.scheduleMicrotask,St=e.supportsTestSelectors,sn=e.findFiberRoot,hn=e.getBoundingRect,N=e.getTextContent,R=e.isHiddenSubtree,le=e.matchAccessibilityRole,ge=e.setFocusIfFocusable,xe=e.setupIntersectionObserver,Me=e.appendChild,Ne=e.appendChildToContainer,Te=e.commitTextUpdate,ce=e.commitMount,Oe=e.commitUpdate,ze=e.insertBefore,He=e.insertInContainerBefore,be=e.removeChild,De=e.removeChildFromContainer,lt=e.resetTextContent,Ct=e.hideInstance,B=e.hideTextInstance,_e=e.unhideInstance,ne=e.unhideTextInstance,Se=e.clearContainer,we=e.cloneInstance,vt=e.createContainerChildSet,Lt=e.appendChildToContainerChildSet,Qt=e.finalizeContainerChildren,Vn=e.replaceContainerChildren,Ft=e.cloneHiddenInstance,Wn=e.cloneHiddenTextInstance,Sn=e.canHydrateInstance,to=e.canHydrateTextInstance,no=e.canHydrateSuspenseInstance,io=e.isSuspenseInstancePending,lr=e.isSuspenseInstanceFallback,ro=e.registerSuspenseInstanceRetry,Ri=e.getNextHydratableSibling,so=e.getFirstHydratableChild,Ql=e.getFirstHydratableChildWithinContainer,Jl=e.getFirstHydratableChildWithinSuspenseInstance,$l=e.hydrateInstance,b=e.hydrateTextInstance,J=e.hydrateSuspenseInstance,oe=e.getNextHydratableInstanceAfterSuspenseInstance,q=e.commitHydratedContainer,ue=e.commitHydratedSuspenseInstance,Pe=e.clearSuspenseBoundary,Be=e.clearSuspenseBoundaryFromContainer,Ye=e.shouldDeleteUnhydratedTailInstances,Ke=e.didNotMatchHydratedContainerTextInstance,ft=e.didNotMatchHydratedTextInstance,Qe;function Je(r){if(Qe===void 0)try{throw Error()}catch(c){var s=c.stack.trim().match(/\n( *(at )?)/);Qe=s&&s[1]||""}return`
`+Qe+r}var Ut=!1;function Ot(r,s){if(!r||Ut)return"";Ut=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(me){var h=me}Reflect.construct(r,[],s)}else{try{s.call()}catch(me){h=me}r.call(s.prototype)}else{try{throw Error()}catch(me){h=me}r()}}catch(me){if(me&&h&&typeof me.stack=="string"){for(var x=me.stack.split(`
`),_=h.stack.split(`
`),L=x.length-1,k=_.length-1;1<=L&&0<=k&&x[L]!==_[k];)k--;for(;1<=L&&0<=k;L--,k--)if(x[L]!==_[k]){if(L!==1||k!==1)do if(L--,k--,0>k||x[L]!==_[k]){var re=`
`+x[L].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=L&&0<=k);break}}}finally{Ut=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?Je(r):""}var Xn=Object.prototype.hasOwnProperty,jn=[],bt=-1;function nt(r){return{current:r}}function Rt(r){0>bt||(r.current=jn[bt],jn[bt]=null,bt--)}function tt(r,s){bt++,jn[bt]=r.current,r.current=s}var wn={},an=nt(wn),Jt=nt(!1),di=wn;function jt(r,s){var c=r.type.contextTypes;if(!c)return wn;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var x={},_;for(_ in c)x[_]=s[_];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=x),x}function Yt(r){return r=r.childContextTypes,r!=null}function ur(){Rt(Jt),Rt(an)}function An(r,s,c){if(an.current!==wn)throw Error(l(168));tt(an,s),tt(Jt,c)}function $r(r,s,c){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var x in h)if(!(x in s))throw Error(l(108,Z(r)||"Unknown",x));return o({},c,h)}function es(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||wn,di=an.current,tt(an,r),tt(Jt,Jt.current),!0}function ta(r,s,c){var h=r.stateNode;if(!h)throw Error(l(169));c?(r=$r(r,s,di),h.__reactInternalMemoizedMergedChildContext=r,Rt(Jt),Rt(an),tt(an,r)):Rt(Jt),tt(Jt,c)}var pi=Math.clz32?Math.clz32:og,sg=Math.log,ag=Math.LN2;function og(r){return r>>>=0,r===0?32:31-(sg(r)/ag|0)|0}var ao=64,oo=4194304;function na(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function lo(r,s){var c=r.pendingLanes;if(c===0)return 0;var h=0,x=r.suspendedLanes,_=r.pingedLanes,L=c&268435455;if(L!==0){var k=L&~x;k!==0?h=na(k):(_&=L,_!==0&&(h=na(_)))}else L=c&~x,L!==0?h=na(L):_!==0&&(h=na(_));if(h===0)return 0;if(s!==0&&s!==h&&!(s&x)&&(x=h&-h,_=s&-s,x>=_||x===16&&(_&4194240)!==0))return s;if(h&4&&(h|=c&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)c=31-pi(s),x=1<<c,h|=r[c],s&=~x;return h}function lg(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ug(r,s){for(var c=r.suspendedLanes,h=r.pingedLanes,x=r.expirationTimes,_=r.pendingLanes;0<_;){var L=31-pi(_),k=1<<L,re=x[L];re===-1?(!(k&c)||k&h)&&(x[L]=lg(k,s)):re<=s&&(r.expiredLanes|=k),_&=~k}}function eu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function tu(r){for(var s=[],c=0;31>c;c++)s.push(r);return s}function ia(r,s,c){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-pi(s),r[s]=c}function cg(r,s){var c=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<c;){var x=31-pi(c),_=1<<x;s[x]=0,h[x]=-1,r[x]=-1,c&=~_}}function nu(r,s){var c=r.entangledLanes|=s;for(r=r.entanglements;c;){var h=31-pi(c),x=1<<h;x&s|r[h]&s&&(r[h]|=s),c&=~x}}var yt=0;function Nf(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var iu=a.unstable_scheduleCallback,Ff=a.unstable_cancelCallback,fg=a.unstable_shouldYield,hg=a.unstable_requestPaint,dn=a.unstable_now,ru=a.unstable_ImmediatePriority,dg=a.unstable_UserBlockingPriority,su=a.unstable_NormalPriority,pg=a.unstable_IdlePriority,uo=null,Pi=null;function mg(r){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(uo,r,void 0,(r.current.flags&128)===128)}catch{}}function vg(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ci=typeof Object.is=="function"?Object.is:vg,ki=null,co=!1,au=!1;function Of(r){ki===null?ki=[r]:ki.push(r)}function gg(r){co=!0,Of(r)}function bi(){if(!au&&ki!==null){au=!0;var r=0,s=yt;try{var c=ki;for(yt=1;r<c.length;r++){var h=c[r];do h=h(!0);while(h!==null)}ki=null,co=!1}catch(x){throw ki!==null&&(ki=ki.slice(r+1)),iu(ru,bi),x}finally{yt=s,au=!1}}return null}var xg=u.ReactCurrentBatchConfig;function fo(r,s){if(Ci(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var c=Object.keys(r),h=Object.keys(s);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var x=c[h];if(!Xn.call(s,x)||!Ci(r[x],s[x]))return!1}return!0}function Sg(r){switch(r.tag){case 5:return Je(r.type);case 16:return Je("Lazy");case 13:return Je("Suspense");case 19:return Je("SuspenseList");case 0:case 2:case 15:return r=Ot(r.type,!1),r;case 11:return r=Ot(r.type.render,!1),r;case 1:return r=Ot(r.type,!0),r;default:return""}}function mi(r,s){if(r&&r.defaultProps){s=o({},s),r=r.defaultProps;for(var c in r)s[c]===void 0&&(s[c]=r[c]);return s}return s}var ho=nt(null),po=null,ts=null,ou=null;function lu(){ou=ts=po=null}function zf(r,s,c){rn?(tt(ho,s._currentValue),s._currentValue=c):(tt(ho,s._currentValue2),s._currentValue2=c)}function uu(r){var s=ho.current;Rt(ho),rn?r._currentValue=s:r._currentValue2=s}function cu(r,s,c){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===c)break;r=r.return}}function ns(r,s){po=r,ou=ts=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zn=!0),r.firstContext=null)}function ni(r){var s=rn?r._currentValue:r._currentValue2;if(ou!==r)if(r={context:r,memoizedValue:s,next:null},ts===null){if(po===null)throw Error(l(308));ts=r,po.dependencies={lanes:0,firstContext:r}}else ts=ts.next=r;return s}var Di=null,cr=!1;function fu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Hi(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function fr(r,s){var c=r.updateQueue;c!==null&&(c=c.shared,$t!==null&&r.mode&1&&!(ht&2)?(r=c.interleaved,r===null?(s.next=s,Di===null?Di=[c]:Di.push(c)):(s.next=r.next,r.next=s),c.interleaved=s):(r=c.pending,r===null?s.next=s:(s.next=r.next,r.next=s),c.pending=s))}function mo(r,s,c){if(s=s.updateQueue,s!==null&&(s=s.shared,(c&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,c|=h,s.lanes=c,nu(r,c)}}function kf(r,s){var c=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var x=null,_=null;if(c=c.firstBaseUpdate,c!==null){do{var L={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};_===null?x=_=L:_=_.next=L,c=c.next}while(c!==null);_===null?x=_=s:_=_.next=s}else x=_=s;c={baseState:h.baseState,firstBaseUpdate:x,lastBaseUpdate:_,shared:h.shared,effects:h.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=s:r.next=s,c.lastBaseUpdate=s}function vo(r,s,c,h){var x=r.updateQueue;cr=!1;var _=x.firstBaseUpdate,L=x.lastBaseUpdate,k=x.shared.pending;if(k!==null){x.shared.pending=null;var re=k,me=re.next;re.next=null,L===null?_=me:L.next=me,L=re;var Ce=r.alternate;Ce!==null&&(Ce=Ce.updateQueue,k=Ce.lastBaseUpdate,k!==L&&(k===null?Ce.firstBaseUpdate=me:k.next=me,Ce.lastBaseUpdate=re))}if(_!==null){var it=x.baseState;L=0,Ce=me=re=null,k=_;do{var ke=k.lane,Dt=k.eventTime;if((h&ke)===ke){Ce!==null&&(Ce=Ce.next={eventTime:Dt,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ue=r,bn=k;switch(ke=s,Dt=c,bn.tag){case 1:if(Ue=bn.payload,typeof Ue=="function"){it=Ue.call(Dt,it,ke);break e}it=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=bn.payload,ke=typeof Ue=="function"?Ue.call(Dt,it,ke):Ue,ke==null)break e;it=o({},it,ke);break e;case 2:cr=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,ke=x.effects,ke===null?x.effects=[k]:ke.push(k))}else Dt={eventTime:Dt,lane:ke,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ce===null?(me=Ce=Dt,re=it):Ce=Ce.next=Dt,L|=ke;if(k=k.next,k===null){if(k=x.shared.pending,k===null)break;ke=k,k=ke.next,ke.next=null,x.lastBaseUpdate=ke,x.shared.pending=null}}while(1);if(Ce===null&&(re=it),x.baseState=re,x.firstBaseUpdate=me,x.lastBaseUpdate=Ce,s=x.shared.interleaved,s!==null){x=s;do L|=x.lane,x=x.next;while(x!==s)}else _===null&&(x.shared.lanes=0);fs|=L,r.lanes=L,r.memoizedState=it}}function Hf(r,s,c){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],x=h.callback;if(x!==null){if(h.callback=null,h=c,typeof x!="function")throw Error(l(191,x));x.call(h)}}}var Gf=new i.Component().refs;function hu(r,s,c,h){s=r.memoizedState,c=c(h,s),c=c==null?s:o({},s,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var go={isMounted:function(r){return(r=r._reactInternals)?A(r)===r:!1},enqueueSetState:function(r,s,c){r=r._reactInternals;var h=In(),x=pr(r),_=Hi(h,x);_.payload=s,c!=null&&(_.callback=c),fr(r,_),s=oi(r,x,h),s!==null&&mo(s,r,x)},enqueueReplaceState:function(r,s,c){r=r._reactInternals;var h=In(),x=pr(r),_=Hi(h,x);_.tag=1,_.payload=s,c!=null&&(_.callback=c),fr(r,_),s=oi(r,x,h),s!==null&&mo(s,r,x)},enqueueForceUpdate:function(r,s){r=r._reactInternals;var c=In(),h=pr(r),x=Hi(c,h);x.tag=2,s!=null&&(x.callback=s),fr(r,x),s=oi(r,h,c),s!==null&&mo(s,r,h)}};function Vf(r,s,c,h,x,_,L){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,_,L):s.prototype&&s.prototype.isPureReactComponent?!fo(c,h)||!fo(x,_):!0}function Wf(r,s,c){var h=!1,x=wn,_=s.contextType;return typeof _=="object"&&_!==null?_=ni(_):(x=Yt(s)?di:an.current,h=s.contextTypes,_=(h=h!=null)?jt(r,x):wn),s=new s(c,_),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=go,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=x,r.__reactInternalMemoizedMaskedChildContext=_),s}function Xf(r,s,c,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(c,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(c,h),s.state!==r&&go.enqueueReplaceState(s,s.state,null)}function du(r,s,c,h){var x=r.stateNode;x.props=c,x.state=r.memoizedState,x.refs=Gf,fu(r);var _=s.contextType;typeof _=="object"&&_!==null?x.context=ni(_):(_=Yt(s)?di:an.current,x.context=jt(r,_)),x.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(hu(r,s,_,c),x.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(s=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),s!==x.state&&go.enqueueReplaceState(x,x.state,null),vo(r,c,x,h),x.state=r.memoizedState),typeof x.componentDidMount=="function"&&(r.flags|=4194308)}var is=[],rs=0,xo=null,So=0,ii=[],ri=0,Rr=null,Gi=1,Vi="";function Pr(r,s){is[rs++]=So,is[rs++]=xo,xo=r,So=s}function jf(r,s,c){ii[ri++]=Gi,ii[ri++]=Vi,ii[ri++]=Rr,Rr=r;var h=Gi;r=Vi;var x=32-pi(h)-1;h&=~(1<<x),c+=1;var _=32-pi(s)+x;if(30<_){var L=x-x%5;_=(h&(1<<L)-1).toString(32),h>>=L,x-=L,Gi=1<<32-pi(s)+x|c<<x|h,Vi=_+r}else Gi=1<<_|c<<x|h,Vi=r}function pu(r){r.return!==null&&(Pr(r,1),jf(r,1,0))}function mu(r){for(;r===xo;)xo=is[--rs],is[rs]=null,So=is[--rs],is[rs]=null;for(;r===Rr;)Rr=ii[--ri],ii[ri]=null,Vi=ii[--ri],ii[ri]=null,Gi=ii[--ri],ii[ri]=null}var Yn=null,qn=null,Bt=!1,ra=!1,vi=null;function Yf(r,s){var c=li(5,null,null,0);c.elementType="DELETED",c.stateNode=s,c.return=r,s=r.deletions,s===null?(r.deletions=[c],r.flags|=16):s.push(c)}function qf(r,s){switch(r.tag){case 5:return s=Sn(s,r.type,r.pendingProps),s!==null?(r.stateNode=s,Yn=r,qn=so(s),!0):!1;case 6:return s=to(s,r.pendingProps),s!==null?(r.stateNode=s,Yn=r,qn=null,!0):!1;case 13:if(s=no(s),s!==null){var c=Rr!==null?{id:Gi,overflow:Vi}:null;return r.memoizedState={dehydrated:s,treeContext:c,retryLane:1073741824},c=li(18,null,null,0),c.stateNode=s,c.return=r,r.child=c,Yn=r,qn=null,!0}return!1;default:return!1}}function vu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function gu(r){if(Bt){var s=qn;if(s){var c=s;if(!qf(r,s)){if(vu(r))throw Error(l(418));s=Ri(c);var h=Yn;s&&qf(r,s)?Yf(h,c):(r.flags=r.flags&-4097|2,Bt=!1,Yn=r)}}else{if(vu(r))throw Error(l(418));r.flags=r.flags&-4097|2,Bt=!1,Yn=r}}}function Zf(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Yn=r}function sa(r){if(!Tt||r!==Yn)return!1;if(!Bt)return Zf(r),Bt=!0,!1;if(r.tag!==3&&(r.tag!==5||Ye(r.type)&&!pe(r.type,r.memoizedProps))){var s=qn;if(s){if(vu(r)){for(r=qn;r;)r=Ri(r);throw Error(l(418))}for(;s;)Yf(r,s),s=Ri(s)}}if(Zf(r),r.tag===13){if(!Tt)throw Error(l(316));if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));qn=oe(r)}else qn=Yn?Ri(r.stateNode):null;return!0}function ss(){Tt&&(qn=Yn=null,ra=Bt=!1)}function xu(r){vi===null?vi=[r]:vi.push(r)}function aa(r,s,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(l(309));var h=c.stateNode}if(!h)throw Error(l(147,r));var x=h,_=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(L){var k=x.refs;k===Gf&&(k=x.refs={}),L===null?delete k[_]:k[_]=L},s._stringRef=_,s)}if(typeof r!="string")throw Error(l(284));if(!c._owner)throw Error(l(290,r))}return r}function yo(r,s){throw r=Object.prototype.toString.call(s),Error(l(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Kf(r){var s=r._init;return s(r._payload)}function Qf(r){function s(Q,W){if(r){var te=Q.deletions;te===null?(Q.deletions=[W],Q.flags|=16):te.push(W)}}function c(Q,W){if(!r)return null;for(;W!==null;)s(Q,W),W=W.sibling;return null}function h(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function x(Q,W){return Q=vr(Q,W),Q.index=0,Q.sibling=null,Q}function _(Q,W,te){return Q.index=te,r?(te=Q.alternate,te!==null?(te=te.index,te<W?(Q.flags|=2,W):te):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function L(Q){return r&&Q.alternate===null&&(Q.flags|=2),Q}function k(Q,W,te,Ae){return W===null||W.tag!==6?(W=tc(te,Q.mode,Ae),W.return=Q,W):(W=x(W,te),W.return=Q,W)}function re(Q,W,te,Ae){var Le=te.type;return Le===d?Ce(Q,W,te.props.children,Ae,te.key):W!==null&&(W.elementType===Le||typeof Le=="object"&&Le!==null&&Le.$$typeof===E&&Kf(Le)===W.type)?(Ae=x(W,te.props),Ae.ref=aa(Q,W,te),Ae.return=Q,Ae):(Ae=Qo(te.type,te.key,te.props,null,Q.mode,Ae),Ae.ref=aa(Q,W,te),Ae.return=Q,Ae)}function me(Q,W,te,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=nc(te,Q.mode,Ae),W.return=Q,W):(W=x(W,te.children||[]),W.return=Q,W)}function Ce(Q,W,te,Ae,Le){return W===null||W.tag!==7?(W=Nr(te,Q.mode,Ae,Le),W.return=Q,W):(W=x(W,te),W.return=Q,W)}function it(Q,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=tc(""+W,Q.mode,te),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case f:return te=Qo(W.type,W.key,W.props,null,Q.mode,te),te.ref=aa(Q,null,W),te.return=Q,te;case p:return W=nc(W,Q.mode,te),W.return=Q,W;case E:var Ae=W._init;return it(Q,Ae(W._payload),te)}if(ie(W)||U(W))return W=Nr(W,Q.mode,te,null),W.return=Q,W;yo(Q,W)}return null}function ke(Q,W,te,Ae){var Le=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Le!==null?null:k(Q,W,""+te,Ae);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case f:return te.key===Le?re(Q,W,te,Ae):null;case p:return te.key===Le?me(Q,W,te,Ae):null;case E:return Le=te._init,ke(Q,W,Le(te._payload),Ae)}if(ie(te)||U(te))return Le!==null?null:Ce(Q,W,te,Ae,null);yo(Q,te)}return null}function Dt(Q,W,te,Ae,Le){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Q=Q.get(te)||null,k(W,Q,""+Ae,Le);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case f:return Q=Q.get(Ae.key===null?te:Ae.key)||null,re(W,Q,Ae,Le);case p:return Q=Q.get(Ae.key===null?te:Ae.key)||null,me(W,Q,Ae,Le);case E:var ut=Ae._init;return Dt(Q,W,te,ut(Ae._payload),Le)}if(ie(Ae)||U(Ae))return Q=Q.get(te)||null,Ce(W,Q,Ae,Le,null);yo(W,Ae)}return null}function Ue(Q,W,te,Ae){for(var Le=null,ut=null,rt=W,_t=W=0,mn=null;rt!==null&&_t<te.length;_t++){rt.index>_t?(mn=rt,rt=null):mn=rt.sibling;var Mt=ke(Q,rt,te[_t],Ae);if(Mt===null){rt===null&&(rt=mn);break}r&&rt&&Mt.alternate===null&&s(Q,rt),W=_(Mt,W,_t),ut===null?Le=Mt:ut.sibling=Mt,ut=Mt,rt=mn}if(_t===te.length)return c(Q,rt),Bt&&Pr(Q,_t),Le;if(rt===null){for(;_t<te.length;_t++)rt=it(Q,te[_t],Ae),rt!==null&&(W=_(rt,W,_t),ut===null?Le=rt:ut.sibling=rt,ut=rt);return Bt&&Pr(Q,_t),Le}for(rt=h(Q,rt);_t<te.length;_t++)mn=Dt(rt,Q,_t,te[_t],Ae),mn!==null&&(r&&mn.alternate!==null&&rt.delete(mn.key===null?_t:mn.key),W=_(mn,W,_t),ut===null?Le=mn:ut.sibling=mn,ut=mn);return r&&rt.forEach(function(gr){return s(Q,gr)}),Bt&&Pr(Q,_t),Le}function bn(Q,W,te,Ae){var Le=U(te);if(typeof Le!="function")throw Error(l(150));if(te=Le.call(te),te==null)throw Error(l(151));for(var ut=Le=null,rt=W,_t=W=0,mn=null,Mt=te.next();rt!==null&&!Mt.done;_t++,Mt=te.next()){rt.index>_t?(mn=rt,rt=null):mn=rt.sibling;var gr=ke(Q,rt,Mt.value,Ae);if(gr===null){rt===null&&(rt=mn);break}r&&rt&&gr.alternate===null&&s(Q,rt),W=_(gr,W,_t),ut===null?Le=gr:ut.sibling=gr,ut=gr,rt=mn}if(Mt.done)return c(Q,rt),Bt&&Pr(Q,_t),Le;if(rt===null){for(;!Mt.done;_t++,Mt=te.next())Mt=it(Q,Mt.value,Ae),Mt!==null&&(W=_(Mt,W,_t),ut===null?Le=Mt:ut.sibling=Mt,ut=Mt);return Bt&&Pr(Q,_t),Le}for(rt=h(Q,rt);!Mt.done;_t++,Mt=te.next())Mt=Dt(rt,Q,_t,Mt.value,Ae),Mt!==null&&(r&&Mt.alternate!==null&&rt.delete(Mt.key===null?_t:Mt.key),W=_(Mt,W,_t),ut===null?Le=Mt:ut.sibling=Mt,ut=Mt);return r&&rt.forEach(function(Zg){return s(Q,Zg)}),Bt&&Pr(Q,_t),Le}function ui(Q,W,te,Ae){if(typeof te=="object"&&te!==null&&te.type===d&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case f:e:{for(var Le=te.key,ut=W;ut!==null;){if(ut.key===Le){if(Le=te.type,Le===d){if(ut.tag===7){c(Q,ut.sibling),W=x(ut,te.props.children),W.return=Q,Q=W;break e}}else if(ut.elementType===Le||typeof Le=="object"&&Le!==null&&Le.$$typeof===E&&Kf(Le)===ut.type){c(Q,ut.sibling),W=x(ut,te.props),W.ref=aa(Q,ut,te),W.return=Q,Q=W;break e}c(Q,ut);break}else s(Q,ut);ut=ut.sibling}te.type===d?(W=Nr(te.props.children,Q.mode,Ae,te.key),W.return=Q,Q=W):(Ae=Qo(te.type,te.key,te.props,null,Q.mode,Ae),Ae.ref=aa(Q,W,te),Ae.return=Q,Q=Ae)}return L(Q);case p:e:{for(ut=te.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){c(Q,W.sibling),W=x(W,te.children||[]),W.return=Q,Q=W;break e}else{c(Q,W);break}else s(Q,W);W=W.sibling}W=nc(te,Q.mode,Ae),W.return=Q,Q=W}return L(Q);case E:return ut=te._init,ui(Q,W,ut(te._payload),Ae)}if(ie(te))return Ue(Q,W,te,Ae);if(U(te))return bn(Q,W,te,Ae);yo(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(c(Q,W.sibling),W=x(W,te),W.return=Q,Q=W):(c(Q,W),W=tc(te,Q.mode,Ae),W.return=Q,Q=W),L(Q)):c(Q,W)}return ui}var as=Qf(!0),Jf=Qf(!1),oa={},si=nt(oa),la=nt(oa),os=nt(oa);function Li(r){if(r===oa)throw Error(l(174));return r}function Su(r,s){tt(os,s),tt(la,r),tt(si,oa),r=se(s),Rt(si),tt(si,r)}function ls(){Rt(si),Rt(la),Rt(os)}function $f(r){var s=Li(os.current),c=Li(si.current);s=I(c,r.type,s),c!==s&&(tt(la,r),tt(si,s))}function yu(r){la.current===r&&(Rt(si),Rt(la))}var Vt=nt(0);function _o(r){for(var s=r;s!==null;){if(s.tag===13){var c=s.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||io(c)||lr(c)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _u=[];function Mu(){for(var r=0;r<_u.length;r++){var s=_u[r];rn?s._workInProgressVersionPrimary=null:s._workInProgressVersionSecondary=null}_u.length=0}var Mo=u.ReactCurrentDispatcher,ai=u.ReactCurrentBatchConfig,us=0,qt=null,Rn=null,pn=null,Eo=!1,ua=!1,ca=0,yg=0;function Pn(){throw Error(l(321))}function Eu(r,s){if(s===null)return!1;for(var c=0;c<s.length&&c<r.length;c++)if(!Ci(r[c],s[c]))return!1;return!0}function Tu(r,s,c,h,x,_){if(us=_,qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Mo.current=r===null||r.memoizedState===null?Tg:wg,r=c(h,x),ua){_=0;do{if(ua=!1,ca=0,25<=_)throw Error(l(301));_+=1,pn=Rn=null,s.updateQueue=null,Mo.current=Ag,r=c(h,x)}while(ua)}if(Mo.current=Po,s=Rn!==null&&Rn.next!==null,us=0,pn=Rn=qt=null,Eo=!1,s)throw Error(l(300));return r}function wu(){var r=ca!==0;return ca=0,r}function Wi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?qt.memoizedState=pn=r:pn=pn.next=r,pn}function Ui(){if(Rn===null){var r=qt.alternate;r=r!==null?r.memoizedState:null}else r=Rn.next;var s=pn===null?qt.memoizedState:pn.next;if(s!==null)pn=s,Rn=r;else{if(r===null)throw Error(l(310));Rn=r,r={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},pn===null?qt.memoizedState=pn=r:pn=pn.next=r}return pn}function Cr(r,s){return typeof s=="function"?s(r):s}function To(r){var s=Ui(),c=s.queue;if(c===null)throw Error(l(311));c.lastRenderedReducer=r;var h=Rn,x=h.baseQueue,_=c.pending;if(_!==null){if(x!==null){var L=x.next;x.next=_.next,_.next=L}h.baseQueue=x=_,c.pending=null}if(x!==null){_=x.next,h=h.baseState;var k=L=null,re=null,me=_;do{var Ce=me.lane;if((us&Ce)===Ce)re!==null&&(re=re.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),h=me.hasEagerState?me.eagerState:r(h,me.action);else{var it={lane:Ce,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};re===null?(k=re=it,L=h):re=re.next=it,qt.lanes|=Ce,fs|=Ce}me=me.next}while(me!==null&&me!==_);re===null?L=h:re.next=k,Ci(h,s.memoizedState)||(Zn=!0),s.memoizedState=h,s.baseState=L,s.baseQueue=re,c.lastRenderedState=h}if(r=c.interleaved,r!==null){x=r;do _=x.lane,qt.lanes|=_,fs|=_,x=x.next;while(x!==r)}else x===null&&(c.lanes=0);return[s.memoizedState,c.dispatch]}function wo(r){var s=Ui(),c=s.queue;if(c===null)throw Error(l(311));c.lastRenderedReducer=r;var h=c.dispatch,x=c.pending,_=s.memoizedState;if(x!==null){c.pending=null;var L=x=x.next;do _=r(_,L.action),L=L.next;while(L!==x);Ci(_,s.memoizedState)||(Zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),c.lastRenderedState=_}return[_,h]}function eh(){}function th(r,s){var c=qt,h=Ui(),x=s(),_=!Ci(h.memoizedState,x);if(_&&(h.memoizedState=x,Zn=!0),h=h.queue,ha(rh.bind(null,c,h,r),[r]),h.getSnapshot!==s||_||pn!==null&&pn.memoizedState.tag&1){if(c.flags|=2048,fa(9,ih.bind(null,c,h,x,s),void 0,null),$t===null)throw Error(l(349));us&30||nh(c,s,x)}return x}function nh(r,s,c){r.flags|=16384,r={getSnapshot:s,value:c},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.stores=[r]):(c=s.stores,c===null?s.stores=[r]:c.push(r))}function ih(r,s,c,h){s.value=c,s.getSnapshot=h,sh(s)&&oi(r,1,-1)}function rh(r,s,c){return c(function(){sh(s)&&oi(r,1,-1)})}function sh(r){var s=r.getSnapshot;r=r.value;try{var c=s();return!Ci(r,c)}catch{return!0}}function Au(r){var s=Wi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:r},s.queue=r,r=r.dispatch=Eg.bind(null,qt,r),[s.memoizedState,r]}function fa(r,s,c,h){return r={tag:r,create:s,destroy:c,deps:h,next:null},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.lastEffect=r.next=r):(c=s.lastEffect,c===null?s.lastEffect=r.next=r:(h=c.next,c.next=r,r.next=h,s.lastEffect=r)),r}function ah(){return Ui().memoizedState}function Ao(r,s,c,h){var x=Wi();qt.flags|=r,x.memoizedState=fa(1|s,c,void 0,h===void 0?null:h)}function Ro(r,s,c,h){var x=Ui();h=h===void 0?null:h;var _=void 0;if(Rn!==null){var L=Rn.memoizedState;if(_=L.destroy,h!==null&&Eu(h,L.deps)){x.memoizedState=fa(s,c,_,h);return}}qt.flags|=r,x.memoizedState=fa(1|s,c,_,h)}function Ru(r,s){return Ao(8390656,8,r,s)}function ha(r,s){return Ro(2048,8,r,s)}function oh(r,s){return Ro(4,2,r,s)}function lh(r,s){return Ro(4,4,r,s)}function uh(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ch(r,s,c){return c=c!=null?c.concat([r]):null,Ro(4,4,uh.bind(null,s,r),c)}function Pu(){}function fh(r,s){var c=Ui();s=s===void 0?null:s;var h=c.memoizedState;return h!==null&&s!==null&&Eu(s,h[1])?h[0]:(c.memoizedState=[r,s],r)}function hh(r,s){var c=Ui();s=s===void 0?null:s;var h=c.memoizedState;return h!==null&&s!==null&&Eu(s,h[1])?h[0]:(r=r(),c.memoizedState=[r,s],r)}function _g(r,s){var c=yt;yt=c!==0&&4>c?c:4,r(!0);var h=ai.transition;ai.transition={};try{r(!1),s()}finally{yt=c,ai.transition=h}}function dh(){return Ui().memoizedState}function Mg(r,s,c){var h=pr(r);c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},ph(r)?mh(s,c):(vh(r,s,c),c=In(),r=oi(r,h,c),r!==null&&gh(r,s,h))}function Eg(r,s,c){var h=pr(r),x={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(ph(r))mh(s,x);else{vh(r,s,x);var _=r.alternate;if(r.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var L=s.lastRenderedState,k=_(L,c);if(x.hasEagerState=!0,x.eagerState=k,Ci(k,L))return}catch{}finally{}c=In(),r=oi(r,h,c),r!==null&&gh(r,s,h)}}function ph(r){var s=r.alternate;return r===qt||s!==null&&s===qt}function mh(r,s){ua=Eo=!0;var c=r.pending;c===null?s.next=s:(s.next=c.next,c.next=s),r.pending=s}function vh(r,s,c){$t!==null&&r.mode&1&&!(ht&2)?(r=s.interleaved,r===null?(c.next=c,Di===null?Di=[s]:Di.push(s)):(c.next=r.next,r.next=c),s.interleaved=c):(r=s.pending,r===null?c.next=c:(c.next=r.next,r.next=c),s.pending=c)}function gh(r,s,c){if(c&4194240){var h=s.lanes;h&=r.pendingLanes,c|=h,s.lanes=c,nu(r,c)}}var Po={readContext:ni,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Tg={readContext:ni,useCallback:function(r,s){return Wi().memoizedState=[r,s===void 0?null:s],r},useContext:ni,useEffect:Ru,useImperativeHandle:function(r,s,c){return c=c!=null?c.concat([r]):null,Ao(4194308,4,uh.bind(null,s,r),c)},useLayoutEffect:function(r,s){return Ao(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ao(4,2,r,s)},useMemo:function(r,s){var c=Wi();return s=s===void 0?null:s,r=r(),c.memoizedState=[r,s],r},useReducer:function(r,s,c){var h=Wi();return s=c!==void 0?c(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=Mg.bind(null,qt,r),[h.memoizedState,r]},useRef:function(r){var s=Wi();return r={current:r},s.memoizedState=r},useState:Au,useDebugValue:Pu,useDeferredValue:function(r){var s=Au(r),c=s[0],h=s[1];return Ru(function(){var x=ai.transition;ai.transition={};try{h(r)}finally{ai.transition=x}},[r]),c},useTransition:function(){var r=Au(!1),s=r[0];return r=_g.bind(null,r[1]),Wi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,c){var h=qt,x=Wi();if(Bt){if(c===void 0)throw Error(l(407));c=c()}else{if(c=s(),$t===null)throw Error(l(349));us&30||nh(h,s,c)}x.memoizedState=c;var _={value:c,getSnapshot:s};return x.queue=_,Ru(rh.bind(null,h,_,r),[r]),h.flags|=2048,fa(9,ih.bind(null,h,_,c,s),void 0,null),c},useId:function(){var r=Wi(),s=$t.identifierPrefix;if(Bt){var c=Vi,h=Gi;c=(h&~(1<<32-pi(h)-1)).toString(32)+c,s=":"+s+"R"+c,c=ca++,0<c&&(s+="H"+c.toString(32)),s+=":"}else c=yg++,s=":"+s+"r"+c.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},wg={readContext:ni,useCallback:fh,useContext:ni,useEffect:ha,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:hh,useReducer:To,useRef:ah,useState:function(){return To(Cr)},useDebugValue:Pu,useDeferredValue:function(r){var s=To(Cr),c=s[0],h=s[1];return ha(function(){var x=ai.transition;ai.transition={};try{h(r)}finally{ai.transition=x}},[r]),c},useTransition:function(){var r=To(Cr)[0],s=Ui().memoizedState;return[r,s]},useMutableSource:eh,useSyncExternalStore:th,useId:dh,unstable_isNewReconciler:!1},Ag={readContext:ni,useCallback:fh,useContext:ni,useEffect:ha,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:hh,useReducer:wo,useRef:ah,useState:function(){return wo(Cr)},useDebugValue:Pu,useDeferredValue:function(r){var s=wo(Cr),c=s[0],h=s[1];return ha(function(){var x=ai.transition;ai.transition={};try{h(r)}finally{ai.transition=x}},[r]),c},useTransition:function(){var r=wo(Cr)[0],s=Ui().memoizedState;return[r,s]},useMutableSource:eh,useSyncExternalStore:th,useId:dh,unstable_isNewReconciler:!1};function Cu(r,s){try{var c="",h=s;do c+=Sg(h),h=h.return;while(h);var x=c}catch(_){x=`
Error generating stack: `+_.message+`
`+_.stack}return{value:r,source:s,stack:x}}function bu(r,s){try{console.error(s.value)}catch(c){setTimeout(function(){throw c})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function xh(r,s,c){c=Hi(-1,c),c.tag=3,c.payload={element:null};var h=s.value;return c.callback=function(){Wo||(Wo=!0,qu=h),bu(r,s)},c}function Sh(r,s,c){c=Hi(-1,c),c.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var x=s.value;c.payload=function(){return h(x)},c.callback=function(){bu(r,s)}}var _=r.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(c.callback=function(){bu(r,s),typeof h!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var L=s.stack;this.componentDidCatch(s.value,{componentStack:L!==null?L:""})}),c}function yh(r,s,c){var h=r.pingCache;if(h===null){h=r.pingCache=new Rg;var x=new Set;h.set(s,x)}else x=h.get(s),x===void 0&&(x=new Set,h.set(s,x));x.has(c)||(x.add(c),r=Hg.bind(null,r,s,c),s.then(r,r))}function _h(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Mh(r,s,c,h,x){return r.mode&1?(r.flags|=65536,r.lanes=x,r):(r===s?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(s=Hi(-1,1),s.tag=2,fr(c,s))),c.lanes|=1),r)}function Ii(r){r.flags|=4}function Eh(r,s){if(r!==null&&r.child===s.child)return!0;if(s.flags&16)return!1;for(r=s.child;r!==null;){if(r.flags&12854||r.subtreeFlags&12854)return!1;r=r.sibling}return!0}var da,pa,Co,bo;if(je)da=function(r,s){for(var c=s.child;c!==null;){if(c.tag===5||c.tag===6)Y(r,c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break;for(;c.sibling===null;){if(c.return===null||c.return===s)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},pa=function(){},Co=function(r,s,c,h,x){if(r=r.memoizedProps,r!==h){var _=s.stateNode,L=Li(si.current);c=de(_,c,r,h,x,L),(s.updateQueue=c)&&Ii(s)}},bo=function(r,s,c,h){c!==h&&Ii(s)};else if(K){da=function(r,s,c,h){for(var x=s.child;x!==null;){if(x.tag===5){var _=x.stateNode;c&&h&&(_=Ft(_,x.type,x.memoizedProps,x)),Y(r,_)}else if(x.tag===6)_=x.stateNode,c&&h&&(_=Wn(_,x.memoizedProps,x)),Y(r,_);else if(x.tag!==4){if(x.tag===22&&x.memoizedState!==null)_=x.child,_!==null&&(_.return=x),da(r,x,!0,!0);else if(x.child!==null){x.child.return=x,x=x.child;continue}}if(x===s)break;for(;x.sibling===null;){if(x.return===null||x.return===s)return;x=x.return}x.sibling.return=x.return,x=x.sibling}};var Th=function(r,s,c,h){for(var x=s.child;x!==null;){if(x.tag===5){var _=x.stateNode;c&&h&&(_=Ft(_,x.type,x.memoizedProps,x)),Lt(r,_)}else if(x.tag===6)_=x.stateNode,c&&h&&(_=Wn(_,x.memoizedProps,x)),Lt(r,_);else if(x.tag!==4){if(x.tag===22&&x.memoizedState!==null)_=x.child,_!==null&&(_.return=x),Th(r,x,!0,!0);else if(x.child!==null){x.child.return=x,x=x.child;continue}}if(x===s)break;for(;x.sibling===null;){if(x.return===null||x.return===s)return;x=x.return}x.sibling.return=x.return,x=x.sibling}};pa=function(r,s){var c=s.stateNode;if(!Eh(r,s)){r=c.containerInfo;var h=vt(r);Th(h,s,!1,!1),c.pendingChildren=h,Ii(s),Qt(r,h)}},Co=function(r,s,c,h,x){var _=r.stateNode,L=r.memoizedProps;if((r=Eh(r,s))&&L===h)s.stateNode=_;else{var k=s.stateNode,re=Li(si.current),me=null;L!==h&&(me=de(k,c,L,h,x,re)),r&&me===null?s.stateNode=_:(_=we(_,me,c,L,h,s,r,k),he(_,c,h,x,re)&&Ii(s),s.stateNode=_,r?Ii(s):da(_,s,!1,!1))}},bo=function(r,s,c,h){c!==h?(r=Li(os.current),c=Li(si.current),s.stateNode=Re(h,r,c,s),Ii(s)):s.stateNode=r.stateNode}}else pa=function(){},Co=function(){},bo=function(){};function ma(r,s){if(!Bt)switch(r.tailMode){case"hidden":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Cn(r){var s=r.alternate!==null&&r.alternate.child===r.child,c=0,h=0;if(s)for(var x=r.child;x!==null;)c|=x.lanes|x.childLanes,h|=x.subtreeFlags&14680064,h|=x.flags&14680064,x.return=r,x=x.sibling;else for(x=r.child;x!==null;)c|=x.lanes|x.childLanes,h|=x.subtreeFlags,h|=x.flags,x.return=r,x=x.sibling;return r.subtreeFlags|=h,r.childLanes=c,s}function Pg(r,s,c){var h=s.pendingProps;switch(mu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(s),null;case 1:return Yt(s.type)&&ur(),Cn(s),null;case 3:return h=s.stateNode,ls(),Rt(Jt),Rt(an),Mu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(sa(s)?Ii(s):r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,vi!==null&&(Qu(vi),vi=null))),pa(r,s),Cn(s),null;case 5:yu(s),c=Li(os.current);var x=s.type;if(r!==null&&s.stateNode!=null)Co(r,s,x,h,c),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(l(166));return Cn(s),null}if(r=Li(si.current),sa(s)){if(!Tt)throw Error(l(175));r=$l(s.stateNode,s.type,s.memoizedProps,c,r,s,!ra),s.updateQueue=r,r!==null&&Ii(s)}else{var _=z(x,h,c,r,s);da(_,s,!1,!1),s.stateNode=_,he(_,x,h,c,r)&&Ii(s)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Cn(s),null;case 6:if(r&&s.stateNode!=null)bo(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(l(166));if(r=Li(os.current),c=Li(si.current),sa(s)){if(!Tt)throw Error(l(176));if(r=s.stateNode,h=s.memoizedProps,(c=b(r,h,s,!ra))&&(x=Yn,x!==null))switch(_=(x.mode&1)!==0,x.tag){case 3:Ke(x.stateNode.containerInfo,r,h,_);break;case 5:ft(x.type,x.memoizedProps,x.stateNode,r,h,_)}c&&Ii(s)}else s.stateNode=Re(h,r,c,s)}return Cn(s),null;case 13:if(Rt(Vt),h=s.memoizedState,Bt&&qn!==null&&s.mode&1&&!(s.flags&128)){for(r=qn;r;)r=Ri(r);return ss(),s.flags|=98560,s}if(h!==null&&h.dehydrated!==null){if(h=sa(s),r===null){if(!h)throw Error(l(318));if(!Tt)throw Error(l(344));if(r=s.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));J(r,s)}else ss(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;return Cn(s),null}return vi!==null&&(Qu(vi),vi=null),s.flags&128?(s.lanes=c,s):(h=h!==null,c=!1,r===null?sa(s):c=r.memoizedState!==null,h&&!c&&(s.child.flags|=8192,s.mode&1&&(r===null||Vt.current&1?on===0&&(on=3):$u())),s.updateQueue!==null&&(s.flags|=4),Cn(s),null);case 4:return ls(),pa(r,s),r===null&&st(s.stateNode.containerInfo),Cn(s),null;case 10:return uu(s.type._context),Cn(s),null;case 17:return Yt(s.type)&&ur(),Cn(s),null;case 19:if(Rt(Vt),x=s.memoizedState,x===null)return Cn(s),null;if(h=(s.flags&128)!==0,_=x.rendering,_===null)if(h)ma(x,!1);else{if(on!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(_=_o(r),_!==null){for(s.flags|=128,ma(x,!1),r=_.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),s.subtreeFlags=0,r=c,h=s.child;h!==null;)c=h,x=r,c.flags&=14680066,_=c.alternate,_===null?(c.childLanes=0,c.lanes=x,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=_.childLanes,c.lanes=_.lanes,c.child=_.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=_.memoizedProps,c.memoizedState=_.memoizedState,c.updateQueue=_.updateQueue,c.type=_.type,x=_.dependencies,c.dependencies=x===null?null:{lanes:x.lanes,firstContext:x.firstContext}),h=h.sibling;return tt(Vt,Vt.current&1|2),s.child}r=r.sibling}x.tail!==null&&dn()>Yu&&(s.flags|=128,h=!0,ma(x,!1),s.lanes=4194304)}else{if(!h)if(r=_o(_),r!==null){if(s.flags|=128,h=!0,r=r.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),ma(x,!0),x.tail===null&&x.tailMode==="hidden"&&!_.alternate&&!Bt)return Cn(s),null}else 2*dn()-x.renderingStartTime>Yu&&c!==1073741824&&(s.flags|=128,h=!0,ma(x,!1),s.lanes=4194304);x.isBackwards?(_.sibling=s.child,s.child=_):(r=x.last,r!==null?r.sibling=_:s.child=_,x.last=_)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=dn(),s.sibling=null,r=Vt.current,tt(Vt,h?r&1|2:r&1),s):(Cn(s),null);case 22:case 23:return Ju(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?Kn&1073741824&&(Cn(s),je&&s.subtreeFlags&6&&(s.flags|=8192)):Cn(s),null;case 24:return null;case 25:return null}throw Error(l(156,s.tag))}var Cg=u.ReactCurrentOwner,Zn=!1;function Un(r,s,c,h){s.child=r===null?Jf(s,null,c,h):as(s,r.child,c,h)}function wh(r,s,c,h,x){c=c.render;var _=s.ref;return ns(s,x),h=Tu(r,s,c,h,_,x),c=wu(),r!==null&&!Zn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~x,Xi(r,s,x)):(Bt&&c&&pu(s),s.flags|=1,Un(r,s,h,x),s.child)}function Ah(r,s,c,h,x){if(r===null){var _=c.type;return typeof _=="function"&&!ec(_)&&_.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(s.tag=15,s.type=_,Rh(r,s,_,h,x)):(r=Qo(c.type,null,h,s,s.mode,x),r.ref=s.ref,r.return=s,s.child=r)}if(_=r.child,!(r.lanes&x)){var L=_.memoizedProps;if(c=c.compare,c=c!==null?c:fo,c(L,h)&&r.ref===s.ref)return Xi(r,s,x)}return s.flags|=1,r=vr(_,h),r.ref=s.ref,r.return=s,s.child=r}function Rh(r,s,c,h,x){if(r!==null&&fo(r.memoizedProps,h)&&r.ref===s.ref)if(Zn=!1,(r.lanes&x)!==0)r.flags&131072&&(Zn=!0);else return s.lanes=r.lanes,Xi(r,s,x);return Du(r,s,c,h,x)}function Ph(r,s,c){var h=s.pendingProps,x=h.children,_=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null},tt(cs,Kn),Kn|=c;else if(c&1073741824)s.memoizedState={baseLanes:0,cachePool:null},h=_!==null?_.baseLanes:c,tt(cs,Kn),Kn|=h;else return r=_!==null?_.baseLanes|c:c,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null},s.updateQueue=null,tt(cs,Kn),Kn|=r,null;else _!==null?(h=_.baseLanes|c,s.memoizedState=null):h=c,tt(cs,Kn),Kn|=h;return Un(r,s,x,c),s.child}function Ch(r,s){var c=s.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(s.flags|=512,s.flags|=2097152)}function Du(r,s,c,h,x){var _=Yt(c)?di:an.current;return _=jt(s,_),ns(s,x),c=Tu(r,s,c,h,_,x),h=wu(),r!==null&&!Zn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~x,Xi(r,s,x)):(Bt&&h&&pu(s),s.flags|=1,Un(r,s,c,x),s.child)}function bh(r,s,c,h,x){if(Yt(c)){var _=!0;es(s)}else _=!1;if(ns(s,x),s.stateNode===null)r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2),Wf(s,c,h),du(s,c,h,x),h=!0;else if(r===null){var L=s.stateNode,k=s.memoizedProps;L.props=k;var re=L.context,me=c.contextType;typeof me=="object"&&me!==null?me=ni(me):(me=Yt(c)?di:an.current,me=jt(s,me));var Ce=c.getDerivedStateFromProps,it=typeof Ce=="function"||typeof L.getSnapshotBeforeUpdate=="function";it||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(k!==h||re!==me)&&Xf(s,L,h,me),cr=!1;var ke=s.memoizedState;L.state=ke,vo(s,h,L,x),re=s.memoizedState,k!==h||ke!==re||Jt.current||cr?(typeof Ce=="function"&&(hu(s,c,Ce,h),re=s.memoizedState),(k=cr||Vf(s,c,k,h,ke,re,me))?(it||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(s.flags|=4194308)):(typeof L.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=re),L.props=h,L.state=re,L.context=me,h=k):(typeof L.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{L=s.stateNode,Bf(r,s),k=s.memoizedProps,me=s.type===s.elementType?k:mi(s.type,k),L.props=me,it=s.pendingProps,ke=L.context,re=c.contextType,typeof re=="object"&&re!==null?re=ni(re):(re=Yt(c)?di:an.current,re=jt(s,re));var Dt=c.getDerivedStateFromProps;(Ce=typeof Dt=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(k!==it||ke!==re)&&Xf(s,L,h,re),cr=!1,ke=s.memoizedState,L.state=ke,vo(s,h,L,x);var Ue=s.memoizedState;k!==it||ke!==Ue||Jt.current||cr?(typeof Dt=="function"&&(hu(s,c,Dt,h),Ue=s.memoizedState),(me=cr||Vf(s,c,me,h,ke,Ue,re)||!1)?(Ce||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(h,Ue,re),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(h,Ue,re)),typeof L.componentDidUpdate=="function"&&(s.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof L.componentDidUpdate!="function"||k===r.memoizedProps&&ke===r.memoizedState||(s.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ke===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Ue),L.props=h,L.state=Ue,L.context=re,h=me):(typeof L.componentDidUpdate!="function"||k===r.memoizedProps&&ke===r.memoizedState||(s.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&ke===r.memoizedState||(s.flags|=1024),h=!1)}return Lu(r,s,c,h,_,x)}function Lu(r,s,c,h,x,_){Ch(r,s);var L=(s.flags&128)!==0;if(!h&&!L)return x&&ta(s,c,!1),Xi(r,s,_);h=s.stateNode,Cg.current=s;var k=L&&typeof c.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&L?(s.child=as(s,r.child,null,_),s.child=as(s,null,k,_)):Un(r,s,k,_),s.memoizedState=h.state,x&&ta(s,c,!0),s.child}function Dh(r){var s=r.stateNode;s.pendingContext?An(r,s.pendingContext,s.pendingContext!==s.context):s.context&&An(r,s.context,!1),Su(r,s.containerInfo)}function Lh(r,s,c,h,x){return ss(),xu(x),s.flags|=256,Un(r,s,c,h),s.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Lo(r){return{baseLanes:r,cachePool:null}}function Uh(r,s,c){var h=s.pendingProps,x=Vt.current,_=!1,L=(s.flags&128)!==0,k;if((k=L)||(k=r!==null&&r.memoizedState===null?!1:(x&2)!==0),k?(_=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(x|=1),tt(Vt,x&1),r===null)return gu(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?lr(r)?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(x=h.children,r=h.fallback,_?(h=s.mode,_=s.child,x={mode:"hidden",children:x},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=x):_=Jo(x,h,0,null),r=Nr(r,h,c,null),_.return=s,r.return=s,_.sibling=r,s.child=_,s.child.memoizedState=Lo(c),s.memoizedState=Do,r):Uu(s,x));if(x=r.memoizedState,x!==null){if(k=x.dehydrated,k!==null){if(L)return s.flags&256?(s.flags&=-257,Uo(r,s,c,Error(l(422)))):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(_=h.fallback,x=s.mode,h=Jo({mode:"visible",children:h.children},x,0,null),_=Nr(_,x,c,null),_.flags|=2,h.return=s,_.return=s,h.sibling=_,s.child=h,s.mode&1&&as(s,r.child,null,c),s.child.memoizedState=Lo(c),s.memoizedState=Do,_);if(!(s.mode&1))s=Uo(r,s,c,null);else if(lr(k))s=Uo(r,s,c,Error(l(419)));else if(h=(c&r.childLanes)!==0,Zn||h){if(h=$t,h!==null){switch(c&-c){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}h=_&(h.suspendedLanes|c)?0:_,h!==0&&h!==x.retryLane&&(x.retryLane=h,oi(r,h,-1))}$u(),s=Uo(r,s,c,Error(l(421)))}else io(k)?(s.flags|=128,s.child=r.child,s=Gg.bind(null,r),ro(k,s),s=null):(c=x.treeContext,Tt&&(qn=Jl(k),Yn=s,Bt=!0,vi=null,ra=!1,c!==null&&(ii[ri++]=Gi,ii[ri++]=Vi,ii[ri++]=Rr,Gi=c.id,Vi=c.overflow,Rr=s)),s=Uu(s,s.pendingProps.children),s.flags|=4096);return s}return _?(h=Nh(r,s,h.children,h.fallback,c),_=s.child,x=r.child.memoizedState,_.memoizedState=x===null?Lo(c):{baseLanes:x.baseLanes|c,cachePool:null},_.childLanes=r.childLanes&~c,s.memoizedState=Do,h):(c=Ih(r,s,h.children,c),s.memoizedState=null,c)}return _?(h=Nh(r,s,h.children,h.fallback,c),_=s.child,x=r.child.memoizedState,_.memoizedState=x===null?Lo(c):{baseLanes:x.baseLanes|c,cachePool:null},_.childLanes=r.childLanes&~c,s.memoizedState=Do,h):(c=Ih(r,s,h.children,c),s.memoizedState=null,c)}function Uu(r,s){return s=Jo({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ih(r,s,c,h){var x=r.child;return r=x.sibling,c=vr(x,{mode:"visible",children:c}),!(s.mode&1)&&(c.lanes=h),c.return=s,c.sibling=null,r!==null&&(h=s.deletions,h===null?(s.deletions=[r],s.flags|=16):h.push(r)),s.child=c}function Nh(r,s,c,h,x){var _=s.mode;r=r.child;var L=r.sibling,k={mode:"hidden",children:c};return!(_&1)&&s.child!==r?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=vr(r,k),c.subtreeFlags=r.subtreeFlags&14680064),L!==null?h=vr(L,h):(h=Nr(h,_,x,null),h.flags|=2),h.return=s,c.return=s,c.sibling=h,s.child=c,h}function Uo(r,s,c,h){return h!==null&&xu(h),as(s,r.child,null,c),r=Uu(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Fh(r,s,c){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),cu(r.return,s,c)}function Iu(r,s,c,h,x){var _=r.memoizedState;_===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:x}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=c,_.tailMode=x)}function Oh(r,s,c){var h=s.pendingProps,x=h.revealOrder,_=h.tail;if(Un(r,s,h.children,c),h=Vt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Fh(r,c,s);else if(r.tag===19)Fh(r,c,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(tt(Vt,h),!(s.mode&1))s.memoizedState=null;else switch(x){case"forwards":for(c=s.child,x=null;c!==null;)r=c.alternate,r!==null&&_o(r)===null&&(x=c),c=c.sibling;c=x,c===null?(x=s.child,s.child=null):(x=c.sibling,c.sibling=null),Iu(s,!1,x,c,_);break;case"backwards":for(c=null,x=s.child,s.child=null;x!==null;){if(r=x.alternate,r!==null&&_o(r)===null){s.child=x;break}r=x.sibling,x.sibling=c,c=x,x=r}Iu(s,!0,c,null,_);break;case"together":Iu(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xi(r,s,c){if(r!==null&&(s.dependencies=r.dependencies),fs|=s.lanes,!(c&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(l(153));if(s.child!==null){for(r=s.child,c=vr(r,r.pendingProps),s.child=c,c.return=s;r.sibling!==null;)r=r.sibling,c=c.sibling=vr(r,r.pendingProps),c.return=s;c.sibling=null}return s.child}function bg(r,s,c){switch(s.tag){case 3:Dh(s),ss();break;case 5:$f(s);break;case 1:Yt(s.type)&&es(s);break;case 4:Su(s,s.stateNode.containerInfo);break;case 10:zf(s,s.type._context,s.memoizedProps.value);break;case 13:var h=s.memoizedState;if(h!==null)return h.dehydrated!==null?(tt(Vt,Vt.current&1),s.flags|=128,null):c&s.child.childLanes?Uh(r,s,c):(tt(Vt,Vt.current&1),r=Xi(r,s,c),r!==null?r.sibling:null);tt(Vt,Vt.current&1);break;case 19:if(h=(c&s.childLanes)!==0,r.flags&128){if(h)return Oh(r,s,c);s.flags|=128}var x=s.memoizedState;if(x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),tt(Vt,Vt.current),h)break;return null;case 22:case 23:return s.lanes=0,Ph(r,s,c)}return Xi(r,s,c)}function Dg(r,s){switch(mu(s),s.tag){case 1:return Yt(s.type)&&ur(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ls(),Rt(Jt),Rt(an),Mu(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return yu(s),null;case 13:if(Rt(Vt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(l(340));ss()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Rt(Vt),null;case 4:return ls(),null;case 10:return uu(s.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var Io=!1,br=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function No(r,s){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){zn(r,s,h)}else c.current=null}function Nu(r,s,c){try{c()}catch(h){zn(r,s,h)}}var zh=!1;function Ug(r,s){for(G(r.containerInfo),Ee=s;Ee!==null;)if(r=Ee,s=r.child,(r.subtreeFlags&1028)!==0&&s!==null)s.return=r,Ee=s;else for(;Ee!==null;){r=Ee;try{var c=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(c!==null){var h=c.memoizedProps,x=c.memoizedState,_=r.stateNode,L=_.getSnapshotBeforeUpdate(r.elementType===r.type?h:mi(r.type,h),x);_.__reactInternalSnapshotBeforeUpdate=L}break;case 3:je&&Se(r.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(k){zn(r,r.return,k)}if(s=r.sibling,s!==null){s.return=r.return,Ee=s;break}Ee=r.return}return c=zh,zh=!1,c}function Dr(r,s,c){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var x=h=h.next;do{if((x.tag&r)===r){var _=x.destroy;x.destroy=void 0,_!==void 0&&Nu(s,c,_)}x=x.next}while(x!==h)}}function va(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&r)===r){var h=c.create;c.destroy=h()}c=c.next}while(c!==s)}}function Fu(r){var s=r.ref;if(s!==null){var c=r.stateNode;switch(r.tag){case 5:r=fe(c);break;default:r=c}typeof s=="function"?s(r):s.current=r}}function Bh(r,s,c){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(uo,s)}catch{}switch(s.tag){case 0:case 11:case 14:case 15:if(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null)){var h=r=r.next;do{var x=h,_=x.destroy;x=x.tag,_!==void 0&&(x&2||x&4)&&Nu(s,c,_),h=h.next}while(h!==r)}break;case 1:if(No(s,c),r=s.stateNode,typeof r.componentWillUnmount=="function")try{r.props=s.memoizedProps,r.state=s.memoizedState,r.componentWillUnmount()}catch(L){zn(s,c,L)}break;case 5:No(s,c);break;case 4:je?Xh(r,s,c):K&&K&&(s=s.stateNode.containerInfo,c=vt(s),Vn(s,c))}}function kh(r,s,c){for(var h=s;;)if(Bh(r,h,c),h.child===null||je&&h.tag===4){if(h===s)break;for(;h.sibling===null;){if(h.return===null||h.return===s)return;h=h.return}h.sibling.return=h.return,h=h.sibling}else h.child.return=h,h=h.child}function Hh(r){var s=r.alternate;s!==null&&(r.alternate=null,Hh(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Nt(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Gh(r){return r.tag===5||r.tag===3||r.tag===4}function Vh(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Gh(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Wh(r){if(je){e:{for(var s=r.return;s!==null;){if(Gh(s))break e;s=s.return}throw Error(l(160))}var c=s;switch(c.tag){case 5:s=c.stateNode,c.flags&32&&(lt(s),c.flags&=-33),c=Vh(r),zu(r,c,s);break;case 3:case 4:s=c.stateNode.containerInfo,c=Vh(r),Ou(r,c,s);break;default:throw Error(l(161))}}}function Ou(r,s,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?He(c,r,s):Ne(c,r);else if(h!==4&&(r=r.child,r!==null))for(Ou(r,s,c),r=r.sibling;r!==null;)Ou(r,s,c),r=r.sibling}function zu(r,s,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?ze(c,r,s):Me(c,r);else if(h!==4&&(r=r.child,r!==null))for(zu(r,s,c),r=r.sibling;r!==null;)zu(r,s,c),r=r.sibling}function Xh(r,s,c){for(var h=s,x=!1,_,L;;){if(!x){x=h.return;e:for(;;){if(x===null)throw Error(l(160));switch(_=x.stateNode,x.tag){case 5:L=!1;break e;case 3:_=_.containerInfo,L=!0;break e;case 4:_=_.containerInfo,L=!0;break e}x=x.return}x=!0}if(h.tag===5||h.tag===6)kh(r,h,c),L?De(_,h.stateNode):be(_,h.stateNode);else if(h.tag===18)L?Be(_,h.stateNode):Pe(_,h.stateNode);else if(h.tag===4){if(h.child!==null){_=h.stateNode.containerInfo,L=!0,h.child.return=h,h=h.child;continue}}else if(Bh(r,h,c),h.child!==null){h.child.return=h,h=h.child;continue}if(h===s)break;for(;h.sibling===null;){if(h.return===null||h.return===s)return;h=h.return,h.tag===4&&(x=!1)}h.sibling.return=h.return,h=h.sibling}}function Bu(r,s){if(je){switch(s.tag){case 0:case 11:case 14:case 15:Dr(3,s,s.return),va(3,s),Dr(5,s,s.return);return;case 1:return;case 5:var c=s.stateNode;if(c!=null){var h=s.memoizedProps;r=r!==null?r.memoizedProps:h;var x=s.type,_=s.updateQueue;s.updateQueue=null,_!==null&&Oe(c,_,x,r,h,s)}return;case 6:if(s.stateNode===null)throw Error(l(162));c=s.memoizedProps,Te(s.stateNode,r!==null?r.memoizedProps:c,c);return;case 3:Tt&&r!==null&&r.memoizedState.isDehydrated&&q(s.stateNode.containerInfo);return;case 12:return;case 13:Fo(s);return;case 19:Fo(s);return;case 17:return}throw Error(l(163))}switch(s.tag){case 0:case 11:case 14:case 15:Dr(3,s,s.return),va(3,s),Dr(5,s,s.return);return;case 12:return;case 13:Fo(s);return;case 19:Fo(s);return;case 3:Tt&&r!==null&&r.memoizedState.isDehydrated&&q(s.stateNode.containerInfo);break;case 22:case 23:return}e:if(K){switch(s.tag){case 1:case 5:case 6:break e;case 3:case 4:s=s.stateNode,Vn(s.containerInfo,s.pendingChildren);break e}throw Error(l(163))}}function Fo(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new Lg),s.forEach(function(h){var x=Vg.bind(null,r,h);c.has(h)||(c.add(h),h.then(x,x))})}}function Ig(r,s){for(Ee=s;Ee!==null;){s=Ee;var c=s.deletions;if(c!==null)for(var h=0;h<c.length;h++){var x=c[h];try{var _=r;je?Xh(_,x,s):kh(_,x,s);var L=x.alternate;L!==null&&(L.return=null),x.return=null}catch(Le){zn(x,s,Le)}}if(c=s.child,s.subtreeFlags&12854&&c!==null)c.return=s,Ee=c;else for(;Ee!==null;){s=Ee;try{var k=s.flags;if(k&32&&je&&lt(s.stateNode),k&512){var re=s.alternate;if(re!==null){var me=re.ref;me!==null&&(typeof me=="function"?me(null):me.current=null)}}if(k&8192)switch(s.tag){case 13:if(s.memoizedState!==null){var Ce=s.alternate;(Ce===null||Ce.memoizedState===null)&&(ju=dn())}break;case 22:var it=s.memoizedState!==null,ke=s.alternate,Dt=ke!==null&&ke.memoizedState!==null;if(c=s,je){e:if(h=c,x=it,_=null,je)for(var Ue=h;;){if(Ue.tag===5){if(_===null){_=Ue;var bn=Ue.stateNode;x?Ct(bn):_e(Ue.stateNode,Ue.memoizedProps)}}else if(Ue.tag===6){if(_===null){var ui=Ue.stateNode;x?B(ui):ne(ui,Ue.memoizedProps)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===h)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===h)break;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===h)break e;_===Ue&&(_=null),Ue=Ue.return}_===Ue&&(_=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}if(it&&!Dt&&c.mode&1){Ee=c;for(var Q=c.child;Q!==null;){for(c=Ee=Q;Ee!==null;){h=Ee;var W=h.child;switch(h.tag){case 0:case 11:case 14:case 15:Dr(4,h,h.return);break;case 1:No(h,h.return);var te=h.stateNode;if(typeof te.componentWillUnmount=="function"){var Ae=h.return;try{te.props=h.memoizedProps,te.state=h.memoizedState,te.componentWillUnmount()}catch(Le){zn(h,Ae,Le)}}break;case 5:No(h,h.return);break;case 22:if(h.memoizedState!==null){qh(c);continue}}W!==null?(W.return=h,Ee=W):qh(c)}Q=Q.sibling}}}switch(k&4102){case 2:Wh(s),s.flags&=-3;break;case 6:Wh(s),s.flags&=-3,Bu(s.alternate,s);break;case 4096:s.flags&=-4097;break;case 4100:s.flags&=-4097,Bu(s.alternate,s);break;case 4:Bu(s.alternate,s)}}catch(Le){zn(s,s.return,Le)}if(c=s.sibling,c!==null){c.return=s.return,Ee=c;break}Ee=s.return}}}function Ng(r,s,c){Ee=r,jh(r)}function jh(r,s,c){for(var h=(r.mode&1)!==0;Ee!==null;){var x=Ee,_=x.child;if(x.tag===22&&h){var L=x.memoizedState!==null||Io;if(!L){var k=x.alternate,re=k!==null&&k.memoizedState!==null||br;k=Io;var me=br;if(Io=L,(br=re)&&!me)for(Ee=x;Ee!==null;)L=Ee,re=L.child,L.tag===22&&L.memoizedState!==null?Zh(x):re!==null?(re.return=L,Ee=re):Zh(x);for(;_!==null;)Ee=_,jh(_),_=_.sibling;Ee=x,Io=k,br=me}Yh(r)}else x.subtreeFlags&8772&&_!==null?(_.return=x,Ee=_):Yh(r)}}function Yh(r){for(;Ee!==null;){var s=Ee;if(s.flags&8772){var c=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:br||va(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!br)if(c===null)h.componentDidMount();else{var x=s.elementType===s.type?c.memoizedProps:mi(s.type,c.memoizedProps);h.componentDidUpdate(x,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Hf(s,_,h);break;case 3:var L=s.updateQueue;if(L!==null){if(c=null,s.child!==null)switch(s.child.tag){case 5:c=fe(s.child.stateNode);break;case 1:c=s.child.stateNode}Hf(s,L,c)}break;case 5:var k=s.stateNode;c===null&&s.flags&4&&ce(k,s.type,s.memoizedProps,s);break;case 6:break;case 4:break;case 12:break;case 13:if(Tt&&s.memoizedState===null){var re=s.alternate;if(re!==null){var me=re.memoizedState;if(me!==null){var Ce=me.dehydrated;Ce!==null&&ue(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(l(163))}br||s.flags&512&&Fu(s)}catch(it){zn(s,s.return,it)}}if(s===r){Ee=null;break}if(c=s.sibling,c!==null){c.return=s.return,Ee=c;break}Ee=s.return}}function qh(r){for(;Ee!==null;){var s=Ee;if(s===r){Ee=null;break}var c=s.sibling;if(c!==null){c.return=s.return,Ee=c;break}Ee=s.return}}function Zh(r){for(;Ee!==null;){var s=Ee;try{switch(s.tag){case 0:case 11:case 15:var c=s.return;try{va(4,s)}catch(re){zn(s,c,re)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var x=s.return;try{h.componentDidMount()}catch(re){zn(s,x,re)}}var _=s.return;try{Fu(s)}catch(re){zn(s,_,re)}break;case 5:var L=s.return;try{Fu(s)}catch(re){zn(s,L,re)}}}catch(re){zn(s,s.return,re)}if(s===r){Ee=null;break}var k=s.sibling;if(k!==null){k.return=s.return,Ee=k;break}Ee=s.return}}var Oo=0,zo=1,Bo=2,ko=3,Ho=4;if(typeof Symbol=="function"&&Symbol.for){var ga=Symbol.for;Oo=ga("selector.component"),zo=ga("selector.has_pseudo_class"),Bo=ga("selector.role"),ko=ga("selector.test_id"),Ho=ga("selector.text")}function ku(r){var s=Xe(r);if(s!=null){if(typeof s.memoizedProps["data-testname"]!="string")throw Error(l(364));return s}if(r=sn(r),r===null)throw Error(l(362));return r.stateNode.current}function Hu(r,s){switch(s.$$typeof){case Oo:if(r.type===s.value)return!0;break;case zo:e:{s=s.value,r=[r,0];for(var c=0;c<r.length;){var h=r[c++],x=r[c++],_=s[x];if(h.tag!==5||!R(h)){for(;_!=null&&Hu(h,_);)x++,_=s[x];if(x===s.length){s=!0;break e}else for(h=h.child;h!==null;)r.push(h,x),h=h.sibling}}s=!1}return s;case Bo:if(r.tag===5&&le(r.stateNode,s.value))return!0;break;case Ho:if((r.tag===5||r.tag===6)&&(r=N(r),r!==null&&0<=r.indexOf(s.value)))return!0;break;case ko:if(r.tag===5&&(r=r.memoizedProps["data-testname"],typeof r=="string"&&r.toLowerCase()===s.value.toLowerCase()))return!0;break;default:throw Error(l(365))}return!1}function Gu(r){switch(r.$$typeof){case Oo:return"<"+(F(r.value)||"Unknown")+">";case zo:return":has("+(Gu(r)||"")+")";case Bo:return'[role="'+r.value+'"]';case Ho:return'"'+r.value+'"';case ko:return'[data-testname="'+r.value+'"]';default:throw Error(l(365))}}function Kh(r,s){var c=[];r=[r,0];for(var h=0;h<r.length;){var x=r[h++],_=r[h++],L=s[_];if(x.tag!==5||!R(x)){for(;L!=null&&Hu(x,L);)_++,L=s[_];if(_===s.length)c.push(x);else for(x=x.child;x!==null;)r.push(x,_),x=x.sibling}}return c}function Vu(r,s){if(!St)throw Error(l(363));r=ku(r),r=Kh(r,s),s=[],r=Array.from(r);for(var c=0;c<r.length;){var h=r[c++];if(h.tag===5)R(h)||s.push(h.stateNode);else for(h=h.child;h!==null;)r.push(h),h=h.sibling}return s}var Fg=Math.ceil,Go=u.ReactCurrentDispatcher,Wu=u.ReactCurrentOwner,Zt=u.ReactCurrentBatchConfig,ht=0,$t=null,en=null,yn=0,Kn=0,cs=nt(0),on=0,xa=null,fs=0,Vo=0,Xu=0,Sa=null,Fn=null,ju=0,Yu=1/0;function hs(){Yu=dn()+500}var Wo=!1,qu=null,hr=null,Xo=!1,dr=null,jo=0,ya=0,Zu=null,Yo=-1,qo=0;function In(){return ht&6?dn():Yo!==-1?Yo:Yo=dn()}function pr(r){return r.mode&1?ht&2&&yn!==0?yn&-yn:xg.transition!==null?(qo===0&&(r=ao,ao<<=1,!(ao&4194240)&&(ao=64),qo=r),qo):(r=yt,r!==0?r:et()):1}function oi(r,s,c){if(50<ya)throw ya=0,Zu=null,Error(l(185));var h=Zo(r,s);return h===null?null:(ia(h,s,c),(!(ht&2)||h!==$t)&&(h===$t&&(!(ht&2)&&(Vo|=s),on===4&&mr(h,yn)),On(h,c),s===1&&ht===0&&!(r.mode&1)&&(hs(),co&&bi())),h)}function Zo(r,s){r.lanes|=s;var c=r.alternate;for(c!==null&&(c.lanes|=s),c=r,r=r.return;r!==null;)r.childLanes|=s,c=r.alternate,c!==null&&(c.childLanes|=s),c=r,r=r.return;return c.tag===3?c.stateNode:null}function On(r,s){var c=r.callbackNode;ug(r,s);var h=lo(r,r===$t?yn:0);if(h===0)c!==null&&Ff(c),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(c!=null&&Ff(c),s===1)r.tag===0?gg(Jh.bind(null,r)):Of(Jh.bind(null,r)),mt?ot(function(){ht===0&&bi()}):iu(ru,bi),c=null;else{switch(Nf(h)){case 1:c=ru;break;case 4:c=dg;break;case 16:c=su;break;case 536870912:c=pg;break;default:c=su}c=od(c,Qh.bind(null,r))}r.callbackPriority=s,r.callbackNode=c}}function Qh(r,s){if(Yo=-1,qo=0,ht&6)throw Error(l(327));var c=r.callbackNode;if(Ir()&&r.callbackNode!==c)return null;var h=lo(r,r===$t?yn:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Ko(r,h);else{s=h;var x=ht;ht|=2;var _=td();($t!==r||yn!==s)&&(hs(),Lr(r,s));do try{Bg();break}catch(k){ed(r,k)}while(1);lu(),Go.current=_,ht=x,en!==null?s=0:($t=null,yn=0,s=on)}if(s!==0){if(s===2&&(x=eu(r),x!==0&&(h=x,s=Ku(r,x))),s===1)throw c=xa,Lr(r,0),mr(r,h),On(r,dn()),c;if(s===6)mr(r,h);else{if(x=r.current.alternate,!(h&30)&&!Og(x)&&(s=Ko(r,h),s===2&&(_=eu(r),_!==0&&(h=_,s=Ku(r,_))),s===1))throw c=xa,Lr(r,0),mr(r,h),On(r,dn()),c;switch(r.finishedWork=x,r.finishedLanes=h,s){case 0:case 1:throw Error(l(345));case 2:Ur(r,Fn);break;case 3:if(mr(r,h),(h&130023424)===h&&(s=ju+500-dn(),10<s)){if(lo(r,0)!==0)break;if(x=r.suspendedLanes,(x&h)!==h){In(),r.pingedLanes|=r.suspendedLanes&x;break}r.timeoutHandle=Ie(Ur.bind(null,r,Fn),s);break}Ur(r,Fn);break;case 4:if(mr(r,h),(h&4194240)===h)break;for(s=r.eventTimes,x=-1;0<h;){var L=31-pi(h);_=1<<L,L=s[L],L>x&&(x=L),h&=~_}if(h=x,h=dn()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Fg(h/1960))-h,10<h){r.timeoutHandle=Ie(Ur.bind(null,r,Fn),h);break}Ur(r,Fn);break;case 5:Ur(r,Fn);break;default:throw Error(l(329))}}}return On(r,dn()),r.callbackNode===c?Qh.bind(null,r):null}function Ku(r,s){var c=Sa;return r.current.memoizedState.isDehydrated&&(Lr(r,s).flags|=256),r=Ko(r,s),r!==2&&(s=Fn,Fn=c,s!==null&&Qu(s)),r}function Qu(r){Fn===null?Fn=r:Fn.push.apply(Fn,r)}function Og(r){for(var s=r;;){if(s.flags&16384){var c=s.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var x=c[h],_=x.getSnapshot;x=x.value;try{if(!Ci(_(),x))return!1}catch{return!1}}}if(c=s.child,s.subtreeFlags&16384&&c!==null)c.return=s,s=c;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mr(r,s){for(s&=~Xu,s&=~Vo,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var c=31-pi(s),h=1<<c;r[c]=-1,s&=~h}}function Jh(r){if(ht&6)throw Error(l(327));Ir();var s=lo(r,0);if(!(s&1))return On(r,dn()),null;var c=Ko(r,s);if(r.tag!==0&&c===2){var h=eu(r);h!==0&&(s=h,c=Ku(r,h))}if(c===1)throw c=xa,Lr(r,0),mr(r,s),On(r,dn()),c;if(c===6)throw Error(l(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ur(r,Fn),On(r,dn()),null}function $h(r){dr!==null&&dr.tag===0&&!(ht&6)&&Ir();var s=ht;ht|=1;var c=Zt.transition,h=yt;try{if(Zt.transition=null,yt=1,r)return r()}finally{yt=h,Zt.transition=c,ht=s,!(ht&6)&&bi()}}function Ju(){Kn=cs.current,Rt(cs)}function Lr(r,s){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==xt&&(r.timeoutHandle=xt,We(c)),en!==null)for(c=en.return;c!==null;){var h=c;switch(mu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ur();break;case 3:ls(),Rt(Jt),Rt(an),Mu();break;case 5:yu(h);break;case 4:ls();break;case 13:Rt(Vt);break;case 19:Rt(Vt);break;case 10:uu(h.type._context);break;case 22:case 23:Ju()}c=c.return}if($t=r,en=r=vr(r.current,null),yn=Kn=s,on=0,xa=null,Xu=Vo=fs=0,Fn=Sa=null,Di!==null){for(s=0;s<Di.length;s++)if(c=Di[s],h=c.interleaved,h!==null){c.interleaved=null;var x=h.next,_=c.pending;if(_!==null){var L=_.next;_.next=x,h.next=L}c.pending=h}Di=null}return r}function ed(r,s){do{var c=en;try{if(lu(),Mo.current=Po,Eo){for(var h=qt.memoizedState;h!==null;){var x=h.queue;x!==null&&(x.pending=null),h=h.next}Eo=!1}if(us=0,pn=Rn=qt=null,ua=!1,ca=0,Wu.current=null,c===null||c.return===null){on=1,xa=s,en=null;break}e:{var _=r,L=c.return,k=c,re=s;if(s=yn,k.flags|=32768,re!==null&&typeof re=="object"&&typeof re.then=="function"){var me=re,Ce=k,it=Ce.tag;if(!(Ce.mode&1)&&(it===0||it===11||it===15)){var ke=Ce.alternate;ke?(Ce.updateQueue=ke.updateQueue,Ce.memoizedState=ke.memoizedState,Ce.lanes=ke.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Dt=_h(L);if(Dt!==null){Dt.flags&=-257,Mh(Dt,L,k,_,s),Dt.mode&1&&yh(_,me,s),s=Dt,re=me;var Ue=s.updateQueue;if(Ue===null){var bn=new Set;bn.add(re),s.updateQueue=bn}else Ue.add(re);break e}else{if(!(s&1)){yh(_,me,s),$u();break e}re=Error(l(426))}}else if(Bt&&k.mode&1){var ui=_h(L);if(ui!==null){!(ui.flags&65536)&&(ui.flags|=256),Mh(ui,L,k,_,s),xu(re);break e}}_=re,on!==4&&(on=2),Sa===null?Sa=[_]:Sa.push(_),re=Cu(re,k),k=L;do{switch(k.tag){case 3:k.flags|=65536,s&=-s,k.lanes|=s;var Q=xh(k,re,s);kf(k,Q);break e;case 1:_=re;var W=k.type,te=k.stateNode;if(!(k.flags&128)&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(hr===null||!hr.has(te)))){k.flags|=65536,s&=-s,k.lanes|=s;var Ae=Sh(k,_,s);kf(k,Ae);break e}}k=k.return}while(k!==null)}id(c)}catch(Le){s=Le,en===c&&c!==null&&(en=c=c.return);continue}break}while(1)}function td(){var r=Go.current;return Go.current=Po,r===null?Po:r}function $u(){(on===0||on===3||on===2)&&(on=4),$t===null||!(fs&268435455)&&!(Vo&268435455)||mr($t,yn)}function Ko(r,s){var c=ht;ht|=2;var h=td();$t===r&&yn===s||Lr(r,s);do try{zg();break}catch(x){ed(r,x)}while(1);if(lu(),ht=c,Go.current=h,en!==null)throw Error(l(261));return $t=null,yn=0,on}function zg(){for(;en!==null;)nd(en)}function Bg(){for(;en!==null&&!fg();)nd(en)}function nd(r){var s=ad(r.alternate,r,Kn);r.memoizedProps=r.pendingProps,s===null?id(r):en=s,Wu.current=null}function id(r){var s=r;do{var c=s.alternate;if(r=s.return,s.flags&32768){if(c=Dg(c,s),c!==null){c.flags&=32767,en=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{on=6,en=null;return}}else if(c=Pg(c,s,Kn),c!==null){en=c;return}if(s=s.sibling,s!==null){en=s;return}en=s=r}while(s!==null);on===0&&(on=5)}function Ur(r,s){var c=yt,h=Zt.transition;try{Zt.transition=null,yt=1,kg(r,s,c)}finally{Zt.transition=h,yt=c}return null}function kg(r,s,c){do Ir();while(dr!==null);if(ht&6)throw Error(l(327));var h=r.finishedWork,x=r.finishedLanes;if(h===null)return null;if(r.finishedWork=null,r.finishedLanes=0,h===r.current)throw Error(l(177));r.callbackNode=null,r.callbackPriority=0;var _=h.lanes|h.childLanes;if(cg(r,_),r===$t&&(en=$t=null,yn=0),!(h.subtreeFlags&2064)&&!(h.flags&2064)||Xo||(Xo=!0,od(su,function(){return Ir(),null})),_=(h.flags&15990)!==0,h.subtreeFlags&15990||_){_=Zt.transition,Zt.transition=null;var L=yt;yt=1;var k=ht;ht|=4,Wu.current=null,Ug(r,h),Ig(r,h),X(r.containerInfo),r.current=h,Ng(h),hg(),ht=k,yt=L,Zt.transition=_}else r.current=h;if(Xo&&(Xo=!1,dr=r,jo=x),_=r.pendingLanes,_===0&&(hr=null),mg(h.stateNode),On(r,dn()),s!==null)for(c=r.onRecoverableError,h=0;h<s.length;h++)c(s[h]);if(Wo)throw Wo=!1,r=qu,qu=null,r;return jo&1&&r.tag!==0&&Ir(),_=r.pendingLanes,_&1?r===Zu?ya++:(ya=0,Zu=r):ya=0,bi(),null}function Ir(){if(dr!==null){var r=Nf(jo),s=Zt.transition,c=yt;try{if(Zt.transition=null,yt=16>r?16:r,dr===null)var h=!1;else{if(r=dr,dr=null,jo=0,ht&6)throw Error(l(331));var x=ht;for(ht|=4,Ee=r.current;Ee!==null;){var _=Ee,L=_.child;if(Ee.flags&16){var k=_.deletions;if(k!==null){for(var re=0;re<k.length;re++){var me=k[re];for(Ee=me;Ee!==null;){var Ce=Ee;switch(Ce.tag){case 0:case 11:case 15:Dr(8,Ce,_)}var it=Ce.child;if(it!==null)it.return=Ce,Ee=it;else for(;Ee!==null;){Ce=Ee;var ke=Ce.sibling,Dt=Ce.return;if(Hh(Ce),Ce===me){Ee=null;break}if(ke!==null){ke.return=Dt,Ee=ke;break}Ee=Dt}}}var Ue=_.alternate;if(Ue!==null){var bn=Ue.child;if(bn!==null){Ue.child=null;do{var ui=bn.sibling;bn.sibling=null,bn=ui}while(bn!==null)}}Ee=_}}if(_.subtreeFlags&2064&&L!==null)L.return=_,Ee=L;else e:for(;Ee!==null;){if(_=Ee,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Dr(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,Ee=Q;break e}Ee=_.return}}var W=r.current;for(Ee=W;Ee!==null;){L=Ee;var te=L.child;if(L.subtreeFlags&2064&&te!==null)te.return=L,Ee=te;else e:for(L=W;Ee!==null;){if(k=Ee,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:va(9,k)}}catch(Le){zn(k,k.return,Le)}if(k===L){Ee=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,Ee=Ae;break e}Ee=k.return}}if(ht=x,bi(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(uo,r)}catch{}h=!0}return h}finally{yt=c,Zt.transition=s}}return!1}function rd(r,s,c){s=Cu(c,s),s=xh(r,s,1),fr(r,s),s=In(),r=Zo(r,1),r!==null&&(ia(r,1,s),On(r,s))}function zn(r,s,c){if(r.tag===3)rd(r,r,c);else for(;s!==null;){if(s.tag===3){rd(s,r,c);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(hr===null||!hr.has(h))){r=Cu(c,r),r=Sh(s,r,1),fr(s,r),r=In(),s=Zo(s,1),s!==null&&(ia(s,1,r),On(s,r));break}}s=s.return}}function Hg(r,s,c){var h=r.pingCache;h!==null&&h.delete(s),s=In(),r.pingedLanes|=r.suspendedLanes&c,$t===r&&(yn&c)===c&&(on===4||on===3&&(yn&130023424)===yn&&500>dn()-ju?Lr(r,0):Xu|=c),On(r,s)}function sd(r,s){s===0&&(r.mode&1?(s=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):s=1);var c=In();r=Zo(r,s),r!==null&&(ia(r,s,c),On(r,c))}function Gg(r){var s=r.memoizedState,c=0;s!==null&&(c=s.retryLane),sd(r,c)}function Vg(r,s){var c=0;switch(r.tag){case 13:var h=r.stateNode,x=r.memoizedState;x!==null&&(c=x.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(l(314))}h!==null&&h.delete(s),sd(r,c)}var ad;ad=function(r,s,c){if(r!==null)if(r.memoizedProps!==s.pendingProps||Jt.current)Zn=!0;else{if(!(r.lanes&c)&&!(s.flags&128))return Zn=!1,bg(r,s,c);Zn=!!(r.flags&131072)}else Zn=!1,Bt&&s.flags&1048576&&jf(s,So,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2),r=s.pendingProps;var x=jt(s,an.current);ns(s,c),x=Tu(null,s,h,r,x,c);var _=wu();return s.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(h)?(_=!0,es(s)):_=!1,s.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,fu(s),x.updater=go,s.stateNode=x,x._reactInternals=s,du(s,h,r,c),s=Lu(null,s,h,!0,_,c)):(s.tag=0,Bt&&_&&pu(s),Un(null,s,x,c),s=s.child),s;case 16:h=s.elementType;e:{switch(r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2),r=s.pendingProps,x=h._init,h=x(h._payload),s.type=h,x=s.tag=Xg(h),r=mi(h,r),x){case 0:s=Du(null,s,h,r,c);break e;case 1:s=bh(null,s,h,r,c);break e;case 11:s=wh(null,s,h,r,c);break e;case 14:s=Ah(null,s,h,mi(h.type,r),c);break e}throw Error(l(306,h,""))}return s;case 0:return h=s.type,x=s.pendingProps,x=s.elementType===h?x:mi(h,x),Du(r,s,h,x,c);case 1:return h=s.type,x=s.pendingProps,x=s.elementType===h?x:mi(h,x),bh(r,s,h,x,c);case 3:e:{if(Dh(s),r===null)throw Error(l(387));h=s.pendingProps,_=s.memoizedState,x=_.element,Bf(r,s),vo(s,h,null,c);var L=s.memoizedState;if(h=L.element,Tt&&_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:L.cache,transitions:L.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){x=Error(l(423)),s=Lh(r,s,h,c,x);break e}else if(h!==x){x=Error(l(424)),s=Lh(r,s,h,c,x);break e}else for(Tt&&(qn=Ql(s.stateNode.containerInfo),Yn=s,Bt=!0,vi=null,ra=!1),c=Jf(s,null,h,c),s.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(ss(),h===x){s=Xi(r,s,c);break e}Un(r,s,h,c)}s=s.child}return s;case 5:return $f(s),r===null&&gu(s),h=s.type,x=s.pendingProps,_=r!==null?r.memoizedProps:null,L=x.children,pe(h,x)?L=null:_!==null&&pe(h,_)&&(s.flags|=32),Ch(r,s),Un(r,s,L,c),s.child;case 6:return r===null&&gu(s),null;case 13:return Uh(r,s,c);case 4:return Su(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=as(s,null,h,c):Un(r,s,h,c),s.child;case 11:return h=s.type,x=s.pendingProps,x=s.elementType===h?x:mi(h,x),wh(r,s,h,x,c);case 7:return Un(r,s,s.pendingProps,c),s.child;case 8:return Un(r,s,s.pendingProps.children,c),s.child;case 12:return Un(r,s,s.pendingProps.children,c),s.child;case 10:e:{if(h=s.type._context,x=s.pendingProps,_=s.memoizedProps,L=x.value,zf(s,h,L),_!==null)if(Ci(_.value,L)){if(_.children===x.children&&!Jt.current){s=Xi(r,s,c);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var k=_.dependencies;if(k!==null){L=_.child;for(var re=k.firstContext;re!==null;){if(re.context===h){if(_.tag===1){re=Hi(-1,c&-c),re.tag=2;var me=_.updateQueue;if(me!==null){me=me.shared;var Ce=me.pending;Ce===null?re.next=re:(re.next=Ce.next,Ce.next=re),me.pending=re}}_.lanes|=c,re=_.alternate,re!==null&&(re.lanes|=c),cu(_.return,c,s),k.lanes|=c;break}re=re.next}}else if(_.tag===10)L=_.type===s.type?null:_.child;else if(_.tag===18){if(L=_.return,L===null)throw Error(l(341));L.lanes|=c,k=L.alternate,k!==null&&(k.lanes|=c),cu(L,c,s),L=_.sibling}else L=_.child;if(L!==null)L.return=_;else for(L=_;L!==null;){if(L===s){L=null;break}if(_=L.sibling,_!==null){_.return=L.return,L=_;break}L=L.return}_=L}Un(r,s,x.children,c),s=s.child}return s;case 9:return x=s.type,h=s.pendingProps.children,ns(s,c),x=ni(x),h=h(x),s.flags|=1,Un(r,s,h,c),s.child;case 14:return h=s.type,x=mi(h,s.pendingProps),x=mi(h.type,x),Ah(r,s,h,x,c);case 15:return Rh(r,s,s.type,s.pendingProps,c);case 17:return h=s.type,x=s.pendingProps,x=s.elementType===h?x:mi(h,x),r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2),s.tag=1,Yt(h)?(r=!0,es(s)):r=!1,ns(s,c),Wf(s,h,x),du(s,h,x,c),Lu(null,s,h,!0,r,c);case 19:return Oh(r,s,c);case 22:return Ph(r,s,c)}throw Error(l(156,s.tag))};function od(r,s){return iu(r,s)}function Wg(r,s,c,h){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(r,s,c,h){return new Wg(r,s,c,h)}function ec(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Xg(r){if(typeof r=="function")return ec(r)?1:0;if(r!=null){if(r=r.$$typeof,r===T)return 11;if(r===w)return 14}return 2}function vr(r,s){var c=r.alternate;return c===null?(c=li(r.tag,s,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=s,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,s=r.dependencies,c.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function Qo(r,s,c,h,x,_){var L=2;if(h=r,typeof r=="function")ec(r)&&(L=1);else if(typeof r=="string")L=5;else e:switch(r){case d:return Nr(c.children,x,_,s);case m:L=8,x|=8;break;case v:return r=li(12,c,s,x|2),r.elementType=v,r.lanes=_,r;case y:return r=li(13,c,s,x),r.elementType=y,r.lanes=_,r;case g:return r=li(19,c,s,x),r.elementType=g,r.lanes=_,r;case P:return Jo(c,x,_,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case S:L=10;break e;case M:L=9;break e;case T:L=11;break e;case w:L=14;break e;case E:L=16,h=null;break e}throw Error(l(130,r==null?r:typeof r,""))}return s=li(L,c,s,x),s.elementType=r,s.type=h,s.lanes=_,s}function Nr(r,s,c,h){return r=li(7,r,h,s),r.lanes=c,r}function Jo(r,s,c,h){return r=li(22,r,h,s),r.elementType=P,r.lanes=c,r.stateNode={},r}function tc(r,s,c){return r=li(6,r,null,s),r.lanes=c,r}function nc(r,s,c){return s=li(4,r.children!==null?r.children:[],r.key,s),s.lanes=c,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function jg(r,s,c,h,x){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=xt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=h,this.onRecoverableError=x,Tt&&(this.mutableSourceEagerHydrationData=null)}function ld(r,s,c,h,x,_,L,k,re){return r=new jg(r,s,c,k,re),s===1?(s=1,_===!0&&(s|=8)):s=0,_=li(3,null,null,s),r.current=_,_.stateNode=r,_.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null},fu(_),r}function ud(r){if(!r)return wn;r=r._reactInternals;e:{if(A(r)!==r||r.tag!==1)throw Error(l(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(l(171))}if(r.tag===1){var c=r.type;if(Yt(c))return $r(r,c,s)}return s}function cd(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(l(188)):(r=Object.keys(r).join(","),Error(l(268,r)));return r=ae(s),r===null?null:r.stateNode}function fd(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<s?c:s}}function ic(r,s){fd(r,s),(r=r.alternate)&&fd(r,s)}function Yg(r){return r=ae(r),r===null?null:r.stateNode}function qg(){return null}return t.attemptContinuousHydration=function(r){if(r.tag===13){var s=In();oi(r,134217728,s),ic(r,134217728)}},t.attemptHydrationAtCurrentPriority=function(r){if(r.tag===13){var s=In(),c=pr(r);oi(r,c,s),ic(r,c)}},t.attemptSynchronousHydration=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var c=na(s.pendingLanes);c!==0&&(nu(s,c|1),On(s,dn()),!(ht&6)&&(hs(),bi()))}break;case 13:var h=In();$h(function(){return oi(r,1,h)}),ic(r,1)}},t.batchedUpdates=function(r,s){var c=ht;ht|=1;try{return r(s)}finally{ht=c,ht===0&&(hs(),co&&bi())}},t.createComponentSelector=function(r){return{$$typeof:Oo,value:r}},t.createContainer=function(r,s,c,h,x,_,L){return ld(r,s,!1,null,c,h,x,_,L)},t.createHasPseudoClassSelector=function(r){return{$$typeof:zo,value:r}},t.createHydrationContainer=function(r,s,c,h,x,_,L,k,re){return r=ld(c,h,!0,r,x,_,L,k,re),r.context=ud(null),c=r.current,h=In(),x=pr(c),_=Hi(h,x),_.callback=s??null,fr(c,_),r.current.lanes=x,ia(r,x,h),On(r,h),r},t.createPortal=function(r,s,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:h==null?null:""+h,children:r,containerInfo:s,implementation:c}},t.createRoleSelector=function(r){return{$$typeof:Bo,value:r}},t.createTestNameSelector=function(r){return{$$typeof:ko,value:r}},t.createTextSelector=function(r){return{$$typeof:Ho,value:r}},t.deferredUpdates=function(r){var s=yt,c=Zt.transition;try{return Zt.transition=null,yt=16,r()}finally{yt=s,Zt.transition=c}},t.discreteUpdates=function(r,s,c,h,x){var _=yt,L=Zt.transition;try{return Zt.transition=null,yt=1,r(s,c,h,x)}finally{yt=_,Zt.transition=L,ht===0&&hs()}},t.findAllNodes=Vu,t.findBoundingRects=function(r,s){if(!St)throw Error(l(363));s=Vu(r,s),r=[];for(var c=0;c<s.length;c++)r.push(hn(s[c]));for(s=r.length-1;0<s;s--){c=r[s];for(var h=c.x,x=h+c.width,_=c.y,L=_+c.height,k=s-1;0<=k;k--)if(s!==k){var re=r[k],me=re.x,Ce=me+re.width,it=re.y,ke=it+re.height;if(h>=me&&_>=it&&x<=Ce&&L<=ke){r.splice(s,1);break}else if(h!==me||c.width!==re.width||ke<_||it>L){if(!(_!==it||c.height!==re.height||Ce<h||me>x)){me>h&&(re.width+=me-h,re.x=h),Ce<x&&(re.width=x-me),r.splice(s,1);break}}else{it>_&&(re.height+=it-_,re.y=_),ke<L&&(re.height=L-it),r.splice(s,1);break}}}return r},t.findHostInstance=cd,t.findHostInstanceWithNoPortals=function(r){return r=V(r),r=r!==null?$(r):null,r===null?null:r.stateNode},t.findHostInstanceWithWarning=function(r){return cd(r)},t.flushControlled=function(r){var s=ht;ht|=1;var c=Zt.transition,h=yt;try{Zt.transition=null,yt=1,r()}finally{yt=h,Zt.transition=c,ht=s,ht===0&&(hs(),bi())}},t.flushPassiveEffects=Ir,t.flushSync=$h,t.focusWithin=function(r,s){if(!St)throw Error(l(363));for(r=ku(r),s=Kh(r,s),s=Array.from(s),r=0;r<s.length;){var c=s[r++];if(!R(c)){if(c.tag===5&&ge(c.stateNode))return!0;for(c=c.child;c!==null;)s.push(c),c=c.sibling}}return!1},t.getCurrentUpdatePriority=function(){return yt},t.getFindAllNodesFailureDescription=function(r,s){if(!St)throw Error(l(363));var c=0,h=[];r=[ku(r),0];for(var x=0;x<r.length;){var _=r[x++],L=r[x++],k=s[L];if((_.tag!==5||!R(_))&&(Hu(_,k)&&(h.push(Gu(k)),L++,L>c&&(c=L)),L<s.length))for(_=_.child;_!==null;)r.push(_,L),_=_.sibling}if(c<s.length){for(r=[];c<s.length;c++)r.push(Gu(s[c]));return`findAllNodes was able to match part of the selector:
  `+(h.join(" > ")+`

No matching component was found for:
  `)+r.join(" > ")}return null},t.getPublicRootInstance=function(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return fe(r.child.stateNode);default:return r.child.stateNode}},t.injectIntoDevTools=function(r){if(r={bundleType:r.bundleType,version:r.version,rendererPackageName:r.rendererPackageName,rendererConfig:r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:u.ReactCurrentDispatcher,findHostInstanceByFiber:Yg,findFiberByHostInstance:r.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")r=!1;else{var s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(s.isDisabled||!s.supportsFiber)r=!0;else{try{uo=s.inject(r),Pi=s}catch{}r=!!s.checkDCE}}return r},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(r,s,c,h){if(!St)throw Error(l(363));r=Vu(r,s);var x=xe(r,c,h).disconnect;return{disconnect:function(){x()}}},t.registerMutableSourceForHydration=function(r,s){var c=s._getVersion;c=c(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,c]:r.mutableSourceEagerHydrationData.push(s,c)},t.runWithPriority=function(r,s){var c=yt;try{return yt=r,s()}finally{yt=c}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(r,s,c,h){var x=s.current,_=In(),L=pr(x);return c=ud(c),s.context===null?s.context=c:s.pendingContext=c,s=Hi(_,L),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),fr(x,s),r=oi(x,L,_),r!==null&&mo(r,x,L),L},t};Rv.exports=xE;var SE=Rv.exports;const yE=Kg(SE);var Pv={exports:{}},Cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,G){var X=I.length;I.push(G);e:for(;0<X;){var z=X-1>>>1,Y=I[z];if(0<a(Y,G))I[z]=G,I[X]=Y,X=z;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],X=I.pop();if(X!==G){I[0]=X;e:for(var z=0,Y=I.length,he=Y>>>1;z<he;){var de=2*(z+1)-1,pe=I[de],Re=de+1,Ie=I[Re];if(0>a(pe,X))Re<Y&&0>a(Ie,pe)?(I[z]=Ie,I[Re]=X,z=Re):(I[z]=pe,I[de]=X,z=de);else if(Re<Y&&0>a(Ie,X))I[z]=Ie,I[Re]=X,z=Re;else break e}}return G}function a(I,G){var X=I.sortIndex-G.sortIndex;return X!==0?X:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var f=[],p=[],d=1,m=null,v=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(I){for(var G=t(p);G!==null;){if(G.callback===null)i(p);else if(G.startTime<=I)i(p),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(p)}}function P(I){if(T=!1,E(I),!M)if(t(f)!==null)M=!0,fe(C);else{var G=t(p);G!==null&&se(P,G.startTime-I)}}function C(I,G){M=!1,T&&(T=!1,g(Z),Z=-1),S=!0;var X=v;try{for(E(G),m=t(f);m!==null&&(!(m.expirationTime>G)||I&&!V());){var z=m.callback;if(typeof z=="function"){m.callback=null,v=m.priorityLevel;var Y=z(m.expirationTime<=G);G=n.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(f)&&i(f),E(G)}else i(f);m=t(f)}if(m!==null)var he=!0;else{var de=t(p);de!==null&&se(P,de.startTime-G),he=!1}return he}finally{m=null,v=X,S=!1}}var U=!1,F=null,Z=-1,A=5,D=-1;function V(){return!(n.unstable_now()-D<A)}function ae(){if(F!==null){var I=n.unstable_now();D=I;var G=!0;try{G=F(!0,I)}finally{G?j():(U=!1,F=null)}}else U=!1}var j;if(typeof w=="function")j=function(){w(ae)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ie=$.port2;$.port1.onmessage=ae,j=function(){ie.postMessage(null)}}else j=function(){y(ae,0)};function fe(I){F=I,U||(U=!0,j())}function se(I,G){Z=y(function(){I(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,fe(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(I){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var X=v;v=G;try{return I()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=v;v=I;try{return G()}finally{v=X}},n.unstable_scheduleCallback=function(I,G,X){var z=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?z+X:z):X=z,I){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=X+Y,I={id:d++,callback:G,priorityLevel:I,startTime:X,expirationTime:Y,sortIndex:-1},X>z?(I.sortIndex=X,e(p,I),t(f)===null&&I===t(p)&&(T?(g(Z),Z=-1):T=!0,se(P,X-z))):(I.sortIndex=Y,e(f,I),M||S||(M=!0,fe(C))),I},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(I){var G=v;return function(){var X=v;v=G;try{return I.apply(this,arguments)}finally{v=X}}}})(Cv);Pv.exports=Cv;var zp=Pv.exports;const _E=n=>typeof n=="object"&&typeof n.then=="function",jr=[];function bv(n,e,t=(i,a)=>i===a){if(n===e)return!0;if(!n||!e)return!1;const i=n.length;if(e.length!==i)return!1;for(let a=0;a<i;a++)if(!t(n[a],e[a]))return!1;return!0}function Dv(n,e=null,t=!1,i={}){e===null&&(e=[n]);for(const o of jr)if(bv(e,o.keys,o.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return i.lifespan&&i.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,i.lifespan)),o.response;if(!t)throw o.promise}const a={keys:e,equal:i.equal,remove:()=>{const o=jr.indexOf(a);o!==-1&&jr.splice(o,1)},promise:(_E(n)?n:n(...e)).then(o=>{a.response=o,i.lifespan&&i.lifespan>0&&(a.timeout=setTimeout(a.remove,i.lifespan))}).catch(o=>a.error=o)};if(jr.push(a),!t)throw a.promise}const ME=(n,e,t)=>Dv(n,e,!1,t),EE=(n,e,t)=>void Dv(n,e,!0,t),TE=n=>{if(n===void 0||n.length===0)jr.splice(0,jr.length);else{const e=jr.find(t=>bv(n,t.keys,t.equal));e&&e.remove()}},Rf={},ql=n=>void Object.assign(Rf,n);function wE(n,e){function t(d,{args:m=[],attach:v,...S},M){let T=`${d[0].toUpperCase()}${d.slice(1)}`,y;if(d==="primitive"){if(S.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const g=S.object;y=Us(g,{type:d,root:M,attach:v,primitive:!0})}else{const g=Rf[T];if(!g)throw new Error(`R3F: ${T} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(m))throw new Error("R3F: The args prop must be an array!");y=Us(new g(...m),{type:d,root:M,attach:v,memoizedProps:{args:m}})}return y.__r3f.attach===void 0&&(y instanceof ti?y.__r3f.attach="geometry":y instanceof ar&&(y.__r3f.attach="material")),T!=="inject"&&kc(y,S),y}function i(d,m){let v=!1;if(m){var S,M;(S=m.__r3f)!=null&&S.attach?Bc(d,m,m.__r3f.attach):m.isObject3D&&d.isObject3D&&(d.add(m),v=!0),v||(M=d.__r3f)==null||M.objects.push(m),m.__r3f||Us(m,{}),m.__r3f.parent=d,uf(m),Is(m)}}function a(d,m,v){let S=!1;if(m){var M,T;if((M=m.__r3f)!=null&&M.attach)Bc(d,m,m.__r3f.attach);else if(m.isObject3D&&d.isObject3D){m.parent=d,m.dispatchEvent({type:"added"});const y=d.children.filter(w=>w!==m),g=y.indexOf(v);d.children=[...y.slice(0,g),m,...y.slice(g)],S=!0}S||(T=d.__r3f)==null||T.objects.push(m),m.__r3f||Us(m,{}),m.__r3f.parent=d,uf(m),Is(m)}}function o(d,m,v=!1){d&&[...d].forEach(S=>l(m,S,v))}function l(d,m,v){if(m){var S,M,T;if(m.__r3f&&(m.__r3f.parent=null),(S=d.__r3f)!=null&&S.objects&&(d.__r3f.objects=d.__r3f.objects.filter(P=>P!==m)),(M=m.__r3f)!=null&&M.attach)Vp(d,m,m.__r3f.attach);else if(m.isObject3D&&d.isObject3D){var y;d.remove(m),(y=m.__r3f)!=null&&y.root&&LE(m.__r3f.root,m)}const w=(T=m.__r3f)==null?void 0:T.primitive,E=v===void 0?m.dispose!==null&&!w:v;if(!w){var g;o((g=m.__r3f)==null?void 0:g.objects,m,E),o(m.children,m,E)}delete m.__r3f,E&&m.dispose&&m.type!=="Scene"&&zp.unstable_scheduleCallback(zp.unstable_IdlePriority,()=>{try{m.dispose()}catch{}}),Is(d)}}function u(d,m,v,S){var M;const T=(M=d.__r3f)==null?void 0:M.parent;if(!T)return;const y=t(m,v,d.__r3f.root);if(d.children){for(const g of d.children)g.__r3f&&i(y,g);d.children=d.children.filter(g=>!g.__r3f)}d.__r3f.objects.forEach(g=>i(y,g)),d.__r3f.objects=[],d.__r3f.autoRemovedBeforeAppend||l(T,d),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),i(T,y),y.raycast&&y.__r3f.eventCount&&y.__r3f.root.getState().internal.interaction.push(y),[S,S.alternate].forEach(g=>{g!==null&&(g.stateNode=y,g.ref&&(typeof g.ref=="function"?g.ref(y):g.ref.current=y))})}const f=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:yE({createInstance:t,removeChild:l,appendChild:i,appendInitialChild:i,insertBefore:a,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(d,m)=>{if(!m)return;const v=d.getState().scene;v.__r3f&&(v.__r3f.root=d,i(v,m))},removeChildFromContainer:(d,m)=>{m&&l(d.getState().scene,m)},insertInContainerBefore:(d,m,v)=>{if(!m||!v)return;const S=d.getState().scene;S.__r3f&&a(S,m,v)},getRootHostContext:()=>null,getChildHostContext:d=>d,finalizeInitialChildren(d){var m;return!!((m=d==null?void 0:d.__r3f)!=null?m:{}).handlers},prepareUpdate(d,m,v,S){var M;if(((M=d==null?void 0:d.__r3f)!=null?M:{}).primitive&&S.object&&S.object!==d)return[!0];{const{args:y=[],children:g,...w}=S,{args:E=[],children:P,...C}=v;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((F,Z)=>F!==E[Z]))return[!0];const U=Fv(d,w,C,!0);return U.changes.length?[!1,U]:null}},commitUpdate(d,[m,v],S,M,T,y){m?u(d,S,T,y):kc(d,v)},commitMount(d,m,v,S){var M;const T=(M=d.__r3f)!=null?M:{};d.raycast&&T.handlers&&T.eventCount&&d.__r3f.root.getState().internal.interaction.push(d)},getPublicInstance:d=>d,prepareForCommit:()=>null,preparePortalMount:d=>Us(d.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(d){var m;const{attach:v,parent:S}=(m=d.__r3f)!=null?m:{};v&&S&&Vp(S,d,v),d.isObject3D&&(d.visible=!1),Is(d)},unhideInstance(d,m){var v;const{attach:S,parent:M}=(v=d.__r3f)!=null?v:{};S&&M&&Bc(M,d,S),(d.isObject3D&&m.visible==null||m.visible)&&(d.visible=!0),Is(d)},createTextInstance:f,hideTextInstance:f,unhideTextInstance:f,getCurrentEventPriority:()=>e?e():Fs.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&zt.fun(performance.now)?performance.now:zt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:zt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:zt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:kc}}var Bp,kp;const zc=n=>"colorSpace"in n||"outputColorSpace"in n,Lv=()=>{var n;return(n=Rf.ColorManagement)!=null?n:null},Uv=n=>n&&n.isOrthographicCamera,Zl=typeof window<"u"&&((Bp=window.document)!=null&&Bp.createElement||((kp=window.navigator)==null?void 0:kp.product)==="ReactNative")?ee.useLayoutEffect:ee.useEffect;function AE(n){const e=ee.useRef(n);return Zl(()=>void(e.current=n),[n]),e}class RE extends ee.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}RE.getDerivedStateFromError=()=>({error:!0});const Iv="__default",Hp=new Map,PE=n=>n&&!!n.memoized&&!!n.changes;function Nv(n){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(n)?Math.min(Math.max(n[0],t),n[1]):n}const wa=n=>{var e;return(e=n.__r3f)==null?void 0:e.root.getState()},zt={obj:n=>n===Object(n)&&!zt.arr(n)&&typeof n!="function",fun:n=>typeof n=="function",str:n=>typeof n=="string",num:n=>typeof n=="number",boo:n=>typeof n=="boolean",und:n=>n===void 0,arr:n=>Array.isArray(n),equ(n,e,{arrays:t="shallow",objects:i="reference",strict:a=!0}={}){if(typeof n!=typeof e||!!n!=!!e)return!1;if(zt.str(n)||zt.num(n))return n===e;const o=zt.obj(n);if(o&&i==="reference")return n===e;const l=zt.arr(n);if(l&&t==="reference")return n===e;if((l||o)&&n===e)return!0;let u;for(u in n)if(!(u in e))return!1;if(o&&t==="shallow"&&i==="shallow"){for(u in a?e:n)if(!zt.equ(n[u],e[u],{strict:a,objects:"reference"}))return!1}else for(u in a?e:n)if(n[u]!==e[u])return!1;if(zt.und(u)){if(l&&n.length===0&&e.length===0||o&&Object.keys(n).length===0&&Object.keys(e).length===0)return!0;if(n!==e)return!1}return!0}};function CE(n){const e={nodes:{},materials:{}};return n&&n.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function bE(n){n.dispose&&n.type!=="Scene"&&n.dispose();for(const e in n)e.dispose==null||e.dispose(),delete n[e]}function Us(n,e){const t=n;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},n}function lf(n,e){let t=n;if(e.includes("-")){const i=e.split("-"),a=i.pop();return t=i.reduce((o,l)=>o[l],n),{target:t,key:a}}else return{target:t,key:e}}const Gp=/-\d+$/;function Bc(n,e,t){if(zt.str(t)){if(Gp.test(t)){const o=t.replace(Gp,""),{target:l,key:u}=lf(n,o);Array.isArray(l[u])||(l[u]=[])}const{target:i,key:a}=lf(n,t);e.__r3f.previousAttach=i[a],i[a]=e}else e.__r3f.previousAttach=t(n,e)}function Vp(n,e,t){var i,a;if(zt.str(t)){const{target:o,key:l}=lf(n,t),u=e.__r3f.previousAttach;u===void 0?delete o[l]:o[l]=u}else(i=e.__r3f)==null||i.previousAttach==null||i.previousAttach(n,e);(a=e.__r3f)==null||delete a.previousAttach}function Fv(n,{children:e,key:t,ref:i,...a},{children:o,key:l,ref:u,...f}={},p=!1){var d;const m=(d=n==null?void 0:n.__r3f)!=null?d:{},v=Object.entries(a),S=[];if(p){const T=Object.keys(f);for(let y=0;y<T.length;y++)a.hasOwnProperty(T[y])||v.unshift([T[y],Iv+"remove"])}v.forEach(([T,y])=>{var g;if((g=n.__r3f)!=null&&g.primitive&&T==="object"||zt.equ(y,f[T]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(T))return S.push([T,y,!0,[]]);let w=[];T.includes("-")&&(w=T.split("-")),S.push([T,y,!1,w]);for(const E in a){const P=a[E];E.startsWith(`${T}-`)&&S.push([E,P,!1,E.split("-")])}});const M={...a};return m.memoizedProps&&m.memoizedProps.args&&(M.args=m.memoizedProps.args),m.memoizedProps&&m.memoizedProps.attach&&(M.attach=m.memoizedProps.attach),{memoized:M,changes:S}}function kc(n,e){var t,i,a;const o=(t=n.__r3f)!=null?t:{},l=o.root,u=(i=l==null||l.getState==null?void 0:l.getState())!=null?i:{},{memoized:f,changes:p}=PE(e)?e:Fv(n,e),d=o.eventCount;n.__r3f&&(n.__r3f.memoizedProps=f);for(let v=0;v<p.length;v++){let[S,M,T,y]=p[v];if(zc(n)){const P="srgb",C="srgb-linear";S==="encoding"?(S="colorSpace",M=M===3001?P:C):S==="outputEncoding"&&(S="outputColorSpace",M=M===3001?P:C)}let g=n,w=g[S];if(y.length&&(w=y.reduce((E,P)=>E[P],n),!(w&&w.set))){const[E,...P]=y.reverse();g=P.reverse().reduce((C,U)=>C[U],n),S=E}if(M===Iv+"remove")if(g.constructor){let E=Hp.get(g.constructor);E||(E=new g.constructor,Hp.set(g.constructor,E)),M=E[S]}else M=0;if(T)M?o.handlers[S]=M:delete o.handlers[S],o.eventCount=Object.keys(o.handlers).length;else if(w&&w.set&&(w.copy||w instanceof Hs)){if(Array.isArray(M))w.fromArray?w.fromArray(M):w.set(...M);else if(w.copy&&M&&M.constructor&&w.constructor===M.constructor)w.copy(M);else if(M!==void 0){const E=w instanceof qe;!E&&w.setScalar?w.setScalar(M):w instanceof Hs&&M instanceof Hs?w.mask=M.mask:w.set(M),!Lv()&&!u.linear&&E&&w.convertSRGBToLinear()}}else if(g[S]=M,g[S]instanceof Xt&&g[S].format===Wt&&g[S].type===It){const E=g[S];zc(E)&&zc(u.gl)?E.colorSpace=u.gl.outputColorSpace:E.encoding=u.gl.outputEncoding}Is(n)}if(o.parent&&u.internal&&n.raycast&&d!==o.eventCount){const v=u.internal.interaction.indexOf(n);v>-1&&u.internal.interaction.splice(v,1),o.eventCount&&u.internal.interaction.push(n)}return!(p.length===1&&p[0][0]==="onUpdate")&&p.length&&(a=n.__r3f)!=null&&a.parent&&uf(n),n}function Is(n){var e,t;const i=(e=n.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();i&&i.internal.frames===0&&i.invalidate()}function uf(n){n.onUpdate==null||n.onUpdate(n)}function Ov(n,e){n.manual||(Uv(n)?(n.left=e.width/-2,n.right=e.width/2,n.top=e.height/2,n.bottom=e.height/-2):n.aspect=e.width/e.height,n.updateProjectionMatrix(),n.updateMatrixWorld())}function _l(n){return(n.eventObject||n.object).uuid+"/"+n.index+n.instanceId}function DE(){var n;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Fs.DefaultEventPriority;switch((n=e.event)==null?void 0:n.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Fs.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Fs.ContinuousEventPriority;default:return Fs.DefaultEventPriority}}function zv(n,e,t,i){const a=t.get(e);a&&(t.delete(e),t.size===0&&(n.delete(i),a.target.releasePointerCapture(i)))}function LE(n,e){const{internal:t}=n.getState();t.interaction=t.interaction.filter(i=>i!==e),t.initialHits=t.initialHits.filter(i=>i!==e),t.hovered.forEach((i,a)=>{(i.eventObject===e||i.object===e)&&t.hovered.delete(a)}),t.capturedMap.forEach((i,a)=>{zv(t.capturedMap,e,i,a)})}function UE(n){function e(f){const{internal:p}=n.getState(),d=f.offsetX-p.initialClick[0],m=f.offsetY-p.initialClick[1];return Math.round(Math.sqrt(d*d+m*m))}function t(f){return f.filter(p=>["Move","Over","Enter","Out","Leave"].some(d=>{var m;return(m=p.__r3f)==null?void 0:m.handlers["onPointer"+d]}))}function i(f,p){const d=n.getState(),m=new Set,v=[],S=p?p(d.internal.interaction):d.internal.interaction;for(let g=0;g<S.length;g++){const w=wa(S[g]);w&&(w.raycaster.camera=void 0)}d.previousRoot||d.events.compute==null||d.events.compute(f,d);function M(g){const w=wa(g);if(!w||!w.events.enabled||w.raycaster.camera===null)return[];if(w.raycaster.camera===void 0){var E;w.events.compute==null||w.events.compute(f,w,(E=w.previousRoot)==null?void 0:E.getState()),w.raycaster.camera===void 0&&(w.raycaster.camera=null)}return w.raycaster.camera?w.raycaster.intersectObject(g,!0):[]}let T=S.flatMap(M).sort((g,w)=>{const E=wa(g.object),P=wa(w.object);return!E||!P?g.distance-w.distance:P.events.priority-E.events.priority||g.distance-w.distance}).filter(g=>{const w=_l(g);return m.has(w)?!1:(m.add(w),!0)});d.events.filter&&(T=d.events.filter(T,d));for(const g of T){let w=g.object;for(;w;){var y;(y=w.__r3f)!=null&&y.eventCount&&v.push({...g,eventObject:w}),w=w.parent}}if("pointerId"in f&&d.internal.capturedMap.has(f.pointerId))for(let g of d.internal.capturedMap.get(f.pointerId).values())m.has(_l(g.intersection))||v.push(g.intersection);return v}function a(f,p,d,m){const v=n.getState();if(f.length){const S={stopped:!1};for(const M of f){const T=wa(M.object)||v,{raycaster:y,pointer:g,camera:w,internal:E}=T,P=new O(g.x,g.y,0).unproject(w),C=D=>{var V,ae;return(V=(ae=E.capturedMap.get(D))==null?void 0:ae.has(M.eventObject))!=null?V:!1},U=D=>{const V={intersection:M,target:p.target};E.capturedMap.has(D)?E.capturedMap.get(D).set(M.eventObject,V):E.capturedMap.set(D,new Map([[M.eventObject,V]])),p.target.setPointerCapture(D)},F=D=>{const V=E.capturedMap.get(D);V&&zv(E.capturedMap,M.eventObject,V,D)};let Z={};for(let D in p){let V=p[D];typeof V!="function"&&(Z[D]=V)}let A={...M,...Z,pointer:g,intersections:f,stopped:S.stopped,delta:d,unprojectedPoint:P,ray:y.ray,camera:w,stopPropagation(){const D="pointerId"in p&&E.capturedMap.get(p.pointerId);if((!D||D.has(M.eventObject))&&(A.stopped=S.stopped=!0,E.hovered.size&&Array.from(E.hovered.values()).find(V=>V.eventObject===M.eventObject))){const V=f.slice(0,f.indexOf(M));o([...V,M])}},target:{hasPointerCapture:C,setPointerCapture:U,releasePointerCapture:F},currentTarget:{hasPointerCapture:C,setPointerCapture:U,releasePointerCapture:F},nativeEvent:p};if(m(A),S.stopped===!0)break}}return f}function o(f){const{internal:p}=n.getState();for(const d of p.hovered.values())if(!f.length||!f.find(m=>m.object===d.object&&m.index===d.index&&m.instanceId===d.instanceId)){const v=d.eventObject.__r3f,S=v==null?void 0:v.handlers;if(p.hovered.delete(_l(d)),v!=null&&v.eventCount){const M={...d,intersections:f};S.onPointerOut==null||S.onPointerOut(M),S.onPointerLeave==null||S.onPointerLeave(M)}}}function l(f,p){for(let d=0;d<p.length;d++){const m=p[d].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(f)}}function u(f){switch(f){case"onPointerLeave":case"onPointerCancel":return()=>o([]);case"onLostPointerCapture":return p=>{const{internal:d}=n.getState();"pointerId"in p&&d.capturedMap.has(p.pointerId)&&requestAnimationFrame(()=>{d.capturedMap.has(p.pointerId)&&(d.capturedMap.delete(p.pointerId),o([]))})}}return function(d){const{onPointerMissed:m,internal:v}=n.getState();v.lastEvent.current=d;const S=f==="onPointerMove",M=f==="onClick"||f==="onContextMenu"||f==="onDoubleClick",y=i(d,S?t:void 0),g=M?e(d):0;f==="onPointerDown"&&(v.initialClick=[d.offsetX,d.offsetY],v.initialHits=y.map(E=>E.eventObject)),M&&!y.length&&g<=2&&(l(d,v.interaction),m&&m(d)),S&&o(y);function w(E){const P=E.eventObject,C=P.__r3f,U=C==null?void 0:C.handlers;if(C!=null&&C.eventCount)if(S){if(U.onPointerOver||U.onPointerEnter||U.onPointerOut||U.onPointerLeave){const F=_l(E),Z=v.hovered.get(F);Z?Z.stopped&&E.stopPropagation():(v.hovered.set(F,E),U.onPointerOver==null||U.onPointerOver(E),U.onPointerEnter==null||U.onPointerEnter(E))}U.onPointerMove==null||U.onPointerMove(E)}else{const F=U[f];F?(!M||v.initialHits.includes(P))&&(l(d,v.interaction.filter(Z=>!v.initialHits.includes(Z))),F(E)):M&&v.initialHits.includes(P)&&l(d,v.interaction.filter(Z=>!v.initialHits.includes(Z)))}}a(y,d,g,w)}}return{handlePointer:u}}const IE=["set","get","setSize","setFrameloop","setDpr","events","invalidate","advance","size","viewport"],Bv=n=>!!(n!=null&&n.render),Pf=ee.createContext(null),NE=(n,e)=>{const t=Av((u,f)=>{const p=new O,d=new O,m=new O;function v(g=f().camera,w=d,E=f().size){const{width:P,height:C,top:U,left:F}=E,Z=P/C;w instanceof O?m.copy(w):m.set(...w);const A=g.getWorldPosition(p).distanceTo(m);if(Uv(g))return{width:P/g.zoom,height:C/g.zoom,top:U,left:F,factor:1,distance:A,aspect:Z};{const D=g.fov*Math.PI/180,V=2*Math.tan(D/2)*A,ae=V*(P/C);return{width:ae,height:V,top:U,left:F,factor:P/ae,distance:A,aspect:Z}}}let S;const M=g=>u(w=>({performance:{...w.performance,current:g}})),T=new ve;return{set:u,get:f,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(g=1)=>n(f(),g),advance:(g,w)=>e(g,w,f()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new hE,pointer:T,mouse:T,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const g=f();S&&clearTimeout(S),g.performance.current!==g.performance.min&&M(g.performance.min),S=setTimeout(()=>M(f().performance.max),g.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:v},setEvents:g=>u(w=>({...w,events:{...w.events,...g}})),setSize:(g,w,E,P,C)=>{const U=f().camera,F={width:g,height:w,top:P||0,left:C||0,updateStyle:E};u(Z=>({size:F,viewport:{...Z.viewport,...v(U,d,F)}}))},setDpr:g=>u(w=>{const E=Nv(g);return{viewport:{...w.viewport,dpr:E,initialDpr:w.viewport.initialDpr||E}}}),setFrameloop:(g="always")=>{const w=f().clock;w.stop(),w.elapsedTime=0,g!=="never"&&(w.start(),w.elapsedTime=0),u(()=>({frameloop:g}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:ee.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(g,w,E)=>{const P=f().internal;return P.priority=P.priority+(w>0?1:0),P.subscribers.push({ref:g,priority:w,store:E}),P.subscribers=P.subscribers.sort((C,U)=>C.priority-U.priority),()=>{const C=f().internal;C!=null&&C.subscribers&&(C.priority=C.priority-(w>0?1:0),C.subscribers=C.subscribers.filter(U=>U.ref!==g))}}}}}),i=t.getState();let a=i.size,o=i.viewport.dpr,l=i.camera;return t.subscribe(()=>{const{camera:u,size:f,viewport:p,gl:d,set:m}=t.getState();if(f!==a||p.dpr!==o){var v;a=f,o=p.dpr,Ov(u,f),d.setPixelRatio(p.dpr);const S=(v=f.updateStyle)!=null?v:typeof HTMLCanvasElement<"u"&&d.domElement instanceof HTMLCanvasElement;d.setSize(f.width,f.height,S)}u!==l&&(l=u,m(S=>({viewport:{...S.viewport,...S.viewport.getCurrentViewport(u)}})))}),t.subscribe(u=>n(u)),t};let Ml,FE=new Set,OE=new Set,zE=new Set;function Hc(n,e){if(n.size)for(const{callback:t}of n.values())t(e)}function Aa(n,e){switch(n){case"before":return Hc(FE,e);case"after":return Hc(OE,e);case"tail":return Hc(zE,e)}}let Gc,Vc;function Wc(n,e,t){let i=e.clock.getDelta();for(e.frameloop==="never"&&typeof n=="number"&&(i=n-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=n),Gc=e.internal.subscribers,Ml=0;Ml<Gc.length;Ml++)Vc=Gc[Ml],Vc.ref.current(Vc.store.getState(),i,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function BE(n){let e=!1,t,i,a;function o(f){i=requestAnimationFrame(o),e=!0,t=0,Aa("before",f);for(const d of n.values()){var p;a=d.store.getState(),a.internal.active&&(a.frameloop==="always"||a.internal.frames>0)&&!((p=a.gl.xr)!=null&&p.isPresenting)&&(t+=Wc(f,a))}if(Aa("after",f),t===0)return Aa("tail",f),e=!1,cancelAnimationFrame(i)}function l(f,p=1){var d;if(!f)return n.forEach(m=>l(m.store.getState()),p);(d=f.gl.xr)!=null&&d.isPresenting||!f.internal.active||f.frameloop==="never"||(f.internal.frames=Math.min(60,f.internal.frames+p),e||(e=!0,requestAnimationFrame(o)))}function u(f,p=!0,d,m){if(p&&Aa("before",f),d)Wc(f,d,m);else for(const v of n.values())Wc(f,v.store.getState());p&&Aa("after",f)}return{loop:o,invalidate:l,advance:u}}function kE(n){const e=ee.useRef(null);return Zl(()=>void(e.current=n.current.__r3f),[n]),e}function Cf(){const n=ee.useContext(Pf);if(!n)throw new Error("R3F: Hooks can only be used within the Canvas component!");return n}function Mn(n=t=>t,e){return Cf()(n,e)}function Qa(n,e=0){const t=Cf(),i=t.getState().internal.subscribe,a=AE(n);return Zl(()=>i(a,e,t),[e,i,t]),null}function kv(n,e){return function(t,...i){const a=new t;return n&&n(a),Promise.all(i.map(o=>new Promise((l,u)=>a.load(o,f=>{f.scene&&Object.assign(f,CE(f.scene)),l(f)},e,f=>u(new Error(`Could not load ${o}: ${f.message}`))))))}}function Js(n,e,t,i){const a=Array.isArray(e)?e:[e],o=ME(kv(t,i),[n,...a],{equal:zt.equ});return Array.isArray(e)?o:o[0]}Js.preload=function(n,e,t){const i=Array.isArray(e)?e:[e];return EE(kv(t),[n,...i])};Js.clear=function(n,e){const t=Array.isArray(e)?e:[e];return TE([n,...t])};const Ys=new Map,{invalidate:Wp,advance:Xp}=BE(Ys),{reconciler:Ya,applyProps:Vr}=wE(Ys,DE),Cs={objects:"shallow",strict:!1},HE=(n,e)=>{const t=typeof n=="function"?n(e):n;return Bv(t)?t:new Ev({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...n})};function GE(n,e){if(e)return e;if(typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement&&n.parentElement){const{width:t,height:i,top:a,left:o}=n.parentElement.getBoundingClientRect();return{width:t,height:i,top:a,left:o}}else if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas)return{width:n.width,height:n.height,top:0,left:0};return{width:0,height:0,top:0,left:0}}function VE(n){const e=Ys.get(n),t=e==null?void 0:e.fiber,i=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const a=typeof reportError=="function"?reportError:console.error,o=i||NE(Wp,Xp),l=t||Ya.createContainer(o,Fs.ConcurrentRoot,null,!1,null,"",a,null);e||Ys.set(n,{fiber:l,store:o});let u,f=!1,p;return{configure(d={}){let{gl:m,size:v,scene:S,events:M,onCreated:T,shadows:y=!1,linear:g=!1,flat:w=!1,legacy:E=!1,orthographic:P=!1,frameloop:C="always",dpr:U=[1,2],performance:F,raycaster:Z,camera:A,onPointerMissed:D}=d,V=o.getState(),ae=V.gl;V.gl||V.set({gl:ae=HE(m,n)});let j=V.raycaster;j||V.set({raycaster:j=new Tv});const{params:$,...ie}=Z||{};if(zt.equ(ie,j,Cs)||Vr(j,{...ie}),zt.equ($,j.params,Cs)||Vr(j,{params:{...j.params,...$}}),!V.camera||V.camera===p&&!zt.equ(p,A,Cs)){p=A;const Y=A instanceof Vl,he=Y?A:P?new Mf(0,0,0,0,.1,1e3):new _n(75,0,.1,1e3);Y||(he.position.z=5,A&&Vr(he,A),!V.camera&&!(A!=null&&A.rotation)&&he.lookAt(0,0,0)),V.set({camera:he})}if(!V.scene){let Y;S instanceof ja?Y=S:(Y=new ja,S&&Vr(Y,S)),V.set({scene:Us(Y)})}if(!V.xr){var fe;const Y=(pe,Re)=>{const Ie=o.getState();Ie.frameloop!=="never"&&Xp(pe,!0,Ie,Re)},he=()=>{const pe=o.getState();pe.gl.xr.enabled=pe.gl.xr.isPresenting,pe.gl.xr.setAnimationLoop(pe.gl.xr.isPresenting?Y:null),pe.gl.xr.isPresenting||Wp(pe)},de={connect(){const pe=o.getState().gl;pe.xr.addEventListener("sessionstart",he),pe.xr.addEventListener("sessionend",he)},disconnect(){const pe=o.getState().gl;pe.xr.removeEventListener("sessionstart",he),pe.xr.removeEventListener("sessionend",he)}};typeof((fe=ae.xr)==null?void 0:fe.addEventListener)=="function"&&de.connect(),V.set({xr:de})}if(ae.shadowMap){const Y=ae.shadowMap.enabled,he=ae.shadowMap.type;if(ae.shadowMap.enabled=!!y,zt.boo(y))ae.shadowMap.type=Dl;else if(zt.str(y)){var se;const de={basic:s0,percentage:pf,soft:Dl,variance:Ni};ae.shadowMap.type=(se=de[y])!=null?se:Dl}else zt.obj(y)&&Object.assign(ae.shadowMap,y);(Y!==ae.shadowMap.enabled||he!==ae.shadowMap.type)&&(ae.shadowMap.needsUpdate=!0)}const I=Lv();I&&("enabled"in I?I.enabled=!E:"legacyMode"in I&&(I.legacyMode=E)),Vr(ae,{outputEncoding:g?3e3:3001,toneMapping:w?Oi:Ym}),V.legacy!==E&&V.set(()=>({legacy:E})),V.linear!==g&&V.set(()=>({linear:g})),V.flat!==w&&V.set(()=>({flat:w})),m&&!zt.fun(m)&&!Bv(m)&&!zt.equ(m,ae,Cs)&&Vr(ae,m),M&&!V.events.handlers&&V.set({events:M(o)});const z=GE(n,v);return zt.equ(z,V.size,Cs)||V.setSize(z.width,z.height,z.updateStyle,z.top,z.left),U&&V.viewport.dpr!==Nv(U)&&V.setDpr(U),V.frameloop!==C&&V.setFrameloop(C),V.onPointerMissed||V.set({onPointerMissed:D}),F&&!zt.equ(F,V.performance,Cs)&&V.set(Y=>({performance:{...Y.performance,...F}})),u=T,f=!0,this},render(d){return f||this.configure(),Ya.updateContainer(ee.createElement(WE,{store:o,children:d,onCreated:u,rootElement:n}),l,null,()=>{}),o},unmount(){XE(n)}}}function WE({store:n,children:e,onCreated:t,rootElement:i}){return Zl(()=>{const a=n.getState();a.set(o=>({internal:{...o.internal,active:!0}})),t&&t(a),n.getState().events.connected||a.events.connect==null||a.events.connect(i)},[]),ee.createElement(Pf.Provider,{value:n},e)}function XE(n,e){const t=Ys.get(n),i=t==null?void 0:t.fiber;if(i){const a=t==null?void 0:t.store.getState();a&&(a.internal.active=!1),Ya.updateContainer(null,i,null,()=>{a&&setTimeout(()=>{try{var o,l,u,f;a.events.disconnect==null||a.events.disconnect(),(o=a.gl)==null||(l=o.renderLists)==null||l.dispose==null||l.dispose(),(u=a.gl)==null||u.forceContextLoss==null||u.forceContextLoss(),(f=a.gl)!=null&&f.xr&&a.xr.disconnect(),bE(a),Ys.delete(n),e&&e(n)}catch{}},500)})}}function jE(n,e,t){return ee.createElement(YE,{key:e.uuid,children:n,container:e,state:t})}function YE({state:n={},children:e,container:t}){const{events:i,size:a,...o}=n,l=Cf(),[u]=ee.useState(()=>new Tv),[f]=ee.useState(()=>new ve),p=ee.useCallback((m,v)=>{const S={...m};Object.keys(m).forEach(T=>{(IE.includes(T)||m[T]!==v[T]&&v[T])&&delete S[T]});let M;if(v&&a){const T=v.camera;M=m.viewport.getCurrentViewport(T,new O,a),T!==m.camera&&Ov(T,a)}return{...S,scene:t,raycaster:u,pointer:f,mouse:f,previousRoot:l,events:{...m.events,...v==null?void 0:v.events,...i},size:{...m.size,...a},viewport:{...m.viewport,...M},...o}},[n]),[d]=ee.useState(()=>{const m=l.getState();return Av((S,M)=>({...m,scene:t,raycaster:u,pointer:f,mouse:f,previousRoot:l,events:{...m.events,...i},size:{...m.size,...a},...o,set:S,get:M,setEvents:T=>S(y=>({...y,events:{...y.events,...T}}))}))});return ee.useEffect(()=>{const m=l.subscribe(v=>d.setState(S=>p(v,S)));return()=>{m(),d.destroy()}},[]),ee.useEffect(()=>{d.setState(m=>p(l.getState(),m))},[p]),ee.createElement(ee.Fragment,null,Ya.createPortal(ee.createElement(Pf.Provider,{value:d},e),d,null))}Ya.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:ee.version});function cf(){return cf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},cf.apply(this,arguments)}const Xc={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function qE(n){const{handlePointer:e}=UE(n);return{priority:1,enabled:!0,compute(t,i,a){i.pointer.set(t.offsetX/i.size.width*2-1,-(t.offsetY/i.size.height)*2+1),i.raycaster.setFromCamera(i.pointer,i.camera)},connected:void 0,handlers:Object.keys(Xc).reduce((t,i)=>({...t,[i]:e(i)}),{}),update:()=>{var t;const{events:i,internal:a}=n.getState();(t=a.lastEvent)!=null&&t.current&&i.handlers&&i.handlers.onPointerMove(a.lastEvent.current)},connect:t=>{var i;const{set:a,events:o}=n.getState();o.disconnect==null||o.disconnect(),a(l=>({events:{...l.events,connected:t}})),Object.entries((i=o.handlers)!=null?i:[]).forEach(([l,u])=>{const[f,p]=Xc[l];t.addEventListener(f,u,{passive:p})})},disconnect:()=>{const{set:t,events:i}=n.getState();if(i.connected){var a;Object.entries((a=i.handlers)!=null?a:[]).forEach(([o,l])=>{if(i&&i.connected instanceof HTMLElement){const[u]=Xc[o];i.connected.removeEventListener(u,l)}}),t(o=>({events:{...o.events,connected:void 0}}))}}}}function Ha(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ff(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function ZE(n,e){if(n){if(typeof n=="string")return ff(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ff(n,e)}}function KE(n){if(Array.isArray(n))return ff(n)}function QE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function JE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $E(n){return KE(n)||QE(n)||ZE(n)||JE()}new ve;new ve;function eT(n,e,t){return Math.max(e,Math.min(t,n))}function tT(n,e){return eT(n-Math.floor(n/e)*e,0,e)}function nT(n,e){var t=tT(e-n,Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t}function Hv(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var fi=function n(e,t,i){var a=this;Hv(this,n),Ha(this,"dot2",function(o,l){return a.x*o+a.y*l}),Ha(this,"dot3",function(o,l,u){return a.x*o+a.y*l+a.z*u}),this.x=e,this.y=t,this.z=i},iT=[new fi(1,1,0),new fi(-1,1,0),new fi(1,-1,0),new fi(-1,-1,0),new fi(1,0,1),new fi(-1,0,1),new fi(1,0,-1),new fi(-1,0,-1),new fi(0,1,1),new fi(0,-1,1),new fi(0,1,-1),new fi(0,-1,-1)],jp=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],Yp=new Array(512),qp=new Array(512),rT=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var i;t&1?i=jp[t]^e&255:i=jp[t]^e>>8&255,Yp[t]=Yp[t+256]=i,qp[t]=qp[t+256]=iT[i%12]}};rT(0);function sT(n){if(typeof n=="number")n=Math.abs(n);else if(typeof n=="string"){var e=n;n=0;for(var t=0;t<e.length;t++)n=(n+(t+1)*(e.charCodeAt(t)%96))%2147483647}return n===0&&(n=311),n}function Zp(n){var e=sT(n);return function(){var t=e*48271%2147483647;return e=t,t/2147483647}}var aT=function n(e){var t=this;Hv(this,n),Ha(this,"seed",0),Ha(this,"init",function(i){t.seed=i,t.value=Zp(i)}),Ha(this,"value",Zp(this.seed)),this.init(e)};new aT(Math.random());var oT=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return i/Math.atan(1/t)*Math.atan(Math.sin(2*Math.PI*e*a)/t)},Gv=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)};function ln(n,e,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:Gv,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,f="velocity_"+e;if(n.__damp===void 0&&(n.__damp={}),n.__damp[f]===void 0&&(n.__damp[f]=0),Math.abs(n[e]-t)<=u)return n[e]=t,!1;i=Math.max(1e-4,i);var p=2/i,d=l(p*a),m=n[e]-t,v=t,S=o*i;m=Math.min(Math.max(m,-S),S),t=n[e]-m;var M=(n.__damp[f]+p*m)*a;n.__damp[f]=(n.__damp[f]-p*M)*d;var T=t+(m+M)*d;return v-n[e]>0==T>v&&(T=v,n.__damp[f]=(T-v)/a),n[e]=T,!0}function Gs(n,e,t,i,a,o,l,u){return ln(n,e,n[e]+nT(n[e],t),i,a,o,l,u)}var Ra=new ve,Kp,Qp;function lT(n,e,t,i,a,o,l){return typeof e=="number"?Ra.setScalar(e):Array.isArray(e)?Ra.set(e[0],e[1]):Ra.copy(e),Kp=ln(n,"x",Ra.x,t,i,a,o,l),Qp=ln(n,"y",Ra.y,t,i,a,o,l),Kp||Qp}var bs=new O,Jp,$p,em;function hf(n,e,t,i,a,o,l){return typeof e=="number"?bs.setScalar(e):Array.isArray(e)?bs.set(e[0],e[1],e[2]):bs.copy(e),Jp=ln(n,"x",bs.x,t,i,a,o,l),$p=ln(n,"y",bs.y,t,i,a,o,l),em=ln(n,"z",bs.z,t,i,a,o,l),Jp||$p||em}var kr=new Ht,tm,nm,im,rm;function uT(n,e,t,i,a,o,l){return typeof e=="number"?kr.setScalar(e):Array.isArray(e)?kr.set(e[0],e[1],e[2],e[3]):kr.copy(e),tm=ln(n,"x",kr.x,t,i,a,o,l),nm=ln(n,"y",kr.y,t,i,a,o,l),im=ln(n,"z",kr.z,t,i,a,o,l),rm=ln(n,"w",kr.w,t,i,a,o,l),tm||nm||im||rm}var Pa=new Za,sm,am,om;function cT(n,e,t,i,a,o,l){return Array.isArray(e)?Pa.set(e[0],e[1],e[2],e[3]):Pa.copy(e),sm=Gs(n,"x",Pa.x,t,i,a,o,l),am=Gs(n,"y",Pa.y,t,i,a,o,l),om=Gs(n,"z",Pa.z,t,i,a,o,l),sm||am||om}var Ds=new qe,lm,um,cm;function fT(n,e,t,i,a,o,l){return e instanceof qe?Ds.copy(e):Array.isArray(e)?Ds.setRGB(e[0],e[1],e[2]):Ds.set(e),lm=ln(n,"r",Ds.r,t,i,a,o,l),um=ln(n,"g",Ds.g,t,i,a,o,l),cm=ln(n,"b",Ds.b,t,i,a,o,l),lm||um||cm}var _i=new Bi,Ji=new Ht,fm=new Ht,Ca=new Ht,hm,dm,pm,mm;function Vv(n,e,t,i,a,o,l){var u=n;Array.isArray(e)?_i.set(e[0],e[1],e[2],e[3]):_i.copy(e);var f=n.dot(_i)>0?1:-1;return _i.x*=f,_i.y*=f,_i.z*=f,_i.w*=f,hm=ln(n,"x",_i.x,t,i,a,o,l),dm=ln(n,"y",_i.y,t,i,a,o,l),pm=ln(n,"z",_i.z,t,i,a,o,l),mm=ln(n,"w",_i.w,t,i,a,o,l),Ji.set(n.x,n.y,n.z,n.w).normalize(),fm.set(u.__damp.velocity_x,u.__damp.velocity_y,u.__damp.velocity_z,u.__damp.velocity_w),Ca.copy(Ji).multiplyScalar(fm.dot(Ji)/Ji.dot(Ji)),u.__damp.velocity_x-=Ca.x,u.__damp.velocity_y-=Ca.y,u.__damp.velocity_z-=Ca.z,u.__damp.velocity_w-=Ca.w,n.set(Ji.x,Ji.y,Ji.z,Ji.w),hm||dm||pm||mm}var ba=new dE,vm,gm,xm;function hT(n,e,t,i,a,o,l){return Array.isArray(e)?ba.set(e[0],e[1],e[2]):ba.copy(e),vm=ln(n,"radius",ba.radius,t,i,a,o,l),gm=Gs(n,"phi",ba.phi,t,i,a,o,l),xm=Gs(n,"theta",ba.theta,t,i,a,o,l),vm||gm||xm}var El=new Ze,Sm=new O,ym=new Bi,_m=new O,Mm,Em,Tm;function dT(n,e,t,i,a,o,l){var u=n;return u.__damp===void 0&&(u.__damp={position:new O,rotation:new Bi,scale:new O},n.decompose(u.__damp.position,u.__damp.rotation,u.__damp.scale)),Array.isArray(e)?El.set.apply(El,$E(e)):El.copy(e),El.decompose(Sm,ym,_m),Mm=hf(u.__damp.position,Sm,t,i,a,o,l),Em=Vv(u.__damp.rotation,ym,t,i,a,o,l),Tm=hf(u.__damp.scale,_m,t,i,a,o,l),n.compose(u.__damp.position,u.__damp.rotation,u.__damp.scale),Mm||Em||Tm}var Wv=Object.freeze({__proto__:null,rsqw:oT,exp:Gv,damp:ln,dampAngle:Gs,damp2:lT,damp3:hf,damp4:uT,dampE:cT,dampC:fT,dampQ:Vv,dampS:hT,dampM:dT});let Da;function pT(){var n;if(Da!==void 0)return Da;try{let e;const t=document.createElement("canvas");return Da=!!(window.WebGL2RenderingContext&&(e=t.getContext("webgl2"))),e&&((n=e.getExtension("WEBGL_lose_context"))==null||n.loseContext()),Da}catch{return Da=!1}}function mT(n,e,t,i){const a=class extends pt{constructor(l={}){const u=Object.entries(n);super({uniforms:u.reduce((f,[p,d])=>{const m=dv.clone({[p]:{value:d}});return{...f,...m}},{}),vertexShader:e,fragmentShader:t}),this.key="",u.forEach(([f])=>Object.defineProperty(this,f,{get:()=>this.uniforms[f].value,set:p=>this.uniforms[f].value=p})),Object.assign(this,l),i&&i(this)}};return a.key=Ll.generateUUID(),a}const wm=n=>n===Object(n)&&!Array.isArray(n)&&typeof n!="function";function bf(n,e){const t=Mn(a=>a.gl),i=Js(Yl,wm(n)?Object.values(n):n);if(ee.useLayoutEffect(()=>{e==null||e(i)},[e]),ee.useEffect(()=>{(Array.isArray(i)?i:[i]).forEach(t.initTexture)},[t,i]),wm(n)){const a=Object.keys(n),o={};return a.forEach(l=>Object.assign(o,{[l]:i[a.indexOf(l)]})),o}else return i}bf.preload=n=>Js.preload(Yl,n);bf.clear=n=>Js.clear(Yl,n);var vT=Object.defineProperty,gT=(n,e,t)=>e in n?vT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pt=(n,e,t)=>(gT(n,typeof e!="symbol"?e+"":e,t),t);function jc(n,e,t,i,a){let o;if(n=n.subarray||n.slice?n:n.buffer,t=t.subarray||t.slice?t:t.buffer,n=e?n.subarray?n.subarray(e,a&&e+a):n.slice(e,a&&e+a):n,t.set)t.set(n,i);else for(o=0;o<n.length;o++)t[o+i]=n[o];return t}function xT(n){return n instanceof Float32Array?n:n instanceof ti?n.getAttribute("position").array:n.map(e=>{const t=Array.isArray(e);return e instanceof O?[e.x,e.y,e.z]:e instanceof ve?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e}).flat()}class ST extends ti{constructor(){super(),Pt(this,"type","MeshLine"),Pt(this,"isMeshLine",!0),Pt(this,"positions",[]),Pt(this,"previous",[]),Pt(this,"next",[]),Pt(this,"side",[]),Pt(this,"width",[]),Pt(this,"indices_array",[]),Pt(this,"uvs",[]),Pt(this,"counters",[]),Pt(this,"widthCallback",null),Pt(this,"_attributes"),Pt(this,"_points",[]),Pt(this,"points"),Pt(this,"matrixWorld",new Ze),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(e){this.setPoints(e,this.widthCallback)}}})}setMatrixWorld(e){this.matrixWorld=e}setPoints(e,t){if(e=xT(e),this._points=e,this.widthCallback=t??null,this.positions=[],this.counters=[],e.length&&e[0]instanceof O)for(let i=0;i<e.length;i++){const a=e[i],o=i/(e.length-1);this.positions.push(a.x,a.y,a.z),this.positions.push(a.x,a.y,a.z),this.counters.push(o),this.counters.push(o)}else for(let i=0;i<e.length;i+=3){const a=i/(e.length-1);this.positions.push(e[i],e[i+1],e[i+2]),this.positions.push(e[i],e[i+1],e[i+2]),this.counters.push(a),this.counters.push(a)}this.process()}compareV3(e,t){const i=e*6,a=t*6;return this.positions[i]===this.positions[a]&&this.positions[i+1]===this.positions[a+1]&&this.positions[i+2]===this.positions[a+2]}copyV3(e){const t=e*6;return[this.positions[t],this.positions[t+1],this.positions[t+2]]}process(){const e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];let t,i;this.compareV3(0,e-1)?i=this.copyV3(e-2):i=this.copyV3(0),this.previous.push(i[0],i[1],i[2]),this.previous.push(i[0],i[1],i[2]);for(let a=0;a<e;a++){if(this.side.push(1),this.side.push(-1),this.widthCallback?t=this.widthCallback(a/(e-1)):t=1,this.width.push(t),this.width.push(t),this.uvs.push(a/(e-1),0),this.uvs.push(a/(e-1),1),a<e-1){i=this.copyV3(a),this.previous.push(i[0],i[1],i[2]),this.previous.push(i[0],i[1],i[2]);const o=a*2;this.indices_array.push(o,o+1,o+2),this.indices_array.push(o+2,o+1,o+3)}a>0&&(i=this.copyV3(a),this.next.push(i[0],i[1],i[2]),this.next.push(i[0],i[1],i[2]))}this.compareV3(e-1,0)?i=this.copyV3(1):i=this.copyV3(e-1),this.next.push(i[0],i[1],i[2]),this.next.push(i[0],i[1],i[2]),!this._attributes||this._attributes.position.count!==this.positions.length?this._attributes={position:new kt(new Float32Array(this.positions),3),previous:new kt(new Float32Array(this.previous),3),next:new kt(new Float32Array(this.next),3),side:new kt(new Float32Array(this.side),1),width:new kt(new Float32Array(this.width),1),uv:new kt(new Float32Array(this.uvs),2),index:new kt(new Uint16Array(this.indices_array),1),counters:new kt(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:e,y:t,z:i}){const a=this._attributes.position.array,o=this._attributes.previous.array,l=this._attributes.next.array,u=a.length;jc(a,0,o,0,u),jc(a,6,a,0,u-6),a[u-6]=e,a[u-5]=t,a[u-4]=i,a[u-3]=e,a[u-2]=t,a[u-1]=i,jc(a,6,l,0,u-6),l[u-6]=e,l[u-5]=t,l[u-4]=i,l[u-3]=e,l[u-2]=t,l[u-1]=i,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}const yT=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
  	vCounters = counters;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0);
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <fog_vertex>
  }
`,_T=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 c = vColor;
    if (useMap == 1.) c *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) c.a *= texture2D(alphaMap, vUV * repeat).a;
    if (c.a < alphaTest) discard;
    if (useDash == 1.) {
      c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    }
    gl_FragColor = c;
    gl_FragColor.a *= step(vCounters, visibility);
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }
`;class MT extends pt{constructor(e){super({uniforms:{...ye.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new qe(16777215)},opacity:{value:1},resolution:{value:new ve(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new ve(1,1)}},vertexShader:yT,fragmentShader:_T}),Pt(this,"lineWidth"),Pt(this,"map"),Pt(this,"useMap"),Pt(this,"alphaMap"),Pt(this,"useAlphaMap"),Pt(this,"color"),Pt(this,"resolution"),Pt(this,"sizeAttenuation"),Pt(this,"dashArray"),Pt(this,"dashOffset"),Pt(this,"dashRatio"),Pt(this,"useDash"),Pt(this,"visibility"),Pt(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=t!==0?1:0}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(e)}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray=e.dashArray,this.dashOffset=e.dashOffset,this.dashRatio=e.dashRatio,this.useDash=e.useDash,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this}}function ET(n,e){const t=new Ze,i=new Gl,a=new Ks,o=new O,l=this.geometry;if(a.copy(l.boundingSphere),a.applyMatrix4(this.matrixWorld),!n.ray.intersectSphere(a,o))return;t.copy(this.matrixWorld).invert(),i.copy(n.ray).applyMatrix4(t);const u=new O,f=new O,p=new O,d=this instanceof iE?2:1,m=l.index,v=l.attributes;if(m!==null){const S=m.array,M=v.position.array,T=v.width.array;for(let y=0,g=S.length-1;y<g;y+=d){const w=S[y],E=S[y+1];u.fromArray(M,w*3),f.fromArray(M,E*3);const P=T[Math.floor(y/3)]!=null?T[Math.floor(y/3)]:1,C=n.params.Line.threshold+this.material.lineWidth*P/2,U=C*C;if(i.distanceSqToSegment(u,f,o,p)>U)continue;o.applyMatrix4(this.matrixWorld);const Z=n.ray.origin.distanceTo(o);Z<n.near||Z>n.far||(e.push({distance:Z,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:void 0,object:this}),y=g)}}}const TT=Object.freeze(Object.defineProperty({__proto__:null,MeshLineGeometry:ST,MeshLineMaterial:MT,raycast:ET},Symbol.toStringTag,{value:"Module"}));function Am(n,e,t=1){const i=Mn(l=>l.viewport),a=e*(i.aspect>n/e?i.width/n:i.height/e);return[n*(i.aspect>n/e?i.width/n:i.height/e)*t,a*t,1]}function wT(n,e){const t=n+"Geometry";return ee.forwardRef(({args:i,children:a,...o},l)=>{const u=ee.useRef(null);return ee.useImperativeHandle(l,()=>u.current),ee.useLayoutEffect(()=>void(e==null?void 0:e(u.current))),ee.createElement("mesh",cf({ref:u},o),ee.createElement(t,{attach:"geometry",args:i}),a)})}const AT=wT("plane");/**
 * postprocessing v6.32.2 build Sat Jul 01 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var Jr="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",RT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 CoCNearFar=texture2D(cocBuffer,vUv).rg;float CoC=CoCNearFar.r*scale;
#else
float CoC=texture2D(cocBuffer,vUv).g*scale;
#endif
if(CoC==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(CoC,CoCNearFar.g*scale);
#else
vec2 step=texelSize*CoC;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,Tl=class extends pt{constructor(n=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:n?"2":"1"},uniforms:{inputBuffer:new H(null),cocBuffer:new H(null),texelSize:new H(new ve),kernel64:new H(null),kernel16:new H(null),scale:new H(1)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:RT,vertexShader:Jr}),e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set cocBuffer(n){this.uniforms.cocBuffer.value=n}setCoCBuffer(n){this.uniforms.cocBuffer.value=n}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(n){return this.scale}setScale(n){this.scale=n}generateKernel(){const n=2.39996323,e=new Float64Array(128),t=new Float64Array(32);let i=0,a=0;for(let o=0,l=Math.sqrt(80);o<80;++o){const u=o*n,f=Math.sqrt(o)/l,p=f*Math.cos(u),d=f*Math.sin(u);o%5===0?(t[a++]=p,t[a++]=d):(e[i++]=p,e[i++]=d)}this.uniforms.kernel64.value=e,this.uniforms.kernel16.value=t}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Xv="",wt="srgb",qs="srgb-linear",jv=Number(Kr.replace(/\D+/g,"")),Df=jv>=152,Yv=new Map([[Hl,qs],[Ti,wt]]),PT=new Map([[qs,Hl],[wt,Ti]]);function rr(n){return n===null?null:Df?n.outputColorSpace:Yv.get(n.outputEncoding)}function un(n,e){n!==null&&(Df?n.colorSpace=e:n.encoding=PT.get(e))}function Yc(n,e){n===null||e===null||(Df?e.colorSpace=n.colorSpace:e.encoding=n.encoding)}function Ja(n){return jv<154?n.replace("colorspace_fragment","encodings_fragment"):n}function Os(n,e,t){return n*(e-t)-e}function Yr(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var CT=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#ifdef LOG_DEPTH
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,bT=class extends pt{constructor(n){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new H(null),focusDistance:new H(0),focusRange:new H(0),cameraNear:new H(.3),cameraFar:new H(1e3)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:CT,vertexShader:Jr}),this.uniforms.focalLength=this.uniforms.focusRange,this.copyCameraSettings(n)}get near(){return this.uniforms.cameraNear.value}get far(){return this.uniforms.cameraFar.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=En){this.depthBuffer=n,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(n){this.uniforms.focusDistance.value=n}get worldFocusDistance(){return-Os(this.focusDistance,this.near,this.far)}set worldFocusDistance(n){this.focusDistance=Yr(-n,this.near,this.far)}getFocusDistance(n){this.uniforms.focusDistance.value=n}setFocusDistance(n){this.uniforms.focusDistance.value=n}get focalLength(){return this.focusRange}set focalLength(n){this.focusRange=n}get focusRange(){return this.uniforms.focusRange.value}set focusRange(n){this.uniforms.focusRange.value=n}get worldFocusRange(){return-Os(this.focusRange,this.near,this.far)}set worldFocusRange(n){this.focusRange=Yr(-n,this.near,this.far)}getFocalLength(n){return this.focusRange}setFocalLength(n){this.focusRange=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},$e={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},zs={RED:0,GREEN:1,BLUE:2,ALPHA:3},Fa={FULL:0,SINGLE:1},Ga={DEFAULT:0,KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},wi={NONE:0,DEPTH:1,CONVOLUTION:2},Et={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Xr={DISABLED:0,SPORADIC:1,CONSTANT_MILD:2,CONSTANT_WILD:3},$s={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},DT={SCALE_UP:"lut.scaleup"},Vs={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2},wl={DEFAULT:0,ESKIL:1},LT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,UT="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",IT=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],NT=class extends pt{constructor(n=new Ht){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new H(null),texelSize:new H(new Ht),scale:new H(1),kernel:new H(0)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:LT,vertexShader:UT}),this.fragmentShader=Ja(this.fragmentShader),this.setTexelSize(n.x,n.y),this.kernelSize=$s.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return IT[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},FT=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,qv=class extends pt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new H(null),opacity:new H(1)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:FT,vertexShader:Jr}),this.fragmentShader=Ja(this.fragmentShader)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},OT=`#include <packing>
#include <clipping_planes_pars_fragment>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float cameraNear;uniform float cameraFar;varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <clipping_planes_fragment>
vec2 projTexCoord=(vProjTexCoord.xy/vProjTexCoord.w)*0.5+0.5;projTexCoord=clamp(projTexCoord,0.002,0.998);
#if DEPTH_PACKING == 3201
float fragCoordZ=unpackRGBAToDepth(texture2D(depthBuffer,projTexCoord));
#else
float fragCoordZ=texture2D(depthBuffer,projTexCoord).r;
#endif
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#else
float viewZ=orthographicDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#endif
float depthTest=(-vViewZ>-viewZ)?1.0:0.0;gl_FragColor.rg=vec2(0.0,depthTest);}`,zT=`#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
vViewZ=mvPosition.z;vProjTexCoord=gl_Position;
#include <clipping_planes_vertex>
}`,BT=class extends pt{constructor(n=null,e){super({name:"DepthComparisonMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new H(null),cameraNear:new H(.3),cameraFar:new H(1e3)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:OT,vertexShader:zT}),this.depthBuffer=n,this.depthPacking=ir,this.copyCameraSettings(e)}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=ir){this.depthBuffer=n,this.depthPacking=e}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},kT=`#include <packing>
varying vec2 vUv;
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
#if INPUT_DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if INPUT_DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
void main(){
#if INPUT_DEPTH_PACKING == OUTPUT_DEPTH_PACKING
gl_FragColor=texture2D(depthBuffer,vUv);
#else
float depth=readDepth(vUv);
#if OUTPUT_DEPTH_PACKING == 3201
gl_FragColor=(depth==1.0)?vec4(1.0):packDepthToRGBA(depth);
#else
gl_FragColor=vec4(vec3(depth),1.0);
#endif
#endif
}`,HT=`varying vec2 vUv;
#if DEPTH_COPY_MODE == 1
uniform vec2 texelPosition;
#endif
void main(){
#if DEPTH_COPY_MODE == 1
vUv=texelPosition;
#else
vUv=position.xy*0.5+0.5;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,GT=class extends pt{constructor(){super({name:"DepthCopyMaterial",defines:{INPUT_DEPTH_PACKING:"0",OUTPUT_DEPTH_PACKING:"0",DEPTH_COPY_MODE:"0"},uniforms:{depthBuffer:new H(null),texelPosition:new H(new ve)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:kT,vertexShader:HT}),this.depthCopyMode=Fa.FULL}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set inputDepthPacking(n){this.defines.INPUT_DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get outputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}set outputDepthPacking(n){this.defines.OUTPUT_DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=En){this.depthBuffer=n,this.inputDepthPacking=e}getInputDepthPacking(){return Number(this.defines.INPUT_DEPTH_PACKING)}setInputDepthPacking(n){this.defines.INPUT_DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}getOutputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}setOutputDepthPacking(n){this.defines.OUTPUT_DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get texelPosition(){return this.uniforms.texelPosition.value}getTexelPosition(){return this.uniforms.texelPosition.value}setTexelPosition(n){this.uniforms.texelPosition.value=n}get mode(){return this.depthCopyMode}set mode(n){this.depthCopyMode=n,this.defines.DEPTH_COPY_MODE=n.toFixed(0),this.needsUpdate=!0}getMode(){return this.mode}setMode(n){this.mode=n}},VT=`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in highp float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;highp float distances[]=float[4](abs(c-samples[0]),abs(c-samples[1]),abs(c-samples[2]),abs(c-samples[3]));float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){highp float d[]=float[4](readDepth(vUv0),readDepth(vUv1),readDepth(vUv2),readDepth(vUv3));int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
highp vec3 n[]=vec3[4](texture2D(normalBuffer,vUv0).rgb,texture2D(normalBuffer,vUv1).rgb,texture2D(normalBuffer,vUv2).rgb,texture2D(normalBuffer,vUv3).rgb);
#else
highp vec3 n[]=vec3[4](vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
#endif
gl_FragColor=vec4(n[index],d[index]);}`,WT="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}",XT=class extends pt{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new H(null),normalBuffer:new H(null),texelSize:new H(new ve)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:VT,vertexShader:WT})}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=En){this.depthBuffer=n,this.depthPacking=e}set normalBuffer(n){this.uniforms.normalBuffer.value=n,n!==null?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(n){this.normalBuffer=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},jT=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,Zv=class extends pt{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:Ga.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new H(null),depthBuffer0:new H(null),depthBuffer1:new H(null),cameraNearFar:new H(new ve(1,1))},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jT,vertexShader:Jr}),this.depthMode=Qc}set depthBuffer0(n){this.uniforms.depthBuffer0.value=n}set depthPacking0(n){this.defines.DEPTH_PACKING_0=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(n,e=En){this.depthBuffer0=n,this.depthPacking0=e}set depthBuffer1(n){this.uniforms.depthBuffer1.value=n}set depthPacking1(n){this.defines.DEPTH_PACKING_1=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(n,e=En){this.depthBuffer1=n,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(n){this.defines.DEPTH_TEST_STRATEGY=n.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(n){this.maxDepthStrategy=n?Ga.KEEP_MAX_DEPTH:Ga.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(n){this.maxDepthStrategy=n}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(n){this.defines.DEPTH_EPSILON=n.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(n){this.epsilon=n}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(n){let e;switch(n){case Gm:e="false";break;case Vm:e="true";break;case Ol:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case mf:e="abs(d1 - d0) > DEPTH_EPSILON";break;case Qc:e="d0 > d1";break;case Fl:e="d0 >= d1";break;case Wm:e="d0 <= d1";break;case Xm:default:e="d0 < d1";break}this.defines.DEPTH_MODE=n.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(n){this.depthMode=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),n instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},YT=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,qT="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ZT=class extends pt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new H(null),texelSize:new H(new ve)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YT,vertexShader:qT}),this.fragmentShader=Ja(this.fragmentShader)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},KT=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,QT="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",JT=class extends pt{constructor(n,e,t,i,a=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Kr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new H(null),depthBuffer:new H(null),resolution:new H(new ve),texelSize:new H(new ve),cameraNear:new H(.3),cameraFar:new H(1e3),aspect:new H(1),time:new H(0)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:a}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=En){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=KT.replace(Et.FRAGMENT_HEAD,n.get(Et.FRAGMENT_HEAD)||"").replace(Et.FRAGMENT_MAIN_UV,n.get(Et.FRAGMENT_MAIN_UV)||"").replace(Et.FRAGMENT_MAIN_IMAGE,n.get(Et.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=QT.replace(Et.VERTEX_HEAD,n.get(Et.VERTEX_HEAD)||"").replace(Et.VERTEX_MAIN_SUPPORT,n.get(Et.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=Ja(this.fragmentShader),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return Et}},$T=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,e1=class extends pt{constructor(n){super({name:"GodRaysMaterial",defines:{SAMPLES_INT:"60",SAMPLES_FLOAT:"60.0"},uniforms:{inputBuffer:new H(null),lightPosition:new H(n),density:new H(1),decay:new H(1),weight:new H(1),exposure:new H(1),clampMax:new H(1)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:$T,vertexShader:Jr})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get lightPosition(){return this.uniforms.lightPosition.value}getLightPosition(){return this.uniforms.lightPosition.value}setLightPosition(n){this.uniforms.lightPosition.value=n}get density(){return this.uniforms.density.value}set density(n){this.uniforms.density.value=n}getDensity(){return this.uniforms.density.value}setDensity(n){this.uniforms.density.value=n}get decay(){return this.uniforms.decay.value}set decay(n){this.uniforms.decay.value=n}getDecay(){return this.uniforms.decay.value}setDecay(n){this.uniforms.decay.value=n}get weight(){return this.uniforms.weight.value}set weight(n){this.uniforms.weight.value=n}getWeight(){return this.uniforms.weight.value}setWeight(n){this.uniforms.weight.value=n}get exposure(){return this.uniforms.exposure.value}set exposure(n){this.uniforms.exposure.value=n}getExposure(){return this.uniforms.exposure.value}setExposure(n){this.uniforms.exposure.value=n}get maxIntensity(){return this.uniforms.clampMax.value}set maxIntensity(n){this.uniforms.clampMax.value=n}getMaxIntensity(){return this.uniforms.clampMax.value}setMaxIntensity(n){this.uniforms.clampMax.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){const e=Math.floor(n);this.defines.SAMPLES_INT=e.toFixed(0),this.defines.SAMPLES_FLOAT=e.toFixed(1),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}},t1=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,n1=class extends pt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Kr.replace(/\D+/g,"")},uniforms:{inputBuffer:new H(null),threshold:new H(0),smoothing:new H(1),range:new H(null)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:t1,vertexShader:Jr}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},i1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,r1=class extends pt{constructor(n=null){super({name:"MaskMaterial",uniforms:{maskTexture:new H(n),inputBuffer:new H(null),strength:new H(1)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:i1,vertexShader:Jr}),this.colorChannel=zs.RED,this.maskFunction=Vs.DISCARD}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set maskTexture(n){this.uniforms.maskTexture.value=n,delete this.defines.MASK_PRECISION_HIGH,n.type!==It&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(n){this.maskTexture=n}set colorChannel(n){this.defines.COLOR_CHANNEL=n.toFixed(0),this.needsUpdate=!0}setColorChannel(n){this.colorChannel=n}set maskFunction(n){this.defines.MASK_FUNCTION=n.toFixed(0),this.needsUpdate=!0}setMaskFunction(n){this.maskFunction=n}get inverted(){return this.defines.INVERTED!==void 0}set inverted(n){this.inverted&&!n?delete this.defines.INVERTED:n&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(n){this.inverted=n}get strength(){return this.uniforms.strength.value}set strength(n){this.uniforms.strength.value=n}getStrength(){return this.strength}setStrength(n){this.strength=n}},s1="uniform lowp sampler2D inputBuffer;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 c0=texture2D(inputBuffer,vUv0).rg;vec2 c1=texture2D(inputBuffer,vUv1).rg;vec2 c2=texture2D(inputBuffer,vUv2).rg;vec2 c3=texture2D(inputBuffer,vUv3).rg;float d0=(c0.x-c1.x)*0.5;float d1=(c2.x-c3.x)*0.5;float d=length(vec2(d0,d1));float a0=min(c0.y,c1.y);float a1=min(c2.y,c3.y);float visibilityFactor=min(a0,a1);gl_FragColor.rg=(1.0-visibilityFactor>0.001)?vec2(d,0.0):vec2(0.0,d);}",a1="uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=vec2(uv.x+texelSize.x,uv.y);vUv1=vec2(uv.x-texelSize.x,uv.y);vUv2=vec2(uv.x,uv.y+texelSize.y);vUv3=vec2(uv.x,uv.y-texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}",o1=class extends pt{constructor(n=new ve){super({name:"OutlineMaterial",uniforms:{inputBuffer:new H(null),texelSize:new H(new ve)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:s1,vertexShader:a1}),this.uniforms.texelSize.value.set(n.x,n.y),this.uniforms.maskTexture=this.uniforms.inputBuffer}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},l1=`#include <common>
#include <packing>
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
uniform lowp sampler2D normalBuffer;
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
uniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform vec2 cameraNearFar;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);
#ifdef PERSPECTIVE_CAMERA
float linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);
#else
float linearSampleDepth=sampleDepth;
#endif
float proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){
#ifdef NORMAL_DEPTH
vec4 normalDepth=texture2D(normalDepthBuffer,vUv);
#else
vec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));
#endif
float ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);
#ifdef PERSPECTIVE_CAMERA
float linearDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);
#else
float linearDepth=depth;
#endif
if(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);
#ifdef LEGACY_INTENSITY
ao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);
#endif
}gl_FragColor.r=ao;}`,u1="uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}",c1=class extends pt{constructor(n){super({name:"SSAOMaterial",defines:{SAMPLES_INT:"0",INV_SAMPLES_FLOAT:"0.0",SPIRAL_TURNS:"0.0",RADIUS:"1.0",RADIUS_SQ:"1.0",DISTANCE_SCALING:"1",DEPTH_PACKING:"0"},uniforms:{depthBuffer:new H(null),normalBuffer:new H(null),normalDepthBuffer:new H(null),noiseTexture:new H(null),inverseProjectionMatrix:new H(new Ze),projectionMatrix:new H(new Ze),texelSize:new H(new ve),cameraNearFar:new H(new ve),distanceCutoff:new H(new ve),proximityCutoff:new H(new ve),noiseScale:new H(new ve),minRadiusScale:new H(.33),intensity:new H(1),fade:new H(.01),bias:new H(0)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:l1,vertexShader:u1}),this.copyCameraSettings(n),this.resolution=new ve,this.r=1}get near(){return this.uniforms.cameraNearFar.value.x}get far(){return this.uniforms.cameraNearFar.value.y}set normalDepthBuffer(n){this.uniforms.normalDepthBuffer.value=n,n!==null?this.defines.NORMAL_DEPTH="1":delete this.defines.NORMAL_DEPTH,this.needsUpdate=!0}setNormalDepthBuffer(n){this.normalDepthBuffer=n}set normalBuffer(n){this.uniforms.normalBuffer.value=n}setNormalBuffer(n){this.uniforms.normalBuffer.value=n}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=En){this.depthBuffer=n,this.depthPacking=e}set noiseTexture(n){this.uniforms.noiseTexture.value=n}setNoiseTexture(n){this.uniforms.noiseTexture.value=n}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(n){this.defines.SAMPLES_INT=n.toFixed(0),this.defines.INV_SAMPLES_FLOAT=(1/n).toFixed(9),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(n){this.samples=n}get rings(){return Number(this.defines.SPIRAL_TURNS)}set rings(n){this.defines.SPIRAL_TURNS=n.toFixed(1),this.needsUpdate=!0}getRings(){return this.rings}setRings(n){this.rings=n}get intensity(){return this.uniforms.intensity.value}set intensity(n){this.uniforms.intensity.value=n,this.defines.LEGACY_INTENSITY===void 0&&(this.defines.LEGACY_INTENSITY="1",this.needsUpdate=!0)}getIntensity(){return this.uniforms.intensity.value}setIntensity(n){this.uniforms.intensity.value=n}get fade(){return this.uniforms.fade.value}set fade(n){this.uniforms.fade.value=n}getFade(){return this.uniforms.fade.value}setFade(n){this.uniforms.fade.value=n}get bias(){return this.uniforms.bias.value}set bias(n){this.uniforms.bias.value=n}getBias(){return this.uniforms.bias.value}setBias(n){this.uniforms.bias.value=n}get minRadiusScale(){return this.uniforms.minRadiusScale.value}set minRadiusScale(n){this.uniforms.minRadiusScale.value=n}getMinRadiusScale(){return this.uniforms.minRadiusScale.value}setMinRadiusScale(n){this.uniforms.minRadiusScale.value=n}updateRadius(){const n=this.r*this.resolution.height;this.defines.RADIUS=n.toFixed(11),this.defines.RADIUS_SQ=(n*n).toFixed(11),this.needsUpdate=!0}get radius(){return this.r}set radius(n){this.r=Math.min(Math.max(n,1e-6),1),this.updateRadius()}getRadius(){return this.radius}setRadius(n){this.radius=n}get distanceScaling(){return!0}set distanceScaling(n){}isDistanceScalingEnabled(){return this.distanceScaling}setDistanceScalingEnabled(n){this.distanceScaling=n}get distanceThreshold(){return this.uniforms.distanceCutoff.value.x}set distanceThreshold(n){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.distanceFalloff,0),1))}get worldDistanceThreshold(){return-Os(this.distanceThreshold,this.near,this.far)}set worldDistanceThreshold(n){this.distanceThreshold=Yr(-n,this.near,this.far)}get distanceFalloff(){return this.uniforms.distanceCutoff.value.y-this.distanceThreshold}set distanceFalloff(n){this.uniforms.distanceCutoff.value.y=Math.min(Math.max(this.distanceThreshold+n,0),1)}get worldDistanceFalloff(){return-Os(this.distanceFalloff,this.near,this.far)}set worldDistanceFalloff(n){this.distanceFalloff=Yr(-n,this.near,this.far)}setDistanceCutoff(n,e){this.uniforms.distanceCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}get proximityThreshold(){return this.uniforms.proximityCutoff.value.x}set proximityThreshold(n){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+this.proximityFalloff,0),1))}get worldProximityThreshold(){return-Os(this.proximityThreshold,this.near,this.far)}set worldProximityThreshold(n){this.proximityThreshold=Yr(-n,this.near,this.far)}get proximityFalloff(){return this.uniforms.proximityCutoff.value.y-this.proximityThreshold}set proximityFalloff(n){this.uniforms.proximityCutoff.value.y=Math.min(Math.max(this.proximityThreshold+n,0),1)}get worldProximityFalloff(){return-Os(this.proximityFalloff,this.near,this.far)}set worldProximityFalloff(n){this.proximityFalloff=Yr(-n,this.near,this.far)}setProximityCutoff(n,e){this.uniforms.proximityCutoff.value.set(Math.min(Math.max(n,0),1),Math.min(Math.max(n+e,0),1))}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNearFar.value.set(n.near,n.far),this.uniforms.projectionMatrix.value.copy(n.projectionMatrix),this.uniforms.inverseProjectionMatrix.value.copy(n.projectionMatrix).invert(),n instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms,i=t.noiseTexture.value;i!==null&&t.noiseScale.value.set(n/i.image.width,e/i.image.height),t.texelSize.value.set(1/n,1/e),this.resolution.set(n,e),this.updateRadius()}},f1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,h1="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",d1=class extends pt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new H(null),supportBuffer:new H(null),texelSize:new H(new ve),radius:new H(.85)},blending:Gt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:f1,vertexShader:h1}),this.fragmentShader=Ja(this.fragmentShader)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},p1=new Vl,Mr=null;function m1(){if(Mr===null){const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Mr=new ti,Mr.setAttribute!==void 0?(Mr.setAttribute("position",new kt(n,3)),Mr.setAttribute("uv",new kt(e,2))):(Mr.addAttribute("position",new kt(n,3)),Mr.addAttribute("uv",new kt(e,2)))}return Mr}var nn=class Kv{constructor(e="Pass",t=new ja,i=p1){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new hi(m1(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ja),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=En){}render(e,t,i,a,o){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof gt||t instanceof ar||t instanceof Xt||t instanceof Kv)&&this[e].dispose()}}},Qv=class extends nn{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new qv,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new gt(1,1,{minFilter:Ve,magFilter:Ve,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,a){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==It?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":rr(n)===wt&&un(this.renderTarget.texture,wt))}},v1=class extends nn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,a){const o=n.state.buffers.stencil;o.setLocked(!1),o.setTest(!1)}},Rm=new qe,$a=class extends nn{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,a){const o=this.overrideClearColor,l=this.overrideClearAlpha,u=n.getClearAlpha(),f=o!==null,p=l>=0;f?(n.getClearColor(Rm),n.setClearColor(o,p?l:u)):p&&n.setClearAlpha(l),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),f?n.setClearColor(Rm,u):p&&n.setClearAlpha(u)}},Er=-1,At=class extends sr{constructor(n,e=Er,t=Er,i=1){super(),this.resizable=n,this.baseSize=new ve(1,1),this.preferredSize=new ve(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new ve,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Er?t.width=e.width:e.height!==Er?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Er?t.height=e.height:e.width!==Er?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Er),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Er}},qc=!1,Pm=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case $n:t=this.materialsFlatShadedDoubleSide;break;case xn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case $n:t=this.materialsDoubleSide;break;case xn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof pt))return n.clone();const e=n.uniforms,t=new Map;for(const a in e){const o=e[a].value;o.isRenderTargetTexture&&(e[a].value=null,t.set(a,o))}const i=n.clone();for(const a of t)e[a[0]].value=a[1],i.uniforms[a[0]].value=a[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=nr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=xn,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=$n,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=xn,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=$n,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,qc){const a=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const o of a)o[0].material=o[1];this.meshCount!==a.size&&a.clear()}else{const a=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=a}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return qc}static set workaroundEnabled(n){qc=n}},ea=class extends nn{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new $a,this.overrideMaterialManager=t===null?null:new Pm(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Pm(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,a){const o=this.scene,l=this.camera,u=this.selection,f=l.layers.mask,p=o.background,d=n.shadowMap.autoUpdate,m=this.renderToScreen?null:e;u!==null&&l.layers.set(u.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(o.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(m),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,o,l):n.render(o,l),l.layers.mask=f,o.background=p,n.shadowMap.autoUpdate=d}},Lf=class extends nn{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:a=At.AUTO_SIZE,height:o=At.AUTO_SIZE,resolutionX:l=a,resolutionY:u=o}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new ea(n,e,new Mv({depthPacking:ir}));const f=this.renderPass;f.skipShadowMapUpdate=!0,f.ignoreBackground=!0;const p=f.clearPass;p.overrideClearColor=new qe(16777215),p.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new gt(1,1,{minFilter:at,magFilter:at}),this.renderTarget.texture.name="DepthPass.Target");const d=this.resolution=new At(this,l,u,i);d.addEventListener("change",m=>this.setSize(d.baseWidth,d.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,a){const o=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,o)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}},Jv=class extends nn{constructor({normalBuffer:n=null,resolutionScale:e=.5,width:t=At.AUTO_SIZE,height:i=At.AUTO_SIZE,resolutionX:a=t,resolutionY:o=i}={}){super("DepthDownsamplingPass");const l=new XT;l.normalBuffer=n,this.fullscreenMaterial=l,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new gt(1,1,{minFilter:at,magFilter:at,depthBuffer:!1,type:Kt}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;const u=this.resolution=new At(this,a,o,e);u.addEventListener("change",f=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(n,e=En){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e}render(n,e,t,i,a){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){const i=n.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw new Error("Rendering to float texture is not supported.")}},g1=class extends nn{constructor({depthPacking:n=ir}={}){super("DepthCopyPass");const e=new GT;e.outputDepthPacking=n,this.fullscreenMaterial=e,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new gt(1,1,{type:n===ir?It:Kt,minFilter:at,magFilter:at,depthBuffer:!1}),this.renderTarget.texture.name="DepthCopyPass.Target"}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}get depthPacking(){return this.fullscreenMaterial.outputDepthPacking}getDepthPacking(){return this.fullscreenMaterial.outputDepthPacking}setDepthTexture(n,e=En){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.inputDepthPacking=e}render(n,e,t,i,a){n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.renderTarget.setSize(n,e)}},Al=new Float32Array([255/256/256**3,255/256/256**2,255/256/256,255/256]);function x1(n){return(n[0]*Al[0]+n[1]*Al[1]+n[2]*Al[2]+n[3]*Al[3])/255}var S1=class extends g1{constructor({depthPacking:n=ir,mode:e=Fa.SINGLE}={}){super({depthPacking:n}),this.name="DepthPickingPass",this.fullscreenMaterial.mode=e,this.pixelBuffer=n===ir?new Uint8Array(4):new Float32Array(4),this.callback=null}readDepth(n){return this.fullscreenMaterial.texelPosition.set(n.x*.5+.5,n.y*.5+.5),new Promise(e=>{this.callback=e})}render(n,e,t,i,a){const o=this.fullscreenMaterial,l=o.mode;if(l===Fa.FULL&&super.render(n),this.callback!==null){const u=this.renderTarget,f=this.pixelBuffer,p=u.texture.type!==Kt;let d=0,m=0;if(l===Fa.SINGLE)super.render(n);else{const v=o.texelPosition;d=Math.round(v.x*u.width),m=Math.round(v.y*u.height)}n.readRenderTargetPixels(u,d,m,1,1,f),this.callback(p?x1(f):f[0]),this.callback=null}}setSize(n,e){this.fullscreenMaterial.mode===Fa.FULL&&super.setSize(n,e)}};function Cm(n,e,t){for(const i of e){const a="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),o=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const l of t.entries())l[1]!==null&&t.set(l[0],l[1].replace(o,a))}}function y1(n,e,t){let i=e.getFragmentShader(),a=e.getVertexShader();const o=i!==void 0&&/mainImage/.test(i),l=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(l&&t.attributes&wi.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!o&&!l)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const u=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,f=t.shaderParts;let p=f.get(Et.FRAGMENT_HEAD)||"",d=f.get(Et.FRAGMENT_MAIN_UV)||"",m=f.get(Et.FRAGMENT_MAIN_IMAGE)||"",v=f.get(Et.VERTEX_HEAD)||"",S=f.get(Et.VERTEX_MAIN_SUPPORT)||"";const M=new Set,T=new Set;if(l&&(d+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),a!==null&&/mainSupport/.test(a)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(a);S+=`	${n}MainSupport(`,S+=w?`vUv);
`:`);
`;for(const E of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of E[1].split(/\s*,\s*/))t.varyings.add(P),M.add(P),T.add(P);for(const E of a.matchAll(u))T.add(E[1])}for(const w of i.matchAll(u))T.add(w[1]);for(const w of e.defines.keys())T.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())T.add(w);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((w,E)=>t.uniforms.set(n+E.charAt(0).toUpperCase()+E.slice(1),w)),e.defines.forEach((w,E)=>t.defines.set(n+E.charAt(0).toUpperCase()+E.slice(1),w));const y=new Map([["fragment",i],["vertex",a]]);Cm(n,T,t.defines),Cm(n,T,y),i=y.get("fragment"),a=y.get("vertex");const g=e.blendMode;if(t.blendModes.set(g.blendFunction,g),o){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(m+=e.inputColorSpace===wt?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Xv?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;m+=`${n}MainImage(color0, UV, `,t.attributes&wi.DEPTH&&w.test(i)&&(m+="depth, ",t.readDepth=!0),m+=`color1);
	`;const E=n+"BlendOpacity";t.uniforms.set(E,g.opacity),m+=`color0 = blend${g.blendFunction}(color0, color1, ${E});

	`,p+=`uniform float ${E};

`}if(p+=i+`
`,a!==null&&(v+=a+`
`),f.set(Et.FRAGMENT_HEAD,p),f.set(Et.FRAGMENT_MAIN_UV,d),f.set(Et.FRAGMENT_MAIN_IMAGE,m),f.set(Et.VERTEX_HEAD,v),f.set(Et.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const w of e.extensions)t.extensions.add(w)}}var _1=class extends nn{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new JT(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new C1;let e=0;for(const l of this.effects)if(l.blendMode.blendFunction===$e.DST)n.attributes|=l.getAttributes()&wi.DEPTH;else{if(n.attributes&l.getAttributes()&wi.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${l.name})`);y1("e"+e++,l,n)}let t=n.shaderParts.get(Et.FRAGMENT_HEAD),i=n.shaderParts.get(Et.FRAGMENT_MAIN_IMAGE),a=n.shaderParts.get(Et.FRAGMENT_MAIN_UV);const o=/\bblend\b/g;for(const l of n.blendModes.values())t+=l.getShaderCode().replace(o,`blend${l.blendFunction}`)+`
`;n.attributes&wi.DEPTH?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===wt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(a=`vec2 transformedUv = vUv;
`+a,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(Et.FRAGMENT_HEAD,t),n.shaderParts.set(Et.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(Et.FRAGMENT_MAIN_UV,a);for(const[l,u]of n.shaderParts)u!==null&&n.shaderParts.set(l,u.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=En){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,a){for(const o of this.effects)o.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const o=this.fullscreenMaterial;o.inputBuffer=e.texture,o.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==It&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},Kl=class extends nn{constructor({kernelSize:n=$s.MEDIUM,resolutionScale:e=.5,width:t=At.AUTO_SIZE,height:i=At.AUTO_SIZE,resolutionX:a=t,resolutionY:o=i}={}){super("KawaseBlurPass"),this.renderTargetA=new gt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const l=this.resolution=new At(this,a,o,e);l.addEventListener("change",u=>this.setSize(l.baseWidth,l.baseHeight)),this._blurMaterial=new NT,this._blurMaterial.kernelSize=n,this.copyMaterial=new qv}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,a){const o=this.scene,l=this.camera,u=this.renderTargetA,f=this.renderTargetB,p=this.blurMaterial,d=p.kernelSequence;let m=e;this.fullscreenMaterial=p;for(let v=0,S=d.length;v<S;++v){const M=v&1?f:u;p.kernel=d[v],p.inputBuffer=m.texture,n.setRenderTarget(M),n.render(o,l),m=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=m.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(o,l)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,a=t.height;this.renderTargetA.setSize(i,a),this.renderTargetB.setSize(i,a),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==It?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):rr(n)===wt&&(un(this.renderTargetA.texture,wt),un(this.renderTargetB.texture,wt)))}static get AUTO_SIZE(){return At.AUTO_SIZE}},M1=class extends nn{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:a=At.AUTO_SIZE,height:o=At.AUTO_SIZE,resolutionX:l=a,resolutionY:u=o}={}){super("LuminancePass"),this.fullscreenMaterial=new n1(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const f=this.resolution=new At(this,l,u,i);f.addEventListener("change",p=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,a){const o=this.fullscreenMaterial;o.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==It&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},E1=class extends nn{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new $a(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,a){const o=n.getContext(),l=n.state.buffers,u=this.scene,f=this.camera,p=this.clearPass,d=this.inverted?0:1,m=1-d;l.color.setMask(!1),l.depth.setMask(!1),l.color.setLocked(!0),l.depth.setLocked(!0),l.stencil.setTest(!0),l.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.stencil.setFunc(o.ALWAYS,d,4294967295),l.stencil.setClear(m),l.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(n,null):(p.render(n,e),p.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(u,f)):(n.setRenderTarget(e),n.render(u,f),n.setRenderTarget(t),n.render(u,f)),l.color.setLocked(!1),l.depth.setLocked(!1),l.stencil.setLocked(!1),l.stencil.setFunc(o.EQUAL,1,4294967295),l.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.stencil.setLocked(!0)}},T1=class extends nn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ZT,this.upsamplingMaterial=new d1,this.resolution=new ve}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const a=e.clone();a.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(a)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,a){const{scene:o,camera:l}=this,{downsamplingMaterial:u,upsamplingMaterial:f}=this,{downsamplingMipmaps:p,upsamplingMipmaps:d}=this;let m=e;this.fullscreenMaterial=u;for(let v=0,S=p.length;v<S;++v){const M=p[v];u.setSize(m.width,m.height),u.inputBuffer=m.texture,n.setRenderTarget(M),n.render(o,l),m=M}this.fullscreenMaterial=f;for(let v=d.length-1;v>=0;--v){const S=d[v];f.setSize(m.width,m.height),f.inputBuffer=m.texture,f.supportBuffer=p[v].texture,n.setRenderTarget(S),n.render(o,l),m=S}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,a=t.height;for(let o=0,l=this.downsamplingMipmaps.length;o<l;++o)i=Math.round(i*.5),a=Math.round(a*.5),this.downsamplingMipmaps[o].setSize(i,a),o<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[o].setSize(i,a)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const a of i)a.texture.type=t;if(t!==It)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(rr(n)===wt)for(const a of i)un(a.texture,wt)}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},w1=class extends nn{constructor(n,e,{renderTarget:t,resolutionScale:i=1,width:a=At.AUTO_SIZE,height:o=At.AUTO_SIZE,resolutionX:l=a,resolutionY:u=o}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new ea(n,e,new lE);const f=this.renderPass;f.ignoreBackground=!0,f.skipShadowMapUpdate=!0;const p=f.getClearPass();p.overrideClearColor=new qe(7829503),p.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new gt(1,1,{minFilter:at,magFilter:at}),this.renderTarget.texture.name="NormalPass.Target");const d=this.resolution=new At(this,l,u,i);d.addEventListener("change",m=>this.setSize(d.baseWidth,d.baseHeight))}set mainScene(n){this.renderPass.mainScene=n}set mainCamera(n){this.renderPass.mainCamera=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,a){const o=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,o,o)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}},Ei=class extends nn{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,a){const o=this.fullscreenMaterial.uniforms;e!==null&&o!==void 0&&o[this.input]!==void 0&&(o[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==It&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Zc=1/1e3,A1=1e3,R1=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Zc}get fixedDelta(){return this._fixedDelta*Zc}set fixedDelta(n){this._fixedDelta=n*A1}get elapsed(){return this._elapsed*Zc}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},P1=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:i=!1,multisampling:a=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,i,o,a),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Qv,this.depthTexture=null,this.passes=[],this.timer=new R1,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){const t=this.inputBuffer,i=this.multisampling;i>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){const t=e.getSize(new ve),i=e.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;a===It&&rr(e)===wt&&(un(this.inputBuffer.texture,wt),un(this.outputBuffer.texture,wt),this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height);for(const o of this.passes)o.initialize(e,i,a)}}replaceRenderer(e,t=!0){const i=this.renderer,a=i.domElement.parentNode;return this.setRenderer(e),t&&a!==null&&(a.removeChild(i.domElement),a.appendChild(e.domElement)),i}createDepthTexture(){const e=this.depthTexture=new Tf;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=Zr,e.type=wr):e.type=$i,e}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const e of this.passes)e.setDepthTexture(null)}}createBuffer(e,t,i,a){const o=this.renderer,l=o===null?new ve:o.getDrawingBufferSize(new ve),u={minFilter:Ve,magFilter:Ve,stencilBuffer:t,depthBuffer:e,type:i},f=new gt(l.width,l.height,u);return a>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=a),i===It&&rr(o)===wt&&un(f.texture,wt),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(e){for(const t of this.passes)t.mainScene=e}setMainCamera(e){for(const t of this.passes)t.mainCamera=e}addPass(e,t){const i=this.passes,a=this.renderer,o=a.getDrawingBufferSize(new ve),l=a.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(e.setRenderer(a),e.setSize(o.width,o.height),e.initialize(a,l,u),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?i.splice(t,0,e):i.push(e),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(e of i)e.setDepthTexture(f)}else e.setDepthTexture(this.depthTexture)}removePass(e){const t=this.passes,i=t.indexOf(e);if(i!==-1&&t.splice(i,1).length>0){if(this.depthTexture!==null){const l=(f,p)=>f||p.needsDepthTexture;t.reduce(l,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){const t=this.renderer,i=this.copyPass;let a=this.inputBuffer,o=this.outputBuffer,l=!1,u,f,p;e===void 0&&(this.timer.update(),e=this.timer.delta);for(const d of this.passes)d.enabled&&(d.render(t,a,o,e,l),d.needsSwap&&(l&&(i.renderToScreen=d.renderToScreen,u=t.getContext(),f=t.state.buffers.stencil,f.setFunc(u.NOTEQUAL,1,4294967295),i.render(t,a,o,e,l),f.setFunc(u.EQUAL,1,4294967295)),p=a,a=o,o=p),d instanceof E1?l=!0:d instanceof v1&&(l=!1))}setSize(e,t,i){const a=this.renderer,o=a.getSize(new ve);(e===void 0||t===void 0)&&(e=o.width,t=o.height),(o.width!==e||o.height!==t)&&a.setSize(e,t,i);const l=a.getDrawingBufferSize(new ve);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const u of this.passes)u.setSize(l.width,l.height)}reset(){const e=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=e}dispose(){for(const e of this.passes)e.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},C1=class{constructor(){this.shaderParts=new Map([[Et.FRAGMENT_HEAD,null],[Et.FRAGMENT_MAIN_UV,null],[Et.FRAGMENT_MAIN_IMAGE,null],[Et.VERTEX_HEAD,null],[Et.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=wi.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=qs}},Uf=class extends Set{constructor(n,e=10){super(),this.l=e,this.exclusive=!1,n!==void 0&&this.set(n)}get layer(){return this.l}set layer(n){const e=this.l;for(const t of this)t.layers.disable(e),t.layers.enable(n);this.l=n}getLayer(){return this.layer}setLayer(n){this.layer=n}isExclusive(){return this.exclusive}setExclusive(n){this.exclusive=n}clear(){const n=this.layer;for(const e of this)e.layers.disable(n);return super.clear()}set(n){this.clear();for(const e of n)this.add(e);return this}indexOf(n){return this.has(n)?0:-1}add(n){return this.exclusive?n.layers.set(this.layer):n.layers.enable(this.layer),super.add(n)}delete(n){return this.has(n)&&n.layers.disable(this.layer),super.delete(n)}toggle(n){let e;return this.has(n)?(this.delete(n),e=!1):(this.add(n),e=!0),e}setVisible(n){for(const e of this)n?e.layers.enable(0):e.layers.disable(0);return this}},b1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",D1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",L1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",U1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",I1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",N1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",F1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",O1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",B1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",k1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",H1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",G1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",V1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",W1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",X1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",j1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",Y1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",Z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",K1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",Q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",J1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",$1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",ew="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",tw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",nw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",iw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",rw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",sw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",ow="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",lw=new Map([[$e.ADD,b1],[$e.ALPHA,D1],[$e.AVERAGE,L1],[$e.COLOR,U1],[$e.COLOR_BURN,I1],[$e.COLOR_DODGE,N1],[$e.DARKEN,F1],[$e.DIFFERENCE,O1],[$e.DIVIDE,z1],[$e.DST,null],[$e.EXCLUSION,B1],[$e.HARD_LIGHT,k1],[$e.HARD_MIX,H1],[$e.HUE,G1],[$e.INVERT,V1],[$e.INVERT_RGB,W1],[$e.LIGHTEN,X1],[$e.LINEAR_BURN,j1],[$e.LINEAR_DODGE,Y1],[$e.LINEAR_LIGHT,q1],[$e.LUMINOSITY,Z1],[$e.MULTIPLY,K1],[$e.NEGATION,Q1],[$e.NORMAL,J1],[$e.OVERLAY,$1],[$e.PIN_LIGHT,ew],[$e.REFLECT,tw],[$e.SATURATION,nw],[$e.SCREEN,iw],[$e.SOFT_LIGHT,rw],[$e.SRC,sw],[$e.SUBTRACT,aw],[$e.VIVID_LIGHT,ow]]),uw=class extends sr{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new H(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return lw.get(this.blendFunction)}},Tn=class extends sr{constructor(n,e,{attributes:t=wi.NONE,blendFunction:i=$e.NORMAL,defines:a=new Map,uniforms:o=new Map,extensions:l=null,vertexShader:u=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=u,this.defines=a,this.uniforms=o,this.extensions=l,this.blendMode=new uw(i),this.blendMode.addEventListener("change",f=>this.setChanged()),this._inputColorSpace=qs,this._outputColorSpace=Xv}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=En){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof gt||e instanceof ar||e instanceof Xt||e instanceof nn)&&this[n].dispose()}}},cw=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,fw=class extends Tn{constructor({blendFunction:n=$e.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:a=1,radius:o=.85,levels:l=8,kernelSize:u=$s.LARGE,resolutionScale:f=.5,width:p=At.AUTO_SIZE,height:d=At.AUTO_SIZE,resolutionX:m=p,resolutionY:v=d}={}){super("BloomEffect",cw,{blendFunction:n,uniforms:new Map([["map",new H(null)],["intensity",new H(a)]])}),this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Kl({kernelSize:u}),this.luminancePass=new M1({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new T1,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=o,this.mipmapBlurPass.levels=l,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const S=this.resolution=new At(this,m,v,f);S.addEventListener("change",M=>this.setSize(S.baseWidth,S.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,a=this.luminancePass;a.enabled?(a.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,a.renderTarget):this.blurPass.render(n,a.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,rr(n)===wt&&un(this.renderTarget.texture,wt))}},hw="void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(vec3(average(inputColor.rgb)),inputColor.a);}",dw=class extends Tn{constructor(n){super("ColorAverageEffect",hw,{blendFunction:n})}},pw=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);float cocNear=texture2D(nearCoCBuffer,uv).r;cocNear=min(cocNear*scale,1.0);vec4 result=inputColor*(1.0-colorFar.a)+colorFar;result=mix(result,colorNear,cocNear);outputColor=result;}`,mw=class extends Tn{constructor(n,{blendFunction:e,worldFocusDistance:t,worldFocusRange:i,focusDistance:a=0,focalLength:o=.1,focusRange:l=o,bokehScale:u=1,resolutionScale:f=1,width:p=At.AUTO_SIZE,height:d=At.AUTO_SIZE,resolutionX:m=p,resolutionY:v=d}={}){super("DepthOfFieldEffect",pw,{blendFunction:e,attributes:wi.DEPTH,uniforms:new Map([["nearColorBuffer",new H(null)],["farColorBuffer",new H(null)],["nearCoCBuffer",new H(null)],["scale",new H(1)]])}),this.camera=n,this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new Ei(new bT(n));const S=this.cocMaterial;S.focusDistance=a,S.focusRange=l,t!==void 0&&(S.worldFocusDistance=t),i!==void 0&&(S.worldFocusRange=i),this.blurPass=new Kl({resolutionScale:f,resolutionX:m,resolutionY:v,kernelSize:$s.MEDIUM}),this.maskPass=new Ei(new r1(this.renderTargetCoC.texture));const M=this.maskPass.fullscreenMaterial;M.maskFunction=Vs.MULTIPLY,M.colorChannel=zs.GREEN,this.bokehNearBasePass=new Ei(new Tl(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new Ei(new Tl(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new Ei(new Tl(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new Ei(new Tl(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null;const T=this.resolution=new At(this,m,v,f);T.addEventListener("change",y=>this.setSize(T.baseWidth,T.baseHeight)),this.bokehScale=u}set mainCamera(n){this.camera=n,this.cocMaterial.copyCameraSettings(n)}get cocTexture(){return this.renderTargetCoC.texture}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.circleOfConfusionMaterial}getBlurPass(){return this.blurPass}getResolution(){return this.resolution}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(n){this.bokehNearBasePass.fullscreenMaterial.scale=n,this.bokehNearFillPass.fullscreenMaterial.scale=n,this.bokehFarBasePass.fullscreenMaterial.scale=n,this.bokehFarFillPass.fullscreenMaterial.scale=n,this.maskPass.fullscreenMaterial.strength=n,this.uniforms.get("scale").value=n}getBokehScale(){return this.bokehScale}setBokehScale(n){this.bokehScale=n}getTarget(){return this.target}setTarget(n){this.target=n}calculateFocusDistance(n){const e=this.camera,t=e.position.distanceTo(n);return Yr(-t,e.near,e.far)}setDepthTexture(n,e=En){this.circleOfConfusionMaterial.depthBuffer=n,this.circleOfConfusionMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget,a=this.renderTargetCoC,o=this.renderTargetCoCBlurred,l=this.renderTargetMasked;if(this.target!==null){const u=this.calculateFocusDistance(this.target);this.cocMaterial.focusDistance=u}this.cocPass.render(n,null,a),this.blurPass.render(n,a,o),this.maskPass.render(n,e,l),this.bokehFarBasePass.render(n,l,i),this.bokehFarFillPass.render(n,i,this.renderTargetFar),this.bokehNearBasePass.render(n,e,i),this.bokehNearFillPass.render(n,i,this.renderTargetNear)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,a=t.height;this.cocPass.setSize(n,e),this.blurPass.setSize(n,e),this.maskPass.setSize(n,e),this.renderTargetCoC.setSize(n,e),this.renderTargetMasked.setSize(n,e),this.renderTarget.setSize(i,a),this.renderTargetNear.setSize(i,a),this.renderTargetFar.setSize(i,a),this.renderTargetCoCBlurred.setSize(i,a),this.bokehNearBasePass.fullscreenMaterial.setSize(n,e),this.bokehNearFillPass.fullscreenMaterial.setSize(n,e),this.bokehFarBasePass.fullscreenMaterial.setSize(n,e),this.bokehFarFillPass.fullscreenMaterial.setSize(n,e)}initialize(n,e,t){this.cocPass.initialize(n,e,t),this.maskPass.initialize(n,e,t),this.bokehNearBasePass.initialize(n,e,t),this.bokehNearFillPass.initialize(n,e,t),this.bokehFarBasePass.initialize(n,e,t),this.bokehFarFillPass.initialize(n,e,t),this.blurPass.initialize(n,e,It);const i=this.maskPass.fullscreenMaterial;i.maskFunction=e?Vs.MULTIPLY:Vs.MULTIPLY_RGB_SET_ALPHA,n.capabilities.logarithmicDepthBuffer&&(this.cocPass.fullscreenMaterial.defines.LOG_DEPTH="1"),t!==void 0&&(this.renderTarget.texture.type=t,this.renderTargetNear.texture.type=t,this.renderTargetFar.texture.type=t,this.renderTargetMasked.texture.type=t,rr(n)===wt&&(un(this.renderTarget.texture,wt),un(this.renderTargetNear.texture,wt),un(this.renderTargetFar.texture,wt),un(this.renderTargetMasked.texture,wt)))}};function vw(n,e,t){const i=new Map([[gf,1],[xf,1],[$m,2],[Wt,4]]);let a;if(i.has(e)||console.error("Invalid noise texture format"),t===It){a=new Uint8Array(n*i.get(e));for(let o=0,l=a.length;o<l;++o)a[o]=Math.random()*255+.5}else{a=new Float32Array(n*i.get(e));for(let o=0,l=a.length;o<l;++o)a[o]=Math.random()}return a}var df=class extends jl{constructor(n,e,t=gf,i=It){super(vw(n*e,t,i),n,e,t,i),this.needsUpdate=!0}},gw="uniform lowp sampler2D perturbationMap;uniform bool active;uniform float columns;uniform float random;uniform vec2 seeds;uniform vec2 distortion;void mainUv(inout vec2 uv){if(active){if(uv.y<distortion.x+columns&&uv.y>distortion.x-columns*random){float sx=clamp(ceil(seeds.x),0.0,1.0);uv.y=sx*(1.0-(uv.y+distortion.y))+(1.0-sx)*distortion.y;}if(uv.x<distortion.y+columns&&uv.x>distortion.y-columns*random){float sy=clamp(ceil(seeds.y),0.0,1.0);uv.x=sy*distortion.x+(1.0-sy)*(1.0-(uv.x+distortion.x));}vec2 normal=texture2D(perturbationMap,uv*random*random).rg;uv+=normal*seeds*(random*0.2);}}",Rl="Glitch.Generated";function Bn(n,e){return n+Math.random()*(e-n)}var xw=class extends Tn{constructor({chromaticAberrationOffset:n=null,delay:e=new ve(1.5,3.5),duration:t=new ve(.6,1),strength:i=new ve(.3,1),columns:a=.05,ratio:o=.85,perturbationMap:l=null,dtSize:u=64}={}){if(super("GlitchEffect",gw,{uniforms:new Map([["perturbationMap",new H(null)],["columns",new H(a)],["active",new H(!1)],["random",new H(1)],["seeds",new H(new ve)],["distortion",new H(new ve)]])}),l===null){const f=new df(u,u,Wt);f.name=Rl,this.perturbationMap=f}else this.perturbationMap=l;this.time=0,this.distortion=this.uniforms.get("distortion").value,this.delay=e,this.duration=t,this.breakPoint=new ve(Bn(this.delay.x,this.delay.y),Bn(this.duration.x,this.duration.y)),this.strength=i,this.mode=Xr.SPORADIC,this.ratio=o,this.chromaticAberrationOffset=n}get seeds(){return this.uniforms.get("seeds").value}get active(){return this.uniforms.get("active").value}isActive(){return this.active}get minDelay(){return this.delay.x}set minDelay(n){this.delay.x=n}getMinDelay(){return this.delay.x}setMinDelay(n){this.delay.x=n}get maxDelay(){return this.delay.y}set maxDelay(n){this.delay.y=n}getMaxDelay(){return this.delay.y}setMaxDelay(n){this.delay.y=n}get minDuration(){return this.duration.x}set minDuration(n){this.duration.x=n}getMinDuration(){return this.duration.x}setMinDuration(n){this.duration.x=n}get maxDuration(){return this.duration.y}set maxDuration(n){this.duration.y=n}getMaxDuration(){return this.duration.y}setMaxDuration(n){this.duration.y=n}get minStrength(){return this.strength.x}set minStrength(n){this.strength.x=n}getMinStrength(){return this.strength.x}setMinStrength(n){this.strength.x=n}get maxStrength(){return this.strength.y}set maxStrength(n){this.strength.y=n}getMaxStrength(){return this.strength.y}setMaxStrength(n){this.strength.y=n}getMode(){return this.mode}setMode(n){this.mode=n}getGlitchRatio(){return 1-this.ratio}setGlitchRatio(n){this.ratio=Math.min(Math.max(1-n,0),1)}get columns(){return this.uniforms.get("columns").value}set columns(n){this.uniforms.get("columns").value=n}getGlitchColumns(){return this.columns}setGlitchColumns(n){this.columns=n}getChromaticAberrationOffset(){return this.chromaticAberrationOffset}setChromaticAberrationOffset(n){this.chromaticAberrationOffset=n}get perturbationMap(){return this.uniforms.get("perturbationMap").value}set perturbationMap(n){const e=this.perturbationMap;e!==null&&e.name===Rl&&e.dispose(),n.minFilter=n.magFilter=at,n.wrapS=n.wrapT=Ai,n.generateMipmaps=!1,this.uniforms.get("perturbationMap").value=n}getPerturbationMap(){return this.perturbationMap}setPerturbationMap(n){this.perturbationMap=n}generatePerturbationMap(n=64){const e=new df(n,n,Wt);return e.name=Rl,e}update(n,e,t){const i=this.mode,a=this.breakPoint,o=this.chromaticAberrationOffset,l=this.strength;let u=this.time,f=!1,p=0,d=0,m;i!==Xr.DISABLED&&(i===Xr.SPORADIC&&(u+=t,m=u>a.x,u>=a.x+a.y&&(a.set(Bn(this.delay.x,this.delay.y),Bn(this.duration.x,this.duration.y)),u=0)),p=Math.random(),this.uniforms.get("random").value=p,m&&p>this.ratio||i===Xr.CONSTANT_WILD?(f=!0,p*=l.y*.03,d=Bn(-Math.PI,Math.PI),this.seeds.set(Bn(-l.y,l.y),Bn(-l.y,l.y)),this.distortion.set(Bn(0,1),Bn(0,1))):(m||i===Xr.CONSTANT_MILD)&&(f=!0,p*=l.x*.03,d=Bn(-Math.PI,Math.PI),this.seeds.set(Bn(-l.x,l.x),Bn(-l.x,l.x)),this.distortion.set(Bn(0,1),Bn(0,1))),this.time=u),o!==null&&(f?o.set(Math.cos(d),Math.sin(d)).multiplyScalar(p):o.set(0,0)),this.uniforms.get("active").value=f}dispose(){const n=this.perturbationMap;n!==null&&n.name===Rl&&n.dispose()}},Sw=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`,Kc=new O,bm=new Ze,yw=class extends Tn{constructor(n,e,{blendFunction:t=$e.SCREEN,samples:i=60,density:a=.96,decay:o=.9,weight:l=.4,exposure:u=.6,clampMax:f=1,blur:p=!0,kernelSize:d=$s.SMALL,resolutionScale:m=.5,width:v=At.AUTO_SIZE,height:S=At.AUTO_SIZE,resolutionX:M=v,resolutionY:T=S}={}){super("GodRaysEffect",Sw,{blendFunction:t,attributes:wi.DEPTH,uniforms:new Map([["map",new H(null)]])}),this.camera=n,this._lightSource=e,this.lightSource=e,this.lightScene=new ja,this.screenPosition=new ve,this.renderTargetA=new gt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="GodRays.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="GodRays.Target.B",this.uniforms.get("map").value=this.renderTargetB.texture,this.renderTargetLight=new gt(1,1),this.renderTargetLight.texture.name="GodRays.Light",this.renderTargetLight.depthTexture=new Tf,this.renderPassLight=new ea(this.lightScene,n),this.renderPassLight.clearPass.overrideClearColor=new qe(0),this.clearPass=new $a(!0,!1,!1),this.clearPass.overrideClearColor=new qe(0),this.blurPass=new Kl({kernelSize:d}),this.blurPass.enabled=p,this.depthMaskPass=new Ei(new Zv);const y=this.depthMaskMaterial;y.depthBuffer1=this.renderTargetLight.depthTexture,y.copyCameraSettings(n),this.godRaysPass=new Ei(new e1(this.screenPosition));const g=this.godRaysMaterial;g.density=a,g.decay=o,g.weight=l,g.exposure=u,g.maxIntensity=f,g.samples=i;const w=this.resolution=new At(this,M,T,m);w.addEventListener("change",E=>this.setSize(w.baseWidth,w.baseHeight))}set mainCamera(n){this.camera=n,this.renderPassLight.mainCamera=n,this.depthMaskMaterial.copyCameraSettings(n)}get lightSource(){return this._lightSource}set lightSource(n){this._lightSource=n,n!==null&&(n.material.depthWrite=!1,n.material.transparent=!0)}getBlurPass(){return this.blurPass}get texture(){return this.renderTargetB.texture}getTexture(){return this.texture}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get godRaysMaterial(){return this.godRaysPass.fullscreenMaterial}getGodRaysMaterial(){return this.godRaysMaterial}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.godRaysMaterial.dithering}set dithering(n){const e=this.godRaysMaterial;e.dithering=n,e.needsUpdate=!0}get blur(){return this.blurPass.enabled}set blur(n){this.blurPass.enabled=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}get samples(){return this.godRaysMaterial.samples}set samples(n){this.godRaysMaterial.samples=n}setDepthTexture(n,e=En){this.depthMaskPass.fullscreenMaterial.depthBuffer0=n,this.depthMaskPass.fullscreenMaterial.depthPacking0=e}update(n,e,t){const i=this.lightSource,a=i.parent,o=i.matrixAutoUpdate,l=this.renderTargetA,u=this.renderTargetLight;i.material.depthWrite=!0,i.matrixAutoUpdate=!1,i.updateWorldMatrix(!0,!1),a!==null&&(o||bm.copy(i.matrix),i.matrix.copy(i.matrixWorld)),this.lightScene.add(i),this.renderPassLight.render(n,u),this.clearPass.render(n,l),this.depthMaskPass.render(n,u,l),i.material.depthWrite=!1,i.matrixAutoUpdate=o,a!==null&&(o||i.matrix.copy(bm),a.add(i)),Kc.setFromMatrixPosition(i.matrixWorld).project(this.camera),this.screenPosition.set(Math.min(Math.max((Kc.x+1)*.5,-1),2),Math.min(Math.max((Kc.y+1)*.5,-1),2)),this.blurPass.enabled&&this.blurPass.render(n,l,l),this.godRaysPass.render(n,l,this.renderTargetB)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,a=t.height;this.renderTargetA.setSize(i,a),this.renderTargetB.setSize(i,a),this.renderTargetLight.setSize(i,a),this.blurPass.resolution.copy(t)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.renderPassLight.initialize(n,e,t),this.depthMaskPass.initialize(n,e,t),this.godRaysPass.initialize(n,e,t),t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,this.renderTargetLight.texture.type=t,rr(n)===wt&&(un(this.renderTargetA.texture,wt),un(this.renderTargetB.texture,wt),un(this.renderTargetLight.texture,wt)))}},_w="uniform vec2 scale;uniform float lineWidth;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float grid=0.5-max(abs(mod(uv.x*scale.x,1.0)-0.5),abs(mod(uv.y*scale.y,1.0)-0.5));outputColor=vec4(vec3(smoothstep(0.0,lineWidth,grid)),inputColor.a);}",Mw=class extends Tn{constructor({blendFunction:n=$e.OVERLAY,scale:e=1,lineWidth:t=0}={}){super("GridEffect",_w,{blendFunction:n,uniforms:new Map([["scale",new H(new ve)],["lineWidth",new H(t)]])}),this.resolution=new ve,this.s=0,this.scale=e,this.l=0,this.lineWidth=t}get scale(){return this.s}set scale(n){this.s=Math.max(n,1e-6),this.setSize(this.resolution.width,this.resolution.height)}getScale(){return this.scale}setScale(n){this.scale=n}get lineWidth(){return this.l}set lineWidth(n){this.l=n,this.setSize(this.resolution.width,this.resolution.height)}getLineWidth(){return this.lineWidth}setLineWidth(n){this.lineWidth=n}setSize(n,e){this.resolution.set(n,e);const t=n/e,i=this.scale*(e*.125);this.uniforms.get("scale").value.set(t*i,i),this.uniforms.get("lineWidth").value=i/e+this.lineWidth}};function Dm(n,e,t){const i=document.createElement("canvas"),a=i.getContext("2d");if(i.width=n,i.height=e,t instanceof Image)a.drawImage(t,0,0);else{const o=a.createImageData(n,e);o.data.set(t),a.putImageData(o,0,0)}return i}var Ew=class $v{constructor(e=0,t=0,i=null){this.width=e,this.height=t,this.data=i}toCanvas(){return typeof document>"u"?null:Dm(this.width,this.height,this.data)}static from(e){const{width:t,height:i}=e;let a;if(e instanceof Image){const o=Dm(t,i,e);o!==null&&(a=o.getContext("2d").getImageData(0,0,t,i).data)}else a=e.data;return new $v(t,i,a)}},Tw=`"use strict";(()=>{var O={SCALE_UP:"lut.scaleup"};var _=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function d(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function V(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function k(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)V(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=_[0];P[0]=s,P[1]=F,P[2]=f;let o=_[1],L=x-w,S=u-c,U=b-l;o[0]=L*M[0]+w,o[1]=S*M[1]+c,o[2]=U*M[2]+l,V(a,t,o[0],o[1],o[2],n[0]),o[0]=L*g[0]+w,o[1]=S*g[1]+c,o[2]=U*g[2]+l,V(a,t,o[0],o[1],o[2],n[1]),o[0]=L*X[0]+w,o[1]=S*X[1]+c,o[2]=U*X[2]+l,V(a,t,o[0],o[1],o[2],n[2]),o[0]=L*Y[0]+w,o[1]=S*Y[1]+c,o[2]=U*Y[2]+l,V(a,t,o[0],o[1],o[2],n[3]);let T=d(g,X,Y,P)*6,q=d(M,X,Y,P)*6,C=d(M,g,Y,P)*6,E=d(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=q,n[1][1]*=q,n[1][2]*=q,n[2][0]*=C,n[2][1]*=C,n[2][2]*=C,n[3][0]*=E,n[3][1]*=E,n[3][2]*=E,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var v=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(r**3*4),y=t instanceof Uint8Array?255:1,h=r**2,A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;k(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case O.SCALE_UP:r=v.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();
`,Lm=new qe,ww=class Il extends ka{constructor(e,t){super(e,t,t,t),this.type=Kt,this.format=Wt,this.minFilter=Ve,this.magFilter=Ve,this.wrapS=Hn,this.wrapT=Hn,this.wrapR=Hn,this.unpackAlignment=1,this.needsUpdate=!0,un(this,qs),this.domainMin=new O(0,0,0),this.domainMax=new O(1,1,1)}get isLookupTexture3D(){return!0}scaleUp(e,t=!0){const i=this.image;let a;return e<=i.width?a=Promise.reject(new Error("The target size must be greater than the current size")):a=new Promise((o,l)=>{const u=URL.createObjectURL(new Blob([Tw],{type:"text/javascript"})),f=new Worker(u);f.addEventListener("error",d=>l(d.error)),f.addEventListener("message",d=>{const m=new Il(d.data,e);Yc(this,m),m.type=this.type,m.name=this.name,URL.revokeObjectURL(u),o(m)});const p=t?[i.data.buffer]:[];f.postMessage({operation:DT.SCALE_UP,data:i.data,size:e},p)}),a}applyLUT(e){const t=this.image,i=e.image,a=Math.min(t.width,t.height,t.depth),o=Math.min(i.width,i.height,i.depth);if(a!==o)console.error("Size mismatch");else if(e.type!==Kt||this.type!==Kt)console.error("Both LUTs must be FloatType textures");else if(e.format!==Wt||this.format!==Wt)console.error("Both LUTs must be RGBA textures");else{const l=t.data,u=i.data,f=a,p=f**2,d=f-1;for(let m=0,v=f**3;m<v;++m){const S=m*4,M=l[S+0]*d,T=l[S+1]*d,y=l[S+2]*d,g=Math.round(M+T*f+y*p)*4;l[S+0]=u[g+0],l[S+1]=u[g+1],l[S+2]=u[g+2]}this.needsUpdate=!0}return this}convertToUint8(){if(this.type===Kt){const e=this.image.data,t=new Uint8Array(e.length);for(let i=0,a=e.length;i<a;++i)t[i]=e[i]*255+.5;this.image.data=t,this.type=It,this.needsUpdate=!0}return this}convertToFloat(){if(this.type===It){const e=this.image.data,t=new Float32Array(e.length);for(let i=0,a=e.length;i<a;++i)t[i]=e[i]/255;this.image.data=t,this.type=Kt,this.needsUpdate=!0}return this}convertToRGBA(){return console.warn("LookupTexture","convertToRGBA() is deprecated, LUTs are now RGBA by default"),this}convertLinearToSRGB(){const e=this.image.data;if(this.type===Kt){for(let t=0,i=e.length;t<i;t+=4)Lm.fromArray(e,t).convertLinearToSRGB().toArray(e,t);un(this,wt),this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}convertSRGBToLinear(){const e=this.image.data;if(this.type===Kt){for(let t=0,i=e.length;t<i;t+=4)Lm.fromArray(e,t).convertSRGBToLinear().toArray(e,t);un(this,qs),this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}toDataTexture(){const e=this.image.width,t=this.image.height*this.image.depth,i=new jl(this.image.data,e,t);return i.name=this.name,i.type=this.type,i.format=this.format,i.minFilter=Ve,i.magFilter=Ve,i.wrapS=this.wrapS,i.wrapT=this.wrapT,i.generateMipmaps=!1,i.needsUpdate=!0,Yc(this,i),i}static from(e){const t=e.image,{width:i,height:a}=t,o=Math.min(i,a);let l;if(t instanceof Image){const p=Ew.from(t).data;if(i>a){l=new Uint8Array(p.length);for(let d=0;d<o;++d)for(let m=0;m<o;++m)for(let v=0;v<o;++v){const S=(v+d*o+m*o*o)*4,M=(v+m*o+d*o*o)*4;l[M+0]=p[S+0],l[M+1]=p[S+1],l[M+2]=p[S+2],l[M+3]=p[S+3]}}else l=new Uint8Array(p.buffer)}else l=t.data.slice();const u=new Il(l,o);return u.type=e.type,u.name=e.name,Yc(e,u),u}static createNeutral(e){const t=new Float32Array(e**3*4),i=e**2,a=1/(e-1);for(let l=0;l<e;++l)for(let u=0;u<e;++u)for(let f=0;f<e;++f){const p=(l+u*e+f*i)*4;t[p+0]=l*a,t[p+1]=u*a,t[p+2]=f*a,t[p+3]=1}const o=new Il(t,e);return o.name="neutral",o}},Aw=`uniform vec3 scale;uniform vec3 offset;
#ifdef CUSTOM_INPUT_DOMAIN
uniform vec3 domainMin;uniform vec3 domainMax;
#endif
#ifdef LUT_3D
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler3D lut;
#else
uniform mediump sampler3D lut;
#endif
#else
uniform lowp sampler3D lut;
#endif
vec4 applyLUT(const in vec3 rgb){
#ifdef TETRAHEDRAL_INTERPOLATION
vec3 p=floor(rgb);vec3 f=rgb-p;vec3 v1=(p+0.5)*LUT_TEXEL_WIDTH;vec3 v4=(p+1.5)*LUT_TEXEL_WIDTH;vec3 v2,v3;vec3 frac;if(f.r>=f.g){if(f.g>f.b){frac=f.rgb;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else if(f.r>=f.b){frac=f.rbg;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v1.y,v4.z);}else{frac=f.brg;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v4.x,v1.y,v4.z);}}else{if(f.b>f.g){frac=f.bgr;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v1.x,v4.y,v4.z);}else if(f.r>=f.b){frac=f.grb;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else{frac=f.gbr;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v1.x,v4.y,v4.z);}}vec4 n1=texture(lut,v1);vec4 n2=texture(lut,v2);vec4 n3=texture(lut,v3);vec4 n4=texture(lut,v4);vec4 weights=vec4(1.0-frac.x,frac.x-frac.y,frac.y-frac.z,frac.z);vec4 result=weights*mat4(vec4(n1.r,n2.r,n3.r,n4.r),vec4(n1.g,n2.g,n3.g,n4.g),vec4(n1.b,n2.b,n3.b,n4.b),vec4(1.0));return vec4(result.rgb,1.0);
#else
return texture(lut,rgb);
#endif
}
#else
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D lut;
#else
uniform mediump sampler2D lut;
#endif
#else
uniform lowp sampler2D lut;
#endif
vec4 applyLUT(const in vec3 rgb){float slice=rgb.b*LUT_SIZE;float slice0=floor(slice);float interp=slice-slice0;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);
#ifdef LUT_STRIP_HORIZONTAL
float xOffset=clamp(rgb.r*LUT_TEXEL_HEIGHT,LUT_TEXEL_WIDTH*0.5,LUT_TEXEL_HEIGHT-LUT_TEXEL_WIDTH*0.5);vec2 uv0=vec2(slice0*LUT_TEXEL_HEIGHT+xOffset,rgb.g);vec2 uv1=vec2(slice1*LUT_TEXEL_HEIGHT+xOffset,rgb.g);
#else
float yOffset=clamp(rgb.g*LUT_TEXEL_WIDTH,LUT_TEXEL_HEIGHT*0.5,LUT_TEXEL_WIDTH-LUT_TEXEL_HEIGHT*0.5);vec2 uv0=vec2(rgb.r,slice0*LUT_TEXEL_WIDTH+yOffset);vec2 uv1=vec2(rgb.r,slice1*LUT_TEXEL_WIDTH+yOffset);
#endif
vec4 sample0=texture2D(lut,uv0);vec4 sample1=texture2D(lut,uv1);return mix(sample0,sample1,abs(centeredInterp));}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 c=inputColor.rgb;
#ifdef CUSTOM_INPUT_DOMAIN
if(c.r>=domainMin.r&&c.g>=domainMin.g&&c.b>=domainMin.b&&c.r<=domainMax.r&&c.g<=domainMax.g&&c.b<=domainMax.b){c=applyLUT(scale*c+offset).rgb;}else{c=inputColor.rgb;}
#else
#if !defined(LUT_3D) || defined(TETRAHEDRAL_INTERPOLATION)
c=clamp(c,0.0,1.0);
#endif
c=applyLUT(scale*c+offset).rgb;
#endif
outputColor=vec4(c,inputColor.a);}`,Rw=class extends Tn{constructor(n,{blendFunction:e=$e.SRC,tetrahedralInterpolation:t=!1,inputEncoding:i=Ti,inputColorSpace:a}={}){super("LUT3DEffect",Aw,{blendFunction:e,uniforms:new Map([["lut",new H(null)],["scale",new H(new O)],["offset",new H(new O)],["domainMin",new H(null)],["domainMax",new H(null)]])}),this.tetrahedralInterpolation=t,this.inputColorSpace=a||Yv.get(i),this.lut=n}get inputEncoding(){return this.inputColorSpace}set inputEncoding(n){this.inputColorSpace=n}getInputEncoding(){return this.inputColorSpace}setInputEncoding(n){this.inputColorSpace=n}getOutputEncoding(){return this.outputColorSpace}get lut(){return this.uniforms.get("lut").value}set lut(n){const e=this.defines,t=this.uniforms;if(this.lut!==n&&(t.get("lut").value=n,n!==null)){const i=n.image,a=this.tetrahedralInterpolation;if(e.clear(),e.set("LUT_SIZE",Math.min(i.width,i.height).toFixed(16)),e.set("LUT_TEXEL_WIDTH",(1/i.width).toFixed(16)),e.set("LUT_TEXEL_HEIGHT",(1/i.height).toFixed(16)),t.get("domainMin").value=null,t.get("domainMax").value=null,(n.type===Kt||n.type===ei)&&e.set("LUT_PRECISION_HIGH","1"),i.width>i.height?e.set("LUT_STRIP_HORIZONTAL","1"):n instanceof ka&&e.set("LUT_3D","1"),n instanceof ww){const o=n.domainMin,l=n.domainMax;(o.x!==0||o.y!==0||o.z!==0||l.x!==1||l.y!==1||l.z!==1)&&(e.set("CUSTOM_INPUT_DOMAIN","1"),t.get("domainMin").value=o.clone(),t.get("domainMax").value=l.clone())}this.tetrahedralInterpolation=a}}getLUT(){return this.lut}setLUT(n){this.lut=n}updateScaleOffset(){const n=this.lut;if(n!==null){const e=Math.min(n.image.width,n.image.height),t=this.uniforms.get("scale").value,i=this.uniforms.get("offset").value;if(this.tetrahedralInterpolation&&n instanceof ka)if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const a=n.domainMax.clone().sub(n.domainMin);t.setScalar(e-1).divide(a),i.copy(n.domainMin).negate().multiply(t)}else t.setScalar(e-1),i.setScalar(0);else if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const a=n.domainMax.clone().sub(n.domainMin).multiplyScalar(e);t.setScalar(e-1).divide(a),i.copy(n.domainMin).negate().multiply(t).addScalar(1/(2*e))}else t.setScalar((e-1)/e),i.setScalar(1/(2*e))}}configureTetrahedralInterpolation(){const n=this.lut;n!==null&&(n.minFilter=Ve,n.magFilter=Ve,this.tetrahedralInterpolation&&(n instanceof ka?(n.minFilter=at,n.magFilter=at):console.warn("Tetrahedral interpolation requires a 3D texture")),n.source===void 0&&(n.needsUpdate=!0))}get tetrahedralInterpolation(){return this.defines.has("TETRAHEDRAL_INTERPOLATION")}set tetrahedralInterpolation(n){n?this.defines.set("TETRAHEDRAL_INTERPOLATION","1"):this.defines.delete("TETRAHEDRAL_INTERPOLATION"),this.configureTetrahedralInterpolation(),this.updateScaleOffset(),this.setChanged()}setTetrahedralInterpolationEnabled(n){this.tetrahedralInterpolation=n}},Pw=`uniform lowp sampler2D edgeTexture;uniform lowp sampler2D maskTexture;uniform vec3 visibleEdgeColor;uniform vec3 hiddenEdgeColor;uniform float pulse;uniform float edgeStrength;
#ifdef USE_PATTERN
uniform lowp sampler2D patternTexture;varying vec2 vUvPattern;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 edge=texture2D(edgeTexture,uv).rg;vec2 mask=texture2D(maskTexture,uv).rg;
#ifndef X_RAY
edge.y=0.0;
#endif
edge*=(edgeStrength*mask.x*pulse);vec3 color=edge.x*visibleEdgeColor+edge.y*hiddenEdgeColor;float visibilityFactor=0.0;
#ifdef USE_PATTERN
vec4 patternColor=texture2D(patternTexture,vUvPattern);
#ifdef X_RAY
float hiddenFactor=0.5;
#else
float hiddenFactor=0.0;
#endif
visibilityFactor=(1.0-mask.y>0.0)?1.0:hiddenFactor;visibilityFactor*=(1.0-mask.x)*patternColor.a;color+=visibilityFactor*patternColor.rgb;
#endif
float alpha=max(max(edge.x,edge.y),visibilityFactor);
#ifdef ALPHA
outputColor=vec4(color,alpha);
#else
outputColor=vec4(color,max(alpha,inputColor.a));
#endif
}`,Cw="uniform float patternScale;varying vec2 vUvPattern;void mainSupport(const in vec2 uv){vUvPattern=uv*vec2(aspect,1.0)*patternScale;}",bw=class extends Tn{constructor(n,e,{blendFunction:t=$e.SCREEN,patternTexture:i=null,patternScale:a=1,edgeStrength:o=1,pulseSpeed:l=0,visibleEdgeColor:u=16777215,hiddenEdgeColor:f=2230538,kernelSize:p=$s.VERY_SMALL,blur:d=!1,xRay:m=!0,multisampling:v=0,resolutionScale:S=.5,width:M=At.AUTO_SIZE,height:T=At.AUTO_SIZE,resolutionX:y=M,resolutionY:g=T}={}){super("OutlineEffect",Pw,{uniforms:new Map([["maskTexture",new H(null)],["edgeTexture",new H(null)],["edgeStrength",new H(o)],["visibleEdgeColor",new H(new qe(u))],["hiddenEdgeColor",new H(new qe(f))],["pulse",new H(1)],["patternScale",new H(a)],["patternTexture",new H(null)]])}),this.blendMode.addEventListener("change",C=>{this.blendMode.blendFunction===$e.ALPHA?this.defines.set("ALPHA","1"):this.defines.delete("ALPHA"),this.setChanged()}),this.blendMode.blendFunction=t,this.patternTexture=i,this.xRay=m,this.scene=n,this.camera=e,this.renderTargetMask=new gt(1,1),this.renderTargetMask.samples=v,this.renderTargetMask.texture.name="Outline.Mask",this.uniforms.get("maskTexture").value=this.renderTargetMask.texture,this.renderTargetOutline=new gt(1,1,{depthBuffer:!1}),this.renderTargetOutline.texture.name="Outline.Edges",this.uniforms.get("edgeTexture").value=this.renderTargetOutline.texture,this.clearPass=new $a,this.clearPass.overrideClearColor=new qe(0),this.clearPass.overrideClearAlpha=1,this.depthPass=new Lf(n,e),this.maskPass=new ea(n,e,new BT(this.depthPass.texture,e));const w=this.maskPass.clearPass;w.overrideClearColor=new qe(16777215),w.overrideClearAlpha=1,this.blurPass=new Kl({resolutionScale:S,resolutionX:y,resolutionY:g,kernelSize:p}),this.blurPass.enabled=d;const E=this.blurPass.resolution;E.addEventListener("change",C=>this.setSize(E.baseWidth,E.baseHeight)),this.outlinePass=new Ei(new o1);const P=this.outlinePass.fullscreenMaterial;P.inputBuffer=this.renderTargetMask.texture,this.time=0,this.active=!1,this.selection=new Uf,this.selection.layer=10,this.pulseSpeed=l}set mainScene(n){this.scene=n,this.depthPass.mainScene=n,this.maskPass.mainScene=n}set mainCamera(n){this.camera=n,this.depthPass.mainCamera=n,this.maskPass.mainCamera=n,this.maskPass.overrideMaterial.copyCameraSettings(n)}get resolution(){return this.blurPass.resolution}getResolution(){return this.blurPass.getResolution()}get multisampling(){return this.renderTargetMask.samples}set multisampling(n){this.renderTargetMask.samples=n,this.renderTargetMask.dispose()}get patternScale(){return this.uniforms.get("patternScale").value}set patternScale(n){this.uniforms.get("patternScale").value=n}get edgeStrength(){return this.uniforms.get("edgeStrength").value}set edgeStrength(n){this.uniforms.get("edgeStrength").value=n}get visibleEdgeColor(){return this.uniforms.get("visibleEdgeColor").value}set visibleEdgeColor(n){this.uniforms.get("visibleEdgeColor").value=n}get hiddenEdgeColor(){return this.uniforms.get("hiddenEdgeColor").value}set hiddenEdgeColor(n){this.uniforms.get("hiddenEdgeColor").value=n}getBlurPass(){return this.blurPass}getSelection(){return this.selection}getPulseSpeed(){return this.pulseSpeed}setPulseSpeed(n){this.pulseSpeed=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get selectionLayer(){return this.selection.layer}set selectionLayer(n){this.selection.layer=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get blur(){return this.blurPass.enabled}set blur(n){this.blurPass.enabled=n}get xRay(){return this.defines.has("X_RAY")}set xRay(n){this.xRay!==n&&(n?this.defines.set("X_RAY","1"):this.defines.delete("X_RAY"),this.setChanged())}isXRayEnabled(){return this.xRay}setXRayEnabled(n){this.xRay=n}get patternTexture(){return this.uniforms.get("patternTexture").value}set patternTexture(n){n!==null?(n.wrapS=n.wrapT=Ai,this.defines.set("USE_PATTERN","1"),this.setVertexShader(Cw)):(this.defines.delete("USE_PATTERN"),this.setVertexShader(null)),this.uniforms.get("patternTexture").value=n,this.setChanged()}setPatternTexture(n){this.patternTexture=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}setSelection(n){return this.selection.set(n),this}clearSelection(){return this.selection.clear(),this}selectObject(n){return this.selection.add(n),this}deselectObject(n){return this.selection.delete(n),this}update(n,e,t){const i=this.scene,a=this.camera,o=this.selection,u=this.uniforms.get("pulse"),f=i.background,p=a.layers.mask;o.size>0?(i.background=null,u.value=1,this.pulseSpeed>0&&(u.value=Math.cos(this.time*this.pulseSpeed*10)*.375+.625),this.active=!0,this.time+=t,o.setVisible(!1),this.depthPass.render(n),o.setVisible(!0),a.layers.set(o.layer),this.maskPass.render(n,this.renderTargetMask),a.layers.mask=p,i.background=f,this.outlinePass.render(n,null,this.renderTargetOutline),this.blurPass.enabled&&this.blurPass.render(n,this.renderTargetOutline,this.renderTargetOutline)):this.active&&(a.layers.set(o.layer),this.maskPass.render(n,this.renderTargetMask),a.layers.mask=p,this.clearPass.render(n,this.renderTargetOutline),this.active=!1)}setSize(n,e){this.blurPass.setSize(n,e),this.renderTargetMask.setSize(n,e);const t=this.resolution;t.setBaseSize(n,e);const i=t.width,a=t.height;this.depthPass.setSize(i,a),this.renderTargetOutline.setSize(i,a),this.outlinePass.fullscreenMaterial.setSize(i,a)}initialize(n,e,t){this.blurPass.initialize(n,e,It),t!==void 0&&(this.depthPass.initialize(n,e,t),this.maskPass.initialize(n,e,t),this.outlinePass.initialize(n,e,t))}},Dw="uniform bool active;uniform vec4 d;void mainUv(inout vec2 uv){if(active){uv=d.xy*(floor(uv*d.zw)+0.5);}}",Lw=class extends Tn{constructor(n=30){super("PixelationEffect",Dw,{uniforms:new Map([["active",new H(!1)],["d",new H(new Ht)]])}),this.resolution=new ve,this._granularity=0,this.granularity=n}get granularity(){return this._granularity}set granularity(n){let e=Math.floor(n);e%2>0&&(e+=1),this._granularity=e,this.uniforms.get("active").value=e>0,this.setSize(this.resolution.width,this.resolution.height)}getGranularity(){return this.granularity}setGranularity(n){this.granularity=n}setSize(n,e){const t=this.resolution;t.set(n,e);const i=this.granularity,a=i/t.x,o=i/t.y;this.uniforms.get("d").value.set(a,o,1/a,1/o)}};new O;new O;var Uw=class extends fw{constructor(n,e,t){super(t),this.setAttributes(this.getAttributes()|wi.DEPTH),this.camera=e,this.depthPass=new Lf(n,e),this.clearPass=new $a(!0,!1,!1),this.clearPass.overrideClearColor=new qe(0),this.depthMaskPass=new Ei(new Zv);const i=this.depthMaskMaterial;i.copyCameraSettings(e),i.depthBuffer1=this.depthPass.texture,i.depthPacking1=ir,i.depthMode=Ol,this.renderTargetMasked=new gt(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new Uf,this.selection.layer=11,this._inverted=!1,this._ignoreBackground=!1}set mainScene(n){this.depthPass.mainScene=n}set mainCamera(n){this.camera=n,this.depthPass.mainCamera=n,this.depthMaskMaterial.copyCameraSettings(n)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(n){this._inverted=n,this.depthMaskMaterial.depthMode=n?mf:Ol}isInverted(){return this.inverted}setInverted(n){this.inverted=n}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(n){this._ignoreBackground=n,this.depthMaskMaterial.maxDepthStrategy=n?Ga.DISCARD_MAX_DEPTH:Ga.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}setDepthTexture(n,e=En){this.depthMaskMaterial.depthBuffer0=n,this.depthMaskMaterial.depthPacking0=e}update(n,e,t){const i=this.camera,a=this.selection,o=this.inverted;let l=e;if(this.ignoreBackground||!o||a.size>0){const u=i.layers.mask;i.layers.set(a.layer),this.depthPass.render(n),i.layers.mask=u,l=this.renderTargetMasked,this.clearPass.render(n,l),this.depthMaskPass.render(n,e,l)}super.update(n,l,t)}setSize(n,e){super.setSize(n,e),this.renderTargetMasked.setSize(n,e),this.depthPass.setSize(n,e)}initialize(n,e,t){super.initialize(n,e,t),this.clearPass.initialize(n,e,t),this.depthPass.initialize(n,e,t),this.depthMaskPass.initialize(n,e,t),n.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),t!==void 0&&(this.renderTargetMasked.texture.type=t,rr(n)===wt&&un(this.renderTargetMasked.texture,wt))}},Iw=`uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH)
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
#endif
#ifdef COLORIZE
uniform vec3 color;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){float aoLinear=texture2D(aoBuffer,uv).r;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH) && __VERSION__ == 300
vec4 normalDepth[4];normalDepth[0]=textureOffset(normalDepthBuffer,uv,ivec2(0,0));normalDepth[1]=textureOffset(normalDepthBuffer,uv,ivec2(0,1));normalDepth[2]=textureOffset(normalDepthBuffer,uv,ivec2(1,0));normalDepth[3]=textureOffset(normalDepthBuffer,uv,ivec2(1,1));float dot01=dot(normalDepth[0].rgb,normalDepth[1].rgb);float dot02=dot(normalDepth[0].rgb,normalDepth[2].rgb);float dot03=dot(normalDepth[0].rgb,normalDepth[3].rgb);float minDot=min(dot01,min(dot02,dot03));float s=step(THRESHOLD,minDot);float smallestDistance=1.0;int index;for(int i=0;i<4;++i){float distance=abs(depth-normalDepth[i].a);if(distance<smallestDistance){smallestDistance=distance;index=i;}}ivec2 offsets[4];offsets[0]=ivec2(0,0);offsets[1]=ivec2(0,1);offsets[2]=ivec2(1,0);offsets[3]=ivec2(1,1);ivec2 coord=ivec2(uv*vec2(textureSize(aoBuffer,0)))+offsets[index];float aoNearest=texelFetch(aoBuffer,coord,0).r;float ao=mix(aoNearest,aoLinear,s);
#else
float ao=aoLinear;
#endif
float l=luminance(inputColor.rgb);ao=mix(ao,0.0,l*luminanceInfluence);ao=clamp(ao*intensity,0.0,1.0);
#ifdef COLORIZE
outputColor=vec4(1.0-ao*(1.0-color),inputColor.a);
#else
outputColor=vec4(vec3(1.0-ao),inputColor.a);
#endif
}`,Um=64,Nw=class extends Tn{constructor(n,e,{blendFunction:t=$e.MULTIPLY,samples:i=9,rings:a=7,normalDepthBuffer:o=null,depthAwareUpsampling:l=!0,worldDistanceThreshold:u,worldDistanceFalloff:f,worldProximityThreshold:p,worldProximityFalloff:d,distanceThreshold:m=.97,distanceFalloff:v=.03,rangeThreshold:S=5e-4,rangeFalloff:M=.001,minRadiusScale:T=.1,luminanceInfluence:y=.7,radius:g=.1825,intensity:w=1,bias:E=.025,fade:P=.01,color:C=null,resolutionScale:U=1,width:F=At.AUTO_SIZE,height:Z=At.AUTO_SIZE,resolutionX:A=F,resolutionY:D=Z}={}){super("SSAOEffect",Iw,{blendFunction:t,attributes:wi.DEPTH,defines:new Map([["THRESHOLD","0.997"]]),uniforms:new Map([["aoBuffer",new H(null)],["normalDepthBuffer",new H(o)],["luminanceInfluence",new H(y)],["color",new H(null)],["intensity",new H(w)],["scale",new H(0)]])}),this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="AO.Target",this.uniforms.get("aoBuffer").value=this.renderTarget.texture;const V=this.resolution=new At(this,A,D,U);V.addEventListener("change",$=>this.setSize(V.baseWidth,V.baseHeight)),this.camera=n,this.depthDownsamplingPass=new Jv({normalBuffer:e,resolutionScale:U}),this.depthDownsamplingPass.enabled=o===null,this.ssaoPass=new Ei(new c1(n));const ae=new df(Um,Um,Wt);ae.wrapS=ae.wrapT=Ai;const j=this.ssaoMaterial;j.normalBuffer=e,j.noiseTexture=ae,j.minRadiusScale=T,j.samples=i,j.radius=g,j.rings=a,j.fade=P,j.bias=E,j.distanceThreshold=m,j.distanceFalloff=v,j.proximityThreshold=S,j.proximityFalloff=M,u!==void 0&&(j.worldDistanceThreshold=u),f!==void 0&&(j.worldDistanceFalloff=f),p!==void 0&&(j.worldProximityThreshold=p),d!==void 0&&(j.worldProximityFalloff=d),o!==null&&(this.ssaoMaterial.normalDepthBuffer=o,this.defines.set("NORMAL_DEPTH","1")),this.depthAwareUpsampling=l,this.color=C}set mainCamera(n){this.camera=n,this.ssaoMaterial.copyCameraSettings(n)}get normalBuffer(){return this.ssaoMaterial.normalBuffer}set normalBuffer(n){this.ssaoMaterial.normalBuffer=n,this.depthDownsamplingPass.fullscreenMaterial.normalBuffer=n}getResolution(){return this.resolution}get ssaoMaterial(){return this.ssaoPass.fullscreenMaterial}getSSAOMaterial(){return this.ssaoMaterial}get samples(){return this.ssaoMaterial.samples}set samples(n){this.ssaoMaterial.samples=n}get rings(){return this.ssaoMaterial.rings}set rings(n){this.ssaoMaterial.rings=n}get radius(){return this.ssaoMaterial.radius}set radius(n){this.ssaoMaterial.radius=n}get depthAwareUpsampling(){return this.defines.has("DEPTH_AWARE_UPSAMPLING")}set depthAwareUpsampling(n){this.depthAwareUpsampling!==n&&(n?this.defines.set("DEPTH_AWARE_UPSAMPLING","1"):this.defines.delete("DEPTH_AWARE_UPSAMPLING"),this.setChanged())}isDepthAwareUpsamplingEnabled(){return this.depthAwareUpsampling}setDepthAwareUpsamplingEnabled(n){this.depthAwareUpsampling=n}get distanceScaling(){return!0}set distanceScaling(n){}get color(){return this.uniforms.get("color").value}set color(n){const e=this.uniforms,t=this.defines;n!==null?t.has("COLORIZE")?e.get("color").value.set(n):(t.set("COLORIZE","1"),e.get("color").value=new qe(n),this.setChanged()):t.has("COLORIZE")&&(t.delete("COLORIZE"),e.get("color").value=null,this.setChanged())}get luminanceInfluence(){return this.uniforms.get("luminanceInfluence").value}set luminanceInfluence(n){this.uniforms.get("luminanceInfluence").value=n}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getColor(){return this.color}setColor(n){this.color=n}setDistanceCutoff(n,e){this.ssaoMaterial.distanceThreshold=n,this.ssaoMaterial.distanceFalloff=e}setProximityCutoff(n,e){this.ssaoMaterial.proximityThreshold=n,this.ssaoMaterial.proximityFalloff=e}setDepthTexture(n,e=En){this.depthDownsamplingPass.setDepthTexture(n,e),this.ssaoMaterial.depthBuffer=n,this.ssaoMaterial.depthPacking=e}update(n,e,t){const i=this.renderTarget;this.depthDownsamplingPass.enabled&&this.depthDownsamplingPass.render(n),this.ssaoPass.render(n,null,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,a=t.height;this.ssaoMaterial.copyCameraSettings(this.camera),this.ssaoMaterial.setSize(i,a),this.renderTarget.setSize(i,a),this.depthDownsamplingPass.resolution.scale=t.scale,this.depthDownsamplingPass.setSize(n,e)}initialize(n,e,t){try{let i=this.uniforms.get("normalDepthBuffer").value;i===null&&(this.depthDownsamplingPass.initialize(n,e,t),i=this.depthDownsamplingPass.texture,this.uniforms.get("normalDepthBuffer").value=i,this.ssaoMaterial.normalDepthBuffer=i,this.defines.set("NORMAL_DEPTH","1"))}catch{this.depthDownsamplingPass.enabled=!1}}},Fw=`#ifdef TEXTURE_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
varying vec2 vUv2;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#ifdef UV_TRANSFORM
vec4 texel=texture2D(map,vUv2);
#else
vec4 texel=texture2D(map,uv);
#endif
outputColor=TEXEL;}`,Ow=`#ifdef ASPECT_CORRECTION
uniform float scale;
#else
uniform mat3 uvTransform;
#endif
varying vec2 vUv2;void mainSupport(const in vec2 uv){
#ifdef ASPECT_CORRECTION
vUv2=uv*vec2(aspect,1.0)*scale;
#else
vUv2=(uvTransform*vec3(uv,1.0)).xy;
#endif
}`,zw=class extends Tn{constructor({blendFunction:n,texture:e=null,aspectCorrection:t=!1}={}){super("TextureEffect",Fw,{blendFunction:n,defines:new Map([["TEXEL","texel"]]),uniforms:new Map([["map",new H(null)],["scale",new H(1)],["uvTransform",new H(null)]])}),this.texture=e,this.aspectCorrection=t}get texture(){return this.uniforms.get("map").value}set texture(n){const e=this.texture,t=this.uniforms,i=this.defines;e!==n&&(t.get("map").value=n,t.get("uvTransform").value=n.matrix,i.delete("TEXTURE_PRECISION_HIGH"),n!==null&&(n.matrixAutoUpdate?(i.set("UV_TRANSFORM","1"),this.setVertexShader(Ow)):(i.delete("UV_TRANSFORM"),this.setVertexShader(null)),n.type!==It&&i.set("TEXTURE_PRECISION_HIGH","1"),(e===null||e.type!==n.type||e.encoding!==n.encoding)&&this.setChanged()))}getTexture(){return this.texture}setTexture(n){this.texture=n}get aspectCorrection(){return this.defines.has("ASPECT_CORRECTION")}set aspectCorrection(n){this.aspectCorrection!==n&&(n?this.defines.set("ASPECT_CORRECTION","1"):this.defines.delete("ASPECT_CORRECTION"),this.setChanged())}get uvTransform(){const n=this.texture;return n!==null&&n.matrixAutoUpdate}set uvTransform(n){const e=this.texture;e!==null&&(e.matrixAutoUpdate=n)}setTextureSwizzleRGBA(n,e=n,t=n,i=n){const a="rgba";let o="";(n!==zs.RED||e!==zs.GREEN||t!==zs.BLUE||i!==zs.ALPHA)&&(o=[".",a[n],a[e],a[t],a[i]].join("")),this.defines.set("TEXEL","texel"+o),this.setChanged()}update(n,e,t){this.texture.matrixAutoUpdate&&this.texture.updateMatrix()}},Bw=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,kw=class extends Tn{constructor({blendFunction:n,technique:e=wl.DEFAULT,eskil:t=!1,offset:i=.5,darkness:a=.5}={}){super("VignetteEffect",Bw,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new H(i)],["darkness",new H(a)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===wl.ESKIL}set eskil(n){this.technique=n?wl.ESKIL:wl.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}};const If=ee.createContext(null),or=ee.createContext(null),Hw=Nl.memo(ee.forwardRef(({children:n,camera:e,scene:t,resolutionScale:i,enabled:a=!0,renderPriority:o=1,autoClear:l=!0,depthBuffer:u,disableNormalPass:f,stencilBuffer:p,multisampling:d=8,frameBufferType:m=ei},v)=>{const{gl:S,scene:M,camera:T,size:y}=Mn(),g=t||M,w=e||T,[E,P,C]=ee.useMemo(()=>{const A=pT(),D=new P1(S,{depthBuffer:u,stencilBuffer:p,multisampling:d>0&&A?d:0,frameBufferType:m});D.addPass(new ea(g,w));let V=null,ae=null;return f||(ae=new w1(g,w),ae.enabled=!1,D.addPass(ae),i!==void 0&&A&&(V=new Jv({normalBuffer:ae.texture,resolutionScale:i}),V.enabled=!1,D.addPass(V))),[D,ae,V]},[w,S,u,p,d,m,g,f,i]);ee.useEffect(()=>E==null?void 0:E.setSize(y.width,y.height),[E,y]),Qa((A,D)=>{if(a){const V=S.autoClear;S.autoClear=l,p&&!l&&S.clearStencil(),E.render(D),S.autoClear=V}},a?o:0);const U=ee.useRef(null),F=kE(U);ee.useLayoutEffect(()=>{const A=[];if(U.current&&F.current&&E){const D=F.current.objects;for(let V=0;V<D.length;V++){const ae=D[V];if(ae instanceof Tn){const j=[];for(;D[V]instanceof Tn;)j.push(D[V++]);V--;const $=new _1(w,...j);A.push($)}else ae instanceof nn&&A.push(ae)}for(const V of A)E==null||E.addPass(V);P&&(P.enabled=!0),C&&(C.enabled=!0)}return()=>{for(const D of A)E==null||E.removePass(D);P&&(P.enabled=!1),C&&(C.enabled=!1)}},[E,n,w,P,C,F]);const Z=ee.useMemo(()=>({composer:E,normalPass:P,downSamplingPass:C,resolutionScale:i,camera:w,scene:g}),[E,P,C,i,w,g]);return ee.useImperativeHandle(v,()=>E,[E]),Ge.jsx(or.Provider,{value:Z,children:Ge.jsx("group",{ref:U,children:n})})})),Tr=n=>typeof n=="object"&&n!=null&&"current"in n?n.current:n;let Gw=0;const Im=new WeakMap,Vw=(n,e)=>Nl.forwardRef(function({blendFunction:i=e==null?void 0:e.blendFunction,opacity:a=e==null?void 0:e.opacity,...o},l){let u=Im.get(n);if(!u){const d=`@react-three/postprocessing/${n.name}-${Gw++}`;ql({[d]:n}),Im.set(n,u=d)}const f=Mn(d=>d.camera),p=Nl.useMemo(()=>{var d,m;return[...(d=e==null?void 0:e.args)!=null?d:[],...(m=o.args)!=null?m:[{...e,...o}]]},[JSON.stringify(o)]);return Ge.jsx(u,{camera:f,"blendMode-blendFunction":i,"blendMode-opacity-value":a,...o,ref:l,args:p})}),Pl=(n,e)=>{const t=n[e];return Nl.useMemo(()=>typeof t=="number"?new ve(t,t):t?new ve(...t):new ve,[t])},eg=ee.forwardRef(function({target:e,depthTexture:t,...i},a){const o=Mn(f=>f.invalidate),{camera:l}=ee.useContext(or),u=ee.useMemo(()=>{const f=new mw(l,i),p=f.maskPass.getFullscreenMaterial();return p.maskFunction=Vs.MULTIPLY_RGB_SET_ALPHA,f},[l,i]);return ee.useLayoutEffect(()=>{if(e&&typeof e!="number"){const f=e instanceof O?new O().set(e.x,e.y,e.z):new O().set(e[0],e[1],e[2]);u.target=f}t&&u.setDepthTexture(t.texture,t.packing),o()},[e,t,u]),Ge.jsx("primitive",{ref:a,object:u,dispose:null})});ee.forwardRef(({target:n=void 0,mouse:e=!1,debug:t=void 0,manual:i=!1,smoothTime:a=.25,...o},l)=>{const u=ee.useRef(null),f=ee.useRef(null),p=ee.useRef(null),d=Mn(({scene:C})=>C),m=Mn(({pointer:C})=>C),{composer:v,camera:S}=ee.useContext(or),[M]=ee.useState(()=>new S1),[T]=ee.useState(()=>new Qv);ee.useEffect(()=>(v.addPass(M),v.addPass(T),()=>{v.removePass(M),v.removePass(T)}),[v,M,T]),ee.useEffect(()=>()=>{M.dispose(),T.dispose()},[M,T]);const[y]=ee.useState(()=>new O(0,0,0)),[g]=ee.useState(()=>new O(0,0,0)),w=ee.useCallback(async(C,U)=>(g.x=C,g.y=U,g.z=await M.readDepth(g),g.z=g.z*2-1,1-g.z>1e-7?g.unproject(S):!1),[g,M,S]),E=ee.useCallback(async(C,U=!0)=>{var F;if(n)y.set(...n);else{const{x:Z,y:A}=e?m:{x:0,y:0},D=await w(Z,A);D&&y.copy(D)}U&&((F=u.current)!=null&&F.target)&&(a>0&&C>0?Wv.damp3(u.current.target,y,a,C):u.current.target.copy(y))},[n,y,e,w,a,m]);Qa(async(C,U)=>{var F;i||E(U),f.current&&f.current.position.copy(y),p.current&&((F=u.current)!=null&&F.target)&&p.current.position.copy(u.current.target)});const P=ee.useMemo(()=>({dofRef:u,hitpoint:y,update:E}),[y,E]);return ee.useImperativeHandle(l,()=>P,[P]),Ge.jsxs(Ge.Fragment,{children:[t?jE(Ge.jsxs(Ge.Fragment,{children:[Ge.jsxs("mesh",{ref:f,children:[Ge.jsx("sphereGeometry",{args:[t,16,16]}),Ge.jsx("meshBasicMaterial",{color:"#00ff00",opacity:1,transparent:!0,depthWrite:!1})]}),Ge.jsxs("mesh",{ref:p,children:[Ge.jsx("sphereGeometry",{args:[t/2,16,16]}),Ge.jsx("meshBasicMaterial",{color:"#00ff00",opacity:.5,transparent:!0,depthWrite:!1})]})]}),d):null,Ge.jsx(eg,{ref:u,...o,target:y})]})});const Ww={fragmentShader:`

  uniform float iTime;
  uniform vec2 lensPosition;
  uniform vec2 iResolution;
  uniform vec3 colorGain;
  uniform float starPoints;
  uniform float glareSize;
  uniform float flareSize;
  uniform float flareSpeed;
  uniform float flareShape;
  uniform float haloScale;
  uniform float opacity;
  uniform bool animated;
  uniform bool anamorphic;
  uniform bool enabled;
  uniform bool secondaryGhosts;
  uniform bool starBurst;
  uniform float ghostScale;
  uniform bool aditionalStreaks;
  uniform sampler2D lensDirtTexture;
  vec2 vxtC;

  float rndf(float n){return fract(sin(n) * 43758.5453123);}float niz(float p){float fl = floor(p);float fc = fract(p);return mix(rndf(fl),rndf(fl + 1.0), fc);}
  vec3 hsv2rgb(vec3 c){vec4 k = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);}
  float satU(float x){return clamp(x, 0.,1.);}vec2 rtU(vec2 naz, float rtn){return vec2(cos(rtn) * naz.x + sin(rtn) * naz.y,cos(rtn) * naz.y - sin(rtn) * naz.x);}
  vec3 drwF(vec2 p, float intensity, float rnd, float speed, int id){float flhos = (1. / 32.) * float(id) * 0.1;float lingrad = distance(vec2(0.), p);float expg = 1. / exp(lingrad * (fract(rnd) * 0.66 + 0.33));vec3 qzTg = hsv2rgb(vec3( fract( (expg * 8.) + speed * flareSpeed + flhos), pow(1.-abs(expg*2.-1.), 0.45), 20.0 * expg * intensity));float internalStarPoints;if(anamorphic){internalStarPoints = 1.0;} else{internalStarPoints = starPoints;}float ams = length(p * flareShape * sin(internalStarPoints * atan(p.x, p.y)));float kJhg = pow(1.-satU(ams), ( anamorphic ? 100. : 12.));kJhg += satU(expg-0.9) * 3.;kJhg = pow(kJhg * expg, 8. + (1.-intensity) * 5.);if(flareSpeed > 0.0){return vec3(kJhg) * qzTg;} else{return vec3(kJhg) * flareSize * 15.;}}
  float ams2(vec3 a, vec3 b) { return abs(a.x - b.x) + abs(a.y - b.y) + abs(a.z - b.z);}vec3 satU(vec3 x){return clamp(x, vec3(0.0), vec3(1.0));}
  float glR(vec2 naz, vec2 pos, float zsi){vec2 mni;if(animated){mni = rtU(naz-pos, iTime * 0.1);} else{mni = naz-pos;}float ang = atan(mni.y, mni.x) * (anamorphic ? 1.0 : starPoints);float ams2 = length(mni);ams2 = pow(ams2, .9);float f0 = 1.0/(length(naz-pos)*(1.0/zsi*16.0)+.2);return f0+f0*(sin((ang))*.2 +.3);}
  float sdHex(vec2 p){p = abs(p);vec2 q = vec2(p.x*2.0*0.5773503, p.y + p.x*0.5773503);return dot(step(q.xy,q.yx), 1.0-q.yx);}float fpow(float x, float k){return x > k ? pow((x-k)/(1.0-k),2.0) : 0.0;}
  vec3 rHx(vec2 naz, vec2 p, float s, vec3 col){naz -= p;if (abs(naz.x) < 0.2*s && abs(naz.y) < 0.2*s){return mix(vec3(0),mix(vec3(0),col,0.1 + fpow(length(naz/s),0.1)*10.0),smoothstep(0.0,0.1,sdHex(naz*20.0/s)));}return vec3(0);}
  vec3 mLs(vec2 naz, vec2 pos){vec2 mni = naz-pos;vec2 zxMp = naz*(length(naz));float ang = atan(mni.x,mni.y);float f0 = .3/(length(naz-pos)*16.0+1.0);f0 = f0*(sin(niz(sin(ang*3.9-(animated ? iTime : 0.0) * 0.3) * starPoints))*.2 );float f1 = max(0.01-pow(length(naz+1.2*pos),1.9),.0)*7.0;float f2 = max(.9/(10.0+32.0*pow(length(zxMp+0.99*pos),2.0)),.0)*0.35;float f22 = max(.9/(11.0+32.0*pow(length(zxMp+0.85*pos),2.0)),.0)*0.23;float f23 = max(.9/(12.0+32.0*pow(length(zxMp+0.95*pos),2.0)),.0)*0.6;vec2 ztX = mix(naz,zxMp, 0.1);float f4 = max(0.01-pow(length(ztX+0.4*pos),2.9),.0)*4.02;float f42 = max(0.0-pow(length(ztX+0.45*pos),2.9),.0)*4.1;float f43 = max(0.01-pow(length(ztX+0.5*pos),2.9),.0)*4.6;ztX = mix(naz,zxMp,-.4);float f5 = max(0.01-pow(length(ztX+0.1*pos),5.5),.0)*2.0;float f52 = max(0.01-pow(length(ztX+0.2*pos),5.5),.0)*2.0;float f53 = max(0.01-pow(length(ztX+0.1*pos),5.5),.0)*2.0;ztX = mix(naz,zxMp, 2.1);float f6 = max(0.01-pow(length(ztX-0.3*pos),1.61),.0)*3.159;float f62 = max(0.01-pow(length(ztX-0.325*pos),1.614),.0)*3.14;float f63 = max(0.01-pow(length(ztX-0.389*pos),1.623),.0)*3.12;vec3 c = vec3(glR(naz,pos, glareSize));vec2 prot;if(animated){prot = rtU(naz - pos, (iTime * 0.1));} else if(anamorphic){prot = rtU(naz - pos, 1.570796);} else {prot = naz - pos;}c += drwF(prot, (anamorphic ? flareSize * 10. : flareSize), 0.1, iTime, 1);c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;c = c*1.3 * vec3(length(zxMp)+.09);c+=vec3(f0);return c;}
  vec3 cc(vec3 clr, float fct,float fct2){float w = clr.x+clr.y+clr.z;return mix(clr,vec3(w)*fct,w*fct2);}float rnd(vec2 p){float f = fract(sin(dot(p, vec2(12.1234, 72.8392) )*45123.2));return f;}float rnd(float w){float f = fract(sin(w)*1000.);return f;}
  float rShp(vec2 p, int N){float f;float a=atan(p.x,p.y)+.2;float b=6.28319/float(N);f=smoothstep(.5,.51, cos(floor(.5+a/b)*b-a)*length(p.xy)* 2.0  -ghostScale);return f;}
  vec3 drC(vec2 p, float zsi, float dCy, vec3 clr, vec3 clr2, float ams2, vec2 esom){float l = length(p + esom*(ams2*2.))+zsi/2.;float l2 = length(p + esom*(ams2*4.))+zsi/3.;float c = max(0.01-pow(length(p + esom*ams2), zsi*ghostScale), 0.0)*10.;float c1 = max(0.001-pow(l-0.3, 1./40.)+sin(l*20.), 0.0)*3.;float c2 =  max(0.09/pow(length(p-esom*ams2/.5)*1., .95), 0.0)/20.;float s = max(0.02-pow(rShp(p*5. + esom*ams2*5. + dCy, 6) , 1.), 0.0)*1.5;clr = cos(vec3(0.44, .24, .2)*8. + ams2*4.)*0.5+.5;vec3 f = c*clr;f += c1*clr;f += c2*clr;f +=  s*clr;return f-0.01;}
  vec4 geLC(float x){return vec4(vec3(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(vec3(0., 0., 0.),vec3(0., 0., 0.), smoothstep(0.0, 0.063, x)),vec3(0., 0., 0.), smoothstep(0.063, 0.125, x)),vec3(0.0, 0., 0.), smoothstep(0.125, 0.188, x)),vec3(0.188, 0.131, 0.116), smoothstep(0.188, 0.227, x)),vec3(0.31, 0.204, 0.537), smoothstep(0.227, 0.251, x)),vec3(0.192, 0.106, 0.286), smoothstep(0.251, 0.314, x)),vec3(0.102, 0.008, 0.341), smoothstep(0.314, 0.392, x)),vec3(0.086, 0.0, 0.141), smoothstep(0.392, 0.502, x)),vec3(1.0, 0.31, 0.0), smoothstep(0.502, 0.604, x)),vec3(.1, 0.1, 0.1), smoothstep(0.604, 0.643, x)),vec3(1.0, 0.929, 0.0), smoothstep(0.643, 0.761, x)),vec3(1.0, 0.086, 0.424), smoothstep(0.761, 0.847, x)),vec3(1.0, 0.49, 0.0), smoothstep(0.847, 0.89, x)),vec3(0.945, 0.275, 0.475), smoothstep(0.89, 0.941, x)),vec3(0.251, 0.275, 0.796), smoothstep(0.941, 1.0, x))),1.0);}
  float diTN(vec2 p){vec2 f = fract(p);f = (f * f) * (3.0 - (2.0 * f));float n = dot(floor(p), vec2(1.0, 157.0));vec4 a = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);return mix(mix(a.x, a.y, f.x), mix(a.z, a.w, f.x), f.y);} 
  float fbm(vec2 p){const mat2 m = mat2(0.80, -0.60, 0.60, 0.80);float f = 0.0;f += 0.5000*diTN(p); p = m*p*2.02;f += 0.2500*diTN(p); p = m*p*2.03;f += 0.1250*diTN(p); p = m*p*2.01;f += 0.0625*diTN(p);return f/0.9375;} 
  vec4 geLS(vec2 p){vec2 pp = (p - vec2(0.5)) * 2.0;float a = atan(pp.y, pp.x);vec4 cp = vec4(sin(a * 1.0), length(pp), sin(a * 13.0), sin(a * 53.0));float d = sin(clamp(pow(length(vec2(0.5) - p) * 0.5 + haloScale /2., 5.0), 0.0, 1.0) * 3.14159);vec3 c = vec3(d) * vec3(fbm(cp.xy * 16.0) * fbm(cp.zw * 9.0) * max(max(max(max(0.5, sin(a * 1.0)), sin(a * 3.0) * 0.8), sin(a * 7.0) * 0.8), sin(a * 9.0) * 10.6));c *= vec3(mix(2.0, (sin(length(pp.xy) * 256.0) * 0.5) + 0.5, sin((clamp((length(pp.xy) - 0.875) / 0.1, 0.0, 1.0) + 0.0) * 2.0 * 3.14159) * 1.5) + 0.5) * 0.3275;return vec4(vec3(c * 1.0), d);}
  vec4 geLD(vec2 p){p.xy += vec2(fbm(p.yx * 3.0), fbm(p.yx * 2.0)) * 0.0825;vec3 o = vec3(mix(0.125, 0.25, max(max(smoothstep(0.1, 0.0, length(p - vec2(0.25))),smoothstep(0.4, 0.0, length(p - vec2(0.75)))),smoothstep(0.8, 0.0, length(p - vec2(0.875, 0.125))))));o += vec3(max(fbm(p * 1.0) - 0.5, 0.0)) * 0.5;o += vec3(max(fbm(p * 2.0) - 0.5, 0.0)) * 0.5;o += vec3(max(fbm(p * 4.0) - 0.5, 0.0)) * 0.25;o += vec3(max(fbm(p * 8.0) - 0.75, 0.0)) * 1.0;o += vec3(max(fbm(p * 16.0) - 0.75, 0.0)) * 0.75;o += vec3(max(fbm(p * 64.0) - 0.75, 0.0)) * 0.5;return vec4(clamp(o, vec3(0.15), vec3(1.0)), 1.0);}
  vec4 txL(sampler2D tex, vec2 xtC){if(((xtC.x < 0.) || (xtC.y < 0.)) || ((xtC.x > 1.) || (xtC.y > 1.))){return vec4(0.0);}else{return texture(tex, xtC); }}
  vec4 txD(sampler2D tex, vec2 xtC, vec2 dir, vec3 ditn) {return vec4(txL(tex, (xtC + (dir * ditn.r))).r,txL(tex, (xtC + (dir * ditn.g))).g,txL(tex, (xtC + (dir * ditn.b))).b,1.0);}
  vec4 strB(){vec2 aspXtc = vec2(1.0) - (((vxtC - vec2(0.5)) * vec2(1.0)) + vec2(0.5)); vec2 xtC = vec2(1.0) - vxtC; vec2 ghvc = (vec2(0.5) - xtC) * 0.3 - lensPosition; vec2 ghNm = normalize(ghvc * vec2(1.0)) * vec2(1.0);vec2 haloVec = normalize(ghvc) * 0.6;vec2 hlNm = ghNm * 0.6;vec2 texelSize = vec2(1.0) / vec2(iResolution.xy);vec3 ditn = vec3(-(texelSize.x * 1.5), 0.2, texelSize.x * 1.5);vec4 c = vec4(0.0);for (int i = 0; i < 8; i++) {vec2 offset = xtC + (ghvc * float(i));c += txD(lensDirtTexture, offset, ghNm, ditn) * pow(max(0.0, 1.0 - (length(vec2(0.5) - offset) / length(vec2(0.5)))), 10.0);}vec2 uyTrz = xtC + hlNm; return (c * geLC((length(vec2(0.5) - aspXtc) / length(vec2(haloScale))))) +(txD(lensDirtTexture, uyTrz, ghNm, ditn) * pow(max(0.0, 1.0 - (length(vec2(0.5) - uyTrz) / length(vec2(0.5)))), 10.0));} 
  void mainImage(vec4 v,vec2 r,out vec4 i){vec2 g=r-.5;g.y*=iResolution.y/iResolution.x;vec2 l=lensPosition*.5;l.y*=iResolution.y/iResolution.x;vec3 f=mLs(g,l)*20.*colorGain/256.;if(aditionalStreaks){vec3 o=vec3(.9,.2,.1),p=vec3(.3,.1,.9);for(float n=0.;n<10.;n++)f+=drC(g,pow(rnd(n*2e3)*2.8,.1)+1.41,0.,o+n,p+n,rnd(n*20.)*3.+.2-.5,lensPosition);}if(secondaryGhosts){vec3 n=vec3(0);n+=rHx(g,-lensPosition*.25,ghostScale*1.4,vec3(.25,.35,0));n+=rHx(g,lensPosition*.25,ghostScale*.5,vec3(1,.5,.5));n+=rHx(g,lensPosition*.1,ghostScale*1.6,vec3(1));n+=rHx(g,lensPosition*1.8,ghostScale*2.,vec3(0,.5,.75));n+=rHx(g,lensPosition*1.25,ghostScale*.8,vec3(1,1,.5));n+=rHx(g,-lensPosition*1.25,ghostScale*5.,vec3(.5,.5,.25));n+=fpow(1.-abs(distance(lensPosition*.8,g)-.7),.985)*colorGain/2100.;f+=n;}if(starBurst){vxtC=g+.5;vec4 n=geLD(g);float o=1.-clamp(0.5,0.,.5)*2.;n+=mix(n,pow(n*2.,vec4(2))*.5,o);float s=(g.x+g.y)*(1./6.);vec2 d=mat2(cos(s),-sin(s),sin(s),cos(s))*vxtC;n+=geLS(d)*2.;f+=clamp(n.xyz*strB().xyz,.01,1.);}i=enabled?vec4(mix(f,vec3(0),opacity)+v.xyz,v.w):vec4(v);}
`};class Xw extends Tn{constructor({blendFunction:e=$e.NORMAL,enabled:t=!0,glareSize:i=.2,lensPosition:a=[.01,.01],iResolution:o=[0,0],starPoints:l=6,flareSize:u=.01,flareSpeed:f=.01,flareShape:p=.01,animated:d=!0,anamorphic:m=!1,colorGain:v=new qe(20,20,20),lensDirtTexture:S=null,haloScale:M=.5,secondaryGhosts:T=!0,aditionalStreaks:y=!0,ghostScale:g=0,opacity:w=1,starBurst:E=!1}={}){super("LensFlareEffect",Ww.fragmentShader,{blendFunction:e,uniforms:new Map([["enabled",new H(t)],["glareSize",new H(i)],["lensPosition",new H(a)],["iTime",new H(0)],["iResolution",new H(o)],["starPoints",new H(l)],["flareSize",new H(u)],["flareSpeed",new H(f)],["flareShape",new H(p)],["animated",new H(d)],["anamorphic",new H(m)],["colorGain",new H(v)],["lensDirtTexture",new H(S)],["haloScale",new H(M)],["secondaryGhosts",new H(T)],["aditionalStreaks",new H(y)],["ghostScale",new H(g)],["starBurst",new H(E)],["opacity",new H(w)]])})}update(e,t,i){const a=this.uniforms.get("iTime");a&&(a.value+=i)}}ee.forwardRef(({position:n=new O(-25,6,-60),followMouse:e=!1,smoothTime:t=.07,...i},a)=>{const o=Mn(({viewport:S})=>S),l=Mn(({raycaster:S})=>S),u=Mn(({pointer:S})=>S),{scene:f,camera:p}=ee.useContext(or),[d]=ee.useState(()=>new O),[m]=ee.useState(()=>new ve),v=ee.useMemo(()=>new Xw(i),[i]);return Qa((S,M)=>{var T,y,g;const w=v.uniforms.get("lensPosition"),E=v.uniforms.get("opacity");if(!w||!E)return;let P=1;if(e)w.value.x=u.x,w.value.y=u.y,P=0;else{if(d.copy(n).project(p),d.z>1)return;w.value.x=d.x,w.value.y=d.y,m.set(d.x,d.y),l.setFromCamera(m,p);const C=l.intersectObjects(f.children,!0),{object:U}=C[0];U&&(((T=U.userData)==null?void 0:T.lensflare)==="no-occlusion"?P=0:U instanceof hi&&(((g=(y=U.material.uniforms)==null?void 0:y._transmission)==null?void 0:g.value)>.2||U.material._transmission&&U.material._transmission>.2?P=.2:U.material.transparent&&(P=U.material.opacity)))}Wv.damp(E,"value",P,t,M)}),ee.useEffect(()=>{const S=v.uniforms.get("iResolution");S&&(S.value.x=o.width,S.value.y=o.height)},[v,o]),Ge.jsx("primitive",{ref:a,object:v,dispose:null})});ee.forwardRef(function({blendFunction:e=$e.NORMAL},t){const i=ee.useMemo(()=>new dw(e),[e]);return Ge.jsx("primitive",{ref:t,object:i,dispose:null})});ee.forwardRef(function({active:e=!0,...t},i){const a=Mn(d=>d.invalidate),o=Pl(t,"delay"),l=Pl(t,"duration"),u=Pl(t,"strength"),f=Pl(t,"chromaticAberrationOffset"),p=ee.useMemo(()=>new xw({...t,delay:o,duration:l,strength:u,chromaticAberrationOffset:f}),[o,l,t,u,f]);return ee.useLayoutEffect(()=>{p.mode=e?t.mode||Xr.SPORADIC:Xr.DISABLED,a()},[e,p,a,t.mode]),ee.useEffect(()=>()=>{p.dispose()},[p]),Ge.jsx("primitive",{ref:i,object:p,dispose:null})});ee.forwardRef(function(e,t){const{camera:i}=ee.useContext(or),a=ee.useMemo(()=>new yw(i,Tr(e.sun),e),[i,e]);return ee.useLayoutEffect(()=>void(a.lightSource=Tr(e.sun)),[a,e.sun]),Ge.jsx("primitive",{ref:t,object:a,dispose:null})});ee.forwardRef(function({size:e,...t},i){const a=Mn(l=>l.invalidate),o=ee.useMemo(()=>new Mw(t),[t]);return ee.useLayoutEffect(()=>{e&&o.setSize(e.width,e.height),a()},[o,e]),Ge.jsx("primitive",{ref:i,object:o,dispose:null})});ee.forwardRef(function({selection:e=[],selectionLayer:t=10,blendFunction:i,patternTexture:a,edgeStrength:o,pulseSpeed:l,visibleEdgeColor:u,hiddenEdgeColor:f,width:p,height:d,kernelSize:m,blur:v,xRay:S,...M},T){const y=Mn(C=>C.invalidate),{scene:g,camera:w}=ee.useContext(or),E=ee.useMemo(()=>new bw(g,w,{blendFunction:i,patternTexture:a,edgeStrength:o,pulseSpeed:l,visibleEdgeColor:u,hiddenEdgeColor:f,width:p,height:d,kernelSize:m,blur:v,xRay:S,...M}),[i,v,w,o,d,f,m,a,l,g,u,p,S]),P=ee.useContext(If);return ee.useEffect(()=>{if(!P&&e)return E.selection.set(Array.isArray(e)?e.map(Tr):[Tr(e)]),y(),()=>{E.selection.clear(),y()}},[E,e,P,y]),ee.useEffect(()=>{E.selectionLayer=t,y()},[E,y,t]),ee.useRef(),ee.useEffect(()=>{var C;if(P&&P.enabled&&(C=P.selected)!=null&&C.length)return E.selection.set(P.selected),y(),()=>{E.selection.clear(),y()}},[P,E.selection,y]),Ge.jsx("primitive",{ref:T,object:E})});ee.forwardRef(function({granularity:e=5},t){const i=ee.useMemo(()=>new Lw(e),[e]);return Ge.jsx("primitive",{ref:t,object:i,dispose:null})});const jw=(n,e)=>n.layers.enable(e.selection.layer),Yw=(n,e)=>n.layers.disable(e.selection.layer);ee.forwardRef(function({selection:e=[],selectionLayer:t=10,lights:i=[],luminanceThreshold:a,luminanceSmoothing:o,intensity:l,width:u,height:f,kernelSize:p,mipmapBlur:d,...m},v){i.length===0&&console.warn("SelectiveBloom requires lights to work.");const S=Mn(w=>w.invalidate),{scene:M,camera:T}=ee.useContext(or),y=ee.useMemo(()=>new Uw(M,T,{blendFunction:$e.ADD,luminanceThreshold:a,luminanceSmoothing:o,intensity:l,width:u,height:f,kernelSize:p,mipmapBlur:d,...m}),[M,T,a,o,l,u,f,p,d,m]),g=ee.useContext(If);return ee.useEffect(()=>{if(!g&&e)return y.selection.set(Array.isArray(e)?e.map(Tr):[Tr(e)]),S(),()=>{y.selection.clear(),S()}},[y,e,g,S]),ee.useEffect(()=>{y.selection.layer=t,S()},[y,S,t]),ee.useEffect(()=>{if(i&&i.length>0)return i.forEach(w=>jw(Tr(w),y)),S(),()=>{i.forEach(w=>Yw(Tr(w),y)),S()}},[y,S,i,t]),ee.useEffect(()=>{var w;if(g&&g.enabled&&(w=g.selected)!=null&&w.length)return y.selection.set(g.selected),S(),()=>{y.selection.clear(),S()}},[g,y.selection,S]),Ge.jsx("primitive",{ref:v,object:y,dispose:null})});ee.forwardRef(function(e,t){const{camera:i,normalPass:a,downSamplingPass:o,resolutionScale:l}=ee.useContext(or),u=ee.useMemo(()=>a===null&&o===null?(console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."),{}):new Nw(i,a&&!o?a.texture:null,{blendFunction:$e.MULTIPLY,samples:30,rings:4,distanceThreshold:1,distanceFalloff:0,rangeThreshold:.5,rangeFalloff:.1,luminanceInfluence:.9,radius:20,bias:.5,intensity:1,color:void 0,normalDepthBuffer:o?o.texture:null,resolutionScale:l??1,depthAwareUpsampling:!0,...e}),[i,a,e]);return Ge.jsx("primitive",{ref:t,object:u,dispose:null})});ee.forwardRef(function({textureSrc:e,texture:t,...i},a){const o=Js(Yl,e);ee.useLayoutEffect(()=>{o.encoding=Ti,o.wrapS=o.wrapT=Ai},[o]);const l=ee.useMemo(()=>new zw({...i,texture:o||t}),[i,o,t]);return Ge.jsx("primitive",{ref:a,object:l,dispose:null})});const qw=Vw(kw);ee.forwardRef(function({lut:e,tetrahedralInterpolation:t,...i},a){const o=ee.useMemo(()=>new Rw(e,i),[e,i]),l=Mn(u=>u.invalidate);return ee.useLayoutEffect(()=>{t&&(o.tetrahedralInterpolation=t),e&&(o.lut=e),l()},[o,l,e,t]),Ge.jsx("primitive",{ref:a,object:o,dispose:null})});const Zw=`
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`;class Kw extends Tn{constructor({characters:e=" .:,'-^=*+?!|0#X%WM@",fontSize:t=54,cellSize:i=16,color:a="#ffffff",invert:o=!1}={}){const l=new Map([["uCharacters",new H(new Xt)],["uCellSize",new H(i)],["uCharactersCount",new H(e.length)],["uColor",new H(new qe(a))],["uInvert",new H(o)]]);super("ASCIIEffect",Zw,{uniforms:l});const u=this.uniforms.get("uCharacters");u&&(u.value=this.createCharactersTexture(e,t))}createCharactersTexture(e,t){const i=document.createElement("canvas"),a=1024,o=16,l=a/o;i.width=i.height=a;const u=new sE(i,void 0,Ai,Ai,at,at),f=i.getContext("2d");if(!f)throw new Error("Context not available");f.clearRect(0,0,a,a),f.font=`${t}px arial`,f.textAlign="center",f.textBaseline="middle",f.fillStyle="#fff";for(let p=0;p<e.length;p++){const d=e[p],m=p%o,v=Math.floor(p/o);f.fillText(d,m*l+l/2,v*l+l/2)}return u.needsUpdate=!0,u}}ee.forwardRef(({characters:n=" .:,'-^=*+?!|0#X%WM@",fontSize:e=54,cellSize:t=16,color:i="#ffffff",invert:a=!1},o)=>{const l=ee.useMemo(()=>new Kw({characters:n,fontSize:e,cellSize:t,color:i,invert:a}),[n,e,t,i,a]);return Ge.jsx("primitive",{ref:o,object:l})});var Qw=`#define GLSLIFY 1
uniform float blur;uniform float blurSharpness;uniform int blurKernel;vec3 denoise(vec3 center,sampler2D tex,vec2 uv,vec2 invTexSize,float blur,float blurSharpness,int blurKernel){vec3 color;float total;vec3 col;float weight;for(int x=-blurKernel;x<=blurKernel;x++){for(int y=-blurKernel;y<=blurKernel;y++){col=textureLod(tex,uv+vec2(x,y)*invTexSize,0.).rgb;weight=1.0-abs(dot(col-center,vec3(0.25)));weight=pow(weight,blurSharpness);color+=col*weight;total+=weight;}}return color/total;}`,Jw=`#define GLSLIFY 1
#define MODE_DEFAULT 0
#define MODE_REFLECTIONS 1
#define MODE_RAW_REFLECTION 2
#define MODE_BLURRED_REFLECTIONS 3
#define MODE_INPUT 4
#define MODE_BLUR_MIX 5
#define FLOAT_EPSILON 0.00001
uniform sampler2D inputTexture;uniform sampler2D reflectionsTexture;uniform float samples;
#include <boxBlur>
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 reflectionsTexel=texture2D(reflectionsTexture,vUv);ivec2 size=textureSize(reflectionsTexture,0);vec2 invTexSize=1./vec2(size.x,size.y);vec3 reflectionClr=reflectionsTexel.xyz;if(blur>FLOAT_EPSILON){vec3 blurredReflectionsColor=denoise(reflectionsTexel.rgb,reflectionsTexture,vUv,invTexSize,blur,blurSharpness,blurKernel);reflectionClr=mix(reflectionClr,blurredReflectionsColor.rgb,blur);}
#if RENDER_MODE == MODE_DEFAULT
outputColor=vec4(inputColor.rgb+reflectionClr,1.0);
#endif
#if RENDER_MODE == MODE_REFLECTIONS
outputColor=vec4(reflectionClr,1.0);
#endif
#if RENDER_MODE == MODE_RAW_REFLECTION
outputColor=vec4(reflectionsTexel.xyz,1.0);
#endif
#if RENDER_MODE == MODE_BLURRED_REFLECTIONS
outputColor=vec4(blurredReflectionsTexel.xyz,1.0);
#endif
#if RENDER_MODE == MODE_INPUT
outputColor=vec4(inputColor.xyz,1.0);
#endif
#if RENDER_MODE == MODE_BLUR_MIX
outputColor=vec4(vec3(blur),1.0);
#endif
}`,tg=`#define GLSLIFY 1
vec3 getViewPosition(const float depth){float clipW=_projectionMatrix[2][3]*depth+_projectionMatrix[3][3];vec4 clipPosition=vec4((vec3(vUv,depth)-0.5)*2.0,1.0);clipPosition*=clipW;return(_inverseProjectionMatrix*clipPosition).xyz;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 screenSpaceToWorldSpace(const vec2 uv,const float depth){vec4 ndc=vec4((uv.x-0.5)*2.0,(uv.y-0.5)*2.0,(depth-0.5)*2.0,1.0);vec4 clip=_inverseProjectionMatrix*ndc;vec4 view=cameraMatrixWorld*(clip/clip.w);return view.xyz;}
#define Scale (vec3(0.8, 0.8, 0.8))
#define K (19.19)
vec3 hash(vec3 a){a=fract(a*Scale);a+=dot(a,a.yxz+K);return fract((a.xxy+a.yxx)*a.zyx);}float fresnel_dielectric_cos(float cosi,float eta){float c=abs(cosi);float g=eta*eta-1.0+c*c;float result;if(g>0.0){g=sqrt(g);float A=(g-c)/(g+c);float B=(c*(g+c)-1.0)/(c*(g-c)+1.0);result=0.5*A*A*(1.0+B*B);}else{result=1.0;}return result;}float fresnel_dielectric(vec3 Incoming,vec3 Normal,float eta){float cosine=dot(Incoming,Normal);return min(1.0,5.0*fresnel_dielectric_cos(cosine,eta));}`,$w=`#define GLSLIFY 1
#define INV_EULER 0.36787944117144233
alpha=velocityDisocclusion<FLOAT_EPSILON ?(alpha+0.0075): 0.0;alpha=clamp(alpha,0.0,1.0);bool needsBlur=!didReproject||velocityDisocclusion>0.5;
#ifdef boxBlur
if(needsBlur)inputColor=boxBlurredColor;
#endif
if(alpha==1.0){outputColor=accumulatedColor;}else{float m=mix(alpha,1.0,blend);if(needsBlur)m=0.0;outputColor=accumulatedColor*m+inputColor*(1.0-m);}`;class e2 extends pt{constructor(){super({type:"MRTMaterial",defines:{USE_UV:"",TEMPORAL_RESOLVE:""},uniforms:{opacity:new H(1),normalMap:new H(null),normalScale:new H(new ve(1,1)),uvTransform:new H(new dt),roughness:new H(1),roughnessMap:new H(null)},vertexShader:`
                #ifdef USE_MRT
                 varying vec2 vHighPrecisionZW;
                #endif
                #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                #include <common>
                #include <uv_pars_vertex>
                #include <displacementmap_pars_vertex>
                #include <normal_pars_vertex>
                #include <morphtarget_pars_vertex>
                #include <skinning_pars_vertex>
                #include <logdepthbuf_pars_vertex>
                #include <clipping_planes_pars_vertex>
                #ifdef USE_UV
                  ${Kr.replace(/\D+/g,"")>=151?"uniform mat3 uvTransform;":""}
                #endif
                void main() {
                    #include <uv_vertex>
                    #include <beginnormal_vertex>
                    #include <morphnormal_vertex>
                    #include <skinbase_vertex>
                    #include <skinnormal_vertex>
                    #include <defaultnormal_vertex>
                    #include <normal_vertex>
                    #include <begin_vertex>
                    #include <morphtarget_vertex>
                    #include <skinning_vertex>
                    #include <displacementmap_vertex>
                    #include <project_vertex>
                    #include <logdepthbuf_vertex>
                    #include <clipping_planes_vertex>
                    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                        vViewPosition = - mvPosition.xyz;
                    #endif
                    #ifdef USE_MRT
                        vHighPrecisionZW = gl_Position.zw;
                    #endif
                    #ifdef USE_UV
                        vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
                    #endif
                }
            `,fragmentShader:`
                 #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                #include <packing>
                #include <uv_pars_fragment>
                #include <normal_pars_fragment>
                #include <bumpmap_pars_fragment>
                #include <normalmap_pars_fragment>
                #include <logdepthbuf_pars_fragment>
                #include <clipping_planes_pars_fragment>
                #include <roughnessmap_pars_fragment>

                #ifdef USE_MRT
                layout(location = 0) out vec4 gNormal;
                layout(location = 1) out vec4 gDepth;

                varying vec2 vHighPrecisionZW;
                #endif
                uniform float roughness;
                void main() {
                    #include <clipping_planes_fragment>
                    #include <logdepthbuf_fragment>
                    #include <normal_fragment_begin>
                    #include <normal_fragment_maps>

                    float roughnessFactor = roughness;

                    if(roughness > 10.0e9){
                        roughnessFactor = 1.;
                    }else{
                        #ifdef useRoughnessMap
                            vec4 texelRoughness = texture2D( roughnessMap, vUv );
                            // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
                            roughnessFactor *= texelRoughness.g;
                        #endif
                    }

                    vec3 normalColor = packNormalToRGB( normal );
                    #ifdef USE_MRT
                        float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
                        vec4 depthColor = packDepthToRGBA( fragCoordZ );
                        gNormal = vec4( normalColor, roughnessFactor );
                        gDepth = depthColor;
                    #else
                        gl_FragColor = vec4(normalColor, roughnessFactor);
                    #endif
                }
            `,toneMapped:!1}),this.normalMapType=Sf,this.normalScale=new ve(1,1),Object.defineProperty(this,"glslVersion",{get(){return"USE_MRT"in this.defines?tf:null},set(e){}})}}var t2=`#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,n2=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D inputTexture;uniform sampler2D accumulatedTexture;uniform sampler2D normalTexture;uniform sampler2D depthTexture;uniform sampler2D envMap;uniform mat4 _projectionMatrix;uniform mat4 _inverseProjectionMatrix;uniform mat4 cameraMatrixWorld;uniform float cameraNear;uniform float cameraFar;uniform float rayDistance;uniform float intensity;uniform float maxDepthDifference;uniform float roughnessFade;uniform float maxRoughness;uniform float fade;uniform float thickness;uniform float ior;uniform float samples;uniform float jitter;uniform float jitterRoughness;
#define INVALID_RAY_COORDS vec2(-1.0);
#define EARLY_OUT_COLOR vec4(0.0, 0.0, 0.0, 1.0)
#define FLOAT_EPSILON 0.00001
float nearMinusFar;float nearMulFar;float farMinusNear;
#include <packing>
#include <helperFunctions>
vec2 RayMarch(vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference);vec2 BinarySearch(in vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference);float fastGetViewZ(const in float depth);vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness);void main(){vec4 depthTexel=textureLod(depthTexture,vUv,0.0);if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON){gl_FragColor=EARLY_OUT_COLOR;return;}float unpackedDepth=unpackRGBAToDepth(depthTexel);vec4 normalTexel=textureLod(normalTexture,vUv,0.0);float roughness=normalTexel.a;float specular=1.0-roughness;nearMinusFar=cameraNear-cameraFar;nearMulFar=cameraNear*cameraFar;farMinusNear=cameraFar-cameraNear;normalTexel.rgb=unpackRGBToNormal(normalTexel.rgb);float depth=fastGetViewZ(unpackedDepth);vec3 viewPos=getViewPosition(depth);vec3 viewDir=normalize(viewPos);vec3 viewNormal=normalTexel.xyz;vec3 worldPos=screenSpaceToWorldSpace(vUv,unpackedDepth);vec3 jitt=vec3(0.0);if(jitterRoughness!=0.0||jitter!=0.0){vec3 randomJitter=hash(50.0*samples*worldPos)-0.5;float spread=((2.0-specular)+roughness*jitterRoughness);float jitterMix=jitter*0.25+jitterRoughness*roughness;if(jitterMix>1.0)jitterMix=1.0;jitt=mix(vec3(0.0),randomJitter*spread,jitterMix);}viewNormal+=jitt;float fresnelFactor=fresnel_dielectric(viewDir,viewNormal,ior);vec3 iblRadiance=getIBLRadiance(-viewDir,viewNormal,0.)*fresnelFactor;float lastFrameAlpha=textureLod(accumulatedTexture,vUv,0.0).a;if(roughness>maxRoughness||(roughness>1.0-FLOAT_EPSILON&&roughnessFade>1.0-FLOAT_EPSILON)){gl_FragColor=vec4(iblRadiance,lastFrameAlpha);return;}vec3 reflected=reflect(viewDir,viewNormal);vec3 rayDir=reflected*-viewPos.z;vec3 hitPos=viewPos;float rayHitDepthDifference;vec2 coords=RayMarch(rayDir,hitPos,rayHitDepthDifference);if(coords.x==-1.0){gl_FragColor=vec4(iblRadiance,lastFrameAlpha);return;}vec4 SSRTexel=textureLod(inputTexture,coords.xy,0.0);vec4 SSRTexelReflected=textureLod(accumulatedTexture,coords.xy,0.0);vec3 SSR=SSRTexel.rgb+SSRTexelReflected.rgb;float roughnessFactor=mix(specular,1.0,max(0.0,1.0-roughnessFade));vec2 coordsNDC=(coords.xy*2.0-1.0);float screenFade=0.1;float maxDimension=min(1.0,max(abs(coordsNDC.x),abs(coordsNDC.y)));float reflectionIntensity=1.0-(max(0.0,maxDimension-screenFade)/(1.0-screenFade));reflectionIntensity=max(0.,reflectionIntensity);vec3 finalSSR=mix(iblRadiance,SSR,reflectionIntensity)*roughnessFactor;if(fade!=0.0){vec3 hitWorldPos=screenSpaceToWorldSpace(coords,rayHitDepthDifference);float reflectionDistance=distance(hitWorldPos,worldPos)+1.0;float opacity=1.0/(reflectionDistance*fade*0.1);if(opacity>1.0)opacity=1.0;finalSSR*=opacity;}finalSSR*=fresnelFactor*intensity;finalSSR=min(vec3(1.0),finalSSR);float alpha=hitPos.z==1.0 ? 1.0 : SSRTexelReflected.a;alpha=min(lastFrameAlpha,alpha);gl_FragColor=vec4(finalSSR,alpha);}vec2 RayMarch(vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference){dir=normalize(dir);dir*=rayDistance/float(steps);float depth;vec4 projectedCoord;vec4 lastProjectedCoord;float unpackedDepth;vec4 depthTexel;for(int i=0;i<steps;i++){hitPos+=dir;projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;
#ifndef missedRays
if(projectedCoord.x<0.0||projectedCoord.x>1.0||projectedCoord.y<0.0||projectedCoord.y>1.0){return INVALID_RAY_COORDS;}
#endif
depthTexel=textureLod(depthTexture,projectedCoord.xy,0.0);unpackedDepth=unpackRGBAToDepth(depthTexel);depth=fastGetViewZ(unpackedDepth);rayHitDepthDifference=depth-hitPos.z;if(rayHitDepthDifference>=0.0&&rayHitDepthDifference<thickness){
#if refineSteps == 0
if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON)return INVALID_RAY_COORDS;
#else
return BinarySearch(dir,hitPos,rayHitDepthDifference);
#endif
}
#ifndef missedRays
if(hitPos.z>0.0){return INVALID_RAY_COORDS;}
#endif
lastProjectedCoord=projectedCoord;}hitPos.z=1.0;
#ifndef missedRays
return INVALID_RAY_COORDS;
#endif
rayHitDepthDifference=unpackedDepth;return projectedCoord.xy;}vec2 BinarySearch(in vec3 dir,inout vec3 hitPos,inout float rayHitDepthDifference){float depth;vec4 projectedCoord;vec2 lastMinProjectedCoordXY;float unpackedDepth;vec4 depthTexel;for(int i=0;i<refineSteps;i++){projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;depthTexel=textureLod(depthTexture,projectedCoord.xy,0.0);unpackedDepth=unpackRGBAToDepth(depthTexel);depth=fastGetViewZ(unpackedDepth);rayHitDepthDifference=depth-hitPos.z;dir*=0.5;if(rayHitDepthDifference>0.0){hitPos-=dir;}else{hitPos+=dir;}}if(dot(depthTexel.rgb,depthTexel.rgb)<FLOAT_EPSILON)return INVALID_RAY_COORDS;if(abs(rayHitDepthDifference)>maxDepthDifference)return INVALID_RAY_COORDS;projectedCoord=_projectionMatrix*vec4(hitPos,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;rayHitDepthDifference=unpackedDepth;return projectedCoord.xy;}float fastGetViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return nearMulFar/(farMinusNear*depth-cameraFar);
#else
return depth*nearMinusFar-cameraNear;
#endif
}
#include <common>
#include <cube_uv_reflection_fragment>
vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){
#if defined(ENVMAP_TYPE_CUBE_UV)
vec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*intensity;
#else
return vec3(0.0);
#endif
}`;class i2 extends pt{constructor(){super({type:"ReflectionsMaterial",uniforms:{inputTexture:new H(null),accumulatedTexture:new H(null),normalTexture:new H(null),depthTexture:new H(null),_projectionMatrix:new H(new Ze),_inverseProjectionMatrix:new H(new Ze),cameraMatrixWorld:new H(new Ze),cameraNear:new H(0),cameraFar:new H(0),rayDistance:new H(0),intensity:new H(0),roughnessFade:new H(0),fade:new H(0),thickness:new H(0),ior:new H(0),maxDepthDifference:new H(0),jitter:new H(0),jitterRoughness:new H(0),maxRoughness:new H(0),samples:new H(0),envMap:new H(null),envMapPosition:new H(new O),envMapSize:new H(new O),viewMatrix:new H(new Ze)},defines:{steps:20,refineSteps:5,CUBEUV_TEXEL_WIDTH:0,CUBEUV_TEXEL_HEIGHT:0,CUBEUV_MAX_MIP:0,vWorldPosition:"worldPos"},fragmentShader:n2.replace("#include <helperFunctions>",tg),vertexShader:t2,toneMapped:!1,depthWrite:!1,depthTest:!1})}}const ng=n=>{const e=[n],t=[];for(;e.length!==0;){const i=e.shift();i.material&&t.push(i);for(const a of i.children)a.visible&&e.push(a)}return t},r2=n=>{const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}},Nm=(n,e,t)=>{n.uniforms.envMap.value=e;const i=r2({envMapCubeUVHeight:t});n.defines.ENVMAP_TYPE_CUBE_UV="",n.defines.CUBEUV_TEXEL_WIDTH=i.texelWidth,n.defines.CUBEUV_TEXEL_HEIGHT=i.texelHeight,n.defines.CUBEUV_MAX_MIP=i.maxMip+".0",n.needsUpdate=!0},s2=()=>{try{const n=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&n.getContext("webgl2"))}catch{return!1}};class a2 extends nn{constructor(e,t={}){super("ReflectionsPass"),this.ssrEffect=void 0,this.cachedMaterials=new WeakMap,this.USE_MRT=!1,this.webgl1DepthPass=null,this.visibleMeshes=[],this.ssrEffect=e,this._scene=e._scene,this._camera=e._camera,this.fullscreenMaterial=new i2,e._camera.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA="");const i=t.width||typeof window<"u"?window.innerWidth:2e3,a=t.height||typeof window<"u"?window.innerHeight:1e3;this.renderTarget=new gt(i,a,{minFilter:Ve,magFilter:Ve,type:ei,depthBuffer:!1}),this.renderPass=new ea(this._scene,this._camera),this.USE_MRT=s2(),this.USE_MRT?(this.gBuffersRenderTarget=new ov(i,a,2,{minFilter:Ve,magFilter:Ve}),this.normalTexture=this.gBuffersRenderTarget.texture[0],this.depthTexture=this.gBuffersRenderTarget.texture[1]):(this.webgl1DepthPass=new Lf(this._scene,this._camera),this.webgl1DepthPass.renderTarget.minFilter=Ve,this.webgl1DepthPass.renderTarget.magFilter=Ve,this.webgl1DepthPass.renderTarget.texture.minFilter=Ve,this.webgl1DepthPass.renderTarget.texture.magFilter=Ve,this.webgl1DepthPass.setSize(typeof window<"u"?window.innerWidth:2e3,typeof window<"u"?window.innerHeight:1e3),this.gBuffersRenderTarget=new gt(i,a,{minFilter:Ve,magFilter:Ve}),this.normalTexture=this.gBuffersRenderTarget.texture,this.depthTexture=this.webgl1DepthPass.texture),this.fullscreenMaterial.uniforms.normalTexture.value=this.normalTexture,this.fullscreenMaterial.uniforms.depthTexture.value=this.depthTexture,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=this._camera.matrixWorld,this.fullscreenMaterial.uniforms._projectionMatrix.value=this._camera.projectionMatrix,this.fullscreenMaterial.uniforms._inverseProjectionMatrix.value=this._camera.projectionMatrixInverse}setSize(e,t){this.renderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.gBuffersRenderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.gBuffersRenderTarget.dispose(),this.renderPass.dispose(),this.USE_MRT||this.webgl1DepthPass.dispose(),this.fullscreenMaterial.dispose(),this.normalTexture=null,this.depthTexture=null,this.velocityTexture=null}keepMaterialMapUpdated(e,t,i,a){this.ssrEffect[a]?t[i]!==e[i]&&(e[i]=t[i],e.uniforms[i].value=t[i],t[i]?e.defines[a]="":delete e.defines[a],e.needsUpdate=!0):e[i]!==void 0&&(e[i]=void 0,e.uniforms[i].value=void 0,delete e.defines[a],e.needsUpdate=!0)}setMRTMaterialInScene(){this.visibleMeshes=ng(this._scene);for(const e of this.visibleMeshes)if(e.material){const t=e.material;let[i,a]=this.cachedMaterials.get(e)||[];if(t!==i){a&&a.dispose(),a=new e2,this.USE_MRT&&(a.defines.USE_MRT=""),a.normalScale=t.normalScale,a.uniforms.normalScale.value=t.normalScale;const o=t.map||t.normalMap||t.roughnessMap||t.metalnessMap;o&&(a.uniforms.uvTransform.value=o.matrix),this.cachedMaterials.set(e,[t,a])}this.keepMaterialMapUpdated(a,t,"normalMap","useNormalMap"),this.keepMaterialMapUpdated(a,t,"roughnessMap","useRoughnessMap"),a.uniforms.roughness.value=this.ssrEffect.selection.size===0||this.ssrEffect.selection.has(e)?t.roughness||0:1e11,e.material=a}}unsetMRTMaterialInScene(){for(const t of this.visibleMeshes){var e;if(((e=t.material)==null?void 0:e.type)==="MRTMaterial"){t.visible=!0;const[i]=this.cachedMaterials.get(t);t.material=i}}}render(e,t){this.setMRTMaterialInScene(),e.setRenderTarget(this.gBuffersRenderTarget),this.renderPass.render(e,this.gBuffersRenderTarget),this.unsetMRTMaterialInScene(),this.USE_MRT||this.webgl1DepthPass.renderPass.render(e,this.webgl1DepthPass.renderTarget),this.fullscreenMaterial.uniforms.inputTexture.value=t.texture,this.fullscreenMaterial.uniforms.samples.value=this.ssrEffect.temporalResolvePass.samples,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.viewMatrix.value.copy(this._camera.matrixWorldInverse),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}const Fm={intensity:1,exponent:1,distance:10,fade:0,roughnessFade:1,thickness:10,ior:1.45,maxRoughness:1,maxDepthDifference:10,blend:.9,correction:1,correctionRadius:1,blur:.5,blurKernel:1,blurSharpness:10,jitter:0,jitterRoughness:0,steps:20,refineSteps:5,missedRays:!0,useNormalMap:!0,useRoughnessMap:!0,resolutionScale:1,velocityResolutionScale:1};var o2=`#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,l2=`#define GLSLIFY 1
uniform sampler2D inputTexture;uniform sampler2D accumulatedTexture;uniform sampler2D velocityTexture;uniform sampler2D lastVelocityTexture;uniform float blend;uniform float correction;uniform float exponent;uniform float samples;uniform vec2 invTexSize;uniform mat4 curInverseProjectionMatrix;uniform mat4 curCameraMatrixWorld;uniform mat4 prevInverseProjectionMatrix;uniform mat4 prevCameraMatrixWorld;varying vec2 vUv;
#define MAX_NEIGHBOR_DEPTH_DIFFERENCE 0.001
#define FLOAT_EPSILON 0.00001
#define FLOAT_ONE_MINUS_EPSILON 0.99999
vec3 transformexponent;vec3 undoColorTransformExponent;vec3 transformColor(vec3 color){if(exponent==1.0)return color;return pow(abs(color),transformexponent);}vec3 undoColorTransform(vec3 color){if(exponent==1.0)return color;return max(pow(abs(color),undoColorTransformExponent),vec3(0.0));}void main(){if(exponent!=1.0){transformexponent=vec3(1.0/exponent);undoColorTransformExponent=vec3(exponent);}vec4 inputTexel=textureLod(inputTexture,vUv,0.0);vec4 accumulatedTexel;vec3 inputColor=transformColor(inputTexel.rgb);vec3 accumulatedColor;float alpha=inputTexel.a;float velocityDisocclusion;bool didReproject=false;
#ifdef boxBlur
vec3 boxBlurredColor=inputTexel.rgb;
#endif
vec4 velocity=textureLod(velocityTexture,vUv,0.0);bool isMoving=alpha<1.0||dot(velocity.xy,velocity.xy)>0.0;if(isMoving){vec3 minNeighborColor=inputColor;vec3 maxNeighborColor=inputColor;vec3 col;vec2 neighborUv;vec2 reprojectedUv=vUv-velocity.xy;vec4 lastVelocity=textureLod(lastVelocityTexture,reprojectedUv,0.0);float depth=velocity.b;float closestDepth=depth;float lastClosestDepth=lastVelocity.b;float neighborDepth;float lastNeighborDepth;for(int x=-correctionRadius;x<=correctionRadius;x++){for(int y=-correctionRadius;y<=correctionRadius;y++){if(x!=0||y!=0){neighborUv=vUv+vec2(x,y)*invTexSize;vec4 neigborVelocity=textureLod(velocityTexture,neighborUv,0.0);neighborDepth=neigborVelocity.b;col=textureLod(inputTexture,neighborUv,0.0).xyz;int absX=abs(x);int absY=abs(y);
#ifdef dilation
if(absX==1&&absY==1){if(neighborDepth>closestDepth){velocity=neigborVelocity;closestDepth=neighborDepth;}vec4 lastNeighborVelocity=textureLod(velocityTexture,vUv+vec2(x,y)*invTexSize,0.0);lastNeighborDepth=lastNeighborVelocity.b;if(neighborDepth>closestDepth){lastVelocity=lastNeighborVelocity;lastClosestDepth=lastNeighborDepth;}}
#endif
if(abs(depth-neighborDepth)<MAX_NEIGHBOR_DEPTH_DIFFERENCE){
#ifdef boxBlur
if(absX<=2&&absY<=2)boxBlurredColor+=col;
#endif
col=transformColor(col);minNeighborColor=min(col,minNeighborColor);maxNeighborColor=max(col,maxNeighborColor);}}}}float velocityLength=length(lastVelocity.xy-velocity.xy);velocityDisocclusion=(velocityLength-0.000005)*10.0;velocityDisocclusion*=velocityDisocclusion;reprojectedUv=vUv-velocity.xy;
#ifdef boxBlur
float pxRadius=correctionRadius>5 ? 121.0 : pow(float(correctionRadius*2+1),2.0);boxBlurredColor/=pxRadius;boxBlurredColor=transformColor(boxBlurredColor);
#endif
if(reprojectedUv.x>=0.0&&reprojectedUv.x<=1.0&&reprojectedUv.y>=0.0&&reprojectedUv.y<=1.0){accumulatedTexel=textureLod(accumulatedTexture,reprojectedUv,0.0);accumulatedColor=transformColor(accumulatedTexel.rgb);vec3 clampedColor=clamp(accumulatedColor,minNeighborColor,maxNeighborColor);accumulatedColor=mix(accumulatedColor,clampedColor,correction);didReproject=true;}else{
#ifdef boxBlur
accumulatedColor=boxBlurredColor;
#else
accumulatedColor=inputColor;
#endif
}if(velocity.r>FLOAT_ONE_MINUS_EPSILON&&velocity.g>FLOAT_ONE_MINUS_EPSILON){alpha=0.0;velocityDisocclusion=1.0;}}else{accumulatedColor=transformColor(textureLod(accumulatedTexture,vUv,0.0).rgb);}vec3 outputColor=inputColor;
#include <custom_compose_shader>
gl_FragColor=vec4(undoColorTransform(outputColor),alpha);}`;class u2 extends pt{constructor(e){const t=l2.replace("#include <custom_compose_shader>",e);super({type:"TemporalResolveMaterial",uniforms:{inputTexture:new H(null),accumulatedTexture:new H(null),velocityTexture:new H(null),lastVelocityTexture:new H(null),samples:new H(1),blend:new H(.5),correction:new H(1),exponent:new H(1),invTexSize:new H(new ve)},defines:{correctionRadius:1},vertexShader:o2,fragmentShader:t})}}const c2=`
    #ifdef USE_SKINNING
      #ifdef BONE_TEXTURE
        uniform sampler2D prevBoneTexture;
        mat4 getPrevBoneMatrix( const in float i ) {
          float j = i * 4.0;
          float x = mod( j, float( boneTextureSize ) );
          float y = floor( j / float( boneTextureSize ) );
          float dx = 1.0 / float( boneTextureSize );
          float dy = 1.0 / float( boneTextureSize );
          y = dy * ( y + 0.5 );
          vec4 v1 = texture2D( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ) );
          vec4 v2 = texture2D( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ) );
          vec4 v3 = texture2D( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ) );
          vec4 v4 = texture2D( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ) );
          mat4 bone = mat4( v1, v2, v3, v4 );
          return bone;
        }
      #else
        uniform mat4 prevBoneMatrices[ MAX_BONES ];
        mat4 getPrevBoneMatrix( const in float i ) {
          mat4 bone = prevBoneMatrices[ int(i) ];
          return bone;
        }
      #endif
    #endif
`,f2=`
    vec3 transformed;

    // Get the normal
    ${Fe.skinbase_vertex}
    ${Fe.beginnormal_vertex}
    ${Fe.skinnormal_vertex}
    ${Fe.defaultnormal_vertex}

    // Get the current vertex position
    transformed = vec3( position );
    ${Fe.skinning_vertex}
    newPosition = velocityMatrix * vec4( transformed, 1.0 );

    // Get the previous vertex position
    transformed = vec3( position );
    ${Fe.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
    ${Fe.skinning_vertex.replace(/vec4 /g,"")}
    prevPosition = prevVelocityMatrix * vec4( transformed, 1.0 );

    gl_Position = newPosition;
`;class h2 extends pt{constructor(){super({uniforms:{prevVelocityMatrix:{value:new Ze},velocityMatrix:{value:new Ze},prevBoneTexture:{value:null},interpolateGeometry:{value:0},intensity:{value:1},boneTexture:{value:null},alphaTest:{value:0},map:{value:null},alphaMap:{value:null},opacity:{value:1}},vertexShader:`
                    #define MAX_BONES 1024

                    ${Fe.skinning_pars_vertex}
                    ${c2}

                    uniform mat4 velocityMatrix;
                    uniform mat4 prevVelocityMatrix;
                    uniform float interpolateGeometry;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
          varying vec2 vHighPrecisionZW;

                    void main() {

                        ${f2}

            vHighPrecisionZW = gl_Position.zw;

                    }`,fragmentShader:`
                    uniform float intensity;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
          varying vec2 vHighPrecisionZW;

                    void main() {
            #ifdef FULL_MOVEMENT
            gl_FragColor = vec4( 1., 1., 1. - gl_FragCoord.z, 0. );
            return;
            #endif

                        vec2 pos0 = (prevPosition.xy / prevPosition.w) * 0.5 + 0.5;
                        vec2 pos1 = (newPosition.xy / newPosition.w) * 0.5 + 0.5;

                        vec2 vel = pos1 - pos0;

            float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

                        gl_FragColor = vec4( vel, 1. - fragCoordZ, 0. );

                    }`}),this.isVelocityMaterial=!0}}const d2=new qe(0),p2=["visible","wireframe","side"];class m2 extends nn{constructor(e,t){var i,a;super("VelocityPass"),this.cachedMaterials=new WeakMap,this.lastCameraTransform={position:new O,quaternion:new Bi},this.visibleMeshes=[],this.renderedMeshesThisFrame=0,this.renderedMeshesLastFrame=0,this._scene=e,this._camera=t,this.renderTarget=new gt(((i=window)==null?void 0:i.innerWidth)||1e3,((a=window)==null?void 0:a.innerHeight)||1e3,{type:ei})}setVelocityMaterialInScene(){this.renderedMeshesThisFrame=0,this.visibleMeshes=ng(this._scene);for(const i of this.visibleMeshes){var e;const a=i.material;let[o,l]=this.cachedMaterials.get(i)||[];if(a!==o){var t;l=new h2,l.lastMatrixWorld=new Ze,i.material=l,(t=i.skeleton)!=null&&t.boneTexture&&this.saveBoneTexture(i),this.cachedMaterials.set(i,[a,l])}if(l.uniforms.velocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,i.modelViewMatrix),i.userData.needsUpdatedReflections||a.map instanceof rE?("FULL_MOVEMENT"in l.defines||(l.needsUpdate=!0),l.defines.FULL_MOVEMENT=""):"FULL_MOVEMENT"in l.defines&&(delete l.defines.FULL_MOVEMENT,l.needsUpdate=!0),i.visible=this.cameraMovedThisFrame||!i.matrixWorld.equals(l.lastMatrixWorld)||i.skeleton||"FULL_MOVEMENT"in l.defines,i.material=l,!!i.visible){this.renderedMeshesThisFrame++;for(const u of p2)l[u]=a[u];(e=i.skeleton)!=null&&e.boneTexture&&(l.defines.USE_SKINNING="",l.defines.BONE_TEXTURE="",l.uniforms.boneTexture.value=i.skeleton.boneTexture)}}}saveBoneTexture(e){let t=e.material.uniforms.prevBoneTexture.value;if(t&&t.image.width===e.skeleton.boneTexture.width)t=e.material.uniforms.prevBoneTexture.value,t.image.data.set(e.skeleton.boneTexture.image.data);else{var i;(i=t)==null||i.dispose();const a=e.skeleton.boneTexture.image.data.slice(),o=e.skeleton.boneTexture.image.width;t=new jl(a,o,o,Wt,Kt),e.material.uniforms.prevBoneTexture.value=t,t.needsUpdate=!0}}unsetVelocityMaterialInScene(){for(const t of this.visibleMeshes)if(t.material.isVelocityMaterial){var e;t.visible=!0,t.material.lastMatrixWorld.copy(t.matrixWorld),t.material.uniforms.prevVelocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,t.modelViewMatrix),(e=t.skeleton)!=null&&e.boneTexture&&this.saveBoneTexture(t),t.material=this.cachedMaterials.get(t)[0]}}setSize(e,t){this.renderTarget.setSize(e,t)}renderVelocity(e){if(e.setRenderTarget(this.renderTarget),this.renderedMeshesThisFrame>0){const{background:t}=this._scene;this._scene.background=d2,e.render(this._scene,this._camera),this._scene.background=t}else e.clearColor()}checkCameraMoved(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));return e>1e-6||t>1e-6?(this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion),!0):!1}render(e){this.cameraMovedThisFrame=this.checkCameraMoved(),this.setVelocityMaterialInScene(),(this.renderedMeshesThisFrame>0||this.renderedMeshesLastFrame>0)&&this.renderVelocity(e),this.unsetVelocityMaterialInScene(),this.renderedMeshesLastFrame=this.renderedMeshesThisFrame}}const Om=new ve;class v2 extends nn{constructor(e,t,i,a={}){super("TemporalResolvePass"),this.velocityPass=null,this.velocityResolutionScale=1,this.samples=1,this.lastCameraTransform={position:new O,quaternion:new Bi},this._scene=e,this._camera=t,this.renderTarget=new gt(1,1,{minFilter:Ve,magFilter:Ve,type:ei,depthBuffer:!1}),this.velocityPass=new m2(e,t),this.fullscreenMaterial=new u2(i),this.fullscreenMaterial.defines.correctionRadius=a.correctionRadius||1,a.dilation&&(this.fullscreenMaterial.defines.dilation=""),a.boxBlur&&(this.fullscreenMaterial.defines.boxBlur=""),this.setupFramebuffers(1,1),this.checkCanUseSharedVelocityTexture()}dispose(){this._scene.userData.velocityTexture===this.velocityPass.renderTarget.texture&&(delete this._scene.userData.velocityTexture,delete this._scene.userData.lastVelocityTexture),this.renderTarget.dispose(),this.accumulatedTexture.dispose(),this.fullscreenMaterial.dispose(),this.velocityPass.dispose()}setSize(e,t){this.renderTarget.setSize(e,t),this.velocityPass.setSize(e*this.velocityResolutionScale,t*this.velocityResolutionScale),this.velocityPass.renderTarget.texture.minFilter=this.velocityResolutionScale===1?at:Ve,this.velocityPass.renderTarget.texture.magFilter=this.velocityResolutionScale===1?at:Ve,this.velocityPass.renderTarget.texture.needsUpdate=!0,this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t),this.setupFramebuffers(e,t)}setupFramebuffers(e,t){this.accumulatedTexture&&this.accumulatedTexture.dispose(),this.lastVelocityTexture&&this.lastVelocityTexture.dispose(),this.accumulatedTexture=new Dp(e,t,Wt),this.accumulatedTexture.minFilter=Ve,this.accumulatedTexture.magFilter=Ve,this.accumulatedTexture.type=ei,this.lastVelocityTexture=new Dp(e*this.velocityResolutionScale,t*this.velocityResolutionScale,Wt),this.lastVelocityTexture.minFilter=this.velocityResolutionScale===1?at:Ve,this.lastVelocityTexture.magFilter=this.velocityResolutionScale===1?at:Ve,this.lastVelocityTexture.type=ei,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.accumulatedTexture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0}checkCanUseSharedVelocityTexture(){return this._scene.userData.velocityTexture&&this.velocityPass.renderTarget.texture!==this._scene.userData.velocityTexture?this.velocityPass.renderTarget.texture===this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this._scene.userData.lastVelocityTexture,this.fullscreenMaterial.uniforms.velocityTexture.value=this._scene.userData.velocityTexture,this.fullscreenMaterial.needsUpdate=!0):this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.velocityTexture.value=this.velocityPass.renderTarget.texture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0,this._scene.userData.velocityTexture||(this._scene.userData.velocityTexture=this.velocityPass.renderTarget.texture,this._scene.userData.lastVelocityTexture=this.lastVelocityTexture)),this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value}checkNeedsResample(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));(e>1e-6||t>1e-6)&&(this.samples=1,this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion))}render(e){this.samples++,this.checkNeedsResample(),this.fullscreenMaterial.uniforms.samples.value=this.samples,e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),e.copyFramebufferToTexture(Om,this.accumulatedTexture),e.setRenderTarget(this.velocityPass.renderTarget),e.copyFramebufferToTexture(Om,this.lastVelocityTexture)}}const zm=function(e,t){let i=1,a=0;for(;e>0;)i/=t,a+=i*(e%t),e=~~(e/t);return a},g2=n=>{const e=[];let t=1;const i=t+n;for(;t<i;t++)e.push([zm(t,2)-.5,zm(t,3)-.5]);return e};function Bm(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const x2=`
#if defined( USE_ENVMAP ) || defined(  ) || defined ( USE_SHADOWMAP )
    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

    #ifdef BOX_PROJECTED_ENV_MAP
        vWorldPosition = worldPosition.xyz;
    #endif
#endif
`,S2=`
#ifdef BOX_PROJECTED_ENV_MAP
    uniform vec3 envMapSize;
    uniform vec3 envMapPosition;
    varying vec3 vWorldPosition;

    vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {
        vec3 nDir = normalize( v );

        vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
        vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

        vec3 rbminmax;

        rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
        rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
        rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

        float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
        vec3 boxIntersection = vWorldPosition + nDir * correction;

        return boxIntersection - cubePos;
    }
#endif
`,y2=`
#ifdef BOX_PROJECTED_ENV_MAP
    worldNormal = parallaxCorrectNormal( worldNormal, envMapSize, envMapPosition );
#endif
`,_2=`
#ifdef BOX_PROJECTED_ENV_MAP
    reflectVec = parallaxCorrectNormal( reflectVec, envMapSize, envMapPosition );
#endif
`;function M2(n,e,t){n.defines.BOX_PROJECTED_ENV_MAP="",n.uniforms.envMapPosition={value:e},n.uniforms.envMapSize={value:t};const i=new RegExp(Bm("vec3 worldNormal = inverseTransformDirection ( normal , viewMatrix ) ;").replaceAll(" ","\\s*"),"g"),a=new RegExp(Bm("reflectVec = inverseTransformDirection ( reflectVec , viewMatrix ) ;").replaceAll(" ","\\s*"),"g");n.vertexShader=`varying vec3 vWorldPosition;
`+n.vertexShader.replace("#include <worldpos_vertex>",x2),n.fragmentShader=S2+`
`+n.fragmentShader.replace("#include <envmap_physical_pars_fragment>",Fe.envmap_physical_pars_fragment).replace(i,`vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
                ${y2}`).replace(a,`reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                ${_2}`)}const E2=Jw.replace("#include <helperFunctions>",tg).replace("#include <boxBlur>",Qw),T2=["blur","blurSharpness","blurKernel"],w2=new _f(1);let Cl;class A2 extends Tn{constructor(e,t,i=Fm){super("SSREffect",E2,{type:"FinalSSRMaterial",uniforms:new Map([["reflectionsTexture",new H(null)],["blur",new H(0)],["blurSharpness",new H(0)],["blurKernel",new H(0)]]),defines:new Map([["RENDER_MODE","0"]])}),this.haltonSequence=g2(1024),this.haltonIndex=0,this.selection=new Uf,this.lastSize=void 0,this.cubeCamera=new pv(.001,1e3,w2),this.usingBoxProjectedEnvMap=!1,this._scene=e,this._camera=t,i={...Fm,...i,...{boxBlur:!0,dilation:!0}},this.temporalResolvePass=new v2(e,t,$w,i),this.uniforms.get("reflectionsTexture").value=this.temporalResolvePass.renderTarget.texture,this.reflectionsPass=new a2(this,i),this.temporalResolvePass.fullscreenMaterial.uniforms.inputTexture.value=this.reflectionsPass.renderTarget.texture,this.lastSize={width:i.width,height:i.height,resolutionScale:i.resolutionScale,velocityResolutionScale:i.velocityResolutionScale},this.setSize(i.width,i.height),this.makeOptionsReactive(i)}makeOptionsReactive(e){let t=!1;const i=this.reflectionsPass.fullscreenMaterial.uniforms,a=Object.keys(i);for(const o of Object.keys(e))Object.defineProperty(this,o,{get(){return e[o]},set(l){if(!(e[o]===l&&t))switch(e[o]=l,T2.includes(o)||this.setSize(this.lastSize.width,this.lastSize.height,!0),o){case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height);break;case"velocityResolutionScale":this.temporalResolvePass.velocityResolutionScale=l,this.setSize(this.lastSize.width,this.lastSize.height,!0);break;case"blur":this.uniforms.get("blur").value=l;break;case"blurSharpness":this.uniforms.get("blurSharpness").value=l;break;case"blurKernel":this.uniforms.get("blurKernel").value=l;break;case"steps":this.reflectionsPass.fullscreenMaterial.defines.steps=parseInt(l),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"refineSteps":this.reflectionsPass.fullscreenMaterial.defines.refineSteps=parseInt(l),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"missedRays":l?this.reflectionsPass.fullscreenMaterial.defines.missedRays="":delete this.reflectionsPass.fullscreenMaterial.defines.missedRays,this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"correctionRadius":this.temporalResolvePass.fullscreenMaterial.defines.correctionRadius=Math.round(l),this.temporalResolvePass.fullscreenMaterial.needsUpdate=t;break;case"blend":this.temporalResolvePass.fullscreenMaterial.uniforms.blend.value=l;break;case"correction":this.temporalResolvePass.fullscreenMaterial.uniforms.correction.value=l;break;case"exponent":this.temporalResolvePass.fullscreenMaterial.uniforms.exponent.value=l;break;case"distance":i.rayDistance.value=l;default:a.includes(o)&&(i[o].value=l)}}}),this[o]=e[o];t=!0}setSize(e,t,i=!1){!i&&e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale&&this.velocityResolutionScale===this.lastSize.velocityResolutionScale||(this.temporalResolvePass.setSize(e,t),this.reflectionsPass.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale,velocityResolutionScale:this.velocityResolutionScale})}generateBoxProjectedEnvMapFallback(e,t=new O,i=new O,a=512){this.cubeCamera.renderTarget.dispose(),this.cubeCamera.renderTarget=new _f(a),this.cubeCamera.position.copy(t),this.cubeCamera.updateMatrixWorld(),this.cubeCamera.update(e,this._scene),Cl||(Cl=new sf(e),Cl.compileCubemapShader());const o=Cl.fromCubemap(this.cubeCamera.renderTarget.texture).texture;o.minFilter=Ve,o.magFilter=Ve;const l=this.reflectionsPass.fullscreenMaterial;return M2(l,t,i),l.fragmentShader=l.fragmentShader.replace("vec3 worldPos","worldPos").replace("varying vec3 vWorldPosition;","vec3 worldPos;"),l.uniforms.envMapPosition.value.copy(t),l.uniforms.envMapSize.value.copy(i),Nm(l,o,a),this.usingBoxProjectedEnvMap=!0,o}setIBLRadiance(e,t){this._scene.traverse(i=>{if(i.material){var a;const o=(a=t.properties.get(i.material))==null?void 0:a.uniforms;o&&"disableIBLRadiance"in o&&(o.disableIBLRadiance.value=e)}})}deleteBoxProjectedEnvMapFallback(){const e=this.reflectionsPass.fullscreenMaterial;e.uniforms.envMap.value=null,e.fragmentShader=e.fragmentShader.replace("worldPos = ","vec3 worldPos = "),delete e.defines.BOX_PROJECTED_ENV_MAP,e.needsUpdate=!0,this.usingBoxProjectedEnvMap=!1}dispose(){super.dispose(),this.reflectionsPass.dispose(),this.temporalResolvePass.dispose()}update(e,t){if(!this.usingBoxProjectedEnvMap&&this._scene.environment){const u=this.reflectionsPass.fullscreenMaterial;let f=null;if(this._scene.traverse(p=>{if(!f&&p.material&&!p.material.envMap){const d=e.properties.get(p.material);"envMap"in d&&d.envMap instanceof Xt&&(f=d.envMap)}}),f){const p=this._scene.environment.image.height;Nm(u,f,p)}}this.haltonIndex=(this.haltonIndex+1)%this.haltonSequence.length;const[i,a]=this.haltonSequence[this.haltonIndex],{width:o,height:l}=this.lastSize;this.temporalResolvePass.velocityPass.render(e),this._camera.setViewOffset&&this._camera.setViewOffset(o,l,i,a,o,l),this.reflectionsPass.render(e,t),this.temporalResolvePass.render(e),this._camera.clearViewOffset()}static patchDirectEnvIntensity(e=0){e===0?Fe.envmap_physical_pars_fragment=Fe.envmap_physical_pars_fragment.replace("vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {","vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) { return vec3(0.0);"):Fe.envmap_physical_pars_fragment=Fe.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );","vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness ) * "+e.toFixed(5)+";")}}ee.forwardRef(function({ENABLE_BLUR:e=!0,USE_MRT:t=!0,...i},a){const{invalidate:o}=Mn(),{scene:l,camera:u}=ee.useContext(or),f=ee.useMemo(()=>new A2(l,u,{ENABLE_BLUR:e,USE_MRT:t,...i}),[l,u,e,t,i]),p=ee.useContext(If);return ee.useEffect(()=>{var d;if(p&&p.enabled&&(d=p.selected)!=null&&d.length)return f.selection.set(p.selected),o(),()=>{f.selection.clear(),o()}},[p]),Ge.jsx("primitive",{ref:a,object:f,...i})});const eo=new ti;eo.setAttribute("position",new kt(new Float32Array([-1,-1,3,-1,-1,3]),2));eo.setAttribute("uv",new kt(new Float32Array([0,0,2,0,0,2]),2));eo.boundingSphere=new Ks;eo.computeBoundingSphere=function(){};const R2=new Mf;class La{constructor(e){this._mesh=new hi(eo,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,R2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}}const P2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new Ze},viewMat:{value:new Ze},projViewMat:{value:new Ze},projectionMatrixInv:{value:new Ze},viewMatrixInv:{value:new Ze},cameraPos:{value:new O},resolution:{value:new ve},time:{value:0},samples:{value:[]},samplesR:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},logDepth:{value:!1},ortho:{value:!1},screenSpaceRadius:{value:!1}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1);
}`,fragmentShader:`
    #define SAMPLES 16
    #define FSAMPLES 16.0
uniform sampler2D sceneDiffuse;
uniform highp sampler2D sceneNormal;
uniform highp sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform float time;
uniform vec3[SAMPLES] samples;
uniform float[SAMPLES] samplesR;
uniform float radius;
uniform float distanceFalloff;
uniform float near;
uniform float far;
uniform bool logDepth;
uniform bool ortho;
uniform bool screenSpaceRadius;
uniform sampler2D bluenoise;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }

    vec3 getWorldPosLog(vec3 posS) {
      vec2 uv = posS.xy;
      float z = posS.z;
      float nearZ =near;
      float farZ = far;
      float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
      vec4 wpos = projectionMatrixInv * clipVec;
      return wpos.xyz / wpos.w;
    }
    vec3 getWorldPos(float depth, vec2 coord) {
      #ifdef LOGDEPTH
        return getWorldPosLog(vec3(coord, depth));
      #endif
      float z = depth * 2.0 - 1.0;
      vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
      vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
      // Perspective division
     vec4 worldSpacePosition = viewSpacePosition;
     worldSpacePosition.xyz /= worldSpacePosition.w;
      return worldSpacePosition.xyz;
  }

  vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    ivec2 p = ivec2(vUv * resolution);
    float c0 = texelFetch(sceneDepth, p, 0).x;
    float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;

    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);

    vec3 ce = getWorldPos(c0, vUv).xyz;

    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;

    return normalize(cross(dpdx, dpdy));
}

void main() {
      vec4 diffuse = texture2D(sceneDiffuse, vUv);
      float depth = texture2D(sceneDepth, vUv).x;
      if (depth == 1.0) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
        return;
      }
      vec3 worldPos = getWorldPos(depth, vUv);
    //  vec3 normal = texture2D(sceneNormal, vUv).rgb;//computeNormal(worldPos, vUv);
      #ifdef HALFRES
        vec3 normal = texture2D(sceneNormal, vUv).rgb;
      #else
        vec3 normal = computeNormal(worldPos, vUv);
      #endif
      vec4 noise = texture2D(bluenoise, gl_FragCoord.xy / 128.0);
      vec3 randomVec = normalize(noise.rgb * 2.0 - 1.0);
      vec3 tangent = normalize(randomVec - normal * dot(randomVec, normal));
      vec3 bitangent = cross(normal, tangent);
      mat3 tbn = mat3(tangent, bitangent, normal);
      float occluded = 0.0;
      float totalWeight = 0.0;
     /* float radiusScreen = distance(
        worldPos,
        getWorldPos(depth, vUv + 
          vec2(48.0, 0.0) / resolution)
      );/*vUv.x < 0.5 ? radius : min(distance(
        worldPos,
        getWorldPos(depth, vUv + 
          vec2(100.0, 0.0) / resolution)
      ), radius);
      float distanceFalloffScreen = radiusScreen * 0.2;*/
      float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
      float bias = (0.1 / near) * fwidth(distance(worldPos, cameraPos)) / radiusToUse;
      for(float i = 0.0; i < FSAMPLES; i++) {
        vec3 sampleDirection = 
        tbn * 
        samples[int(i)];
        ;
        float moveAmt = samplesR[int(mod(i + noise.a * FSAMPLES, FSAMPLES))];
        vec3 samplePos = worldPos + radiusToUse * moveAmt * sampleDirection;
        vec4 offset = projMat * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xyz = offset.xyz * 0.5 + 0.5;
        float sampleDepth = textureLod(sceneDepth, offset.xy, 0.0).x;
        /*float distSample = logDepth ? linearize_depth_log(sampleDepth, near, far) 
         (ortho ?  linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far));*/
        #ifdef LOGDEPTH
        float distSample = linearize_depth_log(sampleDepth, near, far);
        #else
        float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);
        #endif
        float distWorld = ortho ? linearize_depth_ortho(offset.z, near, far) : linearize_depth(offset.z, near, far);
        float rangeCheck = smoothstep(0.0, 1.0, distanceFalloffToUse / (abs(distSample - distWorld)));
        vec2 diff = gl_FragCoord.xy - ( offset.xy * resolution);
        float weight = dot(sampleDirection, normal);
          occluded += rangeCheck * weight * 
            (distSample + bias
               < distWorld ? 1.0 : 0.0) * (
          (dot(
            diff,
            diff
             
            ) < 1.0 || (sampleDepth == depth) || (
              offset.x < 0.0 || offset.x > 1.0 || offset.y < 0.0 || offset.y > 1.0
            ) ? 0.0 : 1.0)
          );
          totalWeight += weight;
      }
      float occ = clamp(1.0 - occluded / totalWeight, 0.0, 1.0);
      gl_FragColor = vec4(0.5 + 0.5 * normal, occ);
}`},C2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ze},viewMat:{value:new Ze},projectionMatrixInv:{value:new Ze},viewMatrixInv:{value:new Ze},cameraPos:{value:new O},resolution:{value:new ve},color:{value:new O(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},logDepth:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform highp sampler2D downsampledDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform vec2 resolution;
    uniform vec3 color;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform float intensity;
    uniform float renderMode;
    uniform float near;
    uniform float far;
    uniform bool gammaCorrection;
    uniform bool logDepth;
    uniform bool ortho;
    uniform bool screenSpaceRadius;
    uniform bool fog;
    uniform bool fogExp;
    uniform bool colorMultiply;
    uniform float fogDensity;
    uniform float fogNear;
    uniform float fogFar;
    uniform float radius;
    uniform float distanceFalloff;
    uniform vec3 cameraPos;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
       // if (logDepth) {
        #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
        #endif
      //  }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }

    #include <common>
    #include <dithering_pars_fragment>
    void main() {
        //vec4 texel = texture2D(tDiffuse, vUv);//vec3(0.0);
        vec4 sceneTexel = texture2D(sceneDiffuse, vUv);
        float depth = texture2D(
            sceneDepth,
            vUv
        ).x;
        #ifdef HALFRES 
        vec4 texel;
        if (depth == 1.0) {
            texel = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
        vec3 worldPos = getWorldPos(depth, vUv);
        vec3 normal = computeNormal(getWorldPos(depth, vUv), vUv);
       // vec4 texel = texture2D(tDiffuse, vUv);
       // Find closest depth;
       float totalWeight = 0.0;
       float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
        for(float x = -1.0; x <= 1.0; x++) {
            for(float y = -1.0; y <= 1.0; y++) {
                vec2 offset = vec2(x, y);
                ivec2 p = ivec2(
                    (vUv * resolution * 0.5) + offset
                );
                vec2 pUv = vec2(p) / (resolution * 0.5);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 normalSample = sampleInfo.xyz * 2.0 - 1.0;
                vec3 worldPosSample = getWorldPos(sampleDepth, pUv);
                float tangentPlaneDist = abs(dot(worldPos - worldPosSample, normal));
                float rangeCheck = exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0);
                float weight = rangeCheck;
                totalWeight += weight;
                texel += sampleInfo * weight;
            }
        }
        if (totalWeight == 0.0) {
            texel = texture2D(tDiffuse, vUv);
        } else {
            texel /= totalWeight;
        }
    }
        #else
        vec4 texel = texture2D(tDiffuse, vUv);
        #endif

     
        float finalAo = pow(texel.a, intensity);
        float fogFactor;
        float fogDepth = distance(
            cameraPos,
            getWorldPos(depth, vUv)
        );
        if (fog) {
            if (fogExp) {
                fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
            } else {
                fogFactor = smoothstep( fogNear, fogFar, fogDepth );
            }
        }
        finalAo = mix(finalAo, 1.0, fogFactor);
        vec3 aoApplied = color * mix(vec3(1.0), sceneTexel.rgb, float(colorMultiply));
        if (renderMode == 0.0) {
            gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 1.0) {
            gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 2.0) {
            gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
        } else if (renderMode == 3.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        } else if (renderMode == 4.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        }
        #include <dithering_fragment>
        if (gammaCorrection) {
            gl_FragColor = LinearTosRGB(gl_FragColor);
        }
    }
    `},b2={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ze},viewMat:{value:new Ze},projectionMatrixInv:{value:new Ze},viewMatrixInv:{value:new Ze},cameraPos:{value:new O},resolution:{value:new ve},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},logDepth:{value:!1},screenSpaceRadius:{value:!1}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1.0);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform vec2 resolution;
    uniform float r;
    uniform float radius;
     uniform float worldRadius;
    uniform float index;
     uniform float near;
     uniform float far;
     uniform float distanceFalloff;
     uniform bool logDepth;
     uniform bool screenSpaceRadius;
    varying vec2 vUv;

    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        highp float z_n = 2.0 * d - 1.0;
        return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
     float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     return linearize_depth(linDepth, nearZ, farZ);
   }
   highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
     return nearZ + (farZ - nearZ) * d;
   }
   vec3 getWorldPosLog(vec3 posS) {
     vec2 uv = posS.xy;
     float z = posS.z;
     float nearZ =near;
     float farZ = far;
     float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
     vec4 wpos = projectionMatrixInv * clipVec;
     return wpos.xyz / wpos.w;
   }
    vec3 getWorldPos(float depth, vec2 coord) {
     #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
     #endif
        
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
    #include <common>
    #define NUM_SAMPLES 16
    uniform vec2 poissonDisk[NUM_SAMPLES];
    void main() {
        const float pi = 3.14159;
        vec2 texelSize = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec2 uv = vUv;
        vec4 data = texture2D(tDiffuse, vUv);
        float occlusion = data.a;
        float baseOcc = data.a;
        vec3 normal = data.rgb * 2.0 - 1.0;
        float count = 1.0;
        float d = texture2D(sceneDepth, vUv).x;
        if (d == 1.0) {
          gl_FragColor = data;
          return;
        }
        vec3 worldPos = getWorldPos(d, vUv);
        float size = radius;
        float angle;
        if (index == 0.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).x * PI2;
        } else if (index == 1.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).y * PI2;
        } else if (index == 2.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
        } else {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).w * PI2;
        }

        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        float radiusToUse = screenSpaceRadius ? distance(
          worldPos,
          getWorldPos(d, vUv +
            vec2(worldRadius, 0.0) / resolution)
        ) : worldRadius;
        float distanceFalloffToUse =screenSpaceRadius ?
            radiusToUse * distanceFalloff
        : distanceFalloff;


        for(int i = 0; i < NUM_SAMPLES; i++) {
            vec2 offset = (rotationMatrix * poissonDisk[i]) * texelSize * size;
            vec4 dataSample = texture2D(tDiffuse, uv + offset);
            float occSample = dataSample.a;
            vec3 normalSample = dataSample.rgb * 2.0 - 1.0;
            float dSample = texture2D(sceneDepth, uv + offset).x;
            vec3 worldPosSample = getWorldPos(dSample, uv + offset);
            float tangentPlaneDist = abs(dot(worldPos - worldPosSample, normal));
            float rangeCheck = dSample == 1.0 ? 0.0 :exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0) * (1.0 - abs(occSample - baseOcc));
            occlusion += occSample * rangeCheck;
            count += rangeCheck;
        }
        occlusion /= count;
        gl_FragColor = vec4(0.5 + 0.5 * normal, occlusion);
    }
    `},D2={uniforms:{sceneDepth:{value:null},resolution:{value:new ve},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new Ze},projectionMatrixInv:{value:new Ze},logDepth:{value:!1}},vertexShader:`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
    }`,fragmentShader:`
    uniform highp sampler2D sceneDepth;
    uniform vec2 resolution;
    uniform float near;
    uniform float far;
    uniform bool logDepth;
    uniform mat4 viewMatrixInv;
    uniform mat4 projectionMatrixInv;
    varying vec2 vUv;
    layout(location = 1) out vec4 gNormal;
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        if (logDepth) {
          return getWorldPosLog(vec3(coord, depth));
        }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }
    void main() {
        vec2 uv = vUv - vec2(0.5) / resolution;
        vec2 pixelSize = vec2(1.0) / resolution;
        vec2[] uvSamples = vec2[4](
            uv,
            uv + vec2(pixelSize.x, 0.0),
            uv + vec2(0.0, pixelSize.y),
            uv + pixelSize
        );
        float depth00 = texture2D(sceneDepth, uvSamples[0]).r;
        float depth10 = texture2D(sceneDepth, uvSamples[1]).r;
        float depth01 = texture2D(sceneDepth, uvSamples[2]).r;
        float depth11 = texture2D(sceneDepth, uvSamples[3]).r;
        float minDepth = min(min(depth00, depth10), min(depth01, depth11));
        float maxDepth = max(max(depth00, depth10), max(depth01, depth11));
        float targetDepth = minDepth;
        // Checkerboard pattern to avoid artifacts
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) > 0.5) { 
            targetDepth = maxDepth;
        }
        int chosenIndex = 0;
        float[] samples = float[4](depth00, depth10, depth01, depth11);
        for(int i = 0; i < 4; ++i) {
            if (samples[i] == targetDepth) {
                chosenIndex = i;
                break;
            }
        }
        gl_FragColor = vec4(samples[chosenIndex], 0.0, 0.0, 1.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]), uvSamples[chosenIndex]
        ), 0.0);
       /* float[] samples = float[4](depth00, depth10, depth01, depth11);
        float c = 0.25 * (depth00 + depth10 + depth01 + depth11);
        float[] distances = float[4](depth00, depth10, depth01, depth11);
        float maxDistance = max(max(distances[0], distances[1]), max(distances[2], distances[3]));

        int remaining[3];
        int rejected[3];
        int i, j, k;

        for(i = 0, j = 0, k = 0; i < 4; ++i) {
            if (distances[i] < maxDistance) {
                remaining[j++] = i;
            } else {
                rejected[k++] = i;
            }
        }
        for(;j < 3;++j) {
            remaining[j] = rejected[--k];
        }
        vec3 s = vec3(
            samples[remaining[0]],
            samples[remaining[1]],
            samples[remaining[2]]
        );
        c = (s.x + s.y + s.z) / 3.0;

        distances[0] = abs(c - s.x);
        distances[1] = abs(c - s.y);
        distances[2] = abs(c - s.z);

        float minDistance = min(min(distances[0], distances[1]), distances[2]);

        for(i = 0; i < 3; ++i) {
            if (distances[i] == minDistance) {
                break;
            }
        }*/
      /*  gl_FragColor = vec4(samples[remaining[i]], 0.0, 0.0, 0.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[remaining[i]], uvSamples[remaining[i]]), uvSamples[remaining[i]]
        ), 0.0);*/
    }`};var ig="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";const L2=Uint8Array.from(atob(ig),n=>n.charCodeAt(0));function rg(n,e,t){if(e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)){const o=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;t.lastTime=o}else setTimeout(()=>{rg(n,e,t)},1)}class U2 extends nn{constructor(e,t,i=512,a=512){super(),this.width=i,this.height=a,this.clear=!0,this.camera=t,this.scene=e,this.autosetGamma=!0,this.configuration=new Proxy({aoSamples:16,aoRadius:5,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,color:new qe(0,0,0),gammaCorrection:!0,logarithmicDepthBuffer:!1,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,colorMultiply:!0},{set:(o,l,u)=>{const f=o[l];return o[l]=u,l==="aoSamples"&&f!==u&&this.configureAOPass(this.configuration.logarithmicDepthBuffer),l==="denoiseSamples"&&f!==u&&this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),l==="halfRes"&&f!==u&&(this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.setSize(this.width,this.height)),l==="depthAwareUpsampling"&&f!==u&&this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),l==="gammaCorrection"&&(this.autosetGamma=!1),!0}}),this.samples=[],this.samplesR=[],this.samplesDenoise=[],this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.copyQuad=new La(new pt({uniforms:{tDiffuse:{value:null}},depthWrite:!1,vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1);
            }
            `,fragmentShader:`
            uniform sampler2D tDiffuse;
            varying vec2 vUv;
            void main() {
                gl_FragColor = texture2D(tDiffuse, vUv);
            }
            `})),this.writeTargetInternal=new gt(this.width,this.height,{minFilter:Ve,magFilter:Ve,depthBuffer:!1}),this.readTargetInternal=new gt(this.width,this.height,{minFilter:Ve,magFilter:Ve,depthBuffer:!1}),this.outputTargetInternal=new gt(this.width,this.height,{minFilter:Ve,magFilter:Ve,depthBuffer:!1}),this.bluenoise=new jl(L2,128,128),this.bluenoise.colorSpace=Ar,this.bluenoise.wrapS=Ai,this.bluenoise.wrapT=Ai,this.bluenoise.minFilter=at,this.bluenoise.magFilter=at,this.bluenoise.needsUpdate=!0,this.lastTime=0,this.needsDepthTexture=!0,this.needsSwap=!0,this._r=new ve,this._c=new qe}configureHalfResTargets(){this.configuration.halfRes?(this.depthDownsampleTarget=new ov(this.width/2,this.height/2,2),this.depthDownsampleTarget.texture[0].format=xf,this.depthDownsampleTarget.texture[0].type=Kt,this.depthDownsampleTarget.texture[0].minFilter=at,this.depthDownsampleTarget.texture[0].magFilter=at,this.depthDownsampleTarget.texture[0].depthBuffer=!1,this.depthDownsampleTarget.texture[1].format=Wt,this.depthDownsampleTarget.texture[1].type=ei,this.depthDownsampleTarget.texture[1].minFilter=at,this.depthDownsampleTarget.texture[1].magFilter=at,this.depthDownsampleTarget.texture[1].depthBuffer=!1,this.depthDownsampleQuad=new La(new pt(D2))):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}configureSampleDependentPasses(){this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer)}configureAOPass(e=!1){this.samples=this.generateHemisphereSamples(this.configuration.aoSamples),this.samplesR=this.generateHemisphereSamplesR(this.configuration.aoSamples);const t={...P2};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new pt(t)):this.effectShaderQuad=new La(new pt(t))}configureDenoisePass(e=!1){this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);const t={...b2};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.denoiseSamples),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.poissonBlurQuad?(this.poissonBlurQuad.material.dispose(),this.poissonBlurQuad.material=new pt(t)):this.poissonBlurQuad=new La(new pt(t))}configureEffectCompositer(e=!1){const t={...C2};e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new pt(t)):this.effectCompositerQuad=new La(new pt(t))}generateHemisphereSamples(e){const t=[];for(let i=0;i<e;i++){const a=2.399963*i,o=Math.sqrt(i+.5)/Math.sqrt(e),l=o*Math.cos(a),u=o*Math.sin(a),f=Math.sqrt(1-(l*l+u*u));t.push(new O(l,u,f))}return t}generateHemisphereSamplesR(e){let t=[];for(let i=0;i<e;i++)t.push((i+1)/e);return t}generateDenoiseSamples(e,t){const i=2*Math.PI*t/e,a=1/e,o=a,l=[];let u=a,f=0;for(let p=0;p<e;p++)l.push(new ve(Math.cos(f),Math.sin(f)).multiplyScalar(Math.pow(u,.75))),u+=o,f+=i;return l}setSize(e,t){this.width=e,this.height=t;const i=this.configuration.halfRes?.5:1;this.writeTargetInternal.setSize(e*i,t*i),this.readTargetInternal.setSize(e*i,t*i),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(e*i,t*i),this.outputTargetInternal.setSize(e,t)}setDepthTexture(e){this.depthTexture=e}render(e,t,i){const a=e.xr.enabled;e.xr.enabled=!1,e.capabilities.logarithmicDepthBuffer!==this.configuration.logarithmicDepthBuffer&&(this.configuration.logarithmicDepthBuffer=e.capabilities.logarithmicDepthBuffer,this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer)),t.texture.type!==this.outputTargetInternal.texture.type&&(this.outputTargetInternal.texture.type=t.texture.type,this.outputTargetInternal.texture.needsUpdate=!0);let o,l,u;this.debugMode&&(o=e.getContext(),l=o.getExtension("EXT_disjoint_timer_query_webgl2"),l===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.debugMode&&(u=o.createQuery(),o.beginQuery(l.TIME_ELAPSED_EXT,u)),this.camera.updateMatrixWorld(),this._r.set(this.width,this.height);let f=this.configuration.aoRadius;this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(f*=.5),this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.logarithmicDepthBuffer,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=t.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new O),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.samplesR.value=this.samplesR,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=f,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);for(let p=0;p<this.configuration.denoiseIterations;p++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new O),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=f,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=p,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=t.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.depthTexture,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectCompositerQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=f,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.autosetGamma?this.renderToScreen:this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new O),this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.outputTargetInternal),this.effectCompositerQuad.render(e),e.setRenderTarget(this.renderToScreen?null:i),this.copyQuad.material.uniforms.tDiffuse.value=this.outputTargetInternal.texture,this.copyQuad.render(e),this.debugMode&&(o.endQuery(l.TIME_ELAPSED_EXT),rg(u,o,this)),e.xr.enabled=a}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"&&(this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6)}}Uint8Array.from(atob(ig),n=>n.charCodeAt(0));ee.forwardRef(({halfRes:n,screenSpaceRadius:e,quality:t,depthAwareUpsampling:i=!0,aoRadius:a=5,aoSamples:o=16,denoiseSamples:l=4,denoiseRadius:u=12,distanceFalloff:f=1,intensity:p=1,color:d,renderMode:m=0},v)=>{const{camera:S,scene:M}=Mn(),T=ee.useMemo(()=>new U2(M,S),[]);return ee.useLayoutEffect(()=>{Vr(T.configuration,{color:d,aoRadius:a,distanceFalloff:f,intensity:p,aoSamples:o,denoiseSamples:l,denoiseRadius:u,screenSpaceRadius:e,renderMode:m,halfRes:n,depthAwareUpsampling:i})},[e,d,a,f,p,o,l,u,m,n,i]),ee.useLayoutEffect(()=>{t&&T.setQualityMode(t.charAt(0).toUpperCase()+t.slice(1))},[t]),Ge.jsx("primitive",{ref:v,object:T})});ql(TT);const bl=()=>Math.max(.2,Math.random());function I2({curve:n,color:e}){const t=ee.useRef();return Qa((i,a)=>t.current.uniforms.dashOffset.value-=a/100),Ge.jsxs("mesh",{children:[Ge.jsx("meshLineGeometry",{points:n}),Ge.jsx("meshLineMaterial",{ref:t,transparent:!0,lineWidth:.01,color:e,dashArray:.1,dashRatio:.99})]})}function N2({count:n,colors:e,radius:t=10}){const i=ee.useMemo(()=>new Array(n).fill().map((a,o)=>{const l=new O(Math.sin(0)*t*bl(),Math.cos(0)*t*bl(),0),u=new Array(30).fill().map((p,d)=>{const m=d/20*Math.PI*2;return l.add(new O(Math.sin(m)*t*bl(),Math.cos(m)*t*bl(),0)).clone()}),f=new oE(u).getPoints(100);return{color:e[parseInt(e.length*Math.random())],curve:f}}),[n,t,e]);return Ge.jsx("group",{position:[-t*2,-t,0],children:i.map((a,o)=>Ge.jsx(I2,{...a},o))})}const F2=mT({textr:null,movement:[0,0,0],scale:1,factor:0,wiggle:0,time:0},` uniform float time;
    uniform vec2 resolution;
    uniform float wiggle;
    varying vec2 vUv;
    varying vec3 vNormal;
    void main()	{
      vUv = uv;
      vec3 transformed = vec3(position);
      if (wiggle > 0.) {
        float theta = sin(time + position.y) / 2.0 * wiggle;
        float c = cos(theta);
        float s = sin(theta);
        mat3 m = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
        transformed = transformed * m;
        vNormal = vNormal * m;
      }      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
    }`,` uniform float time;
    uniform vec2 resolution;
    uniform float factor;
    uniform float scale;
    uniform vec3 movement;
    uniform sampler2D textr;
    varying vec2 vUv;
    void main()	{
      vec2 uv = vUv / scale + movement.xy * factor;
      vec4 color = texture2D(textr, uv);
      if (color.a < 0.1) discard;
      gl_FragColor = vec4(color.rgb, .1);
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`);ql({LayerMaterial:F2});let O2="/resources/bg.jpg",z2="/resources/stars.png",B2="/resources/ground.png",k2="/resources/fan.png",H2="/resources/fans1.png",G2="/resources/fans2.png";function V2(){const n=Am(1600,1e3,1.05),e=Am(1900,1e3,1.05),t=bf([O2,z2,B2,k2,H2,G2]),i=ee.useRef(),a=ee.useRef([]),[o]=ee.useState(()=>new O),[l]=ee.useState(()=>new O),u=[{texture:t[0],x:0,y:0,z:0,factor:.005,scale:e},{texture:t[1],x:0,y:0,z:10,factor:.005,wiggle:.2,scale:e},{texture:t[2],x:0,y:0,z:20,scale:e,wiggle:.4},{texture:t[3],x:0,y:5,z:30,scaleFactor:.9,wiggle:.4,scale:n},{texture:t[4],x:0,y:0,z:40,factor:.03,scaleFactor:1,wiggle:.6,scale:e},{texture:t[5],x:0,y:0,z:49,factor:.03,scaleFactor:1,wiggle:.4,scale:e}];return Qa((f,p)=>{o.lerp(l.set(f.pointer.x,f.pointer.y*.2,0),.2),i.current.position.x=Ll.lerp(i.current.position.x,f.pointer.x*20,.05),i.current.rotation.x=Ll.lerp(i.current.rotation.x,f.pointer.y/20,.05),i.current.rotation.y=Ll.lerp(i.current.rotation.y,-f.pointer.x/10,.05),a.current[4].uniforms.time.value=a.current[5].uniforms.time.value+=p,a.current[1].uniforms.time.value=a.current[2].uniforms.time.value+=p},1),Ge.jsxs("group",{ref:i,children:[Ge.jsx(N2,{count:10,radius:80,colors:["orange"]}),u.map(({scale:f,texture:p,ref:d,factor:m=0,scaleFactor:v=1,wiggle:S=0,x:M,y:T,z:y},g)=>Ge.jsx(AT,{scale:f,args:[1,1,S?10:1,S?10:1],position:[M,T,y],ref:d,children:Ge.jsx("layerMaterial",{movement:o,textr:p,factor:m,ref:w=>a.current[g]=w,wiggle:S,scale:v})},g))]})}function W2(){const n=ee.useRef();return ee.useLayoutEffect(()=>{const e=n.current.maskPass.getFullscreenMaterial();e.maskFunction=Vs.MULTIPLY_RGB_SET_ALPHA}),Ge.jsxs(Hw,{disableNormalPass:!0,multisampling:0,children:[Ge.jsx(eg,{ref:n,target:[0,0,30],bokehScale:8,focalLength:.1,width:1024}),Ge.jsx(qw,{})]})}function X2(){return Ge.jsxs(j2,{children:[Ge.jsx(V2,{}),Ge.jsx(W2,{})]})}function j2({children:n}){ql({Mesh:hi,PlaneGeometry:Wl,Group:Na});const e=ee.useRef(null),t=ee.useRef(null);return ee.useLayoutEffect(()=>{t.current||(t.current=VE(e.current).configure({events:qE,orthographic:!0,gl:{antialias:!1},camera:{zoom:5,position:[0,0,200],far:300,near:50},onCreated:a=>{a.events.connect(document.getElementById("root")),a.setEvents({compute:(o,l)=>{l.pointer.set(o.clientX/l.size.width*2-1,-(o.clientY/l.size.height)*1),l.raycaster.setFromCamera(l.pointer,l.camera)}})}}));const i=()=>t.current.configure({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",i),t.current.render(n),()=>window.removeEventListener("resize",i)},[n]),Ge.jsx("div",{className:"root w-full h-full m-0 p-0 -webkit-touch-callout-none overflow-hidden bg-gray-900",children:Ge.jsx("canvas",{ref:e,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",display:"block"}})})}function eA(){const n=Qg(),e=Jg(),{getUserInfo:t,loggedIn:i}=t0();return ee.useEffect(()=>{if(i){e(`/calendar/${n0(new Date).format($g)}`);return}n.pathname==="/login"||n.pathname==="/signup"||e("/login")},[t,e,i,n.pathname]),Ge.jsxs("main",{className:"relative flex h-[100vh] w-[100vw]",children:[Ge.jsx("div",{className:"absolute flex max-h-[400px] border-4 p-4 rounded-xl z-[999] m-auto top-0 right-48 bottom-0",children:Ge.jsx(e0,{})}),Ge.jsx(X2,{})]})}export{eA as default};
