(this["webpackJsonpinsulin-calculator"]=this["webpackJsonpinsulin-calculator"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=a(13),l=a(6),u=a(7),s=a(4),d=a(5);a(8);function m(e){var t=e.id,a=e.type,n=void 0===a?"text":a,c=e.name,o=void 0===c?"":c,i=e.value,l=void 0===i?"":i,u=e.onChange,s=void 0===u?"":u,d=e.description,m=void 0===d?"":d,g=e.placeholder,b=void 0===g?"":g,h=e.unit,f=void 0===h?"":h;return r.a.createElement("div",null,r.a.createElement("label",null,m),r.a.createElement("br",null),r.a.createElement("input",{type:n,autoComplete:"off",id:t,name:o,placeholder:b,value:l,onChange:""===s?function(){return 0}:function(e){return s(e)}}),r.a.createElement("label",null,f))}function g(e){var t=e.setBloodSugar,a=e.setDayTimeChoice,n=e.setTargetBloodSugar,c=e.setCorrectionFactor,o=e.setCarbohydrateFactor,i=e.bloodSugar,l=e.dayTimeChoice,u=e.targetBloodSugar,s=e.correctionFactor,d=e.carbohydrateFactor,g=e.refreshPage;return r.a.createElement("div",{className:"space-around"},r.a.createElement(m,{name:"BloodSugar",type:"number",value:i.toString(),description:"Blutzucker",unit:"mg/dl",onChange:function(e){return t(e.target.value)}}),r.a.createElement("p",{className:"center-elements day-time-choice-buttons"},r.a.createElement("button",{className:"automatic-day-time-choice-button \n                    ".concat("automatic"===l&&"active-button"),onClick:function(){a("automatic"),g()}},"Automatic"),r.a.createElement("button",{className:"morning-day-time-choice-button \n                    ".concat("morning"===l&&"active-button"),onClick:function(){a("morning"),g()}},"Morgens"),r.a.createElement("button",{className:"midday-day-time-choice-button \n                    ".concat("midday"===l&&"active-button"),onClick:function(){a("midday"),g()}},"Mittags"),r.a.createElement("button",{className:"evening-day-time-choice-button \n                    ".concat("evening"===l&&"active-button"),onClick:function(){a("evening"),g()}},"Abends")),r.a.createElement(m,{name:"TargetBloodSugar",type:"number",value:u,description:"Blutzucker Zielwert",unit:"mg/dl",onChange:function(e){return n(e.target.value)}}),r.a.createElement(m,{name:"CorrectionFactor",type:"number",value:s,description:"Korrektur-Faktor",unit:"mg/dl",onChange:function(e){return c(e.target.value)}}),r.a.createElement(m,{name:"CarbohydrateFactor",type:"number",value:d,description:"KE-Faktor",onChange:function(e){return o(e.target.value)}}))}var b=a(23),h=a(22);a(18);function f(e){var t=e.suggestionText,a=e.handleSuggestionClick;return r.a.createElement("li",{onClick:function(){return a(t)}},t)}function S(e){var t=e.allSuggestions,a=e.searchingText,n=e.handleSuggestionClick,c=""===a?[]:t.filter((function(e){return e.slice(0,a.length).toLowerCase()===a.toLowerCase()}));return r.a.createElement("div",null,0!==c.length&&r.a.createElement("ul",{className:"suggestion-list"},c.map((function(e){return r.a.createElement(f,{key:Math.random(),suggestionText:e,handleSuggestionClick:n})}))))}function p(e){var t=e.id,a=e.isPer100gSlideActive,n=void 0===a||a,c=e.per100gSlide,o=void 0===c?{}:c,i=e.perPieceSlide,l=void 0===i?{}:i,u=e.foodNameSuggestionsForPer100gSlide,s=e.foodNameSuggestionsForPerPieceSlide,d=e.handleIsIntermealChange,g=e.handlePer100gSlideValueChange,b=e.handlePerPieceSlideValueChange,h=e.deleteFoodItem,f=e.handleSuggestionClick,p=e.handleSlideChange,v=r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"intermeal-checkbox"},r.a.createElement("input",{type:"checkbox",checked:o.isIntermeal,onChange:function(){return d(t,1)}})," ZM?"),r.a.createElement(m,{id:t,name:"name",description:"Name",value:o.name,onChange:function(e){return g(e)}}),o.shouldDisplaySuggestions&&r.a.createElement(S,{allSuggestions:u,searchingText:o.name,handleSuggestionClick:function(e){return f(e,t,!0)}}),r.a.createElement(m,{id:t,name:"grams",type:"number",description:"Gramm",value:o.grams,onChange:function(e){return g(e)}}),r.a.createElement(m,{id:t,name:"carbohydratesPer100Grams",type:"number",description:"Kohlenhydrate pro 100g",value:o.carbohydratesPer100Grams,onChange:function(e){return g(e)}})),E=r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"intermeal-checkbox"},r.a.createElement("input",{type:"checkbox",checked:l.isIntermeal,onChange:function(){return d(t,2)}})," ZM?"),r.a.createElement(m,{id:t,name:"name",description:"Name",value:l.name,onChange:function(e){return b(e)}}),l.shouldDisplaySuggestions&&r.a.createElement(S,{allSuggestions:s,searchingText:l.name,handleSuggestionClick:function(e){return f(e,t,!1)}}),r.a.createElement(m,{id:t,name:"numberOfPieces",type:"number",description:"Anzahl",value:l.numberOfPieces,onChange:function(e){return b(e)}}),r.a.createElement(m,{id:t,name:"carbohydratesPerPiece",type:"number",description:"Kohlenhydrate pro St\xfcck",value:l.carbohydratesPerPiece,onChange:function(e){return b(e)}}));return r.a.createElement("div",null,r.a.createElement("p",{className:"center-elements"},r.a.createElement("button",{className:"per-100g-button ".concat(n&&"active-button"),onClick:function(){return p(t,!0)}},"pro 100g"),r.a.createElement("button",{className:"per-piece-button ".concat(!n&&"active-button"),onClick:function(){return p(t,!1)}},"pro St\xfcck")),r.a.createElement("div",{className:"space-around"},r.a.createElement("button",{className:"delete-food-item-button",onClick:function(){return h(t)}}),n?v:E),r.a.createElement("hr",null))}function v(e){var t=e.foodItems,a=void 0===t?[]:t,n=e.foodNameSuggestionsForPer100gSlide,c=void 0===n?[]:n,o=e.foodNameSuggestionsForPerPieceSlide,i=void 0===o?[]:o,l=e.addNewFoodItem,u=e.handleIsIntermealChange,s=e.handlePer100gSlideValueChange,d=e.handlePerPieceSlideValueChange,m=e.deleteFoodItem,g=e.handleSuggestionClick,b=e.handleSlideChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"Elemente"),a.map((function(e){return r.a.createElement(p,{key:e.key,id:e.id,isPer100gSlideActive:e.isPer100gSlideActive,per100gSlide:e.per100gSlide,perPieceSlide:e.perPieceSlide,foodNameSuggestionsForPer100gSlide:c,foodNameSuggestionsForPerPieceSlide:i,handleIsIntermealChange:u,handlePer100gSlideValueChange:s,handlePerPieceSlideValueChange:d,deleteFoodItem:m,handleSuggestionClick:g,handleSlideChange:b})})),r.a.createElement("p",null,r.a.createElement("button",{className:"add-new-food-item-button",onClick:function(){return l()}})))}function E(e){var t=e.totalIE,a=e.totalMainMealKE,n=e.totalIntermealKE,c=e.totalKE,o=e.totalCorrectionInsulin,i=e.outputRef;return r.a.createElement("div",{ref:i},""===t||void 0==t||t<=0?"":r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"space-around"},r.a.createElement("p",{className:"output"},"Hauptmahlzeit-KE : ",a," KE ",r.a.createElement("br",null),"Zwischenmahlzeit-KE : ",n," KE ",r.a.createElement("br",null),"Gesamt-KE: ",c," KE ",r.a.createElement("br",null),r.a.createElement("br",null),"Korrektur-Insulin: ",o," IE  ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}}," Gesamt-Insulin: ",t," IE ")))))}b.a.use([h.a]);function O(e,t){var a="insulin-calculator-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(d.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){null!=o&&localStorage.setItem(a,JSON.stringify(o))}),[o]),[o,i]}var P="insulin-calculator-",y=!1;function C(){var e=O("dayTimeChoice","automatic"),t=Object(d.a)(e,2),a=t[0],c=t[1],o=O("lastSavedData",{foodItems:[]}),m=Object(d.a)(o,2),b=m[0],h=m[1],f=O("foodNameSuggestions-per100gSlide",[]),S=Object(d.a)(f,2),p=S[0],C=S[1],j=O("foodNameSuggestions-perPieceSlide",[]),I=Object(d.a)(j,2),N=I[0],k=I[1],F=Object(n.useState)(""),w=Object(d.a)(F,2),K=w[0],M=w[1],T=O("".concat(fe(),"-targetBloodSugar")),A=Object(d.a)(T,2),D=A[0],B=A[1],x=O("".concat(fe(),"-correctionFactor")),G=Object(d.a)(x,2),L=G[0],V=G[1],J=O("".concat(fe(),"-carbohydrateFactor")),z=Object(d.a)(J,2),R=z[0],Z=z[1],W=O("foodItems",[]),H=Object(d.a)(W,2),U=H[0],q=H[1],Q=Object(n.useState)(""),X=Object(d.a)(Q,2),Y=X[0],$=X[1],_=Object(n.useState)(""),ee=Object(d.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(d.a)(ne,2),ce=re[0],oe=re[1],ie=Object(n.useState)(""),le=Object(d.a)(ie,2),ue=le[0],se=le[1],de=Object(n.useState)(""),me=Object(d.a)(de,2),ge=me[0],be=me[1],he=Object(n.useRef)();function fe(){return"automatic"===a?function(){var e=(new Date).toLocaleTimeString().split(":"),t=Object(d.a)(e,2),a=t[0],n=t[1],r=ye(a)+ye(n)/60,c="";c=r<=11.5?"morning":r<=16?"midday":"evening";return c}():a}function Se(){window.location.reload()}function pe(e){return"string"!==typeof e?"":"".concat(e[0].toUpperCase()).concat(e.slice(1))}function ve(e){var t=e;Array.isArray(e)||(t=[e]),0!==(t=t.filter((function(e){return!p.some((function(t){return e===t}))}))).length&&(t=[].concat(Object(u.a)(p),Object(u.a)(t)),C(t))}function Ee(e){var t=e;Array.isArray(e)||(t=[e]),0!==(t=t.filter((function(e){return!N.some((function(t){return e===t}))}))).length&&(t=[].concat(Object(u.a)(N),Object(u.a)(t)),k(t))}function Oe(e){var t=e.target,a=t.name,n=t.value,r=t.id;if("-"!==n[n.length-1]){var c=U.map((function(e){var t;if(r!=e.id)return e;if("name"===a){var c="".concat(P,"foodItem-").concat(n.toLowerCase(),"-carbohydratesPer100Grams"),o=localStorage.getItem(c);if(null!=o){var i,d=JSON.parse(o),m=Object(s.a)(Object(s.a)({},e.per100gSlide),{},(i={},Object(l.a)(i,a,n),Object(l.a)(i,"shouldDisplaySuggestions",!1),Object(l.a)(i,"carbohydratesPer100Grams",d),i));return Object(s.a)(Object(s.a)({},e),{},{per100gSlide:m})}}var g=""!==e.per100gSlide.name&&null!=e.per100gSlide.name&&"."!==e.per100gSlide.name[0];if("carbohydratesPer100Grams"===a&&g){var b="".concat(P,"foodItem-").concat(e.per100gSlide.name.toLowerCase(),"-carbohydratesPer100Grams"),h=pe(e.per100gSlide.name.toLowerCase());""!==n?(localStorage.setItem(b,JSON.stringify(n)),ve(h)):(localStorage.removeItem(b),function(e){for(var t,a=0;a<p.length;a++)if(e===p[a]){t=a;break}if(null!=t){var n=Object(u.a)(p);n.splice(t,1),C(n)}}(h))}var f="name"===a,S=Object(s.a)(Object(s.a)({},e.per100gSlide),{},(t={},Object(l.a)(t,a,n),Object(l.a)(t,"shouldDisplaySuggestions",f),t));return Object(s.a)(Object(s.a)({},e),{},{per100gSlide:S})}));q(c)}}function Pe(e){var t=e.target,a=t.name,n=t.value,r=t.id;if("-"!==n[n.length-1]){var c=U.map((function(e){var t;if(r!=e.id)return e;if("name"===a){var c="".concat(P,"foodItem-").concat(n.toLowerCase(),"-carbohydratesPerPiece"),o=localStorage.getItem(c);if(null!=o){var i,d=JSON.parse(o),m=Object(s.a)(Object(s.a)({},e.perPieceSlide),{},(i={},Object(l.a)(i,a,n),Object(l.a)(i,"shouldDisplaySuggestions",!1),Object(l.a)(i,"carbohydratesPerPiece",d),i));return Object(s.a)(Object(s.a)({},e),{},{perPieceSlide:m})}}var g=""!==e.perPieceSlide.name&&null!=e.perPieceSlide.name&&"."!==e.perPieceSlide.name[0];if("carbohydratesPerPiece"===a&&g){var b="".concat(P,"foodItem-").concat(e.perPieceSlide.name.toLowerCase(),"-carbohydratesPerPiece"),h=pe(e.perPieceSlide.name.toLowerCase());""!==n?(localStorage.setItem(b,JSON.stringify(n)),Ee(h)):(localStorage.removeItem(b),function(e){for(var t,a=0;a<N.length;a++)if(e===N[a]){t=a;break}if(null!=t){var n=Object(u.a)(N);n.splice(t,1),k(n)}}(h))}var f="name"===a,S=Object(s.a)(Object(s.a)({},e.perPieceSlide),{},(t={},Object(l.a)(t,a,n),Object(l.a)(t,"shouldDisplaySuggestions",f),t));return Object(s.a)(Object(s.a)({},e),{},{perPieceSlide:S})}));q(c)}}function ye(e){if("string"!==typeof e)return-1;var t=e.slice();t=t.replace(",",".");var a=parseFloat(t);return Number.isNaN(a)?-1:a}function Ce(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a="ein oder mehrere Werte sind nicht g\xfcltig";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.every((function(e){return-1!==ye(e)}))}function r(e){if(e.isPer100gSlideActive){var r=e.per100gSlide.grams,c=e.per100gSlide.carbohydratesPer100Grams;return n(r,c)?ye(r)*(ye(c)/100)/10:(t&&alert(a),0)}var o=e.perPieceSlide.numberOfPieces,i=e.perPieceSlide.carbohydratesPerPiece;return n(o,i)?ye(o)*ye(i)/10:(t&&alert(a),0)}function c(e,r,c){return n(e,r,c)?(ye(e)-ye(r))/ye(c):(""!==e&&t&&alert(a),0)}var o=c(K,D,L);oe(Math.round(10*o)/10);var l,u=0,s=0,d=Object(i.a)(U);try{for(d.s();!(l=d.n()).done;){var m=l.value,g=r(m);u+=g,m.isPer100gSlideActive?s+=m.per100gSlide.isIntermeal?g:0:s+=m.perPieceSlide.isIntermeal?g:0}}catch(h){d.e(h)}finally{d.f()}if(ae(Math.round(10*u)/10),se(Math.round(10*s)/10),be(Math.round(10*(u-s))/10),!n(R))return t&&alert(a),-1;var b=u*ye(R);b+=o,b=Math.round(10*b)/10,$(b),e&&setTimeout((function(){he.current.scrollIntoView({smooth:!0})}),5)}return Object(n.useEffect)((function(){setInterval((function(){y?y=!1:Se()}),6e4)}),[]),r.a.createElement("div",null,y=!0,r.a.createElement("h1",null,"Insulin Rechner"),r.a.createElement("p",null,r.a.createElement("button",{className:"clear-data-button space-around",onClick:function(){q([]),$(0)}},"Daten l\xf6schen"),r.a.createElement("button",{className:"load-data-button",onClick:function(){if(null!=b){var e=b.foodItems;q(e),setTimeout((function(){Ce(!1,!1)}),100)}}},"Daten laden")),r.a.createElement("hr",{className:"destop-hr new-section-hr"}),r.a.createElement(g,{setBloodSugar:M,setDayTimeChoice:c,setTargetBloodSugar:B,setCorrectionFactor:V,setCarbohydrateFactor:Z,bloodSugar:K,dayTimeChoice:a,targetBloodSugar:D,correctionFactor:L,carbohydrateFactor:R,refreshPage:Se}),r.a.createElement("hr",{className:"destop-hr new-section-hr"}),r.a.createElement(v,{foodItems:U,foodNameSuggestionsForPer100gSlide:p,foodNameSuggestionsForPerPieceSlide:N,addNewFoodItem:function(){var e=Math.random(),t=[].concat(Object(u.a)(U),[{key:Math.random(),id:e,isPer100gSlideActive:!0,per100gSlide:{name:"",grams:"",carbohydratesPer100Grams:"",isIntermeal:!1,shouldDisplaySuggestions:!0},perPieceSlide:{name:"",numberOfPieces:"",carbohydratesPerPiece:"",isIntermeal:!1,shouldDisplaySuggestions:!0}}]);q(t)},handleIsIntermealChange:function(e,t){var a=U.map((function(a){if(e==a.id){if(1===t){var n=Object(s.a)(Object(s.a)({},a.per100gSlide),{},{isIntermeal:!a.per100gSlide.isIntermeal});return Object(s.a)(Object(s.a)({},a),{},{per100gSlide:n})}var r=Object(s.a)(Object(s.a)({},a.perPieceSlide),{},{isIntermeal:!a.perPieceSlide.isIntermeal});return Object(s.a)(Object(s.a)({},a),{},{perPieceSlide:r})}return a}));q(a)},handlePer100gSlideValueChange:Oe,handlePerPieceSlideValueChange:Pe,deleteFoodItem:function(e){for(var t,a=0;a<U.length;a++)if(e==U[a].id){t=a;break}var n=Object(u.a)(U);n.splice(t,1),q(n)},handleSuggestionClick:function(e,t,a){var n={target:{name:"name",value:e,id:t}};a?Oe(n):Pe(n)},handleSlideChange:function(e,t){var a=U.map((function(a){return e==a.id?Object(s.a)(Object(s.a)({},a),{},{isPer100gSlideActive:t}):a}));q(a)}}),r.a.createElement("p",{style:{marginBottom:"20px"}},r.a.createElement("button",{className:"save-data-button space-around",onClick:function(){h({foodItems:U})}},"Daten speichen"),r.a.createElement("button",{className:"calculateIE-button",onClick:Ce},"Berechne IE")),r.a.createElement(E,{totalIE:Y,totalMainMealKE:ge,totalIntermealKE:ue,totalKE:te,totalCorrectionInsulin:ce,outputRef:he}))}o.a.render(r.a.createElement(C,null),document.getElementById("root"))},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.2e08da0a.chunk.js.map