import{r as m,j as s,a as t,F as c}from"../../chunks/18b1023c.js";import{H as p}from"../../chunks/c45ae3b8.js";import{p as a}from"../../chunks/e76933c7.js";import"../../chunks/d4404a82.js";var h=["color","size","title"];function u(e,n){if(e==null)return{};var i=f(e,n),l,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)l=o[r],!(n.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,l)||(i[l]=e[l]))}return i}function f(e,n){if(e==null)return{};var i={},l=Object.keys(e),r,o;for(o=0;o<l.length;o++)r=l[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var d=m.exports.forwardRef(function(e,n){var i=e.color,l=e.size,r=e.title,o=u(e,h);return s("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,...o,children:[r?t("title",{children:r}):null,t("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"})]})});d.propTypes={color:a.exports.string,size:a.exports.oneOfType([a.exports.string,a.exports.number]),title:a.exports.string};d.defaultProps={color:"currentColor",size:"1em",title:null};const g=d,x=({metaData:e,children:n})=>{var i;return e.tags||(e.tags=["jimmy","forgot","tags"]),s("a",{href:"/blog/"+e.id,className:"cursor-pointer w-full rounded-xl overflow-hidden bg-stone-800 shadow-lg",children:[s("div",{className:"px-6 py-4",children:[s("div",{className:"font-bold text-xl mb-2",children:["// ",((i=e.title)==null?void 0:i.replace(" | Jimmy Quach",""))||"(jimmy forgot the title)"]}),t("p",{className:"text-base",children:e.description||"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."})]}),t("div",{className:"px-6 pt-4 pb-2",children:e.tags&&e.tags.map((l,r)=>s("span",{className:"inline-block bg-neutral-800 drop-shadow-lg rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 duration-300",children:["#",l]},r))})]})},j={title:"Blog | Jimmy Quach",description:"Jimmy Quach's amazingly awesome and cool blog."},N=({posts:e})=>s(c,{children:[t("div",{className:"sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",children:t(p,{greeting:"Hey! Welcome to",title:"Jimmy Quach's",description:s(c,{children:["Blog.",t("span",{className:"pl-1 text-xs text-stone-400 whitespace-pre-line",children:"(where I write about stuff no one else will read)"})]}),children:t("div",{className:"text-stone-200",children:"This is a small spot on the internet of where I talk about my interests and vent my frustrations. Enjoy."})})}),t("div",{className:"items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0 px-6 md:px-0",children:t("div",{className:"justify-center flex flex-wrap md:flex-col md:fixed top-24 z-50 gap-2",children:t("a",{href:"/",className:"cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 md:hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",children:s("div",{className:"md:fixed left-3.5 inline-flex items-center place-content-center",children:[t(g,{})," ",t("span",{className:"pl-3.5",children:"Home"})]})})})}),t("div",{className:"grid gap-4 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 -my-6",children:Object.keys(e).map((n,i)=>t(x,{metaData:e[i].metaData},i))})]});export{N as Page,j as metaData};