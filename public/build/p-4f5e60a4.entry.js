import{r as t,h as e,g as s,a as i}from"./p-2968d1ce.js";import{m as r,a as n,s as o,b as a,c as h,d as c,e as l,f as u,g as f,h as p,i as d,j as g,k as b,l as m,n as w,o as y,p as v}from"./p-073ac660.js";import{A as E}from"./p-315d1b58.js";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t){const e=[];let s=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[s++]=r:r<2048?(e[s++]=r>>6|192,e[s++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[s++]=r>>18|240,e[s++]=r>>12&63|128,e[s++]=r>>6&63|128,e[s++]=63&r|128):(e[s++]=r>>12|224,e[s++]=r>>6&63|128,e[s++]=63&r|128)}return e},D={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],n=e+1<t.length,o=n?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0;let c=(15&o)<<2|h>>6,l=63&h;a||(l=64,n||(c=64)),i.push(s[r>>2],s[(3&r)<<4|o>>4],s[c],s[l])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let s=0,i=0;for(;s<t.length;){const r=t[s++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const n=t[s++];e[i++]=String.fromCharCode((31&r)<<6|63&n)}else if(r>239&&r<365){const n=((7&r)<<18|(63&t[s++])<<12|(63&t[s++])<<6|63&t[s++])-65536;e[i++]=String.fromCharCode(55296+(n>>10)),e[i++]=String.fromCharCode(56320+(1023&n))}else{const n=t[s++],o=t[s++];e[i++]=String.fromCharCode((15&r)<<12|(63&n)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=s[t.charAt(e++)],n=e<t.length?s[t.charAt(e)]:0;++e;const o=e<t.length?s[t.charAt(e)]:64;++e;const a=e<t.length?s[t.charAt(e)]:64;if(++e,null==r||null==n||null==o||null==a)throw new S;i.push(r<<2|n>>4),64!==o&&(i.push(n<<4&240|o>>2),64!==a&&i.push(o<<6&192|a))}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A=function(t){return function(t){const e=I(t);return D.encodeByteArray(e,!0)}(t).replace(/\./g,"")},O=()=>{try{
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return D.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,s))}}}class B extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name="FirebaseError",Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],n=r?function(t,e){return t.replace(L,((t,s)=>{const i=e[s];return null!=i?String(i):`<${s}?>`}))}(r,s):"Error";return new B(i,`${this.serviceName}: ${n} (${i}).`,s)}}const L=/\{\$([^}]+)}/g;function $(t,e){if(t===e)return!0;const s=Object.keys(t),i=Object.keys(e);for(const r of s){if(!i.includes(r))return!1;const s=t[r],n=e[r];if(k(s)&&k(n)){if(!$(s,n))return!1}else if(s!==n)return!1}for(const t of i)if(!s.includes(t))return!1;return!0}function k(t){return null!==t&&"object"==typeof t}class C{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new T;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&t.resolve(s)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(s)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:s})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[t,e]of this.instancesDeferred.entries())s===this.normalizeInstanceIdentifier(t)&&e.resolve(i);return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=null!==(s=this.onInitCallbacks.get(i))&&void 0!==s?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const n=this.instances.get(i);return n&&t(n,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch(t){}var i;return s||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class j{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new M(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(N||(N={}));const x={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},U=N.INFO,_={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},F=(t,e,...s)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=_[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...s)};let R,H;const V=new WeakMap,W=new WeakMap,z=new WeakMap,J=new WeakMap,Y=new WeakMap;let K={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return W.get(t);if("objectStoreNames"===e)return t.objectStoreNames||z.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return G(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function q(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(H||(H=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Z(this),t),G(V.get(this))}:function(...t){return G(e.apply(Z(this),t))}:function(t,...s){const i=e.call(Z(this),t,...s);return z.set(i,t.sort?t.sort():[t]),G(i)}:(t instanceof IDBTransaction&&function(t){if(W.has(t))return;const e=new Promise(((e,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",n),t.removeEventListener("abort",n)},r=()=>{e(),i()},n=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",n),t.addEventListener("abort",n)}));W.set(t,e)}(t),s=t,(R||(R=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>s instanceof t))?new Proxy(t,K):t);var e,s}function G(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",n)},r=()=>{e(G(t.result)),i()},n=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",n)}));return e.then((e=>{e instanceof IDBCursor&&V.set(e,t)})).catch((()=>{})),Y.set(e,t),e}(t);if(J.has(t))return J.get(t);const e=q(t);return e!==t&&(J.set(t,e),Y.set(e,t)),e}const Z=t=>Y.get(t),Q=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],tt=new Map;function et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(tt.get(e))return tt.get(e);const s=e.replace(/FromIndex$/,""),i=e!==s,r=X.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Q.includes(s))return;const n=async function(t,...e){const n=this.transaction(t,r?"readwrite":"readonly");let o=n.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[s](...e),r&&n.done]))[0]};return tt.set(e,n),n}var st;st=K,K={...st,get:(t,e,s)=>et(t,e)||st.get(t,e,s),has:(t,e)=>!!et(t,e)||st.has(t,e)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const rt="@firebase/app",nt=new class{constructor(t){this.name=t,this._logLevel=U,this._logHandler=F,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?x[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}("@firebase/app"),ot={[rt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},at=new Map,ht=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(s){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function lt(t){const e=t.name;if(ht.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const e of at.values())ct(e,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new P("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new C("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}function pt(t,e,s){var i;let r=null!==(i=ot[t])&&void 0!==i?i:t;s&&(r+=`-${s}`);const n=r.match(/\s|\//),o=e.match(/\s|\//);if(n||o){const t=[`Unable to register library "${r}" with version "${e}":`];return n&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),n&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void nt.warn(t.join(" "))}lt(new C(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="firebase-heartbeat-store";let gt=null;function bt(){return gt||(gt=function(t,e,{blocked:s,upgrade:i,blocking:r,terminated:n}={}){const o=indexedDB.open(t,e),a=G(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(G(o.result),t.oldVersion,t.newVersion,G(o.transaction),t)})),s&&o.addEventListener("blocked",(t=>s(t.oldVersion,t.newVersion,t))),a.then((t=>{n&&t.addEventListener("close",(()=>n())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dt)}}}).catch((t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})}))),gt}async function mt(t,e){try{const s=(await bt()).transaction(dt,"readwrite"),i=s.objectStore(dt);await i.put(e,wt(t)),await s.done}catch(t){if(t instanceof B)nt.warn(t.message);else{const e=ut.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});nt.warn(e.message)}}}function wt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Et(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=vt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=vt(),{heartbeatsToSend:e,unsentEntries:s}=function(t,e=1024){const s=[];let i=t.slice();for(const r of t){const t=s.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),It(s)>e){t.dates.pop();break}}else if(s.push({agent:r.agent,dates:[r.date]}),It(s)>e){s.pop();break}i=i.slice(1)}return{heartbeatsToSend:s,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=A(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vt(){return(new Date).toISOString().substring(0,10)}class Et{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let s=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),s||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{s=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(t){try{const e=await bt();return await e.transaction(dt).objectStore(dt).get(wt(t))}catch(t){if(t instanceof B)nt.warn(t.message);else{const e=ut.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});nt.warn(e.message)}}}(this.app)||{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return mt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return mt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}}}function It(t){return A(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(new C("platform-logger",(t=>new it(t)),"PRIVATE")),lt(new C("heartbeat",(t=>new yt(t)),"PRIVATE")),pt(rt,"0.9.14",""),pt(rt,"0.9.14","esm2017"),pt("fire-js",""),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pt("firebase","10.0.0","app");let Dt=class{constructor(e){t(this,e)}componentWillLoad(){const t=function(t,e={}){let s=t;"object"!=typeof e&&(e={name:e});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw ut.create("bad-app-name",{appName:String(r)});var n;if(s||(s=null===(n=O())||void 0===n?void 0:n.config),!s)throw ut.create("no-options");const o=at.get(r);if(o){if($(s,o.options)&&$(i,o.config))return o;throw ut.create("duplicate-app",{appName:r})}const a=new j(r);for(const t of ht.values())a.addComponent(t);const h=new ft(s,i,a);return at.set(r,h),h}({apiKey:"AIzaSyCaMUNdBLEjWR6uBg2anDBwspLNpV1Rh9M",authDomain:"herbedsauce-cd6f6.firebaseapp.com",projectId:"herbedsauce-cd6f6",storageBucket:"herbedsauce-cd6f6.appspot.com",messagingSenderId:"526668315816",appId:"1:526668315816:web:e804070b7346911948d69d",measurementId:"G-2LYQZLZJYK"},"herbedsauces");console.log(t.name)}render(){return e("div",null,e("header",null,e("h1",null,"Stencil App Starter")),e("main",null,e("stencil-router",null,e("stencil-route-switch",{scrollTopOffset:0},e("stencil-route",{url:"/",component:"app-home",exact:!0}),e("stencil-route",{url:"/profile/:name",component:"app-profile"})))))}};Dt.style="header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";let St=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=r(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!n(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?e(this.component,Object.assign({},t)):void 0}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};E.injectProps(St,["location","history","historyType","routeViewsUpdated"]),St.style="stencil-route.inactive{display:none}";const At=t=>"STENCIL-ROUTE"===t.tagName;let Ot=class{constructor(e){t(this,e),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=i(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(At).map(((s,i)=>{const n=r(t.pathname,{path:s.url,exact:s.exact,strict:!0});return n&&-1===e&&(e=i),{el:s,match:n}})),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return e("slot",null)}get el(){return s(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};E.injectProps(Ot,["location","routeViewsUpdated"]);const Tt=(t,...e)=>{t||console.warn(...e)},Bt=()=>{let t,e=[];return{setPrompt:e=>(Tt(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,i,r)=>{if(null!=t){const n="function"==typeof t?t(e,s):t;"string"==typeof n?"function"==typeof i?i(n,r):(Tt(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==n)}else r(!0)},appendListener:t=>{let s=!0;const i=(...e)=>{s&&t(...e)};return e.push(i),()=>{s=!1,e=e.filter((t=>t!==i))}},notifyListeners:(...t)=>{e.forEach((e=>e(...t)))}}},Pt=(t,e="scrollPositions")=>{let s=new Map;const i=(e,i)=>{if(s.set(e,i),o(t,"sessionStorage")){const e=[];s.forEach(((t,s)=>{e.push([s,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(o(t,"sessionStorage")){const i=t.sessionStorage.getItem(e);s=i?new Map(JSON.parse(i)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{i(e,[t.scrollX,t.scrollY])}}},Lt={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+y(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:y,decodePath:l},slash:{encodePath:l,decodePath:l}},$t=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},kt={browser:(t,e={})=>{let s=!1;const i=t.history,r=t.location,n=t.navigator,o=a(t),w=!h(n),y=Pt(t),v=null!=e.forceRefresh&&e.forceRefresh,E=null!=e.getUserConfirmation?e.getUserConfirmation:b,I=null!=e.keyLength?e.keyLength:6,D=e.basename?c(l(e.basename)):"",S=()=>{try{return t.history.state||{}}catch(t){return{}}},A=t=>{t=t||{};const{key:e,state:s}=t,{pathname:i,search:n,hash:o}=r;let a=i+n+o;return Tt(!D||p(a,D),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+D+'".'),D&&(a=d(a,D)),u(a,s,e||f(I))},O=Bt(),T=t=>{y.capture(_.location.key),Object.assign(_,t),_.location.scrollPosition=y.get(_.location.key),_.length=i.length,O.notifyListeners(_.location,_.action)},B=t=>{m(n,t)||L(A(t.state))},P=()=>{L(A(S()))},L=t=>{if(s)s=!1,T();else{const e="POP";O.confirmTransitionTo(t,e,E,(s=>{s?T({action:e,location:t}):$(t)}))}},$=t=>{let e=C.indexOf(_.location.key),i=C.indexOf(t.key);-1===e&&(e=0),-1===i&&(i=0);const r=e-i;r&&(s=!0,x(r))},k=A(S());let C=[k.key],M=0,j=!1;const N=t=>D+g(t),x=t=>{i.go(t)},U=e=>{M+=e,1===M?(t.addEventListener("popstate",B),w&&t.addEventListener("hashchange",P)):0===M&&(t.removeEventListener("popstate",B),w&&t.removeEventListener("hashchange",P))},_={length:i.length,action:"POP",location:k,createHref:N,push:(t,e)=>{Tt(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s="PUSH",n=u(t,e,f(I),_.location);O.confirmTransitionTo(n,s,E,(t=>{if(!t)return;const e=N(n),{key:a,state:h}=n;if(o)if(i.pushState({key:a,state:h},"",e),v)r.href=e;else{const t=C.indexOf(_.location.key),e=C.slice(0,-1===t?0:t+1);e.push(n.key),C=e,T({action:s,location:n})}else Tt(void 0===h,"Browser history cannot push state in browsers that do not support HTML5 history"),r.href=e}))},replace:(t,e)=>{Tt(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s="REPLACE",n=u(t,e,f(I),_.location);O.confirmTransitionTo(n,s,E,(t=>{if(!t)return;const e=N(n),{key:a,state:h}=n;if(o)if(i.replaceState({key:a,state:h},"",e),v)r.replace(e);else{const t=C.indexOf(_.location.key);-1!==t&&(C[t]=n.key),T({action:s,location:n})}else Tt(void 0===h,"Browser history cannot replace state in browsers that do not support HTML5 history"),r.replace(e)}))},go:x,goBack:()=>x(-1),goForward:()=>x(1),block:(t="")=>{const e=O.setPrompt(t);return j||(U(1),j=!0),()=>(j&&(j=!1,U(-1)),e())},listen:t=>{const e=O.appendListener(t);return U(1),()=>{U(-1),e()}},win:t};return _},hash:(t,e={})=>{let s=!1,i=null,r=0,n=!1;const o=t.location,a=t.history,h=w(t.navigator),m=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:y=b,hashType:E="slash"}=e,I=e.basename?c(l(e.basename)):"",{encodePath:D,decodePath:S}=Lt[E],A=()=>{const t=o.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},O=t=>{const e=o.href.indexOf("#");o.replace(o.href.slice(0,e>=0?e:0)+"#"+t)},T=()=>{let t=S(A());return Tt(!I||p(t,I),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+I+'".'),I&&(t=d(t,I)),u(t,void 0,f(m))},B=Bt(),P=t=>{Object.assign(_,t),_.length=a.length,B.notifyListeners(_.location,_.action)},L=()=>{const t=A(),e=D(t);if(t!==e)O(e);else{const t=T(),e=_.location;if(!s&&v(e,t))return;if(i===g(t))return;i=null,$(t)}},$=t=>{if(s)s=!1,P();else{const e="POP";B.confirmTransitionTo(t,e,y,(s=>{s?P({action:e,location:t}):k(t)}))}},k=t=>{let e=N.lastIndexOf(g(_.location)),i=N.lastIndexOf(g(t));-1===e&&(e=0),-1===i&&(i=0);const r=e-i;r&&(s=!0,x(r))},C=A(),M=D(C);C!==M&&O(M);const j=T();let N=[g(j)];const x=t=>{Tt(h,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},U=(t,e)=>{r+=e,1===r?t.addEventListener("hashchange",L):0===r&&t.removeEventListener("hashchange",L)},_={length:a.length,action:"POP",location:j,createHref:t=>"#"+D(I+g(t)),push:(t,e)=>{Tt(void 0===e,"Hash history cannot push state; it is ignored");const s="PUSH",r=u(t,void 0,f(m),_.location);B.confirmTransitionTo(r,s,y,(t=>{if(!t)return;const e=g(r),n=D(I+e);if(A()!==n){i=e,(t=>{o.hash=t})(n);const t=N.lastIndexOf(g(_.location)),a=N.slice(0,-1===t?0:t+1);a.push(e),N=a,P({action:s,location:r})}else Tt(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()}))},replace:(t,e)=>{Tt(void 0===e,"Hash history cannot replace state; it is ignored");const s="REPLACE",r=u(t,void 0,f(m),_.location);B.confirmTransitionTo(r,s,y,(t=>{if(!t)return;const e=g(r),n=D(I+e);A()!==n&&(i=e,O(n));const o=N.indexOf(g(_.location));-1!==o&&(N[o]=e),P({action:s,location:r})}))},go:x,goBack:()=>x(-1),goForward:()=>x(1),block:(e="")=>{const s=B.setPrompt(e);return n||(U(t,1),n=!0),()=>(n&&(n=!1,U(t,-1)),s())},listen:e=>{const s=B.appendListener(e);return U(t,1),()=>{U(t,-1),s()}},win:t};return _}};let Ct=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=i(this,"isServer"),this.queue=i(this,"queue")}componentWillLoad(){this.history=kt[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=$t(t,this.root),this.location=t})),this.location=$t(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write((()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])})):this.queue.write((()=>{e.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return e(E.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},e("slot",null))}get el(){return s(this)}};export{Dt as app_root,St as stencil_route,Ot as stencil_route_switch,Ct as stencil_router}