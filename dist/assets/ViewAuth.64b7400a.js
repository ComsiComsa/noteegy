import{r as v,u as m,i as h,s as f,o as g,c as b,b as s,n as r,w as l,t as d,d as c,z as u,A as _}from"./index.f09df83c.js";const w={class:"auth"},x={class:"tabs is-centered"},y={class:"card auth-form"},A={class:"card-content"},S={class:"title has-text-centered"},V=["onSubmit"],k={class:"field"},U=s("label",{class:"label"},"Email",-1),B={class:"control"},C={class:"field"},q=s("label",{class:"label"},"Password",-1),z={class:"control"},D={class:"field is-grouped is-grouped-right"},E={class:"control"},L={class:"button is-primary"},$={__name:"ViewAuth",setup(M){const t=v(!1),a=m(),n=h(()=>t.value?"Register":"Login"),o=f({email:"",password:""}),p=()=>{t.value?a.registerUser(o):a.loginUser(o)};return(R,e)=>(g(),b("div",w,[s("div",x,[s("ul",null,[s("li",{class:r({"is-active":!t.value})},[s("a",{onClick:e[0]||(e[0]=l(i=>t.value=!1,["prevent"]))},"Login")],2),s("li",{class:r({"is-active":t.value})},[s("a",{onClick:e[1]||(e[1]=l(i=>t.value=!0,["prevent"]))},"Register")],2)])]),s("div",y,[s("div",A,[s("div",S,d(c(n)),1),s("form",{onSubmit:l(p,["prevent"])},[s("div",k,[U,s("div",B,[u(s("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>o.email=i),class:"input",type:"email",placeholder:"e.g. alex@example.com",required:""},null,512),[[_,o.email]])])]),s("div",C,[q,s("div",z,[u(s("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>o.password=i),class:"input",type:"password",placeholder:"********",required:""},null,512),[[_,o.password]])])]),s("div",D,[s("p",E,[s("button",L,d(c(n)),1)])])],40,V)])])]))}};export{$ as default};