import{r as t,j as e,B as a,N as L}from"./index-DNNZ9Et7.js";import{T as d,L as f}from"./index.es-Cl3V9yA0.js";import{i as M,a as P,b as z,c as F,d as H,e as K,f as O,g as G,h as U,j as J,k as V,l as Z,m as W,n as X,o as Y,p as _,q as $,r as ee,s as te,t as se,B as v,u as ie}from"./flags-sheet28-DhQub4F0.js";function xe(){const[w,c]=t.useState(!1),[r,u]=t.useState(0),[o,p]=t.useState(0),[A,R]=t.useState(0);t.useState([]);const[m,l]=t.useState(0),[re,E]=t.useState(0),[ae,b]=t.useState(null);t.useState(null),t.useState(!1);const[j,C]=t.useState(0),[k,I]=t.useState(0),[S,Q]=t.useState(0),[y,T]=t.useState(0),[B,D]=t.useState(0);t.useEffect(()=>{const s=setInterval(()=>{C(i=>i+1),j===60&&(c(!0),C(0))},1e3);return b(s),()=>clearInterval(s)},[j]);const h=()=>{o>A&&(R(o),I(o)),k>o&&Q(o),S>o&&T(o),y>o&&D(o)};t.useEffect(()=>{const s=setInterval(()=>{l(i=>i+1),m===59&&(E(i=>i+1),l(0)),m===5&&(q(),l(0))},1e3);return b(s),()=>clearInterval(s)},[m]);const q=()=>{r+1<n.length?u(s=>s+1):(c(!0),h())},n=[{text:M,options:[{id:0,text:"a. New Zealand",isCorrect:!1},{id:1,text:"b. Kazakhstan",isCorrect:!1},{id:2,text:"c. Japan",isCorrect:!0},{id:3,text:"d. Australia",isCorrect:!1}]},{text:P,options:[{id:0,text:"a. India",isCorrect:!0},{id:1,text:"b. France",isCorrect:!1},{id:2,text:"c. Ecuador",isCorrect:!1},{id:3,text:"d. Greece",isCorrect:!1}]},{text:z,options:[{id:0,text:"a. South Africa",isCorrect:!0},{id:1,text:"b. Belgium",isCorrect:!1},{id:2,text:"c. Russia",isCorrect:!1},{id:3,text:"d. Germany",isCorrect:!0}]},{text:F,options:[{id:0,text:"a. USA",isCorrect:!0},{id:1,text:"b. Pakistan",isCorrect:!1},{id:2,text:"c. United Arab Emirates",isCorrect:!1},{id:3,text:"d. Netherlands",isCorrect:!1}]},{text:H,options:[{id:0,text:"a. Saudi Arabia",isCorrect:!1},{id:1,text:"b. China",isCorrect:!0},{id:2,text:"c. Vietnam",isCorrect:!1},{id:3,text:"d. Denmark",isCorrect:!1}]},{text:K,options:[{id:0,text:"a. Sweden",isCorrect:!1},{id:1,text:"b. South Korea",isCorrect:!0},{id:2,text:"c. Argentina",isCorrect:!1},{id:3,text:"d. Thailand",isCorrect:!1}]},{text:O,options:[{id:0,text:"a. Iran",isCorrect:!1},{id:1,text:"b. Austria",isCorrect:!1},{id:2,text:"c. indonesia",isCorrect:!0},{id:3,text:"d. Norway",isCorrect:!1}]},{text:G,options:[{id:0,text:"a. Nigeria",isCorrect:!1},{id:1,text:"b. Israel",isCorrect:!1},{id:2,text:"c. Ireland",isCorrect:!1},{id:3,text:"d. Poland",isCorrect:!0}]},{text:U,options:[{id:0,text:"a. Canada",isCorrect:!0},{id:1,text:"b. Singapore",isCorrect:!1},{id:2,text:"c. Malaysia",isCorrect:!1},{id:3,text:"d. Philippines",isCorrect:!1}]},{text:J,options:[{id:0,text:"a. Colombia",isCorrect:!1},{id:1,text:"b. Mexico",isCorrect:!0},{id:2,text:"c. Egypt",isCorrect:!1},{id:3,text:"d. Finland",isCorrect:!1}]},{text:V,options:[{id:0,text:"a. Chile",isCorrect:!1},{id:1,text:"b. Bangladesh",isCorrect:!1},{id:2,text:"c. Switzerland",isCorrect:!0},{id:3,text:"d. Czech Republic",isCorrect:!1}]},{text:Z,options:[{id:0,text:"a. Portugal",isCorrect:!1},{id:1,text:"b. Peru",isCorrect:!1},{id:2,text:"c. Romania",isCorrect:!1},{id:3,text:"d. Italy",isCorrect:!0}]},{text:W,options:[{id:0,text:"a. Spain",isCorrect:!0},{id:1,text:"b. Algeria",isCorrect:!1},{id:2,text:"c. Hungary",isCorrect:!1},{id:3,text:"d. Qatar",isCorrect:!1}]},{text:X,options:[{id:0,text:"a. Iraq",isCorrect:!1},{id:1,text:"b. Turkey",isCorrect:!0},{id:2,text:"c. Ukraine",isCorrect:!1},{id:3,text:"d. Kuwait",isCorrect:!1}]},{text:Y,options:[{id:0,text:"a. Morocco",isCorrect:!1},{id:1,text:"b. Angola",isCorrect:!1},{id:2,text:"c. Brazil",isCorrect:!0},{id:3,text:"d. Oman",isCorrect:!1}]}];t.useEffect(()=>{const s=i=>{i.key==="a"?x(n[r].options[0].isCorrect):i.key==="b"?x(n[r].options[1].isCorrect):i.key==="c"?x(n[r].options[2].isCorrect):i.key==="d"?x(n[r].options[3].isCorrect):i.key==="Enter"?r+1<n.length?u(r+1):(c(!0),h()):i.key===" "&&N()};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[r,n]);const x=(s,i)=>{[...n][r].options.forEach(g=>{g.id===i?g.clicked=!0:g.clicked=!1}),s?p(o+1):c(!0),r+1<n.length?(u(r+1),l(0)):(c(!0),h())},N=()=>{p(0),u(0),c(!1),l(0),C(0)};return e.jsx("div",{className:"App",children:e.jsxs(a,{className:"App",children:[e.jsxs(a,{sx:{mt:-7,ml:-40,color:"#fff"},className:"top",textAlign:"left",children:[e.jsxs(d,{variant:"h2",sx:{ml:1,mt:1,mb:-3},textAlign:"center",children:["High ",e.jsx("br",{})," Score"]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"2rem 0 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:_,alt:"background2",className:"background2"}),e.jsx(d,{variant:"h2",sx:{ml:1,mt:-.5},children:k})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:$,alt:"background2",width:100,className:"background2"}),e.jsx(d,{variant:"h2",sx:{ml:1,mt:-.5},children:S})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:ee,alt:"background2",width:100,className:"background2"}),e.jsx(d,{variant:"h2",sx:{ml:1,mt:-.5},children:y})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:te,alt:"background2",width:100,className:"background2"}),e.jsx(d,{variant:"h2",sx:{ml:1,mt:-.5},children:B})]})]}),e.jsxs(a,{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(1, 1fr)",md:"repeat(1, 1fr)"},gap:2,sx:{mt:0},color:"white",children:[e.jsxs(d,{variant:"h2",children:["Score ",o]}),e.jsx(a,{sx:{padding:1,borderRadius:"10px",color:"#000"},children:e.jsx(L,{className:"link2",to:"/gamemode",children:e.jsx("img",{src:se,className:"background4"})})})]}),w?e.jsxs(a,{className:"final-results",color:"#fff",children:[e.jsx("h1",{children:"Final Results"}),e.jsx(v,{onClick:N,children:e.jsx("img",{src:ie,className:"background3"})})]}):e.jsxs("div",{className:"question-card",children:[e.jsxs(a,{sx:{mb:5},children:[e.jsx("img",{src:n[r].text,width:200,className:"question-text"}),e.jsx(a,{className:"line-container",sx:{width:200},children:e.jsx(a,{className:"line",sx:{backgroundColor:"#fff",mt:1,mb:-3,borderRadius:5}})})]}),e.jsx(a,{className:"name",sx:{display:"flex",flexDirection:"column",gap:2,width:200},children:n[r].options.map(s=>e.jsx(v,{sx:{backgroundColor:"#fff",borderRadius:5,width:200,"&:hover":{backgroundColor:"#fff"}},onClick:()=>x(s.isCorrect,s.id),children:s.text},s.id))})]})]})})}export{xe as default};
