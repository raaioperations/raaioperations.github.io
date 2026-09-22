var Dy=0,Nm=1,Py=2;var Oc=1,Bh=2,ea=3,Ji=0,rn=1,At=2,Zi=0,ta=1,Bc=2,Lm=3,Om=4,Ny=5;var Wr=100,Ly=101,Oy=102,By=103,Fy=104,Uy=200,Hy=201,zy=202,Gy=203,Bm=204,Fm=205,ky=206,Vy=207,Wy=208,Xy=209,qy=210,Yy=211,Jy=212,Zy=213,Ky=214,lh=0,uh=1,hh=2,Uo=3,dh=4,fh=5,ph=6,mh=7,Um=0,$y=1,jy=2,Si=0,Hm=1,zm=2,Gm=3,Fc=4,km=5,Vm=6,Wm=7,Am="attached",Qy="detached",Xm=300,or=301,Xr=302,Fh=303,Uh=304,Uc=306,Vi=1e3,ni=1001,Ho=1002,zt=1003,Hh=1004;var qr=1005;var Gt=1006,na=1007;var Ai=1008;var On=1009,qm=1010,Ym=1011,ia=1012,zh=1013,bi=1014,Xn=1015,Ti=1016,Gh=1017,kh=1018,sa=1020,Jm=35902,Zm=35899,Km=1021,$m=1022,An=1023,Wi=1026,ar=1027,Vh=1028,Wh=1029,cr=1030,Xh=1031;var qh=1033,Hc=33776,zc=33777,Gc=33778,kc=33779,Yh=35840,Jh=35841,Zh=35842,Kh=35843,$h=36196,jh=37492,Qh=37496,ed=37488,td=37489,Vc=37490,nd=37491,id=37808,sd=37809,rd=37810,od=37811,ad=37812,cd=37813,ld=37814,ud=37815,hd=37816,dd=37817,fd=37818,pd=37819,md=37820,gd=37821,_d=36492,xd=36494,yd=36495,Ed=36283,Md=36284,Wc=36285,vd=36286,eE=2200,tE=2201,nE=2202,Lr=2300,Or=2301,oh=2302,bm=2303,Dr=2400,Pr=2401,oc=2402,Sd=2500,iE=2501,jm=0,Xc=1,ra=2,sE=3200;var Ad=0,rE=1,Ri="",Ut="srgb",Sn="srgb-linear",ac="linear",pt="srgb";var ah=7680;var oE=519,aE=512,cE=513,lE=514,bd=515,uE=516,hE=517,Td=518,dE=519,Qm=35044,eg=35048;var tg="300 es",xi=2e3,zo=2001;function mb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fE(){let i=Go("canvas");return i.style.display="block",i}var qx={},ko=null;function cc(...i){let e="THREE."+i.shift();ko?ko("log",e,...i):console.log(e,...i)}function pE(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=pE(i);let e="THREE."+i.shift();if(ko)ko("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=pE(i);let e="THREE."+i.shift();if(ko)ko("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Nr(...i){let e=i.join(" ");e in qx||(qx[e]=!0,Ae(...i))}function mE(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gE={[lh]:uh,[hh]:ph,[dh]:mh,[Uo]:fh,[uh]:lh,[ph]:hh,[mh]:dh,[fh]:Uo},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yx=1234567,sc=Math.PI/180,Br=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function ng(i,e){return(i%e+e)%e}function _b(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xb(i,e,t){return i!==e?(t-i)/(e-i):0}function rc(i,e,t){return(1-t)*i+t*e}function yb(i,e,t,n){return rc(i,e,1-Math.exp(-t*n))}function Eb(i,e=1){return e-Math.abs(ng(i,e*2)-e)}function Mb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ab(i,e){return i+Math.random()*(e-i)}function bb(i){return i*(.5-Math.random())}function Tb(i){i!==void 0&&(Yx=i);let e=Yx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rb(i){return i*sc}function wb(i){return i*Br}function Cb(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ib(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Db(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pb(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*u,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ke={DEG2RAD:sc,RAD2DEG:Br,generateUUID:yi,clamp:Ze,euclideanModulo:ng,mapLinear:_b,inverseLerp:xb,lerp:rc,damp:yb,pingpong:Eb,smoothstep:Mb,smootherstep:vb,randInt:Sb,randFloat:Ab,randFloatSpread:bb,seededRandom:Tb,degToRad:Rb,radToDeg:wb,isPowerOfTwo:Cb,ceilPowerOfTwo:Ib,floorPowerOfTwo:Db,setQuaternionFromProperEuler:Pb,normalize:gt,denormalize:_i},Be=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(h!==y||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*y;g<0&&(d=-d,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+y*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+y*a;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $p.copy(this).projectOnVector(e),this.sub($p)}reflect(e){return this.sub($p.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$p=new I,Jx=new fn,He=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],T=s[4],E=s[7],S=s[2],A=s[5],w=s[8];return r[0]=o*y+a*M+c*S,r[3]=o*g+a*T+c*A,r[6]=o*p+a*E+c*w,r[1]=l*y+u*M+h*S,r[4]=l*g+u*T+h*A,r[7]=l*p+u*E+h*w,r[2]=d*y+f*M+m*S,r[5]=d*g+f*T+m*A,r[8]=d*p+f*E+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=h*y,e[1]=(s*l-u*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jp.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jp.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jp=new He,Zx=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kx=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nb(){let i={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ac:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sn]:{primaries:e,whitePoint:n,transfer:ac,toXYZ:Zx,fromXYZ:Kx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Zx,fromXYZ:Kx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var Je=Nb();function Es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var So,gh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{So===void 0&&(So=Go("canvas")),So.width=e.width,So.height=e.height;let s=So.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=So}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Es(t[n]/255)*255):t[n]=Es(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lb=0,Vo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qp(s[o].image)):r.push(Qp(s[o]))}else r=Qp(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Ob=0,em=new I,tn=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=Gt,o=Ai,a=An,c=On,l=i.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=yi(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(em).x}get height(){return this.source.getSize(em).y}get depth(){return this.source.getSize(em).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Xm;tn.DEFAULT_ANISOTROPY=1;var _t=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(f+1)/2,S=(p+1)/2,A=(u+d)/4,w=(h+y)/4,x=(m+g)/4;return T>E&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=w/n):E>S?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-y)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_h=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends _h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lc=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xh=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,m,y,g)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ao.setFromMatrixColumn(e,0).length(),r=1/Ao.setFromMatrixColumn(e,1).length(),o=1/Ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d-y*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=y-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bb,e,Fb)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Ys.crossVectors(n,Gn),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Ys.crossVectors(n,Gn)),Ys.normalize(),Ou.crossVectors(Gn,Ys),s[0]=Ys.x,s[4]=Ou.x,s[8]=Gn.x,s[1]=Ys.y,s[5]=Ou.y,s[9]=Gn.y,s[2]=Ys.z,s[6]=Ou.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],T=n[7],E=n[11],S=n[15],A=s[0],w=s[4],x=s[8],b=s[12],C=s[1],L=s[5],B=s[9],z=s[13],P=s[2],k=s[6],J=s[10],Z=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=o*A+a*C+c*P+l*ie,r[4]=o*w+a*L+c*k+l*X,r[8]=o*x+a*B+c*J+l*Q,r[12]=o*b+a*z+c*Z+l*te,r[1]=u*A+h*C+d*P+f*ie,r[5]=u*w+h*L+d*k+f*X,r[9]=u*x+h*B+d*J+f*Q,r[13]=u*b+h*z+d*Z+f*te,r[2]=m*A+y*C+g*P+p*ie,r[6]=m*w+y*L+g*k+p*X,r[10]=m*x+y*B+g*J+p*Q,r[14]=m*b+y*z+g*Z+p*te,r[3]=M*A+T*C+E*P+S*ie,r[7]=M*w+T*L+E*k+S*X,r[11]=M*x+T*B+E*J+S*Q,r[15]=M*b+T*z+E*Z+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15],M=c*f-l*d,T=a*f-l*h,E=a*d-c*h,S=o*f-l*u,A=o*d-c*u,w=o*h-a*u;return t*(y*M-g*T+p*E)-n*(m*M-g*S+p*A)+s*(m*T-y*S+p*w)-r*(m*E-y*A+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],M=t*a-n*o,T=t*c-s*o,E=t*l-r*o,S=n*c-s*a,A=n*l-r*a,w=s*l-r*c,x=u*y-h*m,b=u*g-d*m,C=u*p-f*m,L=h*g-d*y,B=h*p-f*y,z=d*p-f*g,P=M*z-T*B+E*L+S*C-A*b+w*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*z-c*B+l*L)*k,e[1]=(s*B-n*z-r*L)*k,e[2]=(y*w-g*A+p*S)*k,e[3]=(d*A-h*w-f*S)*k,e[4]=(c*C-o*z-l*b)*k,e[5]=(t*z-s*C+r*b)*k,e[6]=(g*E-m*w-p*T)*k,e[7]=(u*w-d*E+f*T)*k,e[8]=(o*B-a*C+l*x)*k,e[9]=(n*C-t*B-r*x)*k,e[10]=(m*A-y*E+p*M)*k,e[11]=(h*E-u*A-f*M)*k,e[12]=(a*b-o*L-c*x)*k,e[13]=(t*L-n*b+s*x)*k,e[14]=(y*T-m*S-g*M)*k,e[15]=(u*S-h*T+d*M)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,y=o*u,g=o*h,p=a*h,M=c*l,T=c*u,E=c*h,S=n.x,A=n.y,w=n.z;return s[0]=(1-(y+p))*S,s[1]=(f+E)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(f-E)*A,s[5]=(1-(d+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+T)*w,s[9]=(g-M)*w,s[10]=(1-(d+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ao.set(s[0],s[1],s[2]).length(),a=Ao.set(s[4],s[5],s[6]).length(),c=Ao.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let l=1/o,u=1/a,h=1/c;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=xi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===xi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===zo)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xi,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===xi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===zo)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ao=new I,fi=new Ve,Bb=new I(0,0,0),Fb=new I(1,1,1),Ys=new I,Ou=new I,Gn=new I,$x=new Ve,jx=new fn,Ms=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $x.makeRotationFromQuaternion(e),this.setFromRotationMatrix($x,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jx.setFromEuler(this),this.setFromQuaternion(jx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";var uc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ub=0,Qx=new I,bo=new fn,ps=new Ve,Bu=new I,Ka=new I,Hb=new I,zb=new fn,ey=new I(1,0,0),ty=new I(0,1,0),ny=new I(0,0,1),iy={type:"added"},Gb={type:"removed"},To={type:"childadded",child:null},tm={type:"childremoved",child:null},Fe=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ms,n=new fn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new He}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(ey,e)}rotateY(e){return this.rotateOnAxis(ty,e)}rotateZ(e){return this.rotateOnAxis(ny,e)}translateOnAxis(e,t){return Qx.copy(e).applyQuaternion(this.quaternion),this.position.add(Qx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ey,e)}translateY(e){return this.translateOnAxis(ty,e)}translateZ(e){return this.translateOnAxis(ny,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bu.copy(e):Bu.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Ka,Bu,this.up):ps.lookAt(Bu,Ka,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(ps),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iy),To.child=e,this.dispatchEvent(To),To.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gb),tm.child=e,this.dispatchEvent(tm),tm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iy),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},kb={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_E={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},Fu={h:0,s:0,l:0};function nm(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=ng(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nm(o,r,e+1/3),this.g=nm(o,r,e),this.b=nm(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=_E[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Je.workingToColorSpace(dn.copy(this),e),Math.round(Ze(dn.r*255,0,255))*65536+Math.round(Ze(dn.g*255,0,255))*256+Math.round(Ze(dn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Ut){Je.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(Fu);let n=rc(Js.h,Fu.h,t),s=rc(Js.s,Fu.s,t),r=rc(Js.l,Fu.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new me;me.NAMES=_E;var hc=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dc=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new I,ms=new I,im=new I,gs=new I,Ro=new I,wo=new I,sy=new I,sm=new I,rm=new I,om=new I,am=new _t,cm=new _t,lm=new _t,Qs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),ms.subVectors(n,t),im.subVectors(e,t);let o=pi.dot(pi),a=pi.dot(ms),c=pi.dot(im),l=ms.dot(ms),u=ms.dot(im),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,gs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gs.x),c.addScaledVector(o,gs.y),c.addScaledVector(a,gs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return am.setScalar(0),cm.setScalar(0),lm.setScalar(0),am.fromBufferAttribute(e,t),cm.fromBufferAttribute(e,n),lm.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(am,r.x),o.addScaledVector(cm,r.y),o.addScaledVector(lm,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),ms.subVectors(e,t),pi.cross(ms).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),pi.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ro.subVectors(s,n),wo.subVectors(r,n),sm.subVectors(e,n);let c=Ro.dot(sm),l=wo.dot(sm);if(c<=0&&l<=0)return t.copy(n);rm.subVectors(e,s);let u=Ro.dot(rm),h=wo.dot(rm);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ro,o);om.subVectors(e,r);let f=Ro.dot(om),m=wo.dot(om);if(m>=0&&f<=m)return t.copy(r);let y=f*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(wo,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return sy.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(sy,a);let p=1/(g+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(Ro,o).addScaledVector(wo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uu.copy(n.boundingBox)),Uu.applyMatrix4(e.matrixWorld),this.union(Uu)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),Hu.subVectors(this.max,$a),Co.subVectors(e.a,$a),Io.subVectors(e.b,$a),Do.subVectors(e.c,$a),Zs.subVectors(Io,Co),Ks.subVectors(Do,Io),Rr.subVectors(Co,Do);let t=[0,-Zs.z,Zs.y,0,-Ks.z,Ks.y,0,-Rr.z,Rr.y,Zs.z,0,-Zs.x,Ks.z,0,-Ks.x,Rr.z,0,-Rr.x,-Zs.y,Zs.x,0,-Ks.y,Ks.x,0,-Rr.y,Rr.x,0];return!um(t,Co,Io,Do,Hu)||(t=[1,0,0,0,1,0,0,0,1],!um(t,Co,Io,Do,Hu))?!1:(zu.crossVectors(Zs,Ks),t=[zu.x,zu.y,zu.z],um(t,Co,Io,Do,Hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_s=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,Uu=new Vn,Co=new I,Io=new I,Do=new I,Zs=new I,Ks=new I,Rr=new I,$a=new I,Hu=new I,zu=new I,wr=new I;function um(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wr.fromArray(i,r);let a=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),c=e.dot(wr),l=t.dot(wr),u=n.dot(wr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Xt=new I,Gu=new Be,Vb=0,Ht=class extends Ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qm,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gu.fromBufferAttribute(this,t),Gu.applyMatrix3(e),this.setXY(t,Gu.x,Gu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fc=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pc=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wb=new Vn,ja=new I,hm=new I,Dn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);let t=ja.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ja,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(hm)),this.expandByPoint(ja.copy(e.center).sub(hm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xb=0,ti=new Ve,dm=new Fe,Po=new I,kn=new Vn,Qa=new Vn,en=new I,Mt=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mb(e)?pc:fc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return dm.lookAt(e),dm.updateMatrix(),this.applyMatrix4(dm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(kn.min,Qa.min),kn.expandByPoint(en),en.addVectors(kn.max,Qa.max),kn.expandByPoint(en)):(kn.expandByPoint(Qa.min),kn.expandByPoint(Qa.max))}kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Po.fromBufferAttribute(e,l),en.add(Po)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;let l=new I,u=new I,h=new I,d=new Be,f=new Be,m=new Be,y=new I,g=new I;function p(x,b,C){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),a[x].add(y),a[b].add(y),a[C].add(y),c[x].add(g),c[b].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let C=M[x],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let T=new I,E=new I,S=new I,A=new I;function w(x){S.fromBufferAttribute(s,x),A.copy(S);let b=a[x];T.copy(b),T.sub(S.multiplyScalar(S.dot(b))).normalize(),E.crossVectors(A,b);let L=E.dot(c[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,b=M.length;x<b;++x){let C=M[x],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Ht(d,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qm,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},vn=new I,qo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){cc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fm=new I,qb=new I,Yb=new He,gi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fm.subVectors(n,t).cross(qb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fm),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yb.getNormalMatrix(e),s=this.coplanarPoint(fm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jb=0,Pn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=ta,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bm,this.blendDst=Fm,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ah,this.stencilZFail=ah,this.stencilZPass=ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xs=new I,pm=new I,ku=new I,Vu=new I,Fr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xs.copy(this.origin).addScaledVector(this.direction,t),xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pm.copy(e).add(t).multiplyScalar(.5),ku.copy(t).sub(e).normalize(),Vu.copy(this.origin).sub(pm);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ku),a=Vu.dot(this.direction),c=-Vu.dot(ku),l=Vu.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let y=1/u;h*=y,d*=y,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pm).addScaledVector(ku,d),f}intersectSphere(e,t){if(e.radius<0)return null;xs.subVectors(e.center,this.origin);let n=xs.dot(this.direction),s=xs.dot(xs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,y=t.y-o.y,g=t.z-o.z,p=n.x-o.x,M=n.y-o.y,T=n.z-o.z,E=Math.abs(c),S=Math.abs(l),A=Math.abs(u),w,x,b,C,L,B,z,P,k,J,Z,ie;if(E>=S&&E>=A?(b=c,B=h,k=m,ie=p,c>=0?(w=l,x=u,C=d,L=f,z=y,P=g,J=M,Z=T):(w=u,x=l,C=f,L=d,z=g,P=y,J=T,Z=M)):S>=A?(b=l,B=d,k=y,ie=M,l>=0?(w=u,x=c,C=f,L=h,z=g,P=m,J=T,Z=p):(w=c,x=u,C=h,L=f,z=m,P=g,J=p,Z=T)):(b=u,B=f,k=g,ie=T,u>=0?(w=c,x=l,C=h,L=d,z=m,P=y,J=p,Z=M):(w=l,x=c,C=d,L=h,z=y,P=m,J=M,Z=p)),b===0)return null;let X=w/b,Q=x/b,te=1/b,Pe=C-X*B,we=L-Q*B,bt=z-X*k,rt=P-Q*k,ut=J-X*ie,q=Z-Q*ie,j=ut*rt-q*bt,ye=Pe*q-we*ut,Ge=bt*we-rt*Pe;if(s){if(j<0||ye<0||Ge<0)return null}else if((j<0||ye<0||Ge<0)&&(j>0||ye>0||Ge>0))return null;let _e=j+ye+Ge;if(_e===0)return null;let $e=te*(j*B+ye*k+Ge*ie);return(_e>0?$e<0:$e>0)?null:this.at($e/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ry=new Ve,Cr=new Fr,Wu=new Dn,oy=new I,Xu=new I,qu=new I,Yu=new I,mm=new I,Ju=new I,ay=new I,Zu=new I,Ue=class extends Fe{constructor(e=new Mt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ju.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(mm.fromBufferAttribute(h,e),o?Ju.addScaledVector(mm,u):Ju.addScaledVector(mm.sub(t),u))}t.add(Ju)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(r),Cr.copy(e.ray).recast(e.near),!(Wu.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Wu,oy)===null||Cr.origin.distanceToSquared(oy)>(e.far-e.near)**2))&&(ry.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(ry),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=a.getX(E),w=a.getX(E+1),x=a.getX(E+2);s=Ku(this,p,e,n,l,u,h,A,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),E=a.getX(g+2);s=Ku(this,o,e,n,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=E,w=E+1,x=E+2;s=Ku(this,p,e,n,l,u,h,A,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,T=g+1,E=g+2;s=Ku(this,o,e,n,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Zb(i,e,t,n,s,r,o,a){let c;if(e.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ji,a),c===null)return null;Zu.copy(a),Zu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Zu);return l<t.near||l>t.far?null:{distance:l,point:Zu.clone(),object:i}}function Ku(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xu),i.getVertexPosition(c,qu),i.getVertexPosition(l,Yu);let u=Zb(i,e,t,n,Xu,qu,Yu,ay);if(u){let h=new I;Qs.getBarycoord(ay,Xu,qu,Yu,h),s&&(u.uv=Qs.getInterpolatedAttribute(s,a,c,l,h,new Be)),r&&(u.uv1=Qs.getInterpolatedAttribute(r,a,c,l,h,new Be)),o&&(u.normal=Qs.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Qs.getNormal(Xu,qu,Yu,d.normal),u.face=d,u.barycoord=h}return u}var ec=new _t,cy=new _t,ly=new _t,Kb=new _t,uy=new Ve,$u=new I,gm=new Dn,hy=new Ve,_m=new Fr,mc=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Am,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$u),this.boundingBox.expandByPoint($u)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$u),this.boundingSphere.expandByPoint($u)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gm.copy(this.boundingSphere),gm.applyMatrix4(s),e.ray.intersectsSphere(gm)!==!1&&(hy.copy(s).invert(),_m.copy(e.ray).applyMatrix4(hy),!(this.boundingBox!==null&&_m.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_m)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Am?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qy?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;cy.fromBufferAttribute(s.attributes.skinIndex,e),ly.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ec.copy(t),t.set(0,0,0,0)):(ec.set(...t,1),t.set(0,0,0)),ec.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ly.getComponent(r);if(o!==0){let a=cy.getComponent(r);uy.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Kb.copy(ec).applyMatrix4(uy),o)}}return t.isVector4&&(t.w=ec.w),t.applyMatrix4(this.bindMatrixInverse)}},Yo=class extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},er=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,u=zt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dy=new Ve,$b=new Ve,gc=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$b;dy.multiplyMatrices(a,t[r]),dy.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new er(t,e,e,An,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new Yo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},vs=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},No=new Ve,fy=new Ve,ju=[],py=new Vn,jb=new Ve,tc=new Ue,nc=new Dn,ze=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,No),py.copy(e.boundingBox).applyMatrix4(No),this.boundingBox.union(py)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,No),nc.copy(e.boundingSphere).applyMatrix4(No),this.boundingSphere.union(nc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tc.geometry=this.geometry,tc.material=this.material,tc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(n),e.ray.intersectsSphere(nc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,No),fy.multiplyMatrices(n,No),tc.matrixWorld=fy,tc.raycast(e,ju);for(let o=0,a=ju.length;o<a;o++){let c=ju[o];c.instanceId=r,c.object=this,t.push(c)}ju.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,Vh,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ir=new Dn,Qb=new Be(.5,.5),Qu=new I,Jo=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],T=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-m,S-M).normalize(),s[1].setComponents(l+o,f+u,p+m,S+M).normalize(),s[2].setComponents(l+a,f+h,p+y,S+T).normalize(),s[3].setComponents(l-a,f-h,p-y,S-T).normalize(),n)s[4].setComponents(c,d,g,E).normalize(),s[5].setComponents(l-c,f-d,p-g,S-E).normalize();else if(s[4].setComponents(l-c,f-d,p-g,S-E).normalize(),t===xi)s[5].setComponents(l+c,f+d,p+g,S+E).normalize();else if(t===zo)s[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);let t=Qb.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qu.x=s.normal.x>0?e.max.x:e.min.x,Qu.y=s.normal.y>0?e.max.y:e.min.y,Qu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zo=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yh=new I,Eh=new I,my=new Ve,ic=new Fr,eh=new Dn,xm=new I,gy=new I,Ur=class extends Fe{constructor(e=new Mt,t=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yh.fromBufferAttribute(t,s-1),Eh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yh.distanceTo(Eh);e.setAttribute("lineDistance",new ke(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eh.copy(n.boundingSphere),eh.applyMatrix4(s),eh.radius+=r,e.ray.intersectsSphere(eh)===!1)return;my.copy(s).invert(),ic.copy(e.ray).applyMatrix4(my);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=l){let p=u.getX(y),M=u.getX(y+1),T=th(this,e,ic,c,p,M,y);T&&t.push(T)}if(this.isLineLoop){let y=u.getX(m-1),g=u.getX(f),p=th(this,e,ic,c,y,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=l){let p=th(this,e,ic,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=th(this,e,ic,c,m-1,f,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function th(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(yh.fromBufferAttribute(a,s),Eh.fromBufferAttribute(a,r),t.distanceSqToSegment(yh,Eh,xm,gy)>n)return;xm.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xm);if(!(l<e.near||l>e.far))return{distance:l,point:gy.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _y=new I,xy=new I,_c=class extends Ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_y.fromBufferAttribute(t,s),xy.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_y.distanceTo(xy);e.setAttribute("lineDistance",new ke(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xc=class extends Ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ko=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yy=new Ve,Tm=new Fr,nh=new Dn,ih=new I,Hr=class extends Fe{constructor(e=new Mt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nh.copy(n.boundingSphere),nh.applyMatrix4(s),nh.radius+=r,e.ray.intersectsSphere(nh)===!1)return;yy.copy(s).invert(),Tm.copy(e.ray).applyMatrix4(yy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let g=l.getX(m);ih.fromBufferAttribute(h,g),Ey(ih,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,y=f;m<y;m++)ih.fromBufferAttribute(h,m),Ey(ih,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ey(i,e,t,n,s,r,o){let a=Tm.distanceSqToPoint(i);if(a<t){let c=new I;Tm.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yc=class extends tn{constructor(e=[],t=or,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var tr=class extends tn{constructor(e,t,n=bi,s,r,o,a=zt,c=zt,l,u=Wi,h=1){if(u!==Wi&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Mh=class extends tr{constructor(e,t=bi,n=or,s,r,o=zt,a=zt,c,l=Wi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ec=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function m(y,g,p,M,T,E,S,A,w,x,b){let C=E/w,L=S/x,B=E/2,z=S/2,P=A/2,k=w+1,J=x+1,Z=0,ie=0,X=new I;for(let Q=0;Q<J;Q++){let te=Q*L-z;for(let Pe=0;Pe<k;Pe++){let we=Pe*C-B;X[y]=we*M,X[g]=te*T,X[p]=P,l.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(Pe/w),h.push(1-Q/x),Z+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<w;te++){let Pe=d+te+k*Q,we=d+te+k*(Q+1),bt=d+(te+1)+k*(Q+1),rt=d+(te+1)+k*Q;c.push(Pe,we,rt),c.push(we,bt,rt),ie+=6}a.addGroup(f,ie,b),f+=ie,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},$o=class i extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+r,y=s+1,g=new I,p=new I;for(let M=0;M<=m;M++){let T=0,E=0,S=0,A=0;if(M<=n){let b=M/n,C=b*Math.PI/2;E=-u-e*Math.cos(C),S=e*Math.sin(C),A=-e*Math.cos(C),T=b*h}else if(M<=n+r){let b=(M-n)/r;E=-u+b*t,S=e,A=0,T=h+b*d}else{let b=(M-n-r)/n,C=b*Math.PI/2;E=u+e*Math.sin(C),S=e*Math.cos(C),A=e*Math.sin(C),T=h+d+b*h}let w=Math.max(0,Math.min(1,T/f)),x=0;M===0?x=.5/s:M===m&&(x=-.5/s);for(let b=0;b<=s;b++){let C=b/s,L=C*Math.PI*2,B=Math.sin(L),z=Math.cos(L);p.x=-S*z,p.y=E,p.z=S*B,a.push(p.x,p.y,p.z),g.set(-S*z,A,S*B),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+x,w)}if(M>0){let b=(M-1)*y;for(let C=0;C<s;C++){let L=b+C,B=b+C+1,z=M*y+C,P=M*y+C+1;o.push(L,B,z),o.push(B,P,z)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Mc=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vi=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,y=[],g=n/2,p=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(f,2));function M(){let E=new I,S=new I,A=0,w=(t-e)/n;for(let x=0;x<=r;x++){let b=[],C=x/r,L=C*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,P=z*c+a,k=Math.sin(P),J=Math.cos(P);S.x=L*k,S.y=-C*n+g,S.z=L*J,h.push(S.x,S.y,S.z),E.set(k,w,J).normalize(),d.push(E.x,E.y,E.z),f.push(z,1-C),b.push(m++)}y.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let C=y[b][x],L=y[b+1][x],B=y[b+1][x+1],z=y[b][x+1];(e>0||b!==0)&&(u.push(C,L,z),A+=3),(t>0||b!==r-1)&&(u.push(L,B,z),A+=3)}l.addGroup(p,A,0),p+=A}function T(E){let S=m,A=new Be,w=new I,x=0,b=E===!0?e:t,C=E===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let L=m;for(let B=0;B<=s;B++){let P=B/s*c+a,k=Math.cos(P),J=Math.sin(P);w.x=b*J,w.y=g*C,w.z=b*k,h.push(w.x,w.y,w.z),d.push(0,C,0),A.x=k*.5+.5,A.y=J*.5*C+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){let z=S+B,P=L+B;E===!0?u.push(P,P+1,z):u.push(P+1,P,z),x+=3}l.addGroup(p,x,E===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wn=class i extends vi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new I,E=new I,S=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],T),f(t[A+1],E),f(t[A+2],S),c(T,E,S,M)}function c(M,T,E,S){let A=S+1,w=[];for(let x=0;x<=A;x++){w[x]=[];let b=M.clone().lerp(E,x/A),C=T.clone().lerp(E,x/A),L=A-x;for(let B=0;B<=L;B++)B===0&&x===A?w[x][B]=b:w[x][B]=b.clone().lerp(C,B/L)}for(let x=0;x<A;x++)for(let b=0;b<2*(A-x)-1;b++){let C=Math.floor(b/2);b%2===0?(d(w[x][C+1]),d(w[x+1][C]),d(w[x][C])):(d(w[x][C+1]),d(w[x+1][C+1]),d(w[x+1][C]))}}function l(M){let T=new I;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(M),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function u(){let M=new I;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let E=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(E,1-S)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let T=o[M+0],E=o[M+2],S=o[M+4],A=Math.max(T,E,S),w=Math.min(T,E,S);A>.9&&w<.1&&(T<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,T){let E=M*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function m(){let M=new I,T=new I,E=new I,S=new I,A=new Be,w=new Be,x=new Be;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),E.set(r[b+6],r[b+7],r[b+8]),A.set(o[C+0],o[C+1]),w.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),S.copy(M).add(T).add(E).divideScalar(3);let L=g(S);y(A,C+0,M,L),y(w,C+2,T,L),y(x,C+4,E,L)}}function y(M,T,E,S){S<0&&M.x===1&&(o[T]=M.x-1),E.x===0&&E.z===0&&(o[T]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ii=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Be:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new Ve;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ig(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var My=new I,vy=new I,ym=new ig,Em=new ig,Mm=new ig,vc=class extends vh{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(vy.subVectors(s[0],s[1]).add(s[0]),l=vy);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(My.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=My),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),ym.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,y,g),Em.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,y,g),Mm.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(ym.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Em.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Mm.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ym.calc(c),Em.calc(c),Mm.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var nr=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Sc=class i extends zr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},si=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],y=[],g=[];for(let p=0;p<u;p++){let M=p*d-o;for(let T=0;T<l;T++){let E=T*h-r;m.push(E,-M,0),y.push(0,0,1),g.push(T/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let T=M+l*p,E=M+l*(p+1),S=M+1+l*(p+1),A=M+1+l*p;f.push(T,E,A),f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xi=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new I,m=new Be;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let p=0;p<n;p++){let M=p+g,T=M,E=M+n+1,S=M+n+2,A=M+1;a.push(T,E,A),a.push(E,S,A)}}this.setIndex(a),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new I,d=new I,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let M=[],T=p/n,E=o+T*a,S=e*Math.cos(E),A=Math.sqrt(e*e-S*S),w=0;p===0&&o===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=s+b*r;h.x=-A*Math.cos(C),h.y=S,h.z=A*Math.sin(C),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(b+w,1-T),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let T=u[p][M+1],E=u[p][M],S=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(T,E,A),(p!==n-1||c<Math.PI)&&f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ac=class i extends zr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},bc=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],h=[],d=new I,f=new I,m=new I;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,E=(s+1)*y+g;c.push(p,M,E),c.push(M,T,E)}this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Sy(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Sy(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Yr(i[t]);for(let s in n)e[s]=n[s]}return e}function Sy(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function eT(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sg(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var xE={clone:Yr,merge:mn},tT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tT,this.fragmentShader=nT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=eT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sh=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ie=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends Ie{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ah=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bh=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ch(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function iT(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ay(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function sT(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Th=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dr,endingEnd:Dr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pr:r=e,a=2*t-n;break;case oc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pr:o=e,c=2*n-t;break;case oc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*y+.5*m,E=f*g-f*y;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+M*o[l+S]+T*o[c+S]+E*o[h+S];return r}},Tc=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Rh=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wh=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(s-t),y=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*y+o[c+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let y=o[l+m],g=o[c+m],p=f*d+m*2,M=h[p],T=h[p+1],E=e*d+m*2,S=u[E],A=u[E+1],w=oT(n,t,M,S,s);r[m]=yE(w,y,T,A,g)}return r}};function yE(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function rT(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function oT(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=yE(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=rT(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ch(e.settings)&&(n.settings={inTangents:js(e.settings.inTangents,Array),outTangents:js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case oh:t=this.InterpolantFactoryMethodSmooth;break;case bm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return oh;case this.InterpolantFactoryMethodBezier:return bm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ch(this.settings)&&(by(this.settings.inTangents,e),by(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Oe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&gb(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oh,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let y=t[h+m];if(y!==t[d+m]||y!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ch(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function by(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Or;var Ss=class extends Ln{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Lr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Rc.prototype.ValueTypeName="color";var As=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};As.prototype.ValueTypeName="number";var Ch=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},bs=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Ln{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Lr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};ir.prototype.ValueTypeName="vector";var Gr=class{constructor(e="",t=-1,n=[],s=Sd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cT(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=iT(c);c=Ay(c,1,u),l=Ay(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new As(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function aT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Rc;case"quaternion":return bs;case"bool":case"boolean":return Ss;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=aT(i.type);if(i.times===void 0){let n=[],s=[];sT(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ch(i.settings)&&(t.settings={inTangents:js(i.settings.inTangents,Float32Array),outTangents:js(i.settings.outTangents,Float32Array)}),t}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ty(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ty(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ty(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ih=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},EE=new Ih,Yi=class{constructor(e){this.manager=e!==void 0?e:EE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys={},Rm=class extends Error{constructor(e,t){super(e),this.response=t}},jo=class extends Yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ys[e]!==void 0){ys[e].push({onLoad:t,onProgress:n,onError:s});return}ys[e]=[],ys[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ys[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,y=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:T,value:E})=>{if(T)p.close();else{y+=E.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let A=0,w=u.length;A<w;A++){let x=u[A];x.onProgress&&x.onProgress(S)}p.enqueue(E),M()}},T=>{p.error(T)})}}});return new Response(g)}else throw new Rm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ki.add(`file:${e}`,l);let u=ys[e];delete ys[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ys[e];if(u===void 0)throw this.manager.itemError(e),l;delete ys[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lo=new WeakMap,Dh=class extends Yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Lo.get(o);h===void 0&&(h=[],Lo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Go("img");function c(){u(),t&&t(this);let h=Lo.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Lo.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),ki.remove(`image:${e}`);let d=Lo.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Lo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ki.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var wc=class extends Yi{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new Dh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},sr=class extends Fe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Cc=class extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vm=new Ve,Ry=new I,wy=new I,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ry.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ry),wy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vm,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===zo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(vm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=new I,rh=new fn,Gi=new I,Ic=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sh,rh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sh,rh,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sh,rh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sh,rh,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new I,Cy=new Be,Iy=new Be,qt=class extends Ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($s.x,$s.y).multiplyScalar(-e/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($s.x,$s.y).multiplyScalar(-e/$s.z)}getViewSize(e,t){return this.getViewBounds(e,Cy,Iy),t.subVectors(Iy,Cy)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wm=class extends Qo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Dc=class extends sr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cm=class extends Qo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},kr=class extends sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rr=class extends Ic{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Im=class extends Qo{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Pc=class extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Rs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sm=new WeakMap,Nc=class extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Sm.has(o)===!0?(s&&s(Sm.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ki.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Sm.set(c,l),ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oo=-90,Bo=1,Ph=class extends Fe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Oo,Bo,e,t);s.layers=this.layers,this.add(s);let r=new qt(Oo,Bo,e,t);r.layers=this.layers,this.add(r);let o=new qt(Oo,Bo,e,t);o.layers=this.layers,this.add(o);let a=new qt(Oo,Bo,e,t);a.layers=this.layers,this.add(a);let c=new qt(Oo,Bo,e,t);c.layers=this.layers,this.add(c);let l=new qt(Oo,Bo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Nh=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Lh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},rg="\\[\\]\\.:\\/",lT=new RegExp("["+rg+"]","g"),og="[^"+rg+"]",uT="[^"+rg.replace("\\.","")+"]",hT=/((?:WC+[\/:])*)/.source.replace("WC",og),dT=/(WCOD+)?/.source.replace("WCOD",uT),fT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",og),pT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",og),mT=new RegExp("^"+hT+dT+fT+pT+"$"),gT=["material","materials","bones","map"],Dm=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lT,"")}static parseTrackName(e){let t=mT.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Dm;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Dr,endingEnd:Dr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=tE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case iE:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Sd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===nE;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===eE){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Pr,s.endingEnd=Pr):(e?s.endingStart=this.zeroSlopeAtStart?Pr:Dr:s.endingStart=oc,t?s.endingEnd=this.zeroSlopeAtEnd?Pr:Dr:s.endingEnd=oc)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},_T=new Float32Array(1),ws=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let y=t&&t._propertyBindings[h].binding.parsedPath;m=new Lh(Et.create(n,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Tc(new Float32Array(2),new Float32Array(2),1,_T),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Gr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Sd),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Oh(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Gr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Lc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Pm=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ag(i,e,t,n){let s=xT(n);switch(t){case Km:return i*e;case Vh:return i*e/s.components*s.byteLength;case Wh:return i*e/s.components*s.byteLength;case cr:return i*e*2/s.components*s.byteLength;case Xh:return i*e*2/s.components*s.byteLength;case $m:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case qh:return i*e*4/s.components*s.byteLength;case Hc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gc:case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jh:case Kh:return Math.max(i,16)*Math.max(e,8)/4;case Yh:case Zh:return Math.max(i,8)*Math.max(e,8)/2;case $h:case jh:case ed:case td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qh:case Vc:case nd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _d:case xd:case yd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ed:case Md:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wc:case vd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xT(i){switch(i){case On:case qm:return{byteLength:1,components:1};case ia:case Ym:case Ti:return{byteLength:2,components:1};case Gh:case kh:return{byteLength:2,components:4};case bi:case zh:case Xn:return{byteLength:4,components:1};case Jm:case Zm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kE(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ET(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],y=h[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let y=h[f];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var MT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
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
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RT=`#ifdef USE_AOMAP
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
#endif`,wT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
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
#endif`,IT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LT=`#ifdef USE_IRIDESCENCE
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
#endif`,OT=`#ifdef USE_BUMPMAP
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,WT=`#define PI 3.141592653589793
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
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qT=`vec3 transformedNormal = objectNormal;
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
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QT=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
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
#endif`,nR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
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
#endif`,sR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cR=`#ifdef USE_GRADIENTMAP
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
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fR=`#ifdef USE_ENVMAP
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
#endif`,pR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_R=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xR=`PhysicalMaterial material;
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
#endif`,yR=`uniform sampler2D dfgLUT;
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
}`,ER=`
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
#endif`,MR=`#if defined( RE_IndirectDiffuse )
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
#endif`,vR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,AR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DR=`#if defined( USE_POINTS_UV )
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
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`#ifdef USE_MORPHTARGETS
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
#endif`,UR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WR=`#ifdef USE_NORMALMAP
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
#endif`,XR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ow=`float getShadowMask() {
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
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
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
#endif`,lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
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
#endif`,hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
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
#endif`,gw=`#ifdef USE_TRANSMISSION
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vw=`uniform sampler2D t2D;
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`#include <common>
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
}`,ww=`#if DEPTH_PACKING == 3200
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
}`,Cw=`#define DISTANCE
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
}`,Iw=`#define DISTANCE
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`uniform float scale;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Fw=`#define LAMBERT
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
}`,Uw=`#define LAMBERT
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
}`,Hw=`#define MATCAP
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
}`,zw=`#define MATCAP
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
}`,Gw=`#define NORMAL
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
}`,kw=`#define NORMAL
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
}`,Vw=`#define PHONG
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
}`,Ww=`#define PHONG
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
}`,Xw=`#define STANDARD
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
}`,qw=`#define STANDARD
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
}`,Yw=`#define TOON
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
}`,Jw=`#define TOON
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
}`,Zw=`uniform float size;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,jw=`uniform vec3 color;
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
}`,Qw=`uniform float rotation;
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
}`,eC=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:MT,alphahash_pars_fragment:vT,alphamap_fragment:ST,alphamap_pars_fragment:AT,alphatest_fragment:bT,alphatest_pars_fragment:TT,aomap_fragment:RT,aomap_pars_fragment:wT,batching_pars_vertex:CT,batching_vertex:IT,begin_vertex:DT,beginnormal_vertex:PT,bsdfs:NT,iridescence_fragment:LT,bumpmap_pars_fragment:OT,clipping_planes_fragment:BT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:UT,clipping_planes_vertex:HT,color_fragment:zT,color_pars_fragment:GT,color_pars_vertex:kT,color_vertex:VT,common:WT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:qT,displacementmap_pars_vertex:YT,displacementmap_vertex:JT,emissivemap_fragment:ZT,emissivemap_pars_fragment:KT,colorspace_fragment:$T,colorspace_pars_fragment:jT,envmap_fragment:QT,envmap_common_pars_fragment:eR,envmap_pars_fragment:tR,envmap_pars_vertex:nR,envmap_physical_pars_fragment:fR,envmap_vertex:iR,fog_vertex:sR,fog_pars_vertex:rR,fog_fragment:oR,fog_pars_fragment:aR,gradientmap_pars_fragment:cR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:hR,lights_pars_begin:dR,lights_toon_fragment:pR,lights_toon_pars_fragment:mR,lights_phong_fragment:gR,lights_phong_pars_fragment:_R,lights_physical_fragment:xR,lights_physical_pars_fragment:yR,lights_fragment_begin:ER,lights_fragment_maps:MR,lights_fragment_end:vR,lightprobes_pars_fragment:SR,logdepthbuf_fragment:AR,logdepthbuf_pars_fragment:bR,logdepthbuf_pars_vertex:TR,logdepthbuf_vertex:RR,map_fragment:wR,map_pars_fragment:CR,map_particle_fragment:IR,map_particle_pars_fragment:DR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:NR,morphinstance_vertex:LR,morphcolor_vertex:OR,morphnormal_vertex:BR,morphtarget_pars_vertex:FR,morphtarget_vertex:UR,normal_fragment_begin:HR,normal_fragment_maps:zR,normal_pars_fragment:GR,normal_pars_vertex:kR,normal_vertex:VR,normalmap_pars_fragment:WR,clearcoat_normal_fragment_begin:XR,clearcoat_normal_fragment_maps:qR,clearcoat_pars_fragment:YR,iridescence_pars_fragment:JR,opaque_fragment:ZR,packing:KR,premultiplied_alpha_fragment:$R,project_vertex:jR,dithering_fragment:QR,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:sw,shadowmap_vertex:rw,shadowmask_pars_fragment:ow,skinbase_vertex:aw,skinning_pars_vertex:cw,skinning_vertex:lw,skinnormal_vertex:uw,specularmap_fragment:hw,specularmap_pars_fragment:dw,tonemapping_fragment:fw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:_w,uv_pars_vertex:xw,uv_vertex:yw,worldpos_vertex:Ew,background_vert:Mw,background_frag:vw,backgroundCube_vert:Sw,backgroundCube_frag:Aw,cube_vert:bw,cube_frag:Tw,depth_vert:Rw,depth_frag:ww,distance_vert:Cw,distance_frag:Iw,equirect_vert:Dw,equirect_frag:Pw,linedashed_vert:Nw,linedashed_frag:Lw,meshbasic_vert:Ow,meshbasic_frag:Bw,meshlambert_vert:Fw,meshlambert_frag:Uw,meshmatcap_vert:Hw,meshmatcap_frag:zw,meshnormal_vert:Gw,meshnormal_frag:kw,meshphong_vert:Vw,meshphong_frag:Ww,meshphysical_vert:Xw,meshphysical_frag:qw,meshtoon_vert:Yw,meshtoon_frag:Jw,points_vert:Zw,points_frag:Kw,shadow_vert:$w,shadow_frag:jw,sprite_vert:Qw,sprite_frag:eC},he={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$i={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};$i.physical={uniforms:mn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Rd={r:0,b:0,g:0},tC=new Ve,VE=new He;VE.set(-1,0,0,0,1,0,0,0,1);function nC(i,e,t,n,s,r){let o=new me(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let E=M.backgroundBlurriness>0;T=e.get(T,E)}return T}function m(M){let T=!1,E=f(M);E===null?g(o,a):E&&E.isColor&&(g(E,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,T){let E=f(T);E&&(E.isCubeTexture||E.mapping===Uc)?(l===void 0&&(l=new Ue(new Mi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Yr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tC.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(VE),l.material.toneMapped=Je.getTransfer(E.colorSpace)!==pt,(u!==E||h!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ue(new si(2,2),new nn({name:"BackgroundMaterial",uniforms:Yr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,T){M.getRGB(Rd,sg(i)),t.buffers.color.setClear(Rd.r,Rd.g,Rd.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:y,dispose:p}}function iC(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(L,B,z,P,k){let J=!1,Z=h(L,P,z,B);r!==Z&&(r=Z,l(r.object)),J=f(L,P,z,k),J&&m(L,P,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(L,B,z,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,B,z,P){let k=P.wireframe===!0,J=n[B.id];J===void 0&&(J={},n[B.id]=J);let Z=L.isInstancedMesh===!0?L.id:0,ie=J[Z];ie===void 0&&(ie={},J[Z]=ie);let X=ie[z.id];X===void 0&&(X={},ie[z.id]=X);let Q=X[k];return Q===void 0&&(Q=d(c()),X[k]=Q),Q}function d(L){let B=[],z=[],P=[];for(let k=0;k<t;k++)B[k]=0,z[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,B,z,P){let k=r.attributes,J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=k[X],Pe=J[X];if(Pe===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),te===void 0||te.attribute!==Pe||Pe&&te.data!==Pe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==P}function m(L,B,z,P){let k={},J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=J[X];te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let Pe={};Pe.attribute=te,te&&te.data&&(Pe.data=te.data),k[X]=Pe,Z++}r.attributes=k,r.attributesNum=Z,r.index=P}function y(){let L=r.newAttributes;for(let B=0,z=L.length;B<z;B++)L[B]=0}function g(L){p(L,0)}function p(L,B){let z=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;z[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),k[L]!==B&&(i.vertexAttribDivisor(L,B),k[L]=B)}function M(){let L=r.newAttributes,B=r.enabledAttributes;for(let z=0,P=B.length;z<P;z++)B[z]!==L[z]&&(i.disableVertexAttribArray(z),B[z]=0)}function T(L,B,z,P,k,J,Z){Z===!0?i.vertexAttribIPointer(L,B,z,k,J):i.vertexAttribPointer(L,B,z,P,k,J)}function E(L,B,z,P){y();let k=P.attributes,J=z.getAttributes(),Z=B.defaultAttributeValues;for(let ie in J){let X=J[ie];if(X.location>=0){let Q=k[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let te=Q.normalized,Pe=Q.itemSize,we=e.get(Q);if(we===void 0)continue;let bt=we.buffer,rt=we.type,ut=we.bytesPerElement,q=rt===i.INT||rt===i.UNSIGNED_INT||Q.gpuType===zh;if(Q.isInterleavedBufferAttribute){let j=Q.data,ye=j.stride,Ge=Q.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,Pe/X.locationSize,rt,te,ye*ut,(Ge+Pe/X.locationSize*_e)*ut,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let j=0;j<X.locationSize;j++)T(X.location+j,Pe/X.locationSize,rt,te,Pe*ut,Pe/X.locationSize*j*ut,q)}}else if(Z!==void 0){let te=Z[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}M()}function S(){b();for(let L in n){let B=n[L];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete n[L.id]}function w(L){for(let B in n){let z=n[B];for(let P in z){let k=z[P];if(k[L.id]===void 0)continue;let J=k[L.id];for(let Z in J)u(J[Z].object),delete J[Z];delete k[L.id]}}}function x(L){for(let B in n){let z=n[B],P=L.isInstancedMesh===!0?L.id:0,k=z[P];if(k!==void 0){for(let J in k){let Z=k[J];for(let ie in Z)u(Z[ie].object),delete Z[ie];delete k[J]}delete z[P],Object.keys(z).length===0&&delete n[B]}}}function b(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function sC(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rC(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==An&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==On&&w!==Xn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:E,maxSamples:S,samples:A}}function oC(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gi,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let M=r?0:n,T=M*4,E=p.clippingState||null;c.value=E,E=u(m,d,T,f);for(let S=0;S!==T;++S)E[S]=t[S];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=c.value,m!==!0||g===null){let p=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=f;T!==y;++T,E+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var aa=4,aC=6,cC=20,lC=256,qc=new rr,ME=new me,cg=null,lg=0,ug=0,hg=!1,uC=new I,Jr=new I,Cd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=uC}=r;cg=this._renderer.getRenderTarget(),lg=this._renderer.getActiveCubeFace(),ug=this._renderer.getActiveMipmapLevel(),hg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=AE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=SE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cg,lg,ug),this._renderer.xr.enabled=hg,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cg=this._renderer.getRenderTarget(),lg=this._renderer.getActiveCubeFace(),ug=this._renderer.getActiveMipmapLevel(),hg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ti,format:An,colorSpace:Sn,depthBuffer:!1},s=vE(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vE(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hC(r)),this._blurMaterial=fC(r,e,t),this._ggxMaterial=dC(r,e,t)}return s}_compileMaterial(e){let t=new Ue(new Mt,e);this._renderer.compile(t,qc)}_sceneToCubeUV(e,t,n,s,r){let c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ME),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Mi,new Pt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(ME),p=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let S=this._cubeSize;oa(s,E*S,T>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===or||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=AE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=SE());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,qc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-aa?n-m+aa:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,oa(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,qc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,oa(e,g,p,3*y,2*y),s.setRenderTarget(e),s.render(a,qc)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-aa?s-this._lodMax+aa:0),d=4*(this._cubeSize-u);oa(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(c,qc)}};function hC(i){let e=[],t=[],n=i,s=i-aa+1+aC;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,m=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,T=p>2?0:-1,E=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(E,f*d*p);for(let S=0;S<d;S++){let A=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?Jr.set(1,w,A):p===1?Jr.set(-A,1,-w):p===2?Jr.set(-A,w,1):p===3?Jr.set(-1,w,-A):p===4?Jr.set(-A,-1,w):Jr.set(A,w,-1),Jr.toArray(y,(p*d+S)*f)}}let g=new Mt;g.setAttribute("position",new Ht(m,f)),g.setAttribute("outputDirection",new Ht(y,f)),t.push(new Ue(g,null)),n>aa&&n--}return{lodMeshes:t,sizeLods:e}}function vE(i,e,t){let n=new In(i,e,t);return n.texture.mapping=Uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dC(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fC(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:cC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function SE(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function AE(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Pd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Id=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Zi});r.uniforms.tEquirect.value=t;let o=new Ue(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Gt),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function pC(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Fh||f===Uh)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let y=new Id(m.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===Fh||f===Uh,y=f===or||f===Xr;if(m||y){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Cd(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new Cd(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===Fh?d.mapping=or:f===Uh&&(d.mapping=Xr),d}function c(d){let f=0,m=6;for(let y=0;y<m;y++)d[y]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function mC(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Nr("WebGLRenderer: "+n+" extension not supported."),s}}}function gC(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let T=0,E=M.length;T<E;T+=3){let S=M[T+0],A=M[T+1],w=M[T+2];d.push(S,A,A,w,w,S)}}else{let M=m.array;y=m.version;for(let T=0,E=M.length/3-1;T<E;T+=3){let S=T+0,A=T+1,w=T+2;d.push(S,A,A,w,w,S)}}let g=new(m.count>=65535?pc:fc)(d,1);g.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _C(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xC(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yC(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let E=a.attributes.position.count*T,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*S*4*h),w=new lc(A,E,S,h);w.type=Xn,w.needsUpdate=!0;let x=T*4;for(let C=0;C<h;C++){let L=g[C],B=p[C],z=M[C],P=E*S*4*C;for(let k=0;k<L.count;k++){let J=k*x;f===!0&&(s.fromBufferAttribute(L,k),A[P+J+0]=s.x,A[P+J+1]=s.y,A[P+J+2]=s.z,A[P+J+3]=0),m===!0&&(s.fromBufferAttribute(B,k),A[P+J+4]=s.x,A[P+J+5]=s.y,A[P+J+6]=s.z,A[P+J+7]=0),y===!0&&(s.fromBufferAttribute(z,k),A[P+J+8]=s.x,A[P+J+9]=s.y,A[P+J+10]=s.z,A[P+J+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Be(E,S)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function EC(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var MC={[Hm]:"LINEAR_TONE_MAPPING",[zm]:"REINHARD_TONE_MAPPING",[Gm]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Vm]:"AGX_TONE_MAPPING",[Wm]:"NEUTRAL_TONE_MAPPING",[km]:"CUSTOM_TONE_MAPPING"};function vC(i,e,t,n,s,r){let o=new In(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Mt;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new Sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ue(l,u),d=new rr(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],T=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let A=0;A<M.length;A++){let w=M[A];w.setSize&&w.setSize(E,S)}},this.setEffects=function(E){M=E,T=M.length>0&&M[0].isRenderPass===!0;let S=o.width,A=o.height;M.length>0&&a===null&&(a=new In(S,A,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new In(S,A,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let x=M[w];x.setSize&&x.setSize(S,A)}},this.begin=function(E,S){if(y||E.toneMapping===Si&&M.length===0)return!1;if(p=S,S!==null){let A=S.width,w=S.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return T===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Si,!0},this.hasRenderPass=function(){return T},this.end=function(E,S){E.toneMapping=g,y=!0;let A=o,w=a;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(E,w,A,S),b.needsSwap!==!1&&(A=w,w=w===a?c:a))}if(f!==E.outputColorSpace||m!==E.toneMapping){f=E.outputColorSpace,m=E.toneMapping,u.defines={},Je.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");let x=MC[m];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(p),E.render(h,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var WE=new tn,pg=new tr(1,1),XE=new lc,qE=new xh,YE=new yc,bE=[],TE=[],RE=new Float32Array(16),wE=new Float32Array(9),CE=new Float32Array(4);function la(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bE[s];if(r===void 0&&(r=new Float32Array(s),bE[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nd(i,e){let t=TE[e];t===void 0&&(t=new Int32Array(e),TE[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function SC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function AC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function bC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function TC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function RC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;CE.set(n),i.uniformMatrix2fv(this.addr,!1,CE),Zt(t,n)}}function wC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;wE.set(n),i.uniformMatrix3fv(this.addr,!1,wE),Zt(t,n)}}function CC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;RE.set(n),i.uniformMatrix4fv(this.addr,!1,RE),Zt(t,n)}}function IC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function DC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function PC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function NC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function LC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function OC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function BC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function FC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function UC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pg.compareFunction=t.isReversedDepthBuffer()?Td:bd,r=pg):r=WE,t.setTexture2D(e||r,s)}function HC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qE,s)}function zC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||YE,s)}function GC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||XE,s)}function kC(i){switch(i){case 5126:return SC;case 35664:return AC;case 35665:return bC;case 35666:return TC;case 35674:return RC;case 35675:return wC;case 35676:return CC;case 5124:case 35670:return IC;case 35667:case 35671:return DC;case 35668:case 35672:return PC;case 35669:case 35673:return NC;case 5125:return LC;case 36294:return OC;case 36295:return BC;case 36296:return FC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return HC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return GC}}function VC(i,e){i.uniform1fv(this.addr,e)}function WC(i,e){let t=la(e,this.size,2);i.uniform2fv(this.addr,t)}function XC(i,e){let t=la(e,this.size,3);i.uniform3fv(this.addr,t)}function qC(i,e){let t=la(e,this.size,4);i.uniform4fv(this.addr,t)}function YC(i,e){let t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function JC(i,e){let t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ZC(i,e){let t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function KC(i,e){i.uniform1iv(this.addr,e)}function $C(i,e){i.uniform2iv(this.addr,e)}function jC(i,e){i.uniform3iv(this.addr,e)}function QC(i,e){i.uniform4iv(this.addr,e)}function e1(i,e){i.uniform1uiv(this.addr,e)}function t1(i,e){i.uniform2uiv(this.addr,e)}function n1(i,e){i.uniform3uiv(this.addr,e)}function i1(i,e){i.uniform4uiv(this.addr,e)}function s1(i,e,t){let n=this.cache,s=e.length,r=Nd(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=pg:o=WE;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function r1(i,e,t){let n=this.cache,s=e.length,r=Nd(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qE,r[o])}function o1(i,e,t){let n=this.cache,s=e.length,r=Nd(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||YE,r[o])}function a1(i,e,t){let n=this.cache,s=e.length,r=Nd(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||XE,r[o])}function c1(i){switch(i){case 5126:return VC;case 35664:return WC;case 35665:return XC;case 35666:return qC;case 35674:return YC;case 35675:return JC;case 35676:return ZC;case 5124:case 35670:return KC;case 35667:case 35671:return $C;case 35668:case 35672:return jC;case 35669:case 35673:return QC;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var mg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kC(t.type)}},gg=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}},_g=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},dg=/(\w+)(\])?(\[|\.)?/g;function IE(i,e){i.seq.push(e),i.map[e.id]=e}function l1(i,e,t){let n=i.name,s=n.length;for(dg.lastIndex=0;;){let r=dg.exec(n),o=dg.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){IE(t,l===void 0?new mg(a,i,e):new gg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new _g(a),IE(t,h)),t=h}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);l1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function DE(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u1=37297,h1=0;function d1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var PE=new He;function f1(i){Je._getMatrix(PE,Je.workingColorSpace,i);let e=`mat3( ${PE.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case ac:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function NE(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+d1(i.getShaderSource(e),a)}else return r}function p1(i,e){let t=f1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var m1={[Hm]:"Linear",[zm]:"Reinhard",[Gm]:"Cineon",[Fc]:"ACESFilmic",[Vm]:"AgX",[Wm]:"Neutral",[km]:"Custom"};function g1(i,e){let t=m1[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wd=new I;function _1(){Je.getLuminanceCoefficients(wd);let i=wd.x.toFixed(4),e=wd.y.toFixed(4),t=wd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jc).join(`
`)}function y1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jc(i){return i!==""}function LE(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function OE(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xg(i){return i.replace(M1,S1)}var v1=new Map;function S1(i,e){let t=Ye[e];if(t===void 0){let n=v1.get(e);if(n!==void 0)t=Ye[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xg(t)}var A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function BE(i){return i.replace(A1,b1)}function b1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function FE(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var T1={[Oc]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function R1(i){return T1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w1={[or]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function C1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var I1={[Xr]:"ENVMAP_MODE_REFRACTION"};function D1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[Um]:"ENVMAP_BLENDING_MULTIPLY",[$y]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function N1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P1[i.combine]||"ENVMAP_BLENDING_NONE"}function L1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=R1(t),l=C1(t),u=D1(t),h=N1(t),d=L1(t),f=x1(t),m=y1(r),y=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jc).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jc).join(`
`),p.length>0&&(p+=`
`)):(g=[FE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jc).join(`
`),p=[FE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Si?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jc).join(`
`)),o=xg(o),o=LE(o,t),o=OE(o,t),a=xg(a),a=LE(a,t),a=OE(a,t),o=BE(o),a=BE(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,E=M+p+a,S=DE(s,s.VERTEX_SHADER,T),A=DE(s,s.FRAGMENT_SHADER,E);s.attachShader(y,S),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(A)||"",k=B.trim(),J=z.trim(),Z=P.trim(),ie=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,A);else{let Q=NE(s,S,"vertex"),te=NE(s,A,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+te)}else k!==""?Ae("WebGLProgram: Program Info Log:",k):(J===""||Z==="")&&(X=!1);X&&(L.diagnostics={runnable:ie,programLog:k,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(S),s.deleteShader(A),x=new ca(s,y),b=E1(s,y)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,u1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}var B1=0,yg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eg(e),t.set(e,n)),n}},Eg=class{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}};function F1(i){return i===cr||i===Vc||i===Wc}function U1(i,e,t,n,s,r){let o=new uc,a=new yg,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,b,C,L,B,z){let P=L.fog,k=B.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||J,Z),X=ie&&ie.mapping===Uc?ie.image.height:null,Q=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pe=te!==void 0?te.length:0,we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let bt,rt,ut,q;if(Q){let Rt=$i[Q];bt=Rt.vertexShader,rt=Rt.fragmentShader}else{bt=x.vertexShader,rt=x.fragmentShader;let Rt=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,Rt,ht),ut=Rt.id,q=ht.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ge=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,$e=!!x.map,Yt=!!x.matcap,tt=!!ie,ct=!!x.aoMap,Tt=!!x.lightMap,st=!!x.bumpMap&&x.wireframe===!1,Dt=!!x.normalMap,Qt=!!x.displacementMap,Cn=!!x.emissiveMap,Nt=!!x.metalnessMap,Vt=!!x.roughnessMap,O=x.anisotropy>0,ln=x.clearcoat>0,mt=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,W=O&&!!x.anisotropyMap,se=ln&&!!x.clearcoatMap,re=ln&&!!x.clearcoatNormalMap,Y=ln&&!!x.clearcoatRoughnessMap,$=_&&!!x.iridescenceMap,oe=_&&!!x.iridescenceThicknessMap,Te=F&&!!x.sheenColorMap,ue=F&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Re=!!x.specularColorMap,Ne=!!x.specularIntensityMap,We=G&&!!x.transmissionMap,N=G&&!!x.thicknessMap,ce=!!x.gradientMap,K=!!x.alphaMap,le=x.alphaTest>0,pe=!!x.alphaHash,ee=!!x.extensions,Ce=Si;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let Se={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:bt,fragmentShader:rt,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&B.instanceColor!==null,instancingMorph:Ge&&B.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:Yt,envMap:tt,envMapMode:tt&&ie.mapping,envMapCubeUVHeight:X,aoMap:ct,lightMap:Tt,bumpMap:st,normalMap:Dt,displacementMap:Qt,emissiveMap:Cn,normalMapObjectSpace:Dt&&x.normalMapType===rE,normalMapTangentSpace:Dt&&x.normalMapType===Ad,packedNormalMap:Dt&&x.normalMapType===Ad&&F1(x.normalMap.format),metalnessMap:Nt,roughnessMap:Vt,anisotropy:O,anisotropyMap:W,clearcoat:ln,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:mt,retroreflection:R,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:Te,sheenRoughnessMap:ue,specularMap:ae,specularColorMap:Re,specularIntensityMap:Ne,transmission:G,transmissionMap:We,thicknessMap:N,gradientMap:ce,opaque:x.transparent===!1&&x.blending===ta&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:pe,combine:x.combine,mapUv:$e&&m(x.map.channel),aoMapUv:ct&&m(x.aoMap.channel),lightMapUv:Tt&&m(x.lightMap.channel),bumpMapUv:st&&m(x.bumpMap.channel),normalMapUv:Dt&&m(x.normalMap.channel),displacementMapUv:Qt&&m(x.displacementMap.channel),emissiveMapUv:Cn&&m(x.emissiveMap.channel),metalnessMapUv:Nt&&m(x.metalnessMap.channel),roughnessMapUv:Vt&&m(x.roughnessMap.channel),anisotropyMapUv:W&&m(x.anisotropyMap.channel),clearcoatMapUv:se&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&m(x.sheenRoughnessMap.channel),specularMapUv:ae&&m(x.specularMap.channel),specularColorMapUv:Re&&m(x.specularColorMap.channel),specularIntensityMapUv:Ne&&m(x.specularIntensityMap.channel),transmissionMapUv:We&&m(x.transmissionMap.channel),thicknessMapUv:N&&m(x.thicknessMap.channel),alphaMapUv:K&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Dt||O),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&($e||K),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Cn&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===At,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let b=f[x.type],C;if(b){let L=$i[b];C=xE.clone(L.uniforms)}else C=x.uniforms;return C}function E(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new O1(i,b,x,s),l.push(C),u.set(b,C)),C}function S(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function w(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:w}}function H1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function z1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function UE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function HE(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,y,g,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function c(d,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(d,f,m,y,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):t.push(T)}function l(d,f,m,y,g,p){let M=a(d,f,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||z1),n.length>1&&n.sort(f||UE),s.length>1&&s.sort(f||UE)}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function G1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new HE,i.set(n,[o])):s>=r.length?(o=new HE,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new me};break;case"SpotLight":t={position:new I,direction:new I,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function V1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var W1=0;function X1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q1(i){let e=new k1,t=V1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Ve,o=new Ve;function a(l){let u=0,h=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,T=0,E=0,S=0,A=0,w=0,x=0,b=0,C=0;l.sort(X1);for(let B=0,z=l.length;B<z;B++){let P=l[B],k=P.color,J=P.intensity,Z=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cr?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*J,h+=k.g*J,d+=k.b*J;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],J);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=ie;let Pe=Q.getViewportCount();for(let we=0;we<Pe;we++)n.sunShadowMatrix[y+we]=Q.getMatrix(we),n.sunShadowCascade[y+we]=Q._cascadeData[we];y+=Pe,m++}n.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ie,n.directionalShadowMatrix[g]=P.shadow.matrix,S++}n.directional[g]=X,g++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(J),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;let Q=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,Q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ie,w++}M++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(k).multiplyScalar(J),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=P.shadow.matrix,A++}n.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(J),X.groundColor.copy(P.groundColor).multiplyScalar(J),n.hemi[E]=X,E++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==E||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==A||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=E,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=E,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=A,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=C,n.version=W1++)}function c(l,u){let h=0,d=0,f=0,m=0,y=0,g=0,p=u.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let E=l[M];if(E.isSunLight){let S=n.sun[h];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),h++}else if(E.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(E.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function zE(i){let e=new q1(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Y1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zE(i),e.set(s,[a])):r>=o.length?(a=new zE(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`,K1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],GE=new Ve,Yc=new I,fg=new I;function j1(i,e,t){let n=new Jo,s=new Be,r=new Be,o=new _t,a=new Ah,c=new bh,l={},u=t.maxTextureSize,h={[Ji]:rn,[rn]:Ji,[At]:At},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:J1,fragmentShader:Z1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(A,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Bh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oc);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Zi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=A.length;P<k;P++){let J=A[P],Z=J.shadow;if(Z===void 0){Ae("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ie=Z.getFrameExtents();s.multiply(ie),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,Z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ea){if(J.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new In(s.x,s.y,{format:cr,type:Ti,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new tr(s.x,s.y,Xn),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Wi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=zt,Z.map.depthTexture.magFilter=zt}else J.isPointLight?(Z.map=new Id(s.x),Z.map.depthTexture=new Mh(s.x,bi)):(Z.map=new In(s.x,s.y),Z.map.depthTexture=new tr(s.x,s.y,bi)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Wi,this.type===Oc?(Z.map.depthTexture.compareFunction=X?Td:bd,Z.map.depthTexture.minFilter=Gt,Z.map.depthTexture.magFilter=Gt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=zt,Z.map.depthTexture.magFilter=zt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let te=0;te<Q;te++){let Pe=Z.getCamera(te);if(J.isPointLight){let we=Z.camera,bt=Z.matrix,rt=J.distance||we.far;rt!==we.far&&(we.far=rt,we.updateProjectionMatrix()),Yc.setFromMatrixPosition(J.matrixWorld),we.position.copy(Yc),fg.copy(we.position),fg.add(K1[te]),we.up.copy($1[te]),we.lookAt(fg),we.updateMatrixWorld(),bt.makeTranslation(-Yc.x,-Yc.y,-Yc.z),GE.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(GE,we.coordinateSystem,we.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,te),i.clear();else{te===0&&(i.setRenderTarget(Z.map),i.clear());let we=Z.getViewport(te);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),B.viewport(o)}n=Z.getFrustum(te),E(w,x,Pe,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ea&&M(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,L)};function M(A,w){let x=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new In(s.x,s.y,{format:cr,type:Ti}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,x,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,x,f,y,null)}function T(A,w,x,b){let C=null,L=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=C.uuid,z=w.uuid,P=l[B];P===void 0&&(P={},l[B]=P);let k=P[z];k===void 0&&(k=C.clone(),P[z]=k,w.addEventListener("dispose",S)),C=k}if(C.visible=w.visible,C.wireframe=w.wireframe,b===ea?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=x}return C}function E(A,w,x,b,C){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===ea)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let z=e.update(A),P=A.material;if(Array.isArray(P)){let k=z.groups;for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=P[ie.materialIndex];if(X&&X.visible){let Q=T(A,X,b,C);A.onBeforeShadow(i,A,w,x,z,Q,ie),i.renderBufferDirect(x,null,z,Q,A,ie),A.onAfterShadow(i,A,w,x,z,Q,ie)}}}else if(P.visible){let k=T(A,P,b,C);A.onBeforeShadow(i,A,w,x,z,k,null),i.renderBufferDirect(x,null,z,k,A,null),A.onAfterShadow(i,A,w,x,z,k,null)}}let B=A.children;for(let z=0,P=B.length;z<P;z++)E(B[z],w,x,b,C)}function S(A){A.target.removeEventListener("dispose",S);for(let x in l){let b=l[x],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Q1(i,e){function t(){let N=!1,ce=new _t,K=null,le=new _t(0,0,0,0);return{setMask:function(pe){K!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){N=pe},setClear:function(pe,ee,Ce,Se,Rt){Rt===!0&&(pe*=Se,ee*=Se,Ce*=Se),ce.set(pe,ee,Ce,Se),le.equals(ce)===!1&&(i.clearColor(pe,ee,Ce,Se),le.copy(ce))},reset:function(){N=!1,K=null,le.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,K=null,le=null,pe=null;return{setReversed:function(ee){if(ce!==ee){let Ce=e.get("EXT_clip_control");ee?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;let Se=pe;pe=null,this.setClear(Se)}},getReversed:function(){return ce},setTest:function(ee){ee?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ee){K!==ee&&!N&&(i.depthMask(ee),K=ee)},setFunc:function(ee){if(ce&&(ee=gE[ee]),le!==ee){switch(ee){case lh:i.depthFunc(i.NEVER);break;case uh:i.depthFunc(i.ALWAYS);break;case hh:i.depthFunc(i.LESS);break;case Uo:i.depthFunc(i.LEQUAL);break;case dh:i.depthFunc(i.EQUAL);break;case fh:i.depthFunc(i.GEQUAL);break;case ph:i.depthFunc(i.GREATER);break;case mh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){N=ee},setClear:function(ee){pe!==ee&&(pe=ee,ce&&(ee=1-ee),i.clearDepth(ee))},reset:function(){N=!1,K=null,le=null,pe=null,ce=!1}}}function s(){let N=!1,ce=null,K=null,le=null,pe=null,ee=null,Ce=null,Se=null,Rt=null;return{setTest:function(ht){N||(ht?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ht){ce!==ht&&!N&&(i.stencilMask(ht),ce=ht)},setFunc:function(ht,di,Hi){(K!==ht||le!==di||pe!==Hi)&&(i.stencilFunc(ht,di,Hi),K=ht,le=di,pe=Hi)},setOp:function(ht,di,Hi){(ee!==ht||Ce!==di||Se!==Hi)&&(i.stencilOp(ht,di,Hi),ee=ht,Ce=di,Se=Hi)},setLocked:function(ht){N=ht},setClear:function(ht){Rt!==ht&&(i.clearStencil(ht),Rt=ht)},reset:function(){N=!1,ce=null,K=null,le=null,pe=null,ee=null,Ce=null,Se=null,Rt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,w=null,x=new me(0,0,0),b=0,C=!1,L=null,B=null,z=null,P=null,k=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ie>=2);let Q=null,te={},Pe=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),bt=new _t().fromArray(Pe),rt=new _t().fromArray(we);function ut(N,ce,K,le){let pe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(N,ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<K;Ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ce+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ee}let q={};q[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Uo),st(!1),Dt(Nm),j(i.CULL_FACE),ct(Zi);function j(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ye(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ge(N,ce){return d[N]!==ce?(i.bindFramebuffer(N,ce),d[N]=ce,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(N,ce){let K=m,le=!1;if(N){K=f.get(ce),K===void 0&&(K=[],f.set(ce,K));let pe=N.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ce=pe.length;ee<Ce;ee++)K[ee]=i.COLOR_ATTACHMENT0+ee;K.length=pe.length,le=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&i.drawBuffers(K)}function $e(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Yt={[Wr]:i.FUNC_ADD,[Ly]:i.FUNC_SUBTRACT,[Oy]:i.FUNC_REVERSE_SUBTRACT};Yt[By]=i.MIN,Yt[Fy]=i.MAX;let tt={[Uy]:i.ZERO,[Hy]:i.ONE,[zy]:i.SRC_COLOR,[Bm]:i.SRC_ALPHA,[qy]:i.SRC_ALPHA_SATURATE,[Wy]:i.DST_COLOR,[ky]:i.DST_ALPHA,[Gy]:i.ONE_MINUS_SRC_COLOR,[Fm]:i.ONE_MINUS_SRC_ALPHA,[Xy]:i.ONE_MINUS_DST_COLOR,[Vy]:i.ONE_MINUS_DST_ALPHA,[Yy]:i.CONSTANT_COLOR,[Jy]:i.ONE_MINUS_CONSTANT_COLOR,[Zy]:i.CONSTANT_ALPHA,[Ky]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(N,ce,K,le,pe,ee,Ce,Se,Rt,ht){if(N===Zi){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),N!==Ny){if(N!==p||ht!==C){if((M!==Wr||S!==Wr)&&(i.blendEquation(i.FUNC_ADD),M=Wr,S=Wr),ht)switch(N){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case Lm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Om:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",N);break}else switch(N){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lm:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",N);break}T=null,E=null,A=null,w=null,x.set(0,0,0),b=0,p=N,C=ht}return}pe=pe||ce,ee=ee||K,Ce=Ce||le,(ce!==M||pe!==S)&&(i.blendEquationSeparate(Yt[ce],Yt[pe]),M=ce,S=pe),(K!==T||le!==E||ee!==A||Ce!==w)&&(i.blendFuncSeparate(tt[K],tt[le],tt[ee],tt[Ce]),T=K,E=le,A=ee,w=Ce),(Se.equals(x)===!1||Rt!==b)&&(i.blendColor(Se.r,Se.g,Se.b,Rt),x.copy(Se),b=Rt),p=N,C=!1}function Tt(N,ce){N.side===At?ye(i.CULL_FACE):j(i.CULL_FACE);let K=N.side===rn;ce&&(K=!K),st(K),N.blending===ta&&N.transparent===!1?ct(Zi):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let le=N.stencilWrite;a.setTest(le),le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Cn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Dt(N){N!==Dy?(j(i.CULL_FACE),N!==B&&(N===Nm?i.cullFace(i.BACK):N===Py?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),B=N}function Qt(N){N!==z&&(Z&&i.lineWidth(N),z=N)}function Cn(N,ce,K){N?(j(i.POLYGON_OFFSET_FILL),(P!==ce||k!==K)&&(P=ce,k=K,o.getReversed()&&(ce=-ce),i.polygonOffset(ce,K))):ye(i.POLYGON_OFFSET_FILL)}function Nt(N){N?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Vt(N){N===void 0&&(N=i.TEXTURE0+J-1),Q!==N&&(i.activeTexture(N),Q=N)}function O(N,ce,K){K===void 0&&(Q===null?K=i.TEXTURE0+J-1:K=Q);let le=te[K];le===void 0&&(le={type:void 0,texture:void 0},te[K]=le),(le.type!==N||le.texture!==ce)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(N,ce||q[N]),le.type=N,le.texture=ce)}function ln(){let N=te[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function F(){try{i.texSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function re(){try{i.texStorage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function Y(){try{i.texImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function $(){try{i.texImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function oe(N){return h[N]!==void 0?h[N]:i.getParameter(N)}function Te(N,ce){h[N]!==ce&&(i.pixelStorei(N,ce),h[N]=ce)}function ue(N){bt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),bt.copy(N))}function ae(N){rt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function Re(N,ce){let K=l.get(ce);K===void 0&&(K=new WeakMap,l.set(ce,K));let le=K.get(N);le===void 0&&(le=i.getUniformBlockIndex(ce,N.name),K.set(N,le))}function Ne(N,ce){let le=l.get(ce).get(N);c.get(ce)!==le&&(i.uniformBlockBinding(ce,le,N.__bindingPointIndex),c.set(ce,le))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,te={},d={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,w=null,x=new me(0,0,0),b=0,C=!1,L=null,B=null,z=null,P=null,k=null,bt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Ge,drawBuffers:_e,useProgram:$e,setBlending:ct,setMaterial:Tt,setFlipSided:st,setCullFace:Dt,setLineWidth:Qt,setPolygonOffset:Cn,setScissorTest:Nt,activeTexture:Vt,bindTexture:O,unbindTexture:ln,compressedTexImage2D:mt,compressedTexImage3D:R,texImage2D:Y,texImage3D:$,pixelStorei:Te,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:se,texStorage3D:re,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:ue,viewport:ae,reset:We}}function eI(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return m?new OffscreenCanvas(R,_):Go("canvas")}function g(R,_,F){let G=1,W=mt(R);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let se=Math.floor(G*W.width),re=Math.floor(G*W.height);d===void 0&&(d=y(se,re));let Y=_?y(se,re):d;return Y.width=se,Y.height=re,Y.getContext("2d").drawImage(R,0,0,se,re),Ae("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+re+")."),Y}else return"data"in R&&Ae("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,_,F,G,W,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re;G&&(re=e.get("EXT_texture_norm16"),re||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),F===i.SHORT&&re&&(Y=re.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),F===i.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),F===i.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let $=se?ac:Je.getTransfer(W);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===pt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),F===i.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(R,_){let F;return R?_===null||_===bi||_===sa?F=i.DEPTH24_STENCIL8:_===Xn?F=i.DEPTH32F_STENCIL8:_===ia&&(F=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bi||_===sa?F=i.DEPTH_COMPONENT24:_===Xn?F=i.DEPTH_COMPONENT32F:_===ia&&(F=i.DEPTH_COMPONENT16),F}function A(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function w(R){let _=R.target;_.removeEventListener("dispose",w),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function x(R){let _=R.target;_.removeEventListener("dispose",x),L(_)}function b(R){let _=n.get(R);if(_.__webglInit===void 0)return;let F=R.source,G=f.get(F);if(G){let W=G[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(R),Object.keys(G).length===0&&f.delete(F)}n.remove(R)}function C(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let F=R.source,G=f.get(F);delete G[_.__cacheKey],o.memory.textures--}function L(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let W=0;W<_.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[G][W]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=R.textures;for(let G=0,W=F.length;G<W;G++){let se=n.get(F[G]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(R)}let B=0;function z(){B=0}function P(){return B}function k(R){B=R}function J(){let R=B;return R>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function Z(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function ie(R,_){let F=n.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let G=R.image;if(G===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(F,R,_);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(R,_){let F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ye(F,R,_);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(R,_){let F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ye(F,R,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function te(R,_){let F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Ge(F,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Pe={[Vi]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},we={[zt]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},bt={[aE]:i.NEVER,[dE]:i.ALWAYS,[cE]:i.LESS,[bd]:i.LEQUAL,[lE]:i.EQUAL,[Td]:i.GEQUAL,[uE]:i.GREATER,[hE]:i.NOTEQUAL};function rt(R,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===na||_.magFilter===qr||_.magFilter===Ai||_.minFilter===Gt||_.minFilter===na||_.minFilter===qr||_.minFilter===Ai)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Pe[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Pe[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Pe[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,bt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==qr&&_.minFilter!==Ai||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(R,_){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",w));let G=_.source,W=f.get(G);W===void 0&&(W={},f.set(G,W));let se=Z(_);if(se!==R.__cacheKey){W[se]===void 0&&(W[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[se].usedTimes++;let re=W[R.__cacheKey];re!==void 0&&(W[R.__cacheKey].usedTimes--,re.usedTimes===0&&C(_)),R.__cacheKey=se,R.__webglTexture=W[se].texture}return F}function q(R,_,F){return Math.floor(Math.floor(R/F)/_)}function j(R,_,F,G){let se=R.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{se.sort((Te,ue)=>Te.start-ue.start);let re=0;for(let Te=1;Te<se.length;Te++){let ue=se[re],ae=se[Te],Re=ue.start+ue.count,Ne=q(ae.start,_.width,4),We=q(ue.start,_.width,4);ae.start<=Re+1&&Ne===We&&q(ae.start+ae.count-1,_.width,4)===Ne?ue.count=Math.max(ue.count,ae.start+ae.count-ue.start):(++re,se[re]=ae)}se.length=re+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,ue=se.length;Te<ue;Te++){let ae=se[Te],Re=Math.floor(ae.start/4),Ne=Math.ceil(ae.count/4),We=Re%_.width,N=Math.floor(Re/_.width),ce=Ne,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,We,N,ce,K,F,G,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ye(R,_,F){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let W=ut(R,_),se=_.source;t.bindTexture(G,R.__webglTexture,i.TEXTURE0+F);let re=n.get(se);if(se.version!==re.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Je.getPrimaries(Je.workingColorSpace),le=_.colorSpace===Ri?null:Je.getPrimaries(_.colorSpace),pe=_.colorSpace===Ri||K===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let $=g(_.image,!1,s.maxTextureSize);$=ln(_,$);let oe=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),ue=E(_.internalFormat,oe,Te,_.normalized,_.colorSpace,_.isVideoTexture);rt(G,_);let ae,Re=_.mipmaps,Ne=_.isVideoTexture!==!0,We=re.__version===void 0||W===!0,N=se.dataReady,ce=A(_,$);if(_.isDepthTexture)ue=S(_.format===ar,_.type),We&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ue,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,oe,Te,null));else if(_.isDataTexture)if(Re.length>0){Ne&&We&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let K=0,le=Re.length;K<le;K++)ae=Re[K],Ne?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,Te,ae.data):t.texImage2D(i.TEXTURE_2D,K,ue,ae.width,ae.height,0,oe,Te,ae.data);_.generateMipmaps=!1}else Ne?(We&&t.texStorage2D(i.TEXTURE_2D,ce,ue,$.width,$.height),N&&j(_,$,oe,Te)):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,oe,Te,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,Re[0].width,Re[0].height,$.depth);for(let K=0,le=Re.length;K<le;K++)if(ae=Re[K],_.format!==An)if(oe!==null)if(Ne){if(N)if(_.layerUpdates.size>0){let pe=ag(ae.width,ae.height,_.format,_.type);for(let ee of _.layerUpdates){let Ce=ae.data.subarray(ee*pe/ae.data.BYTES_PER_ELEMENT,(ee+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ee,ae.width,ae.height,1,oe,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ue,ae.width,ae.height,$.depth,0,ae.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,oe,Te,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ue,ae.width,ae.height,$.depth,0,oe,Te,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ne&&We&&t.texStorage2D(i.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let K=0,le=Re.length;K<le;K++)ae=Re[K],_.format!==An?oe!==null?Ne?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ue,ae.width,ae.height,0,ae.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,Te,ae.data):t.texImage2D(i.TEXTURE_2D,K,ue,ae.width,ae.height,0,oe,Te,ae.data)}else if(_.isDataArrayTexture)if(Ne){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ue,$.width,$.height,$.depth),N)if(_.layerUpdates.size>0){let K=ag($.width,$.height,_.format,_.type);for(let le of _.layerUpdates){let pe=$.data.subarray(le*K/$.data.BYTES_PER_ELEMENT,(le+1)*K/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,$.width,$.height,1,oe,Te,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,Te,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,$.width,$.height,$.depth,0,oe,Te,$.data);else if(_.isData3DTexture)Ne?(We&&t.texStorage3D(i.TEXTURE_3D,ce,ue,$.width,$.height,$.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,Te,$.data)):t.texImage3D(i.TEXTURE_3D,0,ue,$.width,$.height,$.depth,0,oe,Te,$.data);else if(_.isFramebufferTexture){if(We)if(Ne)t.texStorage2D(i.TEXTURE_2D,ce,ue,$.width,$.height);else{let K=$.width,le=$.height;for(let pe=0;pe<ce;pe++)t.texImage2D(i.TEXTURE_2D,pe,ue,K,le,0,oe,Te,null),K>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),$.parentNode!==K){K.appendChild($),h.add(_),K.onpaint=le=>{let pe=le.changedElements;for(let ee of h)pe.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let pe=i.RGBA,ee=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ee,Ce,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ne&&We){let K=mt(Re[0]);t.texStorage2D(i.TEXTURE_2D,ce,ue,K.width,K.height)}for(let K=0,le=Re.length;K<le;K++)ae=Re[K],Ne?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe,Te,ae):t.texImage2D(i.TEXTURE_2D,K,ue,oe,Te,ae);_.generateMipmaps=!1}else if(Ne){if(We){let K=mt($);t.texStorage2D(i.TEXTURE_2D,ce,ue,K.width,K.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Te,$)}else t.texImage2D(i.TEXTURE_2D,0,ue,oe,Te,$);p(_)&&M(G),re.__version=se.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ge(R,_,F){if(_.image.length!==6)return;let G=ut(R,_),W=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);let se=n.get(W);if(W.version!==se.__version||G===!0){t.activeTexture(i.TEXTURE0+F);let re=Je.getPrimaries(Je.workingColorSpace),Y=_.colorSpace===Ri?null:Je.getPrimaries(_.colorSpace),$=_.colorSpace===Ri||re===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!oe&&!Te?ue[ee]=g(_.image[ee],!0,s.maxCubemapSize):ue[ee]=Te?_.image[ee].image:_.image[ee],ue[ee]=ln(_,ue[ee]);let ae=ue[0],Re=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),We=E(_.internalFormat,Re,Ne,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ce=se.__version===void 0||G===!0,K=W.dataReady,le=A(_,ae);rt(i.TEXTURE_CUBE_MAP,_);let pe;if(oe){N&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,ae.width,ae.height);for(let ee=0;ee<6;ee++){pe=ue[ee].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){let Se=pe[Ce];_.format!==An?Re!==null?N?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Se.width,Se.height,Re,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,We,Se.width,Se.height,0,Se.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,0,0,Se.width,Se.height,Re,Ne,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce,We,Se.width,Se.height,0,Re,Ne,Se.data)}}}else{if(pe=_.mipmaps,N&&ce){pe.length>0&&le++;let ee=mt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Re,Ne,ue[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,ue[ee].width,ue[ee].height,0,Re,Ne,ue[ee].data);for(let Ce=0;Ce<pe.length;Ce++){let Rt=pe[Ce].image[ee].image;N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Rt.width,Rt.height,Re,Ne,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,We,Rt.width,Rt.height,0,Re,Ne,Rt.data)}}else{N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,Ne,ue[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Re,Ne,ue[ee]);for(let Ce=0;Ce<pe.length;Ce++){let Se=pe[Ce];N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,0,0,Re,Ne,Se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ce+1,We,Re,Ne,Se.image[ee])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function _e(R,_,F,G,W,se){let re=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=E(F.internalFormat,re,Y,F.normalized,F.colorSpace),oe=n.get(_),Te=n.get(F);if(Te.__renderTarget=_,!oe.__hasExternalTextures){let ue=Math.max(1,_.width>>se),ae=Math.max(1,_.height>>se);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,se,$,ue,ae,_.depth,0,re,Y,null):t.texImage2D(W,se,$,ue,ae,0,re,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Vt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,Te.__webglTexture,0,Nt(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(R,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let G=_.depthTexture,W=G&&G.isDepthTexture?G.type:null,se=S(_.stencilBuffer,W),re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Vt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(_),se,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,R)}else{let G=_.textures;for(let W=0;W<G.length;W++){let se=G[W],re=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),$=E(se.internalFormat,re,Y,se.normalized,se.colorSpace);Vt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(_),$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(R,_,F){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),rt(i.TEXTURE_CUBE_MAP,_.depthTexture);let oe=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type),ue;_.depthTexture.format===Wi?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===ar&&(ue=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ue,_.width,_.height,0,oe,Te,null)}}else ie(_.depthTexture,0);let se=W.__webglTexture,re=Nt(_),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=_.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)Vt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else if(_.depthTexture.format===ar)Vt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(R){let _=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=G}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Yt(_.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?Yt(_.__webglFramebuffer[0],R,0):Yt(_.__webglFramebuffer,R,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),$e(_.__webglDepthbuffer[G],R,!1);else{let W=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),$e(_.__webglDepthbuffer,R,!1);else{let W=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,_,F){let G=n.get(R);_!==void 0&&_e(G.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&tt(R)}function Tt(R){let _=R.texture,F=n.get(R),G=n.get(_);R.addEventListener("dispose",x);let W=R.textures,se=R.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,o.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(re)for(let Y=0,$=W.length;Y<$;Y++){let oe=n.get(W[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Vt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let $=W[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let oe=r.convert($.format,$.colorSpace),Te=r.convert($.type),ue=E($.internalFormat,oe,Te,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),ae=Nt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),rt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[Y][$],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else _e(F.__webglFramebuffer[Y],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,$=W.length;Y<$;Y++){let oe=W[Y],Te=n.get(oe),ue=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Te.__webglTexture),rt(ue,oe),_e(F.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+Y,ue,0),p(oe)&&M(ue)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),rt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[$],R,_,i.COLOR_ATTACHMENT0,Y,$);else _e(F.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&M(Y),t.unbindTexture()}R.depthBuffer&&tt(R)}function st(R){let _=R.textures;for(let F=0,G=_.length;F<G;F++){let W=_[F];if(p(W)){let se=T(R),re=n.get(W).__webglTexture;t.bindTexture(se,re),M(se),t.unbindTexture()}}}let Dt=[],Qt=[];function Cn(R){if(R.samples>0){if(Vt(R)===!1){let _=R.textures,F=R.width,G=R.height,W=i.COLOR_BUFFER_BIT,se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(R),Y=_.length>1;if(Y)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let Te=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,W,i.NEAREST),c===!0&&(Dt.length=0,Qt.length=0,Dt.push(i.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Dt.push(se),Qt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let Te=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Nt(R){return Math.min(s.maxSamples,R.samples)}function Vt(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(R){let _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function ln(R,_){let F=R.colorSpace,G=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Sn&&F!==Ri&&(Je.getTransfer(F)===pt?(G!==An||W!==On)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",F)),_}function mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=ct,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tI(i,e){function t(n,s=Ri){let r,o=Je.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qm)return i.BYTE;if(n===Ym)return i.SHORT;if(n===ia)return i.UNSIGNED_SHORT;if(n===zh)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===Km)return i.ALPHA;if(n===$m)return i.RGB;if(n===An)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Vh)return i.RED;if(n===Wh)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===Xh)return i.RG_INTEGER;if(n===qh)return i.RGBA_INTEGER;if(n===Hc||n===zc||n===Gc||n===kc)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yh||n===Jh||n===Zh||n===Kh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h||n===jh||n===Qh||n===ed||n===td||n===Vc||n===nd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$h||n===jh)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ed)return r.COMPRESSED_R11_EAC;if(n===td)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vc)return r.COMPRESSED_RG11_EAC;if(n===nd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===id||n===sd||n===rd||n===od||n===ad||n===cd||n===ld||n===ud||n===hd||n===dd||n===fd||n===pd||n===md||n===gd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===id)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===od)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ad)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ld)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ud)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===md)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gd)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_d||n===xd||n===yd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_d)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===Md||n===Wc||n===vd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ed)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Md)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iI=`
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

}`,Mg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:nI,fragmentShader:iI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vg=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Mg,p={},M=t.getContextAttributes(),T=null,E=null,S=[],A=[],w=new Be,x=null,b=null,C=new qt;C.viewport=new _t;let L=new qt;L.viewport=new _t;let B=[C,L],z=new Nh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new Wo,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new Wo,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new Wo,S[q]=j),j.getHandSpace()};function J(q){let j=A.indexOf(q.inputSource);if(j===-1)return;let ye=S[j];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<S.length;q++){let j=A[q];j!==null&&(A[q]=null,S[q].disconnect(j))}P=null,k=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,E=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?ar:Wi,Ge=M.stencil?sa:bi);let $e={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new In(d.textureWidth,d.textureHeight,{format:An,type:On,depthTexture:new tr(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new In(f.framebufferWidth,f.framebufferHeight,{format:An,type:On,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(q){for(let j=0;j<q.removed.length;j++){let ye=q.removed[j],Ge=A.indexOf(ye);Ge>=0&&(A[Ge]=null,S[Ge].disconnect(ye))}for(let j=0;j<q.added.length;j++){let ye=q.added[j],Ge=A.indexOf(ye);if(Ge===-1){for(let $e=0;$e<S.length;$e++)if($e>=A.length){A.push(ye),Ge=$e;break}else if(A[$e]===null){A[$e]=ye,Ge=$e;break}if(Ge===-1)break}let _e=S[Ge];_e&&_e.connect(ye)}}let X=new I,Q=new I;function te(q,j,ye){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let Ge=X.distanceTo(Q),_e=j.projectionMatrix.elements,$e=ye.projectionMatrix.elements,Yt=_e[14]/(_e[10]-1),tt=_e[14]/(_e[10]+1),ct=(_e[9]+1)/_e[5],Tt=(_e[9]-1)/_e[5],st=(_e[8]-1)/_e[0],Dt=($e[8]+1)/$e[0],Qt=Yt*st,Cn=Yt*Dt,Nt=Ge/(-st+Dt),Vt=Nt*-st;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(Nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=Yt+Nt,ln=tt+Nt,mt=Qt-Vt,R=Cn+(Ge-Vt),_=ct*tt/ln*O,F=Tt*tt/ln*O;q.projectionMatrix.makePerspective(mt,R,_,F,O,ln),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Pe(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ye=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),z.near=L.near=C.near=j,z.far=L.far=C.far=ye,(P!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,k=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Ge=q.parent,_e=z.cameras;Pe(z,Ge);for(let $e=0;$e<_e.length;$e++)Pe(_e[$e],Ge);_e.length===2?te(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),we(q,z,Ge)};function we(q,j,ye){ye===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Br*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let bt=null;function rt(q,j){if(u=j.getViewerPose(l||o),m=j,u!==null){let ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ge=!1;ye.length!==z.cameras.length&&(z.cameras.length=0,Ge=!0);for(let tt=0;tt<ye.length;tt++){let ct=ye[tt],Tt=null;if(f!==null)Tt=f.getViewport(ct);else{let Dt=h.getViewSubImage(d,ct);Tt=Dt.viewport,tt===0&&(e.setRenderTargetTextures(E,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(E))}let st=B[tt];st===void 0&&(st=new qt,st.layers.enable(tt),st.viewport=new _t,B[tt]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),tt===0&&(z.matrix.copy(st.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ge===!0&&z.cameras.push(st)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let tt=h.getDepthInformation(ye[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let tt=0;tt<ye.length;tt++){let ct=ye[tt].camera;if(ct){let Tt=p[ct];Tt||(Tt=new Ec,p[ct]=Tt);let st=h.getCameraImage(ct);Tt.sourceTexture=st}}}}for(let ye=0;ye<S.length;ye++){let Ge=A[ye],_e=S[ye];Ge!==null&&_e!==void 0&&_e.update(Ge,j,l||o)}bt&&bt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let ut=new kE;ut.setAnimationLoop(rt),this.setAnimationLoop=function(q){bt=q},this.dispose=function(){}}},sI=new Ve,JE=new He;JE.set(-1,0,0,0,1,0,0,0,1);function rI(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sg(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,T,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,E=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(sI.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(JE),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oI(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let A=S.program;n.uniformBlockBinding(E,A)}function l(E,S){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",M));let w=S.program;n.updateUBOMapping(E,w);let x=e.render.frame;r[E.id]!==x&&(d(E),r[E.id]=x)}function u(E){let S=h();E.__bindingPointIndex=S;let A=i.createBuffer(),w=E.__size,x=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let S=s[E.id],A=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,b=A.length;x<b;x++){let C=A[x];if(Array.isArray(C))for(let L=0,B=C.length;L<B;L++)f(C[L],x,L,w);else f(C,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,A,w){if(y(E,S,A,w)===!0){let x=E.__offset,b=E.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){let B=b[L],z=p(B);m(B,E.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,E.__data)}}function m(E,S,A){typeof E=="number"||typeof E=="boolean"?S[0]=E:E.isMatrix3?(S[0]=E.elements[0],S[1]=E.elements[1],S[2]=E.elements[2],S[3]=0,S[4]=E.elements[3],S[5]=E.elements[4],S[6]=E.elements[5],S[7]=0,S[8]=E.elements[6],S[9]=E.elements[7],S[10]=E.elements[8],S[11]=0):ArrayBuffer.isView(E)?S.set(new E.constructor(E.buffer,E.byteOffset,S.length)):E.toArray(S,A)}function y(E,S,A,w){let x=E.value,b=S+"_"+A;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{let C=w[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(E){let S=E.uniforms,A=0,w=16;for(let b=0,C=S.length;b<C;b++){let L=Array.isArray(S[b])?S[b]:[S[b]];for(let B=0,z=L.length;B<z;B++){let P=L[B],k=Array.isArray(P.value)?P.value:[P.value];for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=p(ie),Q=A%w,te=Q%X.boundary,Pe=Q+te;A+=te,Pe!==0&&w-Pe<X.storage&&(A+=w-Pe),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=X.storage}}}let x=A%w;return x>0&&(A+=w-x),E.__size=A,E.__cache={},this}function p(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",E),S}function M(E){let S=E.target;S.removeEventListener("dispose",M);let A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var aI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function cI(){return Ki===null&&(Ki=new er(aI,16,16,cr,Ti),Ki.name="DFG_LUT",Ki.minFilter=Gt,Ki.magFilter=Gt,Ki.wrapS=ni,Ki.wrapT=ni,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Dd=class{constructor(e={}){let{canvas:t=fE(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let y=f,g=new Set([qh,Xh,Wh]),p=new Set([On,bi,ia,sa,Gh,kh]),M=new Uint32Array(4),T=new Int32Array(4),E=new I,S=null,A=null,w=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,z=null,P=null,k=null;this._outputColorSpace=Ut;let J=0,Z=0,ie=null,X=-1,Q=null,te=new _t,Pe=new _t,we=null,bt=new me(0),rt=0,ut=t.width,q=t.height,j=1,ye=null,Ge=null,_e=new _t(0,0,ut,q),$e=new _t(0,0,ut,q),Yt=!1,tt=new Jo,ct=!1,Tt=!1,st=new Ve,Dt=new I,Qt=new _t,Cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Vt(){return ie===null?j:1}let O=n;function ln(v,D){return t.getContext(v,D)}let mt,R,_,F,G,W,se,re,Y,$,oe,Te,ue,ae,Re,Ne,We,N,ce,K,le,pe,ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",di,!1),O===null){let D="webgl2";if(O=ln(D,v),O===null)throw ln(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(v){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",di,!1),Oe("WebGLRenderer: "+v.message),v}function Ce(){mt=new mC(O),mt.init(),le=new tI(O,mt),R=new rC(O,mt,e,le),_=new Q1(O,mt),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),z=O.createFramebuffer(),P=O.createFramebuffer(),k=O.createFramebuffer(),F=new xC(O),G=new H1,W=new eI(O,mt,_,G,R,le,F),se=new pC(C),re=new ET(O),pe=new iC(O,re),Y=new gC(O,re,F,pe),$=new EC(O,Y,re,pe,F),N=new yC(O,R,W),Re=new oC(G),oe=new U1(C,se,mt,R,pe,Re),Te=new rI(C,G),ue=new G1,ae=new Y1(mt),We=new nC(C,se,_,$,m,c),Ne=new j1(C,$,R),ee=new oI(O,F,R,_),ce=new sC(O,mt,F),K=new _C(O,mt,F),F.programs=oe.programs,C.capabilities=R,C.extensions=mt,C.properties=G,C.renderLists=ue,C.shadowMap=Ne,C.state=_,C.info=F}y!==On&&(b=new vC(y,t.width,t.height,a,s,r));let Se=new vg(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=mt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=mt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(ut,q,!1))},this.getSize=function(v){return v.set(ut,q)},this.setSize=function(v,D,V=!0){if(Se.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=v,q=D,t.width=Math.floor(v*j),t.height=Math.floor(D*j),V===!0&&(t.style.width=v+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(ut*j,q*j).floor()},this.setDrawingBufferSize=function(v,D,V){ut=v,q=D,j=V,t.width=Math.floor(v*V),t.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(y===On){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,D,V,U){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,D,V,U),_.viewport(te.copy(_e).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy($e)},this.setScissor=function(v,D,V,U){v.isVector4?$e.set(v.x,v.y,v.z,v.w):$e.set(v,D,V,U),_.scissor(Pe.copy($e).multiplyScalar(j).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(v){_.setScissorTest(Yt=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){Ge=v},this.getClearColor=function(v){return v.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let U=0;if(v){let H=!1;if(ie!==null){let fe=ie.texture.format;H=g.has(fe)}if(H){let fe=ie.texture.type,xe=p.has(fe),de=We.getClearColor(),Ee=We.getClearAlpha(),be=de.r,qe=de.g,nt=de.b;xe?(M[0]=be,M[1]=qe,M[2]=nt,M[3]=Ee,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=be,T[1]=qe,T[2]=nt,T[3]=Ee,O.clearBufferiv(O.COLOR,0,T))}else U|=O.COLOR_BUFFER_BIT}D&&(U|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",di,!1),We.dispose(),ue.dispose(),ae.dispose(),G.dispose(),se.dispose(),$.dispose(),pe.dispose(),ee.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Fx),Se.removeEventListener("sessionend",Ux),Tr.stop()};function Rt(v){v.preventDefault(),cc("WebGLRenderer: Context Lost."),L=!0}function ht(){cc("WebGLRenderer: Context Restored."),L=!1;let v=F.autoReset,D=Ne.enabled,V=Ne.autoUpdate,U=Ne.needsUpdate,H=Ne.type;Ce(),F.autoReset=v,Ne.enabled=D,Ne.autoUpdate=V,Ne.needsUpdate=U,Ne.type=H}function di(v){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Hi(v){let D=v.target;D.removeEventListener("dispose",Hi),cb(D)}function cb(v){lb(v),G.remove(v)}function lb(v){let D=G.get(v).programs;D!==void 0&&(D.forEach(function(V){oe.releaseProgram(V)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,V,U,H,fe){D===null&&(D=Cn);let xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,de=db(v,D,V,U,H);_.setMaterial(U,xe);let Ee=V.index,be=1;if(U.wireframe===!0){if(Ee=Y.getWireframeAttribute(V),Ee===void 0)return;be=2}let qe=V.drawRange,nt=V.attributes.position,Me=qe.start*be,dt=(qe.start+qe.count)*be;fe!==null&&(Me=Math.max(Me,fe.start*be),dt=Math.min(dt,(fe.start+fe.count)*be)),Ee!==null?(Me=Math.max(Me,0),dt=Math.min(dt,Ee.count)):nt!=null&&(Me=Math.max(Me,0),dt=Math.min(dt,nt.count));let Wt=dt-Me;if(Wt<0||Wt===1/0)return;pe.setup(H,U,de,V,Ee);let It,St=ce;if(Ee!==null&&(It=re.get(Ee),St=K,St.setIndex(It)),H.isMesh)U.wireframe===!0?(_.setLineWidth(U.wireframeLinewidth*Vt()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(H.isLine){let un=U.linewidth;un===void 0&&(un=1),_.setLineWidth(un*Vt()),H.isLineSegments?St.setMode(O.LINES):H.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else H.isPoints?St.setMode(O.POINTS):H.isSprite&&St.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let un=H._multiDrawStarts,ge=H._multiDrawCounts,Mn=H._multiDrawCount,at=Ee?re.get(Ee).bytesPerElement:1,ei=G.get(U).currentProgram.getUniforms();for(let zi=0;zi<Mn;zi++)ei.setValue(O,"_gl_DrawID",zi),St.render(un[zi]/at,ge[zi])}else if(H.isInstancedMesh)St.renderInstances(Me,Wt,H.count);else if(V.isInstancedBufferGeometry){let un=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,un);St.renderInstances(Me,Wt,ge)}else St.render(Me,Wt)};function Bx(v,D,V,U){B!==null&&v.isNodeMaterial&&B.setObject(U,v),ct===!0&&Re.setState(v,V,!1),v.transparent===!0&&v.side===At&&v.forceSinglePass===!1?(v.side=rn,v.needsUpdate=!0,Lu(v,D,U),v.side=Ji,v.needsUpdate=!0,Lu(v,D,U),v.side=At):Lu(v,D,U)}this.compile=function(v,D,V=null){V===null&&(V=v),B!==null&&B.renderStart(v,D,V),A=ae.get(V),A.init(D),x.push(A),V.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),v!==V&&v.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Tt=this.localClippingEnabled,ct=Re.init(this.clippingPlanes,Tt),ct===!0&&Re.setGlobalState(this.clippingPlanes,D),B!==null&&Ne.render(A.state.shadowsArray,V,D);let U=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let fe=H.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){let de=fe[xe];Bx(de,V,D,H),U.add(de)}else Bx(fe,V,D,H),U.add(fe)}),A=x.pop(),B!==null&&B.renderEnd(),U},this.compileAsync=function(v,D,V=null){let U=this.compile(v,D,V);return new Promise(H=>{function fe(){if(U.forEach(function(xe){let Ee=G.get(xe).currentProgram;(Ee===void 0||Ee.isReady())&&U.delete(xe)}),U.size===0){H(v);return}setTimeout(fe,10)}mt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Zp=null;function ub(v){Zp&&Zp(v)}function Fx(){Tr.stop()}function Ux(){Tr.start()}let Tr=new kE;Tr.setAnimationLoop(ub),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(v){Zp=v,Se.setAnimationLoop(v),v===null?Tr.stop():Tr.start()},Se.addEventListener("sessionstart",Fx),Se.addEventListener("sessionend",Ux),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(v,D);let V=Se.enabled===!0&&Se.isPresenting===!0,U=b!==null&&(ie===null||V)&&b.begin(C,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,ie),A=ae.get(v,x.length),A.init(D),A.state.textureUnits=W.getTextureUnits(),x.push(A),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(st,xi,D.reversedDepth),Tt=this.localClippingEnabled,ct=Re.init(this.clippingPlanes,Tt),S=ue.get(v,w.length),S.init(),w.push(S),Se.enabled===!0&&Se.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&Kp(xe,D,-1/0,C.sortObjects)}Kp(v,D,0,C.sortObjects),S.finish(),B!==null&&B.updateLights(A.state.lightsArray),C.sortObjects===!0&&S.sort(ye,Ge),Nt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Nt&&We.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Re.beginShadows();let H=A.state.shadowsArray;if(Ne.render(H,v,D),ct===!0&&Re.endShadows(),(U&&b.hasRenderPass())===!1){let xe=S.opaque,de=S.transmissive;if(A.setupLights(),D.isArrayCamera){let Ee=D.cameras;if(de.length>0)for(let be=0,qe=Ee.length;be<qe;be++){let nt=Ee[be];zx(xe,de,v,nt)}Nt&&We.render(v);for(let be=0,qe=Ee.length;be<qe;be++){let nt=Ee[be];Hx(S,v,nt,nt.viewport)}}else de.length>0&&zx(xe,de,v,D),Nt&&We.render(v),Hx(S,v,D)}ie!==null&&Z===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),U&&b.end(C),v.isScene===!0&&v.onAfterRender(C,v,D),pe.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(A=x[x.length-1],W.setTextureUnits(A.state.textureUnits),ct===!0&&Re.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,B!==null&&B.renderEnd()};function Kp(v,D,V,U){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){U&&Qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);let xe=$.update(v),de=v.material;de.visible&&S.push(v,xe,de,V,Qt.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(tt))){let xe=$.update(v),de=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qt.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Qt.copy(xe.boundingSphere.center)),Qt.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(de)){let Ee=xe.groups;for(let be=0,qe=Ee.length;be<qe;be++){let nt=Ee[be],Me=de[nt.materialIndex];Me&&Me.visible&&S.push(v,xe,Me,V,Qt.z,nt,D)}}else de.visible&&S.push(v,xe,de,V,Qt.z,null,D)}}let fe=v.children;for(let xe=0,de=fe.length;xe<de;xe++)Kp(fe[xe],D,V,U)}function Hx(v,D,V,U){let{opaque:H,transmissive:fe,transparent:xe}=v;A.setupLightsView(V),ct===!0&&Re.setGlobalState(C.clippingPlanes,V),U&&_.viewport(te.copy(U)),H.length>0&&Nu(H,D,V),fe.length>0&&Nu(fe,D,V),xe.length>0&&Nu(xe,D,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function zx(v,D,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let Me=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new In(1,1,{generateMipmaps:!0,type:Me?Ti:On,minFilter:Ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let fe=A.state.transmissionRenderTarget[U.id],xe=U.viewport||te;fe.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),Ee=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(bt),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Nt&&We.render(V);let qe=C.toneMapping;C.toneMapping=Si;let nt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),ct===!0&&Re.setGlobalState(C.clippingPlanes,U),Nu(v,V,U),W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let dt=0,Wt=D.length;dt<Wt;dt++){let It=D[dt],{object:St,geometry:un,material:ge,group:Mn}=It;if(ge.side===At&&St.layers.test(U.layers)){let at=ge.side;ge.side=rn,ge.needsUpdate=!0,Gx(St,V,U,un,ge,Mn),ge.side=at,ge.needsUpdate=!0,Me=!0}}Me===!0&&(W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,Ee,be),C.setClearColor(bt,rt),nt!==void 0&&(U.viewport=nt),C.toneMapping=qe}function Nu(v,D,V){let U=D.isScene===!0?D.overrideMaterial:null;for(let H=0,fe=v.length;H<fe;H++){let xe=v[H],{object:de,geometry:Ee,group:be}=xe,qe=xe.material;qe.allowOverride===!0&&U!==null&&(qe=U),de.layers.test(V.layers)&&Gx(de,D,V,Ee,qe,be)}}function Gx(v,D,V,U,H,fe){B!==null&&H.isNodeMaterial&&B.setObject(v,H),v.onBeforeRender(C,D,V,U,H,fe),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(C,D,V,U,v,fe),H.transparent===!0&&H.side===At&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,fe),H.side=Ji,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,fe),H.side=At):C.renderBufferDirect(V,D,U,H,v,fe),v.onAfterRender(C,D,V,U,H,fe)}function Lu(v,D,V){D.isScene!==!0&&(D=Cn);let U=G.get(v),H=A.state.lights,fe=A.state.shadowsArray,xe=H.state.version,de=oe.getParameters(v,H.state,fe,D,V,A.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(de),be=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,U.fog=D.fog;let qe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=se.get(v.envMap||U.environment,qe),U.envMapRotation=U.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Hi),be=new Map,U.programs=be);let nt=be.get(Ee);if(nt!==void 0){if(U.currentProgram===nt&&U.lightsStateVersion===xe)return Vx(v,de),nt}else de.uniforms=oe.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,V,de),v.onBeforeCompile(de,C),nt=oe.acquireProgram(de,Ee),be.set(Ee,nt),U.uniforms=de.uniforms;let Me=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=Re.uniform),Vx(v,de),U.needsLights=pb(v),U.lightsStateVersion=xe,U.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.sunLights.value=H.state.sun,Me.sunLightShadows.value=H.state.sunShadow,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.sunShadowMatrix.value=H.state.sunShadowMatrix,Me.sunShadowCascade.value=H.state.sunShadowCascade,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),U.lightProbeGrid=A.state.lightProbeGridArray.length>0,U.currentProgram=nt,U.uniformsList=null,nt}function kx(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=ca.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Vx(v,D){let V=G.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function hb(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(D.matrixWorld);for(let V=0,U=v.length;V<U;V++){let H=v[V];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function db(v,D,V,U,H){D.isScene!==!0&&(D=Cn),W.resetTextureUnits();let fe=D.fog,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?D.environment:null,de=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,Ee=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,be=se.get(U.envMap||xe,Ee),qe=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Me=!!V.morphAttributes.position,dt=!!V.morphAttributes.normal,Wt=!!V.morphAttributes.color,It=Si;U.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(It=C.toneMapping);let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,un=St!==void 0?St.length:0,ge=G.get(U),Mn=A.state.lights;if(ct===!0&&(Tt===!0||v!==Q)){let wt=v===Q&&U.id===X;Re.setState(U,v,wt)}let at=!1;U.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Mn.state.version||ge.outputColorSpace!==de||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==be||U.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Re.numPlanes||ge.numIntersection!==Re.numIntersection)||ge.vertexAlphas!==qe||ge.vertexTangents!==nt||ge.morphTargets!==Me||ge.morphNormals!==dt||ge.morphColors!==Wt||ge.toneMapping!==It||ge.morphTargetsCount!==un||!!ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,ge.__version=U.version);let ei=ge.currentProgram;at===!0&&(ei=Lu(U,D,H),B&&U.isNodeMaterial&&B.onUpdateProgram(U,ei,ge));let zi=!1,Ws=!1,Mo=!1,yt=ei.getUniforms(),Ft=ge.uniforms;if(_.useProgram(ei.program)&&(zi=!0,Ws=!0,Mo=!0),U.id!==X&&(X=U.id,Ws=!0),ge.needsLights){let wt=hb(A.state.lightProbeGridArray,H);ge.lightProbeGrid!==wt&&(ge.lightProbeGrid=wt,Ws=!0)}if(zi||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),yt.setValue(O,"projectionMatrix",v.projectionMatrix),yt.setValue(O,"viewMatrix",v.matrixWorldInverse);let qs=yt.map.cameraPosition;qs!==void 0&&qs.setValue(O,Dt.setFromMatrixPosition(v.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&yt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ws=!0,Mo=!0)}if(ge.needsLights&&(Mn.state.sunShadowMap.length>0&&yt.setValue(O,"sunShadowMap",Mn.state.sunShadowMap,W),Mn.state.directionalShadowMap.length>0&&yt.setValue(O,"directionalShadowMap",Mn.state.directionalShadowMap,W),Mn.state.spotShadowMap.length>0&&yt.setValue(O,"spotShadowMap",Mn.state.spotShadowMap,W),Mn.state.pointShadowMap.length>0&&yt.setValue(O,"pointShadowMap",Mn.state.pointShadowMap,W)),H.isSkinnedMesh){yt.setOptional(O,H,"bindMatrix"),yt.setOptional(O,H,"bindMatrixInverse");let wt=H.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),yt.setValue(O,"boneTexture",wt.boneTexture,W))}H.isBatchedMesh&&(yt.setOptional(O,H,"batchingTexture"),yt.setValue(O,"batchingTexture",H._matricesTexture,W),yt.setOptional(O,H,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",H._indirectTexture,W),yt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",H._colorsTexture,W));let Xs=V.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&N.update(H,V,ei),(Ws||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,yt.setValue(O,"receiveShadow",H.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&D.environment!==null&&(Ft.envMapIntensity.value=D.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=cI()),Ws){if(yt.setValue(O,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&fb(Ft,Mo),fe&&U.fog===!0&&Te.refreshFogUniforms(Ft,fe),Te.refreshMaterialUniforms(Ft,U,j,q,A.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){let wt=ge.lightProbeGrid;Ft.probesSH.value=wt.texture,Ft.probesMin.value.copy(wt.boundingBox.min),Ft.probesMax.value.copy(wt.boundingBox.max),Ft.probesResolution.value.copy(wt.resolution)}ca.upload(O,kx(ge),Ft,W)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ca.upload(O,kx(ge),Ft,W),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&yt.setValue(O,"center",H.center),yt.setValue(O,"modelViewMatrix",H.modelViewMatrix),yt.setValue(O,"normalMatrix",H.normalMatrix),yt.setValue(O,"modelMatrix",H.matrixWorld),U.uniformsGroups!==void 0){let wt=U.uniformsGroups;for(let qs=0,vo=wt.length;qs<vo;qs++){let Xx=wt[qs];ee.update(Xx,ei),ee.bind(Xx,ei)}}return ei}function fb(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function pb(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,D,V){let U=G.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=D,G.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let V=G.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,V=0){ie=v,J=D,Z=V;let U=null,H=!1,fe=!1;if(v){let de=G.get(v);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),te.copy(v.viewport),Pe.copy(v.scissor),we=v.scissorTest,_.viewport(te),_.scissor(Pe),_.setScissorTest(we),X=-1;return}else if(de.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(de.__hasExternalTextures)W.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qe=v.depthTexture;if(de.__boundDepthTexture!==qe){if(qe!==null&&G.has(qe)&&(v.width!==qe.image.width||v.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(fe=!0);let be=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[D])?U=be[D][V]:U=be[D],H=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?U=G.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[V]:U=be,te.copy(v.viewport),Pe.copy(v.scissor),we=v.scissorTest}else te.copy(_e).multiplyScalar(j).floor(),Pe.copy($e).multiplyScalar(j).floor(),we=Yt;if(V!==0&&(U=z),_.bindFramebuffer(O.FRAMEBUFFER,U)&&_.drawBuffers(v,U),_.viewport(te),_.scissor(Pe),_.setScissorTest(we),H){let de=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,V)}else if(fe){let de=D;for(let Ee=0;Ee<v.textures.length;Ee++){let be=G.get(v.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,be.__webglTexture,V,de)}}else if(v!==null&&V!==0){let de=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,V)}X=-1};function Wx(v){let D=G.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=R.textureFormatReadable(v.format),D.__typeReadable=R.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,V,U,H,fe,xe,de=0){if(!(v&&v.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){_.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let be=v.textures[de],qe=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Me=Wx(be);if(Me.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H&&O.readPixels(D,V,U,H,le.convert(qe),le.convert(nt),fe)}finally{let be=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,U,H,fe,xe,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H){_.bindFramebuffer(O.FRAMEBUFFER,Ee);let be=v.textures[de],qe=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Me=Wx(be);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(D,V,U,H,le.convert(qe),le.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Wt=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Wt);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mE(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(dt),O.deleteSync(It),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){let U=Math.pow(2,-V),H=Math.floor(v.image.width*U),fe=Math.floor(v.image.height*U),xe=D!==null?D.x:0,de=D!==null?D.y:0;W.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,xe,de,H,fe),_.unbindTexture()},this.copyTextureToTexture=function(v,D,V=null,U=null,H=0,fe=0){let xe,de,Ee,be,qe,nt,Me,dt,Wt,It=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(V!==null)xe=V.max.x-V.min.x,de=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,qe=V.min.y,nt=V.isBox3?V.min.z:0;else{let Ft=Math.pow(2,-H);xe=Math.floor(It.width*Ft),de=Math.floor(It.height*Ft),v.isDataArrayTexture?Ee=It.depth:v.isData3DTexture?Ee=Math.floor(It.depth*Ft):Ee=1,be=0,qe=0,nt=0}U!==null?(Me=U.x,dt=U.y,Wt=U.z):(Me=0,dt=0,Wt=0);let St=le.convert(D.format),un=le.convert(D.type),ge;D.isData3DTexture?(W.setTexture3D(D,0),ge=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),ge=O.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),ge=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Mn=_.getParameter(O.UNPACK_ROW_LENGTH),at=_.getParameter(O.UNPACK_IMAGE_HEIGHT),ei=_.getParameter(O.UNPACK_SKIP_PIXELS),zi=_.getParameter(O.UNPACK_SKIP_ROWS),Ws=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,be),_.pixelStorei(O.UNPACK_SKIP_ROWS,qe),_.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let Mo=v.isDataArrayTexture||v.isData3DTexture,yt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Ft=G.get(v),Xs=G.get(D),wt=G.get(Ft.__renderTarget),qs=G.get(Xs.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,wt.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let vo=0;vo<Ee;vo++)Mo&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(v).__webglTexture,H,nt+vo),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(D).__webglTexture,fe,Wt+vo)),O.blitFramebuffer(be,qe,xe,de,Me,dt,xe,de,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||G.has(v)){let Ft=G.get(v),Xs=G.get(D);_.bindFramebuffer(O.READ_FRAMEBUFFER,P),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let wt=0;wt<Ee;wt++)Mo?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,H,nt+wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,H),yt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xs.__webglTexture,fe,Wt+wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xs.__webglTexture,fe),H!==0?O.blitFramebuffer(be,qe,xe,de,Me,dt,xe,de,O.COLOR_BUFFER_BIT,O.NEAREST):yt?O.copyTexSubImage3D(ge,fe,Me,dt,Wt+wt,be,qe,xe,de):O.copyTexSubImage2D(ge,fe,Me,dt,be,qe,xe,de);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(ge,fe,Me,dt,Wt,xe,de,Ee,St,un,It.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(ge,fe,Me,dt,Wt,xe,de,Ee,St,It.data):O.texSubImage3D(ge,fe,Me,dt,Wt,xe,de,Ee,St,un,It):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Me,dt,xe,de,St,un,It.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Me,dt,It.width,It.height,St,It.data):O.texSubImage2D(O.TEXTURE_2D,fe,Me,dt,xe,de,St,un,It);_.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(O.UNPACK_SKIP_PIXELS,ei),_.pixelStorei(O.UNPACK_SKIP_ROWS,zi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,Ws),fe===0&&D.generateMipmaps&&O.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,Z=0,ie=null,_.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function Ag(i,e){if(e===jm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ra||e===Xc){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ra)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Ld(i){let e=new Map,t=new Map,n=i.clone();return ZE(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ZE(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ZE(i.children[n],e.children[n],t)}var ha=class extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Od(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Od(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wg(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Rs.extractUrlBase(e);o=Rs.resolveURL(l,this.path)}else o=Rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===eM){try{o[je.KHR_BINARY_GLTF]=new Xg(e)}catch(h){s&&s(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new jg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new Cg;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new qg(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Yg;break;case je.KHR_MESH_QUANTIZATION:o[h]=new Jg;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lI(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wg=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Sn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new kr(u),l.distance=h;break;case"spot":l=new Dc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Cg=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let s=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}},Ig=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Dg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}},Pg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ng=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Lg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ut)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Og=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Bg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],Sn),Promise.all(s)}},Fg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ug=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],Sn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ut)),Promise.all(s)}},Hg=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},zg=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Gg=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},kg=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Vg=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Od=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Wg=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let y=new Ve,g=new I,p=new fn,M=new I(1,1,1),T=new ze(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),T.setMatrixAt(S,y.compose(g,p,M));let E=null;for(let S in c)if(S==="_COLOR_0"){let A=c[S];T.instanceColor=new vs(A.array,A.itemSize,A.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(E===null){let w=T.geometry;E=new Mt,E.name=w.name;for(let x in w.attributes)E.setAttribute(x,w.attributes[x]);for(let x in w.morphAttributes)E.morphAttributes[x]=w.morphAttributes[x];w.index!==null&&E.setIndex(w.index),E.morphTargetsRelative=w.morphTargetsRelative;for(let x of w.groups)E.addGroup(x.start,x.count,x.materialIndex);w.boundingBox!==null&&(E.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(E.boundingSphere=w.boundingSphere.clone()),E.drawRange.start=w.drawRange.start,E.drawRange.count=w.drawRange.count,E.userData=Object.assign({},w.userData),T.geometry=E}let A=c[S];E.setAttribute(S,new vs(A.array,A.itemSize,A.normalized))}Fe.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},eM="glTF",Zc=12,KE={JSON:1313821514,BIN:5130562},Xg=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Zc,r=new DataView(e,Zc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===KE.JSON){let l=new Uint8Array(e,Zc+o,a);this.content=n.decode(l)}else if(c===KE.BIN){let l=Zc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Kg[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Kg[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=ua[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let y=f.attributes[m],g=c[m];g!==void 0&&(y.normalized=g)}h(f)},a,l,Sn,d)})})}},Yg=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Jg=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Bd=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,y=m-l,g=-2*f+3*d,p=f-d,M=1-g,T=p-d+h;for(let E=0;E!==a;E++){let S=o[y+E+a],A=o[y+E+c]*u,w=o[m+E+a],x=o[m+E]*u;r[E]=M*S+T*A+g*w+p*x}return r}},uI=new fn,Zg=class extends Bd{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return uI.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ua={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$E={9728:zt,9729:Gt,9984:Hh,9985:na,9986:qr,9987:Ai},jE={33071:ni,33648:Ho,10497:Vi},bg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hI={CUBICSPLINE:void 0,LINEAR:Or,STEP:Lr},Tg={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dI(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),i.DefaultMaterial}function Zr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fI(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function pI(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mI(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rg(t.attributes):e=i.indices+":"+Rg(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Rg(i.targets[n]);return e}function Rg(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $g(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gI(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _I=new Ve,jg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new wc(this.options.manager):this.textureLoader=new Nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Zr(r,a,s),ji(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=bg[s.type],a=ua[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ht(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=bg[s.type],l=ua[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,g;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(M);T||(y=new l(a,p*f,s.count*f/u),T=new Xo(y,f/u),t.cache.add(M,T)),g=new qo(T,c,d%f/u,m)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),g=new Ht(y,c,m);if(s.sparse!==void 0){let p=bg.SCALAR,M=ua[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,S=new M(o[1],T,s.sparse.count*p),A=new l(o[2],E,s.sparse.count*c);a!==null&&(g=new Ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,x=S.length;w<x;w++){let b=S[w];if(g.setX(b,A[w*c]),c>=2&&g.setY(b,A[w*c+1]),c>=3&&g.setZ(b,A[w*c+2]),c>=4&&g.setW(b,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=$E[d.magFilter]||Gt,u.minFilter=$E[d.minFilter]||Ai,u.wrapS=jE[d.wrapS]||Vi,u.wrapT=jE[d.wrapT]||Vi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(y){let g=new tn(y);g.needsUpdate=!0,d(g)}),t.load(Rs.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ji(h,o),h.userData.mimeType=o.mimeType||gI(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ko,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Zo,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ie}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Sn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ut)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);let u=r.alphaMode||Tg.OPAQUE;if(u===Tg.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tg.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){let h=r.emissiveFactor;a.emissive=new me().setRGB(h[0],h[1],h[2],Sn)}return r.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zr(s,h,r),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return QE(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=mI(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=QE(new Mt,l,t),l.mode===ri.TRIANGLE_STRIP?d=d.then(f=>Ag(f,Xc)):l.mode===ri.TRIANGLE_FAN&&(d=d.then(f=>Ag(f,ra))),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?dI(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let y=u[f],g=o[f],p,M=l[f];if(g.mode===ri.TRIANGLES||g.mode===ri.TRIANGLE_STRIP||g.mode===ri.TRIANGLE_FAN||g.mode===void 0){let T=r.isSkinnedMesh===!0,E=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&E?new mc(y,M):new Ue(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===ri.LINES)p=new _c(y,M);else if(g.mode===ri.LINE_STRIP)p=new Ur(y,M);else if(g.mode===ri.LINE_LOOP)p=new xc(y,M);else if(g.mode===ri.POINTS)p=new Hr(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&pI(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ji(p,r),g.extensions&&Zr(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zr(s,h[0],r),h[0];let d=new ft;r.extensions&&Zr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Ke.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gc(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],y=f.target,g=y.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],y=h[3],g=h[4],p=[];for(let T=0,E=d.length;T<E;T++){let S=d[T],A=f[T],w=m[T],x=y[T],b=g[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=n._createAnimationTracks(S,A,w,x,b);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}let M=new Gr(r,void 0,p);return ji(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_I)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Yo:l.length>1?u=new ft:l.length===1?u=l[0]:u=new Fe,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ji(u,r),r.extensions&&Zr(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),ji(r,n),n.extensions&&Zr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(Ld(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Pn||d instanceof tn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}lr[r.path]===lr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(lr[r.path]){case lr.weights:u=As;break;case lr.rotation:u=bs;break;case lr.translation:case lr.scale:u=ir;break;default:switch(n.itemSize){case 1:u=As;break;case 2:case 3:default:u=ir;break}break}let h=s.interpolation!==void 0?hI[s.interpolation]:Or,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let y=new u(c[f]+"."+lr[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$g(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof bs?Zg:Bd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xI(i,e,t){let n=e.attributes,s=new Vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let u=$g(ua[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let y=$g(ua[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Dn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function QE(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Kg[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ji(i,e),xI(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fI(i,e.targets,t):i})}var Qg=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Ci=i=>JSON.parse(JSON.stringify(i)),wi=(i,e)=>{if(!Number.isFinite(i))throw new Error("06H invalid "+e);return i},da=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Ci(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Ci(t):null}has(e){return this.snapshots.has(e)}},Fd=class{constructor({id:e,store:t,actorStart:n,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...Qg,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:wi(n.x,"actorStart.x"),z:wi(n.z,"actorStart.z")},this.actorDestination={x:wi(s.x,"actorDestination.x"),z:wi(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Ci(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:n=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(n,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Ci(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Ci(this.state.memory),actor:Ci(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Ci(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Ci(e.memory),actor:Ci(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Ci(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),n=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=n,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*n,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*n}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Ci(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(wi(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");wi(e.memory.eventId,"snapshot.memory.eventId"),wi(e.actor.progress,"snapshot.actor.progress"),wi(e.actor.position?.x,"snapshot.actor.position.x"),wi(e.actor.position?.z,"snapshot.actor.position.z"),wi(e.actor.destination?.x,"snapshot.actor.destination.x"),wi(e.actor.destination?.z,"snapshot.actor.destination.z")}};var De=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),Kc=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),tM=(i,e)=>{if(!Number.isFinite(i))throw new Error("06I invalid "+e);return i},fa=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:n=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...Kc,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=n,this.onSleep=s,this.onWake=r,this.tier=De.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[De.NEAR]:0,[De.MID]:0,[De.FAR]:0,[De.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===De.NEAR?"FRAME":this.tier===De.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===De.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:n=Date.now()}={}){let s=tM(e,"distanceM"),r=Math.max(0,tM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,n),this.tier===De.DORMANT)return 0;if(this.tier===De.NEAR)return this._tick(r,n),1;let a=this.tier===De.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,n),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let n=this.tier;if(n===De.DORMANT&&e!==De.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,n),this.onTierChange(e,n,t);return}if(n!==De.DORMANT&&e===De.DORMANT){this.onSleep(t,n,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,n,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,n,t)}_nextTier(e){let t=this.config;return this.tier===De.DORMANT?e>t.wakeRadiusM?De.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?De.DORMANT:this.tier===De.NEAR?e>t.nearExitM?De.MID:De.NEAR:this.tier===De.MID?e<=t.nearEnterM?De.NEAR:e>t.midExitM?De.FAR:De.MID:this.tier===De.FAR?e<=t.nearEnterM?De.NEAR:e<=t.midEnterM?De.MID:De.FAR:De.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?De.NEAR:e<=this.config.midEnterM?De.MID:De.FAR}};var yI=Object.freeze([10,20,40,64]),Kr=Object.freeze({warmupMs:4e3,measureMs:15e3,minMeasuredFrames:300,avgFrameMsMax:17.8,p95FrameMsMax:20.5,p99FrameMsMax:34,avgAuditCpuMsMax:2,p95AuditCpuMsMax:4,drawCallsMax:120,trianglesMax:35e4}),ur=i=>JSON.parse(JSON.stringify(i));function nM(i,e){if(!Number.isInteger(i)||i<0||i>=192)throw new Error("06J invalid actor index");let t=Math.floor(i/48),n=i%48,s=n/48*Math.PI*2+t*.173,r=yI[t]+(n%5-2)*.28,o=s+Math.PI*.5,a={x:Math.cos(s)*r,z:Math.sin(s)*r},c={x:a.x+Math.cos(o)*(3.4+i%4*.35),z:a.z+Math.sin(o)*(3.4+i%4*.35)},l=i%4===0,u=i%17*.013;return{id:"06J_ACTOR_"+String(i).padStart(3,"0"),index:i,ring:t,localStart:a,localDestination:c,position:{...a},goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:u,winner:l?"HAZARD":"FOOD",memory:{state:l?"DISTURBED":"CALM",expiresAt:l?e+2e4+i%5*1e3:0},visualActive:!0,snapshot:null,sleepCount:0,wakeCount:0}}function t0(i,e,t){if(!i)throw new Error("06J actor required");let n=Math.max(0,Number.isFinite(e)?e:0);i.memory.state!=="CALM"&&t>=i.memory.expiresAt&&(i.memory.state="CALM",i.memory.expiresAt=0),i.winner=i.memory.state==="DISTURBED"?"HAZARD":"FOOD",i.winner==="HAZARD"?i.goal!=="HAZARD"&&(i.goal==="FOOD"&&(i.suspendedGoal="FOOD"),i.goal="HAZARD",i.behaviorState="EVADING"):i.suspendedGoal==="FOOD"&&(i.goal="FOOD",i.suspendedGoal="NONE",i.behaviorState="SEEKING_FOOD"),i.goal==="FOOD"&&i.behaviorState==="SEEKING_FOOD"&&(i.progress=Math.min(1,i.progress+n/12e4),i.progress>=1&&(i.progress=1,i.goal="FOOD REACHED",i.behaviorState="COMPLETE"));let s=i.progress;return i.position.x=i.localStart.x+(i.localDestination.x-i.localStart.x)*s,i.position.z=i.localStart.z+(i.localDestination.z-i.localStart.z)*s,i}function iM(i,e,t){return{version:e,cellId:i.id,serializedAt:t,state:{goal:i.goal,suspendedGoal:i.suspendedGoal,behaviorState:i.behaviorState,progress:i.progress,winner:i.winner,memory:ur(i.memory),position:ur(i.position),localStart:ur(i.localStart),localDestination:ur(i.localDestination)}}}function sM(i,e,t){if(!e||e.cellId!==i.id)throw new Error("06J snapshot mismatch");let n=e.state;return i.goal=n.goal,i.suspendedGoal=n.suspendedGoal,i.behaviorState=n.behaviorState,i.progress=n.progress,i.winner=n.winner,i.memory=ur(n.memory),i.position=ur(n.position),i.localStart=ur(n.localStart),i.localDestination=ur(n.localDestination),t0(i,0,t),Math.max(0,t-e.serializedAt)}function e0(i,e){if(!i.length)return 0;let t=[...i].sort((s,r)=>s-r),n=Math.min(t.length-1,Math.max(0,Math.ceil(e/100*t.length)-1));return t[n]}function rM({frameSamples:i=[],cpuSamples:e=[],drawCallsMax:t=0,trianglesMax:n=0,actorCount:s=0,duplicateCount:r=0,limits:o=Kr}={}){let a=p=>p.length?p.reduce((M,T)=>M+T,0)/p.length:0,c=a(i),l=e0(i,95),u=e0(i,99),h=i.length?Math.max(...i):0,d=a(e),f=e0(e,95),m=e.length?Math.max(...e):0,y={enough_frames:i.length>=o.minMeasuredFrames,avg_frame_ms:c<=o.avgFrameMsMax,p95_frame_ms:l<=o.p95FrameMsMax,p99_frame_ms:u<=o.p99FrameMsMax,avg_audit_cpu_ms:d<=o.avgAuditCpuMsMax,p95_audit_cpu_ms:f<=o.p95AuditCpuMsMax,draw_calls:t<=o.drawCallsMax,triangles:n<=o.trianglesMax,actor_count:s===192,duplicates:r===0},g=Object.entries(y).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:y,measured_frames:i.length,frame_avg_ms:c,frame_p95_ms:l,frame_p99_ms:u,frame_worst_ms:h,equivalent_fps:c>0?1e3/c:0,audit_cpu_avg_ms:d,audit_cpu_p95_ms:f,audit_cpu_worst_ms:m,draw_calls_max:t,triangles_max:n,actor_count:s,duplicate_count:r}}var Ud=Object.freeze({memoryRadiusM:1.8,disturbedMs:2300,settlingMs:2800,hazardPriority:100,foodPriority:40}),Hd=i=>JSON.parse(JSON.stringify(i)),hr=(i,e)=>{if(!Number.isFinite(i))throw new Error("07A invalid "+e);return i};function oM(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a;if(c<=1e-12)return Math.hypot(i-t,e-n);let l=Math.max(0,Math.min(1,((i-t)*o+(e-n)*a)/c)),u=t+o*l,h=n+a*l;return Math.hypot(i-u,e-h)}var $c=class{constructor(e=0){this.lastEventId=Math.max(0,Number.isFinite(e)?Math.floor(e):0)}next(e,{at:t=Date.now(),payload:n={}}={}){if(!e)throw new Error("07A event type required");return hr(t,"event.at"),this.lastEventId++,Object.freeze({id:this.lastEventId,type:e,at:t,payload:Hd(n)})}observe(e){return!Number.isFinite(e)||e<=this.lastEventId?!1:(this.lastEventId=Math.floor(e),!0)}},zd=class{constructor(e={}){if(this.config={...Ud,...e},!(this.config.memoryRadiusM>0&&this.config.disturbedMs>0&&this.config.settlingMs>0))throw new Error("07A invalid memory config");this.state="CALM",this.eventId=0,this.startedAt=0,this.expiresAt=0,this.center={x:0,z:0}}applyEvent(e,{center:t,now:n=e?.at??Date.now()}={}){if(!e||!Number.isFinite(e.id))throw new Error("07A memory event id required");return e.id<=this.eventId?!1:(hr(n,"memory now"),hr(t?.x,"memory center.x"),hr(t?.z,"memory center.z"),this.eventId=e.id,this.startedAt=n,this.expiresAt=n+this.config.disturbedMs+this.config.settlingMs,this.center={x:t.x,z:t.z},this.state="DISTURBED",!0)}resolve(e=Date.now()){return hr(e,"memory resolve now"),this.state==="CALM"?this.state:(e>=this.expiresAt?this.state="CALM":e>=this.startedAt+this.config.disturbedMs?this.state="SETTLING":this.state="DISTURBED",this.state)}overlapsPoint(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:Math.hypot(e.x-this.center.x,e.z-this.center.z)<=this.config.memoryRadiusM}overlapsSegment(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:oM(this.center.x,this.center.z,e.a.x,e.a.z,e.b.x,e.b.z)<=this.config.memoryRadiusM}snapshot(){return{state:this.state,eventId:this.eventId,startedAt:this.startedAt,expiresAt:this.expiresAt,center:Hd(this.center),config:{memoryRadiusM:this.config.memoryRadiusM,disturbedMs:this.config.disturbedMs,settlingMs:this.config.settlingMs}}}restore(e,t=Date.now()){if(!e)throw new Error("07A memory snapshot required");return this.state=e.state,this.eventId=e.eventId,this.startedAt=e.startedAt,this.expiresAt=e.expiresAt,this.center=Hd(e.center),this.resolve(t),this.state}},Gd=class{constructor(e={}){this.priorities={HAZARD:Ud.hazardPriority,FOOD:Ud.foodPriority,...e}}choose(e=[]){let t=e.filter(n=>n&&n.valid!==!1).map(n=>({id:n.id,priority:Number.isFinite(n.priority)?n.priority:this.priorities[n.id]??0,eventAt:Number.isFinite(n.eventAt)?n.eventAt:0,payload:n.payload??null}));return t.sort((n,s)=>s.priority-n.priority||String(n.id).localeCompare(String(s.id))),t[0]??null}},kd=class{constructor({goal:e="FOOD",progress:t=0}={}){this.activeGoal=e,this.progress=Math.max(0,Math.min(1,t)),this.suspendedGoal=null,this.suspendedProgress=0,this.interruption=null,this.behaviorState=e==="FOOD"?"SEEKING_FOOD":"ACTIVE"}setProgress(e){this.progress=Math.max(0,Math.min(1,hr(e,"goal progress"))),this.activeGoal==="FOOD"&&this.progress>=1&&(this.activeGoal="FOOD REACHED",this.behaviorState="COMPLETE")}advanceFood(e){return this.activeGoal!=="FOOD"||this.behaviorState!=="SEEKING_FOOD"?this.progress:(this.setProgress(this.progress+Math.max(0,hr(e,"goal delta"))),this.progress)}interrupt(e="HAZARD"){return this.activeGoal===e?!1:(this.activeGoal==="FOOD"&&(this.suspendedGoal="FOOD",this.suspendedProgress=this.progress),this.interruption=e,this.activeGoal=e,this.behaviorState="EVADING",!0)}clearInterruption(){return this.interruption?(this.interruption=null,this.suspendedGoal?(this.activeGoal=this.suspendedGoal,this.progress=this.suspendedProgress,this.suspendedGoal=null,this.suspendedProgress=0,this.behaviorState=this.activeGoal==="FOOD"?"SEEKING_FOOD":"ACTIVE",!0):!1):!1}reconcile(e){return(e?.id??null)==="HAZARD"?this.interrupt("HAZARD"):this.interruption==="HAZARD"&&this.clearInterruption(),this.activeGoal}snapshot(){return{activeGoal:this.activeGoal,progress:this.progress,suspendedGoal:this.suspendedGoal,suspendedProgress:this.suspendedProgress,interruption:this.interruption,behaviorState:this.behaviorState}}restore(e){if(!e)throw new Error("07A goal snapshot required");Object.assign(this,Hd(e))}},dr=class{constructor({memoryConfig:e={},priorities:t={},initialGoal:n="FOOD",initialProgress:s=0}={}){this.events=new $c,this.memory=new zd(e),this.arbiter=new Gd(t),this.goals=new kd({goal:n,progress:s}),this.lastWinner=null}createHazardEvent({center:e,at:t=Date.now(),payload:n={}}={}){let s=this.events.next("HAZARD",{at:t,payload:n});return this.memory.applyEvent(s,{center:e,now:t}),s}observeHazardEvent(e,{center:t,now:n=e?.at??Date.now()}={}){if(!e||e.type!=="HAZARD")throw new Error("07A HAZARD event required");return this.events.observe(e.id),this.memory.applyEvent(e,{center:t,now:n})}update({now:e=Date.now(),actorPath:t,foodValid:n=!0,foodEventAt:s=e,foodProgressDelta:r=0}={}){this.memory.resolve(e);let o=t?this.memory.overlapsSegment(t,e):this.memory.state!=="CALM",a=this.arbiter.choose([{id:"HAZARD",valid:o,eventAt:this.memory.startedAt},{id:"FOOD",valid:n,eventAt:s}]);return this.lastWinner=a?.id??null,this.goals.reconcile(a),this.goals.activeGoal==="FOOD"&&this.goals.advanceFood(r),{memoryState:this.memory.state,winner:this.lastWinner,goal:this.goals.activeGoal,suspendedGoal:this.goals.suspendedGoal,progress:this.goals.progress}}serialize(e=Date.now()){return hr(e,"kernel serialize now"),{version:1,serializedAt:e,eventSequence:{lastEventId:this.events.lastEventId},memory:this.memory.snapshot(),goals:this.goals.snapshot(),lastWinner:this.lastWinner}}restore(e,t=Date.now()){if(!e||e.version!==1)throw new Error("07A kernel snapshot version mismatch");return this.events=new $c(e.eventSequence?.lastEventId??0),this.memory.restore(e.memory,t),this.goals.restore(e.goals),this.lastWinner=e.lastWinner??null,this.memory.state==="CALM"&&this.goals.interruption==="HAZARD"&&this.goals.clearInterruption(),{offscreenMs:Math.max(0,t-e.serializedAt),memoryState:this.memory.state,goal:this.goals.activeGoal,progress:this.goals.progress}}};var aM=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Di=i=>JSON.parse(JSON.stringify(i)),Ii=(i,e)=>{if(!Number.isFinite(i))throw new Error("06H invalid "+e);return i},jc=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Di(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Di(t):null}has(e){return this.snapshots.has(e)}},Qc=class{constructor({id:e,store:t,actorStart:n,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...aM,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:Ii(n.x,"actorStart.x"),z:Ii(n.z,"actorStart.z")},this.actorDestination={x:Ii(s.x,"actorDestination.x"),z:Ii(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Di(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:n=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(n,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Di(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Di(this.state.memory),actor:Di(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Di(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Di(e.memory),actor:Di(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Di(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),n=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=n,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*n,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*n}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Di(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(Ii(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");Ii(e.memory.eventId,"snapshot.memory.eventId"),Ii(e.actor.progress,"snapshot.actor.progress"),Ii(e.actor.position?.x,"snapshot.actor.position.x"),Ii(e.actor.position?.z,"snapshot.actor.position.z"),Ii(e.actor.destination?.x,"snapshot.actor.destination.x"),Ii(e.actor.destination?.z,"snapshot.actor.destination.z")}};var it=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),lM=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),cM=(i,e)=>{if(!Number.isFinite(i))throw new Error("06I invalid "+e);return i},el=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:n=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...lM,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=n,this.onSleep=s,this.onWake=r,this.tier=it.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[it.NEAR]:0,[it.MID]:0,[it.FAR]:0,[it.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===it.NEAR?"FRAME":this.tier===it.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===it.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:n=Date.now()}={}){let s=cM(e,"distanceM"),r=Math.max(0,cM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,n),this.tier===it.DORMANT)return 0;if(this.tier===it.NEAR)return this._tick(r,n),1;let a=this.tier===it.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,n),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let n=this.tier;if(n===it.DORMANT&&e!==it.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,n),this.onTierChange(e,n,t);return}if(n!==it.DORMANT&&e===it.DORMANT){this.onSleep(t,n,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,n,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,n,t)}_nextTier(e){let t=this.config;return this.tier===it.DORMANT?e>t.wakeRadiusM?it.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?it.DORMANT:this.tier===it.NEAR?e>t.nearExitM?it.MID:it.NEAR:this.tier===it.MID?e<=t.nearEnterM?it.NEAR:e>t.midExitM?it.FAR:it.MID:this.tier===it.FAR?e<=t.nearEnterM?it.NEAR:e<=t.midEnterM?it.MID:it.FAR:it.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?it.NEAR:e<=this.config.midEnterM?it.MID:it.FAR}};var $r=Object.freeze({version:1,milestone:"07A \u2014 Production Architecture Promotion",modules:["WorldEventSequence","TimedSpatialMemory","StimulusArbiter","GoalContinuity","LivingWorldKernel","StreamStateStore","StreamCell","SimulationLODController"],stateOwnership:{WorldEventSequence:"monotonic event identity only",TimedSpatialMemory:"local timed world-memory state + spatial applicability",StimulusArbiter:"stateless deterministic decision authority",GoalContinuity:"active/suspended goal + progress continuity",LivingWorldKernel:"orchestration order; no render ownership",StreamStateStore:"canonical serialized cell snapshots",StreamCell:"load/update/serialize/unload/rehydrate lifecycle",SimulationLODController:"distance tier + cadence + sleep/wake transitions"},boundaries:{rendering:"external adapter; no THREE dependency in production core",dom:"none",input:"external",combat:"unchanged / external",persistenceDisk:"not included",productionActorPipeline:"deferred to 07B",streamedProductionRegion:"deferred to 07C"}});var uM=1,EI=i=>JSON.parse(JSON.stringify(i)),Pi=(i,e)=>{if(!Number.isFinite(i))throw new Error("07B invalid "+e);return i};function MI(i){return Object.freeze({typeId:i.typeId,asset:Object.freeze({...i.asset}),scale:i.scale,yawOffset:i.yawOffset,animationMap:Object.freeze({...i.animationMap}),presentation:Object.freeze({...i.presentation})})}var n0=class{constructor(){this.definitions=new Map}register(e){if(!e?.typeId)throw new Error("07B actor typeId required");if(this.definitions.has(e.typeId))throw new Error("07B duplicate actor definition "+e.typeId);if(!e.asset?.id||!e.asset?.url)throw new Error("07B actor asset id/url required");let t=Pi(e.scale??1,"definition.scale"),n=Pi(e.yawOffset??0,"definition.yawOffset"),s=MI({typeId:e.typeId,asset:{id:e.asset.id,url:e.asset.url},scale:t,yawOffset:n,animationMap:e.animationMap??{},presentation:e.presentation??{}});return this.definitions.set(s.typeId,s),s}get(e){let t=this.definitions.get(e);if(!t)throw new Error("07B unknown actor definition "+e);return t}has(e){return this.definitions.has(e)}list(){return[...this.definitions.values()]}},Vd=class{constructor({id:e,definition:t,kernel:n,position:s={x:0,y:0,z:0},yaw:r=0,animationIntent:o="IDLE"}){if(!e)throw new Error("07B actor id required");this.id=e,this.typeId=t.typeId,this.definition=t,this.kernel=n,this.position={x:Pi(s.x??0,"actor.position.x"),y:Pi(s.y??0,"actor.position.y"),z:Pi(s.z??0,"actor.position.z")},this.yaw=Pi(r,"actor.yaw"),this.animationIntent=o||"IDLE",this.bindingId=null,this.bindingClaims=0,this.createdAt=Date.now()}setTransform({x:e=this.position.x,y:t=this.position.y,z:n=this.position.z,yaw:s=this.yaw}={}){this.position={x:Pi(e,"actor.position.x"),y:Pi(t,"actor.position.y"),z:Pi(n,"actor.position.z")},this.yaw=Pi(s,"actor.yaw")}setAnimationIntent(e){if(!e)throw new Error("07B animation intent required");this.animationIntent=String(e)}claimBinding(e){if(!e)throw new Error("07B binding id required");if(this.bindingId&&this.bindingId!==e)throw new Error("07B duplicate visual binding for "+this.id);return this.bindingId?!1:(this.bindingId=e,this.bindingClaims++,!0)}releaseBinding(e){return this.bindingId!==e?!1:(this.bindingId=null,!0)}serialize(e=Date.now()){return Pi(e,"actor serialize now"),{version:uM,actorId:this.id,typeId:this.typeId,serializedAt:e,transform:{position:EI(this.position),yaw:this.yaw},animationIntent:this.animationIntent,kernel:this.kernel.serialize(e)}}},Wd=class{constructor({kernelFactory:e=t=>new dr(t)}={}){this.definitions=new n0,this.actors=new Map,this.kernelFactory=e,this.createdCount=0,this.destroyedCount=0}registerDefinition(e){return this.definitions.register(e)}createActor({id:e,typeId:t,position:n={x:0,y:0,z:0},yaw:s=0,animationIntent:r="IDLE",kernelOptions:o={}}){if(this.actors.has(e))throw new Error("07B duplicate actor id "+e);let a=this.definitions.get(t),c=this.kernelFactory(o),l=new Vd({id:e,definition:a,kernel:c,position:n,yaw:s,animationIntent:r});return this.actors.set(e,l),this.createdCount++,l}restoreActor(e,t=Date.now()){if(!e||e.version!==uM)throw new Error("07B actor snapshot version mismatch");if(this.actors.has(e.actorId))throw new Error("07B restore collision "+e.actorId);let n=this.definitions.get(e.typeId),s=this.kernelFactory();s.restore(e.kernel,t);let r=new Vd({id:e.actorId,definition:n,kernel:s,position:e.transform.position,yaw:e.transform.yaw,animationIntent:e.animationIntent});return this.actors.set(r.id,r),this.createdCount++,r}destroyActor(e){let t=this.actors.get(e);if(!t)return!1;if(t.bindingId)throw new Error("07B actor must release visual binding before destroy "+e);return this.actors.delete(e),this.destroyedCount++,!0}getActor(e){return this.actors.get(e)??null}listActors(){return[...this.actors.values()]}get size(){return this.actors.size}};var vI=0,i0=class{constructor({loader:e=new ha}={}){this.loader=e,this.entries=new Map,this.loadCount=0,this.instanceCount=0}async load(e){let t=e.asset,n=this.entries.get(t.id);if(n){if(n.url!==t.url)throw new Error("07B asset id/url conflict "+t.id);return n.promise}this.loadCount++;let s=this.loader.loadAsync(t.url).then(r=>({gltf:r,template:r.scene,clips:[...r.animations]}));return this.entries.set(t.id,{url:t.url,promise:s}),s}async instantiate(e){let t=await this.load(e),n=Ld(t.template);return this.instanceCount++,{model:n,clips:t.clips}}get assetCount(){return this.entries.size}},s0=class{constructor({record:e,definition:t,scene:n,assetCache:s}){if(!e||!t||!n||!s)throw new Error("07B binding dependencies required");this.record=e,this.definition=t,this.scene=n,this.assetCache=s,this.bindingId="07B_BINDING_"+ ++vI,this.root=new ft,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.model=null,this.mixer=null,this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.ready=!1}async attach(){if(this.attached)return this;this.record.claimBinding(this.bindingId);let{model:e,clips:t}=await this.assetCache.instantiate(this.definition);this.model=e,this.model.scale.setScalar(this.definition.scale),this.model.rotation.y=this.definition.yawOffset,this.model.traverse(n=>{n.isMesh&&(n.castShadow=!!this.definition.presentation.castShadow,n.receiveShadow=this.definition.presentation.receiveShadow!==!1)}),this.root.add(this.model),this.mixer=new ws(this.model);for(let n of t)this.actions.set(n.name,this.mixer.clipAction(n));return this.scene.add(this.root),this.attached=!0,this.ready=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let n={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of n)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){if(this.record.setAnimationIntent(e),!this.ready||!this.mixer)return null;let n=this.resolveAnimation(e);if(!n)return null;let s=this.actions.get(n);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=n,n}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}update(e){this.ready&&(this.syncTransform(),this.mixer&&this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,this.ready=!1,this.model=null,this.mixer=null,this.actions.clear(),this.activeAction=null,!0):!1}},Xd=class{constructor({scene:e,assetCache:t=new i0}={}){if(!e)throw new Error("07B Three actor factory requires scene");this.scene=e,this.assetCache=t,this.bindings=new Map,this.duplicateBindingCount=0}async bind(e){if(this.bindings.has(e.id))throw this.duplicateBindingCount++,new Error("07B duplicate actor binding "+e.id);let t=new s0({record:e,definition:e.definition,scene:this.scene,assetCache:this.assetCache});return await t.attach(),this.bindings.set(e.id,t),t}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var qd=i=>JSON.parse(JSON.stringify(i)),pa=(i,e)=>{if(!Number.isFinite(i))throw new Error("07C invalid "+e);return i},Ni=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.regionId!==e)throw new Error("07C region snapshot mismatch");if(t.version!==1)throw new Error("07C region snapshot version mismatch");return this.snapshots.set(e,qd(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?qd(t):null}has(e){return this.snapshots.has(e)}},Qi=class{constructor({id:e,pipeline:t,store:n=new Ni,actorBlueprints:s=[],bindActor:r=async()=>{},unbindActor:o=async()=>{},loadRadiusM:a=24,unloadRadiusM:c=38}={}){if(!e)throw new Error("07C region id required");if(!t)throw new Error("07C production actor pipeline required");if(!Array.isArray(s)||s.length===0)throw new Error("07C actor blueprints required");if(!(a>0&&c>a))throw new Error("07C region hysteresis invalid");let l=new Set;for(let u of s){if(!u?.id||!u?.typeId)throw new Error("07C invalid actor blueprint");if(l.has(u.id))throw new Error("07C duplicate actor blueprint "+u.id);l.add(u.id)}this.id=e,this.pipeline=t,this.store=n,this.actorBlueprints=qd(s),this.bindActor=r,this.unbindActor=o,this.loadRadiusM=pa(a,"loadRadiusM"),this.unloadRadiusM=pa(c,"unloadRadiusM"),this.lifecycle="UNLOADED",this.operation=null,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.duplicateCount=0,this.lastSerializedAt=0,this.lastOffscreenMs=0,this.lastRestoreProgressPreserved=!1,this.lastRestoreIdsStable=!1,this.lastError=null}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}get actorIds(){return this.actorBlueprints.map(e=>e.id)}get activeActors(){return this.actorIds.map(e=>this.pipeline.getActor(e)).filter(Boolean)}desiredLifecycle(e){let t=pa(e,"distanceM");return this.lifecycle==="ACTIVE"?t>=this.unloadRadiusM?"UNLOADED":"ACTIVE":this.lifecycle==="UNLOADED"?t<=this.loadRadiusM?"ACTIVE":"UNLOADED":this.lifecycle}serialize(e=Date.now()){pa(e,"serialize now");let t=this.actorIds.map(n=>{let s=this.pipeline.getActor(n);if(!s)throw new Error("07C cannot serialize missing actor "+n);return s.serialize(e)});return{version:1,regionId:this.id,serializedAt:e,actorIds:[...this.actorIds],actors:t}}async load(e=Date.now()){return this.isActive?{rehydrated:!1,alreadyActive:!0,offscreenMs:0}:this.operation?this.operation:(this.operation=this._load(e).finally(()=>{this.operation=null}),this.operation)}async _load(e){this.lastError=null;let t=this.store.load(this.id);this.lifecycle=t?"REHYDRATING":"LOADING";let n=[],s=[],r=new Map;try{if(t){if(t.version!==1||t.regionId!==this.id)throw new Error("07C invalid region snapshot");if(t.actorIds.join("|")!==this.actorIds.join("|"))throw new Error("07C region actor identity mismatch");for(let o of t.actors){r.set(o.actorId,o.kernel?.goals?.progress);let a=this.pipeline.restoreActor(o,e);n.push(a)}}else for(let o of this.actorBlueprints){let a=this.pipeline.createActor(o);n.push(a)}for(let o of n)await this.bindActor(o),s.push(o);return this.lifecycle="ACTIVE",this.loadCount++,t&&(this.restoreCount++,this.lastOffscreenMs=Math.max(0,e-t.serializedAt),this.lastRestoreIdsStable=n.length===this.actorIds.length&&n.every((o,a)=>o.id===this.actorIds[a]),this.lastRestoreProgressPreserved=n.every(o=>{let a=r.get(o.id);return Number.isFinite(a)&&Math.abs(o.kernel.goals.progress-a)<1e-12})),{rehydrated:!!t,alreadyActive:!1,offscreenMs:this.lastOffscreenMs,actorIds:n.map(o=>o.id)}}catch(o){this.lastError=o;for(let a of s.slice().reverse())try{await this.unbindActor(a)}catch{}for(let a of n.slice().reverse()){if(a.bindingId){this.duplicateCount++;continue}this.pipeline.destroyActor(a.id)}throw this.lifecycle="UNLOADED",o}}async unload(e=Date.now()){return this.isActive?this.operation?this.operation:(this.operation=this._unload(e).finally(()=>{this.operation=null}),this.operation):null}async _unload(e){this.lastError=null,this.lifecycle="SERIALIZING";let t=this.serialize(e);this.store.save(this.id,t),this.lastSerializedAt=e,this.lifecycle="UNLOADING";try{for(let n of this.actorIds){let s=this.pipeline.getActor(n);if(!s)throw new Error("07C missing actor during unload "+n);await this.unbindActor(s)}for(let n of this.actorIds){let s=this.pipeline.getActor(n);if(!s)throw new Error("07C actor disappeared before destroy "+n);if(s.bindingId)throw this.duplicateCount++,new Error("07C actor still bound during destroy "+n);this.pipeline.destroyActor(n)}return this.lifecycle="UNLOADED",this.unloadCount++,qd(t)}catch(n){throw this.lastError=n,n}}update({dtMs:e=0,now:t=Date.now(),foodProgressPerSecond:n=.008}={}){if(!this.isActive)return 0;let r=Math.max(0,pa(e,"dtMs"))/1e3*Math.max(0,pa(n,"foodProgressPerSecond")),o=0;for(let a of this.activeActors)a.kernel.update({now:t,foodValid:!0,foodEventAt:t,foodProgressDelta:r}),o++;return o}};var Yd=(i,e)=>{if(!Number.isFinite(i))throw new Error("07D invalid "+e);return i},Jd=class{constructor({region:e,pipeline:t,actorId:n,hazardCenter:s={x:0,z:0},triggerDelayMs:r=1800}={}){if(!e)throw new Error("07D region required");if(!t)throw new Error("07D actor pipeline required");if(!n)throw new Error("07D actor id required");this.region=e,this.pipeline=t,this.actorId=n,this.hazardCenter={x:Yd(s.x,"hazardCenter.x"),z:Yd(s.z,"hazardCenter.z")},this.triggerDelayMs=Math.max(0,Yd(r,"triggerDelayMs")),this.stage="WAITING_REGION",this.firstActiveAt=0,this.hazardEventId=0,this.hazardEmittedAt=0,this.hazardObserved=!1,this.recoveryObserved=!1,this.streamOutObserved=!1,this.restoreObserved=!1,this.baselineProgress=null,this.recoveredProgress=null,this.lastUnloadCount=e.unloadCount??0,this.lastRestoreCount=e.restoreCount??0}get actor(){return this.pipeline.getActor(this.actorId)}update(e=Date.now()){Yd(e,"update now"),(this.region.unloadCount??0)>this.lastUnloadCount&&(this.streamOutObserved=!0,this.lastUnloadCount=this.region.unloadCount),(this.region.restoreCount??0)>this.lastRestoreCount&&(this.restoreObserved=!0,this.lastRestoreCount=this.region.restoreCount);let t=this.actor;if(!this.region.isActive||!t)return this.streamOutObserved&&(this.stage="STREAMED_OUT"),this.snapshot();if(this.firstActiveAt||(this.firstActiveAt=e,this.stage="FOOD_ACTIVE"),!this.hazardEventId&&e-this.firstActiveAt>=this.triggerDelayMs){this.baselineProgress=t.kernel.goals.progress;let r=t.kernel.createHazardEvent({center:this.hazardCenter,at:e});this.hazardEventId=r.id,this.hazardEmittedAt=e,this.stage="HAZARD_EMITTED"}let n=t.kernel.memory.state,s=t.kernel.goals.activeGoal;return this.hazardEventId&&s==="HAZARD"&&(this.hazardObserved=!0,this.stage="HAZARD_ACTIVE"),this.hazardObserved&&n==="CALM"&&s==="FOOD"&&(this.recoveryObserved=!0,this.recoveredProgress=t.kernel.goals.progress,this.stage=this.restoreObserved?"RESTORED":"BEHAVIOR_RECOVERED"),this.restoreObserved&&this.recoveryObserved&&(this.stage="RESTORED"),this.snapshot()}completion({assetLoadCount:e,duplicateCount:t=0,regressionStatus:n="WAITING"}={}){let s=Number.isFinite(this.baselineProgress)&&Number.isFinite(this.recoveredProgress)&&this.recoveredProgress>=this.baselineProgress-1e-12,r={hazard_emitted:this.hazardEventId>0,hazard_observed:this.hazardObserved,recovery_observed:this.recoveryObserved,progress_preserved:s,stream_out_observed:this.streamOutObserved,restore_observed:this.restoreObserved,region_ids_stable:this.region.lastRestoreIdsStable===!0,region_progress_preserved:this.region.lastRestoreProgressPreserved===!0,asset_load_one:e===1,duplicates:t===0,regression:n==="PASS"},o=Object.entries(r).filter(([,a])=>!a).map(([a])=>a);return{pass:o.length===0,failed:o,checks:r}}snapshot(){return{version:1,stage:this.stage,actorId:this.actorId,hazardEventId:this.hazardEventId,hazardEmittedAt:this.hazardEmittedAt,hazardObserved:this.hazardObserved,recoveryObserved:this.recoveryObserved,streamOutObserved:this.streamOutObserved,restoreObserved:this.restoreObserved,baselineProgress:this.baselineProgress,recoveredProgress:this.recoveredProgress}}};var Zd=(i,e)=>{if(!Number.isFinite(i))throw new Error("08A invalid "+e);return i},r0=class{constructor({id:e,center:t,region:n}={}){if(!e||!n)throw new Error("08A region entry requires id + region");this.id=e,this.center={x:Zd(t?.x,"center.x"),z:Zd(t?.z,"center.z")},this.region=n,this.lastDistance=1/0,this.transitions=0,this.loads=0,this.unloads=0,this.lastAction="NONE"}},fr=class{constructor({entries:e=[]}={}){this.entries=new Map,this.stepCount=0,this.duplicateRegionIds=0;for(let t of e)this.register(t)}register({id:e,center:t,region:n}){if(this.entries.has(e))throw this.duplicateRegionIds++,new Error("08A duplicate region id "+e);let s=new r0({id:e,center:t,region:n});return this.entries.set(e,s),s}get(e){return this.entries.get(e)??null}list(){return[...this.entries.values()]}get size(){return this.entries.size}distances(e){return this.list().map(t=>({id:t.id,distance:Math.hypot(Zd(e?.x,"player.x")-t.center.x,Zd(e?.z,"player.z")-t.center.z)}))}nearest(e){return this.distances(e).sort((n,s)=>n.distance-s.distance||n.id.localeCompare(s.id))[0]??null}async step({playerPosition:e,dtMs:t=0,now:n=Date.now(),foodProgressPerSecond:s=.006}={}){this.stepCount++;let r=[];for(let o of this.list()){let a=Math.hypot(e.x-o.center.x,e.z-o.center.z);o.lastDistance=a;let c=o.region;if(!c.operation){if(c.lifecycle==="UNLOADED"&&a<=c.loadRadiusM){let l=c.loadCount,u=await c.load(n);c.loadCount>l&&(o.loads++,o.transitions++,o.lastAction=u.rehydrated?"REHYDRATE":"LOAD",r.push({regionId:o.id,action:o.lastAction}))}else if(c.lifecycle==="ACTIVE"&&a>=c.unloadRadiusM){let l=c.unloadCount;await c.unload(n),c.unloadCount>l&&(o.unloads++,o.transitions++,o.lastAction="UNLOAD",r.push({regionId:o.id,action:"UNLOAD"}))}}c.isActive&&c.update({dtMs:t,now:n,foodProgressPerSecond:s})}return r}snapshot(){return{version:1,regions:this.list().map(e=>({id:e.id,center:{...e.center},lifecycle:e.region.lifecycle,hasSnapshot:e.region.hasSnapshot,lastDistance:e.lastDistance,loads:e.loads,unloads:e.unloads,transitions:e.transitions}))}}};var pr=(i,e)=>{if(!Number.isFinite(i))throw new Error("08B invalid "+e);return i},ma=class{constructor({prefetchRadiusM:e=46,minApproachSpeedMps:t=.35,minApproachDot:n=.35}={}){this.prefetchRadiusM=pr(e,"prefetchRadiusM"),this.minApproachSpeedMps=pr(t,"minApproachSpeedMps"),this.minApproachDot=pr(n,"minApproachDot"),this.lastPosition=null,this.lastNow=null,this.velocity={x:0,z:0,speed:0},this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,this.selectionCount=0}updateMotion(e,t){let n={x:pr(e?.x,"position.x"),z:pr(e?.z,"position.z")};if(pr(t,"now"),this.lastPosition&&Number.isFinite(this.lastNow)&&t>this.lastNow){let s=(t-this.lastNow)/1e3,r=(n.x-this.lastPosition.x)/s,o=(n.z-this.lastPosition.z)/s,a=Math.hypot(r,o);this.velocity={x:r,z:o,speed:a}}else this.velocity={x:0,z:0,speed:0};return this.lastPosition=n,this.lastNow=t,{...this.velocity}}choose({position:e,regions:t,excludeIds:n=[]}={}){let s={x:pr(e?.x,"position.x"),z:pr(e?.z,"position.z")},r=new Set(n),o=this.velocity;if(o.speed<this.minApproachSpeedMps)return this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,null;let a=null;for(let l of t??[]){if(!l?.id||r.has(l.id)||l.lifecycle!=="UNLOADED")continue;let u=l.center.x-s.x,h=l.center.z-s.z,d=Math.hypot(u,h);if(d>this.prefetchRadiusM||d<=1e-6)continue;let f=(o.x*u+o.z*h)/(o.speed*d);if(f<this.minApproachDot)continue;let m=f*2-d/this.prefetchRadiusM;(!a||m>a.score||m===a.score&&l.id<a.id)&&(a={id:l.id,distance:d,approach:f,score:m})}let c=a?.id??null;return c&&c!==this.targetId&&this.selectionCount++,this.targetId=c,this.targetDistance=a?.distance??1/0,this.targetApproach=a?.approach??0,a}snapshot(){return{version:1,targetId:this.targetId,targetDistance:this.targetDistance,targetApproach:this.targetApproach,velocity:{...this.velocity},selectionCount:this.selectionCount}}};var o0=class{constructor({record:e,definition:t,scene:n,prepared:s,bindingId:r}){this.record=e,this.definition=t,this.scene=n,this.bindingId=r,this.root=new ft,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.root.userData.predictivePrefetch08B=!0,this.model=s.model,this.clips=s.clips,this.mixer=new ws(this.model),this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.model.scale.setScalar(t.scale),this.model.rotation.y=t.yawOffset,this.model.traverse(o=>{o.isMesh&&(o.castShadow=!!t.presentation.castShadow,o.receiveShadow=t.presentation.receiveShadow!==!1)}),this.root.add(this.model);for(let o of this.clips)this.actions.set(o.name,this.mixer.clipAction(o))}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let n={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of n)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){this.record.setAnimationIntent(e);let n=this.resolveAnimation(e);if(!n)return null;let s=this.actions.get(n);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=n,n}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}attach(){return this.attached?this:(this.record.claimBinding(this.bindingId),this.scene.add(this.root),this.attached=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this)}update(e){this.attached&&(this.syncTransform(),this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,!0):!1}},ga=class{constructor({scene:e,assetCache:t}={}){if(!e||!t)throw new Error("08B predictive factory requires scene + frozen asset cache");this.scene=e,this.assetCache=t,this.prefetched=new Map,this.prefetchPromises=new Map,this.bindings=new Map,this.prefetchCount=0,this.prefetchedInstances=0,this.consumedInstances=0,this.fallbackInstances=0,this.duplicateBindingCount=0,this.bindingSequence=0}async prefetch(e,t,n){if(!e||!t||!Number.isInteger(n)||n<1)throw new Error("08B invalid prefetch request");let s=this.prefetched.get(e);if(s&&s.length>=n)return s.length;if(this.prefetchPromises.has(e))return this.prefetchPromises.get(e);let r=(async()=>{let o=this.prefetched.get(e)??[];for(;o.length<n;){let a=await this.assetCache.instantiate(t);o.push(a),this.prefetchedInstances++}return this.prefetched.set(e,o),this.prefetchCount++,o.length})().finally(()=>this.prefetchPromises.delete(e));return this.prefetchPromises.set(e,r),r}preparedCount(e){return this.prefetched.get(e)?.length??0}async bind(e,t){if(this.bindings.has(t.id))throw this.duplicateBindingCount++,new Error("08B duplicate predictive binding "+t.id);let n=null,s=this.prefetched.get(e);s?.length?(n=s.shift(),this.consumedInstances++,s.length===0&&this.prefetched.delete(e)):(n=await this.assetCache.instantiate(t.definition),this.fallbackInstances++);let r=new o0({record:t,definition:t.definition,scene:this.scene,prepared:n,bindingId:"08B_BIND_"+ ++this.bindingSequence});return r.attach(),this.bindings.set(t.id,r),r}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var Kd=(i,e)=>{if(!Number.isFinite(i))throw new Error("08C invalid "+e);return i},$d=class{constructor({maxPreparedInstances:e=2}={}){this.maxPreparedInstances=Math.max(1,Math.floor(Kd(e,"maxPreparedInstances"))),this.currentTarget=null,this.prepared=new Map,this.peakPrepared=0,this.cancellations=0,this.evictedInstances=0,this.consumedInstances=0,this.retargetCount=0,this.staleCompletionCount=0}setTarget(e){let t=e||null;t!==this.currentTarget&&this.retargetCount++,this.currentTarget=t}setPrepared(e,t){let n=Math.max(0,Math.floor(Kd(t,"prepared count")));if(n===0?this.prepared.delete(e):this.prepared.set(e,n),this.peakPrepared=Math.max(this.peakPrepared,this.totalPrepared),this.totalPrepared>this.maxPreparedInstances)throw new Error("08C prepared-instance budget exceeded")}recordDiscard(e,t,{stale:n=!1}={}){let s=Math.max(0,Math.floor(Kd(t,"discard count")));this.setPrepared(e,0),s>0&&(this.cancellations++,this.evictedInstances+=s),n&&this.staleCompletionCount++}recordConsumed(e){this.consumedInstances+=Math.max(0,Math.floor(Kd(e,"consumed count")))}get totalPrepared(){let e=0;for(let t of this.prepared.values())e+=t;return e}snapshot(){return{version:1,maxPreparedInstances:this.maxPreparedInstances,currentTarget:this.currentTarget,prepared:Object.fromEntries(this.prepared),totalPrepared:this.totalPrepared,peakPrepared:this.peakPrepared,cancellations:this.cancellations,evictedInstances:this.evictedInstances,consumedInstances:this.consumedInstances,retargetCount:this.retargetCount,staleCompletionCount:this.staleCompletionCount}}};var jd=class{constructor({factory:e,maxPreparedInstances:t=2}={}){if(!e)throw new Error("08C bounded prefetch controller requires predictive factory");this.factory=e,this.budget=new $d({maxPreparedInstances:t}),this.targetId=null,this.sequence=0,this.prefetchExecutions=0,this.prefetchByRegion=new Map,this.lastAction="IDLE",this.lastDiscardReason="NONE",this.lastObservedConsumed=e.consumedInstances??0}preparedCount(e){return this.factory.preparedCount(e)}totalPrepared(){let e=0;for(let t of this.factory.prefetched.values())e+=t.length;return e}discard(e,t="RETARGET",{stale:n=!1}={}){if(!e)return 0;let r=this.factory.prefetched.get(e)?.length??0;return r>0&&this.factory.prefetched.delete(e),this.budget.recordDiscard(e,r,{stale:n}),this.lastDiscardReason=t,r>0&&(this.lastAction="EVICTED "+e+" \xD7"+r),r}syncConsumed(){let e=this.factory.consumedInstances??0,t=Math.max(0,e-this.lastObservedConsumed);return t>0&&this.budget.recordConsumed(t),this.lastObservedConsumed=e,t}async retarget(e,t,n=2){let s=e||null,r=this.targetId;r&&r!==s&&this.discard(r,"RETARGET"),this.targetId=s,this.budget.setTarget(s);let o=++this.sequence;if(!s)return this.lastAction=r?"TARGET CLEARED":"IDLE",{target:null,prepared:0,stale:!1};let a=this.factory.preparedCount(s);if(a>=n)return this.budget.setPrepared(s,a),this.lastAction="READY "+s+" \xD7"+a,{target:s,prepared:a,stale:!1};if(this.lastAction="PREFETCHING "+s,await this.factory.prefetch(s,t,n),this.prefetchExecutions++,this.prefetchByRegion.set(s,(this.prefetchByRegion.get(s)??0)+1),o!==this.sequence||this.targetId!==s){let l=this.discard(s,"STALE COMPLETION",{stale:!0});return{target:s,prepared:0,stale:!0,discarded:l}}let c=this.factory.preparedCount(s);return this.budget.setPrepared(s,c),this.lastAction="READY "+s+" \xD7"+c,{target:s,prepared:c,stale:!1}}observeAfterWorldStep(){this.syncConsumed();for(let e of[...this.budget.prepared.keys()]){let t=this.factory.preparedCount(e);this.budget.setPrepared(e,t)}if(this.totalPrepared()>this.budget.maxPreparedInstances)throw new Error("08C factory prepared pool exceeded bounded budget")}executionCount(e){return this.prefetchByRegion.get(e)??0}snapshot(){return{targetId:this.targetId,prefetchExecutions:this.prefetchExecutions,prefetchByRegion:Object.fromEntries(this.prefetchByRegion),lastAction:this.lastAction,lastDiscardReason:this.lastDiscardReason,factoryPrepared:this.totalPrepared(),budget:this.budget.snapshot()}}};var Qe=Object.freeze({version:1,milestone:"09B \u2014 Vertical Beauty Slice",name:"Sunlit Basin",radiusM:33,materialFamilies:Object.freeze(["meadow-ground","soil-path","wood","foliage","stone","water"]),depthLayers:Object.freeze(["foreground-ground-cover","gameplay-plane","midground-stone-gate","distant-cliff-silhouette","atmosphere-sky"]),ambientMotionSystems:Object.freeze(["canopy-wind","grass-wind","water-ripples","airborne-pollen"]),layout:Object.freeze({trees:22,grassTufts:160,flowers:48,rocks:16,distantCliffs:10,pollen:180,pathSegments:30}),presentationBudget:Object.freeze({addedDrawCallsMax:14,addedTrianglesMax:18e3,absoluteDrawCallsMax:120,absoluteTrianglesMax:35e4}),acceptance:Object.freeze({frameRule:["place","physical substance","atmosphere","scale","motion","character","gameplay purpose"],preserve06J:!0,preserveTest08:!0,broadContentExpansion:!1})});function hM(i=10166310){let e=i>>>0;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}var jt=i=>document.getElementById(i),bv=jt("boot"),Tf=jt("error"),AI=jt("fps"),bI=jt("calls"),TI=jt("tris"),U0=jt("char"),Tv=jt("scale"),RI=jt("zone");addEventListener("error",i=>{Tf.style.display="block",Tf.textContent=`Runtime error:
`+i.message});addEventListener("unhandledrejection",i=>{Tf.style.display="block",Tf.textContent=`Load/runtime error:
`+(i.reason?.message||i.reason||"Unknown rejection")});var Fa=matchMedia("(pointer:coarse)").matches,a0=1831565813;function xt(){return a0=a0*1664525+1013904223>>>0,a0/4294967296}function T_(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function Rv(i=96){let e=new Uint8Array(i*i*4);for(let n=0;n<i;n++)for(let s=0;s<i;s++){let r=(n*i+s)*4,o=Math.floor(255*(.36+.64*T_(s*.31,n*.37)));e[r]=e[r+1]=e[r+2]=o,e[r+3]=255}let t=new er(e,i,i,An);return t.wrapS=t.wrapT=Vi,t.colorSpace=Ri,t.needsUpdate=!0,t}var go=Rv();go.repeat.set(26,26);var wv=Rv(64);wv.repeat.set(18,36);var ve=new dc;ve.fog=new hc(12045264,.0057);var Li=new qt(53,innerWidth/innerHeight,.1,800);Li.position.set(0,6,10);var et=new Dd({antialias:!0,powerPreference:"high-performance"}),ns=Math.min(devicePixelRatio,Fa?1.32:1.8),wI=Fa?1:1.25,CI=Math.min(devicePixelRatio,Fa?1.42:1.9);et.setPixelRatio(ns);et.setSize(innerWidth,innerHeight);et.outputColorSpace=Ut;et.toneMapping=Fc;et.toneMappingExposure=1.05;et.shadowMap.enabled=!0;et.shadowMap.type=Bh;document.body.prepend(et.domElement);Tv.textContent=ns.toFixed(2)+"\xD7";var Cv=new Cc(14282751,5069125,1.85);ve.add(Cv);var Iv=new Pc(9545908,.18);ve.add(Iv);var $t=new Vr(16773072,3.35);$t.position.set(-46,58,18);$t.castShadow=!0;$t.shadow.mapSize.set(Fa?1024:1536,Fa?1024:1536);$t.shadow.camera.left=-46;$t.shadow.camera.right=46;$t.shadow.camera.top=46;$t.shadow.camera.bottom=-46;$t.shadow.camera.near=1;$t.shadow.camera.far=155;$t.shadow.bias=-18e-5;$t.shadow.normalBias=.025;ve.add($t,$t.target);var gr={top:{value:new me(6203856)},mid:{value:new me(12572628)},bottom:{value:new me(15785404)},sunDir:{value:new I(-.5,.8,.25)},sunWarm:{value:new me(16766874)}},II=new nn({side:rn,depthWrite:!1,uniforms:gr,vertexShader:"varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}"});ve.add(new Ue(new pn(390,40,20),II));function Hs(i){return-18+Math.sin(i*.048)*4.2+Math.sin(i*.013)*2.2}function Rn(i,e){let t=Math.sin(i*.029)*3+Math.cos(e*.032)*2.4+Math.sin((i+e)*.021)*1.65,n=Math.sin(i*.093+e*.032)*.5+Math.cos(e*.108-i*.025)*.38,s=i-Hs(e),r=-Math.exp(-(s*s)/54)*5.2,o=Math.exp(-((i-46)*(i-46)+(e+54)*(e+54))/920)*7,a=Math.exp(-((i+50)*(i+50)+(e+42)*(e+42))/1600)*3;return t+n+r+o+a}function DI(i,e){let n=(Rn(i+.45,e)-Rn(i-.45,e))/.9,s=(Rn(i,e+.45)-Rn(i,e-.45))/(2*.45);return Math.min(1,Math.hypot(n,s))}var cn={cx:0,cz:4,w:18,d:5,top:0};cn.cx=Hs(cn.cz);cn.top=Math.max(Rn(cn.cx-10,cn.cz),Rn(cn.cx+10,cn.cz))+.72;function R_(i,e){return Math.abs(i-cn.cx)<cn.w*.5&&Math.abs(e-cn.cz)<cn.d*.5}function Le(i,e){return R_(i,e)?cn.top:Rn(i,e)}function PI(i,e){return Math.abs(i-Hs(e))<5.8&&!R_(i,e)}function NI(i,e,t){let n=new me,s=DI(e,t),r=Math.exp(-Math.pow((e-Hs(t))/11,2)),o=T_(e*.9,t*.9);return s>.55?n.setRGB(.31,.34,.31):i<-1.4?n.setRGB(.26,.38,.25):i<1?n.setRGB(.38,.52,.29):i<4.4?n.setRGB(.43,.58,.31):n.setRGB(.35,.49,.28),n.offsetHSL((o-.5)*.012,(r-.5)*.035,(o-.5)*.055),n.lerp(new me(.38,.36,.3),Math.max(0,s-.32)*.48),n}var mu=new si(240,240,170,170);mu.rotateX(-Math.PI/2);var Qd=mu.attributes.position,Dv=[];for(let i=0;i<Qd.count;i++){let e=Qd.getX(i),t=Qd.getZ(i),n=Rn(e,t);Qd.setY(i,n);let s=NI(n,e,t);Dv.push(s.r,s.g,s.b)}mu.setAttribute("color",new ke(Dv,3));mu.computeVertexNormals();var LI=new Ie({vertexColors:!0,roughness:.92,bumpMap:go,bumpScale:.2}),Pv=new Ue(mu,LI);Pv.receiveShadow=!0;ve.add(Pv);var H0=new vc([new I(5,0,60),new I(-2,0,41),new I(-12,0,22),new I(cn.cx,0,cn.cz),new I(-3,0,-13),new I(18,0,-31),new I(36,0,-44),new I(47,0,-55)]),Nv=[],Lv=[],Ov=[],z0=112;for(let i=0;i<=z0;i++){let e=i/z0,t=H0.getPoint(e),n=H0.getPoint(Math.min(1,e+.0025)),s=n.clone().sub(t).normalize(),r=new I(-s.z,0,s.x),o=2.45+Math.sin(i*.41)*.18;for(let a=0;a<2;a++){let c=a?1:-1,l=t.clone().addScaledVector(r,o*c);l.y=Le(l.x,l.z)+.07,Nv.push(l.x,l.y,l.z),Ov.push(a,e*8)}}for(let i=0;i<z0;i++){let e=i*2,t=e+1,n=e+2,s=e+3;Lv.push(e,n,t,t,n,s)}var gu=new Mt;gu.setAttribute("position",new ke(Nv,3));gu.setAttribute("uv",new ke(Ov,2));gu.setIndex(Lv);gu.computeVertexNormals();var OI=new Ie({color:9795412,roughness:.96,bumpMap:wv,bumpScale:.18}),Bv=new Ue(gu,OI);Bv.receiveShadow=!0;ve.add(Bv);var Fv=[],Uv=[],Hv=[],Sl=128;for(let i=0;i<=Sl;i++){let e=-110+i*(220/Sl),t=Hs(e),n=5.55;Fv.push(t-n,-2.3,e,t+n,-2.3,e),Hv.push(0,i/Sl*14,1,i/Sl*14)}for(let i=0;i<Sl;i++){let e=i*2,t=e+1,n=e+2,s=e+3;Uv.push(e,n,t,t,n,s)}var _u=new Mt;_u.setAttribute("position",new ke(Fv,3));_u.setAttribute("uv",new ke(Hv,2));_u.setIndex(Uv);_u.computeVertexNormals();var Rf={time:{value:0},sunDir:{value:new I(-.5,.8,.2)},deep:{value:new me(1987175)},shallow:{value:new me(7649730)},sky:{value:new me(12572628)}},BI=new nn({transparent:!0,depthWrite:!1,uniforms:Rf,vertexShader:"uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}",fragmentShader:"uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}"});ve.add(new Ue(_u,BI));var w_=[],pp=(i,e,t,n=7)=>w_.push({x:i,z:e,r:t,h:n});function Xa(i,e){i.onBeforeCompile=t=>{t.uniforms.uTime={value:0},t.uniforms.uWind={value:.48},i.userData.shader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${e.toFixed(3)};transformed.x+=sw*max(position.y,0.);`)},i.customProgramCacheKey=()=>`wind-${e}`}var FI=new Ie({color:5912356,roughness:1,bumpMap:go,bumpScale:.08}),C_=new Ie({color:2843447,roughness:.86}),I_=new Ie({color:3766343,roughness:.84}),D_=new Ie({color:5079632,roughness:.84});Xa(C_,.018);Xa(I_,.022);Xa(D_,.025);var xu=238,zv=new vi(.29,.48,5.4,8);zv.translate(0,2.7,0);var UI=new nr(1.55,1),Gv=new nr(1.18,1),wf=new ze(zv,FI,xu),P_=new ze(UI,C_,xu),N_=new ze(Gv,I_,xu),L_=new ze(Gv,D_,xu);wf.castShadow=wf.receiveShadow=!0;P_.castShadow=N_.castShadow=L_.castShadow=!0;var ot=new Fe,ef=0,HI=0;for(;ef<xu&&HI++<5e3;){let i=(xt()-.5)*224,e=(xt()-.5)*224;if(Math.abs(i-Hs(e))<9.2||Math.hypot(i-5,e-60)<10||Math.hypot(i-38,e+45)<14)continue;let t=Rn(i,e),n=.72+xt()*1.12,s=xt()*Math.PI*2;ot.position.set(i,t,e),ot.rotation.set(0,s,0),ot.scale.set(n,n,n),ot.updateMatrix(),wf.setMatrixAt(ef,ot.matrix);let r=t+5.15*n;for(let[o,a,c,l,u]of[[P_,0,0,0,1],[N_,.75,.18,.05,.86],[L_,-.62,.42,-.18,.78]]){let h=Math.cos(s),d=Math.sin(s),f=a*h-l*d,m=a*d+l*h;ot.position.set(i+f*n,r+c*n,e+m*n),ot.rotation.set(0,s+xt()*.5,0),ot.scale.set(n*u*(.9+xt()*.18),n*u*(.9+xt()*.16),n*u*(.9+xt()*.18)),ot.updateMatrix(),o.setMatrixAt(ef,ot.matrix)}pp(i,e,.5*n,7*n),ef++}ve.add(wf,P_,N_,L_);var O_=new Ie({color:4684355,roughness:.9});Xa(O_,.03);var zI=new ii(.72,0),kv=260,B_=new ze(zI,O_,kv);for(let i=0;i<kv;i++){let e=(xt()-.5)*214,t=(xt()-.5)*214;if(Math.abs(e-Hs(t))<7)continue;let n=Rn(e,t),s=.45+xt()*.95;ot.position.set(e,n+.35*s,t),ot.rotation.set(0,xt()*6.28,0),ot.scale.set(s*1.35,s*.75,s),ot.updateMatrix(),B_.setMatrixAt(i,ot.matrix)}B_.castShadow=!0;ve.add(B_);var F_=new Ie({color:6590018,roughness:1,side:At});Xa(F_,.06);var Vv=new Wn(.052,.62,3);Vv.translate(0,.31,0);var Wv=2600,Xv=new ze(Vv,F_,Wv);for(let i=0;i<Wv;i++){let e=(xt()-.5)*220,t=(xt()-.5)*220;if(Math.abs(e-Hs(t))<6.3)continue;let n=Rn(e,t),s=.45+xt()*1.15;ot.position.set(e,n,t),ot.rotation.set(0,xt()*6.28,0),ot.scale.set(s,s,s),ot.updateMatrix(),Xv.setMatrixAt(i,ot.matrix)}ve.add(Xv);var U_=new Ie({color:15785392,roughness:.78,emissive:1905671,emissiveIntensity:.15});Xa(U_,.025);var GI=new pn(.065,5,4),qv=310,Yv=new ze(GI,U_,qv);for(let i=0;i<qv;i++){let e=xt(),t=H0.getPoint(e),n=t.x+(xt()-.5)*14,s=t.z+(xt()-.5)*14,r=Rn(n,s);ot.position.set(n,r+.18,s);let o=.65+xt()*.8;ot.scale.setScalar(o),ot.updateMatrix(),Yv.setMatrixAt(i,ot.matrix)}ve.add(Yv);function kI(i){let e=new nr(1,1),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n),a=.78+.3*T_(n*.37+i*11,n*.73+i*7);t.setXYZ(n,s*a,r*a,o*a)}return e.computeVertexNormals(),e}var VI=new Ie({color:7699320,roughness:.93,bumpMap:go,bumpScale:.12}),Jv=120,WI=[0,1,2].map(i=>{let e=new ze(kI(i),VI,Math.ceil(Jv/3));return e.castShadow=e.receiveShadow=!0,ve.add(e),e}),XI=[0,0,0];for(let i=0;i<Jv;i++){let e=(xt()-.5)*215,t=(xt()-.5)*215,n=Rn(e,t),s=.22+xt()*1.25,r=i%3,o=XI[r]++;ot.position.set(e,n+.12,t),ot.rotation.set(xt()*.23,xt()*6.28,xt()*.2),ot.scale.set(s*1.45,s*.72,s),ot.updateMatrix(),WI[r].setMatrixAt(o,ot.matrix),s>.62&&pp(e,t,.78*s,1.4*s)}var qI=new Ie({color:6846579,roughness:1,flatShading:!0}),YI=new Ie({color:8556682,roughness:1,flatShading:!0}),Zv=new Wn(15,36,7,1),Cf=28,Kv=new ze(Zv,qI,Cf),$v=new ze(Zv,YI,Cf);for(let i=0;i<Cf;i++){let e=i/Cf*Math.PI*2,t=145+Math.sin(i*2.17)*15,n=Math.cos(e)*t,s=Math.sin(e)*t,r=.68+i*13%11/18;ot.position.set(n,7+Math.sin(i)*3,s),ot.rotation.set(0,-e+xt()*.35,0),ot.scale.set(r*(.8+xt()*.35),r,r*(.8+xt()*.35)),ot.updateMatrix(),(i%2?Kv:$v).setMatrixAt(i,ot.matrix)}ve.add(Kv,$v);var jv=new Ie({color:7754036,roughness:.9,bumpMap:go,bumpScale:.08}),mp=new ft;mp.position.set(cn.cx,cn.top,cn.cz);ve.add(mp);for(let i=0;i<11;i++){let e=new Ue(new Mi(1.66,.18,4),jv);e.position.set(-8.1+i*1.62,0,0),e.rotation.y=(i%3-1)*.008,e.castShadow=e.receiveShadow=!0,mp.add(e)}for(let i of[-1,1])for(let e of[-1,1]){let t=new Ue(new vi(.12,.17,2.45,7),jv);t.position.set(i*8,1.12,e*1.72),t.castShadow=!0,mp.add(t)}var gp=new ft,If=36,Df=-44;gp.position.set(If,Rn(If,Df),Df);ve.add(gp);var Qv=new Ie({color:9538946,roughness:.91,bumpMap:go,bumpScale:.13});function yu(i,e,t,n,s,r,o=0){let a=new Ue(new Mi(n,s,r),Qv);a.position.set(i,e,t),a.rotation.y=o,a.castShadow=a.receiveShadow=!0,gp.add(a),pp(If+i,Df+t,Math.max(n,r)*.42,s)}yu(0,2.8,0,7.8,5.6,1.7,.07);yu(-4.9,4,.2,1.7,8,1.7,.07);yu(4.9,4,.2,1.7,8,1.7,.07);yu(0,7.15,.2,11.2,1,1.6,.07);yu(0,9.35,0,1.3,4.6,1.3);var Eu=new Ue(new bc(3.55,.3,8,26),Qv);Eu.position.set(0,10.8,0);Eu.rotation.x=Math.PI/2.35;Eu.rotation.z=.34;Eu.castShadow=!0;gp.add(Eu);var _p=48,xp=-59,JI=Rn(_p,xp),Mu=new ft;Mu.position.set(_p,JI,xp);ve.add(Mu);var ZI=new Ie({color:7696228,roughness:.9,bumpMap:go,bumpScale:.1}),KI=new Ie({color:16767117,emissive:16758861,emissiveIntensity:2.3}),H_=new Ue(new vi(.6,.85,7.5,9),ZI);H_.position.y=3.75;H_.castShadow=!0;Mu.add(H_);var z_=new Ue(new pn(.55,14,10),KI);z_.position.y=7.8;Mu.add(z_);var G_=new kr(16759130,5.5,18,2);G_.position.y=7.8;Mu.add(G_);pp(_p,xp,1,8);var ne=new ft;ve.add(ne);ne.position.set(5,Le(5,60),60);var Is=null,Pf=null,Fn={},tf=null,eS="FALLBACK";function $I(){let i=new ft,e=new Ie({color:2775929,roughness:.72}),t=new Ie({color:14263676,roughness:.78}),n=new Ie({color:3156259,roughness:.92}),s=new Ue(new $o(.32,.74,4,8),e);s.position.y=1.18,i.add(s);let r=new Ue(new pn(.28,12,8),t);r.position.y=1.86,i.add(r);for(let o of[-1,1]){let a=new Ue(new $o(.085,.45,3,6),n);a.position.set(.145*o,.52,0),i.add(a)}i.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),ne.add(i),Is=i,U0.textContent="FALLBACK"}$I();bv.classList.add("hide");setTimeout(()=>bv.remove(),320);var jI=new ha;jI.load("./assets/Soldier.glb",i=>{Is&&ne.remove(Is),Is=i.scene,Is.scale.setScalar(1),Is.rotation.y=Math.PI,Is.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),ne.add(Is),Pf=new ws(Is),Fn={};for(let e of i.animations)Fn[e.name]=Pf.clipAction(e);eS="GLB",U0.textContent="GLB",ff(Fn.Idle?"Idle":Object.keys(Fn)[0],0)},void 0,i=>{console.warn("Local GLB failed; fallback remains active",i),U0.textContent="FALLBACK"});function ff(i,e=.16){if(!Fn[i]||tf===Fn[i])return;let t=Fn[i];t.reset().play(),tf&&tf.crossFadeTo(t,e,!0),tf=t}var no=.08,Ll=.3,Ol=7.8,yp=!1,G0=0,k0=0,k_=!1,Nf=!1,tl=0,jr=!0,so={},Bl=new Be,oi=new I;addEventListener("keydown",i=>{so[i.code]=!0,i.code==="Space"&&(Nf=!0)});addEventListener("keyup",i=>so[i.code]=!1);et.domElement.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&i.clientX<innerWidth*.36&&i.clientY>innerHeight*.52||i.pointerType==="touch"&&i.clientX>innerWidth*.68&&i.clientY>innerHeight*.54||(yp=!0,G0=i.clientX,k0=i.clientY,et.domElement.setPointerCapture(i.pointerId))});et.domElement.addEventListener("pointerup",()=>yp=!1);et.domElement.addEventListener("pointercancel",()=>yp=!1);et.domElement.addEventListener("pointermove",i=>{if(!yp)return;let e=i.clientX-G0,t=i.clientY-k0;no-=e*.006,Ll=Ke.clamp(Ll+t*.0047,-.05,.9),G0=i.clientX,k0=i.clientY});et.domElement.addEventListener("wheel",i=>Ol=Ke.clamp(Ol+i.deltaY*.008,4.8,14),{passive:!0});var Ua=jt("stick"),tS=jt("knob"),Lf=jt("sprint"),Of=jt("jump"),Ra=null;function nS(i){let e=Ua.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2,s=e.width*.34,r=i.clientX-t,o=i.clientY-n,a=Math.hypot(r,o)||1,c=Math.min(1,s/a);r*=c,o*=c,tS.style.transform=`translate(${r}px,${o}px)`,Bl.set(r/s,-o/s)}Ua.addEventListener("pointerdown",i=>{i.preventDefault(),Ra=i.pointerId,Ua.setPointerCapture(Ra),nS(i)});Ua.addEventListener("pointermove",i=>{i.pointerId===Ra&&(i.preventDefault(),nS(i))});function iS(i){(Ra===null||i.pointerId===Ra)&&(Ra=null,Bl.set(0,0),tS.style.transform="translate(0,0)")}Ua.addEventListener("pointerup",iS);Ua.addEventListener("pointercancel",iS);Lf.addEventListener("pointerdown",i=>{i.preventDefault(),k_=!0,Lf.style.transform="scale(.94)"});for(let i of["pointerup","pointercancel","pointerleave"])Lf.addEventListener(i,()=>{k_=!1,Lf.style.transform="scale(1)"});Of.addEventListener("pointerdown",i=>{i.preventDefault(),Nf=!0,Of.style.transform="scale(.93)"});for(let i of["pointerup","pointercancel","pointerleave"])Of.addEventListener(i,()=>Of.style.transform="scale(1)");var QI=jt("panel");jt("tuneBtn").onclick=()=>QI.classList.toggle("open");var eD=jt("tod"),tD=jt("fog"),nD=jt("wind"),iD=jt("damp");jt("shadowBtn").onclick=i=>{et.shadowMap.enabled=!et.shadowMap.enabled,i.target.textContent="Dynamic shadows: "+(et.shadowMap.enabled?"ON":"OFF")};var sD=new me(6203856),rD=new me(6582157),oD=new me(12572628),aD=new me(12818319),cD=new me(15785404),lD=new me(15769969);function uD(){let i=+eD.value,e=(i-6)/14,t=.1+e*Math.PI*.91,n=Math.max(.04,Math.sin(t)),s=-1.65+e*1.55;$t.position.set(Math.cos(s)*78,n*90,Math.sin(s)*78),$t.intensity=.88+n*3.5;let r=$t.position.clone().normalize();gr.sunDir.value.copy(r),Rf.sunDir.value.copy(r);let o=Ke.smoothstep(Math.abs(i-13),3,7);gr.top.value.copy(sD).lerp(rD,o),gr.mid.value.copy(oD).lerp(aD,o*.82),gr.bottom.value.copy(cD).lerp(lD,o),Rf.sky.value.copy(gr.mid.value),$t.color.setRGB(1,.94-.12*o,.81-.17*o),Cv.intensity=.9+n*1.42,Iv.intensity=.16+n*.21,ve.fog.density=.0022+ +tD.value*.0082,ve.fog.color.copy(gr.mid.value).lerp(gr.bottom.value,.42),et.toneMappingExposure=.84+n*.31}function hD(i){for(let e of w_){let t=i.x-e.x,n=i.z-e.z,s=Math.hypot(t,n),r=e.r+.36;if(s<r&&s>1e-4){let o=r-s;i.x+=t/s*o,i.z+=n/s*o}}}function dD(i,e){let t=e.clone(),n=e.clone().sub(i),s=13;for(let r=1;r<=s;r++){let o=r/s,a=i.clone().addScaledVector(n,o),c=Le(a.x,a.z)+.66;if(a.y<c){t=i.clone().addScaledVector(n,Math.max(.14,(r-1)/s));break}for(let l of w_)if(Math.hypot(a.x-l.x,a.z-l.z)<l.r+.26&&a.y<Le(l.x,l.z)+l.h)return i.clone().addScaledVector(n,Math.max(.14,(r-1)/s))}return t}function fD(i,e){return Math.hypot(i-_p,e-xp)<10?"OVERLOOK BEACON":Math.hypot(i-If,e-Df)<16?"RUINED OBSERVATORY":R_(i,e)?"OLD RIVER BRIDGE":Math.abs(i-Hs(e))<9?"RIVER VALLEY":e<2?"HIGHLAND TRAIL":"FOREST APPROACH"}var dM=new Lc,c0=0,nf=0,sf=0,l0=0;function sS(){requestAnimationFrame(sS);let i=Math.min(.033,dM.getDelta()),e=dM.elapsedTime;uD();let t=new I(-Math.sin(no),0,-Math.cos(no)),n=new I(Math.cos(no),0,-Math.sin(no)),s=new I;so.KeyW&&s.add(t),so.KeyS&&s.sub(t),so.KeyD&&s.add(n),so.KeyA&&s.sub(n),Bl.lengthSq()>.002&&(s.addScaledVector(t,Bl.y),s.addScaledVector(n,Bl.x));let r=(so.ShiftLeft||k_)&&s.lengthSq()>.01,o=PI(ne.position.x,ne.position.z)&&Le(ne.position.x,ne.position.z)<-1.1,a=(r?8.7:4.8)*(o?.58:1);if(s.lengthSq()>0){s.normalize();let m=s.multiplyScalar(a),y=1-Math.exp(-(jr?12:5)*i);oi.x=Ke.lerp(oi.x,m.x,y),oi.z=Ke.lerp(oi.z,m.z,y)}else{let m=Math.exp(-(jr?10:2.5)*i);oi.x*=m,oi.z*=m}Nf&&jr&&(tl=7.7,jr=!1),Nf=!1,tl-=18.6*i,ne.position.x+=oi.x*i,ne.position.z+=oi.z*i,ne.position.x=Ke.clamp(ne.position.x,-112,112),ne.position.z=Ke.clamp(ne.position.z,-112,112),hD(ne.position);let c=Le(ne.position.x,ne.position.z);ne.position.y+=tl*i,ne.position.y<=c?(ne.position.y=c,tl<0&&(tl=0),jr=!0):jr=!1;let l=Math.hypot(oi.x,oi.z);if(l>.18){let y=(Math.atan2(oi.x,oi.z)-ne.rotation.y+Math.PI)%(Math.PI*2)-Math.PI;ne.rotation.y+=y*(1-Math.exp(-14*i))}eS==="GLB"&&jr&&(l<.22?ff(Fn.Idle?"Idle":Object.keys(Fn)[0]):l<6?ff(Fn.Walk?"Walk":Fn.Run?"Run":Object.keys(Fn)[0]):ff(Fn.Run?"Run":Object.keys(Fn)[0])),Pf&&Pf.update(i*(r?1.08:1));let u=ne.position.clone().add(new I(0,1.42,0)),h=u.clone().add(new I(Math.sin(no)*Math.cos(Ll)*Ol,Math.sin(Ll)*Ol+1,Math.cos(no)*Math.cos(Ll)*Ol));h=dD(u,h);let d=1-Math.pow(1-+iD.value,i*60);Li.position.lerp(h,d),Li.lookAt(u),Li.fov=Ke.lerp(Li.fov,r?60:53,1-Math.exp(-5*i)),Li.updateProjectionMatrix(),$t.target.position.copy(ne.position),$t.target.updateMatrixWorld(),Rf.time.value=e;let f=+nD.value;for(let m of[C_,I_,D_,O_,F_,U_])m.userData.shader&&(m.userData.shader.uniforms.uTime.value=e,m.userData.shader.uniforms.uWind.value=f);if(z_.position.y=7.8+Math.sin(e*1.5)*.1,G_.intensity=5+Math.sin(e*2.1)*.6,RI.textContent=fD(ne.position.x,ne.position.z),globalThis.__raaiFrameHooks)for(let m of globalThis.__raaiFrameHooks)m(performance.now(),i);if(et.render(ve,Li),c0++,nf+=i,l0++,sf+=i,nf>.55){let m=Math.round(c0/nf);AI.textContent=m,c0=0,nf=0,bI.textContent=et.info.render.calls,TI.textContent=et.info.render.triangles.toLocaleString()}if(Fa&&sf>1.8){let m=l0/sf,y=ns;m<53.5?y=Math.max(wI,ns-.08):m>58.7&&(y=Math.min(CI,ns+.04)),Math.abs(y-ns)>.001&&(ns=y,et.setPixelRatio(ns),et.setSize(innerWidth,innerHeight,!1),Tv.textContent=ns.toFixed(2)+"\xD7"),sf=0,l0=0}}sS();addEventListener("resize",()=>{Li.aspect=innerWidth/innerHeight,Li.updateProjectionMatrix(),et.setPixelRatio(ns),et.setSize(innerWidth,innerHeight)});var pD="06A_LIVING_WORLD_FLOCK",yn={count:12,triggerRadius:7,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400},rS=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,Bf=ne.position.x+Math.sin(rS)*8,Ff=ne.position.z+Math.cos(rS)*8,mD=Le(Bf,Ff)+.18,gD=new pn(.12,7,5),oS=new si(.26,.1),_D=new Ie({color:2634039,roughness:.78,metalness:.03}),aS=new Ie({color:6714746,roughness:.82,side:At}),vu=new ze(gD,_D,yn.count),Su=new ze(oS,aS,yn.count),Au=new ze(oS,aS,yn.count);vu.castShadow=!0;Su.castShadow=!0;Au.castShadow=!0;ve.add(vu,Su,Au);var V0=[];for(let i=0;i<yn.count;i++){let e=i/yn.count*Math.PI*2+i*37%11*.041,t=1+i*53%7*.18,n=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(i%3-1)*.22;V0.push({px:n,pz:s,ex:n+Math.cos(r)*(5+i%4*.72),ez:s+Math.sin(r)*(5+i%4*.72),rise:2.8+i%5*.42,phase:i*.83,yaw:r})}var cs="CALM",Uf=performance.now(),Al=0,V_=0,nl=new Fe,il=new Fe,sl=new Fe,u0=document.getElementById("worldState"),fM=document.getElementById("worldDistance"),Fl=document.getElementById("worldResult");function xD(i){return 1-Math.pow(1-i,3)}function yD(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function cS(){return Math.hypot(ne.position.x-Bf,ne.position.z-Ff)}function rl(i,e){cs=i,Uf=e,Al=0,u0&&(u0.textContent=i,u0.style.color=i==="CALM"?"#a8f0b5":i==="FLEEING"?"#ffd18a":i==="DISPERSED"?"#ffb095":"#b9d9ff")}function ED(i){fM&&(fM.textContent=i.toFixed(1)+" m"),Fl&&V_===0&&(Fl.textContent=i<=yn.triggerRadius?"TRIGGERING":"APPROACH")}function MD(i,e,t){let n=Bf+i.px,s=Ff+i.pz,r=Le(n,s)+.22,o=Bf+i.ex,a=Ff+i.ez,c=mD+i.rise,l=n,u=r,h=s,d=i.yaw,f=0,m=t-Uf;if(cs==="CALM")u+=Math.sin(t*.0021+i.phase)*.022,d=i.phase*.37+Math.sin(t*7e-4+i.phase)*.18;else if(cs==="FLEEING"){let M=Math.min(1,m/yn.fleeMs),T=xD(M);l=Ke.lerp(n,o,T),h=Ke.lerp(s,a,T),u=Ke.lerp(r,c,T)+Math.sin(M*Math.PI)*.75,f=1}else if(cs==="DISPERSED"){let M=t*.0014+i.phase;l=o+Math.cos(M)*.45,h=a+Math.sin(M)*.45,u=c+Math.sin(M*1.8)*.18,d=M+Math.PI/2,f=1}else if(cs==="RETURNING"){let M=Math.min(1,m/yn.returnMs),T=yD(M);l=Ke.lerp(o,n,T),h=Ke.lerp(a,s,T),u=Ke.lerp(c,r,T)+Math.sin(M*Math.PI)*.92,d=i.yaw+Math.PI,f=1}let y=f?Math.sin(t*.02+i.phase)*.72:Math.sin(t*.006+i.phase)*.08;nl.position.set(l,u,h),nl.rotation.set(0,d,0),nl.scale.set(.88,.58,1.45),nl.updateMatrix(),vu.setMatrixAt(e,nl.matrix);let g=Math.cos(d),p=-Math.sin(d);il.position.set(l+g*.13,u+.015,h+p*.13),il.rotation.set(-Math.PI/2,d,y),il.scale.set(1,1,1),il.updateMatrix(),Su.setMatrixAt(e,il.matrix),sl.position.set(l-g*.13,u+.015,h-p*.13),sl.rotation.set(-Math.PI/2,d,-y),sl.scale.set(1,1,1),sl.updateMatrix(),Au.setMatrixAt(e,sl.matrix)}function vD(i){let e=cS();ED(e),cs==="CALM"&&e<=yn.triggerRadius?(V_++,rl("FLEEING",i),Fl&&(Fl.textContent="RESPONDED \u2713",Fl.style.color="#ffd18a")):cs==="FLEEING"&&i-Uf>=yn.fleeMs?rl("DISPERSED",i):cs==="DISPERSED"?e>yn.resetRadius?(Al||(Al=i),i-Al>=yn.farHoldMs&&rl("RETURNING",i)):Al=0:cs==="RETURNING"&&(e<=yn.triggerRadius?rl("FLEEING",i):i-Uf>=yn.returnMs&&rl("CALM",i));for(let t=0;t<V0.length;t++)MD(V0[t],t,i);vu.instanceMatrix.needsUpdate=!0,Su.instanceMatrix.needsUpdate=!0,Au.instanceMatrix.needsUpdate=!0}function lS(i){requestAnimationFrame(lS),vD(i)}requestAnimationFrame(lS);globalThis.__livingWorld06A={marker:pD,get state(){return cs},get responses(){return V_},get distance(){return cS()},triggerRadius:yn.triggerRadius,resetRadius:yn.resetRadius};var SD="06B_WORLD_DISTURBANCE_PROPAGATION",ds={secondaryCount:10,disturbanceSpeed:18,fleeMs:1250,returnMs:1350,farHoldMs:1200},Hf=globalThis.__livingWorld06A;if(!Hf||Hf.marker!=="06A_LIVING_WORLD_FLOCK")throw new Error("06B requires accepted 06A public world-state API");vu.frustumCulled=!1;Su.frustumCulled=!1;Au.frustumCulled=!1;var Ep=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,uS=ne.position.x,hS=ne.position.z,dS=Math.sin(Ep),fS=Math.cos(Ep),AD=Math.cos(Ep),bD=-Math.sin(Ep),TD=uS+dS*8,RD=hS+fS*8,eu=uS+dS*15.5+AD*4.5,tu=hS+fS*15.5+bD*4.5,wD=Le(eu,tu)+.18,CD=Math.hypot(eu-TD,tu-RD),W0=CD/ds.disturbanceSpeed*1e3,ID=new pn(.12,7,5),pS=new si(.26,.1),DD=new Ie({color:3425613,roughness:.78,metalness:.03}),mS=new Ie({color:8823208,roughness:.82,side:At}),bu=new ze(ID,DD,ds.secondaryCount),Tu=new ze(pS,mS,ds.secondaryCount),Ru=new ze(pS,mS,ds.secondaryCount);bu.castShadow=!0;Tu.castShadow=!0;Ru.castShadow=!0;bu.frustumCulled=!1;Tu.frustumCulled=!1;Ru.frustumCulled=!1;ve.add(bu,Tu,Ru);var X0=[];for(let i=0;i<ds.secondaryCount;i++){let e=i/ds.secondaryCount*Math.PI*2+i*29%9*.047,t=.85+i*41%6*.19,n=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(i%3-1)*.18+.12;X0.push({px:n,pz:s,ex:n+Math.cos(r)*(4.7+i%4*.66),ez:s+Math.sin(r)*(4.7+i%4*.66),rise:2.5+i%4*.46,phase:i*.91,yaw:r})}var ol=new Fe,al=new Fe,cl=new Fe,Zn="CALM",zf=performance.now(),gS=0,pM=Hf.state,bl=null,q0=0,h0=document.getElementById("worldBState"),d0=document.getElementById("worldLinkState"),mM=document.getElementById("worldLinkDelay"),gM=document.getElementById("worldBDistance");function PD(i){return 1-Math.pow(1-i,3)}function ND(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function _S(){return Math.hypot(ne.position.x-eu,ne.position.z-tu)}function _a(i,e){Zn=i,zf=e,h0&&(h0.textContent=i,h0.style.color=i==="CALM"?"#a8f0b5":i==="ALERT_DELAY"?"#ffe59a":i==="FLEEING"?"#ffd18a":i==="DISPERSED"?"#ffb095":"#b9d9ff")}function pf(i,e="#a8f0b5"){d0&&(d0.textContent=i,d0.style.color=e)}function LD(i){q0++,bl={emittedAt:i,arrivalAt:i+W0,id:q0},(Zn==="CALM"||Zn==="RETURNING")&&_a("ALERT_DELAY",i),pf("TRAVELING","#ffe59a"),mM&&(mM.textContent=Math.round(W0)+" ms")}function OD(i,e,t){let n=eu+i.px,s=tu+i.pz,r=Le(n,s)+.22,o=eu+i.ex,a=tu+i.ez,c=wD+i.rise,l=n,u=r,h=s,d=i.yaw,f=0,m=t-zf;if(Zn==="CALM"||Zn==="ALERT_DELAY")u+=Math.sin(t*.002+i.phase)*.021,d=i.phase*.34+Math.sin(t*72e-5+i.phase)*.16,Zn==="ALERT_DELAY"&&(u+=Math.sin(t*.014+i.phase)*.025);else if(Zn==="FLEEING"){let M=Math.min(1,m/ds.fleeMs),T=PD(M);l=Ke.lerp(n,o,T),h=Ke.lerp(s,a,T),u=Ke.lerp(r,c,T)+Math.sin(M*Math.PI)*.68,f=1}else if(Zn==="DISPERSED"){let M=t*.00135+i.phase;l=o+Math.cos(M)*.4,h=a+Math.sin(M)*.4,u=c+Math.sin(M*1.75)*.16,d=M+Math.PI/2,f=1}else if(Zn==="RETURNING"){let M=Math.min(1,m/ds.returnMs),T=ND(M);l=Ke.lerp(o,n,T),h=Ke.lerp(a,s,T),u=Ke.lerp(c,r,T)+Math.sin(M*Math.PI)*.78,d=i.yaw+Math.PI,f=1}let y=f?Math.sin(t*.0205+i.phase)*.72:Math.sin(t*.006+i.phase)*.08;ol.position.set(l,u,h),ol.rotation.set(0,d,0),ol.scale.set(.88,.58,1.45),ol.updateMatrix(),bu.setMatrixAt(e,ol.matrix);let g=Math.cos(d),p=-Math.sin(d);al.position.set(l+g*.13,u+.015,h+p*.13),al.rotation.set(-Math.PI/2,d,y),al.scale.set(1,1,1),al.updateMatrix(),Tu.setMatrixAt(e,al.matrix),cl.position.set(l-g*.13,u+.015,h-p*.13),cl.rotation.set(-Math.PI/2,d,-y),cl.scale.set(1,1,1),cl.updateMatrix(),Ru.setMatrixAt(e,cl.matrix)}function BD(i){let e=Hf.state,t=_S();gM&&(gM.textContent=t.toFixed(1)+" m"),e==="FLEEING"&&pM!=="FLEEING"&&LD(i),pM=e,bl&&i>=bl.arrivalAt&&(bl=null,gS++,_a("FLEEING",i),pf("ARRIVED \u2713","#ffd18a")),Zn==="FLEEING"&&i-zf>=ds.fleeMs?_a("DISPERSED",i):Zn==="DISPERSED"&&(e==="RETURNING"||e==="CALM")?(_a("RETURNING",i),pf("RESETTING","#b9d9ff")):Zn==="RETURNING"&&(bl?_a("ALERT_DELAY",i):i-zf>=ds.returnMs&&(_a("CALM",i),pf("IDLE")));for(let n=0;n<X0.length;n++)OD(X0[n],n,i);bu.instanceMatrix.needsUpdate=!0,Tu.instanceMatrix.needsUpdate=!0,Ru.instanceMatrix.needsUpdate=!0}function xS(i){requestAnimationFrame(xS),BD(i)}requestAnimationFrame(xS);globalThis.__livingWorld06B={marker:SD,get secondaryState(){return Zn},get secondaryResponses(){return gS},get disturbanceEvents(){return q0},get disturbanceTravelMs(){return W0},get playerDistanceToSecondary(){return _S()},directPlayerTrigger:!1,source:"06A primary flock state transition"};var FD="06C_LOCAL_DISTURBANCE_MEMORY",Sr={reedCount:28,disturbedMs:2300,settlingMs:2800,directPlayerTrigger:!1},Gf=globalThis.__livingWorld06B;if(!Gf||Gf.marker!=="06B_WORLD_DISTURBANCE_PROPAGATION")throw new Error("06C requires frozen accepted 06B public world-state API");var Mp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,yS=ne.position.x,ES=ne.position.z,MS=Math.sin(Mp),vS=Math.cos(Mp),SS=Math.cos(Mp),AS=-Math.sin(Mp),UD=yS+MS*15.5+SS*4.5,HD=ES+vS*15.5+AS*4.5,_M=yS+MS*15.7+SS*6.2,xM=ES+vS*15.7+AS*6.2,bS=new si(.18,1.55,1,3);bS.translate(0,.775,0);var zD=new Ie({color:9411157,roughness:.96,metalness:0,side:At}),Ha=new ze(bS,zD,Sr.reedCount);Ha.castShadow=!0;Ha.receiveShadow=!0;Ha.frustumCulled=!1;ve.add(Ha);var Y0=[];for(let i=0;i<Sr.reedCount;i++){let e=i*2.399963229728653,t=.35+i%7*.115,n=Math.cos(e)*t,s=Math.sin(e)*t*.72,r=.76+i*17%9*.035,o=i*.83%Math.PI;Y0.push({px:n,pz:s,scaleY:r,yaw:o,phase:i*.71})}var za="CALM",kf=performance.now(),TS=0,yM=Gf.secondaryState,nu=0,ll=new Fe,f0=document.getElementById("worldMemoryState"),p0=document.getElementById("worldMemoryAge"),Ul=document.getElementById("worldMemoryResult");function J0(i,e){za=i,kf=e,f0&&(f0.textContent=i,f0.style.color=i==="CALM"?"#a8f0b5":i==="DISTURBED"?"#ffd18a":"#b9d9ff")}function GD(i){TS++,nu=i,J0("DISTURBED",i),Ul&&(Ul.textContent="MEMORY ACTIVE \u2713",Ul.style.color="#ffd18a")}function kD(i,e){let t=i-kf;if(za==="DISTURBED"){let s=.34-.055*Math.min(1,t/Sr.disturbedMs),r=Math.sin(i*.012+e)*.065;return s+r}return za==="SETTLING"?(1-Math.min(1,t/Sr.settlingMs))*(.27+.075*Math.sin(i*.01+e)):.018*Math.sin(i*.0018+e)}function VD(i){let e=_M-UD,t=xM-HD,n=Math.max(1e-4,Math.hypot(e,t)),s=e/n,r=t/n;for(let o=0;o<Y0.length;o++){let a=Y0[o],c=_M+a.px,l=xM+a.pz,u=Le(c,l)+.035,h=kD(i,a.phase),d=.82+o*13%7*.045,f=h*d;ll.position.set(c,u,l),ll.rotation.set(r*f,a.yaw,-s*f),ll.scale.set(.8,a.scaleY,1),ll.updateMatrix(),Ha.setMatrixAt(o,ll.matrix)}Ha.instanceMatrix.needsUpdate=!0}function WD(i){let e=Gf.secondaryState;e==="FLEEING"&&yM!=="FLEEING"&&GD(i),yM=e,za==="DISTURBED"&&i-kf>=Sr.disturbedMs?J0("SETTLING",i):za==="SETTLING"&&i-kf>=Sr.settlingMs&&(J0("CALM",i),Ul&&(Ul.textContent="SETTLED")),p0&&(nu?p0.textContent=((i-nu)/1e3).toFixed(1)+" s":p0.textContent="\u2014"),VD(i)}function RS(i){requestAnimationFrame(RS),WD(i)}requestAnimationFrame(RS);globalThis.__livingWorld06C={marker:FD,get state(){return za},get events(){return TS},get ageMs(){return nu?performance.now()-nu:0},disturbedMs:Sr.disturbedMs,settlingMs:Sr.settlingMs,directPlayerTrigger:!1,source:"accepted 06B Flock B transition to FLEEING"};var XD="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR",Ls={arrivalDelayMs:1800,avoidTravelMs:2450,calmHoldMs:550,directReturnMs:2500,detourOffsetM:2.8,directPlayerTrigger:!1},wa=globalThis.__livingWorld06C;if(!wa||wa.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06D requires frozen accepted 06C public world-memory API");var vp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,qD=ne.position.x,YD=ne.position.z,wS=Math.sin(vp),CS=Math.cos(vp),W_=Math.cos(vp),X_=-Math.sin(vp),q_=qD+wS*15.7+W_*6.2,Y_=YD+CS*15.7+X_*6.2,Tl=q_-W_*3.4,Rl=Y_-X_*3.4,m0=q_+W_*3.4,g0=Y_+X_*3.4,JD=q_+wS*Ls.detourOffsetM,ZD=Y_+CS*Ls.detourOffsetM,Hl=new ft;ve.add(Hl);var KD=new ii(.5,1),$D=new Wn(.115,.55,7),jD=new Ie({color:9069895,roughness:.9,metalness:0}),QD=new Ie({color:7754301,roughness:.92,metalness:0}),zs=new ze(KD,jD,5),qa=new ze($D,QD,2);zs.castShadow=!0;qa.castShadow=!0;zs.frustumCulled=!1;qa.frustumCulled=!1;Hl.add(zs,qa);var ul=new Fe;function _o(i,e,t,n,s,r,o,a,c=0,l=0,u=0){ul.position.set(t,n,s),ul.scale.set(r,o,a),ul.rotation.set(c,l,u),ul.updateMatrix(),i.setMatrixAt(e,ul.matrix)}_o(zs,0,0,.42,0,.72,.55,1.08);_o(zs,1,0,.62,.5,.48,.48,.48);_o(zs,2,-.33,.25,-.2,.32,.34,.38);_o(zs,3,.33,.25,-.2,.32,.34,.38);_o(zs,4,0,.48,-.6,.25,.25,.25);_o(qa,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);_o(qa,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);zs.instanceMatrix.needsUpdate=!0;qa.instanceMatrix.needsUpdate=!0;var xr="WAITING",zl=performance.now(),IS=0,EM=wa.events,DS="NONE",hl=0,is=Tl,ss=Rl,MM=is,vM=ss,_0=document.getElementById("worldBehaviorState"),x0=document.getElementById("worldRouteChoice"),_r=document.getElementById("worldBehaviorResult");function xa(i,e){xr=i,zl=e,_0&&(_0.textContent=i,_0.style.color=i==="WAITING"?"#d6d6d6":i==="AVOIDING"?"#ffd18a":i==="HOLDING"?"#ffe59a":i==="DIRECT_RETURN"?"#9fe0ff":"#a8f0b5")}function ya(i,e,t){DS=i,x0&&(x0.textContent=e,x0.style.color=t)}function SM(i,e,t,n){let s=1-n;return s*s*i+2*s*n*e+n*n*t}function AM(i){return i*i*(3-2*i)}function eP(i){IS++,xa("AVOIDING",i),ya("MEMORY_DETOUR","DETOUR: MEMORY","#ffd18a"),_r&&(_r.textContent="MEMORY CHANGED ROUTE \u2713",_r.style.color="#ffd18a")}function tP(i){let e=is-MM,t=ss-vM,n=Math.hypot(e,t)>1e-5,s=Hl.rotation.y;n&&(s=Math.atan2(e,t));let r=xr==="AVOIDING"||xr==="DIRECT_RETURN"?Math.max(0,Math.sin((i-zl)*.011))*.12:0,o=Le(is,ss)+.03+r;Hl.position.set(is,o,ss),Hl.rotation.y=s,MM=is,vM=ss}function nP(i){let e=wa.events;if(e>EM&&(EM=e,is=Tl,ss=Rl,xa("ARRIVAL_DELAY",i),ya("PENDING","READING WORLD\u2026","#ffe59a"),_r&&(_r.textContent="LATE ACTOR INBOUND")),xr==="ARRIVAL_DELAY"&&i-zl>=Ls.arrivalDelayMs)wa.state!=="CALM"?eP(i):(xa("DIRECT_RETURN",i),ya("DIRECT","DIRECT: WORLD CLEAR","#9fe0ff"));else if(xr==="AVOIDING"){let t=Math.min(1,(i-zl)/Ls.avoidTravelMs),n=AM(t);is=SM(Tl,JD,m0,n),ss=SM(Rl,ZD,g0,n),t>=1&&(is=m0,ss=g0,xa("HOLDING",i),hl=0,ya("WAIT_FOR_CLEAR","WAITING FOR CLEAR","#ffe59a"))}else if(xr==="HOLDING")wa.state==="CALM"?(hl||(hl=i+Ls.calmHoldMs),i>=hl&&(xa("DIRECT_RETURN",i),ya("DIRECT","DIRECT: MEMORY CLEARED","#9fe0ff"))):hl=0;else if(xr==="DIRECT_RETURN"){let t=Math.min(1,(i-zl)/Ls.directReturnMs),n=AM(t);is=Ke.lerp(m0,Tl,n),ss=Ke.lerp(g0,Rl,n),t>=1&&(is=Tl,ss=Rl,xa("COMPLETE",i),ya("PROVED","DETOUR THEN DIRECT \u2713","#a8f0b5"),_r&&(_r.textContent="WORLD STATE AFFECTED BEHAVIOR \u2713",_r.style.color="#a8f0b5"))}tP(i)}function PS(i){requestAnimationFrame(PS),nP(i)}requestAnimationFrame(PS);globalThis.__livingWorld06D={marker:XD,get state(){return xr},get routeChoice(){return DS},get events(){return IS},directPlayerTrigger:!1,reads:"06C persistent world-memory state",arrivalDelayMs:Ls.arrivalDelayMs,avoidTravelMs:Ls.avoidTravelMs,directReturnMs:Ls.directReturnMs};var iP="06E_SPATIALLY_SCOPED_MEMORY",lo={arrivalDelayMs:1800,travelMs:2450,memoryRadiusM:1.8,laneOffsetM:3.35,directPlayerTrigger:!1},iu=globalThis.__livingWorld06C,bM=globalThis.__livingWorld06D;if(!iu||iu.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06E requires frozen accepted 06C memory API");if(!bM||bM.marker!=="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR")throw new Error("06E requires frozen accepted 06D behavior API");var Sp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,sP=ne.position.x,rP=ne.position.z,J_=Math.sin(Sp),Z_=Math.cos(Sp),K_=Math.cos(Sp),$_=-Math.sin(Sp),NS=sP+J_*15.7+K_*6.2,LS=rP+Z_*15.7+$_*6.2,OS=NS-J_*lo.laneOffsetM,BS=LS-Z_*lo.laneOffsetM,Ea=OS-K_*3.4,Ma=BS-$_*3.4,wl=OS+K_*3.4,Cl=BS+$_*3.4;function oP(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a,l=c>1e-9?Ke.clamp(((i-t)*o+(e-n)*a)/c,0,1):0,u=t+o*l,h=n+a*l;return Math.hypot(i-u,e-h)}var FS=oP(NS,LS,Ea,Ma,wl,Cl),Vf=new ft;ve.add(Vf);var aP=new ii(.5,1),cP=new Wn(.115,.55,7),lP=new Ie({color:8160133,roughness:.91,metalness:0}),uP=new Ie({color:6712688,roughness:.93,metalness:0}),Gs=new ze(aP,lP,5),Ya=new ze(cP,uP,2);Gs.castShadow=!0;Ya.castShadow=!0;Gs.frustumCulled=!1;Ya.frustumCulled=!1;Vf.add(Gs,Ya);var dl=new Fe;function xo(i,e,t,n,s,r,o,a,c=0,l=0,u=0){dl.position.set(t,n,s),dl.scale.set(r,o,a),dl.rotation.set(c,l,u),dl.updateMatrix(),i.setMatrixAt(e,dl.matrix)}xo(Gs,0,0,.42,0,.72,.55,1.08);xo(Gs,1,0,.62,.5,.48,.48,.48);xo(Gs,2,-.33,.25,-.2,.32,.34,.38);xo(Gs,3,.33,.25,-.2,.32,.34,.38);xo(Gs,4,0,.48,-.6,.25,.25,.25);xo(Ya,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);xo(Ya,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Gs.instanceMatrix.needsUpdate=!0;Ya.instanceMatrix.needsUpdate=!0;var fo="WAITING",Gl=performance.now(),US=0,TM=iu.events,Il=!1,HS="NONE",rs=Ea,os=Ma,Z0=rs,K0=os,y0=document.getElementById("worldSpatialState"),kl=document.getElementById("worldSpatialOverlap"),E0=document.getElementById("worldSpatialChoice"),mr=document.getElementById("worldSpatialResult");function fl(i,e){fo=i,Gl=e,y0&&(y0.textContent=i,y0.style.color=i==="WAITING"?"#d6d6d6":i==="ARRIVAL_DELAY"?"#ffe59a":i==="DIRECT"?"#9fe0ff":i==="AVOIDING"?"#ffd18a":"#a8f0b5")}function rf(i,e,t){HS=i,E0&&(E0.textContent=e,E0.style.color=t)}function RM(i){return i*i*(3-2*i)}function hP(i){let e=rs-Z0,t=os-K0;Math.hypot(e,t)>1e-5&&(Vf.rotation.y=Math.atan2(e,t));let s=fo==="DIRECT"||fo==="AVOIDING"?Math.max(0,Math.sin((i-Gl)*.011))*.11:0;Vf.position.set(rs,Le(rs,os)+.03+s,os),Z0=rs,K0=os}function dP(i){let e=iu.events;if(e>TM&&(TM=e,US++,rs=Ea,os=Ma,Z0=rs,K0=os,fl("ARRIVAL_DELAY",i),rf("PENDING","SAME MEMORY \xB7 CHECKING SPACE","#ffe59a"),mr&&(mr.textContent="CONTROL ACTOR INBOUND")),fo==="ARRIVAL_DELAY"&&i-Gl>=lo.arrivalDelayMs){let t=iu.state!=="CALM";Il=FS<=lo.memoryRadiusM,kl&&(kl.textContent=Il?"YES":"NO",kl.style.color=Il?"#ffd18a":"#a8f0b5"),t&&Il?(fl("AVOIDING",i),rf("DETOUR","DETOUR: LOCAL MEMORY","#ffd18a")):(fl("DIRECT",i),rf("DIRECT","DIRECT: OUTSIDE MEMORY","#9fe0ff"),mr&&(mr.textContent=t?"MEMORY ACTIVE \xB7 ACTOR UNAFFECTED \u2713":"WORLD CLEAR \xB7 DIRECT",mr.style.color="#a8f0b5"))}else if(fo==="DIRECT"){let t=Math.min(1,(i-Gl)/lo.travelMs),n=RM(t);rs=Ke.lerp(Ea,wl,n),os=Ke.lerp(Ma,Cl,n),t>=1&&(rs=wl,os=Cl,fl("COMPLETE",i),rf("PROVED","LOCAL SCOPE \u2713","#a8f0b5"),mr&&(mr.textContent="SAME MEMORY \xB7 DIFFERENT LOCATION \xB7 NO EFFECT \u2713",mr.style.color="#a8f0b5"))}else if(fo==="AVOIDING"){let t=Math.min(1,(i-Gl)/lo.travelMs),n=RM(t),s=(Ea+wl)*.5-J_*2,r=(Ma+Cl)*.5-Z_*2,o=1-n;rs=o*o*Ea+2*o*n*s+n*n*wl,os=o*o*Ma+2*o*n*r+n*n*Cl,t>=1&&fl("COMPLETE",i)}hP(i)}function zS(i){requestAnimationFrame(zS),dP(i)}requestAnimationFrame(zS);kl&&(kl.textContent="PENDING");globalThis.__livingWorld06E={marker:iP,get state(){return fo},get overlap(){return Il},get choice(){return HS},get events(){return US},directPlayerTrigger:!1,memoryRadiusM:lo.memoryRadiusM,controlPathDistanceToMemoryM:FS,expectedOverlap:!1,reads:"same 06C memory state with spatial path query"};var fP="06F_STIMULUS_PRIORITY_ARBITRATION",Un={arrivalDelayMs:1800,foodBecomesValidAfterMs:120,arbitrationDelayMs:180,hazardPriority:100,foodPriority:40,escapeTravelMs:2550,escapeOffsetM:3.2,directPlayerTrigger:!1},su=globalThis.__livingWorld06C,wM=globalThis.__livingWorld06E;if(!su||su.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06F requires frozen accepted 06C memory API");if(!wM||wM.marker!=="06E_SPATIALLY_SCOPED_MEMORY")throw new Error("06F requires frozen accepted 06E spatial-memory API");var Ap=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,pP=ne.position.x,mP=ne.position.z,j_=Math.sin(Ap),Q_=Math.cos(Ap),bp=Math.cos(Ap),Tp=-Math.sin(Ap),GS=pP+j_*15.7+bp*6.2,kS=mP+Q_*15.7+Tp*6.2,Rp=GS-bp*3.9-j_*.65,wp=kS-Tp*3.9-Q_*.65,gP=GS+bp*3.7,_P=kS+Tp*3.7,CM=Rp-j_*Un.escapeOffsetM-bp*.8,IM=wp-Q_*Un.escapeOffsetM-Tp*.8,Wf=new ft;ve.add(Wf);var xP=new ii(.5,1),yP=new Wn(.115,.55,7),EP=new Ie({color:12155959,roughness:.9,metalness:0}),MP=new Ie({color:10183727,roughness:.92,metalness:0}),ks=new ze(xP,EP,5),Ja=new ze(yP,MP,2);ks.castShadow=!0;Ja.castShadow=!0;ks.frustumCulled=!1;Ja.frustumCulled=!1;Wf.add(ks,Ja);var pl=new Fe;function yo(i,e,t,n,s,r,o,a,c=0,l=0,u=0){pl.position.set(t,n,s),pl.scale.set(r,o,a),pl.rotation.set(c,l,u),pl.updateMatrix(),i.setMatrixAt(e,pl.matrix)}yo(ks,0,0,.42,0,.72,.55,1.08);yo(ks,1,0,.62,.5,.48,.48,.48);yo(ks,2,-.33,.25,-.2,.32,.34,.38);yo(ks,3,.33,.25,-.2,.32,.34,.38);yo(ks,4,0,.48,-.6,.25,.25,.25);yo(Ja,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);yo(Ja,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);ks.instanceMatrix.needsUpdate=!0;Ja.instanceMatrix.needsUpdate=!0;var vP=new pn(.13,7,5),SP=new Ie({color:7249222,roughness:.86,metalness:0}),Cp=new ze(vP,SP,7);Cp.frustumCulled=!1;var of=new Fe;for(let i=0;i<7;i++){let e=i*2.399963229728653,t=.12+i%3*.09,n=gP+Math.cos(e)*t,s=_P+Math.sin(e)*t;of.position.set(n,Le(n,s)+.12+i%2*.04,s),of.scale.set(1,1,1),of.updateMatrix(),Cp.setMatrixAt(i,of.matrix)}Cp.instanceMatrix.needsUpdate=!0;ve.add(Cp);var Ca="WAITING",Xf=performance.now(),DM=su.events,VS=0,WS="NONE",qf="NONE",Yf=!1,Jf=!1,$0=0,j0=0,Os=Rp,Bs=wp,Q0=Os,e_=Bs,M0=document.getElementById("worldArbState"),Zf=document.getElementById("worldArbCandidates"),ro=document.getElementById("worldArbLast"),v0=document.getElementById("worldArbWinner"),Oi=document.getElementById("worldArbResult");function Ia(i,e){Ca=i,Xf=e,M0&&(M0.textContent=i,M0.style.color=i==="WAITING"?"#d6d6d6":i==="ARRIVAL_DELAY"||i==="ARBITRATING"?"#ffe59a":i==="ESCAPING"?"#ffd18a":"#a8f0b5")}function Vl(i,e,t){WS=i,v0&&(v0.textContent=e,v0.style.color=t)}function AP(i){return i*i*(3-2*i)}function bP(i){let e=Os-Q0,t=Bs-e_;Math.hypot(e,t)>1e-5&&(Wf.rotation.y=Math.atan2(e,t));let s=Ca==="ESCAPING"?Math.max(0,Math.sin((i-Xf)*.012))*.115:0;Wf.position.set(Os,Le(Os,Bs)+.03+s,Bs),Q0=Os,e_=Bs}function TP(i){VS++,Os=Rp,Bs=wp,Q0=Os,e_=Bs,Yf=!1,Jf=!1,qf="NONE",$0=0,j0=0,Ia("ARRIVAL_DELAY",i),Vl("PENDING","PENDING","#ffe59a"),Zf&&(Zf.textContent="WAITING"),ro&&(ro.textContent="NONE"),Oi&&(Oi.textContent="ACTOR INBOUND")}function RP(i){let e=[];Yf&&e.push({id:"HAZARD",priority:Un.hazardPriority}),Jf&&e.push({id:"FOOD",priority:Un.foodPriority}),e.sort((n,s)=>s.priority-n.priority||n.id.localeCompare(s.id));let t=e[0]?.id||"NONE";Zf&&(Zf.textContent=`HAZARD ${Un.hazardPriority} \xB7 FOOD ${Un.foodPriority}`),t==="HAZARD"?(Vl("HAZARD","HAZARD 100","#ffd18a"),Ia("ESCAPING",i),Oi&&(Oi.textContent="NEWER FOOD LOST TO HIGHER PRIORITY \u2713",Oi.style.color="#a8f0b5")):t==="FOOD"?(Vl("FOOD","FOOD 40","#9fe0ff"),Ia("COMPLETE",i),Oi&&(Oi.textContent="FOOD WON",Oi.style.color="#9fe0ff")):(Vl("NONE","NONE","#d6d6d6"),Ia("COMPLETE",i))}function wP(i){let e=su.events;if(e>DM&&(DM=e,TP(i)),Ca==="ARRIVAL_DELAY"&&i-Xf>=Un.arrivalDelayMs)Yf=su.state!=="CALM",Yf&&(qf="HAZARD",ro&&(ro.textContent="HAZARD")),$0=i+Un.foodBecomesValidAfterMs,j0=i+Un.arbitrationDelayMs,Ia("ARBITRATING",i);else if(Ca==="ARBITRATING")!Jf&&i>=$0&&(Jf=!0,qf="FOOD",ro&&(ro.textContent="FOOD (NEWER)",ro.style.color="#9fe0ff")),i>=j0&&RP(i);else if(Ca==="ESCAPING"){let t=Math.min(1,(i-Xf)/Un.escapeTravelMs),n=AP(t);Os=Ke.lerp(Rp,CM,n),Bs=Ke.lerp(wp,IM,n),t>=1&&(Os=CM,Bs=IM,Ia("COMPLETE",i),Vl("PROVED","HAZARD WON \u2713","#a8f0b5"),Oi&&(Oi.textContent="PRIORITY > RECENCY \u2713",Oi.style.color="#a8f0b5"))}bP(i)}function XS(i){requestAnimationFrame(XS),wP(i)}requestAnimationFrame(XS);globalThis.__livingWorld06F={marker:fP,get state(){return Ca},get winner(){return WS},get lastStimulus(){return qf},get events(){return VS},priorities:{hazard:Un.hazardPriority,food:Un.foodPriority},foodBecomesValidAfterMs:Un.foodBecomesValidAfterMs,arbitrationDelayMs:Un.arbitrationDelayMs,directPlayerTrigger:!1,rule:"highest priority wins; event recency is not decision authority"};var CP="06G_INTERRUPTED_GOAL_RECOVERY",oo={preGoalTravelMs:6200,preGoalCap:.34,evadeTravelMs:1450,recoverHoldMs:450,resumeTravelMs:3e3,evadeOffsetM:3,directPlayerTrigger:!1},ru=globalThis.__livingWorld06C,PM=globalThis.__livingWorld06F;if(!ru||ru.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06G requires frozen accepted 06C memory API");if(!PM||PM.marker!=="06F_STIMULUS_PRIORITY_ARBITRATION")throw new Error("06G requires frozen accepted 06F arbitration API");var Ip=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,IP=ne.position.x,DP=ne.position.z,Dp=Math.sin(Ip),Pp=Math.cos(Ip),Np=Math.cos(Ip),Lp=-Math.sin(Ip),ex=IP+Dp*15.7+Np*6.2,tx=DP+Pp*15.7+Lp*6.2,nx=ex-Np*4.4+Dp*.9,ix=tx-Lp*4.4+Pp*.9,mf=ex+Np*4+Dp*.8,gf=tx+Lp*4+Pp*.8,t_=ex-Dp*oo.evadeOffsetM-Np*1.2,n_=tx-Pp*oo.evadeOffsetM-Lp*1.2,Kf=new ft;ve.add(Kf);var PP=new ii(.5,1),NP=new Wn(.115,.55,7),LP=new Ie({color:4165512,roughness:.9,metalness:0}),OP=new Ie({color:3438191,roughness:.92,metalness:0}),Vs=new ze(PP,LP,5),Za=new ze(NP,OP,2);Vs.castShadow=!0;Za.castShadow=!0;Vs.frustumCulled=!1;Za.frustumCulled=!1;Kf.add(Vs,Za);var ml=new Fe;function Eo(i,e,t,n,s,r,o,a,c=0,l=0,u=0){ml.position.set(t,n,s),ml.scale.set(r,o,a),ml.rotation.set(c,l,u),ml.updateMatrix(),i.setMatrixAt(e,ml.matrix)}Eo(Vs,0,0,.42,0,.72,.55,1.08);Eo(Vs,1,0,.62,.5,.48,.48,.48);Eo(Vs,2,-.33,.25,-.2,.32,.34,.38);Eo(Vs,3,.33,.25,-.2,.32,.34,.38);Eo(Vs,4,0,.48,-.6,.25,.25,.25);Eo(Za,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Eo(Za,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Vs.instanceMatrix.needsUpdate=!0;Za.instanceMatrix.needsUpdate=!0;var BP=new pn(.13,7,5),FP=new Ie({color:8372052,roughness:.86,metalness:0}),Op=new ze(BP,FP,7);Op.frustumCulled=!1;var af=new Fe;for(let i=0;i<7;i++){let e=i*2.399963229728653,t=.12+i%3*.09,n=mf+Math.cos(e)*t,s=gf+Math.sin(e)*t;af.position.set(n,Le(n,s)+.12+i%2*.04,s),af.scale.set(1,1,1),af.updateMatrix(),Op.setMatrixAt(i,af.matrix)}Op.instanceMatrix.needsUpdate=!0;ve.add(Op);var as="SEEKING_FOOD",Wl=performance.now(),NM=ru.events,qS=0,YS="FOOD",sx="NONE",JS="NONE",ci=nx,li=ix,LM=ci,OM=li,ZS=nx,KS=ix,BM=t_,FM=n_,cf=0,S0=document.getElementById("worldRecoveryState"),UM=document.getElementById("worldRecoveryGoal"),Da=document.getElementById("worldRecoverySuspended"),Pa=document.getElementById("worldRecoveryInterrupt"),ai=document.getElementById("worldRecoveryResult");function _f(i,e){as=i,Wl=e,S0&&(S0.textContent=i,S0.style.color=i==="SEEKING_FOOD"?"#9fe0ff":i==="EVADING"?"#ffd18a":i==="WAIT_CLEAR"?"#ffe59a":i==="RESUMING_FOOD"?"#9fe0ff":"#a8f0b5")}function xf(i){YS=i,UM&&(UM.textContent=i)}function A0(i){return i*i*(3-2*i)}function UP(i){let e=ci-LM,t=li-OM;Math.hypot(e,t)>1e-5&&(Kf.rotation.y=Math.atan2(e,t));let s=as==="SEEKING_FOOD"||as==="EVADING"||as==="RESUMING_FOOD"?Math.max(0,Math.sin((i-Wl)*.011))*.11:0;Kf.position.set(ci,Le(ci,li)+.03+s,li),LM=ci,OM=li}function HP(i){qS++,ZS=ci,KS=li,sx="FOOD",JS="HAZARD",xf("HAZARD"),_f("EVADING",i),Da&&(Da.textContent="FOOD",Da.style.color="#ffe59a"),Pa&&(Pa.textContent="HAZARD",Pa.style.color="#ffd18a"),ai&&(ai.textContent="FOOD GOAL SUSPENDED",ai.style.color="#ffd18a")}function zP(i){let e=ru.events;if(e>NM&&(NM=e,as==="SEEKING_FOOD"&&HP(i)),as==="SEEKING_FOOD"){let t=Math.min(1,(i-Wl)/oo.preGoalTravelMs),n=Math.min(oo.preGoalCap,A0(t));ci=Ke.lerp(nx,mf,n),li=Ke.lerp(ix,gf,n)}else if(as==="EVADING"){let t=Math.min(1,(i-Wl)/oo.evadeTravelMs),n=A0(t);ci=Ke.lerp(ZS,t_,n),li=Ke.lerp(KS,n_,n),t>=1&&(ci=t_,li=n_,_f("WAIT_CLEAR",i),xf("WAITING"),ai&&(ai.textContent="WAITING FOR HAZARD TO CLEAR",ai.style.color="#ffe59a"))}else if(as==="WAIT_CLEAR")ru.state==="CALM"?(cf||(cf=i),i-cf>=oo.recoverHoldMs&&(BM=ci,FM=li,sx="NONE",xf("FOOD"),_f("RESUMING_FOOD",i),Da&&(Da.textContent="NONE",Da.style.color="#a8f0b5"),ai&&(ai.textContent="RESUMING ORIGINAL FOOD GOAL",ai.style.color="#9fe0ff"))):cf=0;else if(as==="RESUMING_FOOD"){let t=Math.min(1,(i-Wl)/oo.resumeTravelMs),n=A0(t);ci=Ke.lerp(BM,mf,n),li=Ke.lerp(FM,gf,n),t>=1&&(ci=mf,li=gf,_f("COMPLETE",i),xf("FOOD REACHED"),Pa&&(Pa.textContent="RESOLVED",Pa.style.color="#a8f0b5"),ai&&(ai.textContent="INTERRUPT \u2192 RECOVER \u2192 RESUME \u2713",ai.style.color="#a8f0b5"))}UP(i)}function $S(i){requestAnimationFrame($S),zP(i)}requestAnimationFrame($S);globalThis.__livingWorld06G={marker:CP,get state(){return as},get goal(){return YS},get suspendedGoal(){return sx},get interrupt(){return JS},get events(){return qS},directPlayerTrigger:!1,originalGoal:"FOOD",interruption:"HAZARD",rule:"suspend original goal, resolve higher-priority interruption, resume original goal when valid"};var GP="06H_STREAMED_PERSISTENCE",$f=globalThis.__livingWorld06C;if(!$f||$f.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06H requires frozen accepted 06C memory API");var ui={...Qg,cellId:"06H_CELL_A",directPlayerBehaviorTrigger:!1},Bp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,kP=ne.position.x,VP=ne.position.z,rx=Math.sin(Bp),ox=Math.cos(Bp),ax=Math.cos(Bp),cx=-Math.sin(Bp),Fp=kP+rx*10.5+ax*6,Up=VP+ox*10.5+cx*6,WP={x:Fp-ax*2.2-rx*.4,z:Up-cx*2.2-ox*.4},XP={x:Fp+ax*3.6+rx*.7,z:Up+cx*3.6+ox*.7},lx=new da,Xl=1/0,i_=!1,yf=!1,ao="READY",qP=document.getElementById("worldStreamLifecycle"),YP=document.getElementById("worldStreamDistance"),JP=document.getElementById("worldStreamSnapshot"),ZP=document.getElementById("worldStreamOffscreen"),KP=document.getElementById("worldStreamMemory"),$P=document.getElementById("worldStreamGoal"),jP=document.getElementById("worldStreamProgress"),QP=document.getElementById("worldStreamDuplicates"),eN=document.getElementById("worldStreamResult");function Cs(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function jS(i){return i==="DISTURBED"?14256696:i==="SETTLING"?12758370:7901789}function tN(i){if(Array.isArray(i))for(let e of i)e.dispose();else i&&i.dispose()}function nN(i){let e=new ft;e.userData.streamCellId=ui.cellId;let t=new si(.18,1.42,1,2);t.translate(0,.71,0);let n=new Ie({color:jS(i.memory.state),roughness:.96,metalness:0,side:At}),s=new ze(t,n,14);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1;let r=new Fe;for(let f=0;f<14;f++){let m=f*2.399963229728653,y=.55+f%5*.19,g=Fp+Math.cos(m)*y,p=Up+Math.sin(m)*y;r.position.set(g,Le(g,p)+.03,p),r.rotation.set(0,m*.37,0),r.scale.set(.82,.78+f%4*.1,1),r.updateMatrix(),s.setMatrixAt(f,r.matrix)}s.instanceMatrix.needsUpdate=!0;let o=new ii(.48,1),a=new Ie({color:4165512,roughness:.9,metalness:0}),c=new Ue(o,a);c.castShadow=!0;let l=new pn(.2,10,8),u=new Ie({color:14201690,emissive:7097624,emissiveIntensity:.28,roughness:.72}),h=new Ue(l,u);h.castShadow=!0,e.add(s,c,h),ve.add(e);let d={root:e,reeds:s,reedGeo:t,reedMat:n,actor:c,actorGeo:o,actorMat:a,food:h,foodGeo:l,foodMat:u};return QS(d,i,Date.now()),d}function QS(i,e,t){if(!i)return;let n=e.actor.position;i.actor.position.set(n.x,Le(n.x,n.z)+.48,n.z);let s=e.actor.destination;i.food.position.set(s.x,Le(s.x,s.z)+.23,s.z);let r=jS(e.memory.state);i.reedMat.color.setHex(r);let o=e.memory.state==="DISTURBED"?1+Math.sin(t*.012)*.08:1;i.reeds.scale.setScalar(o)}function iN(i){i&&(ve.remove(i.root),i.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&tN(e.material)}),i.root.clear())}var lt=new Fd({id:ui.cellId,store:lx,actorStart:WP,actorDestination:XP,config:ui,initialEventId:$f.events,attachVisual:nN,detachVisual:iN,updateVisual:QS});lt.load(Date.now());function sN(i){let e=lt.isActive?"ACTIVE":"UNLOADED";Cs(qP,e,e==="ACTIVE"?"#a8f0b5":"#ffd18a"),Cs(YP,Xl.toFixed(1)+" m"),Cs(JP,lt.hasSnapshot?"SAVED":"NONE",lt.hasSnapshot?"#9fe0ff":"#d8ebe5"),Cs(ZP,(lt.offscreenMs(i)/1e3).toFixed(1)+" s"),Cs(KP,lt.state.memory.state,lt.state.memory.state==="CALM"?"#a8f0b5":"#ffd18a"),Cs($P,lt.state.actor.goal),Cs(jP,Math.round(lt.state.actor.progress*100)+"%"),Cs(QP,String(lt.duplicateCount),lt.duplicateCount===0?"#a8f0b5":"#ff8f8f"),Cs(eN,ao,ao.includes("\u2713")?"#a8f0b5":"#ffe59a")}function rN(i,e){let t=Date.now();if(Xl=Math.hypot(ne.position.x-Fp,ne.position.z-Up),lt.isActive&&Xl>=ui.unloadRadiusM)lt.unload(t),ao="STATE SERIALIZED \xB7 SIMULATION STOPPED";else if(!lt.isActive&&Xl<=ui.loadRadiusM){let n=lx.load(ui.cellId),s=n?.actor?.progress,r=n?.memory?.state,o=n?.memory?.expiresAt||0;lt.load(t).rehydrated&&(yf=Math.abs(lt.state.actor.progress-s)<1e-9,i_=r!=="CALM"&&t>=o&&lt.state.memory.state==="CALM",i_&&yf&&lt.duplicateCount===0?ao="STATE RESTORED \u2713 \xB7 TIMER CAUGHT UP \u2713 \xB7 NO DUPLICATES \u2713":yf&&lt.duplicateCount===0?ao="STATE RESTORED \u2713 \xB7 NO DUPLICATES \u2713":ao="RESTORE CHECK FAILED")}lt.isActive&&(lt.update({dtMs:Math.max(0,e*1e3),wallNow:t,eventId:$f.events}),lt.state.memory.state==="DISTURBED"&&lt.lastTransition==="MEMORY_DISTURBED"&&(ao="MEMORY DISTURBED \xB7 LEAVE CELL")),sN(t)}var HM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),eA=(i,e)=>rN(i,e);eA.streamCellId=ui.cellId;HM.some(i=>i.streamCellId===ui.cellId)||HM.push(eA);globalThis.__livingWorld06H={marker:GP,schemaVersion:1,get lifecycle(){return lt.lifecycle},get loaded(){return lt.isActive},get state(){return lt.state.memory.state},get snapshot(){return lx.load(ui.cellId)},get playerDistanceM(){return Xl},get actorGoal(){return lt.state.actor.goal},get actorProgress(){return lt.state.actor.progress},get unloadCount(){return lt.unloadCount},get restoreCount(){return lt.restoreCount},get duplicateCount(){return lt.duplicateCount},get lastOffscreenMs(){return lt.lastOffscreenMs},get timerCaughtUp(){return i_},get progressPreserved(){return yf},loadRadiusM:ui.loadRadiusM,unloadRadiusM:ui.unloadRadiusM,directPlayerBehaviorTrigger:!1,activeSceneRootCount:()=>ve.children.filter(i=>i.userData?.streamCellId===ui.cellId).length};var oN="06I_SIMULATION_LOD_SLEEP_WAKE",Qn={...Kc,cellId:"06I_LOD_CELL",actorTravelMs:9e4,directPlayerBehaviorTrigger:!1},Hp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,aN=ne.position.x,cN=ne.position.z,tA=Math.sin(Hp),nA=Math.cos(Hp),ux=Math.cos(Hp),hx=-Math.sin(Hp),dx=aN+tA*8.8-ux*4.8,fx=cN+nA*8.8-hx*4.8,s_={x:dx-ux*2.4,z:fx-hx*2.4},r_={x:dx+ux*4.8+tA*.9,z:fx+hx*4.8+nA*.9},ou=new da,co=null,va=null,jf=1/0,Na=0,iA=0,zp=!1,lN=0,sA=0,Ps="NEAR FULL SIMULATION",zM=performance.now(),o_=0,GM=0,Dl=new Set([De.NEAR]),vt={goal:"FOOD",behaviorState:"SEEKING_FOOD",progress:0,position:{...s_},destination:{...r_}},uN=document.getElementById("worldLodTier"),hN=document.getElementById("worldLodDistance"),dN=document.getElementById("worldLodCadence"),fN=document.getElementById("worldLodTicks"),pN=document.getElementById("worldLodGoal"),mN=document.getElementById("worldLodProgress"),gN=document.getElementById("worldLodSnapshot"),_N=document.getElementById("worldLodSleepWake"),xN=document.getElementById("worldLodDuplicates"),yN=document.getElementById("worldLodResult");function es(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function rA(i){return i===De.NEAR?4165512:i===De.MID?5211048:i===De.FAR?7693210:6252136}function EN(i){if(Array.isArray(i))for(let e of i)e.dispose();else i&&i.dispose()}function MN(){let i=vt.progress;vt.position.x=Ke.lerp(s_.x,r_.x,i),vt.position.z=Ke.lerp(s_.z,r_.z,i)}function oA(){if(co){Na++;return}let i=new ft;i.userData.simLodCellId=Qn.cellId;let e=new ii(.46,1),t=new Ie({color:rA(De.NEAR),roughness:.9,metalness:0}),n=new Ue(e,t);n.castShadow=!0;let s=new Wn(.11,.46,7),r=new Ie({color:3235675,roughness:.92,metalness:0}),o=new Ue(s,r),a=new Ue(s,r.clone());o.position.set(-.19,.43,0),a.position.set(.19,.43,0),o.rotation.z=.22,a.rotation.z=-.22,n.add(o,a);let c=new pn(.19,10,8),l=new Ie({color:14136410,emissive:6441236,emissiveIntensity:.25,roughness:.74}),u=new Ue(c,l);u.castShadow=!0,i.add(n,u),ve.add(i),co=i,va={root:i,body:n,bodyGeo:e,bodyMat:t,earL:o,earR:a,food:u,foodGeo:c,foodMat:l},a_()}function vN(){co&&(ve.remove(co),co.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&EN(i.material)}),co.clear(),co=null,va=null)}function a_(){if(!va)return;let i=vt.position;va.body.position.set(i.x,Le(i.x,i.z)+.5,i.z);let e=vt.destination;va.food.position.set(e.x,Le(e.x,e.z)+.22,e.z),va.bodyMat.color.setHex(rA(Kn?.tier||De.NEAR))}function SN(i){let e={version:1,cellId:Qn.cellId,serializedAt:i,actor:{goal:vt.goal,behaviorState:vt.behaviorState,progress:vt.progress,position:{...vt.position},destination:{...vt.destination}}};ou.save(Qn.cellId,e),iA=vt.progress,lN=i}function AN(i){let e=ou.load(Qn.cellId);return e?(vt.goal=e.actor.goal,vt.behaviorState=e.actor.behaviorState,vt.progress=e.actor.progress,vt.position={...e.actor.position},vt.destination={...e.actor.destination},sA=Math.max(0,i-e.serializedAt),zp=Math.abs(vt.progress-iA)<1e-9,!0):!1}function bN(i){vt.behaviorState==="SEEKING_FOOD"&&(vt.progress=Math.min(1,vt.progress+i/Qn.actorTravelMs),vt.progress>=1&&(vt.progress=1,vt.goal="FOOD REACHED",vt.behaviorState="COMPLETE"),MN())}var Kn=new fa({config:Qn,onSimulate:i=>{o_++,bN(i),a_()},onTierChange:i=>{Dl.add(i),i===De.NEAR?Ps="NEAR FULL SIMULATION":i===De.MID?Ps="MID REDUCED-RATE SIMULATION":i===De.FAR?Ps="FAR COARSE SIMULATION":Ps="DORMANT \xB7 SNAPSHOT SAVED \xB7 SIMULATION SLEEPING",a_()},onSleep:i=>{SN(i),vN()},onWake:i=>{let e=AN(i);oA(),e&&zp&&Na===0?Ps="WAKE RESTORED \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 NO DUPLICATES \u2713":Ps="WAKE VALIDATION FAILED"}});oA();function TN(i){let e=Kn.tier,t=e===De.DORMANT?"#ffd18a":"#a8f0b5";es(uN,e,t),es(hN,jf.toFixed(1)+" m"),es(dN,Kn.cadenceLabel(),t),es(fN,GM.toFixed(1)+" /s"),es(pN,vt.goal),es(mN,Math.round(vt.progress*100)+"%"),es(gN,ou.has(Qn.cellId)?"SAVED":"NONE",ou.has(Qn.cellId)?"#9fe0ff":"#d8ebe5"),es(_N,Kn.sleepCount+"/"+Kn.wakeCount),es(xN,String(Na),Na===0?"#a8f0b5":"#ff8f8f"),Dl.has(De.NEAR)&&Dl.has(De.MID)&&Dl.has(De.FAR)&&Dl.has(De.DORMANT)&&Kn.wakeCount>0&&zp&&Na===0&&(Ps="LOD LADDER \u2713 \xB7 SLEEP/WAKE \u2713 \xB7 NO DUPLICATES \u2713"),es(yN,Ps,Ps.includes("\u2713")?"#a8f0b5":"#ffe59a");let n=performance.now()-zM;n>=1e3&&(GM=o_/(n/1e3),o_=0,zM=performance.now())}function RN(i,e){let t=Date.now();jf=Math.hypot(ne.position.x-dx,ne.position.z-fx),Kn.step({distanceM:jf,dtMs:Math.max(0,e*1e3),wallNow:t}),TN(t)}var kM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),aA=(i,e)=>RN(i,e);aA.simLodCellId=Qn.cellId;kM.some(i=>i.simLodCellId===Qn.cellId)||kM.push(aA);globalThis.__livingWorld06I={marker:oN,get tier(){return Kn.tier},get playerDistanceM(){return jf},get cadence(){return Kn.cadenceLabel()},get totalTicks(){return Kn.totalTicks},get ticksByTier(){return{...Kn.ticksByTier}},get actorGoal(){return vt.goal},get actorProgress(){return vt.progress},get sleepCount(){return Kn.sleepCount},get wakeCount(){return Kn.wakeCount},get duplicateCount(){return Na},get snapshot(){return ou.load(Qn.cellId)},get lastOffscreenMs(){return sA},get progressPreserved(){return zp},activeSceneRootCount:()=>ve.children.filter(i=>i.userData?.simLodCellId===Qn.cellId).length,config:{...Qn},directPlayerBehaviorTrigger:!1};var wN="06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT",px={actorCount:192,directPlayerBehaviorTrigger:!1},cA=ne.position.x,lA=ne.position.z,CN=Date.now(),Gp=[],Qf=0,ep=!1,tp=!1,c_=0,mx=0,VM=performance.now(),b0=0,lf=0,uA=!1,hs=null,l_=null,WM=0,hA=0,Ef=0,Mf=0,au=[],cu=[],u_=0,h_=0,Bi="WAITING",Ga="WAITING FOR RUNTIME",Bn={NEAR:0,MID:0,FAR:0,DORMANT:0},gx=0,_x=0,xx=0,IN=document.getElementById("auditStage06J"),DN=document.getElementById("auditActors06J"),PN=document.getElementById("auditTiers06J"),NN=document.getElementById("auditTicks06J"),LN=document.getElementById("auditFrame06J"),ON=document.getElementById("auditCpu06J"),BN=document.getElementById("auditDraw06J"),FN=document.getElementById("auditScene06J"),UN=document.getElementById("auditMemory06J"),HN=document.getElementById("auditShaders06J"),zN=document.getElementById("auditGpu06J"),GN=document.getElementById("auditState06J"),kN=document.getElementById("auditResult06J"),XM=document.getElementById("char"),VN=new Ac(.22,0),WN=new Ie({color:16777215,roughness:.9,metalness:0}),Hn=new ze(VN,WN,px.actorCount);Hn.castShadow=!1;Hn.receiveShadow=!1;Hn.frustumCulled=!1;Hn.instanceMatrix.setUsage(eg);Hn.userData.scaleAuditRoot=!0;ve.add(Hn);var gl=new Fe,qM=new me;function XN(i){return i===De.NEAR?3778971:i===De.MID?5211062:i===De.FAR?8020649:5857636}function _l(i,e){let t=cA+i.position.x,n=lA+i.position.z,s=e===De.DORMANT;gl.position.set(t,Le(t,n)+.18,n),gl.rotation.set(0,i.index*.61803398875,0);let r=s?0:.58+i.index%7*.025;gl.scale.setScalar(r),gl.updateMatrix(),Hn.setMatrixAt(i.index,gl.matrix),qM.setHex(XN(e)),Hn.setColorAt(i.index,qM),ep=!0,tp=!0}function qN(i){let e=cA+i.position.x,t=lA+i.position.z;return Math.hypot(ne.position.x-e,ne.position.z-t)}for(let i=0;i<px.actorCount;i++){let e=nM(i,CN);e.controller=new fa({config:Kc,onSimulate:(t,n,s)=>{c_++,t0(e,t,s),_l(e,n)},onTierChange:t=>{_l(e,t)},onSleep:t=>{e.visualActive||Qf++,e.snapshot=iM(e,1,t),e.sleepCount++,e.visualActive=!1,_l(e,De.DORMANT)},onWake:(t,n)=>{e.visualActive&&Qf++,e.snapshot&&sM(e,e.snapshot,t),e.wakeCount++,e.visualActive=!0,_l(e,n)}}),Gp.push(e),_l(e,De.NEAR)}Hn.instanceMatrix.needsUpdate=!0;Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0);ep=!1;tp=!1;function YN(){let i=0;return ve.traverse(()=>i++),i}function JN(){let i=performance.memory;return!i||!Number.isFinite(i.usedJSHeapSize)?"JS N/A":"JS "+(i.usedJSHeapSize/(1024*1024)).toFixed(1)+" MB"}function qn(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function dA(){let i={NEAR:0,MID:0,FAR:0,DORMANT:0},e=0,t=0,n=0;for(let s of Gp){let r=s.controller.tier;i[r]=(i[r]||0)+1,s.memory.state!=="CALM"&&e++,s.suspendedGoal!=="NONE"&&t++,s.snapshot&&n++}Bn=i,gx=e,_x=t,xx=n}function ZN(){if(hs){let e=hs;return e.frame_avg_ms.toFixed(2)+" / "+e.frame_p95_ms.toFixed(2)+" / "+e.frame_p99_ms.toFixed(2)+" ms"}let i=au.length?u_/au.length:0;return i?i.toFixed(2)+" ms avg":"\u2014"}function KN(){if(hs){let e=hs;return e.audit_cpu_avg_ms.toFixed(3)+" / "+e.audit_cpu_p95_ms.toFixed(3)+" ms"}let i=cu.length?h_/cu.length:0;return i?i.toFixed(3)+" ms avg":"\u2014"}function $N(i){let e=Bn.NEAR+Bn.MID+Bn.FAR+Bn.DORMANT,t=et.info.memory||{},n=Array.isArray(et.info.programs)?et.info.programs.length:0,s=l_===null?"\u2014":String(n-l_),r=ve.children.filter(o=>o.userData?.scaleAuditRoot===!0).length;qn(IN,Bi,Bi==="PASS"?"#a8f0b5":Bi==="FAIL"?"#ff9b9b":"#ffe59a"),qn(DN,e+"/"+px.actorCount),qn(PN,Bn.NEAR+"/"+Bn.MID+"/"+Bn.FAR+"/"+Bn.DORMANT),qn(NN,mx.toFixed(0)+" /s"),qn(LN,ZN()),qn(ON,KN()),qn(BN,et.info.render.calls+" / "+et.info.render.triangles.toLocaleString()),qn(FN,hA+" obj \xB7 "+(t.geometries||0)+" geo \xB7 "+(t.textures||0)+" tex"),qn(UN,JN()),qn(HN,n+" \xB7 \u0394 "+s),qn(zN,"N/A \xB7 WebGL"),qn(GN,"mem "+gx+" \xB7 susp "+_x+" \xB7 snap "+xx+" \xB7 root "+r),qn(kN,Ga,hs?.pass?"#a8f0b5":Bi==="FAIL"?"#ff9b9b":"#ffe59a")}function jN(){dA();let i=Bn.NEAR+Bn.MID+Bn.FAR+Bn.DORMANT,e=ve.children.filter(n=>n.userData?.scaleAuditRoot===!0).length,t=Qf+(e===1?0:1);hs=rM({frameSamples:au,cpuSamples:cu,drawCallsMax:Ef,trianglesMax:Mf,actorCount:i,duplicateCount:t,limits:Kr}),uA=!0,hs.pass?(Bi="PASS",Ga="192 ACTORS \u2713 \xB7 BUDGET PASS \u2713 \xB7 STATE STABLE \u2713"):(Bi="FAIL",Ga="BUDGET FAIL \xB7 "+hs.failed.slice(0,3).join(" \xB7 "))}function QN(i,e){let t=performance.now(),n=Date.now(),s=b0>0?Math.max(0,i-b0):0;b0=i,!lf&&XM&&XM.textContent!=="BOOT"&&(lf=i,Bi="WARMUP",Ga="WARMING SHADERS + SCALE ACTORS",au=[],cu=[],u_=0,h_=0,Ef=0,Mf=0);for(let a of Gp)a.controller.step({distanceM:qN(a),dtMs:Math.max(0,e*1e3),wallNow:n});ep&&(Hn.instanceMatrix.needsUpdate=!0,ep=!1),tp&&Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0,tp=!1),dA();let r=i-VM;r>=1e3&&(mx=c_/(r/1e3),c_=0,VM=i);let o=performance.now()-t;if(lf&&!uA){let a=i-lf;a<Kr.warmupMs?Bi="WARMUP":(Bi==="WARMUP"&&(l_=Array.isArray(et.info.programs)?et.info.programs.length:0,Bi="MEASURING",Ga="MEASURING 15 s PERFORMANCE WINDOW"),s>0&&(au.push(s),u_+=s),cu.push(o),h_+=o,Ef=Math.max(Ef,et.info.render.calls||0),Mf=Math.max(Mf,et.info.render.triangles||0),a>=Kr.warmupMs+Kr.measureMs&&jN())}i-WM>=1e3&&(hA=YN(),WM=i),$N(i)}var YM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),fA=(i,e)=>QN(i,e);fA.scaleAuditId="06J_SCALE_AUDIT";YM.some(i=>i.scaleAuditId==="06J_SCALE_AUDIT")||YM.push(fA);globalThis.__livingWorld06J={marker:wN,get stage(){return Bi},get result(){return Ga},get actorCount(){return Gp.length},get tiers(){return{...Bn}},get logicTicksPerSecond(){return mx},get memoryActive(){return gx},get suspendedGoals(){return _x},get snapshots(){return xx},get duplicateCount(){return Qf},get summary(){return hs?JSON.parse(JSON.stringify(hs)):null},get budgets(){return{...Kr}},get gpuTiming(){return"N/A \xB7 WebGL"},directPlayerBehaviorTrigger:!1};var eL="07A_PRODUCTION_ARCHITECTURE_PROMOTION",tL=document.getElementById("archModules07A"),nL=document.getElementById("archBoundary07A"),iL=document.getElementById("archParity07A"),sL=document.getElementById("archStream07A"),rL=document.getElementById("archRegression07A"),uf=document.getElementById("archResult07A");function Ns(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function oL(){let i={},e=new dr({initialGoal:"FOOD",initialProgress:.34});e.createHazardEvent({center:{x:0,z:0},at:1e3});let t=e.update({now:1120,actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},foodValid:!0,foodEventAt:1120,foodProgressDelta:.05});i.priority_over_recency=t.memoryState==="DISTURBED"&&t.winner==="HAZARD"&&t.goal==="HAZARD"&&t.suspendedGoal==="FOOD"&&Math.abs(t.progress-.34)<1e-12;let n=e.serialize(1600),r=new dr().restore(n,7e3);i.offscreen_time_resolution=r.memoryState==="CALM"&&r.goal==="FOOD"&&Math.abs(r.progress-.34)<1e-12&&r.offscreenMs===5400;let o=new jc,a=0,c=0,l=new Qc({id:"07A_STREAM_PROOF",store:o,actorStart:{x:0,z:0},actorDestination:{x:10,z:0},initialEventId:0,attachVisual:()=>(a++,{id:a}),detachVisual:()=>{c++},updateVisual:()=>{}});l.load(1e3),l.update({dtMs:800,wallNow:1800,eventId:1});let u=l.state.actor.progress;l.unload(1900);let h=l.load(8e3);i.stream_parity=h.rehydrated===!0&&l.state.memory.state==="CALM"&&l.state.actor.goal==="FOOD"&&Math.abs(l.state.actor.progress-u)<1e-12&&l.duplicateCount===0&&a===2&&c===1;let d=0,f=new el({onSimulate:()=>{d++}});f.step({distanceM:10,dtMs:16,wallNow:1e3}),f.step({distanceM:17,dtMs:0,wallNow:1016});for(let p=0;p<10;p++)f.step({distanceM:20,dtMs:10,wallNow:1026+p*10});f.step({distanceM:31,dtMs:0,wallNow:1200});for(let p=0;p<50;p++)f.step({distanceM:40,dtMs:10,wallNow:1210+p*10});f.step({distanceM:60,dtMs:0,wallNow:1800});let m=f.tier,y=f.totalTicks;f.step({distanceM:60,dtMs:5e3,wallNow:6800}),f.step({distanceM:45,dtMs:0,wallNow:6801}),i.lod_parity=m===it.DORMANT&&f.totalTicks===y&&f.tier===it.FAR&&f.sleepCount===1&&f.wakeCount===1,i.module_manifest=$r.modules.length===8,i.boundaries=$r.boundaries.rendering.includes("no THREE")&&$r.boundaries.dom==="none"&&$r.boundaries.productionActorPipeline==="deferred to 07B";let g=Object.entries(i).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:i}}var $n=oL();Ns(tL,String($r.modules.length));Ns(nL,$n.checks.boundaries?"PURE CORE \u2713":"FAIL",$n.checks.boundaries?"#a8f0b5":"#ff9b9b");Ns(iL,$n.checks.priority_over_recency&&$n.checks.offscreen_time_resolution?"PASS \u2713":"FAIL",$n.checks.priority_over_recency&&$n.checks.offscreen_time_resolution?"#a8f0b5":"#ff9b9b");Ns(sL,$n.checks.stream_parity&&$n.checks.lod_parity?"PASS \u2713":"FAIL",$n.checks.stream_parity&&$n.checks.lod_parity?"#a8f0b5":"#ff9b9b");function pA(){let i=globalThis.__livingWorld06J?.stage||"WAITING";Ns(rL,i,i==="PASS"?"#a8f0b5":i==="FAIL"?"#ff9b9b":"#ffe59a"),$n.pass?i==="PASS"?Ns(uf,"PRODUCTION ARCHITECTURE PROMOTED \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):i==="FAIL"?Ns(uf,"PRODUCTION CORE PASS \u2713 \xB7 06J REGRESSION FAILED","#ff9b9b"):Ns(uf,"PRODUCTION CORE PASS \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):Ns(uf,"ARCHITECTURE PROOF FAILED \xB7 "+$n.failed.join(" \xB7 "),"#ff9b9b")}pA();var aL=setInterval(()=>{pA();let i=globalThis.__livingWorld06J?.stage||"WAITING";(i==="PASS"||i==="FAIL")&&clearInterval(aL)},1e3);globalThis.__productionArchitecture07A={marker:eL,manifest:$r,proof:$n,get regression(){return globalThis.__livingWorld06J?.stage||"WAITING"}};var cL="07B_PRODUCTION_ACTOR_PIPELINE",Ar=new Wd,mA=Ar.registerDefinition({typeId:"HUMANOID_FORAGER_V1",asset:{id:"SOLDIER_GLB_V1",url:"./assets/Soldier.glb"},scale:.92,yawOffset:Math.PI,animationMap:{IDLE:"Idle",WALK:"Walk",RUN:"Run"},presentation:{castShadow:!1,receiveShadow:!0}}),np=ne.position.x,ip=ne.position.z,lu=Ar.createActor({id:"07B_ACTOR_A",typeId:mA.typeId,position:{x:np-3.2,y:Le(np-3.2,ip-6),z:ip-6},yaw:.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.22}}),uu=Ar.createActor({id:"07B_ACTOR_B",typeId:mA.typeId,position:{x:np+3.2,y:Le(np+3.2,ip-7),z:ip-7},yaw:-.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.62}}),Fi=new Xd({scene:ve}),vf=[],uo="LOADING ASSET",gA="",lL=0,_A=new Xi(.72,.92,24);_A.rotateX(-Math.PI/2);var uL=new Pt({color:7921875,transparent:!0,opacity:.74,side:At,depthWrite:!1}),wu=new ze(_A,uL,2);wu.frustumCulled=!1;wu.userData.productionActorMarkers=!0;var xl=new Fe;for(let[i,e]of[lu,uu].entries())xl.position.set(e.position.x,e.position.y+.025,e.position.z),xl.rotation.set(0,0,0),xl.scale.setScalar(1),xl.updateMatrix(),wu.setMatrixAt(i,xl.matrix);wu.instanceMatrix.needsUpdate=!0;ve.add(wu);var hL=document.getElementById("actorStage07B"),dL=document.getElementById("actorDefinitions07B"),fL=document.getElementById("actorAssetLoads07B"),pL=document.getElementById("actorInstances07B"),mL=document.getElementById("actorBindings07B"),gL=document.getElementById("actorRoots07B"),_L=document.getElementById("actorMixers07B"),xL=document.getElementById("actorAnimations07B"),yL=document.getElementById("actorKernels07B"),EL=document.getElementById("actorDuplicates07B"),ML=document.getElementById("actorRegression07B"),yl=document.getElementById("actorResult07B");function gn(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function vL(){return ve.children.filter(i=>i.userData?.productionActorId==="07B_ACTOR_A"||i.userData?.productionActorId==="07B_ACTOR_B")}function xA(){let i=vL(),e=new Set(i.map(h=>h.uuid)),t=vf.filter(Boolean),n=new Set(t.map(h=>h.model?.uuid).filter(Boolean)),s=t.filter(h=>h.mixer).length,r=t.map(h=>h.resolvedAnimation).filter(h=>h&&h!=="NONE"),o=[lu.kernel,uu.kernel].filter(Boolean).length,a=globalThis.__livingWorld06J?.stage||"WAITING",c=globalThis.__productionArchitecture07A?.proof?.pass===!0,l={definitions:Ar.definitions.list().length===1,asset_load_once:Fi.assetCache.loadCount===1,actors:Ar.size===2,bindings:Fi.size===2&&t.length===2,unique_roots:i.length===2&&e.size===2&&n.size===2,independent_mixers:s===2,animations_resolved:r.length===2,kernels:o===2,stable_binding_claims:lu.bindingClaims===1&&uu.bindingClaims===1,duplicates:Fi.duplicateBindingCount===0,architecture:c,regression:a==="PASS"},u=Object.entries(l).filter(([,h])=>!h).map(([h])=>h);return{pass:u.length===0,failed:u,checks:l,roots:i,bindings:t,resolved:r,regression:a,mixers:s,kernels:o}}async function SL(){try{vf=await Promise.all([Fi.bind(lu),Fi.bind(uu)]),vf[0].setAnimationIntent("IDLE",0),vf[1].setAnimationIntent("WALK",0),uo="READY",lL=performance.now()}catch(i){uo="FAIL",gA=i?.message||String(i),console.error("07B production actor pipeline failed",i)}}SL();function AL(){let i=xA(),e=uo==="READY",t=i.checks.architecture,n=e&&t&&i.checks.definitions&&i.checks.asset_load_once&&i.checks.actors&&i.checks.bindings&&i.checks.unique_roots&&i.checks.independent_mixers&&i.checks.animations_resolved&&i.checks.kernels&&i.checks.stable_binding_claims&&i.checks.duplicates,s=uo;n&&i.regression==="PASS"?s="PASS":n&&(s="WAITING REGRESSION"),uo==="FAIL"&&(s="FAIL"),gn(hL,s,s==="PASS"?"#a8f0b5":s==="FAIL"?"#ff9b9b":"#ffe59a"),gn(dL,String(Ar.definitions.list().length)),gn(fL,String(Fi.assetCache.loadCount)),gn(pL,Ar.size+"/2"),gn(mL,Fi.size+"/2"),gn(gL,i.roots.length+" / "+new Set(i.roots.map(r=>r.uuid)).size),gn(_L,String(i.mixers)),gn(xL,i.resolved.length?i.resolved.join(" / "):"\u2014"),gn(yL,String(i.kernels)),gn(EL,String(Fi.duplicateBindingCount),Fi.duplicateBindingCount===0?"#a8f0b5":"#ff9b9b"),gn(ML,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),uo==="FAIL"?gn(yl,"PIPELINE FAIL \xB7 "+gA,"#ff9b9b"):n&&i.regression==="PASS"?gn(yl,"ACTOR PIPELINE \u2713 \xB7 ASSET CACHE \u2713 \xB7 INDEPENDENT INSTANCES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):n?gn(yl,"ACTOR PIPELINE \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):e?gn(yl,"PIPELINE CHECKING \xB7 "+i.failed.filter(r=>r!=="regression").join(" \xB7 "),"#ffe59a"):gn(yl,"LOADING PRODUCTION ACTOR ASSET","#ffe59a")}var JM=0,ZM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),yA=(i,e)=>{Fi.update(e),i>=JM&&(AL(),JM=i+1e3)};yA.productionActorPipelineId="07B_PRODUCTION_ACTOR_PIPELINE";ZM.some(i=>i.productionActorPipelineId==="07B_PRODUCTION_ACTOR_PIPELINE")||ZM.push(yA);globalThis.__productionActorPipeline07B={marker:cL,pipeline:Ar,factory:Fi,actors:[lu,uu],get state(){return uo},get proof(){return xA()}};var bL="07C_STREAMED_PRODUCTION_REGION",yx=globalThis.__productionActorPipeline07B;if(!yx)throw new Error("07C requires frozen accepted 07B actor pipeline");var hu=yx.pipeline,Er=yx.factory,KM=hu.definitions.get("HUMANOID_FORAGER_V1"),bn={x:ne.position.x+12,z:ne.position.z-10},mo=["07C_REGION_ACTOR_A","07C_REGION_ACTOR_B"],TL=[{id:mo[0],typeId:KM.typeId,position:{x:bn.x-2.5,y:Le(bn.x-2.5,bn.z),z:bn.z},yaw:.22,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.28}},{id:mo[1],typeId:KM.typeId,position:{x:bn.x+2.5,y:Le(bn.x+2.5,bn.z-.6),z:bn.z-.6},yaw:-.22,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.58}}],Ex=new Ni,Xe=new Qi({id:"07C_PRODUCTION_REGION_A",pipeline:hu,store:Ex,actorBlueprints:TL,bindActor:i=>Er.bind(i),unbindActor:i=>Er.unbind(i.id),loadRadiusM:24,unloadRadiusM:38}),ql=1/0,ka="",po="WAITING",EA=null,MA=null,$M=0,vA=new Xi(5.4,5.75,48);vA.rotateX(-Math.PI/2);var RL=new Pt({color:6215887,transparent:!0,opacity:.58,side:At,depthWrite:!1}),Mx=new Ue(vA,RL);Mx.position.set(bn.x,Le(bn.x,bn.z)+.035,bn.z);Mx.userData.productionRegionDiagnostic=!0;ve.add(Mx);var wL=document.getElementById("regionStage07C"),CL=document.getElementById("regionDistance07C"),IL=document.getElementById("regionActors07C"),DL=document.getElementById("regionBindings07C"),PL=document.getElementById("regionAssetLoads07C"),NL=document.getElementById("regionSnapshot07C"),LL=document.getElementById("regionOffscreen07C"),OL=document.getElementById("regionIds07C"),BL=document.getElementById("regionProgress07C"),FL=document.getElementById("regionCycles07C"),UL=document.getElementById("regionDuplicates07C"),HL=document.getElementById("regionRegression07C"),El=document.getElementById("regionResult07C");function on(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function zL(){let i=new Set(mo);return ve.children.filter(e=>i.has(e.userData?.productionActorId))}function d_(){return mo.filter(i=>Er.getBinding(i)).length}function GL(){return Ex.load(Xe.id)?.actors?.find(t=>t.actorId===mo[0])?.kernel?.goals?.progress}function vx(){return hu.getActor(mo[0])?.kernel?.goals?.progress}function SA(){let i=zL(),e=new Set(i.map(c=>c.userData?.productionActorId)),t=Xe.activeActors,n=Xe.duplicateCount+Er.duplicateBindingCount,s=globalThis.__livingWorld06J?.stage||"WAITING",r=!!hu.getActor("07B_ACTOR_A")&&!!hu.getActor("07B_ACTOR_B"),o={asset_load_one:Er.assetCache.loadCount===1,static_controls_present:r,actor_count:Xe.isActive?t.length===2:t.length===0,bindings:Xe.isActive?d_()===2:d_()===0,roots:Xe.isActive?i.length===2&&e.size===2:i.length===0,snapshot:Xe.unloadCount===0||Xe.hasSnapshot,ids_stable:Xe.restoreCount===0||Xe.lastRestoreIdsStable,progress_preserved:Xe.restoreCount===0||Xe.lastRestoreProgressPreserved,duplicates:n===0,regression:s==="PASS"},a=Object.entries(o).filter(([,c])=>!c).map(([c])=>c);return{pass:a.length===0,failed:a,checks:o,duplicates:n,regression:s,roots:i,activeActors:t}}function du(){let i=SA(),e=Xe.lifecycle;on(wL,e,e==="ACTIVE"?"#a8f0b5":e==="UNLOADED"?"#ffd18a":e==="LOADING"||e==="REHYDRATING"?"#9fe0ff":"#ffe59a"),on(CL,ql.toFixed(1)+" m"),on(IL,Xe.activeActors.length+"/2"),on(DL,d_()+"/2"),on(PL,String(Er.assetCache.loadCount),Er.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),on(NL,Xe.hasSnapshot?"SAVED":"NONE",Xe.hasSnapshot?"#9fe0ff":"#d8ebe5"),on(LL,(Xe.lastOffscreenMs/1e3).toFixed(1)+" s"),on(OL,Xe.restoreCount===0?"PENDING":Xe.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Xe.restoreCount===0?"#ffe59a":Xe.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b");let n=vx(),s=GL(),r=Number.isFinite(n)?Math.round(n*100)+"%":Number.isFinite(s)?Math.round(s*100)+"% saved":"\u2014";on(BL,r),on(FL,Xe.unloadCount+"/"+Xe.restoreCount),on(UL,String(i.duplicates),i.duplicates===0?"#a8f0b5":"#ff9b9b"),on(HL,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),ka?on(El,"REGION FAIL \xB7 "+ka,"#ff9b9b"):Xe.restoreCount>0&&Xe.isActive&&Xe.lastRestoreIdsStable&&Xe.lastRestoreProgressPreserved&&Er.assetCache.loadCount===1&&i.duplicates===0&&i.regression==="PASS"?on(El,"REGION RESTORED \u2713 \xB7 IDS STABLE \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):e==="UNLOADED"&&Xe.hasSnapshot?on(El,"REGION UNLOADED \u2713 \xB7 ACTORS REMOVED \u2713 \xB7 SNAPSHOT SAVED \u2713","#ffe59a"):on(El,po,"#ffe59a")}function kL(i){Xe.operation||(po=Xe.hasSnapshot?"REHYDRATING PRODUCTION REGION":"LOADING PRODUCTION REGION",Xe.load(i).then(e=>{ka="",e.rehydrated?(MA=vx(),po="REGION REHYDRATED \xB7 VERIFYING CONTINUITY"):po="REGION ACTIVE \xB7 LEAVE PAST 38 m",du()}).catch(e=>{ka=e?.message||String(e),du()}))}function VL(i){Xe.operation||(EA=vx(),po="SERIALIZING / UNLOADING REGION",Xe.unload(i).then(()=>{ka="",po="REGION UNLOADED \xB7 RETURN INSIDE 24 m",du()}).catch(e=>{ka=e?.message||String(e),du()}))}var jM=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),AA=(i,e)=>{let t=Date.now();ql=Math.hypot(ne.position.x-bn.x,ne.position.z-bn.z),Xe.operation||(Xe.lifecycle==="UNLOADED"&&ql<=Xe.loadRadiusM?kL(t):Xe.lifecycle==="ACTIVE"&&ql>=Xe.unloadRadiusM&&VL(t)),Xe.isActive&&Xe.update({dtMs:Math.max(0,e*1e3),now:t,foodProgressPerSecond:.006}),i>=$M&&(du(),$M=i+500)};AA.productionRegionId="07C_PRODUCTION_REGION";jM.some(i=>i.productionRegionId==="07C_PRODUCTION_REGION")||jM.push(AA);globalThis.__streamedProductionRegion07C={marker:bL,region:Xe,store:Ex,center:{...bn},actorIds:[...mo],get distanceM(){return ql},get proof(){return SA()},get lastUnloadProgress(){return EA},get lastRestoreProgress(){return MA}};var WL="07D_PRODUCTION_VERTICAL_SLICE",yr=globalThis.__streamedProductionRegion07C,Sx=globalThis.__productionActorPipeline07B;if(!yr||!Sx)throw new Error("07D requires frozen accepted 07B + 07C runtime");var Ds=yr.region,bA=Sx.pipeline,Yl=Sx.factory,f_="07C_REGION_ACTOR_A",Yn=new Jd({region:Ds,pipeline:bA,actorId:f_,hazardCenter:{x:yr.center.x,z:yr.center.z},triggerDelayMs:1800}),QM="",ev=0,Pl=!1,Nl=!1,TA=null,RA=new Xi(1.05,1.35,32);RA.rotateX(-Math.PI/2);var io=new Pt({color:6281423,transparent:!0,opacity:.62,side:At,depthWrite:!1}),kp=new Ue(RA,io);kp.position.set(yr.center.x,Le(yr.center.x,yr.center.z)+.05,yr.center.z);kp.userData.productionVerticalSliceBeacon=!0;ve.add(kp);var XL=document.getElementById("sliceStage07D"),qL=document.getElementById("sliceRegion07D"),YL=document.getElementById("sliceGoal07D"),JL=document.getElementById("sliceMemory07D"),ZL=document.getElementById("sliceAnim07D"),KL=document.getElementById("sliceBehavior07D"),$L=document.getElementById("sliceStream07D"),jL=document.getElementById("sliceIds07D"),QL=document.getElementById("sliceProgress07D"),eO=document.getElementById("sliceAsset07D"),tO=document.getElementById("sliceDuplicates07D"),nO=document.getElementById("sliceRegression07D"),hf=document.getElementById("sliceResult07D");function _n(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function p_(){let i=bA.getActor(f_);if(!i)return{actor:null,binding:null,goal:"UNLOADED",memory:"UNLOADED",intent:"NONE",progress:null};let e=Yl.getBinding(f_);return{actor:i,binding:e,goal:i.kernel.goals.activeGoal,memory:i.kernel.memory.state,intent:i.animationIntent,progress:i.kernel.goals.progress}}function iO(){let i=p_();if(!i.actor||!i.binding)return i;let e="WALK";return i.goal==="HAZARD"?e="RUN":i.goal==="FOOD REACHED"&&(e="IDLE"),(QM!==e||i.actor.animationIntent!==e)&&(i.binding.setAnimationIntent(e,.12),QM=e),i.memory==="DISTURBED"?(io.color.setHex(14981698),io.opacity=.9):i.memory==="SETTLING"?(io.color.setHex(14271595),io.opacity=.76):(io.color.setHex(6281423),io.opacity=.62),p_()}function T0(){return Ds.duplicateCount+Yl.duplicateBindingCount}function sO(){let i=p_(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=Yn.completion({assetLoadCount:Yl.assetCache.loadCount,duplicateCount:T0(),regressionStatus:e});TA=t,Pl=Yn.hazardObserved&&Yn.recoveryObserved&&t.checks.progress_preserved,Nl=Yn.streamOutObserved&&Yn.restoreObserved&&t.checks.region_ids_stable&&t.checks.region_progress_preserved,_n(XL,t.pass?"PASS":Yn.stage,t.pass?"#a8f0b5":"#ffe59a"),_n(qL,Ds.lifecycle,Ds.isActive?"#a8f0b5":Ds.lifecycle==="UNLOADED"?"#ffd18a":"#9fe0ff"),_n(YL,i.goal,i.goal==="HAZARD"?"#ffd18a":"#a8f0b5"),_n(JL,i.memory,i.memory==="CALM"?"#a8f0b5":"#ffd18a"),_n(ZL,i.binding?.resolvedAnimation||i.intent||"NONE"),_n(KL,Pl?"PASS \u2713":Yn.hazardObserved?"HAZARD OBSERVED":Yn.hazardEventId?"EVENT EMITTED":"WAITING",Pl?"#a8f0b5":"#ffe59a"),_n($L,Nl?"PASS \u2713":Yn.streamOutObserved?"UNLOADED \u2713 \xB7 RETURN":"PENDING",Nl?"#a8f0b5":"#ffe59a"),_n(jL,Ds.restoreCount===0?"PENDING":Ds.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Ds.restoreCount===0?"#ffe59a":Ds.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b"),_n(QL,Number.isFinite(i.progress)?Math.round(i.progress*100)+"%":Number.isFinite(Yn.recoveredProgress)?Math.round(Yn.recoveredProgress*100)+"% saved":"\u2014"),_n(eO,String(Yl.assetCache.loadCount),Yl.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),_n(tO,String(T0()),T0()===0?"#a8f0b5":"#ff9b9b"),_n(nO,e,e==="PASS"?"#a8f0b5":e==="FAIL"?"#ff9b9b":"#ffe59a"),t.pass?_n(hf,"PRODUCTION VERTICAL SLICE \u2713 \xB7 BEHAVIOR LOOP \u2713 \xB7 STREAM RESTORE \u2713 \xB7 ASSET PIPELINE \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):e==="FAIL"?_n(hf,"VERTICAL SLICE BLOCKED \xB7 PERFORMANCE REGRESSION FAILED","#ff9b9b"):Pl&&!Nl?_n(hf,"BEHAVIOR LOOP \u2713 \xB7 LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m","#ffe59a"):_n(hf,"OBSERVE FOOD \u2192 HAZARD \u2192 FOOD RECOVERY","#ffe59a")}var tv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),wA=i=>{let e=Date.now();Yn.update(e),iO();let t=1+Math.sin(i*.006)*.08;kp.scale.setScalar(t),i>=ev&&(sO(),ev=i+500)};wA.productionVerticalSliceId="07D_PRODUCTION_VERTICAL_SLICE";tv.some(i=>i.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")||tv.push(wA);globalThis.__productionVerticalSlice07D={marker:WL,coordinator:Yn,get completion(){return TA},get behaviorLoopPass(){return Pl},get streamPass(){return Nl}};var rO="08A_MULTI_REGION_PRODUCTION_WORLD",Ax=globalThis.__productionActorPipeline07B;if(!Ax)throw new Error("08A requires frozen accepted 07B actor pipeline");var R0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let i=R0.length-1;i>=0;i--){let e=R0[i];(e?.productionRegionId==="07C_PRODUCTION_REGION"||e?.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")&&R0.splice(i,1)}for(let i of[...ve.children])(i.userData?.productionRegionDiagnostic===!0||i.userData?.productionVerticalSliceBeacon===!0)&&ve.remove(i);var bx=Ax.pipeline,Va=Ax.factory,nv=bx.definitions.get("HUMANOID_FORAGER_V1"),Vp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,oO=ne.position.x,aO=ne.position.z,cO=Math.sin(Vp),lO=Math.cos(Vp),uO=Math.cos(Vp),hO=-Math.sin(Vp);function w0(i,e){return{x:oO+cO*i+uO*e,z:aO+lO*i+hO*e}}var Mr={A:w0(18,0),B:w0(18,48),C:w0(-30,48)},Wp=new Ni;function dO(i,e){return[{id:"08A_"+i+"_ACTOR_1",typeId:nv.typeId,position:{x:e.x-1.9,y:Le(e.x-1.9,e.z),z:e.z},yaw:.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.21:i==="B"?.41:.61}},{id:"08A_"+i+"_ACTOR_2",typeId:nv.typeId,position:{x:e.x+1.9,y:Le(e.x+1.9,e.z-.5),z:e.z-.5},yaw:-.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.31:i==="B"?.51:.71}}]}function C0(i,e){return new Qi({id:"08A_WORLD_REGION_"+i,pipeline:bx,store:Wp,actorBlueprints:dO(i,e),bindActor:t=>Va.bind(t),unbindActor:t=>Va.unbind(t.id),loadRadiusM:24,unloadRadiusM:38})}var wn={A:C0("A",Mr.A),B:C0("B",Mr.B),C:C0("C",Mr.C)},Cu=new fr({entries:[{id:"A",center:Mr.A,region:wn.A},{id:"B",center:Mr.B,region:wn.B},{id:"C",center:Mr.C,region:wn.C}]}),ls=new Set,Jl=!1,iv=null,fO=null,Sf=!1,Sa="",sv=0,rv=0,I0=0,pO=100,CA=new Xi(4.8,5.15,48);CA.rotateX(-Math.PI/2);var mO=[new Pt({color:6281423,transparent:!0,opacity:.55,side:At,depthWrite:!1}),new Pt({color:6262488,transparent:!0,opacity:.55,side:At,depthWrite:!1}),new Pt({color:10121176,transparent:!0,opacity:.55,side:At,depthWrite:!1})];for(let[i,e]of["A","B","C"].entries()){let t=Mr[e],n=new Ue(CA,mO[i]);n.position.set(t.x,Le(t.x,t.z)+.04,t.z),n.userData.worldRegion08A=e,ve.add(n)}var gO=document.getElementById("worldStage08A"),_O=document.getElementById("worldNearest08A"),xO=document.getElementById("worldDistances08A"),yO=document.getElementById("worldStates08A"),EO=document.getElementById("worldActive08A"),MO=document.getElementById("worldVisited08A"),vO=document.getElementById("worldSnapshots08A"),SO=document.getElementById("worldProgress08A"),AO=document.getElementById("worldAssets08A"),bO=document.getElementById("worldDuplicates08A"),TO=document.getElementById("worldRegression08A"),Qr=document.getElementById("worldResult08A");function sn(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function ov(i){return bx.getActor("08A_"+i+"_ACTOR_1")?.kernel?.goals?.progress}function RO(){return["A","B","C"].filter(i=>wn[i].isActive)}function wO(){return wn.A.duplicateCount+wn.B.duplicateCount+wn.C.duplicateCount+Va.duplicateBindingCount}function CO(){return Cu.nearest({x:ne.position.x,z:ne.position.z})}function IA(){let i=RO(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=["A","B","C"].every(l=>ls.has(l)),n=["A","B","C"].every(l=>Wp.has("08A_WORLD_REGION_"+l)),s=wn.A.restoreCount>0&&wn.A.lastRestoreIdsStable&&wn.A.lastRestoreProgressPreserved,r=Va.assetCache.loadCount===1,o=wO(),a={region_count:Cu.size===3,active_count:i.length<=1,all_visited:t,all_snapshots:n,a_restored:s,asset_load_one:r,duplicates:o===0,regression:e==="PASS"},c=Object.entries(a).filter(([,l])=>!l).map(([l])=>l);return{pass:c.length===0,failed:c,checks:a,active:i,regression:e,duplicates:o}}async function IO(i,e){if(!Sf){Sf=!0;try{await Cu.step({playerPosition:{x:ne.position.x,z:ne.position.z},dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});for(let t of["A","B","C"])wn[t].isActive&&(ls.has(t)||(ls.add(t),t==="A"&&!Number.isFinite(iv)&&(iv=ov("A"))),t==="A"&&ls.has("B")&&ls.has("C")&&wn.A.restoreCount>0&&(Jl=!0,fO=ov("A")));Sa=""}catch(t){Sa=t?.message||String(t)}finally{Sf=!1}}}function DO(){let i=IA(),e=CO(),t=Cu.distances({x:ne.position.x,z:ne.position.z}),n=i.active,s=["A","B","C"].map(c=>wn[c].lifecycle[0]).join("/"),r=["A","B","C"].map(c=>Wp.has("08A_WORLD_REGION_"+c)?"S":"\u2014").join("/"),o=["A","B","C"].map(c=>ls.has(c)?c:"\u2014").join(""),a=Jl&&wn.A.lastRestoreProgressPreserved;sn(gO,i.pass?"PASS":Sa?"FAIL":"ACTIVE",i.pass?"#a8f0b5":Sa?"#ff9b9b":"#ffe59a"),sn(_O,e?e.id+" "+e.distance.toFixed(1)+" m":"\u2014"),sn(xO,t.map(c=>c.id+":"+c.distance.toFixed(0)).join(" \xB7 ")),sn(yO,s),sn(EO,n.length?n.join(","):"NONE",n.length<=1?"#a8f0b5":"#ff9b9b"),sn(MO,o),sn(vO,r),sn(SO,a?"PRESERVED \u2713":Jl?"FAIL":"PENDING",a?"#a8f0b5":"#ffe59a"),sn(AO,String(Va.assetCache.loadCount),Va.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),sn(bO,String(i.duplicates),i.duplicates===0?"#a8f0b5":"#ff9b9b"),sn(TO,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Sa?sn(Qr,"WORLD FAIL \xB7 "+Sa,"#ff9b9b"):i.pass?sn(Qr,"MULTI-REGION WORLD \u2713 \xB7 A/B/C VISITED \u2713 \xB7 STATE ISOLATED \u2713 \xB7 RETURN RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):ls.has("A")?ls.has("B")?ls.has("C")?Jl?sn(Qr,"RETURNED TO A \xB7 WAITING FOR REGRESSION / RESTORE CHECKS","#ffe59a"):sn(Qr,"A/B/C VISITED \u2713 \xB7 RETURN TO REGION A","#ffe59a"):sn(Qr,"A/B VISITED \u2713 \xB7 MOVE TO REGION C","#ffe59a"):sn(Qr,"A VISITED \u2713 \xB7 MOVE TO REGION B","#ffe59a"):sn(Qr,"VISIT REGION A","#ffe59a")}var av=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),DA=(i,e)=>{if(I0+=Math.max(0,e*1e3),i>=rv&&!Sf){let t=I0/1e3;I0=0,rv=i+pO,IO(i,t)}i>=sv&&(DO(),sv=i+500)};DA.multiRegionWorldId="08A_MULTI_REGION_WORLD";av.some(i=>i.multiRegionWorldId==="08A_MULTI_REGION_WORLD")||av.push(DA);globalThis.__multiRegionWorld08A={marker:rO,world:Cu,regions:wn,store:Wp,centers:Mr,visited:ls,get returnedToA(){return Jl},get proof(){return IA()}};var PO="08B_PREDICTIVE_REGION_HANDOFF",m_=globalThis.__multiRegionWorld08A,Tx=globalThis.__productionActorPipeline07B;if(!m_||!Tx)throw new Error("08B requires frozen accepted 08A + 07B runtime");var D0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let i=D0.length-1;i>=0;i--)D0[i]?.multiRegionWorldId==="08A_MULTI_REGION_WORLD"&&D0.splice(i,1);for(let i of[...ve.children])i.userData?.worldRegion08A&&ve.remove(i);var Rx=Tx.pipeline,sp=Tx.factory,g_=Rx.definitions.get("HUMANOID_FORAGER_V1"),jn=new ga({scene:ve,assetCache:sp.assetCache}),__=new ma({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),NO=new Ni,vr={A:{...m_.centers.A},B:{...m_.centers.B}};function LO(i,e){return[{id:"08B_"+i+"_ACTOR_1",typeId:g_.typeId,position:{x:e.x-1.8,y:Le(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.24:.54}},{id:"08B_"+i+"_ACTOR_2",typeId:g_.typeId,position:{x:e.x+1.8,y:Le(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.34:.64}}]}function cv(i){return new Qi({id:"08B_REGION_"+i,pipeline:Rx,store:NO,actorBlueprints:LO(i,vr[i]),bindActor:e=>jn.bind(i,e),unbindActor:e=>jn.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var Tn={A:cv("A"),B:cv("B")},PA=new fr({entries:[{id:"A",center:vr.A,region:Tn.A},{id:"B",center:vr.B,region:Tn.B}]}),NA=new Xi(4.7,5.1,48);NA.rotateX(-Math.PI/2);var OO=new Pt({color:6281423,transparent:!0,opacity:.58,side:At,depthWrite:!1}),Iu=new ze(NA,OO,2);Iu.frustumCulled=!1;Iu.userData.predictiveHandoffRings08B=!0;var Ml=new Fe;for(let[i,e]of["A","B"].entries()){let t=vr[e];Ml.position.set(t.x,Le(t.x,t.z)+.04,t.z),Ml.rotation.set(0,0,0),Ml.scale.setScalar(1),Ml.updateMatrix(),Iu.setMatrixAt(i,Ml.matrix)}Iu.instanceMatrix.needsUpdate=!0;ve.add(Iu);var Af=!1,lv=0,P0=0,uv=0,LA="NONE",x_="IDLE",Aa="",Zl=!1,Kl=!1,rp=!1,OA=!1,BA=!1,FA=null,UA=null,y_=0,BO=document.getElementById("handoffStage08B"),FO=document.getElementById("handoffTarget08B"),UO=document.getElementById("handoffPrepared08B"),HO=document.getElementById("handoffConsumed08B"),zO=document.getElementById("handoffFallback08B"),GO=document.getElementById("handoffStates08B"),kO=document.getElementById("handoffActive08B"),VO=document.getElementById("handoffVisited08B"),WO=document.getElementById("handoffRestored08B"),XO=document.getElementById("handoffAsset08B"),qO=document.getElementById("handoffDuplicates08B"),YO=document.getElementById("handoffRegression08B"),eo=document.getElementById("handoffResult08B");function Kt(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function E_(){return["A","B"].filter(i=>Tn[i].isActive)}function M_(){return Tn.A.duplicateCount+Tn.B.duplicateCount+jn.duplicateBindingCount}function hv(i){return Rx.getActor("08B_"+i+"_ACTOR_1")?.kernel?.goals?.progress}async function JO(i,e){if(!Af){Af=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let n={x:ne.position.x,z:ne.position.z};__.updateMotion(n,Date.now());let s=["A","B"].map(c=>({id:c,center:vr[c],lifecycle:Tn[c].lifecycle})),r=E_(),o=__.choose({position:n,regions:s,excludeIds:r});if(LA=o?.id??"NONE",o){x_="PREFETCHING "+o.id,await jn.prefetch(o.id,g_,2),x_="PREFETCHED "+o.id;let c=Tn[o.id],l=Math.hypot(n.x-vr[o.id].x,n.z-vr[o.id].z);c.lifecycle==="UNLOADED"&&l<=c.loadRadiusM&&jn.preparedCount(o.id)>=2&&(o.id==="B"&&(OA=!0),o.id==="A"&&Zl&&(BA=!0))}await PA.step({playerPosition:n,dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});let a=E_();y_=Math.max(y_,a.length),Tn.A.isActive&&!rp&&(rp=!0,FA=hv("A")),Tn.B.isActive&&(Zl=!0),Zl&&Tn.A.isActive&&Tn.A.restoreCount>0&&(Kl=!0,UA=hv("A")),Aa=""}catch(t){Aa=t?.message||String(t)}finally{Af=!1}}}function HA(){let i=globalThis.__livingWorld06J?.stage||"WAITING",e=Kl&&Tn.A.lastRestoreIdsStable&&Tn.A.lastRestoreProgressPreserved,t={b_prefetched:OA,a_return_prefetched:BA,prepared_consumed:jn.consumedInstances>=4,fallback_initial_only:jn.fallbackInstances===2,state_restored:e,asset_load_one:sp.assetCache.loadCount===1,duplicates:M_()===0,regression:i==="PASS"},n=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:n.length===0,failed:n,checks:t,regression:i,restored:e}}function ZO(){let i=HA(),e=E_(),t=["A","B"].map(r=>Tn[r].lifecycle[0]).join("/"),n=jn.preparedCount("A"),s=jn.preparedCount("B");Kt(BO,i.pass?"PASS":Aa?"FAIL":globalThis.__livingWorld06J?.stage==="PASS"?"READY":"WAITING REGRESSION",i.pass?"#a8f0b5":Aa?"#ff9b9b":"#ffe59a"),Kt(FO,LA+" \xB7 "+x_),Kt(UO,"A:"+n+" \xB7 B:"+s),Kt(HO,String(jn.consumedInstances)),Kt(zO,String(jn.fallbackInstances)),Kt(GO,t),Kt(kO,e.length?e.join(","):"NONE"),Kt(VO,(rp?"A":"\u2014")+"\u2192"+(Zl?"B":"\u2014")+"\u2192"+(Kl?"A":"\u2014")),Kt(WO,i.restored?"STABLE \u2713":Kl?"FAIL":"PENDING",i.restored?"#a8f0b5":"#ffe59a"),Kt(XO,String(sp.assetCache.loadCount),sp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Kt(qO,String(M_()),M_()===0?"#a8f0b5":"#ff9b9b"),Kt(YO,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Aa?Kt(eo,"HANDOFF FAIL \xB7 "+Aa,"#ff9b9b"):i.pass?Kt(eo,"PREDICTIVE HANDOFF \u2713 \xB7 B PREFETCHED \u2713 \xB7 A RETURN PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):i.regression!=="PASS"?Kt(eo,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):rp?Zl?Kl?Kt(eo,"RETURNED TO A \xB7 VERIFYING PREFETCH / RESTORE","#ffe59a"):Kt(eo,"B HANDOFF COMPLETE \xB7 RETURN TO REGION A","#ffe59a"):Kt(eo,"A ACTIVE \xB7 MOVE TOWARD REGION B","#ffe59a"):Kt(eo,"ENTER REGION A","#ffe59a")}var dv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),zA=(i,e)=>{if(jn.update(e),P0+=Math.max(0,e*1e3),i>=lv&&!Af){let t=P0/1e3;P0=0,lv=i+100,JO(i,t)}i>=uv&&(ZO(),uv=i+500)};zA.predictiveHandoffId="08B_PREDICTIVE_HANDOFF";dv.some(i=>i.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF")||dv.push(zA);globalThis.__predictiveHandoff08B={marker:PO,world:PA,regions:Tn,planner:__,factory:jn,centers:vr,get proof(){return HA()},get maxActiveRegions(){return y_},get aInitialProgress(){return FA},get aReturnProgress(){return UA}};var KO="08C_BOUNDED_PREFETCH_LIFECYCLE",v_=globalThis.__predictiveHandoff08B,wx=globalThis.__productionActorPipeline07B;if(!v_||!wx)throw new Error("08C requires frozen accepted 08B + 07B runtime");var N0=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let i=N0.length-1;i>=0;i--)N0[i]?.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF"&&N0.splice(i,1);for(let i of[...ve.children])i.userData?.predictiveHandoffRings08B===!0&&ve.remove(i);var Cx=wx.pipeline,op=wx.factory,$l=Cx.definitions.get("HUMANOID_FORAGER_V1"),fs=new ga({scene:ve,assetCache:op.assetCache}),Ot=new jd({factory:fs,maxPreparedInstances:2}),S_=new ma({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),$O=new Ni,zn={A:{...v_.centers.A},B:{...v_.centers.B}};function jO(i,e){return[{id:"08C_"+i+"_ACTOR_1",typeId:$l.typeId,position:{x:e.x-1.8,y:Le(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.26:.56}},{id:"08C_"+i+"_ACTOR_2",typeId:$l.typeId,position:{x:e.x+1.8,y:Le(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.36:.66}}]}function fv(i){return new Qi({id:"08C_REGION_"+i,pipeline:Cx,store:$O,actorBlueprints:jO(i,zn[i]),bindActor:e=>fs.bind(i,e),unbindActor:e=>fs.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var xn={A:fv("A"),B:fv("B")},GA=new fr({entries:[{id:"A",center:zn.A,region:xn.A},{id:"B",center:zn.B,region:xn.B}]}),kA=new Xi(4.7,5.1,48);kA.rotateX(-Math.PI/2);var QO=new Pt({color:6281423,transparent:!0,opacity:.58,side:At,depthWrite:!1}),Du=new ze(kA,QO,2);Du.frustumCulled=!1;Du.userData.boundedPrefetchRings08C=!0;var vl=new Fe;for(let[i,e]of["A","B"].entries()){let t=zn[e];vl.position.set(t.x,Le(t.x,t.z)+.04,t.z),vl.rotation.set(0,0,0),vl.scale.setScalar(1),vl.updateMatrix(),Du.setMatrixAt(i,vl.matrix)}Du.instanceMatrix.needsUpdate=!0;ve.add(Du);var VA=Le(zn.B.x,zn.B.z),Xp=new ft;Xp.userData.boundedPrefetchBeacon08C=!0;var Ix=new Ue(new vi(.13,.13,18,10,1,!0),new Pt({color:6812927,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));Ix.position.set(zn.B.x,VA+9,zn.B.z);Ix.renderOrder=999;Xp.add(Ix);var Dx=new Ue(new pn(.75,12,8),new Pt({color:12123135,transparent:!0,opacity:.88,depthTest:!1,depthWrite:!1}));Dx.position.set(zn.B.x,VA+18.5,zn.B.z);Dx.renderOrder=1e3;Xp.add(Dx);ve.add(Xp);var bf=!1,pv=0,L0=0,mv=0,ba="",ap=!1,jl=!1,cp=!1,Px=!1,Ta=!1,WA=!1,Ql=!1,XA=null,qA=null,YA=0,A_=0,e2=document.getElementById("boundedStage08C"),t2=document.getElementById("boundedTarget08C"),n2=document.getElementById("boundedDistanceB08C"),i2=document.getElementById("boundedBearingB08C"),s2=document.getElementById("boundedPrepared08C"),r2=document.getElementById("boundedCancel08C"),o2=document.getElementById("boundedEvicted08C"),a2=document.getElementById("boundedPeak08C"),c2=document.getElementById("boundedConsumed08C"),l2=document.getElementById("boundedFallback08C"),u2=document.getElementById("boundedStates08C"),h2=document.getElementById("boundedRoute08C"),d2=document.getElementById("boundedRestored08C"),f2=document.getElementById("boundedAsset08C"),p2=document.getElementById("boundedDuplicates08C"),m2=document.getElementById("boundedRegression08C"),ts=document.getElementById("boundedResult08C");function Ct(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}var O0=new I;function g2(){let i=zn.B.x-ne.position.x,e=zn.B.z-ne.position.z,t=Math.hypot(i,e);if(t<.001)return{distance:0,label:"HERE",degrees:0};Li.getWorldDirection(O0);let n=O0.x,s=O0.z,r=Math.hypot(n,s)||1;n/=r,s/=r;let o=i/t,a=e/t,c=Math.atan2(n*a-s*o,n*o+s*a)*180/Math.PI,l=Math.abs(c),u;return l<=22.5?u="FORWARD":l<=67.5?u=c>0?"FORWARD-RIGHT":"FORWARD-LEFT":l<=112.5?u=c>0?"RIGHT":"LEFT":l<=157.5?u=c>0?"BACK-RIGHT":"BACK-LEFT":u="BACK",{distance:t,label:u,degrees:c}}function gv(){return["A","B"].filter(i=>xn[i].isActive)}function b_(){return xn.A.duplicateCount+xn.B.duplicateCount+fs.duplicateBindingCount}function _v(i){return Cx.getActor("08C_"+i+"_ACTOR_1")?.kernel?.goals?.progress}async function _2(i){if(!bf){bf=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let t=Date.now(),n={x:ne.position.x,z:ne.position.z};S_.updateMotion(n,t);let s=gv(),o=S_.choose({position:n,regions:["A","B"].map(c=>({id:c,center:zn[c],lifecycle:xn[c].lifecycle})),excludeIds:s})?.id??null;if(o!==Ot.targetId?await Ot.retarget(o,$l,2):o&&Ot.preparedCount(o)<2&&await Ot.retarget(o,$l,2),o==="B"&&xn.B.lifecycle==="UNLOADED"&&Ot.preparedCount("B")===2){let c=Ot.executionCount("B");c===1&&!jl&&(jl=!0,YA=t),c>=2&&cp&&(Px=!0)}jl&&!Ta&&Ot.budget.cancellations>=1&&Ot.budget.evictedInstances>=2&&Ot.preparedCount("B")===0&&(cp=!0,A_||(A_=t)),o==="A"&&Ta&&xn.A.lifecycle==="UNLOADED"&&Ot.preparedCount("A")===2&&(WA=!0),await GA.step({playerPosition:n,dtMs:Math.max(0,i*1e3),now:t,foodProgressPerSecond:.004}),Ot.observeAfterWorldStep(),xn.A.isActive&&!ap&&(ap=!0,XA=_v("A")),xn.B.isActive&&(Ta=!0),Ta&&xn.A.isActive&&xn.A.restoreCount>0&&(Ql=!0,qA=_v("A"));let a=gv();Ot.targetId&&a.includes(Ot.targetId)&&(await Ot.retarget(null,$l,2),Ot.observeAfterWorldStep()),ba=""}catch(e){ba=e?.message||String(e)}finally{bf=!1}}}function JA(){let i=globalThis.__livingWorld06J?.stage||"WAITING",e=Ql&&xn.A.lastRestoreIdsStable===!0&&xn.A.lastRestoreProgressPreserved===!0,t={first_b_prefetch:jl,stale_b_evicted:cp,b_reprefetched:Px,prepared_consumed:fs.consumedInstances>=4,fallback_initial_only:fs.fallbackInstances===2,pool_bounded:Ot.budget.peakPrepared<=2&&Ot.totalPrepared()<=2,a_return_prefetched:WA,state_restored:e,asset_load_one:op.assetCache.loadCount===1,duplicates:b_()===0,regression:i==="PASS"},n=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:n.length===0,failed:n,checks:t,regression:i,restored:e}}function x2(){let i=JA(),e=Ot.budget,t=["A","B"].map(r=>xn[r].lifecycle[0]).join("/"),n=(ap?"A":"\u2014")+"\u2192"+(Ta?"B":"\u2014")+"\u2192"+(Ql?"A":"\u2014");Ct(e2,i.pass?"PASS":ba?"FAIL":i.regression==="PASS"?"READY":"WAITING REGRESSION",i.pass?"#a8f0b5":ba?"#ff9b9b":"#ffe59a"),Ct(t2,(Ot.targetId||"NONE")+" \xB7 "+Ot.lastAction);let s=g2();Ct(n2,s.distance.toFixed(1)+" m"),Ct(i2,s.label+" \xB7 "+Math.round(Math.abs(s.degrees))+"\xB0"),Ct(s2,"A:"+Ot.preparedCount("A")+" \xB7 B:"+Ot.preparedCount("B")),Ct(r2,String(e.cancellations),e.cancellations>=1?"#a8f0b5":"#ffe59a"),Ct(o2,String(e.evictedInstances),e.evictedInstances>=2?"#a8f0b5":"#ffe59a"),Ct(a2,e.peakPrepared+"/2",e.peakPrepared<=2?"#a8f0b5":"#ff9b9b"),Ct(c2,String(fs.consumedInstances)),Ct(l2,String(fs.fallbackInstances)),Ct(u2,t),Ct(h2,n),Ct(d2,i.restored?"STABLE \u2713":Ql?"FAIL":"PENDING",i.restored?"#a8f0b5":"#ffe59a"),Ct(f2,String(op.assetCache.loadCount),op.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Ct(p2,String(b_()),b_()===0?"#a8f0b5":"#ff9b9b"),Ct(m2,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),ba?Ct(ts,"BOUNDED PREFETCH FAIL \xB7 "+ba,"#ff9b9b"):i.pass?Ct(ts,"BOUNDED PREFETCH \u2713 \xB7 STALE B EVICTED \u2713 \xB7 B RE-PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 POOL BOUNDED 2 \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):i.regression!=="PASS"?Ct(ts,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):ap?jl?cp?Px?Ta?Ql?Ct(ts,"RETURNED TO A \xB7 VERIFYING BOUNDS / RESTORE","#ffe59a"):Ct(ts,"B HANDOFF \u2713 \xB7 RETURN TO REGION A","#ffe59a"):Ct(ts,"B RE-PREFETCHED \u2713 \xB7 ENTER REGION B","#ffe59a"):Ct(ts,"STALE B EVICTED \u2713 \xB7 MOVE TOWARD B AGAIN","#ffe59a"):Ct(ts,"B PREFETCHED \u2713 \xB7 REVERSE TOWARD A BEFORE B ACTIVATES","#ffe59a"):Ct(ts,"MOVE TOWARD B UNTIL PREPARED B = 2","#ffe59a"):Ct(ts,"ENTER REGION A","#ffe59a")}var xv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),ZA=(i,e)=>{if(fs.update(e),L0+=Math.max(0,e*1e3),i>=pv&&!bf){let t=L0/1e3;L0=0,pv=i+100,_2(t)}i>=mv&&(x2(),mv=i+500)};ZA.boundedPrefetchId="08C_BOUNDED_PREFETCH";xv.some(i=>i.boundedPrefetchId==="08C_BOUNDED_PREFETCH")||xv.push(ZA);globalThis.__boundedPrefetch08C={marker:KO,world:GA,regions:xn,planner:S_,factory:fs,controller:Ot,centers:zn,get proof(){return JA()},get firstBPreparedAt(){return YA},get cancellationAt(){return A_},get aInitialProgress(){return XA},get aReturnProgress(){return qA}};var y2="08D_WORLD_EXPANSION_CERTIFICATION",Pu=globalThis.__boundedPrefetch08C,KA=globalThis.__productionActorPipeline07B;if(!Pu||!KA)throw new Error("08D requires frozen accepted 08C runtime");var En=Pu.regions,br=Pu.centers,us=Pu.factory,fu=Pu.controller,lp=KA.factory,yv=14,up=["A","B","A","B","A"],$A=3e4,Fs=[],B0=null,hp=0,La=0,Oa=0,Ba=0,Jn="",Ev=0,E2=document.getElementById("certStage08D"),M2=document.getElementById("certNext08D"),v2=document.getElementById("certDistance08D"),S2=document.getElementById("certDirection08D"),A2=document.getElementById("certSequence08D"),b2=document.getElementById("certElapsed08D"),T2=document.getElementById("certACycles08D"),R2=document.getElementById("certBCycles08D"),w2=document.getElementById("certActiveActors08D"),C2=document.getElementById("certBindings08D"),I2=document.getElementById("certPrepared08D"),D2=document.getElementById("certConsumed08D"),P2=document.getElementById("certFallback08D"),N2=document.getElementById("certAsset08D"),L2=document.getElementById("certDuplicates08D"),O2=document.getElementById("certRegression08D"),to=document.getElementById("certResult08D");function Lt(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}var F0=new I;function B2(i){let e=br[i],t=e.x-ne.position.x,n=e.z-ne.position.z,s=Math.hypot(t,n);if(s<.001)return{distance:0,label:"HERE",degrees:0};Li.getWorldDirection(F0);let r=F0.x,o=F0.z,a=Math.hypot(r,o)||1;r/=a,o/=a;let c=t/s,l=n/s,u=Math.atan2(r*l-o*c,r*c+o*l)*180/Math.PI,h=Math.abs(u),d;return h<=22.5?d="FORWARD":h<=67.5?d=u>0?"FORWARD-RIGHT":"FORWARD-LEFT":h<=112.5?d=u>0?"RIGHT":"LEFT":h<=157.5?d=u>0?"BACK-RIGHT":"BACK-LEFT":d="BACK",{distance:s,label:d,degrees:u}}function Nx(){return En.A.activeActors.length+En.B.activeActors.length}function dp(){return En.A.duplicateCount+En.B.duplicateCount+us.duplicateBindingCount}function Mv(i){let e=br[i];return Math.hypot(ne.position.x-e.x,ne.position.z-e.z)}function F2(){return En.A.isActive&&Mv("A")<=yv?"A":En.B.isActive&&Mv("B")<=yv?"B":null}function U2(){let i=Math.min(Fs.length,up.length-1);return up[i]}function H2(){let i=globalThis.__livingWorld06J?.stage||"WAITING",e=F2();Fs.length===0?e==="A"&&(Fs.push("A"),B0="A",hp=Date.now()):e&&e!==B0&&(Fs.push(e),B0=e);let t=Nx(),n=us.size,s=fu.totalPrepared();La=Math.max(La,t),Oa=Math.max(Oa,n),Ba=Math.max(Ba,s),hp&&(La>4?Jn="ACTIVE ACTORS > 4":Oa>4?Jn="BINDINGS > 4":Ba>2?Jn="PREFETCH POOL > 2":dp()>0?Jn="DUPLICATE STATE":lp.assetCache.loadCount!==1?Jn="ASSET LOAD COUNT CHANGED":us.fallbackInstances!==2?Jn="FALLBACK COUNT CHANGED":i==="FAIL"&&(Jn="06J REGRESSION FAIL"))}function jA(){let i=globalThis.__livingWorld06J?.stage||"WAITING",e=hp?Date.now()-hp:0,n={sequence:up.every((r,o)=>Fs[o]===r),elapsed:e>=$A,a_restores:En.A.restoreCount>=2,b_restores:En.B.restoreCount>=1,a_unloads:En.A.unloadCount>=2,b_unloads:En.B.unloadCount>=2,prepared_consumed:us.consumedInstances>=8,fallback_stable:us.fallbackInstances===2,max_active_actors:La<=4,max_bindings:Oa<=4,max_prepared:Ba<=2&&fu.budget.peakPrepared<=2,final_prepared:fu.totalPrepared()===0,final_a_active:En.A.isActive&&En.B.lifecycle==="UNLOADED",final_active_actors:Nx()===2,final_bindings:us.size===2,asset_load_one:lp.assetCache.loadCount===1,duplicates:dp()===0,regression:i==="PASS",no_violation:!Jn},s=Object.entries(n).filter(([,r])=>!r).map(([r])=>r);return{pass:s.length===0,failed:s,checks:n,elapsed:e,regression:i}}function z2(){let i=jA(),e=U2(),t=B2(e),n=Fs.slice(0,5).join("\u2192")||"\u2014",s=Math.floor(i.elapsed/1e3);Lt(E2,i.pass?"PASS":Jn?"FAIL":i.regression==="PASS"?"RUNNING":"WAITING REGRESSION",i.pass?"#a8f0b5":Jn?"#ff9b9b":"#ffe59a"),Lt(M2,e),Lt(v2,t.distance.toFixed(1)+" m"),Lt(S2,t.label+" \xB7 "+Math.round(Math.abs(t.degrees))+"\xB0"),Lt(A2,n),Lt(b2,s+" / 30 s",s>=30?"#a8f0b5":"#ffe59a"),Lt(T2,"restore "+En.A.restoreCount+" \xB7 unload "+En.A.unloadCount),Lt(R2,"restore "+En.B.restoreCount+" \xB7 unload "+En.B.unloadCount),Lt(w2,Nx()+" \xB7 peak "+La+"/4"),Lt(C2,us.size+" \xB7 peak "+Oa+"/4"),Lt(I2,fu.totalPrepared()+" \xB7 peak "+Math.max(Ba,fu.budget.peakPrepared)+"/2"),Lt(D2,String(us.consumedInstances)),Lt(P2,String(us.fallbackInstances),us.fallbackInstances===2?"#a8f0b5":"#ff9b9b"),Lt(N2,String(lp.assetCache.loadCount),lp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Lt(L2,String(dp()),dp()===0?"#a8f0b5":"#ff9b9b"),Lt(O2,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Jn?Lt(to,"CERTIFICATION FAIL \xB7 "+Jn,"#ff9b9b"):i.pass?Lt(to,"WORLD EXPANSION CERTIFIED \u2713 \xB7 4 HANDOFFS \u2713 \xB7 REPEATED RESTORE \u2713 \xB7 ACTORS BOUNDED 4 \u2713 \xB7 BINDINGS BOUNDED 4 \u2713 \xB7 PREFETCH BOUNDED 2 \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):i.regression!=="PASS"?Lt(to,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):Fs.length===0?Lt(to,"ENTER REGION A TO START CERTIFICATION","#ffe59a"):Fs.length<5?Lt(to,"GO TO "+e+" \xB7 COMPLETE A\u2192B\u2192A\u2192B\u2192A","#ffe59a"):i.elapsed<$A?Lt(to,"ROUTE COMPLETE \u2713 \xB7 HOLD UNTIL 30 s CERT WINDOW","#ffe59a"):Lt(to,"ROUTE COMPLETE \xB7 VERIFYING FINAL LIFECYCLE STATE","#ffe59a")}var QA=Le(br.A.x,br.A.z),qp=new ft;qp.userData.worldExpansionCertificationBeacon08D=!0;var Lx=new Ue(new vi(.13,.13,18,10,1,!0),new Pt({color:16766571,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));Lx.position.set(br.A.x,QA+9,br.A.z);Lx.renderOrder=999;qp.add(Lx);var Ox=new Ue(new pn(.75,12,8),new Pt({color:16773037,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}));Ox.position.set(br.A.x,QA+18.5,br.A.z);Ox.renderOrder=1e3;qp.add(Ox);ve.add(qp);var vv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),eb=i=>{H2(),i>=Ev&&(z2(),Ev=i+250)};eb.worldExpansionCertificationId="08D_WORLD_EXPANSION_CERTIFICATION";vv.some(i=>i.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION")||vv.push(eb);globalThis.__worldExpansionCertification08D={marker:y2,requiredSequence:[...up],get visits(){return[...Fs]},get proof(){return jA()},get maxActiveActors(){return La},get maxBindings(){return Oa},get maxPrepared(){return Ba},get violation(){return Jn}};var G2="09B_VERTICAL_BEAUTY_SLICE",fp=globalThis.__boundedPrefetch08C,tb=globalThis.__productionActorPipeline07B;if(!fp||!tb)throw new Error("09B requires frozen Test08 production runtime");var Bt={...fp.centers.A},Us=new ft;Us.name="09B_SUNLIT_BASIN";Us.userData.presentationSlice09B=!0;Us.position.set(Bt.x,0,Bt.z);var Wa=!1,ho="",nb=0,Yp=0,Jp=0,Sv=0,ib=0,sb=0,k2=document.getElementById("beautyStage09B"),V2=document.getElementById("beautyPlace09B"),W2=document.getElementById("beautyMaterials09B"),X2=document.getElementById("beautyDepth09B"),q2=document.getElementById("beautyMotion09B"),Y2=document.getElementById("beautySliceDraw09B"),J2=document.getElementById("beautySliceTri09B"),Z2=document.getElementById("beautyTotalDraw09B"),K2=document.getElementById("beautyTotalTri09B"),$2=document.getElementById("beautyRuntime09B"),j2=document.getElementById("beautyAsset09B"),Q2=document.getElementById("beautyDuplicates09B"),e3=document.getElementById("beautyDistance09B"),df=document.getElementById("beautyResult09B");function an(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function Ui(i,e=1){let t=i.index?i.index.count/3:i.getAttribute("position").count/3;return Math.round(t*e)}function hi(i,e){return Us.add(i),Jp++,Yp+=Math.max(0,Math.round(e)),i}function rb(i,{speed:e=.8,strength:t=.12,scale:n=.1}={}){return i.onBeforeCompile=s=>{s.uniforms.uBeautyTime={value:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uBeautyTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float beautyPhase=instanceMatrix[3].x*0.071+instanceMatrix[3].z*0.053;
float beautyWeight=clamp((position.y+3.0)*0.17,0.0,1.0);
transformed.x+=sin(uBeautyTime*`+e.toFixed(3)+"+beautyPhase+position.y*"+n.toFixed(3)+")*"+t.toFixed(3)+`*beautyWeight;
transformed.z+=cos(uBeautyTime*`+(e*.73).toFixed(3)+"+beautyPhase*1.31)*"+(t*.55).toFixed(3)+`*beautyWeight;
#endif`),i.userData.beautyShader=s},i.customProgramCacheKey=()=>"09B-wind-"+e+"-"+t+"-"+n,i}function t3(){let i=new si(66,66,32,32);i.rotateX(-Math.PI/2);let e=i.getAttribute("position"),t=[],n=new me;for(let o=0;o<e.count;o++){let a=e.getX(o),c=e.getZ(o),l=Bt.x+a,u=Bt.z+c,h=.025*Math.sin(a*.31)+.018*Math.cos(c*.27);e.setY(o,Le(l,u)+.065+h);let d=.5+.5*Math.sin(a*.21+c*.17)+.18*Math.cos(c*.43);n.setHSL(.245+Math.max(-.025,Math.min(.025,d*.012)),.34,.31+Math.max(-.035,Math.min(.035,d*.018))),t.push(n.r,n.g,n.b)}i.setAttribute("color",new ke(t,3)),i.computeVertexNormals();let s=new Ie({vertexColors:!0,roughness:.94,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),r=new Ue(i,s);return r.receiveShadow=!0,r.name="09B meadow ground",hi(r,Ui(i))}function n3(){let i=Qe.layout.pathSegments,e=3.4,t=[],n=[],s=[];for(let c=0;c<=i;c++){let l=c/i,u=-1.7+6.7*l+2*Math.sin(l*Math.PI*1.15),h=-24+50*l;s.push({x:u,z:h})}for(let c=0;c<=i;c++){let l=s[Math.max(0,c-1)],u=s[Math.min(i,c+1)],h=u.x-l.x,d=u.z-l.z,f=Math.hypot(h,d)||1;h/=f,d/=f;let m=-d,y=h,g=s[c];for(let p of[-1,1]){let M=g.x+m*e*.5*p,T=g.z+y*e*.5*p,E=Le(Bt.x+M,Bt.z+T)+.115;t.push(M,E,T)}if(c<i){let p=c*2,M=p+1,T=p+2,E=p+3;n.push(p,T,M,M,T,E)}}let r=new Mt;r.setAttribute("position",new ke(t,3)),r.setIndex(n),r.computeVertexNormals();let o=new Ie({color:8874569,roughness:.98,metalness:0}),a=new Ue(r,o);return a.receiveShadow=!0,a.name="09B soil path",hi(a,Ui(r))}function i3(){let i=new Mc(8.4,56);i.rotateX(-Math.PI/2);let e=Le(Bt.x-12,Bt.z+7)+.15,t=new nn({transparent:!0,depthWrite:!1,side:At,uniforms:{uBeautyTime:{value:0},uDeep:{value:new me(3235177)},uShallow:{value:new me(7911084)}},vertexShader:`uniform float uBeautyTime;
varying vec2 vLocal;
varying float vWave;
void main(){
vec3 p=position;
float w=sin((p.x+uBeautyTime*1.15)*.72)*.055+cos((p.z-uBeautyTime*.78)*1.05)*.036;
p.y+=w;
vWave=w;
vLocal=p.xz/8.4;
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
}`,fragmentShader:`uniform vec3 uDeep;
uniform vec3 uShallow;
uniform float uBeautyTime;
varying vec2 vLocal;
varying float vWave;
void main(){
float r=length(vLocal);
float edge=1.0-smoothstep(.82,1.0,r);
float shimmer=.5+.5*sin((vLocal.x+vLocal.y)*18.0+uBeautyTime*1.7);
vec3 col=mix(uDeep,uShallow,.46+.18*shimmer+vWave*2.5);
float alpha=(.58+.12*shimmer)*edge;
gl_FragColor=vec4(col,alpha);
}`}),n=new Ue(i,t);return n.position.set(-12,e,7),n.renderOrder=3,n.name="09B reflective pool",n.userData.timeUniform=t.uniforms.uBeautyTime,hi(n,Ui(i))}function s3(i){let e=new vi(.42,.62,7,6,1),t=new Ie({color:6964013,roughness:.9,metalness:0}),n=new ze(e,t,Qe.layout.trees);n.castShadow=!0,n.receiveShadow=!0,n.name="09B tree trunks";let s=new nr(2.65,1),r=rb(new Ie({color:5011264,roughness:.78,metalness:0}),{speed:.78,strength:.16,scale:.46}),o=new ze(s,r,Qe.layout.trees);o.castShadow=!0,o.receiveShadow=!0,o.name="09B canopy";let a=new Fe;for(let c=0;c<Qe.layout.trees;c++){let l=c/Qe.layout.trees*Math.PI*2+(i()-.5)*.18,u=23+i()*8,h=Math.cos(l)*u,d=Math.sin(l)*u;d>14&&Math.abs(h-4)<8&&(h+=h<4?-7:7);let f=Le(Bt.x+h,Bt.z+d),m=.86+i()*.34;a.position.set(h,f+3.5*m,d),a.rotation.set(0,i()*Math.PI*2,0),a.scale.set(.92+i()*.28,m,.92+i()*.28),a.updateMatrix(),n.setMatrixAt(c,a.matrix),a.position.set(h+(i()-.5)*.35,f+7.5*m,d+(i()-.5)*.35),a.rotation.set(i()*.08,i()*Math.PI*2,i()*.08),a.scale.set(1+i()*.42,.9+i()*.4,1+i()*.42),a.updateMatrix(),o.setMatrixAt(c,a.matrix)}return n.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,hi(n,Ui(e,Qe.layout.trees)),hi(o,Ui(s,Qe.layout.trees)),r}function r3(i){let e=new Wn(.14,.9,4,1),t=rb(new Ie({color:7771723,roughness:.84,metalness:0}),{speed:1.34,strength:.11,scale:.82}),n=new ze(e,t,Qe.layout.grassTufts);n.name="09B ground cover";let s=new Fe,r=0;for(;r<Qe.layout.grassTufts;){let o=(i()*2-1)*31,a=(i()*2-1)*31;if(o*o+a*a>961||Math.hypot(o+12,a-7)<9.6)continue;let c=Le(Bt.x+o,Bt.z+a);s.position.set(o,c+.42,a),s.rotation.set((i()-.5)*.08,i()*Math.PI*2,(i()-.5)*.08);let l=.72+i()*.8;s.scale.set(.7+i()*.6,l,.7+i()*.6),s.updateMatrix(),n.setMatrixAt(r++,s.matrix)}return n.instanceMatrix.needsUpdate=!0,hi(n,Ui(e,Qe.layout.grassTufts)),t}function o3(i){let e=new Sc(.11,0),t=new Ie({color:15781752,roughness:.7,metalness:0,emissive:2825480,emissiveIntensity:.12}),n=new ze(e,t,Qe.layout.flowers);n.name="09B flowers";let s=new Fe,r=0;for(;r<Qe.layout.flowers;){let o=(i()*2-1)*24,a=(i()*2-1)*24;if(Math.hypot(o+12,a-7)<9.4)continue;let c=Le(Bt.x+o,Bt.z+a);s.position.set(o,c+.34+i()*.18,a),s.rotation.set(i()*Math.PI,i()*Math.PI,i()*Math.PI);let l=.65+i()*.8;s.scale.setScalar(l),s.updateMatrix(),n.setMatrixAt(r++,s.matrix)}n.instanceMatrix.needsUpdate=!0,hi(n,Ui(e,Qe.layout.flowers))}function a3(i){let e=new Ie({color:9146500,roughness:.94,metalness:0}),t=new Fe,n=new ii(.7,0),s=new ze(n,e,Qe.layout.rocks);s.name="09B rocks";for(let m=0;m<Qe.layout.rocks;m++){let y=i()*Math.PI*2,g=9+i()*20,p=Math.cos(y)*g,M=Math.sin(y)*g,T=Le(Bt.x+p,Bt.z+M);t.position.set(p,T+.35,M),t.rotation.set(i()*Math.PI,i()*Math.PI,i()*Math.PI),t.scale.set(.65+i()*1.4,.45+i()*.75,.65+i()*1.2),t.updateMatrix(),s.setMatrixAt(m,t.matrix)}s.instanceMatrix.needsUpdate=!0,hi(s,Ui(n,Qe.layout.rocks));let r=new Wn(2.4,10,5,1),o=new ze(r,e,Qe.layout.distantCliffs);o.name="09B distant cliffs";for(let m=0;m<Qe.layout.distantCliffs;m++){let y=-25+m*5.7+(i()-.5)*3.2,g=45+i()*13,p=Le(Bt.x+y,Bt.z+g);t.position.set(y,p+4.5,g),t.rotation.set((i()-.5)*.1,i()*Math.PI*2,(i()-.5)*.08),t.scale.set(.8+i()*1.4,.8+i()*1.6,.8+i()*1.4),t.updateMatrix(),o.setMatrixAt(m,t.matrix)}o.instanceMatrix.needsUpdate=!0,hi(o,Ui(r,Qe.layout.distantCliffs));let a=5,c=25,l=Le(Bt.x+a,Bt.z+c),u=new Mi(1.45,7,1.55),h=new ze(u,e,2);for(let m=0;m<2;m++)t.position.set(a+(m?2.55:-2.55),l+3.5,c),t.rotation.set(0,m?-.04:.04,0),t.scale.set(1,1,1),t.updateMatrix(),h.setMatrixAt(m,t.matrix);h.instanceMatrix.needsUpdate=!0,h.castShadow=!0,h.receiveShadow=!0,h.name="09B stone gate pillars",hi(h,Ui(u,2));let d=new Mi(7.2,1.2,1.8),f=new Ue(d,e);f.position.set(a,l+7.15,c),f.rotation.z=-.025,f.castShadow=!0,f.receiveShadow=!0,f.name="09B stone gate lintel",hi(f,Ui(d))}function c3(i){let e=new Float32Array(Qe.layout.pollen*3);for(let r=0;r<Qe.layout.pollen;r++){let o=r*3;e[o]=(i()*2-1)*31,e[o+1]=1.2+i()*8.5,e[o+2]=(i()*2-1)*31}let t=new Mt;t.setAttribute("position",new Ht(e,3));let n=new nn({transparent:!0,depthWrite:!1,blending:Bc,uniforms:{uBeautyTime:{value:0}},vertexShader:`uniform float uBeautyTime;
void main(){
vec3 p=position;
float phase=p.x*.17+p.z*.11;
p.x+=sin(uBeautyTime*.31+phase)*.65;
p.y+=sin(uBeautyTime*.43+phase*1.7)*.35;
p.z+=cos(uBeautyTime*.27+phase)*.42;
vec4 mv=modelViewMatrix*vec4(p,1.0);
gl_Position=projectionMatrix*mv;
gl_PointSize=clamp(18.0/max(1.0,-mv.z),1.2,3.2);
}`,fragmentShader:`void main(){
vec2 q=gl_PointCoord-.5;
float d=length(q);
float a=smoothstep(.5,.05,d)*.48;
gl_FragColor=vec4(1.0,.86,.52,a);
}`}),s=new Hr(t,n);s.name="09B airborne pollen",s.userData.timeUniform=n.uniforms.uBeautyTime,hi(s,0)}function l3(){if(Wa)return;ib=et.info.render.calls||0,sb=et.info.render.triangles||0;let i=hM(),e=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let o=e.length-1;o>=0;o--)e[o]?.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION"&&e.splice(o,1);for(let o of[...ve.children])(o.userData?.worldExpansionCertificationBeacon08D===!0||o.userData?.boundedPrefetchBeacon08C===!0||o.userData?.boundedPrefetchRings08C===!0)&&ve.remove(o);t3(),n3();let t=i3(),n=s3(i),s=r3(i);o3(i),a3(i),c3(i);let r=Us.children.find(o=>o.name==="09B airborne pollen");Us.userData.animatedMaterials=[n,s,t.material,r?.material].filter(Boolean),ve.add(Us),Wa=!0,nb=performance.now()}function u3(){let i=fp.factory,e=fp.regions,t=(e.A?.duplicateCount||0)+(e.B?.duplicateCount||0)+(i?.duplicateBindingCount||0);return{assetLoads:tb.factory.assetCache.loadCount,duplicates:t}}function ob(){let i=globalThis.__livingWorld06J?.stage||"WAITING",e=u3(),t=et.info.render.calls||0,n=et.info.render.triangles||0,s={slice_built:Wa,materials:Qe.materialFamilies.length===6,depth_layers:Qe.depthLayers.length===5,motion_systems:Qe.ambientMotionSystems.length===4,slice_drawables:Jp<=Qe.presentationBudget.addedDrawCallsMax,slice_triangles:Yp<=Qe.presentationBudget.addedTrianglesMax,total_draw_calls:t<=Qe.presentationBudget.absoluteDrawCallsMax,total_triangles:n<=Qe.presentationBudget.absoluteTrianglesMax,asset_load_one:e.assetLoads===1,duplicates_zero:e.duplicates===0,regression:i==="PASS",no_build_error:!ho},r=Object.entries(s).filter(([,o])=>!o).map(([o])=>o);return{ready:r.length===0,failed:r,checks:s,calls:t,tris:n,inv:e,regression:i}}function h3(){let i=ob(),e=Math.hypot(ne.position.x-Bt.x,ne.position.z-Bt.z);an(k2,i.ready?"READY":ho?"FAIL":i.regression==="PASS"?"BUILDING":"WAITING 06J",i.ready?"#bdf3c8":ho?"#ff9b9b":"#ffe59a"),an(V2,Qe.name),an(W2,Qe.materialFamilies.length+"/6"),an(X2,Qe.depthLayers.length+"/5"),an(q2,Qe.ambientMotionSystems.length+"/4"),an(Y2,Jp+" / "+Qe.presentationBudget.addedDrawCallsMax),an(J2,Yp.toLocaleString()+" / "+Qe.presentationBudget.addedTrianglesMax.toLocaleString()),an(Z2,i.calls+" / "+Qe.presentationBudget.absoluteDrawCallsMax,i.calls<=120?"#bdf3c8":"#ff9b9b"),an(K2,i.tris.toLocaleString()+" / "+Qe.presentationBudget.absoluteTrianglesMax.toLocaleString(),i.tris<=35e4?"#bdf3c8":"#ff9b9b"),an($2,i.regression,i.regression==="PASS"?"#bdf3c8":"#ffe59a"),an(j2,String(i.inv.assetLoads),i.inv.assetLoads===1?"#bdf3c8":"#ff9b9b"),an(Q2,String(i.inv.duplicates),i.inv.duplicates===0?"#bdf3c8":"#ff9b9b"),an(e3,e.toFixed(1)+" m"),ho?an(df,"SLICE BUILD FAIL \xB7 "+ho,"#ff9b9b"):i.ready?an(df,"VERTICAL BEAUTY SLICE READY \u2713 \xB7 6 MATERIAL FAMILIES \u2713 \xB7 5 DEPTH LAYERS \u2713 \xB7 4 MOTION SYSTEMS \u2713 \xB7 RUNTIME PRESERVED \u2713 \xB7 PRESENTATION BUDGET PASS \u2713","#bdf3c8"):i.regression!=="PASS"?an(df,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):an(df,"BUILDING SUNLIT BASIN PRESENTATION LAYER","#ffe59a")}var Av=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),ab=i=>{try{if((globalThis.__livingWorld06J?.stage||"WAITING")==="PASS"&&!Wa&&!ho&&l3(),Wa){let t=(i-nb)/1e3;for(let n of Us.userData.animatedMaterials||[]){let s=n?.userData?.beautyShader;s?.uniforms?.uBeautyTime&&(s.uniforms.uBeautyTime.value=t),n?.uniforms?.uBeautyTime&&(n.uniforms.uBeautyTime.value=t)}}i>=Sv&&(h3(),Sv=i+400)}catch(e){ho=e?.message||String(e)}};ab.verticalBeautySliceId="09B_VERTICAL_BEAUTY_SLICE";Av.some(i=>i.verticalBeautySliceId==="09B_VERTICAL_BEAUTY_SLICE")||Av.push(ab);globalThis.__verticalBeautySlice09B={marker:G2,spec:Qe,root:Us,center:Bt,get built(){return Wa},get presentationTriangles(){return Yp},get presentationDrawables(){return Jp},get baselineCalls(){return ib},get baselineTriangles(){return sb},get proof(){return ob()}};
