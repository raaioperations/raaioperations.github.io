var mE=0,dg=1,gE=2;var el=1,od=2,ca=3,ts=0,on=1,_t=2,ns=0,la=1,tl=2,fg=3,pg=4,_E=5;var $r=100,xE=101,yE=102,EE=103,ME=104,vE=200,SE=201,AE=202,bE=203,mg=204,gg=205,TE=206,RE=207,wE=208,CE=209,IE=210,DE=211,PE=212,NE=213,LE=214,Nh=0,Lh=1,Oh=2,qo=3,Bh=4,Fh=5,Uh=6,Hh=7,_g=0,OE=1,BE=2,Di=0,xg=1,yg=2,Eg=3,nl=4,Mg=5,vg=6,Sg=7,ig="attached",FE="detached",Ag=300,dr=301,Qr=302,ad=303,cd=304,il=306,Ti=1e3,li=1001,Yo=1002,Gt=1003,ld=1004;var eo=1005;var kt=1006,ua=1007;var Pi=1008;var Un=1009,bg=1010,Tg=1011,ha=1012,ud=1013,Ni=1014,Zn=1015,Li=1016,hd=1017,dd=1018,da=1020,Rg=35902,wg=35899,Cg=1021,Ig=1022,Tn=1023,Ki=1026,fr=1027,fd=1028,pd=1029,pr=1030,md=1031;var gd=1033,sl=33776,rl=33777,ol=33778,al=33779,_d=35840,xd=35841,yd=35842,Ed=35843,Md=36196,vd=37492,Sd=37496,Ad=37488,bd=37489,cl=37490,Td=37491,Rd=37808,wd=37809,Cd=37810,Id=37811,Dd=37812,Pd=37813,Nd=37814,Ld=37815,Od=37816,Bd=37817,Fd=37818,Ud=37819,Hd=37820,zd=37821,Gd=36492,kd=36494,Vd=36495,Wd=36283,Xd=36284,ll=36285,qd=36286,UE=2200,HE=2201,zE=2202,kr=2300,Vr=2301,Ih=2302,sg=2303,Hr=2400,zr=2401,bc=2402,Yd=2500,GE=2501,Dg=0,ul=1,fa=2,kE=3200;var Jd=0,VE=1,Oi="",zt="srgb",bn="srgb-linear",Tc="linear",gt="srgb";var Dh=7680;var WE=519,XE=512,qE=513,YE=514,Zd=515,JE=516,ZE=517,Kd=518,KE=519,Pg=35044,Ng=35048;var Lg="300 es",Ai=2e3,Jo=2001;function aT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jE(){let n=Zo("canvas");return n.style.display="block",n}var Iy={},Ko=null;function Rc(...n){let e="THREE."+n.shift();Ko?Ko("log",e,...n):console.log(e,...n)}function $E(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ae(...n){n=$E(n);let e="THREE."+n.shift();if(Ko)Ko("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=$E(n);let e="THREE."+n.shift();if(Ko)Ko("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gr(...n){let e=n.join(" ");e in Iy||(Iy[e]=!0,Ae(...n))}function QE(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var eM={[Nh]:Lh,[Oh]:Uh,[Bh]:Hh,[qo]:Fh,[Lh]:Nh,[Uh]:Oh,[Hh]:Bh,[Fh]:qo},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dy=1234567,Sc=Math.PI/180,Wr=180/Math.PI;function bi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Og(n,e){return(n%e+e)%e}function lT(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uT(n,e,t){return n!==e?(t-n)/(e-n):0}function Ac(n,e,t){return(1-t)*n+t*e}function hT(n,e,t,i){return Ac(n,e,1-Math.exp(-t*i))}function dT(n,e=1){return e-Math.abs(Og(n,e*2)-e)}function fT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gT(n,e){return n+Math.random()*(e-n)}function _T(n){return n*(.5-Math.random())}function xT(n){n!==void 0&&(Dy=n);let e=Dy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yT(n){return n*Sc}function ET(n){return n*Wr}function MT(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function vT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ST(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function AT(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*u,a*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ze={DEG2RAD:Sc,RAD2DEG:Wr,generateUUID:bi,clamp:$e,euclideanModulo:Og,mapLinear:lT,inverseLerp:uT,lerp:Ac,damp:hT,pingpong:dT,smoothstep:fT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:_T,seededRandom:xT,degToRad:yT,radToDeg:ET,isPowerOfTwo:MT,ceilPowerOfTwo:vT,floorPowerOfTwo:ST,setQuaternionFromProperEuler:AT,normalize:yt,denormalize:Si},He=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Py.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Py.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Im.copy(this).projectOnVector(e),this.sub(Im)}reflect(e){return this.sub(Im.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Im=new I,Py=new tn,ke=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],M=s[1],T=s[4],E=s[7],S=s[2],A=s[5],R=s[8];return r[0]=o*x+a*M+c*S,r[3]=o*g+a*T+c*A,r[6]=o*p+a*E+c*R,r[1]=l*x+u*M+h*S,r[4]=l*g+u*T+h*A,r[7]=l*p+u*E+h*R,r[2]=d*x+f*M+m*S,r[5]=d*g+f*T+m*A,r[8]=d*p+f*E+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dm.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dm.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dm=new ke,Ny=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ly=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bT(){let n={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Xo(s.r),s.g=Xo(s.g),s.b=Xo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Tc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bn]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Ny,fromXYZ:Ly,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ny,fromXYZ:Ly,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}var je=bT();function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Do,zh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Do===void 0&&(Do=Zo("canvas")),Do.width=e.width,Do.height=e.height;let s=Do.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Do}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},TT=0,jo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pm(s[o].image)):r.push(Pm(s[o]))}else r=Pm(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var RT=0,Nm=new I,nn=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,r=kt,o=Pi,a=Tn,c=Un,l=n.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=bi(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nm).x}get height(){return this.source.getSize(Nm).y}get depth(){return this.source.getSize(Nm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ag;nn.DEFAULT_ANISOTROPY=1;var Et=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(f+1)/2,S=(p+1)/2,A=(u+d)/4,R=(h+x)/4,y=(m+g)/4;return T>E&&T>S?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=A/i,r=R/i):E>S?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=y/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=y/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new nn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new jo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Gh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wc=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kh=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ze=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,x,g)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Po.setFromMatrixColumn(e,0).length(),r=1/Po.setFromMatrixColumn(e,1).length(),o=1/Po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,CT)}lookAt(e,t,i){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Qs.crossVectors(i,Xn),Qs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Qs.crossVectors(i,Xn)),Qs.normalize(),rh.crossVectors(Xn,Qs),s[0]=Qs.x,s[4]=rh.x,s[8]=Xn.x,s[1]=Qs.y,s[5]=rh.y,s[9]=Xn.y,s[2]=Qs.z,s[6]=rh.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],T=i[7],E=i[11],S=i[15],A=s[0],R=s[4],y=s[8],b=s[12],C=s[1],L=s[5],B=s[9],z=s[13],P=s[2],k=s[6],J=s[10],Z=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=o*A+a*C+c*P+l*ie,r[4]=o*R+a*L+c*k+l*X,r[8]=o*y+a*B+c*J+l*Q,r[12]=o*b+a*z+c*Z+l*te,r[1]=u*A+h*C+d*P+f*ie,r[5]=u*R+h*L+d*k+f*X,r[9]=u*y+h*B+d*J+f*Q,r[13]=u*b+h*z+d*Z+f*te,r[2]=m*A+x*C+g*P+p*ie,r[6]=m*R+x*L+g*k+p*X,r[10]=m*y+x*B+g*J+p*Q,r[14]=m*b+x*z+g*Z+p*te,r[3]=M*A+T*C+E*P+S*ie,r[7]=M*R+T*L+E*k+S*X,r[11]=M*y+T*B+E*J+S*Q,r[15]=M*b+T*z+E*Z+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],M=c*f-l*d,T=a*f-l*h,E=a*d-c*h,S=o*f-l*u,A=o*d-c*u,R=o*h-a*u;return t*(x*M-g*T+p*E)-i*(m*M-g*S+p*A)+s*(m*T-x*S+p*R)-r*(m*E-x*A+g*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=t*a-i*o,T=t*c-s*o,E=t*l-r*o,S=i*c-s*a,A=i*l-r*a,R=s*l-r*c,y=u*x-h*m,b=u*g-d*m,C=u*p-f*m,L=h*g-d*x,B=h*p-f*x,z=d*p-f*g,P=M*z-T*B+E*L+S*C-A*b+R*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*z-c*B+l*L)*k,e[1]=(s*B-i*z-r*L)*k,e[2]=(x*R-g*A+p*S)*k,e[3]=(d*A-h*R-f*S)*k,e[4]=(c*C-o*z-l*b)*k,e[5]=(t*z-s*C+r*b)*k,e[6]=(g*E-m*R-p*T)*k,e[7]=(u*R-d*E+f*T)*k,e[8]=(o*B-a*C+l*y)*k,e[9]=(i*C-t*B-r*y)*k,e[10]=(m*A-x*E+p*M)*k,e[11]=(h*E-u*A-f*M)*k,e[12]=(a*b-o*L-c*y)*k,e[13]=(t*L-i*b+s*y)*k,e[14]=(x*T-m*S-g*M)*k,e[15]=(u*S-h*T+d*M)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,M=c*l,T=c*u,E=c*h,S=i.x,A=i.y,R=i.z;return s[0]=(1-(x+p))*S,s[1]=(f+E)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(f-E)*A,s[5]=(1-(d+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+T)*R,s[9]=(g-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Po.set(s[0],s[1],s[2]).length(),a=Po.set(s[4],s[5],s[6]).length(),c=Po.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yi.copy(this);let l=1/o,u=1/a,h=1/c;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Ai,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Ai)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Jo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ai,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Ai)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Jo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Po=new I,yi=new ze,wT=new I(0,0,0),CT=new I(1,1,1),Qs=new I,rh=new I,Xn=new I,Oy=new ze,By=new tn,wi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return By.setFromEuler(this),this.setFromQuaternion(By,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var Cc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},IT=0,Fy=new I,No=new tn,Ms=new ze,oh=new I,mc=new I,DT=new I,PT=new tn,Uy=new I(1,0,0),Hy=new I(0,1,0),zy=new I(0,0,1),Gy={type:"added"},NT={type:"removed"},Lo={type:"childadded",child:null},Lm={type:"childremoved",child:null},Fe=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new wi,i=new tn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new ke}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.multiply(No),this}rotateOnWorldAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.premultiply(No),this}rotateX(e){return this.rotateOnAxis(Uy,e)}rotateY(e){return this.rotateOnAxis(Hy,e)}rotateZ(e){return this.rotateOnAxis(zy,e)}translateOnAxis(e,t){return Fy.copy(e).applyQuaternion(this.quaternion),this.position.add(Fy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uy,e)}translateY(e){return this.translateOnAxis(Hy,e)}translateZ(e){return this.translateOnAxis(zy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oh.copy(e):oh.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(mc,oh,this.up):Ms.lookAt(oh,mc,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),No.setFromRotationMatrix(Ms),this.quaternion.premultiply(No.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gy),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NT),Lm.child=e,this.dispatchEvent(Lm),Lm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gy),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,e,DT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,PT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},LT={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},ah={h:0,s:0,l:0};function Om(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=Og(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Om(o,r,e+1/3),this.g=Om(o,r,e),this.b=Om(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=tM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return je.workingToColorSpace(pn.copy(this),e),Math.round($e(pn.r*255,0,255))*65536+Math.round($e(pn.g*255,0,255))*256+Math.round($e(pn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=zt){je.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(ah);let i=Ac(er.h,ah.h,t),s=Ac(er.s,ah.s,t),r=Ac(er.l,ah.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new re;re.NAMES=tM;var Ic=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Dc=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new I,vs=new I,Bm=new I,Ss=new I,Oo=new I,Bo=new I,ky=new I,Fm=new I,Um=new I,Hm=new I,zm=new Et,Gm=new Et,km=new Et,rr=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ei.subVectors(e,t),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ei.subVectors(s,t),vs.subVectors(i,t),Bm.subVectors(e,t);let o=Ei.dot(Ei),a=Ei.dot(vs),c=Ei.dot(Bm),l=vs.dot(vs),u=vs.dot(Bm),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ss)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ss.x),c.addScaledVector(o,Ss.y),c.addScaledVector(a,Ss.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return zm.setScalar(0),Gm.setScalar(0),km.setScalar(0),zm.fromBufferAttribute(e,t),Gm.fromBufferAttribute(e,i),km.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zm,r.x),o.addScaledVector(Gm,r.y),o.addScaledVector(km,r.z),o}static isFrontFacing(e,t,i,s){return Ei.subVectors(i,t),vs.subVectors(e,t),Ei.cross(vs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Ei.cross(vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Oo.subVectors(s,i),Bo.subVectors(r,i),Fm.subVectors(e,i);let c=Oo.dot(Fm),l=Bo.dot(Fm);if(c<=0&&l<=0)return t.copy(i);Um.subVectors(e,s);let u=Oo.dot(Um),h=Bo.dot(Um);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Oo,o);Hm.subVectors(e,r);let f=Oo.dot(Hm),m=Bo.dot(Hm);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Bo,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return ky.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(ky,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Oo,o).addScaledVector(Bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ch.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ch.copy(i.boundingBox)),ch.applyMatrix4(e.matrixWorld),this.union(ch)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gc),lh.subVectors(this.max,gc),Fo.subVectors(e.a,gc),Uo.subVectors(e.b,gc),Ho.subVectors(e.c,gc),tr.subVectors(Uo,Fo),nr.subVectors(Ho,Uo),Or.subVectors(Fo,Ho);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Or.z,Or.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Or.z,0,-Or.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Or.y,Or.x,0];return!Vm(t,Fo,Uo,Ho,lh)||(t=[1,0,0,0,1,0,0,0,1],!Vm(t,Fo,Uo,Ho,lh))?!1:(uh.crossVectors(tr,nr),t=[uh.x,uh.y,uh.z],Vm(t,Fo,Uo,Ho,lh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(As),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},As=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,ch=new Yn,Fo=new I,Uo=new I,Ho=new I,tr=new I,nr=new I,Or=new I,gc=new I,lh=new I,uh=new I,Br=new I;function Vm(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Br.fromArray(n,r);let a=s.x*Math.abs(Br.x)+s.y*Math.abs(Br.y)+s.z*Math.abs(Br.z),c=e.dot(Br),l=t.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var qt=new I,hh=new He,OT=0,Lt=class extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pg,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hh.fromBufferAttribute(this,t),hh.applyMatrix3(e),this.setXY(t,hh.x,hh.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Pc=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Nc=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},BT=new Yn,_c=new I,Wm=new I,Ln=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):BT.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_c.subVectors(e,this.center);let t=_c.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_c,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_c.copy(e.center).add(Wm)),this.expandByPoint(_c.copy(e.center).sub(Wm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},FT=0,ci=new ze,Xm=new Fe,zo=new I,qn=new Yn,xc=new Yn,en=new I,lt=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aT(e)?Nc:Pc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Xm.lookAt(e),Xm.updateMatrix(),this.applyMatrix4(Xm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xc.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(qn.min,xc.min),qn.expandByPoint(en),en.addVectors(qn.max,xc.max),qn.expandByPoint(en)):(qn.expandByPoint(xc.min),qn.expandByPoint(xc.max))}qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(zo.fromBufferAttribute(e,l),en.add(zo)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Lt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new I,c[y]=new I;let l=new I,u=new I,h=new I,d=new He,f=new He,m=new He,x=new I,g=new I;function p(y,b,C){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),a[y].add(x),a[b].add(x),a[C].add(x),c[y].add(g),c[b].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,b=M.length;y<b;++y){let C=M[y],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let T=new I,E=new I,S=new I,A=new I;function R(y){S.fromBufferAttribute(s,y),A.copy(S);let b=a[y];T.copy(b),T.sub(S.multiplyScalar(S.dot(b))).normalize(),E.crossVectors(A,b);let L=E.dot(c[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,L)}for(let y=0,b=M.length;y<b;++y){let C=M[y],L=C.start,B=C.count;for(let z=L,P=L+B;z<P;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Lt(d,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pg,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},An=new I,ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Rc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Rc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qm=new I,UT=new I,HT=new ke,vi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=qm.subVectors(i,t).cross(UT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(qm),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||HT.getNormalMatrix(e),s=this.coplanarPoint(qm).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zT=0,On=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=la,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mg,this.blendDst=gg,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=WE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dh,this.stencilZFail=Dh,this.stencilZPass=Dh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bs=new I,Ym=new I,dh=new I,fh=new I,Xr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bs.copy(this.origin).addScaledVector(this.direction,t),bs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ym.copy(e).add(t).multiplyScalar(.5),dh.copy(t).sub(e).normalize(),fh.copy(this.origin).sub(Ym);let r=e.distanceTo(t)*.5,o=-this.direction.dot(dh),a=fh.dot(this.direction),c=-fh.dot(dh),l=fh.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ym).addScaledVector(dh,d),f}intersectSphere(e,t){if(e.radius<0)return null;bs.subVectors(e.center,this.origin);let i=bs.dot(this.direction),s=bs.dot(bs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=i.x-o.x,M=i.y-o.y,T=i.z-o.z,E=Math.abs(c),S=Math.abs(l),A=Math.abs(u),R,y,b,C,L,B,z,P,k,J,Z,ie;if(E>=S&&E>=A?(b=c,B=h,k=m,ie=p,c>=0?(R=l,y=u,C=d,L=f,z=x,P=g,J=M,Z=T):(R=u,y=l,C=f,L=d,z=g,P=x,J=T,Z=M)):S>=A?(b=l,B=d,k=x,ie=M,l>=0?(R=u,y=c,C=f,L=h,z=g,P=m,J=T,Z=p):(R=c,y=u,C=h,L=f,z=m,P=g,J=p,Z=T)):(b=u,B=f,k=g,ie=T,u>=0?(R=c,y=l,C=h,L=d,z=m,P=x,J=p,Z=M):(R=l,y=c,C=d,L=h,z=x,P=m,J=M,Z=p)),b===0)return null;let X=R/b,Q=y/b,te=1/b,Ne=C-X*B,Ce=L-Q*B,Tt=z-X*k,rt=P-Q*k,ht=J-X*ie,q=Z-Q*ie,$=ht*rt-q*Tt,Ee=Ne*q-Ce*ht,We=Tt*Ce-rt*Ne;if(s){if($<0||Ee<0||We<0)return null}else if(($<0||Ee<0||We<0)&&($>0||Ee>0||We>0))return null;let xe=$+Ee+We;if(xe===0)return null;let Qe=te*($*B+Ee*k+We*ie);return(xe>0?Qe<0:Qe>0)?null:this.at(Qe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vy=new ze,Fr=new Xr,ph=new Ln,Wy=new I,mh=new I,gh=new I,_h=new I,Jm=new I,xh=new I,Xy=new I,yh=new I,Be=class extends Fe{constructor(e=new lt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xh.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Jm.fromBufferAttribute(h,e),o?xh.addScaledVector(Jm,u):xh.addScaledVector(Jm.sub(t),u))}t.add(xh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ph.copy(i.boundingSphere),ph.applyMatrix4(r),Fr.copy(e.ray).recast(e.near),!(ph.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(ph,Wy)===null||Fr.origin.distanceToSquared(Wy)>(e.far-e.near)**2))&&(Vy.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(Vy),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=a.getX(E),R=a.getX(E+1),y=a.getX(E+2);s=Eh(this,p,e,i,l,u,h,A,R,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),E=a.getX(g+2);s=Eh(this,o,e,i,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,S=T;E<S;E+=3){let A=E,R=E+1,y=E+2;s=Eh(this,p,e,i,l,u,h,A,R,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,T=g+1,E=g+2;s=Eh(this,o,e,i,l,u,h,M,T,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function GT(n,e,t,i,s,r,o,a){let c;if(e.side===on?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ts,a),c===null)return null;yh.copy(a),yh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(yh);return l<t.near||l>t.far?null:{distance:l,point:yh.clone(),object:n}}function Eh(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,mh),n.getVertexPosition(c,gh),n.getVertexPosition(l,_h);let u=GT(n,e,t,i,mh,gh,_h,Xy);if(u){let h=new I;rr.getBarycoord(Xy,mh,gh,_h,h),s&&(u.uv=rr.getInterpolatedAttribute(s,a,c,l,h,new He)),r&&(u.uv1=rr.getInterpolatedAttribute(r,a,c,l,h,new He)),o&&(u.normal=rr.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};rr.getNormal(mh,gh,_h,d.normal),u.face=d,u.barycoord=h}return u}var yc=new Et,qy=new Et,Yy=new Et,kT=new Et,Jy=new ze,Mh=new I,Zm=new Ln,Zy=new ze,Km=new Xr,Lc=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ig,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mh),this.boundingBox.expandByPoint(Mh)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mh),this.boundingSphere.expandByPoint(Mh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zm.copy(this.boundingSphere),Zm.applyMatrix4(s),e.ray.intersectsSphere(Zm)!==!1&&(Zy.copy(s).invert(),Km.copy(e.ray).applyMatrix4(Zy),!(this.boundingBox!==null&&Km.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Km)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ig?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===FE?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;qy.fromBufferAttribute(s.attributes.skinIndex,e),Yy.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(yc.copy(t),t.set(0,0,0,0)):(yc.set(...t,1),t.set(0,0,0)),yc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Yy.getComponent(r);if(o!==0){let a=qy.getComponent(r);Jy.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(kT.copy(yc).applyMatrix4(Jy),o)}}return t.isVector4&&(t.w=yc.w),t.applyMatrix4(this.bindMatrixInverse)}},ta=class extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends nn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Gt,u=Gt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ky=new ze,VT=new ze,Oc=class n{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:VT;Ky.multiplyMatrices(a,t[r]),Ky.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new or(t,e,e,Tn,Zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new ta),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ws=class extends Lt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Go=new ze,jy=new ze,vh=[],$y=new Yn,WT=new ze,Ec=new Be,Mc=new Ln,Ve=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,WT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Go),$y.copy(e.boundingBox).applyMatrix4(Go),this.boundingBox.union($y)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Go),Mc.copy(e.boundingSphere).applyMatrix4(Go),this.boundingSphere.union(Mc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ec.geometry=this.geometry,Ec.material=this.material,Ec.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(i),e.ray.intersectsSphere(Mc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Go),jy.multiplyMatrices(i,Go),Ec.matrixWorld=jy,Ec.raycast(e,vh);for(let o=0,a=vh.length;o<a;o++){let c=vh[o];c.instanceId=r,c.object=this,t.push(c)}vh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(s*this.count),s,this.count,fd,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ur=new Ln,XT=new He(.5,.5),Sh=new I,na=class{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],T=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-m,S-M).normalize(),s[1].setComponents(l+o,f+u,p+m,S+M).normalize(),s[2].setComponents(l+a,f+h,p+x,S+T).normalize(),s[3].setComponents(l-a,f-h,p-x,S-T).normalize(),i)s[4].setComponents(c,d,g,E).normalize(),s[5].setComponents(l-c,f-d,p-g,S-E).normalize();else if(s[4].setComponents(l-c,f-d,p-g,S-E).normalize(),t===Ai)s[5].setComponents(l+c,f+d,p+g,S+E).normalize();else if(t===Jo)s[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);let t=XT.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Sh.x=s.normal.x>0?e.max.x:e.min.x,Sh.y=s.normal.y>0?e.max.y:e.min.y,Sh.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ia=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vh=new I,Wh=new I,Qy=new ze,vc=new Xr,Ah=new Ln,jm=new I,eE=new I,qr=class extends Fe{constructor(e=new lt,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vh.fromBufferAttribute(t,s-1),Wh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vh.distanceTo(Wh);e.setAttribute("lineDistance",new Oe(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ah.copy(i.boundingSphere),Ah.applyMatrix4(s),Ah.radius+=r,e.ray.intersectsSphere(Ah)===!1)return;Qy.copy(s).invert(),vc.copy(e.ray).applyMatrix4(Qy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=u.getX(x),M=u.getX(x+1),T=bh(this,e,vc,c,p,M,x);T&&t.push(T)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=bh(this,e,vc,c,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=bh(this,e,vc,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=bh(this,e,vc,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bh(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Vh.fromBufferAttribute(a,s),Wh.fromBufferAttribute(a,r),t.distanceSqToSegment(Vh,Wh,jm,eE)>i)return;jm.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(jm);if(!(l<e.near||l>e.far))return{distance:l,point:eE.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var tE=new I,nE=new I,Bc=class extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tE.fromBufferAttribute(t,s),nE.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tE.distanceTo(nE);e.setAttribute("lineDistance",new Oe(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fc=class extends qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sa=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},iE=new ze,rg=new Xr,Th=new Ln,Rh=new I,Yr=class extends Fe{constructor(e=new lt,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(s),Th.radius+=r,e.ray.intersectsSphere(Th)===!1)return;iE.copy(s).invert(),rg.copy(e.ray).applyMatrix4(iE);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);Rh.fromBufferAttribute(h,g),sE(Rh,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Rh.fromBufferAttribute(h,m),sE(Rh,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sE(n,e,t,i,s,r,o){let a=rg.distanceSqToPoint(n);if(a<t){let c=new I;rg.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Uc=class extends nn{constructor(e=[],t=dr,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ar=class extends nn{constructor(e,t,i=Ni,s,r,o,a=Gt,c=Gt,l,u=Ki,h=1){if(u!==Ki&&u!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xh=class extends ar{constructor(e,t=Ni,i=dr,s,r,o=Gt,a=Gt,c,l=Ki){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hc=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class n extends lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function m(x,g,p,M,T,E,S,A,R,y,b){let C=E/R,L=S/y,B=E/2,z=S/2,P=A/2,k=R+1,J=y+1,Z=0,ie=0,X=new I;for(let Q=0;Q<J;Q++){let te=Q*L-z;for(let Ne=0;Ne<k;Ne++){let Ce=Ne*C-B;X[x]=Ce*M,X[g]=te*T,X[p]=P,l.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(Ne/R),h.push(1-Q/y),Z+=1}}for(let Q=0;Q<y;Q++)for(let te=0;te<R;te++){let Ne=d+te+k*Q,Ce=d+te+k*(Q+1),Tt=d+(te+1)+k*(Q+1),rt=d+(te+1)+k*Q;c.push(Ne,Ce,rt),c.push(Ce,Tt,rt),ie+=6}a.addGroup(f,ie,b),f+=ie,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ra=class n extends lt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=i*2+r,x=s+1,g=new I,p=new I;for(let M=0;M<=m;M++){let T=0,E=0,S=0,A=0;if(M<=i){let b=M/i,C=b*Math.PI/2;E=-u-e*Math.cos(C),S=e*Math.sin(C),A=-e*Math.cos(C),T=b*h}else if(M<=i+r){let b=(M-i)/r;E=-u+b*t,S=e,A=0,T=h+b*d}else{let b=(M-i-r)/i,C=b*Math.PI/2;E=u+e*Math.sin(C),S=e*Math.cos(C),A=e*Math.sin(C),T=h+d+b*h}let R=Math.max(0,Math.min(1,T/f)),y=0;M===0?y=.5/s:M===m&&(y=-.5/s);for(let b=0;b<=s;b++){let C=b/s,L=C*Math.PI*2,B=Math.sin(L),z=Math.cos(L);p.x=-S*z,p.y=E,p.z=S*B,a.push(p.x,p.y,p.z),g.set(-S*z,A,S*B),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+y,R)}if(M>0){let b=(M-1)*x;for(let C=0;C<s;C++){let L=b+C,B=b+C+1,z=M*x+C,P=M*x+C+1;o.push(L,B,z),o.push(B,P,z)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zc=class n extends lt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,u=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ci=class n extends lt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=i/2,p=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function M(){let E=new I,S=new I,A=0,R=(t-e)/i;for(let y=0;y<=r;y++){let b=[],C=y/r,L=C*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,P=z*c+a,k=Math.sin(P),J=Math.cos(P);S.x=L*k,S.y=-C*i+g,S.z=L*J,h.push(S.x,S.y,S.z),E.set(k,R,J).normalize(),d.push(E.x,E.y,E.z),f.push(z,1-C),b.push(m++)}x.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){let C=x[b][y],L=x[b+1][y],B=x[b+1][y+1],z=x[b][y+1];(e>0||b!==0)&&(u.push(C,L,z),A+=3),(t>0||b!==r-1)&&(u.push(L,B,z),A+=3)}l.addGroup(p,A,0),p+=A}function T(E){let S=m,A=new He,R=new I,y=0,b=E===!0?e:t,C=E===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let L=m;for(let B=0;B<=s;B++){let P=B/s*c+a,k=Math.cos(P),J=Math.sin(P);R.x=b*J,R.y=g*C,R.z=b*k,h.push(R.x,R.y,R.z),d.push(0,C,0),A.x=k*.5+.5,A.y=J*.5*C+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){let z=S+B,P=L+B;E===!0?u.push(P,P+1,z):u.push(P+1,P,z),y+=3}l.addGroup(p,y,E===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class n extends Ci{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jr=class n extends lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new I,E=new I,S=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],T),f(t[A+1],E),f(t[A+2],S),c(T,E,S,M)}function c(M,T,E,S){let A=S+1,R=[];for(let y=0;y<=A;y++){R[y]=[];let b=M.clone().lerp(E,y/A),C=T.clone().lerp(E,y/A),L=A-y;for(let B=0;B<=L;B++)B===0&&y===A?R[y][B]=b:R[y][B]=b.clone().lerp(C,B/L)}for(let y=0;y<A;y++)for(let b=0;b<2*(A-y)-1;b++){let C=Math.floor(b/2);b%2===0?(d(R[y][C+1]),d(R[y+1][C]),d(R[y][C])):(d(R[y][C+1]),d(R[y+1][C+1]),d(R[y+1][C]))}}function l(M){let T=new I;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(M),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function u(){let M=new I;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let E=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(E,1-S)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let T=o[M+0],E=o[M+2],S=o[M+4],A=Math.max(T,E,S),R=Math.min(T,E,S);A>.9&&R<.1&&(T<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,T){let E=M*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function m(){let M=new I,T=new I,E=new I,S=new I,A=new He,R=new He,y=new He;for(let b=0,C=0;b<r.length;b+=9,C+=6){M.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),E.set(r[b+6],r[b+7],r[b+8]),A.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),y.set(o[C+4],o[C+5]),S.copy(M).add(T).add(E).divideScalar(3);let L=g(S);x(A,C+0,M,L),x(R,C+2,T,L),x(y,C+4,E,L)}}function x(M,T,E,S){S<0&&M.x===1&&(o[T]=M.x-1),E.x===0&&E.z===0&&(o[T]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Jn=class n extends Jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var qh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new He:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,c=new ze;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Bg(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var rE=new I,oE=new I,$m=new Bg,Qm=new Bg,eg=new Bg,Gc=class extends qh{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(oE.subVectors(s[0],s[1]).add(s[0]),l=oE);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(rE.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=rE),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),$m.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,x,g),Qm.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,x,g),eg.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&($m.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Qm.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),eg.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set($m.calc(c),Qm.calc(c),eg.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var cr=class n extends Jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var kc=class n extends Jr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ui=class n extends lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let M=p*d-o;for(let T=0;T<l;T++){let E=T*h-r;m.push(E,-M,0),x.push(0,0,1),g.push(T/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let T=M+l*p,E=M+l*(p+1),S=M+1+l*(p+1),A=M+1+l*p;f.push(T,E,A),f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},$i=class n extends lt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new I,m=new He;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let M=p+g,T=M,E=M+i+1,S=M+i+2,A=M+1;a.push(T,E,A),a.push(E,S,A)}}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mn=class n extends lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new I,d=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let M=[],T=p/i,E=o+T*a,S=e*Math.cos(E),A=Math.sqrt(e*e-S*S),R=0;p===0&&o===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let b=y/t,C=s+b*r;h.x=-A*Math.cos(C),h.y=S,h.z=A*Math.sin(C),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(b+R,1-T),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let T=u[p][M+1],E=u[p][M],S=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(T,E,A),(p!==i-1||c<Math.PI)&&f.push(E,S,A)}this.setIndex(f),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Vc=class n extends Jr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wc=class n extends lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],h=[],d=new I,f=new I,m=new I;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,M=(s+1)*(x-1)+g-1,T=(s+1)*(x-1)+g,E=(s+1)*x+g;c.push(p,M,E),c.push(M,T,E)}this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function to(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(aE(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(aE(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=to(n[t]);for(let s in i)e[s]=i[s]}return e}function aE(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qT(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var nM={clone:to,merge:gn},YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=JT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ze().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yh=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Jh=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zh=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ph(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function ZT(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function cE(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function KT(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kh=class extends Qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hr,endingEnd:Hr}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zr:r=e,a=2*t-i;break;case bc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case zr:o=e,c=2*i-t;break;case bc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*x+.5*m,E=f*g-f*x;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+M*o[l+S]+T*o[c+S]+E*o[h+S];return r}},Xc=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},jh=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$h=class extends Qi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(s-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let x=o[l+m],g=o[c+m],p=f*d+m*2,M=h[p],T=h[p+1],E=e*d+m*2,S=u[E],A=u[E+1],R=$T(i,t,M,S,s);r[m]=iM(R,x,T,A,g)}return r}};function iM(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function jT(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function $T(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=iM(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=jT(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ph(e.settings)&&(i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $h(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Ih:t=this.InterpolantFactoryMethodSmooth;break;case sg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Ih;case this.InterpolantFactoryMethodBezier:return sg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ph(this.settings)&&(lE(this.settings.inTangents,e),lE(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ue("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&cT(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ih,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ph(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lE(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Vr;var Cs=class extends Fn{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=kr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};qc.prototype.ValueTypeName="color";var Is=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};Is.prototype.ValueTypeName="number";var Qh=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ds=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends Fn{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=kr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};lr.prototype.ValueTypeName="vector";var Zr=class{constructor(e="",t=-1,i=[],s=Yd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(eR(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Fn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=ZT(c);c=cE(c,1,u),l=cE(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Is(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function QT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return lr;case"color":return qc;case"quaternion":return Ds;case"bool":case"boolean":return Cs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function eR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=QT(n.type);if(n.times===void 0){let i=[],s=[];KT(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Ph(n.settings)&&(t.settings={inTangents:sr(n.settings.inTangents,Float32Array),outTangents:sr(n.settings.outTangents,Float32Array)}),t}var Zi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(uE(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!uE(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function uE(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ed=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sM=new ed,es=class{constructor(e){this.manager=e!==void 0?e:sM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts={},og=class extends Error{constructor(e,t){super(e),this.response=t}},oa=class extends es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ts[e]!==void 0){Ts[e].push({onLoad:t,onProgress:i,onError:s});return}Ts[e]=[],Ts[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ts[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:T,value:E})=>{if(T)p.close();else{x+=E.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let A=0,R=u.length;A<R;A++){let y=u[A];y.onProgress&&y.onProgress(S)}p.enqueue(E),M()}},T=>{p.error(T)})}}});return new Response(g)}else throw new og(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Zi.add(`file:${e}`,l);let u=Ts[e];delete Ts[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Ts[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ts[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ko=new WeakMap,td=class extends es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Zi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ko.get(o);h===void 0&&(h=[],ko.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Zo("img");function c(){u(),t&&t(this);let h=ko.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}ko.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Zi.remove(`image:${e}`);let d=ko.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}ko.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Zi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Yc=class extends es{constructor(e){super(e)}load(e,t,i,s){let r=new nn,o=new td(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ur=class extends Fe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jc=class extends ur{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tg=new ze,hE=new I,dE=new I,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hE.setFromMatrixPosition(e.matrixWorld),t.position.copy(hE),dE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dE),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){tg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tg,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Jo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(tg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wh=new I,Ch=new tn,Ji=new I,Zc=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wh,Ch,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wh,Ch,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wh,Ch,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wh,Ch,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ir=new I,fE=new He,pE=new He,Yt=class extends Zc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,fE,pE),t.subVectors(pE,fE)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ag=class extends aa{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Kc=class extends ur{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ag}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},cg=class extends aa{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},Kr=class extends ur{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hr=class extends Zc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lg=class extends aa{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jc=class extends ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ng=new WeakMap,$c=class extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Zi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{ng.has(o)===!0?(s&&s(ng.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ng.set(c,l),Zi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vo=-90,Wo=1,nd=class extends Fe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Vo,Wo,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Vo,Wo,e,t);r.layers=this.layers,this.add(r);let o=new Yt(Vo,Wo,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Vo,Wo,e,t);a.layers=this.layers,this.add(a);let c=new Yt(Vo,Wo,e,t);c.layers=this.layers,this.add(c);let l=new Yt(Vo,Wo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},id=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var sd=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){tn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;tn.multiplyQuaternionsFlat(e,o,e,t,e,i),tn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},Ug="\\[\\]\\.:\\/",tR=new RegExp("["+Ug+"]","g"),Hg="[^"+Ug+"]",nR="[^"+Ug.replace("\\.","")+"]",iR=/((?:WC+[\/:])*)/.source.replace("WC",Hg),sR=/(WCOD+)?/.source.replace("WCOD",nR),rR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hg),oR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hg),aR=new RegExp("^"+iR+sR+rR+oR+"$"),cR=["material","materials","bones","map"],ug=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tR,"")}static parseTrackName(e){let t=aR.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=ug;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rd=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Hr,endingEnd:Hr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=HE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case GE:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Yd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===zE;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===UE){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=zr,s.endingEnd=zr):(e?s.endingStart=this.zeroSlopeAtStart?zr:Hr:s.endingStart=bc,t?s.endingEnd=this.zeroSlopeAtEnd?zr:Hr:s.endingEnd=bc)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}},lR=new Float32Array(1),Ls=class extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new sd(St.create(i,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Xc(new Float32Array(2),new Float32Array(2),1,lR),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Zr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Yd),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new rd(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?Zr.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Qc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var hg=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function zg(n,e,t,i){let s=uR(i);switch(t){case Cg:return n*e;case fd:return n*e/s.components*s.byteLength;case pd:return n*e/s.components*s.byteLength;case pr:return n*e*2/s.components*s.byteLength;case md:return n*e*2/s.components*s.byteLength;case Ig:return n*e*3/s.components*s.byteLength;case Tn:return n*e*4/s.components*s.byteLength;case gd:return n*e*4/s.components*s.byteLength;case sl:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:case Ed:return Math.max(n,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(n,8)*Math.max(e,8)/2;case Md:case vd:case Ad:case bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sd:case cl:case Td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gd:case kd:case Vd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wd:case Xd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ll:case qd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uR(n){switch(n){case Un:case bg:return{byteLength:1,components:1};case ha:case Tg:case Li:return{byteLength:2,components:1};case hd:case dd:return{byteLength:2,components:4};case Ni:case ud:case Zn:return{byteLength:4,components:1};case Rg:case wg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function TM(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var fR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pR=`#ifdef USE_ALPHAHASH
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
#endif`,mR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_R=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,ER=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MR=`#ifdef USE_BATCHING
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
#endif`,vR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TR=`#ifdef USE_IRIDESCENCE
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
#endif`,RR=`#ifdef USE_BUMPMAP
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
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BR=`#define PI 3.141592653589793
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
} // validated`,FR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UR=`vec3 transformedNormal = objectNormal;
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
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VR="gl_FragColor = linearToOutputTexel( gl_FragColor );",WR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XR=`#ifdef USE_ENVMAP
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
#endif`,qR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
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
#endif`,KR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rw=`#ifdef USE_ENVMAP
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
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
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
#endif`,hw=`uniform sampler2D dfgLUT;
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
}`,dw=`
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sw=`#if defined( USE_POINTS_UV )
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
#endif`,Aw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
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
#endif`,Iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bw=`#ifdef USE_NORMALMAP
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
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p1=`uniform sampler2D t2D;
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
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
}`,E1=`#if DEPTH_PACKING == 3200
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
}`,M1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,T1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,C1=`#define LAMBERT
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
}`,I1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,P1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,B1=`#define PHONG
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
}`,F1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,z1=`#define TOON
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
}`,G1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,W1=`uniform vec3 color;
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
}`,X1=`uniform float rotation;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:fR,alphahash_pars_fragment:pR,alphamap_fragment:mR,alphamap_pars_fragment:gR,alphatest_fragment:_R,alphatest_pars_fragment:xR,aomap_fragment:yR,aomap_pars_fragment:ER,batching_pars_vertex:MR,batching_vertex:vR,begin_vertex:SR,beginnormal_vertex:AR,bsdfs:bR,iridescence_fragment:TR,bumpmap_pars_fragment:RR,clipping_planes_fragment:wR,clipping_planes_pars_fragment:CR,clipping_planes_pars_vertex:IR,clipping_planes_vertex:DR,color_fragment:PR,color_pars_fragment:NR,color_pars_vertex:LR,color_vertex:OR,common:BR,cube_uv_reflection_fragment:FR,defaultnormal_vertex:UR,displacementmap_pars_vertex:HR,displacementmap_vertex:zR,emissivemap_fragment:GR,emissivemap_pars_fragment:kR,colorspace_fragment:VR,colorspace_pars_fragment:WR,envmap_fragment:XR,envmap_common_pars_fragment:qR,envmap_pars_fragment:YR,envmap_pars_vertex:JR,envmap_physical_pars_fragment:rw,envmap_vertex:ZR,fog_vertex:KR,fog_pars_vertex:jR,fog_fragment:$R,fog_pars_fragment:QR,gradientmap_pars_fragment:ew,lightmap_pars_fragment:tw,lights_lambert_fragment:nw,lights_lambert_pars_fragment:iw,lights_pars_begin:sw,lights_toon_fragment:ow,lights_toon_pars_fragment:aw,lights_phong_fragment:cw,lights_phong_pars_fragment:lw,lights_physical_fragment:uw,lights_physical_pars_fragment:hw,lights_fragment_begin:dw,lights_fragment_maps:fw,lights_fragment_end:pw,lightprobes_pars_fragment:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:_w,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:yw,map_fragment:Ew,map_pars_fragment:Mw,map_particle_fragment:vw,map_particle_pars_fragment:Sw,metalnessmap_fragment:Aw,metalnessmap_pars_fragment:bw,morphinstance_vertex:Tw,morphcolor_vertex:Rw,morphnormal_vertex:ww,morphtarget_pars_vertex:Cw,morphtarget_vertex:Iw,normal_fragment_begin:Dw,normal_fragment_maps:Pw,normal_pars_fragment:Nw,normal_pars_vertex:Lw,normal_vertex:Ow,normalmap_pars_fragment:Bw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Hw,iridescence_pars_fragment:zw,opaque_fragment:Gw,packing:kw,premultiplied_alpha_fragment:Vw,project_vertex:Ww,dithering_fragment:Xw,dithering_pars_fragment:qw,roughnessmap_fragment:Yw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Kw,shadowmap_vertex:jw,shadowmask_pars_fragment:$w,skinbase_vertex:Qw,skinning_pars_vertex:e1,skinning_vertex:t1,skinnormal_vertex:n1,specularmap_fragment:i1,specularmap_pars_fragment:s1,tonemapping_fragment:r1,tonemapping_pars_fragment:o1,transmission_fragment:a1,transmission_pars_fragment:c1,uv_pars_fragment:l1,uv_pars_vertex:u1,uv_vertex:h1,worldpos_vertex:d1,background_vert:f1,background_frag:p1,backgroundCube_vert:m1,backgroundCube_frag:g1,cube_vert:_1,cube_frag:x1,depth_vert:y1,depth_frag:E1,distance_vert:M1,distance_frag:v1,equirect_vert:S1,equirect_frag:A1,linedashed_vert:b1,linedashed_frag:T1,meshbasic_vert:R1,meshbasic_frag:w1,meshlambert_vert:C1,meshlambert_frag:I1,meshmatcap_vert:D1,meshmatcap_frag:P1,meshnormal_vert:N1,meshnormal_frag:L1,meshphong_vert:O1,meshphong_frag:B1,meshphysical_vert:F1,meshphysical_frag:U1,meshtoon_vert:H1,meshtoon_frag:z1,points_vert:G1,points_frag:k1,shadow_vert:V1,shadow_frag:W1,sprite_vert:X1,sprite_frag:q1},de={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ss={basic:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:gn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:gn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new re(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:gn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:gn([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:gn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:gn([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:gn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:gn([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:gn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:gn([de.lights,de.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ss.physical={uniforms:gn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var jd={r:0,b:0,g:0},Y1=new ze,RM=new ke;RM.set(-1,0,0,0,1,0,0,0,1);function J1(n,e,t,i,s,r){let o=new re(0),a=s===!0?0:1,c,l,u=null,h=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let E=M.backgroundBlurriness>0;T=e.get(T,E)}return T}function m(M){let T=!1,E=f(M);E===null?g(o,a):E&&E.isColor&&(g(E,1),T=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,T){let E=f(T);E&&(E.isCubeTexture||E.mapping===il)?(l===void 0&&(l=new Be(new ji(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:to(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(RM),l.material.toneMapped=je.getTransfer(E.colorSpace)!==gt,(u!==E||h!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new ui(2,2),new sn({name:"BackgroundMaterial",uniforms:to(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,T){M.getRGB(jd,Fg(n)),t.buffers.color.setClear(jd.r,jd.g,jd.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Z1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(L,B,z,P,k){let J=!1,Z=h(L,P,z,B);r!==Z&&(r=Z,l(r.object)),J=f(L,P,z,k),J&&m(L,P,z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(L,B,z,P),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function h(L,B,z,P){let k=P.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let Z=L.isInstancedMesh===!0?L.id:0,ie=J[Z];ie===void 0&&(ie={},J[Z]=ie);let X=ie[z.id];X===void 0&&(X={},ie[z.id]=X);let Q=X[k];return Q===void 0&&(Q=d(c()),X[k]=Q),Q}function d(L){let B=[],z=[],P=[];for(let k=0;k<t;k++)B[k]=0,z[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,B,z,P){let k=r.attributes,J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=k[X],Ne=J[X];if(Ne===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ne=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ne=L.instanceColor)),te===void 0||te.attribute!==Ne||Ne&&te.data!==Ne.data)return!0;Z++}return r.attributesNum!==Z||r.index!==P}function m(L,B,z,P){let k={},J=B.attributes,Z=0,ie=z.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=J[X];te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let Ne={};Ne.attribute=te,te&&te.data&&(Ne.data=te.data),k[X]=Ne,Z++}r.attributes=k,r.attributesNum=Z,r.index=P}function x(){let L=r.newAttributes;for(let B=0,z=L.length;B<z;B++)L[B]=0}function g(L){p(L,0)}function p(L,B){let z=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;z[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),k[L]!==B&&(n.vertexAttribDivisor(L,B),k[L]=B)}function M(){let L=r.newAttributes,B=r.enabledAttributes;for(let z=0,P=B.length;z<P;z++)B[z]!==L[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function T(L,B,z,P,k,J,Z){Z===!0?n.vertexAttribIPointer(L,B,z,k,J):n.vertexAttribPointer(L,B,z,P,k,J)}function E(L,B,z,P){x();let k=P.attributes,J=z.getAttributes(),Z=B.defaultAttributeValues;for(let ie in J){let X=J[ie];if(X.location>=0){let Q=k[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let te=Q.normalized,Ne=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;let Tt=Ce.buffer,rt=Ce.type,ht=Ce.bytesPerElement,q=rt===n.INT||rt===n.UNSIGNED_INT||Q.gpuType===ud;if(Q.isInterleavedBufferAttribute){let $=Q.data,Ee=$.stride,We=Q.offset;if($.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,$.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xe=0;xe<X.locationSize;xe++)g(X.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let xe=0;xe<X.locationSize;xe++)T(X.location+xe,Ne/X.locationSize,rt,te,Ee*ht,(We+Ne/X.locationSize*xe)*ht,q)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)p(X.location+$,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<X.locationSize;$++)g(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let $=0;$<X.locationSize;$++)T(X.location+$,Ne/X.locationSize,rt,te,Ne*ht,Ne/X.locationSize*$*ht,q)}}else if(Z!==void 0){let te=Z[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}M()}function S(){b();for(let L in i){let B=i[L];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let z in B){let P=B[z];for(let k in P){let J=P[k];for(let Z in J)u(J[Z].object),delete J[Z];delete P[k]}}delete i[L.id]}function R(L){for(let B in i){let z=i[B];for(let P in z){let k=z[P];if(k[L.id]===void 0)continue;let J=k[L.id];for(let Z in J)u(J[Z].object),delete J[Z];delete k[L.id]}}}function y(L){for(let B in i){let z=i[B],P=L.isInstancedMesh===!0?L.id:0,k=z[P];if(k!==void 0){for(let J in k){let Z=k[J];for(let ie in Z)u(Z[ie].object),delete Z[ie];delete k[J]}delete z[P],Object.keys(z).length===0&&delete i[B]}}}function b(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function K1(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function j1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&R!==Zn&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:E,maxSamples:S,samples:A}}function $1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new vi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let M=r?0:i,T=M*4,E=p.clippingState||null;c.value=E,E=u(m,d,T,f);for(let S=0;S!==T;++S)E[S]=t[S];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,E=f;T!==x;++T,E+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var ma=4,Q1=6,eC=20,tC=256,hl=new hr,rM=new re,Gg=null,kg=0,Vg=0,Wg=!1,nC=new I,no=new I,Qd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=nC}=r;Gg=this._renderer.getRenderTarget(),kg=this._renderer.getActiveCubeFace(),Vg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gg,kg,Vg),this._renderer.xr.enabled=Wg,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gg=this._renderer.getRenderTarget(),kg=this._renderer.getActiveCubeFace(),Vg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Li,format:Tn,colorSpace:bn,depthBuffer:!1},s=oM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oM(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iC(r)),this._blurMaterial=rC(r,e,t),this._ggxMaterial=sC(r,e,t)}return s}_compileMaterial(e){let t=new Be(new lt,e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,s,r){let c=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(rM),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new ji,new Ot({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(rM),p=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let S=this._cubeSize;pa(s,E*S,T>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===dr||e.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aM());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;pa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,hl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-ma?i-m+ma:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,pa(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,hl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,pa(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,hl)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ma?s-this._lodMax+ma:0),d=4*(this._cubeSize-u);pa(t,h,d,3*u,2*u),o.setRenderTarget(t),o.render(c,hl)}};function iC(n){let e=[],t=[],i=n,s=n-ma+1+Q1;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,m=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let p=0;p<h;p++){let M=p%3*2/3-1,T=p>2?0:-1,E=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(E,f*d*p);for(let S=0;S<d;S++){let A=u[S*2]*2-1,R=u[S*2+1]*2-1;p===0?no.set(1,R,A):p===1?no.set(-A,1,-R):p===2?no.set(-A,R,1):p===3?no.set(-1,R,-A):p===4?no.set(-A,-1,R):no.set(A,R,-1),no.toArray(x,(p*d+S)*f)}}let g=new lt;g.setAttribute("position",new Lt(m,f)),g.setAttribute("outputDirection",new Lt(x,f)),t.push(new Be(g,null)),i>ma&&i--}return{lodMeshes:t,sizeLods:e}}function oM(n,e,t){let i=new Nn(n,e,t);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sC(n,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function rC(n,e,t){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:eC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function aM(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function cM(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function nf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ef=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Uc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ns});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=kt),new nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function oC(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ad||f===cd)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new ef(m.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===ad||f===cd,x=f===dr||f===Qr;if(m||x){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Qd(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new Qd(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===ad?d.mapping=dr:f===cd&&(d.mapping=Qr),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function aC(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Gr("WebGLRenderer: "+i+" extension not supported."),s}}}function cC(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let T=0,E=M.length;T<E;T+=3){let S=M[T+0],A=M[T+1],R=M[T+2];d.push(S,A,A,R,R,S)}}else{let M=m.array;x=m.version;for(let T=0,E=M.length/3-1;T<E;T+=3){let S=T+0,A=T+1,R=T+2;d.push(S,A,A,R,R,S)}}let g=new(m.count>=65535?Nc:Pc)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function lC(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*o,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function uC(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hC(n,e,t){let i=new WeakMap,s=new Et;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let E=a.attributes.position.count*T,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*S*4*h),R=new wc(A,E,S,h);R.type=Zn,R.needsUpdate=!0;let y=T*4;for(let C=0;C<h;C++){let L=g[C],B=p[C],z=M[C],P=E*S*4*C;for(let k=0;k<L.count;k++){let J=k*y;f===!0&&(s.fromBufferAttribute(L,k),A[P+J+0]=s.x,A[P+J+1]=s.y,A[P+J+2]=s.z,A[P+J+3]=0),m===!0&&(s.fromBufferAttribute(B,k),A[P+J+4]=s.x,A[P+J+5]=s.y,A[P+J+6]=s.z,A[P+J+7]=0),x===!0&&(s.fromBufferAttribute(z,k),A[P+J+8]=s.x,A[P+J+9]=s.y,A[P+J+10]=s.z,A[P+J+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new He(E,S)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function dC(n,e,t,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var fC={[xg]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Eg]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[vg]:"AGX_TONE_MAPPING",[Sg]:"NEUTRAL_TONE_MAPPING",[Mg]:"CUSTOM_TONE_MAPPING"};function pC(n,e,t,i,s,r){let o=new Nn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new lt;l.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let u=new Yh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Be(l,u),d=new hr(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,M=[],T=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let A=0;A<M.length;A++){let R=M[A];R.setSize&&R.setSize(E,S)}},this.setEffects=function(E){M=E,T=M.length>0&&M[0].isRenderPass===!0;let S=o.width,A=o.height;M.length>0&&a===null&&(a=new Nn(S,A,{type:Li,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(S,A,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let y=M[R];y.setSize&&y.setSize(S,A)}},this.begin=function(E,S){if(x||E.toneMapping===Di&&M.length===0)return!1;if(p=S,S!==null){let A=S.width,R=S.height;(o.width!==A||o.height!==R)&&this.setSize(A,R)}return T===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Di,!0},this.hasRenderPass=function(){return T},this.end=function(E,S){E.toneMapping=g,x=!0;let A=o,R=a;for(let y=0;y<M.length;y++){let b=M[y];b.enabled!==!1&&(b.render(E,R,A,S),b.needsSwap!==!1&&(A=R,R=R===a?c:a))}if(f!==E.outputColorSpace||m!==E.toneMapping){f=E.outputColorSpace,m=E.toneMapping,u.defines={},je.getTransfer(f)===gt&&(u.defines.SRGB_TRANSFER="");let y=fC[m];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(p),E.render(h,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var wM=new nn,Yg=new ar(1,1),CM=new wc,IM=new kh,DM=new Uc,lM=[],uM=[],hM=new Float32Array(16),dM=new Float32Array(9),fM=new Float32Array(4);function _a(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=lM[s];if(r===void 0&&(r=new Float32Array(s),lM[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sf(n,e){let t=uM[e];t===void 0&&(t=new Int32Array(e),uM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function _C(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function xC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function yC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;fM.set(i),n.uniformMatrix2fv(this.addr,!1,fM),Kt(t,i)}}function EC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;dM.set(i),n.uniformMatrix3fv(this.addr,!1,dM),Kt(t,i)}}function MC(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;hM.set(i),n.uniformMatrix4fv(this.addr,!1,hM),Kt(t,i)}}function vC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function AC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function bC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function TC(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function wC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function CC(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function IC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yg.compareFunction=t.isReversedDepthBuffer()?Kd:Zd,r=Yg):r=wM,t.setTexture2D(e||r,s)}function DC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||IM,s)}function PC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||DM,s)}function NC(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||CM,s)}function LC(n){switch(n){case 5126:return mC;case 35664:return gC;case 35665:return _C;case 35666:return xC;case 35674:return yC;case 35675:return EC;case 35676:return MC;case 5124:case 35670:return vC;case 35667:case 35671:return SC;case 35668:case 35672:return AC;case 35669:case 35673:return bC;case 5125:return TC;case 36294:return RC;case 36295:return wC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return IC;case 35679:case 36299:case 36307:return DC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return NC}}function OC(n,e){n.uniform1fv(this.addr,e)}function BC(n,e){let t=_a(e,this.size,2);n.uniform2fv(this.addr,t)}function FC(n,e){let t=_a(e,this.size,3);n.uniform3fv(this.addr,t)}function UC(n,e){let t=_a(e,this.size,4);n.uniform4fv(this.addr,t)}function HC(n,e){let t=_a(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zC(n,e){let t=_a(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GC(n,e){let t=_a(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kC(n,e){n.uniform1iv(this.addr,e)}function VC(n,e){n.uniform2iv(this.addr,e)}function WC(n,e){n.uniform3iv(this.addr,e)}function XC(n,e){n.uniform4iv(this.addr,e)}function qC(n,e){n.uniform1uiv(this.addr,e)}function YC(n,e){n.uniform2uiv(this.addr,e)}function JC(n,e){n.uniform3uiv(this.addr,e)}function ZC(n,e){n.uniform4uiv(this.addr,e)}function KC(n,e,t){let i=this.cache,s=e.length,r=sf(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Yg:o=wM;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function jC(n,e,t){let i=this.cache,s=e.length,r=sf(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||IM,r[o])}function $C(n,e,t){let i=this.cache,s=e.length,r=sf(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||DM,r[o])}function QC(n,e,t){let i=this.cache,s=e.length,r=sf(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||CM,r[o])}function eI(n){switch(n){case 5126:return OC;case 35664:return BC;case 35665:return FC;case 35666:return UC;case 35674:return HC;case 35675:return zC;case 35676:return GC;case 5124:case 35670:return kC;case 35667:case 35671:return VC;case 35668:case 35672:return WC;case 35669:case 35673:return XC;case 5125:return qC;case 36294:return YC;case 36295:return JC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return QC}}var Jg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LC(t.type)}},Zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eI(t.type)}},Kg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Xg=/(\w+)(\])?(\[|\.)?/g;function pM(n,e){n.seq.push(e),n.map[e.id]=e}function tI(n,e,t){let i=n.name,s=i.length;for(Xg.lastIndex=0;;){let r=Xg.exec(i),o=Xg.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pM(t,l===void 0?new Jg(a,n,e):new Zg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Kg(a),pM(t,h)),t=h}}}var ga=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);tI(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function mM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nI=37297,iI=0;function sI(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var gM=new ke;function rI(n){je._getMatrix(gM,je.workingColorSpace,n);let e=`mat3( ${gM.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Tc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _M(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sI(n.getShaderSource(e),a)}else return r}function oI(n,e){let t=rI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var aI={[xg]:"Linear",[yg]:"Reinhard",[Eg]:"Cineon",[nl]:"ACESFilmic",[vg]:"AgX",[Sg]:"Neutral",[Mg]:"Custom"};function cI(n,e){let t=aI[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $d=new I;function lI(){je.getLuminanceCoefficients($d);let n=$d.x.toFixed(4),e=$d.y.toFixed(4),t=$d.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function hI(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dI(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fl(n){return n!==""}function xM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fI=/^[ \t]*#include +<([\w\d./]+)>/gm;function jg(n){return n.replace(fI,mI)}var pI=new Map;function mI(n,e){let t=Ke[e];if(t===void 0){let i=pI.get(e);if(i!==void 0)t=Ke[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jg(t)}var gI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EM(n){return n.replace(gI,_I)}function _I(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function MM(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var xI={[el]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function yI(n){return xI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EI={[dr]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE_UV"};function MI(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":EI[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var vI={[Qr]:"ENVMAP_MODE_REFRACTION"};function SI(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vI[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AI={[_g]:"ENVMAP_BLENDING_MULTIPLY",[OE]:"ENVMAP_BLENDING_MIX",[BE]:"ENVMAP_BLENDING_ADD"};function bI(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":AI[n.combine]||"ENVMAP_BLENDING_NONE"}function TI(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RI(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yI(t),l=MI(t),u=SI(t),h=bI(t),d=TI(t),f=uI(t),m=hI(r),x=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fl).join(`
`),p.length>0&&(p+=`
`)):(g=[MM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),p=[MM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Di?cI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,oI("linearToOutputTexel",t.outputColorSpace),lI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),o=jg(o),o=xM(o,t),o=yM(o,t),a=jg(a),a=xM(a,t),a=yM(a,t),o=EM(o),a=EM(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,E=M+p+a,S=mM(s,s.VERTEX_SHADER,T),A=mM(s,s.FRAGMENT_SHADER,E);s.attachShader(x,S),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(A)||"",k=B.trim(),J=z.trim(),Z=P.trim(),ie=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,A);else{let Q=_M(s,S,"vertex"),te=_M(s,A,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+te)}else k!==""?Ae("WebGLProgram: Program Info Log:",k):(J===""||Z==="")&&(X=!1);X&&(L.diagnostics={runnable:ie,programLog:k,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(S),s.deleteShader(A),y=new ga(s,x),b=dI(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,nI)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iI++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}var wI=0,$g=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qg(e),t.set(e,i)),i}},Qg=class{constructor(e){this.id=wI++,this.code=e,this.usedTimes=0}};function CI(n){return n===pr||n===cl||n===ll}function II(n,e,t,i,s,r){let o=new Cc,a=new $g,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,b,C,L,B,z){let P=L.fog,k=B.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ie=e.get(y.envMap||J,Z),X=ie&&ie.mapping===il?ie.image.height:null,Q=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ae("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ne=te!==void 0?te.length:0,Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let Tt,rt,ht,q;if(Q){let wt=ss[Q];Tt=wt.vertexShader,rt=wt.fragmentShader}else{Tt=y.vertexShader,rt=y.fragmentShader;let wt=a.getVertexShaderStage(y),pt=a.getFragmentShaderStage(y);a.update(y,wt,pt),ht=wt.id,q=pt.id}let $=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),We=B.isInstancedMesh===!0,xe=B.isBatchedMesh===!0,Qe=!!y.map,Jt=!!y.matcap,tt=!!ie,ct=!!y.aoMap,Rt=!!y.lightMap,st=!!y.bumpMap&&y.wireframe===!1,Nt=!!y.normalMap,Qt=!!y.displacementMap,Pn=!!y.emissiveMap,Bt=!!y.metalnessMap,Wt=!!y.roughnessMap,O=y.anisotropy>0,hn=y.clearcoat>0,xt=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,F=y.sheen>0,G=y.transmission>0,W=O&&!!y.anisotropyMap,se=hn&&!!y.clearcoatMap,oe=hn&&!!y.clearcoatNormalMap,Y=hn&&!!y.clearcoatRoughnessMap,j=_&&!!y.iridescenceMap,ae=_&&!!y.iridescenceThicknessMap,Re=F&&!!y.sheenColorMap,he=F&&!!y.sheenRoughnessMap,ce=!!y.specularMap,we=!!y.specularColorMap,Le=!!y.specularIntensityMap,qe=G&&!!y.transmissionMap,N=G&&!!y.thicknessMap,le=!!y.gradientMap,K=!!y.alphaMap,ue=y.alphaTest>0,me=!!y.alphaHash,ee=!!y.extensions,Ie=Di;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Se={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Tt,fragmentShader:rt,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:Jt,envMap:tt,envMapMode:tt&&ie.mapping,envMapCubeUVHeight:X,aoMap:ct,lightMap:Rt,bumpMap:st,normalMap:Nt,displacementMap:Qt,emissiveMap:Pn,normalMapObjectSpace:Nt&&y.normalMapType===VE,normalMapTangentSpace:Nt&&y.normalMapType===Jd,packedNormalMap:Nt&&y.normalMapType===Jd&&CI(y.normalMap.format),metalnessMap:Bt,roughnessMap:Wt,anisotropy:O,anisotropyMap:W,clearcoat:hn,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Y,dispersion:xt,retroreflection:w,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:F,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:ce,specularColorMap:we,specularIntensityMap:Le,transmission:G,transmissionMap:qe,thicknessMap:N,gradientMap:le,opaque:y.transparent===!1&&y.blending===la&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:me,combine:y.combine,mapUv:Qe&&m(y.map.channel),aoMapUv:ct&&m(y.aoMap.channel),lightMapUv:Rt&&m(y.lightMap.channel),bumpMapUv:st&&m(y.bumpMap.channel),normalMapUv:Nt&&m(y.normalMap.channel),displacementMapUv:Qt&&m(y.displacementMap.channel),emissiveMapUv:Pn&&m(y.emissiveMap.channel),metalnessMapUv:Bt&&m(y.metalnessMap.channel),roughnessMapUv:Wt&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:se&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(y.sheenRoughnessMap.channel),specularMapUv:ce&&m(y.specularMap.channel),specularColorMapUv:we&&m(y.specularColorMap.channel),specularIntensityMapUv:Le&&m(y.specularIntensityMap.channel),transmissionMapUv:qe&&m(y.transmissionMap.channel),thicknessMapUv:N&&m(y.thicknessMap.channel),alphaMapUv:K&&m(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Nt||O),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Qe||K),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Nt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ce,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Pn&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_t,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&y.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function g(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let b=f[y.type],C;if(b){let L=ss[b];C=nM.clone(L.uniforms)}else C=y.uniforms;return C}function E(y,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new RI(n,b,y,s),l.push(C),u.set(b,C)),C}function S(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:R}}function DI(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function PI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function SM(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function c(d,f,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(d,f,m,x,g,p);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):t.push(T)}function l(d,f,m,x,g,p){let M=a(d,f,m,x,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||PI),i.length>1&&i.sort(f||vM),s.length>1&&s.sort(f||vM)}function h(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function NI(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new SM,n.set(i,[o])):s>=r.length?(o=new SM,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LI(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new re};break;case"SpotLight":t={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function OI(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var BI=0;function FI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UI(n){let e=new LI,t=OI(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new ze,o=new ze;function a(l){let u=0,h=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,T=0,E=0,S=0,A=0,R=0,y=0,b=0,C=0;l.sort(FI);for(let B=0,z=l.length;B<z;B++){let P=l[B],k=P.color,J=P.intensity,Z=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pr?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*J,h+=k.g*J,d+=k.b*J;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],J);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=ie;let Ne=Q.getViewportCount();for(let Ce=0;Ce<Ne;Ce++)i.sunShadowMatrix[x+Ce]=Q.getMatrix(Ce),i.sunShadowCascade[x+Ce]=Q._cascadeData[Ce];x+=Ne,m++}i.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=X,g++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(J),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[M]=X;let Q=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,Q.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[M]=Q.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=ie,R++}M++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(k).multiplyScalar(J),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=P.shadow.matrix,A++}i.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(J),X.groundColor.copy(P.groundColor).multiplyScalar(J),i.hemi[E]=X,E++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==E||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==A||L.numSpotShadows!==R||L.numSpotMaps!==y||L.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=E,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=A,L.numSpotShadows=R,L.numSpotMaps=y,L.numLightProbes=C,i.version=BI++)}function c(l,u){let h=0,d=0,f=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let E=l[M];if(E.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),h++}else if(E.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(E.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function AM(n){let e=new UI(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function HI(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new AM(n),e.set(s,[a])):r>=o.length?(a=new AM(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GI=`uniform sampler2D shadow_pass;
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
}`,kI=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],VI=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],bM=new ze,dl=new I,qg=new I;function WI(n,e,t){let i=new na,s=new He,r=new He,o=new Et,a=new Jh,c=new Zh,l={},u=t.maxTextureSize,h={[ts]:on,[on]:ts,[_t]:_t},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:zI,fragmentShader:GI}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let p=this.type;this.render=function(A,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===od&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=el);let b=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ns),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=A.length;P<k;P++){let J=A[P],Z=J.shadow;if(Z===void 0){Ae("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ie=Z.getFrameExtents();s.multiply(ie),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,Z.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ca){if(J.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Nn(s.x,s.y,{format:pr,type:Li,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new ar(s.x,s.y,Zn),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Ki,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Gt,Z.map.depthTexture.magFilter=Gt}else J.isPointLight?(Z.map=new ef(s.x),Z.map.depthTexture=new Xh(s.x,Ni)):(Z.map=new Nn(s.x,s.y),Z.map.depthTexture=new ar(s.x,s.y,Ni)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Ki,this.type===el?(Z.map.depthTexture.compareFunction=X?Kd:Zd,Z.map.depthTexture.minFilter=kt,Z.map.depthTexture.magFilter=kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Gt,Z.map.depthTexture.magFilter=Gt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,y);for(let te=0;te<Q;te++){let Ne=Z.getCamera(te);if(J.isPointLight){let Ce=Z.camera,Tt=Z.matrix,rt=J.distance||Ce.far;rt!==Ce.far&&(Ce.far=rt,Ce.updateProjectionMatrix()),dl.setFromMatrixPosition(J.matrixWorld),Ce.position.copy(dl),qg.copy(Ce.position),qg.add(kI[te]),Ce.up.copy(VI[te]),Ce.lookAt(qg),Ce.updateMatrixWorld(),Tt.makeTranslation(-dl.x,-dl.y,-dl.z),bM.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(bM,Ce.coordinateSystem,Ce.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,te),n.clear();else{te===0&&(n.setRenderTarget(Z.map),n.clear());let Ce=Z.getViewport(te);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(o)}i=Z.getFrustum(te),E(R,y,Ne,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ca&&M(Z,y),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,C,L)};function M(A,R){let y=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Nn(s.x,s.y,{format:pr,type:Li}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,y,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,y,f,x,null)}function T(A,R,y,b){let C=null,L=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)C=L;else if(C=y.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=C.uuid,z=R.uuid,P=l[B];P===void 0&&(P={},l[B]=P);let k=P[z];k===void 0&&(k=C.clone(),P[z]=k,R.addEventListener("dispose",S)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,b===ca?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=y}return C}function E(A,R,y,b,C){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===ca)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let z=e.update(A),P=A.material;if(Array.isArray(P)){let k=z.groups;for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=P[ie.materialIndex];if(X&&X.visible){let Q=T(A,X,b,C);A.onBeforeShadow(n,A,R,y,z,Q,ie),n.renderBufferDirect(y,null,z,Q,A,ie),A.onAfterShadow(n,A,R,y,z,Q,ie)}}}else if(P.visible){let k=T(A,P,b,C);A.onBeforeShadow(n,A,R,y,z,k,null),n.renderBufferDirect(y,null,z,k,A,null),A.onAfterShadow(n,A,R,y,z,k,null)}}let B=A.children;for(let z=0,P=B.length;z<P;z++)E(B[z],R,y,b,C)}function S(A){A.target.removeEventListener("dispose",S);for(let y in l){let b=l[y],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function XI(n,e){function t(){let N=!1,le=new Et,K=null,ue=new Et(0,0,0,0);return{setMask:function(me){K!==me&&!N&&(n.colorMask(me,me,me,me),K=me)},setLocked:function(me){N=me},setClear:function(me,ee,Ie,Se,wt){wt===!0&&(me*=Se,ee*=Se,Ie*=Se),le.set(me,ee,Ie,Se),ue.equals(le)===!1&&(n.clearColor(me,ee,Ie,Se),ue.copy(le))},reset:function(){N=!1,K=null,ue.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,K=null,ue=null,me=null;return{setReversed:function(ee){if(le!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let Se=me;me=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(ee){ee?$(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ee){K!==ee&&!N&&(n.depthMask(ee),K=ee)},setFunc:function(ee){if(le&&(ee=eM[ee]),ue!==ee){switch(ee){case Nh:n.depthFunc(n.NEVER);break;case Lh:n.depthFunc(n.ALWAYS);break;case Oh:n.depthFunc(n.LESS);break;case qo:n.depthFunc(n.LEQUAL);break;case Bh:n.depthFunc(n.EQUAL);break;case Fh:n.depthFunc(n.GEQUAL);break;case Uh:n.depthFunc(n.GREATER);break;case Hh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ee}},setLocked:function(ee){N=ee},setClear:function(ee){me!==ee&&(me=ee,le&&(ee=1-ee),n.clearDepth(ee))},reset:function(){N=!1,K=null,ue=null,me=null,le=!1}}}function s(){let N=!1,le=null,K=null,ue=null,me=null,ee=null,Ie=null,Se=null,wt=null;return{setTest:function(pt){N||(pt?$(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(pt){le!==pt&&!N&&(n.stencilMask(pt),le=pt)},setFunc:function(pt,xi,qi){(K!==pt||ue!==xi||me!==qi)&&(n.stencilFunc(pt,xi,qi),K=pt,ue=xi,me=qi)},setOp:function(pt,xi,qi){(ee!==pt||Ie!==xi||Se!==qi)&&(n.stencilOp(pt,xi,qi),ee=pt,Ie=xi,Se=qi)},setLocked:function(pt){N=pt},setClear:function(pt){wt!==pt&&(n.clearStencil(pt),wt=pt)},reset:function(){N=!1,le=null,K=null,ue=null,me=null,ee=null,Ie=null,Se=null,wt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,R=null,y=new re(0,0,0),b=0,C=!1,L=null,B=null,z=null,P=null,k=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ie>=2);let Q=null,te={},Ne=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Tt=new Et().fromArray(Ne),rt=new Et().fromArray(Ce);function ht(N,le,K,ue){let me=new Uint8Array(4),ee=n.createTexture();n.bindTexture(N,ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<K;Ie++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(le+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ee}let q={};q[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(qo),st(!1),Nt(dg),$(n.CULL_FACE),ct(ns);function $(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ee(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function We(N,le){return d[N]!==le?(n.bindFramebuffer(N,le),d[N]=le,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(N,le){let K=m,ue=!1;if(N){K=f.get(le),K===void 0&&(K=[],f.set(le,K));let me=N.textures;if(K.length!==me.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ie=me.length;ee<Ie;ee++)K[ee]=n.COLOR_ATTACHMENT0+ee;K.length=me.length,ue=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ue=!0);ue&&n.drawBuffers(K)}function Qe(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let Jt={[$r]:n.FUNC_ADD,[xE]:n.FUNC_SUBTRACT,[yE]:n.FUNC_REVERSE_SUBTRACT};Jt[EE]=n.MIN,Jt[ME]=n.MAX;let tt={[vE]:n.ZERO,[SE]:n.ONE,[AE]:n.SRC_COLOR,[mg]:n.SRC_ALPHA,[IE]:n.SRC_ALPHA_SATURATE,[wE]:n.DST_COLOR,[TE]:n.DST_ALPHA,[bE]:n.ONE_MINUS_SRC_COLOR,[gg]:n.ONE_MINUS_SRC_ALPHA,[CE]:n.ONE_MINUS_DST_COLOR,[RE]:n.ONE_MINUS_DST_ALPHA,[DE]:n.CONSTANT_COLOR,[PE]:n.ONE_MINUS_CONSTANT_COLOR,[NE]:n.CONSTANT_ALPHA,[LE]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(N,le,K,ue,me,ee,Ie,Se,wt,pt){if(N===ns){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&($(n.BLEND),g=!0),N!==_E){if(N!==p||pt!==C){if((M!==$r||S!==$r)&&(n.blendEquation(n.FUNC_ADD),M=$r,S=$r),pt)switch(N){case la:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFunc(n.ONE,n.ONE);break;case fg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",N);break}else switch(N){case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fg:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pg:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",N);break}T=null,E=null,A=null,R=null,y.set(0,0,0),b=0,p=N,C=pt}return}me=me||le,ee=ee||K,Ie=Ie||ue,(le!==M||me!==S)&&(n.blendEquationSeparate(Jt[le],Jt[me]),M=le,S=me),(K!==T||ue!==E||ee!==A||Ie!==R)&&(n.blendFuncSeparate(tt[K],tt[ue],tt[ee],tt[Ie]),T=K,E=ue,A=ee,R=Ie),(Se.equals(y)===!1||wt!==b)&&(n.blendColor(Se.r,Se.g,Se.b,wt),y.copy(Se),b=wt),p=N,C=!1}function Rt(N,le){N.side===_t?Ee(n.CULL_FACE):$(n.CULL_FACE);let K=N.side===on;le&&(K=!K),st(K),N.blending===la&&N.transparent===!1?ct(ns):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ue=N.stencilWrite;a.setTest(ue),ue&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Pn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Nt(N){N!==mE?($(n.CULL_FACE),N!==B&&(N===dg?n.cullFace(n.BACK):N===gE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),B=N}function Qt(N){N!==z&&(Z&&n.lineWidth(N),z=N)}function Pn(N,le,K){N?($(n.POLYGON_OFFSET_FILL),(P!==le||k!==K)&&(P=le,k=K,o.getReversed()&&(le=-le),n.polygonOffset(le,K))):Ee(n.POLYGON_OFFSET_FILL)}function Bt(N){N?$(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=n.TEXTURE0+J-1),Q!==N&&(n.activeTexture(N),Q=N)}function O(N,le,K){K===void 0&&(Q===null?K=n.TEXTURE0+J-1:K=Q);let ue=te[K];ue===void 0&&(ue={type:void 0,texture:void 0},te[K]=ue),(ue.type!==N||ue.texture!==le)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(N,le||q[N]),ue.type=N,ue.texture=le)}function hn(){let N=te[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function _(){try{n.texSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function F(){try{n.texSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function se(){try{n.texStorage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function oe(){try{n.texStorage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Y(){try{n.texImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function j(){try{n.texImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function ae(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function Re(N,le){h[N]!==le&&(n.pixelStorei(N,le),h[N]=le)}function he(N){Tt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Tt.copy(N))}function ce(N){rt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function we(N,le){let K=l.get(le);K===void 0&&(K=new WeakMap,l.set(le,K));let ue=K.get(N);ue===void 0&&(ue=n.getUniformBlockIndex(le,N.name),K.set(N,ue))}function Le(N,le){let ue=l.get(le).get(N);c.get(le)!==ue&&(n.uniformBlockBinding(le,ue,N.__bindingPointIndex),c.set(le,ue))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,te={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,T=null,E=null,S=null,A=null,R=null,y=new re(0,0,0),b=0,C=!1,L=null,B=null,z=null,P=null,k=null,Tt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:Ee,bindFramebuffer:We,drawBuffers:xe,useProgram:Qe,setBlending:ct,setMaterial:Rt,setFlipSided:st,setCullFace:Nt,setLineWidth:Qt,setPolygonOffset:Pn,setScissorTest:Bt,activeTexture:Wt,bindTexture:O,unbindTexture:hn,compressedTexImage2D:xt,compressedTexImage3D:w,texImage2D:Y,texImage3D:j,pixelStorei:Re,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:he,viewport:ce,reset:qe}}function qI(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return m?new OffscreenCanvas(w,_):Zo("canvas")}function g(w,_,F){let G=1,W=xt(w);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(G*W.width),oe=Math.floor(G*W.height);d===void 0&&(d=x(se,oe));let Y=_?x(se,oe):d;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(w,0,0,se,oe),Ae("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+oe+")."),Y}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function M(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,_,F,G,W,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),F===n.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),F===n.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),F===n.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let j=se?Tc:je.getTransfer(W);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=j===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),F===n.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(w,_){let F;return w?_===null||_===Ni||_===da?F=n.DEPTH24_STENCIL8:_===Zn?F=n.DEPTH32F_STENCIL8:_===ha&&(F=n.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===da?F=n.DEPTH_COMPONENT24:_===Zn?F=n.DEPTH_COMPONENT32F:_===ha&&(F=n.DEPTH_COMPONENT16),F}function A(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),L(_)}function b(w){let _=i.get(w);if(_.__webglInit===void 0)return;let F=w.source,G=f.get(F);if(G){let W=G[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(G).length===0&&f.delete(F)}i.remove(w)}function C(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let F=w.source,G=f.get(F);delete G[_.__cacheKey],o.memory.textures--}function L(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let W=0;W<_.__webglFramebuffer[G].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[G][W]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=w.textures;for(let G=0,W=F.length;G<W;G++){let se=i.get(F[G]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(w)}let B=0;function z(){B=0}function P(){return B}function k(w){B=w}function J(){let w=B;return w>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,w}function Z(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ie(w,_){let F=i.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let G=w.image;if(G===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(w,_){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ee(F,w,_);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Q(w,_){let F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ee(F,w,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function te(w,_){let F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){We(F,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let Ne={[Ti]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},Ce={[Gt]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Tt={[XE]:n.NEVER,[KE]:n.ALWAYS,[qE]:n.LESS,[Zd]:n.LEQUAL,[YE]:n.EQUAL,[Kd]:n.GEQUAL,[JE]:n.GREATER,[ZE]:n.NOTEQUAL};function rt(w,_){if(_.type===Zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===ua||_.magFilter===eo||_.magFilter===Pi||_.minFilter===kt||_.minFilter===ua||_.minFilter===eo||_.minFilter===Pi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ne[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ne[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ne[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ce[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ce[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==eo&&_.minFilter!==Pi||_.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ht(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let G=_.source,W=f.get(G);W===void 0&&(W={},f.set(G,W));let se=Z(_);if(se!==w.__cacheKey){W[se]===void 0&&(W[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[se].usedTimes++;let oe=W[w.__cacheKey];oe!==void 0&&(W[w.__cacheKey].usedTimes--,oe.usedTimes===0&&C(_)),w.__cacheKey=se,w.__webglTexture=W[se].texture}return F}function q(w,_,F){return Math.floor(Math.floor(w/F)/_)}function $(w,_,F,G){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{se.sort((Re,he)=>Re.start-he.start);let oe=0;for(let Re=1;Re<se.length;Re++){let he=se[oe],ce=se[Re],we=he.start+he.count,Le=q(ce.start,_.width,4),qe=q(he.start,_.width,4);ce.start<=we+1&&Le===qe&&q(ce.start+ce.count-1,_.width,4)===Le?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++oe,se[oe]=ce)}se.length=oe+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Re=0,he=se.length;Re<he;Re++){let ce=se[Re],we=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),qe=we%_.width,N=Math.floor(we/_.width),le=Le,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,qe,N,le,K,F,G,_.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function Ee(w,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let W=ht(w,_),se=_.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);let oe=i.get(se);if(se.version!==oe.__version||W===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=je.getPrimaries(je.workingColorSpace),ue=_.colorSpace===Oi?null:je.getPrimaries(_.colorSpace),me=_.colorSpace===Oi||K===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,s.maxTextureSize);j=hn(_,j);let ae=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),he=E(_.internalFormat,ae,Re,_.normalized,_.colorSpace,_.isVideoTexture);rt(G,_);let ce,we=_.mipmaps,Le=_.isVideoTexture!==!0,qe=oe.__version===void 0||W===!0,N=se.dataReady,le=A(_,j);if(_.isDepthTexture)he=S(_.format===fr,_.type),qe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,he,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ae,Re,null));else if(_.isDataTexture)if(we.length>0){Le&&qe&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let K=0,ue=we.length;K<ue;K++)ce=we[K],Le?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,Re,ce.data):t.texImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ae,Re,ce.data);_.generateMipmaps=!1}else Le?(qe&&t.texStorage2D(n.TEXTURE_2D,le,he,j.width,j.height),N&&$(_,j,ae,Re)):t.texImage2D(n.TEXTURE_2D,0,he,j.width,j.height,0,ae,Re,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,we[0].width,we[0].height,j.depth);for(let K=0,ue=we.length;K<ue;K++)if(ce=we[K],_.format!==Tn)if(ae!==null)if(Le){if(N)if(_.layerUpdates.size>0){let me=zg(ce.width,ce.height,_.format,_.type);for(let ee of _.layerUpdates){let Ie=ce.data.subarray(ee*me/ce.data.BYTES_PER_ELEMENT,(ee+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ee,ce.width,ce.height,1,ae,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,j.depth,ae,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,he,ce.width,ce.height,j.depth,0,ce.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,j.depth,ae,Re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,he,ce.width,ce.height,j.depth,0,ae,Re,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&qe&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let K=0,ue=we.length;K<ue;K++)ce=we[K],_.format!==Tn?ae!==null?Le?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce.width,ce.height,ae,Re,ce.data):t.texImage2D(n.TEXTURE_2D,K,he,ce.width,ce.height,0,ae,Re,ce.data)}else if(_.isDataArrayTexture)if(Le){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,j.width,j.height,j.depth),N)if(_.layerUpdates.size>0){let K=zg(j.width,j.height,_.format,_.type);for(let ue of _.layerUpdates){let me=j.data.subarray(ue*K/j.data.BYTES_PER_ELEMENT,(ue+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,j.width,j.height,1,ae,Re,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,j.width,j.height,j.depth,0,ae,Re,j.data);else if(_.isData3DTexture)Le?(qe&&t.texStorage3D(n.TEXTURE_3D,le,he,j.width,j.height,j.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Re,j.data)):t.texImage3D(n.TEXTURE_3D,0,he,j.width,j.height,j.depth,0,ae,Re,j.data);else if(_.isFramebufferTexture){if(qe)if(Le)t.texStorage2D(n.TEXTURE_2D,le,he,j.width,j.height);else{let K=j.width,ue=j.height;for(let me=0;me<le;me++)t.texImage2D(n.TEXTURE_2D,me,he,K,ue,0,ae,Re,null),K>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(_),K.onpaint=ue=>{let me=ue.changedElements;for(let ee of h)me.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let me=n.RGBA,ee=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,ee,Ie,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Le&&qe){let K=xt(we[0]);t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height)}for(let K=0,ue=we.length;K<ue;K++)ce=we[K],Le?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ae,Re,ce):t.texImage2D(n.TEXTURE_2D,K,he,ae,Re,ce);_.generateMipmaps=!1}else if(Le){if(qe){let K=xt(j);t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Re,j)}else t.texImage2D(n.TEXTURE_2D,0,he,ae,Re,j);p(_)&&M(G),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function We(w,_,F){if(_.image.length!==6)return;let G=ht(w,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);let se=i.get(W);if(W.version!==se.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let oe=je.getPrimaries(je.workingColorSpace),Y=_.colorSpace===Oi?null:je.getPrimaries(_.colorSpace),j=_.colorSpace===Oi||oe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ae&&!Re?he[ee]=g(_.image[ee],!0,s.maxCubemapSize):he[ee]=Re?_.image[ee].image:_.image[ee],he[ee]=hn(_,he[ee]);let ce=he[0],we=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),qe=E(_.internalFormat,we,Le,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,le=se.__version===void 0||G===!0,K=W.dataReady,ue=A(_,ce);rt(n.TEXTURE_CUBE_MAP,_);let me;if(ae){N&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,ce.width,ce.height);for(let ee=0;ee<6;ee++){me=he[ee].mipmaps;for(let Ie=0;Ie<me.length;Ie++){let Se=me[Ie];_.format!==Tn?we!==null?N?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,qe,Se.width,Se.height,0,Se.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Se.width,Se.height,we,Le,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,qe,Se.width,Se.height,0,we,Le,Se.data)}}}else{if(me=_.mipmaps,N&&le){me.length>0&&ue++;let ee=xt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Re){N?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,we,Le,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,he[ee].width,he[ee].height,0,we,Le,he[ee].data);for(let Ie=0;Ie<me.length;Ie++){let wt=me[Ie].image[ee].image;N?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,wt.width,wt.height,we,Le,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,qe,wt.width,wt.height,0,we,Le,wt.data)}}else{N?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,Le,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,we,Le,he[ee]);for(let Ie=0;Ie<me.length;Ie++){let Se=me[Ie];N?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,we,Le,Se.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,qe,we,Le,Se.image[ee])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xe(w,_,F,G,W,se){let oe=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),j=E(F.internalFormat,oe,Y,F.normalized,F.colorSpace),ae=i.get(_),Re=i.get(F);if(Re.__renderTarget=_,!ae.__hasExternalTextures){let he=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,se,j,he,ce,_.depth,0,oe,Y,null):t.texImage2D(W,se,j,he,ce,0,oe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,W,Re.__webglTexture,0,Bt(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,W,Re.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(w,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let G=_.depthTexture,W=G&&G.isDepthTexture?G.type:null,se=S(_.stencilBuffer,W),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(_),se,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(_),se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,se,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,w)}else{let G=_.textures;for(let W=0;W<G.length;W++){let se=G[W],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),j=E(se.internalFormat,oe,Y,se.normalized,se.colorSpace);Wt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(_),j,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(w,_,F){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_.depthTexture);let ae=r.convert(_.depthTexture.format),Re=r.convert(_.depthTexture.type),he;_.depthTexture.format===Ki?he=n.DEPTH_COMPONENT24:_.depthTexture.format===fr&&(he=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,_.width,_.height,0,ae,Re,null)}}else ie(_.depthTexture,0);let se=W.__webglTexture,oe=Bt(_),Y=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,j=_.depthTexture.format===fr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ki)Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,se,0);else if(_.depthTexture.format===fr)Wt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(w){let _=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let G=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=G}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Jt(_.__webglFramebuffer[G],w,G);else{let G=w.texture.mipmaps;G&&G.length>0?Jt(_.__webglFramebuffer[0],w,0):Jt(_.__webglFramebuffer,w,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Qe(_.__webglDepthbuffer[G],w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}else{let G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Qe(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(w,_,F){let G=i.get(w);_!==void 0&&xe(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(w)}function Rt(w){let _=w.texture,F=i.get(w),G=i.get(_);w.addEventListener("dispose",y);let W=w.textures,se=w.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,o.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let j=0;j<_.mipmaps.length;j++)F.__webglFramebuffer[Y][j]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Y=0,j=W.length;Y<j;Y++){let ae=i.get(W[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Wt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let j=W[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ae=r.convert(j.format,j.colorSpace),Re=r.convert(j.type),he=E(j.internalFormat,ae,Re,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),ce=Bt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),rt(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xe(F.__webglFramebuffer[Y][j],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else xe(F.__webglFramebuffer[Y],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,j=W.length;Y<j;Y++){let ae=W[Y],Re=i.get(ae),he=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),rt(he,ae),xe(F.__webglFramebuffer,w,ae,n.COLOR_ATTACHMENT0+Y,he,0),p(ae)&&M(he)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),rt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xe(F.__webglFramebuffer[j],w,_,n.COLOR_ATTACHMENT0,Y,j);else xe(F.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,Y,0);p(_)&&M(Y),t.unbindTexture()}w.depthBuffer&&tt(w)}function st(w){let _=w.textures;for(let F=0,G=_.length;F<G;F++){let W=_[F];if(p(W)){let se=T(w),oe=i.get(W).__webglTexture;t.bindTexture(se,oe),M(se),t.unbindTexture()}}}let Nt=[],Qt=[];function Pn(w){if(w.samples>0){if(Wt(w)===!1){let _=w.textures,F=w.width,G=w.height,W=n.COLOR_BUFFER_BIT,se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(w),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Re=i.get(_[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,W,n.NEAREST),c===!0&&(Nt.length=0,Qt.length=0,Nt.push(n.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Nt.push(se),Qt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);let Re=i.get(_[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Bt(w){return Math.min(s.maxSamples,w.samples)}function Wt(w){let _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function hn(w,_){let F=w.colorSpace,G=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==bn&&F!==Oi&&(je.getTransfer(F)===gt?(G!==Tn||W!==Un)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",F)),_}function xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=ct,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YI(n,e){function t(i,s=Oi){let r,o=je.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===hd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wg)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bg)return n.BYTE;if(i===Tg)return n.SHORT;if(i===ha)return n.UNSIGNED_SHORT;if(i===ud)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===Cg)return n.ALPHA;if(i===Ig)return n.RGB;if(i===Tn)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===fd)return n.RED;if(i===pd)return n.RED_INTEGER;if(i===pr)return n.RG;if(i===md)return n.RG_INTEGER;if(i===gd)return n.RGBA_INTEGER;if(i===sl||i===rl||i===ol||i===al)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===xd||i===yd||i===Ed)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_d)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===vd||i===Sd||i===Ad||i===bd||i===cl||i===Td)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Md||i===vd)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ad)return r.COMPRESSED_R11_EAC;if(i===bd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cl)return r.COMPRESSED_RG11_EAC;if(i===Td)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rd||i===wd||i===Cd||i===Id||i===Dd||i===Pd||i===Nd||i===Ld||i===Od||i===Bd||i===Fd||i===Ud||i===Hd||i===zd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===kd||i===Vd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gd)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wd||i===Xd||i===ll||i===qd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var JI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZI=`
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

}`,e0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Hc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:JI,fragmentShader:ZI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},t0=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new e0,p={},M=t.getContextAttributes(),T=null,E=null,S=[],A=[],R=new He,y=null,b=null,C=new Yt;C.viewport=new Et;let L=new Yt;L.viewport=new Et;let B=[C,L],z=new id,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=S[q];return $===void 0&&($=new $o,S[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=S[q];return $===void 0&&($=new $o,S[q]=$),$.getGripSpace()},this.getHand=function(q){let $=S[q];return $===void 0&&($=new $o,S[q]=$),$.getHandSpace()};function J(q){let $=A.indexOf(q.inputSource);if($===-1)return;let Ee=S[$];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,l||o),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<S.length;q++){let $=A[q];$!==null&&(A[q]=null,S[q].disconnect($))}P=null,k=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(T),f=null,d=null,h=null,s=null,E=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,We=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?fr:Ki,We=M.stencil?da:Ni);let Qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Nn(d.textureWidth,d.textureHeight,{format:Tn,type:Un,depthTexture:new ar(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(q){for(let $=0;$<q.removed.length;$++){let Ee=q.removed[$],We=A.indexOf(Ee);We>=0&&(A[We]=null,S[We].disconnect(Ee))}for(let $=0;$<q.added.length;$++){let Ee=q.added[$],We=A.indexOf(Ee);if(We===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=A.length){A.push(Ee),We=Qe;break}else if(A[Qe]===null){A[Qe]=Ee,We=Qe;break}if(We===-1)break}let xe=S[We];xe&&xe.connect(Ee)}}let X=new I,Q=new I;function te(q,$,Ee){X.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);let We=X.distanceTo(Q),xe=$.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Jt=xe[14]/(xe[10]-1),tt=xe[14]/(xe[10]+1),ct=(xe[9]+1)/xe[5],Rt=(xe[9]-1)/xe[5],st=(xe[8]-1)/xe[0],Nt=(Qe[8]+1)/Qe[0],Qt=Jt*st,Pn=Jt*Nt,Bt=We/(-st+Nt),Wt=Bt*-st;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let O=Jt+Bt,hn=tt+Bt,xt=Qt-Wt,w=Pn+(We-Wt),_=ct*tt/hn*O,F=Rt*tt/hn*O;q.projectionMatrix.makePerspective(xt,w,_,F,O,hn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ne(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,Ee=q.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),z.near=L.near=C.near=$,z.far=L.far=C.far=Ee,(P!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,k=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let We=q.parent,xe=z.cameras;Ne(z,We);for(let Qe=0;Qe<xe.length;Qe++)Ne(xe[Qe],We);xe.length===2?te(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Ce(q,z,We)};function Ce(q,$,Ee){Ee===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let Tt=null;function rt(q,$){if(u=$.getViewerPose(l||o),m=$,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let We=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,We=!0);for(let tt=0;tt<Ee.length;tt++){let ct=Ee[tt],Rt=null;if(f!==null)Rt=f.getViewport(ct);else{let Nt=h.getViewSubImage(d,ct);Rt=Nt.viewport,tt===0&&(e.setRenderTargetTextures(E,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(E))}let st=B[tt];st===void 0&&(st=new Yt,st.layers.enable(tt),st.viewport=new Et,B[tt]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),tt===0&&(z.matrix.copy(st.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),We===!0&&z.cameras.push(st)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let tt=h.getDepthInformation(Ee[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let tt=0;tt<Ee.length;tt++){let ct=Ee[tt].camera;if(ct){let Rt=p[ct];Rt||(Rt=new Hc,p[ct]=Rt);let st=h.getCameraImage(ct);Rt.sourceTexture=st}}}}for(let Ee=0;Ee<S.length;Ee++){let We=A[Ee],xe=S[Ee];We!==null&&xe!==void 0&&xe.update(We,$,l||o)}Tt&&Tt(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}let ht=new TM;ht.setAnimationLoop(rt),this.setAnimationLoop=function(q){Tt=q},this.dispose=function(){}}},KI=new ze,PM=new ke;PM.set(-1,0,0,0,1,0,0,0,1);function jI(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Fg(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,T,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,E=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(KI.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(PM),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $I(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let A=S.program;i.uniformBlockBinding(E,A)}function l(E,S){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",M));let R=S.program;i.updateUBOMapping(E,R);let y=e.render.frame;r[E.id]!==y&&(d(E),r[E.id]=y)}function u(E){let S=h();E.__bindingPointIndex=S;let A=n.createBuffer(),R=E.__size,y=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let S=s[E.id],A=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let y=0,b=A.length;y<b;y++){let C=A[y];if(Array.isArray(C))for(let L=0,B=C.length;L<B;L++)f(C[L],y,L,R);else f(C,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,S,A,R){if(x(E,S,A,R)===!0){let y=E.__offset,b=E.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){let B=b[L],z=p(B);m(B,E.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,E.__data)}}function m(E,S,A){typeof E=="number"||typeof E=="boolean"?S[0]=E:E.isMatrix3?(S[0]=E.elements[0],S[1]=E.elements[1],S[2]=E.elements[2],S[3]=0,S[4]=E.elements[3],S[5]=E.elements[4],S[6]=E.elements[5],S[7]=0,S[8]=E.elements[6],S[9]=E.elements[7],S[10]=E.elements[8],S[11]=0):ArrayBuffer.isView(E)?S.set(new E.constructor(E.buffer,E.byteOffset,S.length)):E.toArray(S,A)}function x(E,S,A,R){let y=E.value,b=S+"_"+A;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:ArrayBuffer.isView(y)?R[b]=y.slice():R[b]=y.clone(),!0;{let C=R[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(E){let S=E.uniforms,A=0,R=16;for(let b=0,C=S.length;b<C;b++){let L=Array.isArray(S[b])?S[b]:[S[b]];for(let B=0,z=L.length;B<z;B++){let P=L[B],k=Array.isArray(P.value)?P.value:[P.value];for(let J=0,Z=k.length;J<Z;J++){let ie=k[J],X=p(ie),Q=A%R,te=Q%X.boundary,Ne=Q+te;A+=te,Ne!==0&&R-Ne<X.storage&&(A+=R-Ne),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=X.storage}}}let y=A%R;return y>0&&(A+=R-y),E.__size=A,E.__cache={},this}function p(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",E),S}function M(E){let S=E.target;S.removeEventListener("dispose",M);let A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var QI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function eD(){return is===null&&(is=new or(QI,16,16,pr,Li),is.name="DFG_LUT",is.minFilter=kt,is.magFilter=kt,is.wrapS=li,is.wrapT=li,is.generateMipmaps=!1,is.needsUpdate=!0),is}var tf=class{constructor(e={}){let{canvas:t=jE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,g=new Set([gd,md,pd]),p=new Set([Un,Ni,ha,da,hd,dd]),M=new Uint32Array(4),T=new Int32Array(4),E=new I,S=null,A=null,R=[],y=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,z=null,P=null,k=null;this._outputColorSpace=zt;let J=0,Z=0,ie=null,X=-1,Q=null,te=new Et,Ne=new Et,Ce=null,Tt=new re(0),rt=0,ht=t.width,q=t.height,$=1,Ee=null,We=null,xe=new Et(0,0,ht,q),Qe=new Et(0,0,ht,q),Jt=!1,tt=new na,ct=!1,Rt=!1,st=new ze,Nt=new I,Qt=new Et,Pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Wt(){return ie===null?$:1}let O=i;function hn(v,D){return t.getContext(v,D)}let xt,w,_,F,G,W,se,oe,Y,j,ae,Re,he,ce,we,Le,qe,N,le,K,ue,me,ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",xi,!1),O===null){let D="webgl2";if(O=hn(D,v),O===null)throw hn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(v){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",xi,!1),Ue("WebGLRenderer: "+v.message),v}function Ie(){xt=new aC(O),xt.init(),ue=new YI(O,xt),w=new j1(O,xt,e,ue),_=new XI(O,xt),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),z=O.createFramebuffer(),P=O.createFramebuffer(),k=O.createFramebuffer(),F=new uC(O),G=new DI,W=new qI(O,xt,_,G,w,ue,F),se=new oC(C),oe=new dR(O),me=new Z1(O,oe),Y=new cC(O,oe,F,me),j=new dC(O,Y,oe,me,F),N=new hC(O,w,W),we=new $1(G),ae=new II(C,se,xt,w,me,we),Re=new jI(C,G),he=new NI,ce=new HI(xt),qe=new J1(C,se,_,j,m,c),Le=new WI(C,j,w),ee=new $I(O,F,w,_),le=new K1(O,xt,F),K=new lC(O,xt,F),F.programs=ae.programs,C.capabilities=w,C.extensions=xt,C.properties=G,C.renderLists=he,C.shadowMap=Le,C.state=_,C.info=F}x!==Un&&(b=new pC(x,t.width,t.height,a,s,r));let Se=new t0(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=xt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=xt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(ht,q,!1))},this.getSize=function(v){return v.set(ht,q)},this.setSize=function(v,D,V=!0){if(Se.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=v,q=D,t.width=Math.floor(v*$),t.height=Math.floor(D*$),V===!0&&(t.style.width=v+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(ht*$,q*$).floor()},this.setDrawingBufferSize=function(v,D,V){ht=v,q=D,$=V,t.width=Math.floor(v*V),t.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(x===Un){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(xe)},this.setViewport=function(v,D,V,U){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,D,V,U),_.viewport(te.copy(xe).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(Qe)},this.setScissor=function(v,D,V,U){v.isVector4?Qe.set(v.x,v.y,v.z,v.w):Qe.set(v,D,V,U),_.scissor(Ne.copy(Qe).multiplyScalar($).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){_.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){Ee=v},this.setTransparentSort=function(v){We=v},this.getClearColor=function(v){return v.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let U=0;if(v){let H=!1;if(ie!==null){let pe=ie.texture.format;H=g.has(pe)}if(H){let pe=ie.texture.type,ye=p.has(pe),fe=qe.getClearColor(),Me=qe.getClearAlpha(),be=fe.r,Je=fe.g,nt=fe.b;ye?(M[0]=be,M[1]=Je,M[2]=nt,M[3]=Me,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=be,T[1]=Je,T[2]=nt,T[3]=Me,O.clearBufferiv(O.COLOR,0,T))}else U|=O.COLOR_BUFFER_BIT}D&&(U|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",xi,!1),qe.dispose(),he.dispose(),ce.dispose(),G.dispose(),se.dispose(),j.dispose(),me.dispose(),ee.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",My),Se.removeEventListener("sessionend",vy),Lr.stop()};function wt(v){v.preventDefault(),Rc("WebGLRenderer: Context Lost."),L=!0}function pt(){Rc("WebGLRenderer: Context Restored."),L=!1;let v=F.autoReset,D=Le.enabled,V=Le.autoUpdate,U=Le.needsUpdate,H=Le.type;Ie(),F.autoReset=v,Le.enabled=D,Le.autoUpdate=V,Le.needsUpdate=U,Le.type=H}function xi(v){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function qi(v){let D=v.target;D.removeEventListener("dispose",qi),eT(D)}function eT(v){tT(v),G.remove(v)}function tT(v){let D=G.get(v).programs;D!==void 0&&(D.forEach(function(V){ae.releaseProgram(V)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,V,U,H,pe){D===null&&(D=Pn);let ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,fe=sT(v,D,V,U,H);_.setMaterial(U,ye);let Me=V.index,be=1;if(U.wireframe===!0){if(Me=Y.getWireframeAttribute(V),Me===void 0)return;be=2}let Je=V.drawRange,nt=V.attributes.position,ve=Je.start*be,mt=(Je.start+Je.count)*be;pe!==null&&(ve=Math.max(ve,pe.start*be),mt=Math.min(mt,(pe.start+pe.count)*be)),Me!==null?(ve=Math.max(ve,0),mt=Math.min(mt,Me.count)):nt!=null&&(ve=Math.max(ve,0),mt=Math.min(mt,nt.count));let Xt=mt-ve;if(Xt<0||Xt===1/0)return;me.setup(H,U,fe,V,Me);let Pt,bt=le;if(Me!==null&&(Pt=oe.get(Me),bt=K,bt.setIndex(Pt)),H.isMesh)U.wireframe===!0?(_.setLineWidth(U.wireframeLinewidth*Wt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(H.isLine){let dn=U.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Wt()),H.isLineSegments?bt.setMode(O.LINES):H.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else H.isPoints?bt.setMode(O.POINTS):H.isSprite&&bt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))bt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let dn=H._multiDrawStarts,_e=H._multiDrawCounts,Sn=H._multiDrawCount,at=Me?oe.get(Me).bytesPerElement:1,ai=G.get(U).currentProgram.getUniforms();for(let Yi=0;Yi<Sn;Yi++)ai.setValue(O,"_gl_DrawID",Yi),bt.render(dn[Yi]/at,_e[Yi])}else if(H.isInstancedMesh)bt.renderInstances(ve,Xt,H.count);else if(V.isInstancedBufferGeometry){let dn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_e=Math.min(V.instanceCount,dn);bt.renderInstances(ve,Xt,_e)}else bt.render(ve,Xt)};function Ey(v,D,V,U){B!==null&&v.isNodeMaterial&&B.setObject(U,v),ct===!0&&we.setState(v,V,!1),v.transparent===!0&&v.side===_t&&v.forceSinglePass===!1?(v.side=on,v.needsUpdate=!0,sh(v,D,U),v.side=ts,v.needsUpdate=!0,sh(v,D,U),v.side=_t):sh(v,D,U)}this.compile=function(v,D,V=null){V===null&&(V=v),B!==null&&B.renderStart(v,D,V),A=ce.get(V),A.init(D),y.push(A),V.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),v!==V&&v.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Rt=this.localClippingEnabled,ct=we.init(this.clippingPlanes,Rt),ct===!0&&we.setGlobalState(this.clippingPlanes,D),B!==null&&Le.render(A.state.shadowsArray,V,D);let U=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){let fe=pe[ye];Ey(fe,V,D,H),U.add(fe)}else Ey(pe,V,D,H),U.add(pe)}),A=y.pop(),B!==null&&B.renderEnd(),U},this.compileAsync=function(v,D,V=null){let U=this.compile(v,D,V);return new Promise(H=>{function pe(){if(U.forEach(function(ye){let Me=G.get(ye).currentProgram;(Me===void 0||Me.isReady())&&U.delete(ye)}),U.size===0){H(v);return}setTimeout(pe,10)}xt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let wm=null;function nT(v){wm&&wm(v)}function My(){Lr.stop()}function vy(){Lr.start()}let Lr=new TM;Lr.setAnimationLoop(nT),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(v){wm=v,Se.setAnimationLoop(v),v===null?Lr.stop():Lr.start()},Se.addEventListener("sessionstart",My),Se.addEventListener("sessionend",vy),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(v,D);let V=Se.enabled===!0&&Se.isPresenting===!0,U=b!==null&&(ie===null||V)&&b.begin(C,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,ie),A=ce.get(v,y.length),A.init(D),A.state.textureUnits=W.getTextureUnits(),y.push(A),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(st,Ai,D.reversedDepth),Rt=this.localClippingEnabled,ct=we.init(this.clippingPlanes,Rt),S=he.get(v,R.length),S.init(),R.push(S),Se.enabled===!0&&Se.isPresenting===!0){let ye=C.xr.getDepthSensingMesh();ye!==null&&Cm(ye,D,-1/0,C.sortObjects)}Cm(v,D,0,C.sortObjects),S.finish(),B!==null&&B.updateLights(A.state.lightsArray),C.sortObjects===!0&&S.sort(Ee,We),Bt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Bt&&qe.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&we.beginShadows();let H=A.state.shadowsArray;if(Le.render(H,v,D),ct===!0&&we.endShadows(),(U&&b.hasRenderPass())===!1){let ye=S.opaque,fe=S.transmissive;if(A.setupLights(),D.isArrayCamera){let Me=D.cameras;if(fe.length>0)for(let be=0,Je=Me.length;be<Je;be++){let nt=Me[be];Ay(ye,fe,v,nt)}Bt&&qe.render(v);for(let be=0,Je=Me.length;be<Je;be++){let nt=Me[be];Sy(S,v,nt,nt.viewport)}}else fe.length>0&&Ay(ye,fe,v,D),Bt&&qe.render(v),Sy(S,v,D)}ie!==null&&Z===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),U&&b.end(C),v.isScene===!0&&v.onAfterRender(C,v,D),me.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(A=y[y.length-1],W.setTextureUnits(A.state.textureUnits),ct===!0&&we.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,B!==null&&B.renderEnd()};function Cm(v,D,V,U){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){U&&Qt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);let ye=j.update(v),fe=v.material;fe.visible&&S.push(v,ye,fe,V,Qt.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(tt))){let ye=j.update(v),fe=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qt.copy(v.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Qt.copy(ye.boundingSphere.center)),Qt.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(fe)){let Me=ye.groups;for(let be=0,Je=Me.length;be<Je;be++){let nt=Me[be],ve=fe[nt.materialIndex];ve&&ve.visible&&S.push(v,ye,ve,V,Qt.z,nt,D)}}else fe.visible&&S.push(v,ye,fe,V,Qt.z,null,D)}}let pe=v.children;for(let ye=0,fe=pe.length;ye<fe;ye++)Cm(pe[ye],D,V,U)}function Sy(v,D,V,U){let{opaque:H,transmissive:pe,transparent:ye}=v;A.setupLightsView(V),ct===!0&&we.setGlobalState(C.clippingPlanes,V),U&&_.viewport(te.copy(U)),H.length>0&&ih(H,D,V),pe.length>0&&ih(pe,D,V),ye.length>0&&ih(ye,D,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ay(v,D,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let ve=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new Nn(1,1,{generateMipmaps:!0,type:ve?Li:Un,minFilter:Pi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let pe=A.state.transmissionRenderTarget[U.id],ye=U.viewport||te;pe.setSize(ye.z*C.transmissionResolutionScale,ye.w*C.transmissionResolutionScale);let fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Tt),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Bt&&qe.render(V);let Je=C.toneMapping;C.toneMapping=Di;let nt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),ct===!0&&we.setGlobalState(C.clippingPlanes,U),ih(v,V,U),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let mt=0,Xt=D.length;mt<Xt;mt++){let Pt=D[mt],{object:bt,geometry:dn,material:_e,group:Sn}=Pt;if(_e.side===_t&&bt.layers.test(U.layers)){let at=_e.side;_e.side=on,_e.needsUpdate=!0,by(bt,V,U,dn,_e,Sn),_e.side=at,_e.needsUpdate=!0,ve=!0}}ve===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Me,be),C.setClearColor(Tt,rt),nt!==void 0&&(U.viewport=nt),C.toneMapping=Je}function ih(v,D,V){let U=D.isScene===!0?D.overrideMaterial:null;for(let H=0,pe=v.length;H<pe;H++){let ye=v[H],{object:fe,geometry:Me,group:be}=ye,Je=ye.material;Je.allowOverride===!0&&U!==null&&(Je=U),fe.layers.test(V.layers)&&by(fe,D,V,Me,Je,be)}}function by(v,D,V,U,H,pe){B!==null&&H.isNodeMaterial&&B.setObject(v,H),v.onBeforeRender(C,D,V,U,H,pe),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(C,D,V,U,v,pe),H.transparent===!0&&H.side===_t&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,pe),H.side=ts,H.needsUpdate=!0,C.renderBufferDirect(V,D,U,H,v,pe),H.side=_t):C.renderBufferDirect(V,D,U,H,v,pe),v.onAfterRender(C,D,V,U,H,pe)}function sh(v,D,V){D.isScene!==!0&&(D=Pn);let U=G.get(v),H=A.state.lights,pe=A.state.shadowsArray,ye=H.state.version,fe=ae.getParameters(v,H.state,pe,D,V,A.state.lightProbeGridArray),Me=ae.getProgramCacheKey(fe),be=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,U.fog=D.fog;let Je=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=se.get(v.envMap||U.environment,Je),U.envMapRotation=U.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",qi),be=new Map,U.programs=be);let nt=be.get(Me);if(nt!==void 0){if(U.currentProgram===nt&&U.lightsStateVersion===ye)return Ry(v,fe),nt}else fe.uniforms=ae.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,V,fe),v.onBeforeCompile(fe,C),nt=ae.acquireProgram(fe,Me),be.set(Me,nt),U.uniforms=fe.uniforms;let ve=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=we.uniform),Ry(v,fe),U.needsLights=oT(v),U.lightsStateVersion=ye,U.needsLights&&(ve.ambientLightColor.value=H.state.ambient,ve.lightProbe.value=H.state.probe,ve.sunLights.value=H.state.sun,ve.sunLightShadows.value=H.state.sunShadow,ve.directionalLights.value=H.state.directional,ve.directionalLightShadows.value=H.state.directionalShadow,ve.spotLights.value=H.state.spot,ve.spotLightShadows.value=H.state.spotShadow,ve.rectAreaLights.value=H.state.rectArea,ve.ltc_1.value=H.state.rectAreaLTC1,ve.ltc_2.value=H.state.rectAreaLTC2,ve.pointLights.value=H.state.point,ve.pointLightShadows.value=H.state.pointShadow,ve.hemisphereLights.value=H.state.hemi,ve.sunShadowMatrix.value=H.state.sunShadowMatrix,ve.sunShadowCascade.value=H.state.sunShadowCascade,ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ve.spotLightMatrix.value=H.state.spotLightMatrix,ve.spotLightMap.value=H.state.spotLightMap,ve.pointShadowMatrix.value=H.state.pointShadowMatrix),U.lightProbeGrid=A.state.lightProbeGridArray.length>0,U.currentProgram=nt,U.uniformsList=null,nt}function Ty(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=ga.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Ry(v,D){let V=G.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function iT(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(D.matrixWorld);for(let V=0,U=v.length;V<U;V++){let H=v[V];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function sT(v,D,V,U,H){D.isScene!==!0&&(D=Pn),W.resetTextureUnits();let pe=D.fog,ye=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?D.environment:null,fe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:je.workingColorSpace,Me=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,be=se.get(U.envMap||ye,Me),Je=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ve=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color,Pt=Di;U.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Pt=C.toneMapping);let bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dn=bt!==void 0?bt.length:0,_e=G.get(U),Sn=A.state.lights;if(ct===!0&&(Rt===!0||v!==Q)){let Ct=v===Q&&U.id===X;we.setState(U,v,Ct)}let at=!1;U.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Sn.state.version||_e.outputColorSpace!==fe||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==be||U.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==we.numPlanes||_e.numIntersection!==we.numIntersection)||_e.vertexAlphas!==Je||_e.vertexTangents!==nt||_e.morphTargets!==ve||_e.morphNormals!==mt||_e.morphColors!==Xt||_e.toneMapping!==Pt||_e.morphTargetsCount!==dn||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,_e.__version=U.version);let ai=_e.currentProgram;at===!0&&(ai=sh(U,D,H),B&&U.isNodeMaterial&&B.onUpdateProgram(U,ai,_e));let Yi=!1,Ks=!1,Co=!1,vt=ai.getUniforms(),Ht=_e.uniforms;if(_.useProgram(ai.program)&&(Yi=!0,Ks=!0,Co=!0),U.id!==X&&(X=U.id,Ks=!0),_e.needsLights){let Ct=iT(A.state.lightProbeGridArray,H);_e.lightProbeGrid!==Ct&&(_e.lightProbeGrid=Ct,Ks=!0)}if(Yi||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),vt.setValue(O,"projectionMatrix",v.projectionMatrix),vt.setValue(O,"viewMatrix",v.matrixWorldInverse);let $s=vt.map.cameraPosition;$s!==void 0&&$s.setValue(O,Nt.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&vt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ks=!0,Co=!0)}if(_e.needsLights&&(Sn.state.sunShadowMap.length>0&&vt.setValue(O,"sunShadowMap",Sn.state.sunShadowMap,W),Sn.state.directionalShadowMap.length>0&&vt.setValue(O,"directionalShadowMap",Sn.state.directionalShadowMap,W),Sn.state.spotShadowMap.length>0&&vt.setValue(O,"spotShadowMap",Sn.state.spotShadowMap,W),Sn.state.pointShadowMap.length>0&&vt.setValue(O,"pointShadowMap",Sn.state.pointShadowMap,W)),H.isSkinnedMesh){vt.setOptional(O,H,"bindMatrix"),vt.setOptional(O,H,"bindMatrixInverse");let Ct=H.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),vt.setValue(O,"boneTexture",Ct.boneTexture,W))}H.isBatchedMesh&&(vt.setOptional(O,H,"batchingTexture"),vt.setValue(O,"batchingTexture",H._matricesTexture,W),vt.setOptional(O,H,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",H._indirectTexture,W),vt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",H._colorsTexture,W));let js=V.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&N.update(H,V,ai),(Ks||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,vt.setValue(O,"receiveShadow",H.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=eD()),Ks){if(vt.setValue(O,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&rT(Ht,Co),pe&&U.fog===!0&&Re.refreshFogUniforms(Ht,pe),Re.refreshMaterialUniforms(Ht,U,$,q,A.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){let Ct=_e.lightProbeGrid;Ht.probesSH.value=Ct.texture,Ht.probesMin.value.copy(Ct.boundingBox.min),Ht.probesMax.value.copy(Ct.boundingBox.max),Ht.probesResolution.value.copy(Ct.resolution)}ga.upload(O,Ty(_e),Ht,W)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ga.upload(O,Ty(_e),Ht,W),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&vt.setValue(O,"center",H.center),vt.setValue(O,"modelViewMatrix",H.modelViewMatrix),vt.setValue(O,"normalMatrix",H.normalMatrix),vt.setValue(O,"modelMatrix",H.matrixWorld),U.uniformsGroups!==void 0){let Ct=U.uniformsGroups;for(let $s=0,Io=Ct.length;$s<Io;$s++){let Cy=Ct[$s];ee.update(Cy,ai),ee.bind(Cy,ai)}}return ai}function rT(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function oT(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,D,V){let U=G.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=D,G.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let V=G.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,V=0){ie=v,J=D,Z=V;let U=null,H=!1,pe=!1;if(v){let fe=G.get(v);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(v.viewport),Ne.copy(v.scissor),Ce=v.scissorTest,_.viewport(te),_.scissor(Ne),_.setScissorTest(Ce),X=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(fe.__hasExternalTextures)W.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Je=v.depthTexture;if(fe.__boundDepthTexture!==Je){if(Je!==null&&G.has(Je)&&(v.width!==Je.image.width||v.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let be=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[D])?U=be[D][V]:U=be[D],H=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?U=G.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[V]:U=be,te.copy(v.viewport),Ne.copy(v.scissor),Ce=v.scissorTest}else te.copy(xe).multiplyScalar($).floor(),Ne.copy(Qe).multiplyScalar($).floor(),Ce=Jt;if(V!==0&&(U=z),_.bindFramebuffer(O.FRAMEBUFFER,U)&&_.drawBuffers(v,U),_.viewport(te),_.scissor(Ne),_.setScissorTest(Ce),H){let fe=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,V)}else if(pe){let fe=D;for(let Me=0;Me<v.textures.length;Me++){let be=G.get(v.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,be.__webglTexture,V,fe)}}else if(v!==null&&V!==0){let fe=G.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,V)}X=-1};function wy(v){let D=G.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=w.textureFormatReadable(v.format),D.__typeReadable=w.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,V,U,H,pe,ye,fe=0){if(!(v&&v.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){_.bindFramebuffer(O.FRAMEBUFFER,Me);try{let be=v.textures[fe],Je=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ve=wy(be);if(ve.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H&&O.readPixels(D,V,U,H,ue.convert(Je),ue.convert(nt),pe)}finally{let be=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,U,H,pe,ye,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me)if(D>=0&&D<=v.width-U&&V>=0&&V<=v.height-H){_.bindFramebuffer(O.FRAMEBUFFER,Me);let be=v.textures[fe],Je=be.format,nt=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ve=wy(be);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(D,V,U,H,ue.convert(Je),ue.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Xt=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Xt);let Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await QE(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(mt),O.deleteSync(Pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){let U=Math.pow(2,-V),H=Math.floor(v.image.width*U),pe=Math.floor(v.image.height*U),ye=D!==null?D.x:0,fe=D!==null?D.y:0;W.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,ye,fe,H,pe),_.unbindTexture()},this.copyTextureToTexture=function(v,D,V=null,U=null,H=0,pe=0){let ye,fe,Me,be,Je,nt,ve,mt,Xt,Pt=v.isCompressedTexture?v.mipmaps[pe]:v.image;if(V!==null)ye=V.max.x-V.min.x,fe=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Je=V.min.y,nt=V.isBox3?V.min.z:0;else{let Ht=Math.pow(2,-H);ye=Math.floor(Pt.width*Ht),fe=Math.floor(Pt.height*Ht),v.isDataArrayTexture?Me=Pt.depth:v.isData3DTexture?Me=Math.floor(Pt.depth*Ht):Me=1,be=0,Je=0,nt=0}U!==null?(ve=U.x,mt=U.y,Xt=U.z):(ve=0,mt=0,Xt=0);let bt=ue.convert(D.format),dn=ue.convert(D.type),_e;D.isData3DTexture?(W.setTexture3D(D,0),_e=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),_e=O.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),_e=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Sn=_.getParameter(O.UNPACK_ROW_LENGTH),at=_.getParameter(O.UNPACK_IMAGE_HEIGHT),ai=_.getParameter(O.UNPACK_SKIP_PIXELS),Yi=_.getParameter(O.UNPACK_SKIP_ROWS),Ks=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,be),_.pixelStorei(O.UNPACK_SKIP_ROWS,Je),_.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let Co=v.isDataArrayTexture||v.isData3DTexture,vt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Ht=G.get(v),js=G.get(D),Ct=G.get(Ht.__renderTarget),$s=G.get(js.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Io=0;Io<Me;Io++)Co&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(v).__webglTexture,H,nt+Io),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(D).__webglTexture,pe,Xt+Io)),O.blitFramebuffer(be,Je,ye,fe,ve,mt,ye,fe,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||G.has(v)){let Ht=G.get(v),js=G.get(D);_.bindFramebuffer(O.READ_FRAMEBUFFER,P),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ct=0;Ct<Me;Ct++)Co?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,H,nt+Ct):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,H),vt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,js.__webglTexture,pe,Xt+Ct):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,js.__webglTexture,pe),H!==0?O.blitFramebuffer(be,Je,ye,fe,ve,mt,ye,fe,O.COLOR_BUFFER_BIT,O.NEAREST):vt?O.copyTexSubImage3D(_e,pe,ve,mt,Xt+Ct,be,Je,ye,fe):O.copyTexSubImage2D(_e,pe,ve,mt,be,Je,ye,fe);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(_e,pe,ve,mt,Xt,ye,fe,Me,bt,dn,Pt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,pe,ve,mt,Xt,ye,fe,Me,bt,Pt.data):O.texSubImage3D(_e,pe,ve,mt,Xt,ye,fe,Me,bt,dn,Pt):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,ve,mt,ye,fe,bt,dn,Pt.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,ve,mt,Pt.width,Pt.height,bt,Pt.data):O.texSubImage2D(O.TEXTURE_2D,pe,ve,mt,ye,fe,bt,dn,Pt);_.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(O.UNPACK_SKIP_PIXELS,ai),_.pixelStorei(O.UNPACK_SKIP_ROWS,Yi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,Ks),pe===0&&D.generateMipmaps&&O.generateMipmap(_e),_.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,Z=0,ie=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};function LM(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new lt,l=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=NM(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=NM(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function NM(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Lt(o,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function i0(n,e){if(e===Dg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===fa||e===ul){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===fa)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function rf(n){let e=new Map,t=new Map,i=n.clone();return OM(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function OM(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)OM(n.children[i],e.children[i],t)}var gr=class extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new u0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new of(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new of(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new S0(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ns.extractUrlBase(e);o=Ns.resolveURL(l,this.path)}else o=Ns.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new oa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zM){try{o[et.KHR_BINARY_GLTF]=new A0(e)}catch(h){s&&s(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new D0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new c0;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new b0(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new T0;break;case et.KHR_MESH_QUANTIZATION:o[h]=new R0;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function tD(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Vt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},a0=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],bn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new jr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kr(u),l.distance=h;break;case"spot":l=new Kc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),rs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},c0=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,i){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}},l0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},u0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(s)}},h0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},d0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},f0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],bn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,zt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},p0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},m0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(r[0],r[1],r[2],bn),Promise.all(s)}},g0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},_0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(r[0],r[1],r[2],bn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,zt)),Promise.all(s)}},x0=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},y0=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},E0=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},M0=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},v0=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},of=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},S0=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==hi.TRIANGLES&&l.mode!==hi.TRIANGLE_STRIP&&l.mode!==hi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let x=new ze,g=new I,p=new tn,M=new I(1,1,1),T=new Ve(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),T.setMatrixAt(S,x.compose(g,p,M));let E=null;for(let S in c)if(S==="_COLOR_0"){let A=c[S];T.instanceColor=new ws(A.array,A.itemSize,A.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(E===null){let R=T.geometry;E=new lt,E.name=R.name;for(let y in R.attributes)E.setAttribute(y,R.attributes[y]);for(let y in R.morphAttributes)E.morphAttributes[y]=R.morphAttributes[y];R.index!==null&&E.setIndex(R.index),E.morphTargetsRelative=R.morphTargetsRelative;for(let y of R.groups)E.addGroup(y.start,y.count,y.materialIndex);R.boundingBox!==null&&(E.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(E.boundingSphere=R.boundingSphere.clone()),E.drawRange.start=R.drawRange.start,E.drawRange.count=R.drawRange.count,E.userData=Object.assign({},R.userData),T.geometry=E}let A=c[S];E.setAttribute(S,new ws(A.array,A.itemSize,A.normalized))}Fe.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},zM="glTF",pl=12,BM={JSON:1313821514,BIN:5130562},A0=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,pl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-pl,r=new DataView(e,pl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===BM.JSON){let l=new Uint8Array(e,pl+o,a);this.content=i.decode(l)}else if(c===BM.BIN){let l=pl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},b0=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=C0[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=C0[u]||u.toLowerCase();if(o[u]!==void 0){let d=i.accessors[e.attributes[u]],f=xa[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}h(f)},a,l,bn,d)})})}},T0=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},R0=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},af=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,M=1-g,T=p-d+h;for(let E=0;E!==a;E++){let S=o[x+E+a],A=o[x+E+c]*u,R=o[m+E+a],y=o[m+E]*u;r[E]=M*S+T*A+g*R+p*y}return r}},nD=new tn,w0=class extends af{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return nD.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},FM={9728:Gt,9729:kt,9984:ld,9985:ua,9986:eo,9987:Pi},UM={33071:li,33648:Yo,10497:Ti},s0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},C0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iD={CUBICSPLINE:void 0,LINEAR:Vr,STEP:kr},r0={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sD(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),n.DefaultMaterial}function io(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rD(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function oD(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aD(n){let e,t=n.extensions&&n.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+o0(t.attributes):e=n.indices+":"+o0(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+o0(n.targets[i]);return e}function o0(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function I0(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cD(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var lD=new ze,D0=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tD,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Yc(this.options.manager):this.textureLoader=new $c(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return io(r,a,s),rs(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ns.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=s0[s.type],a=xa[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Lt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=s0[s.type],l=xa[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(M);T||(x=new l(a,p*f,s.count*f/u),T=new Qo(x,f/u),t.cache.add(M,T)),g=new ea(T,c,d%f/u,m)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),g=new Lt(x,c,m);if(s.sparse!==void 0){let p=s0.SCALAR,M=xa[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,S=new M(o[1],T,s.sparse.count*p),A=new l(o[2],E,s.sparse.count*c);a!==null&&(g=new Lt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,y=S.length;R<y;R++){let b=S[R];if(g.setX(b,A[R*c]),c>=2&&g.setY(b,A[R*c+1]),c>=3&&g.setZ(b,A[R*c+2]),c>=4&&g.setW(b,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=FM[d.magFilter]||kt,u.minFilter=FM[d.minFilter]||Pi,u.wrapS=UM[d.wrapS]||Ti,u.wrapT=UM[d.wrapT]||Ti,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==kt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new nn(x);g.needsUpdate=!0,d(g)}),t.load(Ns.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),rs(h,o),h.userData.mimeType=o.mimeType||cD(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new sa,On.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ia,On.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Te}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){let h=s[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],bn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_t);let u=r.alphaMode||r0.OPAQUE;if(u===r0.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===r0.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ot&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ot){let h=r.emissiveFactor;a.emissive=new re().setRGB(h[0],h[1],h[2],bn)}return r.emissiveTexture!==void 0&&o!==Ot&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),rs(h,r),t.associations.set(h,{materials:e}),r.extensions&&io(s,h,r),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return HM(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=aD(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=HM(new lt,l,t),l.mode===hi.TRIANGLE_STRIP?d=d.then(f=>i0(f,ul)):l.mode===hi.TRIANGLE_FAN&&(d=d.then(f=>i0(f,fa))),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?sD(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=o[f],p,M=l[f];if(g.mode===hi.TRIANGLES||g.mode===hi.TRIANGLE_STRIP||g.mode===hi.TRIANGLE_FAN||g.mode===void 0){let T=r.isSkinnedMesh===!0,E=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&E?new Lc(x,M):new Be(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===hi.LINES)p=new Bc(x,M);else if(g.mode===hi.LINE_STRIP)p=new qr(x,M);else if(g.mode===hi.LINE_LOOP)p=new Fc(x,M);else if(g.mode===hi.POINTS)p=new Yr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&oD(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),rs(p,r),g.extensions&&io(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&io(s,h[0],r),h[0];let d=new dt;r.extensions&&io(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(Ze.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new hr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Oc(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let T=0,E=d.length;T<E;T++){let S=d[T],A=f[T],R=m[T],y=x[T],b=g[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=i._createAnimationTracks(S,A,R,y,b);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}let M=new Zr(r,void 0,p);return rs(M,s),M})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lD)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new ta:l.length>1?u=new dt:l.length===1?u=l[0]:u=new Fe,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),rs(u,r),r.extensions&&io(i,u,r),r.matrix!==void 0){let h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new dt;i.name&&(r.name=s.createUniqueName(i.name)),rs(r,i),i.extensions&&io(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(rf(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof On||d instanceof nn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}mr[r.path]===mr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(mr[r.path]){case mr.weights:u=Is;break;case mr.rotation:u=Ds;break;case mr.translation:case mr.scale:u=lr;break;default:switch(i.itemSize){case 1:u=Is;break;case 2:case 3:default:u=lr;break}break}let h=s.interpolation!==void 0?iD[s.interpolation]:Vr,d=this._getArrayFromAccessor(i);for(let f=0,m=c.length;f<m;f++){let x=new u(c[f]+"."+mr[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=I0(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ds?w0:af;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uD(n,e,t){let i=e.attributes,s=new Yn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let u=I0(xa[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=I0(xa[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function HM(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=C0[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return je.workingColorSpace!==bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),rs(n,e),uD(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rD(n,e.targets,t):n})}var P0=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Fi=n=>JSON.parse(JSON.stringify(n)),Bi=(n,e)=>{if(!Number.isFinite(n))throw new Error("06H invalid "+e);return n},ya=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Fi(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Fi(t):null}has(e){return this.snapshots.has(e)}},cf=class{constructor({id:e,store:t,actorStart:i,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...P0,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:Bi(i.x,"actorStart.x"),z:Bi(i.z,"actorStart.z")},this.actorDestination={x:Bi(s.x,"actorDestination.x"),z:Bi(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Fi(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:i=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(i,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Fi(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Fi(this.state.memory),actor:Fi(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Fi(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Fi(e.memory),actor:Fi(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Fi(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),i=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=i,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*i,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*i}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Fi(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(Bi(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");Bi(e.memory.eventId,"snapshot.memory.eventId"),Bi(e.actor.progress,"snapshot.actor.progress"),Bi(e.actor.position?.x,"snapshot.actor.position.x"),Bi(e.actor.position?.z,"snapshot.actor.position.z"),Bi(e.actor.destination?.x,"snapshot.actor.destination.x"),Bi(e.actor.destination?.z,"snapshot.actor.destination.z")}};var De=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),ml=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),GM=(n,e)=>{if(!Number.isFinite(n))throw new Error("06I invalid "+e);return n},Ea=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:i=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...ml,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=i,this.onSleep=s,this.onWake=r,this.tier=De.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[De.NEAR]:0,[De.MID]:0,[De.FAR]:0,[De.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===De.NEAR?"FRAME":this.tier===De.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===De.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:i=Date.now()}={}){let s=GM(e,"distanceM"),r=Math.max(0,GM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,i),this.tier===De.DORMANT)return 0;if(this.tier===De.NEAR)return this._tick(r,i),1;let a=this.tier===De.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,i),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let i=this.tier;if(i===De.DORMANT&&e!==De.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,i),this.onTierChange(e,i,t);return}if(i!==De.DORMANT&&e===De.DORMANT){this.onSleep(t,i,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,i,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,i,t)}_nextTier(e){let t=this.config;return this.tier===De.DORMANT?e>t.wakeRadiusM?De.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?De.DORMANT:this.tier===De.NEAR?e>t.nearExitM?De.MID:De.NEAR:this.tier===De.MID?e<=t.nearEnterM?De.NEAR:e>t.midExitM?De.FAR:De.MID:this.tier===De.FAR?e<=t.nearEnterM?De.NEAR:e<=t.midEnterM?De.MID:De.FAR:De.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?De.NEAR:e<=this.config.midEnterM?De.MID:De.FAR}};var hD=Object.freeze([10,20,40,64]),so=Object.freeze({warmupMs:4e3,measureMs:15e3,minMeasuredFrames:300,avgFrameMsMax:17.8,p95FrameMsMax:20.5,p99FrameMsMax:34,avgAuditCpuMsMax:2,p95AuditCpuMsMax:4,drawCallsMax:120,trianglesMax:35e4}),_r=n=>JSON.parse(JSON.stringify(n));function kM(n,e){if(!Number.isInteger(n)||n<0||n>=192)throw new Error("06J invalid actor index");let t=Math.floor(n/48),i=n%48,s=i/48*Math.PI*2+t*.173,r=hD[t]+(i%5-2)*.28,o=s+Math.PI*.5,a={x:Math.cos(s)*r,z:Math.sin(s)*r},c={x:a.x+Math.cos(o)*(3.4+n%4*.35),z:a.z+Math.sin(o)*(3.4+n%4*.35)},l=n%4===0,u=n%17*.013;return{id:"06J_ACTOR_"+String(n).padStart(3,"0"),index:n,ring:t,localStart:a,localDestination:c,position:{...a},goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:u,winner:l?"HAZARD":"FOOD",memory:{state:l?"DISTURBED":"CALM",expiresAt:l?e+2e4+n%5*1e3:0},visualActive:!0,snapshot:null,sleepCount:0,wakeCount:0}}function L0(n,e,t){if(!n)throw new Error("06J actor required");let i=Math.max(0,Number.isFinite(e)?e:0);n.memory.state!=="CALM"&&t>=n.memory.expiresAt&&(n.memory.state="CALM",n.memory.expiresAt=0),n.winner=n.memory.state==="DISTURBED"?"HAZARD":"FOOD",n.winner==="HAZARD"?n.goal!=="HAZARD"&&(n.goal==="FOOD"&&(n.suspendedGoal="FOOD"),n.goal="HAZARD",n.behaviorState="EVADING"):n.suspendedGoal==="FOOD"&&(n.goal="FOOD",n.suspendedGoal="NONE",n.behaviorState="SEEKING_FOOD"),n.goal==="FOOD"&&n.behaviorState==="SEEKING_FOOD"&&(n.progress=Math.min(1,n.progress+i/12e4),n.progress>=1&&(n.progress=1,n.goal="FOOD REACHED",n.behaviorState="COMPLETE"));let s=n.progress;return n.position.x=n.localStart.x+(n.localDestination.x-n.localStart.x)*s,n.position.z=n.localStart.z+(n.localDestination.z-n.localStart.z)*s,n}function VM(n,e,t){return{version:e,cellId:n.id,serializedAt:t,state:{goal:n.goal,suspendedGoal:n.suspendedGoal,behaviorState:n.behaviorState,progress:n.progress,winner:n.winner,memory:_r(n.memory),position:_r(n.position),localStart:_r(n.localStart),localDestination:_r(n.localDestination)}}}function WM(n,e,t){if(!e||e.cellId!==n.id)throw new Error("06J snapshot mismatch");let i=e.state;return n.goal=i.goal,n.suspendedGoal=i.suspendedGoal,n.behaviorState=i.behaviorState,n.progress=i.progress,n.winner=i.winner,n.memory=_r(i.memory),n.position=_r(i.position),n.localStart=_r(i.localStart),n.localDestination=_r(i.localDestination),L0(n,0,t),Math.max(0,t-e.serializedAt)}function N0(n,e){if(!n.length)return 0;let t=[...n].sort((s,r)=>s-r),i=Math.min(t.length-1,Math.max(0,Math.ceil(e/100*t.length)-1));return t[i]}function XM({frameSamples:n=[],cpuSamples:e=[],drawCallsMax:t=0,trianglesMax:i=0,actorCount:s=0,duplicateCount:r=0,limits:o=so}={}){let a=p=>p.length?p.reduce((M,T)=>M+T,0)/p.length:0,c=a(n),l=N0(n,95),u=N0(n,99),h=n.length?Math.max(...n):0,d=a(e),f=N0(e,95),m=e.length?Math.max(...e):0,x={enough_frames:n.length>=o.minMeasuredFrames,avg_frame_ms:c<=o.avgFrameMsMax,p95_frame_ms:l<=o.p95FrameMsMax,p99_frame_ms:u<=o.p99FrameMsMax,avg_audit_cpu_ms:d<=o.avgAuditCpuMsMax,p95_audit_cpu_ms:f<=o.p95AuditCpuMsMax,draw_calls:t<=o.drawCallsMax,triangles:i<=o.trianglesMax,actor_count:s===192,duplicates:r===0},g=Object.entries(x).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:x,measured_frames:n.length,frame_avg_ms:c,frame_p95_ms:l,frame_p99_ms:u,frame_worst_ms:h,equivalent_fps:c>0?1e3/c:0,audit_cpu_avg_ms:d,audit_cpu_p95_ms:f,audit_cpu_worst_ms:m,draw_calls_max:t,triangles_max:i,actor_count:s,duplicate_count:r}}var lf=Object.freeze({memoryRadiusM:1.8,disturbedMs:2300,settlingMs:2800,hazardPriority:100,foodPriority:40}),uf=n=>JSON.parse(JSON.stringify(n)),xr=(n,e)=>{if(!Number.isFinite(n))throw new Error("07A invalid "+e);return n};function qM(n,e,t,i,s,r){let o=s-t,a=r-i,c=o*o+a*a;if(c<=1e-12)return Math.hypot(n-t,e-i);let l=Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/c)),u=t+o*l,h=i+a*l;return Math.hypot(n-u,e-h)}var gl=class{constructor(e=0){this.lastEventId=Math.max(0,Number.isFinite(e)?Math.floor(e):0)}next(e,{at:t=Date.now(),payload:i={}}={}){if(!e)throw new Error("07A event type required");return xr(t,"event.at"),this.lastEventId++,Object.freeze({id:this.lastEventId,type:e,at:t,payload:uf(i)})}observe(e){return!Number.isFinite(e)||e<=this.lastEventId?!1:(this.lastEventId=Math.floor(e),!0)}},hf=class{constructor(e={}){if(this.config={...lf,...e},!(this.config.memoryRadiusM>0&&this.config.disturbedMs>0&&this.config.settlingMs>0))throw new Error("07A invalid memory config");this.state="CALM",this.eventId=0,this.startedAt=0,this.expiresAt=0,this.center={x:0,z:0}}applyEvent(e,{center:t,now:i=e?.at??Date.now()}={}){if(!e||!Number.isFinite(e.id))throw new Error("07A memory event id required");return e.id<=this.eventId?!1:(xr(i,"memory now"),xr(t?.x,"memory center.x"),xr(t?.z,"memory center.z"),this.eventId=e.id,this.startedAt=i,this.expiresAt=i+this.config.disturbedMs+this.config.settlingMs,this.center={x:t.x,z:t.z},this.state="DISTURBED",!0)}resolve(e=Date.now()){return xr(e,"memory resolve now"),this.state==="CALM"?this.state:(e>=this.expiresAt?this.state="CALM":e>=this.startedAt+this.config.disturbedMs?this.state="SETTLING":this.state="DISTURBED",this.state)}overlapsPoint(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:Math.hypot(e.x-this.center.x,e.z-this.center.z)<=this.config.memoryRadiusM}overlapsSegment(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:qM(this.center.x,this.center.z,e.a.x,e.a.z,e.b.x,e.b.z)<=this.config.memoryRadiusM}snapshot(){return{state:this.state,eventId:this.eventId,startedAt:this.startedAt,expiresAt:this.expiresAt,center:uf(this.center),config:{memoryRadiusM:this.config.memoryRadiusM,disturbedMs:this.config.disturbedMs,settlingMs:this.config.settlingMs}}}restore(e,t=Date.now()){if(!e)throw new Error("07A memory snapshot required");return this.state=e.state,this.eventId=e.eventId,this.startedAt=e.startedAt,this.expiresAt=e.expiresAt,this.center=uf(e.center),this.resolve(t),this.state}},df=class{constructor(e={}){this.priorities={HAZARD:lf.hazardPriority,FOOD:lf.foodPriority,...e}}choose(e=[]){let t=e.filter(i=>i&&i.valid!==!1).map(i=>({id:i.id,priority:Number.isFinite(i.priority)?i.priority:this.priorities[i.id]??0,eventAt:Number.isFinite(i.eventAt)?i.eventAt:0,payload:i.payload??null}));return t.sort((i,s)=>s.priority-i.priority||String(i.id).localeCompare(String(s.id))),t[0]??null}},ff=class{constructor({goal:e="FOOD",progress:t=0}={}){this.activeGoal=e,this.progress=Math.max(0,Math.min(1,t)),this.suspendedGoal=null,this.suspendedProgress=0,this.interruption=null,this.behaviorState=e==="FOOD"?"SEEKING_FOOD":"ACTIVE"}setProgress(e){this.progress=Math.max(0,Math.min(1,xr(e,"goal progress"))),this.activeGoal==="FOOD"&&this.progress>=1&&(this.activeGoal="FOOD REACHED",this.behaviorState="COMPLETE")}advanceFood(e){return this.activeGoal!=="FOOD"||this.behaviorState!=="SEEKING_FOOD"?this.progress:(this.setProgress(this.progress+Math.max(0,xr(e,"goal delta"))),this.progress)}interrupt(e="HAZARD"){return this.activeGoal===e?!1:(this.activeGoal==="FOOD"&&(this.suspendedGoal="FOOD",this.suspendedProgress=this.progress),this.interruption=e,this.activeGoal=e,this.behaviorState="EVADING",!0)}clearInterruption(){return this.interruption?(this.interruption=null,this.suspendedGoal?(this.activeGoal=this.suspendedGoal,this.progress=this.suspendedProgress,this.suspendedGoal=null,this.suspendedProgress=0,this.behaviorState=this.activeGoal==="FOOD"?"SEEKING_FOOD":"ACTIVE",!0):!1):!1}reconcile(e){return(e?.id??null)==="HAZARD"?this.interrupt("HAZARD"):this.interruption==="HAZARD"&&this.clearInterruption(),this.activeGoal}snapshot(){return{activeGoal:this.activeGoal,progress:this.progress,suspendedGoal:this.suspendedGoal,suspendedProgress:this.suspendedProgress,interruption:this.interruption,behaviorState:this.behaviorState}}restore(e){if(!e)throw new Error("07A goal snapshot required");Object.assign(this,uf(e))}},yr=class{constructor({memoryConfig:e={},priorities:t={},initialGoal:i="FOOD",initialProgress:s=0}={}){this.events=new gl,this.memory=new hf(e),this.arbiter=new df(t),this.goals=new ff({goal:i,progress:s}),this.lastWinner=null}createHazardEvent({center:e,at:t=Date.now(),payload:i={}}={}){let s=this.events.next("HAZARD",{at:t,payload:i});return this.memory.applyEvent(s,{center:e,now:t}),s}observeHazardEvent(e,{center:t,now:i=e?.at??Date.now()}={}){if(!e||e.type!=="HAZARD")throw new Error("07A HAZARD event required");return this.events.observe(e.id),this.memory.applyEvent(e,{center:t,now:i})}update({now:e=Date.now(),actorPath:t,foodValid:i=!0,foodEventAt:s=e,foodProgressDelta:r=0}={}){this.memory.resolve(e);let o=t?this.memory.overlapsSegment(t,e):this.memory.state!=="CALM",a=this.arbiter.choose([{id:"HAZARD",valid:o,eventAt:this.memory.startedAt},{id:"FOOD",valid:i,eventAt:s}]);return this.lastWinner=a?.id??null,this.goals.reconcile(a),this.goals.activeGoal==="FOOD"&&this.goals.advanceFood(r),{memoryState:this.memory.state,winner:this.lastWinner,goal:this.goals.activeGoal,suspendedGoal:this.goals.suspendedGoal,progress:this.goals.progress}}serialize(e=Date.now()){return xr(e,"kernel serialize now"),{version:1,serializedAt:e,eventSequence:{lastEventId:this.events.lastEventId},memory:this.memory.snapshot(),goals:this.goals.snapshot(),lastWinner:this.lastWinner}}restore(e,t=Date.now()){if(!e||e.version!==1)throw new Error("07A kernel snapshot version mismatch");return this.events=new gl(e.eventSequence?.lastEventId??0),this.memory.restore(e.memory,t),this.goals.restore(e.goals),this.lastWinner=e.lastWinner??null,this.memory.state==="CALM"&&this.goals.interruption==="HAZARD"&&this.goals.clearInterruption(),{offscreenMs:Math.max(0,t-e.serializedAt),memoryState:this.memory.state,goal:this.goals.activeGoal,progress:this.goals.progress}}};var YM=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),Hi=n=>JSON.parse(JSON.stringify(n)),Ui=(n,e)=>{if(!Number.isFinite(n))throw new Error("06H invalid "+e);return n},_l=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,Hi(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Hi(t):null}has(e){return this.snapshots.has(e)}},xl=class{constructor({id:e,store:t,actorStart:i,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...YM,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:Ui(i.x,"actorStart.x"),z:Ui(i.z,"actorStart.z")},this.actorDestination={x:Ui(s.x,"actorDestination.x"),z:Ui(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,Hi(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:i=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(i,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,Hi(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:Hi(this.state.memory),actor:Hi(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",Hi(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:Hi(e.memory),actor:Hi(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,Hi(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),i=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=i,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*i,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*i}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(Hi(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(Ui(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");Ui(e.memory.eventId,"snapshot.memory.eventId"),Ui(e.actor.progress,"snapshot.actor.progress"),Ui(e.actor.position?.x,"snapshot.actor.position.x"),Ui(e.actor.position?.z,"snapshot.actor.position.z"),Ui(e.actor.destination?.x,"snapshot.actor.destination.x"),Ui(e.actor.destination?.z,"snapshot.actor.destination.z")}};var it=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),ZM=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),JM=(n,e)=>{if(!Number.isFinite(n))throw new Error("06I invalid "+e);return n},yl=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:i=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...ZM,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=i,this.onSleep=s,this.onWake=r,this.tier=it.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[it.NEAR]:0,[it.MID]:0,[it.FAR]:0,[it.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===it.NEAR?"FRAME":this.tier===it.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===it.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:i=Date.now()}={}){let s=JM(e,"distanceM"),r=Math.max(0,JM(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,i),this.tier===it.DORMANT)return 0;if(this.tier===it.NEAR)return this._tick(r,i),1;let a=this.tier===it.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,i),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let i=this.tier;if(i===it.DORMANT&&e!==it.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,i),this.onTierChange(e,i,t);return}if(i!==it.DORMANT&&e===it.DORMANT){this.onSleep(t,i,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,i,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,i,t)}_nextTier(e){let t=this.config;return this.tier===it.DORMANT?e>t.wakeRadiusM?it.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?it.DORMANT:this.tier===it.NEAR?e>t.nearExitM?it.MID:it.NEAR:this.tier===it.MID?e<=t.nearEnterM?it.NEAR:e>t.midExitM?it.FAR:it.MID:this.tier===it.FAR?e<=t.nearEnterM?it.NEAR:e<=t.midEnterM?it.MID:it.FAR:it.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?it.NEAR:e<=this.config.midEnterM?it.MID:it.FAR}};var ro=Object.freeze({version:1,milestone:"07A \u2014 Production Architecture Promotion",modules:["WorldEventSequence","TimedSpatialMemory","StimulusArbiter","GoalContinuity","LivingWorldKernel","StreamStateStore","StreamCell","SimulationLODController"],stateOwnership:{WorldEventSequence:"monotonic event identity only",TimedSpatialMemory:"local timed world-memory state + spatial applicability",StimulusArbiter:"stateless deterministic decision authority",GoalContinuity:"active/suspended goal + progress continuity",LivingWorldKernel:"orchestration order; no render ownership",StreamStateStore:"canonical serialized cell snapshots",StreamCell:"load/update/serialize/unload/rehydrate lifecycle",SimulationLODController:"distance tier + cadence + sleep/wake transitions"},boundaries:{rendering:"external adapter; no THREE dependency in production core",dom:"none",input:"external",combat:"unchanged / external",persistenceDisk:"not included",productionActorPipeline:"deferred to 07B",streamedProductionRegion:"deferred to 07C"}});var KM=1,dD=n=>JSON.parse(JSON.stringify(n)),zi=(n,e)=>{if(!Number.isFinite(n))throw new Error("07B invalid "+e);return n};function fD(n){return Object.freeze({typeId:n.typeId,asset:Object.freeze({...n.asset}),scale:n.scale,yawOffset:n.yawOffset,animationMap:Object.freeze({...n.animationMap}),presentation:Object.freeze({...n.presentation})})}var O0=class{constructor(){this.definitions=new Map}register(e){if(!e?.typeId)throw new Error("07B actor typeId required");if(this.definitions.has(e.typeId))throw new Error("07B duplicate actor definition "+e.typeId);if(!e.asset?.id||!e.asset?.url)throw new Error("07B actor asset id/url required");let t=zi(e.scale??1,"definition.scale"),i=zi(e.yawOffset??0,"definition.yawOffset"),s=fD({typeId:e.typeId,asset:{id:e.asset.id,url:e.asset.url},scale:t,yawOffset:i,animationMap:e.animationMap??{},presentation:e.presentation??{}});return this.definitions.set(s.typeId,s),s}get(e){let t=this.definitions.get(e);if(!t)throw new Error("07B unknown actor definition "+e);return t}has(e){return this.definitions.has(e)}list(){return[...this.definitions.values()]}},pf=class{constructor({id:e,definition:t,kernel:i,position:s={x:0,y:0,z:0},yaw:r=0,animationIntent:o="IDLE"}){if(!e)throw new Error("07B actor id required");this.id=e,this.typeId=t.typeId,this.definition=t,this.kernel=i,this.position={x:zi(s.x??0,"actor.position.x"),y:zi(s.y??0,"actor.position.y"),z:zi(s.z??0,"actor.position.z")},this.yaw=zi(r,"actor.yaw"),this.animationIntent=o||"IDLE",this.bindingId=null,this.bindingClaims=0,this.createdAt=Date.now()}setTransform({x:e=this.position.x,y:t=this.position.y,z:i=this.position.z,yaw:s=this.yaw}={}){this.position={x:zi(e,"actor.position.x"),y:zi(t,"actor.position.y"),z:zi(i,"actor.position.z")},this.yaw=zi(s,"actor.yaw")}setAnimationIntent(e){if(!e)throw new Error("07B animation intent required");this.animationIntent=String(e)}claimBinding(e){if(!e)throw new Error("07B binding id required");if(this.bindingId&&this.bindingId!==e)throw new Error("07B duplicate visual binding for "+this.id);return this.bindingId?!1:(this.bindingId=e,this.bindingClaims++,!0)}releaseBinding(e){return this.bindingId!==e?!1:(this.bindingId=null,!0)}serialize(e=Date.now()){return zi(e,"actor serialize now"),{version:KM,actorId:this.id,typeId:this.typeId,serializedAt:e,transform:{position:dD(this.position),yaw:this.yaw},animationIntent:this.animationIntent,kernel:this.kernel.serialize(e)}}},mf=class{constructor({kernelFactory:e=t=>new yr(t)}={}){this.definitions=new O0,this.actors=new Map,this.kernelFactory=e,this.createdCount=0,this.destroyedCount=0}registerDefinition(e){return this.definitions.register(e)}createActor({id:e,typeId:t,position:i={x:0,y:0,z:0},yaw:s=0,animationIntent:r="IDLE",kernelOptions:o={}}){if(this.actors.has(e))throw new Error("07B duplicate actor id "+e);let a=this.definitions.get(t),c=this.kernelFactory(o),l=new pf({id:e,definition:a,kernel:c,position:i,yaw:s,animationIntent:r});return this.actors.set(e,l),this.createdCount++,l}restoreActor(e,t=Date.now()){if(!e||e.version!==KM)throw new Error("07B actor snapshot version mismatch");if(this.actors.has(e.actorId))throw new Error("07B restore collision "+e.actorId);let i=this.definitions.get(e.typeId),s=this.kernelFactory();s.restore(e.kernel,t);let r=new pf({id:e.actorId,definition:i,kernel:s,position:e.transform.position,yaw:e.transform.yaw,animationIntent:e.animationIntent});return this.actors.set(r.id,r),this.createdCount++,r}destroyActor(e){let t=this.actors.get(e);if(!t)return!1;if(t.bindingId)throw new Error("07B actor must release visual binding before destroy "+e);return this.actors.delete(e),this.destroyedCount++,!0}getActor(e){return this.actors.get(e)??null}listActors(){return[...this.actors.values()]}get size(){return this.actors.size}};var pD=0,B0=class{constructor({loader:e=new gr}={}){this.loader=e,this.entries=new Map,this.loadCount=0,this.instanceCount=0}async load(e){let t=e.asset,i=this.entries.get(t.id);if(i){if(i.url!==t.url)throw new Error("07B asset id/url conflict "+t.id);return i.promise}this.loadCount++;let s=this.loader.loadAsync(t.url).then(r=>({gltf:r,template:r.scene,clips:[...r.animations]}));return this.entries.set(t.id,{url:t.url,promise:s}),s}async instantiate(e){let t=await this.load(e),i=rf(t.template);return this.instanceCount++,{model:i,clips:t.clips}}get assetCount(){return this.entries.size}},F0=class{constructor({record:e,definition:t,scene:i,assetCache:s}){if(!e||!t||!i||!s)throw new Error("07B binding dependencies required");this.record=e,this.definition=t,this.scene=i,this.assetCache=s,this.bindingId="07B_BINDING_"+ ++pD,this.root=new dt,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.model=null,this.mixer=null,this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.ready=!1}async attach(){if(this.attached)return this;this.record.claimBinding(this.bindingId);let{model:e,clips:t}=await this.assetCache.instantiate(this.definition);this.model=e,this.model.scale.setScalar(this.definition.scale),this.model.rotation.y=this.definition.yawOffset,this.model.traverse(i=>{i.isMesh&&(i.castShadow=!!this.definition.presentation.castShadow,i.receiveShadow=this.definition.presentation.receiveShadow!==!1)}),this.root.add(this.model),this.mixer=new Ls(this.model);for(let i of t)this.actions.set(i.name,this.mixer.clipAction(i));return this.scene.add(this.root),this.attached=!0,this.ready=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let i={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of i)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){if(this.record.setAnimationIntent(e),!this.ready||!this.mixer)return null;let i=this.resolveAnimation(e);if(!i)return null;let s=this.actions.get(i);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=i,i}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}update(e){this.ready&&(this.syncTransform(),this.mixer&&this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,this.ready=!1,this.model=null,this.mixer=null,this.actions.clear(),this.activeAction=null,!0):!1}},gf=class{constructor({scene:e,assetCache:t=new B0}={}){if(!e)throw new Error("07B Three actor factory requires scene");this.scene=e,this.assetCache=t,this.bindings=new Map,this.duplicateBindingCount=0}async bind(e){if(this.bindings.has(e.id))throw this.duplicateBindingCount++,new Error("07B duplicate actor binding "+e.id);let t=new F0({record:e,definition:e.definition,scene:this.scene,assetCache:this.assetCache});return await t.attach(),this.bindings.set(e.id,t),t}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var _f=n=>JSON.parse(JSON.stringify(n)),Ma=(n,e)=>{if(!Number.isFinite(n))throw new Error("07C invalid "+e);return n},Gi=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.regionId!==e)throw new Error("07C region snapshot mismatch");if(t.version!==1)throw new Error("07C region snapshot version mismatch");return this.snapshots.set(e,_f(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?_f(t):null}has(e){return this.snapshots.has(e)}},os=class{constructor({id:e,pipeline:t,store:i=new Gi,actorBlueprints:s=[],bindActor:r=async()=>{},unbindActor:o=async()=>{},loadRadiusM:a=24,unloadRadiusM:c=38}={}){if(!e)throw new Error("07C region id required");if(!t)throw new Error("07C production actor pipeline required");if(!Array.isArray(s)||s.length===0)throw new Error("07C actor blueprints required");if(!(a>0&&c>a))throw new Error("07C region hysteresis invalid");let l=new Set;for(let u of s){if(!u?.id||!u?.typeId)throw new Error("07C invalid actor blueprint");if(l.has(u.id))throw new Error("07C duplicate actor blueprint "+u.id);l.add(u.id)}this.id=e,this.pipeline=t,this.store=i,this.actorBlueprints=_f(s),this.bindActor=r,this.unbindActor=o,this.loadRadiusM=Ma(a,"loadRadiusM"),this.unloadRadiusM=Ma(c,"unloadRadiusM"),this.lifecycle="UNLOADED",this.operation=null,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.duplicateCount=0,this.lastSerializedAt=0,this.lastOffscreenMs=0,this.lastRestoreProgressPreserved=!1,this.lastRestoreIdsStable=!1,this.lastError=null}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}get actorIds(){return this.actorBlueprints.map(e=>e.id)}get activeActors(){return this.actorIds.map(e=>this.pipeline.getActor(e)).filter(Boolean)}desiredLifecycle(e){let t=Ma(e,"distanceM");return this.lifecycle==="ACTIVE"?t>=this.unloadRadiusM?"UNLOADED":"ACTIVE":this.lifecycle==="UNLOADED"?t<=this.loadRadiusM?"ACTIVE":"UNLOADED":this.lifecycle}serialize(e=Date.now()){Ma(e,"serialize now");let t=this.actorIds.map(i=>{let s=this.pipeline.getActor(i);if(!s)throw new Error("07C cannot serialize missing actor "+i);return s.serialize(e)});return{version:1,regionId:this.id,serializedAt:e,actorIds:[...this.actorIds],actors:t}}async load(e=Date.now()){return this.isActive?{rehydrated:!1,alreadyActive:!0,offscreenMs:0}:this.operation?this.operation:(this.operation=this._load(e).finally(()=>{this.operation=null}),this.operation)}async _load(e){this.lastError=null;let t=this.store.load(this.id);this.lifecycle=t?"REHYDRATING":"LOADING";let i=[],s=[],r=new Map;try{if(t){if(t.version!==1||t.regionId!==this.id)throw new Error("07C invalid region snapshot");if(t.actorIds.join("|")!==this.actorIds.join("|"))throw new Error("07C region actor identity mismatch");for(let o of t.actors){r.set(o.actorId,o.kernel?.goals?.progress);let a=this.pipeline.restoreActor(o,e);i.push(a)}}else for(let o of this.actorBlueprints){let a=this.pipeline.createActor(o);i.push(a)}for(let o of i)await this.bindActor(o),s.push(o);return this.lifecycle="ACTIVE",this.loadCount++,t&&(this.restoreCount++,this.lastOffscreenMs=Math.max(0,e-t.serializedAt),this.lastRestoreIdsStable=i.length===this.actorIds.length&&i.every((o,a)=>o.id===this.actorIds[a]),this.lastRestoreProgressPreserved=i.every(o=>{let a=r.get(o.id);return Number.isFinite(a)&&Math.abs(o.kernel.goals.progress-a)<1e-12})),{rehydrated:!!t,alreadyActive:!1,offscreenMs:this.lastOffscreenMs,actorIds:i.map(o=>o.id)}}catch(o){this.lastError=o;for(let a of s.slice().reverse())try{await this.unbindActor(a)}catch{}for(let a of i.slice().reverse()){if(a.bindingId){this.duplicateCount++;continue}this.pipeline.destroyActor(a.id)}throw this.lifecycle="UNLOADED",o}}async unload(e=Date.now()){return this.isActive?this.operation?this.operation:(this.operation=this._unload(e).finally(()=>{this.operation=null}),this.operation):null}async _unload(e){this.lastError=null,this.lifecycle="SERIALIZING";let t=this.serialize(e);this.store.save(this.id,t),this.lastSerializedAt=e,this.lifecycle="UNLOADING";try{for(let i of this.actorIds){let s=this.pipeline.getActor(i);if(!s)throw new Error("07C missing actor during unload "+i);await this.unbindActor(s)}for(let i of this.actorIds){let s=this.pipeline.getActor(i);if(!s)throw new Error("07C actor disappeared before destroy "+i);if(s.bindingId)throw this.duplicateCount++,new Error("07C actor still bound during destroy "+i);this.pipeline.destroyActor(i)}return this.lifecycle="UNLOADED",this.unloadCount++,_f(t)}catch(i){throw this.lastError=i,i}}update({dtMs:e=0,now:t=Date.now(),foodProgressPerSecond:i=.008}={}){if(!this.isActive)return 0;let r=Math.max(0,Ma(e,"dtMs"))/1e3*Math.max(0,Ma(i,"foodProgressPerSecond")),o=0;for(let a of this.activeActors)a.kernel.update({now:t,foodValid:!0,foodEventAt:t,foodProgressDelta:r}),o++;return o}};var xf=(n,e)=>{if(!Number.isFinite(n))throw new Error("07D invalid "+e);return n},yf=class{constructor({region:e,pipeline:t,actorId:i,hazardCenter:s={x:0,z:0},triggerDelayMs:r=1800}={}){if(!e)throw new Error("07D region required");if(!t)throw new Error("07D actor pipeline required");if(!i)throw new Error("07D actor id required");this.region=e,this.pipeline=t,this.actorId=i,this.hazardCenter={x:xf(s.x,"hazardCenter.x"),z:xf(s.z,"hazardCenter.z")},this.triggerDelayMs=Math.max(0,xf(r,"triggerDelayMs")),this.stage="WAITING_REGION",this.firstActiveAt=0,this.hazardEventId=0,this.hazardEmittedAt=0,this.hazardObserved=!1,this.recoveryObserved=!1,this.streamOutObserved=!1,this.restoreObserved=!1,this.baselineProgress=null,this.recoveredProgress=null,this.lastUnloadCount=e.unloadCount??0,this.lastRestoreCount=e.restoreCount??0}get actor(){return this.pipeline.getActor(this.actorId)}update(e=Date.now()){xf(e,"update now"),(this.region.unloadCount??0)>this.lastUnloadCount&&(this.streamOutObserved=!0,this.lastUnloadCount=this.region.unloadCount),(this.region.restoreCount??0)>this.lastRestoreCount&&(this.restoreObserved=!0,this.lastRestoreCount=this.region.restoreCount);let t=this.actor;if(!this.region.isActive||!t)return this.streamOutObserved&&(this.stage="STREAMED_OUT"),this.snapshot();if(this.firstActiveAt||(this.firstActiveAt=e,this.stage="FOOD_ACTIVE"),!this.hazardEventId&&e-this.firstActiveAt>=this.triggerDelayMs){this.baselineProgress=t.kernel.goals.progress;let r=t.kernel.createHazardEvent({center:this.hazardCenter,at:e});this.hazardEventId=r.id,this.hazardEmittedAt=e,this.stage="HAZARD_EMITTED"}let i=t.kernel.memory.state,s=t.kernel.goals.activeGoal;return this.hazardEventId&&s==="HAZARD"&&(this.hazardObserved=!0,this.stage="HAZARD_ACTIVE"),this.hazardObserved&&i==="CALM"&&s==="FOOD"&&(this.recoveryObserved=!0,this.recoveredProgress=t.kernel.goals.progress,this.stage=this.restoreObserved?"RESTORED":"BEHAVIOR_RECOVERED"),this.restoreObserved&&this.recoveryObserved&&(this.stage="RESTORED"),this.snapshot()}completion({assetLoadCount:e,duplicateCount:t=0,regressionStatus:i="WAITING"}={}){let s=Number.isFinite(this.baselineProgress)&&Number.isFinite(this.recoveredProgress)&&this.recoveredProgress>=this.baselineProgress-1e-12,r={hazard_emitted:this.hazardEventId>0,hazard_observed:this.hazardObserved,recovery_observed:this.recoveryObserved,progress_preserved:s,stream_out_observed:this.streamOutObserved,restore_observed:this.restoreObserved,region_ids_stable:this.region.lastRestoreIdsStable===!0,region_progress_preserved:this.region.lastRestoreProgressPreserved===!0,asset_load_one:e===1,duplicates:t===0,regression:i==="PASS"},o=Object.entries(r).filter(([,a])=>!a).map(([a])=>a);return{pass:o.length===0,failed:o,checks:r}}snapshot(){return{version:1,stage:this.stage,actorId:this.actorId,hazardEventId:this.hazardEventId,hazardEmittedAt:this.hazardEmittedAt,hazardObserved:this.hazardObserved,recoveryObserved:this.recoveryObserved,streamOutObserved:this.streamOutObserved,restoreObserved:this.restoreObserved,baselineProgress:this.baselineProgress,recoveredProgress:this.recoveredProgress}}};var Ef=(n,e)=>{if(!Number.isFinite(n))throw new Error("08A invalid "+e);return n},U0=class{constructor({id:e,center:t,region:i}={}){if(!e||!i)throw new Error("08A region entry requires id + region");this.id=e,this.center={x:Ef(t?.x,"center.x"),z:Ef(t?.z,"center.z")},this.region=i,this.lastDistance=1/0,this.transitions=0,this.loads=0,this.unloads=0,this.lastAction="NONE"}},Er=class{constructor({entries:e=[]}={}){this.entries=new Map,this.stepCount=0,this.duplicateRegionIds=0;for(let t of e)this.register(t)}register({id:e,center:t,region:i}){if(this.entries.has(e))throw this.duplicateRegionIds++,new Error("08A duplicate region id "+e);let s=new U0({id:e,center:t,region:i});return this.entries.set(e,s),s}get(e){return this.entries.get(e)??null}list(){return[...this.entries.values()]}get size(){return this.entries.size}distances(e){return this.list().map(t=>({id:t.id,distance:Math.hypot(Ef(e?.x,"player.x")-t.center.x,Ef(e?.z,"player.z")-t.center.z)}))}nearest(e){return this.distances(e).sort((i,s)=>i.distance-s.distance||i.id.localeCompare(s.id))[0]??null}async step({playerPosition:e,dtMs:t=0,now:i=Date.now(),foodProgressPerSecond:s=.006}={}){this.stepCount++;let r=[];for(let o of this.list()){let a=Math.hypot(e.x-o.center.x,e.z-o.center.z);o.lastDistance=a;let c=o.region;if(!c.operation){if(c.lifecycle==="UNLOADED"&&a<=c.loadRadiusM){let l=c.loadCount,u=await c.load(i);c.loadCount>l&&(o.loads++,o.transitions++,o.lastAction=u.rehydrated?"REHYDRATE":"LOAD",r.push({regionId:o.id,action:o.lastAction}))}else if(c.lifecycle==="ACTIVE"&&a>=c.unloadRadiusM){let l=c.unloadCount;await c.unload(i),c.unloadCount>l&&(o.unloads++,o.transitions++,o.lastAction="UNLOAD",r.push({regionId:o.id,action:"UNLOAD"}))}}c.isActive&&c.update({dtMs:t,now:i,foodProgressPerSecond:s})}return r}snapshot(){return{version:1,regions:this.list().map(e=>({id:e.id,center:{...e.center},lifecycle:e.region.lifecycle,hasSnapshot:e.region.hasSnapshot,lastDistance:e.lastDistance,loads:e.loads,unloads:e.unloads,transitions:e.transitions}))}}};var Mr=(n,e)=>{if(!Number.isFinite(n))throw new Error("08B invalid "+e);return n},va=class{constructor({prefetchRadiusM:e=46,minApproachSpeedMps:t=.35,minApproachDot:i=.35}={}){this.prefetchRadiusM=Mr(e,"prefetchRadiusM"),this.minApproachSpeedMps=Mr(t,"minApproachSpeedMps"),this.minApproachDot=Mr(i,"minApproachDot"),this.lastPosition=null,this.lastNow=null,this.velocity={x:0,z:0,speed:0},this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,this.selectionCount=0}updateMotion(e,t){let i={x:Mr(e?.x,"position.x"),z:Mr(e?.z,"position.z")};if(Mr(t,"now"),this.lastPosition&&Number.isFinite(this.lastNow)&&t>this.lastNow){let s=(t-this.lastNow)/1e3,r=(i.x-this.lastPosition.x)/s,o=(i.z-this.lastPosition.z)/s,a=Math.hypot(r,o);this.velocity={x:r,z:o,speed:a}}else this.velocity={x:0,z:0,speed:0};return this.lastPosition=i,this.lastNow=t,{...this.velocity}}choose({position:e,regions:t,excludeIds:i=[]}={}){let s={x:Mr(e?.x,"position.x"),z:Mr(e?.z,"position.z")},r=new Set(i),o=this.velocity;if(o.speed<this.minApproachSpeedMps)return this.targetId=null,this.targetDistance=1/0,this.targetApproach=0,null;let a=null;for(let l of t??[]){if(!l?.id||r.has(l.id)||l.lifecycle!=="UNLOADED")continue;let u=l.center.x-s.x,h=l.center.z-s.z,d=Math.hypot(u,h);if(d>this.prefetchRadiusM||d<=1e-6)continue;let f=(o.x*u+o.z*h)/(o.speed*d);if(f<this.minApproachDot)continue;let m=f*2-d/this.prefetchRadiusM;(!a||m>a.score||m===a.score&&l.id<a.id)&&(a={id:l.id,distance:d,approach:f,score:m})}let c=a?.id??null;return c&&c!==this.targetId&&this.selectionCount++,this.targetId=c,this.targetDistance=a?.distance??1/0,this.targetApproach=a?.approach??0,a}snapshot(){return{version:1,targetId:this.targetId,targetDistance:this.targetDistance,targetApproach:this.targetApproach,velocity:{...this.velocity},selectionCount:this.selectionCount}}};var H0=class{constructor({record:e,definition:t,scene:i,prepared:s,bindingId:r}){this.record=e,this.definition=t,this.scene=i,this.bindingId=r,this.root=new dt,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.root.userData.predictivePrefetch08B=!0,this.model=s.model,this.clips=s.clips,this.mixer=new Ls(this.model),this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.model.scale.setScalar(t.scale),this.model.rotation.y=t.yawOffset,this.model.traverse(o=>{o.isMesh&&(o.castShadow=!!t.presentation.castShadow,o.receiveShadow=t.presentation.receiveShadow!==!1)}),this.root.add(this.model);for(let o of this.clips)this.actions.set(o.name,this.mixer.clipAction(o))}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let i={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of i)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){this.record.setAnimationIntent(e);let i=this.resolveAnimation(e);if(!i)return null;let s=this.actions.get(i);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=i,i}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}attach(){return this.attached?this:(this.record.claimBinding(this.bindingId),this.scene.add(this.root),this.attached=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this)}update(e){this.attached&&(this.syncTransform(),this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.model),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,!0):!1}},Sa=class{constructor({scene:e,assetCache:t}={}){if(!e||!t)throw new Error("08B predictive factory requires scene + frozen asset cache");this.scene=e,this.assetCache=t,this.prefetched=new Map,this.prefetchPromises=new Map,this.bindings=new Map,this.prefetchCount=0,this.prefetchedInstances=0,this.consumedInstances=0,this.fallbackInstances=0,this.duplicateBindingCount=0,this.bindingSequence=0}async prefetch(e,t,i){if(!e||!t||!Number.isInteger(i)||i<1)throw new Error("08B invalid prefetch request");let s=this.prefetched.get(e);if(s&&s.length>=i)return s.length;if(this.prefetchPromises.has(e))return this.prefetchPromises.get(e);let r=(async()=>{let o=this.prefetched.get(e)??[];for(;o.length<i;){let a=await this.assetCache.instantiate(t);o.push(a),this.prefetchedInstances++}return this.prefetched.set(e,o),this.prefetchCount++,o.length})().finally(()=>this.prefetchPromises.delete(e));return this.prefetchPromises.set(e,r),r}preparedCount(e){return this.prefetched.get(e)?.length??0}async bind(e,t){if(this.bindings.has(t.id))throw this.duplicateBindingCount++,new Error("08B duplicate predictive binding "+t.id);let i=null,s=this.prefetched.get(e);s?.length?(i=s.shift(),this.consumedInstances++,s.length===0&&this.prefetched.delete(e)):(i=await this.assetCache.instantiate(t.definition),this.fallbackInstances++);let r=new H0({record:t,definition:t.definition,scene:this.scene,prepared:i,bindingId:"08B_BIND_"+ ++this.bindingSequence});return r.attach(),this.bindings.set(t.id,r),r}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var Mf=(n,e)=>{if(!Number.isFinite(n))throw new Error("08C invalid "+e);return n},vf=class{constructor({maxPreparedInstances:e=2}={}){this.maxPreparedInstances=Math.max(1,Math.floor(Mf(e,"maxPreparedInstances"))),this.currentTarget=null,this.prepared=new Map,this.peakPrepared=0,this.cancellations=0,this.evictedInstances=0,this.consumedInstances=0,this.retargetCount=0,this.staleCompletionCount=0}setTarget(e){let t=e||null;t!==this.currentTarget&&this.retargetCount++,this.currentTarget=t}setPrepared(e,t){let i=Math.max(0,Math.floor(Mf(t,"prepared count")));if(i===0?this.prepared.delete(e):this.prepared.set(e,i),this.peakPrepared=Math.max(this.peakPrepared,this.totalPrepared),this.totalPrepared>this.maxPreparedInstances)throw new Error("08C prepared-instance budget exceeded")}recordDiscard(e,t,{stale:i=!1}={}){let s=Math.max(0,Math.floor(Mf(t,"discard count")));this.setPrepared(e,0),s>0&&(this.cancellations++,this.evictedInstances+=s),i&&this.staleCompletionCount++}recordConsumed(e){this.consumedInstances+=Math.max(0,Math.floor(Mf(e,"consumed count")))}get totalPrepared(){let e=0;for(let t of this.prepared.values())e+=t;return e}snapshot(){return{version:1,maxPreparedInstances:this.maxPreparedInstances,currentTarget:this.currentTarget,prepared:Object.fromEntries(this.prepared),totalPrepared:this.totalPrepared,peakPrepared:this.peakPrepared,cancellations:this.cancellations,evictedInstances:this.evictedInstances,consumedInstances:this.consumedInstances,retargetCount:this.retargetCount,staleCompletionCount:this.staleCompletionCount}}};var Sf=class{constructor({factory:e,maxPreparedInstances:t=2}={}){if(!e)throw new Error("08C bounded prefetch controller requires predictive factory");this.factory=e,this.budget=new vf({maxPreparedInstances:t}),this.targetId=null,this.sequence=0,this.prefetchExecutions=0,this.prefetchByRegion=new Map,this.lastAction="IDLE",this.lastDiscardReason="NONE",this.lastObservedConsumed=e.consumedInstances??0}preparedCount(e){return this.factory.preparedCount(e)}totalPrepared(){let e=0;for(let t of this.factory.prefetched.values())e+=t.length;return e}discard(e,t="RETARGET",{stale:i=!1}={}){if(!e)return 0;let r=this.factory.prefetched.get(e)?.length??0;return r>0&&this.factory.prefetched.delete(e),this.budget.recordDiscard(e,r,{stale:i}),this.lastDiscardReason=t,r>0&&(this.lastAction="EVICTED "+e+" \xD7"+r),r}syncConsumed(){let e=this.factory.consumedInstances??0,t=Math.max(0,e-this.lastObservedConsumed);return t>0&&this.budget.recordConsumed(t),this.lastObservedConsumed=e,t}async retarget(e,t,i=2){let s=e||null,r=this.targetId;r&&r!==s&&this.discard(r,"RETARGET"),this.targetId=s,this.budget.setTarget(s);let o=++this.sequence;if(!s)return this.lastAction=r?"TARGET CLEARED":"IDLE",{target:null,prepared:0,stale:!1};let a=this.factory.preparedCount(s);if(a>=i)return this.budget.setPrepared(s,a),this.lastAction="READY "+s+" \xD7"+a,{target:s,prepared:a,stale:!1};if(this.lastAction="PREFETCHING "+s,await this.factory.prefetch(s,t,i),this.prefetchExecutions++,this.prefetchByRegion.set(s,(this.prefetchByRegion.get(s)??0)+1),o!==this.sequence||this.targetId!==s){let l=this.discard(s,"STALE COMPLETION",{stale:!0});return{target:s,prepared:0,stale:!0,discarded:l}}let c=this.factory.preparedCount(s);return this.budget.setPrepared(s,c),this.lastAction="READY "+s+" \xD7"+c,{target:s,prepared:c,stale:!1}}observeAfterWorldStep(){this.syncConsumed();for(let e of[...this.budget.prepared.keys()]){let t=this.factory.preparedCount(e);this.budget.setPrepared(e,t)}if(this.totalPrepared()>this.budget.maxPreparedInstances)throw new Error("08C factory prepared pool exceeded bounded budget")}executionCount(e){return this.prefetchByRegion.get(e)??0}snapshot(){return{targetId:this.targetId,prefetchExecutions:this.prefetchExecutions,prefetchByRegion:Object.fromEntries(this.prefetchByRegion),lastAction:this.lastAction,lastDiscardReason:this.lastDiscardReason,factoryPrepared:this.totalPrepared(),budget:this.budget.snapshot()}}};var Ge=Object.freeze({version:2,milestone:"09B \u2014 Vertical Beauty Slice",name:"Sunlit Basin",radiusM:33,presentationPass:2,materialFamilies:Object.freeze(["meadow-ground","soil-path","wood","foliage","stone","water"]),depthLayers:Object.freeze(["foreground-ground-cover","gameplay-plane","midground-stone-gate","distant-ridge-silhouette","atmosphere-sky"]),ambientMotionSystems:Object.freeze(["canopy-understory-wind","grass-wind","water-ripples","airborne-pollen"]),layout:Object.freeze({trees:28,grassTufts:320,shrubs:42,flowers:96,rocks:28,ridgeLayers:3,ridgeSegments:12,gateBlocks:14,pollen:240,pathSegments:42,shoreSegments:72}),presentationBudget:Object.freeze({addedDrawCallsMax:14,addedTrianglesMax:18e3,absoluteDrawCallsMax:120,absoluteTrianglesMax:35e4}),acceptance:Object.freeze({frameRule:["place","physical substance","atmosphere","scale","motion","character","gameplay purpose"],automatedProofIsPresentationAcceptance:!1,humanPresentationReviewRequired:!0,preserve06J:!0,preserveTest08:!0,broadContentExpansion:!1})});function jM(n=10166310){let e=n>>>0;return()=>(e=1664525*e+1013904223>>>0,e/4294967296)}var $M="/assets/3d/sunlit-basin/v1/",Af=Object.freeze(["tree_a_tall_broad.glb","tree_b_short_wide.glb","tree_c_leaning_asym.glb","rock_a_medium_angular.glb","rock_b_flat_shore.glb","rock_c_hero_boulder.glb","shrub_a_round.glb","shrub_b_spreading.glb","grass_tuft_a.glb","flower_patch_a.glb","gate_sunlit_basin.glb","ridge_a_layered.glb","ridge_b_spur.glb"]),QM=Object.freeze(["MAT_BARK_DARK","MAT_BARK_WARM","MAT_FOLIAGE_DARK","MAT_FOLIAGE_MID","MAT_FOLIAGE_LIGHT","MAT_STONE_WARM","MAT_STONE_DARK","MAT_GRASS_MEADOW","MAT_GRASS_DARK","MAT_FLOWER_GOLD","MAT_FLOWER_ROSE","MAT_FLOWER_BLUE"]),ev=Object.freeze(["09B tree trunks p2","09B canopy p2","09B grass blades p2","09B understory shrubs p2","09B flowers p2","09B rocks p2","09B layered ridge p2","09B weathered stone gate p2"]),bf=Object.freeze([...[[-28,-15,1.05,-.2],[-25,-5,.95,.35],[-27,8,1.1,-.55],[-22,18,1,.15],[22,-18,1.08,.45],[27,-7,.94,-.2],[26,8,1.04,.3]].map((n,e)=>({asset:"tree_a_tall_broad.glb",id:"TA"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-17,-25,1,.1],[-5,-28,.92,-.45],[10,-27,1.08,.35],[19,-23,.96,-.15],[29,18,1.02,.55],[-28,23,.98,-.25]].map((n,e)=>({asset:"tree_b_short_wide.glb",id:"TB"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-18,26,1.02,-.55],[-5,29,.95,.3],[10,28,1.06,-.15],[20,24,.98,.48],[30,2,.94,-.35]].map((n,e)=>({asset:"tree_c_leaning_asym.glb",id:"TC"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-7,-11,.8,.1],[-3,12,.9,.5],[14,15,1,-.2],[18,-8,.85,.7],[-18,-7,1,-.4],[-21,13,.9,.2]].map((n,e)=>({asset:"rock_a_medium_angular.glb",id:"RA"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-19,1,.78,.1],[-18,7,.92,.5],[-16,13,.84,-.2],[-9,16,.88,.7],[-5,12,.72,-.4],[-6,3,.8,.2]].map((n,e)=>({asset:"rock_b_flat_shore.glb",id:"RB"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[16,7,1,.3],[-20,-18,.82,-.5],[24,18,.75,.1]].map((n,e)=>({asset:"rock_c_hero_boulder.glb",id:"RC"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-20,-13,.8,.2],[-23,-2,.95,.4],[-20,11,.75,-.4],[-15,20,.9,.2],[-6,22,.82,-.1],[14,21,.9,.4],[22,14,.78,-.3],[23,2,.88,.2],[18,-12,.82,-.2],[8,-22,.9,.3]].map((n,e)=>({asset:"shrub_a_round.glb",id:"SA"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...[[-12,-22,.85,.2],[-25,-11,.82,-.4],[-24,16,.86,.1],[-10,25,.78,.5],[5,24,.84,-.2],[17,18,.82,.3],[25,-12,.88,-.5],[14,-20,.8,.1]].map((n,e)=>({asset:"shrub_b_spreading.glb",id:"SB"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),...Array.from({length:60},(n,e)=>{let t=8+e%5*4.4,i=e*2.399963229728653,s=Math.cos(i)*t+(e%3-1)*.7,r=Math.sin(i)*t+((e+1)%3-1)*.7;return{asset:"grass_tuft_a.glb",id:"G"+e,x:s,z:r,scale:.55+e%7*.055,yaw:e*.73%(Math.PI*2)}}),...[[-7,-17,.85,.2],[2,-14,.8,-.3],[11,-8,.9,.5],[15,4,.82,-.1],[8,14,.86,.4],[-2,18,.78,-.5],[-15,17,.9,.2],[-20,-6,.82,-.3]].map((n,e)=>({asset:"flower_patch_a.glb",id:"F"+e,x:n[0],z:n[1],scale:n[2],yaw:n[3]})),{asset:"gate_sunlit_basin.glb",id:"GATE",x:5,z:25,scale:1,yaw:0},{asset:"ridge_a_layered.glb",id:"RGA0",x:-18,z:50,scale:1.45,yaw:0},{asset:"ridge_a_layered.glb",id:"RGA1",x:18,z:56,scale:1.3,yaw:.04},{asset:"ridge_b_spur.glb",id:"RGB0",x:-22,z:67,scale:1.55,yaw:-.03},{asset:"ridge_b_spur.glb",id:"RGB1",x:22,z:72,scale:1.42,yaw:.02}]),Hn=Object.freeze({requiredAssetLoads:13,requiredPrototypeReplacements:8,maxMaterialBatches:8,maxPlacementCount:130,maxAddedTriangles:18e3,absoluteDrawCallsMax:120,absoluteTrianglesMax:35e4,soldierAssetLoadsExpected:1,duplicateRuntimeStateExpected:0}),ez=Object.freeze({milestone:"09D \u2014 Sunlit Basin Asset Integration Proof",assetKit:"09C v1",supportsOpenPresentationMilestone:"09B \u2014 Vertical Beauty Slice",broadContentExpansion:!1,humanRuntimeReviewRequired:!0,presentationAcceptance:!1});var $t=n=>document.getElementById(n),xS=$t("boot"),tp=$t("error"),gD=$t("fps"),_D=$t("calls"),xD=$t("tris"),x_=$t("char"),yS=$t("scale"),yD=$t("zone");addEventListener("error",n=>{tp.style.display="block",tp.textContent=`Runtime error:
`+n.message});addEventListener("unhandledrejection",n=>{tp.style.display="block",tp.textContent=`Load/runtime error:
`+(n.reason?.message||n.reason||"Unknown rejection")});var $a=matchMedia("(pointer:coarse)").matches,z0=1831565813;function Mt(){return z0=z0*1664525+1013904223>>>0,z0/4294967296}function dx(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function ES(n=96){let e=new Uint8Array(n*n*4);for(let i=0;i<n;i++)for(let s=0;s<n;s++){let r=(i*n+s)*4,o=Math.floor(255*(.36+.64*dx(s*.31,i*.37)));e[r]=e[r+1]=e[r+2]=o,e[r+3]=255}let t=new or(e,n,n,Tn);return t.wrapS=t.wrapT=Ti,t.colorSpace=Oi,t.needsUpdate=!0,t}var _i=ES();_i.repeat.set(26,26);var np=ES(64);np.repeat.set(18,36);var ge=new Dc;ge.fog=new Ic(12045264,.0057);var En=new Yt(53,innerWidth/innerHeight,.1,800);En.position.set(0,6,10);var Xe=new tf({antialias:!0,powerPreference:"high-performance"}),ls=Math.min(devicePixelRatio,$a?1.32:1.8),ED=$a?1:1.25,MD=Math.min(devicePixelRatio,$a?1.42:1.9);Xe.setPixelRatio(ls);Xe.setSize(innerWidth,innerHeight);Xe.outputColorSpace=zt;Xe.toneMapping=nl;Xe.toneMappingExposure=1.05;Xe.shadowMap.enabled=!0;Xe.shadowMap.type=od;document.body.prepend(Xe.domElement);yS.textContent=ls.toFixed(2)+"\xD7";var Rr=new Jc(14282751,5069125,1.85);ge.add(Rr);var Qa=new jc(9545908,.18);ge.add(Qa);var Dt=new jr(16773072,3.35);Dt.position.set(-46,58,18);Dt.castShadow=!0;Dt.shadow.mapSize.set($a?1024:1536,$a?1024:1536);Dt.shadow.camera.left=-46;Dt.shadow.camera.right=46;Dt.shadow.camera.top=46;Dt.shadow.camera.bottom=-46;Dt.shadow.camera.near=1;Dt.shadow.camera.far=155;Dt.shadow.bias=-18e-5;Dt.shadow.normalBias=.025;ge.add(Dt,Dt.target);var ln={top:{value:new re(6203856)},mid:{value:new re(12572628)},bottom:{value:new re(15785404)},sunDir:{value:new I(-.5,.8,.25)},sunWarm:{value:new re(16766874)}},vD=new sn({side:on,depthWrite:!1,uniforms:ln,vertexShader:"varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}"});ge.add(new Be(new mn(390,40,20),vD));function Xs(n){return-18+Math.sin(n*.048)*4.2+Math.sin(n*.013)*2.2}function In(n,e){let t=Math.sin(n*.029)*3+Math.cos(e*.032)*2.4+Math.sin((n+e)*.021)*1.65,i=Math.sin(n*.093+e*.032)*.5+Math.cos(e*.108-n*.025)*.38,s=n-Xs(e),r=-Math.exp(-(s*s)/54)*5.2,o=Math.exp(-((n-46)*(n-46)+(e+54)*(e+54))/920)*7,a=Math.exp(-((n+50)*(n+50)+(e+42)*(e+42))/1600)*3;return t+i+r+o+a}function SD(n,e){let i=(In(n+.45,e)-In(n-.45,e))/.9,s=(In(n,e+.45)-In(n,e-.45))/(2*.45);return Math.min(1,Math.hypot(i,s))}var un={cx:0,cz:4,w:18,d:5,top:0};un.cx=Xs(un.cz);un.top=Math.max(In(un.cx-10,un.cz),In(un.cx+10,un.cz))+.72;function fx(n,e){return Math.abs(n-un.cx)<un.w*.5&&Math.abs(e-un.cz)<un.d*.5}function Pe(n,e){return fx(n,e)?un.top:In(n,e)}function AD(n,e){return Math.abs(n-Xs(e))<5.8&&!fx(n,e)}function bD(n,e,t){let i=new re,s=SD(e,t),r=Math.exp(-Math.pow((e-Xs(t))/11,2)),o=dx(e*.9,t*.9);return s>.55?i.setRGB(.31,.34,.31):n<-1.4?i.setRGB(.26,.38,.25):n<1?i.setRGB(.38,.52,.29):n<4.4?i.setRGB(.43,.58,.31):i.setRGB(.35,.49,.28),i.offsetHSL((o-.5)*.012,(r-.5)*.035,(o-.5)*.055),i.lerp(new re(.38,.36,.3),Math.max(0,s-.32)*.48),i}var Hu=new ui(240,240,170,170);Hu.rotateX(-Math.PI/2);var Tf=Hu.attributes.position,MS=[];for(let n=0;n<Tf.count;n++){let e=Tf.getX(n),t=Tf.getZ(n),i=In(e,t);Tf.setY(n,i);let s=bD(i,e,t);MS.push(s.r,s.g,s.b)}Hu.setAttribute("color",new Oe(MS,3));Hu.computeVertexNormals();var y_=new Te({vertexColors:!0,roughness:.92,bumpMap:_i,bumpScale:.2}),vS=new Be(Hu,y_);vS.receiveShadow=!0;ge.add(vS);var E_=new Gc([new I(5,0,60),new I(-2,0,41),new I(-12,0,22),new I(un.cx,0,un.cz),new I(-3,0,-13),new I(18,0,-31),new I(36,0,-44),new I(47,0,-55)]),SS=[],AS=[],bS=[],M_=112;for(let n=0;n<=M_;n++){let e=n/M_,t=E_.getPoint(e),i=E_.getPoint(Math.min(1,e+.0025)),s=i.clone().sub(t).normalize(),r=new I(-s.z,0,s.x),o=2.45+Math.sin(n*.41)*.18;for(let a=0;a<2;a++){let c=a?1:-1,l=t.clone().addScaledVector(r,o*c);l.y=Pe(l.x,l.z)+.07,SS.push(l.x,l.y,l.z),bS.push(a,e*8)}}for(let n=0;n<M_;n++){let e=n*2,t=e+1,i=e+2,s=e+3;AS.push(e,i,t,t,i,s)}var zu=new lt;zu.setAttribute("position",new Oe(SS,3));zu.setAttribute("uv",new Oe(bS,2));zu.setIndex(AS);zu.computeVertexNormals();var Gf=new Te({color:9795412,roughness:.96,bumpMap:np,bumpScale:.18}),TS=new Be(zu,Gf);TS.receiveShadow=!0;ge.add(TS);var RS=[],wS=[],CS=[],kl=128;for(let n=0;n<=kl;n++){let e=-110+n*(220/kl),t=Xs(e),i=5.55;RS.push(t-i,-2.3,e,t+i,-2.3,e),CS.push(0,n/kl*14,1,n/kl*14)}for(let n=0;n<kl;n++){let e=n*2,t=e+1,i=e+2,s=e+3;wS.push(e,i,t,t,i,s)}var Gu=new lt;Gu.setAttribute("position",new Oe(RS,3));Gu.setAttribute("uv",new Oe(CS,2));Gu.setIndex(wS);Gu.computeVertexNormals();var ip={time:{value:0},sunDir:{value:new I(-.5,.8,.2)},deep:{value:new re(1987175)},shallow:{value:new re(7649730)},sky:{value:new re(12572628)}},TD=new sn({transparent:!0,depthWrite:!1,uniforms:ip,vertexShader:"uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}",fragmentShader:"uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}"});ge.add(new Be(Gu,TD));var px=[],qp=(n,e,t,i=7)=>px.push({x:n,z:e,r:t,h:i});function uc(n,e){n.onBeforeCompile=t=>{t.uniforms.uTime={value:0},t.uniforms.uWind={value:.48},n.userData.shader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${e.toFixed(3)};transformed.x+=sw*max(position.y,0.);`)},n.customProgramCacheKey=()=>`wind-${e}`}var v_=new Te({color:5912356,roughness:1,bumpMap:_i,bumpScale:.08}),yu=new Te({color:2843447,roughness:.86}),Eu=new Te({color:3766343,roughness:.84}),Mu=new Te({color:5079632,roughness:.84});uc(yu,.018);uc(Eu,.022);uc(Mu,.025);var ku=238,IS=new Ci(.29,.48,5.4,8);IS.translate(0,2.7,0);var RD=new cr(1.55,1),DS=new cr(1.18,1),sp=new Ve(IS,v_,ku),mx=new Ve(RD,yu,ku),gx=new Ve(DS,Eu,ku),_x=new Ve(DS,Mu,ku);sp.castShadow=sp.receiveShadow=!0;mx.castShadow=gx.castShadow=_x.castShadow=!0;var ot=new Fe,Rf=0,wD=0;for(;Rf<ku&&wD++<5e3;){let n=(Mt()-.5)*224,e=(Mt()-.5)*224;if(Math.abs(n-Xs(e))<9.2||Math.hypot(n-5,e-60)<10||Math.hypot(n-38,e+45)<14)continue;let t=In(n,e),i=.72+Mt()*1.12,s=Mt()*Math.PI*2;ot.position.set(n,t,e),ot.rotation.set(0,s,0),ot.scale.set(i,i,i),ot.updateMatrix(),sp.setMatrixAt(Rf,ot.matrix);let r=t+5.15*i;for(let[o,a,c,l,u]of[[mx,0,0,0,1],[gx,.75,.18,.05,.86],[_x,-.62,.42,-.18,.78]]){let h=Math.cos(s),d=Math.sin(s),f=a*h-l*d,m=a*d+l*h;ot.position.set(n+f*i,r+c*i,e+m*i),ot.rotation.set(0,s+Mt()*.5,0),ot.scale.set(i*u*(.9+Mt()*.18),i*u*(.9+Mt()*.16),i*u*(.9+Mt()*.18)),ot.updateMatrix(),o.setMatrixAt(Rf,ot.matrix)}qp(n,e,.5*i,7*i),Rf++}ge.add(sp,mx,gx,_x);var vu=new Te({color:4684355,roughness:.9});uc(vu,.03);var CD=new Jn(.72,0),PS=260,xx=new Ve(CD,vu,PS);for(let n=0;n<PS;n++){let e=(Mt()-.5)*214,t=(Mt()-.5)*214;if(Math.abs(e-Xs(t))<7)continue;let i=In(e,t),s=.45+Mt()*.95;ot.position.set(e,i+.35*s,t),ot.rotation.set(0,Mt()*6.28,0),ot.scale.set(s*1.35,s*.75,s),ot.updateMatrix(),xx.setMatrixAt(n,ot.matrix)}xx.castShadow=!0;ge.add(xx);var yx=new Te({color:6590018,roughness:1,side:_t});uc(yx,.06);var NS=new Ii(.052,.62,3);NS.translate(0,.31,0);var LS=2600,OS=new Ve(NS,yx,LS);for(let n=0;n<LS;n++){let e=(Mt()-.5)*220,t=(Mt()-.5)*220;if(Math.abs(e-Xs(t))<6.3)continue;let i=In(e,t),s=.45+Mt()*1.15;ot.position.set(e,i,t),ot.rotation.set(0,Mt()*6.28,0),ot.scale.set(s,s,s),ot.updateMatrix(),OS.setMatrixAt(n,ot.matrix)}ge.add(OS);var Ex=new Te({color:15785392,roughness:.78,emissive:1905671,emissiveIntensity:.15});uc(Ex,.025);var ID=new mn(.065,5,4),BS=310,FS=new Ve(ID,Ex,BS);for(let n=0;n<BS;n++){let e=Mt(),t=E_.getPoint(e),i=t.x+(Mt()-.5)*14,s=t.z+(Mt()-.5)*14,r=In(i,s);ot.position.set(i,r+.18,s);let o=.65+Mt()*.8;ot.scale.setScalar(o),ot.updateMatrix(),FS.setMatrixAt(n,ot.matrix)}ge.add(FS);function DD(n){let e=new cr(1,1),t=e.attributes.position;for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),o=t.getZ(i),a=.78+.3*dx(i*.37+n*11,i*.73+n*7);t.setXYZ(i,s*a,r*a,o*a)}return e.computeVertexNormals(),e}var PD=new Te({color:7699320,roughness:.93,bumpMap:_i,bumpScale:.12}),US=120,ND=[0,1,2].map(n=>{let e=new Ve(DD(n),PD,Math.ceil(US/3));return e.castShadow=e.receiveShadow=!0,ge.add(e),e}),LD=[0,0,0];for(let n=0;n<US;n++){let e=(Mt()-.5)*215,t=(Mt()-.5)*215,i=In(e,t),s=.22+Mt()*1.25,r=n%3,o=LD[r]++;ot.position.set(e,i+.12,t),ot.rotation.set(Mt()*.23,Mt()*6.28,Mt()*.2),ot.scale.set(s*1.45,s*.72,s),ot.updateMatrix(),ND[r].setMatrixAt(o,ot.matrix),s>.62&&qp(e,t,.78*s,1.4*s)}var OD=new Te({color:6846579,roughness:1,flatShading:!0}),BD=new Te({color:8556682,roughness:1,flatShading:!0}),HS=new Ii(15,36,7,1),rp=28,op=new Ve(HS,OD,rp),ap=new Ve(HS,BD,rp);for(let n=0;n<rp;n++){let e=n/rp*Math.PI*2,t=145+Math.sin(n*2.17)*15,i=Math.cos(e)*t,s=Math.sin(e)*t,r=.68+n*13%11/18;ot.position.set(i,7+Math.sin(n)*3,s),ot.rotation.set(0,-e+Mt()*.35,0),ot.scale.set(r*(.8+Mt()*.35),r,r*(.8+Mt()*.35)),ot.updateMatrix(),(n%2?op:ap).setMatrixAt(n,ot.matrix)}ge.add(op,ap);var zS=new Te({color:7754036,roughness:.9,bumpMap:_i,bumpScale:.08}),Yp=new dt;Yp.position.set(un.cx,un.top,un.cz);ge.add(Yp);for(let n=0;n<11;n++){let e=new Be(new ji(1.66,.18,4),zS);e.position.set(-8.1+n*1.62,0,0),e.rotation.y=(n%3-1)*.008,e.castShadow=e.receiveShadow=!0,Yp.add(e)}for(let n of[-1,1])for(let e of[-1,1]){let t=new Be(new Ci(.12,.17,2.45,7),zS);t.position.set(n*8,1.12,e*1.72),t.castShadow=!0,Yp.add(t)}var Jp=new dt,cp=36,lp=-44;Jp.position.set(cp,In(cp,lp),lp);ge.add(Jp);var GS=new Te({color:9538946,roughness:.91,bumpMap:_i,bumpScale:.13});function Vu(n,e,t,i,s,r,o=0){let a=new Be(new ji(i,s,r),GS);a.position.set(n,e,t),a.rotation.y=o,a.castShadow=a.receiveShadow=!0,Jp.add(a),qp(cp+n,lp+t,Math.max(i,r)*.42,s)}Vu(0,2.8,0,7.8,5.6,1.7,.07);Vu(-4.9,4,.2,1.7,8,1.7,.07);Vu(4.9,4,.2,1.7,8,1.7,.07);Vu(0,7.15,.2,11.2,1,1.6,.07);Vu(0,9.35,0,1.3,4.6,1.3);var Wu=new Be(new Wc(3.55,.3,8,26),GS);Wu.position.set(0,10.8,0);Wu.rotation.x=Math.PI/2.35;Wu.rotation.z=.34;Wu.castShadow=!0;Jp.add(Wu);var Zp=48,Kp=-59,FD=In(Zp,Kp),Xu=new dt;Xu.position.set(Zp,FD,Kp);ge.add(Xu);var UD=new Te({color:7696228,roughness:.9,bumpMap:_i,bumpScale:.1}),HD=new Te({color:16767117,emissive:16758861,emissiveIntensity:2.3}),Mx=new Be(new Ci(.6,.85,7.5,9),UD);Mx.position.y=3.75;Mx.castShadow=!0;Xu.add(Mx);var vx=new Be(new mn(.55,14,10),HD);vx.position.y=7.8;Xu.add(vx);var Sx=new Kr(16759130,5.5,18,2);Sx.position.y=7.8;Xu.add(Sx);qp(Zp,Kp,1,8);var ne=new dt;ge.add(ne);ne.position.set(5,Pe(5,60),60);var Bs=null,up=null,Gn={},wf=null,Ua="FALLBACK";function zD(){let n=new dt,e=new Te({color:2775929,roughness:.72}),t=new Te({color:14263676,roughness:.78}),i=new Te({color:3156259,roughness:.92}),s=new Be(new ra(.32,.74,4,8),e);s.position.y=1.18,n.add(s);let r=new Be(new mn(.28,12,8),t);r.position.y=1.86,n.add(r);for(let o of[-1,1]){let a=new Be(new ra(.085,.45,3,6),i);a.position.set(.145*o,.52,0),n.add(a)}n.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),ne.add(n),Bs=n,x_.textContent="FALLBACK"}zD();xS.classList.add("hide");setTimeout(()=>xS.remove(),320);var GD=new gr;GD.load("./assets/Soldier.glb",n=>{Bs&&ne.remove(Bs),Bs=n.scene,Bs.scale.setScalar(1),Bs.rotation.y=Math.PI,Bs.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),ne.add(Bs),up=new Ls(Bs),Gn={};for(let e of n.animations)Gn[e.name]=up.clipAction(e);Ua="GLB",x_.textContent="GLB",kf(Gn.Idle?"Idle":Object.keys(Gn)[0],0)},void 0,n=>{console.warn("Local GLB failed; fallback remains active",n),x_.textContent="FALLBACK"});function kf(n,e=.16){if(!Gn[n]||wf===Gn[n])return;let t=Gn[n];t.reset().play(),wf&&wf.crossFadeTo(t,e,!0),wf=t}var uo=.08,Ql=.3,eu=7.8,jp=!1,S_=0,A_=0,$p=!1,hp=!1,El=0,oo=!0,Sr={},tu=new He,$n=new I;addEventListener("keydown",n=>{Sr[n.code]=!0,n.code==="Space"&&(hp=!0)});addEventListener("keyup",n=>Sr[n.code]=!1);Xe.domElement.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&n.clientX<innerWidth*.36&&n.clientY>innerHeight*.52||n.pointerType==="touch"&&n.clientX>innerWidth*.68&&n.clientY>innerHeight*.54||(jp=!0,S_=n.clientX,A_=n.clientY,Xe.domElement.setPointerCapture(n.pointerId))});Xe.domElement.addEventListener("pointerup",()=>jp=!1);Xe.domElement.addEventListener("pointercancel",()=>jp=!1);Xe.domElement.addEventListener("pointermove",n=>{if(!jp)return;let e=n.clientX-S_,t=n.clientY-A_;uo-=e*.006,Ql=Ze.clamp(Ql+t*.0047,-.05,.9),S_=n.clientX,A_=n.clientY});Xe.domElement.addEventListener("wheel",n=>eu=Ze.clamp(eu+n.deltaY*.008,4.8,14),{passive:!0});var ec=$t("stick"),kS=$t("knob"),dp=$t("sprint"),fp=$t("jump"),Ha=null;function VS(n){let e=ec.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=e.width*.34,r=n.clientX-t,o=n.clientY-i,a=Math.hypot(r,o)||1,c=Math.min(1,s/a);r*=c,o*=c,kS.style.transform=`translate(${r}px,${o}px)`,tu.set(r/s,-o/s)}ec.addEventListener("pointerdown",n=>{n.preventDefault(),Ha=n.pointerId,ec.setPointerCapture(Ha),VS(n)});ec.addEventListener("pointermove",n=>{n.pointerId===Ha&&(n.preventDefault(),VS(n))});function WS(n){(Ha===null||n.pointerId===Ha)&&(Ha=null,tu.set(0,0),kS.style.transform="translate(0,0)")}ec.addEventListener("pointerup",WS);ec.addEventListener("pointercancel",WS);dp.addEventListener("pointerdown",n=>{n.preventDefault(),$p=!0,dp.style.transform="scale(.94)"});for(let n of["pointerup","pointercancel","pointerleave"])dp.addEventListener(n,()=>{$p=!1,dp.style.transform="scale(1)"});fp.addEventListener("pointerdown",n=>{n.preventDefault(),hp=!0,fp.style.transform="scale(.93)"});for(let n of["pointerup","pointercancel","pointerleave"])fp.addEventListener(n,()=>fp.style.transform="scale(1)");var kD=$t("panel");$t("tuneBtn").onclick=()=>kD.classList.toggle("open");var VD=$t("tod"),WD=$t("fog"),XD=$t("wind"),qD=$t("damp");$t("shadowBtn").onclick=n=>{Xe.shadowMap.enabled=!Xe.shadowMap.enabled,n.target.textContent="Dynamic shadows: "+(Xe.shadowMap.enabled?"ON":"OFF")};var YD=new re(6203856),JD=new re(6582157),ZD=new re(12572628),KD=new re(12818319),jD=new re(15785404),$D=new re(15769969);function QD(){let n=+VD.value,e=(n-6)/14,t=.1+e*Math.PI*.91,i=Math.max(.04,Math.sin(t)),s=-1.65+e*1.55;Dt.position.set(Math.cos(s)*78,i*90,Math.sin(s)*78),Dt.intensity=.88+i*3.5;let r=Dt.position.clone().normalize();ln.sunDir.value.copy(r),ip.sunDir.value.copy(r);let o=Ze.smoothstep(Math.abs(n-13),3,7);ln.top.value.copy(YD).lerp(JD,o),ln.mid.value.copy(ZD).lerp(KD,o*.82),ln.bottom.value.copy(jD).lerp($D,o),ip.sky.value.copy(ln.mid.value),Dt.color.setRGB(1,.94-.12*o,.81-.17*o),Rr.intensity=.9+i*1.42,Qa.intensity=.16+i*.21,ge.fog.density=.0022+ +WD.value*.0082,ge.fog.color.copy(ln.mid.value).lerp(ln.bottom.value,.42),Xe.toneMappingExposure=.84+i*.31}function eP(n){for(let e of px){let t=n.x-e.x,i=n.z-e.z,s=Math.hypot(t,i),r=e.r+.36;if(s<r&&s>1e-4){let o=r-s;n.x+=t/s*o,n.z+=i/s*o}}}function tP(n,e){let t=e.clone(),i=e.clone().sub(n),s=13;for(let r=1;r<=s;r++){let o=r/s,a=n.clone().addScaledVector(i,o),c=Pe(a.x,a.z)+.66;if(a.y<c){t=n.clone().addScaledVector(i,Math.max(.14,(r-1)/s));break}for(let l of px)if(Math.hypot(a.x-l.x,a.z-l.z)<l.r+.26&&a.y<Pe(l.x,l.z)+l.h)return n.clone().addScaledVector(i,Math.max(.14,(r-1)/s))}return t}function nP(n,e){return Math.hypot(n-Zp,e-Kp)<10?"OVERLOOK BEACON":Math.hypot(n-cp,e-lp)<16?"RUINED OBSERVATORY":fx(n,e)?"OLD RIVER BRIDGE":Math.abs(n-Xs(e))<9?"RIVER VALLEY":e<2?"HIGHLAND TRAIL":"FOREST APPROACH"}var tv=new Qc,G0=0,Cf=0,If=0,k0=0;function XS(){requestAnimationFrame(XS);let n=Math.min(.033,tv.getDelta()),e=tv.elapsedTime;QD();let t=new I(-Math.sin(uo),0,-Math.cos(uo)),i=new I(Math.cos(uo),0,-Math.sin(uo)),s=new I;Sr.KeyW&&s.add(t),Sr.KeyS&&s.sub(t),Sr.KeyD&&s.add(i),Sr.KeyA&&s.sub(i),tu.lengthSq()>.002&&(s.addScaledVector(t,tu.y),s.addScaledVector(i,tu.x));let r=(Sr.ShiftLeft||$p)&&s.lengthSq()>.01,o=AD(ne.position.x,ne.position.z)&&Pe(ne.position.x,ne.position.z)<-1.1,a=(r?8.7:4.8)*(o?.58:1);if(s.lengthSq()>0){s.normalize();let m=s.multiplyScalar(a),x=1-Math.exp(-(oo?12:5)*n);$n.x=Ze.lerp($n.x,m.x,x),$n.z=Ze.lerp($n.z,m.z,x)}else{let m=Math.exp(-(oo?10:2.5)*n);$n.x*=m,$n.z*=m}hp&&oo&&(El=7.7,oo=!1),hp=!1,El-=18.6*n,ne.position.x+=$n.x*n,ne.position.z+=$n.z*n,ne.position.x=Ze.clamp(ne.position.x,-112,112),ne.position.z=Ze.clamp(ne.position.z,-112,112),eP(ne.position);let c=Pe(ne.position.x,ne.position.z);ne.position.y+=El*n,ne.position.y<=c?(ne.position.y=c,El<0&&(El=0),oo=!0):oo=!1;let l=Math.hypot($n.x,$n.z);if(l>.18){let x=(Math.atan2($n.x,$n.z)-ne.rotation.y+Math.PI)%(Math.PI*2)-Math.PI;ne.rotation.y+=x*(1-Math.exp(-14*n))}Ua==="GLB"&&oo&&(l<.22?kf(Gn.Idle?"Idle":Object.keys(Gn)[0]):l<6?kf(Gn.Walk?"Walk":Gn.Run?"Run":Object.keys(Gn)[0]):kf(Gn.Run?"Run":Object.keys(Gn)[0])),up&&up.update(n*(r?1.08:1));let u=ne.position.clone().add(new I(0,1.42,0)),h=u.clone().add(new I(Math.sin(uo)*Math.cos(Ql)*eu,Math.sin(Ql)*eu+1,Math.cos(uo)*Math.cos(Ql)*eu));h=tP(u,h);let d=1-Math.pow(1-+qD.value,n*60);En.position.lerp(h,d),En.lookAt(u),En.fov=Ze.lerp(En.fov,r?60:53,1-Math.exp(-5*n)),En.updateProjectionMatrix(),Dt.target.position.copy(ne.position),Dt.target.updateMatrixWorld(),ip.time.value=e;let f=+XD.value;for(let m of[yu,Eu,Mu,vu,yx,Ex])m.userData.shader&&(m.userData.shader.uniforms.uTime.value=e,m.userData.shader.uniforms.uWind.value=f);if(vx.position.y=7.8+Math.sin(e*1.5)*.1,Sx.intensity=5+Math.sin(e*2.1)*.6,yD.textContent=nP(ne.position.x,ne.position.z),globalThis.__raaiFrameHooks)for(let m of globalThis.__raaiFrameHooks)m(performance.now(),n);if(Xe.render(ge,En),G0++,Cf+=n,k0++,If+=n,Cf>.55){let m=Math.round(G0/Cf);gD.textContent=m,G0=0,Cf=0,_D.textContent=Xe.info.render.calls,xD.textContent=Xe.info.render.triangles.toLocaleString()}if($a&&If>1.8){let m=k0/If,x=ls;m<53.5?x=Math.max(ED,ls-.08):m>58.7&&(x=Math.min(MD,ls+.04)),Math.abs(x-ls)>.001&&(ls=x,Xe.setPixelRatio(ls),Xe.setSize(innerWidth,innerHeight,!1),yS.textContent=ls.toFixed(2)+"\xD7"),If=0,k0=0}}XS();addEventListener("resize",()=>{En.aspect=innerWidth/innerHeight,En.updateProjectionMatrix(),Xe.setPixelRatio(ls),Xe.setSize(innerWidth,innerHeight)});var iP="06A_LIVING_WORLD_FLOCK",Mn={count:12,triggerRadius:7,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400},qS=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,pp=ne.position.x+Math.sin(qS)*8,mp=ne.position.z+Math.cos(qS)*8,sP=Pe(pp,mp)+.18,rP=new mn(.12,7,5),YS=new ui(.26,.1),oP=new Te({color:2634039,roughness:.78,metalness:.03}),JS=new Te({color:6714746,roughness:.82,side:_t}),qu=new Ve(rP,oP,Mn.count),Yu=new Ve(YS,JS,Mn.count),Ju=new Ve(YS,JS,Mn.count);qu.castShadow=!0;Yu.castShadow=!0;Ju.castShadow=!0;ge.add(qu,Yu,Ju);var b_=[];for(let n=0;n<Mn.count;n++){let e=n/Mn.count*Math.PI*2+n*37%11*.041,t=1+n*53%7*.18,i=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(n%3-1)*.22;b_.push({px:i,pz:s,ex:i+Math.cos(r)*(5+n%4*.72),ez:s+Math.sin(r)*(5+n%4*.72),rise:2.8+n%5*.42,phase:n*.83,yaw:r})}var ms="CALM",gp=performance.now(),Vl=0,Ax=0,Ml=new Fe,vl=new Fe,Sl=new Fe,V0=document.getElementById("worldState"),nv=document.getElementById("worldDistance"),nu=document.getElementById("worldResult");function aP(n){return 1-Math.pow(1-n,3)}function cP(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function ZS(){return Math.hypot(ne.position.x-pp,ne.position.z-mp)}function Al(n,e){ms=n,gp=e,Vl=0,V0&&(V0.textContent=n,V0.style.color=n==="CALM"?"#a8f0b5":n==="FLEEING"?"#ffd18a":n==="DISPERSED"?"#ffb095":"#b9d9ff")}function lP(n){nv&&(nv.textContent=n.toFixed(1)+" m"),nu&&Ax===0&&(nu.textContent=n<=Mn.triggerRadius?"TRIGGERING":"APPROACH")}function uP(n,e,t){let i=pp+n.px,s=mp+n.pz,r=Pe(i,s)+.22,o=pp+n.ex,a=mp+n.ez,c=sP+n.rise,l=i,u=r,h=s,d=n.yaw,f=0,m=t-gp;if(ms==="CALM")u+=Math.sin(t*.0021+n.phase)*.022,d=n.phase*.37+Math.sin(t*7e-4+n.phase)*.18;else if(ms==="FLEEING"){let M=Math.min(1,m/Mn.fleeMs),T=aP(M);l=Ze.lerp(i,o,T),h=Ze.lerp(s,a,T),u=Ze.lerp(r,c,T)+Math.sin(M*Math.PI)*.75,f=1}else if(ms==="DISPERSED"){let M=t*.0014+n.phase;l=o+Math.cos(M)*.45,h=a+Math.sin(M)*.45,u=c+Math.sin(M*1.8)*.18,d=M+Math.PI/2,f=1}else if(ms==="RETURNING"){let M=Math.min(1,m/Mn.returnMs),T=cP(M);l=Ze.lerp(o,i,T),h=Ze.lerp(a,s,T),u=Ze.lerp(c,r,T)+Math.sin(M*Math.PI)*.92,d=n.yaw+Math.PI,f=1}let x=f?Math.sin(t*.02+n.phase)*.72:Math.sin(t*.006+n.phase)*.08;Ml.position.set(l,u,h),Ml.rotation.set(0,d,0),Ml.scale.set(.88,.58,1.45),Ml.updateMatrix(),qu.setMatrixAt(e,Ml.matrix);let g=Math.cos(d),p=-Math.sin(d);vl.position.set(l+g*.13,u+.015,h+p*.13),vl.rotation.set(-Math.PI/2,d,x),vl.scale.set(1,1,1),vl.updateMatrix(),Yu.setMatrixAt(e,vl.matrix),Sl.position.set(l-g*.13,u+.015,h-p*.13),Sl.rotation.set(-Math.PI/2,d,-x),Sl.scale.set(1,1,1),Sl.updateMatrix(),Ju.setMatrixAt(e,Sl.matrix)}function hP(n){let e=ZS();lP(e),ms==="CALM"&&e<=Mn.triggerRadius?(Ax++,Al("FLEEING",n),nu&&(nu.textContent="RESPONDED \u2713",nu.style.color="#ffd18a")):ms==="FLEEING"&&n-gp>=Mn.fleeMs?Al("DISPERSED",n):ms==="DISPERSED"?e>Mn.resetRadius?(Vl||(Vl=n),n-Vl>=Mn.farHoldMs&&Al("RETURNING",n)):Vl=0:ms==="RETURNING"&&(e<=Mn.triggerRadius?Al("FLEEING",n):n-gp>=Mn.returnMs&&Al("CALM",n));for(let t=0;t<b_.length;t++)uP(b_[t],t,n);qu.instanceMatrix.needsUpdate=!0,Yu.instanceMatrix.needsUpdate=!0,Ju.instanceMatrix.needsUpdate=!0}function KS(n){requestAnimationFrame(KS),hP(n)}requestAnimationFrame(KS);globalThis.__livingWorld06A={marker:iP,get state(){return ms},get responses(){return Ax},get distance(){return ZS()},triggerRadius:Mn.triggerRadius,resetRadius:Mn.resetRadius};var dP="06B_WORLD_DISTURBANCE_PROPAGATION",ys={secondaryCount:10,disturbanceSpeed:18,fleeMs:1250,returnMs:1350,farHoldMs:1200},_p=globalThis.__livingWorld06A;if(!_p||_p.marker!=="06A_LIVING_WORLD_FLOCK")throw new Error("06B requires accepted 06A public world-state API");qu.frustumCulled=!1;Yu.frustumCulled=!1;Ju.frustumCulled=!1;var Qp=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,jS=ne.position.x,$S=ne.position.z,QS=Math.sin(Qp),eA=Math.cos(Qp),fP=Math.cos(Qp),pP=-Math.sin(Qp),mP=jS+QS*8,gP=$S+eA*8,Su=jS+QS*15.5+fP*4.5,Au=$S+eA*15.5+pP*4.5,_P=Pe(Su,Au)+.18,xP=Math.hypot(Su-mP,Au-gP),T_=xP/ys.disturbanceSpeed*1e3,yP=new mn(.12,7,5),tA=new ui(.26,.1),EP=new Te({color:3425613,roughness:.78,metalness:.03}),nA=new Te({color:8823208,roughness:.82,side:_t}),Zu=new Ve(yP,EP,ys.secondaryCount),Ku=new Ve(tA,nA,ys.secondaryCount),ju=new Ve(tA,nA,ys.secondaryCount);Zu.castShadow=!0;Ku.castShadow=!0;ju.castShadow=!0;Zu.frustumCulled=!1;Ku.frustumCulled=!1;ju.frustumCulled=!1;ge.add(Zu,Ku,ju);var R_=[];for(let n=0;n<ys.secondaryCount;n++){let e=n/ys.secondaryCount*Math.PI*2+n*29%9*.047,t=.85+n*41%6*.19,i=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(n%3-1)*.18+.12;R_.push({px:i,pz:s,ex:i+Math.cos(r)*(4.7+n%4*.66),ez:s+Math.sin(r)*(4.7+n%4*.66),rise:2.5+n%4*.46,phase:n*.91,yaw:r})}var bl=new Fe,Tl=new Fe,Rl=new Fe,ti="CALM",xp=performance.now(),iA=0,iv=_p.state,Wl=null,w_=0,W0=document.getElementById("worldBState"),X0=document.getElementById("worldLinkState"),sv=document.getElementById("worldLinkDelay"),rv=document.getElementById("worldBDistance");function MP(n){return 1-Math.pow(1-n,3)}function vP(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function sA(){return Math.hypot(ne.position.x-Su,ne.position.z-Au)}function ba(n,e){ti=n,xp=e,W0&&(W0.textContent=n,W0.style.color=n==="CALM"?"#a8f0b5":n==="ALERT_DELAY"?"#ffe59a":n==="FLEEING"?"#ffd18a":n==="DISPERSED"?"#ffb095":"#b9d9ff")}function Vf(n,e="#a8f0b5"){X0&&(X0.textContent=n,X0.style.color=e)}function SP(n){w_++,Wl={emittedAt:n,arrivalAt:n+T_,id:w_},(ti==="CALM"||ti==="RETURNING")&&ba("ALERT_DELAY",n),Vf("TRAVELING","#ffe59a"),sv&&(sv.textContent=Math.round(T_)+" ms")}function AP(n,e,t){let i=Su+n.px,s=Au+n.pz,r=Pe(i,s)+.22,o=Su+n.ex,a=Au+n.ez,c=_P+n.rise,l=i,u=r,h=s,d=n.yaw,f=0,m=t-xp;if(ti==="CALM"||ti==="ALERT_DELAY")u+=Math.sin(t*.002+n.phase)*.021,d=n.phase*.34+Math.sin(t*72e-5+n.phase)*.16,ti==="ALERT_DELAY"&&(u+=Math.sin(t*.014+n.phase)*.025);else if(ti==="FLEEING"){let M=Math.min(1,m/ys.fleeMs),T=MP(M);l=Ze.lerp(i,o,T),h=Ze.lerp(s,a,T),u=Ze.lerp(r,c,T)+Math.sin(M*Math.PI)*.68,f=1}else if(ti==="DISPERSED"){let M=t*.00135+n.phase;l=o+Math.cos(M)*.4,h=a+Math.sin(M)*.4,u=c+Math.sin(M*1.75)*.16,d=M+Math.PI/2,f=1}else if(ti==="RETURNING"){let M=Math.min(1,m/ys.returnMs),T=vP(M);l=Ze.lerp(o,i,T),h=Ze.lerp(a,s,T),u=Ze.lerp(c,r,T)+Math.sin(M*Math.PI)*.78,d=n.yaw+Math.PI,f=1}let x=f?Math.sin(t*.0205+n.phase)*.72:Math.sin(t*.006+n.phase)*.08;bl.position.set(l,u,h),bl.rotation.set(0,d,0),bl.scale.set(.88,.58,1.45),bl.updateMatrix(),Zu.setMatrixAt(e,bl.matrix);let g=Math.cos(d),p=-Math.sin(d);Tl.position.set(l+g*.13,u+.015,h+p*.13),Tl.rotation.set(-Math.PI/2,d,x),Tl.scale.set(1,1,1),Tl.updateMatrix(),Ku.setMatrixAt(e,Tl.matrix),Rl.position.set(l-g*.13,u+.015,h-p*.13),Rl.rotation.set(-Math.PI/2,d,-x),Rl.scale.set(1,1,1),Rl.updateMatrix(),ju.setMatrixAt(e,Rl.matrix)}function bP(n){let e=_p.state,t=sA();rv&&(rv.textContent=t.toFixed(1)+" m"),e==="FLEEING"&&iv!=="FLEEING"&&SP(n),iv=e,Wl&&n>=Wl.arrivalAt&&(Wl=null,iA++,ba("FLEEING",n),Vf("ARRIVED \u2713","#ffd18a")),ti==="FLEEING"&&n-xp>=ys.fleeMs?ba("DISPERSED",n):ti==="DISPERSED"&&(e==="RETURNING"||e==="CALM")?(ba("RETURNING",n),Vf("RESETTING","#b9d9ff")):ti==="RETURNING"&&(Wl?ba("ALERT_DELAY",n):n-xp>=ys.returnMs&&(ba("CALM",n),Vf("IDLE")));for(let i=0;i<R_.length;i++)AP(R_[i],i,n);Zu.instanceMatrix.needsUpdate=!0,Ku.instanceMatrix.needsUpdate=!0,ju.instanceMatrix.needsUpdate=!0}function rA(n){requestAnimationFrame(rA),bP(n)}requestAnimationFrame(rA);globalThis.__livingWorld06B={marker:dP,get secondaryState(){return ti},get secondaryResponses(){return iA},get disturbanceEvents(){return w_},get disturbanceTravelMs(){return T_},get playerDistanceToSecondary(){return sA()},directPlayerTrigger:!1,source:"06A primary flock state transition"};var TP="06C_LOCAL_DISTURBANCE_MEMORY",Dr={reedCount:28,disturbedMs:2300,settlingMs:2800,directPlayerTrigger:!1},yp=globalThis.__livingWorld06B;if(!yp||yp.marker!=="06B_WORLD_DISTURBANCE_PROPAGATION")throw new Error("06C requires frozen accepted 06B public world-state API");var em=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,oA=ne.position.x,aA=ne.position.z,cA=Math.sin(em),lA=Math.cos(em),uA=Math.cos(em),hA=-Math.sin(em),RP=oA+cA*15.5+uA*4.5,wP=aA+lA*15.5+hA*4.5,ov=oA+cA*15.7+uA*6.2,av=aA+lA*15.7+hA*6.2,dA=new ui(.18,1.55,1,3);dA.translate(0,.775,0);var CP=new Te({color:9411157,roughness:.96,metalness:0,side:_t}),tc=new Ve(dA,CP,Dr.reedCount);tc.castShadow=!0;tc.receiveShadow=!0;tc.frustumCulled=!1;ge.add(tc);var C_=[];for(let n=0;n<Dr.reedCount;n++){let e=n*2.399963229728653,t=.35+n%7*.115,i=Math.cos(e)*t,s=Math.sin(e)*t*.72,r=.76+n*17%9*.035,o=n*.83%Math.PI;C_.push({px:i,pz:s,scaleY:r,yaw:o,phase:n*.71})}var nc="CALM",Ep=performance.now(),fA=0,cv=yp.secondaryState,bu=0,wl=new Fe,q0=document.getElementById("worldMemoryState"),Y0=document.getElementById("worldMemoryAge"),iu=document.getElementById("worldMemoryResult");function I_(n,e){nc=n,Ep=e,q0&&(q0.textContent=n,q0.style.color=n==="CALM"?"#a8f0b5":n==="DISTURBED"?"#ffd18a":"#b9d9ff")}function IP(n){fA++,bu=n,I_("DISTURBED",n),iu&&(iu.textContent="MEMORY ACTIVE \u2713",iu.style.color="#ffd18a")}function DP(n,e){let t=n-Ep;if(nc==="DISTURBED"){let s=.34-.055*Math.min(1,t/Dr.disturbedMs),r=Math.sin(n*.012+e)*.065;return s+r}return nc==="SETTLING"?(1-Math.min(1,t/Dr.settlingMs))*(.27+.075*Math.sin(n*.01+e)):.018*Math.sin(n*.0018+e)}function PP(n){let e=ov-RP,t=av-wP,i=Math.max(1e-4,Math.hypot(e,t)),s=e/i,r=t/i;for(let o=0;o<C_.length;o++){let a=C_[o],c=ov+a.px,l=av+a.pz,u=Pe(c,l)+.035,h=DP(n,a.phase),d=.82+o*13%7*.045,f=h*d;wl.position.set(c,u,l),wl.rotation.set(r*f,a.yaw,-s*f),wl.scale.set(.8,a.scaleY,1),wl.updateMatrix(),tc.setMatrixAt(o,wl.matrix)}tc.instanceMatrix.needsUpdate=!0}function NP(n){let e=yp.secondaryState;e==="FLEEING"&&cv!=="FLEEING"&&IP(n),cv=e,nc==="DISTURBED"&&n-Ep>=Dr.disturbedMs?I_("SETTLING",n):nc==="SETTLING"&&n-Ep>=Dr.settlingMs&&(I_("CALM",n),iu&&(iu.textContent="SETTLED")),Y0&&(bu?Y0.textContent=((n-bu)/1e3).toFixed(1)+" s":Y0.textContent="\u2014"),PP(n)}function pA(n){requestAnimationFrame(pA),NP(n)}requestAnimationFrame(pA);globalThis.__livingWorld06C={marker:TP,get state(){return nc},get events(){return fA},get ageMs(){return bu?performance.now()-bu:0},disturbedMs:Dr.disturbedMs,settlingMs:Dr.settlingMs,directPlayerTrigger:!1,source:"accepted 06B Flock B transition to FLEEING"};var LP="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR",zs={arrivalDelayMs:1800,avoidTravelMs:2450,calmHoldMs:550,directReturnMs:2500,detourOffsetM:2.8,directPlayerTrigger:!1},za=globalThis.__livingWorld06C;if(!za||za.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06D requires frozen accepted 06C public world-memory API");var tm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,OP=ne.position.x,BP=ne.position.z,mA=Math.sin(tm),gA=Math.cos(tm),bx=Math.cos(tm),Tx=-Math.sin(tm),Rx=OP+mA*15.7+bx*6.2,wx=BP+gA*15.7+Tx*6.2,Xl=Rx-bx*3.4,ql=wx-Tx*3.4,J0=Rx+bx*3.4,Z0=wx+Tx*3.4,FP=Rx+mA*zs.detourOffsetM,UP=wx+gA*zs.detourOffsetM,su=new dt;ge.add(su);var HP=new Jn(.5,1),zP=new Ii(.115,.55,7),GP=new Te({color:9069895,roughness:.9,metalness:0}),kP=new Te({color:7754301,roughness:.92,metalness:0}),qs=new Ve(HP,GP,5),hc=new Ve(zP,kP,2);qs.castShadow=!0;hc.castShadow=!0;qs.frustumCulled=!1;hc.frustumCulled=!1;su.add(qs,hc);var Cl=new Fe;function bo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){Cl.position.set(t,i,s),Cl.scale.set(r,o,a),Cl.rotation.set(c,l,u),Cl.updateMatrix(),n.setMatrixAt(e,Cl.matrix)}bo(qs,0,0,.42,0,.72,.55,1.08);bo(qs,1,0,.62,.5,.48,.48,.48);bo(qs,2,-.33,.25,-.2,.32,.34,.38);bo(qs,3,.33,.25,-.2,.32,.34,.38);bo(qs,4,0,.48,-.6,.25,.25,.25);bo(hc,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);bo(hc,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);qs.instanceMatrix.needsUpdate=!0;hc.instanceMatrix.needsUpdate=!0;var br="WAITING",ru=performance.now(),_A=0,lv=za.events,xA="NONE",Il=0,us=Xl,hs=ql,uv=us,hv=hs,K0=document.getElementById("worldBehaviorState"),j0=document.getElementById("worldRouteChoice"),Ar=document.getElementById("worldBehaviorResult");function Ta(n,e){br=n,ru=e,K0&&(K0.textContent=n,K0.style.color=n==="WAITING"?"#d6d6d6":n==="AVOIDING"?"#ffd18a":n==="HOLDING"?"#ffe59a":n==="DIRECT_RETURN"?"#9fe0ff":"#a8f0b5")}function Ra(n,e,t){xA=n,j0&&(j0.textContent=e,j0.style.color=t)}function dv(n,e,t,i){let s=1-i;return s*s*n+2*s*i*e+i*i*t}function fv(n){return n*n*(3-2*n)}function VP(n){_A++,Ta("AVOIDING",n),Ra("MEMORY_DETOUR","DETOUR: MEMORY","#ffd18a"),Ar&&(Ar.textContent="MEMORY CHANGED ROUTE \u2713",Ar.style.color="#ffd18a")}function WP(n){let e=us-uv,t=hs-hv,i=Math.hypot(e,t)>1e-5,s=su.rotation.y;i&&(s=Math.atan2(e,t));let r=br==="AVOIDING"||br==="DIRECT_RETURN"?Math.max(0,Math.sin((n-ru)*.011))*.12:0,o=Pe(us,hs)+.03+r;su.position.set(us,o,hs),su.rotation.y=s,uv=us,hv=hs}function XP(n){let e=za.events;if(e>lv&&(lv=e,us=Xl,hs=ql,Ta("ARRIVAL_DELAY",n),Ra("PENDING","READING WORLD\u2026","#ffe59a"),Ar&&(Ar.textContent="LATE ACTOR INBOUND")),br==="ARRIVAL_DELAY"&&n-ru>=zs.arrivalDelayMs)za.state!=="CALM"?VP(n):(Ta("DIRECT_RETURN",n),Ra("DIRECT","DIRECT: WORLD CLEAR","#9fe0ff"));else if(br==="AVOIDING"){let t=Math.min(1,(n-ru)/zs.avoidTravelMs),i=fv(t);us=dv(Xl,FP,J0,i),hs=dv(ql,UP,Z0,i),t>=1&&(us=J0,hs=Z0,Ta("HOLDING",n),Il=0,Ra("WAIT_FOR_CLEAR","WAITING FOR CLEAR","#ffe59a"))}else if(br==="HOLDING")za.state==="CALM"?(Il||(Il=n+zs.calmHoldMs),n>=Il&&(Ta("DIRECT_RETURN",n),Ra("DIRECT","DIRECT: MEMORY CLEARED","#9fe0ff"))):Il=0;else if(br==="DIRECT_RETURN"){let t=Math.min(1,(n-ru)/zs.directReturnMs),i=fv(t);us=Ze.lerp(J0,Xl,i),hs=Ze.lerp(Z0,ql,i),t>=1&&(us=Xl,hs=ql,Ta("COMPLETE",n),Ra("PROVED","DETOUR THEN DIRECT \u2713","#a8f0b5"),Ar&&(Ar.textContent="WORLD STATE AFFECTED BEHAVIOR \u2713",Ar.style.color="#a8f0b5"))}WP(n)}function yA(n){requestAnimationFrame(yA),XP(n)}requestAnimationFrame(yA);globalThis.__livingWorld06D={marker:LP,get state(){return br},get routeChoice(){return xA},get events(){return _A},directPlayerTrigger:!1,reads:"06C persistent world-memory state",arrivalDelayMs:zs.arrivalDelayMs,avoidTravelMs:zs.avoidTravelMs,directReturnMs:zs.directReturnMs};var qP="06E_SPATIALLY_SCOPED_MEMORY",_o={arrivalDelayMs:1800,travelMs:2450,memoryRadiusM:1.8,laneOffsetM:3.35,directPlayerTrigger:!1},Tu=globalThis.__livingWorld06C,pv=globalThis.__livingWorld06D;if(!Tu||Tu.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06E requires frozen accepted 06C memory API");if(!pv||pv.marker!=="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR")throw new Error("06E requires frozen accepted 06D behavior API");var nm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,YP=ne.position.x,JP=ne.position.z,Cx=Math.sin(nm),Ix=Math.cos(nm),Dx=Math.cos(nm),Px=-Math.sin(nm),EA=YP+Cx*15.7+Dx*6.2,MA=JP+Ix*15.7+Px*6.2,vA=EA-Cx*_o.laneOffsetM,SA=MA-Ix*_o.laneOffsetM,wa=vA-Dx*3.4,Ca=SA-Px*3.4,Yl=vA+Dx*3.4,Jl=SA+Px*3.4;function ZP(n,e,t,i,s,r){let o=s-t,a=r-i,c=o*o+a*a,l=c>1e-9?Ze.clamp(((n-t)*o+(e-i)*a)/c,0,1):0,u=t+o*l,h=i+a*l;return Math.hypot(n-u,e-h)}var AA=ZP(EA,MA,wa,Ca,Yl,Jl),Mp=new dt;ge.add(Mp);var KP=new Jn(.5,1),jP=new Ii(.115,.55,7),$P=new Te({color:8160133,roughness:.91,metalness:0}),QP=new Te({color:6712688,roughness:.93,metalness:0}),Ys=new Ve(KP,$P,5),dc=new Ve(jP,QP,2);Ys.castShadow=!0;dc.castShadow=!0;Ys.frustumCulled=!1;dc.frustumCulled=!1;Mp.add(Ys,dc);var Dl=new Fe;function To(n,e,t,i,s,r,o,a,c=0,l=0,u=0){Dl.position.set(t,i,s),Dl.scale.set(r,o,a),Dl.rotation.set(c,l,u),Dl.updateMatrix(),n.setMatrixAt(e,Dl.matrix)}To(Ys,0,0,.42,0,.72,.55,1.08);To(Ys,1,0,.62,.5,.48,.48,.48);To(Ys,2,-.33,.25,-.2,.32,.34,.38);To(Ys,3,.33,.25,-.2,.32,.34,.38);To(Ys,4,0,.48,-.6,.25,.25,.25);To(dc,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);To(dc,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Ys.instanceMatrix.needsUpdate=!0;dc.instanceMatrix.needsUpdate=!0;var Eo="WAITING",ou=performance.now(),bA=0,mv=Tu.events,Zl=!1,TA="NONE",ds=wa,fs=Ca,D_=ds,P_=fs,$0=document.getElementById("worldSpatialState"),au=document.getElementById("worldSpatialOverlap"),Q0=document.getElementById("worldSpatialChoice"),vr=document.getElementById("worldSpatialResult");function Pl(n,e){Eo=n,ou=e,$0&&($0.textContent=n,$0.style.color=n==="WAITING"?"#d6d6d6":n==="ARRIVAL_DELAY"?"#ffe59a":n==="DIRECT"?"#9fe0ff":n==="AVOIDING"?"#ffd18a":"#a8f0b5")}function Df(n,e,t){TA=n,Q0&&(Q0.textContent=e,Q0.style.color=t)}function gv(n){return n*n*(3-2*n)}function eN(n){let e=ds-D_,t=fs-P_;Math.hypot(e,t)>1e-5&&(Mp.rotation.y=Math.atan2(e,t));let s=Eo==="DIRECT"||Eo==="AVOIDING"?Math.max(0,Math.sin((n-ou)*.011))*.11:0;Mp.position.set(ds,Pe(ds,fs)+.03+s,fs),D_=ds,P_=fs}function tN(n){let e=Tu.events;if(e>mv&&(mv=e,bA++,ds=wa,fs=Ca,D_=ds,P_=fs,Pl("ARRIVAL_DELAY",n),Df("PENDING","SAME MEMORY \xB7 CHECKING SPACE","#ffe59a"),vr&&(vr.textContent="CONTROL ACTOR INBOUND")),Eo==="ARRIVAL_DELAY"&&n-ou>=_o.arrivalDelayMs){let t=Tu.state!=="CALM";Zl=AA<=_o.memoryRadiusM,au&&(au.textContent=Zl?"YES":"NO",au.style.color=Zl?"#ffd18a":"#a8f0b5"),t&&Zl?(Pl("AVOIDING",n),Df("DETOUR","DETOUR: LOCAL MEMORY","#ffd18a")):(Pl("DIRECT",n),Df("DIRECT","DIRECT: OUTSIDE MEMORY","#9fe0ff"),vr&&(vr.textContent=t?"MEMORY ACTIVE \xB7 ACTOR UNAFFECTED \u2713":"WORLD CLEAR \xB7 DIRECT",vr.style.color="#a8f0b5"))}else if(Eo==="DIRECT"){let t=Math.min(1,(n-ou)/_o.travelMs),i=gv(t);ds=Ze.lerp(wa,Yl,i),fs=Ze.lerp(Ca,Jl,i),t>=1&&(ds=Yl,fs=Jl,Pl("COMPLETE",n),Df("PROVED","LOCAL SCOPE \u2713","#a8f0b5"),vr&&(vr.textContent="SAME MEMORY \xB7 DIFFERENT LOCATION \xB7 NO EFFECT \u2713",vr.style.color="#a8f0b5"))}else if(Eo==="AVOIDING"){let t=Math.min(1,(n-ou)/_o.travelMs),i=gv(t),s=(wa+Yl)*.5-Cx*2,r=(Ca+Jl)*.5-Ix*2,o=1-i;ds=o*o*wa+2*o*i*s+i*i*Yl,fs=o*o*Ca+2*o*i*r+i*i*Jl,t>=1&&Pl("COMPLETE",n)}eN(n)}function RA(n){requestAnimationFrame(RA),tN(n)}requestAnimationFrame(RA);au&&(au.textContent="PENDING");globalThis.__livingWorld06E={marker:qP,get state(){return Eo},get overlap(){return Zl},get choice(){return TA},get events(){return bA},directPlayerTrigger:!1,memoryRadiusM:_o.memoryRadiusM,controlPathDistanceToMemoryM:AA,expectedOverlap:!1,reads:"same 06C memory state with spatial path query"};var nN="06F_STIMULUS_PRIORITY_ARBITRATION",kn={arrivalDelayMs:1800,foodBecomesValidAfterMs:120,arbitrationDelayMs:180,hazardPriority:100,foodPriority:40,escapeTravelMs:2550,escapeOffsetM:3.2,directPlayerTrigger:!1},Ru=globalThis.__livingWorld06C,_v=globalThis.__livingWorld06E;if(!Ru||Ru.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06F requires frozen accepted 06C memory API");if(!_v||_v.marker!=="06E_SPATIALLY_SCOPED_MEMORY")throw new Error("06F requires frozen accepted 06E spatial-memory API");var im=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,iN=ne.position.x,sN=ne.position.z,Nx=Math.sin(im),Lx=Math.cos(im),sm=Math.cos(im),rm=-Math.sin(im),wA=iN+Nx*15.7+sm*6.2,CA=sN+Lx*15.7+rm*6.2,om=wA-sm*3.9-Nx*.65,am=CA-rm*3.9-Lx*.65,rN=wA+sm*3.7,oN=CA+rm*3.7,xv=om-Nx*kn.escapeOffsetM-sm*.8,yv=am-Lx*kn.escapeOffsetM-rm*.8,vp=new dt;ge.add(vp);var aN=new Jn(.5,1),cN=new Ii(.115,.55,7),lN=new Te({color:12155959,roughness:.9,metalness:0}),uN=new Te({color:10183727,roughness:.92,metalness:0}),Js=new Ve(aN,lN,5),fc=new Ve(cN,uN,2);Js.castShadow=!0;fc.castShadow=!0;Js.frustumCulled=!1;fc.frustumCulled=!1;vp.add(Js,fc);var Nl=new Fe;function Ro(n,e,t,i,s,r,o,a,c=0,l=0,u=0){Nl.position.set(t,i,s),Nl.scale.set(r,o,a),Nl.rotation.set(c,l,u),Nl.updateMatrix(),n.setMatrixAt(e,Nl.matrix)}Ro(Js,0,0,.42,0,.72,.55,1.08);Ro(Js,1,0,.62,.5,.48,.48,.48);Ro(Js,2,-.33,.25,-.2,.32,.34,.38);Ro(Js,3,.33,.25,-.2,.32,.34,.38);Ro(Js,4,0,.48,-.6,.25,.25,.25);Ro(fc,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Ro(fc,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Js.instanceMatrix.needsUpdate=!0;fc.instanceMatrix.needsUpdate=!0;var hN=new mn(.13,7,5),dN=new Te({color:7249222,roughness:.86,metalness:0}),cm=new Ve(hN,dN,7);cm.frustumCulled=!1;var Pf=new Fe;for(let n=0;n<7;n++){let e=n*2.399963229728653,t=.12+n%3*.09,i=rN+Math.cos(e)*t,s=oN+Math.sin(e)*t;Pf.position.set(i,Pe(i,s)+.12+n%2*.04,s),Pf.scale.set(1,1,1),Pf.updateMatrix(),cm.setMatrixAt(n,Pf.matrix)}cm.instanceMatrix.needsUpdate=!0;ge.add(cm);var Ga="WAITING",Sp=performance.now(),Ev=Ru.events,IA=0,DA="NONE",Ap="NONE",bp=!1,Tp=!1,N_=0,L_=0,Gs=om,ks=am,O_=Gs,B_=ks,e_=document.getElementById("worldArbState"),Rp=document.getElementById("worldArbCandidates"),fo=document.getElementById("worldArbLast"),t_=document.getElementById("worldArbWinner"),ki=document.getElementById("worldArbResult");function ka(n,e){Ga=n,Sp=e,e_&&(e_.textContent=n,e_.style.color=n==="WAITING"?"#d6d6d6":n==="ARRIVAL_DELAY"||n==="ARBITRATING"?"#ffe59a":n==="ESCAPING"?"#ffd18a":"#a8f0b5")}function cu(n,e,t){DA=n,t_&&(t_.textContent=e,t_.style.color=t)}function fN(n){return n*n*(3-2*n)}function pN(n){let e=Gs-O_,t=ks-B_;Math.hypot(e,t)>1e-5&&(vp.rotation.y=Math.atan2(e,t));let s=Ga==="ESCAPING"?Math.max(0,Math.sin((n-Sp)*.012))*.115:0;vp.position.set(Gs,Pe(Gs,ks)+.03+s,ks),O_=Gs,B_=ks}function mN(n){IA++,Gs=om,ks=am,O_=Gs,B_=ks,bp=!1,Tp=!1,Ap="NONE",N_=0,L_=0,ka("ARRIVAL_DELAY",n),cu("PENDING","PENDING","#ffe59a"),Rp&&(Rp.textContent="WAITING"),fo&&(fo.textContent="NONE"),ki&&(ki.textContent="ACTOR INBOUND")}function gN(n){let e=[];bp&&e.push({id:"HAZARD",priority:kn.hazardPriority}),Tp&&e.push({id:"FOOD",priority:kn.foodPriority}),e.sort((i,s)=>s.priority-i.priority||i.id.localeCompare(s.id));let t=e[0]?.id||"NONE";Rp&&(Rp.textContent=`HAZARD ${kn.hazardPriority} \xB7 FOOD ${kn.foodPriority}`),t==="HAZARD"?(cu("HAZARD","HAZARD 100","#ffd18a"),ka("ESCAPING",n),ki&&(ki.textContent="NEWER FOOD LOST TO HIGHER PRIORITY \u2713",ki.style.color="#a8f0b5")):t==="FOOD"?(cu("FOOD","FOOD 40","#9fe0ff"),ka("COMPLETE",n),ki&&(ki.textContent="FOOD WON",ki.style.color="#9fe0ff")):(cu("NONE","NONE","#d6d6d6"),ka("COMPLETE",n))}function _N(n){let e=Ru.events;if(e>Ev&&(Ev=e,mN(n)),Ga==="ARRIVAL_DELAY"&&n-Sp>=kn.arrivalDelayMs)bp=Ru.state!=="CALM",bp&&(Ap="HAZARD",fo&&(fo.textContent="HAZARD")),N_=n+kn.foodBecomesValidAfterMs,L_=n+kn.arbitrationDelayMs,ka("ARBITRATING",n);else if(Ga==="ARBITRATING")!Tp&&n>=N_&&(Tp=!0,Ap="FOOD",fo&&(fo.textContent="FOOD (NEWER)",fo.style.color="#9fe0ff")),n>=L_&&gN(n);else if(Ga==="ESCAPING"){let t=Math.min(1,(n-Sp)/kn.escapeTravelMs),i=fN(t);Gs=Ze.lerp(om,xv,i),ks=Ze.lerp(am,yv,i),t>=1&&(Gs=xv,ks=yv,ka("COMPLETE",n),cu("PROVED","HAZARD WON \u2713","#a8f0b5"),ki&&(ki.textContent="PRIORITY > RECENCY \u2713",ki.style.color="#a8f0b5"))}pN(n)}function PA(n){requestAnimationFrame(PA),_N(n)}requestAnimationFrame(PA);globalThis.__livingWorld06F={marker:nN,get state(){return Ga},get winner(){return DA},get lastStimulus(){return Ap},get events(){return IA},priorities:{hazard:kn.hazardPriority,food:kn.foodPriority},foodBecomesValidAfterMs:kn.foodBecomesValidAfterMs,arbitrationDelayMs:kn.arbitrationDelayMs,directPlayerTrigger:!1,rule:"highest priority wins; event recency is not decision authority"};var xN="06G_INTERRUPTED_GOAL_RECOVERY",po={preGoalTravelMs:6200,preGoalCap:.34,evadeTravelMs:1450,recoverHoldMs:450,resumeTravelMs:3e3,evadeOffsetM:3,directPlayerTrigger:!1},wu=globalThis.__livingWorld06C,Mv=globalThis.__livingWorld06F;if(!wu||wu.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06G requires frozen accepted 06C memory API");if(!Mv||Mv.marker!=="06F_STIMULUS_PRIORITY_ARBITRATION")throw new Error("06G requires frozen accepted 06F arbitration API");var lm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,yN=ne.position.x,EN=ne.position.z,um=Math.sin(lm),hm=Math.cos(lm),dm=Math.cos(lm),fm=-Math.sin(lm),Ox=yN+um*15.7+dm*6.2,Bx=EN+hm*15.7+fm*6.2,Fx=Ox-dm*4.4+um*.9,Ux=Bx-fm*4.4+hm*.9,Wf=Ox+dm*4+um*.8,Xf=Bx+fm*4+hm*.8,F_=Ox-um*po.evadeOffsetM-dm*1.2,U_=Bx-hm*po.evadeOffsetM-fm*1.2,wp=new dt;ge.add(wp);var MN=new Jn(.5,1),vN=new Ii(.115,.55,7),SN=new Te({color:4165512,roughness:.9,metalness:0}),AN=new Te({color:3438191,roughness:.92,metalness:0}),Zs=new Ve(MN,SN,5),pc=new Ve(vN,AN,2);Zs.castShadow=!0;pc.castShadow=!0;Zs.frustumCulled=!1;pc.frustumCulled=!1;wp.add(Zs,pc);var Ll=new Fe;function wo(n,e,t,i,s,r,o,a,c=0,l=0,u=0){Ll.position.set(t,i,s),Ll.scale.set(r,o,a),Ll.rotation.set(c,l,u),Ll.updateMatrix(),n.setMatrixAt(e,Ll.matrix)}wo(Zs,0,0,.42,0,.72,.55,1.08);wo(Zs,1,0,.62,.5,.48,.48,.48);wo(Zs,2,-.33,.25,-.2,.32,.34,.38);wo(Zs,3,.33,.25,-.2,.32,.34,.38);wo(Zs,4,0,.48,-.6,.25,.25,.25);wo(pc,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);wo(pc,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);Zs.instanceMatrix.needsUpdate=!0;pc.instanceMatrix.needsUpdate=!0;var bN=new mn(.13,7,5),TN=new Te({color:8372052,roughness:.86,metalness:0}),pm=new Ve(bN,TN,7);pm.frustumCulled=!1;var Nf=new Fe;for(let n=0;n<7;n++){let e=n*2.399963229728653,t=.12+n%3*.09,i=Wf+Math.cos(e)*t,s=Xf+Math.sin(e)*t;Nf.position.set(i,Pe(i,s)+.12+n%2*.04,s),Nf.scale.set(1,1,1),Nf.updateMatrix(),pm.setMatrixAt(n,Nf.matrix)}pm.instanceMatrix.needsUpdate=!0;ge.add(pm);var ps="SEEKING_FOOD",lu=performance.now(),vv=wu.events,NA=0,LA="FOOD",Hx="NONE",OA="NONE",fi=Fx,pi=Ux,Sv=fi,Av=pi,BA=Fx,FA=Ux,bv=F_,Tv=U_,Lf=0,n_=document.getElementById("worldRecoveryState"),Rv=document.getElementById("worldRecoveryGoal"),Va=document.getElementById("worldRecoverySuspended"),Wa=document.getElementById("worldRecoveryInterrupt"),di=document.getElementById("worldRecoveryResult");function qf(n,e){ps=n,lu=e,n_&&(n_.textContent=n,n_.style.color=n==="SEEKING_FOOD"?"#9fe0ff":n==="EVADING"?"#ffd18a":n==="WAIT_CLEAR"?"#ffe59a":n==="RESUMING_FOOD"?"#9fe0ff":"#a8f0b5")}function Yf(n){LA=n,Rv&&(Rv.textContent=n)}function i_(n){return n*n*(3-2*n)}function RN(n){let e=fi-Sv,t=pi-Av;Math.hypot(e,t)>1e-5&&(wp.rotation.y=Math.atan2(e,t));let s=ps==="SEEKING_FOOD"||ps==="EVADING"||ps==="RESUMING_FOOD"?Math.max(0,Math.sin((n-lu)*.011))*.11:0;wp.position.set(fi,Pe(fi,pi)+.03+s,pi),Sv=fi,Av=pi}function wN(n){NA++,BA=fi,FA=pi,Hx="FOOD",OA="HAZARD",Yf("HAZARD"),qf("EVADING",n),Va&&(Va.textContent="FOOD",Va.style.color="#ffe59a"),Wa&&(Wa.textContent="HAZARD",Wa.style.color="#ffd18a"),di&&(di.textContent="FOOD GOAL SUSPENDED",di.style.color="#ffd18a")}function CN(n){let e=wu.events;if(e>vv&&(vv=e,ps==="SEEKING_FOOD"&&wN(n)),ps==="SEEKING_FOOD"){let t=Math.min(1,(n-lu)/po.preGoalTravelMs),i=Math.min(po.preGoalCap,i_(t));fi=Ze.lerp(Fx,Wf,i),pi=Ze.lerp(Ux,Xf,i)}else if(ps==="EVADING"){let t=Math.min(1,(n-lu)/po.evadeTravelMs),i=i_(t);fi=Ze.lerp(BA,F_,i),pi=Ze.lerp(FA,U_,i),t>=1&&(fi=F_,pi=U_,qf("WAIT_CLEAR",n),Yf("WAITING"),di&&(di.textContent="WAITING FOR HAZARD TO CLEAR",di.style.color="#ffe59a"))}else if(ps==="WAIT_CLEAR")wu.state==="CALM"?(Lf||(Lf=n),n-Lf>=po.recoverHoldMs&&(bv=fi,Tv=pi,Hx="NONE",Yf("FOOD"),qf("RESUMING_FOOD",n),Va&&(Va.textContent="NONE",Va.style.color="#a8f0b5"),di&&(di.textContent="RESUMING ORIGINAL FOOD GOAL",di.style.color="#9fe0ff"))):Lf=0;else if(ps==="RESUMING_FOOD"){let t=Math.min(1,(n-lu)/po.resumeTravelMs),i=i_(t);fi=Ze.lerp(bv,Wf,i),pi=Ze.lerp(Tv,Xf,i),t>=1&&(fi=Wf,pi=Xf,qf("COMPLETE",n),Yf("FOOD REACHED"),Wa&&(Wa.textContent="RESOLVED",Wa.style.color="#a8f0b5"),di&&(di.textContent="INTERRUPT \u2192 RECOVER \u2192 RESUME \u2713",di.style.color="#a8f0b5"))}RN(n)}function UA(n){requestAnimationFrame(UA),CN(n)}requestAnimationFrame(UA);globalThis.__livingWorld06G={marker:xN,get state(){return ps},get goal(){return LA},get suspendedGoal(){return Hx},get interrupt(){return OA},get events(){return NA},directPlayerTrigger:!1,originalGoal:"FOOD",interruption:"HAZARD",rule:"suspend original goal, resolve higher-priority interruption, resume original goal when valid"};var IN="06H_STREAMED_PERSISTENCE",Cp=globalThis.__livingWorld06C;if(!Cp||Cp.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06H requires frozen accepted 06C memory API");var mi={...P0,cellId:"06H_CELL_A",directPlayerBehaviorTrigger:!1},mm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,DN=ne.position.x,PN=ne.position.z,zx=Math.sin(mm),Gx=Math.cos(mm),kx=Math.cos(mm),Vx=-Math.sin(mm),gm=DN+zx*10.5+kx*6,_m=PN+Gx*10.5+Vx*6,NN={x:gm-kx*2.2-zx*.4,z:_m-Vx*2.2-Gx*.4},LN={x:gm+kx*3.6+zx*.7,z:_m+Vx*3.6+Gx*.7},Wx=new ya,uu=1/0,H_=!1,Jf=!1,mo="READY",ON=document.getElementById("worldStreamLifecycle"),BN=document.getElementById("worldStreamDistance"),FN=document.getElementById("worldStreamSnapshot"),UN=document.getElementById("worldStreamOffscreen"),HN=document.getElementById("worldStreamMemory"),zN=document.getElementById("worldStreamGoal"),GN=document.getElementById("worldStreamProgress"),kN=document.getElementById("worldStreamDuplicates"),VN=document.getElementById("worldStreamResult");function Os(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function HA(n){return n==="DISTURBED"?14256696:n==="SETTLING"?12758370:7901789}function WN(n){if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()}function XN(n){let e=new dt;e.userData.streamCellId=mi.cellId;let t=new ui(.18,1.42,1,2);t.translate(0,.71,0);let i=new Te({color:HA(n.memory.state),roughness:.96,metalness:0,side:_t}),s=new Ve(t,i,14);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1;let r=new Fe;for(let f=0;f<14;f++){let m=f*2.399963229728653,x=.55+f%5*.19,g=gm+Math.cos(m)*x,p=_m+Math.sin(m)*x;r.position.set(g,Pe(g,p)+.03,p),r.rotation.set(0,m*.37,0),r.scale.set(.82,.78+f%4*.1,1),r.updateMatrix(),s.setMatrixAt(f,r.matrix)}s.instanceMatrix.needsUpdate=!0;let o=new Jn(.48,1),a=new Te({color:4165512,roughness:.9,metalness:0}),c=new Be(o,a);c.castShadow=!0;let l=new mn(.2,10,8),u=new Te({color:14201690,emissive:7097624,emissiveIntensity:.28,roughness:.72}),h=new Be(l,u);h.castShadow=!0,e.add(s,c,h),ge.add(e);let d={root:e,reeds:s,reedGeo:t,reedMat:i,actor:c,actorGeo:o,actorMat:a,food:h,foodGeo:l,foodMat:u};return zA(d,n,Date.now()),d}function zA(n,e,t){if(!n)return;let i=e.actor.position;n.actor.position.set(i.x,Pe(i.x,i.z)+.48,i.z);let s=e.actor.destination;n.food.position.set(s.x,Pe(s.x,s.z)+.23,s.z);let r=HA(e.memory.state);n.reedMat.color.setHex(r);let o=e.memory.state==="DISTURBED"?1+Math.sin(t*.012)*.08:1;n.reeds.scale.setScalar(o)}function qN(n){n&&(ge.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&WN(e.material)}),n.root.clear())}var ut=new cf({id:mi.cellId,store:Wx,actorStart:NN,actorDestination:LN,config:mi,initialEventId:Cp.events,attachVisual:XN,detachVisual:qN,updateVisual:zA});ut.load(Date.now());function YN(n){let e=ut.isActive?"ACTIVE":"UNLOADED";Os(ON,e,e==="ACTIVE"?"#a8f0b5":"#ffd18a"),Os(BN,uu.toFixed(1)+" m"),Os(FN,ut.hasSnapshot?"SAVED":"NONE",ut.hasSnapshot?"#9fe0ff":"#d8ebe5"),Os(UN,(ut.offscreenMs(n)/1e3).toFixed(1)+" s"),Os(HN,ut.state.memory.state,ut.state.memory.state==="CALM"?"#a8f0b5":"#ffd18a"),Os(zN,ut.state.actor.goal),Os(GN,Math.round(ut.state.actor.progress*100)+"%"),Os(kN,String(ut.duplicateCount),ut.duplicateCount===0?"#a8f0b5":"#ff8f8f"),Os(VN,mo,mo.includes("\u2713")?"#a8f0b5":"#ffe59a")}function JN(n,e){let t=Date.now();if(uu=Math.hypot(ne.position.x-gm,ne.position.z-_m),ut.isActive&&uu>=mi.unloadRadiusM)ut.unload(t),mo="STATE SERIALIZED \xB7 SIMULATION STOPPED";else if(!ut.isActive&&uu<=mi.loadRadiusM){let i=Wx.load(mi.cellId),s=i?.actor?.progress,r=i?.memory?.state,o=i?.memory?.expiresAt||0;ut.load(t).rehydrated&&(Jf=Math.abs(ut.state.actor.progress-s)<1e-9,H_=r!=="CALM"&&t>=o&&ut.state.memory.state==="CALM",H_&&Jf&&ut.duplicateCount===0?mo="STATE RESTORED \u2713 \xB7 TIMER CAUGHT UP \u2713 \xB7 NO DUPLICATES \u2713":Jf&&ut.duplicateCount===0?mo="STATE RESTORED \u2713 \xB7 NO DUPLICATES \u2713":mo="RESTORE CHECK FAILED")}ut.isActive&&(ut.update({dtMs:Math.max(0,e*1e3),wallNow:t,eventId:Cp.events}),ut.state.memory.state==="DISTURBED"&&ut.lastTransition==="MEMORY_DISTURBED"&&(mo="MEMORY DISTURBED \xB7 LEAVE CELL")),YN(t)}var wv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),GA=(n,e)=>JN(n,e);GA.streamCellId=mi.cellId;wv.some(n=>n.streamCellId===mi.cellId)||wv.push(GA);globalThis.__livingWorld06H={marker:IN,schemaVersion:1,get lifecycle(){return ut.lifecycle},get loaded(){return ut.isActive},get state(){return ut.state.memory.state},get snapshot(){return Wx.load(mi.cellId)},get playerDistanceM(){return uu},get actorGoal(){return ut.state.actor.goal},get actorProgress(){return ut.state.actor.progress},get unloadCount(){return ut.unloadCount},get restoreCount(){return ut.restoreCount},get duplicateCount(){return ut.duplicateCount},get lastOffscreenMs(){return ut.lastOffscreenMs},get timerCaughtUp(){return H_},get progressPreserved(){return Jf},loadRadiusM:mi.loadRadiusM,unloadRadiusM:mi.unloadRadiusM,directPlayerBehaviorTrigger:!1,activeSceneRootCount:()=>ge.children.filter(n=>n.userData?.streamCellId===mi.cellId).length};var ZN="06I_SIMULATION_LOD_SLEEP_WAKE",ri={...ml,cellId:"06I_LOD_CELL",actorTravelMs:9e4,directPlayerBehaviorTrigger:!1},xm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,KN=ne.position.x,jN=ne.position.z,kA=Math.sin(xm),VA=Math.cos(xm),Xx=Math.cos(xm),qx=-Math.sin(xm),Yx=KN+kA*8.8-Xx*4.8,Jx=jN+VA*8.8-qx*4.8,z_={x:Yx-Xx*2.4,z:Jx-qx*2.4},G_={x:Yx+Xx*4.8+kA*.9,z:Jx+qx*4.8+VA*.9},Cu=new ya,go=null,Ia=null,Ip=1/0,Xa=0,WA=0,ym=!1,$N=0,XA=0,Us="NEAR FULL SIMULATION",Cv=performance.now(),k_=0,Iv=0,Kl=new Set([De.NEAR]),At={goal:"FOOD",behaviorState:"SEEKING_FOOD",progress:0,position:{...z_},destination:{...G_}},QN=document.getElementById("worldLodTier"),eL=document.getElementById("worldLodDistance"),tL=document.getElementById("worldLodCadence"),nL=document.getElementById("worldLodTicks"),iL=document.getElementById("worldLodGoal"),sL=document.getElementById("worldLodProgress"),rL=document.getElementById("worldLodSnapshot"),oL=document.getElementById("worldLodSleepWake"),aL=document.getElementById("worldLodDuplicates"),cL=document.getElementById("worldLodResult");function as(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function qA(n){return n===De.NEAR?4165512:n===De.MID?5211048:n===De.FAR?7693210:6252136}function lL(n){if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()}function uL(){let n=At.progress;At.position.x=Ze.lerp(z_.x,G_.x,n),At.position.z=Ze.lerp(z_.z,G_.z,n)}function YA(){if(go){Xa++;return}let n=new dt;n.userData.simLodCellId=ri.cellId;let e=new Jn(.46,1),t=new Te({color:qA(De.NEAR),roughness:.9,metalness:0}),i=new Be(e,t);i.castShadow=!0;let s=new Ii(.11,.46,7),r=new Te({color:3235675,roughness:.92,metalness:0}),o=new Be(s,r),a=new Be(s,r.clone());o.position.set(-.19,.43,0),a.position.set(.19,.43,0),o.rotation.z=.22,a.rotation.z=-.22,i.add(o,a);let c=new mn(.19,10,8),l=new Te({color:14136410,emissive:6441236,emissiveIntensity:.25,roughness:.74}),u=new Be(c,l);u.castShadow=!0,n.add(i,u),ge.add(n),go=n,Ia={root:n,body:i,bodyGeo:e,bodyMat:t,earL:o,earR:a,food:u,foodGeo:c,foodMat:l},V_()}function hL(){go&&(ge.remove(go),go.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&lL(n.material)}),go.clear(),go=null,Ia=null)}function V_(){if(!Ia)return;let n=At.position;Ia.body.position.set(n.x,Pe(n.x,n.z)+.5,n.z);let e=At.destination;Ia.food.position.set(e.x,Pe(e.x,e.z)+.22,e.z),Ia.bodyMat.color.setHex(qA(ni?.tier||De.NEAR))}function dL(n){let e={version:1,cellId:ri.cellId,serializedAt:n,actor:{goal:At.goal,behaviorState:At.behaviorState,progress:At.progress,position:{...At.position},destination:{...At.destination}}};Cu.save(ri.cellId,e),WA=At.progress,$N=n}function fL(n){let e=Cu.load(ri.cellId);return e?(At.goal=e.actor.goal,At.behaviorState=e.actor.behaviorState,At.progress=e.actor.progress,At.position={...e.actor.position},At.destination={...e.actor.destination},XA=Math.max(0,n-e.serializedAt),ym=Math.abs(At.progress-WA)<1e-9,!0):!1}function pL(n){At.behaviorState==="SEEKING_FOOD"&&(At.progress=Math.min(1,At.progress+n/ri.actorTravelMs),At.progress>=1&&(At.progress=1,At.goal="FOOD REACHED",At.behaviorState="COMPLETE"),uL())}var ni=new Ea({config:ri,onSimulate:n=>{k_++,pL(n),V_()},onTierChange:n=>{Kl.add(n),n===De.NEAR?Us="NEAR FULL SIMULATION":n===De.MID?Us="MID REDUCED-RATE SIMULATION":n===De.FAR?Us="FAR COARSE SIMULATION":Us="DORMANT \xB7 SNAPSHOT SAVED \xB7 SIMULATION SLEEPING",V_()},onSleep:n=>{dL(n),hL()},onWake:n=>{let e=fL(n);YA(),e&&ym&&Xa===0?Us="WAKE RESTORED \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 NO DUPLICATES \u2713":Us="WAKE VALIDATION FAILED"}});YA();function mL(n){let e=ni.tier,t=e===De.DORMANT?"#ffd18a":"#a8f0b5";as(QN,e,t),as(eL,Ip.toFixed(1)+" m"),as(tL,ni.cadenceLabel(),t),as(nL,Iv.toFixed(1)+" /s"),as(iL,At.goal),as(sL,Math.round(At.progress*100)+"%"),as(rL,Cu.has(ri.cellId)?"SAVED":"NONE",Cu.has(ri.cellId)?"#9fe0ff":"#d8ebe5"),as(oL,ni.sleepCount+"/"+ni.wakeCount),as(aL,String(Xa),Xa===0?"#a8f0b5":"#ff8f8f"),Kl.has(De.NEAR)&&Kl.has(De.MID)&&Kl.has(De.FAR)&&Kl.has(De.DORMANT)&&ni.wakeCount>0&&ym&&Xa===0&&(Us="LOD LADDER \u2713 \xB7 SLEEP/WAKE \u2713 \xB7 NO DUPLICATES \u2713"),as(cL,Us,Us.includes("\u2713")?"#a8f0b5":"#ffe59a");let i=performance.now()-Cv;i>=1e3&&(Iv=k_/(i/1e3),k_=0,Cv=performance.now())}function gL(n,e){let t=Date.now();Ip=Math.hypot(ne.position.x-Yx,ne.position.z-Jx),ni.step({distanceM:Ip,dtMs:Math.max(0,e*1e3),wallNow:t}),mL(t)}var Dv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),JA=(n,e)=>gL(n,e);JA.simLodCellId=ri.cellId;Dv.some(n=>n.simLodCellId===ri.cellId)||Dv.push(JA);globalThis.__livingWorld06I={marker:ZN,get tier(){return ni.tier},get playerDistanceM(){return Ip},get cadence(){return ni.cadenceLabel()},get totalTicks(){return ni.totalTicks},get ticksByTier(){return{...ni.ticksByTier}},get actorGoal(){return At.goal},get actorProgress(){return At.progress},get sleepCount(){return ni.sleepCount},get wakeCount(){return ni.wakeCount},get duplicateCount(){return Xa},get snapshot(){return Cu.load(ri.cellId)},get lastOffscreenMs(){return XA},get progressPreserved(){return ym},activeSceneRootCount:()=>ge.children.filter(n=>n.userData?.simLodCellId===ri.cellId).length,config:{...ri},directPlayerBehaviorTrigger:!1};var _L="06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT",Zx={actorCount:192,directPlayerBehaviorTrigger:!1},ZA=ne.position.x,KA=ne.position.z,xL=Date.now(),Em=[],Dp=0,Pp=!1,Np=!1,W_=0,Kx=0,Pv=performance.now(),s_=0,Of=0,jA=!1,xs=null,X_=null,Nv=0,$A=0,Zf=0,Kf=0,Iu=[],Du=[],q_=0,Y_=0,Vi="WAITING",ic="WAITING FOR RUNTIME",zn={NEAR:0,MID:0,FAR:0,DORMANT:0},jx=0,$x=0,Qx=0,yL=document.getElementById("auditStage06J"),EL=document.getElementById("auditActors06J"),ML=document.getElementById("auditTiers06J"),vL=document.getElementById("auditTicks06J"),SL=document.getElementById("auditFrame06J"),AL=document.getElementById("auditCpu06J"),bL=document.getElementById("auditDraw06J"),TL=document.getElementById("auditScene06J"),RL=document.getElementById("auditMemory06J"),wL=document.getElementById("auditShaders06J"),CL=document.getElementById("auditGpu06J"),IL=document.getElementById("auditState06J"),DL=document.getElementById("auditResult06J"),Lv=document.getElementById("char"),PL=new Vc(.22,0),NL=new Te({color:16777215,roughness:.9,metalness:0}),Vn=new Ve(PL,NL,Zx.actorCount);Vn.castShadow=!1;Vn.receiveShadow=!1;Vn.frustumCulled=!1;Vn.instanceMatrix.setUsage(Ng);Vn.userData.scaleAuditRoot=!0;ge.add(Vn);var Ol=new Fe,Ov=new re;function LL(n){return n===De.NEAR?3778971:n===De.MID?5211062:n===De.FAR?8020649:5857636}function Bl(n,e){let t=ZA+n.position.x,i=KA+n.position.z,s=e===De.DORMANT;Ol.position.set(t,Pe(t,i)+.18,i),Ol.rotation.set(0,n.index*.61803398875,0);let r=s?0:.58+n.index%7*.025;Ol.scale.setScalar(r),Ol.updateMatrix(),Vn.setMatrixAt(n.index,Ol.matrix),Ov.setHex(LL(e)),Vn.setColorAt(n.index,Ov),Pp=!0,Np=!0}function OL(n){let e=ZA+n.position.x,t=KA+n.position.z;return Math.hypot(ne.position.x-e,ne.position.z-t)}for(let n=0;n<Zx.actorCount;n++){let e=kM(n,xL);e.controller=new Ea({config:ml,onSimulate:(t,i,s)=>{W_++,L0(e,t,s),Bl(e,i)},onTierChange:t=>{Bl(e,t)},onSleep:t=>{e.visualActive||Dp++,e.snapshot=VM(e,1,t),e.sleepCount++,e.visualActive=!1,Bl(e,De.DORMANT)},onWake:(t,i)=>{e.visualActive&&Dp++,e.snapshot&&WM(e,e.snapshot,t),e.wakeCount++,e.visualActive=!0,Bl(e,i)}}),Em.push(e),Bl(e,De.NEAR)}Vn.instanceMatrix.needsUpdate=!0;Vn.instanceColor&&(Vn.instanceColor.needsUpdate=!0);Pp=!1;Np=!1;function BL(){let n=0;return ge.traverse(()=>n++),n}function FL(){let n=performance.memory;return!n||!Number.isFinite(n.usedJSHeapSize)?"JS N/A":"JS "+(n.usedJSHeapSize/(1024*1024)).toFixed(1)+" MB"}function Kn(n,e,t){n&&(n.textContent=e,t&&(n.style.color=t))}function QA(){let n={NEAR:0,MID:0,FAR:0,DORMANT:0},e=0,t=0,i=0;for(let s of Em){let r=s.controller.tier;n[r]=(n[r]||0)+1,s.memory.state!=="CALM"&&e++,s.suspendedGoal!=="NONE"&&t++,s.snapshot&&i++}zn=n,jx=e,$x=t,Qx=i}function UL(){if(xs){let e=xs;return e.frame_avg_ms.toFixed(2)+" / "+e.frame_p95_ms.toFixed(2)+" / "+e.frame_p99_ms.toFixed(2)+" ms"}let n=Iu.length?q_/Iu.length:0;return n?n.toFixed(2)+" ms avg":"\u2014"}function HL(){if(xs){let e=xs;return e.audit_cpu_avg_ms.toFixed(3)+" / "+e.audit_cpu_p95_ms.toFixed(3)+" ms"}let n=Du.length?Y_/Du.length:0;return n?n.toFixed(3)+" ms avg":"\u2014"}function zL(n){let e=zn.NEAR+zn.MID+zn.FAR+zn.DORMANT,t=Xe.info.memory||{},i=Array.isArray(Xe.info.programs)?Xe.info.programs.length:0,s=X_===null?"\u2014":String(i-X_),r=ge.children.filter(o=>o.userData?.scaleAuditRoot===!0).length;Kn(yL,Vi,Vi==="PASS"?"#a8f0b5":Vi==="FAIL"?"#ff9b9b":"#ffe59a"),Kn(EL,e+"/"+Zx.actorCount),Kn(ML,zn.NEAR+"/"+zn.MID+"/"+zn.FAR+"/"+zn.DORMANT),Kn(vL,Kx.toFixed(0)+" /s"),Kn(SL,UL()),Kn(AL,HL()),Kn(bL,Xe.info.render.calls+" / "+Xe.info.render.triangles.toLocaleString()),Kn(TL,$A+" obj \xB7 "+(t.geometries||0)+" geo \xB7 "+(t.textures||0)+" tex"),Kn(RL,FL()),Kn(wL,i+" \xB7 \u0394 "+s),Kn(CL,"N/A \xB7 WebGL"),Kn(IL,"mem "+jx+" \xB7 susp "+$x+" \xB7 snap "+Qx+" \xB7 root "+r),Kn(DL,ic,xs?.pass?"#a8f0b5":Vi==="FAIL"?"#ff9b9b":"#ffe59a")}function GL(){QA();let n=zn.NEAR+zn.MID+zn.FAR+zn.DORMANT,e=ge.children.filter(i=>i.userData?.scaleAuditRoot===!0).length,t=Dp+(e===1?0:1);xs=XM({frameSamples:Iu,cpuSamples:Du,drawCallsMax:Zf,trianglesMax:Kf,actorCount:n,duplicateCount:t,limits:so}),jA=!0,xs.pass?(Vi="PASS",ic="192 ACTORS \u2713 \xB7 BUDGET PASS \u2713 \xB7 STATE STABLE \u2713"):(Vi="FAIL",ic="BUDGET FAIL \xB7 "+xs.failed.slice(0,3).join(" \xB7 "))}function kL(n,e){let t=performance.now(),i=Date.now(),s=s_>0?Math.max(0,n-s_):0;s_=n,!Of&&Lv&&Lv.textContent!=="BOOT"&&(Of=n,Vi="WARMUP",ic="WARMING SHADERS + SCALE ACTORS",Iu=[],Du=[],q_=0,Y_=0,Zf=0,Kf=0);for(let a of Em)a.controller.step({distanceM:OL(a),dtMs:Math.max(0,e*1e3),wallNow:i});Pp&&(Vn.instanceMatrix.needsUpdate=!0,Pp=!1),Np&&Vn.instanceColor&&(Vn.instanceColor.needsUpdate=!0,Np=!1),QA();let r=n-Pv;r>=1e3&&(Kx=W_/(r/1e3),W_=0,Pv=n);let o=performance.now()-t;if(Of&&!jA){let a=n-Of;a<so.warmupMs?Vi="WARMUP":(Vi==="WARMUP"&&(X_=Array.isArray(Xe.info.programs)?Xe.info.programs.length:0,Vi="MEASURING",ic="MEASURING 15 s PERFORMANCE WINDOW"),s>0&&(Iu.push(s),q_+=s),Du.push(o),Y_+=o,Zf=Math.max(Zf,Xe.info.render.calls||0),Kf=Math.max(Kf,Xe.info.render.triangles||0),a>=so.warmupMs+so.measureMs&&GL())}n-Nv>=1e3&&($A=BL(),Nv=n),zL(n)}var Bv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),eb=(n,e)=>kL(n,e);eb.scaleAuditId="06J_SCALE_AUDIT";Bv.some(n=>n.scaleAuditId==="06J_SCALE_AUDIT")||Bv.push(eb);globalThis.__livingWorld06J={marker:_L,get stage(){return Vi},get result(){return ic},get actorCount(){return Em.length},get tiers(){return{...zn}},get logicTicksPerSecond(){return Kx},get memoryActive(){return jx},get suspendedGoals(){return $x},get snapshots(){return Qx},get duplicateCount(){return Dp},get summary(){return xs?JSON.parse(JSON.stringify(xs)):null},get budgets(){return{...so}},get gpuTiming(){return"N/A \xB7 WebGL"},directPlayerBehaviorTrigger:!1};var VL="07A_PRODUCTION_ARCHITECTURE_PROMOTION",WL=document.getElementById("archModules07A"),XL=document.getElementById("archBoundary07A"),qL=document.getElementById("archParity07A"),YL=document.getElementById("archStream07A"),JL=document.getElementById("archRegression07A"),Bf=document.getElementById("archResult07A");function Hs(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function ZL(){let n={},e=new yr({initialGoal:"FOOD",initialProgress:.34});e.createHazardEvent({center:{x:0,z:0},at:1e3});let t=e.update({now:1120,actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},foodValid:!0,foodEventAt:1120,foodProgressDelta:.05});n.priority_over_recency=t.memoryState==="DISTURBED"&&t.winner==="HAZARD"&&t.goal==="HAZARD"&&t.suspendedGoal==="FOOD"&&Math.abs(t.progress-.34)<1e-12;let i=e.serialize(1600),r=new yr().restore(i,7e3);n.offscreen_time_resolution=r.memoryState==="CALM"&&r.goal==="FOOD"&&Math.abs(r.progress-.34)<1e-12&&r.offscreenMs===5400;let o=new _l,a=0,c=0,l=new xl({id:"07A_STREAM_PROOF",store:o,actorStart:{x:0,z:0},actorDestination:{x:10,z:0},initialEventId:0,attachVisual:()=>(a++,{id:a}),detachVisual:()=>{c++},updateVisual:()=>{}});l.load(1e3),l.update({dtMs:800,wallNow:1800,eventId:1});let u=l.state.actor.progress;l.unload(1900);let h=l.load(8e3);n.stream_parity=h.rehydrated===!0&&l.state.memory.state==="CALM"&&l.state.actor.goal==="FOOD"&&Math.abs(l.state.actor.progress-u)<1e-12&&l.duplicateCount===0&&a===2&&c===1;let d=0,f=new yl({onSimulate:()=>{d++}});f.step({distanceM:10,dtMs:16,wallNow:1e3}),f.step({distanceM:17,dtMs:0,wallNow:1016});for(let p=0;p<10;p++)f.step({distanceM:20,dtMs:10,wallNow:1026+p*10});f.step({distanceM:31,dtMs:0,wallNow:1200});for(let p=0;p<50;p++)f.step({distanceM:40,dtMs:10,wallNow:1210+p*10});f.step({distanceM:60,dtMs:0,wallNow:1800});let m=f.tier,x=f.totalTicks;f.step({distanceM:60,dtMs:5e3,wallNow:6800}),f.step({distanceM:45,dtMs:0,wallNow:6801}),n.lod_parity=m===it.DORMANT&&f.totalTicks===x&&f.tier===it.FAR&&f.sleepCount===1&&f.wakeCount===1,n.module_manifest=ro.modules.length===8,n.boundaries=ro.boundaries.rendering.includes("no THREE")&&ro.boundaries.dom==="none"&&ro.boundaries.productionActorPipeline==="deferred to 07B";let g=Object.entries(n).filter(([,p])=>!p).map(([p])=>p);return{pass:g.length===0,failed:g,checks:n}}var ii=ZL();Hs(WL,String(ro.modules.length));Hs(XL,ii.checks.boundaries?"PURE CORE \u2713":"FAIL",ii.checks.boundaries?"#a8f0b5":"#ff9b9b");Hs(qL,ii.checks.priority_over_recency&&ii.checks.offscreen_time_resolution?"PASS \u2713":"FAIL",ii.checks.priority_over_recency&&ii.checks.offscreen_time_resolution?"#a8f0b5":"#ff9b9b");Hs(YL,ii.checks.stream_parity&&ii.checks.lod_parity?"PASS \u2713":"FAIL",ii.checks.stream_parity&&ii.checks.lod_parity?"#a8f0b5":"#ff9b9b");function tb(){let n=globalThis.__livingWorld06J?.stage||"WAITING";Hs(JL,n,n==="PASS"?"#a8f0b5":n==="FAIL"?"#ff9b9b":"#ffe59a"),ii.pass?n==="PASS"?Hs(Bf,"PRODUCTION ARCHITECTURE PROMOTED \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):n==="FAIL"?Hs(Bf,"PRODUCTION CORE PASS \u2713 \xB7 06J REGRESSION FAILED","#ff9b9b"):Hs(Bf,"PRODUCTION CORE PASS \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):Hs(Bf,"ARCHITECTURE PROOF FAILED \xB7 "+ii.failed.join(" \xB7 "),"#ff9b9b")}tb();var KL=setInterval(()=>{tb();let n=globalThis.__livingWorld06J?.stage||"WAITING";(n==="PASS"||n==="FAIL")&&clearInterval(KL)},1e3);globalThis.__productionArchitecture07A={marker:VL,manifest:ro,proof:ii,get regression(){return globalThis.__livingWorld06J?.stage||"WAITING"}};var jL="07B_PRODUCTION_ACTOR_PIPELINE",Pr=new mf,nb=Pr.registerDefinition({typeId:"HUMANOID_FORAGER_V1",asset:{id:"SOLDIER_GLB_V1",url:"./assets/Soldier.glb"},scale:.92,yawOffset:Math.PI,animationMap:{IDLE:"Idle",WALK:"Walk",RUN:"Run"},presentation:{castShadow:!1,receiveShadow:!0}}),Lp=ne.position.x,Op=ne.position.z,Pu=Pr.createActor({id:"07B_ACTOR_A",typeId:nb.typeId,position:{x:Lp-3.2,y:Pe(Lp-3.2,Op-6),z:Op-6},yaw:.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.22}}),Nu=Pr.createActor({id:"07B_ACTOR_B",typeId:nb.typeId,position:{x:Lp+3.2,y:Pe(Lp+3.2,Op-7),z:Op-7},yaw:-.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.62}}),Wi=new gf({scene:ge}),jf=[],xo="LOADING ASSET",ib="",$L=0,sb=new $i(.72,.92,24);sb.rotateX(-Math.PI/2);var QL=new Ot({color:7921875,transparent:!0,opacity:.74,side:_t,depthWrite:!1}),$u=new Ve(sb,QL,2);$u.frustumCulled=!1;$u.userData.productionActorMarkers=!0;var Fl=new Fe;for(let[n,e]of[Pu,Nu].entries())Fl.position.set(e.position.x,e.position.y+.025,e.position.z),Fl.rotation.set(0,0,0),Fl.scale.setScalar(1),Fl.updateMatrix(),$u.setMatrixAt(n,Fl.matrix);$u.instanceMatrix.needsUpdate=!0;ge.add($u);var e2=document.getElementById("actorStage07B"),t2=document.getElementById("actorDefinitions07B"),n2=document.getElementById("actorAssetLoads07B"),i2=document.getElementById("actorInstances07B"),s2=document.getElementById("actorBindings07B"),r2=document.getElementById("actorRoots07B"),o2=document.getElementById("actorMixers07B"),a2=document.getElementById("actorAnimations07B"),c2=document.getElementById("actorKernels07B"),l2=document.getElementById("actorDuplicates07B"),u2=document.getElementById("actorRegression07B"),Ul=document.getElementById("actorResult07B");function _n(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function h2(){return ge.children.filter(n=>n.userData?.productionActorId==="07B_ACTOR_A"||n.userData?.productionActorId==="07B_ACTOR_B")}function rb(){let n=h2(),e=new Set(n.map(h=>h.uuid)),t=jf.filter(Boolean),i=new Set(t.map(h=>h.model?.uuid).filter(Boolean)),s=t.filter(h=>h.mixer).length,r=t.map(h=>h.resolvedAnimation).filter(h=>h&&h!=="NONE"),o=[Pu.kernel,Nu.kernel].filter(Boolean).length,a=globalThis.__livingWorld06J?.stage||"WAITING",c=globalThis.__productionArchitecture07A?.proof?.pass===!0,l={definitions:Pr.definitions.list().length===1,asset_load_once:Wi.assetCache.loadCount===1,actors:Pr.size===2,bindings:Wi.size===2&&t.length===2,unique_roots:n.length===2&&e.size===2&&i.size===2,independent_mixers:s===2,animations_resolved:r.length===2,kernels:o===2,stable_binding_claims:Pu.bindingClaims===1&&Nu.bindingClaims===1,duplicates:Wi.duplicateBindingCount===0,architecture:c,regression:a==="PASS"},u=Object.entries(l).filter(([,h])=>!h).map(([h])=>h);return{pass:u.length===0,failed:u,checks:l,roots:n,bindings:t,resolved:r,regression:a,mixers:s,kernels:o}}async function d2(){try{jf=await Promise.all([Wi.bind(Pu),Wi.bind(Nu)]),jf[0].setAnimationIntent("IDLE",0),jf[1].setAnimationIntent("WALK",0),xo="READY",$L=performance.now()}catch(n){xo="FAIL",ib=n?.message||String(n),console.error("07B production actor pipeline failed",n)}}d2();function f2(){let n=rb(),e=xo==="READY",t=n.checks.architecture,i=e&&t&&n.checks.definitions&&n.checks.asset_load_once&&n.checks.actors&&n.checks.bindings&&n.checks.unique_roots&&n.checks.independent_mixers&&n.checks.animations_resolved&&n.checks.kernels&&n.checks.stable_binding_claims&&n.checks.duplicates,s=xo;i&&n.regression==="PASS"?s="PASS":i&&(s="WAITING REGRESSION"),xo==="FAIL"&&(s="FAIL"),_n(e2,s,s==="PASS"?"#a8f0b5":s==="FAIL"?"#ff9b9b":"#ffe59a"),_n(t2,String(Pr.definitions.list().length)),_n(n2,String(Wi.assetCache.loadCount)),_n(i2,Pr.size+"/2"),_n(s2,Wi.size+"/2"),_n(r2,n.roots.length+" / "+new Set(n.roots.map(r=>r.uuid)).size),_n(o2,String(n.mixers)),_n(a2,n.resolved.length?n.resolved.join(" / "):"\u2014"),_n(c2,String(n.kernels)),_n(l2,String(Wi.duplicateBindingCount),Wi.duplicateBindingCount===0?"#a8f0b5":"#ff9b9b"),_n(u2,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),xo==="FAIL"?_n(Ul,"PIPELINE FAIL \xB7 "+ib,"#ff9b9b"):i&&n.regression==="PASS"?_n(Ul,"ACTOR PIPELINE \u2713 \xB7 ASSET CACHE \u2713 \xB7 INDEPENDENT INSTANCES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):i?_n(Ul,"ACTOR PIPELINE \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):e?_n(Ul,"PIPELINE CHECKING \xB7 "+n.failed.filter(r=>r!=="regression").join(" \xB7 "),"#ffe59a"):_n(Ul,"LOADING PRODUCTION ACTOR ASSET","#ffe59a")}var Fv=0,Uv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),ob=(n,e)=>{Wi.update(e),n>=Fv&&(f2(),Fv=n+1e3)};ob.productionActorPipelineId="07B_PRODUCTION_ACTOR_PIPELINE";Uv.some(n=>n.productionActorPipelineId==="07B_PRODUCTION_ACTOR_PIPELINE")||Uv.push(ob);globalThis.__productionActorPipeline07B={marker:jL,pipeline:Pr,factory:Wi,actors:[Pu,Nu],get state(){return xo},get proof(){return rb()}};var p2="07C_STREAMED_PRODUCTION_REGION",ey=globalThis.__productionActorPipeline07B;if(!ey)throw new Error("07C requires frozen accepted 07B actor pipeline");var Lu=ey.pipeline,wr=ey.factory,Hv=Lu.definitions.get("HUMANOID_FORAGER_V1"),wn={x:ne.position.x+12,z:ne.position.z-10},So=["07C_REGION_ACTOR_A","07C_REGION_ACTOR_B"],m2=[{id:So[0],typeId:Hv.typeId,position:{x:wn.x-2.5,y:Pe(wn.x-2.5,wn.z),z:wn.z},yaw:.22,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.28}},{id:So[1],typeId:Hv.typeId,position:{x:wn.x+2.5,y:Pe(wn.x+2.5,wn.z-.6),z:wn.z-.6},yaw:-.22,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.58}}],ty=new Gi,Ye=new os({id:"07C_PRODUCTION_REGION_A",pipeline:Lu,store:ty,actorBlueprints:m2,bindActor:n=>wr.bind(n),unbindActor:n=>wr.unbind(n.id),loadRadiusM:24,unloadRadiusM:38}),hu=1/0,sc="",Mo="WAITING",ab=null,cb=null,zv=0,lb=new $i(5.4,5.75,48);lb.rotateX(-Math.PI/2);var g2=new Ot({color:6215887,transparent:!0,opacity:.58,side:_t,depthWrite:!1}),ny=new Be(lb,g2);ny.position.set(wn.x,Pe(wn.x,wn.z)+.035,wn.z);ny.userData.productionRegionDiagnostic=!0;ge.add(ny);var _2=document.getElementById("regionStage07C"),x2=document.getElementById("regionDistance07C"),y2=document.getElementById("regionActors07C"),E2=document.getElementById("regionBindings07C"),M2=document.getElementById("regionAssetLoads07C"),v2=document.getElementById("regionSnapshot07C"),S2=document.getElementById("regionOffscreen07C"),A2=document.getElementById("regionIds07C"),b2=document.getElementById("regionProgress07C"),T2=document.getElementById("regionCycles07C"),R2=document.getElementById("regionDuplicates07C"),w2=document.getElementById("regionRegression07C"),Hl=document.getElementById("regionResult07C");function an(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function C2(){let n=new Set(So);return ge.children.filter(e=>n.has(e.userData?.productionActorId))}function J_(){return So.filter(n=>wr.getBinding(n)).length}function I2(){return ty.load(Ye.id)?.actors?.find(t=>t.actorId===So[0])?.kernel?.goals?.progress}function iy(){return Lu.getActor(So[0])?.kernel?.goals?.progress}function ub(){let n=C2(),e=new Set(n.map(c=>c.userData?.productionActorId)),t=Ye.activeActors,i=Ye.duplicateCount+wr.duplicateBindingCount,s=globalThis.__livingWorld06J?.stage||"WAITING",r=!!Lu.getActor("07B_ACTOR_A")&&!!Lu.getActor("07B_ACTOR_B"),o={asset_load_one:wr.assetCache.loadCount===1,static_controls_present:r,actor_count:Ye.isActive?t.length===2:t.length===0,bindings:Ye.isActive?J_()===2:J_()===0,roots:Ye.isActive?n.length===2&&e.size===2:n.length===0,snapshot:Ye.unloadCount===0||Ye.hasSnapshot,ids_stable:Ye.restoreCount===0||Ye.lastRestoreIdsStable,progress_preserved:Ye.restoreCount===0||Ye.lastRestoreProgressPreserved,duplicates:i===0,regression:s==="PASS"},a=Object.entries(o).filter(([,c])=>!c).map(([c])=>c);return{pass:a.length===0,failed:a,checks:o,duplicates:i,regression:s,roots:n,activeActors:t}}function Ou(){let n=ub(),e=Ye.lifecycle;an(_2,e,e==="ACTIVE"?"#a8f0b5":e==="UNLOADED"?"#ffd18a":e==="LOADING"||e==="REHYDRATING"?"#9fe0ff":"#ffe59a"),an(x2,hu.toFixed(1)+" m"),an(y2,Ye.activeActors.length+"/2"),an(E2,J_()+"/2"),an(M2,String(wr.assetCache.loadCount),wr.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),an(v2,Ye.hasSnapshot?"SAVED":"NONE",Ye.hasSnapshot?"#9fe0ff":"#d8ebe5"),an(S2,(Ye.lastOffscreenMs/1e3).toFixed(1)+" s"),an(A2,Ye.restoreCount===0?"PENDING":Ye.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Ye.restoreCount===0?"#ffe59a":Ye.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b");let i=iy(),s=I2(),r=Number.isFinite(i)?Math.round(i*100)+"%":Number.isFinite(s)?Math.round(s*100)+"% saved":"\u2014";an(b2,r),an(T2,Ye.unloadCount+"/"+Ye.restoreCount),an(R2,String(n.duplicates),n.duplicates===0?"#a8f0b5":"#ff9b9b"),an(w2,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),sc?an(Hl,"REGION FAIL \xB7 "+sc,"#ff9b9b"):Ye.restoreCount>0&&Ye.isActive&&Ye.lastRestoreIdsStable&&Ye.lastRestoreProgressPreserved&&wr.assetCache.loadCount===1&&n.duplicates===0&&n.regression==="PASS"?an(Hl,"REGION RESTORED \u2713 \xB7 IDS STABLE \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):e==="UNLOADED"&&Ye.hasSnapshot?an(Hl,"REGION UNLOADED \u2713 \xB7 ACTORS REMOVED \u2713 \xB7 SNAPSHOT SAVED \u2713","#ffe59a"):an(Hl,Mo,"#ffe59a")}function D2(n){Ye.operation||(Mo=Ye.hasSnapshot?"REHYDRATING PRODUCTION REGION":"LOADING PRODUCTION REGION",Ye.load(n).then(e=>{sc="",e.rehydrated?(cb=iy(),Mo="REGION REHYDRATED \xB7 VERIFYING CONTINUITY"):Mo="REGION ACTIVE \xB7 LEAVE PAST 38 m",Ou()}).catch(e=>{sc=e?.message||String(e),Ou()}))}function P2(n){Ye.operation||(ab=iy(),Mo="SERIALIZING / UNLOADING REGION",Ye.unload(n).then(()=>{sc="",Mo="REGION UNLOADED \xB7 RETURN INSIDE 24 m",Ou()}).catch(e=>{sc=e?.message||String(e),Ou()}))}var Gv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),hb=(n,e)=>{let t=Date.now();hu=Math.hypot(ne.position.x-wn.x,ne.position.z-wn.z),Ye.operation||(Ye.lifecycle==="UNLOADED"&&hu<=Ye.loadRadiusM?D2(t):Ye.lifecycle==="ACTIVE"&&hu>=Ye.unloadRadiusM&&P2(t)),Ye.isActive&&Ye.update({dtMs:Math.max(0,e*1e3),now:t,foodProgressPerSecond:.006}),n>=zv&&(Ou(),zv=n+500)};hb.productionRegionId="07C_PRODUCTION_REGION";Gv.some(n=>n.productionRegionId==="07C_PRODUCTION_REGION")||Gv.push(hb);globalThis.__streamedProductionRegion07C={marker:p2,region:Ye,store:ty,center:{...wn},actorIds:[...So],get distanceM(){return hu},get proof(){return ub()},get lastUnloadProgress(){return ab},get lastRestoreProgress(){return cb}};var N2="07D_PRODUCTION_VERTICAL_SLICE",Tr=globalThis.__streamedProductionRegion07C,sy=globalThis.__productionActorPipeline07B;if(!Tr||!sy)throw new Error("07D requires frozen accepted 07B + 07C runtime");var Fs=Tr.region,db=sy.pipeline,du=sy.factory,Z_="07C_REGION_ACTOR_A",Qn=new yf({region:Fs,pipeline:db,actorId:Z_,hazardCenter:{x:Tr.center.x,z:Tr.center.z},triggerDelayMs:1800}),kv="",Vv=0,jl=!1,$l=!1,fb=null,pb=new $i(1.05,1.35,32);pb.rotateX(-Math.PI/2);var ho=new Ot({color:6281423,transparent:!0,opacity:.62,side:_t,depthWrite:!1}),Mm=new Be(pb,ho);Mm.position.set(Tr.center.x,Pe(Tr.center.x,Tr.center.z)+.05,Tr.center.z);Mm.userData.productionVerticalSliceBeacon=!0;ge.add(Mm);var L2=document.getElementById("sliceStage07D"),O2=document.getElementById("sliceRegion07D"),B2=document.getElementById("sliceGoal07D"),F2=document.getElementById("sliceMemory07D"),U2=document.getElementById("sliceAnim07D"),H2=document.getElementById("sliceBehavior07D"),z2=document.getElementById("sliceStream07D"),G2=document.getElementById("sliceIds07D"),k2=document.getElementById("sliceProgress07D"),V2=document.getElementById("sliceAsset07D"),W2=document.getElementById("sliceDuplicates07D"),X2=document.getElementById("sliceRegression07D"),Ff=document.getElementById("sliceResult07D");function xn(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function K_(){let n=db.getActor(Z_);if(!n)return{actor:null,binding:null,goal:"UNLOADED",memory:"UNLOADED",intent:"NONE",progress:null};let e=du.getBinding(Z_);return{actor:n,binding:e,goal:n.kernel.goals.activeGoal,memory:n.kernel.memory.state,intent:n.animationIntent,progress:n.kernel.goals.progress}}function q2(){let n=K_();if(!n.actor||!n.binding)return n;let e="WALK";return n.goal==="HAZARD"?e="RUN":n.goal==="FOOD REACHED"&&(e="IDLE"),(kv!==e||n.actor.animationIntent!==e)&&(n.binding.setAnimationIntent(e,.12),kv=e),n.memory==="DISTURBED"?(ho.color.setHex(14981698),ho.opacity=.9):n.memory==="SETTLING"?(ho.color.setHex(14271595),ho.opacity=.76):(ho.color.setHex(6281423),ho.opacity=.62),K_()}function r_(){return Fs.duplicateCount+du.duplicateBindingCount}function Y2(){let n=K_(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=Qn.completion({assetLoadCount:du.assetCache.loadCount,duplicateCount:r_(),regressionStatus:e});fb=t,jl=Qn.hazardObserved&&Qn.recoveryObserved&&t.checks.progress_preserved,$l=Qn.streamOutObserved&&Qn.restoreObserved&&t.checks.region_ids_stable&&t.checks.region_progress_preserved,xn(L2,t.pass?"PASS":Qn.stage,t.pass?"#a8f0b5":"#ffe59a"),xn(O2,Fs.lifecycle,Fs.isActive?"#a8f0b5":Fs.lifecycle==="UNLOADED"?"#ffd18a":"#9fe0ff"),xn(B2,n.goal,n.goal==="HAZARD"?"#ffd18a":"#a8f0b5"),xn(F2,n.memory,n.memory==="CALM"?"#a8f0b5":"#ffd18a"),xn(U2,n.binding?.resolvedAnimation||n.intent||"NONE"),xn(H2,jl?"PASS \u2713":Qn.hazardObserved?"HAZARD OBSERVED":Qn.hazardEventId?"EVENT EMITTED":"WAITING",jl?"#a8f0b5":"#ffe59a"),xn(z2,$l?"PASS \u2713":Qn.streamOutObserved?"UNLOADED \u2713 \xB7 RETURN":"PENDING",$l?"#a8f0b5":"#ffe59a"),xn(G2,Fs.restoreCount===0?"PENDING":Fs.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Fs.restoreCount===0?"#ffe59a":Fs.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b"),xn(k2,Number.isFinite(n.progress)?Math.round(n.progress*100)+"%":Number.isFinite(Qn.recoveredProgress)?Math.round(Qn.recoveredProgress*100)+"% saved":"\u2014"),xn(V2,String(du.assetCache.loadCount),du.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),xn(W2,String(r_()),r_()===0?"#a8f0b5":"#ff9b9b"),xn(X2,e,e==="PASS"?"#a8f0b5":e==="FAIL"?"#ff9b9b":"#ffe59a"),t.pass?xn(Ff,"PRODUCTION VERTICAL SLICE \u2713 \xB7 BEHAVIOR LOOP \u2713 \xB7 STREAM RESTORE \u2713 \xB7 ASSET PIPELINE \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):e==="FAIL"?xn(Ff,"VERTICAL SLICE BLOCKED \xB7 PERFORMANCE REGRESSION FAILED","#ff9b9b"):jl&&!$l?xn(Ff,"BEHAVIOR LOOP \u2713 \xB7 LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m","#ffe59a"):xn(Ff,"OBSERVE FOOD \u2192 HAZARD \u2192 FOOD RECOVERY","#ffe59a")}var Wv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),mb=n=>{let e=Date.now();Qn.update(e),q2();let t=1+Math.sin(n*.006)*.08;Mm.scale.setScalar(t),n>=Vv&&(Y2(),Vv=n+500)};mb.productionVerticalSliceId="07D_PRODUCTION_VERTICAL_SLICE";Wv.some(n=>n.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")||Wv.push(mb);globalThis.__productionVerticalSlice07D={marker:N2,coordinator:Qn,get completion(){return fb},get behaviorLoopPass(){return jl},get streamPass(){return $l}};var J2="08A_MULTI_REGION_PRODUCTION_WORLD",ry=globalThis.__productionActorPipeline07B;if(!ry)throw new Error("08A requires frozen accepted 07B actor pipeline");var o_=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=o_.length-1;n>=0;n--){let e=o_[n];(e?.productionRegionId==="07C_PRODUCTION_REGION"||e?.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")&&o_.splice(n,1)}for(let n of[...ge.children])(n.userData?.productionRegionDiagnostic===!0||n.userData?.productionVerticalSliceBeacon===!0)&&ge.remove(n);var oy=ry.pipeline,rc=ry.factory,Xv=oy.definitions.get("HUMANOID_FORAGER_V1"),vm=Number.isFinite(ne.rotation.y)?ne.rotation.y:0,Z2=ne.position.x,K2=ne.position.z,j2=Math.sin(vm),$2=Math.cos(vm),Q2=Math.cos(vm),eO=-Math.sin(vm);function a_(n,e){return{x:Z2+j2*n+Q2*e,z:K2+$2*n+eO*e}}var Cr={A:a_(18,0),B:a_(18,48),C:a_(-30,48)},Sm=new Gi;function tO(n,e){return[{id:"08A_"+n+"_ACTOR_1",typeId:Xv.typeId,position:{x:e.x-1.9,y:Pe(e.x-1.9,e.z),z:e.z},yaw:.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.21:n==="B"?.41:.61}},{id:"08A_"+n+"_ACTOR_2",typeId:Xv.typeId,position:{x:e.x+1.9,y:Pe(e.x+1.9,e.z-.5),z:e.z-.5},yaw:-.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.31:n==="B"?.51:.71}}]}function c_(n,e){return new os({id:"08A_WORLD_REGION_"+n,pipeline:oy,store:Sm,actorBlueprints:tO(n,e),bindActor:t=>rc.bind(t),unbindActor:t=>rc.unbind(t.id),loadRadiusM:24,unloadRadiusM:38})}var Dn={A:c_("A",Cr.A),B:c_("B",Cr.B),C:c_("C",Cr.C)},Qu=new Er({entries:[{id:"A",center:Cr.A,region:Dn.A},{id:"B",center:Cr.B,region:Dn.B},{id:"C",center:Cr.C,region:Dn.C}]}),gs=new Set,fu=!1,qv=null,nO=null,$f=!1,Da="",Yv=0,Jv=0,l_=0,iO=100,gb=new $i(4.8,5.15,48);gb.rotateX(-Math.PI/2);var sO=[new Ot({color:6281423,transparent:!0,opacity:.55,side:_t,depthWrite:!1}),new Ot({color:6262488,transparent:!0,opacity:.55,side:_t,depthWrite:!1}),new Ot({color:10121176,transparent:!0,opacity:.55,side:_t,depthWrite:!1})];for(let[n,e]of["A","B","C"].entries()){let t=Cr[e],i=new Be(gb,sO[n]);i.position.set(t.x,Pe(t.x,t.z)+.04,t.z),i.userData.worldRegion08A=e,ge.add(i)}var rO=document.getElementById("worldStage08A"),oO=document.getElementById("worldNearest08A"),aO=document.getElementById("worldDistances08A"),cO=document.getElementById("worldStates08A"),lO=document.getElementById("worldActive08A"),uO=document.getElementById("worldVisited08A"),hO=document.getElementById("worldSnapshots08A"),dO=document.getElementById("worldProgress08A"),fO=document.getElementById("worldAssets08A"),pO=document.getElementById("worldDuplicates08A"),mO=document.getElementById("worldRegression08A"),ao=document.getElementById("worldResult08A");function rn(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function Zv(n){return oy.getActor("08A_"+n+"_ACTOR_1")?.kernel?.goals?.progress}function gO(){return["A","B","C"].filter(n=>Dn[n].isActive)}function _O(){return Dn.A.duplicateCount+Dn.B.duplicateCount+Dn.C.duplicateCount+rc.duplicateBindingCount}function xO(){return Qu.nearest({x:ne.position.x,z:ne.position.z})}function _b(){let n=gO(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=["A","B","C"].every(l=>gs.has(l)),i=["A","B","C"].every(l=>Sm.has("08A_WORLD_REGION_"+l)),s=Dn.A.restoreCount>0&&Dn.A.lastRestoreIdsStable&&Dn.A.lastRestoreProgressPreserved,r=rc.assetCache.loadCount===1,o=_O(),a={region_count:Qu.size===3,active_count:n.length<=1,all_visited:t,all_snapshots:i,a_restored:s,asset_load_one:r,duplicates:o===0,regression:e==="PASS"},c=Object.entries(a).filter(([,l])=>!l).map(([l])=>l);return{pass:c.length===0,failed:c,checks:a,active:n,regression:e,duplicates:o}}async function yO(n,e){if(!$f){$f=!0;try{await Qu.step({playerPosition:{x:ne.position.x,z:ne.position.z},dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});for(let t of["A","B","C"])Dn[t].isActive&&(gs.has(t)||(gs.add(t),t==="A"&&!Number.isFinite(qv)&&(qv=Zv("A"))),t==="A"&&gs.has("B")&&gs.has("C")&&Dn.A.restoreCount>0&&(fu=!0,nO=Zv("A")));Da=""}catch(t){Da=t?.message||String(t)}finally{$f=!1}}}function EO(){let n=_b(),e=xO(),t=Qu.distances({x:ne.position.x,z:ne.position.z}),i=n.active,s=["A","B","C"].map(c=>Dn[c].lifecycle[0]).join("/"),r=["A","B","C"].map(c=>Sm.has("08A_WORLD_REGION_"+c)?"S":"\u2014").join("/"),o=["A","B","C"].map(c=>gs.has(c)?c:"\u2014").join(""),a=fu&&Dn.A.lastRestoreProgressPreserved;rn(rO,n.pass?"PASS":Da?"FAIL":"ACTIVE",n.pass?"#a8f0b5":Da?"#ff9b9b":"#ffe59a"),rn(oO,e?e.id+" "+e.distance.toFixed(1)+" m":"\u2014"),rn(aO,t.map(c=>c.id+":"+c.distance.toFixed(0)).join(" \xB7 ")),rn(cO,s),rn(lO,i.length?i.join(","):"NONE",i.length<=1?"#a8f0b5":"#ff9b9b"),rn(uO,o),rn(hO,r),rn(dO,a?"PRESERVED \u2713":fu?"FAIL":"PENDING",a?"#a8f0b5":"#ffe59a"),rn(fO,String(rc.assetCache.loadCount),rc.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),rn(pO,String(n.duplicates),n.duplicates===0?"#a8f0b5":"#ff9b9b"),rn(mO,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Da?rn(ao,"WORLD FAIL \xB7 "+Da,"#ff9b9b"):n.pass?rn(ao,"MULTI-REGION WORLD \u2713 \xB7 A/B/C VISITED \u2713 \xB7 STATE ISOLATED \u2713 \xB7 RETURN RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):gs.has("A")?gs.has("B")?gs.has("C")?fu?rn(ao,"RETURNED TO A \xB7 WAITING FOR REGRESSION / RESTORE CHECKS","#ffe59a"):rn(ao,"A/B/C VISITED \u2713 \xB7 RETURN TO REGION A","#ffe59a"):rn(ao,"A/B VISITED \u2713 \xB7 MOVE TO REGION C","#ffe59a"):rn(ao,"A VISITED \u2713 \xB7 MOVE TO REGION B","#ffe59a"):rn(ao,"VISIT REGION A","#ffe59a")}var Kv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),xb=(n,e)=>{if(l_+=Math.max(0,e*1e3),n>=Jv&&!$f){let t=l_/1e3;l_=0,Jv=n+iO,yO(n,t)}n>=Yv&&(EO(),Yv=n+500)};xb.multiRegionWorldId="08A_MULTI_REGION_WORLD";Kv.some(n=>n.multiRegionWorldId==="08A_MULTI_REGION_WORLD")||Kv.push(xb);globalThis.__multiRegionWorld08A={marker:J2,world:Qu,regions:Dn,store:Sm,centers:Cr,visited:gs,get returnedToA(){return fu},get proof(){return _b()}};var MO="08B_PREDICTIVE_REGION_HANDOFF",j_=globalThis.__multiRegionWorld08A,ay=globalThis.__productionActorPipeline07B;if(!j_||!ay)throw new Error("08B requires frozen accepted 08A + 07B runtime");var u_=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=u_.length-1;n>=0;n--)u_[n]?.multiRegionWorldId==="08A_MULTI_REGION_WORLD"&&u_.splice(n,1);for(let n of[...ge.children])n.userData?.worldRegion08A&&ge.remove(n);var cy=ay.pipeline,Bp=ay.factory,$_=cy.definitions.get("HUMANOID_FORAGER_V1"),si=new Sa({scene:ge,assetCache:Bp.assetCache}),Q_=new va({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),vO=new Gi,Ir={A:{...j_.centers.A},B:{...j_.centers.B}};function SO(n,e){return[{id:"08B_"+n+"_ACTOR_1",typeId:$_.typeId,position:{x:e.x-1.8,y:Pe(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.24:.54}},{id:"08B_"+n+"_ACTOR_2",typeId:$_.typeId,position:{x:e.x+1.8,y:Pe(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.34:.64}}]}function jv(n){return new os({id:"08B_REGION_"+n,pipeline:cy,store:vO,actorBlueprints:SO(n,Ir[n]),bindActor:e=>si.bind(n,e),unbindActor:e=>si.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var Cn={A:jv("A"),B:jv("B")},yb=new Er({entries:[{id:"A",center:Ir.A,region:Cn.A},{id:"B",center:Ir.B,region:Cn.B}]}),Eb=new $i(4.7,5.1,48);Eb.rotateX(-Math.PI/2);var AO=new Ot({color:6281423,transparent:!0,opacity:.58,side:_t,depthWrite:!1}),eh=new Ve(Eb,AO,2);eh.frustumCulled=!1;eh.userData.predictiveHandoffRings08B=!0;var zl=new Fe;for(let[n,e]of["A","B"].entries()){let t=Ir[e];zl.position.set(t.x,Pe(t.x,t.z)+.04,t.z),zl.rotation.set(0,0,0),zl.scale.setScalar(1),zl.updateMatrix(),eh.setMatrixAt(n,zl.matrix)}eh.instanceMatrix.needsUpdate=!0;ge.add(eh);var Qf=!1,$v=0,h_=0,Qv=0,Mb="NONE",ex="IDLE",Pa="",pu=!1,mu=!1,Fp=!1,vb=!1,Sb=!1,Ab=null,bb=null,tx=0,bO=document.getElementById("handoffStage08B"),TO=document.getElementById("handoffTarget08B"),RO=document.getElementById("handoffPrepared08B"),wO=document.getElementById("handoffConsumed08B"),CO=document.getElementById("handoffFallback08B"),IO=document.getElementById("handoffStates08B"),DO=document.getElementById("handoffActive08B"),PO=document.getElementById("handoffVisited08B"),NO=document.getElementById("handoffRestored08B"),LO=document.getElementById("handoffAsset08B"),OO=document.getElementById("handoffDuplicates08B"),BO=document.getElementById("handoffRegression08B"),co=document.getElementById("handoffResult08B");function jt(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function nx(){return["A","B"].filter(n=>Cn[n].isActive)}function ix(){return Cn.A.duplicateCount+Cn.B.duplicateCount+si.duplicateBindingCount}function eS(n){return cy.getActor("08B_"+n+"_ACTOR_1")?.kernel?.goals?.progress}async function FO(n,e){if(!Qf){Qf=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let i={x:ne.position.x,z:ne.position.z};Q_.updateMotion(i,Date.now());let s=["A","B"].map(c=>({id:c,center:Ir[c],lifecycle:Cn[c].lifecycle})),r=nx(),o=Q_.choose({position:i,regions:s,excludeIds:r});if(Mb=o?.id??"NONE",o){ex="PREFETCHING "+o.id,await si.prefetch(o.id,$_,2),ex="PREFETCHED "+o.id;let c=Cn[o.id],l=Math.hypot(i.x-Ir[o.id].x,i.z-Ir[o.id].z);c.lifecycle==="UNLOADED"&&l<=c.loadRadiusM&&si.preparedCount(o.id)>=2&&(o.id==="B"&&(vb=!0),o.id==="A"&&pu&&(Sb=!0))}await yb.step({playerPosition:i,dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});let a=nx();tx=Math.max(tx,a.length),Cn.A.isActive&&!Fp&&(Fp=!0,Ab=eS("A")),Cn.B.isActive&&(pu=!0),pu&&Cn.A.isActive&&Cn.A.restoreCount>0&&(mu=!0,bb=eS("A")),Pa=""}catch(t){Pa=t?.message||String(t)}finally{Qf=!1}}}function Tb(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=mu&&Cn.A.lastRestoreIdsStable&&Cn.A.lastRestoreProgressPreserved,t={b_prefetched:vb,a_return_prefetched:Sb,prepared_consumed:si.consumedInstances>=4,fallback_initial_only:si.fallbackInstances===2,state_restored:e,asset_load_one:Bp.assetCache.loadCount===1,duplicates:ix()===0,regression:n==="PASS"},i=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:i.length===0,failed:i,checks:t,regression:n,restored:e}}function UO(){let n=Tb(),e=nx(),t=["A","B"].map(r=>Cn[r].lifecycle[0]).join("/"),i=si.preparedCount("A"),s=si.preparedCount("B");jt(bO,n.pass?"PASS":Pa?"FAIL":globalThis.__livingWorld06J?.stage==="PASS"?"READY":"WAITING REGRESSION",n.pass?"#a8f0b5":Pa?"#ff9b9b":"#ffe59a"),jt(TO,Mb+" \xB7 "+ex),jt(RO,"A:"+i+" \xB7 B:"+s),jt(wO,String(si.consumedInstances)),jt(CO,String(si.fallbackInstances)),jt(IO,t),jt(DO,e.length?e.join(","):"NONE"),jt(PO,(Fp?"A":"\u2014")+"\u2192"+(pu?"B":"\u2014")+"\u2192"+(mu?"A":"\u2014")),jt(NO,n.restored?"STABLE \u2713":mu?"FAIL":"PENDING",n.restored?"#a8f0b5":"#ffe59a"),jt(LO,String(Bp.assetCache.loadCount),Bp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),jt(OO,String(ix()),ix()===0?"#a8f0b5":"#ff9b9b"),jt(BO,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Pa?jt(co,"HANDOFF FAIL \xB7 "+Pa,"#ff9b9b"):n.pass?jt(co,"PREDICTIVE HANDOFF \u2713 \xB7 B PREFETCHED \u2713 \xB7 A RETURN PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?jt(co,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):Fp?pu?mu?jt(co,"RETURNED TO A \xB7 VERIFYING PREFETCH / RESTORE","#ffe59a"):jt(co,"B HANDOFF COMPLETE \xB7 RETURN TO REGION A","#ffe59a"):jt(co,"A ACTIVE \xB7 MOVE TOWARD REGION B","#ffe59a"):jt(co,"ENTER REGION A","#ffe59a")}var tS=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),Rb=(n,e)=>{if(si.update(e),h_+=Math.max(0,e*1e3),n>=$v&&!Qf){let t=h_/1e3;h_=0,$v=n+100,FO(n,t)}n>=Qv&&(UO(),Qv=n+500)};Rb.predictiveHandoffId="08B_PREDICTIVE_HANDOFF";tS.some(n=>n.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF")||tS.push(Rb);globalThis.__predictiveHandoff08B={marker:MO,world:yb,regions:Cn,planner:Q_,factory:si,centers:Ir,get proof(){return Tb()},get maxActiveRegions(){return tx},get aInitialProgress(){return Ab},get aReturnProgress(){return bb}};var HO="08C_BOUNDED_PREFETCH_LIFECYCLE",sx=globalThis.__predictiveHandoff08B,ly=globalThis.__productionActorPipeline07B;if(!sx||!ly)throw new Error("08C requires frozen accepted 08B + 07B runtime");var d_=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let n=d_.length-1;n>=0;n--)d_[n]?.predictiveHandoffId==="08B_PREDICTIVE_HANDOFF"&&d_.splice(n,1);for(let n of[...ge.children])n.userData?.predictiveHandoffRings08B===!0&&ge.remove(n);var uy=ly.pipeline,Up=ly.factory,gu=uy.definitions.get("HUMANOID_FORAGER_V1"),Es=new Sa({scene:ge,assetCache:Up.assetCache}),Ut=new Sf({factory:Es,maxPreparedInstances:2}),rx=new va({prefetchRadiusM:58,minApproachSpeedMps:.35,minApproachDot:.25}),zO=new Gi,Wn={A:{...sx.centers.A},B:{...sx.centers.B}};function GO(n,e){return[{id:"08C_"+n+"_ACTOR_1",typeId:gu.typeId,position:{x:e.x-1.8,y:Pe(e.x-1.8,e.z),z:e.z},yaw:.16,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.26:.56}},{id:"08C_"+n+"_ACTOR_2",typeId:gu.typeId,position:{x:e.x+1.8,y:Pe(e.x+1.8,e.z-.45),z:e.z-.45},yaw:-.16,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:n==="A"?.36:.66}}]}function nS(n){return new os({id:"08C_REGION_"+n,pipeline:uy,store:zO,actorBlueprints:GO(n,Wn[n]),bindActor:e=>Es.bind(n,e),unbindActor:e=>Es.unbind(e.id),loadRadiusM:24,unloadRadiusM:38})}var yn={A:nS("A"),B:nS("B")},wb=new Er({entries:[{id:"A",center:Wn.A,region:yn.A},{id:"B",center:Wn.B,region:yn.B}]}),Cb=new $i(4.7,5.1,48);Cb.rotateX(-Math.PI/2);var kO=new Ot({color:6281423,transparent:!0,opacity:.58,side:_t,depthWrite:!1}),th=new Ve(Cb,kO,2);th.frustumCulled=!1;th.userData.boundedPrefetchRings08C=!0;var Gl=new Fe;for(let[n,e]of["A","B"].entries()){let t=Wn[e];Gl.position.set(t.x,Pe(t.x,t.z)+.04,t.z),Gl.rotation.set(0,0,0),Gl.scale.setScalar(1),Gl.updateMatrix(),th.setMatrixAt(n,Gl.matrix)}th.instanceMatrix.needsUpdate=!0;ge.add(th);var Ib=Pe(Wn.B.x,Wn.B.z),Am=new dt;Am.userData.boundedPrefetchBeacon08C=!0;var hy=new Be(new Ci(.13,.13,18,10,1,!0),new Ot({color:6812927,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));hy.position.set(Wn.B.x,Ib+9,Wn.B.z);hy.renderOrder=999;Am.add(hy);var dy=new Be(new mn(.75,12,8),new Ot({color:12123135,transparent:!0,opacity:.88,depthTest:!1,depthWrite:!1}));dy.position.set(Wn.B.x,Ib+18.5,Wn.B.z);dy.renderOrder=1e3;Am.add(dy);ge.add(Am);var ep=!1,iS=0,f_=0,sS=0,Na="",Hp=!1,_u=!1,zp=!1,fy=!1,La=!1,Db=!1,xu=!1,Pb=null,Nb=null,Lb=0,ox=0,VO=document.getElementById("boundedStage08C"),WO=document.getElementById("boundedTarget08C"),XO=document.getElementById("boundedDistanceB08C"),qO=document.getElementById("boundedBearingB08C"),YO=document.getElementById("boundedPrepared08C"),JO=document.getElementById("boundedCancel08C"),ZO=document.getElementById("boundedEvicted08C"),KO=document.getElementById("boundedPeak08C"),jO=document.getElementById("boundedConsumed08C"),$O=document.getElementById("boundedFallback08C"),QO=document.getElementById("boundedStates08C"),e3=document.getElementById("boundedRoute08C"),t3=document.getElementById("boundedRestored08C"),n3=document.getElementById("boundedAsset08C"),i3=document.getElementById("boundedDuplicates08C"),s3=document.getElementById("boundedRegression08C"),cs=document.getElementById("boundedResult08C");function It(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}var p_=new I;function r3(){let n=Wn.B.x-ne.position.x,e=Wn.B.z-ne.position.z,t=Math.hypot(n,e);if(t<.001)return{distance:0,label:"HERE",degrees:0};En.getWorldDirection(p_);let i=p_.x,s=p_.z,r=Math.hypot(i,s)||1;i/=r,s/=r;let o=n/t,a=e/t,c=Math.atan2(i*a-s*o,i*o+s*a)*180/Math.PI,l=Math.abs(c),u;return l<=22.5?u="FORWARD":l<=67.5?u=c>0?"FORWARD-RIGHT":"FORWARD-LEFT":l<=112.5?u=c>0?"RIGHT":"LEFT":l<=157.5?u=c>0?"BACK-RIGHT":"BACK-LEFT":u="BACK",{distance:t,label:u,degrees:c}}function rS(){return["A","B"].filter(n=>yn[n].isActive)}function ax(){return yn.A.duplicateCount+yn.B.duplicateCount+Es.duplicateBindingCount}function oS(n){return uy.getActor("08C_"+n+"_ACTOR_1")?.kernel?.goals?.progress}async function o3(n){if(!ep){ep=!0;try{if((globalThis.__livingWorld06J?.stage||"WAITING")!=="PASS")return;let t=Date.now(),i={x:ne.position.x,z:ne.position.z};rx.updateMotion(i,t);let s=rS(),o=rx.choose({position:i,regions:["A","B"].map(c=>({id:c,center:Wn[c],lifecycle:yn[c].lifecycle})),excludeIds:s})?.id??null;if(o!==Ut.targetId?await Ut.retarget(o,gu,2):o&&Ut.preparedCount(o)<2&&await Ut.retarget(o,gu,2),o==="B"&&yn.B.lifecycle==="UNLOADED"&&Ut.preparedCount("B")===2){let c=Ut.executionCount("B");c===1&&!_u&&(_u=!0,Lb=t),c>=2&&zp&&(fy=!0)}_u&&!La&&Ut.budget.cancellations>=1&&Ut.budget.evictedInstances>=2&&Ut.preparedCount("B")===0&&(zp=!0,ox||(ox=t)),o==="A"&&La&&yn.A.lifecycle==="UNLOADED"&&Ut.preparedCount("A")===2&&(Db=!0),await wb.step({playerPosition:i,dtMs:Math.max(0,n*1e3),now:t,foodProgressPerSecond:.004}),Ut.observeAfterWorldStep(),yn.A.isActive&&!Hp&&(Hp=!0,Pb=oS("A")),yn.B.isActive&&(La=!0),La&&yn.A.isActive&&yn.A.restoreCount>0&&(xu=!0,Nb=oS("A"));let a=rS();Ut.targetId&&a.includes(Ut.targetId)&&(await Ut.retarget(null,gu,2),Ut.observeAfterWorldStep()),Na=""}catch(e){Na=e?.message||String(e)}finally{ep=!1}}}function Ob(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=xu&&yn.A.lastRestoreIdsStable===!0&&yn.A.lastRestoreProgressPreserved===!0,t={first_b_prefetch:_u,stale_b_evicted:zp,b_reprefetched:fy,prepared_consumed:Es.consumedInstances>=4,fallback_initial_only:Es.fallbackInstances===2,pool_bounded:Ut.budget.peakPrepared<=2&&Ut.totalPrepared()<=2,a_return_prefetched:Db,state_restored:e,asset_load_one:Up.assetCache.loadCount===1,duplicates:ax()===0,regression:n==="PASS"},i=Object.entries(t).filter(([,s])=>!s).map(([s])=>s);return{pass:i.length===0,failed:i,checks:t,regression:n,restored:e}}function a3(){let n=Ob(),e=Ut.budget,t=["A","B"].map(r=>yn[r].lifecycle[0]).join("/"),i=(Hp?"A":"\u2014")+"\u2192"+(La?"B":"\u2014")+"\u2192"+(xu?"A":"\u2014");It(VO,n.pass?"PASS":Na?"FAIL":n.regression==="PASS"?"READY":"WAITING REGRESSION",n.pass?"#a8f0b5":Na?"#ff9b9b":"#ffe59a"),It(WO,(Ut.targetId||"NONE")+" \xB7 "+Ut.lastAction);let s=r3();It(XO,s.distance.toFixed(1)+" m"),It(qO,s.label+" \xB7 "+Math.round(Math.abs(s.degrees))+"\xB0"),It(YO,"A:"+Ut.preparedCount("A")+" \xB7 B:"+Ut.preparedCount("B")),It(JO,String(e.cancellations),e.cancellations>=1?"#a8f0b5":"#ffe59a"),It(ZO,String(e.evictedInstances),e.evictedInstances>=2?"#a8f0b5":"#ffe59a"),It(KO,e.peakPrepared+"/2",e.peakPrepared<=2?"#a8f0b5":"#ff9b9b"),It(jO,String(Es.consumedInstances)),It($O,String(Es.fallbackInstances)),It(QO,t),It(e3,i),It(t3,n.restored?"STABLE \u2713":xu?"FAIL":"PENDING",n.restored?"#a8f0b5":"#ffe59a"),It(n3,String(Up.assetCache.loadCount),Up.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),It(i3,String(ax()),ax()===0?"#a8f0b5":"#ff9b9b"),It(s3,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Na?It(cs,"BOUNDED PREFETCH FAIL \xB7 "+Na,"#ff9b9b"):n.pass?It(cs,"BOUNDED PREFETCH \u2713 \xB7 STALE B EVICTED \u2713 \xB7 B RE-PREFETCHED \u2713 \xB7 PREPARED CONSUMED \u2713 \xB7 POOL BOUNDED 2 \u2713 \xB7 STATE RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?It(cs,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):Hp?_u?zp?fy?La?xu?It(cs,"RETURNED TO A \xB7 VERIFYING BOUNDS / RESTORE","#ffe59a"):It(cs,"B HANDOFF \u2713 \xB7 RETURN TO REGION A","#ffe59a"):It(cs,"B RE-PREFETCHED \u2713 \xB7 ENTER REGION B","#ffe59a"):It(cs,"STALE B EVICTED \u2713 \xB7 MOVE TOWARD B AGAIN","#ffe59a"):It(cs,"B PREFETCHED \u2713 \xB7 REVERSE TOWARD A BEFORE B ACTIVATES","#ffe59a"):It(cs,"MOVE TOWARD B UNTIL PREPARED B = 2","#ffe59a"):It(cs,"ENTER REGION A","#ffe59a")}var aS=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),Bb=(n,e)=>{if(Es.update(e),f_+=Math.max(0,e*1e3),n>=iS&&!ep){let t=f_/1e3;f_=0,iS=n+100,o3(t)}n>=sS&&(a3(),sS=n+500)};Bb.boundedPrefetchId="08C_BOUNDED_PREFETCH";aS.some(n=>n.boundedPrefetchId==="08C_BOUNDED_PREFETCH")||aS.push(Bb);globalThis.__boundedPrefetch08C={marker:HO,world:wb,regions:yn,planner:rx,factory:Es,controller:Ut,centers:Wn,get proof(){return Ob()},get firstBPreparedAt(){return Lb},get cancellationAt(){return ox},get aInitialProgress(){return Pb},get aReturnProgress(){return Nb}};var c3="08D_WORLD_EXPANSION_CERTIFICATION",nh=globalThis.__boundedPrefetch08C,Fb=globalThis.__productionActorPipeline07B;if(!nh||!Fb)throw new Error("08D requires frozen accepted 08C runtime");var vn=nh.regions,Nr=nh.centers,_s=nh.factory,Bu=nh.controller,Gp=Fb.factory,cS=14,kp=["A","B","A","B","A"],Ub=3e4,Vs=[],m_=null,Vp=0,qa=0,Ya=0,Ja=0,ei="",lS=0,l3=document.getElementById("certStage08D"),u3=document.getElementById("certNext08D"),h3=document.getElementById("certDistance08D"),d3=document.getElementById("certDirection08D"),f3=document.getElementById("certSequence08D"),p3=document.getElementById("certElapsed08D"),m3=document.getElementById("certACycles08D"),g3=document.getElementById("certBCycles08D"),_3=document.getElementById("certActiveActors08D"),x3=document.getElementById("certBindings08D"),y3=document.getElementById("certPrepared08D"),E3=document.getElementById("certConsumed08D"),M3=document.getElementById("certFallback08D"),v3=document.getElementById("certAsset08D"),S3=document.getElementById("certDuplicates08D"),A3=document.getElementById("certRegression08D"),lo=document.getElementById("certResult08D");function Ft(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}var g_=new I;function b3(n){let e=Nr[n],t=e.x-ne.position.x,i=e.z-ne.position.z,s=Math.hypot(t,i);if(s<.001)return{distance:0,label:"HERE",degrees:0};En.getWorldDirection(g_);let r=g_.x,o=g_.z,a=Math.hypot(r,o)||1;r/=a,o/=a;let c=t/s,l=i/s,u=Math.atan2(r*l-o*c,r*c+o*l)*180/Math.PI,h=Math.abs(u),d;return h<=22.5?d="FORWARD":h<=67.5?d=u>0?"FORWARD-RIGHT":"FORWARD-LEFT":h<=112.5?d=u>0?"RIGHT":"LEFT":h<=157.5?d=u>0?"BACK-RIGHT":"BACK-LEFT":d="BACK",{distance:s,label:d,degrees:u}}function py(){return vn.A.activeActors.length+vn.B.activeActors.length}function Wp(){return vn.A.duplicateCount+vn.B.duplicateCount+_s.duplicateBindingCount}function uS(n){let e=Nr[n];return Math.hypot(ne.position.x-e.x,ne.position.z-e.z)}function T3(){return vn.A.isActive&&uS("A")<=cS?"A":vn.B.isActive&&uS("B")<=cS?"B":null}function R3(){let n=Math.min(Vs.length,kp.length-1);return kp[n]}function w3(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=T3();Vs.length===0?e==="A"&&(Vs.push("A"),m_="A",Vp=Date.now()):e&&e!==m_&&(Vs.push(e),m_=e);let t=py(),i=_s.size,s=Bu.totalPrepared();qa=Math.max(qa,t),Ya=Math.max(Ya,i),Ja=Math.max(Ja,s),Vp&&(qa>4?ei="ACTIVE ACTORS > 4":Ya>4?ei="BINDINGS > 4":Ja>2?ei="PREFETCH POOL > 2":Wp()>0?ei="DUPLICATE STATE":Gp.assetCache.loadCount!==1?ei="ASSET LOAD COUNT CHANGED":_s.fallbackInstances!==2?ei="FALLBACK COUNT CHANGED":n==="FAIL"&&(ei="06J REGRESSION FAIL"))}function Hb(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=Vp?Date.now()-Vp:0,i={sequence:kp.every((r,o)=>Vs[o]===r),elapsed:e>=Ub,a_restores:vn.A.restoreCount>=2,b_restores:vn.B.restoreCount>=1,a_unloads:vn.A.unloadCount>=2,b_unloads:vn.B.unloadCount>=2,prepared_consumed:_s.consumedInstances>=8,fallback_stable:_s.fallbackInstances===2,max_active_actors:qa<=4,max_bindings:Ya<=4,max_prepared:Ja<=2&&Bu.budget.peakPrepared<=2,final_prepared:Bu.totalPrepared()===0,final_a_active:vn.A.isActive&&vn.B.lifecycle==="UNLOADED",final_active_actors:py()===2,final_bindings:_s.size===2,asset_load_one:Gp.assetCache.loadCount===1,duplicates:Wp()===0,regression:n==="PASS",no_violation:!ei},s=Object.entries(i).filter(([,r])=>!r).map(([r])=>r);return{pass:s.length===0,failed:s,checks:i,elapsed:e,regression:n}}function C3(){let n=Hb(),e=R3(),t=b3(e),i=Vs.slice(0,5).join("\u2192")||"\u2014",s=Math.floor(n.elapsed/1e3);Ft(l3,n.pass?"PASS":ei?"FAIL":n.regression==="PASS"?"RUNNING":"WAITING REGRESSION",n.pass?"#a8f0b5":ei?"#ff9b9b":"#ffe59a"),Ft(u3,e),Ft(h3,t.distance.toFixed(1)+" m"),Ft(d3,t.label+" \xB7 "+Math.round(Math.abs(t.degrees))+"\xB0"),Ft(f3,i),Ft(p3,s+" / 30 s",s>=30?"#a8f0b5":"#ffe59a"),Ft(m3,"restore "+vn.A.restoreCount+" \xB7 unload "+vn.A.unloadCount),Ft(g3,"restore "+vn.B.restoreCount+" \xB7 unload "+vn.B.unloadCount),Ft(_3,py()+" \xB7 peak "+qa+"/4"),Ft(x3,_s.size+" \xB7 peak "+Ya+"/4"),Ft(y3,Bu.totalPrepared()+" \xB7 peak "+Math.max(Ja,Bu.budget.peakPrepared)+"/2"),Ft(E3,String(_s.consumedInstances)),Ft(M3,String(_s.fallbackInstances),_s.fallbackInstances===2?"#a8f0b5":"#ff9b9b"),Ft(v3,String(Gp.assetCache.loadCount),Gp.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Ft(S3,String(Wp()),Wp()===0?"#a8f0b5":"#ff9b9b"),Ft(A3,n.regression,n.regression==="PASS"?"#a8f0b5":n.regression==="FAIL"?"#ff9b9b":"#ffe59a"),ei?Ft(lo,"CERTIFICATION FAIL \xB7 "+ei,"#ff9b9b"):n.pass?Ft(lo,"WORLD EXPANSION CERTIFIED \u2713 \xB7 4 HANDOFFS \u2713 \xB7 REPEATED RESTORE \u2713 \xB7 ACTORS BOUNDED 4 \u2713 \xB7 BINDINGS BOUNDED 4 \u2713 \xB7 PREFETCH BOUNDED 2 \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):n.regression!=="PASS"?Ft(lo,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):Vs.length===0?Ft(lo,"ENTER REGION A TO START CERTIFICATION","#ffe59a"):Vs.length<5?Ft(lo,"GO TO "+e+" \xB7 COMPLETE A\u2192B\u2192A\u2192B\u2192A","#ffe59a"):n.elapsed<Ub?Ft(lo,"ROUTE COMPLETE \u2713 \xB7 HOLD UNTIL 30 s CERT WINDOW","#ffe59a"):Ft(lo,"ROUTE COMPLETE \xB7 VERIFYING FINAL LIFECYCLE STATE","#ffe59a")}var zb=Pe(Nr.A.x,Nr.A.z),bm=new dt;bm.userData.worldExpansionCertificationBeacon08D=!0;var my=new Be(new Ci(.13,.13,18,10,1,!0),new Ot({color:16766571,transparent:!0,opacity:.62,depthTest:!1,depthWrite:!1}));my.position.set(Nr.A.x,zb+9,Nr.A.z);my.renderOrder=999;bm.add(my);var gy=new Be(new mn(.75,12,8),new Ot({color:16773037,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}));gy.position.set(Nr.A.x,zb+18.5,Nr.A.z);gy.renderOrder=1e3;bm.add(gy);ge.add(bm);var hS=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),Gb=n=>{w3(),n>=lS&&(C3(),lS=n+250)};Gb.worldExpansionCertificationId="08D_WORLD_EXPANSION_CERTIFICATION";hS.some(n=>n.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION")||hS.push(Gb);globalThis.__worldExpansionCertification08D={marker:c3,requiredSequence:[...kp],get visits(){return[...Vs]},get proof(){return Hb()},get maxActiveActors(){return qa},get maxBindings(){return Ya},get maxPrepared(){return Ja},get violation(){return ei}};var I3="09B_VERTICAL_BEAUTY_SLICE",Xp=globalThis.__boundedPrefetch08C,kb=globalThis.__productionActorPipeline07B;if(!Xp||!kb)throw new Error("09B requires frozen Test08 production runtime");var ft={...Xp.centers.A},Ws=new dt;Ws.name="09B_SUNLIT_BASIN";Ws.userData.presentationSlice09B=!0;Ws.position.set(ft.x,0,ft.z);var oc=!1,yo="",Vb=0,Tm=0,Rm=0,dS=0,Wb=0,Xb=0,D3=document.getElementById("beautyStage09B"),P3=document.getElementById("beautyPlace09B"),N3=document.getElementById("beautyMaterials09B"),L3=document.getElementById("beautyDepth09B"),O3=document.getElementById("beautyMotion09B"),B3=document.getElementById("beautySliceDraw09B"),F3=document.getElementById("beautySliceTri09B"),U3=document.getElementById("beautyTotalDraw09B"),H3=document.getElementById("beautyTotalTri09B"),z3=document.getElementById("beautyRuntime09B"),G3=document.getElementById("beautyAsset09B"),k3=document.getElementById("beautyDuplicates09B"),V3=document.getElementById("beautyDistance09B"),Uf=document.getElementById("beautyResult09B");function cn(n,e,t){n&&(n.textContent!==e&&(n.textContent=e),t&&n.style.color!==t&&(n.style.color=t))}function gi(n,e=1){let t=n.index?n.index.count/3:n.getAttribute("position").count/3;return Math.round(t*e)}function oi(n,e){return Ws.add(n),Rm++,Tm+=Math.max(0,Math.round(e)),n}function Ao(n,e,t){let i=n.clone();return i.wrapS=i.wrapT=Ti,i.repeat.set(e,t),i.needsUpdate=!0,i}function _y(n,{speed:e=.8,strength:t=.12,scale:i=.1}={}){return n.onBeforeCompile=s=>{s.uniforms.uBeautyTime={value:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uBeautyTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
float beautyPhase=instanceMatrix[3].x*0.071+instanceMatrix[3].z*0.053;
float beautyWeight=clamp(position.y*0.34,0.0,1.0);
transformed.x+=sin(uBeautyTime*`+e.toFixed(3)+"+beautyPhase+position.y*"+i.toFixed(3)+")*"+t.toFixed(3)+`*beautyWeight;
transformed.z+=cos(uBeautyTime*`+(e*.73).toFixed(3)+"+beautyPhase*1.31)*"+(t*.55).toFixed(3)+`*beautyWeight;
#endif`),n.userData.beautyShader=s},n.customProgramCacheKey=()=>"09B-p2-wind-"+e+"-"+t+"-"+i,n}function xy(n){let e=(n+24)/50;return e<0||e>1?null:-1.7+6.7*e+2*Math.sin(e*Math.PI*1.15)}function W3(){Xe.toneMappingExposure=1,En.fov=50,En.updateProjectionMatrix(),ge.fog&&"density"in ge.fog&&(ge.fog.color.set(12111056),ge.fog.density=.0078),Rr.color.set(13165809),Rr.groundColor.set(4937029),Rr.intensity=1.28,Qa.color.set(8427941),Qa.intensity=.1,Dt.color.set(16768942),Dt.intensity=3.65,Dt.position.set(-42,54,14),Dt.target.position.set(ft.x,0,ft.z+8),Dt.target.updateMatrixWorld(),typeof ln<"u"&&(ln.top.value.set(5084354),ln.mid.value.set(11522255),ln.bottom.value.set(15783850),ln.sunWarm.value.set(16764034))}function X3(){let n=new ui(66,66,40,40);n.rotateX(-Math.PI/2);let e=n.getAttribute("position"),t=[],i=new re;for(let c=0;c<e.count;c++){let l=e.getX(c),u=e.getZ(c),h=ft.x+l,d=ft.z+u,f=Math.hypot(l,u),m=Math.max(0,(f-21)/12),x=Math.hypot(l+12,u-7),g=Math.max(0,1-x/10.2),p=.07*Math.sin(l*.22)+.05*Math.cos(u*.19)+.025*Math.sin((l+u)*.47),M=.28*m*m-.14*g*g;e.setY(c,Pe(h,d)+.055+p+M);let T=Math.max(0,1-x/15),E=.5+.5*Math.sin(l*.17+u*.13)+.22*Math.cos(u*.31),S=.245-T*.018+(E-.5)*.014,A=.31+T*.08,R=.285+T*.045+(E-.5)*.028;i.setHSL(S,A,R),t.push(i.r,i.g,i.b)}n.setAttribute("color",new Oe(t,3)),n.computeVertexNormals();let s=Ao(_i,22,22),r=Ao(_i,17,17),o=new Te({vertexColors:!0,roughness:.91,metalness:0,bumpMap:s,bumpScale:.085,roughnessMap:r,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),a=new Be(n,o);return a.receiveShadow=!0,a.name="09B meadow ground p2",oi(a,gi(n))}function q3(){let n=Ge.layout.pathSegments,e=3.15,t=[],i=[],s=[],r=[],o=[],a=new re;for(let f=0;f<=n;f++){let m=f/n,x=-1.7+6.7*m+2*Math.sin(m*Math.PI*1.15),g=-24+50*m;o.push({x,z:g,t:m})}for(let f=0;f<=n;f++){let m=o[Math.max(0,f-1)],x=o[Math.min(n,f+1)],g=x.x-m.x,p=x.z-m.z,M=Math.hypot(g,p)||1;g/=M,p/=M;let T=-p,E=g,S=o[f];for(let A of[-1,1]){let R=S.x+T*e*.5*A,y=S.z+E*e*.5*A,b=Pe(ft.x+R,ft.z+y)+.105+.018*Math.sin(S.t*31+A);t.push(R,b,y),s.push(A<0?0:1,S.t*8),a.setHSL(.085,.27,.31+(A<0?.015:-.005)+.02*Math.sin(S.t*17)),r.push(a.r,a.g,a.b)}if(f<n){let A=f*2,R=A+1,y=A+2,b=A+3;i.push(A,y,R,R,y,b)}}let c=new lt;c.setAttribute("position",new Oe(t,3)),c.setAttribute("uv",new Oe(s,2)),c.setAttribute("color",new Oe(r,3)),c.setIndex(i),c.computeVertexNormals();let l=Ao(np,2.4,14),u=Ao(np,1.8,11),h=new Te({vertexColors:!0,roughness:.96,metalness:0,bumpMap:l,bumpScale:.13,roughnessMap:u}),d=new Be(c,h);return d.receiveShadow=!0,d.name="09B soil path p2",oi(d,gi(c))}function Y3(){let n=Ge.layout.shoreSegments,e=[],t=[],i=[],s=new re,r=-12,o=7;for(let u=0;u<=n;u++){let h=u/n*Math.PI*2;for(let d of[0,1]){let f=d?10.15:8.25,m=r+Math.cos(h)*f,x=o+Math.sin(h)*f,g=Pe(ft.x+m,ft.z+x)+(d?.085:.105);e.push(m,g,x),d?s.setHSL(.2,.22,.27):s.setHSL(.12,.18,.235),i.push(s.r,s.g,s.b)}if(u<n){let d=u*2;t.push(d,d+2,d+1,d+1,d+2,d+3)}}let a=new lt;a.setAttribute("position",new Oe(e,3)),a.setAttribute("color",new Oe(i,3)),a.setIndex(t),a.computeVertexNormals();let c=new Te({vertexColors:!0,roughness:.88,metalness:0,bumpMap:Ao(_i,8,8),bumpScale:.07}),l=new Be(a,c);return l.receiveShadow=!0,l.name="09B wet shoreline p2",oi(l,gi(a))}function J3(){let n=new zc(8.4,72);n.rotateX(-Math.PI/2);let e=Pe(ft.x-12,ft.z+7)+.14,t=new sn({transparent:!0,depthWrite:!1,side:_t,uniforms:{uBeautyTime:{value:0},uDeep:{value:new re(2510689)},uShallow:{value:new re(6989470)},uSky:{value:new re(9291986)},uSun:{value:new re(16766355)},uSunDir:{value:new I(-.56,.78,.2).normalize()}},vertexShader:["uniform float uBeautyTime;","varying vec2 vLocal;","varying vec3 vWorld;","varying vec3 vNormalW;","void main(){"," vec3 p=position;"," float ax=(p.x+uBeautyTime*.95)*.72;"," float az=(p.z-uBeautyTime*.62)*.91;"," float w=sin(ax)*.075+cos(az)*.052+sin((p.x+p.z)*.43+uBeautyTime*.41)*.028;"," p.y+=w;"," float dx=.054*cos(ax)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);"," float dz=-.047*sin(az)+.012*cos((p.x+p.z)*.43+uBeautyTime*.41);"," vec3 n=normalize(vec3(-dx,1.0,-dz));"," vec4 wp=modelMatrix*vec4(p,1.0);"," vWorld=wp.xyz;"," vNormalW=normalize(mat3(modelMatrix)*n);"," vLocal=p.xz/8.4;"," vec4 mvPosition=viewMatrix*wp;"," gl_Position=projectionMatrix*mvPosition;","}"].join(`
`),fragmentShader:["uniform vec3 uDeep;","uniform vec3 uShallow;","uniform vec3 uSky;","uniform vec3 uSun;","uniform vec3 uSunDir;","uniform float uBeautyTime;","varying vec2 vLocal;","varying vec3 vWorld;","varying vec3 vNormalW;","void main(){"," float r=length(vLocal);"," vec3 N=normalize(vNormalW);"," vec3 V=normalize(cameraPosition-vWorld);"," float fres=pow(1.0-max(dot(N,V),0.0),3.0);"," float sparkle=pow(max(dot(reflect(-uSunDir,N),V),0.0),72.0);"," float ripple=.5+.5*sin((vLocal.x*23.0-vLocal.y*17.0)+uBeautyTime*1.25);"," float shallow=smoothstep(.0,.92,r);"," vec3 col=mix(uDeep,uShallow,.32+.42*shallow);"," col=mix(col,uSky,.18+.47*fres);"," col+=uSun*sparkle*(.75+.25*ripple);"," float foam=smoothstep(.82,.985,r)*(1.0-smoothstep(.985,1.0,r));"," col=mix(col,vec3(.82,.90,.82),foam*.48);"," float alpha=(.72+.12*fres)*(1.0-smoothstep(.985,1.0,r));"," gl_FragColor=vec4(col,alpha);","}"].join(`
`)}),i=new Be(n,t);return i.position.set(-12,e,7),i.renderOrder=3,i.name="09B water p2",i.userData.timeUniform=t.uniforms.uBeautyTime,oi(i,gi(n))}function Z3(n){let e=new Ci(.42,.64,7,8,2),t=new Te({color:16777215,roughness:.91,metalness:0,bumpMap:Ao(_i,5,12),bumpScale:.095}),i=new Ve(e,t,Ge.layout.trees);i.castShadow=!0,i.receiveShadow=!0,i.name="09B tree trunks p2";let s=new cr(2.65,1),r=_y(new Te({color:16777215,roughness:.82,metalness:0}),{speed:.74,strength:.18,scale:.5}),o=new Ve(s,r,Ge.layout.trees);o.castShadow=!0,o.receiveShadow=!0,o.name="09B canopy p2";let a=new Fe,c=new re;for(let l=0;l<Ge.layout.trees;l++){let u=l/Ge.layout.trees*Math.PI*2+(n()-.5)*.22,h=22.2+n()*9,d=Math.cos(u)*h,f=Math.sin(u)*h;f>13&&Math.abs(d-4)<8&&(d+=d<4?-7:7);let m=Pe(ft.x+d,ft.z+f),x=.82+n()*.42;a.position.set(d,m+3.5*x,f),a.rotation.set(0,n()*Math.PI*2,0),a.scale.set(.82+n()*.34,x,.82+n()*.34),a.updateMatrix(),i.setMatrixAt(l,a.matrix),c.setHSL(.075+(n()-.5)*.018,.37,.22+n()*.06),i.setColorAt(l,c),a.position.set(d+(n()-.5)*.55,m+7.45*x,f+(n()-.5)*.55),a.rotation.set((n()-.5)*.11,n()*Math.PI*2,(n()-.5)*.11),a.scale.set(1+n()*.52,.78+n()*.46,1+n()*.52),a.updateMatrix(),o.setMatrixAt(l,a.matrix),c.setHSL(.29+(n()-.5)*.035,.38+n()*.1,.27+n()*.075),o.setColorAt(l,c)}return i.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),o.instanceColor&&(o.instanceColor.needsUpdate=!0),oi(i,gi(e,Ge.layout.trees)),oi(o,gi(s,Ge.layout.trees)),r}function K3(){let n=new Float32Array([-.1,0,0,.1,0,0,-.065,.9,0,.065,.9,0,0,0,-.1,0,0,.1,0,.9,-.065,0,.9,.065]),e=new lt;return e.setAttribute("position",new Lt(n,3)),e.setIndex([0,1,2,1,3,2,4,5,6,5,7,6]),e.computeVertexNormals(),e}function j3(n){let e=K3(),t=_y(new Te({color:16777215,roughness:.84,metalness:0,side:_t}),{speed:1.26,strength:.13,scale:.88}),i=new Ve(e,t,Ge.layout.grassTufts);i.name="09B grass blades p2";let s=new Fe,r=new re,o=0;for(;o<Ge.layout.grassTufts;){let a=(n()*2-1)*31,c=(n()*2-1)*31;if(a*a+c*c>961||Math.hypot(a+12,c-7)<10.2)continue;let l=xy(c);if(l!==null&&Math.abs(a-l)<2.25)continue;let u=Pe(ft.x+a,ft.z+c);s.position.set(a,u+.055,c),s.rotation.set((n()-.5)*.045,n()*Math.PI*2,(n()-.5)*.045);let h=.55+n()*1.05;s.scale.set(.7+n()*.55,h,.7+n()*.55),s.updateMatrix(),i.setMatrixAt(o,s.matrix);let d=Math.max(0,1-Math.hypot(a+12,c-7)/18);r.setHSL(.265-d*.025+(n()-.5)*.025,.43+n()*.08,.31+n()*.075),i.setColorAt(o,r),o++}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),oi(i,gi(e,Ge.layout.grassTufts)),t}function $3(n){let e=new Jn(.7,0),t=_y(new Te({color:16777215,roughness:.86,metalness:0}),{speed:.82,strength:.08,scale:.62}),i=new Ve(e,t,Ge.layout.shrubs);i.name="09B understory shrubs p2";let s=new Fe,r=new re,o=0;for(;o<Ge.layout.shrubs;){let a=n()*Math.PI*2,c=13.5+n()*14.5,l=Math.cos(a)*c,u=Math.sin(a)*c;if(Math.hypot(l+12,u-7)<10.4)continue;let h=xy(u);if(h!==null&&Math.abs(l-h)<3.2)continue;let d=Pe(ft.x+l,ft.z+u);s.position.set(l,d+.55,u),s.rotation.set((n()-.5)*.13,n()*Math.PI*2,(n()-.5)*.13),s.scale.set(.7+n()*.9,.52+n()*.8,.7+n()*.9),s.updateMatrix(),i.setMatrixAt(o,s.matrix),r.setHSL(.3+(n()-.5)*.035,.4+n()*.13,.235+n()*.09),i.setColorAt(o,r),o++}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),oi(i,gi(e,Ge.layout.shrubs)),t}function Q3(n){let e=new kc(.1,0),t=new Te({color:16777215,roughness:.66,metalness:0,emissive:2365191,emissiveIntensity:.1}),i=new Ve(e,t,Ge.layout.flowers);i.name="09B flowers p2";let s=new Fe,r=new re,o=0;for(;o<Ge.layout.flowers;){let a=(n()*2-1)*25,c=(n()*2-1)*25;if(Math.hypot(a+12,c-7)<10)continue;let l=xy(c);if(l!==null&&Math.abs(a-l)<2)continue;let u=Pe(ft.x+a,ft.z+c);s.position.set(a,u+.22+n()*.22,c),s.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI);let h=.55+n()*.92;s.scale.setScalar(h),s.updateMatrix(),i.setMatrixAt(o,s.matrix);let d=o%4;d===0?r.set(16045175):d===1?r.set(15181731):d===2?r.set(13157871):r.set(15789792),r.offsetHSL((n()-.5)*.02,0,(n()-.5)*.05),i.setColorAt(o,r),o++}i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),oi(i,gi(e,Ge.layout.flowers))}function eB(n){let e=[],t=[],i=new re,s=Ge.layout.ridgeLayers,r=Ge.layout.ridgeSegments;function o(c,l,u,h){e.push(c,l,u),t.push(h.r,h.g,h.b)}for(let c=0;c<s;c++){let l=49+c*13,u=-44-c*5,d=(88+c*10)/r;for(let f=0;f<r;f++){let m=u+f*d,x=m+d,g=(m+x)*.5+(n()-.5)*1.6,p=Pe(ft.x+m,ft.z+l)-.3,M=Pe(ft.x+x,ft.z+l)-.3,T=Math.max(p,M)+9+c*3+n()*9,E=l+5.5+n()*3,S=T-(1.2+n()*3),A=.35-c*.035+n()*.025;i.setHSL(.56,.14+c*.015,A);let R=i.clone();i.setHSL(.57,.12,A-.055);let y=i.clone();i.setHSL(.55,.11,A-.085);let b=i.clone();o(m,p,l,y),o(g,T,l,R),o(x,M,l,y),o(m,p,l,y),o(g,S,E,b),o(g,T,l,R),o(g,T,l,R),o(g,S,E,b),o(x,M,l,y)}}let a=new lt;return a.setAttribute("position",new Oe(e,3)),a.setAttribute("color",new Oe(t,3)),a.computeVertexNormals(),a}function tB(n){let e=Ao(_i,5,5),t=new Te({color:16777215,vertexColors:!1,roughness:.91,metalness:0,bumpMap:e,bumpScale:.11}),i=new Fe,s=new re,r=new Jn(.7,0),o=new Ve(r,t,Ge.layout.rocks);o.name="09B rocks p2",o.castShadow=!0,o.receiveShadow=!0;for(let g=0;g<Ge.layout.rocks;g++){let p=n()*Math.PI*2,M=8+n()*21,T=Math.cos(p)*M,E=Math.sin(p)*M;if(Math.hypot(T+12,E-7)<9)continue;let S=Pe(ft.x+T,ft.z+E);i.position.set(T,S+.25,E),i.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI),i.scale.set(.55+n()*1.55,.38+n()*.85,.55+n()*1.35),i.updateMatrix(),o.setMatrixAt(g,i.matrix),s.setHSL(.17+(n()-.5)*.035,.08+n()*.07,.4+n()*.12),o.setColorAt(g,s)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),oi(o,gi(r,Ge.layout.rocks));let a=eB(n),c=new Te({vertexColors:!0,roughness:.96,metalness:0,side:_t,fog:!0}),l=new Be(a,c);l.receiveShadow=!1,l.castShadow=!1,l.name="09B layered ridge p2",oi(l,gi(a));let u=5,h=25,d=Pe(ft.x+u,ft.z+h),f=new ji(1.25,1.1,1.5),m=new Ve(f,t,Ge.layout.gateBlocks);m.name="09B weathered stone gate p2",m.castShadow=!0,m.receiveShadow=!0;let x=0;for(let g of[-1,1])for(let p=0;p<5;p++)i.position.set(u+g*2.45,d+.65+p*1.16,h+(n()-.5)*.16),i.rotation.set((n()-.5)*.04,(n()-.5)*.1,(n()-.5)*.055),i.scale.set(.96+n()*.1,.95+n()*.1,.94+n()*.12),i.updateMatrix(),m.setMatrixAt(x,i.matrix),s.setHSL(.15+(n()-.5)*.025,.07+n()*.04,.43+n()*.09),m.setColorAt(x,s),x++;for(let g=0;g<4;g++)i.position.set(u-1.8+g*1.2,d+6.25+Math.sin(g*.9)*.15,h+(n()-.5)*.14),i.rotation.set((n()-.5)*.04,(n()-.5)*.06,(g-1.5)*-.025),i.scale.set(1.08,1,.98),i.updateMatrix(),m.setMatrixAt(x,i.matrix),s.setHSL(.15,.075,.46+n()*.07),m.setColorAt(x,s),x++;m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),oi(m,gi(f,Ge.layout.gateBlocks))}function nB(n){let e=new Float32Array(Ge.layout.pollen*3);for(let r=0;r<Ge.layout.pollen;r++){let o=r*3;e[o]=(n()*2-1)*31,e[o+1]=1+n()*9.5,e[o+2]=(n()*2-1)*31}let t=new lt;t.setAttribute("position",new Lt(e,3));let i=new sn({transparent:!0,depthWrite:!1,blending:tl,uniforms:{uBeautyTime:{value:0}},vertexShader:["uniform float uBeautyTime;","void main(){"," vec3 p=position;"," float phase=p.x*.17+p.z*.11;"," p.x+=sin(uBeautyTime*.31+phase)*.65;"," p.y+=sin(uBeautyTime*.43+phase*1.7)*.35;"," p.z+=cos(uBeautyTime*.27+phase)*.42;"," vec4 mvPosition=modelViewMatrix*vec4(p,1.0);"," gl_Position=projectionMatrix*mvPosition;"," gl_PointSize=clamp(18.0/max(1.0,-mvPosition.z),1.0,3.0);","}"].join(`
`),fragmentShader:["void main(){"," vec2 q=gl_PointCoord-.5;"," float d=length(q);"," float a=smoothstep(.5,.06,d)*.40;"," gl_FragColor=vec4(1.0,.84,.50,a);","}"].join(`
`)}),s=new Yr(t,i);s.name="09B airborne pollen p2",s.userData.timeUniform=i.uniforms.uBeautyTime,oi(s,0)}function iB(){if(oc)return;Wb=Xe.info.render.calls||0,Xb=Xe.info.render.triangles||0;let n=jM(),e=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let a=e.length-1;a>=0;a--)e[a]?.worldExpansionCertificationId==="08D_WORLD_EXPANSION_CERTIFICATION"&&e.splice(a,1);for(let a of[...ge.children])(a.userData?.worldExpansionCertificationBeacon08D===!0||a.userData?.boundedPrefetchBeacon08C===!0||a.userData?.boundedPrefetchRings08C===!0)&&ge.remove(a);W3(),X3(),q3(),Y3();let t=J3(),i=Z3(n),s=j3(n),r=$3(n);Q3(n),tB(n),nB(n);let o=Ws.children.find(a=>a.name==="09B airborne pollen p2");Ws.userData.animatedMaterials=[i,s,r,t.material,o?.material].filter(Boolean),ge.add(Ws),oc=!0,Vb=performance.now()}function sB(){let n=Xp.factory,e=Xp.regions,t=(e.A?.duplicateCount||0)+(e.B?.duplicateCount||0)+(n?.duplicateBindingCount||0);return{assetLoads:kb.factory.assetCache.loadCount,duplicates:t}}function qb(){let n=globalThis.__livingWorld06J?.stage||"WAITING",e=sB(),t=Xe.info.render.calls||0,i=Xe.info.render.triangles||0,s={slice_built:oc,presentation_pass:Ge.presentationPass===2,materials:Ge.materialFamilies.length===6,depth_layers:Ge.depthLayers.length===5,motion_systems:Ge.ambientMotionSystems.length===4,human_review_required:Ge.acceptance.humanPresentationReviewRequired===!0,no_automated_acceptance:Ge.acceptance.automatedProofIsPresentationAcceptance===!1,slice_drawables:Rm<=Ge.presentationBudget.addedDrawCallsMax,slice_triangles:Tm<=Ge.presentationBudget.addedTrianglesMax,total_draw_calls:t<=Ge.presentationBudget.absoluteDrawCallsMax,total_triangles:i<=Ge.presentationBudget.absoluteTrianglesMax,asset_load_one:e.assetLoads===1,duplicates_zero:e.duplicates===0,regression:n==="PASS",no_build_error:!yo},r=Object.entries(s).filter(([,o])=>!o).map(([o])=>o);return{ready:!1,automatedReady:r.length===0,humanReviewRequired:!0,failed:r,checks:s,calls:t,tris:i,inv:e,regression:n}}function rB(){let n=qb(),e=Math.hypot(ne.position.x-ft.x,ne.position.z-ft.z);cn(D3,n.automatedReady?"HUMAN REVIEW":yo?"FAIL":n.regression==="PASS"?"BUILDING":"WAITING 06J",n.automatedReady?"#ffe59a":yo?"#ff9b9b":"#ffe59a"),cn(P3,Ge.name+" \xB7 P2"),cn(N3,Ge.materialFamilies.length+"/6"),cn(L3,Ge.depthLayers.length+"/5"),cn(O3,Ge.ambientMotionSystems.length+"/4"),cn(B3,Rm+" / "+Ge.presentationBudget.addedDrawCallsMax),cn(F3,Tm.toLocaleString()+" / "+Ge.presentationBudget.addedTrianglesMax.toLocaleString()),cn(U3,n.calls+" / "+Ge.presentationBudget.absoluteDrawCallsMax,n.calls<=120?"#bdf3c8":"#ff9b9b"),cn(H3,n.tris.toLocaleString()+" / "+Ge.presentationBudget.absoluteTrianglesMax.toLocaleString(),n.tris<=35e4?"#bdf3c8":"#ff9b9b"),cn(z3,n.regression,n.regression==="PASS"?"#bdf3c8":"#ffe59a"),cn(G3,String(n.inv.assetLoads),n.inv.assetLoads===1?"#bdf3c8":"#ff9b9b"),cn(k3,String(n.inv.duplicates),n.inv.duplicates===0?"#bdf3c8":"#ff9b9b"),cn(V3,e.toFixed(1)+" m"),yo?cn(Uf,"SLICE BUILD FAIL \xB7 "+yo,"#ff9b9b"):n.automatedReady?cn(Uf,"STRUCTURAL/RUNTIME PASS \u2713 \xB7 PRESENTATION PASS 2 \u2713 \xB7 HUMAN VISUAL REVIEW REQUIRED","#ffe59a"):n.regression!=="PASS"?cn(Uf,"WAIT FOR 06J REGRESSION PASS","#ffe59a"):cn(Uf,"BUILDING SUNLIT BASIN PRESENTATION PASS 2","#ffe59a")}var fS=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),Yb=n=>{try{if((globalThis.__livingWorld06J?.stage||"WAITING")==="PASS"&&!oc&&!yo&&iB(),oc){let t=(n-Vb)/1e3;for(let i of Ws.userData.animatedMaterials||[]){let s=i?.userData?.beautyShader;s?.uniforms?.uBeautyTime&&(s.uniforms.uBeautyTime.value=t),i?.uniforms?.uBeautyTime&&(i.uniforms.uBeautyTime.value=t)}}n>=dS&&(rB(),dS=n+400)}catch(e){yo=e?.message||String(e)}};Yb.verticalBeautySliceId="09B_VERTICAL_BEAUTY_SLICE";fS.some(n=>n.verticalBeautySliceId==="09B_VERTICAL_BEAUTY_SLICE")||fS.push(Yb);globalThis.__verticalBeautySlice09B={marker:I3,spec:Ge,root:Ws,center:ft,get built(){return oc},get presentationTriangles(){return Tm},get presentationDrawables(){return Rm},get baselineCalls(){return Wb},get baselineTriangles(){return Xb},get proof(){return qb()}};var oB="09D_SUNLIT_BASIN_ASSET_INTEGRATION",Xi=globalThis.__verticalBeautySlice09B,cx=globalThis.__boundedPrefetch08C,Jb=globalThis.__productionActorPipeline07B;if(!Xi||!cx||!Jb)throw new Error("09D requires 09B + frozen Test08 runtime");var Fu=new dt;Fu.name="09D_09C_ASSET_INTEGRATION";Fu.userData.assetIntegration09D=!0;var Oa="WAITING 09B",Ba="",lx=!1,yy=!1,Za=0,vo=0,ac=0,Ka=0,ja=0,pS=0,Zb=0,Kb=0,aB=document.getElementById("assetStage09D"),cB=document.getElementById("assetLoads09D"),lB=document.getElementById("assetRemoved09D"),uB=document.getElementById("assetPlaced09D"),hB=document.getElementById("assetBatches09D"),dB=document.getElementById("assetTriangles09D"),fB=document.getElementById("assetDraw09D"),pB=document.getElementById("assetTotalTriangles09D"),mB=document.getElementById("assetSoldierLoads09D"),gB=document.getElementById("assetDuplicates09D"),_B=document.getElementById("assetRegression09D"),Hf=document.getElementById("assetResult09D");function Rn(n,e,t){if(!n)return;let i=String(e);n.textContent!==i&&(n.textContent=i),t&&n.style.color!==t&&(n.style.color=t)}function xB(){let n=Xi.root,e=0;for(let t of ev){let i=n.children.find(s=>s.name===t);i&&(n.remove(i),e++)}ac=e}function yB(n,e){n.updateWorldMatrix(!0,!1);let t=n.geometry.clone(),i=new ze().multiplyMatrices(e,n.matrixWorld);t.applyMatrix4(i),t.index&&(t=t.toNonIndexed());for(let s of Object.keys(t.attributes))s!=="position"&&s!=="normal"&&t.deleteAttribute(s);return t.getAttribute("normal")||t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),t}function EB(n){return n.startsWith("MAT_FOLIAGE_")?"MAT_FOLIAGE_BATCH":n.startsWith("MAT_FLOWER_")?"MAT_FLOWER_BATCH":n}function MB(n,e){let t=n.getAttribute("position")?.count||0,i=e?.color?.isColor?e.color:new re(16777215),s=new Float32Array(t*3);for(let r=0;r<t;r++){let o=r*3;s[o]=i.r,s[o+1]=i.g,s[o+2]=i.b}return n.setAttribute("color",new Lt(s,3)),n}function vB(n,e,t){return t.startsWith("ridge_")?Pe(Xi.center.x+n,Xi.center.z+e)-1:Pe(Xi.center.x+n,Xi.center.z+e)+.04}async function SB(){if(lx)return;lx=!0,Oa="LOADING GLBs";let n=new gr,e=new Map,t=performance.now(),i=await Promise.allSettled(Af.map(async a=>{let c=await n.loadAsync($M+a);return c.scene.updateMatrixWorld(!0),e.set(a,c.scene),Za++,a}));for(let a of i)a.status==="rejected"&&vo++;if(Zb=performance.now()-t,vo>0||Za!==Af.length)throw new Error("09D GLB load failure: "+Za+"/"+Af.length+" loaded, "+vo+" errors");if(Oa="REPLACING PROTOTYPES",xB(),ac!==Hn.requiredPrototypeReplacements)throw new Error("09D expected "+Hn.requiredPrototypeReplacements+" prototype families, removed "+ac);Oa="BATCHING ASSETS";let s=performance.now(),r=new Map,o=new Map;for(let a of bf){let c=e.get(a.asset);if(!c)throw new Error("09D missing loaded asset "+a.asset);let l=new tn().setFromEuler(new wi(0,a.yaw,0)),u=new I(a.x,vB(a.x,a.z,a.asset),a.z),h=new I(a.scale,a.scale,a.scale),d=new ze().compose(u,l,h);c.updateMatrixWorld(!0),c.traverse(f=>{if(!f.isMesh)return;let m=Array.isArray(f.material)?f.material:[f.material];if(m.length!==1)throw new Error("09D multi-material source mesh unsupported: "+a.asset);let x=m[0],g=x?.name||"";if(!QM.includes(g))throw new Error("09D unapproved material "+g+" in "+a.asset);let p=EB(g),M=yB(f,d);(p==="MAT_FOLIAGE_BATCH"||p==="MAT_FLOWER_BATCH")&&(M=MB(M,x));let T=r.get(p)||[];T.push(M),r.set(p,T),o.has(p)||o.set(p,x)})}if(Ka=r.size,Ka>Hn.maxMaterialBatches)throw new Error("09D material batch ceiling exceeded: "+Ka);for(let[a,c]of r){let l=LM(c,!1);if(!l)throw new Error("09D merge failed for "+a);let u=o.get(a).clone();u.name=a;let h=a==="MAT_FOLIAGE_BATCH"||a==="MAT_FLOWER_BATCH";u.vertexColors=h,h&&u.color?.isColor&&u.color.set(16777215),a.startsWith("MAT_GRASS_")&&(u.side=_t),u.needsUpdate=!0;let d=new Be(l,u);d.name="09D_BATCH_"+a,d.castShadow=!a.startsWith("MAT_GRASS_")&&a!=="MAT_FLOWER_BATCH",d.receiveShadow=!0,Fu.add(d);let f=l.getAttribute("position")?.count||0;ja+=Math.round(f/3)}if(Kb=performance.now()-s,ja>Hn.maxAddedTriangles)throw new Error("09D integrated triangle ceiling exceeded: "+ja);Xi.root.add(Fu),yy=!0,Oa="HUMAN REVIEW"}function ux(){let n=cx.factory,e=cx.regions;return(e.A?.duplicateCount||0)+(e.B?.duplicateCount||0)+(n?.duplicateBindingCount||0)}function jb(){let n=Xe.info.render.calls||0,e=Xe.info.render.triangles||0,t=globalThis.__livingWorld06J?.stage||"WAITING",i=Jb.factory.assetCache.loadCount,s={integration_complete:yy,glbs_loaded:Za===Hn.requiredAssetLoads,load_errors:vo===0,prototypes_replaced:ac===Hn.requiredPrototypeReplacements,placements:bf.length<=Hn.maxPlacementCount,material_batches:Ka<=Hn.maxMaterialBatches,asset_triangles:ja<=Hn.maxAddedTriangles,draw_calls:n<=Hn.absoluteDrawCallsMax,total_triangles:e<=Hn.absoluteTrianglesMax,soldier_asset_loads:i===Hn.soldierAssetLoadsExpected,duplicate_runtime_state:ux()===Hn.duplicateRuntimeStateExpected,regression:t==="PASS",no_error:!Ba},r=Object.entries(s).filter(([,o])=>!o).map(([o])=>o);return{pass:r.length===0,failed:r,checks:s,calls:n,triangles:e,regression:t,soldierLoads:i}}function AB(){let n=jb();Rn(aB,n.pass?"HUMAN REVIEW":Ba?"FAIL":Oa,n.pass?"#ffe59a":Ba?"#ff9b9b":"#ffe59a"),Rn(cB,Za+" / 13"+(vo?" \xB7 errors "+vo:"")),Rn(lB,ac+" / 8"),Rn(uB,String(bf.length)),Rn(hB,Ka+" / 8"),Rn(dB,ja.toLocaleString()+" / 18,000"),Rn(fB,n.calls+" / 120",n.calls<=120?"#bdf3c8":"#ff9b9b"),Rn(pB,n.triangles.toLocaleString()+" / 350,000",n.triangles<=35e4?"#bdf3c8":"#ff9b9b"),Rn(mB,String(n.soldierLoads),n.soldierLoads===1?"#bdf3c8":"#ff9b9b"),Rn(gB,String(ux()),ux()===0?"#bdf3c8":"#ff9b9b"),Rn(_B,n.regression,n.regression==="PASS"?"#bdf3c8":"#ffe59a"),Ba?Rn(Hf,"ASSET INTEGRATION FAIL \xB7 "+Ba,"#ff9b9b"):n.pass?Rn(Hf,"13 GLBs \u2713 \xB7 PROTOTYPES REPLACED \u2713 \xB7 MATERIAL BATCHES \u2713 \xB7 SCALE/PLACEMENT RUNTIME \u2713 \xB7 TEST08 PRESERVED \u2713 \xB7 PERFORMANCE PASS \u2713 \xB7 HUMAN ASSET REVIEW REQUIRED","#ffe59a"):Xi.built?Rn(Hf,"INTEGRATING 09C ASSETS INTO SUNLIT BASIN","#ffe59a"):Rn(Hf,"WAITING FOR 09B SUNLIT BASIN","#ffe59a")}var mS=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),$b=n=>{!lx&&Xi.built&&globalThis.__livingWorld06J?.stage==="PASS"&&SB().catch(e=>{Ba=e?.message||String(e),Oa="FAIL"}),n>=pS&&(AB(),pS=n+350)};$b.assetIntegrationId="09D_SUNLIT_BASIN_ASSET_INTEGRATION";mS.some(n=>n.assetIntegrationId==="09D_SUNLIT_BASIN_ASSET_INTEGRATION")||mS.push($b);globalThis.__assetIntegration09D={marker:oB,root:Fu,get complete(){return yy},get loadedCount(){return Za},get loadErrors(){return vo},get prototypesRemoved(){return ac},get materialBatches(){return Ka},get integratedTriangles(){return ja},get assetLoadMs(){return Zb},get mergeMs(){return Kb},get proof(){return jb()}};var bB="09B_PRESENTATION_PASS_3_ASSET_INTEGRATED",cc=!1,Fa="",gS=0,lc=0,TB=document.getElementById("p3Stage09B"),RB=document.getElementById("p3Mountains09B"),wB=document.getElementById("p3Player09B"),CB=document.getElementById("p3Assets09B"),IB=document.getElementById("p3Batches09B"),DB=document.getElementById("p3Draw09B"),PB=document.getElementById("p3Triangles09B"),NB=document.getElementById("p3Regression09B"),LB=document.getElementById("p3Duplicates09B"),zf=document.getElementById("p3Result09B");function jn(n,e,t){if(!n)return;let i=String(e);n.textContent!==i&&(n.textContent=i),t&&n.style.color!==t&&(n.style.color=t)}function Aa(n){let e=null;return Xi.root.traverse(t=>{if(e||!t.material)return;let i=Array.isArray(t.material)?t.material:[t.material];for(let s of i)if(s?.name===n){e=s;break}}),e}function __(n){return Xi.root.getObjectByName(n)}function OB(){if(cc)return;if(!globalThis.__assetIntegration09D?.complete)throw new Error("09B Pass 3 requires complete accepted 09D integration");op?.visible!==!1&&(op.visible=!1,lc++),ap?.visible!==!1&&(ap.visible=!1,lc++),Xe.toneMappingExposure=.92,ge.fog.color.set(11190205),ge.fog.density=.0067,Rr.color.set(12836323),Rr.groundColor.set(4739654),Rr.intensity=1.18,Qa.color.set(8295064),Qa.intensity=.085,Dt.color.set(16768425),Dt.intensity=3.55,ln.top.value.set(4688306),ln.mid.value.set(11060931),ln.bottom.value.set(14929318),ln.sunWarm.value.set(16762751),v_.color.set(4797222),v_.roughness=.96,yu.color.set(2644026),Eu.color.set(3631941),Mu.color.set(4880464);for(let l of[yu,Eu,Mu])l.roughness=.9;vu.color.set(4287813),vu.roughness=.94,y_.roughness=.98,y_.bumpScale=.13,Gf.color.set(8349005),Gf.roughness=.99,Gf.bumpScale=.12;let n=__("09B meadow ground p2");n?.material&&(n.material.color.set(14016452),n.material.roughness=.97,n.material.bumpScale=.1);let e=__("09B soil path p2");e?.material&&(e.material.color.set(11373415),e.material.roughness=.99,e.material.bumpScale=.11);let t=__("09B wet shoreline p2");t?.material&&(t.material.color.set(10261886),t.material.roughness=.92,t.material.bumpScale=.08);let i=Aa("MAT_BARK_DARK"),s=Aa("MAT_BARK_WARM"),r=Aa("MAT_STONE_WARM"),o=Aa("MAT_STONE_DARK"),a=Aa("MAT_GRASS_MEADOW"),c=Aa("MAT_GRASS_DARK");for(let l of[i,s])l&&(l.roughness=.94,l.metalness=0);for(let l of[r,o])l&&(l.roughness=.98,l.metalness=0);for(let l of[a,c])l&&(l.roughness=.92,l.metalness=0);cc=!0}function Qb(){let n=Xe.info.render.calls||0,e=Xe.info.render.triangles||0,t=globalThis.__livingWorld06J?.stage||"WAITING",i=globalThis.__assetIntegration09D,s=i?.proof?.checks?.duplicate_runtime_state===!0?0:1,r={applied:cc,accepted_09d_integration:i?.complete===!0,all_13_assets:i?.loadedCount===13,legacy_mountains_hidden:lc===2,player_glb:Ua==="GLB",material_batches:i?.materialBatches<=8,draw_calls:n<=120,triangles:e<=35e4,regression:t==="PASS",runtime_duplicates:s===0,no_error:!Fa},o=Object.entries(r).filter(([,a])=>!a).map(([a])=>a);return{automatedReady:o.length===0,failed:o,checks:r,calls:n,triangles:e,regression:t,duplicates:s}}function BB(){let n=Qb();jn(TB,n.automatedReady?"HUMAN REVIEW":Fa?"FAIL":"BUILDING",n.automatedReady?"#ffe59a":Fa?"#ff9b9b":"#ffe59a"),jn(RB,lc+" / 2",lc===2?"#bdf3c8":"#ffe59a"),jn(wB,Ua,Ua==="GLB"?"#bdf3c8":"#ffb4a6"),jn(CB,(globalThis.__assetIntegration09D?.loadedCount||0)+" / 13"),jn(IB,(globalThis.__assetIntegration09D?.materialBatches||0)+" / 8"),jn(DB,n.calls+" / 120",n.calls<=120?"#bdf3c8":"#ff9b9b"),jn(PB,n.triangles.toLocaleString()+" / 350,000",n.triangles<=35e4?"#bdf3c8":"#ff9b9b"),jn(NB,n.regression,n.regression==="PASS"?"#bdf3c8":"#ffe59a"),jn(LB,String(n.duplicates),n.duplicates===0?"#bdf3c8":"#ff9b9b"),Fa?jn(zf,"PASS 3 FAIL \xB7 "+Fa,"#ff9b9b"):n.automatedReady?jn(zf,"ASSET-INTEGRATED \u2713 \xB7 LEGACY MOUNTAINS REMOVED \u2713 \xB7 PLAYER GLB \u2713 \xB7 PERFORMANCE PASS \u2713 \xB7 HUMAN PRESENTATION REVIEW REQUIRED","#ffe59a"):Ua!=="GLB"?jn(zf,"WAITING FOR LOCAL PLAYER GLB","#ffe59a"):jn(zf,"BUILDING PRESENTATION PASS 3","#ffe59a")}var _S=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),hx=n=>{try{if(!cc&&globalThis.__assetIntegration09D?.complete&&OB(),cc){let t=(Sr.ShiftLeft||$p)&&$n.lengthSq()>.04?56:50;En.fov=Ze.lerp(En.fov,t,.18),En.updateProjectionMatrix()}n>=gS&&(BB(),gS=n+350)}catch(e){Fa=e?.message||String(e)}};hx.presentationPass3Id="09B_PRESENTATION_PASS_3_ASSET_INTEGRATED";_S.some(n=>n.presentationPass3Id===hx.presentationPass3Id)||_S.push(hx);globalThis.__presentationPass3_09B={marker:bB,get applied(){return cc},get mountainsHidden(){return lc},get proof(){return Qb()}};
