!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("unplugin"),require("fs/promises"),require("path")):"function"==typeof define&&define.amd?define(["exports","unplugin","fs/promises","path"],e):e((n||self).unplugin={},n.unplugin,n.fs,n.path)}(this,function(n,e,i,t){function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=/*#__PURE__*/r(i);function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=n[i];return t}var u=e.createUnplugin(function(n){if(!n.localesDir)throw new Error('[@nanointl/unplugin] "localesDir" is a required option');if(!n.defaultLocale)throw new Error('[@nanointl/unplugin] "defaultLocale" is a required option');return{name:"@nanointl/unplugin",resolveInclude:function(n){return"@nanointl/unplugin/runtime"===n},resolveId:function(n){if("@nanointl/unplugin/runtime"===n)return"@nanointl/unplugin/runtime"},loadInclude:function(n){return!!(n.includes("@nanointl/unplugin/dist/runtime.mjs")||n.includes("@nanointl/unplugin/dist/runtime.js")||n.includes("/nanointl-unplugin/dist/runtime.mjs")||n.includes("/nanointl-unplugin/dist/runtime.js")||"@nanointl/unplugin/runtime"===n)},load:function(){try{var e,i=this,r=null!=(e=process.env.LOCALE)?e:n.defaultLocale;return Promise.resolve(o.default.readdir(n.localesDir)).then(function(e){if(e.length){if(e.includes(r+".json")){for(var o,u=function(n,e){var i="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=function(n,e){if(n){if("string"==typeof n)return l(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(n,e):void 0}}(n))){i&&(n=i);var t=0;return function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e);!(o=u()).done;)i.addWatchFile(t.resolve(n.localesDir,o.value));var a=t.resolve(n.localesDir,r+".json"),s=e.map(function(e){var i=e.split(".").slice(0,-1).join("."),r=t.resolve(n.localesDir,e);return"["+JSON.stringify(i)+"]: () => import("+JSON.stringify(r)+").then(x => x.default)"});return"\n        export const initLocale = "+JSON.stringify(r)+";\n        import _initMessages from "+JSON.stringify(a)+";\n        export const initMessages = _initMessages;\n        export const loadMessages = { "+s.join(", ")+" };\n      "}i.error("Locale "+r+' (was searching for "'+r+'.json") was not found in '+n.localesDir)}else i.error("No locales was found in "+n.localesDir)})}catch(n){return Promise.reject(n)}}}}),a=u.vite,s=u.rollup,c=u.webpack;n.nanointlEsbuildPlugin=u.esbuild,n.nanointlRollupPlugin=s,n.nanointlVitePlugin=a,n.nanointlWebpackPlugin=c,n.unplugin=u});
//# sourceMappingURL=nanointl-unplugin.umd.js.map
