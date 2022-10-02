!function(){"use strict";var t={433:function(t,e,r){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},o=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,a=r.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},c=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,i=0,a=e.length;i<a;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.EnrichHandler=e.EnrichedMathDocumentMixin=e.EnrichedMathItemMixin=e.enrichVisitor=void 0;var h=r(184),u=r(769),p=r(758),d=r(77),f=l(r(712)),y="none";(0,u.newState)("ENRICHED",30),(0,u.newState)("ATTACHSPEECH",155);var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.visitTree=function(e,r){this.mactionId=1;var n=t.prototype.visitTree.call(this,e);return this.mactionId&&(r.inputData.hasMaction=!0),n},e.prototype.visitMactionNode=function(t,e){var r=o(0===t.childNodes.length?["",""]:["\n",e],2),n=r[0],i=r[1],a=this.childNodeMml(t,e+"  ",n),s=this.getAttributes(t);if("toggle"===t.attributes.get("actiontype")){var c=this.mactionId++;t.setProperty("mactionId",c),s=' data-maction-id="'.concat(c,'" selection="').concat(t.attributes.get("selection"),'"')+s.replace(/ selection="\d+"/,"")}return e+"<maction"+s+">"+(a.match(/\S/)?n+a+i:"")+"</maction>"},e}(p.SerializedMmlVisitor);function M(t,e,r){return function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.serializeMml=function(t){if("outerHTML"in t)return t.outerHTML;if("undefined"!=typeof Element&&"undefined"!=typeof window&&t instanceof Element){var e=window.document.createElement("div");return e.appendChild(t),e.innerHTML}return t.toString()},n.prototype.enrich=function(t,n){if(void 0===n&&(n=!1),!(this.state()>=u.STATE.ENRICHED)){if(!this.isEscaped&&(t.options.enableEnrichment||n)){t.options.sre.speech!==y&&(y=t.options.sre.speech,h.mathjax.retryAfter(f.default.setupEngine(t.options.sre).then((function(){return f.default.sreReady()}))));var i=new t.options.MathItem("",e);try{var a=void 0;a=this.inputData.originalMml?this.adjustSelections():this.inputData.originalMml=r(this.root,this),this.inputData.enrichedMml=i.math=this.serializeMml(f.default.toEnriched(a)),i.display=this.display,i.compile(t),this.root=i.root}catch(e){t.options.enrichError(t,this,e)}}this.state(u.STATE.ENRICHED)}},n.prototype.adjustSelections=function(){var t=this.inputData.originalMml;if(!this.inputData.hasMaction)return t;var e=[];return this.root.walkTree((function(t){t.isKind("maction")&&(e[t.attributes.get("data-maction-id")]=t)})),t.replace(/(data-maction-id="(\d+)" selection=)"\d+"/g,(function(t,r,n){return"".concat(r,'"').concat(e[n].attributes.get("selection"),'"')}))},n.prototype.attachSpeech=function(t){var e,r;if(!(this.state()>=u.STATE.ATTACHSPEECH)){var n=this.root.attributes.get("aria-label")||this.getSpeech(this.root);if(n){var i=t.adaptor,a=this.typesetRoot;i.setAttribute(a,"aria-label",n);try{for(var o=s(i.childNodes(a)),c=o.next();!c.done;c=o.next()){var l=c.value;i.setAttribute(l,"aria-hidden","true")}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}}this.state(u.STATE.ATTACHSPEECH)}},n.prototype.getSpeech=function(t){var e,r,n=t.attributes;if(!n)return"";var i=n.getExplicit("data-semantic-speech");if(!n.getExplicit("data-semantic-parent")&&i)return i;try{for(var a=s(t.childNodes),o=a.next();!o.done;o=a.next()){var c=o.value,l=this.getSpeech(c);if(l)return l}}catch(t){e={error:t}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}return""},n}(t)}function x(t,e){var r;return r=function(t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=t.apply(this,c([],o(r),!1))||this;e.setMmlFactory(i.mmlFactory);var a=i.constructor.ProcessBits;a.has("enriched")||(a.allocate("enriched"),a.allocate("attach-speech"));var s=new m(i.mmlFactory),l=function(t,e){return s.visitTree(t,e)};return i.options.MathItem=M(i.options.MathItem,e,l),i}return i(r,t),r.prototype.attachSpeech=function(){var t,e;if(!this.processed.isSet("attach-speech")){try{for(var r=s(this.math),n=r.next();!n.done;n=r.next()){n.value.attachSpeech(this)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.processed.set("attach-speech")}return this},r.prototype.enrich=function(){var t,e;if(!this.processed.isSet("enriched")){if(this.options.enableEnrichment)try{for(var r=s(this.math),n=r.next();!n.done;n=r.next()){n.value.enrich(this)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.processed.set("enriched")}return this},r.prototype.enrichError=function(t,e,r){console.warn("Enrichment error:",r)},r.prototype.state=function(e,r){return void 0===r&&(r=!1),t.prototype.state.call(this,e,r),e<u.STATE.ENRICHED&&this.processed.clear("enriched"),this},r}(t),r.OPTIONS=a(a({},t.OPTIONS),{enableEnrichment:!0,enrichError:function(t,e,r){return t.enrichError(t,e,r)},renderActions:(0,d.expandable)(a(a({},t.OPTIONS.renderActions),{enrich:[u.STATE.ENRICHED],attachSpeech:[u.STATE.ATTACHSPEECH]})),sre:(0,d.expandable)({structure:!0,speech:"none",domain:"mathspeak",style:"default",locale:"en"})}),r}e.enrichVisitor=m,e.EnrichedMathItemMixin=M,e.EnrichedMathDocumentMixin=x,e.EnrichHandler=function(t,e){return e.setAdaptor(t.adaptor),t.documentClass=x(t.documentClass,e),t}},306:function(t,e){e.q=void 0,e.q="4.0.0-alpha.1"},712:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Sre=MathJax._.a11y.sre.Sre,e.sreReady=MathJax._.a11y.sre.sreReady,e.default=MathJax._.a11y.sre.default},723:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,e.PV=MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},769:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},758:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.toEntity=MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity,e.SerializedMmlVisitor=MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor},184:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.mathjax=MathJax._.mathjax.mathjax},77:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.util.Options.isObject,e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.OPTIONS=MathJax._.util.Options.OPTIONS,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions,e.lookup=MathJax._.util.Options.lookup},475:function(t,e){e.K=MathJax._.input.mathml_ts.MathML}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}!function(){var t=r(723),e=r(306),n=r(433);MathJax.loader&&MathJax.loader.checkVersion("a11y/semantic-enrich",e.q,"a11y"),(0,t.r8)({_:{a11y:{"semantic-enrich":n}}});var i=r(712),a=r(475);MathJax.loader&&(0,t.PV)(MathJax.config.loader,"a11y/semantic-enrich",{checkReady:function(){return i.default.sreReady()}}),MathJax.startup&&MathJax.startup.extendHandler((function(t){return(0,n.EnrichHandler)(t,new a.K({allowHtmlInTokenNodes:!0}))}))}()}();