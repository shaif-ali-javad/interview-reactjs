import{r as t,j as e,B as a,N as q}from"./index-CgdZ0r0h.js";import{L as f,T as x}from"./index.es-CAtUDEbd.js";import{i as L,a as M,b as P,c as z,d as F,e as K,f as O,g as G,h as H,j as U,k as J,l as V,m as Z,n as W,o as X,p as Y,q as _,r as $,s as ee,B as te}from"./flags-sheet28-Dd7E4zM-.js";function de(){const[w,c]=t.useState(!1),[r,u]=t.useState(0),[o,g]=t.useState(0),[v,R]=t.useState(0);t.useState([]);const[m,d]=t.useState(0),[se,A]=t.useState(0),[ie,b]=t.useState(null);t.useState(null),t.useState(!1);const[j,C]=t.useState(0),[k,E]=t.useState(0),[S,I]=t.useState(0),[y,Q]=t.useState(0),[T,B]=t.useState(0);t.useEffect(()=>{const s=setInterval(()=>{C(i=>i+1),j===60&&(c(!0),C(0))},1e3);return b(s),()=>clearInterval(s)},[j]);const h=()=>{o>v&&(R(o),E(o)),k>o&&I(o),S>o&&Q(o),y>o&&B(o)};t.useEffect(()=>{const s=setInterval(()=>{d(i=>i+1),m===59&&(A(i=>i+1),d(0)),m===5&&(D(),d(0))},1e3);return b(s),()=>clearInterval(s)},[m]);const D=()=>{r+1<n.length?u(s=>s+1):(c(!0),h())},n=[{text:L,options:[{id:0,text:"a. New Zealand",isCorrect:!1},{id:1,text:"b. Kazakhstan",isCorrect:!1},{id:2,text:"c. Japan",isCorrect:!0},{id:3,text:"d. Australia",isCorrect:!1}]},{text:M,options:[{id:0,text:"a. India",isCorrect:!0},{id:1,text:"b. France",isCorrect:!1},{id:2,text:"c. Ecuador",isCorrect:!1},{id:3,text:"d. Greece",isCorrect:!1}]},{text:P,options:[{id:0,text:"a. South Africa",isCorrect:!0},{id:1,text:"b. Belgium",isCorrect:!1},{id:2,text:"c. Russia",isCorrect:!1},{id:3,text:"d. Germany",isCorrect:!0}]},{text:z,options:[{id:0,text:"a. USA",isCorrect:!0},{id:1,text:"b. Pakistan",isCorrect:!1},{id:2,text:"c. United Arab Emirates",isCorrect:!1},{id:3,text:"d. Netherlands",isCorrect:!1}]},{text:F,options:[{id:0,text:"a. Saudi Arabia",isCorrect:!1},{id:1,text:"b. China",isCorrect:!0},{id:2,text:"c. Vietnam",isCorrect:!1},{id:3,text:"d. Denmark",isCorrect:!1}]},{text:K,options:[{id:0,text:"a. Sweden",isCorrect:!1},{id:1,text:"b. South Korea",isCorrect:!0},{id:2,text:"c. Argentina",isCorrect:!1},{id:3,text:"d. Thailand",isCorrect:!1}]},{text:O,options:[{id:0,text:"a. Iran",isCorrect:!1},{id:1,text:"b. Austria",isCorrect:!1},{id:2,text:"c. indonesia",isCorrect:!0},{id:3,text:"d. Norway",isCorrect:!1}]},{text:G,options:[{id:0,text:"a. Nigeria",isCorrect:!1},{id:1,text:"b. Israel",isCorrect:!1},{id:2,text:"c. Ireland",isCorrect:!1},{id:3,text:"d. Poland",isCorrect:!0}]},{text:H,options:[{id:0,text:"a. Canada",isCorrect:!0},{id:1,text:"b. Singapore",isCorrect:!1},{id:2,text:"c. Malaysia",isCorrect:!1},{id:3,text:"d. Philippines",isCorrect:!1}]},{text:U,options:[{id:0,text:"a. Colombia",isCorrect:!1},{id:1,text:"b. Mexico",isCorrect:!0},{id:2,text:"c. Egypt",isCorrect:!1},{id:3,text:"d. Finland",isCorrect:!1}]},{text:J,options:[{id:0,text:"a. Chile",isCorrect:!1},{id:1,text:"b. Bangladesh",isCorrect:!1},{id:2,text:"c. Switzerland",isCorrect:!0},{id:3,text:"d. Czech Republic",isCorrect:!1}]},{text:V,options:[{id:0,text:"a. Portugal",isCorrect:!1},{id:1,text:"b. Peru",isCorrect:!1},{id:2,text:"c. Romania",isCorrect:!1},{id:3,text:"d. Italy",isCorrect:!0}]},{text:Z,options:[{id:0,text:"a. Spain",isCorrect:!0},{id:1,text:"b. Algeria",isCorrect:!1},{id:2,text:"c. Hungary",isCorrect:!1},{id:3,text:"d. Qatar",isCorrect:!1}]},{text:W,options:[{id:0,text:"a. Iraq",isCorrect:!1},{id:1,text:"b. Turkey",isCorrect:!0},{id:2,text:"c. Ukraine",isCorrect:!1},{id:3,text:"d. Kuwait",isCorrect:!1}]},{text:X,options:[{id:0,text:"a. Morocco",isCorrect:!1},{id:1,text:"b. Angola",isCorrect:!1},{id:2,text:"c. Brazil",isCorrect:!0},{id:3,text:"d. Oman",isCorrect:!1}]}];t.useEffect(()=>{const s=i=>{i.key==="a"?l(n[r].options[0].isCorrect):i.key==="b"?l(n[r].options[1].isCorrect):i.key==="c"?l(n[r].options[2].isCorrect):i.key==="d"?l(n[r].options[3].isCorrect):i.key==="Enter"?r+1<n.length?u(r+1):(c(!0),h()):i.key===" "&&N()};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[r,n]);const l=(s,i)=>{[...n][r].options.forEach(p=>{p.id===i?p.clicked=!0:p.clicked=!1}),s?g(o+1):c(!0),r+1<n.length?(u(r+1),d(0)):(c(!0),h())},N=()=>{g(0),u(0),c(!1),d(0),C(0)};return e.jsx("div",{className:"App",children:e.jsxs(a,{className:"App",children:[e.jsxs(a,{sx:{mt:-7,ml:-40,color:"#fff"},className:"top",textAlign:"left",children:[e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"2rem 0 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:Y,alt:"background2",width:100,className:"background2"}),e.jsx(x,{variant:"h2",sx:{m:1},children:k})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:_,alt:"background2",width:100,className:"background2"}),e.jsx(x,{variant:"h2",sx:{m:1},children:S})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:$,alt:"background2",width:100,className:"background2"}),e.jsx(x,{variant:"h2",sx:{m:1},children:y})]}),e.jsxs(a,{sx:{display:"flex",justifyContent:"center",margin:"1rem 0",borderRadius:"10px"},children:[e.jsx(f,{animationData:ee,alt:"background2",width:100,className:"background2"}),e.jsx(x,{variant:"h2",sx:{m:1},children:T})]})]}),e.jsxs(a,{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},gap:2,sx:{mb:2},color:"white",children:[e.jsxs(x,{variant:"h2",children:["Score ",o]}),e.jsx(a,{sx:{backgroundColor:"#fff",padding:1,borderRadius:"10px",color:"#000"},children:e.jsx(q,{className:"link1",to:"/gamemode",children:"home"})})]}),w?e.jsxs(a,{className:"final-results",color:"#fff",children:[e.jsx("h1",{children:"Final Results"}),e.jsx("button",{onClick:N,children:"Restart game"})]}):e.jsxs("div",{className:"question-card",children:[e.jsxs(a,{sx:{mb:5},children:[e.jsx("img",{src:n[r].text,width:200,className:"question-text"}),e.jsx(a,{className:"line-container",sx:{width:200},children:e.jsx(a,{className:"line",sx:{backgroundColor:"#fff",mt:1,mb:-3,borderRadius:5}})})]}),e.jsx(a,{className:"name",sx:{display:"flex",flexDirection:"column",gap:2,width:200},children:n[r].options.map(s=>e.jsx(te,{sx:{backgroundColor:"#fff",borderRadius:5,width:200,"&:hover":{backgroundColor:"#fff"}},onClick:()=>l(s.isCorrect,s.id),children:s.text},s.id))})]})]})})}export{de as default};
