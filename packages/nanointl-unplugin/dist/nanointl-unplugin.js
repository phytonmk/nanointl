var n=require("unplugin"),e=require("fs/promises"),r=require("path");function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var i=/*#__PURE__*/t(e);function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var l=n.createUnplugin(function(n){if(!n.localesDir)throw new Error('[@nanointl/unplugin] "localesDir" is a required option');if(!n.defaultLocale)throw new Error('[@nanointl/unplugin] "defaultLocale" is a required option');return{name:"@nanointl/unplugin",resolveInclude:function(n){return"@nanointl/unplugin/runtime"===n},resolveId:function(n){if("@nanointl/unplugin/runtime"===n)return"@nanointl/unplugin/runtime"},loadInclude:function(n){return!!(n.includes("@nanointl/unplugin/dist/runtime.mjs")||n.includes("@nanointl/unplugin/dist/runtime.js")||n.includes("/nanointl-unplugin/dist/runtime.mjs")||n.includes("/nanointl-unplugin/dist/runtime.js")||"@nanointl/unplugin/runtime"===n)},load:function(){try{var e,t=this,l=null!=(e=process.env.LOCALE)?e:n.defaultLocale;return Promise.resolve(i.default.readdir(n.localesDir)).then(function(e){if(e.length){if(e.includes(l+".json")){for(var i,u=function(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return o(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,e):void 0}}(n))){r&&(n=r);var t=0;return function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e);!(i=u()).done;)t.addWatchFile(r.resolve(n.localesDir,i.value));var a=r.resolve(n.localesDir,l+".json"),s=e.map(function(e){var t=e.split(".").slice(0,-1).join("."),i=r.resolve(n.localesDir,e);return"["+JSON.stringify(t)+"]: () => import("+JSON.stringify(i)+").then(x => x.default)"});return"\n        export const initLocale = "+JSON.stringify(l)+";\n        import _initMessages from "+JSON.stringify(a)+";\n        export const initMessages = _initMessages;\n        export const loadMessages = { "+s.join(", ")+" };\n      "}t.error("Locale "+l+' (was searching for "'+l+'.json") was not found in '+n.localesDir)}else t.error("No locales was found in "+n.localesDir)})}catch(n){return Promise.reject(n)}}}}),u=l.vite,a=l.rollup,s=l.webpack;exports.nanointlEsbuildPlugin=l.esbuild,exports.nanointlRollupPlugin=a,exports.nanointlVitePlugin=u,exports.nanointlWebpackPlugin=s,exports.unplugin=l;
//# sourceMappingURL=nanointl-unplugin.js.map