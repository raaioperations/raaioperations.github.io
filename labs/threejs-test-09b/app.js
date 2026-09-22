var Fy=0,Fm=1,Uy=2;var Bc=1,Uh=2,ta=3,Ki=0,rn=1,Et=2,$i=0,na=1,Fc=2,Um=3,Hm=4,Hy=5;var Xr=100,zy=101,Gy=102,ky=103,Vy=104,Wy=200,Xy=201,qy=202,Yy=203,zm=204,Gm=205,Jy=206,Zy=207,Ky=208,$y=209,jy=210,Qy=211,eE=212,tE=213,nE=214,hh=0,dh=1,fh=2,Ho=3,ph=4,mh=5,gh=6,_h=7,km=0,iE=1,sE=2,Ri=0,Vm=1,Wm=2,Xm=3,Uc=4,qm=5,Ym=6,Jm=7,wm="attached",rE="detached",Zm=300,cr=301,qr=302,Hh=303,zh=304,Hc=306,Si=1e3,ri=1001,zo=1002,Gt=1003,Gh=1004;var Yr=1005;var kt=1006,ia=1007;var wi=1008;var On=1009,Km=1010,$m=1011,sa=1012,kh=1013,Ci=1014,Xn=1015,Ii=1016,Vh=1017,Wh=1018,ra=1020,jm=35902,Qm=35899,eg=1021,tg=1022,An=1023,Xi=1026,lr=1027,Xh=1028,qh=1029,ur=1030,Yh=1031;var Jh=1033,zc=33776,Gc=33777,kc=33778,Vc=33779,Zh=35840,Kh=35841,$h=35842,jh=35843,Qh=36196,ed=37492,td=37496,nd=37488,id=37489,Wc=37490,sd=37491,rd=37808,od=37809,ad=37810,cd=37811,ld=37812,ud=37813,hd=37814,dd=37815,fd=37816,pd=37817,md=37818,gd=37819,_d=37820,xd=37821,yd=36492,Ed=36494,Md=36495,vd=36283,Sd=36284,Xc=36285,Ad=36286,oE=2200,aE=2201,cE=2202,Or=2300,Br=2301,ch=2302,Cm=2303,Pr=2400,Lr=2401,ac=2402,bd=2500,lE=2501,ng=0,qc=1,oa=2,uE=3200;var Td=0,hE=1,Di="",zt="srgb",Sn="srgb-linear",cc="linear",gt="srgb";var lh=7680;var dE=519,fE=512,pE=513,mE=514,Rd=515,gE=516,_E=517,wd=518,xE=519,ig=35044,sg=35048;var rg="300 es",Mi=2e3,Go=2001;function _b(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yE(){let n=ko("canvas");return n.style.display="block",n}var jx={},Vo=null;function lc(...n){let e="THREE."+n.shift();Vo?Vo("log",e,...n):console.log(e,...n)}function EE(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ae(...n){n=EE(n);let e="THREE."+n.shift();if(Vo)Vo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=EE(n);let e="THREE."+n.shift();if(Vo)Vo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Nr(...n){let e=n.join(" ");e in jx||(jx[e]=!0,Ae(...n))}function ME(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var vE={[hh]:dh,[fh]:gh,[ph]:_h,[Ho]:mh,[dh]:hh,[gh]:fh,[_h]:ph,[mh]:Ho},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qx=1234567,rc=Math.PI/180,Fr=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function og(n,e){return(n%e+e)%e}function yb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Eb(n,e,t){return n!==e?(t-n)/(e-n):0}function oc(n,e,t){return(1-t)*n+t*e}function Mb(n,e,t,i){return oc(n,e,1-Math.exp(-t*i))}function vb(n,e=1){return e-Math.abs(og(n,e*2)-e)}function Sb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ab(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tb(n,e){return n+Math.random()*(e-n)}function Rb(n){return n*(.5-Math.random())}function wb(n){n!==void 0&&(Qx=n);let e=Qx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cb(n){return n*rc}function Ib(n){return n*Fr}function Db(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Pb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nb(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*u,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $e={DEG2RAD:rc,RAD2DEG:Fr,generateUUID:vi,clamp:Ke,euclideanModulo:og,mapLinear:yb,inverseLerp:Eb,lerp:oc,damp:Mb,pingpong:vb,smoothstep:Sb,smootherstep:Ab,randInt:bb,randFloat:Tb,randFloatSpread:Rb,seededRandom:wb,degToRad:Cb,radToDeg:Ib,isPowerOfTwo:Db,ceilPowerOfTwo:Pb,floorPowerOfTwo:Lb,setQuaternionFromProperEuler:Nb,normalize:xt,denormalize:Ei},He=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(h!==y||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*y;g<0&&(d=-d,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+y*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+y*a;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ey.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ey.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tm.copy(this).projectOnVector(e),this.sub(tm)}reflect(e){return this.sub(tm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tm=new I,ey=new fn,Ge=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],M=s[1],T=s[4],E=s[7],S=s[2],A=s[5],R=s[8];return r[0]=o*y+a*M+c*S,r[3]=o*g+a*T+c*A,r[6]=o*p+a*E+c*R,r[1]=l*y+u*M+h*S,r[4]=l*g+u*T+h*A,r[7]=l*p+u*E+h*R,r[2]=d*y+f*M+m*S,r[5]=d*g+f*T+m*A,r[8]=d*p+f*E+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=h*y,e[1]=(s*l-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nm.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nm.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nm=new Ge,ty=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ny=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ob(){let n={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Uo(s.r),s.g=Uo(s.g),s.b=Uo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?cc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sn]:{primaries:e,whitePoint:i,transfer:cc,toXYZ:ty,fromXYZ:ny,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:ty,fromXYZ:ny,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}var Ze=Ob();function vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ao,xh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ao===void 0&&(Ao=ko("canvas")),Ao.width=e.width,Ao.height=e.height;let s=Ao.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ao}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vs(t[i]/255)*255):t[i]=vs(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bb=0,Wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(im(s[o].image)):r.push(im(s[o]))}else r=im(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function im(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Fb=0,sm=new I,tn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ri,s=ri,r=kt,o=wi,a=An,c=On,l=n.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=vi(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sm).x}get height(){return this.source.getSize(sm).y}get depth(){return this.source.getSize(sm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Zm;tn.DEFAULT_ANISOTROPY=1;var yt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(f+1)/2,S=(p+1)/2,A=(u+d)/4,R=(h+y)/4,x=(m+g)/4;return T>E&&T>S?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=A/i,r=R/i):E>S?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-y)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yh=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},uc=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eh=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var We=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,y,g)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/bo.setFromMatrixColumn(e,0).length(),r=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d-y*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=y-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Hb)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Zs.crossVectors(i,Gn),Zs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Zs.crossVectors(i,Gn)),Zs.normalize(),Fu.crossVectors(Gn,Zs),s[0]=Zs.x,s[4]=Fu.x,s[8]=Gn.x,s[1]=Zs.y,s[5]=Fu.y,s[9]=Gn.y,s[2]=Zs.z,s[6]=Fu.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],M=i[3],T=i[7],E=i[11],S=i[15],A=s[0],R=s[4],x=s[8],b=s[12],C=s[1],N=s[5],B=s[9],z=s[13],P=s[2],k=s[6],J=s[10],Z=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=o*A+a*C+c*P+l*ie,r[4]=o*R+a*N+c*k+l*X,r[8]=o*x+a*B+c*J+l*Q,r[12]=o*b+a*z+c*Z+l*te,r[1]=u*A+h*C+d*P+f*ie,r[5]=u*R+h*N+d*k+f*X,r[9]=u*x+h*B+d*J+f*Q,r[13]=u*b+h*z+d*Z+f*te,r[2]=m*A+y*C+g*P+p*ie,r[6]=m*R+y*N+g*k+p*X,r[10]=m*x+y*B+g*J+p*Q,r[14]=m*b+y*z+g*Z+p*te,r[3]=M*A+T*C+E*P+S*ie,r[7]=M*R+T*N+E*k+S*X,r[11]=M*x+T*B+E*J+S*Q,r[15]=M*b+T*z+E*Z+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15],M=c*f-l*d,T=a*f-l*h,E=a*d-c*h,S=o*f-l*u,A=o*d-c*u,R=o*h-a*u;return t*(y*M-g*T+p*E)-i*(m*M-g*S+p*A)+s*(m*T-y*S+p*R)-r*(m*E-y*A+g*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],M=t*a-i*o,T=t*c-s*o,E=t*l-r*o,S=i*c-s*a,A=i*l-r*a,R=s*l-r*c,x=u*y-h*m,b=u*g-d*m,C=u*p-f*m,N=h*g-d*y,B=h*p-f*y,z=d*p-f*g,P=M*z-T*B+E*N+S*C-A*b+R*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*z-c*B+l*N)*k,e[1]=(s*B-i*z-r*N)*k,e[2]=(y*R-g*A+p*S)*k,e[3]=(d*A-h*R-f*S)*k,e[4]=(c*C-o*z-l*b)*k,e[5]=(t*z-s*C+r*b)*k,e[6]=(g*E-m*R-p*T)*k,e[7]=(u*R-d*E+f*T)*k,e[8]=(o*B-a*C+l*x)*k,e[9]=(i*C-t*B-r*x)*k,e[10]=(m*A-y*E+p*M)*k,e[11]=(h*E-u*A-f*M)*k,e[12]=(a*b-o*N-c*x)*k,e[13]=(t*N-i*b+s*x)*k,e[14]=(y*T-m*S-g*M)*k,e[15]=(u*S-h*T+d*M)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,y=o*u,g=o*h,p=a*h,M=c*l,T=c*u,E=c*h,S=i.x,A=i.y,R=i.z;return s[0]=(1-(y+p))*S,s[1]=(f+E)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(f-E)*A,s[5]=(1-(d+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+T)*R,s[9]=(g-M)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=bo.set(s[0],s[1],s[2]).length(),a=bo.set(s[4],s[5],s[6]).length(),c=bo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let l=1/o,u=1/a,h=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Mi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===Mi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Go)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Mi,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===Mi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Go)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},bo=new I,gi=new We,Ub=new I(0,0,0),Hb=new I(1,1,1),Zs=new I,Fu=new I,Gn=new I,iy=new We,sy=new fn,Ss=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sy.setFromEuler(this),this.setFromQuaternion(sy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var hc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zb=0,ry=new I,To=new fn,gs=new We,Uu=new I,$a=new I,Gb=new I,kb=new fn,oy=new I(1,0,0),ay=new I(0,1,0),cy=new I(0,0,1),ly={type:"added"},Vb={type:"removed"},Ro={type:"childadded",child:null},rm={type:"childremoved",child:null},Be=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Ss,i=new fn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ge}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(oy,e)}rotateY(e){return this.rotateOnAxis(ay,e)}rotateZ(e){return this.rotateOnAxis(cy,e)}translateOnAxis(e,t){return ry.copy(e).applyQuaternion(this.quaternion),this.position.add(ry.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oy,e)}translateY(e){return this.translateOnAxis(ay,e)}translateZ(e){return this.translateOnAxis(cy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uu.copy(e):Uu.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt($a,Uu,this.up):gs.lookAt(Uu,$a,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),To.setFromRotationMatrix(gs),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ly),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vb),rm.child=e,this.dispatchEvent(rm),rm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ly),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new I(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wb={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},SE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function om(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=og(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=om(o,r,e+1/3),this.g=om(o,r,e),this.b=om(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=SE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ze.workingToColorSpace(dn.copy(this),e),Math.round(Ke(dn.r*255,0,255))*65536+Math.round(Ke(dn.g*255,0,255))*256+Math.round(Ke(dn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=zt){Ze.workingToColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(Hu);let i=oc(Ks.h,Hu.h,t),s=oc(Ks.s,Hu.s,t),r=oc(Ks.l,Hu.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new re;re.NAMES=SE;var dc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fc=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=new I,_s=new I,am=new I,xs=new I,wo=new I,Co=new I,uy=new I,cm=new I,lm=new I,um=new I,hm=new yt,dm=new yt,fm=new yt,tr=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_i.subVectors(s,t),_s.subVectors(i,t),am.subVectors(e,t);let o=_i.dot(_i),a=_i.dot(_s),c=_i.dot(am),l=_s.dot(_s),u=_s.dot(am),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,xs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xs.x),c.addScaledVector(o,xs.y),c.addScaledVector(a,xs.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return hm.setScalar(0),dm.setScalar(0),fm.setScalar(0),hm.fromBufferAttribute(e,t),dm.fromBufferAttribute(e,i),fm.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hm,r.x),o.addScaledVector(dm,r.y),o.addScaledVector(fm,r.z),o}static isFrontFacing(e,t,i,s){return _i.subVectors(i,t),_s.subVectors(e,t),_i.cross(_s).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),_i.cross(_s).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;wo.subVectors(s,i),Co.subVectors(r,i),cm.subVectors(e,i);let c=wo.dot(cm),l=Co.dot(cm);if(c<=0&&l<=0)return t.copy(i);lm.subVectors(e,s);let u=wo.dot(lm),h=Co.dot(lm);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(wo,o);um.subVectors(e,r);let f=wo.dot(um),m=Co.dot(um);if(m>=0&&f<=m)return t.copy(r);let y=f*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Co,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return uy.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(uy,a);let p=1/(g+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(wo,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zu.copy(i.boundingBox)),zu.applyMatrix4(e.matrixWorld),this.union(zu)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Gu.subVectors(this.max,ja),Io.subVectors(e.a,ja),Do.subVectors(e.b,ja),Po.subVectors(e.c,ja),$s.subVectors(Do,Io),js.subVectors(Po,Do),wr.subVectors(Io,Po);let t=[0,-$s.z,$s.y,0,-js.z,js.y,0,-wr.z,wr.y,$s.z,0,-$s.x,js.z,0,-js.x,wr.z,0,-wr.x,-$s.y,$s.x,0,-js.y,js.x,0,-wr.y,wr.x,0];return!pm(t,Io,Do,Po,Gu)||(t=[1,0,0,0,1,0,0,0,1],!pm(t,Io,Do,Po,Gu))?!1:(ku.crossVectors($s,js),t=[ku.x,ku.y,ku.z],pm(t,Io,Do,Po,Gu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ys=[new I,new I,new I,new I,new I,new I,new I,new I],xi=new I,zu=new Vn,Io=new I,Do=new I,Po=new I,$s=new I,js=new I,wr=new I,ja=new I,Gu=new I,ku=new I,Cr=new I;function pm(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cr.fromArray(n,r);let a=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),c=e.dot(Cr),l=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var qt=new I,Vu=new He,Xb=0,Ut=class extends Ai{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ig,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vu.fromBufferAttribute(this,t),Vu.applyMatrix3(e),this.setXY(t,Vu.x,Vu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var pc=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var mc=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},qb=new Vn,Qa=new I,mm=new I,Dn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);let t=Qa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(mm)),this.expandByPoint(Qa.copy(e.center).sub(mm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yb=0,si=new We,gm=new Be,Lo=new I,kn=new Vn,ec=new Vn,en=new I,ht=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_b(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return gm.lookAt(e),gm.updateMatrix(),this.applyMatrix4(gm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ec.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(kn.min,ec.min),kn.expandByPoint(en),en.addVectors(kn.max,ec.max),kn.expandByPoint(en)):(kn.expandByPoint(ec.min),kn.expandByPoint(ec.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Lo.fromBufferAttribute(e,l),en.add(Lo)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new I,c[x]=new I;let l=new I,u=new I,h=new I,d=new He,f=new He,m=new He,y=new I,g=new I;function p(x,b,C){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(N),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(N),a[x].add(y),a[b].add(y),a[C].add(y),c[x].add(g),c[b].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let C=M[x],N=C.start,B=C.count;for(let z=N,P=N+B;z<P;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let T=new I,E=new I,S=new I,A=new I;function R(x){S.fromBufferAttribute(s,x),A.copy(S);let b=a[x];T.copy(b),T.sub(S.multiplyScalar(S.dot(b))).normalize(),E.crossVectors(A,b);let N=E.dot(c[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,N)}for(let x=0,b=M.length;x<b;++x){let C=M[x],N=C.start,B=C.count;for(let z=N,P=N+B;z<P;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Ut(d,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ig,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new I,Yo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_m=new I,Jb=new I,Zb=new Ge,yi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_m.subVectors(i,t).cross(Jb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_m),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zb.getNormalMatrix(e),s=this.coplanarPoint(_m).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kb=0,Pn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=na,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Gm,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lh,this.stencilZFail=lh,this.stencilZPass=lh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Es=new I,xm=new I,Wu=new I,Xu=new I,Ur=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xm.copy(e).add(t).multiplyScalar(.5),Wu.copy(t).sub(e).normalize(),Xu.copy(this.origin).sub(xm);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wu),a=Xu.dot(this.direction),c=-Xu.dot(Wu),l=Xu.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let y=1/u;h*=y,d*=y,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xm).addScaledVector(Wu,d),f}intersectSphere(e,t){if(e.radius<0)return null;Es.subVectors(e.center,this.origin);let i=Es.dot(this.direction),s=Es.dot(Es)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,y=t.y-o.y,g=t.z-o.z,p=i.x-o.x,M=i.y-o.y,T=i.z-o.z,E=Math.abs(c),S=Math.abs(l),A=Math.abs(u),R,x,b,C,N,B,z,P,k,J,Z,ie;if(E>=S&&E>=A?(b=c,B=h,k=m,ie=p,c>=0?(R=l,x=u,C=d,N=f,z=y,P=g,J=M,Z=T):(R=u,x=l,C=f,N=d,z=g,P=y,J=T,Z=M)):S>=A?(b=l,B=d,k=y,ie=M,l>=0?(R=u,x=c,C=f,N=h,z=g,P=m,J=T,Z=p):(R=c,x=u,C=h,N=f,z=m,P=g,J=p,Z=T)):(b=u,B=f,k=g,ie=T,u>=0?(R=c,x=l,C=h,N=d,z=m,P=y,J=p,Z=M):(R=l,x=c,C=d,N=h,z=y,P=m,J=M,Z=p)),b===0)return null;let X=R/b,Q=x/b,te=1/b,Pe=C-X*B,Ce=N-Q*B,Tt=z-X*k,rt=P-Q*k,ut=J-X*ie,q=Z-Q*ie,j=ut*rt-q*Tt,Ee=Pe*q-Ce*ut,Ve=Tt*Ce-rt*Pe;if(s){if(j<0||Ee<0||Ve<0)return null}else if((j<0||Ee<0||Ve<0)&&(j>0||Ee>0||Ve>0))return null;let _e=j+Ee+Ve;if(_e===0)return null;let Qe=te*(j*B+Ee*k+Ve*ie);return(_e>0?Qe<0:Qe>0)?null:this.at(Qe/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hy=new We,Ir=new Ur,qu=new Dn,dy=new I,Yu=new I,Ju=new I,Zu=new I,ym=new I,Ku=new I,fy=new I,$u=new I,Fe=class extends Be{constructor(e=new ht,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ku.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(ym.fromBufferAttribute(h,e),o?Ku.addScaledVector(ym,u):Ku.addScaledVector(ym.sub(t),u))}t.add(Ku)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qu.copy(i.boundingSphere),qu.applyMatrix4(r),Ir.copy(e.ray).recast(e.near),!(qu.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(qu,dy)===null||Ir.origin.distanceToSquared(dy)>(e.far-e.near)**2))&&(hy.copy(r).invert(),Ir.copy(e.ray).applyMatrix4(hy),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=a.getX(E),R=a.getX(E+1),x=a.getX(E+2);s=ju(this,p,e,i,l,u,h,A,R,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),E=a.getX(g+2);s=ju(this,o,e,i,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=E,R=E+1,x=E+2;s=ju(this,p,e,i,l,u,h,A,R,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,T=g+1,E=g+2;s=ju(this,o,e,i,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function $b(n,e,t,i,s,r,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ki,a),c===null)return null;$u.copy(a),$u.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($u);return l<t.near||l>t.far?null:{distance:l,point:$u.clone(),object:n}}function ju(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Yu),n.getVertexPosition(c,Ju),n.getVertexPosition(l,Zu);let u=$b(n,e,t,i,Yu,Ju,Zu,fy);if(u){let h=new I;tr.getBarycoord(fy,Yu,Ju,Zu,h),s&&(u.uv=tr.getInterpolatedAttribute(s,a,c,l,h,new He)),r&&(u.uv1=tr.getInterpolatedAttribute(r,a,c,l,h,new He)),o&&(u.normal=tr.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};tr.getNormal(Yu,Ju,Zu,d.normal),u.face=d,u.barycoord=h}return u}var tc=new yt,py=new yt,my=new yt,jb=new yt,gy=new We,Qu=new I,Em=new Dn,_y=new We,Mm=new Ur,gc=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wm,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qu),this.boundingBox.expandByPoint(Qu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qu),this.boundingSphere.expandByPoint(Qu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Em.copy(this.boundingSphere),Em.applyMatrix4(s),e.ray.intersectsSphere(Em)!==!1&&(_y.copy(s).invert(),Mm.copy(e.ray).applyMatrix4(_y),!(this.boundingBox!==null&&Mm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mm)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rE?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;py.fromBufferAttribute(s.attributes.skinIndex,e),my.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(tc.copy(t),t.set(0,0,0,0)):(tc.set(...t,1),t.set(0,0,0)),tc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=my.getComponent(r);if(o!==0){let a=py.getComponent(r);gy.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jb.copy(tc).applyMatrix4(gy),o)}}return t.isVector4&&(t.w=tc.w),t.applyMatrix4(this.bindMatrixInverse)}},Jo=class extends Be{constructor(){super(),this.isBone=!0,this.type="Bone"}},nr=class extends tn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Gt,u=Gt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xy=new We,Qb=new We,_c=class n{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qb;xy.multiplyMatrices(a,t[r]),xy.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new nr(t,e,e,An,Xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new Jo),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},As=class extends Ut{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},No=new We,yy=new We,eh=[],Ey=new Vn,eT=new We,nc=new Fe,ic=new Dn,ke=class extends Fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,eT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,No),Ey.copy(e.boundingBox).applyMatrix4(No),this.boundingBox.union(Ey)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,No),ic.copy(e.boundingSphere).applyMatrix4(No),this.boundingSphere.union(ic)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(nc.geometry=this.geometry,nc.material=this.material,nc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(i),e.ray.intersectsSphere(ic)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,No),yy.multiplyMatrices(i,No),nc.matrixWorld=yy,nc.raycast(e,eh);for(let o=0,a=eh.length;o<a;o++){let c=eh[o];c.instanceId=r,c.object=this,t.push(c)}eh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,Xh,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dr=new Dn,tT=new He(.5,.5),th=new I,Zo=class{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],T=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-m,S-M).normalize(),s[1].setComponents(l+o,f+u,p+m,S+M).normalize(),s[2].setComponents(l+a,f+h,p+y,S+T).normalize(),s[3].setComponents(l-a,f-h,p-y,S-T).normalize(),i)s[4].setComponents(c,d,g,E).normalize(),s[5].setComponents(l-c,f-d,p-g,S-E).normalize();else if(s[4].setComponents(l-c,f-d,p-g,S-E).normalize(),t===Mi)s[5].setComponents(l+c,f+d,p+g,S+E).normalize();else if(t===Go)s[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);let t=tT.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(th.x=s.normal.x>0?e.max.x:e.min.x,th.y=s.normal.y>0?e.max.y:e.min.y,th.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(th)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ko=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mh=new I,vh=new I,My=new We,sc=new Ur,nh=new Dn,vm=new I,vy=new I,Hr=class extends Be{constructor(e=new ht,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Mh.fromBufferAttribute(t,s-1),vh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Mh.distanceTo(vh);e.setAttribute("lineDistance",new Oe(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nh.copy(i.boundingSphere),nh.applyMatrix4(s),nh.radius+=r,e.ray.intersectsSphere(nh)===!1)return;My.copy(s).invert(),sc.copy(e.ray).applyMatrix4(My);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=l){let p=u.getX(y),M=u.getX(y+1),T=ih(this,e,sc,c,p,M,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(m-1),g=u.getX(f),p=ih(this,e,sc,c,y,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=l){let p=ih(this,e,sc,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=ih(this,e,sc,c,m-1,f,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ih(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Mh.fromBufferAttribute(a,s),vh.fromBufferAttribute(a,r),t.distanceSqToSegment(Mh,vh,vm,vy)>i)return;vm.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(vm);if(!(l<e.near||l>e.far))return{distance:l,point:vy.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Sy=new I,Ay=new I,xc=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Sy.fromBufferAttribute(t,s),Ay.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sy.distanceTo(Ay);e.setAttribute("lineDistance",new Oe(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yc=class extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$o=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},by=new We,Im=new Ur,sh=new Dn,rh=new I,zr=class extends Be{constructor(e=new ht,t=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sh.copy(i.boundingSphere),sh.applyMatrix4(s),sh.radius+=r,e.ray.intersectsSphere(sh)===!1)return;by.copy(s).invert(),Im.copy(e.ray).applyMatrix4(by);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let g=l.getX(m);rh.fromBufferAttribute(h,g),Ty(rh,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,y=f;m<y;m++)rh.fromBufferAttribute(h,m),Ty(rh,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ty(n,e,t,i,s,r,o){let a=Im.distanceSqToPoint(n);if(a<t){let c=new I;Im.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ec=class extends tn{constructor(e=[],t=cr,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ir=class extends tn{constructor(e,t,i=Ci,s,r,o,a=Gt,c=Gt,l,u=Xi,h=1){if(u!==Xi&&u!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sh=class extends ir{constructor(e,t=Ci,i=cr,s,r,o=Gt,a=Gt,c,l=Xi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mc=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class n extends ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function m(y,g,p,M,T,E,S,A,R,x,b){let C=E/R,N=S/x,B=E/2,z=S/2,P=A/2,k=R+1,J=x+1,Z=0,ie=0,X=new I;for(let Q=0;Q<J;Q++){let te=Q*N-z;for(let Pe=0;Pe<k;Pe++){let Ce=Pe*C-B;X[y]=Ce*M,X[g]=te*T,X[p]=P,l.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(Pe/R),h.push(1-Q/x),Z+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<R;te++){let Pe=d+te+k*Q,Ce=d+te+k*(Q+1),Tt=d+(te+1)+k*(Q+1),rt=d+(te+1)+k*Q;c.push(Pe,Ce,rt),c.push(Ce,Tt,rt),ie+=6}a.addGroup(f,ie,b),f+=ie,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},jo=class n extends ht{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=i*2+r,y=s+1,g=new I,p=new I;for(let M=0;M<=m;M++){let T=0,E=0,S=0,A=0;if(M<=i){let b=M/i,C=b*Math.PI/2;E=-u-e*Math.cos(C),S=e*Math.sin(C),A=-e*Math.cos(C),T=b*h}else if(M<=i+r){let b=(M-i)/r;E=-u+b*t,S=e,A=0,T=h+b*d}else{let b=(M-i-r)/i,C=b*Math.PI/2;E=u+e*Math.sin(C),S=e*Math.cos(C),A=e*Math.sin(C),T=h+d+b*h}let R=Math.max(0,Math.min(1,T/f)),x=0;M===0?x=.5/s:M===m&&(x=-.5/s);for(let b=0;b<=s;b++){let C=b/s,N=C*Math.PI*2,B=Math.sin(N),z=Math.cos(N);p.x=-S*z,p.y=E,p.z=S*B,a.push(p.x,p.y,p.z),g.set(-S*z,A,S*B),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+x,R)}if(M>0){let b=(M-1)*y;for(let C=0;C<s;C++){let N=b+C,B=b+C+1,z=M*y+C,P=M*y+C+1;o.push(N,B,z),o.push(B,P,z)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},vc=class n extends ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,u=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bi=class n extends ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,y=[],g=i/2,p=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function M(){let E=new I,S=new I,A=0,R=(t-e)/i;for(let x=0;x<=r;x++){let b=[],C=x/r,N=C*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,P=z*c+a,k=Math.sin(P),J=Math.cos(P);S.x=N*k,S.y=-C*i+g,S.z=N*J,h.push(S.x,S.y,S.z),E.set(k,R,J).normalize(),d.push(E.x,E.y,E.z),f.push(z,1-C),b.push(m++)}y.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let C=y[b][x],N=y[b+1][x],B=y[b+1][x+1],z=y[b][x+1];(e>0||b!==0)&&(u.push(C,N,z),A+=3),(t>0||b!==r-1)&&(u.push(N,B,z),A+=3)}l.addGroup(p,A,0),p+=A}function T(E){let S=m,A=new He,R=new I,x=0,b=E===!0?e:t,C=E===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let N=m;for(let B=0;B<=s;B++){let P=B/s*c+a,k=Math.cos(P),J=Math.sin(P);R.x=b*J,R.y=g*C,R.z=b*k,h.push(R.x,R.y,R.z),d.push(0,C,0),A.x=k*.5+.5,A.y=J*.5*C+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){let z=S+B,P=N+B;E===!0?u.push(P,P+1,z):u.push(P+1,P,z),x+=3}l.addGroup(p,x,E===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class n extends bi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gr=class n extends ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new I,E=new I,S=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],T),f(t[A+1],E),f(t[A+2],S),c(T,E,S,M)}function c(M,T,E,S){let A=S+1,R=[];for(let x=0;x<=A;x++){R[x]=[];let b=M.clone().lerp(E,x/A),C=T.clone().lerp(E,x/A),N=A-x;for(let B=0;B<=N;B++)B===0&&x===A?R[x][B]=b:R[x][B]=b.clone().lerp(C,B/N)}for(let x=0;x<A;x++)for(let b=0;b<2*(A-x)-1;b++){let C=Math.floor(b/2);b%2===0?(d(R[x][C+1]),d(R[x+1][C]),d(R[x][C])):(d(R[x][C+1]),d(R[x+1][C+1]),d(R[x+1][C]))}}function l(M){let T=new I;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(M),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function u(){let M=new I;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let E=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(E,1-S)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let T=o[M+0],E=o[M+2],S=o[M+4],A=Math.max(T,E,S),R=Math.min(T,E,S);A>.9&&R<.1&&(T<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,T){let E=M*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function m(){let M=new I,T=new I,E=new I,S=new I,A=new He,R=new He,x=new He;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),E.set(r[b+6],r[b+7],r[b+8]),A.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),S.copy(M).add(T).add(E).divideScalar(3);let N=g(S);y(A,C+0,M,N),y(R,C+2,T,N),y(x,C+4,E,N)}}function y(M,T,E,S){S<0&&M.x===1&&(o[T]=M.x-1),E.x===0&&E.z===0&&(o[T]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Wn=class n extends Gr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ah=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new He:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,c=new We;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ag(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ry=new I,wy=new I,Sm=new ag,Am=new ag,bm=new ag,Sc=class extends Ah{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wy.subVectors(s[0],s[1]).add(s[0]),l=wy);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ry.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ry),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Sm.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,y,g),Am.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,y,g),bm.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(Sm.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Am.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),bm.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Sm.calc(c),Am.calc(c),bm.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var sr=class n extends Gr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ac=class n extends Gr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},oi=class n extends ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],y=[],g=[];for(let p=0;p<u;p++){let M=p*d-o;for(let T=0;T<l;T++){let E=T*h-r;m.push(E,-M,0),y.push(0,0,1),g.push(T/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let T=M+l*p,E=M+l*(p+1),S=M+1+l*(p+1),A=M+1+l*p;f.push(T,E,A),f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yi=class n extends ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new I,m=new He;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let M=p+g,T=M,E=M+i+1,S=M+i+2,A=M+1;a.push(T,E,A),a.push(E,S,A)}}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pn=class n extends ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new I,d=new I,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let M=[],T=p/i,E=o+T*a,S=e*Math.cos(E),A=Math.sqrt(e*e-S*S),R=0;p===0&&o===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=s+b*r;h.x=-A*Math.cos(C),h.y=S,h.z=A*Math.sin(C),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(b+R,1-T),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let T=u[p][M+1],E=u[p][M],S=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(T,E,A),(p!==i-1||c<Math.PI)&&f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bc=class n extends Gr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Tc=class n extends ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],h=[],d=new I,f=new I,m=new I;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,E=(s+1)*y+g;c.push(p,M,E),c.push(M,T,E)}this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Cy(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Cy(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Jr(n[t]);for(let s in i)e[s]=i[s]}return e}function Cy(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function nT(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var AE={clone:Jr,merge:mn},iT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=nT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new We().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bh=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends Te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Th=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rh=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function rT(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Iy(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function oT(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wh=class extends Ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pr,endingEnd:Pr}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lr:r=e,a=2*t-i;break;case ac:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Lr:o=e,c=2*i-t;break;case ac:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*y+.5*m,E=f*g-f*y;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+M*o[l+S]+T*o[c+S]+E*o[h+S];return r}},Rc=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Ch=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ih=class extends Ji{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(s-t),y=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*y+o[c+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[l+m],g=o[c+m],p=f*d+m*2,M=h[p],T=h[p+1],E=e*d+m*2,S=u[E],A=u[E+1],R=cT(i,t,M,S,s);r[m]=bE(R,y,T,A,g)}return r}};function bE(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function aT(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function cT(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=bE(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=aT(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Nn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),uh(e.settings)&&(i.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ih(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case ch:t=this.InterpolantFactoryMethodSmooth;break;case Cm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return ch;case this.InterpolantFactoryMethodBezier:return Cm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;uh(this.settings)&&(Dy(this.settings.inTangents,e),Dy(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ue("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&xb(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ch,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){let y=t[h+m];if(y!==t[d+m]||y!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,uh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dy(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Br;var bs=class extends Nn{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Or;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};wc.prototype.ValueTypeName="color";var Ts=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};Ts.prototype.ValueTypeName="number";var Dh=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Rs=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Dh(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Nn{constructor(e,t,i){super(e,t,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Or;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends Nn{constructor(e,t,i,s){super(e,t,i,s)}};rr.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,i=[],s=bd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uT(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Nn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=rT(c);c=Iy(c,1,u),l=Iy(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ts(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function lT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ts;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return wc;case"quaternion":return Rs;case"bool":case"boolean":return bs;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lT(n.type);if(n.times===void 0){let i=[],s=[];oT(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),uh(n.settings)&&(t.settings={inTangents:er(n.settings.inTangents,Float32Array),outTangents:er(n.settings.outTangents,Float32Array)}),t}var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Py(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Py(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Py(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ph=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},TE=new Ph,Zi=class{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms={},Dm=class extends Error{constructor(e,t){super(e),this.response=t}},Qo=class extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ms[e]!==void 0){Ms[e].push({onLoad:t,onProgress:i,onError:s});return}Ms[e]=[],Ms[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ms[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,y=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:T,value:E})=>{if(T)p.close();else{y+=E.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let A=0,R=u.length;A<R;A++){let x=u[A];x.onProgress&&x.onProgress(S)}p.enqueue(E),M()}},T=>{p.error(T)})}}});return new Response(g)}else throw new Dm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Wi.add(`file:${e}`,l);let u=Ms[e];delete Ms[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Ms[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ms[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oo=new WeakMap,Lh=class extends Zi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Oo.get(o);h===void 0&&(h=[],Oo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=ko("img");function c(){u(),t&&t(this);let h=Oo.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Oo.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Wi.remove(`image:${e}`);let d=Oo.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Oo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Cc=class extends Zi{constructor(e){super(e)}load(e,t,i,s){let r=new tn,o=new Lh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},or=class extends Be{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ic=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tm=new We,Ly=new I,Ny=new I,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ly.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ly),Ny.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ny),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Tm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Tm,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Go||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Tm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oh=new I,ah=new fn,Vi=new I,Dc=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oh,ah,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oh,ah,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oh,ah,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oh,ah,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new I,Oy=new He,By=new He,Yt=class extends Dc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,t){return this.getViewBounds(e,Oy,By),t.subVectors(By,Oy)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pm=class extends ea{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Pc=class extends or{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lm=class extends ea{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ar=class extends Dc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nm=class extends ea{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Nm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Lc=class extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rm=new WeakMap,Nc=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Rm.has(o)===!0?(s&&s(Rm.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Rm.set(c,l),Wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Bo=-90,Fo=1,Nh=class extends Be{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Bo,Fo,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Bo,Fo,e,t);r.layers=this.layers,this.add(r);let o=new Yt(Bo,Fo,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Bo,Fo,e,t);a.layers=this.layers,this.add(a);let c=new Yt(Bo,Fo,e,t);c.layers=this.layers,this.add(c);let l=new Yt(Bo,Fo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Oh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bh=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){fn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;fn.multiplyQuaternionsFlat(e,o,e,t,e,i),fn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},lg="\\[\\]\\.:\\/",hT=new RegExp("["+lg+"]","g"),ug="[^"+lg+"]",dT="[^"+lg.replace("\\.","")+"]",fT=/((?:WC+[\/:])*)/.source.replace("WC",ug),pT=/(WCOD+)?/.source.replace("WCOD",dT),mT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ug),gT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ug),_T=new RegExp("^"+fT+pT+mT+gT+"$"),xT=["material","materials","bones","map"],Om=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hT,"")}static parseTrackName(e){let t=_T.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xT.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Om;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fh=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Pr,endingEnd:Pr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=aE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case lE:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case bd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===cE;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===oE){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Lr,s.endingEnd=Lr):(e?s.endingStart=this.zeroSlopeAtStart?Lr:Pr:s.endingStart=ac,t?s.endingEnd=this.zeroSlopeAtEnd?Lr:Pr:s.endingEnd=ac)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}},yT=new Float32Array(1),Is=class extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;m=new Bh(St.create(i,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Rc(new Float32Array(2),new Float32Array(2),1,yT),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?kr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=bd),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Fh(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?kr.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Oc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Bm=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function hg(n,e,t,i){let s=ET(i);switch(t){case eg:return n*e;case Xh:return n*e/s.components*s.byteLength;case qh:return n*e/s.components*s.byteLength;case ur:return n*e*2/s.components*s.byteLength;case Yh:return n*e*2/s.components*s.byteLength;case tg:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case Jh:return n*e*4/s.components*s.byteLength;case zc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kh:case jh:return Math.max(n,16)*Math.max(e,8)/4;case Zh:case $h:return Math.max(n,8)*Math.max(e,8)/2;case Qh:case ed:case nd:case id:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case td:case Wc:case sd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yd:case Ed:case Md:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vd:case Sd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xc:case Ad:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ET(n){switch(n){case On:case Km:return{byteLength:1,components:1};case sa:case $m:case Ii:return{byteLength:2,components:1};case Vh:case Wh:return{byteLength:2,components:4};case Ci:case kh:case Xn:return{byteLength:4,components:1};case jm:case Qm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function JE(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vT(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],y=h[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let y=h[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ST=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
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
#endif`,bT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BT=`#ifdef USE_IRIDESCENCE
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
#endif`,FT=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qT=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QT="gl_FragColor = linearToOutputTexel( gl_FragColor );",eR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
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
#endif`,sR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uR=`#ifdef USE_GRADIENTMAP
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
}`,hR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,mR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_R=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ER=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,TR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LR=`#if defined( USE_POINTS_UV )
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
#endif`,NR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qR=`#ifdef USE_NORMALMAP
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
#endif`,YR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$R=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gw=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Iw=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Uw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kw=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jw=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$w=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,jw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,eC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,tC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:ST,alphahash_pars_fragment:AT,alphamap_fragment:bT,alphamap_pars_fragment:TT,alphatest_fragment:RT,alphatest_pars_fragment:wT,aomap_fragment:CT,aomap_pars_fragment:IT,batching_pars_vertex:DT,batching_vertex:PT,begin_vertex:LT,beginnormal_vertex:NT,bsdfs:OT,iridescence_fragment:BT,bumpmap_pars_fragment:FT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:zT,clipping_planes_vertex:GT,color_fragment:kT,color_pars_fragment:VT,color_pars_vertex:WT,color_vertex:XT,common:qT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:JT,displacementmap_pars_vertex:ZT,displacementmap_vertex:KT,emissivemap_fragment:$T,emissivemap_pars_fragment:jT,colorspace_fragment:QT,colorspace_pars_fragment:eR,envmap_fragment:tR,envmap_common_pars_fragment:nR,envmap_pars_fragment:iR,envmap_pars_vertex:sR,envmap_physical_pars_fragment:mR,envmap_vertex:rR,fog_vertex:oR,fog_pars_vertex:aR,fog_fragment:cR,fog_pars_fragment:lR,gradientmap_pars_fragment:uR,lightmap_pars_fragment:hR,lights_lambert_fragment:dR,lights_lambert_pars_fragment:fR,lights_pars_begin:pR,lights_toon_fragment:gR,lights_toon_pars_fragment:_R,lights_phong_fragment:xR,lights_phong_pars_fragment:yR,lights_physical_fragment:ER,lights_physical_pars_fragment:MR,lights_fragment_begin:vR,lights_fragment_maps:SR,lights_fragment_end:AR,lightprobes_pars_fragment:bR,logdepthbuf_fragment:TR,logdepthbuf_pars_fragment:RR,logdepthbuf_pars_vertex:wR,logdepthbuf_vertex:CR,map_fragment:IR,map_pars_fragment:DR,map_particle_fragment:PR,map_particle_pars_fragment:LR,metalnessmap_fragment:NR,metalnessmap_pars_fragment:OR,morphinstance_vertex:BR,morphcolor_vertex:FR,morphnormal_vertex:UR,morphtarget_pars_vertex:HR,morphtarget_vertex:zR,normal_fragment_begin:GR,normal_fragment_maps:kR,normal_pars_fragment:VR,normal_pars_vertex:WR,normal_vertex:XR,normalmap_pars_fragment:qR,clearcoat_normal_fragment_begin:YR,clearcoat_normal_fragment_maps:JR,clearcoat_pars_fragment:ZR,iridescence_pars_fragment:KR,opaque_fragment:$R,packing:jR,premultiplied_alpha_fragment:QR,project_vertex:ew,dithering_fragment:tw,dithering_pars_fragment:nw,roughnessmap_fragment:iw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:ow,shadowmap_vertex:aw,shadowmask_pars_fragment:cw,skinbase_vertex:lw,skinning_pars_vertex:uw,skinning_vertex:hw,skinnormal_vertex:dw,specularmap_fragment:fw,specularmap_pars_fragment:pw,tonemapping_fragment:mw,tonemapping_pars_fragment:gw,transmission_fragment:_w,transmission_pars_fragment:xw,uv_pars_fragment:yw,uv_pars_vertex:Ew,uv_vertex:Mw,worldpos_vertex:vw,background_vert:Sw,background_frag:Aw,backgroundCube_vert:bw,backgroundCube_frag:Tw,cube_vert:Rw,cube_frag:ww,depth_vert:Cw,depth_frag:Iw,distance_vert:Dw,distance_frag:Pw,equirect_vert:Lw,equirect_frag:Nw,linedashed_vert:Ow,linedashed_frag:Bw,meshbasic_vert:Fw,meshbasic_frag:Uw,meshlambert_vert:Hw,meshlambert_frag:zw,meshmatcap_vert:Gw,meshmatcap_frag:kw,meshnormal_vert:Vw,meshnormal_frag:Ww,meshphong_vert:Xw,meshphong_frag:qw,meshphysical_vert:Yw,meshphysical_frag:Jw,meshtoon_vert:Zw,meshtoon_frag:Kw,points_vert:$w,points_frag:jw,shadow_vert:Qw,shadow_frag:eC,sprite_vert:tC,sprite_frag:nC},de={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qi={basic:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:mn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:mn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:mn([de.points,de.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:mn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:mn([de.common,de.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:mn([de.sprite,de.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:mn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:mn([de.lights,de.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Qi.physical={uniforms:mn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Cd={r:0,b:0,g:0},iC=new We,ZE=new Ge;ZE.set(-1,0,0,0,1,0,0,0,1);function sC(n,e,t,i,s,r){let o=new re(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let E=M.backgroundBlurriness>0;T=e.get(T,E)}return T}function m(M){let T=!1,E=f(M);E===null?g(o,a):E&&E.isColor&&(g(E,1),T=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,T){let E=f(T);E&&(E.isCubeTexture||E.mapping===Hc)?(l===void 0&&(l=new Fe(new qi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Jr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iC.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ZE),l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==gt,(u!==E||h!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Fe(new oi(2,2),new nn({name:"BackgroundMaterial",uniforms:Jr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,T){M.getRGB(Cd,cg(n)),t.buffers.color.setClear(Cd.r,Cd.g,Cd.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:y,dispose:p}}function rC(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(N,B,z,P,k){let J=!1,Z=h(N,P,z,B);r!==Z&&(r=Z,l(r.object)),J=f(N,P,z,k),J&&m(N,P,z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(N,B,z,P),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,B,z,P){let k=P.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let Z=N.isInstancedMesh===!0?N.id:0,ie=J[Z];ie===void 0&&(ie={},J[Z]=ie);let X=ie[z.id];X===void 0&&(X={},ie[z.id]=X);let Q=X[k];return Q===void 0&&(Q=d(c()),X[k]=Q),Q}function d(N){let B=[],z=[],P=[];for(let k=0;k<t;k++)B[k]=0,z[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,B,z,P){let k=r.attributes,J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=k[X],Pe=J[X];if(Pe===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Pe=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Pe=N.instanceColor)),te===void 0||te.attribute!==Pe||Pe&&te.data!==Pe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==P}function m(N,B,z,P){let k={},J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=J[X];te===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let Pe={};Pe.attribute=te,te&&te.data&&(Pe.data=te.data),k[X]=Pe,Z++}r.attributes=k,r.attributesNum=Z,r.index=P}function y(){let N=r.newAttributes;for(let B=0,z=N.length;B<z;B++)N[B]=0}function g(N){p(N,0)}function p(N,B){let z=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;z[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),k[N]!==B&&(n.vertexAttribDivisor(N,B),k[N]=B)}function M(){let N=r.newAttributes,B=r.enabledAttributes;for(let z=0,P=B.length;z<P;z++)B[z]!==N[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function T(N,B,z,P,k,J,Z){Z===!0?n.vertexAttribIPointer(N,B,z,k,J):n.vertexAttribPointer(N,B,z,P,k,J)}function E(N,B,z,P){y();let k=P.attributes,J=z.getAttributes(),Z=B.defaultAttributeValues;for(let ie in J){let X=J[ie];if(X.location>=0){let Q=k[ie];if(Q===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let te=Q.normalized,Pe=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;let Tt=Ce.buffer,rt=Ce.type,ut=Ce.bytesPerElement,q=rt===n.INT||rt===n.UNSIGNED_INT||Q.gpuType===kh;if(Q.isInterleavedBufferAttribute){let j=Q.data,Ee=j.stride,Ve=Q.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,Pe/X.locationSize,rt,te,Ee*ut,(Ve+Pe/X.locationSize*_e)*ut,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let j=0;j<X.locationSize;j++)T(X.location+j,Pe/X.locationSize,rt,te,Pe*ut,Pe/X.locationSize*j*ut,q)}}else if(Z!==void 0){let te=Z[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}M()}function S(){b();for(let N in i){let B=i[N];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete i[N.id]}function R(N){for(let B in i){let z=i[B];for(let P in z){let k=z[P];if(k[N.id]===void 0)continue;let J=k[N.id];for(let Z in J)u(J[Z].object),delete J[Z];delete k[N.id]}}}function x(N){for(let B in i){let z=i[B],P=N.isInstancedMesh===!0?N.id:0,k=z[P];if(k!==void 0){for(let J in k){let Z=k[J];for(let ie in Z)u(Z[ie].object),delete Z[ie];delete k[J]}delete z[P],Object.keys(z).length===0&&delete i[B]}}}function b(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function oC(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function aC(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==On&&R!==Xn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:E,maxSamples:S,samples:A}}function cC(n){let e=this,t=null,i=0,s=!1,r=!1,o=new yi,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let M=r?0:i,T=M*4,E=p.clippingState||null;c.value=E,E=u(m,d,T,f);for(let S=0;S!==T;++S)E[S]=t[S];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,m!==!0||g===null){let p=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=f;T!==y;++T,E+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var ca=4,lC=6,uC=20,hC=256,Yc=new ar,RE=new re,dg=null,fg=0,pg=0,mg=!1,dC=new I,Zr=new I,Dd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=dC}=r;dg=this._renderer.getRenderTarget(),fg=this._renderer.getActiveCubeFace(),pg=this._renderer.getActiveMipmapLevel(),mg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=CE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dg,fg,pg),this._renderer.xr.enabled=mg,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dg=this._renderer.getRenderTarget(),fg=this._renderer.getActiveCubeFace(),pg=this._renderer.getActiveMipmapLevel(),mg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Ii,format:An,colorSpace:Sn,depthBuffer:!1},s=wE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wE(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fC(r)),this._blurMaterial=mC(r,e,t),this._ggxMaterial=pC(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new ht,e);this._renderer.compile(t,Yc)}_sceneToCubeUV(e,t,i,s,r){let c=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(RE),h.toneMapping=Ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new qi,new Lt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(RE),p=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let S=this._cubeSize;aa(s,E*S,T>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cr||e.mapping===qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=IE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=CE());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Yc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-ca?i-m+ca:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,aa(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Yc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,aa(e,g,p,3*y,2*y),s.setRenderTarget(e),s.render(a,Yc)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ca?s-this._lodMax+ca:0),d=4*(this._cubeSize-u);aa(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(c,Yc)}};function fC(n){let e=[],t=[],i=n,s=n-ca+1+lC;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,m=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,T=p>2?0:-1,E=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(E,f*d*p);for(let S=0;S<d;S++){let A=u[S*2]*2-1,R=u[S*2+1]*2-1;p===0?Zr.set(1,R,A):p===1?Zr.set(-A,1,-R):p===2?Zr.set(-A,R,1):p===3?Zr.set(-1,R,-A):p===4?Zr.set(-A,-1,R):Zr.set(A,R,-1),Zr.toArray(y,(p*d+S)*f)}}let g=new ht;g.setAttribute("position",new Ut(m,f)),g.setAttribute("outputDirection",new Ut(y,f)),t.push(new Fe(g,null)),i>ca&&i--}return{lodMeshes:t,sizeLods:e}}function wE(n,e,t){let i=new In(n,e,t);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pC(n,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function mC(n,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:uC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function CE(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function IE(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pd=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ec(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:$i});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=kt),new Nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function gC(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Hh||f===zh)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new Pd(m.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===Hh||f===zh,y=f===cr||f===qr;if(m||y){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Dd(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new Dd(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===Hh?d.mapping=cr:f===zh&&(d.mapping=qr),d}function c(d){let f=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _C(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Nr("WebGLRenderer: "+i+" extension not supported."),s}}}function xC(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let T=0,E=M.length;T<E;T+=3){let S=M[T+0],A=M[T+1],R=M[T+2];d.push(S,A,A,R,R,S)}}else{let M=m.array;y=m.version;for(let T=0,E=M.length/3-1;T<E;T+=3){let S=T+0,A=T+1,R=T+2;d.push(S,A,A,R,R,S)}}let g=new(m.count>=65535?mc:pc)(d,1);g.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function yC(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*o,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function EC(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function MC(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let E=a.attributes.position.count*T,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*S*4*h),R=new uc(A,E,S,h);R.type=Xn,R.needsUpdate=!0;let x=T*4;for(let C=0;C<h;C++){let N=g[C],B=p[C],z=M[C],P=E*S*4*C;for(let k=0;k<N.count;k++){let J=k*x;f===!0&&(s.fromBufferAttribute(N,k),A[P+J+0]=s.x,A[P+J+1]=s.y,A[P+J+2]=s.z,A[P+J+3]=0),m===!0&&(s.fromBufferAttribute(B,k),A[P+J+4]=s.x,A[P+J+5]=s.y,A[P+J+6]=s.z,A[P+J+7]=0),y===!0&&(s.fromBufferAttribute(z,k),A[P+J+8]=s.x,A[P+J+9]=s.y,A[P+J+10]=s.z,A[P+J+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new He(E,S)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function vC(n,e,t,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var SC={[Vm]:"LINEAR_TONE_MAPPING",[Wm]:"REINHARD_TONE_MAPPING",[Xm]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Ym]:"AGX_TONE_MAPPING",[Jm]:"NEUTRAL_TONE_MAPPING",[qm]:"CUSTOM_TONE_MAPPING"};function AC(n,e,t,i,s,r){let o=new In(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ht;l.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let u=new bh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Fe(l,u),d=new ar(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],T=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let A=0;A<M.length;A++){let R=M[A];R.setSize&&R.setSize(E,S)}},this.setEffects=function(E){M=E,T=M.length>0&&M[0].isRenderPass===!0;let S=o.width,A=o.height;M.length>0&&a===null&&(a=new In(S,A,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),c=new In(S,A,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(S,A)}},this.begin=function(E,S){if(y||E.toneMapping===Ri&&M.length===0)return!1;if(p=S,S!==null){let A=S.width,R=S.height;(o.width!==A||o.height!==R)&&this.setSize(A,R)}return T===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Ri,!0},this.hasRenderPass=function(){return T},this.end=function(E,S){E.toneMapping=g,y=!0;let A=o,R=a;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(E,R,A,S),b.needsSwap!==!1&&(A=R,R=R===a?c:a))}if(f!==E.outputColorSpace||m!==E.toneMapping){f=E.outputColorSpace,m=E.toneMapping,u.defines={},Ze.getTransfer(f)===gt&&(u.defines.SRGB_TRANSFER="");let x=SC[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(p),E.render(h,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var KE=new tn,xg=new ir(1,1),$E=new uc,jE=new Eh,QE=new Ec,DE=[],PE=[],LE=new Float32Array(16),NE=new Float32Array(9),OE=new Float32Array(4);function ua(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=DE[s];if(r===void 0&&(r=new Float32Array(s),DE[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Od(n,e){let t=PE[e];t===void 0&&(t=new Int32Array(e),PE[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function RC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function wC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function CC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;OE.set(i),n.uniformMatrix2fv(this.addr,!1,OE),Kt(t,i)}}function IC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;NE.set(i),n.uniformMatrix3fv(this.addr,!1,NE),Kt(t,i)}}function DC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;LE.set(i),n.uniformMatrix4fv(this.addr,!1,LE),Kt(t,i)}}function PC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function NC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function OC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function BC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function UC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function HC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function zC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xg.compareFunction=t.isReversedDepthBuffer()?wd:Rd,r=xg):r=KE,t.setTexture2D(e||r,s)}function GC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jE,s)}function kC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||QE,s)}function VC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$E,s)}function WC(n){switch(n){case 5126:return bC;case 35664:return TC;case 35665:return RC;case 35666:return wC;case 35674:return CC;case 35675:return IC;case 35676:return DC;case 5124:case 35670:return PC;case 35667:case 35671:return LC;case 35668:case 35672:return NC;case 35669:case 35673:return OC;case 5125:return BC;case 36294:return FC;case 36295:return UC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return zC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return kC;case 36289:case 36303:case 36311:case 36292:return VC}}function XC(n,e){n.uniform1fv(this.addr,e)}function qC(n,e){let t=ua(e,this.size,2);n.uniform2fv(this.addr,t)}function YC(n,e){let t=ua(e,this.size,3);n.uniform3fv(this.addr,t)}function JC(n,e){let t=ua(e,this.size,4);n.uniform4fv(this.addr,t)}function ZC(n,e){let t=ua(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KC(n,e){let t=ua(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $C(n,e){let t=ua(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jC(n,e){n.uniform1iv(this.addr,e)}function QC(n,e){n.uniform2iv(this.addr,e)}function e1(n,e){n.uniform3iv(this.addr,e)}function t1(n,e){n.uniform4iv(this.addr,e)}function n1(n,e){n.uniform1uiv(this.addr,e)}function i1(n,e){n.uniform2uiv(this.addr,e)}function s1(n,e){n.uniform3uiv(this.addr,e)}function r1(n,e){n.uniform4uiv(this.addr,e)}function o1(n,e,t){let i=this.cache,s=e.length,r=Od(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=xg:o=KE;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function a1(n,e,t){let i=this.cache,s=e.length,r=Od(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jE,r[o])}function c1(n,e,t){let i=this.cache,s=e.length,r=Od(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||QE,r[o])}function l1(n,e,t){let i=this.cache,s=e.length,r=Od(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$E,r[o])}function u1(n){switch(n){case 5126:return XC;case 35664:return qC;case 35665:return YC;case 35666:return JC;case 35674:return ZC;case 35675:return KC;case 35676:return $C;case 5124:case 35670:return jC;case 35667:case 35671:return QC;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return l1}}var yg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WC(t.type)}},Eg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},Mg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},gg=/(\w+)(\])?(\[|\.)?/g;function BE(n,e){n.seq.push(e),n.map[e.id]=e}function h1(n,e,t){let i=n.name,s=i.length;for(gg.lastIndex=0;;){let r=gg.exec(i),o=gg.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){BE(t,l===void 0?new yg(a,n,e):new Eg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Mg(a),BE(t,h)),t=h}}}var la=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);h1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function FE(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var d1=37297,f1=0;function p1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var UE=new Ge;function m1(n){Ze._getMatrix(UE,Ze.workingColorSpace,n);let e=`mat3( ${UE.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case cc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function HE(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+p1(n.getShaderSource(e),a)}else return r}function g1(n,e){let t=m1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _1={[Vm]:"Linear",[Wm]:"Reinhard",[Xm]:"Cineon",[Uc]:"ACESFilmic",[Ym]:"AgX",[Jm]:"Neutral",[qm]:"Custom"};function x1(n,e){let t=_1[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Id=new I;function y1(){Ze.getLuminanceCoefficients(Id);let n=Id.x.toFixed(4),e=Id.y.toFixed(4),t=Id.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zc).join(`
`)}function M1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function v1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zc(n){return n!==""}function zE(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function GE(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vg(n){return n.replace(S1,b1)}var A1=new Map;function b1(n,e){let t=Je[e];if(t===void 0){let i=A1.get(e);if(i!==void 0)t=Je[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vg(t)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kE(n){return n.replace(T1,R1)}function R1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function VE(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var w1={[Bc]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function C1(n){return w1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I1={[cr]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function D1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":I1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var P1={[qr]:"ENVMAP_MODE_REFRACTION"};function L1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":P1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N1={[km]:"ENVMAP_BLENDING_MULTIPLY",[iE]:"ENVMAP_BLENDING_MIX",[sE]:"ENVMAP_BLENDING_ADD"};function O1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":N1[n.combine]||"ENVMAP_BLENDING_NONE"}function B1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=C1(t),l=D1(t),u=L1(t),h=O1(t),d=B1(t),f=E1(t),m=M1(r),y=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zc).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zc).join(`
`),p.length>0&&(p+=`
`)):(g=[VE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zc).join(`
`),p=[VE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ri?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zc).join(`
`)),o=vg(o),o=zE(o,t),o=GE(o,t),a=vg(a),a=zE(a,t),a=GE(a,t),o=kE(o),a=kE(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,E=M+p+a,S=FE(s,s.VERTEX_SHADER,T),A=FE(s,s.FRAGMENT_SHADER,E);s.attachShader(y,S),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(N){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(A)||"",k=B.trim(),J=z.trim(),Z=P.trim(),ie=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,A);else{let Q=HE(s,S,"vertex"),te=HE(s,A,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Q+`
`+te)}else k!==""?Ae("WebGLProgram: Program Info Log:",k):(J===""||Z==="")&&(X=!1);X&&(N.diagnostics={runnable:ie,programLog:k,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(S),s.deleteShader(A),x=new la(s,y),b=v1(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,d1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}var U1=0,Sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ag(e),t.set(e,i)),i}},Ag=class{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}};function H1(n){return n===ur||n===Wc||n===Xc}function z1(n,e,t,i,s,r){let o=new hc,a=new Sg,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,b,C,N,B,z){let P=N.fog,k=B.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||J,Z),X=ie&&ie.mapping===Hc?ie.image.height:null,Q=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pe=te!==void 0?te.length:0,Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let Tt,rt,ut,q;if(Q){let wt=Qi[Q];Tt=wt.vertexShader,rt=wt.fragmentShader}else{Tt=x.vertexShader,rt=x.fragmentShader;let wt=a.getVertexShaderStage(x),ft=a.getFragmentShaderStage(x);a.update(x,wt,ft),ut=wt.id,q=ft.id}let j=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Qe=!!x.map,Jt=!!x.matcap,tt=!!ie,ct=!!x.aoMap,Rt=!!x.lightMap,st=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,Qt=!!x.displacementMap,Cn=!!x.emissiveMap,Ot=!!x.metalnessMap,Wt=!!x.roughnessMap,O=x.anisotropy>0,ln=x.clearcoat>0,_t=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,W=O&&!!x.anisotropyMap,se=ln&&!!x.clearcoatMap,oe=ln&&!!x.clearcoatNormalMap,Y=ln&&!!x.clearcoatRoughnessMap,$=_&&!!x.iridescenceMap,ae=_&&!!x.iridescenceThicknessMap,Re=F&&!!x.sheenColorMap,he=F&&!!x.sheenRoughnessMap,ce=!!x.specularMap,we=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Xe=G&&!!x.transmissionMap,L=G&&!!x.thicknessMap,le=!!x.gradientMap,K=!!x.alphaMap,ue=x.alphaTest>0,me=!!x.alphaHash,ee=!!x.extensions,Ie=Ri;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Se={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Tt,fragmentShader:rt,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:Jt,envMap:tt,envMapMode:tt&&ie.mapping,envMapCubeUVHeight:X,aoMap:ct,lightMap:Rt,bumpMap:st,normalMap:Pt,displacementMap:Qt,emissiveMap:Cn,normalMapObjectSpace:Pt&&x.normalMapType===hE,normalMapTangentSpace:Pt&&x.normalMapType===Td,packedNormalMap:Pt&&x.normalMapType===Td&&H1(x.normalMap.format),metalnessMap:Ot,roughnessMap:Wt,anisotropy:O,anisotropyMap:W,clearcoat:ln,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Y,dispersion:_t,retroreflection:w,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:F,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:ce,specularColorMap:we,specularIntensityMap:Ne,transmission:G,transmissionMap:Xe,thicknessMap:L,gradientMap:le,opaque:x.transparent===!1&&x.blending===na&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:me,combine:x.combine,mapUv:Qe&&m(x.map.channel),aoMapUv:ct&&m(x.aoMap.channel),lightMapUv:Rt&&m(x.lightMap.channel),bumpMapUv:st&&m(x.bumpMap.channel),normalMapUv:Pt&&m(x.normalMap.channel),displacementMapUv:Qt&&m(x.displacementMap.channel),emissiveMapUv:Cn&&m(x.emissiveMap.channel),metalnessMapUv:Ot&&m(x.metalnessMap.channel),roughnessMapUv:Wt&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:se&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(x.sheenRoughnessMap.channel),specularMapUv:ce&&m(x.specularMap.channel),specularColorMapUv:we&&m(x.specularColorMap.channel),specularIntensityMapUv:Ne&&m(x.specularIntensityMap.channel),transmissionMapUv:Xe&&m(x.transmissionMap.channel),thicknessMapUv:L&&m(x.thicknessMap.channel),alphaMapUv:K&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pt||O),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Qe||K),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ce,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:Cn&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Et,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let b=f[x.type],C;if(b){let N=Qi[b];C=AE.clone(N.uniforms)}else C=x.uniforms;return C}function E(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new F1(n,b,x,s),l.push(C),u.set(b,C)),C}function S(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:R}}function G1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function k1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function WE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function XE(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,y,g,p){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function c(d,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(d,f,m,y,g,p);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function l(d,f,m,y,g,p){let M=a(d,f,m,y,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||k1),i.length>1&&i.sort(f||WE),s.length>1&&s.sort(f||WE)}function h(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function V1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new XE,n.set(i,[o])):s>=r.length?(o=new XE,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function W1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new re};break;case"SpotLight":t={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function X1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var q1=0;function Y1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J1(n){let e=new W1,t=X1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new We,o=new We;function a(l){let u=0,h=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,T=0,E=0,S=0,A=0,R=0,x=0,b=0,C=0;l.sort(Y1);for(let B=0,z=l.length;B<z;B++){let P=l[B],k=P.color,J=P.intensity,Z=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ur?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*J,h+=k.g*J,d+=k.b*J;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],J);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=ie;let Pe=Q.getViewportCount();for(let Ce=0;Ce<Pe;Ce++)i.sunShadowMatrix[y+Ce]=Q.getMatrix(Ce),i.sunShadowCascade[y+Ce]=Q._cascadeData[Ce];y+=Pe,m++}i.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=X,g++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(J),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[M]=X;let Q=P.shadow;if(P.map&&(i.spotLightMap[x]=P.map,x++,Q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[M]=Q.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=ie,R++}M++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(k).multiplyScalar(J),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=P.shadow.matrix,A++}i.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(J),X.groundColor.copy(P.groundColor).multiplyScalar(J),i.hemi[E]=X,E++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==E||N.numSunShadows!==m||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==x||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-b,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=p,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=E,N.numSunShadows=m,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=x,N.numLightProbes=C,i.version=q1++)}function c(l,u){let h=0,d=0,f=0,m=0,y=0,g=0,p=u.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let E=l[M];if(E.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),h++}else if(E.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(E.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function qE(n){let e=new J1(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Z1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new qE(n),e.set(s,[a])):r>=o.length?(a=new qE(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Q1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],YE=new We,Jc=new I,_g=new I;function eI(n,e,t){let i=new Zo,s=new He,r=new He,o=new yt,a=new Th,c=new Rh,l={},u=t.maxTextureSize,h={[Ki]:rn,[rn]:Ki,[Et]:Et},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:K1,fragmentShader:$1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let p=this.type;this.render=function(A,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Uh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bc);let b=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending($i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=A.length;P<k;P++){let J=A[P],Z=J.shadow;if(Z===void 0){Ae("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ie=Z.getFrameExtents();s.multiply(ie),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,Z.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ta){if(J.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new In(s.x,s.y,{format:ur,type:Ii,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new ir(s.x,s.y,Xn),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Xi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Gt,Z.map.depthTexture.magFilter=Gt}else J.isPointLight?(Z.map=new Pd(s.x),Z.map.depthTexture=new Sh(s.x,Ci)):(Z.map=new In(s.x,s.y),Z.map.depthTexture=new ir(s.x,s.y,Ci)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Xi,this.type===Bc?(Z.map.depthTexture.compareFunction=X?wd:Rd,Z.map.depthTexture.minFilter=kt,Z.map.depthTexture.magFilter=kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Gt,Z.map.depthTexture.magFilter=Gt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let te=0;te<Q;te++){let Pe=Z.getCamera(te);if(J.isPointLight){let Ce=Z.camera,Tt=Z.matrix,rt=J.distance||Ce.far;rt!==Ce.far&&(Ce.far=rt,Ce.updateProjectionMatrix()),Jc.setFromMatrixPosition(J.matrixWorld),Ce.position.copy(Jc),_g.copy(Ce.position),_g.add(j1[te]),Ce.up.copy(Q1[te]),Ce.lookAt(_g),Ce.updateMatrixWorld(),Tt.makeTranslation(-Jc.x,-Jc.y,-Jc.z),YE.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(YE,Ce.coordinateSystem,Ce.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,te),n.clear();else{te===0&&(n.setRenderTarget(Z.map),n.clear());let Ce=Z.getViewport(te);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(o)}i=Z.getFrustum(te),E(R,x,Pe,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ta&&M(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,C,N)};function M(A,R){let x=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new In(s.x,s.y,{format:ur,type:Ii}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,x,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,x,f,y,null)}function T(A,R,x,b){let C=null,N=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=C.uuid,z=R.uuid,P=l[B];P===void 0&&(P={},l[B]=P);let k=P[z];k===void 0&&(k=C.clone(),P[z]=k,R.addEventListener("dispose",S)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ta?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=x}return C}function E(A,R,x,b,C){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===ta)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let z=e.update(A),P=A.material;if(Array.isArray(P)){let k=z.groups;for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=P[ie.materialIndex];if(X&&X.visible){let Q=T(A,X,b,C);A.onBeforeShadow(n,A,R,x,z,Q,ie),n.renderBufferDirect(x,null,z,Q,A,ie),A.onAfterShadow(n,A,R,x,z,Q,ie)}}}else if(P.visible){let k=T(A,P,b,C);A.onBeforeShadow(n,A,R,x,z,k,null),n.renderBufferDirect(x,null,z,k,A,null),A.onAfterShadow(n,A,R,x,z,k,null)}}let B=A.children;for(let z=0,P=B.length;z<P;z++)E(B[z],R,x,b,C)}function S(A){A.target.removeEventListener("dispose",S);for(let x in l){let b=l[x],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function tI(n,e){function t(){let L=!1,le=new yt,K=null,ue=new yt(0,0,0,0);return{setMask:function(me){K!==me&&!L&&(n.colorMask(me,me,me,me),K=me)},setLocked:function(me){L=me},setClear:function(me,ee,Ie,Se,wt){wt===!0&&(me*=Se,ee*=Se,Ie*=Se),le.set(me,ee,Ie,Se),ue.equals(le)===!1&&(n.clearColor(me,ee,Ie,Se),ue.copy(le))},reset:function(){L=!1,K=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,le=!1,K=null,ue=null,me=null;return{setReversed:function(ee){if(le!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let Se=me;me=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(ee){ee?j(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ee){K!==ee&&!L&&(n.depthMask(ee),K=ee)},setFunc:function(ee){if(le&&(ee=vE[ee]),ue!==ee){switch(ee){case hh:n.depthFunc(n.NEVER);break;case dh:n.depthFunc(n.ALWAYS);break;case fh:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case ph:n.depthFunc(n.EQUAL);break;case mh:n.depthFunc(n.GEQUAL);break;case gh:n.depthFunc(n.GREATER);break;case _h:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ee}},setLocked:function(ee){L=ee},setClear:function(ee){me!==ee&&(me=ee,le&&(ee=1-ee),n.clearDepth(ee))},reset:function(){L=!1,K=null,ue=null,me=null,le=!1}}}function s(){let L=!1,le=null,K=null,ue=null,me=null,ee=null,Ie=null,Se=null,wt=null;return{setTest:function(ft){L||(ft?j(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ft){le!==ft&&!L&&(n.stencilMask(ft),le=ft)},setFunc:function(ft,mi,Gi){(K!==ft||ue!==mi||me!==Gi)&&(n.stencilFunc(ft,mi,Gi),K=ft,ue=mi,me=Gi)},setOp:function(ft,mi,Gi){(ee!==ft||Ie!==mi||Se!==Gi)&&(n.stencilOp(ft,mi,Gi),ee=ft,Ie=mi,Se=Gi)},setLocked:function(ft){L=ft},setClear:function(ft){wt!==ft&&(n.clearStencil(ft),wt=ft)},reset:function(){L=!1,le=null,K=null,ue=null,me=null,ee=null,Ie=null,Se=null,wt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,R=null,x=new re(0,0,0),b=0,C=!1,N=null,B=null,z=null,P=null,k=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ie>=2);let Q=null,te={},Pe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Tt=new yt().fromArray(Pe),rt=new yt().fromArray(Ce);function ut(L,le,K,ue){let me=new Uint8Array(4),ee=n.createTexture();n.bindTexture(L,ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<K;Ie++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(le+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ee}let q={};q[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(Ho),st(!1),Pt(Fm),j(n.CULL_FACE),ct($i);function j(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ve(L,le){return d[L]!==le?(n.bindFramebuffer(L,le),d[L]=le,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(L,le){let K=m,ue=!1;if(L){K=f.get(le),K===void 0&&(K=[],f.set(le,K));let me=L.textures;if(K.length!==me.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ie=me.length;ee<Ie;ee++)K[ee]=n.COLOR_ATTACHMENT0+ee;K.length=me.length,ue=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ue=!0);ue&&n.drawBuffers(K)}function Qe(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Jt={[Xr]:n.FUNC_ADD,[zy]:n.FUNC_SUBTRACT,[Gy]:n.FUNC_REVERSE_SUBTRACT};Jt[ky]=n.MIN,Jt[Vy]=n.MAX;let tt={[Wy]:n.ZERO,[Xy]:n.ONE,[qy]:n.SRC_COLOR,[zm]:n.SRC_ALPHA,[jy]:n.SRC_ALPHA_SATURATE,[Ky]:n.DST_COLOR,[Jy]:n.DST_ALPHA,[Yy]:n.ONE_MINUS_SRC_COLOR,[Gm]:n.ONE_MINUS_SRC_ALPHA,[$y]:n.ONE_MINUS_DST_COLOR,[Zy]:n.ONE_MINUS_DST_ALPHA,[Qy]:n.CONSTANT_COLOR,[eE]:n.ONE_MINUS_CONSTANT_COLOR,[tE]:n.CONSTANT_ALPHA,[nE]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(L,le,K,ue,me,ee,Ie,Se,wt,ft){if(L===$i){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),L!==Hy){if(L!==p||ft!==C){if((M!==Xr||S!==Xr)&&(n.blendEquation(n.FUNC_ADD),M=Xr,S=Xr),ft)switch(L){case na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case Um:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",L);break}else switch(L){case na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Um:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",L);break}T=null,E=null,A=null,R=null,x.set(0,0,0),b=0,p=L,C=ft}return}me=me||le,ee=ee||K,Ie=Ie||ue,(le!==M||me!==S)&&(n.blendEquationSeparate(Jt[le],Jt[me]),M=le,S=me),(K!==T||ue!==E||ee!==A||Ie!==R)&&(n.blendFuncSeparate(tt[K],tt[ue],tt[ee],tt[Ie]),T=K,E=ue,A=ee,R=Ie),(Se.equals(x)===!1||wt!==b)&&(n.blendColor(Se.r,Se.g,Se.b,wt),x.copy(Se),b=wt),p=L,C=!1}function Rt(L,le){L.side===Et?Ee(n.CULL_FACE):j(n.CULL_FACE);let K=L.side===rn;le&&(K=!K),st(K),L.blending===na&&L.transparent===!1?ct($i):ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ue=L.stencilWrite;a.setTest(ue),ue&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Cn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function Pt(L){L!==Fy?(j(n.CULL_FACE),L!==B&&(L===Fm?n.cullFace(n.BACK):L===Uy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),B=L}function Qt(L){L!==z&&(Z&&n.lineWidth(L),z=L)}function Cn(L,le,K){L?(j(n.POLYGON_OFFSET_FILL),(P!==le||k!==K)&&(P=le,k=K,o.getReversed()&&(le=-le),n.polygonOffset(le,K))):Ee(n.POLYGON_OFFSET_FILL)}function Ot(L){L?j(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Wt(L){L===void 0&&(L=n.TEXTURE0+J-1),Q!==L&&(n.activeTexture(L),Q=L)}function O(L,le,K){K===void 0&&(Q===null?K=n.TEXTURE0+J-1:K=Q);let ue=te[K];ue===void 0&&(ue={type:void 0,texture:void 0},te[K]=ue),(ue.type!==L||ue.texture!==le)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(L,le||q[L]),ue.type=L,ue.texture=le)}function ln(){let L=te[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _t(){try{n.compressedTexImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function $(){try{n.texImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function ae(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function Re(L,le){h[L]!==le&&(n.pixelStorei(L,le),h[L]=le)}function he(L){Tt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Tt.copy(L))}function ce(L){rt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function we(L,le){let K=l.get(le);K===void 0&&(K=new WeakMap,l.set(le,K));let ue=K.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(le,L.name),K.set(L,ue))}function Ne(L,le){let ue=l.get(le).get(L);c.get(le)!==ue&&(n.uniformBlockBinding(le,ue,L.__bindingPointIndex),c.set(le,ue))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,te={},d={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,R=null,x=new re(0,0,0),b=0,C=!1,N=null,B=null,z=null,P=null,k=null,Tt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:Ee,bindFramebuffer:Ve,drawBuffers:_e,useProgram:Qe,setBlending:ct,setMaterial:Rt,setFlipSided:st,setCullFace:Pt,setLineWidth:Qt,setPolygonOffset:Cn,setScissorTest:Ot,activeTexture:Wt,bindTexture:O,unbindTexture:ln,compressedTexImage2D:_t,compressedTexImage3D:w,texImage2D:Y,texImage3D:$,pixelStorei:Re,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:he,viewport:ce,reset:Xe}}function nI(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return m?new OffscreenCanvas(w,_):ko("canvas")}function g(w,_,F){let G=1,W=_t(w);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(G*W.width),oe=Math.floor(G*W.height);d===void 0&&(d=y(se,oe));let Y=_?y(se,oe):d;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(w,0,0,se,oe),Ae("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+oe+")."),Y}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function M(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,_,F,G,W,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),F===n.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),F===n.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),F===n.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let $=se?cc:Ze.getTransfer(W);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=$===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),F===n.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(w,_){let F;return w?_===null||_===Ci||_===ra?F=n.DEPTH24_STENCIL8:_===Xn?F=n.DEPTH32F_STENCIL8:_===sa&&(F=n.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===ra?F=n.DEPTH_COMPONENT24:_===Xn?F=n.DEPTH_COMPONENT32F:_===sa&&(F=n.DEPTH_COMPONENT16),F}function A(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),N(_)}function b(w){let _=i.get(w);if(_.__webglInit===void 0)return;let F=w.source,G=f.get(F);if(G){let W=G[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(G).length===0&&f.delete(F)}i.remove(w)}function C(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let F=w.source,G=f.get(F);delete G[_.__cacheKey],o.memory.textures--}function N(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let W=0;W<_.__webglFramebuffer[G].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[G][W]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=w.textures;for(let G=0,W=F.length;G<W;G++){let se=i.get(F[G]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(w)}let B=0;function z(){B=0}function P(){return B}function k(w){B=w}function J(){let w=B;return w>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,w}function Z(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ie(w,_){let F=i.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let G=w.image;if(G===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(w,_){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ee(F,w,_);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Q(w,_){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ee(F,w,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function te(w,_){let F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ve(F,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let Pe={[Si]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},Ce={[Gt]:n.NEAREST,[Gh]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Tt={[fE]:n.NEVER,[xE]:n.ALWAYS,[pE]:n.LESS,[Rd]:n.LEQUAL,[mE]:n.EQUAL,[wd]:n.GEQUAL,[gE]:n.GREATER,[_E]:n.NOTEQUAL};function rt(w,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===ia||_.magFilter===Yr||_.magFilter===wi||_.minFilter===kt||_.minFilter===ia||_.minFilter===Yr||_.minFilter===wi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Pe[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Pe[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Pe[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ce[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ce[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Yr&&_.minFilter!==wi||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ut(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let G=_.source,W=f.get(G);W===void 0&&(W={},f.set(G,W));let se=Z(_);if(se!==w.__cacheKey){W[se]===void 0&&(W[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[se].usedTimes++;let oe=W[w.__cacheKey];oe!==void 0&&(W[w.__cacheKey].usedTimes--,oe.usedTimes===0&&C(_)),w.__cacheKey=se,w.__webglTexture=W[se].texture}return F}function q(w,_,F){return Math.floor(Math.floor(w/F)/_)}function j(w,_,F,G){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{se.sort((Re,he)=>Re.start-he.start);let oe=0;for(let Re=1;Re<se.length;Re++){let he=se[oe],ce=se[Re],we=he.start+he.count,Ne=q(ce.start,_.width,4),Xe=q(he.start,_.width,4);ce.start<=we+1&&Ne===Xe&&q(ce.start+ce.count-1,_.width,4)===Ne?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++oe,se[oe]=ce)}se.length=oe+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Re=0,he=se.length;Re<he;Re++){let ce=se[Re],we=Math.floor(ce.start/4),Ne=Math.ceil(ce.count/4),Xe=we%_.width,L=Math.floor(we/_.width),le=Ne,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Xe,L,le,K,F,G,_.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function Ee(w,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let W=ut(w,_),se=_.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);let oe=i.get(se);if(se.version!==oe.__version||W===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Ze.getPrimaries(Ze.workingColorSpace),ue=_.colorSpace===Di?null:Ze.getPrimaries(_.colorSpace),me=_.colorSpace===Di||K===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let $=g(_.image,!1,s.maxTextureSize);$=ln(_,$);let ae=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),he=E(_.internalFormat,ae,Re,_.normalized,_.colorSpace,_.isVideoTexture);rt(G,_);let ce,we=_.mipmaps,Ne=_.isVideoTexture!==!0,Xe=oe.__version===void 0||W===!0,L=se.dataReady,le=A(_,$);if(_.isDepthTexture)he=S(_.format===lr,_.type),Xe&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,ae,Re,null));else if(_.isDataTexture)if(we.length>0){Ne&&Xe&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let K=0,ue=we.length;K<ue;K++)ce=we[K],Ne?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,Re,ce.data):t.texImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ae,Re,ce.data);_.generateMipmaps=!1}else Ne?(Xe&&t.texStorage2D(n.TEXTURE_2D,le,he,$.width,$.height),L&&j(_,$,ae,Re)):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,ae,Re,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,we[0].width,we[0].height,$.depth);for(let K=0,ue=we.length;K<ue;K++)if(ce=we[K],_.format!==An)if(ae!==null)if(Ne){if(L)if(_.layerUpdates.size>0){let me=hg(ce.width,ce.height,_.format,_.type);for(let ee of _.layerUpdates){let Ie=ce.data.subarray(ee*me/ce.data.BYTES_PER_ELEMENT,(ee+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ee,ce.width,ce.height,1,ae,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,$.depth,ae,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,he,ce.width,ce.height,$.depth,0,ce.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,$.depth,ae,Re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,he,ce.width,ce.height,$.depth,0,ae,Re,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ne&&Xe&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let K=0,ue=we.length;K<ue;K++)ce=we[K],_.format!==An?ae!==null?Ne?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,Re,ce.data):t.texImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ae,Re,ce.data)}else if(_.isDataArrayTexture)if(Ne){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,$.width,$.height,$.depth),L)if(_.layerUpdates.size>0){let K=hg($.width,$.height,_.format,_.type);for(let ue of _.layerUpdates){let me=$.data.subarray(ue*K/$.data.BYTES_PER_ELEMENT,(ue+1)*K/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,$.width,$.height,1,ae,Re,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,Re,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,ae,Re,$.data);else if(_.isData3DTexture)Ne?(Xe&&t.texStorage3D(n.TEXTURE_3D,le,he,$.width,$.height,$.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,Re,$.data)):t.texImage3D(n.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,ae,Re,$.data);else if(_.isFramebufferTexture){if(Xe)if(Ne)t.texStorage2D(n.TEXTURE_2D,le,he,$.width,$.height);else{let K=$.width,ue=$.height;for(let me=0;me<le;me++)t.texImage2D(n.TEXTURE_2D,me,he,K,ue,0,ae,Re,null),K>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),$.parentNode!==K){K.appendChild($),h.add(_),K.onpaint=ue=>{let me=ue.changedElements;for(let ee of h)me.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let me=n.RGBA,ee=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,ee,Ie,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ne&&Xe){let K=_t(we[0]);t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height)}for(let K=0,ue=we.length;K<ue;K++)ce=we[K],Ne?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ae,Re,ce):t.texImage2D(n.TEXTURE_2D,K,he,ae,Re,ce);_.generateMipmaps=!1}else if(Ne){if(Xe){let K=_t($);t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Re,$)}else t.texImage2D(n.TEXTURE_2D,0,he,ae,Re,$);p(_)&&M(G),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ve(w,_,F){if(_.image.length!==6)return;let G=ut(w,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let se=i.get(W);if(W.version!==se.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let oe=Ze.getPrimaries(Ze.workingColorSpace),Y=_.colorSpace===Di?null:Ze.getPrimaries(_.colorSpace),$=_.colorSpace===Di||oe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ae&&!Re?he[ee]=g(_.image[ee],!0,s.maxCubemapSize):he[ee]=Re?_.image[ee].image:_.image[ee],he[ee]=ln(_,he[ee]);let ce=he[0],we=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),Xe=E(_.internalFormat,we,Ne,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,le=se.__version===void 0||G===!0,K=W.dataReady,ue=A(_,ce);rt(n.TEXTURE_CUBE_MAP,_);let me;if(ae){L&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,ce.width,ce.height);for(let ee=0;ee<6;ee++){me=he[ee].mipmaps;for(let Ie=0;Ie<me.length;Ie++){let Se=me[Ie];_.format!==An?we!==null?L?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Xe,Se.width,Se.height,0,Se.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Se.width,Se.height,we,Ne,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Xe,Se.width,Se.height,0,we,Ne,Se.data)}}}else{if(me=_.mipmaps,L&&le){me.length>0&&ue++;let ee=_t(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Re){L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,we,Ne,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,he[ee].width,he[ee].height,0,we,Ne,he[ee].data);for(let Ie=0;Ie<me.length;Ie++){let wt=me[Ie].image[ee].image;L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,wt.width,wt.height,we,Ne,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Xe,wt.width,wt.height,0,we,Ne,wt.data)}}else{L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,Ne,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,we,Ne,he[ee]);for(let Ie=0;Ie<me.length;Ie++){let Se=me[Ie];L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,we,Ne,Se.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Xe,we,Ne,Se.image[ee])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function _e(w,_,F,G,W,se){let oe=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=E(F.internalFormat,oe,Y,F.normalized,F.colorSpace),ae=i.get(_),Re=i.get(F);if(Re.__renderTarget=_,!ae.__hasExternalTextures){let he=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,se,$,he,ce,_.depth,0,oe,Y,null):t.texImage2D(W,se,$,he,ce,0,oe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,W,Re.__webglTexture,0,Ot(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,W,Re.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(w,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let G=_.depthTexture,W=G&&G.isDepthTexture?G.type:null,se=S(_.stencilBuffer,W),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(_),se,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(_),se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,se,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,w)}else{let G=_.textures;for(let W=0;W<G.length;W++){let se=G[W],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),$=E(se.internalFormat,oe,Y,se.normalized,se.colorSpace);Wt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(_),$,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(_),$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(w,_,F){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_.depthTexture);let ae=r.convert(_.depthTexture.format),Re=r.convert(_.depthTexture.type),he;_.depthTexture.format===Xi?he=n.DEPTH_COMPONENT24:_.depthTexture.format===lr&&(he=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,_.width,_.height,0,ae,Re,null)}}else ie(_.depthTexture,0);let se=W.__webglTexture,oe=Ot(_),Y=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,$=_.depthTexture.format===lr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xi)Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,$,Y,se,0);else if(_.depthTexture.format===lr)Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,$,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(w){let _=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let G=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=G}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Jt(_.__webglFramebuffer[G],w,G);else{let G=w.texture.mipmaps;G&&G.length>0?Jt(_.__webglFramebuffer[0],w,0):Jt(_.__webglFramebuffer,w,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Qe(_.__webglDepthbuffer[G],w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}else{let G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Qe(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(w,_,F){let G=i.get(w);_!==void 0&&_e(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(w)}function Rt(w){let _=w.texture,F=i.get(w),G=i.get(_);w.addEventListener("dispose",x);let W=w.textures,se=w.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,o.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Y=0,$=W.length;Y<$;Y++){let ae=i.get(W[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Wt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let $=W[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ae=r.convert($.format,$.colorSpace),Re=r.convert($.type),he=E($.internalFormat,ae,Re,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),ce=Ot(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[Y][$],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else _e(F.__webglFramebuffer[Y],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,$=W.length;Y<$;Y++){let ae=W[Y],Re=i.get(ae),he=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),rt(he,ae),_e(F.__webglFramebuffer,w,ae,n.COLOR_ATTACHMENT0+Y,he,0),p(ae)&&M(he)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),rt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[$],w,_,n.COLOR_ATTACHMENT0,Y,$);else _e(F.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,Y,0);p(_)&&M(Y),t.unbindTexture()}w.depthBuffer&&tt(w)}function st(w){let _=w.textures;for(let F=0,G=_.length;F<G;F++){let W=_[F];if(p(W)){let se=T(w),oe=i.get(W).__webglTexture;t.bindTexture(se,oe),M(se),t.unbindTexture()}}}let Pt=[],Qt=[];function Cn(w){if(w.samples>0){if(Wt(w)===!1){let _=w.textures,F=w.width,G=w.height,W=n.COLOR_BUFFER_BIT,se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(w),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let $=w.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Re=i.get(_[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,W,n.NEAREST),c===!0&&(Pt.length=0,Qt.length=0,Pt.push(n.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Pt.push(se),Qt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Re=i.get(_[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ot(w){return Math.min(s.maxSamples,w.samples)}function Wt(w){let _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function ln(w,_){let F=w.colorSpace,G=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Sn&&F!==Di&&(Ze.getTransfer(F)===gt?(G!==An||W!==On)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",F)),_}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=ct,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iI(n,e){function t(i,s=Di){let r,o=Ze.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Vh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Km)return n.BYTE;if(i===$m)return n.SHORT;if(i===sa)return n.UNSIGNED_SHORT;if(i===kh)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===eg)return n.ALPHA;if(i===tg)return n.RGB;if(i===An)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Xh)return n.RED;if(i===qh)return n.RED_INTEGER;if(i===ur)return n.RG;if(i===Yh)return n.RG_INTEGER;if(i===Jh)return n.RGBA_INTEGER;if(i===zc||i===Gc||i===kc||i===Vc)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Kh||i===$h||i===jh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qh||i===ed||i===td||i===nd||i===id||i===Wc||i===sd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qh||i===ed)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===td)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nd)return r.COMPRESSED_R11_EAC;if(i===id)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return r.COMPRESSED_RG11_EAC;if(i===sd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rd||i===od||i===ad||i===cd||i===ld||i===ud||i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===_d||i===xd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ad)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ud)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===md)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yd||i===Ed||i===Md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yd)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vd||i===Sd||i===Xc||i===Ad)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ad)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var sI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new nn({vertexShader:sI,fragmentShader:rI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tg=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new bg,p={},M=t.getContextAttributes(),T=null,E=null,S=[],A=[],R=new He,x=null,b=null,C=new Yt;C.viewport=new yt;let N=new Yt;N.viewport=new yt;let B=[C,N],z=new Oh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new Xo,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new Xo,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new Xo,S[q]=j),j.getHandSpace()};function J(q){let j=A.indexOf(q.inputSource);if(j===-1)return;let Ee=S[j];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,l||o),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<S.length;q++){let j=A[q];j!==null&&(A[q]=null,S[q].disconnect(j))}P=null,k=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,E=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ve=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?lr:Xi,Ve=M.stencil?ra:Ci);let Qe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new In(d.textureWidth,d.textureHeight,{format:An,type:On,depthTexture:new ir(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new In(f.framebufferWidth,f.framebufferHeight,{format:An,type:On,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(q){for(let j=0;j<q.removed.length;j++){let Ee=q.removed[j],Ve=A.indexOf(Ee);Ve>=0&&(A[Ve]=null,S[Ve].disconnect(Ee))}for(let j=0;j<q.added.length;j++){let Ee=q.added[j],Ve=A.indexOf(Ee);if(Ve===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=A.length){A.push(Ee),Ve=Qe;break}else if(A[Qe]===null){A[Qe]=Ee,Ve=Qe;break}if(Ve===-1)break}let _e=S[Ve];_e&&_e.connect(Ee)}}let X=new I,Q=new I;function te(q,j,Ee){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);let Ve=X.distanceTo(Q),_e=j.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Jt=_e[14]/(_e[10]-1),tt=_e[14]/(_e[10]+1),ct=(_e[9]+1)/_e[5],Rt=(_e[9]-1)/_e[5],st=(_e[8]-1)/_e[0],Pt=(Qe[8]+1)/Qe[0],Qt=Jt*st,Cn=Jt*Pt,Ot=Ve/(-st+Pt),Wt=Ot*-st;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(Ot),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=Jt+Ot,ln=tt+Ot,_t=Qt-Wt,w=Cn+(Ve-Wt),_=ct*tt/ln*O,F=Rt*tt/ln*O;q.projectionMatrix.makePerspective(_t,w,_,F,O,ln),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Pe(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,Ee=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),z.near=N.near=C.near=j,z.far=N.far=C.far=Ee,(P!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,k=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Ve=q.parent,_e=z.cameras;Pe(z,Ve);for(let Qe=0;Qe<_e.length;Qe++)Pe(_e[Qe],Ve);_e.length===2?te(z,C,N):z.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Ce(q,z,Ve)};function Ce(q,j,Ee){Ee===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let Tt=null;function rt(q,j){if(u=j.getViewerPose(l||o),m=j,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ve=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,Ve=!0);for(let tt=0;tt<Ee.length;tt++){let ct=Ee[tt],Rt=null;if(f!==null)Rt=f.getViewport(ct);else{let Pt=h.getViewSubImage(d,ct);Rt=Pt.viewport,tt===0&&(e.setRenderTargetTextures(E,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(E))}let st=B[tt];st===void 0&&(st=new Yt,st.layers.enable(tt),st.viewport=new yt,B[tt]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),tt===0&&(z.matrix.copy(st.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ve===!0&&z.cameras.push(st)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let tt=h.getDepthInformation(Ee[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let tt=0;tt<Ee.length;tt++){let ct=Ee[tt].camera;if(ct){let Rt=p[ct];Rt||(Rt=new Mc,p[ct]=Rt);let st=h.getCameraImage(ct);Rt.sourceTexture=st}}}}for(let Ee=0;Ee<S.length;Ee++){let Ve=A[Ee],_e=S[Ee];Ve!==null&&_e!==void 0&&_e.update(Ve,j,l||o)}Tt&&Tt(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}let ut=new JE;ut.setAnimationLoop(rt),this.setAnimationLoop=function(q){Tt=q},this.dispose=function(){}}},oI=new We,eM=new Ge;eM.set(-1,0,0,0,1,0,0,0,1);function aI(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,cg(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,T,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,E=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(oI.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(eM),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cI(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let A=S.program;i.uniformBlockBinding(E,A)}function l(E,S){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",M));let R=S.program;i.updateUBOMapping(E,R);let x=e.render.frame;r[E.id]!==x&&(d(E),r[E.id]=x)}function u(E){let S=h();E.__bindingPointIndex=S;let A=n.createBuffer(),R=E.__size,x=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let S=s[E.id],A=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,b=A.length;x<b;x++){let C=A[x];if(Array.isArray(C))for(let N=0,B=C.length;N<B;N++)f(C[N],x,N,R);else f(C,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,S,A,R){if(y(E,S,A,R)===!0){let x=E.__offset,b=E.value;if(Array.isArray(b)){let C=0;for(let N=0;N<b.length;N++){let B=b[N],z=p(B);m(B,E.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,E.__data)}}function m(E,S,A){typeof E=="number"||typeof E=="boolean"?S[0]=E:E.isMatrix3?(S[0]=E.elements[0],S[1]=E.elements[1],S[2]=E.elements[2],S[3]=0,S[4]=E.elements[3],S[5]=E.elements[4],S[6]=E.elements[5],S[7]=0,S[8]=E.elements[6],S[9]=E.elements[7],S[10]=E.elements[8],S[11]=0):ArrayBuffer.isView(E)?S.set(new E.constructor(E.buffer,E.byteOffset,S.length)):E.toArray(S,A)}function y(E,S,A,R){let x=E.value,b=S+"_"+A;if(R[b]===void 0)return typeof x=="number"||typeof x=="boolean"?R[b]=x:ArrayBuffer.isView(x)?R[b]=x.slice():R[b]=x.clone(),!0;{let C=R[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(E){let S=E.uniforms,A=0,R=16;for(let b=0,C=S.length;b<C;b++){let N=Array.isArray(S[b])?S[b]:[S[b]];for(let B=0,z=N.length;B<z;B++){let P=N[B],k=Array.isArray(P.value)?P.value:[P.value];for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=p(ie),Q=A%R,te=Q%X.boundary,Pe=Q+te;A+=te,Pe!==0&&R-Pe<X.storage&&(A+=R-Pe),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=X.storage}}}let x=A%R;return x>0&&(A+=R-x),E.__size=A,E.__cache={},this}function p(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",E),S}function M(E){let S=E.target;S.removeEventListener("dispose",M);let A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var lI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function uI(){return ji===null&&(ji=new nr(lI,16,16,ur,Ii),ji.name="DFG_LUT",ji.minFilter=kt,ji.magFilter=kt,ji.wrapS=ri,ji.wrapT=ri,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Ld=class{constructor(e={}){let{canvas:t=yE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=f,g=new Set([Jh,Yh,qh]),p=new Set([On,Ci,sa,ra,Vh,Wh]),M=new Uint32Array(4),T=new Int32Array(4),E=new I,S=null,A=null,R=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,B=null,z=null,P=null,k=null;this._outputColorSpace=zt;let J=0,Z=0,ie=null,X=-1,Q=null,te=new yt,Pe=new yt,Ce=null,Tt=new re(0),rt=0,ut=t.width,q=t.height,j=1,Ee=null,Ve=null,_e=new yt(0,0,ut,q),Qe=new yt(0,0,ut,q),Jt=!1,tt=new Zo,ct=!1,Rt=!1,st=new We,Pt=new I,Qt=new yt,Cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Wt(){return ie===null?j:1}let O=i;function ln(v,D){return t.getContext(v,D)}let _t,w,_,F,G,W,se,oe,Y,$,ae,Re,he,ce,we,Ne,Xe,L,le,K,ue,me,ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",mi,!1),O===null){let D="webgl2";if(O=ln(D,v),O===null)throw ln(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(v){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),Ue("WebGLRenderer: "+v.message),v}function Ie(){_t=new _C(O),_t.init(),ue=new iI(O,_t),w=new aC(O,_t,e,ue),_=new tI(O,_t),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),z=O.createFramebuffer(),P=O.createFramebuffer(),k=O.createFramebuffer(),F=new EC(O),G=new G1,W=new nI(O,_t,_,G,w,ue,F),se=new gC(C),oe=new vT(O),me=new rC(O,oe),Y=new xC(O,oe,F,me),$=new vC(O,Y,oe,me,F),L=new MC(O,w,W),we=new cC(G),ae=new z1(C,se,_t,w,me,we),Re=new aI(C,G),he=new V1,ce=new Z1(_t),Xe=new sC(C,se,_,$,m,c),Ne=new eI(C,$,w),ee=new cI(O,F,w,_),le=new oC(O,_t,F),K=new yC(O,_t,F),F.programs=ae.programs,C.capabilities=w,C.extensions=_t,C.properties=G,C.renderLists=he,C.shadowMap=Ne,C.state=_,C.info=F}y!==On&&(b=new AC(y,t.width,t.height,a,s,r));let Se=new Tg(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=_t.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=_t.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(ut,q,!1))},this.getSize=function(v){return v.set(ut,q)},this.setSize=function(v,D,V=!0){if(Se.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=v,q=D,t.width=Math.floor(v*j),t.height=Math.floor(D*j),V===!0&&(t.style.width=v+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(ut*j,q*j).floor()},this.setDrawingBufferSize=function(v,D,V){ut=v,q=D,j=V,t.width=Math.floor(v*V),t.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(y===On){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,D,V,U){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,D,V,U),_.viewport(te.copy(_e).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Qe)},this.setScissor=function(v,D,V,U){v.isVector4?Qe.set(v.x,v.y,v.z,v.w):Qe.set(v,D,V,U),_.scissor(Pe.copy(Qe).multiplyScalar(j).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){_.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){Ee=v},this.setTransparentSort=function(v){Ve=v},this.getClearColor=function(v){return v.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let U=0;if(v){let H=!1;if(ie!==null){let pe=ie.texture.format;H=g.has(pe)}if(H){let pe=ie.texture.type,xe=p.has(pe),fe=Xe.getClearColor(),Me=Xe.getClearAlpha(),be=fe.r,Ye=fe.g,nt=fe.b;xe?(M[0]=be,M[1]=Ye,M[2]=nt,M[3]=Me,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=be,T[1]=Ye,T[2]=nt,T[3]=Me,O.clearBufferiv(O.COLOR,0,T))}else U|=O.COLOR_BUFFER_BIT}D&&(U|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),Xe.dispose(),he.dispose(),ce.dispose(),G.dispose(),se.dispose(),$.dispose(),me.dispose(),ee.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Vx),Se.removeEventListener("sessionend",Wx),Rr.stop()};function wt(v){v.preventDefault(),lc("WebGLRenderer: Context Lost."),N=!0}function ft(){lc("WebGLRenderer: Context Restored."),N=!1;let v=F.autoReset,D=Ne.enabled,V=Ne.autoUpdate,U=Ne.needsUpdate,H=Ne.type;Ie(),F.autoReset=v,Ne.enabled=D,Ne.autoUpdate=V,Ne.needsUpdate=U,Ne.type=H}function mi(v){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Gi(v){let D=v.target;D.removeEventListener("dispose",Gi),ub(D)}function ub(v){hb(v),G.remove(v)}function hb(v){let D=G.get(v).programs;D!==void 0&&(D.forEach(function(V){ae.releaseProgram(V)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,V,U,H,pe){D===null&&(D=Cn);let xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,fe=pb(v,D,V,U,H);_.setMaterial(U,xe);let Me=V.index,be=1;if(U.wireframe===!0){if(Me=Y.getWireframeAttribute(V),Me===void 0)return;be=2}let Ye=V.drawRange,nt=V.attributes.position,ve=Ye.start*be,pt=(Ye.start+Ye.count)*be;pe!==null&&(ve=Math.max(ve,pe.start*be),pt=Math.min(pt,(pe.start+pe.count)*be)),Me!==null?(ve=Math.max(ve,0),pt=Math.min(pt,Me.count)):nt!=null&&(ve=Math.max(ve,0),pt=Math.min(pt,nt.count));let Xt=pt-ve;if(Xt<0||Xt===1/0)return;me.setup(H,U,fe,V,Me);let Dt,bt=le;if(Me!==null&&(Dt=oe.get(Me),bt=K,bt.setIndex(Dt)),H.isMesh)U.wireframe===!0?(_.setLineWidth(U.wireframeLinewidth*Wt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(H.isLine){let un=U.linewidth;un===void 0&&(un=1),_.setLineWidth(un*Wt()),H.isLineSegments?bt.setMode(O.LINES):H.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else H.isPoints?bt.setMode(O.POINTS):H.isSprite&&bt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))bt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let un=H._multiDrawStarts,ge=H._multiDrawCounts,Mn=H._multiDrawCount,at=Me?oe.get(Me).bytesPerElement:1,ii=G.get(U).currentProgram.getUniforms();for(let ki=0;ki<Mn;ki++)ii.setValue(O,"_gl_DrawID",ki),bt.render(un[ki]/at,ge[ki])}else if(H.isInstancedMesh)bt.renderInstances(ve,Xt,H.count);else if(V.isInstancedBufferGeometry){let un=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,un);bt.renderInstances(ve,Xt,ge)}else bt.render(ve,Xt)};function kx(v,D,V,U){B!==null&&v.isNodeMaterial&&B.setObject(U,v),ct===!0&&we.setState(v,V,!1),v.transparent===!0&&v.side===Et&&v.forceSinglePass===!1?(v.side=rn,v.needsUpdate=!0,Bu(v,D,U),v.side=Ki,v.needsUpdate=!0,Bu(v,D,U),v.side=Et):Bu(v,D,U)}this.compile=function(v,D,V=null){V===null&&(V=v),B!==null&&B.renderStart(v,D,V),A=ce.get(V),A.init(D),x.push(A),V.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),v!==V&&v.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Rt=this.localClippingEnabled,ct=we.init(this.clippingPlanes,Rt),ct===!0&&we.setGlobalState(this.clippingPlanes,D),B!==null&&Ne.render(A.state.shadowsArray,V,D);let U=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){let fe=pe[xe];kx(fe,V,D,H),U.add(fe)}else kx(pe,V,D,H),U.add(pe)}),A=x.pop(),B!==null&&B.renderEnd(),U},this.compileAsync=function(v,D,V=null){let U=this.compile(v,D,V);return new Promise(H=>{function pe(){if(U.forEach(function(xe){let Me=G.get(xe).currentProgram;(Me===void 0||Me.isReady())&&U.delete(xe)}),U.size===0){H(v);return}setTimeout(pe,10)}_t.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qp=null;function db(v){Qp&&Qp(v)}function Vx(){Rr.stop()}function Wx(){Rr.start()}let Rr=new JE;Rr.setAnimationLoop(db),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(v){Qp=v,Se.setAnimationLoop(v),v===null?Rr.stop():Rr.start()},Se.addEventListener("sessionstart",Vx),Se.addEventListener("sessionend",Wx),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(v,D);let V=Se.enabled===!0&&Se.isPresenting===!0,U=b!==null&&(ie===null||V)&&b.begin(C,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,ie),A=ce.get(v,x.length),A.init(D),A.state.textureUnits=W.getTextureUnits(),x.push(A),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(st,Mi,D.reversedDepth),Rt=this.localClippingEnabled,ct=we.init(this.clippingPlanes,Rt),S=he.get(v,R.length),S.init(),R.push(S),Se.enabled===!0&&Se.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&em(xe,D,-1/0,C.sortObjects)}em(v,D,0,C.sortObjects),S.finish(),B!==null&&B.updateLights(A.state.lightsArray),C.sortObjects===!0&&S.sort(Ee,Ve),Ot=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ot&&Xe.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&we.beginShadows();let H=A.state.shadowsArray;if(Ne.render(H,v,D),ct===!0&&we.endShadows(),(U&&b.hasRenderPass())===!1){let xe=S.opaque,fe=S.transmissive;if(A.setupLights(),D.isArrayCamera){let Me=D.cameras;if(fe.length>0)for(let be=0,Ye=Me.length;be<Ye;be++){let nt=Me[be];qx(xe,fe,v,nt)}Ot&&Xe.render(v);for(let be=0,Ye=Me.length;be<Ye;be++){let nt=Me[be];Xx(S,v,nt,nt.viewport)}}else fe.length>0&&qx(xe,fe,v,D),Ot&&Xe.render(v),Xx(S,v,D)}ie!==null&&Z===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),U&&b.end(C),v.isScene===!0&&v.onAfterRender(C,v,D),me.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(A=x[x.length-1],W.setTextureUnits(A.state.textureUnits),ct===!0&&we.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,B!==null&&B.renderEnd()};function em(v,D,V,U){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){U&&Qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);let xe=$.update(v),fe=v.material;fe.visible&&S.push(v,xe,fe,V,Qt.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(tt))){let xe=$.update(v),fe=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qt.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Qt.copy(xe.boundingSphere.center)),Qt.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(fe)){let Me=xe.groups;for(let be=0,Ye=Me.length;be<Ye;be++){let nt=Me[be],ve=fe[nt.materialIndex];ve&&ve.visible&&S.push(v,xe,ve,V,Qt.z,nt,D)}}else fe.visible&&S.push(v,xe,fe,V,Qt.z,null,D)}}let pe=v.children;for(let xe=0,fe=pe.length;xe<fe;xe++)em(pe[xe],D,V,U)}function Xx(v,D,V,U){let{opaque:H,transmissive:pe,transparent:xe}=v;A.setupLightsView(V),ct===!0&&we.setGlobalState(C.clippingPlanes,V),U&&_.viewport(te.copy(U)),H.length>0&&Ou(H,D,V),pe.length>0&&Ou(pe,D,V),xe.length>0&&Ou(xe,D,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function qx(v,D,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let ve=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new In(1,1,{generateMipmaps:!0,type:ve?Ii:On,minFilter:wi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let pe=A.state.transmissionRenderTarget[U.id],xe=U.viewport||te;pe.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Tt),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Ot&&Xe.render(V);let Ye=C.toneMapping;C.toneMapping=Ri;let nt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),ct===!0&&we.setGlobalState(C.clippingPlanes,U),Ou(v,V,U),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let pt=0,Xt=D.length;pt<Xt;pt++){let Dt=D[pt],{object:bt,geometry:un,material:ge,group:Mn}=Dt;if(ge.side===Et&&bt.layers.test(U.layers)){let at=ge.side;ge.side=rn,ge.needsUpdate=!0,Yx(bt,V,U,un,ge,Mn),ge.side=at,ge.needsUpdate=!0,ve=!0}}ve===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Me,be),C.setClearColor(Tt,rt),nt!==void 0&&(U.viewport=nt),C.toneMapping=Ye}function Ou(v,D,V){let U=D.isScene===!0?D.overrideMaterial:null;for(let H=0,pe=v.length;H<pe;H++){let xe=v[H],{object:fe,geometry:Me,group:be}=xe,Ye=xe.material;Ye.allowOverride===!0&&U!==null&&(Ye=U),fe.layers.test(V.layers)&&Yx(fe,D,V,Me,Ye,be)}}function Yx(v,D,V,U,H,pe){B!==null&&H.isNodeMaterial&&B.setObject(v,H),v.onBeforeRender(C,D,V,U,H,pe),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(C,D,V,U,v,pe),H.transparent===!0&&H.side===Et&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,pe),H.side=Ki,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,pe),H.side=Et):C.renderBufferDirect(V,D,U,H,v,pe),v.onAfterRender(C,D,V,U,H,pe)}function Bu(v,D,V){D.isScene!==!0&&(D=Cn);let U=G.get(v),H=A.state.lights,pe=A.state.shadowsArray,xe=H.state.version,fe=ae.getParameters(v,H.state,pe,D,V,A.state.lightProbeGridArray),Me=ae.getProgramCacheKey(fe),be=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,U.fog=D.fog;let Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=se.get(v.envMap||U.environment,Ye),U.envMapRotation=U.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Gi),be=new Map,U.programs=be);let nt=be.get(Me);if(nt!==void 0){if(U.currentProgram===nt&&U.lightsStateVersion===xe)return Zx(v,fe),nt}else fe.uniforms=ae.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,V,fe),v.onBeforeCompile(fe,C),nt=ae.acquireProgram(fe,Me),be.set(Me,nt),U.uniforms=fe.uniforms;let ve=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=we.uniform),Zx(v,fe),U.needsLights=gb(v),U.lightsStateVersion=xe,U.needsLights&&(ve.ambientLightColor.value=H.state.ambient,ve.lightProbe.value=H.state.probe,ve.sunLights.value=H.state.sun,ve.sunLightShadows.value=H.state.sunShadow,ve.directionalLights.value=H.state.directional,ve.directionalLightShadows.value=H.state.directionalShadow,ve.spotLights.value=H.state.spot,ve.spotLightShadows.value=H.state.spotShadow,ve.rectAreaLights.value=H.state.rectArea,ve.ltc_1.value=H.state.rectAreaLTC1,ve.ltc_2.value=H.state.rectAreaLTC2,ve.pointLights.value=H.state.point,ve.pointLightShadows.value=H.state.pointShadow,ve.hemisphereLights.value=H.state.hemi,ve.sunShadowMatrix.value=H.state.sunShadowMatrix,ve.sunShadowCascade.value=H.state.sunShadowCascade,ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ve.spotLightMatrix.value=H.state.spotLightMatrix,ve.spotLightMap.value=H.state.spotLightMap,ve.pointShadowMatrix.value=H.state.pointShadowMatrix),U.lightProbeGrid=A.state.lightProbeGridArray.length>0,U.currentProgram=nt,U.uniformsList=null,nt}function Jx(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=la.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Zx(v,D){let V=G.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function fb(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(D.matrixWorld);for(let V=0,U=v.length;V<U;V++){let H=v[V];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function pb(v,D,V,U,H){D.isScene!==!0&&(D=Cn),W.resetTextureUnits();let pe=D.fog,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?D.environment:null,fe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,Me=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,be=se.get(U.envMap||xe,Me),Ye=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ve=!!V.morphAttributes.position,pt=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color,Dt=Ri;U.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Dt=C.toneMapping);let bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,un=bt!==void 0?bt.length:0,ge=G.get(U),Mn=A.state.lights;if(ct===!0&&(Rt===!0||v!==Q)){let Ct=v===Q&&U.id===X;we.setState(U,v,Ct)}let at=!1;U.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Mn.state.version||ge.outputColorSpace!==fe||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==be||U.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==we.numPlanes||ge.numIntersection!==we.numIntersection)||ge.vertexAlphas!==Ye||ge.vertexTangents!==nt||ge.morphTargets!==ve||ge.morphNormals!==pt||ge.morphColors!==Xt||ge.toneMapping!==Dt||ge.morphTargetsCount!==un||!!ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,ge.__version=U.version);let ii=ge.currentProgram;at===!0&&(ii=Bu(U,D,H),B&&U.isNodeMaterial&&B.onUpdateProgram(U,ii,ge));let ki=!1,qs=!1,vo=!1,vt=ii.getUniforms(),Ht=ge.uniforms;if(_.useProgram(ii.program)&&(ki=!0,qs=!0,vo=!0),U.id!==X&&(X=U.id,qs=!0),ge.needsLights){let Ct=fb(A.state.lightProbeGridArray,H);ge.lightProbeGrid!==Ct&&(ge.lightProbeGrid=Ct,qs=!0)}if(ki||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),vt.setValue(O,"projectionMatrix",v.projectionMatrix),vt.setValue(O,"viewMatrix",v.matrixWorldInverse);let Js=vt.map.cameraPosition;Js!==void 0&&Js.setValue(O,Pt.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&vt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,qs=!0,vo=!0)}if(ge.needsLights&&(Mn.state.sunShadowMap.length>0&&vt.setValue(O,"sunShadowMap",Mn.state.sunShadowMap,W),Mn.state.directionalShadowMap.length>0&&vt.setValue(O,"directionalShadowMap",Mn.state.directionalShadowMap,W),Mn.state.spotShadowMap.length>0&&vt.setValue(O,"spotShadowMap",Mn.state.spotShadowMap,W),Mn.state.pointShadowMap.length>0&&vt.setValue(O,"pointShadowMap",Mn.state.pointShadowMap,W)),H.isSkinnedMesh){vt.setOptional(O,H,"bindMatrix"),vt.setOptional(O,H,"bindMatrixInverse");let Ct=H.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),vt.setValue(O,"boneTexture",Ct.boneTexture,W))}H.isBatchedMesh&&(vt.setOptional(O,H,"batchingTexture"),vt.setValue(O,"batchingTexture",H._matricesTexture,W),vt.setOptional(O,H,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",H._indirectTexture,W),vt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",H._colorsTexture,W));let Ys=V.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&L.update(H,V,ii),(qs||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,vt.setValue(O,"receiveShadow",H.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=uI()),qs){if(vt.setValue(O,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&mb(Ht,vo),pe&&U.fog===!0&&Re.refreshFogUniforms(Ht,pe),Re.refreshMaterialUniforms(Ht,U,j,q,A.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){let Ct=ge.lightProbeGrid;Ht.probesSH.value=Ct.texture,Ht.probesMin.value.copy(Ct.boundingBox.min),Ht.probesMax.value.copy(Ct.boundingBox.max),Ht.probesResolution.value.copy(Ct.resolution)}la.upload(O,Jx(ge),Ht,W)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(la.upload(O,Jx(ge),Ht,W),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&vt.setValue(O,"center",H.center),vt.setValue(O,"modelViewMatrix",H.modelViewMatrix),vt.setValue(O,"normalMatrix",H.normalMatrix),vt.setValue(O,"modelMatrix",H.matrixWorld),U.uniformsGroups!==void 0){let Ct=U.uniformsGroups;for(let Js=0,So=Ct.length;Js<So;Js++){let $x=Ct[Js];ee.update($x,ii),ee.bind($x,ii)}}return ii}function mb(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function gb(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,D,V){let U=G.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=D,G.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let V=G.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,V=0){ie=v,J=D,Z=V;let U=null,H=!1,pe=!1;if(v){let fe=G.get(v);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(v.viewport),Pe.copy(v.scissor),Ce=v.scissorTest,_.viewport(te),_.scissor(Pe),_.setScissorTest(Ce),X=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(fe.__hasExternalTextures)W.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ye=v.depthTexture;if(fe.__boundDepthTexture!==Ye){if(Ye!==null&&G.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let be=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[D])?U=be[D][V]:U=be[D],H=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?U=G.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[V]:U=be,te.copy(v.viewport),Pe.copy(v.scissor),Ce=v.scissorTest}else te.copy(_e).multiplyScalar(j).floor(),Pe.copy(Qe).multiplyScalar(j).floor(),Ce=Jt;if(V!==0&&(U=z),_.bindFramebuffer(O.FRAMEBUFFER,U)&&_.drawBuffers(v,U),_.viewport(te),_.scissor(Pe),_.setScissorTest(Ce),H){let fe=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,V)}else if(pe){let fe=D;for(let Me=0;Me<v.textures.length;Me++){let be=G.get(v.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,be.__webglTexture,V,fe)}}else if(v!==null&&V!==0){let fe=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,V)}X=-1};function Kx(v){let D=G.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=w.textureFormatReadable(v.format),D.__typeReadable=w.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,V,U,H,pe,xe,fe=0){if(!(v&&v.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){_.bindFramebuffer(O.FRAMEBUFFER,Me);try{let be=v.textures[fe],Ye=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ve=Kx(be);if(ve.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H&&O.readPixels(D,V,U,H,ue.convert(Ye),ue.convert(nt),pe)}finally{let be=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,U,H,pe,xe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H){_.bindFramebuffer(O.FRAMEBUFFER,Me);let be=v.textures[fe],Ye=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ve=Kx(be);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(D,V,U,H,ue.convert(Ye),ue.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Xt=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Xt);let Dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ME(O,Dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pt),O.deleteSync(Dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){let U=Math.pow(2,-V),H=Math.floor(v.image.width*U),pe=Math.floor(v.image.height*U),xe=D!==null?D.x:0,fe=D!==null?D.y:0;W.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,xe,fe,H,pe),_.unbindTexture()},this.copyTextureToTexture=function(v,D,V=null,U=null,H=0,pe=0){let xe,fe,Me,be,Ye,nt,ve,pt,Xt,Dt=v.isCompressedTexture?v.mipmaps[pe]:v.image;if(V!==null)xe=V.max.x-V.min.x,fe=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Ye=V.min.y,nt=V.isBox3?V.min.z:0;else{let Ht=Math.pow(2,-H);xe=Math.floor(Dt.width*Ht),fe=Math.floor(Dt.height*Ht),v.isDataArrayTexture?Me=Dt.depth:v.isData3DTexture?Me=Math.floor(Dt.depth*Ht):Me=1,be=0,Ye=0,nt=0}U!==null?(ve=U.x,pt=U.y,Xt=U.z):(ve=0,pt=0,Xt=0);let bt=ue.convert(D.format),un=ue.convert(D.type),ge;D.isData3DTexture?(W.setTexture3D(D,0),ge=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),ge=O.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),ge=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Mn=_.getParameter(O.UNPACK_ROW_LENGTH),at=_.getParameter(O.UNPACK_IMAGE_HEIGHT),ii=_.getParameter(O.UNPACK_SKIP_PIXELS),ki=_.getParameter(O.UNPACK_SKIP_ROWS),qs=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,be),_.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),_.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let vo=v.isDataArrayTexture||v.isData3DTexture,vt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Ht=G.get(v),Ys=G.get(D),Ct=G.get(Ht.__renderTarget),Js=G.get(Ys.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let So=0;So<Me;So++)vo&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(v).__webglTexture,H,nt+So),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(D).__webglTexture,pe,Xt+So)),O.blitFramebuffer(be,Ye,xe,fe,ve,pt,xe,fe,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||G.has(v)){let Ht=G.get(v),Ys=G.get(D);_.bindFramebuffer(O.READ_FRAMEBUFFER,P),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ct=0;Ct<Me;Ct++)vo?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,H,nt+Ct):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,H),vt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ys.__webglTexture,pe,Xt+Ct):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ys.__webglTexture,pe),H!==0?O.blitFramebuffer(be,Ye,xe,fe,ve,pt,xe,fe,O.COLOR_BUFFER_BIT,O.NEAREST):vt?O.copyTexSubImage3D(ge,pe,ve,pt,Xt+Ct,be,Ye,xe,fe):O.copyTexSubImage2D(ge,pe,ve,pt,be,Ye,xe,fe);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(ge,pe,ve,pt,Xt,xe,fe,Me,bt,un,Dt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(ge,pe,ve,pt,Xt,xe,fe,Me,bt,Dt.data):O.texSubImage3D(ge,pe,ve,pt,Xt,xe,fe,Me,bt,un,Dt):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,ve,pt,xe,fe,bt,un,Dt.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,ve,pt,Dt.width,Dt.height,bt,Dt.data):O.texSubImage2D(O.TEXTURE_2D,pe,ve,pt,xe,fe,bt,un,Dt);_.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(O.UNPACK_SKIP_PIXELS,ii),_.pixelStorei(O.UNPACK_SKIP_ROWS,ki),_.pixelStorei(O.UNPACK_SKIP_IMAGES,qs),pe===0&&D.generateMipmaps&&O.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,Z=0,ie=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};function wg(n,e){if(e===ng)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===oa||e===qc){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===oa)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Bd(n){let e=new Map,t=new Map,i=n.clone();return tM(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function tM(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)tM(n.children[i],e.children[i],t)}var da=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Og(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new qg(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Wg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Fd(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fd(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jg(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===oM){try{o[et.KHR_BINARY_GLTF]=new Zg(e)}catch(h){s&&s(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new n0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Lg;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new Kg(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new $g;break;case et.KHR_MESH_QUANTIZATION:o[h]=new jg;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function hI(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Vt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Pg=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Sn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Wr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vr(u),l.distance=h;break;case"spot":l=new Pc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),es(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Lg=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,i){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}},Ng=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Og=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(s)}},Bg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Fg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Ug=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,zt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},Hg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},zg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(r[0],r[1],r[2],Sn),Promise.all(s)}},Gg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},kg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(r[0],r[1],r[2],Sn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,zt)),Promise.all(s)}},Vg=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},Wg=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},Xg=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},qg=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Yg=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Fd=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Jg=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let y=new We,g=new I,p=new fn,M=new I(1,1,1),T=new ke(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),T.setMatrixAt(S,y.compose(g,p,M));let E=null;for(let S in c)if(S==="_COLOR_0"){let A=c[S];T.instanceColor=new As(A.array,A.itemSize,A.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(E===null){let R=T.geometry;E=new ht,E.name=R.name;for(let x in R.attributes)E.setAttribute(x,R.attributes[x]);for(let x in R.morphAttributes)E.morphAttributes[x]=R.morphAttributes[x];R.index!==null&&E.setIndex(R.index),E.morphTargetsRelative=R.morphTargetsRelative;for(let x of R.groups)E.addGroup(x.start,x.count,x.materialIndex);R.boundingBox!==null&&(E.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(E.boundingSphere=R.boundingSphere.clone()),E.drawRange.start=R.drawRange.start,E.drawRange.count=R.drawRange.count,E.userData=Object.assign({},R.userData),T.geometry=E}let A=c[S];E.setAttribute(S,new As(A.array,A.itemSize,A.normalized))}Be.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},oM="glTF",Kc=12,nM={JSON:1313821514,BIN:5130562},Zg=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Kc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==oM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Kc,r=new DataView(e,Kc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===nM.JSON){let l=new Uint8Array(e,Kc+o,a);this.content=i.decode(l)}else if(c===nM.BIN){let l=Kc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=e0[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=e0[u]||u.toLowerCase();if(o[u]!==void 0){let d=i.accessors[e.attributes[u]],f=ha[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let y=f.attributes[m],g=c[m];g!==void 0&&(y.normalized=g)}h(f)},a,l,Sn,d)})})}},$g=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},jg=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},Ud=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,m=e*l,y=m-l,g=-2*f+3*d,p=f-d,M=1-g,T=p-d+h;for(let E=0;E!==a;E++){let S=o[y+E+a],A=o[y+E+c]*u,R=o[m+E+a],x=o[m+E]*u;r[E]=M*S+T*A+g*R+p*x}return r}},dI=new fn,Qg=class extends Ud{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return dI.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iM={9728:Gt,9729:kt,9984:Gh,9985:ia,9986:Yr,9987:wi},sM={33071:ri,33648:zo,10497:Si},Cg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},e0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fI={CUBICSPLINE:void 0,LINEAR:Br,STEP:Or},Ig={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pI(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function Kr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function es(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mI(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function gI(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _I(n){let e,t=n.extensions&&n.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dg(t.attributes):e=n.indices+":"+Dg(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Dg(n.targets[i]);return e}function Dg(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function t0(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xI(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yI=new We,n0=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Cc(this.options.manager):this.textureLoader=new Nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Kr(r,a,s),es(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Cs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Cg[s.type],a=ha[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ut(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Cg[s.type],l=ha[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,g;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(M);T||(y=new l(a,p*f,s.count*f/u),T=new qo(y,f/u),t.cache.add(M,T)),g=new Yo(T,c,d%f/u,m)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),g=new Ut(y,c,m);if(s.sparse!==void 0){let p=Cg.SCALAR,M=ha[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,S=new M(o[1],T,s.sparse.count*p),A=new l(o[2],E,s.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,x=S.length;R<x;R++){let b=S[R];if(g.setX(b,A[R*c]),c>=2&&g.setY(b,A[R*c+1]),c>=3&&g.setZ(b,A[R*c+2]),c>=4&&g.setW(b,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=iM[d.magFilter]||kt,u.minFilter=iM[d.minFilter]||wi,u.wrapS=sM[d.wrapS]||Si,u.wrapT=sM[d.wrapT]||Si,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==kt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(y){let g=new tn(y);g.needsUpdate=!0,d(g)}),t.load(Cs.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),es(h,o),h.userData.mimeType=o.mimeType||xI(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new $o,Pn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Ko,Pn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Te}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){let h=s[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Sn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Et);let u=r.alphaMode||Ig.OPAQUE;if(u===Ig.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ig.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let h=r.emissiveFactor;a.emissive=new re().setRGB(h[0],h[1],h[2],Sn)}return r.emissiveTexture!==void 0&&o!==Lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),es(h,r),t.associations.set(h,{materials:e}),r.extensions&&Kr(s,h,r),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return rM(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=_I(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=rM(new ht,l,t),l.mode===ai.TRIANGLE_STRIP?d=d.then(f=>wg(f,qc)):l.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>wg(f,oa))),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?pI(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let y=u[f],g=o[f],p,M=l[f];if(g.mode===ai.TRIANGLES||g.mode===ai.TRIANGLE_STRIP||g.mode===ai.TRIANGLE_FAN||g.mode===void 0){let T=r.isSkinnedMesh===!0,E=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&E?new gc(y,M):new Fe(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===ai.LINES)p=new xc(y,M);else if(g.mode===ai.LINE_STRIP)p=new Hr(y,M);else if(g.mode===ai.LINE_LOOP)p=new yc(y,M);else if(g.mode===ai.POINTS)p=new zr(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&gI(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),es(p,r),g.extensions&&Kr(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Kr(s,h[0],r),h[0];let d=new mt;r.extensions&&Kr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt($e.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ar(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),es(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _c(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],y=f.target,g=y.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],y=h[3],g=h[4],p=[];for(let T=0,E=d.length;T<E;T++){let S=d[T],A=f[T],R=m[T],x=y[T],b=g[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=i._createAnimationTracks(S,A,R,x,b);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}let M=new kr(r,void 0,p);return es(M,s),M})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yI)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Jo:l.length>1?u=new mt:l.length===1?u=l[0]:u=new Be,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),es(u,r),r.extensions&&Kr(i,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new mt;i.name&&(r.name=s.createUniqueName(i.name)),es(r,i),i.extensions&&Kr(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(Bd(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Pn||d instanceof tn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}hr[r.path]===hr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(hr[r.path]){case hr.weights:u=Ts;break;case hr.rotation:u=Rs;break;case hr.translation:case hr.scale:u=rr;break;default:switch(i.itemSize){case 1:u=Ts;break;case 2:case 3:default:u=rr;break}break}let h=s.interpolation!==void 0?fI[s.interpolation]:Br,d=this._getArrayFromAccessor(i);for(let f=0,m=c.length;f<m;f++){let y=new u(c[f]+"."+hr[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=t0(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Rs?Qg:Ud;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function EI(n,e,t){let i=e.attributes,s=new Vn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let u=t0(ha[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let y=t0(ha[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Dn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function rM(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=e0[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),es(n,e),EI(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mI(n,e.targets,t):n})}var i0=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Li=n=>JSON.parse(JSON.stringify(n)),Pi=(n,e)=>{if(!Number.isFinite(n))throw new Error("06H invalid "+e);return n},fa=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Li(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Li(t):null}has(e){return this.snapshots.has(e)}},Hd=class{constructor({id:e,store:t,actorStart:i,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...i0,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:Pi(i.x,"actorStart.x"),z:Pi(i.z,"actorStart.z")},this.actorDestination={x:Pi(s.x,"actorDestination.x"),z:Pi(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Li(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:i=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(i,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Li(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Li(this.state.memory),actor:Li(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Li(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Li(e.memory),actor:Li(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Li(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),i=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=i,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*i,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*i}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Li(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(Pi(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");Pi(e.memory.eventId,"snapshot.memory.eventId"),Pi(e.actor.progress,"snapshot.actor.progress"),Pi(e.actor.position?.x,"snapshot.actor.position.x"),Pi(e.actor.position?.z,"snapshot.actor.position.z"),Pi(e.actor.destination?.x,"snapshot.actor.destination.x"),Pi(e.actor.destination?.z,"snapshot.actor.destination.z")}};var De=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),$c=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),aM=(n,e)=>{if(!Number.isFinite(n))throw new Error("06I invalid "+e);return n},pa=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:i=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...$c,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=i,this.onSleep=s,this.onWake=r,this.tier=De.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[De.NEAR]:0,[De.MID]:0,[De.FAR]:0,[De.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===De.NEAR?"FRAME":this.tier===De.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===De.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:i=Date.now()}={}){let s=aM(e,"distanceM"),r=Math.max(0,aM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,i),this.tier===De.DORMANT)return 0;if(this.tier===De.NEAR)return this._tick(r,i),1;let a=this.tier===De.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,i),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let i=this.tier;if(i===De.DORMANT&&e!==De.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,i),this.onTierChange(e,i,t);return}if(i!==De.DORMANT&&e===De.DORMANT){this.onSleep(t,i,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,i,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,i,t)}_nextTier(e){let t=this.config;return this.tier===De.DORMANT?e>t.wakeRadiusM?De.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?De.DORMANT:this.tier===De.NEAR?e>t.nearExitM?De.MID:De.NEAR:this.tier===De.MID?e<=t.nearEnterM?De.NEAR:e>t.midExitM?De.FAR:De.MID:this.tier===De.FAR?e<=t.nearEnterM?De.NEAR:e<=t.midEnterM?De.MID:De.FAR:De.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?De.NEAR:e<=this.config.midEnterM?De.MID:De.FAR}};var MI=Object.freeze([10,20,40,64]),$r=Object.freeze({warmupMs:4e3,measureMs:15e3,minMeasuredFrames:300,avgFrameMsMax:17.8,p95FrameMsMax:20.5,p99FrameMsMax:34,avgAuditCpuMsMax:2,p95AuditCpuMsMax:4,drawCallsMax:120,trianglesMax:35e4}),dr=n=>JSON.parse(JSON.stringify(n));function cM(n,e){if(!Number.isInteger(n)||n<0||n>=192)throw new Error("06J invalid actor index");let t=Math.floor(n/48),i=n%48,s=i/48*Math.PI*2+t*.173,r=MI[t]+(i%5-2)*.28,o=s+Math.PI*.5,a={x:Math.cos(s)*r,z:Math.sin(s)*r},c={x:a.x+Math.cos(o)*(3.4+n%4*.35),z:a.z+Math.sin(o)*(3.4+n%4*.35)},l=n%4===0,u=n%17*.013;return{id:"06J_ACTOR_"+String(n).padStart(3,"0"),index:n,ring:t,localStart:a,localDestination:c,position:{...a},goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:u,winner:l?"HAZARD":"FOOD",memory:{state:l?"DISTURBED":"CALM",expiresAt:l?e+2e4+n%5*1e3:0},visualActive:!0,snapshot:null,sleepCount:0,wakeCount:0}}function r0(n,e,t){if(!n)throw new Error("06J actor required");let i=Math.max(0,Number.isFinite(e)?e:0);n.memory.state!=="CALM"&&t>=n.memory.expiresAt&&(n.memory.state="CALM",n.memory.expiresAt=0),n.winner=n.memory.state==="DISTURBED"?"HAZARD":"FOOD",n.winner==="HAZARD"?n.goal!=="HAZARD"&&(n.goal==="FOOD"&&(n.suspendedGoal="FOOD"),n.goal="HAZARD",n.behaviorState="EVADING"):n.suspendedGoal==="FOOD"&&(n.goal="FOOD",n.suspendedGoal="NONE",n.behaviorState="SEEKING_FOOD"),n.goal==="FOOD"&&n.behaviorState==="SEEKING_FOOD"&&(n.progress=Math.min(1,n.progress+i/12e4),n.progress>=1&&(n.progress=1,n.goal="FOOD REACHED",n.behaviorState="COMPLETE"));let s=n.progress;return n.position.x=n.localStart.x+(n.localDestination.x-n.localStart.x)*s,n.position.z=n.localStart.z+(n.localDestination.z-n.localStart.z)*s,n}function lM(n,e,t){return{version:e,cellId:n.id,serializedAt:t,state:{goal:n.goal,suspendedGoal:n.suspendedGoal,behaviorState:n.behaviorState,progress:n.progress,winner:n.winner,memory:dr(n.memory),position:dr(n.position),localStart:dr(n.localStart),localDestination:dr(n.localDestination)}}}function uM(n,e,t){if(!e||e.cellId!==n.id)throw new Error("06J snapshot mismatch");let i=e.state;return n.goal=i.goal,n.suspendedGoal=i.suspendedGoal,n.behaviorState=i.behaviorState,n.progress=i.progress,n.winner=i.winner,n.memory=dr(i.memory),n.position=dr(i.position),n.localStart=dr(i.localStart),n.localDestination=dr(i.localDestination),r0(n,0,t),Math.max(0,t-e.serializedAt)}function s0(n,e){if(!n.length)return 0;let t=[...n].sort((s,r)=>s-r),i=Math.min(t.length-1,Math.max(0,Math.ceil(e/100*t.length)-1));return t[i]}function hM({frameSamples:n=[],cpuSamples:e=[],drawCallsMax:t=0,trianglesMax:i=0,actorCount:s=0,duplicateCount:r=0,limits:o=$r}={}){let a=p=>p.length?p.reduce((M,T)=>M+T,0)/p.length:0,c=a(n),l=s0(n,95),u=s0(n,99),h=n.length?Math.max(...n):0,d=a(e),f=s0(e,95),m=e.length?Math.max(...e):0,y={enough_frames:n.length>=o.minMeasuredFrames,avg_frame_ms:c<=o.avgFrameMsMax,p95_frame_ms:l<=o.p95FrameMsMax,p99_frame_ms:u<=o.p99FrameMsMax,avg_audit_cpu_ms:d<=o.avgAuditCpuMsMax,p95_audit_cpu_ms:f<=o.p95AuditCpuMsMax,draw_calls:t<=o.drawCallsMax,triangles:i<=o.trianglesMax,actor_count:s===192,duplicates:r===0},g=Object.entries(y).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:y,measured_frames:n.length,frame_avg_ms:c,frame_p95_ms:l,frame_p99_ms:u,frame_worst_ms:h,equivalent_fps:c>0?1e3/c:0,audit_cpu_avg_ms:d,audit_cpu_p95_ms:f,audit_cpu_worst_ms:m,draw_calls_max:t,triangles_max:i,actor_count:s,duplicate_count:r}}var zd=Object.freeze({memoryRadiusM:1.8,disturbedMs:2300,settlingMs:2800,hazardPriority:100,foodPriority:40}),Gd=n=>JSON.parse(JSON.stringify(n)),fr=(n,e)=>{if(!Number.isFinite(n))throw new Error("07A invalid "+e);return n};function dM(n,e,t,i,s,r){let o=s-t,a=r-i,c=o*o+a*a;if(c<=1e-12)return Math.hypot(n-t,e-i);let l=Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/c)),u=t+o*l,h=i+a*l;return Math.hypot(n-u,e-h)}var jc=class{constructor(e=0){this.lastEventId=Math.max(0,Number.isFinite(e)?Math.floor(e):0)}next(e,{at:t=Date.now(),payload:i={}}={}){if(!e)throw new Error("07A event type required");return fr(t,"event.at"),this.lastEventId++,Object.freeze({id:this.lastEventId,type:e,at:t,payload:Gd(i)})}observe(e){return!Number.isFinite(e)||e<=this.lastEventId?!1:(this.lastEventId=Math.floor(e),!0)}},kd=class{constructor(e={}){if(this.config={...zd,...e},!(this.config.memoryRadiusM>0&&this.config.disturbedMs>0&&this.config.settlingMs>0))throw new Error("07A invalid memory config");this.state="CALM",this.eventId=0,this.startedAt=0,this.expiresAt=0,this.center={x:0,z:0}}applyEvent(e,{center:t,now:i=e?.at??Date.now()}={}){if(!e||!Number.isFinite(e.id))throw new Error("07A memory event id required");return e.id<=this.eventId?!1:(fr(i,"memory now"),fr(t?.x,"memory center.x"),fr(t?.z,"memory center.z"),this.eventId=e.id,this.startedAt=i,this.expiresAt=i+this.config.disturbedMs+this.config.settlingMs,this.center={x:t.x,z:t.z},this.state="DISTURBED",!0)}resolve(e=Date.now()){return fr(e,"memory resolve now"),this.state==="CALM"?this.state:(e>=this.expiresAt?this.state="CALM":e>=this.startedAt+this.config.disturbedMs?this.state="SETTLING":this.state="DISTURBED",this.state)}overlapsPoint(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:Math.hypot(e.x-this.center.x,e.z-this.center.z)<=this.config.memoryRadiusM}overlapsSegment(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:dM(this.center.x,this.center.z,e.a.x,e.a.z,e.b.x,e.b.z)<=this.config.memoryRadiusM}snapshot(){return{state:this.state,eventId:this.eventId,startedAt:this.startedAt,expiresAt:this.expiresAt,center:Gd(this.center),config:{memoryRadiusM:this.config.memoryRadiusM,disturbedMs:this.config.disturbedMs,settlingMs:this.config.settlingMs}}}restore(e,t=Date.now()){if(!e)throw new Error("07A memory snapshot required");return this.state=e.state,this.eventId=e.eventId,this.startedAt=e.startedAt,this.expiresAt=e.expiresAt,this.center=Gd(e.center),this.resolve(t),this.state}},Vd=class{constructor(e={}){this.priorities={HAZARD:zd.hazardPriority,FOOD:zd.foodPriority,...e}}choose(e=[]){let t=e.filter(i=>i&&i.valid!==!1).map(i=>({id:i.id,priority:Number.isFinite(i.priority)?i.priority:this.priorities[i.id]??0,eventAt:Number.isFinite(i.eventAt)?i.eventAt:0,payload:i.payload??null}));return t.sort((i,s)=>s.priority-i.priority||String(i.id).localeCompare(String(s.id))),t[0]??null}},Wd=class{constructor({goal:e="FOOD",progress:t=0}={}){this.activeGoal=e,this.progress=Math.max(0,Math.min(1,t)),this.suspendedGoal=null,this.suspendedProgress=0,this.interruption=null,this.behaviorState=e==="FOOD"?"SEEKING_FOOD":"ACTIVE"}setProgress(e){this.progress=Math.max(0,Math.min(1,fr(e,"goal progress"))),this.activeGoal==="FOOD"&&this.progress>=1&&(this.activeGoal="FOOD REACHED",this.behaviorState="COMPLETE")}advanceFood(e){return this.activeGoal!=="FOOD"||this.behaviorState!=="SEEKING_FOOD"?this.progress:(this.setProgress(this.progress+Math.max(0,fr(e,"goal delta"))),this.progress)}interrupt(e="HAZARD"){return this.activeGoal===e?!1:(this.activeGoal==="FOOD"&&(this.suspendedGoal="FOOD",this.suspendedProgress=this.progress),this.interruption=e,this.activeGoal=e,this.behaviorState="EVADING",!0)}clearInterruption(){return this.interruption?(this.interruption=null,this.suspendedGoal?(this.activeGoal=this.suspendedGoal,this.progress=this.suspendedProgress,this.suspendedGoal=null,this.suspendedProgress=0,this.behaviorState=this.activeGoal==="FOOD"?"SEEKING_FOOD":"ACTIVE",!0):!1):!1}reconcile(e){return(e?.id??null)==="HAZARD"?this.interrupt("HAZARD"):this.interruption==="HAZARD"&&this.clearInterruption(),this.activeGoal}snapshot(){return{activeGoal:this.activeGoal,progress:this.progress,suspendedGoal:this.suspendedGoal,suspendedProgress:this.suspendedProgress,interruption:this.interruption,behaviorState:this.behaviorState}}restore(e){if(!e)throw new Error("07A goal snapshot required");Object.assign(this,Gd(e))}},pr=class{constructor({memoryConfig:e={},priorities:t={},initialGoal:i="FOOD",initialProgress:s=0}={}){this.events=new jc,this.memory=new kd(e),this.arbiter=new Vd(t),this.goals=new Wd({goal:i,progress:s}),this.lastWinner=null}createHazardEvent({center:e,at:t=Date.now(),payload:i={}}={}){let s=this.events.next("HAZARD",{at:t,payload:i});return this.memory.applyEvent(s,{center:e,now:t}),s}observeHazardEvent(e,{center:t,now:i=e?.at??Date.now()}={}){if(!e||e.type!=="HAZARD")throw new Error("07A HAZARD event required");return this.events.observe(e.id),this.memory.applyEvent(e,{center:t,now:i})}update({now:e=Date.now(),actorPath:t,foodValid:i=!0,foodEventAt:s=e,foodProgressDelta:r=0}={}){this.memory.resolve(e);let o=t?this.memory.overlapsSegment(t,e):this.memory.state!=="CALM",a=this.arbiter.choose([{id:"HAZARD",valid:o,eventAt:this.memory.startedAt},{id:"FOOD",valid:i,eventAt:s}]);return this.lastWinner=a?.id??null,this.goals.reconcile(a),this.goals.activeGoal==="FOOD"&&this.goals.advanceFood(r),{memoryState:this.memory.state,winner:this.lastWinner,goal:this.goals.activeGoal,suspendedGoal:this.goals.suspendedGoal,progress:this.goals.progress}}serialize(e=Date.now()){return fr(e,"kernel serialize now"),{version:1,serializedAt:e,eventSequence:{lastEventId:this.events.lastEventId},memory:this.memory.snapshot(),goals:this.goals.snapshot(),lastWinner:this.lastWinner}}restore(e,t=Date.now()){if(!e||e.version!==1)throw new Error("07A kernel snapshot version mismatch");return this.events=new jc(e.eventSequence?.lastEventId??0),this.memory.restore(e.memory,t),this.goals.restore(e.goals),this.lastWinner=e.lastWinner??null,this.memory.state==="CALM"&&this.goals.interruption==="HAZARD"&&this.goals.clearInterruption(),{offscreenMs:Math.max(0,t-e.serializedAt),memoryState:this.memory.state,goal:this.goals.activeGoal,progress:this.goals.progress}}};var fM=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Oi=n=>JSON.parse(JSON.stringify(n)),Ni=(n,e)=>{if(!Number.isFinite(n))throw new Error("06H invalid "+e);return n},Qc=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Oi(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Oi(t):null}has(e){return this.snapshots.has(e)}},el=class{constructor({id:e,store:t,actorStart:i,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...fM,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:Ni(i.x,"actorStart.x"),z:Ni(i.z,"actorStart.z")},this.actorDestination={x:Ni(s.x,"actorDestination.x"),z:Ni(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Oi(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:i=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(i,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Oi(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Oi(this.state.memory),actor:Oi(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Oi(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Oi(e.memory),actor:Oi(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Oi(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),i=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=i,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*i,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*i}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Oi(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(Ni(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");Ni(e.memory.eventId,"snapshot.memory.eventId"),Ni(e.actor.progress,"snapshot.actor.progress"),Ni(e.actor.position?.x,"snapshot.actor.position.x"),Ni(e.actor.position?.z,"snapshot.actor.position.z"),Ni(e.actor.destination?.x,"snapshot.actor.destination.x"),Ni(e.actor.destination?.z,"snapshot.actor.destination.z")}};var it=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),mM=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),pM=(n,e)=>{if(!Number.isFinite(n))throw new Error("06I invalid "+e);return n},tl=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:i=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...mM,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=i,this.onSleep=s,this.onWake=r,this.tier=it.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[it.NEAR]:0,[it.MID]:0,[it.FAR]:0,[it.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===it.NEAR?"FRAME":this.tier===it.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===it.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:i=Date.now()}={}){let s=pM(e,"distanceM"),r=Math.max(0,pM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,i),this.tier===it.DORMANT)return 0;if(this.tier===it.NEAR)return this._tick(r,i),1;let a=this.tier===it.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,i),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let i=this.tier;if(i===it.DORMANT&&e!==it.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,i),this.onTierChange(e,i,t);return}if(i!==it.DORMANT&&e===it.DORMANT){this.onSleep(t,i,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,i,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,i,t)}_nextTier(e){let t=this.config;return this.tier===it.DORMANT?e>t.wakeRadiusM?it.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?it.DORMANT:this.tier===it.NEAR?e>t.nearExitM?it.MID:it.NEAR:this.tier===it.MID?e<=t.nearEnterM?it.NEAR:e>t.midExitM?it.FAR:it.MID:this.tier===it.FAR?e<=t.nearEnterM?it.NEAR:e<=t.midEnterM?it.MID:it.FAR:it.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?it.NEAR:e<=this.config.midEnterM?it.MID:it.FAR}};var jr=Object.freeze({version:1,milestone:"07A \u2014 Production Architecture Promotion",modules:["WorldEventSequence","TimedSpatialMemory","StimulusArbiter","GoalContinuity","LivingWorldKernel","StreamStateStore","StreamCell","SimulationLODController"],stateOwnership:{WorldEventSequence:"monotonic event identity only",TimedSpatialMemory:"local timed world-memory state + spatial applicability",StimulusArbiter:"stateless deterministic decision authority",GoalContinuity:"active/suspended goal + progress continuity",LivingWorldKernel:"orchestration order; no render ownership",StreamStateStore:"canonical serialized cell snapshots",StreamCell:"load/update/serialize/unload/rehydrate lifecycle",SimulationLODController:"distance tier + cadence + sleep/wake transitions"},boundaries:{rendering:"external adapter; no THREE dependency in production core",dom:"none",input:"external",combat:"unchanged / external",persistenceDisk:"not included",productionActorPipeline:"deferred to 07B",streamedProductionRegion:"deferred to 07C"}});var gM=1,vI=n=>JSON.parse(JSON.stringify(n)),Bi=(n,e)=>{if(!Number.isFinite(n))throw new Error("07B invalid "+e);return n};function SI(n){return Object.freeze({typeId:n.typeId,asset:Object.freeze({...n.asset}),scale:n.scale,yawOffset:n.yawOffset,animationMap:Object.freeze({...n.animationMap}),presentation:Object.freeze({...n.presentation})})}var o0=class{constructor(){this.definitions=new Map}register(e){if(!e?.typeId)throw new Error("07B actor typeId required");if(this.definitions.has(e.typeId))throw new Error("07B duplicate actor definition "+e.typeId);if(!e.asset?.id||!e.asset?.url)throw new Error("07B actor asset id/url required");let t=Bi(e.scale??1,"definition.scale"),i=Bi(e.yawOffset??0,"definition.yawOffset"),s=SI({typeId:e.typeId,asset:{id:e.asset.id,url:e.asset.url},scale:t,yawOffset:i,animationMap:e.animationMap??{},presentation:e.presentation??{}});return this.definitions.set(s.typeId,s),s}get(e){let t=this.definitions.get(e);if(!t)throw new Error("07B unknown actor definition "+e);return t}has(e){return this.definitions.has(e)}list(){return[...this.definitions.values()]}},Xd=class{constructor({id:e,definition:t,kernel:i,position:s={x:0,y:0,z:0},yaw:r=0,animationIntent:o="IDLE"}){if(!e)throw new Error("07B actor id required");this.id=e,this.typeId=t.typeId,this.definition=t,this.kernel=i,this.position={x:Bi(s.x??0,"actor.position.x"),y:Bi(s.y??0,"actor.position.y"),z:Bi(s.z??0,"actor.position.z")},this.yaw=Bi(r,"actor.yaw"),this.animationIntent=o||"IDLE",this.bindingId=null,this.bindingClaims=0,this.createdAt=Date.now()}setTransform({x:e=this.position.x,y:t=this.position.y,z:i=this.position.z,yaw:s=this.yaw}={}){this.position={x:Bi(e,"actor.position.x"),y:Bi(t,"actor.position.y"),z:Bi(i,"actor.position.z")},this.yaw=Bi(s,"actor.yaw")}setAnimationIntent(e){if(!e)throw new Error("07B animation intent required");this.animationIntent=String(e)}claimBinding(e){if(!e)throw new Error("07B binding id required");if(this.bindingId&&this.bindingId!==e)throw new Error("07B duplicate visual binding for "+this.id);return this.bindingId?!1:(this.bindingId=e,this.bindingClaims++,!0)}releaseBinding(e){return this.bindingId!==e?!1:(this.bindingId=null,!0)}serialize(e=Date.now()){return Bi(e,"actor serialize now"),{version:gM,actorId:this.id,typeId:this.typeId,serializedAt:e,transform:{position:vI(this.position),yaw:this.yaw},animationIntent:this.animationIntent,kernel:this.kernel.serialize(e)}}},qd=class{constructor({kernelFactory:e=t=>new pr(t)}={}){this.definitions=new o0,this.actors=new Map,this.kernelFactory=e,this.createdCount=0,this.destroyedCount=0}registerDefinition(e){return this.definitions.register(e)}createActor({id:e,typeId:t,position:i={x:0,y:0,z:0},yaw:s=0,animationIntent:r="IDLE",kernelOptions:o={}}){if(this.actors.has(e))throw new Error("07B duplicate actor id "+e);let a=this.definitions.get(t),c=this.kernelFactory(o),l=new Xd({id:e,definition:a,kernel:c,position:i,yaw:s,animationIntent:r});return this.actors.set(e,l),this.createdCount++,l}restoreActor(e,t=Date.now()){if(!e||e.version!==gM)throw new Error("07B actor snapshot version mismatch");if(this.actors.has(e.actorId))throw new Error("07B restore collision "+e.actorId);let i=this.definitions.get(e.typeId),s=this.kernelFactory();s.restore(e.kernel,t);let r=new Xd({id:e.actorId,definition:i,kernel:s,position:e.transform.position,yaw:e.transform.yaw,animationIntent:e.animationIntent});return this.actors.set(r.id,r),this.createdCount++,r}destroyActor(e){let t=this.actors.get(e);if(!t)return!1;if(t.bindingId)throw new Error("07B actor must release visual binding before destroy "+e);return this.actors.delete(e),this.destroyedCount++,!0}getActor(e){return this.actors.get(e)??null}listActors(){return[...this.actors.values()]}get size(){return this.actors.size}};var AI=0,a0=class{constructor({loader:e=new da}={}){this.loader=e,this.entries=new Map,this.loadCount=0,this.instanceCount=0}async load(e){let t=e.asset,i=this.entries.get(t.id);if(i){if(i.url!==t.url)throw new Error("07B asset id/url conflict "+t.id);return i.promise}this.loadCount++;let s=this.loader.loadAsync(t.url).then(r=>({gltf:r,template:r.scene,clips:[...r.animations]}));return this.entries.set(t.id,{url:t.url,promise:s}),s}async instantiate(e){let t=await this.load(e),i=Bd(t.template);return this.instanceCount++,{model:i,clips:t.clips}}get assetCount(){return this.entries.size}},c0=class{constructor({record:e,definition:t,scene:i,assetCache:s}){if(!e||!t||!i||!s)throw new Error("07B binding dependencies required");this.record=e,this.definition=t,this.scene=i,this.assetCache=s,this.bindingId="07B_BINDING_"+ ++AI,this.root=new mt,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.model=null,this.mixer=null,this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.ready=!1}async attach(){if(this.attached)return this;this.record.claimBinding(this.bindingId);let{model:e,clips:t}=await this.assetCache.instantiate(this.definition);this.model=e,this.model.scale.setScalar(this.definition.scale),this.model.rotation.y=this.definition.yawOffset,this.model.traverse(i=>{i.isMesh&&(i.castShadow=!!this.definition.presentation.castShadow,i.receiveShadow=this.definition.presentation.receiveShadow!==!1)}),this.root.add(this.model),this.mixer=new Is(this.model);for(let i of t)this.actions.set(i.name,this.mixer.clipAction(i));return this.scene.add(this.root),this.attached=!0,this.ready=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let i={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of i)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){if(this.record.setAnimationIntent(e),!this.ready||!this.mixer)return null;let i=this.resolveAnimation(e);if(!i)return null;let s=this.actions.get(i);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=i,i}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}update(e){this.ready&&(this.syncTransform(),this.mixer&&this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,this.ready=!1,this.model=null,this.mixer=null,this.actions.clear(),this.activeAction=null,!0):!1}},Yd=class{constructor({scene:e,assetCache:t=new a0}={}){if(!e)throw new Error("07B Three actor factory requires scene");this.scene=e,this.assetCache=t,this.bindings=new Map,this.duplicateBindingCount=0}async bind(e){if(this.bindings.has(e.id))throw this.duplicateBindingCount++,new Error("07B duplicate actor binding "+e.id);let t=new c0({record:e,definition:e.definition,scene:this.scene,assetCache:this.assetCache});return await t.attach(),this.bindings.set(e.id,t),t}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var Jd=n=>JSON.parse(JSON.stringify(n)),ma=(n,e)=>{if(!Number.isFinite(n))throw new Error("07C invalid "+e);return n},Fi=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.regionId!==e)throw new Error("07C region snapshot mismatch");if(t.version!==1)throw new Error("07C region snapshot version mismatch");return this.snapshots.set(e,Jd(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Jd(t):null}has(e){return this.snapshots.has(e)}},ts=class{constructor({id:e,pipeline:t,store:i=new Fi,actorBlueprints:s=[],bindActor:r=async()=>{},unbindActor:o=async()=>{},loadRadiusM:a=24,unloadRadiusM:c=38}={}){if(!e)throw new Error("07C region id required");if(!t)throw new Error("07C production actor pipeline required");if(!Array.isArray(s)||s.length===0)throw new Error("07C actor blueprints required");if(!(a>0&&c>a))throw new Error("07C region hysteresis invalid");let l=new Set;for(let u of s){if(!u?.id||!u?.typeId)throw new Error("07C invalid actor blueprint");if(l.has(u.id))throw new Error("07C duplicate actor blueprint "+u.id);l.add(u.id)}this.id=e,this.pipeline=t,this.store=i,this.actorBlueprints=Jd(s),this.bindActor=r,this.unbindActor=o,this.loadRadiusM=ma(a,"loadRadiusM"),this.unloadRadiusM=ma(c,"unloadRadiusM"),this.lifecycle="UNLOADED",this.operation=null,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.duplicateCount=0,this.lastSerializedAt=0,this.lastOffscreenMs=0,this.lastRestoreProgressPreserved=!1,this.lastRestoreIdsStable=!1,this.lastError=null}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}get actorIds(){return this.actorBlueprints.map(e=>e.id)}get activeActors(){return this.actorIds.map(e=>this.pipeline.getActor(e)).filter(Boolean)}desiredLifecycle(e){let t=ma(e,"distanceM");return this.lifecycle==="ACTIVE"?t>=this.unloadRadiusM?"UNLOADED":"ACTIVE":this.lifecycle==="UNLOADED"?t<=this.loadRadiusM?"ACTIVE":"UNLOADED":this.lifecycle}serialize(e=Date.now()){ma(e,"serialize now");let t=this.actorIds.map(i=>{let s=this.pipeline.getActor(i);if(!s)throw new Error("07C cannot serialize missing actor "+i);return s.serialize(e)});return{version:1,regionId:this.id,serializedAt:e,actorIds:[...this.actorIds],actors:t}}async load(e=Date.now()){return this.isActive?{rehydrated:!1,alreadyActive:!0,offscreenMs:0}:this.operation?this.operation:(this.operation=this._load(e).finally(()=>{this.operation=null}),this.operation)}async _load(e){this.lastError=null;let t=this.store.load(this.id);this.lifecycle=t?"REHYDRATING":"LOADING";let i=[],s=[],r=new Map;try{if(t){if(t.version!==1||t.regionId!==this.id)throw new Error("07C invalid region snapshot");if(t.actorIds.join("|")!==this.actorIds.join("|"))throw new Error("07C region actor identity mismatch");for(let o of t.actors){r.set(o.actorId,o.kernel?.goals?.progress);let a=this.pipeline.restoreActor(o,e);i.push(a)}}else for(let o of this.actorBlueprints){let a=this.pipeline.createActor(o);i.push(a)}for(let o of i)await this.bindActor(o),s.push(o);return this.lifecycle="ACTIVE",this.loadCount++,t&&(this.restoreCount++,this.lastOffscreenMs=Math.max(0,e-t.serializedAt),this.lastRestoreIdsStable=i.length===this.actorIds.length&&i.every((o,a)=>o.id===this.actorIds[a]),this.lastRestoreProgressPreserved=i.every(o=>{let a=r.get(o.id);return Number.isFinite(a)&&Math.abs(o.kernel.goals.progress-a)<1e-12})),{rehydrated:!!t,alreadyActive:!1,offscreenMs:this.lastOffscreenMs,actorIds:i.map(o=>o.id)}}catch(o){this.lastError=o;for(let a of s.slice().reverse())try{await this.unbindActor(a)}catch{}for(let a of i.slice().reverse()){if(a.bindingId){this.duplicateCount++;continue}this.pipeline.destroyActor(a.id)}throw this.lifecycle="UNLOADED",o}}async unload(e=Date.now()){return this.isActive?this.operation?this.operation:(this.operation=this._unload(e).finally(()=>{this.operation=null}),this.operation):null}async _unload(e){this.lastError=null,this.lifecycle="SERIALIZING";let t=this.serialize(e);this.store.save(this.id,t),this.lastSerializedAt=e,this.lifecycle="UNLOADING";try{for(let i of this.actorIds){let s=this.pipeline.getActor(i);if(!s)throw new Error("07C missing actor during unload "+i);await this.unbindActor(s)}for(let i of this.actorIds){let s=this.pipeline.getActor(i);if(!s)throw new Error("07C actor disappeared before destroy "+i);if(s.bindingId)throw this.duplicateCount++,new Error("07C actor still bound during destroy "+i);this.pipeline.destroyActor(i)}return this.lifecycle="UNLOADED",this.unloadCount++,Jd(t)}catch(i){throw this.lastError=i,i}}update({dtMs:e=0,now:t=Date.now(),foodProgressPerSecond:i=.008}={}){if(!this.isActive)return 0;let r=Math.max(0,ma(e,"dtMs"))/1e3*Math.max(0,ma(i,"foodProgressPerSecond")),o=0;for(let a of this.activeActors)a.kernel.update({now:t,foodValid:!0,foodEventAt:t,foodProgressDelta:r}),o++;return o}};var Zd=(n,e)=>{if(!Number.isFinite(n))throw new Error("07D invalid "+e);return n},Kd=class{constructor({region:e,pipeline:t,actorId:i,hazardCenter:s={x:0,z:0},triggerDelayMs:r=1800}={}){if(!e)throw new Error("07D region required");if(!t)throw new Error("07D actor pipeline required");if(!i)throw new Error("07D actor id required");this.region=e,this.pipeline=t,this.actorId=i,this.hazardCenter={x:Zd(s.x,"hazardCenter.x"),z:Zd(s.z,"hazardCenter.z")},this.triggerDelayMs=Math.max(0,Zd(r,"triggerDelayMs")),this.stage="WAITING_REGION",this.firstActiveAt=0,this.hazardEventId=0,this.hazardEmittedAt=0,this.hazardObserved=!1,this.recoveryObserved=!1,this.streamOutObserved=!1,this.restoreObserved=!1,this.baselineProgress=null,this.recoveredProgress=null,this.lastUnloadCount=e.unloadCount??0,this.lastRestoreCount=e.restoreCount??0}get actor(){return this.pipeline.getActor(this.actorId)}update(e=Date.now()){Zd(e,"update now"),(this.region.unloadCount??0)>this.lastUnloadCount&&(this.streamOutObserved=!0,this.lastUnloadCount=this.region.unloadCount),(this.region.restoreCount??0)>this.lastRestoreCount&&(this.restoreObserved=!0,this.lastRestoreCount=this.region.restoreCount);let t=this.actor;if(!this.region.isActive||!t)return this.streamOutObserved&&(this.stage="STREAMED_OUT"),this.snapshot();if(this.firstActiveAt||(this.firstActiveAt=e,this.stage="FOOD_ACTIVE"),!this.hazardEventId&&e-this.firstActiveAt>=this.triggerDelayMs){this.baselineProgress=t.kernel.goals.progress;let r=t.kernel.createHazardEvent({center:this.hazardCenter,at:e});this.hazardEventId=r.id,this.hazardEmittedAt=e,this.stage="HAZARD_EMITTED"}let i=t.kernel.memory.state,s=t.kernel.goals.activeGoal;return this.hazardEventId&&s==="HAZARD"&&(this.hazardObserved=!0,this.stage="HAZARD_ACTIVE"),this.hazardObserved&&i==="CALM"&&s==="FOOD"&&(this.recoveryObserved=!0,this.recoveredProgress=t.kernel.goals.progress,this.stage=this.restoreObserved?"RESTORED":"BEHAVIOR_RECOVERED"),this.restoreObserved&&this.recoveryObserved&&(this.stage="RESTORED"),this.snapshot()}completion({assetLoadCount:e,duplicateCount:t=0,regressionStatus:i="WAITING"}={}){let s=Number.isFinite(this.baselineProgress)&&Number.isFinite(this.recoveredProgress)&&this.recoveredProgress>=this.baselineProgress-1e-12,r={hazard_emitted:this.hazardEventId>0,hazard_observed:this.hazardObserved,recovery_observed:this.recoveryObserved,progress_preserved:s,stream_out_observed:this.streamOutObserved,restore_observed:this.restoreObserved,region_ids_stable:this.region.lastRestoreIdsStable===!0,region_progress_preserved:this.region.lastRestoreProgressPreserved===!0,asset_load_one:e===1,duplicates:t===0,regression:i==="PASS"},o=Object.entries(r).filter(([,a])=>!a).map(([a])=>a);return{pass:o.length===0,failed:o,checks:r}}snapshot(){return{version:1,stage:this.stage,actorId:this.actorId,hazardEventId:this.hazardEventId,hazardEmittedAt:this.hazardEmittedAt,hazardObserved:this.hazardObserved,recoveryObserved:this.recoveryObserved,streamOutObserved:this.streamOutObserved,restoreObserved:this.restoreObserved,baselineProgress:this.baselineProgress,recoveredProgress:this.recoveredProgress}}};var $d=(n,e)=>{if(!Number.isFinite(n))throw new Error("08A invalid "+e);return n},l0=class{constructor({id:e,center:t,region:i}={}){if(!e||!i)throw new Error("08A region entry requires id + region");this.id=e,this.center={x:$d(t?.x,"center.x"),z:$d(t?.z,"center.z")},this.region=i,this.lastDistance=1/0,this.transitions=0,this.loads=0,this.unloads=0,this.lastAction="NONE"}},mr=class{constructor({entries:e=[]}={}){this.entries=new Map,this.stepCount=0,this.duplicateRegionIds=0;for(let t of e)this.register(t)}register({id:e,center:t,region:i}){if(this.entries.has(e))throw this.duplicateRegionIds++,new Error("08A duplicate region id "+e);let s=new l0({id:e,center:t,region:i});return this.entries.set(e,s),s}get(e){return this.entries.get(e)??null}list(){return[...this.entries.values()]}get size(){return this.entries.size}distances(e){return this.list().map(t=>({id:t.id,distance:Math.hypot($d(e?.x,"player.x")-t.center.x,$d(e?.z,"player.z")-t.center.z)}))}nearest(e){return this.distances(e).sort((i,s)=>i.distance-s.distance||i.id.localeCompare(s.id))[0]??null}async step({playerPosition:e,dtMs:t=0,now:i=Date.now(),foodProgressPerSecond:s=.006}={}){this.stepCount++;let r=[];for(let o of this.list()){let a=Math.hypot(e.x-o.center.x,e.z-o.center.z);o.lastDistance=a;let c=o.region;if(!c.operation){if(c.lifecycle==="UNLOADED"&&a<=c.loadRadiusM){let l=c.loadCount,u=await c.load(i);c.loadCount>l&&(o.loads++,o.transitions++,o.lastAction=u.rehydrated?"REHYDRATE":"LOAD",r.push({regionId:o.id,action:o.lastAction}))}else if(c.lifecycle==="ACTIVE"&&a>=c.unloadRadiusM){let l=c.unloadCount;await c.unload(i),c.unloadCount>l&&(o.unloads++,o.transitions++,o.lastAction="UNLOAD",r.push({regionId:o.id,action:"UNLOAD"}))}}c.isActive&&c.update({dtMs:t,now:i,foodProgressPerSecond:s})}return r}snapshot(){return{version:1,regions:this.list().map(e=>({id:e.id,center:{...e.center},lifecycle:e.region.lifecycle,hasSnapshot:e.region.hasSnapshot,lastDistance:e.lastDistance,loads:e.loads,unloads:e.unloads,transitions:e.transitions}))}}};var gr=(n,e)=>{if(!Number.isFinite(n))throw new Error("08B invalid "+e);return n},ga=class{constructor({prefetchRadiusM:e=46,minApproachSpeedMps:t=.35,minApproachDot:i=.35}={}){this.prefetchRadiusM=gr(e,"prefetchRadiusM"),this.minApproachSpeedMps=gr(t,"minApproachSpeedMps"),this.minApproachDot=gr(i,"minApproachDot"),this.lastPosition=null,this.lastNow=null,this.velocity={x:0,z:0,speed:0},this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,this.selectionCount=0}updateMotion(e,t){let i={x:gr(e?.x,"position.x"),z:gr(e?.z,"position.z")};if(gr(t,"now"),this.lastPosition&&Number.isFinite(this.lastNow)&&t>this.lastNow){let s=(t-this.lastNow)/1e3,r=(i.x-this.lastPosition.x)/s,o=(i.z-this.lastPosition.z)/s,a=Math.hypot(r,o);this.velocity={x:r,z:o,speed:a}}else this.velocity={x:0,z:0,speed:0};return this.lastPosition=i,this.lastNow=t,{...this.velocity}}choose({position:e,regions:t,excludeIds:i=[]}={}){let s={x:gr(e?.x,"position.x"),z:gr(e?.z,"position.z")},r=new Set(i),o=this.velocity;if(o.speed<this.minApproachSpeedMps)return this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,null;let a=null;for(let l of t??[]){if(!l?.id||r.has(l.id)||l.lifecycle!=="UNLOADED")continue;let u=l.center.x-s.x,h=l.center.z-s.z,d=Math.hypot(u,h);if(d>this.prefetchRadiusM||d<=1e-6)continue;let f=(o.x*u+o.z*h)/(o.speed*d);if(f<this.minApproachDot)continue;let m=f*2-d/this.prefetchRadiusM;(!a||m>a.score||m===a.score&&l.id<a.id)&&(a={id:l.id,distance:d,approach:f,score:m})}let c=a?.id??null;return c&&c!==this.targetId&&this.selectionCount++,this.targetId=c,this.targetDistance=a?.distance??1/0,this.targetApproach=a?.approach??0,a}snapshot(){return{version:1,targetId:this.targetId,targetDistance:this.targetDistance,targetApproach:this.targetApproach,velocity:{...this.velocity},selectionCount:this.selectionCount}}};var u0=class{constructor({record:e,definition:t,scene:i,prepared:s,bindingId:r}){this.record=e,this.definition=t,this.scene=i,this.bindingId=r,this.root=new mt,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.root.userData.predictivePrefetch08B=!0,this.model=s.model,this.clips=s.clips,this.mixer=new Is(this.model),this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.model.scale.setScalar(t.scale),this.model.rotation.y=t.yawOffset,this.model.traverse(o=>{o.isMesh&&(o.castShadow=!!t.presentation.castShadow,o.receiveShadow=t.presentation.receiveShadow!==!1)}),this.root.add(this.model);for(let o of this.clips)this.actions.set(o.name,this.mixer.clipAction(o))}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let i={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of i)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){this.record.setAnimationIntent(e);let i=this.resolveAnimation(e);if(!i)return null;let s=this.actions.get(i);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=i,i}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}attach(){return this.attached?this:(this.record.claimBinding(this.bindingId),this.scene.add(this.root),this.attached=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this)}update(e){this.attached&&(this.syncTransform(),this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,!0):!1}},_a=class{constructor({scene:e,assetCache:t}={}){if(!e||!t)throw new Error("08B predictive factory requires scene + frozen asset cache");this.scene=e,this.assetCache=t,this.prefetched=new Map,this.prefetchPromises=new Map,this.bindings=new Map,this.prefetchCount=0,this.prefetchedInstances=0,this.consumedInstances=0,this.fallbackInstances=0,this.duplicateBindingCount=0,this.bindingSequence=0}async prefetch(e,t,i){if(!e||!t||!Number.isInteger(i)||i<1)throw new Error("08B invalid prefetch request");let s=this.prefetched.get(e);if(s&&s.length>=i)return s.length;if(this.prefetchPromises.has(e))return this.prefetchPromises.get(e);let r=(async()=>{let o=this.prefetched.get(e)??[];for(;o.length<i;){let a=await this.assetCache.instantiate(t);o.push(a),this.prefetchedInstances++}return this.prefetched.set(e,o),this.prefetchCount++,o.length})().finally(()=>this.prefetchPromises.delete(e));return this.prefetchPromises.set(e,r),r}preparedCount(e){return this.prefetched.get(e)?.length??0}async bind(e,t){if(this.bindings.has(t.id))throw this.duplicateBindingCount++,new Error("08B duplicate predictive binding "+t.id);let i=null,s=this.prefetched.get(e);s?.length?(i=s.shift(),this.consumedInstances++,s.length===0&&this.prefetched.delete(e)):(i=await this.assetCache.instantiate(t.definition),this.fallbackInstances++);let r=new u0({record:t,definition:t.definition,scene:this.scene,prepared:i,bindingId:"08B_BIND_"+ ++this.bindingSequence});return r.attach(),this.bindings.set(t.id,r),r}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var jd=(n,e)=>{if(!Number.isFinite(n))throw new Error("08C invalid "+e);return n},Qd=class{constructor({maxPreparedInstances:e=2}={}){this.maxPreparedInstances=Math.max(1,Math.floor(jd(e,"maxPreparedInstances"))),this.currentTarget=null,this.prepared=new Map,this.peakPrepared=0,this.cancellations=0,this.evictedInstances=0,this.consumedInstances=0,this.retargetCount=0,this.staleCompletionCount=0}setTarget(e){let t=e||null;t!==this.currentTarget&&this.retargetCount++,this.currentTarget=t}setPrepared(e,t){let i=Math.max(0,Math.floor(jd(t,"prepared count")));if(i===0?this.prepared.delete(e):this.prepared.set(e,i),this.peakPrepared=Math.max(this.peakPrepared,this.totalPrepared),this.totalPrepared>this.maxPreparedInstances)throw new Error("08C prepared-instance budget exceeded")}recordDiscard(e,t,{stale:i=!1}={}){let s=Math.max(0,Math.floor(jd(t,"discard count")));this.setPrepared(e,0),s>0&&(this.cancellations++,this.evictedInstances+=s),i&&this.staleCompletionCount++}recordConsumed(e){this.consumedInstances+=Math.max(0,Math.floor(jd(e,"consumed count")))}get totalPrepared(){let e=0;for(let t of this.prepared.values())e+=t;return e}snapshot(){return{version:1,maxPreparedInstances:this.maxPreparedInstances,currentTarget:this.currentTarget,prepared:Object.fromEntries(this.prepared),totalPrepared:this.totalPrepared,peakPrepared:this.peakPrepared,cancellations:this.cancellations,evictedInstances:this.evictedInstances,consumedInstances:this.consumedInstances,retargetCount:this.retargetCount,staleCompletionCount:this.staleCompletionCount}}};var ef=class{constructor({factory:e,maxPreparedInstances:t=2}={}){if(!e)throw new Error("08C bounded prefetch controller requires predictive factory");this.factory=e,this.budget=new Qd({maxPreparedInstances:t}),this.targetId=null,this.sequence=0,this.prefetchExecutions=0,this.prefetchByRegion=new Map,this.lastAction="IDLE",this.lastDiscardReason="NONE",this.lastObservedConsumed=e.consumedInstances??0}preparedCount(e){return this.factory.preparedCount(e)}totalPrepared(){let e=0;for(let t of this.factory.prefetched.values())e+=t.length;return e}discard(e,t="RETARGET",{stale:i=!1}={}){if(!e)return 0;let r=this.factory.prefetched.get(e)?.length??0;return r>0&&this.factory.prefetched.delete(e),this.budget.recordDiscard(e,r,{stale:i}),this.lastDiscardReason=t,r>0&&(this.lastAction="EVICTED "+e+" \xD7"+r),r}syncConsumed(){let e=this.factory.consumedInstances??0,t=Math.max(0,e-this.lastObservedConsumed);return t>0&&this.budget.recordConsumed(t),this.lastObservedConsumed=e,t}async retarget(e,t,i=2){let s=e||null,r=this.targetId;r&&r!==s&&this.discard(r,"RETARGET"),this.targetId=s,this.budget.setTarget(s);let o=++this.sequence;if(!s)return this.lastAction=r?"TARGET CLEARED":"IDLE",{target:null,prepared:0,stale:!1};let a=this.factory.preparedCount(s);if(a>=i)return this.budget.setPrepared(s,a),this.lastAction="READY "+s+" \xD7"+a,{target:s,prepared:a,stale:!1};if(this.lastAction="PREFETCHING "+s,await this.factory.prefetch(s,t,i),this.prefetchExecutions++,this.prefetchByRegion.set(s,(this.prefetchByRegion.get(s)??0)+1),o!==this.sequence||this.targetId!==s){let l=this.discard(s,"STALE COMPLETION",{stale:!0});return{target:s,prepared:0,stale:!0,discarded:l}}let c=this.factory.preparedCount(s);return this.budget.setPrepared(s,c),this.lastAction="READY "+s+" \xD7"+c,{target:s,prepared:c,stale:!1}}observeAfterWorldStep(){this.syncConsumed();for(let e of[...this.budget.prepared.keys()]){let t=this.factory.preparedCount(e);this.budget.setPrepared(e,t)}if(this.totalPrepared()>this.budget.maxPreparedInstances)throw new Error("08C factory prepared pool exceeded bounded budget")}executionCount(e){return this.prefetchByRegion.get(e)??0}snapshot(){return{targetId:this.targetId,prefetchExecutions:this.prefetchExecutions,prefetchByRegion:Object.fromEntries(this.prefetchByRegion),lastAction:this.lastAction,lastDiscardReason:this.lastDiscardReason,factoryPrepared:this.totalPrepared(),budget:this.budget.snapshot()}}};var ze=Object.freeze({version:2,milestone:"09B \u2014 Vertical Beauty Slice",name:"Sunlit Basin",radiusM:33,presentationPass:2,materialFamilies:Object.freeze(["meadow-ground","soil-path","wood","foliage","stone","water"]),depthLayers:Object.freeze(["foreground-ground-cover","gameplay-plane","midground-stone-gate","distant-ridge-silhouette","atmosphere-sky"]),ambientMotionSystems:Object.freeze(["canopy-understory-wind","grass-wind","water-ripples","airborne-pollen"]),layout:Object.freeze({trees:28,grassTufts:320,shrubs:42,flowers:96,rocks:28,ridgeLayers:3,ridgeSegments:12,gateBlocks:14,pollen:240,pathSegments:42,shoreSegments:72}),presentationBudget:Object.freeze({addedDrawCallsMax:14,addedTrianglesMax:18e3,absoluteDrawCallsMax:120,absoluteTrianglesMax:35e4}),acceptance:Object.freeze({frameRule:["place","physical substance","atmosphere","scale","motion","character","gameplay purpose"],automatedProofIsPresentationAcceptance:!1,humanPresentationReviewRequired:!0,preserve06J:!0,preserveTest08:!0,broadContentExpansion:!1})});function _M(n=10166310){let e=n>>>0;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}var jt=n=>document.getElementById(n),Dv=jt("boot"),wf=jt("error"),TI=jt("fps"),RI=jt("calls"),wI=jt("tris"),k0=jt("char"),Pv=jt("scale"),CI=jt("zone");addEventListener("error",n=>{wf.style.display="block",wf.textContent=`Runtime error:
`+n.message});addEventListener("unhandledrejection",n=>{wf.style.display="block",wf.textContent=`Load/runtime error:
`+(n.reason?.message||n.reason||"Unknown rejection")});var Ua=matchMedia("(pointer:coarse)").matches,h0=1831565813;function Mt(){return h0=h0*1664525+1013904223>>>0,h0/4294967296}function I_(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function Lv(n=96){let e=new Uint8Array(n*n*4);for(let i=0;i<n;i++)for(let s=0;s<n;s++){let r=(i*n+s)*4,o=Math.floor(255*(.36+.64*I_(s*.31,i*.37)));e[r]=e[r+1]=e[r+2]=o,e[r+3]=255}let t=new nr(e,n,n,An);return t.wrapS=t.wrapT=Si,t.colorSpace=Di,t.needsUpdate=!0,t}var pi=Lv();pi.repeat.set(26,26);var Cf=Lv(64);Cf.repeat.set(18,36);var ye=new fc;ye.fog=new dc(12045264,.0057);var Kn=new Yt(53,innerWidth/innerHeight,.1,800);Kn.position.set(0,6,10);var je=new Ld({antialias:!0,powerPreference:"high-performance"}),ss=Math.min(devicePixelRatio,Ua?1.32:1.8),II=Ua?1:1.25,DI=Math.min(devicePixelRatio,Ua?1.42:1.9);je.setPixelRatio(ss);je.setSize(innerWidth,innerHeight);je.outputColorSpace=zt;je.toneMapping=Uc;je.toneMappingExposure=1.05;je.shadowMap.enabled=!0;je.shadowMap.type=Uh;document.body.prepend(je.domElement);Pv.textContent=ss.toFixed(2)+"\xD7";var Ol=new Ic(14282751,5069125,1.85);ye.add(Ol);var If=new Lc(9545908,.18);ye.add(If);var Nt=new Wr(16773072,3.35);Nt.position.set(-46,58,18);Nt.castShadow=!0;Nt.shadow.mapSize.set(Ua?1024:1536,Ua?1024:1536);Nt.shadow.camera.left=-46;Nt.shadow.camera.right=46;Nt.shadow.camera.top=46;Nt.shadow.camera.bottom=-46;Nt.shadow.camera.near=1;Nt.shadow.camera.far=155;Nt.shadow.bias=-18e-5;Nt.shadow.normalBias=.025;ye.add(Nt,Nt.target);var Jn={top:{value:new re(6203856)},mid:{value:new re(12572628)},bottom:{value:new re(15785404)},sunDir:{value:new I(-.5,.8,.25)},sunWarm:{value:new re(16766874)}},PI=new nn({side:rn,depthWrite:!1,uniforms:Jn,vertexShader:"varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}"});ye.add(new Fe(new pn(390,40,20),PI));function Gs(n){return-18+Math.sin(n*.048)*4.2+Math.sin(n*.013)*2.2}function Rn(n,e){let t=Math.sin(n*.029)*3+Math.cos(e*.032)*2.4+Math.sin((n+e)*.021)*1.65,i=Math.sin(n*.093+e*.032)*.5+Math.cos(e*.108-n*.025)*.38,s=n-Gs(e),r=-Math.exp(-(s*s)/54)*5.2,o=Math.exp(-((n-46)*(n-46)+(e+54)*(e+54))/920)*7,a=Math.exp(-((n+50)*(n+50)+(e+42)*(e+42))/1600)*3;return t+i+r+o+a}function LI(n,e){let i=(Rn(n+.45,e)-Rn(n-.45,e))/.9,s=(Rn(n,e+.45)-Rn(n,e-.45))/(2*.45);return Math.min(1,Math.hypot(i,s))}var cn={cx:0,cz:4,w:18,d:5,top:0};cn.cx=Gs(cn.cz);cn.top=Math.max(Rn(cn.cx-10,cn.cz),Rn(cn.cx+10,cn.cz))+.72;function D_(n,e){return Math.abs(n-cn.cx)<cn.w*.5&&Math.abs(e-cn.cz)<cn.d*.5}function Le(n,e){return D_(n,e)?cn.top:Rn(n,e)}function NI(n,e){return Math.abs(n-Gs(e))<5.8&&!D_(n,e)}function OI(n,e,t){let i=new re,s=LI(e,t),r=Math.exp(-Math.pow((e-Gs(t))/11,2)),o=I_(e*.9,t*.9);return s>.55?i.setRGB(.31,.34,.31):n<-1.4?i.setRGB(.26,.38,.25):n<1?i.setRGB(.38,.52,.29):n<4.4?i.setRGB(.43,.58,.31):i.setRGB(.35,.49,.28),i.offsetHSL((o-.5)*.012,(r-.5)*.035,(o-.5)*.055),i.lerp(new re(.38,.36,.3),Math.max(0,s-.32)*.48),i}var _u=new oi(240,240,170,170);_u.rotateX(-Math.PI/2);var tf=_u.attributes.position,Nv=[];for(let n=0;n<tf.count;n++){let e=tf.getX(n),t=tf.getZ(n),i=Rn(e,t);tf.setY(n,i);let s=OI(i,e,t);Nv.push(s.r,s.g,s.b)}_u.setAttribute("color",new Oe(Nv,3));_u.computeVertexNormals();var BI=new Te({vertexColors:!0,roughness:.92,bumpMap:pi,bumpScale:.2}),Ov=new Fe(_u,BI);Ov.receiveShadow=!0;ye.add(Ov);var V0=new Sc([new I(5,0,60),new I(-2,0,41),new I(-12,0,22),new I(cn.cx,0,cn.cz),new I(-3,0,-13),new I(18,0,-31),new I(36,0,-44),new I(47,0,-55)]),Bv=[],Fv=[],Uv=[],W0=112;for(let n=0;n<=W0;n++){let e=n/W0,t=V0.getPoint(e),i=V0.getPoint(Math.min(1,e+.0025)),s=i.clone().sub(t).normalize(),r=new I(-s.z,0,s.x),o=2.45+Math.sin(n*.41)*.18;for(let a=0;a<2;a++){let c=a?1:-1,l=t.clone().addScaledVector(r,o*c);l.y=Le(l.x,l.z)+.07,Bv.push(l.x,l.y,l.z),Uv.push(a,e*8)}}for(let n=0;n<W0;n++){let e=n*2,t=e+1,i=e+2,s=e+3;Fv.push(e,i,t,t,i,s)}var xu=new ht;xu.setAttribute("position",new Oe(Bv,3));xu.setAttribute("uv",new Oe(Uv,2));xu.setIndex(Fv);xu.computeVertexNormals();var FI=new Te({color:9795412,roughness:.96,bumpMap:Cf,bumpScale:.18}),Hv=new Fe(xu,FI);Hv.receiveShadow=!0;ye.add(Hv);var zv=[],Gv=[],kv=[],Al=128;for(let n=0;n<=Al;n++){let e=-110+n*(220/Al),t=Gs(e),i=5.55;zv.push(t-i,-2.3,e,t+i,-2.3,e),kv.push(0,n/Al*14,1,n/Al*14)}for(let n=0;n<Al;n++){let e=n*2,t=e+1,i=e+2,s=e+3;Gv.push(e,i,t,t,i,s)}var yu=new ht;yu.setAttribute("position",new Oe(zv,3));yu.setAttribute("uv",new Oe(kv,2));yu.setIndex(Gv);yu.computeVertexNormals();var Df={time:{value:0},sunDir:{value:new I(-.5,.8,.2)},deep:{value:new re(1987175)},shallow:{value:new re(7649730)},sky:{value:new re(12572628)}},UI=new nn({transparent:!0,depthWrite:!1,uniforms:Df,vertexShader:"uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}",fragmentShader:"uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}"});ye.add(new Fe(yu,UI));var P_=[],xp=(n,e,t,i=7)=>P_.push({x:n,z:e,r:t,h:i});function qa(n,e){n.onBeforeCompile=t=>{t.uniforms.uTime={value:0},t.uniforms.uWind={value:.48},n.userData.shader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${e.toFixed(3)};transformed.x+=sw*max(position.y,0.);`)},n.customProgramCacheKey=()=>`wind-${e}`}var HI=new Te({color:5912356,roughness:1,bumpMap:pi,bumpScale:.08}),L_=new Te({color:2843447,roughness:.86}),N_=new Te({color:3766343,roughness:.84}),O_=new Te({color:5079632,roughness:.84});qa(L_,.018);qa(N_,.022);qa(O_,.025);var Eu=238,Vv=new bi(.29,.48,5.4,8);Vv.translate(0,2.7,0);var zI=new sr(1.55,1),Wv=new sr(1.18,1),Pf=new ke(Vv,HI,Eu),B_=new ke(zI,L_,Eu),F_=new ke(Wv,N_,Eu),U_=new ke(Wv,O_,Eu);Pf.castShadow=Pf.receiveShadow=!0;B_.castShadow=F_.castShadow=U_.castShadow=!0;var ot=new Be,nf=0,GI=0;for(;nf<Eu&&GI++<5e3;){let n=(Mt()-.5)*224,e=(Mt()-.5)*224;if(Math.abs(n-Gs(e))<9.2||Math.hypot(n-5,e-60)<10||Math.hypot(n-38,e+45)<14)continue;let t=Rn(n,e),i=.72+Mt()*1.12,s=Mt()*Math.PI*2;ot.position.set(n,t,e),ot.rotation.set(0,s,0),ot.scale.set(i,i,i),ot.updateMatrix(),Pf.setMatrixAt(nf,ot.matrix);let r=t+5.15*i;for(let[o,a,c,l,u]of[[B_,0,0,0,1],[F_,.75,.18,.05,.86],[U_,-.62,.42,-.18,.78]]){let h=Math.cos(s),d=Math.sin(s),f=a*h-l*d,m=a*d+l*h;ot.position.set(n+f*i,r+c*i,e+m*i),ot.rotation.set(0,s+Mt()*.5,0),ot.scale.set(i*u*(.9+Mt()*.18),i*u*(.9+Mt()*.16),i*u*(.9+Mt()*.18)),ot.updateMatrix(),o.setMatrixAt(nf,ot.matrix)}xp(n,e,.5*i,7*i),nf++}ye.add(Pf,B_,F_,U_);var H_=new Te({color:4684355,roughness:.9});qa(H_,.03);var kI=new Wn(.72,0),Xv=260,z_=new ke(kI,H_,Xv);for(let n=0;n<Xv;n++){let e=(Mt()-.5)*214,t=(Mt()-.5)*214;if(Math.abs(e-Gs(t))<7)continue;let i=Rn(e,t),s=.45+Mt()*.95;ot.position.set(e,i+.35*s,t),ot.rotation.set(0,Mt()*6.28,0),ot.scale.set(s*1.35,s*.75,s),ot.updateMatrix(),z_.setMatrixAt(n,ot.matrix)}z_.castShadow=!0;ye.add(z_);var G_=new Te({color:6590018,roughness:1,side:Et});qa(G_,.06);var qv=new Ti(.052,.62,3);qv.translate(0,.31,0);var Yv=2600,Jv=new ke(qv,G_,Yv);for(let n=0;n<Yv;n++){let e=(Mt()-.5)*220,t=(Mt()-.5)*220;if(Math.abs(e-Gs(t))<6.3)continue;let i=Rn(e,t),s=.45+Mt()*1.15;ot.position.set(e,i,t),ot.rotation.set(0,Mt()*6.28,0),ot.scale.set(s,s,s),ot.updateMatrix(),Jv.setMatrixAt(n,ot.matrix)}ye.add(Jv);var k_=new Te({color:15785392,roughness:.78,emissive:1905671,emissiveIntensity:.15});qa(k_,.025);var VI=new pn(.065,5,4),Zv=310,Kv=new ke(VI,k_,Zv);for(let n=0;n<Zv;n++){let e=Mt(),t=V0.getPoint(e),i=t.x+(Mt()-.5)*14,s=t.z+(Mt()-.5)*14,r=Rn(i,s);ot.position.set(i,r+.18,s);let o=.65+Mt()*.8;ot.scale.setScalar(o),ot.updateMatrix(),Kv.setMatrixAt(n,ot.matrix)}ye.add(Kv);function WI(n){let e=new sr(1,1),t=e.attributes.position;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),o=t.getZ(i),a=.78+.3*I_(i*.37+n*11,i*.73+n*7);t.setXYZ(i,s*a,r*a,o*a)}return e.computeVertexNormals(),e}var XI=new Te({color:7699320,roughness:.93,bumpMap:pi,bumpScale:.12}),$v=120,qI=[0,1,2].map(n=>{let e=new ke(WI(n),XI,Math.ceil($v/3));return e.castShadow=e.receiveShadow=!0,ye.add(e),e}),YI=[0,0,0];for(let n=0;n<$v;n++){let e=(Mt()-.5)*215,t=(Mt()-.5)*215,i=Rn(e,t),s=.22+Mt()*1.25,r=n%3,o=YI[r]++;ot.position.set(e,i+.12,t),ot.rotation.set(Mt()*.23,Mt()*6.28,Mt()*.2),ot.scale.set(s*1.45,s*.72,s),ot.updateMatrix(),qI[r].setMatrixAt(o,ot.matrix),s>.62&&xp(e,t,.78*s,1.4*s)}var JI=new Te({color:6846579,roughness:1,flatShading:!0}),ZI=new Te({color:8556682,roughness:1,flatShading:!0}),jv=new Ti(15,36,7,1),Lf=28,Qv=new ke(jv,JI,Lf),eS=new ke(jv,ZI,Lf);for(let n=0;n<Lf;n++){let e=n/Lf*Math.PI*2,t=145+Math.sin(n*2.17)*15,i=Math.cos(e)*t,s=Math.sin(e)*t,r=.68+n*13%11/18;ot.position.set(i,7+Math.sin(n)*3,s),ot.rotation.set(0,-e+Mt()*.35,0),ot.scale.set(r*(.8+Mt()*.35),r,r*(.8+Mt()*.35)),ot.updateMatrix(),(n%2?Qv:eS).setMatrixAt(n,ot.matrix)}ye.add(Qv,eS);var tS=new Te({color:7754036,roughness:.9,bumpMap:pi,bumpScale:.08}),yp=new mt;yp.position.set(cn.cx,cn.top,cn.cz);ye.add(yp);for(let n=0;n<11;n++){let e=new Fe(new qi(1.66,.18,4),tS);e.position.set(-8.1+n*1.62,0,0),e.rotation.y=(n%3-1)*.008,e.castShadow=e.receiveShadow=!0,yp.add(e)}for(let n of[-1,1])for(let e of[-1,1]){let t=new Fe(new bi(.12,.17,2.45,7),tS);t.position.set(n*8,1.12,e*1.72),t.castShadow=!0,yp.add(t)}var Ep=new mt,Nf=36,Of=-44;Ep.position.set(Nf,Rn(Nf,Of),Of);ye.add(Ep);var nS=new Te({color:9538946,roughness:.91,bumpMap:pi,bumpScale:.13});function Mu(n,e,t,i,s,r,o=0){let a=new Fe(new qi(i,s,r),nS);a.position.set(n,e,t),a.rotation.y=o,a.castShadow=a.receiveShadow=!0,Ep.add(a),xp(Nf+n,Of+t,Math.max(i,r)*.42,s)}Mu(0,2.8,0,7.8,5.6,1.7,.07);Mu(-4.9,4,.2,1.7,8,1.7,.07);Mu(4.9,4,.2,1.7,8,1.7,.07);Mu(0,7.15,.2,11.2,1,1.6,.07);Mu(0,9.35,0,1.3,4.6,1.3);var vu=new Fe(new Tc(3.55,.3,8,26),nS);vu.position.set(0,10.8,0);vu.rotation.x=Math.PI/2.35;vu.rotation.z=.34;vu.castShadow=!0;Ep.add(vu);var Mp=48,vp=-59,KI=Rn(Mp,vp),Su=new mt;Su.position.set(Mp,KI,vp);ye.add(Su);var $I=new Te({color:7696228,roughness:.9,bumpMap:pi,bumpScale:.1}),jI=new Te({color:16767117,emissive:16758861,emissiveIntensity:2.3}),V_=new Fe(new bi(.6,.85,7.5,9),$I);V_.position.y=3.75;V_.castShadow=!0;Su.add(V_);var W_=new Fe(new pn(.55,14,10),jI);W_.position.y=7.8;Su.add(W_);var X_=new Vr(16759130,5.5,18,2);X_.position.y=7.8;Su.add(X_);xp(Mp,vp,1,8);var ne=new mt;ye.add(ne);ne.position.set(5,Le(5,60),60);var Ps=null,Bf=null,Fn={},sf=null,iS="FALLBACK";function QI(){let n=new mt,e=new Te({color:2775929,roughness:.72}),t=new Te({color:14263676,roughness:.78}),i=new Te({color:3156259,roughness:.92}),s=new Fe(new jo(.32,.74,4,8),e);s.position.y=1.18,n.add(s);let r=new Fe(new pn(.28,12,8),t);r.position.y=1.86,n.add(r);for(let o of[-1,1]){let a=new Fe(new jo(.085,.45,3,6),i);a.position.set(.145*o,.52,0),n.add(a)}n.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),ne.add(n),Ps=n,k0.textContent="FALLBACK"}QI();Dv.classList.add("hide");setTimeout(()=>Dv.remove(),320);var eD=new da;eD.load("./assets/Soldier.glb",n=>{Ps&&ne.remove(Ps),Ps=n.scene,Ps.scale.setScalar(1),Ps.rotation.y=Math.PI,Ps.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),ne.add(Ps),Bf=new Is(Ps),Fn={};for(let e of n.animations)Fn[e.name]=Bf.clipAction(e);iS="GLB",k0.textContent="GLB",mf(Fn.Idle?"Idle":Object.keys(Fn)[0],0)},void 0,n=>{console.warn("Local GLB failed; fallback remains active",n),k0.textContent="FALLBACK"});function mf(n,e=.16){if(!Fn[n]||sf===Fn[n])return;let t=Fn[n];t.reset().play(),sf&&sf.crossFadeTo(t,e,!0),sf=t}var io=.08,Bl=.3,Fl=7.8,Sp=!1,X0=0,q0=0,q_=!1,Ff=!1,nl=0,Qr=!0,ro={},Ul=new He,ci=new I;addEventListener("keydown",n=>{ro[n.code]=!0,n.code==="Space"&&(Ff=!0)});addEventListener("keyup",n=>ro[n.code]=!1);je.domElement.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&n.clientX<innerWidth*.36&&n.clientY>innerHeight*.52||n.pointerType==="touch"&&n.clientX>innerWidth*.68&&n.clientY>innerHeight*.54||(Sp=!0,X0=n.clientX,q0=n.clientY,je.domElement.setPointerCapture(n.pointerId))});je.domElement.addEventListener("pointerup",()=>Sp=!1);je.domElement.addEventListener("pointercancel",()=>Sp=!1);je.domElement.addEventListener("pointermove",n=>{if(!Sp)return;let e=n.clientX-X0,t=n.clientY-q0;io-=e*.006,Bl=$e.clamp(Bl+t*.0047,-.05,.9),X0=n.clientX,q0=n.clientY});je.domElement.addEventListener("wheel",n=>Fl=$e.clamp(Fl+n.deltaY*.008,4.8,14),{passive:!0});var Ha=jt("stick"),sS=jt("knob"),Uf=jt("sprint"),Hf=jt("jump"),wa=null;function rS(n){let e=Ha.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width*.34,r=n.clientX-t,o=n.clientY-i,a=Math.hypot(r,o)||1,c=Math.min(1,s/a);r*=c,o*=c,sS.style.transform=`translate(${r}px,${o}px)`,Ul.set(r/s,-o/s)}Ha.addEventListener("pointerdown",n=>{n.preventDefault(),wa=n.pointerId,Ha.setPointerCapture(wa),rS(n)});Ha.addEventListener("pointermove",n=>{n.pointerId===wa&&(n.preventDefault(),rS(n))});function oS(n){(wa===null||n.pointerId===wa)&&(wa=null,Ul.set(0,0),sS.style.transform="translate(0,0)")}Ha.addEventListener("pointerup",oS);Ha.addEventListener("pointercancel",oS);Uf.addEventListener("pointerdown",n=>{n.preventDefault(),q_=!0,Uf.style.transform="scale(.94)"});for(let n of["pointerup","pointercancel","pointerleave"])Uf.addEventListener(n,()=>{q_=!1,Uf.style.transform="scale(1)"});Hf.addEventListener("pointerdown",n=>{n.preventDefault(),Ff=!0,Hf.style.transform="scale(.93)"});for(let n of["pointerup","pointercancel","pointerleave"])Hf.addEventListener(n,()=>Hf.style.transform="scale(1)");var tD=jt("panel");jt("tuneBtn").onclick=()=>tD.classList.toggle("open");var nD=jt("tod"),iD=jt("fog"),sD=jt("wind"),rD=jt("damp");jt("shadowBtn").onclick=n=>{je.shadowMap.enabled=!je.shadowMap.enabled,n.target.textContent="Dynamic shadows: "+(je.shadowMap.enabled?"ON":"OFF")};var oD=new re(6203856),aD=new re(6582157),cD=new re(12572628),lD=new re(12818319),uD=new re(15785404),hD=new re(15769969);function dD(){let n=+nD.value,e=(n-6)/14,t=.1+e*Math.PI*.91,i=Math.max(.04,Math.sin(t)),s=-1.65+e*1.55;Nt.position.set(Math.cos(s)*78,i*90,Math.sin(s)*78),Nt.intensity=.88+i*3.5;let r=Nt.position.clone().normalize();Jn.sunDir.value.copy(r),Df.sunDir.value.copy(r);let o=$e.smoothstep(Math.abs(n-13),3,7);Jn.top.value.copy(oD).lerp(aD,o),Jn.mid.value.copy(cD).lerp(lD,o*.82),Jn.bottom.value.copy(uD).lerp(hD,o),Df.sky.value.copy(Jn.mid.value),Nt.color.setRGB(1,.94-.12*o,.81-.17*o),Ol.intensity=.9+i*1.42,If.intensity=.16+i*.21,ye.fog.density=.0022+ +iD.value*.0082,ye.fog.color.copy(Jn.mid.value).lerp(Jn.bottom.value,.42),je.toneMappingExposure=.84+i*.31}function fD(n){for(let e of P_){let t=n.x-e.x,i=n.z-e.z,s=Math.hypot(t,i),r=e.r+.36;if(s<r&&s>1e-4){let o=r-s;n.x+=t/s*o,n.z+=i/s*o}}}function pD(n,e){let t=e.clone(),i=e.clone().sub(n),s=13;for(let r=1;r<=s;r++){let o=r/s,a=n.clone().addScaledVector(i,o),c=Le(a.x,a.z)+.66;if(a.y<c){t=n.clone().addScaledVector(i,Math.max(.14,(r-1)/s));break}for(let l of P_)if(Math.hypot(a.x-l.x,a.z-l.z)<l.r+.26&&a.y<Le(l.x,l.z)+l.h)return n.clone().addScaledVector(i,Math.max(.14,(r-1)/s))}return t}function mD(n,e){return Math.hypot(n-Mp,e-vp)<10?"OVERLOOK BEACON":Math.hypot(n-Nf,e-Of)<16?"RUINED OBSERVATORY":D_(n,e)?"OLD RIVER BRIDGE":Math.abs(n-Gs(e))<9?"RIVER VALLEY":e<2?"HIGHLAND TRAIL":"FOREST APPROACH"}var xM=new Oc,d0=0,rf=0,of=0,f0=0;function aS(){requestAnimationFrame(aS);let n=Math.min(.033,xM.getDelta()),e=xM.elapsedTime;dD();let t=new I(-Math.sin(io),0,-Math.cos(io)),i=new I(Math.cos(io),0,-Math.sin(io)),s=new I;ro.KeyW&&s.add(t),ro.KeyS&&s.sub(t),ro.KeyD&&s.add(i),ro.KeyA&&s.sub(i),Ul.lengthSq()>.002&&(s.addScaledVector(t,Ul.y),s.addScaledVector(i,Ul.x));let r=(ro.ShiftLeft||q_)&&s.lengthSq()>.01,o=NI(ne.position.x,ne.position.z)&&Le(ne.position.x,ne.position.z)<-1.1,a=(r?8.7:4.8)*(o?.58:1);if(s.lengthSq()>0){s.normalize();let m=s.multiplyScalar(a),y=1-Math.exp(-(Qr?12:5)*n);ci.x=$e.lerp(ci.x,m.x,y),ci.z=$e.lerp(ci.z,m.z,y)}else{let m=Math.exp(-(Qr?10:2.5)*n);ci.x*=m,ci.z*=m}Ff&&Qr&&(nl=7.7,Qr=!1),Ff=!1,nl-=18.6*n,ne.position.x+=ci.x*n,ne.position.z+=ci.z*n,ne.position.x=$e.clamp(ne.position.x,-112,112),ne.position.z=$e.clamp(ne.position.z,-112,112),fD(ne.position);let c=Le(ne.position.x,ne.position.z);ne.position.y+=nl*n,ne.position.y<=c?(ne.position.y=c,nl<0&&(nl=0),Qr=!0):Qr=!1;let l=Math.hypot(ci.x,ci.z);if(l>.18){let y=(Math.atan2(ci.x,ci.z)-ne.rotation.y+Math.PI)%(Math.PI*2)-Math.PI;ne.rotation.y+=y*(1-Math.exp(-14*n))}iS==="GLB"&&Qr&&(l<.22?mf(Fn.Idle?"Idle":Object.keys(Fn)[0]):l<6?mf(Fn.Walk?"Walk":Fn.Run?"Run":Object.keys(Fn)[0]):mf(Fn.Run?"Run":Object.keys(Fn)[0])),Bf&&Bf.update(n*(r?1.08:1));let u=ne.position.clone().add(new I(0,1.42,0)),h=u.clone().add(new I(Math.sin(io)*Math.cos(Bl)*Fl,Math.sin(Bl)*Fl+1,Math.cos(io)*Math.cos(Bl)*Fl));h=pD(u,h);let d=1-Math.pow(1-+rD.value,n*60);Kn.position.lerp(h,d),Kn.lookAt(u),Kn.fov=$e.lerp(Kn.fov,r?60:53,1-Math.exp(-5*n)),Kn.updateProjectionMatrix(),Nt.target.position.copy(ne.position),Nt.target.updateMatrixWorld(),Df.time.value=e;let f=+sD.value;for(let m of[L_,N_,O_,H_,G_,k_])m.userData.shader&&(m.userData.shader.uniforms.uTime.value=e,m.userData.shader.uniforms.uWind.value=f);if(W_.position.y=7.8+Math.sin(e*1.5)*.1,X_.intensity=5+Math.sin(e*2.1)*.6,CI.textContent=mD(ne.position.x,ne.position.z),globalThis.__raaiFrameHooks)for(let m of globalThis.__raaiFrameHooks)m(performance.now(),n);if(je.render(ye,Kn),d0++,rf+=n,f0++,of+=n,rf>.55){let m=Math.round(d0/rf);TI.textContent=m,d0=0,rf=0,RI.textContent=je.info.render.calls,wI.textContent=je.info.render.triangles.toLocaleString()}if(Ua&&of>1.8){let m=f0/of,y=ss;m<53.5?y=Math.max(II,ss-.08):m>58.7&&(y=Math.min(DI,ss+.04)),Math.abs(y-ss)>.001&&(ss=y,je.setPixelRatio(ss),je.setSize(innerWidth,innerHeight,!1),Pv.textContent=ss.toFixed(2)+"\xD7"),of=0,f0=0}}aS();addEventListener("resize",()=>{Kn.aspect=innerWidth/innerHeight,Kn.updateProjectionMatrix(),je.setPixelRatio(ss),je.setSize(innerWidth,innerHeight)});var gD="06A_LIVING_WORLD_FLOCK",yn={count:12,triggerRadius:7,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400},cS=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,zf=ne.position.x+Math.sin(cS)*8,Gf=ne.position.z+Math.cos(cS)*8,_D=Le(zf,Gf)+.18,xD=new pn(.12,7,5),lS=new oi(.26,.1),yD=new Te({color:2634039,roughness:.78,metalness:.03}),uS=new Te({color:6714746,roughness:.82,side:Et}),Au=new ke(xD,yD,yn.count),bu=new ke(lS,uS,yn.count),Tu=new ke(lS,uS,yn.count);Au.castShadow=!0;bu.castShadow=!0;Tu.castShadow=!0;ye.add(Au,bu,Tu);var Y0=[];for(let n=0;n<yn.count;n++){let e=n/yn.count*Math.PI*2+n*37%11*.041,t=1+n*53%7*.18,i=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(n%3-1)*.22;Y0.push({px:i,pz:s,ex:i+Math.cos(r)*(5+n%4*.72),ez:s+Math.sin(r)*(5+n%4*.72),rise:2.8+n%5*.42,phase:n*.83,yaw:r})}var us="CALM",kf=performance.now(),bl=0,Y_=0,il=new Be,sl=new Be,rl=new Be,p0=document.getElementById("worldState"),yM=document.getElementById("worldDistance"),Hl=document.getElementById("worldResult");function ED(n){return 1-Math.pow(1-n,3)}function MD(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function hS(){return Math.hypot(ne.position.x-zf,ne.position.z-Gf)}function ol(n,e){us=n,kf=e,bl=0,p0&&(p0.textContent=n,p0.style.color=n==="CALM"?"#a8f0b5":n==="FLEEING"?"#ffd18a":n==="DISPERSED"?"#ffb095":"#b9d9ff")}function vD(n){yM&&(yM.textContent=n.toFixed(1)+" m"),Hl&&Y_===0&&(Hl.textContent=n<=yn.triggerRadius?"TRIGGERING":"APPROACH")}function SD(n,e,t){let i=zf+n.px,s=Gf+n.pz,r=Le(i,s)+.22,o=zf+n.ex,a=Gf+n.ez,c=_D+n.rise,l=i,u=r,h=s,d=n.yaw,f=0,m=t-kf;if(us==="CALM")u+=Math.sin(t*.0021+n.phase)*.022,d=n.phase*.37+Math.sin(t*7e-4+n.phase)*.18;else if(us==="FLEEING"){let M=Math.min(1,m/yn.fleeMs),T=ED(M);l=$e.lerp(i,o,T),h=$e.lerp(s,a,T),u=$e.lerp(r,c,T)+Math.sin(M*Math.PI)*.75,f=1}else if(us==="DISPERSED"){let M=t*.0014+n.phase;l=o+Math.cos(M)*.45,h=a+Math.sin(M)*.45,u=c+Math.sin(M*1.8)*.18,d=M+Math.PI/2,f=1}else if(us==="RETURNING"){let M=Math.min(1,m/yn.returnMs),T=MD(M);l=$e.lerp(o,i,T),h=$e.lerp(a,s,T),u=$e.lerp(c,r,T)+Math.sin(M*Math.PI)*.92,d=n.yaw+Math.PI,f=1}let y=f?Math.sin(t*.02+n.phase)*.72:Math.sin(t*.006+n.phase)*.08;il.position.set(l,u,h),il.rotation.set(0,d,0),il.scale.set(.88,.58,1.45),il.updateMatrix(),Au.setMatrixAt(e,il.matrix);let g=Math.cos(d),p=-Math.sin(d);sl.position.set(l+g*.13,u+.015,h+p*.13),sl.rotation.set(-Math.PI/2,d,y),sl.scale.set(1,1,1),sl.updateMatrix(),bu.setMatrixAt(e,sl.matrix),rl.position.set(l-g*.13,u+.015,h-p*.13),rl.rotation.set(-Math.PI/2,d,-y),rl.scale.set(1,1,1),rl.updateMatrix(),Tu.setMatrixAt(e,rl.matrix)}function AD(n){let e=hS();vD(e),us==="CALM"&&e<=yn.triggerRadius?(Y_++,ol("FLEEING",n),Hl&&(Hl.textContent="RESPONDED \u2713",Hl.style.color="#ffd18a")):us==="FLEEING"&&n-kf>=yn.fleeMs?ol("DISPERSED",n):us==="DISPERSED"?e>yn.resetRadius?(bl||(bl=n),n-bl>=yn.farHoldMs&&ol("RETURNING",n)):bl=0:us==="RETURNING"&&(e<=yn.triggerRadius?ol("FLEEING",n):n-kf>=yn.returnMs&&ol("CALM",n));for(let t=0;t<Y0.length;t++)SD(Y0[t],t,n);Au.instanceMatrix.needsUpdate=!0,bu.instanceMatrix.needsUpdate=!0,Tu.instanceMatrix.needsUpdate=!0}function dS(n){requestAnimationFrame(dS),AD(n)}requestAnimationFrame(dS);globalThis.__livingWorld06A={marker:gD,get state(){return us},get responses(){return Y_},get distance(){return hS()},triggerRadius:yn.triggerRadius,resetRadius:yn.resetRadius};var bD="06B_WORLD_DISTURBANCE_PROPAGATION",ps={secondaryCount:10,disturbanceSpeed:18,fleeMs:1250,returnMs:1350,farHoldMs:1200},Vf=globalThis.__livingWorld06A;if(!Vf||Vf.marker!=="06A_LIVING_WORLD_FLOCK")throw new Error("06B requires accepted 06A public world-state API");Au.frustumCulled=!1;bu.frustumCulled=!1;Tu.frustumCulled=!1;var Ap=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,fS=ne.position.x,pS=ne.position.z,mS=Math.sin(Ap),gS=Math.cos(Ap),TD=Math.cos(Ap),RD=-Math.sin(Ap),wD=fS+mS*8,CD=pS+gS*8,nu=fS+mS*15.5+TD*4.5,iu=pS+gS*15.5+RD*4.5,ID=Le(nu,iu)+.18,DD=Math.hypot(nu-wD,iu-CD),J0=DD/ps.disturbanceSpeed*1e3,PD=new pn(.12,7,5),_S=new oi(.26,.1),LD=new Te({color:3425613,roughness:.78,metalness:.03}),xS=new Te({color:8823208,roughness:.82,side:Et}),Ru=new ke(PD,LD,ps.secondaryCount),wu=new ke(_S,xS,ps.secondaryCount),Cu=new ke(_S,xS,ps.secondaryCount);Ru.castShadow=!0;wu.castShadow=!0;Cu.castShadow=!0;Ru.frustumCulled=!1;wu.frustumCulled=!1;Cu.frustumCulled=!1;ye.add(Ru,wu,Cu);var Z0=[];for(let n=0;n<ps.secondaryCount;n++){let e=n/ps.secondaryCount*Math.PI*2+n*29%9*.047,t=.85+n*41%6*.19,i=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(n%3-1)*.18+.12;Z0.push({px:i,pz:s,ex:i+Math.cos(r)*(4.7+n%4*.66),ez:s+Math.sin(r)*(4.7+n%4*.66),rise:2.5+n%4*.46,phase:n*.91,yaw:r})}var al=new Be,cl=new Be,ll=new Be,$n="CALM",Wf=performance.now(),yS=0,EM=Vf.state,Tl=null,K0=0,m0=document.getElementById("worldBState"),g0=document.getElementById("worldLinkState"),MM=document.getElementById("worldLinkDelay"),vM=document.getElementById("worldBDistance");function ND(n){return 1-Math.pow(1-n,3)}function OD(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ES(){return Math.hypot(ne.position.x-nu,ne.position.z-iu)}function xa(n,e){$n=n,Wf=e,m0&&(m0.textContent=n,m0.style.color=n==="CALM"?"#a8f0b5":n==="ALERT_DELAY"?"#ffe59a":n==="FLEEING"?"#ffd18a":n==="DISPERSED"?"#ffb095":"#b9d9ff")}function gf(n,e="#a8f0b5"){g0&&(g0.textContent=n,g0.style.color=e)}function BD(n){K0++,Tl={emittedAt:n,arrivalAt:n+J0,id:K0},($n==="CALM"||$n==="RETURNING")&&xa("ALERT_DELAY",n),gf("TRAVELING","#ffe59a"),MM&&(MM.textContent=Math.round(J0)+" ms")}function FD(n,e,t){let i=nu+n.px,s=iu+n.pz,r=Le(i,s)+.22,o=nu+n.ex,a=iu+n.ez,c=ID+n.rise,l=i,u=r,h=s,d=n.yaw,f=0,m=t-Wf;if($n==="CALM"||$n==="ALERT_DELAY")u+=Math.sin(t*.002+n.phase)*.021,d=n.phase*.34+Math.sin(t*72e-5+n.phase)*.16,$n==="ALERT_DELAY"&&(u+=Math.sin(t*.014+n.phase)*.025);else if($n==="FLEEING"){let M=Math.min(1,m/ps.fleeMs),T=ND(M);l=$e.lerp(i,o,T),h=$e.lerp(s,a,T),u=$e.lerp(r,c,T)+Math.sin(M*Math.PI)*.68,f=1}else if($n==="DISPERSED"){let M=t*.00135+n.phase;l=o+Math.cos(M)*.4,h=a+Math.sin(M)*.4,u=c+Math.sin(M*1.75)*.16,d=M+Math.PI/2,f=1}else if($n==="RETURNING"){let M=Math.min(1,m/ps.returnMs),T=OD(M);l=$e.lerp(o,i,T),h=$e.lerp(a,s,T),u=$e.lerp(c,r,T)+Math.sin(M*Math.PI)*.78,d=n.yaw+Math.PI,f=1}let y=f?Math.sin(t*.0205+n.phase)*.72:Math.sin(t*.006+n.phase)*.08;al.position.set(l,u,h),al.rotation.set(0,d,0),al.scale.set(.88,.58,1.45),al.updateMatrix(),Ru.setMatrixAt(e,al.matrix);let g=Math.cos(d),p=-Math.sin(d);cl.position.set(l+g*.13,u+.015,h+p*.13),cl.rotation.set(-Math.PI/2,d,y),cl.scale.set(1,1,1),cl.updateMatrix(),wu.setMatrixAt(e,cl.matrix),ll.position.set(l-g*.13,u+.015,h-p*.13),ll.rotation.set(-Math.PI/2,d,-y),ll.scale.set(1,1,1),ll.updateMatrix(),Cu.setMatrixAt(e,ll.matrix)}function UD(n){let e=Vf.state,t=ES();vM&&(vM.textContent=t.toFixed(1)+" m"),e==="FLEEING"&&EM!=="FLEEING"&&BD(n),EM=e,Tl&&n>=Tl.arrivalAt&&(Tl=null,yS++,xa("FLEEING",n),gf("ARRIVED \u2713","#ffd18a")),$n==="FLEEING"&&n-Wf>=ps.fleeMs?xa("DISPERSED",n):$n==="DISPERSED"&&(e==="RETURNING"||e==="CALM")?(xa("RETURNING",n),gf("RESETTING","#b9d9ff")):$n==="RETURNING"&&(Tl?xa("ALERT_DELAY",n):n-Wf>=ps.returnMs&&(xa("CALM",n),gf("IDLE")));for(let i=0;i<Z0.length;i++)FD(Z0[i],i,n);Ru.instanceMatrix.needsUpdate=!0,wu.instanceMatrix.needsUpdate=!0,Cu.instanceMatrix.needsUpdate=!0}function MS(n){requestAnimationFrame(MS),UD(n)}requestAnimationFrame(MS);globalThis.__livingWorld06B={marker:bD,get secondaryState(){return $n},get secondaryResponses(){return yS},get disturbanceEvents(){return K0},get disturbanceTravelMs(){return J0},get playerDistanceToSecondary(){return ES()},directPlayerTrigger:!1,source:"06A primary flock state transition"};var HD="06C_LOCAL_DISTURBANCE_MEMORY",Ar={reedCount:28,disturbedMs:2300,settlingMs:2800,directPlayerTrigger:!1},Xf=globalThis.__livingWorld06B;if(!Xf||Xf.marker!=="06B_WORLD_DISTURBANCE_PROPAGATION")throw new Error("06C requires frozen accepted 06B public world-state API");var bp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,vS=ne.position.x,SS=ne.position.z,AS=Math.sin(bp),bS=Math.cos(bp),TS=Math.cos(bp),RS=-Math.sin(bp),zD=vS+AS*15.5+TS*4.5,GD=SS+bS*15.5+RS*4.5,SM=vS+AS*15.7+TS*6.2,AM=SS+bS*15.7+RS*6.2,wS=new oi(.18,1.55,1,3);wS.translate(0,.775,0);var kD=new Te({color:9411157,roughness:.96,metalness:0,side:Et}),za=new ke(wS,kD,Ar.reedCount);za.castShadow=!0;za.receiveShadow=!0;za.frustumCulled=!1;ye.add(za);var $0=[];for(let n=0;n<Ar.reedCount;n++){let e=n*2.399963229728653,t=.35+n%7*.115,i=Math.cos(e)*t,s=Math.sin(e)*t*.72,r=.76+n*17%9*.035,o=n*.83%Math.PI;$0.push({px:i,pz:s,scaleY:r,yaw:o,phase:n*.71})}var Ga="CALM",qf=performance.now(),CS=0,bM=Xf.secondaryState,su=0,ul=new Be,_0=document.getElementById("worldMemoryState"),x0=document.getElementById("worldMemoryAge"),zl=document.getElementById("worldMemoryResult");function j0(n,e){Ga=n,qf=e,_0&&(_0.textContent=n,_0.style.color=n==="CALM"?"#a8f0b5":n==="DISTURBED"?"#ffd18a":"#b9d9ff")}function VD(n){CS++,su=n,j0("DISTURBED",n),zl&&(zl.textContent="MEMORY ACTIVE \u2713",zl.style.color="#ffd18a")}function WD(n,e){let t=n-qf;if(Ga==="DISTURBED"){let s=.34-.055*Math.min(1,t/Ar.disturbedMs),r=Math.sin(n*.012+e)*.065;return s+r}return Ga==="SETTLING"?(1-Math.min(1,t/Ar.settlingMs))*(.27+.075*Math.sin(n*.01+e)):.018*Math.sin(n*.0018+e)}function XD(n){let e=SM-zD,t=AM-GD,i=Math.max(1e-4,Math.hypot(e,t)),s=e/i,r=t/i;for(let o=0;o<$0.length;o++){let a=$0[o],c=SM+a.px,l=AM+a.pz,u=Le(c,l)+.035,h=WD(n,a.phase),d=.82+o*13%7*.045,f=h*d;ul.position.set(c,u,l),ul.rotation.set(r*f,a.yaw,-s*f),ul.scale.set(.8,a.scaleY,1),ul.updateMatrix(),za.setMatrixAt(o,ul.matrix)}za.instanceMatrix.needsUpdate=!0}function qD(n){let e=Xf.secondaryState;e==="FLEEING"&&bM!=="FLEEING"&&VD(n),bM=e,Ga==="DISTURBED"&&n-qf>=Ar.disturbedMs?j0("SETTLING",n):Ga==="SETTLING"&&n-qf>=Ar.settlingMs&&(j0("CALM",n),zl&&(zl.textContent="SETTLED")),x0&&(su?x0.textContent=((n-su)/1e3).toFixed(1)+" s":x0.textContent="\u2014"),XD(n)}function IS(n){requestAnimationFrame(IS),qD(n)}requestAnimationFrame(IS);globalThis.__livingWorld06C={marker:HD,get state(){return Ga},get events(){return CS},get ageMs(){return su?performance.now()-su:0},disturbedMs:Ar.disturbedMs,settlingMs:Ar.settlingMs,directPlayerTrigger:!1,source:"accepted 06B Flock B transition to FLEEING"};var YD="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR",Bs={arrivalDelayMs:1800,avoidTravelMs:2450,calmHoldMs:550,directReturnMs:2500,detourOffsetM:2.8,directPlayerTrigger:!1},Ca=globalThis.__livingWorld06C;if(!Ca||Ca.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06D requires frozen accepted 06C public world-memory API");var Tp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,JD=ne.position.x,ZD=ne.position.z,DS=Math.sin(Tp),PS=Math.cos(Tp),J_=Math.cos(Tp),Z_=-Math.sin(Tp),K_=JD+DS*15.7+J_*6.2,$_=ZD+PS*15.7+Z_*6.2,Rl=K_-J_*3.4,wl=$_-Z_*3.4,y0=K_+J_*3.4,E0=$_+Z_*3.4,KD=K_+DS*Bs.detourOffsetM,$D=$_+PS*Bs.detourOffsetM,Gl=new mt;ye.add(Gl);var jD=new Wn(.5,1),QD=new Ti(.115,.55,7),eP=new Te({color:9069895,roughness:.9,metalness:0}),tP=new Te({color:7754301,roughness:.92,metalness:0}),ks=new ke(jD,eP,5),Ya=new ke(QD,tP,2);ks.castShadow=!0;Ya.castShadow=!0;ks.frustumCulled=!1;Ya.frustumCulled=!1;Gl.add(ks,Ya);var hl=new Be;function xo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){hl.position.set(t,i,s),hl.scale.set(r,o,a),hl.rotation.set(c,l,u),hl.updateMatrix(),n.setMatrixAt(e,hl.matrix)}xo(ks,0,0,.42,0,.72,.55,1.08);xo(ks,1,0,.62,.5,.48,.48,.48);xo(ks,2,-.33,.25,-.2,.32,.34,.38);xo(ks,3,.33,.25,-.2,.32,.34,.38);xo(ks,4,0,.48,-.6,.25,.25,.25);xo(Ya,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);xo(Ya,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);ks.instanceMatrix.needsUpdate=!0;Ya.instanceMatrix.needsUpdate=!0;var yr="WAITING",kl=performance.now(),LS=0,TM=Ca.events,NS="NONE",dl=0,rs=Rl,os=wl,RM=rs,wM=os,M0=document.getElementById("worldBehaviorState"),v0=document.getElementById("worldRouteChoice"),xr=document.getElementById("worldBehaviorResult");function ya(n,e){yr=n,kl=e,M0&&(M0.textContent=n,M0.style.color=n==="WAITING"?"#d6d6d6":n==="AVOIDING"?"#ffd18a":n==="HOLDING"?"#ffe59a":n==="DIRECT_RETURN"?"#9fe0ff":"#a8f0b5")}function Ea(n,e,t){NS=n,v0&&(v0.textContent=e,v0.style.color=t)}function CM(n,e,t,i){let s=1-i;return s*s*n+2*s*i*e+i*i*t}function IM(n){return n*n*(3-2*n)}function nP(n){LS++,ya("AVOIDING",n),Ea("MEMORY_DETOUR","DETOUR: MEMORY","#ffd18a"),xr&&(xr.textContent="MEMORY CHANGED ROUTE \u2713",xr.style.color="#ffd18a")}function iP(n){let e=rs-RM,t=os-wM,i=Math.hypot(e,t)>1e-5,s=Gl.rotation.y;i&&(s=Math.atan2(e,t));let r=yr==="AVOIDING"||yr==="DIRECT_RETURN"?Math.max(0,Math.sin((n-kl)*.011))*.12:0,o=Le(rs,os)+.03+r;Gl.position.set(rs,o,os),Gl.rotation.y=s,RM=rs,wM=os}function sP(n){let e=Ca.events;if(e>TM&&(TM=e,rs=Rl,os=wl,ya("ARRIVAL_DELAY",n),Ea("PENDING","READING WORLD\u2026","#ffe59a"),xr&&(xr.textContent="LATE ACTOR INBOUND")),yr==="ARRIVAL_DELAY"&&n-kl>=Bs.arrivalDelayMs)Ca.state!=="CALM"?nP(n):(ya("DIRECT_RETURN",n),Ea("DIRECT","DIRECT: WORLD CLEAR","#9fe0ff"));else if(yr==="AVOIDING"){let t=Math.min(1,(n-kl)/Bs.avoidTravelMs),i=IM(t);rs=CM(Rl,KD,y0,i),os=CM(wl,$D,E0,i),t>=1&&(rs=y0,os=E0,ya("HOLDING",n),dl=0,Ea("WAIT_FOR_CLEAR","WAITING FOR CLEAR","#ffe59a"))}else if(yr==="HOLDING")Ca.state==="CALM"?(dl||(dl=n+Bs.calmHoldMs),n>=dl&&(ya("DIRECT_RETURN",n),Ea("DIRECT","DIRECT: MEMORY CLEARED","#9fe0ff"))):dl=0;else if(yr==="DIRECT_RETURN"){let t=Math.min(1,(n-kl)/Bs.directReturnMs),i=IM(t);rs=$e.lerp(y0,Rl,i),os=$e.lerp(E0,wl,i),t>=1&&(rs=Rl,os=wl,ya("COMPLETE",n),Ea("PROVED","DETOUR THEN DIRECT \u2713","#a8f0b5"),xr&&(xr.textContent="WORLD STATE AFFECTED BEHAVIOR \u2713",xr.style.color="#a8f0b5"))}iP(n)}function OS(n){requestAnimationFrame(OS),sP(n)}requestAnimationFrame(OS);globalThis.__livingWorld06D={marker:YD,get state(){return yr},get routeChoice(){return NS},get events(){return LS},directPlayerTrigger:!1,reads:"06C persistent world-memory state",arrivalDelayMs:Bs.arrivalDelayMs,avoidTravelMs:Bs.avoidTravelMs,directReturnMs:Bs.directReturnMs};var rP="06E_SPATIALLY_SCOPED_MEMORY",uo={arrivalDelayMs:1800,travelMs:2450,memoryRadiusM:1.8,laneOffsetM:3.35,directPlayerTrigger:!1},ru=globalThis.__livingWorld06C,DM=globalThis.__livingWorld06D;if(!ru||ru.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06E requires frozen accepted 06C memory API");if(!DM||DM.marker!=="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR")throw new Error("06E requires frozen accepted 06D behavior API");var Rp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,oP=ne.position.x,aP=ne.position.z,j_=Math.sin(Rp),Q_=Math.cos(Rp),ex=Math.cos(Rp),tx=-Math.sin(Rp),BS=oP+j_*15.7+ex*6.2,FS=aP+Q_*15.7+tx*6.2,US=BS-j_*uo.laneOffsetM,HS=FS-Q_*uo.laneOffsetM,Ma=US-ex*3.4,va=HS-tx*3.4,Cl=US+ex*3.4,Il=HS+tx*3.4;function cP(n,e,t,i,s,r){let o=s-t,a=r-i,c=o*o+a*a,l=c>1e-9?$e.clamp(((n-t)*o+(e-i)*a)/c,0,1):0,u=t+o*l,h=i+a*l;return Math.hypot(n-u,e-h)}var zS=cP(BS,FS,Ma,va,Cl,Il),Yf=new mt;ye.add(Yf);var lP=new Wn(.5,1),uP=new Ti(.115,.55,7),hP=new Te({color:8160133,roughness:.91,metalness:0}),dP=new Te({color:6712688,roughness:.93,metalness:0}),Vs=new ke(lP,hP,5),Ja=new ke(uP,dP,2);Vs.castShadow=!0;Ja.castShadow=!0;Vs.frustumCulled=!1;Ja.frustumCulled=!1;Yf.add(Vs,Ja);var fl=new Be;function yo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){fl.position.set(t,i,s),fl.scale.set(r,o,a),fl.rotation.set(c,l,u),fl.updateMatrix(),n.setMatrixAt(e,fl.matrix)}yo(Vs,0,0,.42,0,.72,.55,1.08);yo(Vs,1,0,.62,.5,.48,.48,.48);yo(Vs,2,-.33,.25,-.2,.32,.34,.38);yo(Vs,3,.33,.25,-.2,.32,.34,.38);yo(Vs,4,0,.48,-.6,.25,.25,.25);yo(Ja,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);yo(Ja,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Vs.instanceMatrix.needsUpdate=!0;Ja.instanceMatrix.needsUpdate=!0;var po="WAITING",Vl=performance.now(),GS=0,PM=ru.events,Dl=!1,kS="NONE",as=Ma,cs=va,Q0=as,e_=cs,S0=document.getElementById("worldSpatialState"),Wl=document.getElementById("worldSpatialOverlap"),A0=document.getElementById("worldSpatialChoice"),_r=document.getElementById("worldSpatialResult");function pl(n,e){po=n,Vl=e,S0&&(S0.textContent=n,S0.style.color=n==="WAITING"?"#d6d6d6":n==="ARRIVAL_DELAY"?"#ffe59a":n==="DIRECT"?"#9fe0ff":n==="AVOIDING"?"#ffd18a":"#a8f0b5")}function af(n,e,t){kS=n,A0&&(A0.textContent=e,A0.style.color=t)}function LM(n){return n*n*(3-2*n)}function fP(n){let e=as-Q0,t=cs-e_;Math.hypot(e,t)>1e-5&&(Yf.rotation.y=Math.atan2(e,t));let s=po==="DIRECT"||po==="AVOIDING"?Math.max(0,Math.sin((n-Vl)*.011))*.11:0;Yf.position.set(as,Le(as,cs)+.03+s,cs),Q0=as,e_=cs}function pP(n){let e=ru.events;if(e>PM&&(PM=e,GS++,as=Ma,cs=va,Q0=as,e_=cs,pl("ARRIVAL_DELAY",n),af("PENDING","SAME MEMORY \xB7 CHECKING SPACE","#ffe59a"),_r&&(_r.textContent="CONTROL ACTOR INBOUND")),po==="ARRIVAL_DELAY"&&n-Vl>=uo.arrivalDelayMs){let t=ru.state!=="CALM";Dl=zS<=uo.memoryRadiusM,Wl&&(Wl.textContent=Dl?"YES":"NO",Wl.style.color=Dl?"#ffd18a":"#a8f0b5"),t&&Dl?(pl("AVOIDING",n),af("DETOUR","DETOUR: LOCAL MEMORY","#ffd18a")):(pl("DIRECT",n),af("DIRECT","DIRECT: OUTSIDE MEMORY","#9fe0ff"),_r&&(_r.textContent=t?"MEMORY ACTIVE \xB7 ACTOR UNAFFECTED \u2713":"WORLD CLEAR \xB7 DIRECT",_r.style.color="#a8f0b5"))}else if(po==="DIRECT"){let t=Math.min(1,(n-Vl)/uo.travelMs),i=LM(t);as=$e.lerp(Ma,Cl,i),cs=$e.lerp(va,Il,i),t>=1&&(as=Cl,cs=Il,pl("COMPLETE",n),af("PROVED","LOCAL SCOPE \u2713","#a8f0b5"),_r&&(_r.textContent="SAME MEMORY \xB7 DIFFERENT LOCATION \xB7 NO EFFECT \u2713",_r.style.color="#a8f0b5"))}else if(po==="AVOIDING"){let t=Math.min(1,(n-Vl)/uo.travelMs),i=LM(t),s=(Ma+Cl)*.5-j_*2,r=(va+Il)*.5-Q_*2,o=1-i;as=o*o*Ma+2*o*i*s+i*i*Cl,cs=o*o*va+2*o*i*r+i*i*Il,t>=1&&pl("COMPLETE",n)}fP(n)}function VS(n){requestAnimationFrame(VS),pP(n)}requestAnimationFrame(VS);Wl&&(Wl.textContent="PENDING");globalThis.__livingWorld06E={marker:rP,get state(){return po},get overlap(){return Dl},get choice(){return kS},get events(){return GS},directPlayerTrigger:!1,memoryRadiusM:uo.memoryRadiusM,controlPathDistanceToMemoryM:zS,expectedOverlap:!1,reads:"same 06C memory state with spatial path query"};var mP="06F_STIMULUS_PRIORITY_ARBITRATION",Un={arrivalDelayMs:1800,foodBecomesValidAfterMs:120,arbitrationDelayMs:180,hazardPriority:100,foodPriority:40,escapeTravelMs:2550,escapeOffsetM:3.2,directPlayerTrigger:!1},ou=globalThis.__livingWorld06C,NM=globalThis.__livingWorld06E;if(!ou||ou.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06F requires frozen accepted 06C memory API");if(!NM||NM.marker!=="06E_SPATIALLY_SCOPED_MEMORY")throw new Error("06F requires frozen accepted 06E spatial-memory API");var wp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,gP=ne.position.x,_P=ne.position.z,nx=Math.sin(wp),ix=Math.cos(wp),Cp=Math.cos(wp),Ip=-Math.sin(wp),WS=gP+nx*15.7+Cp*6.2,XS=_P+ix*15.7+Ip*6.2,Dp=WS-Cp*3.9-nx*.65,Pp=XS-Ip*3.9-ix*.65,xP=WS+Cp*3.7,yP=XS+Ip*3.7,OM=Dp-nx*Un.escapeOffsetM-Cp*.8,BM=Pp-ix*Un.escapeOffsetM-Ip*.8,Jf=new mt;ye.add(Jf);var EP=new Wn(.5,1),MP=new Ti(.115,.55,7),vP=new Te({color:12155959,roughness:.9,metalness:0}),SP=new Te({color:10183727,roughness:.92,metalness:0}),Ws=new ke(EP,vP,5),Za=new ke(MP,SP,2);Ws.castShadow=!0;Za.castShadow=!0;Ws.frustumCulled=!1;Za.frustumCulled=!1;Jf.add(Ws,Za);var ml=new Be;function Eo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){ml.position.set(t,i,s),ml.scale.set(r,o,a),ml.rotation.set(c,l,u),ml.updateMatrix(),n.setMatrixAt(e,ml.matrix)}Eo(Ws,0,0,.42,0,.72,.55,1.08);Eo(Ws,1,0,.62,.5,.48,.48,.48);Eo(Ws,2,-.33,.25,-.2,.32,.34,.38);Eo(Ws,3,.33,.25,-.2,.32,.34,.38);Eo(Ws,4,0,.48,-.6,.25,.25,.25);Eo(Za,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Eo(Za,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Ws.instanceMatrix.needsUpdate=!0;Za.instanceMatrix.needsUpdate=!0;var AP=new pn(.13,7,5),bP=new Te({color:7249222,roughness:.86,metalness:0}),Lp=new ke(AP,bP,7);Lp.frustumCulled=!1;var cf=new Be;for(let n=0;n<7;n++){let e=n*2.399963229728653,t=.12+n%3*.09,i=xP+Math.cos(e)*t,s=yP+Math.sin(e)*t;cf.position.set(i,Le(i,s)+.12+n%2*.04,s),cf.scale.set(1,1,1),cf.updateMatrix(),Lp.setMatrixAt(n,cf.matrix)}Lp.instanceMatrix.needsUpdate=!0;ye.add(Lp);var Ia="WAITING",Zf=performance.now(),FM=ou.events,qS=0,YS="NONE",Kf="NONE",$f=!1,jf=!1,t_=0,n_=0,Fs=Dp,Us=Pp,i_=Fs,s_=Us,b0=document.getElementById("worldArbState"),Qf=document.getElementById("worldArbCandidates"),oo=document.getElementById("worldArbLast"),T0=document.getElementById("worldArbWinner"),Ui=document.getElementById("worldArbResult");function Da(n,e){Ia=n,Zf=e,b0&&(b0.textContent=n,b0.style.color=n==="WAITING"?"#d6d6d6":n==="ARRIVAL_DELAY"||n==="ARBITRATING"?"#ffe59a":n==="ESCAPING"?"#ffd18a":"#a8f0b5")}function Xl(n,e,t){YS=n,T0&&(T0.textContent=e,T0.style.color=t)}function TP(n){return n*n*(3-2*n)}function RP(n){let e=Fs-i_,t=Us-s_;Math.hypot(e,t)>1e-5&&(Jf.rotation.y=Math.atan2(e,t));let s=Ia==="ESCAPING"?Math.max(0,Math.sin((n-Zf)*.012))*.115:0;Jf.position.set(Fs,Le(Fs,Us)+.03+s,Us),i_=Fs,s_=Us}function wP(n){qS++,Fs=Dp,Us=Pp,i_=Fs,s_=Us,$f=!1,jf=!1,Kf="NONE",t_=0,n_=0,Da("ARRIVAL_DELAY",n),Xl("PENDING","PENDING","#ffe59a"),Qf&&(Qf.textContent="WAITING"),oo&&(oo.textContent="NONE"),Ui&&(Ui.textContent="ACTOR INBOUND")}function CP(n){let e=[];$f&&e.push({id:"HAZARD",priority:Un.hazardPriority}),jf&&e.push({id:"FOOD",priority:Un.foodPriority}),e.sort((i,s)=>s.priority-i.priority||i.id.localeCompare(s.id));let t=e[0]?.id||"NONE";Qf&&(Qf.textContent=`HAZARD ${Un.hazardPriority} \xB7 FOOD ${Un.foodPriority}`),t==="HAZARD"?(Xl("HAZARD","HAZARD 100","#ffd18a"),Da("ESCAPING",n),Ui&&(Ui.textContent="NEWER FOOD LOST TO HIGHER PRIORITY \u2713",Ui.style.color="#a8f0b5")):t==="FOOD"?(Xl("FOOD","FOOD 40","#9fe0ff"),Da("COMPLETE",n),Ui&&(Ui.textContent="FOOD WON",Ui.style.color="#9fe0ff")):(Xl("NONE","NONE","#d6d6d6"),Da("COMPLETE",n))}function IP(n){let e=ou.events;if(e>FM&&(FM=e,wP(n)),Ia==="ARRIVAL_DELAY"&&n-Zf>=Un.arrivalDelayMs)$f=ou.state!=="CALM",$f&&(Kf="HAZARD",oo&&(oo.textContent="HAZARD")),t_=n+Un.foodBecomesValidAfterMs,n_=n+Un.arbitrationDelayMs,Da("ARBITRATING",n);else if(Ia==="ARBITRATING")!jf&&n>=t_&&(jf=!0,Kf="FOOD",oo&&(oo.textContent="FOOD (NEWER)",oo.style.color="#9fe0ff")),n>=n_&&CP(n);else if(Ia==="ESCAPING"){let t=Math.min(1,(n-Zf)/Un.escapeTravelMs),i=TP(t);Fs=$e.lerp(Dp,OM,i),Us=$e.lerp(Pp,BM,i),t>=1&&(Fs=OM,Us=BM,Da("COMPLETE",n),Xl("PROVED","HAZARD WON \u2713","#a8f0b5"),Ui&&(Ui.textContent="PRIORITY > RECENCY \u2713",Ui.style.color="#a8f0b5"))}RP(n)}function JS(n){requestAnimationFrame(JS),IP(n)}requestAnimationFrame(JS);globalThis.__livingWorld06F={marker:mP,get state(){return Ia},get winner(){return YS},get lastStimulus(){return Kf},get events(){return qS},priorities:{hazard:Un.hazardPriority,food:Un.foodPriority},foodBecomesValidAfterMs:Un.foodBecomesValidAfterMs,arbitrationDelayMs:Un.arbitrationDelayMs,directPlayerTrigger:!1,rule:"highest priority wins; event recency is not decision authority"};var DP="06G_INTERRUPTED_GOAL_RECOVERY",ao={preGoalTravelMs:6200,preGoalCap:.34,evadeTravelMs:1450,recoverHoldMs:450,resumeTravelMs:3e3,evadeOffsetM:3,directPlayerTrigger:!1},au=globalThis.__livingWorld06C,UM=globalThis.__livingWorld06F;if(!au||au.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06G requires frozen accepted 06C memory API");if(!UM||UM.marker!=="06F_STIMULUS_PRIORITY_ARBITRATION")throw new Error("06G requires frozen accepted 06F arbitration API");var Np=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,PP=ne.position.x,LP=ne.position.z,Op=Math.sin(Np),Bp=Math.cos(Np),Fp=Math.cos(Np),Up=-Math.sin(Np),sx=PP+Op*15.7+Fp*6.2,rx=LP+Bp*15.7+Up*6.2,ox=sx-Fp*4.4+Op*.9,ax=rx-Up*4.4+Bp*.9,_f=sx+Fp*4+Op*.8,xf=rx+Up*4+Bp*.8,r_=sx-Op*ao.evadeOffsetM-Fp*1.2,o_=rx-Bp*ao.evadeOffsetM-Up*1.2,ep=new mt;ye.add(ep);var NP=new Wn(.5,1),OP=new Ti(.115,.55,7),BP=new Te({color:4165512,roughness:.9,metalness:0}),FP=new Te({color:3438191,roughness:.92,metalness:0}),Xs=new ke(NP,BP,5),Ka=new ke(OP,FP,2);Xs.castShadow=!0;Ka.castShadow=!0;Xs.frustumCulled=!1;Ka.frustumCulled=!1;ep.add(Xs,Ka);var gl=new Be;function Mo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){gl.position.set(t,i,s),gl.scale.set(r,o,a),gl.rotation.set(c,l,u),gl.updateMatrix(),n.setMatrixAt(e,gl.matrix)}Mo(Xs,0,0,.42,0,.72,.55,1.08);Mo(Xs,1,0,.62,.5,.48,.48,.48);Mo(Xs,2,-.33,.25,-.2,.32,.34,.38);Mo(Xs,3,.33,.25,-.2,.32,.34,.38);Mo(Xs,4,0,.48,-.6,.25,.25,.25);Mo(Ka,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Mo(Ka,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Xs.instanceMatrix.needsUpdate=!0;Ka.instanceMatrix.needsUpdate=!0;var UP=new pn(.13,7,5),HP=new Te({color:8372052,roughness:.86,metalness:0}),Hp=new ke(UP,HP,7);Hp.frustumCulled=!1;var lf=new Be;for(let n=0;n<7;n++){let e=n*2.399963229728653,t=.12+n%3*.09,i=_f+Math.cos(e)*t,s=xf+Math.sin(e)*t;lf.position.set(i,Le(i,s)+.12+n%2*.04,s),lf.scale.set(1,1,1),lf.updateMatrix(),Hp.setMatrixAt(n,lf.matrix)}Hp.instanceMatrix.needsUpdate=!0;ye.add(Hp);var ls="SEEKING_FOOD",ql=performance.now(),HM=au.events,ZS=0,KS="FOOD",cx="NONE",$S="NONE",ui=ox,hi=ax,zM=ui,GM=hi,jS=ox,QS=ax,kM=r_,VM=o_,uf=0,R0=document.getElementById("worldRecoveryState"),WM=document.getElementById("worldRecoveryGoal"),Pa=document.getElementById("worldRecoverySuspended"),La=document.getElementById("worldRecoveryInterrupt"),li=document.getElementById("worldRecoveryResult");function yf(n,e){ls=n,ql=e,R0&&(R0.textContent=n,R0.style.color=n==="SEEKING_FOOD"?"#9fe0ff":n==="EVADING"?"#ffd18a":n==="WAIT_CLEAR"?"#ffe59a":n==="RESUMING_FOOD"?"#9fe0ff":"#a8f0b5")}function Ef(n){KS=n,WM&&(WM.textContent=n)}function w0(n){return n*n*(3-2*n)}function zP(n){let e=ui-zM,t=hi-GM;Math.hypot(e,t)>1e-5&&(ep.rotation.y=Math.atan2(e,t));let s=ls==="SEEKING_FOOD"||ls==="EVADING"||ls==="RESUMING_FOOD"?Math.max(0,Math.sin((n-ql)*.011))*.11:0;ep.position.set(ui,Le(ui,hi)+.03+s,hi),zM=ui,GM=hi}function GP(n){ZS++,jS=ui,QS=hi,cx="FOOD",$S="HAZARD",Ef("HAZARD"),yf("EVADING",n),Pa&&(Pa.textContent="FOOD",Pa.style.color="#ffe59a"),La&&(La.textContent="HAZARD",La.style.color="#ffd18a"),li&&(li.textContent="FOOD GOAL SUSPENDED",li.style.color="#ffd18a")}function kP(n){let e=au.events;if(e>HM&&(HM=e,ls==="SEEKING_FOOD"&&GP(n)),ls==="SEEKING_FOOD"){let t=Math.min(1,(n-ql)/ao.preGoalTravelMs),i=Math.min(ao.preGoalCap,w0(t));ui=$e.lerp(ox,_f,i),hi=$e.lerp(ax,xf,i)}else if(ls==="EVADING"){let t=Math.min(1,(n-ql)/ao.evadeTravelMs),i=w0(t);ui=$e.lerp(jS,r_,i),hi=$e.lerp(QS,o_,i),t>=1&&(ui=r_,hi=o_,yf("WAIT_CLEAR",n),Ef("WAITING"),li&&(li.textContent="WAITING FOR HAZARD TO CLEAR",li.style.color="#ffe59a"))}else if(ls==="WAIT_CLEAR")au.state==="CALM"?(uf||(uf=n),n-uf>=ao.recoverHoldMs&&(kM=ui,VM=hi,cx="NONE",Ef("FOOD"),yf("RESUMING_FOOD",n),Pa&&(Pa.textContent="NONE",Pa.style.color="#a8f0b5"),li&&(li.textContent="RESUMING ORIGINAL FOOD GOAL",li.style.color="#9fe0ff"))):uf=0;else if(ls==="RESUMING_FOOD"){let t=Math.min(1,(n-ql)/ao.resumeTravelMs),i=w0(t);ui=$e.lerp(kM,_f,i),hi=$e.lerp(VM,xf,i),t>=1&&(ui=_f,hi=xf,yf("COMPLETE",n),Ef("FOOD REACHED"),La&&(La.textContent="RESOLVED",La.style.color="#a8f0b5"),li&&(li.textContent="INTERRUPT \u2192 RECOVER \u2192 RESUME \u2713",li.style.color="#a8f0b5"))}zP(n)}function eA(n){requestAnimationFrame(eA),kP(n)}requestAnimationFrame(eA);globalThis.__livingWorld06G={marker:DP,get state(){return ls},get goal(){return KS},get suspendedGoal(){return cx},get interrupt(){return $S},get events(){return ZS},directPlayerTrigger:!1,originalGoal:"FOOD",interruption:"HAZARD",rule:"suspend original goal, resolve higher-priority interruption, resume original goal when valid"};var VP="06H_STREAMED_PERSISTENCE",tp=globalThis.__livingWorld06C;if(!tp||tp.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06H requires frozen accepted 06C memory API");var di={...i0,cellId:"06H_CELL_A",directPlayerBehaviorTrigger:!1},zp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,WP=ne.position.x,XP=ne.position.z,lx=Math.sin(zp),ux=Math.cos(zp),hx=Math.cos(zp),dx=-Math.sin(zp),Gp=WP+lx*10.5+hx*6,kp=XP+ux*10.5+dx*6,qP={x:Gp-hx*2.2-lx*.4,z:kp-dx*2.2-ux*.4},YP={x:Gp+hx*3.6+lx*.7,z:kp+dx*3.6+ux*.7},fx=new fa,Yl=1/0,a_=!1,Mf=!1,co="READY",JP=document.getElementById("worldStreamLifecycle"),ZP=document.getElementById("worldStreamDistance"),KP=document.getElementById("worldStreamSnapshot"),$P=document.getElementById("worldStreamOffscreen"),jP=document.getElementById("worldStreamMemory"),QP=document.getElementById("worldStreamGoal"),eL=document.getElementById("worldStreamProgress"),tL=document.getElementById("worldStreamDuplicates"),nL=document.getElementById("worldStreamResult");function Ds(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function tA(n){return n==="DISTURBED"?14256696:n==="SETTLING"?12758370:7901789}function iL(n){if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()}function sL(n){let e=new mt;e.userData.streamCellId=di.cellId;let t=new oi(.18,1.42,1,2);t.translate(0,.71,0);let i=new Te({color:tA(n.memory.state),roughness:.96,metalness:0,side:Et}),s=new ke(t,i,14);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1;let r=new Be;for(let f=0;f<14;f++){let m=f*2.399963229728653,y=.55+f%5*.19,g=Gp+Math.cos(m)*y,p=kp+Math.sin(m)*y;r.position.set(g,Le(g,p)+.03,p),r.rotation.set(0,m*.37,0),r.scale.set(.82,.78+f%4*.1,1),r.updateMatrix(),s.setMatrixAt(f,r.matrix)}s.instanceMatrix.needsUpdate=!0;let o=new Wn(.48,1),a=new Te({color:4165512,roughness:.9,metalness:0}),c=new Fe(o,a);c.castShadow=!0;let l=new pn(.2,10,8),u=new Te({color:14201690,emissive:7097624,emissiveIntensity:.28,roughness:.72}),h=new Fe(l,u);h.castShadow=!0,e.add(s,c,h),ye.add(e);let d={root:e,reeds:s,reedGeo:t,reedMat:i,actor:c,actorGeo:o,actorMat:a,food:h,foodGeo:l,foodMat:u};return nA(d,n,Date.now()),d}function nA(n,e,t){if(!n)return;let i=e.actor.position;n.actor.position.set(i.x,Le(i.x,i.z)+.48,i.z);let s=e.actor.destination;n.food.position.set(s.x,Le(s.x,s.z)+.23,s.z);let r=tA(e.memory.state);n.reedMat.color.setHex(r);let o=e.memory.state==="DISTURBED"?1+Math.sin(t*.012)*.08:1;n.reeds.scale.setScalar(o)}function rL(n){n&&(ye.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&iL(e.material)}),n.root.clear())}var lt=new Hd({id:di.cellId,store:fx,actorStart:qP,actorDestination:YP,config:di,initialEventId:tp.events,attachVisual:sL,detachVisual:rL,updateVisual:nA});lt.load(Date.now());function oL(n){let e=lt.isActive?"ACTIVE":"UNLOADED";Ds(JP,e,e==="ACTIVE"?"#a8f0b5":"#ffd18a"),Ds(ZP,Yl.toFixed(1)+" m"),Ds(KP,lt.hasSnapshot?"SAVED":"NONE",lt.hasSnapshot?"#9fe0ff":"#d8ebe5"),Ds($P,(lt.offscreenMs(n)/1e3).toFixed(1)+" s"),Ds(jP,lt.state.memory.state,lt.state.memory.state==="CALM"?"#a8f0b5":"#ffd18a"),Ds(QP,lt.state.actor.goal),Ds(eL,Math.round(lt.state.actor.progress*100)+"%"),Ds(tL,String(lt.duplicateCount),lt.duplicateCount===0?"#a8f0b5":"#ff8f8f"),Ds(nL,co,co.includes("\u2713")?"#a8f0b5":"#ffe59a")}function aL(n,e){let t=Date.now();if(Yl=Math.hypot(ne.position.x-Gp,ne.position.z-kp),lt.isActive&&Yl>=di.unloadRadiusM)lt.unload(t),co="STATE SERIALIZED \xB7 SIMULATION STOPPED";else if(!lt.isActive&&Yl<=di.loadRadiusM){let i=fx.load(di.cellId),s=i?.actor?.progress,r=i?.memory?.state,o=i?.memory?.expiresAt||0;lt.load(t).rehydrated&&(Mf=Math.abs(lt.state.actor.progress-s)<1e-9,a_=r!=="CALM"&&t>=o&&lt.state.memory.state==="CALM",a_&&Mf&&lt.duplicateCount===0?co="STATE RESTORED \u2713 \xB7 TIMER CAUGHT UP \u2713 \xB7 NO DUPLICATES \u2713":Mf&&lt.duplicateCount===0?co="STATE RESTORED \u2713 \xB7 NO DUPLICATES \u2713":co="RESTORE CHECK FAILED")}lt.isActive&&(lt.update({dtMs:Math.max(0,e*1e3),wallNow:t,eventId:tp.events}),lt.state.memory.state==="DISTURBED"&&lt.lastTransition==="MEMORY_DISTURBED"&&(co="MEMORY DISTURBED \xB7 LEAVE CELL")),oL(t)}var XM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),iA=(n,e)=>aL(n,e);iA.streamCellId=di.cellId;XM.some(n=>n.streamCellId===di.cellId)||XM.push(iA);globalThis.__livingWorld06H={marker:VP,schemaVersion:1,get lifecycle(){return lt.lifecycle},get loaded(){return lt.isActive},get state(){return lt.state.memory.state},get snapshot(){return fx.load(di.cellId)},get playerDistanceM(){return Yl},get actorGoal(){return lt.state.actor.goal},get actorProgress(){return lt.state.actor.progress},get unloadCount(){return lt.unloadCount},get restoreCount(){return lt.restoreCount},get duplicateCount(){return lt.duplicateCount},get lastOffscreenMs(){return lt.lastOffscreenMs},get timerCaughtUp(){return a_},get progressPreserved(){return Mf},loadRadiusM:di.loadRadiusM,unloadRadiusM:di.unloadRadiusM,directPlayerBehaviorTrigger:!1,activeSceneRootCount:()=>ye.children.filter(n=>n.userData?.streamCellId===di.cellId).length};var cL="06I_SIMULATION_LOD_SLEEP_WAKE",ti={...$c,cellId:"06I_LOD_CELL",actorTravelMs:9e4,directPlayerBehaviorTrigger:!1},Vp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,lL=ne.position.x,uL=ne.position.z,sA=Math.sin(Vp),rA=Math.cos(Vp),px=Math.cos(Vp),mx=-Math.sin(Vp),gx=lL+sA*8.8-px*4.8,_x=uL+rA*8.8-mx*4.8,c_={x:gx-px*2.4,z:_x-mx*2.4},l_={x:gx+px*4.8+sA*.9,z:_x+mx*4.8+rA*.9},cu=new fa,lo=null,Sa=null,np=1/0,Na=0,oA=0,Wp=!1,hL=0,aA=0,Ns="NEAR FULL SIMULATION",qM=performance.now(),u_=0,YM=0,Pl=new Set([De.NEAR]),At={goal:"FOOD",behaviorState:"SEEKING_FOOD",progress:0,position:{...c_},destination:{...l_}},dL=document.getElementById("worldLodTier"),fL=document.getElementById("worldLodDistance"),pL=document.getElementById("worldLodCadence"),mL=document.getElementById("worldLodTicks"),gL=document.getElementById("worldLodGoal"),_L=document.getElementById("worldLodProgress"),xL=document.getElementById("worldLodSnapshot"),yL=document.getElementById("worldLodSleepWake"),EL=document.getElementById("worldLodDuplicates"),ML=document.getElementById("worldLodResult");function ns(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function cA(n){return n===De.NEAR?4165512:n===De.MID?5211048:n===De.FAR?7693210:6252136}function vL(n){if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()}function SL(){let n=At.progress;At.position.x=$e.lerp(c_.x,l_.x,n),At.position.z=$e.lerp(c_.z,l_.z,n)}function lA(){if(lo){Na++;return}let n=new mt;n.userData.simLodCellId=ti.cellId;let e=new Wn(.46,1),t=new Te({color:cA(De.NEAR),roughness:.9,metalness:0}),i=new Fe(e,t);i.castShadow=!0;let s=new Ti(.11,.46,7),r=new Te({color:3235675,roughness:.92,metalness:0}),o=new Fe(s,r),a=new Fe(s,r.clone());o.position.set(-.19,.43,0),a.position.set(.19,.43,0),o.rotation.z=.22,a.rotation.z=-.22,i.add(o,a);let c=new pn(.19,10,8),l=new Te({color:14136410,emissive:6441236,emissiveIntensity:.25,roughness:.74}),u=new Fe(c,l);u.castShadow=!0,n.add(i,u),ye.add(n),lo=n,Sa={root:n,body:i,bodyGeo:e,bodyMat:t,earL:o,earR:a,food:u,foodGeo:c,foodMat:l},h_()}function AL(){lo&&(ye.remove(lo),lo.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&vL(n.material)}),lo.clear(),lo=null,Sa=null)}function h_(){if(!Sa)return;let n=At.position;Sa.body.position.set(n.x,Le(n.x,n.z)+.5,n.z);let e=At.destination;Sa.food.position.set(e.x,Le(e.x,e.z)+.22,e.z),Sa.bodyMat.color.setHex(cA(jn?.tier||De.NEAR))}function bL(n){let e={version:1,cellId:ti.cellId,serializedAt:n,actor:{goal:At.goal,behaviorState:At.behaviorState,progress:At.progress,position:{...At.position},destination:{...At.destination}}};cu.save(ti.cellId,e),oA=At.progress,hL=n}function TL(n){let e=cu.load(ti.cellId);return e?(At.goal=e.actor.goal,At.behaviorState=e.actor.behaviorState,At.progress=e.actor.progress,At.position={...e.actor.position},At.destination={...e.actor.destination},aA=Math.max(0,n-e.serializedAt),Wp=Math.abs(At.progress-oA)<1e-9,!0):!1}function RL(n){At.behaviorState==="SEEKING_FOOD"&&(At.progress=Math.min(1,At.progress+n/ti.actorTravelMs),At.progress>=1&&(At.progress=1,At.goal="FOOD REACHED",At.behaviorState="COMPLETE"),SL())}var jn=new pa({config:ti,onSimulate:n=>{u_++,RL(n),h_()},onTierChange:n=>{Pl.add(n),n===De.NEAR?Ns="NEAR FULL SIMULATION":n===De.MID?Ns="MID REDUCED-RATE SIMULATION":n===De.FAR?Ns="FAR COARSE SIMULATION":Ns="DORMANT \xB7 SNAPSHOT SAVED \xB7 SIMULATION SLEEPING",h_()},onSleep:n=>{bL(n),AL()},onWake:n=>{let e=TL(n);lA(),e&&Wp&&Na===0?Ns="WAKE RESTORED \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 NO DUPLICATES \u2713":Ns="WAKE VALIDATION FAILED"}});lA();function wL(n){let e=jn.tier,t=e===De.DORMANT?"#ffd18a":"#a8f0b5";ns(dL,e,t),ns(fL,np.toFixed(1)+" m"),ns(pL,jn.cadenceLabel(),t),ns(mL,YM.toFixed(1)+" /s"),ns(gL,At.goal),ns(_L,Math.round(At.progress*100)+"%"),ns(xL,cu.has(ti.cellId)?"SAVED":"NONE",cu.has(ti.cellId)?"#9fe0ff":"#d8ebe5"),ns(yL,jn.sleepCount+"/"+jn.wakeCount),ns(EL,String(Na),Na===0?"#a8f0b5":"#ff8f8f"),Pl.has(De.NEAR)&&Pl.has(De.MID)&&Pl.has(De.FAR)&&Pl.has(De.DORMANT)&&jn.wakeCount>0&&Wp&&Na===0&&(Ns="LOD LADDER \u2713 \xB7 SLEEP/WAKE \u2713 \xB7 NO DUPLICATES \u2713"),ns(ML,Ns,Ns.includes("\u2713")?"#a8f0b5":"#ffe59a");let i=performance.now()-qM;i>=1e3&&(YM=u_/(i/1e3),u_=0,qM=performance.now())}function CL(n,e){let t=Date.now();np=Math.hypot(ne.position.x-gx,ne.position.z-_x),jn.step({distanceM:np,dtMs:Math.max(0,e*1e3),wallNow:t}),wL(t)}var JM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),uA=(n,e)=>CL(n,e);uA.simLodCellId=ti.cellId;JM.some(n=>n.simLodCellId===ti.cellId)||JM.push(uA);globalThis.__livingWorld06I={marker:cL,get tier(){return jn.tier},get playerDistanceM(){return np},get cadence(){return jn.cadenceLabel()},get totalTicks(){return jn.totalTicks},get ticksByTier(){return{...jn.ticksByTier}},get actorGoal(){return At.goal},get actorProgress(){return At.progress},get sleepCount(){return jn.sleepCount},get wakeCount(){return jn.wakeCount},get duplicateCount(){return Na},get snapshot(){return cu.load(ti.cellId)},get lastOffscreenMs(){return aA},get progressPreserved(){return Wp},activeSceneRootCount:()=>ye.children.filter(n=>n.userData?.simLodCellId===ti.cellId).length,config:{...ti},directPlayerBehaviorTrigger:!1};var IL="06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT",xx={actorCount:192,directPlayerBehaviorTrigger:!1},hA=ne.position.x,dA=ne.position.z,DL=Date.now(),Xp=[],ip=0,sp=!1,rp=!1,d_=0,yx=0,ZM=performance.now(),C0=0,hf=0,fA=!1,fs=null,f_=null,KM=0,pA=0,vf=0,Sf=0,lu=[],uu=[],p_=0,m_=0,Hi="WAITING",ka="WAITING FOR RUNTIME",Bn={NEAR:0,MID:0,FAR:0,DORMANT:0},Ex=0,Mx=0,vx=0,PL=document.getElementById("auditStage06J"),LL=document.getElementById("auditActors06J"),NL=document.getElementById("auditTiers06J"),OL=document.getElementById("auditTicks06J"),BL=document.getElementById("auditFrame06J"),FL=document.getElementById("auditCpu06J"),UL=document.getElementById("auditDraw06J"),HL=document.getElementById("auditScene06J"),zL=document.getElementById("auditMemory06J"),GL=document.getElementById("auditShaders06J"),kL=document.getElementById("auditGpu06J"),VL=document.getElementById("auditState06J"),WL=document.getElementById("auditResult06J"),$M=document.getElementById("char"),XL=new bc(.22,0),qL=new Te({color:16777215,roughness:.9,metalness:0}),Hn=new ke(XL,qL,xx.actorCount);Hn.castShadow=!1;Hn.receiveShadow=!1;Hn.frustumCulled=!1;Hn.instanceMatrix.setUsage(sg);Hn.userData.scaleAuditRoot=!0;ye.add(Hn);var _l=new Be,jM=new re;function YL(n){return n===De.NEAR?3778971:n===De.MID?5211062:n===De.FAR?8020649:5857636}function xl(n,e){let t=hA+n.position.x,i=dA+n.position.z,s=e===De.DORMANT;_l.position.set(t,Le(t,i)+.18,i),_l.rotation.set(0,n.index*.61803398875,0);let r=s?0:.58+n.index%7*.025;_l.scale.setScalar(r),_l.updateMatrix(),Hn.setMatrixAt(n.index,_l.matrix),jM.setHex(YL(e)),Hn.setColorAt(n.index,jM),sp=!0,rp=!0}function JL(n){let e=hA+n.position.x,t=dA+n.position.z;return Math.hypot(ne.position.x-e,ne.position.z-t)}for(let n=0;n<xx.actorCount;n++){let e=cM(n,DL);e.controller=new pa({config:$c,onSimulate:(t,i,s)=>{d_++,r0(e,t,s),xl(e,i)},onTierChange:t=>{xl(e,t)},onSleep:t=>{e.visualActive||ip++,e.snapshot=lM(e,1,t),e.sleepCount++,e.visualActive=!1,xl(e,De.DORMANT)},onWake:(t,i)=>{e.visualActive&&ip++,e.snapshot&&uM(e,e.snapshot,t),e.wakeCount++,e.visualActive=!0,xl(e,i)}}),Xp.push(e),xl(e,De.NEAR)}Hn.instanceMatrix.needsUpdate=!0;Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0);sp=!1;rp=!1;function ZL(){let n=0;return ye.traverse(()=>n++),n}function KL(){let n=performance.memory;return!n||!Number.isFinite(n.usedJSHeapSize)?"JS N/A":"JS "+(n.usedJSHeapSize/(1024*1024)).toFixed(1)+" MB"}function qn(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function mA(){let n={NEAR:0,MID:0,FAR:0,DORMANT:0},e=0,t=0,i=0;for(let s of Xp){let r=s.controller.tier;n[r]=(n[r]||0)+1,s.memory.state!=="CALM"&&e++,s.suspendedGoal!=="NONE"&&t++,s.snapshot&&i++}Bn=n,Ex=e,Mx=t,vx=i}function $L(){if(fs){let e=fs;return e.frame_avg_ms.toFixed(2)+" / "+e.frame_p95_ms.toFixed(2)+" / "+e.frame_p99_ms.toFixed(2)+" ms"}let n=lu.length?p_/lu.length:0;return n?n.toFixed(2)+" ms avg":"\u2014"}function jL(){if(fs){let e=fs;return e.audit_cpu_avg_ms.toFixed(3)+" / "+e.audit_cpu_p95_ms.toFixed(3)+" ms"}let n=uu.length?m_/uu.length:0;return n?n.toFixed(3)+" ms avg":"\u2014"}function QL(n){let e=Bn.NEAR+Bn.MID+Bn.FAR+Bn.DORMANT,t=je.info.memory||{},i=Array.isArray(je.info.programs)?je.info.programs.length:0,s=f_===null?"\u2014":String(i-f_),r=ye.children.filter(o=>o.userData?.scaleAuditRoot===!0).length;qn(PL,Hi,Hi==="PASS"?"#a8f0b5":Hi==="FAIL"?"#ff9b9b":"#ffe59a"),qn(LL,e+"/"+xx.actorCount),qn(NL,Bn.NEAR+"/"+Bn.MID+"/"+Bn.FAR+"/"+Bn.DORMANT),qn(OL,yx.toFixed(0)+" /s"),qn(BL,$L()),qn(FL,jL()),qn(UL,je.info.render.calls+" / "+je.info.render.triangles.toLocaleString()),qn(HL,pA+" obj \xB7 "+(t.geometries||0)+" geo \xB7 "+(t.textures||0)+" tex"),qn(zL,KL()),qn(GL,i+" \xB7 \u0394 "+s),qn(kL,"N/A \xB7 WebGL"),qn(VL,"mem "+Ex+" \xB7 susp "+Mx+" \xB7 snap "+vx+" \xB7 root "+r),qn(WL,ka,fs?.pass?"#a8f0b5":Hi==="FAIL"?"#ff9b9b":"#ffe59a")}function eN(){mA();let n=Bn.NEAR+Bn.MID+Bn.FAR+Bn.DORMANT,e=ye.children.filter(i=>i.userData?.scaleAuditRoot===!0).length,t=ip+(e===1?0:1);fs=hM({frameSamples:lu,cpuSamples:uu,drawCallsMax:vf,trianglesMax:Sf,actorCount:n,duplicateCount:t,limits:$r}),fA=!0,fs.pass?(Hi="PASS",ka="192 ACTORS \u2713 \xB7 BUDGET PASS \u2713 \xB7 STATE STABLE \u2713"):(Hi="FAIL",ka="BUDGET FAIL \xB7 "+fs.failed.slice(0,3).join(" \xB7 "))}function tN(n,e){let t=performance.now(),i=Date.now(),s=C0>0?Math.max(0,n-C0):0;C0=n,!hf&&$M&&$M.textContent!=="BOOT"&&(hf=n,Hi="WARMUP",ka="WARMING SHADERS + SCALE ACTORS",lu=[],uu=[],p_=0,m_=0,vf=0,Sf=0);for(let a of Xp)a.controller.step({distanceM:JL(a),dtMs:Math.max(0,e*1e3),wallNow:i});sp&&(Hn.instanceMatrix.needsUpdate=!0,sp=!1),rp&&Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0,rp=!1),mA();let r=n-ZM;r>=1e3&&(yx=d_/(r/1e3),d_=0,ZM=n);let o=performance.now()-t;if(hf&&!fA){let a=n-hf;a<$r.warmupMs?Hi="WARMUP":(Hi==="WARMUP"&&(f_=Array.isArray(je.info.programs)?je.info.programs.length:0,Hi="MEASURING",ka="MEASURING 15 s PERFORMANCE WINDOW"),s>0&&(lu.push(s),p_+=s),uu.push(o),m_+=o,vf=Math.max(vf,je.info.render.calls||0),Sf=Math.max(Sf,je.info.render.triangles||0),a>=$r.warmupMs+$r.measureMs&&eN())}n-KM>=1e3&&(pA=ZL(),KM=n),QL(n)}var QM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),gA=(n,e)=>tN(n,e);gA.scaleAuditId="06J_SCALE_AUDIT";QM.some(n=>n.scaleAuditId==="06J_SCALE_AUDIT")||QM.push(gA);globalThis.__livingWorld06J={marker:IL,get stage(){return Hi},get result(){return ka},get actorCount(){return Xp.length},get tiers(){return{...Bn}},get logicTicksPerSecond(){return yx},get memoryActive(){return Ex},get suspendedGoals(){return Mx},get snapshots(){return vx},get duplicateCount(){return ip},get summary(){return fs?JSON.parse(JSON.stringify(fs)):null},get budgets(){return{...$r}},get gpuTiming(){return"N/A \xB7 WebGL"},directPlayerBehaviorTrigger:!1};var nN="07A_PRODUCTION_ARCHITECTURE_PROMOTION",iN=document.getElementById("archModules07A"),sN=document.getElementById("archBoundary07A"),rN=document.getElementById("archParity07A"),oN=document.getElementById("archStream07A"),aN=document.getElementById("archRegression07A"),df=document.getElementById("archResult07A");function Os(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function cN(){let n={},e=new pr({initialGoal:"FOOD",initialProgress:.34});e.createHazardEvent({center:{x:0,z:0},at:1e3});let t=e.update({now:1120,actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},foodValid:!0,foodEventAt:1120,foodProgressDelta:.05});n.priority_over_recency=t.memoryState==="DISTURBED"&&t.winner==="HAZARD"&&t.goal==="HAZARD"&&t.suspendedGoal==="FOOD"&&Math.abs(t.progress-.34)<1e-12;let i=e.serialize(1600),r=new pr().restore(i,7e3);n.offscreen_time_resolution=r.memoryState==="CALM"&&r.goal==="FOOD"&&Math.abs(r.progress-.34)<1e-12&&r.offscreenMs===5400;let o=new Qc,a=0,c=0,l=new el({id:"07A_STREAM_PROOF",store:o,actorStart:{x:0,z:0},actorDestination:{x:10,z:0},initialEventId:0,attachVisual:()=>(a++,{id:a}),detachVisual:()=>{c++},updateVisual:()=>{}});l.load(1e3),l.update({dtMs:800,wallNow:1800,eventId:1});let u=l.state.actor.progress;l.unload(1900);let h=l.load(8e3);n.stream_parity=h.rehydrated===!0&&l.state.memory.state==="CALM"&&l.state.actor.goal==="FOOD"&&Math.abs(l.state.actor.progress-u)<1e-12&&l.duplicateCount===0&&a===2&&c===1;let d=0,f=new tl({onSimulate:()=>{d++}});f.step({distanceM:10,dtMs:16,wallNow:1e3}),f.step({distanceM:17,dtMs:0,wallNow:1016});for(let p=0;p<10;p++)f.step({distanceM:20,dtMs:10,wallNow:1026+p*10});f.step({distanceM:31,dtMs:0,wallNow:1200});for(let p=0;p<50;p++)f.step({distanceM:40,dtMs:10,wallNow:1210+p*10});f.step({distanceM:60,dtMs:0,wallNow:1800});let m=f.tier,y=f.totalTicks;f.step({distanceM:60,dtMs:5e3,wallNow:6800}),f.step({distanceM:45,dtMs:0,wallNow:6801}),n.lod_parity=m===it.DORMANT&&f.totalTicks===y&&f.tier===it.FAR&&f.sleepCount===1&&f.wakeCount===1,n.module_manifest=jr.modules.length===8,n.boundaries=jr.boundaries.rendering.includes("no THREE")&&jr.boundaries.dom==="none"&&jr.boundaries.productionActorPipeline==="deferred to 07B";let g=Object.entries(n).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:n}}var Qn=cN();Os(iN,String(jr.modules.length));Os(sN,Qn.checks.boundaries?"PURE CORE \u2713":"FAIL",Qn.checks.boundaries?"#a8f0b5":"#ff9b9b");Os(rN,Qn.checks.priority_over_recency&&Qn.checks.offscreen_time_resolution?"PASS \u2713":"FAIL",Qn.checks.priority_over_recency&&Qn.checks.offscreen_time_resolution?"#a8f0b5":"#ff9b9b");Os(oN,Qn.checks.stream_parity&&Qn.checks.lod_parity?"PASS \u2713":"FAIL",Qn.checks.stream_parity&&Qn.checks.lod_parity?"#a8f0b5":"#ff9b9b");function _A(){let n=globalThis.__livingWorld06J?.stage||"WAITING";Os(aN,n,n==="PASS"?"#a8f0b5":n==="FAIL"?"#ff9b9b":"#ffe59a"),Qn.pass?n==="PASS"?Os(df,"PRODUCTION ARCHITECTURE PROMOTED \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):n==="FAIL"?Os(df,"PRODUCTION CORE PASS \u2713 \xB7 06J REGRESSION FAILED","#ff9b9b"):Os(df,"PRODUCTION CORE PASS \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):Os(df,"ARCHITECTURE PROOF FAILED \xB7 "+Qn.failed.join(" \xB7 "),"#ff9b9b")}_A();var lN=setInterval(()=>{_A();let n=globalThis.__livingWorld06J?.stage||"WAITING";(n==="PASS"||n==="FAIL")&&clearInterval(lN)},1e3);globalThis.__productionArchitecture07A={marker:nN,manifest:jr,proof:Qn,get regression(){return globalThis.__livingWorld06J?.stage||"WAITING"}};var uN="07B_PRODUCTION_ACTOR_PIPELINE",br=new qd,xA=br.registerDefinition({typeId:"HUMANOID_FORAGER_V1",asset:{id:"SOLDIER_GLB_V1",url:"./assets/Soldier.glb"},scale:.92,yawOffset:Math.PI,animationMap:{IDLE:"Idle",WALK:"Walk",RUN:"Run"},presentation:{castShadow:!1,receiveShadow:!0}}),op=ne.position.x,ap=ne.position.z,hu=br.createActor({id:"07B_ACTOR_A",typeId:xA.typeId,position:{x:op-3.2,y:Le(op-3.2,ap-6),z:ap-6},yaw:.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.22}}),du=br.createActor({id:"07B_ACTOR_B",typeId:xA.typeId,position:{x:op+3.2,y:Le(op+3.2,ap-7),z:ap-7},yaw:-.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.62}}),zi=new Yd({scene:ye}),Af=[],ho="LOADING ASSET",yA="",hN=0,EA=new Yi(.72,.92,24);EA.rotateX(-Math.PI/2);var dN=new Lt({color:7921875,transparent:!0,opacity:.74,side:Et,depthWrite:!1}),Iu=new ke(EA,dN,2);Iu.frustumCulled=!1;Iu.userData.productionActorMarkers=!0;var yl=new Be;for(let[n,e]of[hu,du].entries())yl.position.set(e.position.x,e.position.y+.025,e.position.z),yl.rotation.set(0,0,0),yl.scale.setScalar(1),yl.updateMatrix(),Iu.setMatrixAt(n,yl.matrix);Iu.instanceMatrix.needsUpdate=!0;ye.add(Iu);var fN=document.getElementById("actorStage07B"),pN=document.getElementById("actorDefinitions07B"),mN=document.getElementById("actorAssetLoads07B"),gN=document.getElementById("actorInstances07B"),_N=document.getElementById("actorBindings07B"),xN=document.getElementById("actorRoots07B"),yN=document.getElementById("actorMixers07B"),EN=document.getElementById("actorAnimations07B"),MN=document.getElementById("actorKernels07B"),vN=document.getElementById("actorDuplicates07B"),SN=document.getElementById("actorRegression07B"),El=document.getElementById("actorResult07B");function gn(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function AN(){return ye.children.filter(n=>n.userData?.productionActorId==="07B_ACTOR_A"||n.userData?.productionActorId==="07B_ACTOR_B")}function MA(){let n=AN(),e=new Set(n.map(h=>h.uuid)),t=Af.filter(Boolean),i=new Set(t.map(h=>h.model?.uuid).filter(Boolean)),s=t.filter(h=>h.mixer).length,r=t.map(h=>h.resolvedAnimation).filter(h=>h&&h!=="NONE"),o=[hu.kernel,du.kernel].filter(Boolean).length,a=globalThis.__livingWorld06J?.stage||"WAITING",c=globalThis.__productionArchitecture07A?.proof?.pass===!0,l={definitions:br.definitions.list().length===1,asset_load_once:zi.assetCache.loadCount===1,actors:br.size===2,bindings:zi.size===2&&t.length===2,unique_roots:n.length===2&&e.size===2&&i.size===2,independent_mixers:s===2,animations_resolved:r.length===2,kernels:o===2,stable_binding_claims:hu.bindingClaims===1&&du.bindingClaims===1,duplicates:zi.duplicateBindingCount===0,architecture:c,regression:a==="PASS"},u=Object.entries(l).filter(([,h])=>!h).map(([h])=>h);return{pass:u.length===0,failed:u,checks:l,roots:n,bindings:t,resolved:r,regression:a,mixers:s,kernels:o}}async function bN(){try{Af=await Promise.all([zi.bind(hu),zi.bind(du)]),Af[0].setAnimationIntent("IDLE",0),Af[1].setAnimationIntent("WALK",0),ho="READY",hN=performance.now()}catch(n){ho="FAIL",yA=n?.message||String(n),console.error("07B production actor pipeline failed",n)}}bN();function TN(){let n=MA(),e=ho==="READY",t=n.checks.architecture,i=e&&t&&n.checks.definitions&&n.checks.asset_load_once&&n.checks.actors&&n.checks.bindings&&n.checks.unique_roots&&n.checks.independent_mixers&&n.checks.animations_resolved&&n.checks.kernels&&n.checks.stable_binding_claims&&n.checks.duplicates,s=ho;i&&n.regression==="PASS"?s="PASS":i&&(s="WAITING REGRESSION"),ho==="FAIL"&&(s="FAIL"),gn(fN,s,s==="PASS"?"#a8f0b5":s==="FAIL"?"#ff9b9b":"#ffe59a"),gn(pN,String(br.definitions.list().length)),gn(mN,String(zi.assetCache.loadCount)),gn(gN,br.size+"/2"),gn(_N,zi.size+"/2"),gn(xN,n.roots.length+" / "+new Set(n.roots.map(r=>r.uuid)).size),gn(yN,String(n.mixers)),gn(EN,n.resolved.length?n.resolved.join(" / "):"\u2014"),gn(MN,String(n.kernels)),gn(vN,String(zi.duplicateBindingCount),zi.duplicateBindingCount===0?"#a8f0b5":"#ff9b9b"),gn(SN,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),ho==="FAIL"?gn(El,"PIPELINE FAIL \xB7 "+yA,"#ff9b9b"):i&&n.regression==="PASS"?gn(El,"ACTOR PIPELINE \u2713 \xB7 ASSET CACHE \u2713 \xB7 INDEPENDENT INSTANCES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):i?gn(El,"ACTOR PIPELINE \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):e?gn(El,"PIPELINE CHECKING \xB7 "+n.failed.filter(r=>r!=="regression").join(" \xB7 "),"#ffe59a"):gn(El,"LOADING PRODUCTION ACTOR ASSET","#ffe59a")}var ev=0,tv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),vA=(n,e)=>{zi.update(e),n>=ev&&(TN(),ev=n+1e3)};vA.productionActorPipelineId="07B_PRODUCTION_ACTOR_PIPELINE";tv.some(n=>n.productionActorPipelineId==="07B_PRODUCTION_ACTOR_PIPELINE")||tv.push(vA);globalThis.__productionActorPipeline07B={marker:uN,pipeline:br,factory:zi,actors:[hu,du],get state(){return ho},get proof(){return MA()}};var RN="07C_STREAMED_PRODUCTION_REGION",Sx=globalThis.__productionActorPipeline07B;if(!Sx)throw new Error("07C requires frozen accepted 07B actor pipeline");var fu=Sx.pipeline,Mr=Sx.factory,nv=fu.definitions.get("HUMANOID_FORAGER_V1"),bn={x:ne.position.x+12,z:ne.position.z-10},go=["07C_REGION_ACTOR_A","07C_REGION_ACTOR_B"],wN=[{id:go[0],typeId:nv.typeId,position:{x:bn.x-2.5,y:Le(bn.x-2.5,bn.z),z:bn.z},yaw:.22,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.28}},{id:go[1],typeId:nv.typeId,position:{x:bn.x+2.5,y:Le(bn.x+2.5,bn.z-.6),z:bn.z-.6},yaw:-.22,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.58}}],Ax=new Fi,qe=new ts({id:"07C_PRODUCTION_REGION_A",pipeline:fu,store:Ax,actorBlueprints:wN,bindActor:n=>Mr.bind(n),unbindActor:n=>Mr.unbind(n.id),loadRadiusM:24,unloadRadiusM:38}),Jl=1/0,Va="",mo="WAITING",SA=null,AA=null,iv=0,bA=new Yi(5.4,5.75,48);bA.rotateX(-Math.PI/2);var CN=new Lt({color:6215887,transparent:!0,opacity:.58,side:Et,depthWrite:!1}),bx=new Fe(bA,CN);bx.position.set(bn.x,Le(bn.x,bn.z)+.035,bn.z);bx.userData.productionRegionDiagnostic=!0;ye.add(bx);var IN=document.getElementById("regionStage07C"),DN=document.getElementById("regionDistance07C"),PN=document.getElementById("regionActors07C"),LN=document.getElementById("regionBindings07C"),NN=document.getElementById("regionAssetLoads07C"),ON=document.getElementById("regionSnapshot07C"),BN=document.getElementById("regionOffscreen07C"),FN=document.getElementById("regionIds07C"),UN=document.getElementById("regionProgress07C"),HN=document.getElementById("regionCycles07C"),zN=document.getElementById("regionDuplicates07C"),GN=document.getElementById("regionRegression07C"),Ml=document.getElementById("regionResult07C");function on(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function kN(){let n=new Set(go);return ye.children.filter(e=>n.has(e.userData?.productionActorId))}function g_(){return go.filter(n=>Mr.getBinding(n)).length}function VN(){return Ax.load(qe.id)?.actors?.find(t=>t.actorId===go[0])?.kernel?.goals?.progress}function Tx(){return fu.getActor(go[0])?.kernel?.goals?.progress}function TA(){let n=kN(),e=new Set(n.map(c=>c.userData?.productionActorId)),t=qe.activeActors,i=qe.duplicateCount+Mr.duplicateBindingCount,s=globalThis.__livingWorld06J?.stage||"WAITING",r=!!fu.getActor("07B_ACTOR_A")&&!!fu.getActor("07B_ACTOR_B"),o={asset_load_one:Mr.assetCache.loadCount===1,static_controls_present:r,actor_count:qe.isActive?t.length===2:t.length===0,bindings:qe.isActive?g_()===2:g_()===0,roots:qe.isActive?n.length===2&&e.size===2:n.length===0,snapshot:qe.unloadCount===0||qe.hasSnapshot,ids_stable:qe.restoreCount===0||qe.lastRestoreIdsStable,progress_preserved:qe.restoreCount===0||qe.lastRestoreProgressPreserved,duplicates:i===0,regression:s==="PASS"},a=Object.entries(o).filter(([,c])=>!c).map(([c])=>c);return{pass:a.length===0,failed:a,checks:o,duplicates:i,regression:s,roots:n,activeActors:t}}function pu(){let n=TA(),e=qe.lifecycle;on(IN,e,e==="ACTIVE"?"#a8f0b5":e==="UNLOADED"?"#ffd18a":e==="LOADING"||e==="REHYDRATING"?"#9fe0ff":"#ffe59a"),on(DN,Jl.toFixed(1)+" m"),on(PN,qe.activeActors.length+"/2"),on(LN,g_()+"/2"),on(NN,String(Mr.assetCache.loadCount),Mr.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),on(ON,qe.hasSnapshot?"SAVED":"NONE",qe.hasSnapshot?"#9fe0ff":"#d8ebe5"),on(BN,(qe.lastOffscreenMs/1e3).toFixed(1)+" s"),on(FN,qe.restoreCount===0?"PENDING":qe.lastRestoreIdsStable?"STABLE \u2713":"FAIL",qe.restoreCount===0?"#ffe59a":qe.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b");let i=Tx(),s=VN(),r=Number.isFinite(i)?Math.round(i*100)+"%":Number.isFinite(s)?Math.round(s*100)+"% saved":"\u2014";on(UN,r),on(HN,qe.unloadCount+"/"+qe.restoreCount),on(zN,String(n.duplicates),n.duplicates===0?"#a8f0b5":"#ff9b9b"),on(GN,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Va?on(Ml,"REGION FAIL \xB7 "+Va,"#ff9b9b"):qe.restoreCount>0&&qe.isActive&&qe.lastRestoreIdsStable&&qe.lastRestoreProgressPreserved&&Mr.assetCache.loadCount===1&&n.duplicates===0&&n.regression==="PASS"?on(Ml,"REGION RESTORED \u2713 \xB7 IDS STABLE \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):e==="UNLOADED"&&qe.hasSnapshot?on(Ml,"REGION UNLOADED \u2713 \xB7 ACTORS REMOVED \u2713 \xB7 SNAPSHOT SAVED \u2713","#ffe59a"):on(Ml,mo,"#ffe59a")}function WN(n){qe.operation||(mo=qe.hasSnapshot?"REHYDRATING PRODUCTION REGION":"LOADING PRODUCTION REGION",qe.load(n).then(e=>{Va="",e.rehydrated?(AA=Tx(),mo="REGION REHYDRATED \xB7 VERIFYING CONTINUITY"):mo="REGION ACTIVE \xB7 LEAVE PAST 38 m",pu()}).catch(e=>{Va=e?.message||String(e),pu()}))}function XN(n){qe.operation||(SA=Tx(),mo="SERIALIZING / UNLOADING REGION",qe.unload(n).then(()=>{Va="",mo="REGION UNLOADED \xB7 RETURN INSIDE 24 m",pu()}).catch(e=>{Va=e?.message||String(e),pu()}))}var sv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),RA=(n,e)=>{let t=Date.now();Jl=Math.hypot(ne.position.x-bn.x,ne.position.z-bn.z),qe.operation||(qe.lifecycle==="UNLOADED"&&Jl<=qe.loadRadiusM?WN(t):qe.lifecycle==="ACTIVE"&&Jl>=qe.unloadRadiusM&&XN(t)),qe.isActive&&qe.update({dtMs:Math.max(0,e*1e3),now:t,foodProgressPerSecond:.006}),n>=iv&&(pu(),iv=n+500)};RA.productionRegionId="07C_PRODUCTION_REGION";sv.some(n=>n.productionRegionId==="07C_PRODUCTION_REGION")||sv.push(RA);globalThis.__streamedProductionRegion07C={marker:RN,region:qe,store:Ax,center:{...bn},actorIds:[...go],get distanceM(){return Jl},get proof(){return TA()},get lastUnloadProgress(){return SA},get lastRestoreProgress(){return AA}};var qN="07D_PRODUCTION_VERTICAL_SLICE",Er=globalThis.__streamedProductionRegion07C,Rx=globalThis.__productionActorPipeline07B;if(!Er||!Rx)throw new Error("07D requires frozen accepted 07B + 07C runtime");var Ls=Er.region,wA=Rx.pipeline,Zl=Rx.factory,__="07C_REGION_ACTOR_A",Yn=new Kd({region:Ls,pipeline:wA,actorId:__,hazardCenter:{x:Er.center.x,z:Er.center.z},triggerDelayMs:1800}),rv="",ov=0,Ll=!1,Nl=!1,CA=null,IA=new Yi(1.05,1.35,32);IA.rotateX(-Math.PI/2);var so=new Lt({color:6281423,transparent:!0,opacity:.62,side:Et,depthWrite:!1}),qp=new Fe(IA,so);qp.position.set(Er.center.x,Le(Er.center.x,Er.center.z)+.05,Er.center.z);qp.userData.productionVerticalSliceBeacon=!0;ye.add(qp);var YN=document.getElementById("sliceStage07D"),JN=document.getElementById("sliceRegion07D"),ZN=document.getElementById("sliceGoal07D"),KN=document.getElementById("sliceMemory07D"),$N=document.getElementById("sliceAnim07D"),jN=document.getElementById("sliceBehavior07D"),QN=document.getElementById("sliceStream07D"),e2=document.getElementById("sliceIds07D"),t2=document.getElementById("sliceProgress07D"),n2=document.getElementById("sliceAsset07D"),i2=document.getElementById("sliceDuplicates07D"),s2=document.getElementById("sliceRegression07D"),ff=document.getElementById("sliceResult07D");function _n(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function x_(){let n=wA.getActor(__);if(!n)return{actor:null,binding:null,goal:"UNLOADED",memory:"UNLOADED",intent:"NONE",progress:null};let e=Zl.getBinding(__);return{actor:n,binding:e,goal:n.kernel.goals.activeGoal,memory:n.kernel.memory.state,intent:n.animationIntent,progress:n.kernel.goals.progress}}function r2(){let n=x_();if(!n.actor||!n.binding)return n;let e="WALK";return n.goal==="HAZARD"?e="RUN":n.goal==="FOOD REACHED"&&(e="IDLE"),(rv!==e||n.actor.animationIntent!==e)&&(n.binding.setAnimationIntent(e,.12),rv=e),n.memory==="DISTURBED"?(so.color.setHex(14981698),so.opacity=.9):n.memory==="SETTLING"?(so.color.setHex(14271595),so.opacity=.76):(so.color.setHex(6281423),so.opacity=.62),x_()}function I0(){return Ls.duplicateCount+Zl.duplicateBindingCount}function o2(){let n=x_(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=Yn.completion({assetLoadCount:Zl.assetCache.loadCount,duplicateCount:I0(),regressionStatus:e});CA=t,Ll=Yn.hazardObserved&&Yn.recoveryObserved&&t.checks.progress_preserved,Nl=Yn.streamOutObserved&&Yn.restoreObserved&&t.checks.region_ids_stable&&t.checks.region_progress_preserved,_n(YN,t.pass?"PASS":Yn.stage,t.pass?"#a8f0b5":"#ffe59a"),_n(JN,Ls.lifecycle,Ls.isActive?"#a8f0b5":Ls.lifecycle==="UNLOADED"?"#ffd18a":"#9fe0ff"),_n(ZN,n.goal,n.goal==="HAZARD"?"#ffd18a":"#a8f0b5"),_n(KN,n.memory,n.memory==="CALM"?"#a8f0b5":"#ffd18a"),_n($N,n.binding?.resolvedAnimation||n.intent||"NONE"),_n(jN,Ll?"PASS \u2713":Yn.hazardObserved?"HAZARD OBSERVED":Yn.hazardEventId?"EVENT EMITTED":"WAITING",Ll?"#a8f0b5":"#ffe59a"),_n(QN,Nl?"PASS \u2713":Yn.streamOutObserved?"UNLOADED \u2713 \xB7 RETURN":"PENDING",Nl?"#a8f0b5":"#ffe59a"),_n(e2,Ls.restoreCount===0?"PENDING":Ls.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Ls.restoreCount===0?"#ffe59a":Ls.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b"),_n(t2,Number.isFinite(n.progress)?Math.round(n.progress*100)+"%":Number.isFinite(Yn.recoveredProgress)?Math.round(Yn.recoveredProgress*100)+"% saved":"\u2014"),_n(n2,String(Zl.assetCache.loadCount),Zl.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),_n(i2,String(I0()),I0()===0?"#a8f0b5":"#ff9b9b"),_n(s2,e,e==="PASS"?"#a8f0b5":e==="FAIL"?"#ff9b9b":"#ffe59a"),t.pass?_n(ff,"PRODUCTION VERTICAL SLICE \u2713 \xB7 BEHAVIOR LOOP \u2713 \xB7 STREAM RESTORE \u2713 \xB7 ASSET PIPELINE \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):e==="FAIL"?_n(ff,"VERTICAL SLICE BLOCKED \xB7 PERFORMANCE REGRESSION FAILED","#ff9b9b"):Ll&&!Nl?_n(ff,"BEHAVIOR LOOP \u2713 \xB7 LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m","#ffe59a"):_n(ff,"OBSERVE FOOD \u2192 HAZARD \u2192 FOOD RECOVERY","#ffe59a")}var av=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),DA=n=>{let e=Date.now();Yn.update(e),r2();let t=1+Math.sin(n*.006)*.08;qp.scale.setScalar(t),n>=ov&&(o2(),ov=n+500)};DA.productionVerticalSliceId="07D_PRODUCTION_VERTICAL_SLICE";av.some(n=>n.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")||av.push(DA);globalThis.__productionVerticalSlice07D={marker:qN,coordinator:Yn,get completion(){return CA},get behaviorLoopPass(){return Ll},get streamPass(){return Nl}};var a2="08A_MULTI_REGION_PRODUCTION_WORLD",wx=globalThis.__productionActorPipeline07B;if(!wx)throw new Error("08A requires frozen accepted 07B actor pipeline");var D0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=D0.length-1;n>=0;n--){let e=D0[n];(e?.productionRegionId==="07C_PRODUCTION_REGION"||e?.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")&&D0.splice(n,1)}for(let n of[...ye.children])(n.userData?.productionRegionDiagnostic===!0||n.userData?.productionVerticalSliceBeacon===!0)&&ye.remove(n);var Cx=wx.pipeline,Wa=wx.factory,cv=Cx.definitions.get("HUMANOID_FORAGER_V1"),Yp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,c2=ne.position.x,l2=ne.position.z,u2=Math.sin(Yp),h2=Math.cos(Yp),d2=Math.cos(Yp),f2=-Math.sin(Yp);function P0(n,e){return{x:c2+u2*n+d2*e,z:l2+h2*n+f2*e}}var vr={A:P0(18,0),B:P0(18,48),C:P0(-30,48)},Jp=new Fi;function p2(n,e){return[{id:"08A_"+n+"_ACTOR_1",typeId:cv.typeId,position:{x:e.x-1.9,y:Le(e.x-1.9,e.z),z:e.z},yaw:.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.21:n==="B"?.41:.61}},{id:"08A_"+n+"_ACTOR_2",typeId:cv.typeId,position:{x:e.x+1.9,y:Le(e.x+1.9,e.z-.5),z:e.z-.5},yaw:-.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.31:n==="B"?.51:.71}}]}function L0(n,e){return new ts({id:"08A_WORLD_REGION_"+n,pipeline:Cx,store:Jp,actorBlueprints:p2(n,e),bindActor:t=>Wa.bind(t),unbindActor:t=>Wa.unbind(t.id),loadRadiusM:24,unloadRadiusM:38})}var wn={A:L0("A",vr.A),B:L0("B",vr.B),C:L0("C",vr.C)},Du=new mr({entries:[{id:"A",center:vr.A,region:wn.A},{id:"B",center:vr.B,region:wn.B},{id:"C",center:vr.C,region:wn.C}]}),hs=new Set,Kl=!1,lv=null,m2=null,bf=!1,Aa="",uv=0,hv=0,N0=0,g2=100,PA=new Yi(4.8,5.15,48);PA.rotateX(-Math.PI/2);var _2=[new Lt({color:6281423,transparent:!0,opacity:.55,side:Et,depthWrite:!1}),new Lt({color:6262488,transparent:!0,opacity:.55,side:Et,depthWrite:!1}),new Lt({color:10121176,transparent:!0,opacity:.55,side:Et,depthWrite:!1})];for(let[n,e]of["A","B","C"].entries()){let t=vr[e],i=new Fe(PA,_2[n]);i.position.set(t.x,Le(t.x,t.z)+.04,t.z),i.userData.worldRegion08A=e,ye.add(i)}var x2=document.getElementById("worldStage08A"),y2=document.getElementById("worldNearest08A"),E2=document.getElementById("worldDistances08A"),M2=document.getElementById("worldStates08A"),v2=document.getElementById("worldActive08A"),S2=document.getElementById("worldVisited08A"),A2=document.getElementById("worldSnapshots08A"),b2=document.getElementById("worldProgress08A"),T2=document.getElementById("worldAssets08A"),R2=document.getElementById("worldDuplicates08A"),w2=document.getElementById("worldRegression08A"),eo=document.getElementById("worldResult08A");function sn(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function dv(n){return Cx.getActor("08A_"+n+"_ACTOR_1")?.kernel?.goals?.progress}function C2(){return["A","B","C"].filter(n=>wn[n].isActive)}function I2(){return wn.A.duplicateCount+wn.B.duplicateCount+wn.C.duplicateCount+Wa.duplicateBindingCount}function D2(){return Du.nearest({x:ne.position.x,z:ne.position.z})}function LA(){let n=C2(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=["A","B","C"].every(l=>hs.has(l)),i=["A","B","C"].every(l=>Jp.has("08A_WORLD_REGION_"+l)),s=wn.A.restoreCount>0&&wn.A.lastRestoreIdsStable&&wn.A.lastRestoreProgressPreserved,r=Wa.assetCache.loadCount===1,o=I2(),a={region_count:Du.size===3,active_count:n.length<=1,all_visited:t,all_snapshots:i,a_restored:s,asset_load_one:r,duplicates:o===0,regression:e==="PASS"},c=Object.entries(a).filter(([,l])=>!l).map(([l])=>l);return{pass:c.length===0,failed:c,checks:a,active:n,regression:e,duplicates:o}}async function P2(n,e){if(!bf){bf=!0;try{await Du.step({playerPosition:{x:ne.position.x,z:ne.position.z},dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});for(let t of["A","B","C"])wn[t].isActive&&(hs.has(t)||(hs.add(t),t==="A"&&!Number.isFinite(lv)&&(lv=dv("A"))),t==="A"&&hs.has("B")&&hs.has("C")&&wn.A.restoreCount>0&&(Kl=!0,m2=dv("A")));Aa=""}catch(t){Aa=t?.message||String(t)}finally{bf=!1}}}function L2(){let n=LA(),e=D2(),t=Du.distances({x:ne.position.x,z:ne.position.z}),i=n.active,s=["A","B","C"].map(c=>wn[c].lifecycle[0]).join("/"),r=["A","B","C"].map(c=>Jp.has("08A_WORLD_REGION_"+c)?"S":"\u2014").join("/"),o=["A","B","C"].map(c=>hs.has(c)?c:"\u2014").join(""),a=Kl&&wn.A.lastRestoreProgressPreserved;sn(x2,n.pass?"PASS":Aa?"FAIL":"ACTIVE",n.pass?"#a8f0b5":Aa?"#ff9b9b":"#ffe59a"),sn(y2,e?e.id+" "+e.distance.toFixed(1)+" m":"\u2014"),sn(E2,t.map(c=>c.id+":"+c.distance.toFixed(0)).join(" \xB7 ")),sn(M2,s),sn(v2,i.length?i.join(","):"NONE",i.length<=1?"#a8f0b5":"#ff9b9b"),sn(S2,o),sn(A2,r),sn(b2,a?"PRESERVED \u2713":Kl?"FAIL":"PENDING",a?"#a8f0b5":"#ffe59a"),sn(T2,String(Wa.assetCache.loadCount),Wa.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),sn(R2,String(n.duplicates),n.duplicates===0?"#a8f0b5":"#ff9b9b"),sn(w2,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Aa?sn(eo,"WORLD FAIL \xB7 "+Aa,"#ff9b9b"):n.pass?sn(eo,"MULTI-REGION WORLD \u2713 \xB7 A/B/C VISITED \u2713 \xB7 STATE ISOLATED \u2713 \xB7 RETURN RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):hs.has("A")?hs.has("B")?hs.has("C")?Kl?sn(eo,"RETURNED TO A \xB7 WAITING FOR REGRESSION / RESTORE CHECKS","#ffe59a"):sn(eo,"A/B/C VISITED \u2713 \xB7 RETURN TO REGION A","#ffe59a"):sn(eo,"A/B VISITED \u2713 \xB7 MOVE TO REGION C","#ffe59a"):sn(eo,"A VISITED \u2713 \xB7 MOVE TO REGION B","#ffe59a"):sn(eo,"VISIT REGION A","#ffe59a")}var fv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),NA=(n,e)=>{if(N0+=Math.max(0,e*1e3),n>=hv&&!bf){let t=N0/1e3;N0=0,hv=n+g2,P2(n,t)}n>=uv&&(L2(),uv=n+500)};NA.multiRegionWorldId="08A_MULTI_REGION_WORLD";fv.some(n=>n.multiRegionWorldId==="08A_MULTI_REGION_WORLD")||fv.push(NA);globalThis.__multiRegionWorld08A={marker:a2,world:Du,regions:wn,store:Jp,centers:vr,visited:hs,get returnedToA(){return Kl},get proof(){return LA()}};var N2="08B_PREDICTIVE_REGION_HANDOFF",y_=globalThis.__multiRegionWorld08A,Ix=globalThis.__productionActorPipeline07B;if(!y_||!Ix)throw new Error("08B requires frozen accepted 08A + 07B runtime");var O0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=O0.length-1;n>=0;n--)O0[n]?.multiRegionWorldId==="08A_MULTI_REGION_WORLD"&&O0.splice(n,1);for(let n of[...ye.children])n.userData?.worldRegion08A&&ye.remove(n);var Dx=Ix.pipeline,cp=Ix.factory,E_=Dx.definitions.get("HUMANOID_FORAGER_V1"),ei=new _a({scene:ye,assetCache:cp.assetCache}),M_=new ga({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),O2=new Fi,Sr={A:{...y_.centers.A},B:{...y_.centers.B}};function B2(n,e){return[{id:"08B_"+n+"_ACTOR_1",typeId:E_.typeId,position:{x:e.x-1.8,y:Le(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.24:.54}},{id:"08B_"+n+"_ACTOR_2",typeId:E_.typeId,position:{x:e.x+1.8,y:Le(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.34:.64}}]}function pv(n){return new ts({id:"08B_REGION_"+n,pipeline:Dx,store:O2,actorBlueprints:B2(n,Sr[n]),bindActor:e=>ei.bind(n,e),unbindActor:e=>ei.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var Tn={A:pv("A"),B:pv("B")},OA=new mr({entries:[{id:"A",center:Sr.A,region:Tn.A},{id:"B",center:Sr.B,region:Tn.B}]}),BA=new Yi(4.7,5.1,48);BA.rotateX(-Math.PI/2);var F2=new Lt({color:6281423,transparent:!0,opacity:.58,side:Et,depthWrite:!1}),Pu=new ke(BA,F2,2);Pu.frustumCulled=!1;Pu.userData.predictiveHandoffRings08B=!0;var vl=new Be;for(let[n,e]of["A","B"].entries()){let t=Sr[e];vl.position.set(t.x,Le(t.x,t.z)+.04,t.z),vl.rotation.set(0,0,0),vl.scale.setScalar(1),vl.updateMatrix(),Pu.setMatrixAt(n,vl.matrix)}Pu.instanceMatrix.needsUpdate=!0;ye.add(Pu);var Tf=!1,mv=0,B0=0,gv=0,FA="NONE",v_="IDLE",ba="",$l=!1,jl=!1,lp=!1,UA=!1,HA=!1,zA=null,GA=null,S_=0,U2=document.getElementById("handoffStage08B"),H2=document.getElementById("handoffTarget08B"),z2=document.getElementById("handoffPrepared08B"),G2=document.getElementById("handoffConsumed08B"),k2=document.getElementById("handoffFallback08B"),V2=document.getElementById("handoffStates08B"),W2=document.getElementById("handoffActive08B"),X2=document.getElementById("handoffVisited08B"),q2=document.getElementById("handoffRestored08B"),Y2=document.getElementById("handoffAsset08B"),J2=document.getElementById("handoffDuplicates08B"),Z2=document.getElementById("handoffRegression08B"),to=document.getElementById("handoffResult08B");function $t(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function A_(){return["A","B"].filter(n=>Tn[n].isActive)}function b_(){return Tn.A.duplicateCount+Tn.B.duplicateCount+ei.duplicateBindingCount}function _v(n){return Dx.getActor("08B_"+n+"_ACTOR_1")?.kernel?.goals?.progress}async function K2(n,e){if(!Tf){Tf=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let i={x:ne.position.x,z:ne.position.z};M_.updateMotion(i,Date.now());let s=["A","B"].map(c=>({id:c,center:Sr[c],lifecycle:Tn[c].lifecycle})),r=A_(),o=M_.choose({position:i,regions:s,excludeIds:r});if(FA=o?.id??"NONE",o){v_="PREFETCHING "+o.id,await ei.prefetch(o.id,E_,2),v_="PREFETCHED "+o.id;let c=Tn[o.id],l=Math.hypot(i.x-Sr[o.id].x,i.z-Sr[o.id].z);c.lifecycle==="UNLOADED"&&l<=c.loadRadiusM&&ei.preparedCount(o.id)>=2&&(o.id==="B"&&(UA=!0),o.id==="A"&&$l&&(HA=!0))}await OA.step({playerPosition:i,dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});let a=A_();S_=Math.max(S_,a.length),Tn.A.isActive&&!lp&&(lp=!0,zA=_v("A")),Tn.B.isActive&&($l=!0),$l&&Tn.A.isActive&&Tn.A.restoreCount>0&&(jl=!0,GA=_v("A")),ba=""}catch(t){ba=t?.message||String(t)}finally{Tf=!1}}}function kA(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=jl&&Tn.A.lastRestoreIdsStable&&Tn.A.lastRestoreProgressPreserved,t={b_prefetched:UA,a_return_prefetched:HA,prepared_consumed:ei.consumedInstances>=4,fallback_initial_only:ei.fallbackInstances===2,state_restored:e,asset_load_one:cp.assetCache.loadCount===1,duplicates:b_()===0,regression:n==="PASS"},i=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:i.length===0,failed:i,checks:t,regression:n,restored:e}}function $2(){let n=kA(),e=A_(),t=["A","B"].map(r=>Tn[r].lifecycle[0]).join("/"),i=ei.preparedCount("A"),s=ei.preparedCount("B");$t(U2,n.pass?"PASS":ba?"FAIL":globalThis.__livingWorld06J?.stage==="PASS"?"READY":"WAITING REGRESSION",n.pass?"#a8f0b5":ba?"#ff9b9b":"#ffe59a"),$t(H2,FA+" \xB7 "+v_),$t(z2,"A:"+i+" \xB7 B:"+s),$t(G2,String(ei.consumedInstances)),$t(k2,String(ei.fallbackInstances)),$t(V2,t),$t(W2,e.length?e.join(","):"NONE"),$t(X2,(lp?"A":"\u2014")+"\u2192"+($l?"B":"\u2014")+"\u2192"+(jl?"A":"\u2014")),$t(q2,n.restored?"STABLE \u2713":jl?"FAIL":"PENDING",n.restored?"#a8f0b5":"#ffe59a"),$t(Y2,String(cp.assetCache.loadCount),cp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),$t(J2,String(b_()),b_()===0?"#a8f0b5":"#ff9b9b"),$t(Z2,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),ba?$t(to,"HANDOFF FAIL \xB7 "+ba,"#ff9b9b"):n.pass?$t(to,"PREDICTIVE HANDOFF \u2713 \xB7 B PREFETCHED \u2713 \xB7 A RETURN PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?$t(to,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):lp?$l?jl?$t(to,"RETURNED TO A \xB7 VERIFYING PREFETCH / RESTORE","#ffe59a"):$t(to,"B HANDOFF COMPLETE \xB7 RETURN TO REGION A","#ffe59a"):$t(to,"A ACTIVE \xB7 MOVE TOWARD REGION B","#ffe59a"):$t(to,"ENTER REGION A","#ffe59a")}var xv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),VA=(n,e)=>{if(ei.update(e),B0+=Math.max(0,e*1e3),n>=mv&&!Tf){let t=B0/1e3;B0=0,mv=n+100,K2(n,t)}n>=gv&&($2(),gv=n+500)};VA.predictiveHandoffId="08B_PREDICTIVE_HANDOFF";xv.some(n=>n.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF")||xv.push(VA);globalThis.__predictiveHandoff08B={marker:N2,world:OA,regions:Tn,planner:M_,factory:ei,centers:Sr,get proof(){return kA()},get maxActiveRegions(){return S_},get aInitialProgress(){return zA},get aReturnProgress(){return GA}};var j2="08C_BOUNDED_PREFETCH_LIFECYCLE",T_=globalThis.__predictiveHandoff08B,Px=globalThis.__productionActorPipeline07B;if(!T_||!Px)throw new Error("08C requires frozen accepted 08B + 07B runtime");var F0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=F0.length-1;n>=0;n--)F0[n]?.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF"&&F0.splice(n,1);for(let n of[...ye.children])n.userData?.predictiveHandoffRings08B===!0&&ye.remove(n);var Lx=Px.pipeline,up=Px.factory,Ql=Lx.definitions.get("HUMANOID_FORAGER_V1"),ms=new _a({scene:ye,assetCache:up.assetCache}),Ft=new ef({factory:ms,maxPreparedInstances:2}),R_=new ga({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),Q2=new Fi,zn={A:{...T_.centers.A},B:{...T_.centers.B}};function eO(n,e){return[{id:"08C_"+n+"_ACTOR_1",typeId:Ql.typeId,position:{x:e.x-1.8,y:Le(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.26:.56}},{id:"08C_"+n+"_ACTOR_2",typeId:Ql.typeId,position:{x:e.x+1.8,y:Le(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.36:.66}}]}function yv(n){return new ts({id:"08C_REGION_"+n,pipeline:Lx,store:Q2,actorBlueprints:eO(n,zn[n]),bindActor:e=>ms.bind(n,e),unbindActor:e=>ms.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var xn={A:yv("A"),B:yv("B")},WA=new mr({entries:[{id:"A",center:zn.A,region:xn.A},{id:"B",center:zn.B,region:xn.B}]}),XA=new Yi(4.7,5.1,48);XA.rotateX(-Math.PI/2);var tO=new Lt({color:6281423,transparent:!0,opacity:.58,side:Et,depthWrite:!1}),Lu=new ke(XA,tO,2);Lu.frustumCulled=!1;Lu.userData.boundedPrefetchRings08C=!0;var Sl=new Be;for(let[n,e]of["A","B"].entries()){let t=zn[e];Sl.position.set(t.x,Le(t.x,t.z)+.04,t.z),Sl.rotation.set(0,0,0),Sl.scale.setScalar(1),Sl.updateMatrix(),Lu.setMatrixAt(n,Sl.matrix)}Lu.instanceMatrix.needsUpdate=!0;ye.add(Lu);var qA=Le(zn.B.x,zn.B.z),Zp=new mt;Zp.userData.boundedPrefetchBeacon08C=!0;var Nx=new Fe(new bi(.13,.13,18,10,1,!0),new Lt({color:6812927,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));Nx.position.set(zn.B.x,qA+9,zn.B.z);Nx.renderOrder=999;Zp.add(Nx);var Ox=new Fe(new pn(.75,12,8),new Lt({color:12123135,transparent:!0,opacity:.88,depthTest:!1,depthWrite:!1}));Ox.position.set(zn.B.x,qA+18.5,zn.B.z);Ox.renderOrder=1e3;Zp.add(Ox);ye.add(Zp);var Rf=!1,Ev=0,U0=0,Mv=0,Ta="",hp=!1,eu=!1,dp=!1,Bx=!1,Ra=!1,YA=!1,tu=!1,JA=null,ZA=null,KA=0,w_=0,nO=document.getElementById("boundedStage08C"),iO=document.getElementById("boundedTarget08C"),sO=document.getElementById("boundedDistanceB08C"),rO=document.getElementById("boundedBearingB08C"),oO=document.getElementById("boundedPrepared08C"),aO=document.getElementById("boundedCancel08C"),cO=document.getElementById("boundedEvicted08C"),lO=document.getElementById("boundedPeak08C"),uO=document.getElementById("boundedConsumed08C"),hO=document.getElementById("boundedFallback08C"),dO=document.getElementById("boundedStates08C"),fO=document.getElementById("boundedRoute08C"),pO=document.getElementById("boundedRestored08C"),mO=document.getElementById("boundedAsset08C"),gO=document.getElementById("boundedDuplicates08C"),_O=document.getElementById("boundedRegression08C"),is=document.getElementById("boundedResult08C");function It(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}var H0=new I;function xO(){let n=zn.B.x-ne.position.x,e=zn.B.z-ne.position.z,t=Math.hypot(n,e);if(t<.001)return{distance:0,label:"HERE",degrees:0};Kn.getWorldDirection(H0);let i=H0.x,s=H0.z,r=Math.hypot(i,s)||1;i/=r,s/=r;let o=n/t,a=e/t,c=Math.atan2(i*a-s*o,i*o+s*a)*180/Math.PI,l=Math.abs(c),u;return l<=22.5?u="FORWARD":l<=67.5?u=c>0?"FORWARD-RIGHT":"FORWARD-LEFT":l<=112.5?u=c>0?"RIGHT":"LEFT":l<=157.5?u=c>0?"BACK-RIGHT":"BACK-LEFT":u="BACK",{distance:t,label:u,degrees:c}}function vv(){return["A","B"].filter(n=>xn[n].isActive)}function C_(){return xn.A.duplicateCount+xn.B.duplicateCount+ms.duplicateBindingCount}function Sv(n){return Lx.getActor("08C_"+n+"_ACTOR_1")?.kernel?.goals?.progress}async function yO(n){if(!Rf){Rf=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let t=Date.now(),i={x:ne.position.x,z:ne.position.z};R_.updateMotion(i,t);let s=vv(),o=R_.choose({position:i,regions:["A","B"].map(c=>({id:c,center:zn[c],lifecycle:xn[c].lifecycle})),excludeIds:s})?.id??null;if(o!==Ft.targetId?await Ft.retarget(o,Ql,2):o&&Ft.preparedCount(o)<2&&await Ft.retarget(o,Ql,2),o==="B"&&xn.B.lifecycle==="UNLOADED"&&Ft.preparedCount("B")===2){let c=Ft.executionCount("B");c===1&&!eu&&(eu=!0,KA=t),c>=2&&dp&&(Bx=!0)}eu&&!Ra&&Ft.budget.cancellations>=1&&Ft.budget.evictedInstances>=2&&Ft.preparedCount("B")===0&&(dp=!0,w_||(w_=t)),o==="A"&&Ra&&xn.A.lifecycle==="UNLOADED"&&Ft.preparedCount("A")===2&&(YA=!0),await WA.step({playerPosition:i,dtMs:Math.max(0,n*1e3),now:t,foodProgressPerSecond:.004}),Ft.observeAfterWorldStep(),xn.A.isActive&&!hp&&(hp=!0,JA=Sv("A")),xn.B.isActive&&(Ra=!0),Ra&&xn.A.isActive&&xn.A.restoreCount>0&&(tu=!0,ZA=Sv("A"));let a=vv();Ft.targetId&&a.includes(Ft.targetId)&&(await Ft.retarget(null,Ql,2),Ft.observeAfterWorldStep()),Ta=""}catch(e){Ta=e?.message||String(e)}finally{Rf=!1}}}function $A(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=tu&&xn.A.lastRestoreIdsStable===!0&&xn.A.lastRestoreProgressPreserved===!0,t={first_b_prefetch:eu,stale_b_evicted:dp,b_reprefetched:Bx,prepared_consumed:ms.consumedInstances>=4,fallback_initial_only:ms.fallbackInstances===2,pool_bounded:Ft.budget.peakPrepared<=2&&Ft.totalPrepared()<=2,a_return_prefetched:YA,state_restored:e,asset_load_one:up.assetCache.loadCount===1,duplicates:C_()===0,regression:n==="PASS"},i=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:i.length===0,failed:i,checks:t,regression:n,restored:e}}function EO(){let n=$A(),e=Ft.budget,t=["A","B"].map(r=>xn[r].lifecycle[0]).join("/"),i=(hp?"A":"\u2014")+"\u2192"+(Ra?"B":"\u2014")+"\u2192"+(tu?"A":"\u2014");It(nO,n.pass?"PASS":Ta?"FAIL":n.regression==="PASS"?"READY":"WAITING REGRESSION",n.pass?"#a8f0b5":Ta?"#ff9b9b":"#ffe59a"),It(iO,(Ft.targetId||"NONE")+" \xB7 "+Ft.lastAction);let s=xO();It(sO,s.distance.toFixed(1)+" m"),It(rO,s.label+" \xB7 "+Math.round(Math.abs(s.degrees))+"\xB0"),It(oO,"A:"+Ft.preparedCount("A")+" \xB7 B:"+Ft.preparedCount("B")),It(aO,String(e.cancellations),e.cancellations>=1?"#a8f0b5":"#ffe59a"),It(cO,String(e.evictedInstances),e.evictedInstances>=2?"#a8f0b5":"#ffe59a"),It(lO,e.peakPrepared+"/2",e.peakPrepared<=2?"#a8f0b5":"#ff9b9b"),It(uO,String(ms.consumedInstances)),It(hO,String(ms.fallbackInstances)),It(dO,t),It(fO,i),It(pO,n.restored?"STABLE \u2713":tu?"FAIL":"PENDING",n.restored?"#a8f0b5":"#ffe59a"),It(mO,String(up.assetCache.loadCount),up.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),It(gO,String(C_()),C_()===0?"#a8f0b5":"#ff9b9b"),It(_O,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Ta?It(is,"BOUNDED PREFETCH FAIL \xB7 "+Ta,"#ff9b9b"):n.pass?It(is,"BOUNDED PREFETCH \u2713 \xB7 STALE B EVICTED \u2713 \xB7 B RE-PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 POOL BOUNDED 2 \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?It(is,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):hp?eu?dp?Bx?Ra?tu?It(is,"RETURNED TO A \xB7 VERIFYING BOUNDS / RESTORE","#ffe59a"):It(is,"B HANDOFF \u2713 \xB7 RETURN TO REGION A","#ffe59a"):It(is,"B RE-PREFETCHED \u2713 \xB7 ENTER REGION B","#ffe59a"):It(is,"STALE B EVICTED \u2713 \xB7 MOVE TOWARD B AGAIN","#ffe59a"):It(is,"B PREFETCHED \u2713 \xB7 REVERSE TOWARD A BEFORE B ACTIVATES","#ffe59a"):It(is,"MOVE TOWARD B UNTIL PREPARED B = 2","#ffe59a"):It(is,"ENTER REGION A","#ffe59a")}var Av=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),jA=(n,e)=>{if(ms.update(e),U0+=Math.max(0,e*1e3),n>=Ev&&!Rf){let t=U0/1e3;U0=0,Ev=n+100,yO(t)}n>=Mv&&(EO(),Mv=n+500)};jA.boundedPrefetchId="08C_BOUNDED_PREFETCH";Av.some(n=>n.boundedPrefetchId==="08C_BOUNDED_PREFETCH")||Av.push(jA);globalThis.__boundedPrefetch08C={marker:j2,world:WA,regions:xn,planner:R_,factory:ms,controller:Ft,centers:zn,get proof(){return $A()},get firstBPreparedAt(){return KA},get cancellationAt(){return w_},get aInitialProgress(){return JA},get aReturnProgress(){return ZA}};var MO="08D_WORLD_EXPANSION_CERTIFICATION",Nu=globalThis.__boundedPrefetch08C,QA=globalThis.__productionActorPipeline07B;if(!Nu||!QA)throw new Error("08D requires frozen accepted 08C runtime");var En=Nu.regions,Tr=Nu.centers,ds=Nu.factory,mu=Nu.controller,fp=QA.factory,bv=14,pp=["A","B","A","B","A"],eb=3e4,Hs=[],z0=null,mp=0,Oa=0,Ba=0,Fa=0,Zn="",Tv=0,vO=document.getElementById("certStage08D"),SO=document.getElementById("certNext08D"),AO=document.getElementById("certDistance08D"),bO=document.getElementById("certDirection08D"),TO=document.getElementById("certSequence08D"),RO=document.getElementById("certElapsed08D"),wO=document.getElementById("certACycles08D"),CO=document.getElementById("certBCycles08D"),IO=document.getElementById("certActiveActors08D"),DO=document.getElementById("certBindings08D"),PO=document.getElementById("certPrepared08D"),LO=document.getElementById("certConsumed08D"),NO=document.getElementById("certFallback08D"),OO=document.getElementById("certAsset08D"),BO=document.getElementById("certDuplicates08D"),FO=document.getElementById("certRegression08D"),no=document.getElementById("certResult08D");function Bt(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}var G0=new I;function UO(n){let e=Tr[n],t=e.x-ne.position.x,i=e.z-ne.position.z,s=Math.hypot(t,i);if(s<.001)return{distance:0,label:"HERE",degrees:0};Kn.getWorldDirection(G0);let r=G0.x,o=G0.z,a=Math.hypot(r,o)||1;r/=a,o/=a;let c=t/s,l=i/s,u=Math.atan2(r*l-o*c,r*c+o*l)*180/Math.PI,h=Math.abs(u),d;return h<=22.5?d="FORWARD":h<=67.5?d=u>0?"FORWARD-RIGHT":"FORWARD-LEFT":h<=112.5?d=u>0?"RIGHT":"LEFT":h<=157.5?d=u>0?"BACK-RIGHT":"BACK-LEFT":d="BACK",{distance:s,label:d,degrees:u}}function Fx(){return En.A.activeActors.length+En.B.activeActors.length}function gp(){return En.A.duplicateCount+En.B.duplicateCount+ds.duplicateBindingCount}function Rv(n){let e=Tr[n];return Math.hypot(ne.position.x-e.x,ne.position.z-e.z)}function HO(){return En.A.isActive&&Rv("A")<=bv?"A":En.B.isActive&&Rv("B")<=bv?"B":null}function zO(){let n=Math.min(Hs.length,pp.length-1);return pp[n]}function GO(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=HO();Hs.length===0?e==="A"&&(Hs.push("A"),z0="A",mp=Date.now()):e&&e!==z0&&(Hs.push(e),z0=e);let t=Fx(),i=ds.size,s=mu.totalPrepared();Oa=Math.max(Oa,t),Ba=Math.max(Ba,i),Fa=Math.max(Fa,s),mp&&(Oa>4?Zn="ACTIVE ACTORS > 4":Ba>4?Zn="BINDINGS > 4":Fa>2?Zn="PREFETCH POOL > 2":gp()>0?Zn="DUPLICATE STATE":fp.assetCache.loadCount!==1?Zn="ASSET LOAD COUNT CHANGED":ds.fallbackInstances!==2?Zn="FALLBACK COUNT CHANGED":n==="FAIL"&&(Zn="06J REGRESSION FAIL"))}function tb(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=mp?Date.now()-mp:0,i={sequence:pp.every((r,o)=>Hs[o]===r),elapsed:e>=eb,a_restores:En.A.restoreCount>=2,b_restores:En.B.restoreCount>=1,a_unloads:En.A.unloadCount>=2,b_unloads:En.B.unloadCount>=2,prepared_consumed:ds.consumedInstances>=8,fallback_stable:ds.fallbackInstances===2,max_active_actors:Oa<=4,max_bindings:Ba<=4,max_prepared:Fa<=2&&mu.budget.peakPrepared<=2,final_prepared:mu.totalPrepared()===0,final_a_active:En.A.isActive&&En.B.lifecycle==="UNLOADED",final_active_actors:Fx()===2,final_bindings:ds.size===2,asset_load_one:fp.assetCache.loadCount===1,duplicates:gp()===0,regression:n==="PASS",no_violation:!Zn},s=Object.entries(i).filter(([,r])=>!r).map(([r])=>r);return{pass:s.length===0,failed:s,checks:i,elapsed:e,regression:n}}function kO(){let n=tb(),e=zO(),t=UO(e),i=Hs.slice(0,5).join("\u2192")||"\u2014",s=Math.floor(n.elapsed/1e3);Bt(vO,n.pass?"PASS":Zn?"FAIL":n.regression==="PASS"?"RUNNING":"WAITING REGRESSION",n.pass?"#a8f0b5":Zn?"#ff9b9b":"#ffe59a"),Bt(SO,e),Bt(AO,t.distance.toFixed(1)+" m"),Bt(bO,t.label+" \xB7 "+Math.round(Math.abs(t.degrees))+"\xB0"),Bt(TO,i),Bt(RO,s+" / 30 s",s>=30?"#a8f0b5":"#ffe59a"),Bt(wO,"restore "+En.A.restoreCount+" \xB7 unload "+En.A.unloadCount),Bt(CO,"restore "+En.B.restoreCount+" \xB7 unload "+En.B.unloadCount),Bt(IO,Fx()+" \xB7 peak "+Oa+"/4"),Bt(DO,ds.size+" \xB7 peak "+Ba+"/4"),Bt(PO,mu.totalPrepared()+" \xB7 peak "+Math.max(Fa,mu.budget.peakPrepared)+"/2"),Bt(LO,String(ds.consumedInstances)),Bt(NO,String(ds.fallbackInstances),ds.fallbackInstances===2?"#a8f0b5":"#ff9b9b"),Bt(OO,String(fp.assetCache.loadCount),fp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Bt(BO,String(gp()),gp()===0?"#a8f0b5":"#ff9b9b"),Bt(FO,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Zn?Bt(no,"CERTIFICATION FAIL \xB7 "+Zn,"#ff9b9b"):n.pass?Bt(no,"WORLD EXPANSION CERTIFIED \u2713 \xB7 4 HANDOFFS \u2713 \xB7 REPEATED RESTORE \u2713 \xB7 ACTORS BOUNDED 4 \u2713 \xB7 BINDINGS BOUNDED 4 \u2713 \xB7 PREFETCH BOUNDED 2 \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?Bt(no,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):Hs.length===0?Bt(no,"ENTER REGION A TO START CERTIFICATION","#ffe59a"):Hs.length<5?Bt(no,"GO TO "+e+" \xB7 COMPLETE A\u2192B\u2192A\u2192B\u2192A","#ffe59a"):n.elapsed<eb?Bt(no,"ROUTE COMPLETE \u2713 \xB7 HOLD UNTIL 30 s CERT WINDOW","#ffe59a"):Bt(no,"ROUTE COMPLETE \xB7 VERIFYING FINAL LIFECYCLE STATE","#ffe59a")}var nb=Le(Tr.A.x,Tr.A.z),Kp=new mt;Kp.userData.worldExpansionCertificationBeacon08D=!0;var Ux=new Fe(new bi(.13,.13,18,10,1,!0),new Lt({color:16766571,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));Ux.position.set(Tr.A.x,nb+9,Tr.A.z);Ux.renderOrder=999;Kp.add(Ux);var Hx=new Fe(new pn(.75,12,8),new Lt({color:16773037,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}));Hx.position.set(Tr.A.x,nb+18.5,Tr.A.z);Hx.renderOrder=1e3;Kp.add(Hx);ye.add(Kp);var wv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),ib=n=>{GO(),n>=Tv&&(kO(),Tv=n+250)};ib.worldExpansionCertificationId="08D_WORLD_EXPANSION_CERTIFICATION";wv.some(n=>n.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION")||wv.push(ib);globalThis.__worldExpansionCertification08D={marker:MO,requiredSequence:[...pp],get visits(){return[...Hs]},get proof(){return tb()},get maxActiveActors(){return Oa},get maxBindings(){return Ba},get maxPrepared(){return Fa},get violation(){return Zn}};var VO="09B_VERTICAL_BEAUTY_SLICE",_p=globalThis.__boundedPrefetch08C,sb=globalThis.__productionActorPipeline07B;if(!_p||!sb)throw new Error("09B requires frozen Test08 production runtime");var dt={..._p.centers.A},zs=new mt;zs.name="09B_SUNLIT_BASIN";zs.userData.presentationSlice09B=!0;zs.position.set(dt.x,0,dt.z);var Xa=!1,fo="",rb=0,$p=0,jp=0,Cv=0,ob=0,ab=0,WO=document.getElementById("beautyStage09B"),XO=document.getElementById("beautyPlace09B"),qO=document.getElementById("beautyMaterials09B"),YO=document.getElementById("beautyDepth09B"),JO=document.getElementById("beautyMotion09B"),ZO=document.getElementById("beautySliceDraw09B"),KO=document.getElementById("beautySliceTri09B"),$O=document.getElementById("beautyTotalDraw09B"),jO=document.getElementById("beautyTotalTri09B"),QO=document.getElementById("beautyRuntime09B"),e3=document.getElementById("beautyAsset09B"),t3=document.getElementById("beautyDuplicates09B"),n3=document.getElementById("beautyDistance09B"),pf=document.getElementById("beautyResult09B");function an(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function fi(n,e=1){let t=n.index?n.index.count/3:n.getAttribute("position").count/3;return Math.round(t*e)}function ni(n,e){return zs.add(n),jp++,$p+=Math.max(0,Math.round(e)),n}function _o(n,e,t){let i=n.clone();return i.wrapS=i.wrapT=Si,i.repeat.set(e,t),i.needsUpdate=!0,i}function zx(n,{speed:e=.8,strength:t=.12,scale:i=.1}={}){return n.onBeforeCompile=s=>{s.uniforms.uBeautyTime={value:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uBeautyTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float beautyPhase=instanceMatrix[3].x*0.071+instanceMatrix[3].z*0.053;
float beautyWeight=clamp(position.y*0.34,0.0,1.0);
transformed.x+=sin(uBeautyTime*`+e.toFixed(3)+"+beautyPhase+position.y*"+i.toFixed(3)+")*"+t.toFixed(3)+`*beautyWeight;
transformed.z+=cos(uBeautyTime*`+(e*.73).toFixed(3)+"+beautyPhase*1.31)*"+(t*.55).toFixed(3)+`*beautyWeight;
#endif`),n.userData.beautyShader=s},n.customProgramCacheKey=()=>"09B-p2-wind-"+e+"-"+t+"-"+i,n}function Gx(n){let e=(n+24)/50;return e<0||e>1?null:-1.7+6.7*e+2*Math.sin(e*Math.PI*1.15)}function i3(){je.toneMappingExposure=1,Kn.fov=50,Kn.updateProjectionMatrix(),ye.fog&&"density"in ye.fog&&(ye.fog.color.set(12111056),ye.fog.density=.0078),Ol.color.set(13165809),Ol.groundColor.set(4937029),Ol.intensity=1.28,If.color.set(8427941),If.intensity=.1,Nt.color.set(16768942),Nt.intensity=3.65,Nt.position.set(-42,54,14),Nt.target.position.set(dt.x,0,dt.z+8),Nt.target.updateMatrixWorld(),typeof Jn<"u"&&(Jn.top.value.set(5084354),Jn.mid.value.set(11522255),Jn.bottom.value.set(15783850),Jn.sunWarm.value.set(16764034))}function s3(){let n=new oi(66,66,40,40);n.rotateX(-Math.PI/2);let e=n.getAttribute("position"),t=[],i=new re;for(let c=0;c<e.count;c++){let l=e.getX(c),u=e.getZ(c),h=dt.x+l,d=dt.z+u,f=Math.hypot(l,u),m=Math.max(0,(f-21)/12),y=Math.hypot(l+12,u-7),g=Math.max(0,1-y/10.2),p=.07*Math.sin(l*.22)+.05*Math.cos(u*.19)+.025*Math.sin((l+u)*.47),M=.28*m*m-.14*g*g;e.setY(c,Le(h,d)+.055+p+M);let T=Math.max(0,1-y/15),E=.5+.5*Math.sin(l*.17+u*.13)+.22*Math.cos(u*.31),S=.245-T*.018+(E-.5)*.014,A=.31+T*.08,R=.285+T*.045+(E-.5)*.028;i.setHSL(S,A,R),t.push(i.r,i.g,i.b)}n.setAttribute("color",new Oe(t,3)),n.computeVertexNormals();let s=_o(pi,22,22),r=_o(pi,17,17),o=new Te({vertexColors:!0,roughness:.91,metalness:0,bumpMap:s,bumpScale:.085,roughnessMap:r,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Fe(n,o);return a.receiveShadow=!0,a.name="09B meadow ground p2",ni(a,fi(n))}function r3(){let n=ze.layout.pathSegments,e=3.15,t=[],i=[],s=[],r=[],o=[],a=new re;for(let f=0;f<=n;f++){let m=f/n,y=-1.7+6.7*m+2*Math.sin(m*Math.PI*1.15),g=-24+50*m;o.push({x:y,z:g,t:m})}for(let f=0;f<=n;f++){let m=o[Math.max(0,f-1)],y=o[Math.min(n,f+1)],g=y.x-m.x,p=y.z-m.z,M=Math.hypot(g,p)||1;g/=M,p/=M;let T=-p,E=g,S=o[f];for(let A of[-1,1]){let R=S.x+T*e*.5*A,x=S.z+E*e*.5*A,b=Le(dt.x+R,dt.z+x)+.105+.018*Math.sin(S.t*31+A);t.push(R,b,x),s.push(A<0?0:1,S.t*8),a.setHSL(.085,.27,.31+(A<0?.015:-.005)+.02*Math.sin(S.t*17)),r.push(a.r,a.g,a.b)}if(f<n){let A=f*2,R=A+1,x=A+2,b=A+3;i.push(A,x,R,R,x,b)}}let c=new ht;c.setAttribute("position",new Oe(t,3)),c.setAttribute("uv",new Oe(s,2)),c.setAttribute("color",new Oe(r,3)),c.setIndex(i),c.computeVertexNormals();let l=_o(Cf,2.4,14),u=_o(Cf,1.8,11),h=new Te({vertexColors:!0,roughness:.96,metalness:0,bumpMap:l,bumpScale:.13,roughnessMap:u}),d=new Fe(c,h);return d.receiveShadow=!0,d.name="09B soil path p2",ni(d,fi(c))}function o3(){let n=ze.layout.shoreSegments,e=[],t=[],i=[],s=new re,r=-12,o=7;for(let u=0;u<=n;u++){let h=u/n*Math.PI*2;for(let d of[0,1]){let f=d?10.15:8.25,m=r+Math.cos(h)*f,y=o+Math.sin(h)*f,g=Le(dt.x+m,dt.z+y)+(d?.085:.105);e.push(m,g,y),d?s.setHSL(.2,.22,.27):s.setHSL(.12,.18,.235),i.push(s.r,s.g,s.b)}if(u<n){let d=u*2;t.push(d,d+2,d+1,d+1,d+2,d+3)}}let a=new ht;a.setAttribute("position",new Oe(e,3)),a.setAttribute("color",new Oe(i,3)),a.setIndex(t),a.computeVertexNormals();let c=new Te({vertexColors:!0,roughness:.88,metalness:0,bumpMap:_o(pi,8,8),bumpScale:.07}),l=new Fe(a,c);return l.receiveShadow=!0,l.name="09B wet shoreline p2",ni(l,fi(a))}function a3(){let n=new vc(8.4,72);n.rotateX(-Math.PI/2);let e=Le(dt.x-12,dt.z+7)+.14,t=new nn({transparent:!0,depthWrite:!1,side:Et,uniforms:{uBeautyTime:{value:0},uDeep:{value:new re(2510689)},uShallow:{value:new re(6989470)},uSky:{value:new re(9291986)},uSun:{value:new re(16766355)},uSunDir:{value:new I(-.56,.78,.2).normalize()}},vertexShader:["uniform float uBeautyTime;","varying vec2 vLocal;","varying vec3 vWorld;","varying vec3 vNormalW;","void main(){"," vec3 p=position;"," float ax=(p.x+uBeautyTime*.95)*.72;"," float az=(p.z-uBeautyTime*.62)*.91;"," float w=sin(ax)*.075+cos(az)*.052+sin((p.x+p.z)*.43+uBeautyTime*.41)*.028;"," p.y+=w;"," float dx=.054*cos(ax)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);"," float dz=-.047*sin(az)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);"," vec3 n=normalize(vec3(-dx,1.0,-dz));"," vec4 wp=modelMatrix*vec4(p,1.0);"," vWorld=wp.xyz;"," vNormalW=normalize(mat3(modelMatrix)*n);"," vLocal=p.xz/8.4;"," vec4 mvPosition=viewMatrix*wp;"," gl_Position=projectionMatrix*mvPosition;","}"].join(`
`),fragmentShader:["uniform vec3 uDeep;","uniform vec3 uShallow;","uniform vec3 uSky;","uniform vec3 uSun;","uniform vec3 uSunDir;","uniform float uBeautyTime;","varying vec2 vLocal;","varying vec3 vWorld;","varying vec3 vNormalW;","void main(){"," float r=length(vLocal);"," vec3 N=normalize(vNormalW);"," vec3 V=normalize(cameraPosition-vWorld);"," float fres=pow(1.0-max(dot(N,V),0.0),3.0);"," float sparkle=pow(max(dot(reflect(-uSunDir,N),V),0.0),72.0);"," float ripple=.5+.5*sin((vLocal.x*23.0-vLocal.y*17.0)+uBeautyTime*1.25);"," float shallow=smoothstep(.0,.92,r);"," vec3 col=mix(uDeep,uShallow,.32+.42*shallow);"," col=mix(col,uSky,.18+.47*fres);"," col+=uSun*sparkle*(.75+.25*ripple);"," float foam=smoothstep(.82,.985,r)*(1.0-smoothstep(.985,1.0,r));"," col=mix(col,vec3(.82,.90,.82),foam*.48);"," float alpha=(.72+.12*fres)*(1.0-smoothstep(.985,1.0,r));"," gl_FragColor=vec4(col,alpha);","}"].join(`
`)}),i=new Fe(n,t);return i.position.set(-12,e,7),i.renderOrder=3,i.name="09B water p2",i.userData.timeUniform=t.uniforms.uBeautyTime,ni(i,fi(n))}function c3(n){let e=new bi(.42,.64,7,8,2),t=new Te({color:16777215,roughness:.91,metalness:0,bumpMap:_o(pi,5,12),bumpScale:.095}),i=new ke(e,t,ze.layout.trees);i.castShadow=!0,i.receiveShadow=!0,i.name="09B tree trunks p2";let s=new sr(2.65,1),r=zx(new Te({color:16777215,roughness:.82,metalness:0}),{speed:.74,strength:.18,scale:.5}),o=new ke(s,r,ze.layout.trees);o.castShadow=!0,o.receiveShadow=!0,o.name="09B canopy p2";let a=new Be,c=new re;for(let l=0;l<ze.layout.trees;l++){let u=l/ze.layout.trees*Math.PI*2+(n()-.5)*.22,h=22.2+n()*9,d=Math.cos(u)*h,f=Math.sin(u)*h;f>13&&Math.abs(d-4)<8&&(d+=d<4?-7:7);let m=Le(dt.x+d,dt.z+f),y=.82+n()*.42;a.position.set(d,m+3.5*y,f),a.rotation.set(0,n()*Math.PI*2,0),a.scale.set(.82+n()*.34,y,.82+n()*.34),a.updateMatrix(),i.setMatrixAt(l,a.matrix),c.setHSL(.075+(n()-.5)*.018,.37,.22+n()*.06),i.setColorAt(l,c),a.position.set(d+(n()-.5)*.55,m+7.45*y,f+(n()-.5)*.55),a.rotation.set((n()-.5)*.11,n()*Math.PI*2,(n()-.5)*.11),a.scale.set(1+n()*.52,.78+n()*.46,1+n()*.52),a.updateMatrix(),o.setMatrixAt(l,a.matrix),c.setHSL(.29+(n()-.5)*.035,.38+n()*.1,.27+n()*.075),o.setColorAt(l,c)}return i.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),o.instanceColor&&(o.instanceColor.needsUpdate=!0),ni(i,fi(e,ze.layout.trees)),ni(o,fi(s,ze.layout.trees)),r}function l3(){let n=new Float32Array([-.1,0,0,.1,0,0,-.065,.9,0,.065,.9,0,0,0,-.1,0,0,.1,0,.9,-.065,0,.9,.065]),e=new ht;return e.setAttribute("position",new Ut(n,3)),e.setIndex([0,1,2,1,3,2,4,5,6,5,7,6]),e.computeVertexNormals(),e}function u3(n){let e=l3(),t=zx(new Te({color:16777215,roughness:.84,metalness:0,side:Et}),{speed:1.26,strength:.13,scale:.88}),i=new ke(e,t,ze.layout.grassTufts);i.name="09B grass blades p2";let s=new Be,r=new re,o=0;for(;o<ze.layout.grassTufts;){let a=(n()*2-1)*31,c=(n()*2-1)*31;if(a*a+c*c>961||Math.hypot(a+12,c-7)<10.2)continue;let l=Gx(c);if(l!==null&&Math.abs(a-l)<2.25)continue;let u=Le(dt.x+a,dt.z+c);s.position.set(a,u+.055,c),s.rotation.set((n()-.5)*.045,n()*Math.PI*2,(n()-.5)*.045);let h=.55+n()*1.05;s.scale.set(.7+n()*.55,h,.7+n()*.55),s.updateMatrix(),i.setMatrixAt(o,s.matrix);let d=Math.max(0,1-Math.hypot(a+12,c-7)/18);r.setHSL(.265-d*.025+(n()-.5)*.025,.43+n()*.08,.31+n()*.075),i.setColorAt(o,r),o++}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ni(i,fi(e,ze.layout.grassTufts)),t}function h3(n){let e=new Wn(.7,0),t=zx(new Te({color:16777215,roughness:.86,metalness:0}),{speed:.82,strength:.08,scale:.62}),i=new ke(e,t,ze.layout.shrubs);i.name="09B understory shrubs p2";let s=new Be,r=new re,o=0;for(;o<ze.layout.shrubs;){let a=n()*Math.PI*2,c=13.5+n()*14.5,l=Math.cos(a)*c,u=Math.sin(a)*c;if(Math.hypot(l+12,u-7)<10.4)continue;let h=Gx(u);if(h!==null&&Math.abs(l-h)<3.2)continue;let d=Le(dt.x+l,dt.z+u);s.position.set(l,d+.55,u),s.rotation.set((n()-.5)*.13,n()*Math.PI*2,(n()-.5)*.13),s.scale.set(.7+n()*.9,.52+n()*.8,.7+n()*.9),s.updateMatrix(),i.setMatrixAt(o,s.matrix),r.setHSL(.3+(n()-.5)*.035,.4+n()*.13,.235+n()*.09),i.setColorAt(o,r),o++}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ni(i,fi(e,ze.layout.shrubs)),t}function d3(n){let e=new Ac(.1,0),t=new Te({color:16777215,roughness:.66,metalness:0,emissive:2365191,emissiveIntensity:.1}),i=new ke(e,t,ze.layout.flowers);i.name="09B flowers p2";let s=new Be,r=new re,o=0;for(;o<ze.layout.flowers;){let a=(n()*2-1)*25,c=(n()*2-1)*25;if(Math.hypot(a+12,c-7)<10)continue;let l=Gx(c);if(l!==null&&Math.abs(a-l)<2)continue;let u=Le(dt.x+a,dt.z+c);s.position.set(a,u+.22+n()*.22,c),s.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI);let h=.55+n()*.92;s.scale.setScalar(h),s.updateMatrix(),i.setMatrixAt(o,s.matrix);let d=o%4;d===0?r.set(16045175):d===1?r.set(15181731):d===2?r.set(13157871):r.set(15789792),r.offsetHSL((n()-.5)*.02,0,(n()-.5)*.05),i.setColorAt(o,r),o++}i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ni(i,fi(e,ze.layout.flowers))}function f3(n){let e=[],t=[],i=new re,s=ze.layout.ridgeLayers,r=ze.layout.ridgeSegments;function o(c,l,u,h){e.push(c,l,u),t.push(h.r,h.g,h.b)}for(let c=0;c<s;c++){let l=49+c*13,u=-44-c*5,d=(88+c*10)/r;for(let f=0;f<r;f++){let m=u+f*d,y=m+d,g=(m+y)*.5+(n()-.5)*1.6,p=Le(dt.x+m,dt.z+l)-.3,M=Le(dt.x+y,dt.z+l)-.3,T=Math.max(p,M)+9+c*3+n()*9,E=l+5.5+n()*3,S=T-(1.2+n()*3),A=.35-c*.035+n()*.025;i.setHSL(.56,.14+c*.015,A);let R=i.clone();i.setHSL(.57,.12,A-.055);let x=i.clone();i.setHSL(.55,.11,A-.085);let b=i.clone();o(m,p,l,x),o(g,T,l,R),o(y,M,l,x),o(m,p,l,x),o(g,S,E,b),o(g,T,l,R),o(g,T,l,R),o(g,S,E,b),o(y,M,l,x)}}let a=new ht;return a.setAttribute("position",new Oe(e,3)),a.setAttribute("color",new Oe(t,3)),a.computeVertexNormals(),a}function p3(n){let e=_o(pi,5,5),t=new Te({color:16777215,vertexColors:!1,roughness:.91,metalness:0,bumpMap:e,bumpScale:.11}),i=new Be,s=new re,r=new Wn(.7,0),o=new ke(r,t,ze.layout.rocks);o.name="09B rocks p2",o.castShadow=!0,o.receiveShadow=!0;for(let g=0;g<ze.layout.rocks;g++){let p=n()*Math.PI*2,M=8+n()*21,T=Math.cos(p)*M,E=Math.sin(p)*M;if(Math.hypot(T+12,E-7)<9)continue;let S=Le(dt.x+T,dt.z+E);i.position.set(T,S+.25,E),i.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI),i.scale.set(.55+n()*1.55,.38+n()*.85,.55+n()*1.35),i.updateMatrix(),o.setMatrixAt(g,i.matrix),s.setHSL(.17+(n()-.5)*.035,.08+n()*.07,.4+n()*.12),o.setColorAt(g,s)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),ni(o,fi(r,ze.layout.rocks));let a=f3(n),c=new Te({vertexColors:!0,roughness:.96,metalness:0,side:Et,fog:!0}),l=new Fe(a,c);l.receiveShadow=!1,l.castShadow=!1,l.name="09B layered ridge p2",ni(l,fi(a));let u=5,h=25,d=Le(dt.x+u,dt.z+h),f=new qi(1.25,1.1,1.5),m=new ke(f,t,ze.layout.gateBlocks);m.name="09B weathered stone gate p2",m.castShadow=!0,m.receiveShadow=!0;let y=0;for(let g of[-1,1])for(let p=0;p<5;p++)i.position.set(u+g*2.45,d+.65+p*1.16,h+(n()-.5)*.16),i.rotation.set((n()-.5)*.04,(n()-.5)*.1,(n()-.5)*.055),i.scale.set(.96+n()*.1,.95+n()*.1,.94+n()*.12),i.updateMatrix(),m.setMatrixAt(y,i.matrix),s.setHSL(.15+(n()-.5)*.025,.07+n()*.04,.43+n()*.09),m.setColorAt(y,s),y++;for(let g=0;g<4;g++)i.position.set(u-1.8+g*1.2,d+6.25+Math.sin(g*.9)*.15,h+(n()-.5)*.14),i.rotation.set((n()-.5)*.04,(n()-.5)*.06,(g-1.5)*-.025),i.scale.set(1.08,1,.98),i.updateMatrix(),m.setMatrixAt(y,i.matrix),s.setHSL(.15,.075,.46+n()*.07),m.setColorAt(y,s),y++;m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),ni(m,fi(f,ze.layout.gateBlocks))}function m3(n){let e=new Float32Array(ze.layout.pollen*3);for(let r=0;r<ze.layout.pollen;r++){let o=r*3;e[o]=(n()*2-1)*31,e[o+1]=1+n()*9.5,e[o+2]=(n()*2-1)*31}let t=new ht;t.setAttribute("position",new Ut(e,3));let i=new nn({transparent:!0,depthWrite:!1,blending:Fc,uniforms:{uBeautyTime:{value:0}},vertexShader:["uniform float uBeautyTime;","void main(){"," vec3 p=position;"," float phase=p.x*.17+p.z*.11;"," p.x+=sin(uBeautyTime*.31+phase)*.65;"," p.y+=sin(uBeautyTime*.43+phase*1.7)*.35;"," p.z+=cos(uBeautyTime*.27+phase)*.42;"," vec4 mvPosition=modelViewMatrix*vec4(p,1.0);"," gl_Position=projectionMatrix*mvPosition;"," gl_PointSize=clamp(18.0/max(1.0,-mvPosition.z),1.0,3.0);","}"].join(`
`),fragmentShader:["void main(){"," vec2 q=gl_PointCoord-.5;"," float d=length(q);"," float a=smoothstep(.5,.06,d)*.40;"," gl_FragColor=vec4(1.0,.84,.50,a);","}"].join(`
`)}),s=new zr(t,i);s.name="09B airborne pollen p2",s.userData.timeUniform=i.uniforms.uBeautyTime,ni(s,0)}function g3(){if(Xa)return;ob=je.info.render.calls||0,ab=je.info.render.triangles||0;let n=_M(),e=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let a=e.length-1;a>=0;a--)e[a]?.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION"&&e.splice(a,1);for(let a of[...ye.children])(a.userData?.worldExpansionCertificationBeacon08D===!0||a.userData?.boundedPrefetchBeacon08C===!0||a.userData?.boundedPrefetchRings08C===!0)&&ye.remove(a);i3(),s3(),r3(),o3();let t=a3(),i=c3(n),s=u3(n),r=h3(n);d3(n),p3(n),m3(n);let o=zs.children.find(a=>a.name==="09B airborne pollen p2");zs.userData.animatedMaterials=[i,s,r,t.material,o?.material].filter(Boolean),ye.add(zs),Xa=!0,rb=performance.now()}function _3(){let n=_p.factory,e=_p.regions,t=(e.A?.duplicateCount||0)+(e.B?.duplicateCount||0)+(n?.duplicateBindingCount||0);return{assetLoads:sb.factory.assetCache.loadCount,duplicates:t}}function cb(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=_3(),t=je.info.render.calls||0,i=je.info.render.triangles||0,s={slice_built:Xa,presentation_pass:ze.presentationPass===2,materials:ze.materialFamilies.length===6,depth_layers:ze.depthLayers.length===5,motion_systems:ze.ambientMotionSystems.length===4,human_review_required:ze.acceptance.humanPresentationReviewRequired===!0,no_automated_acceptance:ze.acceptance.automatedProofIsPresentationAcceptance===!1,slice_drawables:jp<=ze.presentationBudget.addedDrawCallsMax,slice_triangles:$p<=ze.presentationBudget.addedTrianglesMax,total_draw_calls:t<=ze.presentationBudget.absoluteDrawCallsMax,total_triangles:i<=ze.presentationBudget.absoluteTrianglesMax,asset_load_one:e.assetLoads===1,duplicates_zero:e.duplicates===0,regression:n==="PASS",no_build_error:!fo},r=Object.entries(s).filter(([,o])=>!o).map(([o])=>o);return{ready:!1,automatedReady:r.length===0,humanReviewRequired:!0,failed:r,checks:s,calls:t,tris:i,inv:e,regression:n}}function x3(){let n=cb(),e=Math.hypot(ne.position.x-dt.x,ne.position.z-dt.z);an(WO,n.automatedReady?"HUMAN REVIEW":fo?"FAIL":n.regression==="PASS"?"BUILDING":"WAITING 06J",n.automatedReady?"#ffe59a":fo?"#ff9b9b":"#ffe59a"),an(XO,ze.name+" \xB7 P2"),an(qO,ze.materialFamilies.length+"/6"),an(YO,ze.depthLayers.length+"/5"),an(JO,ze.ambientMotionSystems.length+"/4"),an(ZO,jp+" / "+ze.presentationBudget.addedDrawCallsMax),an(KO,$p.toLocaleString()+" / "+ze.presentationBudget.addedTrianglesMax.toLocaleString()),an($O,n.calls+" / "+ze.presentationBudget.absoluteDrawCallsMax,n.calls<=120?"#bdf3c8":"#ff9b9b"),an(jO,n.tris.toLocaleString()+" / "+ze.presentationBudget.absoluteTrianglesMax.toLocaleString(),n.tris<=35e4?"#bdf3c8":"#ff9b9b"),an(QO,n.regression,n.regression==="PASS"?"#bdf3c8":"#ffe59a"),an(e3,String(n.inv.assetLoads),n.inv.assetLoads===1?"#bdf3c8":"#ff9b9b"),an(t3,String(n.inv.duplicates),n.inv.duplicates===0?"#bdf3c8":"#ff9b9b"),an(n3,e.toFixed(1)+" m"),fo?an(pf,"SLICE BUILD FAIL \xB7 "+fo,"#ff9b9b"):n.automatedReady?an(pf,"STRUCTURAL/RUNTIME PASS \u2713 \xB7 PRESENTATION PASS 2 \u2713 \xB7 HUMAN VISUAL REVIEW REQUIRED","#ffe59a"):n.regression!=="PASS"?an(pf,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):an(pf,"BUILDING SUNLIT BASIN PRESENTATION PASS 2","#ffe59a")}var Iv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),lb=n=>{try{if((globalThis.__livingWorld06J?.stage||"WAITING")==="PASS"&&!Xa&&!fo&&g3(),Xa){let t=(n-rb)/1e3;for(let i of zs.userData.animatedMaterials||[]){let s=i?.userData?.beautyShader;s?.uniforms?.uBeautyTime&&(s.uniforms.uBeautyTime.value=t),i?.uniforms?.uBeautyTime&&(i.uniforms.uBeautyTime.value=t)}}n>=Cv&&(x3(),Cv=n+400)}catch(e){fo=e?.message||String(e)}};lb.verticalBeautySliceId="09B_VERTICAL_BEAUTY_SLICE";Iv.some(n=>n.verticalBeautySliceId==="09B_VERTICAL_BEAUTY_SLICE")||Iv.push(lb);globalThis.__verticalBeautySlice09B={marker:VO,spec:ze,root:zs,center:dt,get built(){return Xa},get presentationTriangles(){return $p},get presentationDrawables(){return jp},get baselineCalls(){return ob},get baselineTriangles(){return ab},get proof(){return cb()}};
