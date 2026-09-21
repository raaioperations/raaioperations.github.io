var G_=0,xp=1,k_=2;var $a=1,Hh=2,bo=3,Ri=0,$t=1,Ct=2,Ci=0,To=1,yp=2,vp=3,Mp=4,V_=5;var gr=100,W_=101,X_=102,q_=103,Y_=104,Z_=200,J_=201,K_=202,$_=203,Sp=204,Ep=205,j_=206,Q_=207,ex=208,tx=209,nx=210,ix=211,sx=212,rx=213,ox=214,fh=0,ph=1,mh=2,ao=3,gh=4,_h=5,xh=6,yh=7,Ap=0,ax=1,cx=2,ai=0,bp=1,Tp=2,wp=3,ja=4,Rp=5,Cp=6,Ip=7,lp="attached",lx="detached",Dp=300,Us=301,_r=302,Gh=303,kh=304,Qa=306,Ai=1e3,kn=1001,co=1002,Lt=1003,Vh=1004;var xr=1005;var Nt=1006,wo=1007;var ci=1008;var bn=1009,Pp=1010,Lp=1011,Ro=1012,Wh=1013,li=1014,Ln=1015,hi=1016,Xh=1017,qh=1018,Co=1020,Np=35902,Op=35899,Up=1021,Fp=1022,pn=1023,bi=1026,Fs=1027,Yh=1028,Zh=1029,Bs=1030,Jh=1031;var Kh=1033,ec=33776,tc=33777,nc=33778,ic=33779,$h=35840,jh=35841,Qh=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37488,ru=37489,sc=37490,ou=37491,au=37808,cu=37809,lu=37810,hu=37811,uu=37812,du=37813,fu=37814,pu=37815,mu=37816,gu=37817,_u=37818,xu=37819,yu=37820,vu=37821,Mu=36492,Su=36494,Eu=36495,Au=36283,bu=36284,rc=36285,Tu=36286,hx=2200,ux=2201,dx=2202,or=2300,ar=2301,hh=2302,hp=2303,ir=2400,sr=2401,Ea=2402,wu=2500,fx=2501,Bp=0,oc=1,Io=2,px=3200;var Ru=0,mx=1,ui="",Pt="srgb",fn="srgb-linear",Aa="linear",dt="srgb";var uh=7680;var gx=519,_x=512,xx=513,yx=514,Cu=515,vx=516,Mx=517,Iu=518,Sx=519,zp=35044,Hp=35048;var Gp="300 es",ti=2e3,lo=2001;function PS(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function LS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ex(){let i=ho("canvas");return i.style.display="block",i}var n_={},uo=null;function ba(...i){let e="THREE."+i.shift();uo?uo("log",e,...i):console.log(e,...i)}function Ax(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Ax(i);let e="THREE."+i.shift();if(uo)uo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=Ax(i);let e="THREE."+i.shift();if(uo)uo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rr(...i){let e=i.join(" ");e in n_||(n_[e]=!0,Ee(...i))}function bx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Tx={[fh]:ph,[mh]:xh,[gh]:yh,[ao]:_h,[ph]:fh,[xh]:mh,[yh]:gh,[_h]:ao},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],i_=1234567,Ma=Math.PI/180,cr=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function kp(i,e){return(i%e+e)%e}function NS(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function OS(i,e,t){return i!==e?(t-i)/(e-i):0}function Sa(i,e,t){return(1-t)*i+t*e}function US(i,e,t,n){return Sa(i,e,1-Math.exp(-t*n))}function FS(i,e=1){return e-Math.abs(kp(i,e*2)-e)}function BS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function HS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function GS(i,e){return i+Math.random()*(e-i)}function kS(i){return i*(.5-Math.random())}function VS(i){i!==void 0&&(i_=i);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WS(i){return i*Ma}function XS(i){return i*cr}function qS(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function YS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ZS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function JS(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ze={DEG2RAD:Ma,RAD2DEG:cr,generateUUID:ni,clamp:qe,euclideanModulo:kp,mapLinear:NS,inverseLerp:OS,lerp:Sa,damp:US,pingpong:FS,smoothstep:BS,smootherstep:zS,randInt:HS,randFloat:GS,randFloatSpread:kS,seededRandom:VS,degToRad:WS,radToDeg:XS,isPowerOfTwo:qS,ceilPowerOfTwo:YS,floorPowerOfTwo:ZS,setQuaternionFromProperEuler:JS,normalize:pt,denormalize:ei},Oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+y*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+y*a;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uf.copy(this).projectOnVector(e),this.sub(Uf)}reflect(e){return this.sub(Uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uf=new I,s_=new rn,Ue=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],T=s[4],v=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*y+a*S+c*E,r[3]=o*m+a*T+c*A,r[6]=o*p+a*v+c*R,r[1]=l*y+h*S+u*E,r[4]=l*m+h*T+u*A,r[7]=l*p+h*v+u*R,r[2]=d*y+f*S+g*E,r[5]=d*m+f*T+g*A,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ff=new Ue,r_=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){let i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:Aa,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var Xe=KS();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qr,vh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=ho("canvas")),qr.width=e.width,qr.height=e.height;let s=qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$S=0,fo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bf(s[o].image)):r.push(Bf(s[o]))}else r=Bf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var jS=0,zf=new I,Zt=class i extends ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=Nt,o=ci,a=pn,c=bn,l=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ni(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zf).x}get height(){return this.source.getSize(zf).y}get depth(){return this.source.getSize(zf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Dp;Zt.DEFAULT_ANISOTROPY=1;var mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(f+1)/2,E=(p+1)/2,A=(h+d)/4,R=(u+y)/4,x=(g+m)/4;return T>v&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mh=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ta=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sh=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Yr.setFromMatrixColumn(e,0).length(),r=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,eE)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ss.crossVectors(n,In),Ss.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ss.crossVectors(n,In)),Ss.normalize(),zl.crossVectors(In,Ss),s[0]=Ss.x,s[4]=zl.x,s[8]=In.x,s[1]=Ss.y,s[5]=zl.y,s[9]=In.y,s[2]=Ss.z,s[6]=zl.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],T=n[7],v=n[11],E=n[15],A=s[0],R=s[4],x=s[8],b=s[12],C=s[1],N=s[5],U=s[9],H=s[13],P=s[2],k=s[6],Z=s[10],J=s[14],ne=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=o*A+a*C+c*P+l*ne,r[4]=o*R+a*N+c*k+l*X,r[8]=o*x+a*U+c*Z+l*Q,r[12]=o*b+a*H+c*J+l*te,r[1]=h*A+u*C+d*P+f*ne,r[5]=h*R+u*N+d*k+f*X,r[9]=h*x+u*U+d*Z+f*Q,r[13]=h*b+u*H+d*J+f*te,r[2]=g*A+y*C+m*P+p*ne,r[6]=g*R+y*N+m*k+p*X,r[10]=g*x+y*U+m*Z+p*Q,r[14]=g*b+y*H+m*J+p*te,r[3]=S*A+T*C+v*P+E*ne,r[7]=S*R+T*N+v*k+E*X,r[11]=S*x+T*U+v*Z+E*Q,r[15]=S*b+T*H+v*J+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=c*f-l*d,T=a*f-l*u,v=a*d-c*u,E=o*f-l*h,A=o*d-c*h,R=o*u-a*h;return t*(y*S-m*T+p*v)-n*(g*S-m*E+p*A)+s*(g*T-y*E+p*R)-r*(g*v-y*A+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-n*o,T=t*c-s*o,v=t*l-r*o,E=n*c-s*a,A=n*l-r*a,R=s*l-r*c,x=h*y-u*g,b=h*m-d*g,C=h*p-f*g,N=u*m-d*y,U=u*p-f*y,H=d*p-f*m,P=S*H-T*U+v*N+E*C-A*b+R*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*H-c*U+l*N)*k,e[1]=(s*U-n*H-r*N)*k,e[2]=(y*R-m*A+p*E)*k,e[3]=(d*A-u*R-f*E)*k,e[4]=(c*C-o*H-l*b)*k,e[5]=(t*H-s*C+r*b)*k,e[6]=(m*v-g*R-p*T)*k,e[7]=(h*R-d*v+f*T)*k,e[8]=(o*U-a*C+l*x)*k,e[9]=(n*C-t*U-r*x)*k,e[10]=(g*A-y*v+p*S)*k,e[11]=(u*v-h*A-f*S)*k,e[12]=(a*b-o*N-c*x)*k,e[13]=(t*N-n*b+s*x)*k,e[14]=(y*T-g*E-m*S)*k,e[15]=(h*E-u*T+d*S)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,S=c*l,T=c*h,v=c*u,E=n.x,A=n.y,R=n.z;return s[0]=(1-(y+p))*E,s[1]=(f+v)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+T)*R,s[9]=(m-S)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Yr.set(s[0],s[1],s[2]).length(),a=Yr.set(s[4],s[5],s[6]).length(),c=Yr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let l=1/o,h=1/a,u=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=ti,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ti)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===lo)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ti,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ti)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===lo)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yr=new I,Kn=new Be,QS=new I(0,0,0),eE=new I(1,1,1),Ss=new I,zl=new I,In=new I,a_=new Be,c_=new rn,$i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tE=0,l_=new I,Zr=new rn,Wi=new Be,Hl=new I,fa=new I,nE=new I,iE=new rn,h_=new I(1,0,0),u_=new I(0,1,0),d_=new I(0,0,1),f_={type:"added"},sE={type:"removed"},Jr={type:"childadded",child:null},Hf={type:"childremoved",child:null},He=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new $i,n=new rn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ue}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hl.copy(e):Hl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(fa,Hl,this.up):Wi.lookAt(Hl,fa,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(Wi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sE),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,nE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,iE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},rE={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Gf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=kp(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gf(o,r,e+1/3),this.g=Gf(o,r,e),this.b=Gf(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=wx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Xe.workingToColorSpace(sn.copy(this),e),Math.round(qe(sn.r*255,0,255))*65536+Math.round(qe(sn.g*255,0,255))*256+Math.round(qe(sn.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Pt){Xe.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(Gl);let n=Sa(Es.h,Gl.h,t),s=Sa(Es.s,Gl.s,t),r=Sa(Es.l,Gl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new me;me.NAMES=wx;var Ra=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ca=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new I,Xi=new I,kf=new I,qi=new I,Kr=new I,$r=new I,p_=new I,Vf=new I,Wf=new I,Xf=new I,qf=new mt,Yf=new mt,Zf=new mt,Rs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Xi.subVectors(n,t),kf.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Xi),c=$n.dot(kf),l=Xi.dot(Xi),h=Xi.dot(kf),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return qf.setScalar(0),Yf.setScalar(0),Zf.setScalar(0),qf.fromBufferAttribute(e,t),Yf.fromBufferAttribute(e,n),Zf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qf,r.x),o.addScaledVector(Yf,r.y),o.addScaledVector(Zf,r.z),o}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Xi.subVectors(e,t),$n.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),$n.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Kr.subVectors(s,n),$r.subVectors(r,n),Vf.subVectors(e,n);let c=Kr.dot(Vf),l=$r.dot(Vf);if(c<=0&&l<=0)return t.copy(n);Wf.subVectors(e,s);let h=Kr.dot(Wf),u=$r.dot(Wf);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Kr,o);Xf.subVectors(e,r);let f=Kr.dot(Xf),g=$r.dot(Xf);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector($r,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return p_.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(p_,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(Kr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Vl.subVectors(this.max,pa),jr.subVectors(e.a,pa),Qr.subVectors(e.b,pa),eo.subVectors(e.c,pa),As.subVectors(Qr,jr),bs.subVectors(eo,Qr),Qs.subVectors(jr,eo);let t=[0,-As.z,As.y,0,-bs.z,bs.y,0,-Qs.z,Qs.y,As.z,0,-As.x,bs.z,0,-bs.x,Qs.z,0,-Qs.x,-As.y,As.x,0,-bs.y,bs.x,0,-Qs.y,Qs.x,0];return!Jf(t,jr,Qr,eo,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Jf(t,jr,Qr,eo,Vl))?!1:(Wl.crossVectors(As,bs),t=[Wl.x,Wl.y,Wl.z],Jf(t,jr,Qr,eo,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,kl=new Pn,jr=new I,Qr=new I,eo=new I,As=new I,bs=new I,Qs=new I,pa=new I,Vl=new I,Wl=new I,er=new I;function Jf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){er.fromArray(i,r);let a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),c=e.dot(er),l=t.dot(er),h=n.dot(er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bt=new I,Xl=new Oe,oE=0,Gt=class extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zp,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ia=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},aE=new Pn,ma=new I,Kf=new I,vn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):aE.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Kf)),this.expandByPoint(ma.copy(e.center).sub(Kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cE=0,Gn=new Be,$f=new He,to=new I,Dn=new Pn,ga=new Pn,Yt=new I,wt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PS(e)?Da:Ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Dn.min,ga.min),Dn.expandByPoint(Yt),Yt.addVectors(Dn.max,ga.max),Dn.expandByPoint(Yt)):(Dn.expandByPoint(ga.min),Dn.expandByPoint(ga.max))}Dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(e,l),Yt.add(to)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;let l=new I,h=new I,u=new I,d=new Oe,f=new Oe,g=new Oe,y=new I,m=new I;function p(x,b,C){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[x].add(y),a[b].add(y),a[C].add(y),c[x].add(m),c[b].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,b=S.length;x<b;++x){let C=S[x],N=C.start,U=C.count;for(let H=N,P=N+U;H<P;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let T=new I,v=new I,E=new I,A=new I;function R(x){E.fromBufferAttribute(s,x),A.copy(E);let b=a[x];T.copy(b),T.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(A,b);let N=v.dot(c[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,N)}for(let x=0,b=S.length;x<b;++x){let C=S[x],N=C.start,U=C.count;for(let H=N,P=N+U;H<P;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Gt(d,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},mo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zp,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new I,go=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jf=new I,lE=new I,hE=new Ue,Qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jf.subVectors(n,t).cross(lE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hE.getNormalMatrix(e),s=this.coplanarPoint(jf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},uE=0,Mn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=To,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sp,this.blendDst=Ep,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uh,this.stencilZFail=uh,this.stencilZPass=uh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Zi=new I,Qf=new I,ql=new I,Yl=new I,lr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qf.copy(e).add(t).multiplyScalar(.5),ql.copy(t).sub(e).normalize(),Yl.copy(this.origin).sub(Qf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ql),a=Yl.dot(this.direction),c=-Yl.dot(ql),l=Yl.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qf).addScaledVector(ql,d),f}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,S=n.y-o.y,T=n.z-o.z,v=Math.abs(c),E=Math.abs(l),A=Math.abs(h),R,x,b,C,N,U,H,P,k,Z,J,ne;if(v>=E&&v>=A?(b=c,U=u,k=g,ne=p,c>=0?(R=l,x=h,C=d,N=f,H=y,P=m,Z=S,J=T):(R=h,x=l,C=f,N=d,H=m,P=y,Z=T,J=S)):E>=A?(b=l,U=d,k=y,ne=S,l>=0?(R=h,x=c,C=f,N=u,H=m,P=g,Z=T,J=p):(R=c,x=h,C=u,N=f,H=g,P=m,Z=p,J=T)):(b=h,U=f,k=m,ne=T,h>=0?(R=c,x=l,C=u,N=d,H=g,P=y,Z=p,J=S):(R=l,x=c,C=d,N=u,H=y,P=g,Z=S,J=p)),b===0)return null;let X=R/b,Q=x/b,te=1/b,Ie=C-X*U,we=N-Q*U,Mt=H-X*k,nt=P-Q*k,lt=Z-X*ne,q=J-Q*ne,j=lt*nt-q*Mt,ye=Ie*q-we*lt,Fe=Mt*we-nt*Ie;if(s){if(j<0||ye<0||Fe<0)return null}else if((j<0||ye<0||Fe<0)&&(j>0||ye>0||Fe>0))return null;let _e=j+ye+Fe;if(_e===0)return null;let Je=te*(j*U+ye*k+Fe*ne);return(_e>0?Je<0:Je>0)?null:this.at(Je/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},m_=new Be,tr=new lr,Zl=new vn,g_=new I,Jl=new I,Kl=new I,$l=new I,ep=new I,jl=new I,__=new I,Ql=new I,Ve=class extends He{constructor(e=new wt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ep.fromBufferAttribute(u,e),o?jl.addScaledVector(ep,h):jl.addScaledVector(ep.sub(t),h))}t.add(jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(Zl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Zl,g_)===null||tr.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(r).invert(),tr.copy(e.ray).applyMatrix4(m_),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=T;v<E;v+=3){let A=a.getX(v),R=a.getX(v+1),x=a.getX(v+2);s=eh(this,p,e,n,l,h,u,A,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);s=eh(this,o,e,n,l,h,u,S,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=T;v<E;v+=3){let A=v,R=v+1,x=v+2;s=eh(this,p,e,n,l,h,u,A,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,T=m+1,v=m+2;s=eh(this,o,e,n,l,h,u,S,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dE(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ri,a),c===null)return null;Ql.copy(a),Ql.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ql);return l<t.near||l>t.far?null:{distance:l,point:Ql.clone(),object:i}}function eh(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Jl),i.getVertexPosition(c,Kl),i.getVertexPosition(l,$l);let h=dE(i,e,t,n,Jl,Kl,$l,__);if(h){let u=new I;Rs.getBarycoord(__,Jl,Kl,$l,u),s&&(h.uv=Rs.getInterpolatedAttribute(s,a,c,l,u,new Oe)),r&&(h.uv1=Rs.getInterpolatedAttribute(r,a,c,l,u,new Oe)),o&&(h.normal=Rs.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Rs.getNormal(Jl,Kl,$l,d.normal),h.face=d,h.barycoord=u}return h}var _a=new mt,x_=new mt,y_=new mt,fE=new mt,v_=new Be,th=new I,tp=new vn,M_=new Be,np=new lr,Pa=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lp,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,th),this.boundingBox.expandByPoint(th)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,th),this.boundingSphere.expandByPoint(th)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tp.copy(this.boundingSphere),tp.applyMatrix4(s),e.ray.intersectsSphere(tp)!==!1&&(M_.copy(s).invert(),np.copy(e.ray).applyMatrix4(M_),!(this.boundingBox!==null&&np.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,np)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;x_.fromBufferAttribute(s.attributes.skinIndex,e),y_.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_a.copy(t),t.set(0,0,0,0)):(_a.set(...t,1),t.set(0,0,0)),_a.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=y_.getComponent(r);if(o!==0){let a=x_.getComponent(r);v_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fE.copy(_a).applyMatrix4(v_),o)}}return t.isVector4&&(t.w=_a.w),t.applyMatrix4(this.bindMatrixInverse)}},_o=class extends He{constructor(){super(),this.isBone=!0,this.type="Bone"}},Cs=class extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Lt,h=Lt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},S_=new Be,pE=new Be,La=class i{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:pE;S_.multiplyMatrices(a,t[r]),S_.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Cs(t,e,e,pn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ee("Skeleton: No bone found with UUID:",r),o=new _o),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ji=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},no=new Be,E_=new Be,nh=[],A_=new Pn,mE=new Be,xa=new Ve,ya=new vn,tt=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mE)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),A_.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(A_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),ya.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,no),E_.multiplyMatrices(n,no),xa.matrixWorld=E_,xa.raycast(e,nh);for(let o=0,a=nh.length;o<a;o++){let c=nh[o];c.instanceId=r,c.object=this,t.push(c)}nh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(s*this.count),s,this.count,Yh,Ln));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nr=new vn,gE=new Oe(.5,.5),ih=new I,xo=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],T=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,f-h,p-g,E-S).normalize(),s[1].setComponents(l+o,f+h,p+g,E+S).normalize(),s[2].setComponents(l+a,f+u,p+y,E+T).normalize(),s[3].setComponents(l-a,f-u,p-y,E-T).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===ti)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===lo)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=gE.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ih.x=s.normal.x>0?e.max.x:e.min.x,ih.y=s.normal.y>0?e.max.y:e.min.y,ih.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ih)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yo=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eh=new I,Ah=new I,b_=new Be,va=new lr,sh=new vn,ip=new I,T_=new I,hr=class extends He{constructor(e=new wt,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eh.fromBufferAttribute(t,s-1),Ah.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eh.distanceTo(Ah);e.setAttribute("lineDistance",new Ye(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sh.copy(n.boundingSphere),sh.applyMatrix4(s),sh.radius+=r,e.ray.intersectsSphere(sh)===!1)return;b_.copy(s).invert(),va.copy(e.ray).applyMatrix4(b_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),S=h.getX(y+1),T=rh(this,e,va,c,p,S,y);T&&t.push(T)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=rh(this,e,va,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=rh(this,e,va,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=rh(this,e,va,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rh(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Eh.fromBufferAttribute(a,s),Ah.fromBufferAttribute(a,r),t.distanceSqToSegment(Eh,Ah,ip,T_)>n)return;ip.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ip);if(!(l<e.near||l>e.far))return{distance:l,point:T_.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var w_=new I,R_=new I,Na=class extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)w_.fromBufferAttribute(t,s),R_.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+w_.distanceTo(R_);e.setAttribute("lineDistance",new Ye(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vo=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},C_=new Be,up=new lr,oh=new vn,ah=new I,Ua=class extends He{constructor(e=new wt,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oh.copy(n.boundingSphere),oh.applyMatrix4(s),oh.radius+=r,e.ray.intersectsSphere(oh)===!1)return;C_.copy(s).invert(),up.copy(e.ray).applyMatrix4(C_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=l.getX(g);ah.fromBufferAttribute(u,m),I_(ah,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)ah.fromBufferAttribute(u,g),I_(ah,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function I_(i,e,t,n,s,r,o){let a=up.distanceSqToPoint(i);if(a<t){let c=new I;up.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends Zt{constructor(e=[],t=Us,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Is=class extends Zt{constructor(e,t,n=li,s,r,o,a=Lt,c=Lt,l,h=bi,u=1){if(h!==bi&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bh=class extends Is{constructor(e,t=li,n=Us,s,r,o=Lt,a=Lt,c,l=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ba=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function g(y,m,p,S,T,v,E,A,R,x,b){let C=v/R,N=E/x,U=v/2,H=E/2,P=A/2,k=R+1,Z=x+1,J=0,ne=0,X=new I;for(let Q=0;Q<Z;Q++){let te=Q*N-H;for(let Ie=0;Ie<k;Ie++){let we=Ie*C-U;X[y]=we*S,X[m]=te*T,X[p]=P,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(Ie/R),u.push(1-Q/x),J+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<R;te++){let Ie=d+te+k*Q,we=d+te+k*(Q+1),Mt=d+(te+1)+k*(Q+1),nt=d+(te+1)+k*Q;c.push(Ie,we,nt),c.push(we,Mt,nt),ne+=6}a.addGroup(f,ne,b),f+=ne,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Mo=class i extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,m=new I,p=new I;for(let S=0;S<=g;S++){let T=0,v=0,E=0,A=0;if(S<=n){let b=S/n,C=b*Math.PI/2;v=-h-e*Math.cos(C),E=e*Math.sin(C),A=-e*Math.cos(C),T=b*u}else if(S<=n+r){let b=(S-n)/r;v=-h+b*t,E=e,A=0,T=u+b*d}else{let b=(S-n-r)/n,C=b*Math.PI/2;v=h+e*Math.sin(C),E=e*Math.cos(C),A=e*Math.sin(C),T=u+d+b*u}let R=Math.max(0,Math.min(1,T/f)),x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let b=0;b<=s;b++){let C=b/s,N=C*Math.PI*2,U=Math.sin(N),H=Math.cos(N);p.x=-E*H,p.y=v,p.z=E*U,a.push(p.x,p.y,p.z),m.set(-E*H,A,E*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+x,R)}if(S>0){let b=(S-1)*y;for(let C=0;C<s;C++){let N=b+C,U=b+C+1,H=S*y+C,P=S*y+C+1;o.push(N,U,H),o.push(U,P,H)}}}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ds=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;S(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function S(){let v=new I,E=new I,A=0,R=(t-e)/n;for(let x=0;x<=r;x++){let b=[],C=x/r,N=C*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,P=H*c+a,k=Math.sin(P),Z=Math.cos(P);E.x=N*k,E.y=-C*n+m,E.z=N*Z,u.push(E.x,E.y,E.z),v.set(k,R,Z).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-C),b.push(g++)}y.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let C=y[b][x],N=y[b+1][x],U=y[b+1][x+1],H=y[b][x+1];(e>0||b!==0)&&(h.push(C,N,H),A+=3),(t>0||b!==r-1)&&(h.push(N,U,H),A+=3)}l.addGroup(p,A,0),p+=A}function T(v){let E=g,A=new Oe,R=new I,x=0,b=v===!0?e:t,C=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let N=g;for(let U=0;U<=s;U++){let P=U/s*c+a,k=Math.cos(P),Z=Math.sin(P);R.x=b*Z,R.y=m*C,R.z=b*k,u.push(R.x,R.y,R.z),d.push(0,C,0),A.x=k*.5+.5,A.y=Z*.5*C+.5,f.push(A.x,A.y),g++}for(let U=0;U<s;U++){let H=E+U,P=N+U;v===!0?h.push(P,P+1,H):h.push(P+1,P,H),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends Ds{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},So=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let T=new I,v=new I,E=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],T),f(t[A+1],v),f(t[A+2],E),c(T,v,E,S)}function c(S,T,v,E){let A=E+1,R=[];for(let x=0;x<=A;x++){R[x]=[];let b=S.clone().lerp(v,x/A),C=T.clone().lerp(v,x/A),N=A-x;for(let U=0;U<=N;U++)U===0&&x===A?R[x][U]=b:R[x][U]=b.clone().lerp(C,U/N)}for(let x=0;x<A;x++)for(let b=0;b<2*(A-x)-1;b++){let C=Math.floor(b/2);b%2===0?(d(R[x][C+1]),d(R[x+1][C]),d(R[x][C])):(d(R[x][C+1]),d(R[x+1][C+1]),d(R[x+1][C]))}}function l(S){let T=new I;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(S),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let S=new I;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let T=o[S+0],v=o[S+2],E=o[S+4],A=Math.max(T,v,E),R=Math.min(T,v,E);A>.9&&R<.1&&(T<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),E<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,T){let v=S*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){let S=new I,T=new I,v=new I,E=new I,A=new Oe,R=new Oe,x=new Oe;for(let b=0,C=0;b<r.length;b+=9,C+=6){S.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),E.copy(S).add(T).add(v).divideScalar(3);let N=m(E);y(A,C+0,S,N),y(R,C+2,T,N),y(x,C+4,v,N)}}function y(S,T,v,E){E<0&&S.x===1&&(o[T]=S.x-1),v.x===0&&v.z===0&&(o[T]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ri=class i extends So{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Th=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Oe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new Be;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Vp(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var D_=new I,P_=new I,sp=new Vp,rp=new Vp,op=new Vp,za=class extends Th{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(P_.subVectors(s[0],s[1]).add(s[0]),l=P_);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(D_.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=D_),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),sp.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),rp.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),op.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(sp.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rp.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),op.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sp.calc(c),rp.calc(c),op.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ur=class i extends So{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var oi=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let T=0;T<l;T++){let v=T*u-r;g.push(v,-S,0),y.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let T=S+l*p,v=S+l*(p+1),E=S+1+l*(p+1),A=S+1+l*p;f.push(T,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ps=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new I,g=new Oe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,T=S,v=S+n+1,E=S+n+2,A=S+1;a.push(T,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Sn=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],T=p/n,v=o+T*a,E=e*Math.cos(v),A=Math.sqrt(e*e-E*E),R=0;p===0&&o===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let b=x/t,C=s+b*r;u.x=-A*Math.cos(C),u.y=E,u.z=A*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(b+R,1-T),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let T=h[p][S+1],v=h[p][S],E=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(T,v,A),(p!==n-1||c<Math.PI)&&f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ha=class i extends So{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ga=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,g=new I;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,S,v),c.push(S,T,v)}this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(L_(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(L_(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function L_(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _E(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Rx={clone:yr,merge:an},xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wh=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pe=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends Pe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rh=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ch=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function vE(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function N_(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function ME(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ih=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sr:r=e,a=2*t-n;break;case Ea:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sr:o=e,c=2*n-t;break;case Ea:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+S*o[l+E]+T*o[c+E]+v*o[u+E];return r}},ka=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Dh=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ph=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=f*d+g*2,S=u[p],T=u[p+1],v=e*d+g*2,E=h[v],A=h[v+1],R=EE(n,t,S,E,s);r[g]=Cx(R,y,T,A,m)}return r}};function Cx(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function SE(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function EE(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Cx(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=SE(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),dh(e.settings)&&(n.settings={inTangents:ws(e.settings.inTangents,Array),outTangents:ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ph(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case or:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case hh:t=this.InterpolantFactoryMethodSmooth;break;case hp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return hh;case this.InterpolantFactoryMethodBezier:return hp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;dh(this.settings)&&(O_(this.settings.inTangents,e),O_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ne("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&LS(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hh,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function O_(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=ar;var es=class extends An{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="color";var ts=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};ts.prototype.ValueTypeName="number";var Lh=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ns=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends An{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=or;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Ls.prototype.ValueTypeName="vector";var dr=class{constructor(e="",t=-1,n=[],s=wu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bE(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=vE(c);c=N_(c,1,h),l=N_(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ts(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function AE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return Va;case"quaternion":return ns;case"bool":case"boolean":return es;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=AE(i.type);if(i.times===void 0){let n=[],s=[];ME(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),dh(i.settings)&&(t.settings={inTangents:ws(i.settings.inTangents,Float32Array),outTangents:ws(i.settings.outTangents,Float32Array)}),t}var Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(U_(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!U_(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function U_(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Nh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ix=new Nh,wi=class{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},dp=class extends Error{constructor(e,t){super(e),this.response=t}},Eo=class extends wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ji[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:T,value:v})=>{if(T)p.close();else{y+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let A=0,R=h.length;A<R;A++){let x=h[A];x.onProgress&&x.onProgress(E)}p.enqueue(v),S()}},T=>{p.error(T)})}}});return new Response(m)}else throw new dp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ei.add(`file:${e}`,l);let h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var io=new WeakMap,Oh=class extends wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=io.get(o);u===void 0&&(u=[],io.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=ho("img");function c(){h(),t&&t(this);let u=io.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}io.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ei.remove(`image:${e}`);let d=io.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}io.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Wa=class extends wi{constructor(e){super(e)}load(e,t,n,s){let r=new Zt,o=new Oh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ns=class extends He{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ap=new Be,F_=new I,B_=new I,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;F_.setFromMatrixPosition(e.matrixWorld),t.position.copy(F_),B_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ap.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ap,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===lo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ap)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ch=new I,lh=new rn,Si=new I,qa=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ch,lh,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ch,lh,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ch,lh,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ch,lh,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new I,z_=new Oe,H_=new Oe,zt=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,z_,H_),t.subVectors(H_,z_)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fp=class extends Ao{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ya=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pp=class extends Ao{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},fr=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Os=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mp=class extends Ao{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Za=class extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cp=new WeakMap,Ja=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{cp.has(o)===!0?(s&&s(cp.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),cp.set(c,l),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var so=-90,ro=1,Uh=class extends He{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(so,ro,e,t);s.layers=this.layers,this.add(s);let r=new zt(so,ro,e,t);r.layers=this.layers,this.add(r);let o=new zt(so,ro,e,t);o.layers=this.layers,this.add(o);let a=new zt(so,ro,e,t);a.layers=this.layers,this.add(a);let c=new zt(so,ro,e,t);c.layers=this.layers,this.add(c);let l=new zt(so,ro,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fh=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){rn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;rn.multiplyQuaternionsFlat(e,o,e,t,e,n),rn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Xp="\\[\\]\\.:\\/",TE=new RegExp("["+Xp+"]","g"),qp="[^"+Xp+"]",wE="[^"+Xp.replace("\\.","")+"]",RE=/((?:WC+[\/:])*)/.source.replace("WC",qp),CE=/(WCOD+)?/.source.replace("WCOD",wE),IE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qp),DE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qp),PE=new RegExp("^"+RE+CE+IE+DE+"$"),LE=["material","materials","bones","map"],gp=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TE,"")}static parseTrackName(e){let t=PE.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);LE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=gp;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ir,endingEnd:ir};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ux,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case fx:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case wu:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===dx;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===hx){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=sr,s.endingEnd=sr):(e?s.endingStart=this.zeroSlopeAtStart?sr:ir:s.endingStart=Ea,t?s.endingEnd=this.zeroSlopeAtEnd?sr:ir:s.endingEnd=Ea)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},NE=new Float32Array(1),mr=class extends ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new Bh(xt.create(n,f,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ka(new Float32Array(2),new Float32Array(2),1,NE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?dr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=wu),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new zh(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?dr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var _p=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Yp(i,e,t,n){let s=OE(n);switch(t){case Up:return i*e;case Yh:return i*e/s.components*s.byteLength;case Zh:return i*e/s.components*s.byteLength;case Bs:return i*e*2/s.components*s.byteLength;case Jh:return i*e*2/s.components*s.byteLength;case Fp:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Kh:return i*e*4/s.components*s.byteLength;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:case eu:return Math.max(i,16)*Math.max(e,8)/4;case $h:case Qh:return Math.max(i,8)*Math.max(e,8)/2;case tu:case nu:case su:case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case iu:case sc:case ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mu:case Su:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case bu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OE(i){switch(i){case bn:case Pp:return{byteLength:1,components:1};case Ro:case Lp:case hi:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case li:case Wh:case Ln:return{byteLength:4,components:1};case Np:case Op:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jx(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function FE(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$E=`#ifdef USE_IRIDESCENCE
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
#endif`,jE=`#ifdef USE_BUMPMAP
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
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aA=`#define PI 3.141592653589793
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
} // validated`,cA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lA=`vec3 transformedNormal = objectNormal;
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
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gA=`#ifdef USE_ENVMAP
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
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,MA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bA=`#ifdef USE_GRADIENTMAP
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
}`,TA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IA=`#ifdef USE_ENVMAP
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
#endif`,DA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OA=`PhysicalMaterial material;
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
#endif`,UA=`uniform sampler2D dfgLUT;
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
}`,FA=`
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
#endif`,BA=`#if defined( RE_IndirectDiffuse )
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
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZA=`#if defined( USE_POINTS_UV )
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
#endif`,JA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ab=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eb=`float getShadowMask() {
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
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pb=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`#include <common>
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
}`,Xb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`uniform float scale;
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
}`,$b=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,oT=`#define PHONG
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
}`,aT=`#define PHONG
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
}`,cT=`#define STANDARD
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
}`,lT=`#define STANDARD
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
}`,hT=`#define TOON
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
}`,uT=`#define TOON
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
}`,dT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:GE,alphatest_fragment:kE,alphatest_pars_fragment:VE,aomap_fragment:WE,aomap_pars_fragment:XE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:JE,bsdfs:KE,iridescence_fragment:$E,bumpmap_pars_fragment:jE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:eA,clipping_planes_pars_vertex:tA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:sA,color_pars_vertex:rA,color_vertex:oA,common:aA,cube_uv_reflection_fragment:cA,defaultnormal_vertex:lA,displacementmap_pars_vertex:hA,displacementmap_vertex:uA,emissivemap_fragment:dA,emissivemap_pars_fragment:fA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:gA,envmap_common_pars_fragment:_A,envmap_pars_fragment:xA,envmap_pars_vertex:yA,envmap_physical_pars_fragment:IA,envmap_vertex:vA,fog_vertex:MA,fog_pars_vertex:SA,fog_fragment:EA,fog_pars_fragment:AA,gradientmap_pars_fragment:bA,lightmap_pars_fragment:TA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:RA,lights_pars_begin:CA,lights_toon_fragment:DA,lights_toon_pars_fragment:PA,lights_phong_fragment:LA,lights_phong_pars_fragment:NA,lights_physical_fragment:OA,lights_physical_pars_fragment:UA,lights_fragment_begin:FA,lights_fragment_maps:BA,lights_fragment_end:zA,lightprobes_pars_fragment:HA,logdepthbuf_fragment:GA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:VA,logdepthbuf_vertex:WA,map_fragment:XA,map_pars_fragment:qA,map_particle_fragment:YA,map_particle_pars_fragment:ZA,metalnessmap_fragment:JA,metalnessmap_pars_fragment:KA,morphinstance_vertex:$A,morphcolor_vertex:jA,morphnormal_vertex:QA,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:sb,normal_pars_vertex:rb,normal_vertex:ob,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:hb,iridescence_pars_fragment:ub,opaque_fragment:db,packing:fb,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:_b,roughnessmap_fragment:xb,roughnessmap_pars_fragment:yb,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:Mb,shadowmap_vertex:Sb,shadowmask_pars_fragment:Eb,skinbase_vertex:Ab,skinning_pars_vertex:bb,skinning_vertex:Tb,skinnormal_vertex:wb,specularmap_fragment:Rb,specularmap_pars_fragment:Cb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Db,transmission_fragment:Pb,transmission_pars_fragment:Lb,uv_pars_fragment:Nb,uv_pars_vertex:Ob,uv_vertex:Ub,worldpos_vertex:Fb,background_vert:Bb,background_frag:zb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:kb,cube_frag:Vb,depth_vert:Wb,depth_frag:Xb,distance_vert:qb,distance_frag:Yb,equirect_vert:Zb,equirect_frag:Jb,linedashed_vert:Kb,linedashed_frag:$b,meshbasic_vert:jb,meshbasic_frag:Qb,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:aT,meshphysical_vert:cT,meshphysical_frag:lT,meshtoon_vert:hT,meshtoon_frag:uT,points_vert:dT,points_frag:fT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},ue={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Di={basic:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:an([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:an([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new me(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:an([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:an([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:an([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:an([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:an([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:an([ue.lights,ue.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Di.physical={uniforms:an([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Du={r:0,b:0,g:0},xT=new Be,Qx=new Ue;Qx.set(-1,0,0,0,1,0,0,0,1);function yT(i,e,t,n,s,r){let o=new me(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let v=S.backgroundBlurriness>0;T=e.get(T,v)}return T}function g(S){let T=!1,v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===Qa)?(l===void 0&&(l=new Ve(new Qi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:yr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qx),l.material.toneMapped=Xe.getTransfer(v.colorSpace)!==dt,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ve(new oi(2,2),new on({name:"BackgroundMaterial",uniforms:yr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,T){S.getRGB(Du,Wp(i)),t.buffers.color.setClear(Du.r,Du.g,Du.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function vT(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(N,U,H,P,k){let Z=!1,J=u(N,P,H,U);r!==J&&(r=J,l(r.object)),Z=f(N,P,H,k),Z&&g(N,P,H,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(N,U,H,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,U,H,P){let k=P.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let J=N.isInstancedMesh===!0?N.id:0,ne=Z[J];ne===void 0&&(ne={},Z[J]=ne);let X=ne[H.id];X===void 0&&(X={},ne[H.id]=X);let Q=X[k];return Q===void 0&&(Q=d(c()),X[k]=Q),Q}function d(N){let U=[],H=[],P=[];for(let k=0;k<t;k++)U[k]=0,H[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,U,H,P){let k=r.attributes,Z=U.attributes,J=0,ne=H.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=k[X],Ie=Z[X];if(Ie===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Ie=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Ie=N.instanceColor)),te===void 0||te.attribute!==Ie||Ie&&te.data!==Ie.data)return!0;J++}return r.attributesNum!==J||r.index!==P}function g(N,U,H,P){let k={},Z=U.attributes,J=0,ne=H.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=Z[X];te===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let Ie={};Ie.attribute=te,te&&te.data&&(Ie.data=te.data),k[X]=Ie,J++}r.attributes=k,r.attributesNum=J,r.index=P}function y(){let N=r.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){let H=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;H[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),k[N]!==U&&(i.vertexAttribDivisor(N,U),k[N]=U)}function S(){let N=r.newAttributes,U=r.enabledAttributes;for(let H=0,P=U.length;H<P;H++)U[H]!==N[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function T(N,U,H,P,k,Z,J){J===!0?i.vertexAttribIPointer(N,U,H,k,Z):i.vertexAttribPointer(N,U,H,P,k,Z)}function v(N,U,H,P){y();let k=P.attributes,Z=H.getAttributes(),J=U.defaultAttributeValues;for(let ne in Z){let X=Z[ne];if(X.location>=0){let Q=k[ne];if(Q===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let te=Q.normalized,Ie=Q.itemSize,we=e.get(Q);if(we===void 0)continue;let Mt=we.buffer,nt=we.type,lt=we.bytesPerElement,q=nt===i.INT||nt===i.UNSIGNED_INT||Q.gpuType===Wh;if(Q.isInterleavedBufferAttribute){let j=Q.data,ye=j.stride,Fe=Q.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let _e=0;_e<X.locationSize;_e++)T(X.location+_e,Ie/X.locationSize,nt,te,ye*lt,(Fe+Ie/X.locationSize*_e)*lt,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let j=0;j<X.locationSize;j++)T(X.location+j,Ie/X.locationSize,nt,te,Ie*lt,Ie/X.locationSize*j*lt,q)}}else if(J!==void 0){let te=J[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}S()}function E(){b();for(let N in n){let U=n[N];for(let H in U){let P=U[H];for(let k in P){let Z=P[k];for(let J in Z)h(Z[J].object),delete Z[J];delete P[k]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let H in U){let P=U[H];for(let k in P){let Z=P[k];for(let J in Z)h(Z[J].object),delete Z[J];delete P[k]}}delete n[N.id]}function R(N){for(let U in n){let H=n[U];for(let P in H){let k=H[P];if(k[N.id]===void 0)continue;let Z=k[N.id];for(let J in Z)h(Z[J].object),delete Z[J];delete k[N.id]}}}function x(N){for(let U in n){let H=n[U],P=N.isInstancedMesh===!0?N.id:0,k=H[P];if(k!==void 0){for(let Z in k){let J=k[Z];for(let ne in J)h(J[ne].object),delete J[ne];delete k[Z]}delete H[P],Object.keys(H).length===0&&delete n[U]}}}function b(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function MT(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ST(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&R!==Ln&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:A}}function ET(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,T=S*4,v=p.clippingState||null;c.value=v,v=h(g,d,T,f);for(let E=0;E!==T;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==y;++T,v+=4)o.copy(u[T]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Po=4,AT=6,bT=20,TT=256,ac=new Os,Dx=new me,Zp=null,Jp=0,Kp=0,$p=!1,wT=new I,vr=new I,Lu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=wT}=r;Zp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),Kp=this._renderer.getActiveMipmapLevel(),$p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zp,Jp,Kp),this._renderer.xr.enabled=$p,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zp=this._renderer.getRenderTarget(),Jp=this._renderer.getActiveCubeFace(),Kp=this._renderer.getActiveMipmapLevel(),$p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:hi,format:pn,colorSpace:fn,depthBuffer:!1},s=Px(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RT(r)),this._blurMaterial=IT(r,e,t),this._ggxMaterial=CT(r,e,t)}return s}_compileMaterial(e){let t=new Ve(new wt,e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,s,r){let c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dx),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Qi,new Jt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Dx),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let E=this._cubeSize;Do(s,v*E,T>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(y,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Us||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lx());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Do(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ac)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Po?n-g+Po:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Do(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,ac),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Do(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,ac)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Po?s-this._lodMax+Po:0),d=4*(this._cubeSize-h);Do(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(c,ac)}};function RT(i){let e=[],t=[],n=i,s=i-Po+1+AT;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,T=p>2?0:-1,v=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];g.set(v,f*d*p);for(let E=0;E<d;E++){let A=h[E*2]*2-1,R=h[E*2+1]*2-1;p===0?vr.set(1,R,A):p===1?vr.set(-A,1,-R):p===2?vr.set(-A,R,1):p===3?vr.set(-1,R,-A):p===4?vr.set(-A,-1,R):vr.set(A,R,-1),vr.toArray(y,(p*d+E)*f)}}let m=new wt;m.setAttribute("position",new Gt(g,f)),m.setAttribute("outputDirection",new Gt(y,f)),t.push(new Ve(m,null)),n>Po&&n--}return{lodMeshes:t,sizeLods:e}}function Px(i,e,t){let n=new yn(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function CT(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function IT(i,e,t){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Lx(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Nx(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nu=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Ci});r.uniforms.tEquirect.value=t;let o=new Ve(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Nt),new Uh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function DT(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Gh||f===kh)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Nu(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Gh||f===kh,y=f===Us||f===_r;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Lu(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new Lu(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Gh?d.mapping=Us:f===kh&&(d.mapping=_r),d}function c(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function PT(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function LT(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let T=0,v=S.length;T<v;T+=3){let E=S[T+0],A=S[T+1],R=S[T+2];d.push(E,A,A,R,R,E)}}else{let S=g.array;y=g.version;for(let T=0,v=S.length/3-1;T<v;T+=3){let E=T+0,A=T+1,R=T+2;d.push(E,A,A,R,R,E)}}let m=new(g.count>=65535?Da:Ia)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function NT(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function OT(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function UT(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let v=a.attributes.position.count*T,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*E*4*u),R=new Ta(A,v,E,u);R.type=Ln,R.needsUpdate=!0;let x=T*4;for(let C=0;C<u;C++){let N=m[C],U=p[C],H=S[C],P=v*E*4*C;for(let k=0;k<N.count;k++){let Z=k*x;f===!0&&(s.fromBufferAttribute(N,k),A[P+Z+0]=s.x,A[P+Z+1]=s.y,A[P+Z+2]=s.z,A[P+Z+3]=0),g===!0&&(s.fromBufferAttribute(U,k),A[P+Z+4]=s.x,A[P+Z+5]=s.y,A[P+Z+6]=s.z,A[P+Z+7]=0),y===!0&&(s.fromBufferAttribute(H,k),A[P+Z+8]=s.x,A[P+Z+9]=s.y,A[P+Z+10]=s.z,A[P+Z+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Oe(v,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function FT(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var BT={[bp]:"LINEAR_TONE_MAPPING",[Tp]:"REINHARD_TONE_MAPPING",[wp]:"CINEON_TONE_MAPPING",[ja]:"ACES_FILMIC_TONE_MAPPING",[Cp]:"AGX_TONE_MAPPING",[Ip]:"NEUTRAL_TONE_MAPPING",[Rp]:"CUSTOM_TONE_MAPPING"};function zT(i,e,t,n,s,r){let o=new yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new wt;l.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let h=new wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(l,h),d=new Os(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],T=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),c!==null&&c.setSize(v,E);for(let A=0;A<S.length;A++){let R=S[A];R.setSize&&R.setSize(v,E)}},this.setEffects=function(v){S=v,T=S.length>0&&S[0].isRenderPass===!0;let E=o.width,A=o.height;S.length>0&&a===null&&(a=new yn(E,A,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new yn(E,A,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let x=S[R];x.setSize&&x.setSize(E,A)}},this.begin=function(v,E){if(y||v.toneMapping===ai&&S.length===0)return!1;if(p=E,E!==null){let A=E.width,R=E.height;(o.width!==A||o.height!==R)&&this.setSize(A,R)}return T===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=ai,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=m,y=!0;let A=o,R=a;for(let x=0;x<S.length;x++){let b=S[x];b.enabled!==!1&&(b.render(v,R,A,E),b.needsSwap!==!1&&(A=R,R=R===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},Xe.getTransfer(f)===dt&&(h.defines.SRGB_TRANSFER="");let x=BT[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(p),v.render(u,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ey=new Zt,em=new Is(1,1),ty=new Ta,ny=new Sh,iy=new Fa,Ox=[],Ux=[],Fx=new Float32Array(16),Bx=new Float32Array(9),zx=new Float32Array(4);function No(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ox[s];if(r===void 0&&(r=new Float32Array(s),Ox[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fu(i,e){let t=Ux[e];t===void 0&&(t=new Int32Array(e),Ux[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function kT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function VT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function WT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;zx.set(n),i.uniformMatrix2fv(this.addr,!1,zx),Vt(t,n)}}function XT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Bx.set(n),i.uniformMatrix3fv(this.addr,!1,Bx),Vt(t,n)}}function qT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Fx.set(n),i.uniformMatrix4fv(this.addr,!1,Fx),Vt(t,n)}}function YT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ZT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function JT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function KT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function $T(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function QT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function ew(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function tw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(em.compareFunction=t.isReversedDepthBuffer()?Iu:Cu,r=em):r=ey,t.setTexture2D(e||r,s)}function nw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ny,s)}function iw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||iy,s)}function sw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ty,s)}function rw(i){switch(i){case 5126:return HT;case 35664:return GT;case 35665:return kT;case 35666:return VT;case 35674:return WT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return JT;case 35669:case 35673:return KT;case 5125:return $T;case 36294:return jT;case 36295:return QT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return sw}}function ow(i,e){i.uniform1fv(this.addr,e)}function aw(i,e){let t=No(e,this.size,2);i.uniform2fv(this.addr,t)}function cw(i,e){let t=No(e,this.size,3);i.uniform3fv(this.addr,t)}function lw(i,e){let t=No(e,this.size,4);i.uniform4fv(this.addr,t)}function hw(i,e){let t=No(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uw(i,e){let t=No(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dw(i,e){let t=No(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fw(i,e){i.uniform1iv(this.addr,e)}function pw(i,e){i.uniform2iv(this.addr,e)}function mw(i,e){i.uniform3iv(this.addr,e)}function gw(i,e){i.uniform4iv(this.addr,e)}function _w(i,e){i.uniform1uiv(this.addr,e)}function xw(i,e){i.uniform2uiv(this.addr,e)}function yw(i,e){i.uniform3uiv(this.addr,e)}function vw(i,e){i.uniform4uiv(this.addr,e)}function Mw(i,e,t){let n=this.cache,s=e.length,r=Fu(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=em:o=ey;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Sw(i,e,t){let n=this.cache,s=e.length,r=Fu(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ny,r[o])}function Ew(i,e,t){let n=this.cache,s=e.length,r=Fu(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||iy,r[o])}function Aw(i,e,t){let n=this.cache,s=e.length,r=Fu(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ty,r[o])}function bw(i){switch(i){case 5126:return ow;case 35664:return aw;case 35665:return cw;case 35666:return lw;case 35674:return hw;case 35675:return uw;case 35676:return dw;case 5124:case 35670:return fw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return xw;case 36295:return yw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Aw}}var tm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rw(t.type)}},nm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bw(t.type)}},im=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jp=/(\w+)(\])?(\[|\.)?/g;function Hx(i,e){i.seq.push(e),i.map[e.id]=e}function Tw(i,e,t){let n=i.name,s=n.length;for(jp.lastIndex=0;;){let r=jp.exec(n),o=jp.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hx(t,l===void 0?new tm(a,i,e):new nm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new im(a),Hx(t,u)),t=u}}}var Lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Tw(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ww=37297,Rw=0;function Cw(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kx=new Ue;function Iw(i){Xe._getMatrix(kx,Xe.workingColorSpace,i);let e=`mat3( ${kx.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Aa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Cw(i.getShaderSource(e),a)}else return r}function Dw(i,e){let t=Iw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Pw={[bp]:"Linear",[Tp]:"Reinhard",[wp]:"Cineon",[ja]:"ACESFilmic",[Cp]:"AgX",[Ip]:"Neutral",[Rp]:"Custom"};function Lw(i,e){let t=Pw[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pu=new I;function Nw(){Xe.getLuminanceCoefficients(Pu);let i=Pu.x.toFixed(4),e=Pu.y.toFixed(4),t=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lc).join(`
`)}function Uw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lc(i){return i!==""}function Wx(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(i){return i.replace(Bw,Hw)}var zw=new Map;function Hw(i,e){let t=We[e];if(t===void 0){let n=zw.get(e);if(n!==void 0)t=We[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sm(t)}var Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(i){return i.replace(Gw,kw)}function kw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Vw={[$a]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function Ww(i){return Vw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xw={[Us]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function qw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yw={[_r]:"ENVMAP_MODE_REFRACTION"};function Zw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jw={[Ap]:"ENVMAP_BLENDING_MULTIPLY",[ax]:"ENVMAP_BLENDING_MIX",[cx]:"ENVMAP_BLENDING_ADD"};function Kw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[i.combine]||"ENVMAP_BLENDING_NONE"}function $w(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jw(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Ww(t),l=qw(t),h=Zw(t),u=Kw(t),d=$w(t),f=Ow(t),g=Uw(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),p.length>0&&(p+=`
`)):(m=[Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lc).join(`
`),p=[Yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?We.tonemapping_pars_fragment:"",t.toneMapping!==ai?Lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Dw("linearToOutputTexel",t.outputColorSpace),Nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lc).join(`
`)),o=sm(o),o=Wx(o,t),o=Xx(o,t),a=sm(a),a=Wx(a,t),a=Xx(a,t),o=qx(o),a=qx(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+m+o,v=S+p+a,E=Gx(s,s.VERTEX_SHADER,T),A=Gx(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(A)||"",k=U.trim(),Z=H.trim(),J=P.trim(),ne=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,A);else{let Q=Vx(s,E,"vertex"),te=Vx(s,A,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Q+`
`+te)}else k!==""?Ee("WebGLProgram: Program Info Log:",k):(Z===""||J==="")&&(X=!1);X&&(N.diagnostics={runnable:ne,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(E),s.deleteShader(A),x=new Lo(s,y),b=Fw(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,ww)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}var Qw=0,rm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}},om=class{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}};function eR(i){return i===Bs||i===sc||i===rc}function tR(i,e,t,n,s,r){let o=new wa,a=new rm,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,b,C,N,U,H){let P=N.fog,k=U.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||Z,J),X=ne&&ne.mapping===Qa?ne.image.height:null,Q=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ie=te!==void 0?te.length:0,we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let Mt,nt,lt,q;if(Q){let Et=Di[Q];Mt=Et.vertexShader,nt=Et.fragmentShader}else{Mt=x.vertexShader,nt=x.fragmentShader;let Et=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,Et,ht),lt=Et.id,q=ht.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Je=!!x.map,Ht=!!x.matcap,$e=!!ne,ot=!!x.aoMap,St=!!x.lightMap,et=!!x.bumpMap&&x.wireframe===!1,Rt=!!x.normalMap,qt=!!x.displacementMap,xn=!!x.emissiveMap,It=!!x.metalnessMap,Ut=!!x.roughnessMap,O=x.anisotropy>0,en=x.clearcoat>0,ft=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,W=O&&!!x.anisotropyMap,se=en&&!!x.clearcoatMap,re=en&&!!x.clearcoatNormalMap,Y=en&&!!x.clearcoatRoughnessMap,$=_&&!!x.iridescenceMap,oe=_&&!!x.iridescenceThicknessMap,be=F&&!!x.sheenColorMap,he=F&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Te=!!x.specularColorMap,De=!!x.specularIntensityMap,ze=G&&!!x.transmissionMap,L=G&&!!x.thicknessMap,ce=!!x.gradientMap,K=!!x.alphaMap,le=x.alphaTest>0,pe=!!x.alphaHash,ee=!!x.extensions,Re=ai;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Re=i.toneMapping);let Se={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:nt,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:Ht,envMap:$e,envMapMode:$e&&ne.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:St,bumpMap:et,normalMap:Rt,displacementMap:qt,emissiveMap:xn,normalMapObjectSpace:Rt&&x.normalMapType===mx,normalMapTangentSpace:Rt&&x.normalMapType===Ru,packedNormalMap:Rt&&x.normalMapType===Ru&&eR(x.normalMap.format),metalnessMap:It,roughnessMap:Ut,anisotropy:O,anisotropyMap:W,clearcoat:en,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:ft,retroreflection:w,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:be,sheenRoughnessMap:he,specularMap:ae,specularColorMap:Te,specularIntensityMap:De,transmission:G,transmissionMap:ze,thicknessMap:L,gradientMap:ce,opaque:x.transparent===!1&&x.blending===To&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:pe,combine:x.combine,mapUv:Je&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:St&&g(x.lightMap.channel),bumpMapUv:et&&g(x.bumpMap.channel),normalMapUv:Rt&&g(x.normalMap.channel),displacementMapUv:qt&&g(x.displacementMap.channel),emissiveMapUv:xn&&g(x.emissiveMap.channel),metalnessMapUv:It&&g(x.metalnessMap.channel),roughnessMapUv:Ut&&g(x.roughnessMap.channel),anisotropyMapUv:W&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(x.sheenRoughnessMap.channel),specularMapUv:ae&&g(x.specularMap.channel),specularColorMapUv:Te&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:ze&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Rt||O),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Je||K),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:xn&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ct,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(b,x),S(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let b=f[x.type],C;if(b){let N=Di[b];C=Rx.clone(N.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new jw(i,b,x,s),l.push(C),h.set(b,C)),C}function E(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:R}}function nR(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function iR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jx(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,y,m,p){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=o(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function c(d,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let T=a(d,f,g,y,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(d,f,g,y,m,p){let S=a(d,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||iR),n.length>1&&n.sort(f||Zx),s.length>1&&s.sort(f||Zx)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function sR(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jx,i.set(n,[o])):s>=r.length?(o=new Jx,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rR(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new me};break;case"SpotLight":t={position:new I,direction:new I,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function oR(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var aR=0;function cR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lR(i){let e=new rR,t=oR(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Be,o=new Be;function a(l){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,T=0,v=0,E=0,A=0,R=0,x=0,b=0,C=0;l.sort(cR);for(let U=0,H=l.length;U<H;U++){let P=l[U],k=P.color,Z=P.intensity,J=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Bs?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*Z,u+=k.g*Z,d+=k.b*Z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],Z);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;let Ie=Q.getViewportCount();for(let we=0;we<Ie;we++)n.sunShadowMatrix[y+we]=Q.getMatrix(we),n.sunShadowCascade[y+we]=Q._cascadeData[we];y+=Ie,g++}n.sun[f]=X,f++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(Z),X.distance=J,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[S]=X;let Q=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,Q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[S]=Q.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ne,R++}S++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(k).multiplyScalar(Z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=P.shadow.matrix,A++}n.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Z),X.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[v]=X,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==T||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==x||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=T,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=x,N.numLightProbes=C,n.version=aR++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,T=l.length;S<T;S++){let v=l[S];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(v.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function Kx(i){let e=new lR(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function hR(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kx(i),e.set(s,[a])):r>=o.length?(a=new Kx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
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
}`,fR=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],pR=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],$x=new Be,cc=new I,Qp=new I;function mR(i,e,t){let n=new xo,s=new Oe,r=new Oe,o=new mt,a=new Rh,c=new Ch,l={},h=t.maxTextureSize,u={[Ri]:$t,[$t]:Ri,[Ct]:Ct},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:uR,fragmentShader:dR}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let p=this.type;this.render=function(A,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Hh&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$a);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=A.length;P<k;P++){let Z=A[P],J=Z.shadow;if(J===void 0){Ee("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ne=J.getFrameExtents();s.multiply(ne),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,J.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=X,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===bo){if(Z.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new yn(s.x,s.y,{format:Bs,type:hi,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Is(s.x,s.y,Ln),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=bi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Lt,J.map.depthTexture.magFilter=Lt}else Z.isPointLight?(J.map=new Nu(s.x),J.map.depthTexture=new bh(s.x,li)):(J.map=new yn(s.x,s.y),J.map.depthTexture=new Is(s.x,s.y,li)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=bi,this.type===$a?(J.map.depthTexture.compareFunction=X?Iu:Cu,J.map.depthTexture.minFilter=Nt,J.map.depthTexture.magFilter=Nt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Lt,J.map.depthTexture.magFilter=Lt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,x);for(let te=0;te<Q;te++){let Ie=J.getCamera(te);if(Z.isPointLight){let we=J.camera,Mt=J.matrix,nt=Z.distance||we.far;nt!==we.far&&(we.far=nt,we.updateProjectionMatrix()),cc.setFromMatrixPosition(Z.matrixWorld),we.position.copy(cc),Qp.copy(we.position),Qp.add(fR[te]),we.up.copy(pR[te]),we.lookAt(Qp),we.updateMatrixWorld(),Mt.makeTranslation(-cc.x,-cc.y,-cc.z),$x.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),J._frustum.setFromProjectionMatrix($x,we.coordinateSystem,we.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,te),i.clear();else{te===0&&(i.setRenderTarget(J.map),i.clear());let we=J.getViewport(te);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),U.viewport(o)}n=J.getFrustum(te),v(R,x,Ie,Z,this.type)}J.isPointLightShadow!==!0&&this.type===bo&&S(J,x),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,N)};function S(A,R){let x=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new yn(s.x,s.y,{format:Bs,type:hi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,x,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,x,f,y,null)}function T(A,R,x,b){let C=null,N=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=C.uuid,H=R.uuid,P=l[U];P===void 0&&(P={},l[U]=P);let k=P[H];k===void 0&&(k=C.clone(),P[H]=k,R.addEventListener("dispose",E)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,b===bo?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=x}return C}function v(A,R,x,b,C){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===bo)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let H=e.update(A),P=A.material;if(Array.isArray(P)){let k=H.groups;for(let Z=0,J=k.length;Z<J;Z++){let ne=k[Z],X=P[ne.materialIndex];if(X&&X.visible){let Q=T(A,X,b,C);A.onBeforeShadow(i,A,R,x,H,Q,ne),i.renderBufferDirect(x,null,H,Q,A,ne),A.onAfterShadow(i,A,R,x,H,Q,ne)}}}else if(P.visible){let k=T(A,P,b,C);A.onBeforeShadow(i,A,R,x,H,k,null),i.renderBufferDirect(x,null,H,k,A,null),A.onAfterShadow(i,A,R,x,H,k,null)}}let U=A.children;for(let H=0,P=U.length;H<P;H++)v(U[H],R,x,b,C)}function E(A){A.target.removeEventListener("dispose",E);for(let x in l){let b=l[x],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function gR(i,e){function t(){let L=!1,ce=new mt,K=null,le=new mt(0,0,0,0);return{setMask:function(pe){K!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){L=pe},setClear:function(pe,ee,Re,Se,Et){Et===!0&&(pe*=Se,ee*=Se,Re*=Se),ce.set(pe,ee,Re,Se),le.equals(ce)===!1&&(i.clearColor(pe,ee,Re,Se),le.copy(ce))},reset:function(){L=!1,K=null,le.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,K=null,le=null,pe=null;return{setReversed:function(ee){if(ce!==ee){let Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;let Se=pe;pe=null,this.setClear(Se)}},getReversed:function(){return ce},setTest:function(ee){ee?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ee){K!==ee&&!L&&(i.depthMask(ee),K=ee)},setFunc:function(ee){if(ce&&(ee=Tx[ee]),le!==ee){switch(ee){case fh:i.depthFunc(i.NEVER);break;case ph:i.depthFunc(i.ALWAYS);break;case mh:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case gh:i.depthFunc(i.EQUAL);break;case _h:i.depthFunc(i.GEQUAL);break;case xh:i.depthFunc(i.GREATER);break;case yh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){L=ee},setClear:function(ee){pe!==ee&&(pe=ee,ce&&(ee=1-ee),i.clearDepth(ee))},reset:function(){L=!1,K=null,le=null,pe=null,ce=!1}}}function s(){let L=!1,ce=null,K=null,le=null,pe=null,ee=null,Re=null,Se=null,Et=null;return{setTest:function(ht){L||(ht?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ht){ce!==ht&&!L&&(i.stencilMask(ht),ce=ht)},setFunc:function(ht,Jn,vi){(K!==ht||le!==Jn||pe!==vi)&&(i.stencilFunc(ht,Jn,vi),K=ht,le=Jn,pe=vi)},setOp:function(ht,Jn,vi){(ee!==ht||Re!==Jn||Se!==vi)&&(i.stencilOp(ht,Jn,vi),ee=ht,Re=Jn,Se=vi)},setLocked:function(ht){L=ht},setClear:function(ht){Et!==ht&&(i.clearStencil(ht),Et=ht)},reset:function(){L=!1,ce=null,K=null,le=null,pe=null,ee=null,Re=null,Se=null,Et=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,T=null,v=null,E=null,A=null,R=null,x=new me(0,0,0),b=0,C=!1,N=null,U=null,H=null,P=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=ne>=2);let Q=null,te={},Ie=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Mt=new mt().fromArray(Ie),nt=new mt().fromArray(we);function lt(L,ce,K,le){let pe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<K;Re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ee}let q={};q[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(ao),et(!1),Rt(xp),j(i.CULL_FACE),ot(Ci);function j(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Fe(L,ce){return d[L]!==ce?(i.bindFramebuffer(L,ce),d[L]=ce,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(L,ce){let K=g,le=!1;if(L){K=f.get(ce),K===void 0&&(K=[],f.set(ce,K));let pe=L.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Re=pe.length;ee<Re;ee++)K[ee]=i.COLOR_ATTACHMENT0+ee;K.length=pe.length,le=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&i.drawBuffers(K)}function Je(L){return y!==L?(i.useProgram(L),y=L,!0):!1}let Ht={[gr]:i.FUNC_ADD,[W_]:i.FUNC_SUBTRACT,[X_]:i.FUNC_REVERSE_SUBTRACT};Ht[q_]=i.MIN,Ht[Y_]=i.MAX;let $e={[Z_]:i.ZERO,[J_]:i.ONE,[K_]:i.SRC_COLOR,[Sp]:i.SRC_ALPHA,[nx]:i.SRC_ALPHA_SATURATE,[ex]:i.DST_COLOR,[j_]:i.DST_ALPHA,[$_]:i.ONE_MINUS_SRC_COLOR,[Ep]:i.ONE_MINUS_SRC_ALPHA,[tx]:i.ONE_MINUS_DST_COLOR,[Q_]:i.ONE_MINUS_DST_ALPHA,[ix]:i.CONSTANT_COLOR,[sx]:i.ONE_MINUS_CONSTANT_COLOR,[rx]:i.CONSTANT_ALPHA,[ox]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(L,ce,K,le,pe,ee,Re,Se,Et,ht){if(L===Ci){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),L!==V_){if(L!==p||ht!==C){if((S!==gr||E!==gr)&&(i.blendEquation(i.FUNC_ADD),S=gr,E=gr),ht)switch(L){case To:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yp:i.blendFunc(i.ONE,i.ONE);break;case vp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vp:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mp:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}T=null,v=null,A=null,R=null,x.set(0,0,0),b=0,p=L,C=ht}return}pe=pe||ce,ee=ee||K,Re=Re||le,(ce!==S||pe!==E)&&(i.blendEquationSeparate(Ht[ce],Ht[pe]),S=ce,E=pe),(K!==T||le!==v||ee!==A||Re!==R)&&(i.blendFuncSeparate($e[K],$e[le],$e[ee],$e[Re]),T=K,v=le,A=ee,R=Re),(Se.equals(x)===!1||Et!==b)&&(i.blendColor(Se.r,Se.g,Se.b,Et),x.copy(Se),b=Et),p=L,C=!1}function St(L,ce){L.side===Ct?ye(i.CULL_FACE):j(i.CULL_FACE);let K=L.side===$t;ce&&(K=!K),et(K),L.blending===To&&L.transparent===!1?ot(Ci):ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;a.setTest(le),le&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function Rt(L){L!==G_?(j(i.CULL_FACE),L!==U&&(L===xp?i.cullFace(i.BACK):L===k_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),U=L}function qt(L){L!==H&&(J&&i.lineWidth(L),H=L)}function xn(L,ce,K){L?(j(i.POLYGON_OFFSET_FILL),(P!==ce||k!==K)&&(P=ce,k=K,o.getReversed()&&(ce=-ce),i.polygonOffset(ce,K))):ye(i.POLYGON_OFFSET_FILL)}function It(L){L?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ut(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function O(L,ce,K){K===void 0&&(Q===null?K=i.TEXTURE0+Z-1:K=Q);let le=te[K];le===void 0&&(le={type:void 0,texture:void 0},te[K]=le),(le.type!==L||le.texture!==ce)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(L,ce||q[L]),le.type=L,le.texture=ce)}function en(){let L=te[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function re(){try{i.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function $(){try{i.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function oe(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function be(L,ce){u[L]!==ce&&(i.pixelStorei(L,ce),u[L]=ce)}function he(L){Mt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Mt.copy(L))}function ae(L){nt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function Te(L,ce){let K=l.get(ce);K===void 0&&(K=new WeakMap,l.set(ce,K));let le=K.get(L);le===void 0&&(le=i.getUniformBlockIndex(ce,L.name),K.set(L,le))}function De(L,ce){let le=l.get(ce).get(L);c.get(ce)!==le&&(i.uniformBlockBinding(ce,le,L.__bindingPointIndex),c.set(ce,le))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,te={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,T=null,v=null,E=null,A=null,R=null,x=new me(0,0,0),b=0,C=!1,N=null,U=null,H=null,P=null,k=null,Mt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Fe,drawBuffers:_e,useProgram:Je,setBlending:ot,setMaterial:St,setFlipSided:et,setCullFace:Rt,setLineWidth:qt,setPolygonOffset:xn,setScissorTest:It,activeTexture:Ut,bindTexture:O,unbindTexture:en,compressedTexImage2D:ft,compressedTexImage3D:w,texImage2D:Y,texImage3D:$,pixelStorei:be,getParameter:oe,updateUBOMapping:Te,uniformBlockBinding:De,texStorage2D:se,texStorage3D:re,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:he,viewport:ae,reset:ze}}function _R(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return g?new OffscreenCanvas(w,_):ho("canvas")}function m(w,_,F){let G=1,W=ft(w);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(G*W.width),re=Math.floor(G*W.height);d===void 0&&(d=y(se,re));let Y=_?y(se,re):d;return Y.width=se,Y.height=re,Y.getContext("2d").drawImage(w,0,0,se,re),Ee("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+re+")."),Y}else return"data"in w&&Ee("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,_,F,G,W,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re;G&&(re=e.get("EXT_texture_norm16"),re||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),F===i.SHORT&&re&&(Y=re.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),F===i.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),F===i.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let $=se?Aa:Xe.getTransfer(W);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===dt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),F===i.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(w,_){let F;return w?_===null||_===li||_===Co?F=i.DEPTH24_STENCIL8:_===Ln?F=i.DEPTH32F_STENCIL8:_===Ro&&(F=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Co?F=i.DEPTH_COMPONENT24:_===Ln?F=i.DEPTH_COMPONENT32F:_===Ro&&(F=i.DEPTH_COMPONENT16),F}function A(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),N(_)}function b(w){let _=n.get(w);if(_.__webglInit===void 0)return;let F=w.source,G=f.get(F);if(G){let W=G[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(G).length===0&&f.delete(F)}n.remove(w)}function C(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let F=w.source,G=f.get(F);delete G[_.__cacheKey],o.memory.textures--}function N(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let W=0;W<_.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[G][W]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=w.textures;for(let G=0,W=F.length;G<W;G++){let se=n.get(F[G]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(w)}let U=0;function H(){U=0}function P(){return U}function k(w){U=w}function Z(){let w=U;return w>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ne(w,_){let F=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let G=w.image;if(G===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(w,_){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ye(F,w,_);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(w,_){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ye(F,w,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function te(w,_){let F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Fe(F,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Ie={[Ai]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},we={[Lt]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Mt={[_x]:i.NEVER,[Sx]:i.ALWAYS,[xx]:i.LESS,[Cu]:i.LEQUAL,[yx]:i.EQUAL,[Iu]:i.GEQUAL,[vx]:i.GREATER,[Mx]:i.NOTEQUAL};function nt(w,_){if(_.type===Ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Nt||_.magFilter===wo||_.magFilter===xr||_.magFilter===ci||_.minFilter===Nt||_.minFilter===wo||_.minFilter===xr||_.minFilter===ci)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ie[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ie[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ie[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Lt||_.minFilter!==xr&&_.minFilter!==ci||_.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function lt(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let G=_.source,W=f.get(G);W===void 0&&(W={},f.set(G,W));let se=J(_);if(se!==w.__cacheKey){W[se]===void 0&&(W[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[se].usedTimes++;let re=W[w.__cacheKey];re!==void 0&&(W[w.__cacheKey].usedTimes--,re.usedTimes===0&&C(_)),w.__cacheKey=se,w.__webglTexture=W[se].texture}return F}function q(w,_,F){return Math.floor(Math.floor(w/F)/_)}function j(w,_,F,G){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{se.sort((be,he)=>be.start-he.start);let re=0;for(let be=1;be<se.length;be++){let he=se[re],ae=se[be],Te=he.start+he.count,De=q(ae.start,_.width,4),ze=q(he.start,_.width,4);ae.start<=Te+1&&De===ze&&q(ae.start+ae.count-1,_.width,4)===De?he.count=Math.max(he.count,ae.start+ae.count-he.start):(++re,se[re]=ae)}se.length=re+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let be=0,he=se.length;be<he;be++){let ae=se[be],Te=Math.floor(ae.start/4),De=Math.ceil(ae.count/4),ze=Te%_.width,L=Math.floor(Te/_.width),ce=De,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,ce,K,F,G,_.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ye(w,_,F){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let W=lt(w,_),se=_.source;t.bindTexture(G,w.__webglTexture,i.TEXTURE0+F);let re=n.get(se);if(se.version!==re.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Xe.getPrimaries(Xe.workingColorSpace),le=_.colorSpace===ui?null:Xe.getPrimaries(_.colorSpace),pe=_.colorSpace===ui||K===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let $=m(_.image,!1,s.maxTextureSize);$=en(_,$);let oe=r.convert(_.format,_.colorSpace),be=r.convert(_.type),he=v(_.internalFormat,oe,be,_.normalized,_.colorSpace,_.isVideoTexture);nt(G,_);let ae,Te=_.mipmaps,De=_.isVideoTexture!==!0,ze=re.__version===void 0||W===!0,L=se.dataReady,ce=A(_,$);if(_.isDepthTexture)he=E(_.format===Fs,_.type),ze&&(De?t.texStorage2D(i.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,oe,be,null));else if(_.isDataTexture)if(Te.length>0){De&&ze&&t.texStorage2D(i.TEXTURE_2D,ce,he,Te[0].width,Te[0].height);for(let K=0,le=Te.length;K<le;K++)ae=Te[K],De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,be,ae.data):t.texImage2D(i.TEXTURE_2D,K,he,ae.width,ae.height,0,oe,be,ae.data);_.generateMipmaps=!1}else De?(ze&&t.texStorage2D(i.TEXTURE_2D,ce,he,$.width,$.height),L&&j(_,$,oe,be)):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,oe,be,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,Te[0].width,Te[0].height,$.depth);for(let K=0,le=Te.length;K<le;K++)if(ae=Te[K],_.format!==pn)if(oe!==null)if(De){if(L)if(_.layerUpdates.size>0){let pe=Yp(ae.width,ae.height,_.format,_.type);for(let ee of _.layerUpdates){let Re=ae.data.subarray(ee*pe/ae.data.BYTES_PER_ELEMENT,(ee+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ee,ae.width,ae.height,1,oe,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,he,ae.width,ae.height,$.depth,0,ae.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ae.width,ae.height,$.depth,oe,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,he,ae.width,ae.height,$.depth,0,oe,be,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{De&&ze&&t.texStorage2D(i.TEXTURE_2D,ce,he,Te[0].width,Te[0].height);for(let K=0,le=Te.length;K<le;K++)ae=Te[K],_.format!==pn?oe!==null?De?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,K,he,ae.width,ae.height,0,ae.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae.width,ae.height,oe,be,ae.data):t.texImage2D(i.TEXTURE_2D,K,he,ae.width,ae.height,0,oe,be,ae.data)}else if(_.isDataArrayTexture)if(De){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,$.width,$.height,$.depth),L)if(_.layerUpdates.size>0){let K=Yp($.width,$.height,_.format,_.type);for(let le of _.layerUpdates){let pe=$.data.subarray(le*K/$.data.BYTES_PER_ELEMENT,(le+1)*K/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,$.width,$.height,1,oe,be,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,be,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,oe,be,$.data);else if(_.isData3DTexture)De?(ze&&t.texStorage3D(i.TEXTURE_3D,ce,he,$.width,$.height,$.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,be,$.data)):t.texImage3D(i.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,oe,be,$.data);else if(_.isFramebufferTexture){if(ze)if(De)t.texStorage2D(i.TEXTURE_2D,ce,he,$.width,$.height);else{let K=$.width,le=$.height;for(let pe=0;pe<ce;pe++)t.texImage2D(i.TEXTURE_2D,pe,he,K,le,0,oe,be,null),K>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),$.parentNode!==K){K.appendChild($),u.add(_),K.onpaint=le=>{let pe=le.changedElements;for(let ee of u)pe.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let pe=i.RGBA,ee=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,ee,Re,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(De&&ze){let K=ft(Te[0]);t.texStorage2D(i.TEXTURE_2D,ce,he,K.width,K.height)}for(let K=0,le=Te.length;K<le;K++)ae=Te[K],De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe,be,ae):t.texImage2D(i.TEXTURE_2D,K,he,oe,be,ae);_.generateMipmaps=!1}else if(De){if(ze){let K=ft($);t.texStorage2D(i.TEXTURE_2D,ce,he,K.width,K.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,be,$)}else t.texImage2D(i.TEXTURE_2D,0,he,oe,be,$);p(_)&&S(G),re.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Fe(w,_,F){if(_.image.length!==6)return;let G=lt(w,_),W=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let se=n.get(W);if(W.version!==se.__version||G===!0){t.activeTexture(i.TEXTURE0+F);let re=Xe.getPrimaries(Xe.workingColorSpace),Y=_.colorSpace===ui?null:Xe.getPrimaries(_.colorSpace),$=_.colorSpace===ui||re===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!oe&&!be?he[ee]=m(_.image[ee],!0,s.maxCubemapSize):he[ee]=be?_.image[ee].image:_.image[ee],he[ee]=en(_,he[ee]);let ae=he[0],Te=r.convert(_.format,_.colorSpace),De=r.convert(_.type),ze=v(_.internalFormat,Te,De,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ce=se.__version===void 0||G===!0,K=W.dataReady,le=A(_,ae);nt(i.TEXTURE_CUBE_MAP,_);let pe;if(oe){L&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ze,ae.width,ae.height);for(let ee=0;ee<6;ee++){pe=he[ee].mipmaps;for(let Re=0;Re<pe.length;Re++){let Se=pe[Re];_.format!==pn?Te!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,ze,Se.width,Se.height,0,Se.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Se.width,Se.height,Te,De,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,ze,Se.width,Se.height,0,Te,De,Se.data)}}}else{if(pe=_.mipmaps,L&&ce){pe.length>0&&le++;let ee=ft(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Te,De,he[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,he[ee].width,he[ee].height,0,Te,De,he[ee].data);for(let Re=0;Re<pe.length;Re++){let Et=pe[Re].image[ee].image;L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Et.width,Et.height,Te,De,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,ze,Et.width,Et.height,0,Te,De,Et.data)}}else{L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,De,he[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Te,De,he[ee]);for(let Re=0;Re<pe.length;Re++){let Se=pe[Re];L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Te,De,Se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,ze,Te,De,Se.image[ee])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),se.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function _e(w,_,F,G,W,se){let re=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=v(F.internalFormat,re,Y,F.normalized,F.colorSpace),oe=n.get(_),be=n.get(F);if(be.__renderTarget=_,!oe.__hasExternalTextures){let he=Math.max(1,_.width>>se),ae=Math.max(1,_.height>>se);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,se,$,he,ae,_.depth,0,re,Y,null):t.texImage2D(W,se,$,he,ae,0,re,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,be.__webglTexture,0,It(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,be.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(w,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let G=_.depthTexture,W=G&&G.isDepthTexture?G.type:null,se=E(_.stencilBuffer,W),re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(_),se,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,w)}else{let G=_.textures;for(let W=0;W<G.length;W++){let se=G[W],re=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),$=v(se.internalFormat,re,Y,se.normalized,se.colorSpace);Ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(_),$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(w,_,F){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),nt(i.TEXTURE_CUBE_MAP,_.depthTexture);let oe=r.convert(_.depthTexture.format),be=r.convert(_.depthTexture.type),he;_.depthTexture.format===bi?he=i.DEPTH_COMPONENT24:_.depthTexture.format===Fs&&(he=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,he,_.width,_.height,0,oe,be,null)}}else ne(_.depthTexture,0);let se=W.__webglTexture,re=It(_),Y=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=_.depthTexture.format===Fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===bi)Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else if(_.depthTexture.format===Fs)Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(w){let _=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let G=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=G}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Ht(_.__webglFramebuffer[G],w,G);else{let G=w.texture.mipmaps;G&&G.length>0?Ht(_.__webglFramebuffer[0],w,0):Ht(_.__webglFramebuffer,w,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Je(_.__webglDepthbuffer[G],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}else{let G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Je(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(w,_,F){let G=n.get(w);_!==void 0&&_e(G.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(w)}function St(w){let _=w.texture,F=n.get(w),G=n.get(_);w.addEventListener("dispose",x);let W=w.textures,se=w.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,o.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(re)for(let Y=0,$=W.length;Y<$;Y++){let oe=n.get(W[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ut(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let $=W[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let oe=r.convert($.format,$.colorSpace),be=r.convert($.type),he=v($.internalFormat,oe,be,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),ae=It(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),nt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[Y][$],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else _e(F.__webglFramebuffer[Y],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,$=W.length;Y<$;Y++){let oe=W[Y],be=n.get(oe),he=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),nt(he,oe),_e(F.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+Y,he,0),p(oe)&&S(he)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),nt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)_e(F.__webglFramebuffer[$],w,_,i.COLOR_ATTACHMENT0,Y,$);else _e(F.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&S(Y),t.unbindTexture()}w.depthBuffer&&$e(w)}function et(w){let _=w.textures;for(let F=0,G=_.length;F<G;F++){let W=_[F];if(p(W)){let se=T(w),re=n.get(W).__webglTexture;t.bindTexture(se,re),S(se),t.unbindTexture()}}}let Rt=[],qt=[];function xn(w){if(w.samples>0){if(Ut(w)===!1){let _=w.textures,F=w.width,G=w.height,W=i.COLOR_BUFFER_BIT,se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(w),Y=_.length>1;if(Y)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let $=w.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let be=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,W,i.NEAREST),c===!0&&(Rt.length=0,qt.length=0,Rt.push(i.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Rt.push(se),qt.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let be=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function It(w){return Math.min(s.maxSamples,w.samples)}function Ut(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function en(w,_){let F=w.colorSpace,G=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==fn&&F!==ui&&(Xe.getTransfer(F)===dt?(G!==pn||W!==bn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",F)),_}function ft(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=ot,this.setupRenderTarget=St,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xR(i,e){function t(n,s=ui){let r,o=Xe.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Op)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pp)return i.BYTE;if(n===Lp)return i.SHORT;if(n===Ro)return i.UNSIGNED_SHORT;if(n===Wh)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===Up)return i.ALPHA;if(n===Fp)return i.RGB;if(n===pn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===Zh)return i.RED_INTEGER;if(n===Bs)return i.RG;if(n===Jh)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===ec||n===tc||n===nc||n===ic)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ec)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$h||n===jh||n===Qh||n===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tu||n===nu||n===iu||n===su||n===ru||n===sc||n===ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tu||n===nu)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===iu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===su)return r.COMPRESSED_R11_EAC;if(n===ru)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sc)return r.COMPRESSED_RG11_EAC;if(n===ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===au||n===cu||n===lu||n===hu||n===uu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===xu||n===yu||n===vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===au)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===du)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mu||n===Su||n===Eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mu)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===bu||n===rc||n===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Au)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`,am=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:yR,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cm=class extends ii{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new am,p={},S=t.getContextAttributes(),T=null,v=null,E=[],A=[],R=new Oe,x=null,b=null,C=new zt;C.viewport=new mt;let N=new zt;N.viewport=new mt;let U=[C,N],H=new Fh,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=E[q];return j===void 0&&(j=new po,E[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=E[q];return j===void 0&&(j=new po,E[q]=j),j.getGripSpace()},this.getHand=function(q){let j=E[q];return j===void 0&&(j=new po,E[q]=j),j.getHandSpace()};function Z(q){let j=A.indexOf(q.inputSource);if(j===-1)return;let ye=E[j];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<E.length;q++){let j=A[q];j!==null&&(A[q]=null,E[q].disconnect(j))}P=null,k=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,v=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Fe=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Fs:bi,Fe=S.stencil?Co:li);let Je={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new yn(d.textureWidth,d.textureHeight,{format:pn,type:bn,depthTexture:new Is(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let j=0;j<q.removed.length;j++){let ye=q.removed[j],Fe=A.indexOf(ye);Fe>=0&&(A[Fe]=null,E[Fe].disconnect(ye))}for(let j=0;j<q.added.length;j++){let ye=q.added[j],Fe=A.indexOf(ye);if(Fe===-1){for(let Je=0;Je<E.length;Je++)if(Je>=A.length){A.push(ye),Fe=Je;break}else if(A[Je]===null){A[Je]=ye,Fe=Je;break}if(Fe===-1)break}let _e=E[Fe];_e&&_e.connect(ye)}}let X=new I,Q=new I;function te(q,j,ye){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let Fe=X.distanceTo(Q),_e=j.projectionMatrix.elements,Je=ye.projectionMatrix.elements,Ht=_e[14]/(_e[10]-1),$e=_e[14]/(_e[10]+1),ot=(_e[9]+1)/_e[5],St=(_e[9]-1)/_e[5],et=(_e[8]-1)/_e[0],Rt=(Je[8]+1)/Je[0],qt=Ht*et,xn=Ht*Rt,It=Fe/(-et+Rt),Ut=It*-et;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ut),q.translateZ(It),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=Ht+It,en=$e+It,ft=qt-Ut,w=xn+(Fe-Ut),_=ot*$e/en*O,F=St*$e/en*O;q.projectionMatrix.makePerspective(ft,w,_,F,O,en),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ie(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),H.near=N.near=C.near=j,H.far=N.far=C.far=ye,(P!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,k=H.far),H.layers.mask=q.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Fe=q.parent,_e=H.cameras;Ie(H,Fe);for(let Je=0;Je<_e.length;Je++)Ie(_e[Je],Fe);_e.length===2?te(H,C,N):H.projectionMatrix.copy(C.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),we(q,H,Fe)};function we(q,j,ye){ye===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return p[q]};let Mt=null;function nt(q,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let $e=0;$e<ye.length;$e++){let ot=ye[$e],St=null;if(f!==null)St=f.getViewport(ot);else{let Rt=u.getViewSubImage(d,ot);St=Rt.viewport,$e===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(v))}let et=U[$e];et===void 0&&(et=new zt,et.layers.enable($e),et.viewport=new mt,U[$e]=et),et.matrix.fromArray(ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(St.x,St.y,St.width,St.height),$e===0&&(H.matrix.copy(et.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(et)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let $e=u.getDepthInformation(ye[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<ye.length;$e++){let ot=ye[$e].camera;if(ot){let St=p[ot];St||(St=new Ba,p[ot]=St);let et=u.getCameraImage(ot);St.sourceTexture=et}}}}for(let ye=0;ye<E.length;ye++){let Fe=A[ye],_e=E[ye];Fe!==null&&_e!==void 0&&_e.update(Fe,j,l||o)}Mt&&Mt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let lt=new jx;lt.setAnimationLoop(nt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},MR=new Be,sy=new Ue;sy.set(-1,0,0,0,1,0,0,0,1);function SR(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),T=S.envMap,v=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sy),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ER(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let A=E.program;n.uniformBlockBinding(v,A)}function l(v,E){let A=s[v.id];A===void 0&&(m(v),A=h(v),s[v.id]=A,v.addEventListener("dispose",S));let R=E.program;n.updateUBOMapping(v,R);let x=e.render.frame;r[v.id]!==x&&(d(v),r[v.id]=x)}function h(v){let E=u();v.__bindingPointIndex=E;let A=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=s[v.id],A=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,b=A.length;x<b;x++){let C=A[x];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)f(C[N],x,N,R);else f(C,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,E,A,R){if(y(v,E,A,R)===!0){let x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let N=0;N<b.length;N++){let U=b[N],H=p(U);g(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,A){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,A)}function y(v,E,A,R){let x=v.value,b=E+"_"+A;if(R[b]===void 0)return typeof x=="number"||typeof x=="boolean"?R[b]=x:ArrayBuffer.isView(x)?R[b]=x.slice():R[b]=x.clone(),!0;{let C=R[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let E=v.uniforms,A=0,R=16;for(let b=0,C=E.length;b<C;b++){let N=Array.isArray(E[b])?E[b]:[E[b]];for(let U=0,H=N.length;U<H;U++){let P=N[U],k=Array.isArray(P.value)?P.value:[P.value];for(let Z=0,J=k.length;Z<J;Z++){let ne=k[Z],X=p(ne),Q=A%R,te=Q%X.boundary,Ie=Q+te;A+=te,Ie!==0&&R-Ie<X.storage&&(A+=R-Ie),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=X.storage}}}let x=A%R;return x>0&&(A+=R-x),v.__size=A,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){let E=v.target;E.removeEventListener("dispose",S);let A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var AR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function bR(){return Ii===null&&(Ii=new Cs(AR,16,16,Bs,hi),Ii.name="DFG_LUT",Ii.minFilter=Nt,Ii.magFilter=Nt,Ii.wrapS=kn,Ii.wrapT=kn,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Ou=class{constructor(e={}){let{canvas:t=Ex(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([Kh,Jh,Zh]),p=new Set([bn,li,Ro,Co,Xh,qh]),S=new Uint32Array(4),T=new Int32Array(4),v=new I,E=null,A=null,R=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,H=null,P=null,k=null;this._outputColorSpace=Pt;let Z=0,J=0,ne=null,X=-1,Q=null,te=new mt,Ie=new mt,we=null,Mt=new me(0),nt=0,lt=t.width,q=t.height,j=1,ye=null,Fe=null,_e=new mt(0,0,lt,q),Je=new mt(0,0,lt,q),Ht=!1,$e=new xo,ot=!1,St=!1,et=new Be,Rt=new I,qt=new mt,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Ut(){return ne===null?j:1}let O=n;function en(M,D){return t.getContext(M,D)}let ft,w,_,F,G,W,se,re,Y,$,oe,be,he,ae,Te,De,ze,L,ce,K,le,pe,ee;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Jn,!1),O===null){let D="webgl2";if(O=en(D,M),O===null)throw en(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(M){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Jn,!1),Ne("WebGLRenderer: "+M.message),M}function Re(){ft=new PT(O),ft.init(),le=new xR(O,ft),w=new ST(O,ft,e,le),_=new gR(O,ft),w.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),H=O.createFramebuffer(),P=O.createFramebuffer(),k=O.createFramebuffer(),F=new OT(O),G=new nR,W=new _R(O,ft,_,G,w,le,F),se=new DT(C),re=new FE(O),pe=new vT(O,re),Y=new LT(O,re,F,pe),$=new FT(O,Y,re,pe,F),L=new UT(O,w,W),Te=new ET(G),oe=new tR(C,se,ft,w,pe,Te),be=new SR(C,G),he=new sR,ae=new hR(ft),ze=new yT(C,se,_,$,g,c),De=new mR(C,$,w),ee=new ER(O,F,w,_),ce=new MT(O,ft,F),K=new NT(O,ft,F),F.programs=oe.programs,C.capabilities=w,C.extensions=ft,C.properties=G,C.renderLists=he,C.shadowMap=De,C.state=_,C.info=F}y!==bn&&(b=new zT(y,t.width,t.height,a,s,r));let Se=new cm(C,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=ft.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ft.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(lt,q,!1))},this.getSize=function(M){return M.set(lt,q)},this.setSize=function(M,D,V=!0){if(Se.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,q=D,t.width=Math.floor(M*j),t.height=Math.floor(D*j),V===!0&&(t.style.width=M+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(lt*j,q*j).floor()},this.setDrawingBufferSize=function(M,D,V){lt=M,q=D,j=V,t.width=Math.floor(M*V),t.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(y===bn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,D,V,B){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,D,V,B),_.viewport(te.copy(_e).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,D,V,B){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,D,V,B),_.scissor(Ie.copy(Je).multiplyScalar(j).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(M){_.setScissorTest(Ht=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,V=!0){let B=0;if(M){let z=!1;if(ne!==null){let fe=ne.texture.format;z=m.has(fe)}if(z){let fe=ne.texture.type,xe=p.has(fe),de=ze.getClearColor(),ve=ze.getClearAlpha(),Ae=de.r,ke=de.g,je=de.b;xe?(S[0]=Ae,S[1]=ke,S[2]=je,S[3]=ve,O.clearBufferuiv(O.COLOR,0,S)):(T[0]=Ae,T[1]=ke,T[2]=je,T[3]=ve,O.clearBufferiv(O.COLOR,0,T))}else B|=O.COLOR_BUFFER_BIT}D&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Jn,!1),ze.dispose(),he.dispose(),ae.dispose(),G.dispose(),se.dispose(),$.dispose(),pe.dispose(),ee.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Y0),Se.removeEventListener("sessionend",Z0),js.stop()};function Et(M){M.preventDefault(),ba("WebGLRenderer: Context Lost."),N=!0}function ht(){ba("WebGLRenderer: Context Restored."),N=!1;let M=F.autoReset,D=De.enabled,V=De.autoUpdate,B=De.needsUpdate,z=De.type;Re(),F.autoReset=M,De.enabled=D,De.autoUpdate=V,De.needsUpdate=B,De.type=z}function Jn(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vi(M){let D=M.target;D.removeEventListener("dispose",vi),bS(D)}function bS(M){TS(M),G.remove(M)}function TS(M){let D=G.get(M).programs;D!==void 0&&(D.forEach(function(V){oe.releaseProgram(V)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,B,z,fe){D===null&&(D=xn);let xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=CS(M,D,V,B,z);_.setMaterial(B,xe);let ve=V.index,Ae=1;if(B.wireframe===!0){if(ve=Y.getWireframeAttribute(V),ve===void 0)return;Ae=2}let ke=V.drawRange,je=V.attributes.position,Me=ke.start*Ae,ut=(ke.start+ke.count)*Ae;fe!==null&&(Me=Math.max(Me,fe.start*Ae),ut=Math.min(ut,(fe.start+fe.count)*Ae)),ve!==null?(Me=Math.max(Me,0),ut=Math.min(ut,ve.count)):je!=null&&(Me=Math.max(Me,0),ut=Math.min(ut,je.count));let Ft=ut-Me;if(Ft<0||Ft===1/0)return;pe.setup(z,B,de,V,ve);let bt,vt=ce;if(ve!==null&&(bt=re.get(ve),vt=K,vt.setIndex(bt)),z.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Ut()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(z.isLine){let tn=B.linewidth;tn===void 0&&(tn=1),_.setLineWidth(tn*Ut()),z.isLineSegments?vt.setMode(O.LINES):z.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else z.isPoints?vt.setMode(O.POINTS):z.isSprite&&vt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let tn=z._multiDrawStarts,ge=z._multiDrawCounts,un=z._multiDrawCount,rt=ve?re.get(ve).bytesPerElement:1,Hn=G.get(B).currentProgram.getUniforms();for(let Mi=0;Mi<un;Mi++)Hn.setValue(O,"_gl_DrawID",Mi),vt.render(tn[Mi]/rt,ge[Mi])}else if(z.isInstancedMesh)vt.renderInstances(Me,Ft,z.count);else if(V.isInstancedBufferGeometry){let tn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,tn);vt.renderInstances(Me,Ft,ge)}else vt.render(Me,Ft)};function q0(M,D,V,B){U!==null&&M.isNodeMaterial&&U.setObject(B,M),ot===!0&&Te.setState(M,V,!1),M.transparent===!0&&M.side===Ct&&M.forceSinglePass===!1?(M.side=$t,M.needsUpdate=!0,Bl(M,D,B),M.side=Ri,M.needsUpdate=!0,Bl(M,D,B),M.side=Ct):Bl(M,D,B)}this.compile=function(M,D,V=null){V===null&&(V=M),U!==null&&U.renderStart(M,D,V),A=ae.get(V),A.init(D),x.push(A),V.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),St=this.localClippingEnabled,ot=Te.init(this.clippingPlanes,St),ot===!0&&Te.setGlobalState(this.clippingPlanes,D),U!==null&&De.render(A.state.shadowsArray,V,D);let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){let de=fe[xe];q0(de,V,D,z),B.add(de)}else q0(fe,V,D,z),B.add(fe)}),A=x.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(M,D,V=null){let B=this.compile(M,D,V);return new Promise(z=>{function fe(){if(B.forEach(function(xe){let ve=G.get(xe).currentProgram;(ve===void 0||ve.isReady())&&B.delete(xe)}),B.size===0){z(M);return}setTimeout(fe,10)}ft.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Nf=null;function wS(M){Nf&&Nf(M)}function Y0(){js.stop()}function Z0(){js.start()}let js=new jx;js.setAnimationLoop(wS),typeof self<"u"&&js.setContext(self),this.setAnimationLoop=function(M){Nf=M,Se.setAnimationLoop(M),M===null?js.stop():js.start()},Se.addEventListener("sessionstart",Y0),Se.addEventListener("sessionend",Z0),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(M,D);let V=Se.enabled===!0&&Se.isPresenting===!0,B=b!==null&&(ne===null||V)&&b.begin(C,ne);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,ne),A=ae.get(M,x.length),A.init(D),A.state.textureUnits=W.getTextureUnits(),x.push(A),et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$e.setFromProjectionMatrix(et,ti,D.reversedDepth),St=this.localClippingEnabled,ot=Te.init(this.clippingPlanes,St),E=he.get(M,R.length),E.init(),R.push(E),Se.enabled===!0&&Se.isPresenting===!0){let xe=C.xr.getDepthSensingMesh();xe!==null&&Of(xe,D,-1/0,C.sortObjects)}Of(M,D,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(A.state.lightsArray),C.sortObjects===!0&&E.sort(ye,Fe),It=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,It&&ze.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Te.beginShadows();let z=A.state.shadowsArray;if(De.render(z,M,D),ot===!0&&Te.endShadows(),(B&&b.hasRenderPass())===!1){let xe=E.opaque,de=E.transmissive;if(A.setupLights(),D.isArrayCamera){let ve=D.cameras;if(de.length>0)for(let Ae=0,ke=ve.length;Ae<ke;Ae++){let je=ve[Ae];K0(xe,de,M,je)}It&&ze.render(M);for(let Ae=0,ke=ve.length;Ae<ke;Ae++){let je=ve[Ae];J0(E,M,je,je.viewport)}}else de.length>0&&K0(xe,de,M,D),It&&ze.render(M),J0(E,M,D)}ne!==null&&J===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),B&&b.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),pe.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(A=x[x.length-1],W.setTextureUnits(A.state.textureUnits),ot===!0&&Te.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,U!==null&&U.renderEnd()};function Of(M,D,V,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($e)){B&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let xe=$.update(M),de=M.material;de.visible&&E.push(M,xe,de,V,qt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($e))){let xe=$.update(M),de=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),qt.copy(xe.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(de)){let ve=xe.groups;for(let Ae=0,ke=ve.length;Ae<ke;Ae++){let je=ve[Ae],Me=de[je.materialIndex];Me&&Me.visible&&E.push(M,xe,Me,V,qt.z,je,D)}}else de.visible&&E.push(M,xe,de,V,qt.z,null,D)}}let fe=M.children;for(let xe=0,de=fe.length;xe<de;xe++)Of(fe[xe],D,V,B)}function J0(M,D,V,B){let{opaque:z,transmissive:fe,transparent:xe}=M;A.setupLightsView(V),ot===!0&&Te.setGlobalState(C.clippingPlanes,V),B&&_.viewport(te.copy(B)),z.length>0&&Fl(z,D,V),fe.length>0&&Fl(fe,D,V),xe.length>0&&Fl(xe,D,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function K0(M,D,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Me=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new yn(1,1,{generateMipmaps:!0,type:Me?hi:bn,minFilter:ci,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let fe=A.state.transmissionRenderTarget[B.id],xe=B.viewport||te;fe.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),ve=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Mt),nt=C.getClearAlpha(),nt<1&&C.setClearColor(16777215,.5),C.clear(),It&&ze.render(V);let ke=C.toneMapping;C.toneMapping=ai;let je=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),ot===!0&&Te.setGlobalState(C.clippingPlanes,B),Fl(M,V,B),W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let ut=0,Ft=D.length;ut<Ft;ut++){let bt=D[ut],{object:vt,geometry:tn,material:ge,group:un}=bt;if(ge.side===Ct&&vt.layers.test(B.layers)){let rt=ge.side;ge.side=$t,ge.needsUpdate=!0,$0(vt,V,B,tn,ge,un),ge.side=rt,ge.needsUpdate=!0,Me=!0}}Me===!0&&(W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,ve,Ae),C.setClearColor(Mt,nt),je!==void 0&&(B.viewport=je),C.toneMapping=ke}function Fl(M,D,V){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,fe=M.length;z<fe;z++){let xe=M[z],{object:de,geometry:ve,group:Ae}=xe,ke=xe.material;ke.allowOverride===!0&&B!==null&&(ke=B),de.layers.test(V.layers)&&$0(de,D,V,ve,ke,Ae)}}function $0(M,D,V,B,z,fe){U!==null&&z.isNodeMaterial&&U.setObject(M,z),M.onBeforeRender(C,D,V,B,z,fe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,D,V,B,M,fe),z.transparent===!0&&z.side===Ct&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,C.renderBufferDirect(V,D,B,z,M,fe),z.side=Ri,z.needsUpdate=!0,C.renderBufferDirect(V,D,B,z,M,fe),z.side=Ct):C.renderBufferDirect(V,D,B,z,M,fe),M.onAfterRender(C,D,V,B,z,fe)}function Bl(M,D,V){D.isScene!==!0&&(D=xn);let B=G.get(M),z=A.state.lights,fe=A.state.shadowsArray,xe=z.state.version,de=oe.getParameters(M,z.state,fe,D,V,A.state.lightProbeGridArray),ve=oe.getProgramCacheKey(de),Ae=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=se.get(M.envMap||B.environment,ke),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",vi),Ae=new Map,B.programs=Ae);let je=Ae.get(ve);if(je!==void 0){if(B.currentProgram===je&&B.lightsStateVersion===xe)return Q0(M,de),je}else de.uniforms=oe.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,V,de),M.onBeforeCompile(de,C),je=oe.acquireProgram(de,ve),Ae.set(ve,je),B.uniforms=de.uniforms;let Me=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=Te.uniform),Q0(M,de),B.needsLights=DS(M),B.lightsStateVersion=xe,B.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=A.state.lightProbeGridArray.length>0,B.currentProgram=je,B.uniformsList=null,je}function j0(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Q0(M,D){let V=G.get(M);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function RS(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let V=0,B=M.length;V<B;V++){let z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function CS(M,D,V,B,z){D.isScene!==!0&&(D=xn),W.resetTextureUnits();let fe=D.fog,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,de=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=se.get(B.envMap||xe,ve),ke=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,je=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Ft=!!V.morphAttributes.color,bt=ai;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(bt=C.toneMapping);let vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tn=vt!==void 0?vt.length:0,ge=G.get(B),un=A.state.lights;if(ot===!0&&(St===!0||M!==Q)){let At=M===Q&&B.id===X;Te.setState(B,M,At)}let rt=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==un.state.version||ge.outputColorSpace!==de||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==Ae||B.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==ke||ge.vertexTangents!==je||ge.morphTargets!==Me||ge.morphNormals!==ut||ge.morphColors!==Ft||ge.toneMapping!==bt||ge.morphTargetsCount!==tn||!!ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,ge.__version=B.version);let Hn=ge.currentProgram;rt===!0&&(Hn=Bl(B,D,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Hn,ge));let Mi=!1,ys=!1,Wr=!1,_t=Hn.getUniforms(),Dt=ge.uniforms;if(_.useProgram(Hn.program)&&(Mi=!0,ys=!0,Wr=!0),B.id!==X&&(X=B.id,ys=!0),ge.needsLights){let At=RS(A.state.lightProbeGridArray,z);ge.lightProbeGrid!==At&&(ge.lightProbeGrid=At,ys=!0)}if(Mi||Q!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(O,"projectionMatrix",M.projectionMatrix),_t.setValue(O,"viewMatrix",M.matrixWorldInverse);let Ms=_t.map.cameraPosition;Ms!==void 0&&Ms.setValue(O,Rt.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,ys=!0,Wr=!0)}if(ge.needsLights&&(un.state.sunShadowMap.length>0&&_t.setValue(O,"sunShadowMap",un.state.sunShadowMap,W),un.state.directionalShadowMap.length>0&&_t.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,W),un.state.spotShadowMap.length>0&&_t.setValue(O,"spotShadowMap",un.state.spotShadowMap,W),un.state.pointShadowMap.length>0&&_t.setValue(O,"pointShadowMap",un.state.pointShadowMap,W)),z.isSkinnedMesh){_t.setOptional(O,z,"bindMatrix"),_t.setOptional(O,z,"bindMatrixInverse");let At=z.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),_t.setValue(O,"boneTexture",At.boneTexture,W))}z.isBatchedMesh&&(_t.setOptional(O,z,"batchingTexture"),_t.setValue(O,"batchingTexture",z._matricesTexture,W),_t.setOptional(O,z,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",z._indirectTexture,W),_t.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(O,"batchingColorTexture",z._colorsTexture,W));let vs=V.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&L.update(z,V,Hn),(ys||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,_t.setValue(O,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Dt.envMapIntensity.value=D.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=bR()),ys){if(_t.setValue(O,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&IS(Dt,Wr),fe&&B.fog===!0&&be.refreshFogUniforms(Dt,fe),be.refreshMaterialUniforms(Dt,B,j,q,A.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){let At=ge.lightProbeGrid;Dt.probesSH.value=At.texture,Dt.probesMin.value.copy(At.boundingBox.min),Dt.probesMax.value.copy(At.boundingBox.max),Dt.probesResolution.value.copy(At.resolution)}Lo.upload(O,j0(ge),Dt,W)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Lo.upload(O,j0(ge),Dt,W),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(O,"center",z.center),_t.setValue(O,"modelViewMatrix",z.modelViewMatrix),_t.setValue(O,"normalMatrix",z.normalMatrix),_t.setValue(O,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let At=B.uniformsGroups;for(let Ms=0,Xr=At.length;Ms<Xr;Ms++){let t_=At[Ms];ee.update(t_,Hn),ee.bind(t_,Hn)}}return Hn}function IS(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function DS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(M,D,V){let B=G.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=D,G.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let V=G.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){ne=M,Z=D,J=V;let B=null,z=!1,fe=!1;if(M){let de=G.get(M);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),te.copy(M.viewport),Ie.copy(M.scissor),we=M.scissorTest,_.viewport(te),_.scissor(Ie),_.setScissorTest(we),X=-1;return}else if(de.__webglFramebuffer===void 0)W.setupRenderTarget(M);else if(de.__hasExternalTextures)W.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&G.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(M)}}let ve=M.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ae=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?B=Ae[D][V]:B=Ae[D],z=!0):M.samples>0&&W.useMultisampledRTT(M)===!1?B=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[V]:B=Ae,te.copy(M.viewport),Ie.copy(M.scissor),we=M.scissorTest}else te.copy(_e).multiplyScalar(j).floor(),Ie.copy(Je).multiplyScalar(j).floor(),we=Ht;if(V!==0&&(B=H),_.bindFramebuffer(O.FRAMEBUFFER,B)&&_.drawBuffers(M,B),_.viewport(te),_.scissor(Ie),_.setScissorTest(we),z){let de=G.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,V)}else if(fe){let de=D;for(let ve=0;ve<M.textures.length;ve++){let Ae=G.get(M.textures[ve]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ve,Ae.__webglTexture,V,de)}}else if(M!==null&&V!==0){let de=G.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,V)}X=-1};function e_(M){let D=G.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=w.textureFormatReadable(M.format),D.__typeReadable=w.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,V,B,z,fe,xe,de=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){_.bindFramebuffer(O.FRAMEBUFFER,ve);try{let Ae=M.textures[de],ke=Ae.format,je=Ae.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Me=e_(Ae);if(Me.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&V>=0&&V<=M.height-z&&O.readPixels(D,V,B,z,le.convert(ke),le.convert(je),fe)}finally{let Ae=ne!==null?G.get(ne).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,D,V,B,z,fe,xe,de=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve)if(D>=0&&D<=M.width-B&&V>=0&&V<=M.height-z){_.bindFramebuffer(O.FRAMEBUFFER,ve);let Ae=M.textures[de],ke=Ae.format,je=Ae.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Me=e_(Ae);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(D,V,B,z,le.convert(ke),le.convert(je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ft=ne!==null?G.get(ne).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ft);let bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bx(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ut),O.deleteSync(bt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,V=0){let B=Math.pow(2,-V),z=Math.floor(M.image.width*B),fe=Math.floor(M.image.height*B),xe=D!==null?D.x:0,de=D!==null?D.y:0;W.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,xe,de,z,fe),_.unbindTexture()},this.copyTextureToTexture=function(M,D,V=null,B=null,z=0,fe=0){let xe,de,ve,Ae,ke,je,Me,ut,Ft,bt=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(V!==null)xe=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,ke=V.min.y,je=V.isBox3?V.min.z:0;else{let Dt=Math.pow(2,-z);xe=Math.floor(bt.width*Dt),de=Math.floor(bt.height*Dt),M.isDataArrayTexture?ve=bt.depth:M.isData3DTexture?ve=Math.floor(bt.depth*Dt):ve=1,Ae=0,ke=0,je=0}B!==null?(Me=B.x,ut=B.y,Ft=B.z):(Me=0,ut=0,Ft=0);let vt=le.convert(D.format),tn=le.convert(D.type),ge;D.isData3DTexture?(W.setTexture3D(D,0),ge=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),ge=O.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),ge=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let un=_.getParameter(O.UNPACK_ROW_LENGTH),rt=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(O.UNPACK_SKIP_PIXELS),Mi=_.getParameter(O.UNPACK_SKIP_ROWS),ys=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(O.UNPACK_SKIP_ROWS,ke),_.pixelStorei(O.UNPACK_SKIP_IMAGES,je);let Wr=M.isDataArrayTexture||M.isData3DTexture,_t=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Dt=G.get(M),vs=G.get(D),At=G.get(Dt.__renderTarget),Ms=G.get(vs.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,At.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let Xr=0;Xr<ve;Xr++)Wr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,je+Xr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(D).__webglTexture,fe,Ft+Xr)),O.blitFramebuffer(Ae,ke,xe,de,Me,ut,xe,de,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){let Dt=G.get(M),vs=G.get(D);_.bindFramebuffer(O.READ_FRAMEBUFFER,P),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let At=0;At<ve;At++)Wr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,z,je+At):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,z),_t?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vs.__webglTexture,fe,Ft+At):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vs.__webglTexture,fe),z!==0?O.blitFramebuffer(Ae,ke,xe,de,Me,ut,xe,de,O.COLOR_BUFFER_BIT,O.NEAREST):_t?O.copyTexSubImage3D(ge,fe,Me,ut,Ft+At,Ae,ke,xe,de):O.copyTexSubImage2D(ge,fe,Me,ut,Ae,ke,xe,de);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _t?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(ge,fe,Me,ut,Ft,xe,de,ve,vt,tn,bt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(ge,fe,Me,ut,Ft,xe,de,ve,vt,bt.data):O.texSubImage3D(ge,fe,Me,ut,Ft,xe,de,ve,vt,tn,bt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Me,ut,xe,de,vt,tn,bt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Me,ut,bt.width,bt.height,vt,bt.data):O.texSubImage2D(O.TEXTURE_2D,fe,Me,ut,xe,de,vt,tn,bt);_.pixelStorei(O.UNPACK_ROW_LENGTH,un),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(O.UNPACK_SKIP_ROWS,Mi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,ys),fe===0&&D.generateMipmaps&&O.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&W.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?W.setTextureCube(M,0):M.isData3DTexture?W.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?W.setTexture2DArray(M,0):W.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,ne=null,_.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};function lm(i,e){if(e===Bp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Io||e===oc){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Io)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Bu(i){let e=new Map,t=new Map,n=i.clone();return oy(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function oy(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)oy(i.children[n],e.children[n],t)}var Uo=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gm(t)}),this.register(function(t){return new _m(t)}),this.register(function(t){return new Tm(t)}),this.register(function(t){return new wm(t)}),this.register(function(t){return new Rm(t)}),this.register(function(t){return new ym(t)}),this.register(function(t){return new vm(t)}),this.register(function(t){return new Mm(t)}),this.register(function(t){return new Sm(t)}),this.register(function(t){return new mm(t)}),this.register(function(t){return new Em(t)}),this.register(function(t){return new xm(t)}),this.register(function(t){return new bm(t)}),this.register(function(t){return new Am(t)}),this.register(function(t){return new fm(t)}),this.register(function(t){return new zu(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zu(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cm(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ss.extractUrlBase(e);o=ss.resolveURL(l,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Eo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===uy){try{o[Ke.KHR_BINARY_GLTF]=new Im(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new pm;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new Dm(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new Pm;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new Lm;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ot(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fm=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fr(h),l.distance=u;break;case"spot":l=new Ya(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},pm=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}},mm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},gm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(s)}},_m=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ym=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Mm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],fn),Promise.all(s)}},Sm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Em=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(s)}},Am=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},bm=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Tm=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},wm=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Rm=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},zu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Cm=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let y=new Be,m=new I,p=new rn,S=new I(1,1,1),T=new tt(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&S.fromBufferAttribute(c.SCALE,E),T.setMatrixAt(E,y.compose(m,p,S));let v=null;for(let E in c)if(E==="_COLOR_0"){let A=c[E];T.instanceColor=new ji(A.array,A.itemSize,A.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(v===null){let R=T.geometry;v=new wt,v.name=R.name;for(let x in R.attributes)v.setAttribute(x,R.attributes[x]);for(let x in R.morphAttributes)v.morphAttributes[x]=R.morphAttributes[x];R.index!==null&&v.setIndex(R.index),v.morphTargetsRelative=R.morphTargetsRelative;for(let x of R.groups)v.addGroup(x.start,x.count,x.materialIndex);R.boundingBox!==null&&(v.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(v.boundingSphere=R.boundingSphere.clone()),v.drawRange.start=R.drawRange.start,v.drawRange.count=R.drawRange.count,v.userData=Object.assign({},R.userData),T.geometry=v}let A=c[E];v.setAttribute(E,new ji(A.array,A.itemSize,A.normalized))}He.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},uy="glTF",hc=12,ay={JSON:1313821514,BIN:5130562},Im=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,hc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-hc,r=new DataView(e,hc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===ay.JSON){let l=new Uint8Array(e,hc+o,a);this.content=n.decode(l)}else if(c===ay.BIN){let l=hc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Om[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Om[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Oo[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},a,l,fn,d)})})}},Pm=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lm=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Hu=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,S=1-m,T=p-d+u;for(let v=0;v!==a;v++){let E=o[y+v+a],A=o[y+v+c]*h,R=o[g+v+a],x=o[g+v]*h;r[v]=S*E+T*A+m*R+p*x}return r}},wR=new rn,Nm=class extends Hu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wR.fromArray(r).normalize().toArray(r),r}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cy={9728:Lt,9729:Nt,9984:Vh,9985:wo,9986:xr,9987:ci},ly={33071:kn,33648:co,10497:Ai},hm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Om={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RR={CUBICSPLINE:void 0,LINEAR:ar,STEP:or},um={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),i.DefaultMaterial}function Mr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IR(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function DR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PR(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dm(t.attributes):e=i.indices+":"+dm(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dm(i.targets[n]);return e}function dm(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Um(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function LR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var NR=new Be,Fm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Wa(this.options.manager):this.textureLoader=new Ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Mr(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=hm[s.type],a=Oo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Gt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=hm[s.type],l=Oo[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,T=t.cache.get(S);T||(y=new l(a,p*f,s.count*f/h),T=new mo(y,f/h),t.cache.add(S,T)),m=new go(T,c,d%f/h,g)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),m=new Gt(y,c,g);if(s.sparse!==void 0){let p=hm.SCALAR,S=Oo[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new S(o[1],T,s.sparse.count*p),A=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,x=E.length;R<x;R++){let b=E[R];if(m.setX(b,A[R*c]),c>=2&&m.setY(b,A[R*c+1]),c>=3&&m.setZ(b,A[R*c+2]),c>=4&&m.setW(b,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=cy[d.magFilter]||Nt,h.minFilter=cy[d.minFilter]||ci,h.wrapS=ly[d.wrapS]||Ai,h.wrapT=ly[d.wrapT]||Ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Nt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Zt(y);m.needsUpdate=!0,d(m)}),t.load(ss.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Pi(u,o),u.userData.mimeType=o.mimeType||LR(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new vo,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new yo,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Pe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=s[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||um.OPAQUE;if(h===um.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===um.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let u=r.emissiveFactor;a.emissive=new me().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(s,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return hy(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=PR(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=hy(new wt,l,t),l.mode===Vn.TRIANGLE_STRIP?d=d.then(f=>lm(f,oc)):l.mode===Vn.TRIANGLE_FAN&&(d=d.then(f=>lm(f,Io))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?CR(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=o[f],p,S=l[f];if(m.mode===Vn.TRIANGLES||m.mode===Vn.TRIANGLE_STRIP||m.mode===Vn.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");T&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&v?new Pa(y,S):new Ve(y,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Vn.LINES)p=new Na(y,S);else if(m.mode===Vn.LINE_STRIP)p=new hr(y,S);else if(m.mode===Vn.LINE_LOOP)p=new Oa(y,S);else if(m.mode===Vn.POINTS)p=new Ua(y,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&DR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&Mr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mr(s,u[0],r),u[0];let d=new Tt;r.extensions&&Mr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Ze.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Os(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new La(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let T=0,v=d.length;T<v;T++){let E=d[T],A=f[T],R=g[T],x=y[T],b=m[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,A,R,x,b);if(C)for(let N=0;N<C.length;N++)p.push(C[N])}let S=new dr(r,void 0,p);return Pi(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,NR)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new _o:l.length>1?h=new Tt:l.length===1?h=l[0]:h=new He,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Tt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Mr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Bu(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Mn||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}zs[r.path]===zs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(zs[r.path]){case zs.weights:h=ts;break;case zs.rotation:h=ns;break;case zs.translation:case zs.scale:h=Ls;break;default:switch(n.itemSize){case 1:h=ts;break;case 2:case 3:default:h=Ls;break}break}let u=s.interpolation!==void 0?RR[s.interpolation]:ar,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let y=new h(c[f]+"."+zs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Um(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ns?Nm:Hu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function OR(i,e,t){let n=e.attributes,s=new Pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=Um(Oo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=Um(Oo[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hy(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Om[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Xe.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Pi(i,e),OR(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?IR(i,e.targets,t):i})}var Bm=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),fi=i=>JSON.parse(JSON.stringify(i)),di=(i,e)=>{if(!Number.isFinite(i))throw new Error("06H invalid "+e);return i},Fo=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,fi(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?fi(t):null}has(e){return this.snapshots.has(e)}},Gu=class{constructor({id:e,store:t,actorStart:n,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...Bm,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:di(n.x,"actorStart.x"),z:di(n.z,"actorStart.z")},this.actorDestination={x:di(s.x,"actorDestination.x"),z:di(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,fi(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:n=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(n,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,fi(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:fi(this.state.memory),actor:fi(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",fi(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:fi(e.memory),actor:fi(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,fi(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),n=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=n,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*n,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*n}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(fi(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(di(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");di(e.memory.eventId,"snapshot.memory.eventId"),di(e.actor.progress,"snapshot.actor.progress"),di(e.actor.position?.x,"snapshot.actor.position.x"),di(e.actor.position?.z,"snapshot.actor.position.z"),di(e.actor.destination?.x,"snapshot.actor.destination.x"),di(e.actor.destination?.z,"snapshot.actor.destination.z")}};var Ce=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),uc=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),dy=(i,e)=>{if(!Number.isFinite(i))throw new Error("06I invalid "+e);return i},Bo=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:n=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...uc,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=n,this.onSleep=s,this.onWake=r,this.tier=Ce.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[Ce.NEAR]:0,[Ce.MID]:0,[Ce.FAR]:0,[Ce.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===Ce.NEAR?"FRAME":this.tier===Ce.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===Ce.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:n=Date.now()}={}){let s=dy(e,"distanceM"),r=Math.max(0,dy(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,n),this.tier===Ce.DORMANT)return 0;if(this.tier===Ce.NEAR)return this._tick(r,n),1;let a=this.tier===Ce.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,n),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let n=this.tier;if(n===Ce.DORMANT&&e!==Ce.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,n),this.onTierChange(e,n,t);return}if(n!==Ce.DORMANT&&e===Ce.DORMANT){this.onSleep(t,n,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,n,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,n,t)}_nextTier(e){let t=this.config;return this.tier===Ce.DORMANT?e>t.wakeRadiusM?Ce.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?Ce.DORMANT:this.tier===Ce.NEAR?e>t.nearExitM?Ce.MID:Ce.NEAR:this.tier===Ce.MID?e<=t.nearEnterM?Ce.NEAR:e>t.midExitM?Ce.FAR:Ce.MID:this.tier===Ce.FAR?e<=t.nearEnterM?Ce.NEAR:e<=t.midEnterM?Ce.MID:Ce.FAR:Ce.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?Ce.NEAR:e<=this.config.midEnterM?Ce.MID:Ce.FAR}};var UR=Object.freeze([10,20,40,64]),Sr=Object.freeze({warmupMs:4e3,measureMs:15e3,minMeasuredFrames:300,avgFrameMsMax:17.8,p95FrameMsMax:20.5,p99FrameMsMax:34,avgAuditCpuMsMax:2,p95AuditCpuMsMax:4,drawCallsMax:120,trianglesMax:35e4}),Hs=i=>JSON.parse(JSON.stringify(i));function fy(i,e){if(!Number.isInteger(i)||i<0||i>=192)throw new Error("06J invalid actor index");let t=Math.floor(i/48),n=i%48,s=n/48*Math.PI*2+t*.173,r=UR[t]+(n%5-2)*.28,o=s+Math.PI*.5,a={x:Math.cos(s)*r,z:Math.sin(s)*r},c={x:a.x+Math.cos(o)*(3.4+i%4*.35),z:a.z+Math.sin(o)*(3.4+i%4*.35)},l=i%4===0,h=i%17*.013;return{id:"06J_ACTOR_"+String(i).padStart(3,"0"),index:i,ring:t,localStart:a,localDestination:c,position:{...a},goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:h,winner:l?"HAZARD":"FOOD",memory:{state:l?"DISTURBED":"CALM",expiresAt:l?e+2e4+i%5*1e3:0},visualActive:!0,snapshot:null,sleepCount:0,wakeCount:0}}function Hm(i,e,t){if(!i)throw new Error("06J actor required");let n=Math.max(0,Number.isFinite(e)?e:0);i.memory.state!=="CALM"&&t>=i.memory.expiresAt&&(i.memory.state="CALM",i.memory.expiresAt=0),i.winner=i.memory.state==="DISTURBED"?"HAZARD":"FOOD",i.winner==="HAZARD"?i.goal!=="HAZARD"&&(i.goal==="FOOD"&&(i.suspendedGoal="FOOD"),i.goal="HAZARD",i.behaviorState="EVADING"):i.suspendedGoal==="FOOD"&&(i.goal="FOOD",i.suspendedGoal="NONE",i.behaviorState="SEEKING_FOOD"),i.goal==="FOOD"&&i.behaviorState==="SEEKING_FOOD"&&(i.progress=Math.min(1,i.progress+n/12e4),i.progress>=1&&(i.progress=1,i.goal="FOOD REACHED",i.behaviorState="COMPLETE"));let s=i.progress;return i.position.x=i.localStart.x+(i.localDestination.x-i.localStart.x)*s,i.position.z=i.localStart.z+(i.localDestination.z-i.localStart.z)*s,i}function py(i,e,t){return{version:e,cellId:i.id,serializedAt:t,state:{goal:i.goal,suspendedGoal:i.suspendedGoal,behaviorState:i.behaviorState,progress:i.progress,winner:i.winner,memory:Hs(i.memory),position:Hs(i.position),localStart:Hs(i.localStart),localDestination:Hs(i.localDestination)}}}function my(i,e,t){if(!e||e.cellId!==i.id)throw new Error("06J snapshot mismatch");let n=e.state;return i.goal=n.goal,i.suspendedGoal=n.suspendedGoal,i.behaviorState=n.behaviorState,i.progress=n.progress,i.winner=n.winner,i.memory=Hs(n.memory),i.position=Hs(n.position),i.localStart=Hs(n.localStart),i.localDestination=Hs(n.localDestination),Hm(i,0,t),Math.max(0,t-e.serializedAt)}function zm(i,e){if(!i.length)return 0;let t=[...i].sort((s,r)=>s-r),n=Math.min(t.length-1,Math.max(0,Math.ceil(e/100*t.length)-1));return t[n]}function gy({frameSamples:i=[],cpuSamples:e=[],drawCallsMax:t=0,trianglesMax:n=0,actorCount:s=0,duplicateCount:r=0,limits:o=Sr}={}){let a=p=>p.length?p.reduce((S,T)=>S+T,0)/p.length:0,c=a(i),l=zm(i,95),h=zm(i,99),u=i.length?Math.max(...i):0,d=a(e),f=zm(e,95),g=e.length?Math.max(...e):0,y={enough_frames:i.length>=o.minMeasuredFrames,avg_frame_ms:c<=o.avgFrameMsMax,p95_frame_ms:l<=o.p95FrameMsMax,p99_frame_ms:h<=o.p99FrameMsMax,avg_audit_cpu_ms:d<=o.avgAuditCpuMsMax,p95_audit_cpu_ms:f<=o.p95AuditCpuMsMax,draw_calls:t<=o.drawCallsMax,triangles:n<=o.trianglesMax,actor_count:s===192,duplicates:r===0},m=Object.entries(y).filter(([,p])=>!p).map(([p])=>p);return{pass:m.length===0,failed:m,checks:y,measured_frames:i.length,frame_avg_ms:c,frame_p95_ms:l,frame_p99_ms:h,frame_worst_ms:u,equivalent_fps:c>0?1e3/c:0,audit_cpu_avg_ms:d,audit_cpu_p95_ms:f,audit_cpu_worst_ms:g,draw_calls_max:t,triangles_max:n,actor_count:s,duplicate_count:r}}var ku=Object.freeze({memoryRadiusM:1.8,disturbedMs:2300,settlingMs:2800,hazardPriority:100,foodPriority:40}),Vu=i=>JSON.parse(JSON.stringify(i)),Gs=(i,e)=>{if(!Number.isFinite(i))throw new Error("07A invalid "+e);return i};function _y(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a;if(c<=1e-12)return Math.hypot(i-t,e-n);let l=Math.max(0,Math.min(1,((i-t)*o+(e-n)*a)/c)),h=t+o*l,u=n+a*l;return Math.hypot(i-h,e-u)}var dc=class{constructor(e=0){this.lastEventId=Math.max(0,Number.isFinite(e)?Math.floor(e):0)}next(e,{at:t=Date.now(),payload:n={}}={}){if(!e)throw new Error("07A event type required");return Gs(t,"event.at"),this.lastEventId++,Object.freeze({id:this.lastEventId,type:e,at:t,payload:Vu(n)})}observe(e){return!Number.isFinite(e)||e<=this.lastEventId?!1:(this.lastEventId=Math.floor(e),!0)}},Wu=class{constructor(e={}){if(this.config={...ku,...e},!(this.config.memoryRadiusM>0&&this.config.disturbedMs>0&&this.config.settlingMs>0))throw new Error("07A invalid memory config");this.state="CALM",this.eventId=0,this.startedAt=0,this.expiresAt=0,this.center={x:0,z:0}}applyEvent(e,{center:t,now:n=e?.at??Date.now()}={}){if(!e||!Number.isFinite(e.id))throw new Error("07A memory event id required");return e.id<=this.eventId?!1:(Gs(n,"memory now"),Gs(t?.x,"memory center.x"),Gs(t?.z,"memory center.z"),this.eventId=e.id,this.startedAt=n,this.expiresAt=n+this.config.disturbedMs+this.config.settlingMs,this.center={x:t.x,z:t.z},this.state="DISTURBED",!0)}resolve(e=Date.now()){return Gs(e,"memory resolve now"),this.state==="CALM"?this.state:(e>=this.expiresAt?this.state="CALM":e>=this.startedAt+this.config.disturbedMs?this.state="SETTLING":this.state="DISTURBED",this.state)}overlapsPoint(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:Math.hypot(e.x-this.center.x,e.z-this.center.z)<=this.config.memoryRadiusM}overlapsSegment(e,t=Date.now()){return this.resolve(t),this.state==="CALM"?!1:_y(this.center.x,this.center.z,e.a.x,e.a.z,e.b.x,e.b.z)<=this.config.memoryRadiusM}snapshot(){return{state:this.state,eventId:this.eventId,startedAt:this.startedAt,expiresAt:this.expiresAt,center:Vu(this.center),config:{memoryRadiusM:this.config.memoryRadiusM,disturbedMs:this.config.disturbedMs,settlingMs:this.config.settlingMs}}}restore(e,t=Date.now()){if(!e)throw new Error("07A memory snapshot required");return this.state=e.state,this.eventId=e.eventId,this.startedAt=e.startedAt,this.expiresAt=e.expiresAt,this.center=Vu(e.center),this.resolve(t),this.state}},Xu=class{constructor(e={}){this.priorities={HAZARD:ku.hazardPriority,FOOD:ku.foodPriority,...e}}choose(e=[]){let t=e.filter(n=>n&&n.valid!==!1).map(n=>({id:n.id,priority:Number.isFinite(n.priority)?n.priority:this.priorities[n.id]??0,eventAt:Number.isFinite(n.eventAt)?n.eventAt:0,payload:n.payload??null}));return t.sort((n,s)=>s.priority-n.priority||String(n.id).localeCompare(String(s.id))),t[0]??null}},qu=class{constructor({goal:e="FOOD",progress:t=0}={}){this.activeGoal=e,this.progress=Math.max(0,Math.min(1,t)),this.suspendedGoal=null,this.suspendedProgress=0,this.interruption=null,this.behaviorState=e==="FOOD"?"SEEKING_FOOD":"ACTIVE"}setProgress(e){this.progress=Math.max(0,Math.min(1,Gs(e,"goal progress"))),this.activeGoal==="FOOD"&&this.progress>=1&&(this.activeGoal="FOOD REACHED",this.behaviorState="COMPLETE")}advanceFood(e){return this.activeGoal!=="FOOD"||this.behaviorState!=="SEEKING_FOOD"?this.progress:(this.setProgress(this.progress+Math.max(0,Gs(e,"goal delta"))),this.progress)}interrupt(e="HAZARD"){return this.activeGoal===e?!1:(this.activeGoal==="FOOD"&&(this.suspendedGoal="FOOD",this.suspendedProgress=this.progress),this.interruption=e,this.activeGoal=e,this.behaviorState="EVADING",!0)}clearInterruption(){return this.interruption?(this.interruption=null,this.suspendedGoal?(this.activeGoal=this.suspendedGoal,this.progress=this.suspendedProgress,this.suspendedGoal=null,this.suspendedProgress=0,this.behaviorState=this.activeGoal==="FOOD"?"SEEKING_FOOD":"ACTIVE",!0):!1):!1}reconcile(e){return(e?.id??null)==="HAZARD"?this.interrupt("HAZARD"):this.interruption==="HAZARD"&&this.clearInterruption(),this.activeGoal}snapshot(){return{activeGoal:this.activeGoal,progress:this.progress,suspendedGoal:this.suspendedGoal,suspendedProgress:this.suspendedProgress,interruption:this.interruption,behaviorState:this.behaviorState}}restore(e){if(!e)throw new Error("07A goal snapshot required");Object.assign(this,Vu(e))}},ks=class{constructor({memoryConfig:e={},priorities:t={},initialGoal:n="FOOD",initialProgress:s=0}={}){this.events=new dc,this.memory=new Wu(e),this.arbiter=new Xu(t),this.goals=new qu({goal:n,progress:s}),this.lastWinner=null}createHazardEvent({center:e,at:t=Date.now(),payload:n={}}={}){let s=this.events.next("HAZARD",{at:t,payload:n});return this.memory.applyEvent(s,{center:e,now:t}),s}observeHazardEvent(e,{center:t,now:n=e?.at??Date.now()}={}){if(!e||e.type!=="HAZARD")throw new Error("07A HAZARD event required");return this.events.observe(e.id),this.memory.applyEvent(e,{center:t,now:n})}update({now:e=Date.now(),actorPath:t,foodValid:n=!0,foodEventAt:s=e,foodProgressDelta:r=0}={}){this.memory.resolve(e);let o=t?this.memory.overlapsSegment(t,e):this.memory.state!=="CALM",a=this.arbiter.choose([{id:"HAZARD",valid:o,eventAt:this.memory.startedAt},{id:"FOOD",valid:n,eventAt:s}]);return this.lastWinner=a?.id??null,this.goals.reconcile(a),this.goals.activeGoal==="FOOD"&&this.goals.advanceFood(r),{memoryState:this.memory.state,winner:this.lastWinner,goal:this.goals.activeGoal,suspendedGoal:this.goals.suspendedGoal,progress:this.goals.progress}}serialize(e=Date.now()){return Gs(e,"kernel serialize now"),{version:1,serializedAt:e,eventSequence:{lastEventId:this.events.lastEventId},memory:this.memory.snapshot(),goals:this.goals.snapshot(),lastWinner:this.lastWinner}}restore(e,t=Date.now()){if(!e||e.version!==1)throw new Error("07A kernel snapshot version mismatch");return this.events=new dc(e.eventSequence?.lastEventId??0),this.memory.restore(e.memory,t),this.goals.restore(e.goals),this.lastWinner=e.lastWinner??null,this.memory.state==="CALM"&&this.goals.interruption==="HAZARD"&&this.goals.clearInterruption(),{offscreenMs:Math.max(0,t-e.serializedAt),memoryState:this.memory.state,goal:this.goals.activeGoal,progress:this.goals.progress}}};var xy=Object.freeze({loadRadiusM:14,unloadRadiusM:22,disturbedMs:2300,settlingMs:2800,actorPreGoalTravelMs:6200,actorProgressCap:.34}),mi=i=>JSON.parse(JSON.stringify(i)),pi=(i,e)=>{if(!Number.isFinite(i))throw new Error("06H invalid "+e);return i},fc=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.cellId!==e)throw new Error("06H snapshot cell mismatch");if(t.version!==1)throw new Error("06H snapshot version mismatch");return this.snapshots.set(e,mi(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?mi(t):null}has(e){return this.snapshots.has(e)}},pc=class{constructor({id:e,store:t,actorStart:n,actorDestination:s,config:r={},initialEventId:o=0,attachVisual:a=()=>null,detachVisual:c=()=>{},updateVisual:l=()=>{}}){if(!e)throw new Error("06H StreamCell id required");if(!t)throw new Error("06H StreamCell store required");if(this.id=e,this.store=t,this.config={...xy,...r},this.config.loadRadiusM>=this.config.unloadRadiusM)throw new Error("06H hysteresis invalid");this.actorStart={x:pi(n.x,"actorStart.x"),z:pi(n.z,"actorStart.z")},this.actorDestination={x:pi(s.x,"actorDestination.x"),z:pi(s.z,"actorDestination.z")},this.attachVisual=a,this.detachVisual=c,this.updateVisual=l,this.lifecycle="UNLOADED",this.visualHandle=null,this.snapshotStatus="NONE",this.lastOffscreenMs=0,this.dormantSince=0,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.updateCount=0,this.memoryActivationCount=0,this.duplicateCount=0,this.lastTransition="BOOT",this.state={memory:{state:"CALM",startedAt:0,expiresAt:0,eventId:Number.isFinite(o)?o:0},actor:{goal:"FOOD",suspendedGoal:"NONE",behaviorState:"SEEKING_FOOD",progress:0,position:{...this.actorStart},destination:{...this.actorDestination}}}}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}load(e=Date.now()){if(this.isActive)return{rehydrated:!1,alreadyActive:!0};let t=this.store.load(this.id);return t?this.rehydrate(t,e):(this.lifecycle="REHYDRATING",this._attach(),this.lifecycle="ACTIVE",this.loadCount++,this.lastTransition="INITIAL_LOAD",this.updateVisual(this.visualHandle,mi(this.state),e),{rehydrated:!1,alreadyActive:!1})}update({dtMs:e=0,wallNow:t=Date.now(),eventId:n=this.state.memory.eventId}={}){return this.isActive?(this.updateCount++,this._observeMemoryEvent(n,t),this._resolveMemory(t),this._advanceActor(e),this.updateVisual(this.visualHandle,mi(this.state),t),!0):!1}serialize(e=Date.now()){return{version:1,cellId:this.id,serializedAt:e,memory:mi(this.state.memory),actor:mi(this.state.actor)}}unload(e=Date.now()){if(!this.isActive)return null;let t=this.serialize(e);return this.store.save(this.id,t),this.snapshotStatus="SAVED",this._detach(),this.lifecycle="UNLOADED",this.dormantSince=e,this.unloadCount++,this.lastTransition="UNLOADED",mi(t)}rehydrate(e,t=Date.now()){return this._validateSnapshot(e),this.lifecycle="REHYDRATING",this.state={memory:mi(e.memory),actor:mi(e.actor)},this.lastOffscreenMs=Math.max(0,t-e.serializedAt),this._resolveMemory(t),this._attach(),this.restoreCount++,this.loadCount++,this.lifecycle="ACTIVE",this.lastTransition="REHYDRATED",this.updateVisual(this.visualHandle,mi(this.state),t),{rehydrated:!0,offscreenMs:this.lastOffscreenMs}}offscreenMs(e=Date.now()){if(this.lifecycle==="UNLOADED"){let t=this.store.load(this.id);return t?Math.max(0,e-t.serializedAt):0}return this.lastOffscreenMs}_observeMemoryEvent(e,t){if(Number.isFinite(e)){if(e<this.state.memory.eventId){this.duplicateCount++;return}e!==this.state.memory.eventId&&(this.state.memory.eventId=e,this.state.memory.state="DISTURBED",this.state.memory.startedAt=t,this.state.memory.expiresAt=t+this.config.disturbedMs+this.config.settlingMs,this.memoryActivationCount++,this.lastTransition="MEMORY_DISTURBED")}}_resolveMemory(e){let t=this.state.memory;if(t.state!=="CALM"){if(e>=t.expiresAt){t.state="CALM";return}if(e>=t.startedAt+this.config.disturbedMs){t.state="SETTLING";return}t.state="DISTURBED"}}_advanceActor(e){if(this.state.actor.behaviorState!=="SEEKING_FOOD")return;let t=Math.max(0,Number.isFinite(e)?e:0),n=Math.min(this.config.actorProgressCap,this.state.actor.progress+t/this.config.actorPreGoalTravelMs);this.state.actor.progress=n,this.state.actor.position={x:this.actorStart.x+(this.actorDestination.x-this.actorStart.x)*n,z:this.actorStart.z+(this.actorDestination.z-this.actorStart.z)*n}}_attach(){if(this.visualHandle)throw new Error("06H duplicate visual attach");this.visualHandle=this.attachVisual(mi(this.state))}_detach(){this.visualHandle&&(this.detachVisual(this.visualHandle),this.visualHandle=null)}_validateSnapshot(e){if(!e||e.version!==1)throw new Error("06H invalid snapshot version");if(e.cellId!==this.id)throw new Error("06H invalid snapshot cell");if(pi(e.serializedAt,"snapshot.serializedAt"),!e.memory||!e.actor)throw new Error("06H incomplete snapshot");pi(e.memory.eventId,"snapshot.memory.eventId"),pi(e.actor.progress,"snapshot.actor.progress"),pi(e.actor.position?.x,"snapshot.actor.position.x"),pi(e.actor.position?.z,"snapshot.actor.position.z"),pi(e.actor.destination?.x,"snapshot.actor.destination.x"),pi(e.actor.destination?.z,"snapshot.actor.destination.z")}};var Qe=Object.freeze({NEAR:"NEAR",MID:"MID",FAR:"FAR",DORMANT:"DORMANT"}),vy=Object.freeze({nearEnterM:12,nearExitM:16,midEnterM:26,midExitM:30,sleepRadiusM:58,wakeRadiusM:50,midIntervalMs:100,farIntervalMs:500,maxCatchUpTicks:4}),yy=(i,e)=>{if(!Number.isFinite(i))throw new Error("06I invalid "+e);return i},mc=class{constructor({config:e={},onSimulate:t=()=>{},onTierChange:n=()=>{},onSleep:s=()=>{},onWake:r=()=>{}}={}){this.config={...vy,...e};let o=this.config;if(!(o.nearEnterM<o.nearExitM&&o.nearExitM<o.midEnterM&&o.midEnterM<o.midExitM&&o.midExitM<o.wakeRadiusM&&o.wakeRadiusM<o.sleepRadiusM))throw new Error("06I invalid LOD radii/hysteresis ordering");if(!(o.midIntervalMs>0&&o.farIntervalMs>o.midIntervalMs))throw new Error("06I invalid LOD cadence");this.onSimulate=t,this.onTierChange=n,this.onSleep=s,this.onWake=r,this.tier=Qe.NEAR,this.accumulatorMs=0,this.totalTicks=0,this.ticksByTier={[Qe.NEAR]:0,[Qe.MID]:0,[Qe.FAR]:0,[Qe.DORMANT]:0},this.transitionCount=0,this.sleepCount=0,this.wakeCount=0,this.lastDistanceM=0,this.lastTickWallMs=0}cadenceLabel(){return this.tier===Qe.NEAR?"FRAME":this.tier===Qe.MID?Math.round(1e3/this.config.midIntervalMs)+" Hz":this.tier===Qe.FAR?(1e3/this.config.farIntervalMs).toFixed(0)+" Hz":"SLEEPING"}step({distanceM:e,dtMs:t,wallNow:n=Date.now()}={}){let s=yy(e,"distanceM"),r=Math.max(0,yy(t,"dtMs"));this.lastDistanceM=s;let o=this._nextTier(s);if(o!==this.tier&&this._transition(o,n),this.tier===Qe.DORMANT)return 0;if(this.tier===Qe.NEAR)return this._tick(r,n),1;let a=this.tier===Qe.MID?this.config.midIntervalMs:this.config.farIntervalMs;this.accumulatorMs+=r;let c=0;for(;this.accumulatorMs>=a&&c<this.config.maxCatchUpTicks;)this.accumulatorMs-=a,this._tick(a,n),c++;return c}_tick(e,t){this.totalTicks++,this.ticksByTier[this.tier]++,this.lastTickWallMs=t,this.onSimulate(e,this.tier,t)}_transition(e,t){let n=this.tier;if(n===Qe.DORMANT&&e!==Qe.DORMANT){this.accumulatorMs=0,this.tier=e,this.wakeCount++,this.transitionCount++,this.onWake(t,e,n),this.onTierChange(e,n,t);return}if(n!==Qe.DORMANT&&e===Qe.DORMANT){this.onSleep(t,n,e),this.accumulatorMs=0,this.tier=e,this.sleepCount++,this.transitionCount++,this.onTierChange(e,n,t);return}this.accumulatorMs=0,this.tier=e,this.transitionCount++,this.onTierChange(e,n,t)}_nextTier(e){let t=this.config;return this.tier===Qe.DORMANT?e>t.wakeRadiusM?Qe.DORMANT:this._tierForWake(e):e>=t.sleepRadiusM?Qe.DORMANT:this.tier===Qe.NEAR?e>t.nearExitM?Qe.MID:Qe.NEAR:this.tier===Qe.MID?e<=t.nearEnterM?Qe.NEAR:e>t.midExitM?Qe.FAR:Qe.MID:this.tier===Qe.FAR?e<=t.nearEnterM?Qe.NEAR:e<=t.midEnterM?Qe.MID:Qe.FAR:Qe.NEAR}_tierForWake(e){return e<=this.config.nearEnterM?Qe.NEAR:e<=this.config.midEnterM?Qe.MID:Qe.FAR}};var Er=Object.freeze({version:1,milestone:"07A \u2014 Production Architecture Promotion",modules:["WorldEventSequence","TimedSpatialMemory","StimulusArbiter","GoalContinuity","LivingWorldKernel","StreamStateStore","StreamCell","SimulationLODController"],stateOwnership:{WorldEventSequence:"monotonic event identity only",TimedSpatialMemory:"local timed world-memory state + spatial applicability",StimulusArbiter:"stateless deterministic decision authority",GoalContinuity:"active/suspended goal + progress continuity",LivingWorldKernel:"orchestration order; no render ownership",StreamStateStore:"canonical serialized cell snapshots",StreamCell:"load/update/serialize/unload/rehydrate lifecycle",SimulationLODController:"distance tier + cadence + sleep/wake transitions"},boundaries:{rendering:"external adapter; no THREE dependency in production core",dom:"none",input:"external",combat:"unchanged / external",persistenceDisk:"not included",productionActorPipeline:"deferred to 07B",streamedProductionRegion:"deferred to 07C"}});var My=1,FR=i=>JSON.parse(JSON.stringify(i)),gi=(i,e)=>{if(!Number.isFinite(i))throw new Error("07B invalid "+e);return i};function BR(i){return Object.freeze({typeId:i.typeId,asset:Object.freeze({...i.asset}),scale:i.scale,yawOffset:i.yawOffset,animationMap:Object.freeze({...i.animationMap}),presentation:Object.freeze({...i.presentation})})}var Gm=class{constructor(){this.definitions=new Map}register(e){if(!e?.typeId)throw new Error("07B actor typeId required");if(this.definitions.has(e.typeId))throw new Error("07B duplicate actor definition "+e.typeId);if(!e.asset?.id||!e.asset?.url)throw new Error("07B actor asset id/url required");let t=gi(e.scale??1,"definition.scale"),n=gi(e.yawOffset??0,"definition.yawOffset"),s=BR({typeId:e.typeId,asset:{id:e.asset.id,url:e.asset.url},scale:t,yawOffset:n,animationMap:e.animationMap??{},presentation:e.presentation??{}});return this.definitions.set(s.typeId,s),s}get(e){let t=this.definitions.get(e);if(!t)throw new Error("07B unknown actor definition "+e);return t}has(e){return this.definitions.has(e)}list(){return[...this.definitions.values()]}},Yu=class{constructor({id:e,definition:t,kernel:n,position:s={x:0,y:0,z:0},yaw:r=0,animationIntent:o="IDLE"}){if(!e)throw new Error("07B actor id required");this.id=e,this.typeId=t.typeId,this.definition=t,this.kernel=n,this.position={x:gi(s.x??0,"actor.position.x"),y:gi(s.y??0,"actor.position.y"),z:gi(s.z??0,"actor.position.z")},this.yaw=gi(r,"actor.yaw"),this.animationIntent=o||"IDLE",this.bindingId=null,this.bindingClaims=0,this.createdAt=Date.now()}setTransform({x:e=this.position.x,y:t=this.position.y,z:n=this.position.z,yaw:s=this.yaw}={}){this.position={x:gi(e,"actor.position.x"),y:gi(t,"actor.position.y"),z:gi(n,"actor.position.z")},this.yaw=gi(s,"actor.yaw")}setAnimationIntent(e){if(!e)throw new Error("07B animation intent required");this.animationIntent=String(e)}claimBinding(e){if(!e)throw new Error("07B binding id required");if(this.bindingId&&this.bindingId!==e)throw new Error("07B duplicate visual binding for "+this.id);return this.bindingId?!1:(this.bindingId=e,this.bindingClaims++,!0)}releaseBinding(e){return this.bindingId!==e?!1:(this.bindingId=null,!0)}serialize(e=Date.now()){return gi(e,"actor serialize now"),{version:My,actorId:this.id,typeId:this.typeId,serializedAt:e,transform:{position:FR(this.position),yaw:this.yaw},animationIntent:this.animationIntent,kernel:this.kernel.serialize(e)}}},Zu=class{constructor({kernelFactory:e=t=>new ks(t)}={}){this.definitions=new Gm,this.actors=new Map,this.kernelFactory=e,this.createdCount=0,this.destroyedCount=0}registerDefinition(e){return this.definitions.register(e)}createActor({id:e,typeId:t,position:n={x:0,y:0,z:0},yaw:s=0,animationIntent:r="IDLE",kernelOptions:o={}}){if(this.actors.has(e))throw new Error("07B duplicate actor id "+e);let a=this.definitions.get(t),c=this.kernelFactory(o),l=new Yu({id:e,definition:a,kernel:c,position:n,yaw:s,animationIntent:r});return this.actors.set(e,l),this.createdCount++,l}restoreActor(e,t=Date.now()){if(!e||e.version!==My)throw new Error("07B actor snapshot version mismatch");if(this.actors.has(e.actorId))throw new Error("07B restore collision "+e.actorId);let n=this.definitions.get(e.typeId),s=this.kernelFactory();s.restore(e.kernel,t);let r=new Yu({id:e.actorId,definition:n,kernel:s,position:e.transform.position,yaw:e.transform.yaw,animationIntent:e.animationIntent});return this.actors.set(r.id,r),this.createdCount++,r}destroyActor(e){let t=this.actors.get(e);if(!t)return!1;if(t.bindingId)throw new Error("07B actor must release visual binding before destroy "+e);return this.actors.delete(e),this.destroyedCount++,!0}getActor(e){return this.actors.get(e)??null}listActors(){return[...this.actors.values()]}get size(){return this.actors.size}};var zR=0,km=class{constructor({loader:e=new Uo}={}){this.loader=e,this.entries=new Map,this.loadCount=0,this.instanceCount=0}async load(e){let t=e.asset,n=this.entries.get(t.id);if(n){if(n.url!==t.url)throw new Error("07B asset id/url conflict "+t.id);return n.promise}this.loadCount++;let s=this.loader.loadAsync(t.url).then(r=>({gltf:r,template:r.scene,clips:[...r.animations]}));return this.entries.set(t.id,{url:t.url,promise:s}),s}async instantiate(e){let t=await this.load(e),n=Bu(t.template);return this.instanceCount++,{model:n,clips:t.clips}}get assetCount(){return this.entries.size}},Vm=class{constructor({record:e,definition:t,scene:n,assetCache:s}){if(!e||!t||!n||!s)throw new Error("07B binding dependencies required");this.record=e,this.definition=t,this.scene=n,this.assetCache=s,this.bindingId="07B_BINDING_"+ ++zR,this.root=new Tt,this.root.userData.productionActorId=e.id,this.root.userData.productionActorType=e.typeId,this.model=null,this.mixer=null,this.actions=new Map,this.activeAction=null,this.resolvedAnimation="NONE",this.attached=!1,this.ready=!1}async attach(){if(this.attached)return this;this.record.claimBinding(this.bindingId);let{model:e,clips:t}=await this.assetCache.instantiate(this.definition);this.model=e,this.model.scale.setScalar(this.definition.scale),this.model.rotation.y=this.definition.yawOffset,this.model.traverse(n=>{n.isMesh&&(n.castShadow=!!this.definition.presentation.castShadow,n.receiveShadow=this.definition.presentation.receiveShadow!==!1)}),this.root.add(this.model),this.mixer=new mr(this.model);for(let n of t)this.actions.set(n.name,this.mixer.clipAction(n));return this.scene.add(this.root),this.attached=!0,this.ready=!0,this.syncTransform(),this.setAnimationIntent(this.record.animationIntent,0),this}resolveAnimation(e){let t=this.definition.animationMap[e]??e;if(this.actions.has(t))return t;let n={IDLE:["Idle","idle"],WALK:["Walk","Walking","walk"],RUN:["Run","Running","run"]}[e]??[];for(let r of n)if(this.actions.has(r))return r;let s=this.actions.keys().next();return s.done?null:s.value}setAnimationIntent(e,t=.12){if(this.record.setAnimationIntent(e),!this.ready||!this.mixer)return null;let n=this.resolveAnimation(e);if(!n)return null;let s=this.actions.get(n);return s!==this.activeAction&&(s.reset().play(),this.activeAction&&t>0?this.activeAction.crossFadeTo(s,t,!0):this.activeAction&&this.activeAction.stop(),this.activeAction=s),this.resolvedAnimation=n,n}syncTransform(){let e=this.record.position;this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.record.yaw}update(e){this.ready&&(this.syncTransform(),this.mixer&&this.mixer.update(Math.max(0,Number.isFinite(e)?e:0)))}detach(){return this.attached?(this.mixer&&(this.mixer.stopAllAction(),this.model&&this.mixer.uncacheRoot(this.model)),this.scene.remove(this.root),this.root.clear(),this.record.releaseBinding(this.bindingId),this.attached=!1,this.ready=!1,this.model=null,this.mixer=null,this.actions.clear(),this.activeAction=null,!0):!1}},Ju=class{constructor({scene:e,assetCache:t=new km}={}){if(!e)throw new Error("07B Three actor factory requires scene");this.scene=e,this.assetCache=t,this.bindings=new Map,this.duplicateBindingCount=0}async bind(e){if(this.bindings.has(e.id))throw this.duplicateBindingCount++,new Error("07B duplicate actor binding "+e.id);let t=new Vm({record:e,definition:e.definition,scene:this.scene,assetCache:this.assetCache});return await t.attach(),this.bindings.set(e.id,t),t}unbind(e){let t=this.bindings.get(e);return t?(t.detach(),this.bindings.delete(e),!0):!1}update(e){for(let t of this.bindings.values())t.update(e)}getBinding(e){return this.bindings.get(e)??null}get size(){return this.bindings.size}};var Ku=i=>JSON.parse(JSON.stringify(i)),zo=(i,e)=>{if(!Number.isFinite(i))throw new Error("07C invalid "+e);return i},Ar=class{constructor(){this.snapshots=new Map}save(e,t){if(!e||t?.regionId!==e)throw new Error("07C region snapshot mismatch");if(t.version!==1)throw new Error("07C region snapshot version mismatch");return this.snapshots.set(e,Ku(t)),this.load(e)}load(e){let t=this.snapshots.get(e);return t?Ku(t):null}has(e){return this.snapshots.has(e)}},Ho=class{constructor({id:e,pipeline:t,store:n=new Ar,actorBlueprints:s=[],bindActor:r=async()=>{},unbindActor:o=async()=>{},loadRadiusM:a=24,unloadRadiusM:c=38}={}){if(!e)throw new Error("07C region id required");if(!t)throw new Error("07C production actor pipeline required");if(!Array.isArray(s)||s.length===0)throw new Error("07C actor blueprints required");if(!(a>0&&c>a))throw new Error("07C region hysteresis invalid");let l=new Set;for(let h of s){if(!h?.id||!h?.typeId)throw new Error("07C invalid actor blueprint");if(l.has(h.id))throw new Error("07C duplicate actor blueprint "+h.id);l.add(h.id)}this.id=e,this.pipeline=t,this.store=n,this.actorBlueprints=Ku(s),this.bindActor=r,this.unbindActor=o,this.loadRadiusM=zo(a,"loadRadiusM"),this.unloadRadiusM=zo(c,"unloadRadiusM"),this.lifecycle="UNLOADED",this.operation=null,this.loadCount=0,this.unloadCount=0,this.restoreCount=0,this.duplicateCount=0,this.lastSerializedAt=0,this.lastOffscreenMs=0,this.lastRestoreProgressPreserved=!1,this.lastRestoreIdsStable=!1,this.lastError=null}get isActive(){return this.lifecycle==="ACTIVE"}get hasSnapshot(){return this.store.has(this.id)}get actorIds(){return this.actorBlueprints.map(e=>e.id)}get activeActors(){return this.actorIds.map(e=>this.pipeline.getActor(e)).filter(Boolean)}desiredLifecycle(e){let t=zo(e,"distanceM");return this.lifecycle==="ACTIVE"?t>=this.unloadRadiusM?"UNLOADED":"ACTIVE":this.lifecycle==="UNLOADED"?t<=this.loadRadiusM?"ACTIVE":"UNLOADED":this.lifecycle}serialize(e=Date.now()){zo(e,"serialize now");let t=this.actorIds.map(n=>{let s=this.pipeline.getActor(n);if(!s)throw new Error("07C cannot serialize missing actor "+n);return s.serialize(e)});return{version:1,regionId:this.id,serializedAt:e,actorIds:[...this.actorIds],actors:t}}async load(e=Date.now()){return this.isActive?{rehydrated:!1,alreadyActive:!0,offscreenMs:0}:this.operation?this.operation:(this.operation=this._load(e).finally(()=>{this.operation=null}),this.operation)}async _load(e){this.lastError=null;let t=this.store.load(this.id);this.lifecycle=t?"REHYDRATING":"LOADING";let n=[],s=[],r=new Map;try{if(t){if(t.version!==1||t.regionId!==this.id)throw new Error("07C invalid region snapshot");if(t.actorIds.join("|")!==this.actorIds.join("|"))throw new Error("07C region actor identity mismatch");for(let o of t.actors){r.set(o.actorId,o.kernel?.goals?.progress);let a=this.pipeline.restoreActor(o,e);n.push(a)}}else for(let o of this.actorBlueprints){let a=this.pipeline.createActor(o);n.push(a)}for(let o of n)await this.bindActor(o),s.push(o);return this.lifecycle="ACTIVE",this.loadCount++,t&&(this.restoreCount++,this.lastOffscreenMs=Math.max(0,e-t.serializedAt),this.lastRestoreIdsStable=n.length===this.actorIds.length&&n.every((o,a)=>o.id===this.actorIds[a]),this.lastRestoreProgressPreserved=n.every(o=>{let a=r.get(o.id);return Number.isFinite(a)&&Math.abs(o.kernel.goals.progress-a)<1e-12})),{rehydrated:!!t,alreadyActive:!1,offscreenMs:this.lastOffscreenMs,actorIds:n.map(o=>o.id)}}catch(o){this.lastError=o;for(let a of s.slice().reverse())try{await this.unbindActor(a)}catch{}for(let a of n.slice().reverse()){if(a.bindingId){this.duplicateCount++;continue}this.pipeline.destroyActor(a.id)}throw this.lifecycle="UNLOADED",o}}async unload(e=Date.now()){return this.isActive?this.operation?this.operation:(this.operation=this._unload(e).finally(()=>{this.operation=null}),this.operation):null}async _unload(e){this.lastError=null,this.lifecycle="SERIALIZING";let t=this.serialize(e);this.store.save(this.id,t),this.lastSerializedAt=e,this.lifecycle="UNLOADING";try{for(let n of this.actorIds){let s=this.pipeline.getActor(n);if(!s)throw new Error("07C missing actor during unload "+n);await this.unbindActor(s)}for(let n of this.actorIds){let s=this.pipeline.getActor(n);if(!s)throw new Error("07C actor disappeared before destroy "+n);if(s.bindingId)throw this.duplicateCount++,new Error("07C actor still bound during destroy "+n);this.pipeline.destroyActor(n)}return this.lifecycle="UNLOADED",this.unloadCount++,Ku(t)}catch(n){throw this.lastError=n,n}}update({dtMs:e=0,now:t=Date.now(),foodProgressPerSecond:n=.008}={}){if(!this.isActive)return 0;let r=Math.max(0,zo(e,"dtMs"))/1e3*Math.max(0,zo(n,"foodProgressPerSecond")),o=0;for(let a of this.activeActors)a.kernel.update({now:t,foodValid:!0,foodEventAt:t,foodProgressDelta:r}),o++;return o}};var $u=(i,e)=>{if(!Number.isFinite(i))throw new Error("07D invalid "+e);return i},ju=class{constructor({region:e,pipeline:t,actorId:n,hazardCenter:s={x:0,z:0},triggerDelayMs:r=1800}={}){if(!e)throw new Error("07D region required");if(!t)throw new Error("07D actor pipeline required");if(!n)throw new Error("07D actor id required");this.region=e,this.pipeline=t,this.actorId=n,this.hazardCenter={x:$u(s.x,"hazardCenter.x"),z:$u(s.z,"hazardCenter.z")},this.triggerDelayMs=Math.max(0,$u(r,"triggerDelayMs")),this.stage="WAITING_REGION",this.firstActiveAt=0,this.hazardEventId=0,this.hazardEmittedAt=0,this.hazardObserved=!1,this.recoveryObserved=!1,this.streamOutObserved=!1,this.restoreObserved=!1,this.baselineProgress=null,this.recoveredProgress=null,this.lastUnloadCount=e.unloadCount??0,this.lastRestoreCount=e.restoreCount??0}get actor(){return this.pipeline.getActor(this.actorId)}update(e=Date.now()){$u(e,"update now"),(this.region.unloadCount??0)>this.lastUnloadCount&&(this.streamOutObserved=!0,this.lastUnloadCount=this.region.unloadCount),(this.region.restoreCount??0)>this.lastRestoreCount&&(this.restoreObserved=!0,this.lastRestoreCount=this.region.restoreCount);let t=this.actor;if(!this.region.isActive||!t)return this.streamOutObserved&&(this.stage="STREAMED_OUT"),this.snapshot();if(this.firstActiveAt||(this.firstActiveAt=e,this.stage="FOOD_ACTIVE"),!this.hazardEventId&&e-this.firstActiveAt>=this.triggerDelayMs){this.baselineProgress=t.kernel.goals.progress;let r=t.kernel.createHazardEvent({center:this.hazardCenter,at:e});this.hazardEventId=r.id,this.hazardEmittedAt=e,this.stage="HAZARD_EMITTED"}let n=t.kernel.memory.state,s=t.kernel.goals.activeGoal;return this.hazardEventId&&s==="HAZARD"&&(this.hazardObserved=!0,this.stage="HAZARD_ACTIVE"),this.hazardObserved&&n==="CALM"&&s==="FOOD"&&(this.recoveryObserved=!0,this.recoveredProgress=t.kernel.goals.progress,this.stage=this.restoreObserved?"RESTORED":"BEHAVIOR_RECOVERED"),this.restoreObserved&&this.recoveryObserved&&(this.stage="RESTORED"),this.snapshot()}completion({assetLoadCount:e,duplicateCount:t=0,regressionStatus:n="WAITING"}={}){let s=Number.isFinite(this.baselineProgress)&&Number.isFinite(this.recoveredProgress)&&this.recoveredProgress>=this.baselineProgress-1e-12,r={hazard_emitted:this.hazardEventId>0,hazard_observed:this.hazardObserved,recovery_observed:this.recoveryObserved,progress_preserved:s,stream_out_observed:this.streamOutObserved,restore_observed:this.restoreObserved,region_ids_stable:this.region.lastRestoreIdsStable===!0,region_progress_preserved:this.region.lastRestoreProgressPreserved===!0,asset_load_one:e===1,duplicates:t===0,regression:n==="PASS"},o=Object.entries(r).filter(([,a])=>!a).map(([a])=>a);return{pass:o.length===0,failed:o,checks:r}}snapshot(){return{version:1,stage:this.stage,actorId:this.actorId,hazardEventId:this.hazardEventId,hazardEmittedAt:this.hazardEmittedAt,hazardObserved:this.hazardObserved,recoveryObserved:this.recoveryObserved,streamOutObserved:this.streamOutObserved,restoreObserved:this.restoreObserved,baselineProgress:this.baselineProgress,recoveredProgress:this.recoveredProgress}}};var Qu=(i,e)=>{if(!Number.isFinite(i))throw new Error("08A invalid "+e);return i},Wm=class{constructor({id:e,center:t,region:n}={}){if(!e||!n)throw new Error("08A region entry requires id + region");this.id=e,this.center={x:Qu(t?.x,"center.x"),z:Qu(t?.z,"center.z")},this.region=n,this.lastDistance=1/0,this.transitions=0,this.loads=0,this.unloads=0,this.lastAction="NONE"}},ed=class{constructor({entries:e=[]}={}){this.entries=new Map,this.stepCount=0,this.duplicateRegionIds=0;for(let t of e)this.register(t)}register({id:e,center:t,region:n}){if(this.entries.has(e))throw this.duplicateRegionIds++,new Error("08A duplicate region id "+e);let s=new Wm({id:e,center:t,region:n});return this.entries.set(e,s),s}get(e){return this.entries.get(e)??null}list(){return[...this.entries.values()]}get size(){return this.entries.size}distances(e){return this.list().map(t=>({id:t.id,distance:Math.hypot(Qu(e?.x,"player.x")-t.center.x,Qu(e?.z,"player.z")-t.center.z)}))}nearest(e){return this.distances(e).sort((n,s)=>n.distance-s.distance||n.id.localeCompare(s.id))[0]??null}async step({playerPosition:e,dtMs:t=0,now:n=Date.now(),foodProgressPerSecond:s=.006}={}){this.stepCount++;let r=[];for(let o of this.list()){let a=Math.hypot(e.x-o.center.x,e.z-o.center.z);o.lastDistance=a;let c=o.region;if(!c.operation){if(c.lifecycle==="UNLOADED"&&a<=c.loadRadiusM){let l=c.loadCount,h=await c.load(n);c.loadCount>l&&(o.loads++,o.transitions++,o.lastAction=h.rehydrated?"REHYDRATE":"LOAD",r.push({regionId:o.id,action:o.lastAction}))}else if(c.lifecycle==="ACTIVE"&&a>=c.unloadRadiusM){let l=c.unloadCount;await c.unload(n),c.unloadCount>l&&(o.unloads++,o.transitions++,o.lastAction="UNLOAD",r.push({regionId:o.id,action:"UNLOAD"}))}}c.isActive&&c.update({dtMs:t,now:n,foodProgressPerSecond:s})}return r}snapshot(){return{version:1,regions:this.list().map(e=>({id:e.id,center:{...e.center},lifecycle:e.region.lifecycle,hasSnapshot:e.region.hasSnapshot,lastDistance:e.lastDistance,loads:e.loads,unloads:e.unloads,transitions:e.transitions}))}}};var Xt=i=>document.getElementById(i),xv=Xt("boot"),Ad=Xt("error"),GR=Xt("fps"),kR=Xt("calls"),VR=Xt("tris"),mg=Xt("char"),yv=Xt("scale"),WR=Xt("zone");addEventListener("error",i=>{Ad.style.display="block",Ad.textContent=`Runtime error:
`+i.message});addEventListener("unhandledrejection",i=>{Ad.style.display="block",Ad.textContent=`Load/runtime error:
`+(i.reason?.message||i.reason||"Unknown rejection")});var ta=matchMedia("(pointer:coarse)").matches,Xm=1831565813;function gt(){return Xm=Xm*1664525+1013904223>>>0,Xm/4294967296}function qg(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)}function vv(i=96){let e=new Uint8Array(i*i*4);for(let n=0;n<i;n++)for(let s=0;s<i;s++){let r=(n*i+s)*4,o=Math.floor(255*(.36+.64*qg(s*.31,n*.37)));e[r]=e[r+1]=e[r+2]=o,e[r+3]=255}let t=new Cs(e,i,i,pn);return t.wrapS=t.wrapT=Ai,t.colorSpace=ui,t.needsUpdate=!0,t}var zr=vv();zr.repeat.set(26,26);var Mv=vv(64);Mv.repeat.set(18,36);var Le=new Ca;Le.fog=new Ra(12045264,.0057);var cs=new zt(53,innerWidth/innerHeight,.1,800);cs.position.set(0,6,10);var st=new Ou({antialias:!0,powerPreference:"high-performance"}),Ni=Math.min(devicePixelRatio,ta?1.32:1.8),XR=ta?1:1.25,qR=Math.min(devicePixelRatio,ta?1.42:1.9);st.setPixelRatio(Ni);st.setSize(innerWidth,innerHeight);st.outputColorSpace=Pt;st.toneMapping=ja;st.toneMappingExposure=1.05;st.shadowMap.enabled=!0;st.shadowMap.type=Hh;document.body.prepend(st.domElement);yv.textContent=Ni.toFixed(2)+"\xD7";var Sv=new Xa(14282751,5069125,1.85);Le.add(Sv);var Ev=new Za(9545908,.18);Le.add(Ev);var Wt=new pr(16773072,3.35);Wt.position.set(-46,58,18);Wt.castShadow=!0;Wt.shadow.mapSize.set(ta?1024:1536,ta?1024:1536);Wt.shadow.camera.left=-46;Wt.shadow.camera.right=46;Wt.shadow.camera.top=46;Wt.shadow.camera.bottom=-46;Wt.shadow.camera.near=1;Wt.shadow.camera.far=155;Wt.shadow.bias=-18e-5;Wt.shadow.normalBias=.025;Le.add(Wt,Wt.target);var Ws={top:{value:new me(6203856)},mid:{value:new me(12572628)},bottom:{value:new me(15785404)},sunDir:{value:new I(-.5,.8,.25)},sunWarm:{value:new me(16766874)}},YR=new on({side:$t,depthWrite:!1,uniforms:Ws,vertexShader:"varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bottom,sunDir,sunWarm;varying vec3 vW;void main(){vec3 d=normalize(vW);float h=clamp(d.y*.5+.5,0.,1.);vec3 c=mix(bottom,mid,smoothstep(0.,.5,h));c=mix(c,top,smoothstep(.38,1.,h));float a=max(dot(d,normalize(sunDir)),0.);float disc=pow(a,520.);float halo=pow(a,18.)*.28;float horizon=pow(1.-abs(d.y),5.)*.045;c+=sunWarm*(disc*2.8+halo+horizon);gl_FragColor=vec4(c,1.);}"});Le.add(new Ve(new Sn(390,40,20),YR));function ps(i){return-18+Math.sin(i*.048)*4.2+Math.sin(i*.013)*2.2}function gn(i,e){let t=Math.sin(i*.029)*3+Math.cos(e*.032)*2.4+Math.sin((i+e)*.021)*1.65,n=Math.sin(i*.093+e*.032)*.5+Math.cos(e*.108-i*.025)*.38,s=i-ps(e),r=-Math.exp(-(s*s)/54)*5.2,o=Math.exp(-((i-46)*(i-46)+(e+54)*(e+54))/920)*7,a=Math.exp(-((i+50)*(i+50)+(e+42)*(e+42))/1600)*3;return t+n+r+o+a}function ZR(i,e){let n=(gn(i+.45,e)-gn(i-.45,e))/.9,s=(gn(i,e+.45)-gn(i,e-.45))/(2*.45);return Math.min(1,Math.hypot(n,s))}var Qt={cx:0,cz:4,w:18,d:5,top:0};Qt.cx=ps(Qt.cz);Qt.top=Math.max(gn(Qt.cx-10,Qt.cz),gn(Qt.cx+10,Qt.cz))+.72;function Yg(i,e){return Math.abs(i-Qt.cx)<Qt.w*.5&&Math.abs(e-Qt.cz)<Qt.d*.5}function ct(i,e){return Yg(i,e)?Qt.top:gn(i,e)}function JR(i,e){return Math.abs(i-ps(e))<5.8&&!Yg(i,e)}function KR(i,e,t){let n=new me,s=ZR(e,t),r=Math.exp(-Math.pow((e-ps(t))/11,2)),o=qg(e*.9,t*.9);return s>.55?n.setRGB(.31,.34,.31):i<-1.4?n.setRGB(.26,.38,.25):i<1?n.setRGB(.38,.52,.29):i<4.4?n.setRGB(.43,.58,.31):n.setRGB(.35,.49,.28),n.offsetHSL((o-.5)*.012,(r-.5)*.035,(o-.5)*.055),n.lerp(new me(.38,.36,.3),Math.max(0,s-.32)*.48),n}var Sl=new oi(240,240,170,170);Sl.rotateX(-Math.PI/2);var td=Sl.attributes.position,Av=[];for(let i=0;i<td.count;i++){let e=td.getX(i),t=td.getZ(i),n=gn(e,t);td.setY(i,n);let s=KR(n,e,t);Av.push(s.r,s.g,s.b)}Sl.setAttribute("color",new Ye(Av,3));Sl.computeVertexNormals();var $R=new Pe({vertexColors:!0,roughness:.92,bumpMap:zr,bumpScale:.2}),bv=new Ve(Sl,$R);bv.receiveShadow=!0;Le.add(bv);var gg=new za([new I(5,0,60),new I(-2,0,41),new I(-12,0,22),new I(Qt.cx,0,Qt.cz),new I(-3,0,-13),new I(18,0,-31),new I(36,0,-44),new I(47,0,-55)]),Tv=[],wv=[],Rv=[],_g=112;for(let i=0;i<=_g;i++){let e=i/_g,t=gg.getPoint(e),n=gg.getPoint(Math.min(1,e+.0025)),s=n.clone().sub(t).normalize(),r=new I(-s.z,0,s.x),o=2.45+Math.sin(i*.41)*.18;for(let a=0;a<2;a++){let c=a?1:-1,l=t.clone().addScaledVector(r,o*c);l.y=ct(l.x,l.z)+.07,Tv.push(l.x,l.y,l.z),Rv.push(a,e*8)}}for(let i=0;i<_g;i++){let e=i*2,t=e+1,n=e+2,s=e+3;wv.push(e,n,t,t,n,s)}var El=new wt;El.setAttribute("position",new Ye(Tv,3));El.setAttribute("uv",new Ye(Rv,2));El.setIndex(wv);El.computeVertexNormals();var jR=new Pe({color:9795412,roughness:.96,bumpMap:Mv,bumpScale:.18}),Cv=new Ve(El,jR);Cv.receiveShadow=!0;Le.add(Cv);var Iv=[],Dv=[],Pv=[],Uc=128;for(let i=0;i<=Uc;i++){let e=-110+i*(220/Uc),t=ps(e),n=5.55;Iv.push(t-n,-2.3,e,t+n,-2.3,e),Pv.push(0,i/Uc*14,1,i/Uc*14)}for(let i=0;i<Uc;i++){let e=i*2,t=e+1,n=e+2,s=e+3;Dv.push(e,n,t,t,n,s)}var Al=new wt;Al.setAttribute("position",new Ye(Iv,3));Al.setAttribute("uv",new Ye(Pv,2));Al.setIndex(Dv);Al.computeVertexNormals();var bd={time:{value:0},sunDir:{value:new I(-.5,.8,.2)},deep:{value:new me(1987175)},shallow:{value:new me(7649730)},sky:{value:new me(12572628)}},QR=new on({transparent:!0,depthWrite:!1,uniforms:bd,vertexShader:"uniform float time;varying vec3 vW;varying vec2 vUv;void main(){vec3 p=position;float w=sin((p.x+time*2.3)*.48)*.065+cos((p.z-time*1.6)*.34)*.050+sin((p.x+p.z+time)*.17)*.025;p.y+=w;vUv=uv;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}",fragmentShader:"uniform float time;uniform vec3 deep,shallow,sunDir,sky;varying vec3 vW;varying vec2 vUv;void main(){float dx=.065*.48*cos((vW.x+time*2.3)*.48)+.025*.17*cos((vW.x+vW.z+time)*.17);float dz=-.050*.34*sin((vW.z-time*1.6)*.34)+.025*.17*cos((vW.x+vW.z+time)*.17);vec3 N=normalize(vec3(-dx,1.,-dz));vec3 V=normalize(cameraPosition-vW);float fres=pow(1.-max(dot(N,V),0.),2.8);vec3 R=reflect(-normalize(sunDir),N);float glint=pow(max(dot(R,V),0.),90.)*.9;float edge=min(vUv.x,1.-vUv.x);float foam=(1.-smoothstep(.02,.105,edge))*(.45+.35*sin(vUv.y*5.+time*2.));vec3 c=mix(deep,shallow,.48+N.x*.65);c=mix(c,sky,fres*.48);c+=vec3(1.,.82,.52)*glint;c=mix(c,vec3(.90,.96,.93),foam*.62);gl_FragColor=vec4(c,.88);}"});Le.add(new Ve(Al,QR));var Zg=[],nf=(i,e,t,n=7)=>Zg.push({x:i,z:e,r:t,h:n});function ca(i,e){i.onBeforeCompile=t=>{t.uniforms.uTime={value:0},t.uniforms.uWind={value:.48},i.userData.shader=t,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sw=sin(uTime*1.42+(instanceMatrix[3].x+instanceMatrix[3].z)*.052+position.y*.78)*uWind*${e.toFixed(3)};transformed.x+=sw*max(position.y,0.);`)},i.customProgramCacheKey=()=>`wind-${e}`}var e1=new Pe({color:5912356,roughness:1,bumpMap:zr,bumpScale:.08}),Jg=new Pe({color:2843447,roughness:.86}),Kg=new Pe({color:3766343,roughness:.84}),$g=new Pe({color:5079632,roughness:.84});ca(Jg,.018);ca(Kg,.022);ca($g,.025);var bl=238,Lv=new Ds(.29,.48,5.4,8);Lv.translate(0,2.7,0);var t1=new ur(1.55,1),Nv=new ur(1.18,1),Td=new tt(Lv,e1,bl),jg=new tt(t1,Jg,bl),Qg=new tt(Nv,Kg,bl),e0=new tt(Nv,$g,bl);Td.castShadow=Td.receiveShadow=!0;jg.castShadow=Qg.castShadow=e0.castShadow=!0;var it=new He,nd=0,n1=0;for(;nd<bl&&n1++<5e3;){let i=(gt()-.5)*224,e=(gt()-.5)*224;if(Math.abs(i-ps(e))<9.2||Math.hypot(i-5,e-60)<10||Math.hypot(i-38,e+45)<14)continue;let t=gn(i,e),n=.72+gt()*1.12,s=gt()*Math.PI*2;it.position.set(i,t,e),it.rotation.set(0,s,0),it.scale.set(n,n,n),it.updateMatrix(),Td.setMatrixAt(nd,it.matrix);let r=t+5.15*n;for(let[o,a,c,l,h]of[[jg,0,0,0,1],[Qg,.75,.18,.05,.86],[e0,-.62,.42,-.18,.78]]){let u=Math.cos(s),d=Math.sin(s),f=a*u-l*d,g=a*d+l*u;it.position.set(i+f*n,r+c*n,e+g*n),it.rotation.set(0,s+gt()*.5,0),it.scale.set(n*h*(.9+gt()*.18),n*h*(.9+gt()*.16),n*h*(.9+gt()*.18)),it.updateMatrix(),o.setMatrixAt(nd,it.matrix)}nf(i,e,.5*n,7*n),nd++}Le.add(Td,jg,Qg,e0);var t0=new Pe({color:4684355,roughness:.9});ca(t0,.03);var i1=new ri(.72,0),Ov=260,n0=new tt(i1,t0,Ov);for(let i=0;i<Ov;i++){let e=(gt()-.5)*214,t=(gt()-.5)*214;if(Math.abs(e-ps(t))<7)continue;let n=gn(e,t),s=.45+gt()*.95;it.position.set(e,n+.35*s,t),it.rotation.set(0,gt()*6.28,0),it.scale.set(s*1.35,s*.75,s),it.updateMatrix(),n0.setMatrixAt(i,it.matrix)}n0.castShadow=!0;Le.add(n0);var i0=new Pe({color:6590018,roughness:1,side:Ct});ca(i0,.06);var Uv=new si(.052,.62,3);Uv.translate(0,.31,0);var Fv=2600,Bv=new tt(Uv,i0,Fv);for(let i=0;i<Fv;i++){let e=(gt()-.5)*220,t=(gt()-.5)*220;if(Math.abs(e-ps(t))<6.3)continue;let n=gn(e,t),s=.45+gt()*1.15;it.position.set(e,n,t),it.rotation.set(0,gt()*6.28,0),it.scale.set(s,s,s),it.updateMatrix(),Bv.setMatrixAt(i,it.matrix)}Le.add(Bv);var s0=new Pe({color:15785392,roughness:.78,emissive:1905671,emissiveIntensity:.15});ca(s0,.025);var s1=new Sn(.065,5,4),zv=310,Hv=new tt(s1,s0,zv);for(let i=0;i<zv;i++){let e=gt(),t=gg.getPoint(e),n=t.x+(gt()-.5)*14,s=t.z+(gt()-.5)*14,r=gn(n,s);it.position.set(n,r+.18,s);let o=.65+gt()*.8;it.scale.setScalar(o),it.updateMatrix(),Hv.setMatrixAt(i,it.matrix)}Le.add(Hv);function r1(i){let e=new ur(1,1),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n),a=.78+.3*qg(n*.37+i*11,n*.73+i*7);t.setXYZ(n,s*a,r*a,o*a)}return e.computeVertexNormals(),e}var o1=new Pe({color:7699320,roughness:.93,bumpMap:zr,bumpScale:.12}),Gv=120,a1=[0,1,2].map(i=>{let e=new tt(r1(i),o1,Math.ceil(Gv/3));return e.castShadow=e.receiveShadow=!0,Le.add(e),e}),c1=[0,0,0];for(let i=0;i<Gv;i++){let e=(gt()-.5)*215,t=(gt()-.5)*215,n=gn(e,t),s=.22+gt()*1.25,r=i%3,o=c1[r]++;it.position.set(e,n+.12,t),it.rotation.set(gt()*.23,gt()*6.28,gt()*.2),it.scale.set(s*1.45,s*.72,s),it.updateMatrix(),a1[r].setMatrixAt(o,it.matrix),s>.62&&nf(e,t,.78*s,1.4*s)}var l1=new Pe({color:6846579,roughness:1,flatShading:!0}),h1=new Pe({color:8556682,roughness:1,flatShading:!0}),kv=new si(15,36,7,1),wd=28,Vv=new tt(kv,l1,wd),Wv=new tt(kv,h1,wd);for(let i=0;i<wd;i++){let e=i/wd*Math.PI*2,t=145+Math.sin(i*2.17)*15,n=Math.cos(e)*t,s=Math.sin(e)*t,r=.68+i*13%11/18;it.position.set(n,7+Math.sin(i)*3,s),it.rotation.set(0,-e+gt()*.35,0),it.scale.set(r*(.8+gt()*.35),r,r*(.8+gt()*.35)),it.updateMatrix(),(i%2?Vv:Wv).setMatrixAt(i,it.matrix)}Le.add(Vv,Wv);var Xv=new Pe({color:7754036,roughness:.9,bumpMap:zr,bumpScale:.08}),sf=new Tt;sf.position.set(Qt.cx,Qt.top,Qt.cz);Le.add(sf);for(let i=0;i<11;i++){let e=new Ve(new Qi(1.66,.18,4),Xv);e.position.set(-8.1+i*1.62,0,0),e.rotation.y=(i%3-1)*.008,e.castShadow=e.receiveShadow=!0,sf.add(e)}for(let i of[-1,1])for(let e of[-1,1]){let t=new Ve(new Ds(.12,.17,2.45,7),Xv);t.position.set(i*8,1.12,e*1.72),t.castShadow=!0,sf.add(t)}var rf=new Tt,Rd=36,Cd=-44;rf.position.set(Rd,gn(Rd,Cd),Cd);Le.add(rf);var qv=new Pe({color:9538946,roughness:.91,bumpMap:zr,bumpScale:.13});function Tl(i,e,t,n,s,r,o=0){let a=new Ve(new Qi(n,s,r),qv);a.position.set(i,e,t),a.rotation.y=o,a.castShadow=a.receiveShadow=!0,rf.add(a),nf(Rd+i,Cd+t,Math.max(n,r)*.42,s)}Tl(0,2.8,0,7.8,5.6,1.7,.07);Tl(-4.9,4,.2,1.7,8,1.7,.07);Tl(4.9,4,.2,1.7,8,1.7,.07);Tl(0,7.15,.2,11.2,1,1.6,.07);Tl(0,9.35,0,1.3,4.6,1.3);var wl=new Ve(new Ga(3.55,.3,8,26),qv);wl.position.set(0,10.8,0);wl.rotation.x=Math.PI/2.35;wl.rotation.z=.34;wl.castShadow=!0;rf.add(wl);var of=48,af=-59,u1=gn(of,af),Rl=new Tt;Rl.position.set(of,u1,af);Le.add(Rl);var d1=new Pe({color:7696228,roughness:.9,bumpMap:zr,bumpScale:.1}),f1=new Pe({color:16767117,emissive:16758861,emissiveIntensity:2.3}),r0=new Ve(new Ds(.6,.85,7.5,9),d1);r0.position.y=3.75;r0.castShadow=!0;Rl.add(r0);var o0=new Ve(new Sn(.55,14,10),f1);o0.position.y=7.8;Rl.add(o0);var a0=new fr(16759130,5.5,18,2);a0.position.y=7.8;Rl.add(a0);nf(of,af,1,8);var ie=new Tt;Le.add(ie);ie.position.set(5,ct(5,60),60);var os=null,Id=null,wn={},id=null,Yv="FALLBACK";function p1(){let i=new Tt,e=new Pe({color:2775929,roughness:.72}),t=new Pe({color:14263676,roughness:.78}),n=new Pe({color:3156259,roughness:.92}),s=new Ve(new Mo(.32,.74,4,8),e);s.position.y=1.18,i.add(s);let r=new Ve(new Sn(.28,12,8),t);r.position.y=1.86,i.add(r);for(let o of[-1,1]){let a=new Ve(new Mo(.085,.45,3,6),n);a.position.set(.145*o,.52,0),i.add(a)}i.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),ie.add(i),os=i,mg.textContent="FALLBACK"}p1();xv.classList.add("hide");setTimeout(()=>xv.remove(),320);var m1=new Uo;m1.load("./assets/Soldier.glb",i=>{os&&ie.remove(os),os=i.scene,os.scale.setScalar(1),os.rotation.y=Math.PI,os.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),ie.add(os),Id=new mr(os),wn={};for(let e of i.animations)wn[e.name]=Id.clipAction(e);Yv="GLB",mg.textContent="GLB",fd(wn.Idle?"Idle":Object.keys(wn)[0],0)},void 0,i=>{console.warn("Local GLB failed; fallback remains active",i),mg.textContent="FALLBACK"});function fd(i,e=.16){if(!wn[i]||id===wn[i])return;let t=wn[i];t.reset().play(),id&&id.crossFadeTo(t,e,!0),id=t}var wr=.08,Yc=.3,Zc=7.8,cf=!1,xg=0,yg=0,c0=!1,Dd=!1,gc=0,br=!0,Cr={},Jc=new Oe,Wn=new I;addEventListener("keydown",i=>{Cr[i.code]=!0,i.code==="Space"&&(Dd=!0)});addEventListener("keyup",i=>Cr[i.code]=!1);st.domElement.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&i.clientX<innerWidth*.36&&i.clientY>innerHeight*.52||i.pointerType==="touch"&&i.clientX>innerWidth*.68&&i.clientY>innerHeight*.54||(cf=!0,xg=i.clientX,yg=i.clientY,st.domElement.setPointerCapture(i.pointerId))});st.domElement.addEventListener("pointerup",()=>cf=!1);st.domElement.addEventListener("pointercancel",()=>cf=!1);st.domElement.addEventListener("pointermove",i=>{if(!cf)return;let e=i.clientX-xg,t=i.clientY-yg;wr-=e*.006,Yc=Ze.clamp(Yc+t*.0047,-.05,.9),xg=i.clientX,yg=i.clientY});st.domElement.addEventListener("wheel",i=>Zc=Ze.clamp(Zc+i.deltaY*.008,4.8,14),{passive:!0});var na=Xt("stick"),Zv=Xt("knob"),Pd=Xt("sprint"),Ld=Xt("jump"),Zo=null;function Jv(i){let e=na.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2,s=e.width*.34,r=i.clientX-t,o=i.clientY-n,a=Math.hypot(r,o)||1,c=Math.min(1,s/a);r*=c,o*=c,Zv.style.transform=`translate(${r}px,${o}px)`,Jc.set(r/s,-o/s)}na.addEventListener("pointerdown",i=>{i.preventDefault(),Zo=i.pointerId,na.setPointerCapture(Zo),Jv(i)});na.addEventListener("pointermove",i=>{i.pointerId===Zo&&(i.preventDefault(),Jv(i))});function Kv(i){(Zo===null||i.pointerId===Zo)&&(Zo=null,Jc.set(0,0),Zv.style.transform="translate(0,0)")}na.addEventListener("pointerup",Kv);na.addEventListener("pointercancel",Kv);Pd.addEventListener("pointerdown",i=>{i.preventDefault(),c0=!0,Pd.style.transform="scale(.94)"});for(let i of["pointerup","pointercancel","pointerleave"])Pd.addEventListener(i,()=>{c0=!1,Pd.style.transform="scale(1)"});Ld.addEventListener("pointerdown",i=>{i.preventDefault(),Dd=!0,Ld.style.transform="scale(.93)"});for(let i of["pointerup","pointercancel","pointerleave"])Ld.addEventListener(i,()=>Ld.style.transform="scale(1)");var g1=Xt("panel");Xt("tuneBtn").onclick=()=>g1.classList.toggle("open");var _1=Xt("tod"),x1=Xt("fog"),y1=Xt("wind"),v1=Xt("damp");Xt("shadowBtn").onclick=i=>{st.shadowMap.enabled=!st.shadowMap.enabled,i.target.textContent="Dynamic shadows: "+(st.shadowMap.enabled?"ON":"OFF")};var M1=new me(6203856),S1=new me(6582157),E1=new me(12572628),A1=new me(12818319),b1=new me(15785404),T1=new me(15769969);function w1(){let i=+_1.value,e=(i-6)/14,t=.1+e*Math.PI*.91,n=Math.max(.04,Math.sin(t)),s=-1.65+e*1.55;Wt.position.set(Math.cos(s)*78,n*90,Math.sin(s)*78),Wt.intensity=.88+n*3.5;let r=Wt.position.clone().normalize();Ws.sunDir.value.copy(r),bd.sunDir.value.copy(r);let o=Ze.smoothstep(Math.abs(i-13),3,7);Ws.top.value.copy(M1).lerp(S1,o),Ws.mid.value.copy(E1).lerp(A1,o*.82),Ws.bottom.value.copy(b1).lerp(T1,o),bd.sky.value.copy(Ws.mid.value),Wt.color.setRGB(1,.94-.12*o,.81-.17*o),Sv.intensity=.9+n*1.42,Ev.intensity=.16+n*.21,Le.fog.density=.0022+ +x1.value*.0082,Le.fog.color.copy(Ws.mid.value).lerp(Ws.bottom.value,.42),st.toneMappingExposure=.84+n*.31}function R1(i){for(let e of Zg){let t=i.x-e.x,n=i.z-e.z,s=Math.hypot(t,n),r=e.r+.36;if(s<r&&s>1e-4){let o=r-s;i.x+=t/s*o,i.z+=n/s*o}}}function C1(i,e){let t=e.clone(),n=e.clone().sub(i),s=13;for(let r=1;r<=s;r++){let o=r/s,a=i.clone().addScaledVector(n,o),c=ct(a.x,a.z)+.66;if(a.y<c){t=i.clone().addScaledVector(n,Math.max(.14,(r-1)/s));break}for(let l of Zg)if(Math.hypot(a.x-l.x,a.z-l.z)<l.r+.26&&a.y<ct(l.x,l.z)+l.h)return i.clone().addScaledVector(n,Math.max(.14,(r-1)/s))}return t}function I1(i,e){return Math.hypot(i-of,e-af)<10?"OVERLOOK BEACON":Math.hypot(i-Rd,e-Cd)<16?"RUINED OBSERVATORY":Yg(i,e)?"OLD RIVER BRIDGE":Math.abs(i-ps(e))<9?"RIVER VALLEY":e<2?"HIGHLAND TRAIL":"FOREST APPROACH"}var Sy=new Ka,qm=0,sd=0,rd=0,Ym=0;function $v(){requestAnimationFrame($v);let i=Math.min(.033,Sy.getDelta()),e=Sy.elapsedTime;w1();let t=new I(-Math.sin(wr),0,-Math.cos(wr)),n=new I(Math.cos(wr),0,-Math.sin(wr)),s=new I;Cr.KeyW&&s.add(t),Cr.KeyS&&s.sub(t),Cr.KeyD&&s.add(n),Cr.KeyA&&s.sub(n),Jc.lengthSq()>.002&&(s.addScaledVector(t,Jc.y),s.addScaledVector(n,Jc.x));let r=(Cr.ShiftLeft||c0)&&s.lengthSq()>.01,o=JR(ie.position.x,ie.position.z)&&ct(ie.position.x,ie.position.z)<-1.1,a=(r?8.7:4.8)*(o?.58:1);if(s.lengthSq()>0){s.normalize();let g=s.multiplyScalar(a),y=1-Math.exp(-(br?12:5)*i);Wn.x=Ze.lerp(Wn.x,g.x,y),Wn.z=Ze.lerp(Wn.z,g.z,y)}else{let g=Math.exp(-(br?10:2.5)*i);Wn.x*=g,Wn.z*=g}Dd&&br&&(gc=7.7,br=!1),Dd=!1,gc-=18.6*i,ie.position.x+=Wn.x*i,ie.position.z+=Wn.z*i,ie.position.x=Ze.clamp(ie.position.x,-112,112),ie.position.z=Ze.clamp(ie.position.z,-112,112),R1(ie.position);let c=ct(ie.position.x,ie.position.z);ie.position.y+=gc*i,ie.position.y<=c?(ie.position.y=c,gc<0&&(gc=0),br=!0):br=!1;let l=Math.hypot(Wn.x,Wn.z);if(l>.18){let y=(Math.atan2(Wn.x,Wn.z)-ie.rotation.y+Math.PI)%(Math.PI*2)-Math.PI;ie.rotation.y+=y*(1-Math.exp(-14*i))}Yv==="GLB"&&br&&(l<.22?fd(wn.Idle?"Idle":Object.keys(wn)[0]):l<6?fd(wn.Walk?"Walk":wn.Run?"Run":Object.keys(wn)[0]):fd(wn.Run?"Run":Object.keys(wn)[0])),Id&&Id.update(i*(r?1.08:1));let h=ie.position.clone().add(new I(0,1.42,0)),u=h.clone().add(new I(Math.sin(wr)*Math.cos(Yc)*Zc,Math.sin(Yc)*Zc+1,Math.cos(wr)*Math.cos(Yc)*Zc));u=C1(h,u);let d=1-Math.pow(1-+v1.value,i*60);cs.position.lerp(u,d),cs.lookAt(h),cs.fov=Ze.lerp(cs.fov,r?60:53,1-Math.exp(-5*i)),cs.updateProjectionMatrix(),Wt.target.position.copy(ie.position),Wt.target.updateMatrixWorld(),bd.time.value=e;let f=+y1.value;for(let g of[Jg,Kg,$g,t0,i0,s0])g.userData.shader&&(g.userData.shader.uniforms.uTime.value=e,g.userData.shader.uniforms.uWind.value=f);if(o0.position.y=7.8+Math.sin(e*1.5)*.1,a0.intensity=5+Math.sin(e*2.1)*.6,WR.textContent=I1(ie.position.x,ie.position.z),globalThis.__raaiFrameHooks)for(let g of globalThis.__raaiFrameHooks)g(performance.now(),i);if(st.render(Le,cs),qm++,sd+=i,Ym++,rd+=i,sd>.55){let g=Math.round(qm/sd);GR.textContent=g,qm=0,sd=0,kR.textContent=st.info.render.calls,VR.textContent=st.info.render.triangles.toLocaleString()}if(ta&&rd>1.8){let g=Ym/rd,y=Ni;g<53.5?y=Math.max(XR,Ni-.08):g>58.7&&(y=Math.min(qR,Ni+.04)),Math.abs(y-Ni)>.001&&(Ni=y,st.setPixelRatio(Ni),st.setSize(innerWidth,innerHeight,!1),yv.textContent=Ni.toFixed(2)+"\xD7"),rd=0,Ym=0}}$v();addEventListener("resize",()=>{cs.aspect=innerWidth/innerHeight,cs.updateProjectionMatrix(),st.setPixelRatio(Ni),st.setSize(innerWidth,innerHeight)});var D1="06A_LIVING_WORLD_FLOCK",hn={count:12,triggerRadius:7,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400},jv=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,Nd=ie.position.x+Math.sin(jv)*8,Od=ie.position.z+Math.cos(jv)*8,P1=ct(Nd,Od)+.18,L1=new Sn(.12,7,5),Qv=new oi(.26,.1),N1=new Pe({color:2634039,roughness:.78,metalness:.03}),eM=new Pe({color:6714746,roughness:.82,side:Ct}),Cl=new tt(L1,N1,hn.count),Il=new tt(Qv,eM,hn.count),Dl=new tt(Qv,eM,hn.count);Cl.castShadow=!0;Il.castShadow=!0;Dl.castShadow=!0;Le.add(Cl,Il,Dl);var vg=[];for(let i=0;i<hn.count;i++){let e=i/hn.count*Math.PI*2+i*37%11*.041,t=1+i*53%7*.18,n=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(i%3-1)*.22;vg.push({px:n,pz:s,ex:n+Math.cos(r)*(5+i%4*.72),ez:s+Math.sin(r)*(5+i%4*.72),rise:2.8+i%5*.42,phase:i*.83,yaw:r})}var Hi="CALM",Ud=performance.now(),Fc=0,l0=0,_c=new He,xc=new He,yc=new He,Zm=document.getElementById("worldState"),Ey=document.getElementById("worldDistance"),Kc=document.getElementById("worldResult");function O1(i){return 1-Math.pow(1-i,3)}function U1(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function tM(){return Math.hypot(ie.position.x-Nd,ie.position.z-Od)}function vc(i,e){Hi=i,Ud=e,Fc=0,Zm&&(Zm.textContent=i,Zm.style.color=i==="CALM"?"#a8f0b5":i==="FLEEING"?"#ffd18a":i==="DISPERSED"?"#ffb095":"#b9d9ff")}function F1(i){Ey&&(Ey.textContent=i.toFixed(1)+" m"),Kc&&l0===0&&(Kc.textContent=i<=hn.triggerRadius?"TRIGGERING":"APPROACH")}function B1(i,e,t){let n=Nd+i.px,s=Od+i.pz,r=ct(n,s)+.22,o=Nd+i.ex,a=Od+i.ez,c=P1+i.rise,l=n,h=r,u=s,d=i.yaw,f=0,g=t-Ud;if(Hi==="CALM")h+=Math.sin(t*.0021+i.phase)*.022,d=i.phase*.37+Math.sin(t*7e-4+i.phase)*.18;else if(Hi==="FLEEING"){let S=Math.min(1,g/hn.fleeMs),T=O1(S);l=Ze.lerp(n,o,T),u=Ze.lerp(s,a,T),h=Ze.lerp(r,c,T)+Math.sin(S*Math.PI)*.75,f=1}else if(Hi==="DISPERSED"){let S=t*.0014+i.phase;l=o+Math.cos(S)*.45,u=a+Math.sin(S)*.45,h=c+Math.sin(S*1.8)*.18,d=S+Math.PI/2,f=1}else if(Hi==="RETURNING"){let S=Math.min(1,g/hn.returnMs),T=U1(S);l=Ze.lerp(o,n,T),u=Ze.lerp(a,s,T),h=Ze.lerp(c,r,T)+Math.sin(S*Math.PI)*.92,d=i.yaw+Math.PI,f=1}let y=f?Math.sin(t*.02+i.phase)*.72:Math.sin(t*.006+i.phase)*.08;_c.position.set(l,h,u),_c.rotation.set(0,d,0),_c.scale.set(.88,.58,1.45),_c.updateMatrix(),Cl.setMatrixAt(e,_c.matrix);let m=Math.cos(d),p=-Math.sin(d);xc.position.set(l+m*.13,h+.015,u+p*.13),xc.rotation.set(-Math.PI/2,d,y),xc.scale.set(1,1,1),xc.updateMatrix(),Il.setMatrixAt(e,xc.matrix),yc.position.set(l-m*.13,h+.015,u-p*.13),yc.rotation.set(-Math.PI/2,d,-y),yc.scale.set(1,1,1),yc.updateMatrix(),Dl.setMatrixAt(e,yc.matrix)}function z1(i){let e=tM();F1(e),Hi==="CALM"&&e<=hn.triggerRadius?(l0++,vc("FLEEING",i),Kc&&(Kc.textContent="RESPONDED \u2713",Kc.style.color="#ffd18a")):Hi==="FLEEING"&&i-Ud>=hn.fleeMs?vc("DISPERSED",i):Hi==="DISPERSED"?e>hn.resetRadius?(Fc||(Fc=i),i-Fc>=hn.farHoldMs&&vc("RETURNING",i)):Fc=0:Hi==="RETURNING"&&(e<=hn.triggerRadius?vc("FLEEING",i):i-Ud>=hn.returnMs&&vc("CALM",i));for(let t=0;t<vg.length;t++)B1(vg[t],t,i);Cl.instanceMatrix.needsUpdate=!0,Il.instanceMatrix.needsUpdate=!0,Dl.instanceMatrix.needsUpdate=!0}function nM(i){requestAnimationFrame(nM),z1(i)}requestAnimationFrame(nM);globalThis.__livingWorld06A={marker:D1,get state(){return Hi},get responses(){return l0},get distance(){return tM()},triggerRadius:hn.triggerRadius,resetRadius:hn.resetRadius};var H1="06B_WORLD_DISTURBANCE_PROPAGATION",Vi={secondaryCount:10,disturbanceSpeed:18,fleeMs:1250,returnMs:1350,farHoldMs:1200},Fd=globalThis.__livingWorld06A;if(!Fd||Fd.marker!=="06A_LIVING_WORLD_FLOCK")throw new Error("06B requires accepted 06A public world-state API");Cl.frustumCulled=!1;Il.frustumCulled=!1;Dl.frustumCulled=!1;var lf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,iM=ie.position.x,sM=ie.position.z,rM=Math.sin(lf),oM=Math.cos(lf),G1=Math.cos(lf),k1=-Math.sin(lf),V1=iM+rM*8,W1=sM+oM*8,cl=iM+rM*15.5+G1*4.5,ll=sM+oM*15.5+k1*4.5,X1=ct(cl,ll)+.18,q1=Math.hypot(cl-V1,ll-W1),Mg=q1/Vi.disturbanceSpeed*1e3,Y1=new Sn(.12,7,5),aM=new oi(.26,.1),Z1=new Pe({color:3425613,roughness:.78,metalness:.03}),cM=new Pe({color:8823208,roughness:.82,side:Ct}),Pl=new tt(Y1,Z1,Vi.secondaryCount),Ll=new tt(aM,cM,Vi.secondaryCount),Nl=new tt(aM,cM,Vi.secondaryCount);Pl.castShadow=!0;Ll.castShadow=!0;Nl.castShadow=!0;Pl.frustumCulled=!1;Ll.frustumCulled=!1;Nl.frustumCulled=!1;Le.add(Pl,Ll,Nl);var Sg=[];for(let i=0;i<Vi.secondaryCount;i++){let e=i/Vi.secondaryCount*Math.PI*2+i*29%9*.047,t=.85+i*41%6*.19,n=Math.cos(e)*t,s=Math.sin(e)*t,r=e+(i%3-1)*.18+.12;Sg.push({px:n,pz:s,ex:n+Math.cos(r)*(4.7+i%4*.66),ez:s+Math.sin(r)*(4.7+i%4*.66),rise:2.5+i%4*.46,phase:i*.91,yaw:r})}var Mc=new He,Sc=new He,Ec=new He,Un="CALM",Bd=performance.now(),lM=0,Ay=Fd.state,Bc=null,Eg=0,Jm=document.getElementById("worldBState"),Km=document.getElementById("worldLinkState"),by=document.getElementById("worldLinkDelay"),Ty=document.getElementById("worldBDistance");function J1(i){return 1-Math.pow(1-i,3)}function K1(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function hM(){return Math.hypot(ie.position.x-cl,ie.position.z-ll)}function Go(i,e){Un=i,Bd=e,Jm&&(Jm.textContent=i,Jm.style.color=i==="CALM"?"#a8f0b5":i==="ALERT_DELAY"?"#ffe59a":i==="FLEEING"?"#ffd18a":i==="DISPERSED"?"#ffb095":"#b9d9ff")}function pd(i,e="#a8f0b5"){Km&&(Km.textContent=i,Km.style.color=e)}function $1(i){Eg++,Bc={emittedAt:i,arrivalAt:i+Mg,id:Eg},(Un==="CALM"||Un==="RETURNING")&&Go("ALERT_DELAY",i),pd("TRAVELING","#ffe59a"),by&&(by.textContent=Math.round(Mg)+" ms")}function j1(i,e,t){let n=cl+i.px,s=ll+i.pz,r=ct(n,s)+.22,o=cl+i.ex,a=ll+i.ez,c=X1+i.rise,l=n,h=r,u=s,d=i.yaw,f=0,g=t-Bd;if(Un==="CALM"||Un==="ALERT_DELAY")h+=Math.sin(t*.002+i.phase)*.021,d=i.phase*.34+Math.sin(t*72e-5+i.phase)*.16,Un==="ALERT_DELAY"&&(h+=Math.sin(t*.014+i.phase)*.025);else if(Un==="FLEEING"){let S=Math.min(1,g/Vi.fleeMs),T=J1(S);l=Ze.lerp(n,o,T),u=Ze.lerp(s,a,T),h=Ze.lerp(r,c,T)+Math.sin(S*Math.PI)*.68,f=1}else if(Un==="DISPERSED"){let S=t*.00135+i.phase;l=o+Math.cos(S)*.4,u=a+Math.sin(S)*.4,h=c+Math.sin(S*1.75)*.16,d=S+Math.PI/2,f=1}else if(Un==="RETURNING"){let S=Math.min(1,g/Vi.returnMs),T=K1(S);l=Ze.lerp(o,n,T),u=Ze.lerp(a,s,T),h=Ze.lerp(c,r,T)+Math.sin(S*Math.PI)*.78,d=i.yaw+Math.PI,f=1}let y=f?Math.sin(t*.0205+i.phase)*.72:Math.sin(t*.006+i.phase)*.08;Mc.position.set(l,h,u),Mc.rotation.set(0,d,0),Mc.scale.set(.88,.58,1.45),Mc.updateMatrix(),Pl.setMatrixAt(e,Mc.matrix);let m=Math.cos(d),p=-Math.sin(d);Sc.position.set(l+m*.13,h+.015,u+p*.13),Sc.rotation.set(-Math.PI/2,d,y),Sc.scale.set(1,1,1),Sc.updateMatrix(),Ll.setMatrixAt(e,Sc.matrix),Ec.position.set(l-m*.13,h+.015,u-p*.13),Ec.rotation.set(-Math.PI/2,d,-y),Ec.scale.set(1,1,1),Ec.updateMatrix(),Nl.setMatrixAt(e,Ec.matrix)}function Q1(i){let e=Fd.state,t=hM();Ty&&(Ty.textContent=t.toFixed(1)+" m"),e==="FLEEING"&&Ay!=="FLEEING"&&$1(i),Ay=e,Bc&&i>=Bc.arrivalAt&&(Bc=null,lM++,Go("FLEEING",i),pd("ARRIVED \u2713","#ffd18a")),Un==="FLEEING"&&i-Bd>=Vi.fleeMs?Go("DISPERSED",i):Un==="DISPERSED"&&(e==="RETURNING"||e==="CALM")?(Go("RETURNING",i),pd("RESETTING","#b9d9ff")):Un==="RETURNING"&&(Bc?Go("ALERT_DELAY",i):i-Bd>=Vi.returnMs&&(Go("CALM",i),pd("IDLE")));for(let n=0;n<Sg.length;n++)j1(Sg[n],n,i);Pl.instanceMatrix.needsUpdate=!0,Ll.instanceMatrix.needsUpdate=!0,Nl.instanceMatrix.needsUpdate=!0}function uM(i){requestAnimationFrame(uM),Q1(i)}requestAnimationFrame(uM);globalThis.__livingWorld06B={marker:H1,get secondaryState(){return Un},get secondaryResponses(){return lM},get disturbanceEvents(){return Eg},get disturbanceTravelMs(){return Mg},get playerDistanceToSecondary(){return hM()},directPlayerTrigger:!1,source:"06A primary flock state transition"};var eC="06C_LOCAL_DISTURBANCE_MEMORY",Ks={reedCount:28,disturbedMs:2300,settlingMs:2800,directPlayerTrigger:!1},zd=globalThis.__livingWorld06B;if(!zd||zd.marker!=="06B_WORLD_DISTURBANCE_PROPAGATION")throw new Error("06C requires frozen accepted 06B public world-state API");var hf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,dM=ie.position.x,fM=ie.position.z,pM=Math.sin(hf),mM=Math.cos(hf),gM=Math.cos(hf),_M=-Math.sin(hf),tC=dM+pM*15.5+gM*4.5,nC=fM+mM*15.5+_M*4.5,wy=dM+pM*15.7+gM*6.2,Ry=fM+mM*15.7+_M*6.2,xM=new oi(.18,1.55,1,3);xM.translate(0,.775,0);var iC=new Pe({color:9411157,roughness:.96,metalness:0,side:Ct}),ia=new tt(xM,iC,Ks.reedCount);ia.castShadow=!0;ia.receiveShadow=!0;ia.frustumCulled=!1;Le.add(ia);var Ag=[];for(let i=0;i<Ks.reedCount;i++){let e=i*2.399963229728653,t=.35+i%7*.115,n=Math.cos(e)*t,s=Math.sin(e)*t*.72,r=.76+i*17%9*.035,o=i*.83%Math.PI;Ag.push({px:n,pz:s,scaleY:r,yaw:o,phase:i*.71})}var sa="CALM",Hd=performance.now(),yM=0,Cy=zd.secondaryState,hl=0,Ac=new He,$m=document.getElementById("worldMemoryState"),jm=document.getElementById("worldMemoryAge"),$c=document.getElementById("worldMemoryResult");function bg(i,e){sa=i,Hd=e,$m&&($m.textContent=i,$m.style.color=i==="CALM"?"#a8f0b5":i==="DISTURBED"?"#ffd18a":"#b9d9ff")}function sC(i){yM++,hl=i,bg("DISTURBED",i),$c&&($c.textContent="MEMORY ACTIVE \u2713",$c.style.color="#ffd18a")}function rC(i,e){let t=i-Hd;if(sa==="DISTURBED"){let s=.34-.055*Math.min(1,t/Ks.disturbedMs),r=Math.sin(i*.012+e)*.065;return s+r}return sa==="SETTLING"?(1-Math.min(1,t/Ks.settlingMs))*(.27+.075*Math.sin(i*.01+e)):.018*Math.sin(i*.0018+e)}function oC(i){let e=wy-tC,t=Ry-nC,n=Math.max(1e-4,Math.hypot(e,t)),s=e/n,r=t/n;for(let o=0;o<Ag.length;o++){let a=Ag[o],c=wy+a.px,l=Ry+a.pz,h=ct(c,l)+.035,u=rC(i,a.phase),d=.82+o*13%7*.045,f=u*d;Ac.position.set(c,h,l),Ac.rotation.set(r*f,a.yaw,-s*f),Ac.scale.set(.8,a.scaleY,1),Ac.updateMatrix(),ia.setMatrixAt(o,Ac.matrix)}ia.instanceMatrix.needsUpdate=!0}function aC(i){let e=zd.secondaryState;e==="FLEEING"&&Cy!=="FLEEING"&&sC(i),Cy=e,sa==="DISTURBED"&&i-Hd>=Ks.disturbedMs?bg("SETTLING",i):sa==="SETTLING"&&i-Hd>=Ks.settlingMs&&(bg("CALM",i),$c&&($c.textContent="SETTLED")),jm&&(hl?jm.textContent=((i-hl)/1e3).toFixed(1)+" s":jm.textContent="\u2014"),oC(i)}function vM(i){requestAnimationFrame(vM),aC(i)}requestAnimationFrame(vM);globalThis.__livingWorld06C={marker:eC,get state(){return sa},get events(){return yM},get ageMs(){return hl?performance.now()-hl:0},disturbedMs:Ks.disturbedMs,settlingMs:Ks.settlingMs,directPlayerTrigger:!1,source:"accepted 06B Flock B transition to FLEEING"};var cC="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR",us={arrivalDelayMs:1800,avoidTravelMs:2450,calmHoldMs:550,directReturnMs:2500,detourOffsetM:2.8,directPlayerTrigger:!1},Jo=globalThis.__livingWorld06C;if(!Jo||Jo.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06D requires frozen accepted 06C public world-memory API");var uf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,lC=ie.position.x,hC=ie.position.z,MM=Math.sin(uf),SM=Math.cos(uf),h0=Math.cos(uf),u0=-Math.sin(uf),d0=lC+MM*15.7+h0*6.2,f0=hC+SM*15.7+u0*6.2,zc=d0-h0*3.4,Hc=f0-u0*3.4,Qm=d0+h0*3.4,eg=f0+u0*3.4,uC=d0+MM*us.detourOffsetM,dC=f0+SM*us.detourOffsetM,jc=new Tt;Le.add(jc);var fC=new ri(.5,1),pC=new si(.115,.55,7),mC=new Pe({color:9069895,roughness:.9,metalness:0}),gC=new Pe({color:7754301,roughness:.92,metalness:0}),ms=new tt(fC,mC,5),la=new tt(pC,gC,2);ms.castShadow=!0;la.castShadow=!0;ms.frustumCulled=!1;la.frustumCulled=!1;jc.add(ms,la);var bc=new He;function Hr(i,e,t,n,s,r,o,a,c=0,l=0,h=0){bc.position.set(t,n,s),bc.scale.set(r,o,a),bc.rotation.set(c,l,h),bc.updateMatrix(),i.setMatrixAt(e,bc.matrix)}Hr(ms,0,0,.42,0,.72,.55,1.08);Hr(ms,1,0,.62,.5,.48,.48,.48);Hr(ms,2,-.33,.25,-.2,.32,.34,.38);Hr(ms,3,.33,.25,-.2,.32,.34,.38);Hr(ms,4,0,.48,-.6,.25,.25,.25);Hr(la,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Hr(la,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);ms.instanceMatrix.needsUpdate=!0;la.instanceMatrix.needsUpdate=!0;var qs="WAITING",Qc=performance.now(),EM=0,Iy=Jo.events,AM="NONE",Tc=0,Oi=zc,Ui=Hc,Dy=Oi,Py=Ui,tg=document.getElementById("worldBehaviorState"),ng=document.getElementById("worldRouteChoice"),Xs=document.getElementById("worldBehaviorResult");function ko(i,e){qs=i,Qc=e,tg&&(tg.textContent=i,tg.style.color=i==="WAITING"?"#d6d6d6":i==="AVOIDING"?"#ffd18a":i==="HOLDING"?"#ffe59a":i==="DIRECT_RETURN"?"#9fe0ff":"#a8f0b5")}function Vo(i,e,t){AM=i,ng&&(ng.textContent=e,ng.style.color=t)}function Ly(i,e,t,n){let s=1-n;return s*s*i+2*s*n*e+n*n*t}function Ny(i){return i*i*(3-2*i)}function _C(i){EM++,ko("AVOIDING",i),Vo("MEMORY_DETOUR","DETOUR: MEMORY","#ffd18a"),Xs&&(Xs.textContent="MEMORY CHANGED ROUTE \u2713",Xs.style.color="#ffd18a")}function xC(i){let e=Oi-Dy,t=Ui-Py,n=Math.hypot(e,t)>1e-5,s=jc.rotation.y;n&&(s=Math.atan2(e,t));let r=qs==="AVOIDING"||qs==="DIRECT_RETURN"?Math.max(0,Math.sin((i-Qc)*.011))*.12:0,o=ct(Oi,Ui)+.03+r;jc.position.set(Oi,o,Ui),jc.rotation.y=s,Dy=Oi,Py=Ui}function yC(i){let e=Jo.events;if(e>Iy&&(Iy=e,Oi=zc,Ui=Hc,ko("ARRIVAL_DELAY",i),Vo("PENDING","READING WORLD\u2026","#ffe59a"),Xs&&(Xs.textContent="LATE ACTOR INBOUND")),qs==="ARRIVAL_DELAY"&&i-Qc>=us.arrivalDelayMs)Jo.state!=="CALM"?_C(i):(ko("DIRECT_RETURN",i),Vo("DIRECT","DIRECT: WORLD CLEAR","#9fe0ff"));else if(qs==="AVOIDING"){let t=Math.min(1,(i-Qc)/us.avoidTravelMs),n=Ny(t);Oi=Ly(zc,uC,Qm,n),Ui=Ly(Hc,dC,eg,n),t>=1&&(Oi=Qm,Ui=eg,ko("HOLDING",i),Tc=0,Vo("WAIT_FOR_CLEAR","WAITING FOR CLEAR","#ffe59a"))}else if(qs==="HOLDING")Jo.state==="CALM"?(Tc||(Tc=i+us.calmHoldMs),i>=Tc&&(ko("DIRECT_RETURN",i),Vo("DIRECT","DIRECT: MEMORY CLEARED","#9fe0ff"))):Tc=0;else if(qs==="DIRECT_RETURN"){let t=Math.min(1,(i-Qc)/us.directReturnMs),n=Ny(t);Oi=Ze.lerp(Qm,zc,n),Ui=Ze.lerp(eg,Hc,n),t>=1&&(Oi=zc,Ui=Hc,ko("COMPLETE",i),Vo("PROVED","DETOUR THEN DIRECT \u2713","#a8f0b5"),Xs&&(Xs.textContent="WORLD STATE AFFECTED BEHAVIOR \u2713",Xs.style.color="#a8f0b5"))}xC(i)}function bM(i){requestAnimationFrame(bM),yC(i)}requestAnimationFrame(bM);globalThis.__livingWorld06D={marker:cC,get state(){return qs},get routeChoice(){return AM},get events(){return EM},directPlayerTrigger:!1,reads:"06C persistent world-memory state",arrivalDelayMs:us.arrivalDelayMs,avoidTravelMs:us.avoidTravelMs,directReturnMs:us.directReturnMs};var vC="06E_SPATIALLY_SCOPED_MEMORY",Nr={arrivalDelayMs:1800,travelMs:2450,memoryRadiusM:1.8,laneOffsetM:3.35,directPlayerTrigger:!1},ul=globalThis.__livingWorld06C,Oy=globalThis.__livingWorld06D;if(!ul||ul.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06E requires frozen accepted 06C memory API");if(!Oy||Oy.marker!=="06D_MEMORY_INFORMS_ACTOR_BEHAVIOR")throw new Error("06E requires frozen accepted 06D behavior API");var df=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,MC=ie.position.x,SC=ie.position.z,p0=Math.sin(df),m0=Math.cos(df),g0=Math.cos(df),_0=-Math.sin(df),TM=MC+p0*15.7+g0*6.2,wM=SC+m0*15.7+_0*6.2,RM=TM-p0*Nr.laneOffsetM,CM=wM-m0*Nr.laneOffsetM,Wo=RM-g0*3.4,Xo=CM-_0*3.4,Gc=RM+g0*3.4,kc=CM+_0*3.4;function EC(i,e,t,n,s,r){let o=s-t,a=r-n,c=o*o+a*a,l=c>1e-9?Ze.clamp(((i-t)*o+(e-n)*a)/c,0,1):0,h=t+o*l,u=n+a*l;return Math.hypot(i-h,e-u)}var IM=EC(TM,wM,Wo,Xo,Gc,kc),Gd=new Tt;Le.add(Gd);var AC=new ri(.5,1),bC=new si(.115,.55,7),TC=new Pe({color:8160133,roughness:.91,metalness:0}),wC=new Pe({color:6712688,roughness:.93,metalness:0}),gs=new tt(AC,TC,5),ha=new tt(bC,wC,2);gs.castShadow=!0;ha.castShadow=!0;gs.frustumCulled=!1;ha.frustumCulled=!1;Gd.add(gs,ha);var wc=new He;function Gr(i,e,t,n,s,r,o,a,c=0,l=0,h=0){wc.position.set(t,n,s),wc.scale.set(r,o,a),wc.rotation.set(c,l,h),wc.updateMatrix(),i.setMatrixAt(e,wc.matrix)}Gr(gs,0,0,.42,0,.72,.55,1.08);Gr(gs,1,0,.62,.5,.48,.48,.48);Gr(gs,2,-.33,.25,-.2,.32,.34,.38);Gr(gs,3,.33,.25,-.2,.32,.34,.38);Gr(gs,4,0,.48,-.6,.25,.25,.25);Gr(ha,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Gr(ha,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);gs.instanceMatrix.needsUpdate=!0;ha.instanceMatrix.needsUpdate=!0;var Ur="WAITING",el=performance.now(),DM=0,Uy=ul.events,Vc=!1,PM="NONE",Fi=Wo,Bi=Xo,Tg=Fi,wg=Bi,ig=document.getElementById("worldSpatialState"),tl=document.getElementById("worldSpatialOverlap"),sg=document.getElementById("worldSpatialChoice"),Vs=document.getElementById("worldSpatialResult");function Rc(i,e){Ur=i,el=e,ig&&(ig.textContent=i,ig.style.color=i==="WAITING"?"#d6d6d6":i==="ARRIVAL_DELAY"?"#ffe59a":i==="DIRECT"?"#9fe0ff":i==="AVOIDING"?"#ffd18a":"#a8f0b5")}function od(i,e,t){PM=i,sg&&(sg.textContent=e,sg.style.color=t)}function Fy(i){return i*i*(3-2*i)}function RC(i){let e=Fi-Tg,t=Bi-wg;Math.hypot(e,t)>1e-5&&(Gd.rotation.y=Math.atan2(e,t));let s=Ur==="DIRECT"||Ur==="AVOIDING"?Math.max(0,Math.sin((i-el)*.011))*.11:0;Gd.position.set(Fi,ct(Fi,Bi)+.03+s,Bi),Tg=Fi,wg=Bi}function CC(i){let e=ul.events;if(e>Uy&&(Uy=e,DM++,Fi=Wo,Bi=Xo,Tg=Fi,wg=Bi,Rc("ARRIVAL_DELAY",i),od("PENDING","SAME MEMORY \xB7 CHECKING SPACE","#ffe59a"),Vs&&(Vs.textContent="CONTROL ACTOR INBOUND")),Ur==="ARRIVAL_DELAY"&&i-el>=Nr.arrivalDelayMs){let t=ul.state!=="CALM";Vc=IM<=Nr.memoryRadiusM,tl&&(tl.textContent=Vc?"YES":"NO",tl.style.color=Vc?"#ffd18a":"#a8f0b5"),t&&Vc?(Rc("AVOIDING",i),od("DETOUR","DETOUR: LOCAL MEMORY","#ffd18a")):(Rc("DIRECT",i),od("DIRECT","DIRECT: OUTSIDE MEMORY","#9fe0ff"),Vs&&(Vs.textContent=t?"MEMORY ACTIVE \xB7 ACTOR UNAFFECTED \u2713":"WORLD CLEAR \xB7 DIRECT",Vs.style.color="#a8f0b5"))}else if(Ur==="DIRECT"){let t=Math.min(1,(i-el)/Nr.travelMs),n=Fy(t);Fi=Ze.lerp(Wo,Gc,n),Bi=Ze.lerp(Xo,kc,n),t>=1&&(Fi=Gc,Bi=kc,Rc("COMPLETE",i),od("PROVED","LOCAL SCOPE \u2713","#a8f0b5"),Vs&&(Vs.textContent="SAME MEMORY \xB7 DIFFERENT LOCATION \xB7 NO EFFECT \u2713",Vs.style.color="#a8f0b5"))}else if(Ur==="AVOIDING"){let t=Math.min(1,(i-el)/Nr.travelMs),n=Fy(t),s=(Wo+Gc)*.5-p0*2,r=(Xo+kc)*.5-m0*2,o=1-n;Fi=o*o*Wo+2*o*n*s+n*n*Gc,Bi=o*o*Xo+2*o*n*r+n*n*kc,t>=1&&Rc("COMPLETE",i)}RC(i)}function LM(i){requestAnimationFrame(LM),CC(i)}requestAnimationFrame(LM);tl&&(tl.textContent="PENDING");globalThis.__livingWorld06E={marker:vC,get state(){return Ur},get overlap(){return Vc},get choice(){return PM},get events(){return DM},directPlayerTrigger:!1,memoryRadiusM:Nr.memoryRadiusM,controlPathDistanceToMemoryM:IM,expectedOverlap:!1,reads:"same 06C memory state with spatial path query"};var IC="06F_STIMULUS_PRIORITY_ARBITRATION",Rn={arrivalDelayMs:1800,foodBecomesValidAfterMs:120,arbitrationDelayMs:180,hazardPriority:100,foodPriority:40,escapeTravelMs:2550,escapeOffsetM:3.2,directPlayerTrigger:!1},dl=globalThis.__livingWorld06C,By=globalThis.__livingWorld06E;if(!dl||dl.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06F requires frozen accepted 06C memory API");if(!By||By.marker!=="06E_SPATIALLY_SCOPED_MEMORY")throw new Error("06F requires frozen accepted 06E spatial-memory API");var ff=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,DC=ie.position.x,PC=ie.position.z,x0=Math.sin(ff),y0=Math.cos(ff),pf=Math.cos(ff),mf=-Math.sin(ff),NM=DC+x0*15.7+pf*6.2,OM=PC+y0*15.7+mf*6.2,gf=NM-pf*3.9-x0*.65,_f=OM-mf*3.9-y0*.65,LC=NM+pf*3.7,NC=OM+mf*3.7,zy=gf-x0*Rn.escapeOffsetM-pf*.8,Hy=_f-y0*Rn.escapeOffsetM-mf*.8,kd=new Tt;Le.add(kd);var OC=new ri(.5,1),UC=new si(.115,.55,7),FC=new Pe({color:12155959,roughness:.9,metalness:0}),BC=new Pe({color:10183727,roughness:.92,metalness:0}),_s=new tt(OC,FC,5),ua=new tt(UC,BC,2);_s.castShadow=!0;ua.castShadow=!0;_s.frustumCulled=!1;ua.frustumCulled=!1;kd.add(_s,ua);var Cc=new He;function kr(i,e,t,n,s,r,o,a,c=0,l=0,h=0){Cc.position.set(t,n,s),Cc.scale.set(r,o,a),Cc.rotation.set(c,l,h),Cc.updateMatrix(),i.setMatrixAt(e,Cc.matrix)}kr(_s,0,0,.42,0,.72,.55,1.08);kr(_s,1,0,.62,.5,.48,.48,.48);kr(_s,2,-.33,.25,-.2,.32,.34,.38);kr(_s,3,.33,.25,-.2,.32,.34,.38);kr(_s,4,0,.48,-.6,.25,.25,.25);kr(ua,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);kr(ua,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);_s.instanceMatrix.needsUpdate=!0;ua.instanceMatrix.needsUpdate=!0;var zC=new Sn(.13,7,5),HC=new Pe({color:7249222,roughness:.86,metalness:0}),xf=new tt(zC,HC,7);xf.frustumCulled=!1;var ad=new He;for(let i=0;i<7;i++){let e=i*2.399963229728653,t=.12+i%3*.09,n=LC+Math.cos(e)*t,s=NC+Math.sin(e)*t;ad.position.set(n,ct(n,s)+.12+i%2*.04,s),ad.scale.set(1,1,1),ad.updateMatrix(),xf.setMatrixAt(i,ad.matrix)}xf.instanceMatrix.needsUpdate=!0;Le.add(xf);var Ko="WAITING",Vd=performance.now(),Gy=dl.events,UM=0,FM="NONE",Wd="NONE",Xd=!1,qd=!1,Rg=0,Cg=0,ds=gf,fs=_f,Ig=ds,Dg=fs,rg=document.getElementById("worldArbState"),Yd=document.getElementById("worldArbCandidates"),Ir=document.getElementById("worldArbLast"),og=document.getElementById("worldArbWinner"),_i=document.getElementById("worldArbResult");function $o(i,e){Ko=i,Vd=e,rg&&(rg.textContent=i,rg.style.color=i==="WAITING"?"#d6d6d6":i==="ARRIVAL_DELAY"||i==="ARBITRATING"?"#ffe59a":i==="ESCAPING"?"#ffd18a":"#a8f0b5")}function nl(i,e,t){FM=i,og&&(og.textContent=e,og.style.color=t)}function GC(i){return i*i*(3-2*i)}function kC(i){let e=ds-Ig,t=fs-Dg;Math.hypot(e,t)>1e-5&&(kd.rotation.y=Math.atan2(e,t));let s=Ko==="ESCAPING"?Math.max(0,Math.sin((i-Vd)*.012))*.115:0;kd.position.set(ds,ct(ds,fs)+.03+s,fs),Ig=ds,Dg=fs}function VC(i){UM++,ds=gf,fs=_f,Ig=ds,Dg=fs,Xd=!1,qd=!1,Wd="NONE",Rg=0,Cg=0,$o("ARRIVAL_DELAY",i),nl("PENDING","PENDING","#ffe59a"),Yd&&(Yd.textContent="WAITING"),Ir&&(Ir.textContent="NONE"),_i&&(_i.textContent="ACTOR INBOUND")}function WC(i){let e=[];Xd&&e.push({id:"HAZARD",priority:Rn.hazardPriority}),qd&&e.push({id:"FOOD",priority:Rn.foodPriority}),e.sort((n,s)=>s.priority-n.priority||n.id.localeCompare(s.id));let t=e[0]?.id||"NONE";Yd&&(Yd.textContent=`HAZARD ${Rn.hazardPriority} \xB7 FOOD ${Rn.foodPriority}`),t==="HAZARD"?(nl("HAZARD","HAZARD 100","#ffd18a"),$o("ESCAPING",i),_i&&(_i.textContent="NEWER FOOD LOST TO HIGHER PRIORITY \u2713",_i.style.color="#a8f0b5")):t==="FOOD"?(nl("FOOD","FOOD 40","#9fe0ff"),$o("COMPLETE",i),_i&&(_i.textContent="FOOD WON",_i.style.color="#9fe0ff")):(nl("NONE","NONE","#d6d6d6"),$o("COMPLETE",i))}function XC(i){let e=dl.events;if(e>Gy&&(Gy=e,VC(i)),Ko==="ARRIVAL_DELAY"&&i-Vd>=Rn.arrivalDelayMs)Xd=dl.state!=="CALM",Xd&&(Wd="HAZARD",Ir&&(Ir.textContent="HAZARD")),Rg=i+Rn.foodBecomesValidAfterMs,Cg=i+Rn.arbitrationDelayMs,$o("ARBITRATING",i);else if(Ko==="ARBITRATING")!qd&&i>=Rg&&(qd=!0,Wd="FOOD",Ir&&(Ir.textContent="FOOD (NEWER)",Ir.style.color="#9fe0ff")),i>=Cg&&WC(i);else if(Ko==="ESCAPING"){let t=Math.min(1,(i-Vd)/Rn.escapeTravelMs),n=GC(t);ds=Ze.lerp(gf,zy,n),fs=Ze.lerp(_f,Hy,n),t>=1&&(ds=zy,fs=Hy,$o("COMPLETE",i),nl("PROVED","HAZARD WON \u2713","#a8f0b5"),_i&&(_i.textContent="PRIORITY > RECENCY \u2713",_i.style.color="#a8f0b5"))}kC(i)}function BM(i){requestAnimationFrame(BM),XC(i)}requestAnimationFrame(BM);globalThis.__livingWorld06F={marker:IC,get state(){return Ko},get winner(){return FM},get lastStimulus(){return Wd},get events(){return UM},priorities:{hazard:Rn.hazardPriority,food:Rn.foodPriority},foodBecomesValidAfterMs:Rn.foodBecomesValidAfterMs,arbitrationDelayMs:Rn.arbitrationDelayMs,directPlayerTrigger:!1,rule:"highest priority wins; event recency is not decision authority"};var qC="06G_INTERRUPTED_GOAL_RECOVERY",Dr={preGoalTravelMs:6200,preGoalCap:.34,evadeTravelMs:1450,recoverHoldMs:450,resumeTravelMs:3e3,evadeOffsetM:3,directPlayerTrigger:!1},fl=globalThis.__livingWorld06C,ky=globalThis.__livingWorld06F;if(!fl||fl.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06G requires frozen accepted 06C memory API");if(!ky||ky.marker!=="06F_STIMULUS_PRIORITY_ARBITRATION")throw new Error("06G requires frozen accepted 06F arbitration API");var yf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,YC=ie.position.x,ZC=ie.position.z,vf=Math.sin(yf),Mf=Math.cos(yf),Sf=Math.cos(yf),Ef=-Math.sin(yf),v0=YC+vf*15.7+Sf*6.2,M0=ZC+Mf*15.7+Ef*6.2,S0=v0-Sf*4.4+vf*.9,E0=M0-Ef*4.4+Mf*.9,md=v0+Sf*4+vf*.8,gd=M0+Ef*4+Mf*.8,Pg=v0-vf*Dr.evadeOffsetM-Sf*1.2,Lg=M0-Mf*Dr.evadeOffsetM-Ef*1.2,Zd=new Tt;Le.add(Zd);var JC=new ri(.5,1),KC=new si(.115,.55,7),$C=new Pe({color:4165512,roughness:.9,metalness:0}),jC=new Pe({color:3438191,roughness:.92,metalness:0}),xs=new tt(JC,$C,5),da=new tt(KC,jC,2);xs.castShadow=!0;da.castShadow=!0;xs.frustumCulled=!1;da.frustumCulled=!1;Zd.add(xs,da);var Ic=new He;function Vr(i,e,t,n,s,r,o,a,c=0,l=0,h=0){Ic.position.set(t,n,s),Ic.scale.set(r,o,a),Ic.rotation.set(c,l,h),Ic.updateMatrix(),i.setMatrixAt(e,Ic.matrix)}Vr(xs,0,0,.42,0,.72,.55,1.08);Vr(xs,1,0,.62,.5,.48,.48,.48);Vr(xs,2,-.33,.25,-.2,.32,.34,.38);Vr(xs,3,.33,.25,-.2,.32,.34,.38);Vr(xs,4,0,.48,-.6,.25,.25,.25);Vr(da,0,-.16,1.08,.49,.72,1,.72,-.1,0,-.08);Vr(da,1,.16,1.08,.49,.72,1,.72,-.1,0,.08);xs.instanceMatrix.needsUpdate=!0;da.instanceMatrix.needsUpdate=!0;var QC=new Sn(.13,7,5),eI=new Pe({color:8372052,roughness:.86,metalness:0}),Af=new tt(QC,eI,7);Af.frustumCulled=!1;var cd=new He;for(let i=0;i<7;i++){let e=i*2.399963229728653,t=.12+i%3*.09,n=md+Math.cos(e)*t,s=gd+Math.sin(e)*t;cd.position.set(n,ct(n,s)+.12+i%2*.04,s),cd.scale.set(1,1,1),cd.updateMatrix(),Af.setMatrixAt(i,cd.matrix)}Af.instanceMatrix.needsUpdate=!0;Le.add(Af);var zi="SEEKING_FOOD",il=performance.now(),Vy=fl.events,zM=0,HM="FOOD",A0="NONE",GM="NONE",qn=S0,Yn=E0,Wy=qn,Xy=Yn,kM=S0,VM=E0,qy=Pg,Yy=Lg,ld=0,ag=document.getElementById("worldRecoveryState"),Zy=document.getElementById("worldRecoveryGoal"),jo=document.getElementById("worldRecoverySuspended"),Qo=document.getElementById("worldRecoveryInterrupt"),Xn=document.getElementById("worldRecoveryResult");function _d(i,e){zi=i,il=e,ag&&(ag.textContent=i,ag.style.color=i==="SEEKING_FOOD"?"#9fe0ff":i==="EVADING"?"#ffd18a":i==="WAIT_CLEAR"?"#ffe59a":i==="RESUMING_FOOD"?"#9fe0ff":"#a8f0b5")}function xd(i){HM=i,Zy&&(Zy.textContent=i)}function cg(i){return i*i*(3-2*i)}function tI(i){let e=qn-Wy,t=Yn-Xy;Math.hypot(e,t)>1e-5&&(Zd.rotation.y=Math.atan2(e,t));let s=zi==="SEEKING_FOOD"||zi==="EVADING"||zi==="RESUMING_FOOD"?Math.max(0,Math.sin((i-il)*.011))*.11:0;Zd.position.set(qn,ct(qn,Yn)+.03+s,Yn),Wy=qn,Xy=Yn}function nI(i){zM++,kM=qn,VM=Yn,A0="FOOD",GM="HAZARD",xd("HAZARD"),_d("EVADING",i),jo&&(jo.textContent="FOOD",jo.style.color="#ffe59a"),Qo&&(Qo.textContent="HAZARD",Qo.style.color="#ffd18a"),Xn&&(Xn.textContent="FOOD GOAL SUSPENDED",Xn.style.color="#ffd18a")}function iI(i){let e=fl.events;if(e>Vy&&(Vy=e,zi==="SEEKING_FOOD"&&nI(i)),zi==="SEEKING_FOOD"){let t=Math.min(1,(i-il)/Dr.preGoalTravelMs),n=Math.min(Dr.preGoalCap,cg(t));qn=Ze.lerp(S0,md,n),Yn=Ze.lerp(E0,gd,n)}else if(zi==="EVADING"){let t=Math.min(1,(i-il)/Dr.evadeTravelMs),n=cg(t);qn=Ze.lerp(kM,Pg,n),Yn=Ze.lerp(VM,Lg,n),t>=1&&(qn=Pg,Yn=Lg,_d("WAIT_CLEAR",i),xd("WAITING"),Xn&&(Xn.textContent="WAITING FOR HAZARD TO CLEAR",Xn.style.color="#ffe59a"))}else if(zi==="WAIT_CLEAR")fl.state==="CALM"?(ld||(ld=i),i-ld>=Dr.recoverHoldMs&&(qy=qn,Yy=Yn,A0="NONE",xd("FOOD"),_d("RESUMING_FOOD",i),jo&&(jo.textContent="NONE",jo.style.color="#a8f0b5"),Xn&&(Xn.textContent="RESUMING ORIGINAL FOOD GOAL",Xn.style.color="#9fe0ff"))):ld=0;else if(zi==="RESUMING_FOOD"){let t=Math.min(1,(i-il)/Dr.resumeTravelMs),n=cg(t);qn=Ze.lerp(qy,md,n),Yn=Ze.lerp(Yy,gd,n),t>=1&&(qn=md,Yn=gd,_d("COMPLETE",i),xd("FOOD REACHED"),Qo&&(Qo.textContent="RESOLVED",Qo.style.color="#a8f0b5"),Xn&&(Xn.textContent="INTERRUPT \u2192 RECOVER \u2192 RESUME \u2713",Xn.style.color="#a8f0b5"))}tI(i)}function WM(i){requestAnimationFrame(WM),iI(i)}requestAnimationFrame(WM);globalThis.__livingWorld06G={marker:qC,get state(){return zi},get goal(){return HM},get suspendedGoal(){return A0},get interrupt(){return GM},get events(){return zM},directPlayerTrigger:!1,originalGoal:"FOOD",interruption:"HAZARD",rule:"suspend original goal, resolve higher-priority interruption, resume original goal when valid"};var sI="06H_STREAMED_PERSISTENCE",Jd=globalThis.__livingWorld06C;if(!Jd||Jd.marker!=="06C_LOCAL_DISTURBANCE_MEMORY")throw new Error("06H requires frozen accepted 06C memory API");var Zn={...Bm,cellId:"06H_CELL_A",directPlayerBehaviorTrigger:!1},bf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,rI=ie.position.x,oI=ie.position.z,b0=Math.sin(bf),T0=Math.cos(bf),w0=Math.cos(bf),R0=-Math.sin(bf),Tf=rI+b0*10.5+w0*6,wf=oI+T0*10.5+R0*6,aI={x:Tf-w0*2.2-b0*.4,z:wf-R0*2.2-T0*.4},cI={x:Tf+w0*3.6+b0*.7,z:wf+R0*3.6+T0*.7},C0=new Fo,sl=1/0,Ng=!1,yd=!1,Pr="READY",lI=document.getElementById("worldStreamLifecycle"),hI=document.getElementById("worldStreamDistance"),uI=document.getElementById("worldStreamSnapshot"),dI=document.getElementById("worldStreamOffscreen"),fI=document.getElementById("worldStreamMemory"),pI=document.getElementById("worldStreamGoal"),mI=document.getElementById("worldStreamProgress"),gI=document.getElementById("worldStreamDuplicates"),_I=document.getElementById("worldStreamResult");function rs(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function XM(i){return i==="DISTURBED"?14256696:i==="SETTLING"?12758370:7901789}function xI(i){if(Array.isArray(i))for(let e of i)e.dispose();else i&&i.dispose()}function yI(i){let e=new Tt;e.userData.streamCellId=Zn.cellId;let t=new oi(.18,1.42,1,2);t.translate(0,.71,0);let n=new Pe({color:XM(i.memory.state),roughness:.96,metalness:0,side:Ct}),s=new tt(t,n,14);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1;let r=new He;for(let f=0;f<14;f++){let g=f*2.399963229728653,y=.55+f%5*.19,m=Tf+Math.cos(g)*y,p=wf+Math.sin(g)*y;r.position.set(m,ct(m,p)+.03,p),r.rotation.set(0,g*.37,0),r.scale.set(.82,.78+f%4*.1,1),r.updateMatrix(),s.setMatrixAt(f,r.matrix)}s.instanceMatrix.needsUpdate=!0;let o=new ri(.48,1),a=new Pe({color:4165512,roughness:.9,metalness:0}),c=new Ve(o,a);c.castShadow=!0;let l=new Sn(.2,10,8),h=new Pe({color:14201690,emissive:7097624,emissiveIntensity:.28,roughness:.72}),u=new Ve(l,h);u.castShadow=!0,e.add(s,c,u),Le.add(e);let d={root:e,reeds:s,reedGeo:t,reedMat:n,actor:c,actorGeo:o,actorMat:a,food:u,foodGeo:l,foodMat:h};return qM(d,i,Date.now()),d}function qM(i,e,t){if(!i)return;let n=e.actor.position;i.actor.position.set(n.x,ct(n.x,n.z)+.48,n.z);let s=e.actor.destination;i.food.position.set(s.x,ct(s.x,s.z)+.23,s.z);let r=XM(e.memory.state);i.reedMat.color.setHex(r);let o=e.memory.state==="DISTURBED"?1+Math.sin(t*.012)*.08:1;i.reeds.scale.setScalar(o)}function vI(i){i&&(Le.remove(i.root),i.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&xI(e.material)}),i.root.clear())}var at=new Gu({id:Zn.cellId,store:C0,actorStart:aI,actorDestination:cI,config:Zn,initialEventId:Jd.events,attachVisual:yI,detachVisual:vI,updateVisual:qM});at.load(Date.now());function MI(i){let e=at.isActive?"ACTIVE":"UNLOADED";rs(lI,e,e==="ACTIVE"?"#a8f0b5":"#ffd18a"),rs(hI,sl.toFixed(1)+" m"),rs(uI,at.hasSnapshot?"SAVED":"NONE",at.hasSnapshot?"#9fe0ff":"#d8ebe5"),rs(dI,(at.offscreenMs(i)/1e3).toFixed(1)+" s"),rs(fI,at.state.memory.state,at.state.memory.state==="CALM"?"#a8f0b5":"#ffd18a"),rs(pI,at.state.actor.goal),rs(mI,Math.round(at.state.actor.progress*100)+"%"),rs(gI,String(at.duplicateCount),at.duplicateCount===0?"#a8f0b5":"#ff8f8f"),rs(_I,Pr,Pr.includes("\u2713")?"#a8f0b5":"#ffe59a")}function SI(i,e){let t=Date.now();if(sl=Math.hypot(ie.position.x-Tf,ie.position.z-wf),at.isActive&&sl>=Zn.unloadRadiusM)at.unload(t),Pr="STATE SERIALIZED \xB7 SIMULATION STOPPED";else if(!at.isActive&&sl<=Zn.loadRadiusM){let n=C0.load(Zn.cellId),s=n?.actor?.progress,r=n?.memory?.state,o=n?.memory?.expiresAt||0;at.load(t).rehydrated&&(yd=Math.abs(at.state.actor.progress-s)<1e-9,Ng=r!=="CALM"&&t>=o&&at.state.memory.state==="CALM",Ng&&yd&&at.duplicateCount===0?Pr="STATE RESTORED \u2713 \xB7 TIMER CAUGHT UP \u2713 \xB7 NO DUPLICATES \u2713":yd&&at.duplicateCount===0?Pr="STATE RESTORED \u2713 \xB7 NO DUPLICATES \u2713":Pr="RESTORE CHECK FAILED")}at.isActive&&(at.update({dtMs:Math.max(0,e*1e3),wallNow:t,eventId:Jd.events}),at.state.memory.state==="DISTURBED"&&at.lastTransition==="MEMORY_DISTURBED"&&(Pr="MEMORY DISTURBED \xB7 LEAVE CELL")),MI(t)}var Jy=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),YM=(i,e)=>SI(i,e);YM.streamCellId=Zn.cellId;Jy.some(i=>i.streamCellId===Zn.cellId)||Jy.push(YM);globalThis.__livingWorld06H={marker:sI,schemaVersion:1,get lifecycle(){return at.lifecycle},get loaded(){return at.isActive},get state(){return at.state.memory.state},get snapshot(){return C0.load(Zn.cellId)},get playerDistanceM(){return sl},get actorGoal(){return at.state.actor.goal},get actorProgress(){return at.state.actor.progress},get unloadCount(){return at.unloadCount},get restoreCount(){return at.restoreCount},get duplicateCount(){return at.duplicateCount},get lastOffscreenMs(){return at.lastOffscreenMs},get timerCaughtUp(){return Ng},get progressPreserved(){return yd},loadRadiusM:Zn.loadRadiusM,unloadRadiusM:Zn.unloadRadiusM,directPlayerBehaviorTrigger:!1,activeSceneRootCount:()=>Le.children.filter(i=>i.userData?.streamCellId===Zn.cellId).length};var EI="06I_SIMULATION_LOD_SLEEP_WAKE",zn={...uc,cellId:"06I_LOD_CELL",actorTravelMs:9e4,directPlayerBehaviorTrigger:!1},Rf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,AI=ie.position.x,bI=ie.position.z,ZM=Math.sin(Rf),JM=Math.cos(Rf),I0=Math.cos(Rf),D0=-Math.sin(Rf),P0=AI+ZM*8.8-I0*4.8,L0=bI+JM*8.8-D0*4.8,Og={x:P0-I0*2.4,z:L0-D0*2.4},Ug={x:P0+I0*4.8+ZM*.9,z:L0+D0*4.8+JM*.9},pl=new Fo,Lr=null,qo=null,Kd=1/0,ea=0,KM=0,Cf=!1,TI=0,$M=0,ls="NEAR FULL SIMULATION",Ky=performance.now(),Fg=0,$y=0,Wc=new Set([Ce.NEAR]),yt={goal:"FOOD",behaviorState:"SEEKING_FOOD",progress:0,position:{...Og},destination:{...Ug}},wI=document.getElementById("worldLodTier"),RI=document.getElementById("worldLodDistance"),CI=document.getElementById("worldLodCadence"),II=document.getElementById("worldLodTicks"),DI=document.getElementById("worldLodGoal"),PI=document.getElementById("worldLodProgress"),LI=document.getElementById("worldLodSnapshot"),NI=document.getElementById("worldLodSleepWake"),OI=document.getElementById("worldLodDuplicates"),UI=document.getElementById("worldLodResult");function Li(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function jM(i){return i===Ce.NEAR?4165512:i===Ce.MID?5211048:i===Ce.FAR?7693210:6252136}function FI(i){if(Array.isArray(i))for(let e of i)e.dispose();else i&&i.dispose()}function BI(){let i=yt.progress;yt.position.x=Ze.lerp(Og.x,Ug.x,i),yt.position.z=Ze.lerp(Og.z,Ug.z,i)}function QM(){if(Lr){ea++;return}let i=new Tt;i.userData.simLodCellId=zn.cellId;let e=new ri(.46,1),t=new Pe({color:jM(Ce.NEAR),roughness:.9,metalness:0}),n=new Ve(e,t);n.castShadow=!0;let s=new si(.11,.46,7),r=new Pe({color:3235675,roughness:.92,metalness:0}),o=new Ve(s,r),a=new Ve(s,r.clone());o.position.set(-.19,.43,0),a.position.set(.19,.43,0),o.rotation.z=.22,a.rotation.z=-.22,n.add(o,a);let c=new Sn(.19,10,8),l=new Pe({color:14136410,emissive:6441236,emissiveIntensity:.25,roughness:.74}),h=new Ve(c,l);h.castShadow=!0,i.add(n,h),Le.add(i),Lr=i,qo={root:i,body:n,bodyGeo:e,bodyMat:t,earL:o,earR:a,food:h,foodGeo:c,foodMat:l},Bg()}function zI(){Lr&&(Le.remove(Lr),Lr.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&FI(i.material)}),Lr.clear(),Lr=null,qo=null)}function Bg(){if(!qo)return;let i=yt.position;qo.body.position.set(i.x,ct(i.x,i.z)+.5,i.z);let e=yt.destination;qo.food.position.set(e.x,ct(e.x,e.z)+.22,e.z),qo.bodyMat.color.setHex(jM(Fn?.tier||Ce.NEAR))}function HI(i){let e={version:1,cellId:zn.cellId,serializedAt:i,actor:{goal:yt.goal,behaviorState:yt.behaviorState,progress:yt.progress,position:{...yt.position},destination:{...yt.destination}}};pl.save(zn.cellId,e),KM=yt.progress,TI=i}function GI(i){let e=pl.load(zn.cellId);return e?(yt.goal=e.actor.goal,yt.behaviorState=e.actor.behaviorState,yt.progress=e.actor.progress,yt.position={...e.actor.position},yt.destination={...e.actor.destination},$M=Math.max(0,i-e.serializedAt),Cf=Math.abs(yt.progress-KM)<1e-9,!0):!1}function kI(i){yt.behaviorState==="SEEKING_FOOD"&&(yt.progress=Math.min(1,yt.progress+i/zn.actorTravelMs),yt.progress>=1&&(yt.progress=1,yt.goal="FOOD REACHED",yt.behaviorState="COMPLETE"),BI())}var Fn=new Bo({config:zn,onSimulate:i=>{Fg++,kI(i),Bg()},onTierChange:i=>{Wc.add(i),i===Ce.NEAR?ls="NEAR FULL SIMULATION":i===Ce.MID?ls="MID REDUCED-RATE SIMULATION":i===Ce.FAR?ls="FAR COARSE SIMULATION":ls="DORMANT \xB7 SNAPSHOT SAVED \xB7 SIMULATION SLEEPING",Bg()},onSleep:i=>{HI(i),zI()},onWake:i=>{let e=GI(i);QM(),e&&Cf&&ea===0?ls="WAKE RESTORED \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 NO DUPLICATES \u2713":ls="WAKE VALIDATION FAILED"}});QM();function VI(i){let e=Fn.tier,t=e===Ce.DORMANT?"#ffd18a":"#a8f0b5";Li(wI,e,t),Li(RI,Kd.toFixed(1)+" m"),Li(CI,Fn.cadenceLabel(),t),Li(II,$y.toFixed(1)+" /s"),Li(DI,yt.goal),Li(PI,Math.round(yt.progress*100)+"%"),Li(LI,pl.has(zn.cellId)?"SAVED":"NONE",pl.has(zn.cellId)?"#9fe0ff":"#d8ebe5"),Li(NI,Fn.sleepCount+"/"+Fn.wakeCount),Li(OI,String(ea),ea===0?"#a8f0b5":"#ff8f8f"),Wc.has(Ce.NEAR)&&Wc.has(Ce.MID)&&Wc.has(Ce.FAR)&&Wc.has(Ce.DORMANT)&&Fn.wakeCount>0&&Cf&&ea===0&&(ls="LOD LADDER \u2713 \xB7 SLEEP/WAKE \u2713 \xB7 NO DUPLICATES \u2713"),Li(UI,ls,ls.includes("\u2713")?"#a8f0b5":"#ffe59a");let n=performance.now()-Ky;n>=1e3&&($y=Fg/(n/1e3),Fg=0,Ky=performance.now())}function WI(i,e){let t=Date.now();Kd=Math.hypot(ie.position.x-P0,ie.position.z-L0),Fn.step({distanceM:Kd,dtMs:Math.max(0,e*1e3),wallNow:t}),VI(t)}var jy=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),eS=(i,e)=>WI(i,e);eS.simLodCellId=zn.cellId;jy.some(i=>i.simLodCellId===zn.cellId)||jy.push(eS);globalThis.__livingWorld06I={marker:EI,get tier(){return Fn.tier},get playerDistanceM(){return Kd},get cadence(){return Fn.cadenceLabel()},get totalTicks(){return Fn.totalTicks},get ticksByTier(){return{...Fn.ticksByTier}},get actorGoal(){return yt.goal},get actorProgress(){return yt.progress},get sleepCount(){return Fn.sleepCount},get wakeCount(){return Fn.wakeCount},get duplicateCount(){return ea},get snapshot(){return pl.load(zn.cellId)},get lastOffscreenMs(){return $M},get progressPreserved(){return Cf},activeSceneRootCount:()=>Le.children.filter(i=>i.userData?.simLodCellId===zn.cellId).length,config:{...zn},directPlayerBehaviorTrigger:!1};var XI="06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT",N0={actorCount:192,directPlayerBehaviorTrigger:!1},tS=ie.position.x,nS=ie.position.z,qI=Date.now(),If=[],$d=0,jd=!1,Qd=!1,zg=0,O0=0,Qy=performance.now(),lg=0,hd=0,iS=!1,ki=null,Hg=null,ev=0,sS=0,vd=0,Md=0,ml=[],gl=[],Gg=0,kg=0,xi="WAITING",ra="WAITING FOR RUNTIME",Tn={NEAR:0,MID:0,FAR:0,DORMANT:0},U0=0,F0=0,B0=0,YI=document.getElementById("auditStage06J"),ZI=document.getElementById("auditActors06J"),JI=document.getElementById("auditTiers06J"),KI=document.getElementById("auditTicks06J"),$I=document.getElementById("auditFrame06J"),jI=document.getElementById("auditCpu06J"),QI=document.getElementById("auditDraw06J"),eD=document.getElementById("auditScene06J"),tD=document.getElementById("auditMemory06J"),nD=document.getElementById("auditShaders06J"),iD=document.getElementById("auditGpu06J"),sD=document.getElementById("auditState06J"),rD=document.getElementById("auditResult06J"),tv=document.getElementById("char"),oD=new Ha(.22,0),aD=new Pe({color:16777215,roughness:.9,metalness:0}),Cn=new tt(oD,aD,N0.actorCount);Cn.castShadow=!1;Cn.receiveShadow=!1;Cn.frustumCulled=!1;Cn.instanceMatrix.setUsage(Hp);Cn.userData.scaleAuditRoot=!0;Le.add(Cn);var Dc=new He,nv=new me;function cD(i){return i===Ce.NEAR?3778971:i===Ce.MID?5211062:i===Ce.FAR?8020649:5857636}function Pc(i,e){let t=tS+i.position.x,n=nS+i.position.z,s=e===Ce.DORMANT;Dc.position.set(t,ct(t,n)+.18,n),Dc.rotation.set(0,i.index*.61803398875,0);let r=s?0:.58+i.index%7*.025;Dc.scale.setScalar(r),Dc.updateMatrix(),Cn.setMatrixAt(i.index,Dc.matrix),nv.setHex(cD(e)),Cn.setColorAt(i.index,nv),jd=!0,Qd=!0}function lD(i){let e=tS+i.position.x,t=nS+i.position.z;return Math.hypot(ie.position.x-e,ie.position.z-t)}for(let i=0;i<N0.actorCount;i++){let e=fy(i,qI);e.controller=new Bo({config:uc,onSimulate:(t,n,s)=>{zg++,Hm(e,t,s),Pc(e,n)},onTierChange:t=>{Pc(e,t)},onSleep:t=>{e.visualActive||$d++,e.snapshot=py(e,1,t),e.sleepCount++,e.visualActive=!1,Pc(e,Ce.DORMANT)},onWake:(t,n)=>{e.visualActive&&$d++,e.snapshot&&my(e,e.snapshot,t),e.wakeCount++,e.visualActive=!0,Pc(e,n)}}),If.push(e),Pc(e,Ce.NEAR)}Cn.instanceMatrix.needsUpdate=!0;Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0);jd=!1;Qd=!1;function hD(){let i=0;return Le.traverse(()=>i++),i}function uD(){let i=performance.memory;return!i||!Number.isFinite(i.usedJSHeapSize)?"JS N/A":"JS "+(i.usedJSHeapSize/(1024*1024)).toFixed(1)+" MB"}function Nn(i,e,t){i&&(i.textContent=e,t&&(i.style.color=t))}function rS(){let i={NEAR:0,MID:0,FAR:0,DORMANT:0},e=0,t=0,n=0;for(let s of If){let r=s.controller.tier;i[r]=(i[r]||0)+1,s.memory.state!=="CALM"&&e++,s.suspendedGoal!=="NONE"&&t++,s.snapshot&&n++}Tn=i,U0=e,F0=t,B0=n}function dD(){if(ki){let e=ki;return e.frame_avg_ms.toFixed(2)+" / "+e.frame_p95_ms.toFixed(2)+" / "+e.frame_p99_ms.toFixed(2)+" ms"}let i=ml.length?Gg/ml.length:0;return i?i.toFixed(2)+" ms avg":"\u2014"}function fD(){if(ki){let e=ki;return e.audit_cpu_avg_ms.toFixed(3)+" / "+e.audit_cpu_p95_ms.toFixed(3)+" ms"}let i=gl.length?kg/gl.length:0;return i?i.toFixed(3)+" ms avg":"\u2014"}function pD(i){let e=Tn.NEAR+Tn.MID+Tn.FAR+Tn.DORMANT,t=st.info.memory||{},n=Array.isArray(st.info.programs)?st.info.programs.length:0,s=Hg===null?"\u2014":String(n-Hg),r=Le.children.filter(o=>o.userData?.scaleAuditRoot===!0).length;Nn(YI,xi,xi==="PASS"?"#a8f0b5":xi==="FAIL"?"#ff9b9b":"#ffe59a"),Nn(ZI,e+"/"+N0.actorCount),Nn(JI,Tn.NEAR+"/"+Tn.MID+"/"+Tn.FAR+"/"+Tn.DORMANT),Nn(KI,O0.toFixed(0)+" /s"),Nn($I,dD()),Nn(jI,fD()),Nn(QI,st.info.render.calls+" / "+st.info.render.triangles.toLocaleString()),Nn(eD,sS+" obj \xB7 "+(t.geometries||0)+" geo \xB7 "+(t.textures||0)+" tex"),Nn(tD,uD()),Nn(nD,n+" \xB7 \u0394 "+s),Nn(iD,"N/A \xB7 WebGL"),Nn(sD,"mem "+U0+" \xB7 susp "+F0+" \xB7 snap "+B0+" \xB7 root "+r),Nn(rD,ra,ki?.pass?"#a8f0b5":xi==="FAIL"?"#ff9b9b":"#ffe59a")}function mD(){rS();let i=Tn.NEAR+Tn.MID+Tn.FAR+Tn.DORMANT,e=Le.children.filter(n=>n.userData?.scaleAuditRoot===!0).length,t=$d+(e===1?0:1);ki=gy({frameSamples:ml,cpuSamples:gl,drawCallsMax:vd,trianglesMax:Md,actorCount:i,duplicateCount:t,limits:Sr}),iS=!0,ki.pass?(xi="PASS",ra="192 ACTORS \u2713 \xB7 BUDGET PASS \u2713 \xB7 STATE STABLE \u2713"):(xi="FAIL",ra="BUDGET FAIL \xB7 "+ki.failed.slice(0,3).join(" \xB7 "))}function gD(i,e){let t=performance.now(),n=Date.now(),s=lg>0?Math.max(0,i-lg):0;lg=i,!hd&&tv&&tv.textContent!=="BOOT"&&(hd=i,xi="WARMUP",ra="WARMING SHADERS + SCALE ACTORS",ml=[],gl=[],Gg=0,kg=0,vd=0,Md=0);for(let a of If)a.controller.step({distanceM:lD(a),dtMs:Math.max(0,e*1e3),wallNow:n});jd&&(Cn.instanceMatrix.needsUpdate=!0,jd=!1),Qd&&Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0,Qd=!1),rS();let r=i-Qy;r>=1e3&&(O0=zg/(r/1e3),zg=0,Qy=i);let o=performance.now()-t;if(hd&&!iS){let a=i-hd;a<Sr.warmupMs?xi="WARMUP":(xi==="WARMUP"&&(Hg=Array.isArray(st.info.programs)?st.info.programs.length:0,xi="MEASURING",ra="MEASURING 15 s PERFORMANCE WINDOW"),s>0&&(ml.push(s),Gg+=s),gl.push(o),kg+=o,vd=Math.max(vd,st.info.render.calls||0),Md=Math.max(Md,st.info.render.triangles||0),a>=Sr.warmupMs+Sr.measureMs&&mD())}i-ev>=1e3&&(sS=hD(),ev=i),pD(i)}var iv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),oS=(i,e)=>gD(i,e);oS.scaleAuditId="06J_SCALE_AUDIT";iv.some(i=>i.scaleAuditId==="06J_SCALE_AUDIT")||iv.push(oS);globalThis.__livingWorld06J={marker:XI,get stage(){return xi},get result(){return ra},get actorCount(){return If.length},get tiers(){return{...Tn}},get logicTicksPerSecond(){return O0},get memoryActive(){return U0},get suspendedGoals(){return F0},get snapshots(){return B0},get duplicateCount(){return $d},get summary(){return ki?JSON.parse(JSON.stringify(ki)):null},get budgets(){return{...Sr}},get gpuTiming(){return"N/A \xB7 WebGL"},directPlayerBehaviorTrigger:!1};var _D="07A_PRODUCTION_ARCHITECTURE_PROMOTION",xD=document.getElementById("archModules07A"),yD=document.getElementById("archBoundary07A"),vD=document.getElementById("archParity07A"),MD=document.getElementById("archStream07A"),SD=document.getElementById("archRegression07A"),ud=document.getElementById("archResult07A");function hs(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function ED(){let i={},e=new ks({initialGoal:"FOOD",initialProgress:.34});e.createHazardEvent({center:{x:0,z:0},at:1e3});let t=e.update({now:1120,actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},foodValid:!0,foodEventAt:1120,foodProgressDelta:.05});i.priority_over_recency=t.memoryState==="DISTURBED"&&t.winner==="HAZARD"&&t.goal==="HAZARD"&&t.suspendedGoal==="FOOD"&&Math.abs(t.progress-.34)<1e-12;let n=e.serialize(1600),r=new ks().restore(n,7e3);i.offscreen_time_resolution=r.memoryState==="CALM"&&r.goal==="FOOD"&&Math.abs(r.progress-.34)<1e-12&&r.offscreenMs===5400;let o=new fc,a=0,c=0,l=new pc({id:"07A_STREAM_PROOF",store:o,actorStart:{x:0,z:0},actorDestination:{x:10,z:0},initialEventId:0,attachVisual:()=>(a++,{id:a}),detachVisual:()=>{c++},updateVisual:()=>{}});l.load(1e3),l.update({dtMs:800,wallNow:1800,eventId:1});let h=l.state.actor.progress;l.unload(1900);let u=l.load(8e3);i.stream_parity=u.rehydrated===!0&&l.state.memory.state==="CALM"&&l.state.actor.goal==="FOOD"&&Math.abs(l.state.actor.progress-h)<1e-12&&l.duplicateCount===0&&a===2&&c===1;let d=0,f=new mc({onSimulate:()=>{d++}});f.step({distanceM:10,dtMs:16,wallNow:1e3}),f.step({distanceM:17,dtMs:0,wallNow:1016});for(let p=0;p<10;p++)f.step({distanceM:20,dtMs:10,wallNow:1026+p*10});f.step({distanceM:31,dtMs:0,wallNow:1200});for(let p=0;p<50;p++)f.step({distanceM:40,dtMs:10,wallNow:1210+p*10});f.step({distanceM:60,dtMs:0,wallNow:1800});let g=f.tier,y=f.totalTicks;f.step({distanceM:60,dtMs:5e3,wallNow:6800}),f.step({distanceM:45,dtMs:0,wallNow:6801}),i.lod_parity=g===Qe.DORMANT&&f.totalTicks===y&&f.tier===Qe.FAR&&f.sleepCount===1&&f.wakeCount===1,i.module_manifest=Er.modules.length===8,i.boundaries=Er.boundaries.rendering.includes("no THREE")&&Er.boundaries.dom==="none"&&Er.boundaries.productionActorPipeline==="deferred to 07B";let m=Object.entries(i).filter(([,p])=>!p).map(([p])=>p);return{pass:m.length===0,failed:m,checks:i}}var Bn=ED();hs(xD,String(Er.modules.length));hs(yD,Bn.checks.boundaries?"PURE CORE \u2713":"FAIL",Bn.checks.boundaries?"#a8f0b5":"#ff9b9b");hs(vD,Bn.checks.priority_over_recency&&Bn.checks.offscreen_time_resolution?"PASS \u2713":"FAIL",Bn.checks.priority_over_recency&&Bn.checks.offscreen_time_resolution?"#a8f0b5":"#ff9b9b");hs(MD,Bn.checks.stream_parity&&Bn.checks.lod_parity?"PASS \u2713":"FAIL",Bn.checks.stream_parity&&Bn.checks.lod_parity?"#a8f0b5":"#ff9b9b");function aS(){let i=globalThis.__livingWorld06J?.stage||"WAITING";hs(SD,i,i==="PASS"?"#a8f0b5":i==="FAIL"?"#ff9b9b":"#ffe59a"),Bn.pass?i==="PASS"?hs(ud,"PRODUCTION ARCHITECTURE PROMOTED \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):i==="FAIL"?hs(ud,"PRODUCTION CORE PASS \u2713 \xB7 06J REGRESSION FAILED","#ff9b9b"):hs(ud,"PRODUCTION CORE PASS \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):hs(ud,"ARCHITECTURE PROOF FAILED \xB7 "+Bn.failed.join(" \xB7 "),"#ff9b9b")}aS();var AD=setInterval(()=>{aS();let i=globalThis.__livingWorld06J?.stage||"WAITING";(i==="PASS"||i==="FAIL")&&clearInterval(AD)},1e3);globalThis.__productionArchitecture07A={marker:_D,manifest:Er,proof:Bn,get regression(){return globalThis.__livingWorld06J?.stage||"WAITING"}};var bD="07B_PRODUCTION_ACTOR_PIPELINE",$s=new Zu,cS=$s.registerDefinition({typeId:"HUMANOID_FORAGER_V1",asset:{id:"SOLDIER_GLB_V1",url:"./assets/Soldier.glb"},scale:.92,yawOffset:Math.PI,animationMap:{IDLE:"Idle",WALK:"Walk",RUN:"Run"},presentation:{castShadow:!1,receiveShadow:!0}}),ef=ie.position.x,tf=ie.position.z,_l=$s.createActor({id:"07B_ACTOR_A",typeId:cS.typeId,position:{x:ef-3.2,y:ct(ef-3.2,tf-6),z:tf-6},yaw:.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.22}}),xl=$s.createActor({id:"07B_ACTOR_B",typeId:cS.typeId,position:{x:ef+3.2,y:ct(ef+3.2,tf-7),z:tf-7},yaw:-.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.62}}),yi=new Ju({scene:Le}),Sd=[],Or="LOADING ASSET",lS="",TD=0,hS=new Ps(.72,.92,24);hS.rotateX(-Math.PI/2);var wD=new Jt({color:7921875,transparent:!0,opacity:.74,side:Ct,depthWrite:!1}),Ol=new tt(hS,wD,2);Ol.frustumCulled=!1;Ol.userData.productionActorMarkers=!0;var Lc=new He;for(let[i,e]of[_l,xl].entries())Lc.position.set(e.position.x,e.position.y+.025,e.position.z),Lc.rotation.set(0,0,0),Lc.scale.setScalar(1),Lc.updateMatrix(),Ol.setMatrixAt(i,Lc.matrix);Ol.instanceMatrix.needsUpdate=!0;Le.add(Ol);var RD=document.getElementById("actorStage07B"),CD=document.getElementById("actorDefinitions07B"),ID=document.getElementById("actorAssetLoads07B"),DD=document.getElementById("actorInstances07B"),PD=document.getElementById("actorBindings07B"),LD=document.getElementById("actorRoots07B"),ND=document.getElementById("actorMixers07B"),OD=document.getElementById("actorAnimations07B"),UD=document.getElementById("actorKernels07B"),FD=document.getElementById("actorDuplicates07B"),BD=document.getElementById("actorRegression07B"),Nc=document.getElementById("actorResult07B");function cn(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function zD(){return Le.children.filter(i=>i.userData?.productionActorId==="07B_ACTOR_A"||i.userData?.productionActorId==="07B_ACTOR_B")}function uS(){let i=zD(),e=new Set(i.map(u=>u.uuid)),t=Sd.filter(Boolean),n=new Set(t.map(u=>u.model?.uuid).filter(Boolean)),s=t.filter(u=>u.mixer).length,r=t.map(u=>u.resolvedAnimation).filter(u=>u&&u!=="NONE"),o=[_l.kernel,xl.kernel].filter(Boolean).length,a=globalThis.__livingWorld06J?.stage||"WAITING",c=globalThis.__productionArchitecture07A?.proof?.pass===!0,l={definitions:$s.definitions.list().length===1,asset_load_once:yi.assetCache.loadCount===1,actors:$s.size===2,bindings:yi.size===2&&t.length===2,unique_roots:i.length===2&&e.size===2&&n.size===2,independent_mixers:s===2,animations_resolved:r.length===2,kernels:o===2,stable_binding_claims:_l.bindingClaims===1&&xl.bindingClaims===1,duplicates:yi.duplicateBindingCount===0,architecture:c,regression:a==="PASS"},h=Object.entries(l).filter(([,u])=>!u).map(([u])=>u);return{pass:h.length===0,failed:h,checks:l,roots:i,bindings:t,resolved:r,regression:a,mixers:s,kernels:o}}async function HD(){try{Sd=await Promise.all([yi.bind(_l),yi.bind(xl)]),Sd[0].setAnimationIntent("IDLE",0),Sd[1].setAnimationIntent("WALK",0),Or="READY",TD=performance.now()}catch(i){Or="FAIL",lS=i?.message||String(i),console.error("07B production actor pipeline failed",i)}}HD();function GD(){let i=uS(),e=Or==="READY",t=i.checks.architecture,n=e&&t&&i.checks.definitions&&i.checks.asset_load_once&&i.checks.actors&&i.checks.bindings&&i.checks.unique_roots&&i.checks.independent_mixers&&i.checks.animations_resolved&&i.checks.kernels&&i.checks.stable_binding_claims&&i.checks.duplicates,s=Or;n&&i.regression==="PASS"?s="PASS":n&&(s="WAITING REGRESSION"),Or==="FAIL"&&(s="FAIL"),cn(RD,s,s==="PASS"?"#a8f0b5":s==="FAIL"?"#ff9b9b":"#ffe59a"),cn(CD,String($s.definitions.list().length)),cn(ID,String(yi.assetCache.loadCount)),cn(DD,$s.size+"/2"),cn(PD,yi.size+"/2"),cn(LD,i.roots.length+" / "+new Set(i.roots.map(r=>r.uuid)).size),cn(ND,String(i.mixers)),cn(OD,i.resolved.length?i.resolved.join(" / "):"\u2014"),cn(UD,String(i.kernels)),cn(FD,String(yi.duplicateBindingCount),yi.duplicateBindingCount===0?"#a8f0b5":"#ff9b9b"),cn(BD,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Or==="FAIL"?cn(Nc,"PIPELINE FAIL \xB7 "+lS,"#ff9b9b"):n&&i.regression==="PASS"?cn(Nc,"ACTOR PIPELINE \u2713 \xB7 ASSET CACHE \u2713 \xB7 INDEPENDENT INSTANCES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):n?cn(Nc,"ACTOR PIPELINE \u2713 \xB7 WAITING FOR 06J REGRESSION","#ffe59a"):e?cn(Nc,"PIPELINE CHECKING \xB7 "+i.failed.filter(r=>r!=="regression").join(" \xB7 "),"#ffe59a"):cn(Nc,"LOADING PRODUCTION ACTOR ASSET","#ffe59a")}var sv=0,rv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),dS=(i,e)=>{yi.update(e),i>=sv&&(GD(),sv=i+1e3)};dS.productionActorPipelineId="07B_PRODUCTION_ACTOR_PIPELINE";rv.some(i=>i.productionActorPipelineId==="07B_PRODUCTION_ACTOR_PIPELINE")||rv.push(dS);globalThis.__productionActorPipeline07B={marker:bD,pipeline:$s,factory:yi,actors:[_l,xl],get state(){return Or},get proof(){return uS()}};var kD="07C_STREAMED_PRODUCTION_REGION",z0=globalThis.__productionActorPipeline07B;if(!z0)throw new Error("07C requires frozen accepted 07B actor pipeline");var yl=z0.pipeline,Zs=z0.factory,ov=yl.definitions.get("HUMANOID_FORAGER_V1"),mn={x:ie.position.x+12,z:ie.position.z-10},Br=["07C_REGION_ACTOR_A","07C_REGION_ACTOR_B"],VD=[{id:Br[0],typeId:ov.typeId,position:{x:mn.x-2.5,y:ct(mn.x-2.5,mn.z),z:mn.z},yaw:.22,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:.28}},{id:Br[1],typeId:ov.typeId,position:{x:mn.x+2.5,y:ct(mn.x+2.5,mn.z-.6),z:mn.z-.6},yaw:-.22,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:.58}}],H0=new Ar,Ge=new Ho({id:"07C_PRODUCTION_REGION_A",pipeline:yl,store:H0,actorBlueprints:VD,bindActor:i=>Zs.bind(i),unbindActor:i=>Zs.unbind(i.id),loadRadiusM:24,unloadRadiusM:38}),rl=1/0,oa="",Fr="WAITING",fS=null,pS=null,av=0,mS=new Ps(5.4,5.75,48);mS.rotateX(-Math.PI/2);var WD=new Jt({color:6215887,transparent:!0,opacity:.58,side:Ct,depthWrite:!1}),G0=new Ve(mS,WD);G0.position.set(mn.x,ct(mn.x,mn.z)+.035,mn.z);G0.userData.productionRegionDiagnostic=!0;Le.add(G0);var XD=document.getElementById("regionStage07C"),qD=document.getElementById("regionDistance07C"),YD=document.getElementById("regionActors07C"),ZD=document.getElementById("regionBindings07C"),JD=document.getElementById("regionAssetLoads07C"),KD=document.getElementById("regionSnapshot07C"),$D=document.getElementById("regionOffscreen07C"),jD=document.getElementById("regionIds07C"),QD=document.getElementById("regionProgress07C"),eP=document.getElementById("regionCycles07C"),tP=document.getElementById("regionDuplicates07C"),nP=document.getElementById("regionRegression07C"),Oc=document.getElementById("regionResult07C");function jt(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function iP(){let i=new Set(Br);return Le.children.filter(e=>i.has(e.userData?.productionActorId))}function Vg(){return Br.filter(i=>Zs.getBinding(i)).length}function sP(){return H0.load(Ge.id)?.actors?.find(t=>t.actorId===Br[0])?.kernel?.goals?.progress}function k0(){return yl.getActor(Br[0])?.kernel?.goals?.progress}function gS(){let i=iP(),e=new Set(i.map(c=>c.userData?.productionActorId)),t=Ge.activeActors,n=Ge.duplicateCount+Zs.duplicateBindingCount,s=globalThis.__livingWorld06J?.stage||"WAITING",r=!!yl.getActor("07B_ACTOR_A")&&!!yl.getActor("07B_ACTOR_B"),o={asset_load_one:Zs.assetCache.loadCount===1,static_controls_present:r,actor_count:Ge.isActive?t.length===2:t.length===0,bindings:Ge.isActive?Vg()===2:Vg()===0,roots:Ge.isActive?i.length===2&&e.size===2:i.length===0,snapshot:Ge.unloadCount===0||Ge.hasSnapshot,ids_stable:Ge.restoreCount===0||Ge.lastRestoreIdsStable,progress_preserved:Ge.restoreCount===0||Ge.lastRestoreProgressPreserved,duplicates:n===0,regression:s==="PASS"},a=Object.entries(o).filter(([,c])=>!c).map(([c])=>c);return{pass:a.length===0,failed:a,checks:o,duplicates:n,regression:s,roots:i,activeActors:t}}function vl(){let i=gS(),e=Ge.lifecycle;jt(XD,e,e==="ACTIVE"?"#a8f0b5":e==="UNLOADED"?"#ffd18a":e==="LOADING"||e==="REHYDRATING"?"#9fe0ff":"#ffe59a"),jt(qD,rl.toFixed(1)+" m"),jt(YD,Ge.activeActors.length+"/2"),jt(ZD,Vg()+"/2"),jt(JD,String(Zs.assetCache.loadCount),Zs.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),jt(KD,Ge.hasSnapshot?"SAVED":"NONE",Ge.hasSnapshot?"#9fe0ff":"#d8ebe5"),jt($D,(Ge.lastOffscreenMs/1e3).toFixed(1)+" s"),jt(jD,Ge.restoreCount===0?"PENDING":Ge.lastRestoreIdsStable?"STABLE \u2713":"FAIL",Ge.restoreCount===0?"#ffe59a":Ge.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b");let n=k0(),s=sP(),r=Number.isFinite(n)?Math.round(n*100)+"%":Number.isFinite(s)?Math.round(s*100)+"% saved":"\u2014";jt(QD,r),jt(eP,Ge.unloadCount+"/"+Ge.restoreCount),jt(tP,String(i.duplicates),i.duplicates===0?"#a8f0b5":"#ff9b9b"),jt(nP,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),oa?jt(Oc,"REGION FAIL \xB7 "+oa,"#ff9b9b"):Ge.restoreCount>0&&Ge.isActive&&Ge.lastRestoreIdsStable&&Ge.lastRestoreProgressPreserved&&Zs.assetCache.loadCount===1&&i.duplicates===0&&i.regression==="PASS"?jt(Oc,"REGION RESTORED \u2713 \xB7 IDS STABLE \u2713 \xB7 PROGRESS PRESERVED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 NO DUPLICATES \u2713 \xB7 06J REGRESSION PASS \u2713","#a8f0b5"):e==="UNLOADED"&&Ge.hasSnapshot?jt(Oc,"REGION UNLOADED \u2713 \xB7 ACTORS REMOVED \u2713 \xB7 SNAPSHOT SAVED \u2713","#ffe59a"):jt(Oc,Fr,"#ffe59a")}function rP(i){Ge.operation||(Fr=Ge.hasSnapshot?"REHYDRATING PRODUCTION REGION":"LOADING PRODUCTION REGION",Ge.load(i).then(e=>{oa="",e.rehydrated?(pS=k0(),Fr="REGION REHYDRATED \xB7 VERIFYING CONTINUITY"):Fr="REGION ACTIVE \xB7 LEAVE PAST 38 m",vl()}).catch(e=>{oa=e?.message||String(e),vl()}))}function oP(i){Ge.operation||(fS=k0(),Fr="SERIALIZING / UNLOADING REGION",Ge.unload(i).then(()=>{oa="",Fr="REGION UNLOADED \xB7 RETURN INSIDE 24 m",vl()}).catch(e=>{oa=e?.message||String(e),vl()}))}var cv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),_S=(i,e)=>{let t=Date.now();rl=Math.hypot(ie.position.x-mn.x,ie.position.z-mn.z),Ge.operation||(Ge.lifecycle==="UNLOADED"&&rl<=Ge.loadRadiusM?rP(t):Ge.lifecycle==="ACTIVE"&&rl>=Ge.unloadRadiusM&&oP(t)),Ge.isActive&&Ge.update({dtMs:Math.max(0,e*1e3),now:t,foodProgressPerSecond:.006}),i>=av&&(vl(),av=i+500)};_S.productionRegionId="07C_PRODUCTION_REGION";cv.some(i=>i.productionRegionId==="07C_PRODUCTION_REGION")||cv.push(_S);globalThis.__streamedProductionRegion07C={marker:kD,region:Ge,store:H0,center:{...mn},actorIds:[...Br],get distanceM(){return rl},get proof(){return gS()},get lastUnloadProgress(){return fS},get lastRestoreProgress(){return pS}};var aP="07D_PRODUCTION_VERTICAL_SLICE",Ys=globalThis.__streamedProductionRegion07C,V0=globalThis.__productionActorPipeline07B;if(!Ys||!V0)throw new Error("07D requires frozen accepted 07B + 07C runtime");var as=Ys.region,xS=V0.pipeline,ol=V0.factory,Wg="07C_REGION_ACTOR_A",On=new ju({region:as,pipeline:xS,actorId:Wg,hazardCenter:{x:Ys.center.x,z:Ys.center.z},triggerDelayMs:1800}),lv="",hv=0,Xc=!1,qc=!1,yS=null,vS=new Ps(1.05,1.35,32);vS.rotateX(-Math.PI/2);var Rr=new Jt({color:6281423,transparent:!0,opacity:.62,side:Ct,depthWrite:!1}),Df=new Ve(vS,Rr);Df.position.set(Ys.center.x,ct(Ys.center.x,Ys.center.z)+.05,Ys.center.z);Df.userData.productionVerticalSliceBeacon=!0;Le.add(Df);var cP=document.getElementById("sliceStage07D"),lP=document.getElementById("sliceRegion07D"),hP=document.getElementById("sliceGoal07D"),uP=document.getElementById("sliceMemory07D"),dP=document.getElementById("sliceAnim07D"),fP=document.getElementById("sliceBehavior07D"),pP=document.getElementById("sliceStream07D"),mP=document.getElementById("sliceIds07D"),gP=document.getElementById("sliceProgress07D"),_P=document.getElementById("sliceAsset07D"),xP=document.getElementById("sliceDuplicates07D"),yP=document.getElementById("sliceRegression07D"),dd=document.getElementById("sliceResult07D");function ln(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function Xg(){let i=xS.getActor(Wg);if(!i)return{actor:null,binding:null,goal:"UNLOADED",memory:"UNLOADED",intent:"NONE",progress:null};let e=ol.getBinding(Wg);return{actor:i,binding:e,goal:i.kernel.goals.activeGoal,memory:i.kernel.memory.state,intent:i.animationIntent,progress:i.kernel.goals.progress}}function vP(){let i=Xg();if(!i.actor||!i.binding)return i;let e="WALK";return i.goal==="HAZARD"?e="RUN":i.goal==="FOOD REACHED"&&(e="IDLE"),(lv!==e||i.actor.animationIntent!==e)&&(i.binding.setAnimationIntent(e,.12),lv=e),i.memory==="DISTURBED"?(Rr.color.setHex(14981698),Rr.opacity=.9):i.memory==="SETTLING"?(Rr.color.setHex(14271595),Rr.opacity=.76):(Rr.color.setHex(6281423),Rr.opacity=.62),Xg()}function hg(){return as.duplicateCount+ol.duplicateBindingCount}function MP(){let i=Xg(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=On.completion({assetLoadCount:ol.assetCache.loadCount,duplicateCount:hg(),regressionStatus:e});yS=t,Xc=On.hazardObserved&&On.recoveryObserved&&t.checks.progress_preserved,qc=On.streamOutObserved&&On.restoreObserved&&t.checks.region_ids_stable&&t.checks.region_progress_preserved,ln(cP,t.pass?"PASS":On.stage,t.pass?"#a8f0b5":"#ffe59a"),ln(lP,as.lifecycle,as.isActive?"#a8f0b5":as.lifecycle==="UNLOADED"?"#ffd18a":"#9fe0ff"),ln(hP,i.goal,i.goal==="HAZARD"?"#ffd18a":"#a8f0b5"),ln(uP,i.memory,i.memory==="CALM"?"#a8f0b5":"#ffd18a"),ln(dP,i.binding?.resolvedAnimation||i.intent||"NONE"),ln(fP,Xc?"PASS \u2713":On.hazardObserved?"HAZARD OBSERVED":On.hazardEventId?"EVENT EMITTED":"WAITING",Xc?"#a8f0b5":"#ffe59a"),ln(pP,qc?"PASS \u2713":On.streamOutObserved?"UNLOADED \u2713 \xB7 RETURN":"PENDING",qc?"#a8f0b5":"#ffe59a"),ln(mP,as.restoreCount===0?"PENDING":as.lastRestoreIdsStable?"STABLE \u2713":"FAIL",as.restoreCount===0?"#ffe59a":as.lastRestoreIdsStable?"#a8f0b5":"#ff9b9b"),ln(gP,Number.isFinite(i.progress)?Math.round(i.progress*100)+"%":Number.isFinite(On.recoveredProgress)?Math.round(On.recoveredProgress*100)+"% saved":"\u2014"),ln(_P,String(ol.assetCache.loadCount),ol.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),ln(xP,String(hg()),hg()===0?"#a8f0b5":"#ff9b9b"),ln(yP,e,e==="PASS"?"#a8f0b5":e==="FAIL"?"#ff9b9b":"#ffe59a"),t.pass?ln(dd,"PRODUCTION VERTICAL SLICE \u2713 \xB7 BEHAVIOR LOOP \u2713 \xB7 STREAM RESTORE \u2713 \xB7 ASSET PIPELINE \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):e==="FAIL"?ln(dd,"VERTICAL SLICE BLOCKED \xB7 PERFORMANCE REGRESSION FAILED","#ff9b9b"):Xc&&!qc?ln(dd,"BEHAVIOR LOOP \u2713 \xB7 LEAVE REGION PAST 38 m, THEN RETURN INSIDE 24 m","#ffe59a"):ln(dd,"OBSERVE FOOD \u2192 HAZARD \u2192 FOOD RECOVERY","#ffe59a")}var uv=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),MS=i=>{let e=Date.now();On.update(e),vP();let t=1+Math.sin(i*.006)*.08;Df.scale.setScalar(t),i>=hv&&(MP(),hv=i+500)};MS.productionVerticalSliceId="07D_PRODUCTION_VERTICAL_SLICE";uv.some(i=>i.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")||uv.push(MS);globalThis.__productionVerticalSlice07D={marker:aP,coordinator:On,get completion(){return yS},get behaviorLoopPass(){return Xc},get streamPass(){return qc}};var SP="08A_MULTI_REGION_PRODUCTION_WORLD",W0=globalThis.__productionActorPipeline07B;if(!W0)throw new Error("08A requires frozen accepted 07B actor pipeline");var ug=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);for(let i=ug.length-1;i>=0;i--){let e=ug[i];(e?.productionRegionId==="07C_PRODUCTION_REGION"||e?.productionVerticalSliceId==="07D_PRODUCTION_VERTICAL_SLICE")&&ug.splice(i,1)}for(let i of[...Le.children])(i.userData?.productionRegionDiagnostic===!0||i.userData?.productionVerticalSliceBeacon===!0)&&Le.remove(i);var X0=W0.pipeline,aa=W0.factory,dv=X0.definitions.get("HUMANOID_FORAGER_V1"),Pf=Number.isFinite(ie.rotation.y)?ie.rotation.y:0,EP=ie.position.x,AP=ie.position.z,bP=Math.sin(Pf),TP=Math.cos(Pf),wP=Math.cos(Pf),RP=-Math.sin(Pf);function dg(i,e){return{x:EP+bP*i+wP*e,z:AP+TP*i+RP*e}}var Js={A:dg(18,0),B:dg(18,48),C:dg(-30,48)},Lf=new Ar;function CP(i,e){return[{id:"08A_"+i+"_ACTOR_1",typeId:dv.typeId,position:{x:e.x-1.9,y:ct(e.x-1.9,e.z),z:e.z},yaw:.18,animationIntent:"WALK",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.21:i==="B"?.41:.61}},{id:"08A_"+i+"_ACTOR_2",typeId:dv.typeId,position:{x:e.x+1.9,y:ct(e.x+1.9,e.z-.5),z:e.z-.5},yaw:-.18,animationIntent:"IDLE",kernelOptions:{initialGoal:"FOOD",initialProgress:i==="A"?.31:i==="B"?.51:.71}}]}function fg(i,e){return new Ho({id:"08A_WORLD_REGION_"+i,pipeline:X0,store:Lf,actorBlueprints:CP(i,e),bindActor:t=>aa.bind(t),unbindActor:t=>aa.unbind(t.id),loadRadiusM:24,unloadRadiusM:38})}var _n={A:fg("A",Js.A),B:fg("B",Js.B),C:fg("C",Js.C)},Ul=new ed({entries:[{id:"A",center:Js.A,region:_n.A},{id:"B",center:Js.B,region:_n.B},{id:"C",center:Js.C,region:_n.C}]}),Gi=new Set,al=!1,fv=null,IP=null,Ed=!1,Yo="",pv=0,mv=0,pg=0,DP=100,SS=new Ps(4.8,5.15,48);SS.rotateX(-Math.PI/2);var PP=[new Jt({color:6281423,transparent:!0,opacity:.55,side:Ct,depthWrite:!1}),new Jt({color:6262488,transparent:!0,opacity:.55,side:Ct,depthWrite:!1}),new Jt({color:10121176,transparent:!0,opacity:.55,side:Ct,depthWrite:!1})];for(let[i,e]of["A","B","C"].entries()){let t=Js[e],n=new Ve(SS,PP[i]);n.position.set(t.x,ct(t.x,t.z)+.04,t.z),n.userData.worldRegion08A=e,Le.add(n)}var LP=document.getElementById("worldStage08A"),NP=document.getElementById("worldNearest08A"),OP=document.getElementById("worldDistances08A"),UP=document.getElementById("worldStates08A"),FP=document.getElementById("worldActive08A"),BP=document.getElementById("worldVisited08A"),zP=document.getElementById("worldSnapshots08A"),HP=document.getElementById("worldProgress08A"),GP=document.getElementById("worldAssets08A"),kP=document.getElementById("worldDuplicates08A"),VP=document.getElementById("worldRegression08A"),Tr=document.getElementById("worldResult08A");function Kt(i,e,t){i&&(i.textContent!==e&&(i.textContent=e),t&&i.style.color!==t&&(i.style.color=t))}function gv(i){return X0.getActor("08A_"+i+"_ACTOR_1")?.kernel?.goals?.progress}function WP(){return["A","B","C"].filter(i=>_n[i].isActive)}function XP(){return _n.A.duplicateCount+_n.B.duplicateCount+_n.C.duplicateCount+aa.duplicateBindingCount}function qP(){return Ul.nearest({x:ie.position.x,z:ie.position.z})}function ES(){let i=WP(),e=globalThis.__livingWorld06J?.stage||"WAITING",t=["A","B","C"].every(l=>Gi.has(l)),n=["A","B","C"].every(l=>Lf.has("08A_WORLD_REGION_"+l)),s=_n.A.restoreCount>0&&_n.A.lastRestoreIdsStable&&_n.A.lastRestoreProgressPreserved,r=aa.assetCache.loadCount===1,o=XP(),a={region_count:Ul.size===3,active_count:i.length<=1,all_visited:t,all_snapshots:n,a_restored:s,asset_load_one:r,duplicates:o===0,regression:e==="PASS"},c=Object.entries(a).filter(([,l])=>!l).map(([l])=>l);return{pass:c.length===0,failed:c,checks:a,active:i,regression:e,duplicates:o}}async function YP(i,e){if(!Ed){Ed=!0;try{await Ul.step({playerPosition:{x:ie.position.x,z:ie.position.z},dtMs:Math.max(0,e*1e3),now:Date.now(),foodProgressPerSecond:.004});for(let t of["A","B","C"])_n[t].isActive&&(Gi.has(t)||(Gi.add(t),t==="A"&&!Number.isFinite(fv)&&(fv=gv("A"))),t==="A"&&Gi.has("B")&&Gi.has("C")&&_n.A.restoreCount>0&&(al=!0,IP=gv("A")));Yo=""}catch(t){Yo=t?.message||String(t)}finally{Ed=!1}}}function ZP(){let i=ES(),e=qP(),t=Ul.distances({x:ie.position.x,z:ie.position.z}),n=i.active,s=["A","B","C"].map(c=>_n[c].lifecycle[0]).join("/"),r=["A","B","C"].map(c=>Lf.has("08A_WORLD_REGION_"+c)?"S":"\u2014").join("/"),o=["A","B","C"].map(c=>Gi.has(c)?c:"\u2014").join(""),a=al&&_n.A.lastRestoreProgressPreserved;Kt(LP,i.pass?"PASS":Yo?"FAIL":"ACTIVE",i.pass?"#a8f0b5":Yo?"#ff9b9b":"#ffe59a"),Kt(NP,e?e.id+" "+e.distance.toFixed(1)+" m":"\u2014"),Kt(OP,t.map(c=>c.id+":"+c.distance.toFixed(0)).join(" \xB7 ")),Kt(UP,s),Kt(FP,n.length?n.join(","):"NONE",n.length<=1?"#a8f0b5":"#ff9b9b"),Kt(BP,o),Kt(zP,r),Kt(HP,a?"PRESERVED \u2713":al?"FAIL":"PENDING",a?"#a8f0b5":"#ffe59a"),Kt(GP,String(aa.assetCache.loadCount),aa.assetCache.loadCount===1?"#a8f0b5":"#ff9b9b"),Kt(kP,String(i.duplicates),i.duplicates===0?"#a8f0b5":"#ff9b9b"),Kt(VP,i.regression,i.regression==="PASS"?"#a8f0b5":i.regression==="FAIL"?"#ff9b9b":"#ffe59a"),Yo?Kt(Tr,"WORLD FAIL \xB7 "+Yo,"#ff9b9b"):i.pass?Kt(Tr,"MULTI-REGION WORLD \u2713 \xB7 A/B/C VISITED \u2713 \xB7 STATE ISOLATED \u2713 \xB7 RETURN RESTORED \u2713 \xB7 ASSET LOAD 1 \u2713 \xB7 PERFORMANCE PASS \u2713","#a8f0b5"):Gi.has("A")?Gi.has("B")?Gi.has("C")?al?Kt(Tr,"RETURNED TO A \xB7 WAITING FOR REGRESSION / RESTORE CHECKS","#ffe59a"):Kt(Tr,"A/B/C VISITED \u2713 \xB7 RETURN TO REGION A","#ffe59a"):Kt(Tr,"A/B VISITED \u2713 \xB7 MOVE TO REGION C","#ffe59a"):Kt(Tr,"A VISITED \u2713 \xB7 MOVE TO REGION B","#ffe59a"):Kt(Tr,"VISIT REGION A","#ffe59a")}var _v=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]),AS=(i,e)=>{if(pg+=Math.max(0,e*1e3),i>=mv&&!Ed){let t=pg/1e3;pg=0,mv=i+DP,YP(i,t)}i>=pv&&(ZP(),pv=i+500)};AS.multiRegionWorldId="08A_MULTI_REGION_WORLD";_v.some(i=>i.multiRegionWorldId==="08A_MULTI_REGION_WORLD")||_v.push(AS);globalThis.__multiRegionWorld08A={marker:SP,world:Ul,regions:_n,store:Lf,centers:Js,visited:Gi,get returnedToA(){return al},get proof(){return ES()}};
