import{c as l}from"/grein/build/_shared/chunk-RAQ24GF6.js";var u=l((d,c)=>{function g(e){let n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},t="[A-Za-z$_][0-9A-Za-z$_]*",i={className:"subst",begin:/#\{/,end:/\}/,keywords:n},a=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];i.contains=a;let s=e.inherit(e.TITLE_MODE,{begin:t}),r="(\\(.*\\)\\s*)?\\B[-=]>",o={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(a)}]};return{name:"MoonScript",aliases:["moon"],keywords:n,illegal:/\/\*/,contains:a.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+t+"\\s*=\\s*"+r,end:"[-=]>",returnBegin:!0,contains:[s,o]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:r,end:"[-=]>",returnBegin:!0,contains:[o]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[s]},s]},{className:"name",begin:t+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}c.exports=g});export{u as a};
