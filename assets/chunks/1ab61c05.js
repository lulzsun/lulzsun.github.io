import{j as a,a as e,F as i}from"./fd325986.js";const o=()=>{const t=new Date;let l=t.getMonth()===4&&t.getDay()===7;return a("div",{className:"relative",children:[e("img",{className:"relative h-40 max-w-none rounded-full overflow-hidden",src:"/linkedin-profilepic.jpg"}),l&&e("img",{className:"absolute -top-9 left-14",src:"/partyhat.svg",alt:"some text",width:"42"})]})},d=({greeting:t,title:l,description:r,children:n})=>{const s=new Date;return s.getMonth()===4&&s.getDay(),a(i,{children:[a("div",{className:"relative flex flex-row",children:[a("span",{className:"inline-block text-red-400 pb-4",children:[t,e("br",{}),e("span",{className:"inline-block py-4 text-red-300 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap",children:l}),e("br",{}),e("span",{className:"inline-block text-stone-400 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap",children:r})]}),e("div",{className:"grow"}),e("div",{className:"h-40 w-40 drop-shadow-lg",style:{minWidth:"10rem"},children:e(o,{})})]}),n]})};export{d as H};