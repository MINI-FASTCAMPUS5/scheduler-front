import{j as e,L as v,b as d,f as b,D as g,r as w,R as y,u as S}from"./index-07b8d0e5.js";import{u as z}from"./user-e932d91f.js";import{G as m}from"./iconBase-8f4a0380.js";import{c as I,d as k}from"./index.esm-6d9eeb5e.js";import{d as f}from"./dayjs.min-b9add960.js";import{B as $}from"./Button-6349ddeb.js";function j({name:t,children:n,isActive:s=!1,url:a,onClick:i}){const r=s?"bg-white text-main rounded-l-[20px]":"bg-main text-white";return e.jsx("div",{className:"relative h-[70px] bg-white font-bold",onClick:()=>i&&i(t),children:e.jsx("div",{className:"h-[70px] w-full text-right bg-main",children:e.jsxs("div",{className:"relative bounce-menu",children:[s&&e.jsx("img",{className:"absolute right-0 z-40",src:"/sbtn_ac.svg"}),e.jsx(v,{to:a,className:`absolute flex items-center w-[240px] h-[50px] right-0 top-[20px] z-50 ${r}`,children:n})]})})})}function M(t){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(t)}function N(t){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"}},{tag:"path",attr:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"}}]})(t)}function A(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.339-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"}},{tag:"path",attr:{d:"M11 11.586 8.707 9.293l-1.414 1.414L11 14.414l6.207-6.207-1.414-1.414z"}}]})(t)}function B(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}}]})(t)}function L(){const t=d(),n=new URLSearchParams(t.search),{year:s,month:a,day:i}=b();let r=s&&a&&i?`/calendar/${s}/${a}/${i}`:`/calendar/${f(new Date).format(g)}`;n.get("keyword")&&(r+=`?keyword=${n.get("keyword")}`);const o=[{title:"행사 일정 캘린더",id:"admin-sidebar-0",Icon:N,url:r},{title:"행사 등록/수정",id:"admin-sidebar-1",Icon:M,url:"/manager/event"+r},{title:"신청 승인/취소",id:"admin-sidebar-2",Icon:A,url:"/manager/approval"},{title:"매니저 페이지",id:"admin-sidebar-3",Icon:I,url:"/manager/dashboard"}];let l=0;t.pathname.includes("/manager/event/calendar/")&&(l=1),t.pathname.includes("/manager/approval")&&(l=2),t.pathname.includes("/manager/dashboard")&&(l=3);const[h,x]=w.useState(o[l].id);return e.jsx("div",{className:"mb-6",children:o.map((c,u)=>e.jsx(j,{name:c.id,isActive:h===c.id,onClick:p=>x(p),idx:u,url:c.url,children:e.jsxs("p",{className:"flex items-center ml-4",children:[e.jsx(c.Icon,{className:"mr-4 w-6 h-6"}),c.title]})},c.id))})}function C(){const t=d(),n=new URLSearchParams(t.search),{year:s,month:a,day:i}=b();let r=s&&a&&i?`/calendar/${s}/${a}/${i}`:`/calendar${f(new Date).format(g)}`;n.get("keyword")&&(r+=`?keyword=${n.get("keyword")}`);const o=[{title:"행사 신청 캘린더",id:"user-sidebar-0",Icon:N,url:r},{title:"마이 페이지",id:"user-sidebar-1",Icon:k,url:"/user/mypage"}];let l=0;t.pathname.includes("mypage")&&(l=1);const[h,x]=w.useState(o[l].id);return e.jsx("div",{className:"mb-6",children:o.map((c,u)=>e.jsx(j,{name:c.id,isActive:h===c.id,onClick:p=>x(p),idx:u,url:c.url,children:e.jsxs("p",{className:"flex items-center ml-4",children:[e.jsx(c.Icon,{className:"mr-4 w-6 h-6"}),c.title]})},c.id))})}function P({user:t}){return e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex justify-center items-center p-4 gap-4",children:[e.jsx("img",{className:"w-20 h-20 rounded-[2.5rem]",src:t.profileImage}),e.jsxs("div",{className:"text-center",children:[e.jsxs("h2",{className:"text-xl text-white font-bold",children:[" ",t.fullName]}),e.jsx(v,{to:`${t.role==="ADMIN"?"/manager":"/user"}/edit`,className:"inline-block bg-white px-3 rounded-xl font-bold text-[0.9rem] leading-6 mt-4",children:"수정"})]})]}),e.jsx("div",{className:"flex justify-center pt-2",children:e.jsx($,{text:"로그아웃",type:"red",size:"md",className:"font-bold w-4/5 rounded-xl",onClick:()=>{alert("임시로 페이지를 새로 고쳐 로그아웃합니다."),window.location.href="/login"}})})]})}function R({onSubmit:t}){const n=d(),s=new URLSearchParams(n.search),[a,i]=y.useState(s.get("keyword")||"");return e.jsxs("form",{className:"relative text-center",onSubmit:r=>{r.preventDefault(),alert(a+"로 검색합니다."),t(a),i("")},children:[e.jsx("input",{className:"bg-main text-white w-[240px] outline-none border-2 border-white rounded-3xl px-4 py-2 placeholder:text-#fcfcfcfc",type:"text",value:a,minLength:2,maxLength:10,required:!0,onChange:r=>i(r.target.value),placeholder:"기획사를 입력해주세요!"}),e.jsx("label",{htmlFor:"searchSubmitBtn",children:e.jsx(B,{className:"absolute w-6 h-6 text-white z-[998] top-[12px] right-[34px] cursor-pointer"})}),e.jsx("input",{type:"submit",id:"searchSubmitBtn",className:"hidden"})]})}function U(){return e.jsxs("div",{className:"max-h-[350px] text-white py-8 overflow-y-scroll scrollbar-hide",children:[e.jsx("img",{className:"m-auto max-h-[260px]",src:"/side_add.png",alt:"side bar advertisement"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{className:`text-white font-bold border-[1px] border-white rounded-full mt-1 px-2 text-[0.8rem]
        hover:text-main hover:border-white hover:bg-white transition-color ease-out duration-100`,children:"굳덕 티켓 신청"})})]})}function T(){const t=S(),n=d(),{getUserInfo:s}=z(),a=s(),i=r=>{t(`${n.pathname}?keyword=${r}`)};return e.jsxs("aside",{className:`sticky mt-2 left-2 mb-2 flex flex-col min-w-[290px] max-w-[290px] max-h-[calc(100vh_-_1rem)] min-h-[860px] pt-6 rounded-[20px] bg-main z-[60]
      transition-all ease-out duration-75`,children:[e.jsx("div",{className:"mb-8",children:e.jsx(v,{to:`/calendar/${f(new Date).format(g)}`,children:e.jsx("img",{className:"m-auto",src:"/yearly_idol.png",width:"240px",alt:"연간 아이돌"})})}),e.jsx("div",{className:"mb-4",children:e.jsx(R,{onSubmit:i})}),a.role==="USER"&&e.jsx(C,{}),a.role==="ADMIN"&&e.jsx(L,{}),e.jsx("div",{className:"mb-auto overflow-y-scroll scrollbar-hide border-dotted border-y-2 border-white",children:e.jsx(U,{})}),e.jsx(P,{user:a})]})}export{T as S};
