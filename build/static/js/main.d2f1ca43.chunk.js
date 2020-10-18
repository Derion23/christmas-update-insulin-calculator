(this["webpackJsonpinsulin-calculator"]=this["webpackJsonpinsulin-calculator"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),l=a(10),u=a(5),i=a(6),d=a(7),m=a(1);a(2);function s(e){var t=e.id,a=e.name,r=void 0===a?"":a,o=e.value,c=void 0===o?"":o,l=e.onChange,u=void 0===l?"":l,i=e.description,d=void 0===i?"":i,m=e.placeholder,s=void 0===m?"":m,g=e.unit,b=void 0===g?"":g;return n.a.createElement("div",null,n.a.createElement("label",null,d),n.a.createElement("br",null),n.a.createElement("input",{id:t,name:r,placeholder:s,value:c,onChange:""===u?function(){return 0}:function(e){return u(e)}}),n.a.createElement("label",null,b))}function g(e){var t=e.setBloodSugar,a=e.setTargetBloodSugar,r=e.setCorrectionFactor,o=e.setCarbohydrateFactor,c=e.bloodSugar,l=e.targetBloodSugar,u=e.correctionFactor,i=e.carbohydrateFactor;return n.a.createElement("div",null,n.a.createElement(s,{name:"BloodSugar",value:c.toString(),description:"Blutzucker",unit:"mg/dl",onChange:function(e){return t(e.target.value)}}),n.a.createElement(s,{name:"TargetBloodSugar",value:l,description:"Blutzucker Zielwert",unit:"mg/dl",onChange:function(e){return a(e.target.value)}}),n.a.createElement(s,{name:"CorrectionFactor",value:u,description:"Korrektur-Faktor",unit:"mg/dl",onChange:function(e){return r(e.target.value)}}),n.a.createElement(s,{name:"CarbohydrateFactor",value:i,description:"KE-Faktor",onChange:function(e){return o(e.target.value)}}))}function b(e){var t=e.id,a=e.name,r=void 0===a?"":a,o=e.grams,c=void 0===o?"":o,l=e.carbohydratesPer100Grams,u=void 0===l?"":l,i=e.handleChange,d=e.deleteFoodItem;return n.a.createElement("div",null,n.a.createElement("button",{className:"delete-food-item-button",onClick:function(){return d(t)}},"x"),n.a.createElement(s,{id:t,name:"name",description:"Name",value:r,onChange:function(e){return i(e)}}),n.a.createElement(s,{id:t,name:"grams",description:"Gramm",value:c,onChange:function(e){return i(e)}}),n.a.createElement(s,{id:t,name:"carbohydratesPer100Grams",description:"Kohlenhydrate pro 100g",value:u,onChange:function(e){return i(e)}}),n.a.createElement("hr",null))}function h(e){var t=e.foodItems,a=void 0===t?[]:t,r=e.addNewFoodItem,o=e.handleChange,c=e.deleteFoodItem;return n.a.createElement("div",null,n.a.createElement("h3",null,"Elemente"),a.map((function(e){return n.a.createElement(b,{key:e.key,id:e.id,name:e.name,grams:e.grams,carbohydratesPer100Grams:e.carbohydratesPer100Grams,handleChange:o,deleteFoodItem:c})})),n.a.createElement("p",null,n.a.createElement("button",{className:"add-new-food-item-button",onClick:function(){return r()}})))}function f(e){var t=e.totalIE,a=e.totalKE,r=e.totalCorrectionInsulin,o=e.carbohydrateFactor,c=e.outputRef;return n.a.createElement("div",{ref:c},""===t||void 0==t||t<=0?"":n.a.createElement("p",{className:"output"},a," KE * ",o," KE-Faktor ",n.a.createElement("br",null),"+ ",r," IE Korrektur-Insulin ",n.a.createElement("br",null),"= ",t," IE Insulin"))}function v(e,t){var a="insulin-calculator-"+e,n=Object(r.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(m.a)(n,2),c=o[0],l=o[1];return Object(r.useEffect)((function(){null!=c&&localStorage.setItem(a,JSON.stringify(c))}),[a,c]),[c,l]}function E(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],c=v("targetBloodSugar"),s=Object(m.a)(c,2),b=s[0],E=s[1],p=v("correctionFactor"),y=Object(m.a)(p,2),O=y[0],C=y[1],F=v("carbohydrateFactor"),j=Object(m.a)(F,2),I=j[0],S=j[1],k=Object(r.useState)([]),B=Object(m.a)(k,2),N=B[0],w=B[1],G=Object(r.useState)(""),K=Object(m.a)(G,2),P=K[0],M=K[1],J=Object(r.useState)(""),R=Object(m.a)(J,2),T=R[0],x=R[1],z=Object(r.useState)(""),A=Object(m.a)(z,2),V=A[0],W=A[1],Z=Object(r.useRef)();return n.a.createElement("div",null,n.a.createElement("h1",null,"Insulin Rechner"),n.a.createElement(g,{setBloodSugar:o,setTargetBloodSugar:E,setCorrectionFactor:C,setCarbohydrateFactor:S,bloodSugar:a,targetBloodSugar:b,correctionFactor:O,carbohydrateFactor:I}),n.a.createElement(h,{foodItems:N,addNewFoodItem:function(){var e=[].concat(Object(d.a)(N),[{key:Math.random(),id:Math.random(),name:"",grams:"",carbohydratesPer100Grams:""}]);w(e)},handleChange:function(e){var t=e.target,a=t.name,r=t.value,n=t.id,o=N.map((function(e){return n==e.id?Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},a,r)):e}));w(o)},deleteFoodItem:function(e){for(var t,a=0;a<N.length;a++)if(e==N[a].id){t=a;break}var r=Object(d.a)(N);r.splice(t,1),w(r)}}),n.a.createElement("button",{className:"calculateIE-button",onClick:function(){var e="ein oder mehrere Werte sind nicht g\xfcltig";function t(e){var t=e.slice();t=t.replace(",",".");var a=parseFloat(t);return Number.isNaN(a)?-1:a}function r(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];for(var n=0,o=a;n<o.length;n++){var c=o[n];if(-1===t(c))return!1}return!0}function n(a){return r(a.grams,a.carbohydratesPer100Grams)?t(a.grams)*(t(a.carbohydratesPer100Grams)/100)/10:(alert(e),0)}var o=function(a,n,o){return r(a,n,o)?(t(a)-t(n))/t(o):(""!==a&&alert(e),0)}(a,b,O);W(Math.round(10*o)/10);var c,u=0,i=Object(l.a)(N);try{for(i.s();!(c=i.n()).done;){u+=n(c.value)}}catch(m){i.e(m)}finally{i.f()}if(x(Math.round(10*u)/10),!r(I))return alert(e),-1;var d=u*t(I);d+=o,d=Math.round(10*d)/10,M(d),Z.current.scrollIntoView({smooth:!0})}},"berechne IE"),n.a.createElement(f,{totalIE:P,totalKE:T,totalCorrectionInsulin:V,carbohydrateFactor:I,outputRef:Z}))}c.a.render(n.a.createElement(E,null),document.getElementById("root"))},2:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.d2f1ca43.chunk.js.map