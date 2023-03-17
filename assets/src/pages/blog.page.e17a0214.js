import{r as m,j as o,a as e,F as p}from"../../chunks/8a724e38.js";import{p as n}from"../../chunks/8f284688.js";var h=["color","size","title"];function x(t,s){if(t==null)return{};var i=u(t,s),l,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],!(s.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,l)||(i[l]=t[l]))}return i}function u(t,s){if(t==null)return{};var i={},l=Object.keys(t),r,a;for(a=0;a<l.length;a++)r=l[a],!(s.indexOf(r)>=0)&&(i[r]=t[r]);return i}var d=m.exports.forwardRef(function(t,s){var i=t.color,l=t.size,r=t.title,a=x(t,h);return o("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,...a,children:[r?e("title",{children:r}):null,e("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"})]})});d.propTypes={color:n.exports.string,size:n.exports.oneOfType([n.exports.string,n.exports.number]),title:n.exports.string};d.defaultProps={color:"currentColor",size:"1em",title:null};const f=d,w=({image:t,title:s,description:i,tags:l,children:r})=>(l||(l=["jimmy","forgot","tags"]),o("div",{className:"w-full rounded-xl overflow-hidden bg-stone-800 shadow-lg",children:[o("div",{className:"px-6 py-4",children:[o("div",{className:"font-bold text-xl mb-2",children:["// ",s||"(jimmy forgot the title)"]}),e("p",{className:"text-base",children:i||"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."})]}),e("div",{className:"px-6 pt-4 pb-2",children:l&&l.map((a,c)=>o("span",{className:"inline-block bg-neutral-800 drop-shadow-lg rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 duration-300",children:["#",a]},c))})]})),b={title:"Blog | Jimmy Quach",description:"Jimmy Quach's amazingly awesome and cool blog."},y=({posts:t})=>o(p,{children:[o("div",{className:"sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6",children:[o("div",{className:"flex flex-row",children:[o("div",{className:"flex flex-col",children:[e("div",{className:"pb-4 text-red-400",children:"Hey! Welcome to"}),e("div",{className:"pb-4 text-red-300 text-3xl md:text-4xl lg:text-[2.8rem] whitespace-nowrap",children:"Jimmy Quach's"}),o("div",{className:"flex",children:[e("div",{className:"pb-4 text-stone-400 text-3xl md:text-4xl lg:text-[2.8rem] whitespace-nowrap",children:"Blog."}),e("div",{className:"ml-4 mb-4 text-stone-400 text-xs md:text-xs lg:text-xs whitespace-nowrap relative",children:e("span",{className:"bottom-0 absolute",children:"(where I write about stuff no one else will read)"})})]})]}),e("div",{className:"grow"}),e("div",{className:"h-40 w-40 rounded-full overflow-hidden drop-shadow-lg",style:{minWidth:"10rem"},children:e("img",{className:"h-40 max-w-none relative",src:"/linkedin-profilepic.jpg"})})]}),e("div",{className:"text-stone-200",children:"This is a small spot on the internet of where I talk about my interests and vent my frustrations. Enjoy."})]}),e("div",{className:"items-left md:block md:w-4/6 lg:w-3/5 xl:w-2/5 md:mr-24 pb-6 md:pb-0",children:e("div",{className:"flex md:flex-col md:fixed top-24 z-50 gap-2",children:e("a",{href:"/",className:"cursor-pointer group overflow-hidden bg-neutral-800 w-32 md:w-11 hover:w-28 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300",children:o("div",{className:"md:fixed left-3.5 inline-flex items-center place-content-center",children:[e(f,{})," ",e("span",{className:"pl-3.5",children:"Home"})]})})})}),e("div",{className:"grid gap-4 sm:w-3/4 md:w-4/6 lg:w-3/5 xl:w-2/5 p-6 -my-6",children:t.map((s,i)=>e(w,{children:s},i))})]});export{y as Page,b as metaData};
