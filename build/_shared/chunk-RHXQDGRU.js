import{a as hn}from"/grein/build/_shared/chunk-TPIWPMHX.js";import{a as vn}from"/grein/build/_shared/chunk-3OOET6B3.js";import{a as gn}from"/grein/build/_shared/chunk-5N53WRE2.js";import{a as pn}from"/grein/build/_shared/chunk-ILC5MFOH.js";import{c as m}from"/grein/build/_shared/chunk-RAQ24GF6.js";var Re=m((gl,Ne)=>{Ne.exports=yn;var mn=Object.prototype.hasOwnProperty;function yn(){for(var e={},r=0;r<arguments.length;r++){var n=arguments[r];for(var i in n)mn.call(n,i)&&(e[i]=n[i])}return e}});var xe=m((vl,je)=>{"use strict";je.exports=Ue;var ye=Ue.prototype;ye.space=null;ye.normal={};ye.property={};function Ue(e,r,n){this.property=e,this.normal=r,n&&(this.space=n)}});var Be=m((hl,He)=>{"use strict";var ze=Re(),xn=xe();He.exports=bn;function bn(e){for(var r=e.length,n=[],i=[],a=-1,f,y;++a<r;)f=e[a],n.push(f.property),i.push(f.normal),y=f.space;return new xn(ze.apply(null,n),ze.apply(null,i),y)}});var fe=m((ml,We)=>{"use strict";We.exports=wn;function wn(e){return e.toLowerCase()}});var be=m((yl,Ve)=>{"use strict";Ve.exports=Fe;var R=Fe.prototype;R.space=null;R.attribute=null;R.property=null;R.boolean=!1;R.booleanish=!1;R.overloadedBoolean=!1;R.number=!1;R.commaSeparated=!1;R.spaceSeparated=!1;R.commaOrSpaceSeparated=!1;R.mustUseProperty=!1;R.defined=!1;function Fe(e,r){this.property=e,this.attribute=r}});var de=m(V=>{"use strict";var Cn=0;V.boolean=J();V.booleanish=J();V.overloadedBoolean=J();V.number=J();V.spaceSeparated=J();V.commaSeparated=J();V.commaOrSpaceSeparated=J();function J(){return Math.pow(2,++Cn)}});var Ce=m((bl,Je)=>{"use strict";var $e=be(),Ge=de();Je.exports=we;we.prototype=new $e;we.prototype.defined=!0;var Xe=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Sn=Xe.length;function we(e,r,n,i){var a=-1,f;for(Ke(this,"space",i),$e.call(this,e,r);++a<Sn;)f=Xe[a],Ke(this,f,(n&Ge[f])===Ge[f])}function Ke(e,r,n){n&&(e[r]=n)}});var _=m((wl,Qe)=>{"use strict";var Ye=fe(),qn=xe(),An=Ce();Qe.exports=Pn;function Pn(e){var r=e.space,n=e.mustUseProperty||[],i=e.attributes||{},a=e.properties,f=e.transform,y={},w={},g,A;for(g in a)A=new An(g,f(i,g),a[g],r),n.indexOf(g)!==-1&&(A.mustUseProperty=!0),y[g]=A,w[Ye(g)]=g,w[Ye(A.attribute)]=g;return new qn(y,w,r)}});var _e=m((Cl,Ze)=>{"use strict";var En=_();Ze.exports=En({space:"xlink",transform:Ln,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Ln(e,r){return"xlink:"+r.slice(5).toLowerCase()}});var rr=m((Sl,er)=>{"use strict";var kn=_();er.exports=kn({space:"xml",transform:Tn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Tn(e,r){return"xml:"+r.slice(3).toLowerCase()}});var ar=m((ql,nr)=>{"use strict";nr.exports=Mn;function Mn(e,r){return r in e?e[r]:r}});var Se=m((Al,lr)=>{"use strict";var On=ar();lr.exports=In;function In(e,r){return On(e,r.toLowerCase())}});var ir=m((Pl,tr)=>{"use strict";var Dn=_(),Nn=Se();tr.exports=Dn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Nn,properties:{xmlns:null,xmlnsXLink:null}})});var ur=m((El,or)=>{"use strict";var qe=de(),Rn=_(),O=qe.booleanish,U=qe.number,Y=qe.spaceSeparated;or.exports=Rn({transform:Un,properties:{ariaActiveDescendant:null,ariaAtomic:O,ariaAutoComplete:null,ariaBusy:O,ariaChecked:O,ariaColCount:U,ariaColIndex:U,ariaColSpan:U,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:O,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:O,ariaFlowTo:Y,ariaGrabbed:O,ariaHasPopup:null,ariaHidden:O,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:U,ariaLive:null,ariaModal:O,ariaMultiLine:O,ariaMultiSelectable:O,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:U,ariaPressed:O,ariaReadOnly:O,ariaRelevant:null,ariaRequired:O,ariaRoleDescription:Y,ariaRowCount:U,ariaRowIndex:U,ariaRowSpan:U,ariaSelected:O,ariaSetSize:U,ariaSort:null,ariaValueMax:U,ariaValueMin:U,ariaValueNow:U,ariaValueText:null,role:null}});function Un(e,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});var cr=m((Ll,sr)=>{"use strict";var ee=de(),jn=_(),zn=Se(),p=ee.boolean,Hn=ee.overloadedBoolean,ie=ee.booleanish,S=ee.number,M=ee.spaceSeparated,pe=ee.commaSeparated;sr.exports=jn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:zn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:pe,acceptCharset:M,accessKey:M,action:null,allow:null,allowFullScreen:p,allowPaymentRequest:p,allowUserMedia:p,alt:null,as:null,async:p,autoCapitalize:null,autoComplete:M,autoFocus:p,autoPlay:p,capture:p,charSet:null,checked:p,cite:null,className:M,cols:S,colSpan:null,content:null,contentEditable:ie,controls:p,controlsList:M,coords:S|pe,crossOrigin:null,data:null,dateTime:null,decoding:null,default:p,defer:p,dir:null,dirName:null,disabled:p,download:Hn,draggable:ie,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:p,formTarget:null,headers:M,height:S,hidden:p,high:S,href:null,hrefLang:null,htmlFor:M,httpEquiv:M,id:null,imageSizes:null,imageSrcSet:pe,inputMode:null,integrity:null,is:null,isMap:p,itemId:null,itemProp:M,itemRef:M,itemScope:p,itemType:M,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:p,low:S,manifest:null,max:null,maxLength:S,media:null,method:null,min:null,minLength:S,multiple:p,muted:p,name:null,nonce:null,noModule:p,noValidate:p,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:p,optimum:S,pattern:null,ping:M,placeholder:null,playsInline:p,poster:null,preload:null,readOnly:p,referrerPolicy:null,rel:M,required:p,reversed:p,rows:S,rowSpan:S,sandbox:M,scope:null,scoped:p,seamless:p,selected:p,shape:null,size:S,sizes:null,slot:null,span:S,spellCheck:ie,src:null,srcDoc:null,srcLang:null,srcSet:pe,start:S,step:null,style:null,tabIndex:S,target:null,title:null,translate:null,type:null,typeMustMatch:p,useMap:null,value:ie,width:S,wrap:null,align:null,aLink:null,archive:M,axis:null,background:null,bgColor:null,border:S,borderColor:null,bottomMargin:S,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:p,declare:p,event:null,face:null,frame:null,frameBorder:null,hSpace:S,leftMargin:S,link:null,longDesc:null,lowSrc:null,marginHeight:S,marginWidth:S,noResize:p,noHref:p,noShade:p,noWrap:p,object:null,profile:null,prompt:null,rev:null,rightMargin:S,rules:null,scheme:null,scrolling:ie,standby:null,summary:null,text:null,topMargin:S,valueType:null,version:null,vAlign:null,vLink:null,vSpace:S,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:p,disableRemotePlayback:p,prefix:null,property:null,results:S,security:null,unselectable:null}})});var dr=m((kl,fr)=>{"use strict";var Bn=Be(),Wn=_e(),Fn=rr(),Vn=ir(),Gn=ur(),Kn=cr();fr.exports=Bn([Fn,Wn,Vn,Gn,Kn])});var vr=m((Tl,gr)=>{"use strict";var $n=fe(),Xn=Ce(),Jn=be(),Ae="data";gr.exports=Zn;var Yn=/^data[-\w.:]+$/i,pr=/-[a-z]/g,Qn=/[A-Z]/g;function Zn(e,r){var n=$n(r),i=r,a=Jn;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Ae&&Yn.test(r)&&(r.charAt(4)==="-"?i=_n(r):r=ea(r),a=Xn),new a(i,r))}function _n(e){var r=e.slice(5).replace(pr,na);return Ae+r.charAt(0).toUpperCase()+r.slice(1)}function ea(e){var r=e.slice(4);return pr.test(r)?e:(r=r.replace(Qn,ra),r.charAt(0)!=="-"&&(r="-"+r),Ae+r)}function ra(e){return"-"+e.toLowerCase()}function na(e){return e.charAt(1).toUpperCase()}});var yr=m((Ml,mr)=>{"use strict";mr.exports=aa;var hr=/[#.]/g;function aa(e,r){for(var n=e||"",i=r||"div",a={},f=0,y,w,g;f<n.length;)hr.lastIndex=f,g=hr.exec(n),y=n.slice(f,g?g.index:n.length),y&&(w?w==="#"?a.id=y:a.className?a.className.push(y):a.className=[y]:i=y,f+=y.length),g&&(w=g[0],f++);return{type:"element",tagName:i,properties:a,children:[]}}});var br=m(Pe=>{"use strict";Pe.parse=ia;Pe.stringify=oa;var xr="",la=" ",ta=/[ \t\n\r\f]+/g;function ia(e){var r=String(e||xr).trim();return r===xr?[]:r.split(ta)}function oa(e){return e.join(la).trim()}});var Cr=m(Le=>{"use strict";Le.parse=ua;Le.stringify=sa;var Ee=",",wr=" ",oe="";function ua(e){for(var r=[],n=String(e||oe),i=n.indexOf(Ee),a=0,f=!1,y;!f;)i===-1&&(i=n.length,f=!0),y=n.slice(a,i).trim(),(y||!f)&&r.push(y),a=i+1,i=n.indexOf(Ee,a);return r}function sa(e,r){var n=r||{},i=n.padLeft===!1?oe:wr,a=n.padRight?wr:oe;return e[e.length-1]===oe&&(e=e.concat(oe)),e.join(a+Ee+i).trim()}});var kr=m((Dl,Lr)=>{"use strict";var ca=vr(),Sr=fe(),fa=yr(),qr=br().parse,Ar=Cr().parse;Lr.exports=pa;var da={}.hasOwnProperty;function pa(e,r,n){var i=n?ya(n):null;return a;function a(y,w){var g=fa(y,r),A=Array.prototype.slice.call(arguments,2),T=g.tagName.toLowerCase(),P;if(g.tagName=i&&da.call(i,T)?i[T]:T,w&&ga(w,g)&&(A.unshift(w),w=null),w)for(P in w)f(g.properties,P,w[P]);return Er(g.children,A),g.tagName==="template"&&(g.content={type:"root",children:g.children},g.children=[]),g}function f(y,w,g){var A,T,P;g==null||g!==g||(A=ca(e,w),T=A.property,P=g,typeof P=="string"&&(A.spaceSeparated?P=qr(P):A.commaSeparated?P=Ar(P):A.commaOrSpaceSeparated&&(P=qr(Ar(P).join(" ")))),T==="style"&&typeof g!="string"&&(P=ma(P)),T==="className"&&y.className&&(P=y.className.concat(P)),y[T]=ha(A,T,P))}}function ga(e,r){return typeof e=="string"||"length"in e||va(r.tagName,e)}function va(e,r){var n=r.type;return e==="input"||!n||typeof n!="string"?!1:typeof r.children=="object"&&"length"in r.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in r)}function Er(e,r){var n,i;if(typeof r=="string"||typeof r=="number"){e.push({type:"text",value:String(r)});return}if(typeof r=="object"&&"length"in r){for(n=-1,i=r.length;++n<i;)Er(e,r[n]);return}if(typeof r!="object"||!("type"in r))throw new Error("Expected node, nodes, or string, got `"+r+"`");e.push(r)}function ha(e,r,n){var i,a,f;if(typeof n!="object"||!("length"in n))return Pr(e,r,n);for(a=n.length,i=-1,f=[];++i<a;)f[i]=Pr(e,r,n[i]);return f}function Pr(e,r,n){var i=n;return e.number||e.positiveNumber?!isNaN(i)&&i!==""&&(i=Number(i)):(e.boolean||e.overloadedBoolean)&&typeof i=="string"&&(i===""||Sr(n)===Sr(r))&&(i=!0),i}function ma(e){var r=[],n;for(n in e)r.push([n,e[n]].join(": "));return r.join("; ")}function ya(e){for(var r=e.length,n=-1,i={},a;++n<r;)a=e[n],i[a.toLowerCase()]=a;return i}});var Or=m((Nl,Mr)=>{"use strict";var xa=dr(),ba=kr(),Tr=ba(xa,"div");Tr.displayName="html";Mr.exports=Tr});var Dr=m((Rl,Ir)=>{"use strict";Ir.exports=Or()});var Nr=m((Ul,wa)=>{wa.exports={AElig:"\xC6",AMP:"&",Aacute:"\xC1",Acirc:"\xC2",Agrave:"\xC0",Aring:"\xC5",Atilde:"\xC3",Auml:"\xC4",COPY:"\xA9",Ccedil:"\xC7",ETH:"\xD0",Eacute:"\xC9",Ecirc:"\xCA",Egrave:"\xC8",Euml:"\xCB",GT:">",Iacute:"\xCD",Icirc:"\xCE",Igrave:"\xCC",Iuml:"\xCF",LT:"<",Ntilde:"\xD1",Oacute:"\xD3",Ocirc:"\xD4",Ograve:"\xD2",Oslash:"\xD8",Otilde:"\xD5",Ouml:"\xD6",QUOT:'"',REG:"\xAE",THORN:"\xDE",Uacute:"\xDA",Ucirc:"\xDB",Ugrave:"\xD9",Uuml:"\xDC",Yacute:"\xDD",aacute:"\xE1",acirc:"\xE2",acute:"\xB4",aelig:"\xE6",agrave:"\xE0",amp:"&",aring:"\xE5",atilde:"\xE3",auml:"\xE4",brvbar:"\xA6",ccedil:"\xE7",cedil:"\xB8",cent:"\xA2",copy:"\xA9",curren:"\xA4",deg:"\xB0",divide:"\xF7",eacute:"\xE9",ecirc:"\xEA",egrave:"\xE8",eth:"\xF0",euml:"\xEB",frac12:"\xBD",frac14:"\xBC",frac34:"\xBE",gt:">",iacute:"\xED",icirc:"\xEE",iexcl:"\xA1",igrave:"\xEC",iquest:"\xBF",iuml:"\xEF",laquo:"\xAB",lt:"<",macr:"\xAF",micro:"\xB5",middot:"\xB7",nbsp:"\xA0",not:"\xAC",ntilde:"\xF1",oacute:"\xF3",ocirc:"\xF4",ograve:"\xF2",ordf:"\xAA",ordm:"\xBA",oslash:"\xF8",otilde:"\xF5",ouml:"\xF6",para:"\xB6",plusmn:"\xB1",pound:"\xA3",quot:'"',raquo:"\xBB",reg:"\xAE",sect:"\xA7",shy:"\xAD",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",szlig:"\xDF",thorn:"\xFE",times:"\xD7",uacute:"\xFA",ucirc:"\xFB",ugrave:"\xF9",uml:"\xA8",uuml:"\xFC",yacute:"\xFD",yen:"\xA5",yuml:"\xFF"}});var Rr=m((jl,Ca)=>{Ca.exports={"0":"\uFFFD","128":"\u20AC","130":"\u201A","131":"\u0192","132":"\u201E","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02C6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017D","145":"\u2018","146":"\u2019","147":"\u201C","148":"\u201D","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02DC","153":"\u2122","154":"\u0161","155":"\u203A","156":"\u0153","158":"\u017E","159":"\u0178"}});var ke=m((zl,Ur)=>{"use strict";Ur.exports=Sa;function Sa(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=48&&r<=57}});var zr=m((Hl,jr)=>{"use strict";jr.exports=qa;function qa(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=97&&r<=102||r>=65&&r<=70||r>=48&&r<=57}});var Br=m((Bl,Hr)=>{"use strict";Hr.exports=Aa;function Aa(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=97&&r<=122||r>=65&&r<=90}});var Fr=m((Wl,Wr)=>{"use strict";var Pa=Br(),Ea=ke();Wr.exports=La;function La(e){return Pa(e)||Ea(e)}});var Gr=m((Fl,Vr)=>{"use strict";var ge,ka=59;Vr.exports=Ta;function Ta(e){var r="&"+e+";",n;return ge=ge||document.createElement("i"),ge.innerHTML=r,n=ge.textContent,n.charCodeAt(n.length-1)===ka&&e!=="semi"||n===r?!1:n}});var tn=m((Vl,ln)=>{"use strict";var Kr=Nr(),$r=Rr(),Ma=ke(),Oa=zr(),Qr=Fr(),Ia=Gr();ln.exports=Ka;var Da={}.hasOwnProperty,re=String.fromCharCode,Na=Function.prototype,Xr={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Ra=9,Jr=10,Ua=12,ja=32,Yr=38,za=59,Ha=60,Ba=61,Wa=35,Fa=88,Va=120,Ga=65533,ne="named",Me="hexadecimal",Oe="decimal",Ie={};Ie[Me]=16;Ie[Oe]=10;var ve={};ve[ne]=Qr;ve[Oe]=Ma;ve[Me]=Oa;var Zr=1,_r=2,en=3,rn=4,nn=5,Te=6,an=7,G={};G[Zr]="Named character references must be terminated by a semicolon";G[_r]="Numeric character references must be terminated by a semicolon";G[en]="Named character references cannot be empty";G[rn]="Numeric character references cannot be empty";G[nn]="Named character references must be known";G[Te]="Numeric character references cannot be disallowed";G[an]="Numeric character references cannot be outside the permissible Unicode range";function Ka(e,r){var n={},i,a;r||(r={});for(a in Xr)i=r[a],n[a]=i??Xr[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),$a(e,n)}function $a(e,r){var n=r.additional,i=r.nonTerminated,a=r.text,f=r.reference,y=r.warning,w=r.textContext,g=r.referenceContext,A=r.warningContext,T=r.position,P=r.indent||[],H=e.length,D=0,ae=-1,t=T.column||1,l=T.line||1,o="",u=[],s,d,h,c,C,v,x,I,K,le,B,F,q,E,W,z,k,N,b;for(typeof n=="string"&&(n=n.charCodeAt(0)),z=j(),I=y?Q:Na,D--,H++;++D<H;)if(C===Jr&&(t=P[ae]||1),C=e.charCodeAt(D),C===Yr){if(x=e.charCodeAt(D+1),x===Ra||x===Jr||x===Ua||x===ja||x===Yr||x===Ha||x!==x||n&&x===n){o+=re(C),t++;continue}for(q=D+1,F=q,b=q,x===Wa?(b=++F,x=e.charCodeAt(b),x===Fa||x===Va?(E=Me,b=++F):E=Oe):E=ne,s="",B="",c="",W=ve[E],b--;++b<H&&(x=e.charCodeAt(b),!!W(x));)c+=re(x),E===ne&&Da.call(Kr,c)&&(s=c,B=Kr[c]);h=e.charCodeAt(b)===za,h&&(b++,d=E===ne?Ia(c):!1,d&&(s=c,B=d)),N=1+b-q,!h&&!i||(c?E===ne?(h&&!B?I(nn,1):(s!==c&&(b=F+s.length,N=1+b-F,h=!1),h||(K=s?Zr:en,r.attribute?(x=e.charCodeAt(b),x===Ba?(I(K,N),B=null):Qr(x)?B=null:I(K,N)):I(K,N))),v=B):(h||I(_r,N),v=parseInt(c,Ie[E]),Xa(v)?(I(an,N),v=re(Ga)):v in $r?(I(Te,N),v=$r[v]):(le="",Ja(v)&&I(Te,N),v>65535&&(v-=65536,le+=re(v>>>10|55296),v=56320|v&1023),v=le+re(v))):E!==ne&&I(rn,N)),v?($(),z=j(),D=b-1,t+=b-q+1,u.push(v),k=j(),k.offset++,f&&f.call(g,v,{start:z,end:k},e.slice(q-1,b)),z=k):(c=e.slice(q-1,b),o+=c,t+=c.length,D=b-1)}else C===10&&(l++,ae++,t=0),C===C?(o+=re(C),t++):$();return u.join("");function j(){return{line:l,column:t,offset:D+(T.offset||0)}}function Q(Z,te){var X=j();X.column+=te,X.offset+=te,y.call(A,G[Z],X,Z)}function $(){o&&(u.push(o),a&&a.call(w,o,{start:z,end:j()}),o="")}}function Xa(e){return e>=55296&&e<=57343||e>1114111}function Ja(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}});var un=m((Gl,he)=>{var Ya=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var on=function(e){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function t(l){return l instanceof f?new f(l.type,t(l.content),l.alias):Array.isArray(l)?l.map(t):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++n}),t.__id},clone:function t(l,o){o=o||{};var u,s;switch(a.util.type(l)){case"Object":if(s=a.util.objId(l),o[s])return o[s];u={},o[s]=u;for(var d in l)l.hasOwnProperty(d)&&(u[d]=t(l[d],o));return u;case"Array":return s=a.util.objId(l),o[s]?o[s]:(u=[],o[s]=u,l.forEach(function(h,c){u[c]=t(h,o)}),u);default:return l}},getLanguage:function(t){for(;t;){var l=r.exec(t.className);if(l)return l[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,l){t.className=t.className.replace(RegExp(r,"gi"),""),t.classList.add("language-"+l)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(u){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(u.stack)||[])[1];if(t){var l=document.getElementsByTagName("script");for(var o in l)if(l[o].src==t)return l[o]}return null}},isActive:function(t,l,o){for(var u="no-"+l;t;){var s=t.classList;if(s.contains(l))return!0;if(s.contains(u))return!1;t=t.parentElement}return!!o}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(t,l){var o=a.util.clone(a.languages[t]);for(var u in l)o[u]=l[u];return o},insertBefore:function(t,l,o,u){u=u||a.languages;var s=u[t],d={};for(var h in s)if(s.hasOwnProperty(h)){if(h==l)for(var c in o)o.hasOwnProperty(c)&&(d[c]=o[c]);o.hasOwnProperty(h)||(d[h]=s[h])}var C=u[t];return u[t]=d,a.languages.DFS(a.languages,function(v,x){x===C&&v!=t&&(this[v]=d)}),d},DFS:function t(l,o,u,s){s=s||{};var d=a.util.objId;for(var h in l)if(l.hasOwnProperty(h)){o.call(l,h,l[h],u||h);var c=l[h],C=a.util.type(c);C==="Object"&&!s[d(c)]?(s[d(c)]=!0,t(c,o,null,s)):C==="Array"&&!s[d(c)]&&(s[d(c)]=!0,t(c,o,h,s))}}},plugins:{},highlightAll:function(t,l){a.highlightAllUnder(document,t,l)},highlightAllUnder:function(t,l,o){var u={callback:o,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",u),u.elements=Array.prototype.slice.apply(u.container.querySelectorAll(u.selector)),a.hooks.run("before-all-elements-highlight",u);for(var s=0,d;d=u.elements[s++];)a.highlightElement(d,l===!0,u.callback)},highlightElement:function(t,l,o){var u=a.util.getLanguage(t),s=a.languages[u];a.util.setLanguage(t,u);var d=t.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(d,u);var h=t.textContent,c={element:t,language:u,grammar:s,code:h};function C(x){c.highlightedCode=x,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),o&&o.call(c.element)}if(a.hooks.run("before-sanity-check",c),d=c.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!c.code){a.hooks.run("complete",c),o&&o.call(c.element);return}if(a.hooks.run("before-highlight",c),!c.grammar){C(a.util.encode(c.code));return}if(l&&e.Worker){var v=new Worker(a.filename);v.onmessage=function(x){C(x.data)},v.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else C(a.highlight(c.code,c.grammar,c.language))},highlight:function(t,l,o){var u={code:t,grammar:l,language:o};if(a.hooks.run("before-tokenize",u),!u.grammar)throw new Error('The language "'+u.language+'" has no grammar.');return u.tokens=a.tokenize(u.code,u.grammar),a.hooks.run("after-tokenize",u),f.stringify(a.util.encode(u.tokens),u.language)},tokenize:function(t,l){var o=l.rest;if(o){for(var u in o)l[u]=o[u];delete l.rest}var s=new g;return A(s,s.head,t),w(t,s,l,s.head,0),P(s)},hooks:{all:{},add:function(t,l){var o=a.hooks.all;o[t]=o[t]||[],o[t].push(l)},run:function(t,l){var o=a.hooks.all[t];if(!(!o||!o.length))for(var u=0,s;s=o[u++];)s(l)}},Token:f};e.Prism=a;function f(t,l,o,u){this.type=t,this.content=l,this.alias=o,this.length=(u||"").length|0}f.stringify=function t(l,o){if(typeof l=="string")return l;if(Array.isArray(l)){var u="";return l.forEach(function(C){u+=t(C,o)}),u}var s={type:l.type,content:t(l.content,o),tag:"span",classes:["token",l.type],attributes:{},language:o},d=l.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(s.classes,d):s.classes.push(d)),a.hooks.run("wrap",s);var h="";for(var c in s.attributes)h+=" "+c+'="'+(s.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+h+">"+s.content+"</"+s.tag+">"};function y(t,l,o,u){t.lastIndex=l;var s=t.exec(o);if(s&&u&&s[1]){var d=s[1].length;s.index+=d,s[0]=s[0].slice(d)}return s}function w(t,l,o,u,s,d){for(var h in o)if(!(!o.hasOwnProperty(h)||!o[h])){var c=o[h];c=Array.isArray(c)?c:[c];for(var C=0;C<c.length;++C){if(d&&d.cause==h+","+C)return;var v=c[C],x=v.inside,I=!!v.lookbehind,K=!!v.greedy,le=v.alias;if(K&&!v.pattern.global){var B=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,B+"g")}for(var F=v.pattern||v,q=u.next,E=s;q!==l.tail&&!(d&&E>=d.reach);E+=q.value.length,q=q.next){var W=q.value;if(l.length>t.length)return;if(!(W instanceof f)){var z=1,k;if(K){if(k=y(F,E,t,I),!k||k.index>=t.length)break;var Q=k.index,N=k.index+k[0].length,b=E;for(b+=q.value.length;Q>=b;)q=q.next,b+=q.value.length;if(b-=q.value.length,E=b,q.value instanceof f)continue;for(var j=q;j!==l.tail&&(b<N||typeof j.value=="string");j=j.next)z++,b+=j.value.length;z--,W=t.slice(E,b),k.index-=E}else if(k=y(F,0,W,I),!k)continue;var Q=k.index,$=k[0],Z=W.slice(0,Q),te=W.slice(Q+$.length),X=E+W.length;d&&X>d.reach&&(d.reach=X);var ce=q.prev;Z&&(ce=A(l,ce,Z),E+=Z.length),T(l,ce,z);var dn=new f(h,x?a.tokenize($,x):$,le,$);if(q=A(l,ce,dn),te&&A(l,q,te),z>1){var me={cause:h+","+C,reach:X};w(t,l,o,q.prev,E,me),d&&me.reach>d.reach&&(d.reach=me.reach)}}}}}}function g(){var t={value:null,prev:null,next:null},l={value:null,prev:t,next:null};t.next=l,this.head=t,this.tail=l,this.length=0}function A(t,l,o){var u=l.next,s={value:o,prev:l,next:u};return l.next=s,u.prev=s,t.length++,s}function T(t,l,o){for(var u=l.next,s=0;s<o&&u!==t.tail;s++)u=u.next;l.next=u,u.prev=l,t.length-=s}function P(t){for(var l=[],o=t.head.next;o!==t.tail;)l.push(o.value),o=o.next;return l}if(!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var l=JSON.parse(t.data),o=l.language,u=l.code,s=l.immediateClose;e.postMessage(a.highlight(u,a.languages[o],o)),s&&e.close()},!1)),a;var H=a.util.currentScript();H&&(a.filename=H.src,H.hasAttribute("data-manual")&&(a.manual=!0));function D(){a.manual||a.highlightAll()}if(!a.manual){var ae=document.readyState;ae==="loading"||ae==="interactive"&&H&&H.defer?document.addEventListener("DOMContentLoaded",D):window.requestAnimationFrame?window.requestAnimationFrame(D):window.setTimeout(D,16)}return a}(Ya);typeof he<"u"&&he.exports&&(he.exports=on);typeof globalThis<"u"&&(globalThis.Prism=on)});var pl=m((Kl,fn)=>{var ue=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof globalThis=="object"?globalThis:{},Qa=dl();ue.Prism={manual:!0,disableWorkerMessageHandler:!0};var Za=Dr(),_a=tn(),sn=un(),el=hn(),rl=gn(),nl=pn(),al=vn();Qa();var De={}.hasOwnProperty;function cn(){}cn.prototype=sn;var L=new cn;fn.exports=L;L.highlight=tl;L.register=se;L.alias=ll;L.registered=il;L.listLanguages=ol;se(el);se(rl);se(nl);se(al);L.util.encode=cl;L.Token.stringify=ul;function se(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");L.languages[e.displayName]===void 0&&e(L)}function ll(e,r){var n=L.languages,i=e,a,f,y,w;r&&(i={},i[e]=r);for(a in i)for(f=i[a],f=typeof f=="string"?[f]:f,y=f.length,w=-1;++w<y;)n[f[w]]=n[a]}function tl(e,r){var n=sn.highlight,i;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(L.util.type(r)==="Object")i=r,r=null;else{if(typeof r!="string")throw new Error("Expected `string` for `name`, got `"+r+"`");if(De.call(L.languages,r))i=L.languages[r];else throw new Error("Unknown language: `"+r+"` is not registered")}return n.call(this,e,i,r)}function il(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return De.call(L.languages,e)}function ol(){var e=L.languages,r=[],n;for(n in e)De.call(e,n)&&typeof e[n]=="object"&&r.push(n);return r}function ul(e,r,n){var i;return typeof e=="string"?{type:"text",value:e}:L.util.type(e)==="Array"?sl(e,r):(i={type:e.type,content:L.Token.stringify(e.content,r,n),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:n},e.alias&&(i.classes=i.classes.concat(e.alias)),L.hooks.run("wrap",i),Za(i.tag+"."+i.classes.join("."),fl(i.attributes),i.content))}function sl(e,r){for(var n=[],i=e.length,a=-1,f;++a<i;)f=e[a],f!==""&&f!==null&&f!==void 0&&n.push(f);for(a=-1,i=n.length;++a<i;)f=n[a],n[a]=L.Token.stringify(f,r,n);return n}function cl(e){return e}function fl(e){var r;for(r in e)e[r]=_a(e[r]);return e}function dl(){var e="Prism"in ue,r=e?ue.Prism:void 0;return n;function n(){e?ue.Prism=r:delete ue.Prism,e=void 0,r=void 0}}});export{pl as a};
