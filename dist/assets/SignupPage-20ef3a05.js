import{r as a,u as h,j as e,L as j,D as v}from"./index-07b8d0e5.js";import{u as w}from"./user-e932d91f.js";import{d as N}from"./dayjs.min-b9add960.js";function S(){const[t,o]=a.useState(""),[l,x]=a.useState(""),[r,i]=a.useState(!1),[n,c]=a.useState(!1),m=h(),{login:u}=w(),f=s=>{o(s.target.value),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(s.target.value)?i(!0):i(!1)},g=s=>{x(s.target.value),/^(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+])[a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+]{8,}$/.test(s.target.value)?c(!0):c(!1)},p=async s=>{if(s.preventDefault(),await u(t,l)){alert("로그인 성공!"),m(`/calendar/${N(new Date).format(v)}`);return}alert("로그인 실패!")};return e.jsx("div",{className:"absolute flex flex-col items-start w-[340px] h-[400px] border-4 p-4 rounded-xl z-[999] top-24 right-48",children:e.jsx("div",{className:"h-screen flex justify-center items-center",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("svg",{viewBox:"0 0 300 81",children:e.jsx("image",{href:"/YeonganIdolLogoOrigin.svg",width:"300",height:"81"})}),e.jsxs("form",{onSubmit:p,className:"flex flex-col items-center",children:[e.jsxs("div",{className:"flex flex-col items-start w-full",children:[e.jsxs("div",{className:"flex flex-row items-start w-full mb-2",children:[" ",e.jsx("label",{htmlFor:"email",className:"text-gray-600 mb-1",children:"이메일"}),e.jsx("input",{type:"text",id:"email",value:t,onChange:f,className:"py-2  w-340 bg-gray-200 rounded"})]}),!r&&e.jsx("div",{className:"text-red-600",children:"올바른 이메일 형식을 입력해 주세요."})]}),e.jsxs("div",{className:"flex flex-col items-start w-full",children:[e.jsxs("div",{className:"flex flex-row items-start w-full mb-2",children:[" ",e.jsx("label",{htmlFor:"password",className:"text-gray-600 mb-1",children:"비밀번호"}),e.jsx("input",{type:"password",id:"password",value:l,onChange:g,className:"py-2  w-340 bg-gray-200 rounded"})]}),!n&&e.jsx("div",{className:"text-red-600",children:"비밀번호는 최소 8자 이상이어야 합니다."})]}),e.jsx("button",{type:"submit",className:"py-2 px-5 bg-purple-600 text-white rounded disabled:opacity-50 mt-4",disabled:!r||!n,children:"로그인"})]}),e.jsxs(j,{to:"/signup",className:"text-purple-600 hover:underline mt-4",children:[e.jsx("span",{className:"text-black",children:"아직 계정이 없으신가요?"})," 회원가입"]})]})})})}export{S as default};