!function(){"use strict";var a,o,t,e={667:function(a,o){o.q=void 0,o.q="4.0.0-alpha.1"},888:function(a,o,t){Object.defineProperty(o,"__esModule",{value:!0}),o.ColorConfiguration=o.ColorV2Methods=void 0;var e=t(871),n=t(251);o.ColorV2Methods={Color:function(a,o){var t=a.GetArgument(o),e=a.stack.env.color;a.stack.env.color=t;var n=a.ParseArg(o);e?a.stack.env.color=e:delete a.stack.env.color;var r=a.create("node","mstyle",[n],{mathcolor:t});a.Push(r)}},new e.CommandMap("colorv2",{color:"Color"},o.ColorV2Methods),o.ColorConfiguration=n.Configuration.create("colorv2",{handler:{macro:["colorv2"]}})},955:function(a,o){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,o.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(a,o){Object.defineProperty(o,"__esModule",{value:!0}),o.Configuration=MathJax._.input.tex.Configuration.Configuration,o.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,o.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},871:function(a,o){Object.defineProperty(o,"__esModule",{value:!0}),o.parseResult=MathJax._.input.tex.SymbolMap.parseResult,o.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,o.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,o.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,o.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,o.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,o.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,o.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,o.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap}},n={};function r(a){var o=n[a];if(void 0!==o)return o.exports;var t=n[a]={exports:{}};return e[a](t,t.exports,r),t.exports}a=r(955),o=r(667),t=r(888),MathJax.loader&&MathJax.loader.checkVersion("[tex]/colorv2",o.q,"tex-extension"),(0,a.r8)({_:{input:{tex:{colorv2:{ColorV2Configuration:t}}}}})}();