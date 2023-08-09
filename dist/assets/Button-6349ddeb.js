import{j as u}from"./index-07b8d0e5.js";function x({text:s,disabled:e=!1,size:t="md",className:r,onClick:p,type:n="purple"}){let o="";t==="sm"?o="h-6 px-2":t==="md"?o="h-8 px-4":t==="lg"&&(o="h-10 px-6");const l=n==="purple"?"main":"point",i=n==="purple"?"[#4619a5]":"rose-500";return u.jsx("button",{disabled:e,onClick:p,className:`
      ${o} bg-${l} hover:bg-${i} ${e?`text-slate-300 opacity-60 hover:bg-${l} cursor-not-allowed`:"text-white"}  rounded-md transition-colors ease-in-out duration-200 
      ${r&&r}`,children:s})}export{x as B};
