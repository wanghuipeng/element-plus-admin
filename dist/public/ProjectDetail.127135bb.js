import{d as e,u as a,m as n,b as l,o as t,e as o,g as u,t as p}from"./index.8705dbdf.js";var d=e({name:"ProjectDetail",setup:()=>({projName:a().params.projName,input:n("")})});const m={id:"dynamicexample"},r=u("h2",null,"项目详情",-1);d.render=function(e,a,n,d,s,i){const c=l("el-input");return t(),o("div",m,[r,u("p",null,"项目编码："+p(e.projName),1),u(c,{modelValue:e.input,"onUpdate:modelValue":a[1]||(a[1]=a=>e.input=a)},null,8,["modelValue"])])};export default d;