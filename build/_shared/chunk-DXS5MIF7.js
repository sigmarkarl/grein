import{c as o}from"/build/_shared/chunk-RAQ24GF6.js";var b=o((d,r)=>{function l(e){return e?typeof e=="string"?e:e.source:null}function m(e){return t("(?=",e,")")}function t(...e){return e.map(s=>l(s)).join("")}function g(e){let i=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,s=/[a-zA-Z][a-zA-Z_0-9]*/;return{name:"R",illegal:/->/,keywords:{$pattern:i,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},compilerExtensions:[(n,u)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");let a=Object.assign({},n);Object.keys(n).forEach(c=>{delete n[c]}),n.begin=t(a.beforeMatch,m(a.begin)),n.starts={relevance:0,contains:[Object.assign(a,{endsParent:!0})]},n.relevance=0,delete a.beforeMatch}],contains:[e.COMMENT(/#'/,/$/,{contains:[{className:"doctag",begin:"@examples",starts:{contains:[{begin:/\n/},{begin:/#'\s*(?=@[a-zA-Z]+)/,endsParent:!0},{begin:/#'/,end:/$/,excludeBegin:!0}]}},{className:"doctag",begin:"@param",end:/$/,contains:[{className:"variable",variants:[{begin:i},{begin:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{className:"doctag",begin:/@[a-zA-Z]+/},{className:"meta-keyword",begin:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{className:"number",relevance:0,beforeMatch:/([^a-zA-Z0-9._])/,variants:[{match:/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/},{match:/0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/},{match:/(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/}]},{begin:"%",end:"%"},{begin:t(s,"\\s+<-\\s+")},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}r.exports=g});export{b as a};
