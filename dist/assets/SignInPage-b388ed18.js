import{r as t,u as h,j as e,L as v,D as j}from"./index-07b8d0e5.js";import{u as w}from"./user-e932d91f.js";import{d as E}from"./dayjs.min-b9add960.js";function A(){const[a,i]=t.useState(""),[n,u]=t.useState(""),[c,r]=t.useState(!1),[d,l]=t.useState(!1),g=h(),{login:p}=w(),x=s=>{i(s.target.value),/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(s.target.value)?r(!0):r(!1)},m=s=>{u(s.target.value),/^(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+])[a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+]{8,}$/.test(s.target.value)?l(!0):l(!1)},f=async s=>{if(s.preventDefault(),await p(a,n)){alert("로그인 성공!"),g(`/calendar/${E(new Date).format(j)}`);return}alert("로그인 실패!")};return e.jsxs("div",{children:[e.jsxs("form",{onSubmit:f,children:[e.jsx("input",{type:"text",value:a,onChange:x,placeholder:"이메일"}),c?null:e.jsx("div",{children:"올바른 이메일 형식을 입력해 주세요."}),e.jsx("input",{type:"password",value:n,onChange:m,placeholder:"비밀번호"}),d?null:e.jsx("div",{children:"비밀번호는 최소 8자 이상이어야 합니다."}),e.jsx("button",{type:"submit",children:"로그인"})]}),e.jsx(v,{to:"/signup",children:"회원가입"})]})}export{A as default};