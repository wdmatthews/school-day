(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{41288:function(e,l,t){Promise.resolve().then(t.bind(t,76774))},76774:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return v}});var n=t(57437),r=t(2265),a=t(16463),o=t(96293),s=t(24012),d=t(73654),c=t(12194),i=t(1959),u=t(11736),m=t(59095),p=t(74138),h=t(86608),x=t(57029),f=t(80021),b=t(47497),j=t(22840),g=t(60327),y=t(48790),w=t(55211),k=t(37346);function v(){let[e,l]=(0,r.useState)([]),[t,w]=(0,r.useState)(""),[v,C]=(0,r.useState)([]),[R,G]=(0,r.useState)([]),[P,S]=(0,r.useState)([]),[N,W]=(0,r.useState)(null),[T,I]=(0,r.useState)(0),[A,E]=(0,r.useState)(null),[M,q]=(0,r.useState)(0),B=(0,r.useRef)(new Date);function F(e){let l=Math.floor(e/60),t=l<12||24===l?"AM":"PM";return l>12&&(l-=12),"".concat(l.toFixed(0).padStart(2,"0"),":").concat((e%60).toFixed(0).padStart(2,"0")," ").concat(t)}let O=(0,r.useCallback)((l,t)=>{l||(l=e);let n=60*B.current.getHours()+B.current.getMinutes(),r=-1;for(let e=0;e<l.length;e++){let t=l[e];if(n>=t.start&&n<=t.end||e<l.length-1&&n>t.end&&n<l[e+1].start){r=e;break}}let a=r>=0?l[r]:null;W(a);let o=a?a.end-n:0;E(r<l.length-1?l[r+1]:null),q((n-510)/420*360-90),a&&T!=o&&t&&3===o&&a.shouldWarn&&(null==t||t.play(),g.notifications.show({title:"3 minutes left of ".concat(a.name,"!"),message:"",style:{backgroundColor:"#f76707"},color:"white",autoClose:5e3})),I(o)},[B,e,930,510,T]);(0,r.useEffect)(()=>{function t(e){let t=[];if(e.length>0){let n=e.split("|"),r=[],a=[],o=[];n.forEach(e=>{let l=e.split(";"),n={name:l[0],color:"#".concat(l[1]),start:Number(l[2]),end:Number(l[3]),shouldWarn:"true"===l[4]};t.push(n),r.push(n.name),a.push(n.color),o.push((n.end-n.start)/420)}),t.length>0&&(l(t),C(r),G(a),S(o))}return t}if(e.length>0)return;let n=t(window.location.search.replace("?courses=","").replaceAll("%3B",";").replaceAll("%7C","|")),r=new Audio("./warning.wav");B.current=new Date,O(n.length>0?n:e),setInterval(()=>{B.current=new Date,O(t(window.location.search.replace("?courses=","")),r)},5e3)},[e,v,R,P,O,420]);let z=["#1c7ed6","#228be6","#339af0","#4dabf7","#74c0fc","#37b24d","#40c057","#51cf66","#69db7c","#8ce99a","#f59f00","#fab005","#fcc419","#ffd43b","#ffe066","#f76707","#fd7e14","#ff922b","#ffa94d","#ffc078","#f03e3e","#fa5252","#ff6b6b","#ff8787","#ffa8a8","#7048e8","#7950f2","#845ef7","#9775fa","#b197fc"],D=["Blue 1","Blue 2","Blue 3","Blue 4","Blue 5","Green 1","Green 2","Green 3","Green 4","Green 5","Yellow 1","Yellow 2","Yellow 3","Yellow 4","Yellow 5","Orange 1","Orange 2","Orange 3","Orange 4","Orange 5","Red 1","Red 2","Red 3","Red 4","Red 5","Purple 1","Purple 2","Purple 3","Purple 4","Purple 5"],_=(0,b.c)({mode:"uncontrolled",initialValues:{name:"",color:z[0],start:"08:30",end:"10:00",shouldWarn:!0},validate:{name:e=>0===e.length?"Required":null,color:e=>0===e.length?"Required":null,start:e=>0===e.length?"Required":null,end:e=>0===e.length?"Required":null},transformValues:e=>{let l=e.start.split(":"),t=e.end.split(":");return{name:e.name,color:e.color,start:60*Number(l[0])+Number(l[1]),end:60*Number(t[0])+Number(t[1]),shouldWarn:e.shouldWarn}}}),V=(0,b.c)({mode:"uncontrolled",initialValues:{name:"",color:z[0],start:"08:30",end:"10:00",shouldWarn:!0},validate:{name:e=>0===e.length?"Required":null,color:e=>0===e.length?"Required":null,start:e=>0===e.length?"Required":null,end:e=>0===e.length?"Required":null},transformValues:e=>{let l=e.start.split(":"),t=e.end.split(":");return{name:e.name,color:e.color,start:60*Number(l[0])+Number(l[1]),end:60*Number(t[0])+Number(t[1]),shouldWarn:e.shouldWarn}}}),Y=(0,a.useRouter)(),L=(0,a.usePathname)();function U(e){let l="".concat(L,"?courses=");e.forEach((e,t)=>{t>0&&(l+="|"),l+="".concat(e.name,";").concat(e.color.slice(1),";").concat(e.start,";").concat(e.end,";").concat(e.shouldWarn)}),Y.push(l)}let H=r=>y.modals.openConfirmModal({title:(0,n.jsx)(o.Text,{fw:700,children:"Are you sure?"}),children:(0,n.jsxs)(o.Text,{children:["Are you sure you want to delete ",t,"?"]}),labels:{confirm:"Delete",cancel:"Cancel"},confirmProps:{color:"red"},onConfirm:()=>(function(t){let n=e.filter((e,l)=>l!==t);l(n),U(n),O(n)})(r)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Card,{m:"md",p:"md",radius:"md",children:(0,n.jsxs)(d.Grid,{align:"center",justify:"center",children:[(0,n.jsxs)(d.Grid.Col,{span:{base:6,md:4},pos:"relative",display:N?"block":"none",children:[(0,n.jsx)(k.by,{data:{labels:v,datasets:[{label:"Class Length",data:P,backgroundColor:R,borderColor:"#2e2e2e",borderWidth:4}]},options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}}}}),(0,n.jsx)(c.Paper,{bg:"white",radius:"xl",style:{position:"absolute",left:"50%",top:"50%",width:"50%",height:"8px",transformOrigin:"4px 4px",translate:"-4px -4px",rotate:"".concat(M,"deg")}})]}),(0,n.jsxs)(d.Grid.Col,{span:{base:6,md:4},display:N?"block":"none",children:[(0,n.jsx)(o.Text,{fw:700,size:"xl",c:null==N?void 0:N.color,display:T>0?"block":"none",children:null==N?void 0:N.name}),(0,n.jsxs)(o.Text,{display:T>0?"block":"none",children:[F(null==N?void 0:N.start)," - ",F(null==N?void 0:N.end)]}),(0,n.jsx)(o.Text,{fw:900,size:"xl",c:"white",tt:"uppercase",mt:"md",children:T>0?T:"Passing period"}),(0,n.jsx)(o.Text,{fw:900,size:"xl",c:"white",tt:"uppercase",display:T>0?"block":"none",children:"minutes left"}),(0,n.jsx)(o.Text,{size:"sm",tt:"uppercase",fw:700,mt:"md",display:A?"block":"none",children:"Next"}),(0,n.jsx)(o.Text,{fw:700,size:"lg",c:null==A?void 0:A.color,display:A?"block":"none",children:null==A?void 0:A.name}),(0,n.jsxs)(o.Text,{display:A?"block":"none",children:["at ",F(null==A?void 0:A.start)]})]}),(0,n.jsx)(d.Grid.Col,{span:{base:12},display:N?"none":"block",children:(0,n.jsx)(o.Text,{fw:700,size:"xl",c:"white",style:{textAlign:"center"},tt:"uppercase",children:"No class in session"})})]})}),(0,n.jsxs)(i.Container,{visibleFrom:"md",children:[(0,n.jsx)(s.Card,{mb:"md",p:"md",radius:"md",children:(0,n.jsxs)("form",{onSubmit:_.onSubmit(function(t){C([...v,t.name]),G([...R,t.color]),S([...P,(t.end-t.start)/420]);let n=[...e,t];l(n),U(n),O(n)}),children:[(0,n.jsx)(u.TextInput,{label:"Name",placeholder:"Example Class",..._.getInputProps("name")},_.key("name")),(0,n.jsx)(m.Checkbox,{mt:"md",label:"Use 3 minute warning",..._.getInputProps("shouldWarn",{type:"checkbox"})},_.key("shouldWarn")),(0,n.jsxs)(p.Radio.Group,{mt:"md",label:"Color",..._.getInputProps("color"),children:[(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(0,5).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(5,10).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+5],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(10,15).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+10],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(15,20).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+15],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(20,25).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+20],color:e},"add-".concat(e)))})]},_.key("color")),(0,n.jsx)(j.M,{mt:"md",label:"Start Time",..._.getInputProps("start")},_.key("start")),(0,n.jsx)(j.M,{mt:"md",label:"End Time",..._.getInputProps("end")},_.key("end")),(0,n.jsx)(h.Group,{justify:"flex-end",mt:"md",children:(0,n.jsx)(x.Button,{type:"submit",children:"Add"})})]})}),(0,n.jsx)(f.Accordion,{variant:"separated",mb:"md",value:t,onChange:l=>{w(l),function(l){if(!l||0===l.length)return;let t=e.find(e=>e.name===l);if(!t)return;let n=Math.floor(t.start/60),r=t.start%60,a=Math.floor(t.end/60),o=t.end%60;V.setValues({name:t.name,color:t.color,start:"".concat(n.toFixed(0).padStart(2,"0"),":").concat(r.toFixed(0).padStart(2,"0")),end:"".concat(a.toFixed(0).padStart(2,"0"),":").concat(o.toFixed(0).padStart(2,"0")),shouldWarn:t.shouldWarn})}(l)},children:e.map((t,r)=>(0,n.jsxs)(f.Accordion.Item,{value:t.name,children:[(0,n.jsx)(f.Accordion.Control,{style:{borderRadius:4,borderColor:t.color,borderWidth:4,borderStyle:"solid"},children:t.name}),(0,n.jsx)(f.Accordion.Panel,{children:(0,n.jsxs)("form",{onSubmit:V.onSubmit(t=>(function(t,n){let r=e.map((e,l)=>l===t?n:e);l(r),w(n.name),U(r),O(r)})(r,t)),children:[(0,n.jsx)(u.TextInput,{label:"Name",placeholder:"Example Class",...V.getInputProps("name")},V.key("name")),(0,n.jsx)(m.Checkbox,{mt:"md",label:"Use 3 minute warning",...V.getInputProps("shouldWarn",{type:"checkbox"})},V.key("shouldWarn")),(0,n.jsxs)(p.Radio.Group,{mt:"md",label:"Color",...V.getInputProps("color"),children:[(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(0,5).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(5,10).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+5],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(10,15).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+10],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(15,20).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+15],color:e},"add-".concat(e)))}),(0,n.jsx)(h.Group,{mt:"xs",children:z.slice(20,25).map((e,l)=>(0,n.jsx)(p.Radio,{value:e,label:D[l+20],color:e},"add-".concat(e)))})]},V.key("color")),(0,n.jsx)(j.M,{mt:"md",label:"Start Time",...V.getInputProps("start")},V.key("start")),(0,n.jsx)(j.M,{mt:"md",label:"End Time",...V.getInputProps("end")},V.key("end")),(0,n.jsxs)(h.Group,{justify:"flex-end",mt:"md",children:[(0,n.jsx)(x.Button,{onClick:()=>H(r),color:"red",children:"Delete"}),(0,n.jsx)(x.Button,{type:"submit",children:"Edit"})]})]})})]},t.name))})]})]})}w.kL.register(w.qi,w.u,w.De)}},function(e){e.O(0,[674,984,953,971,23,744],function(){return e(e.s=41288)}),_N_E=e.O()}]);