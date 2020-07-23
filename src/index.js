// // import avatar from './avatar.jpg';
// // import style from './index.scss';
// // import createAvatar from './createAvatar.js'

// // createAvatar();
// // var root=document.getElementById('root');
// // var img=new Image();
// // img.src=avatar;
 
// // img.classList.add(style.avatar)
// // root.append(img); 
// // //commonJS
// // //var avatar=require('./avatar.jpg')

// var root=document.getElementById('root');
// root.className='test'
// console.log('hello world dellleeeee!!!!!!!')



// import './style.css'
// var btn=document.createElement('button');
// btn.innerHTML='add';
// document.body.appendChild(btn);
// btn.onclick=function(){
//     var div=document.createElement('div');
//     div.innerHTML='item';
//     document.body.appendChild(div);
// }


// import counter from './counter';
// import number from './number';


// counter();
// number();
// if(module.hot){
//     module.hot.accept('./number',()=>{
//         document.body.removeChild(document.getElementById('number'));
//         number();
//     })   
// }
import "@babel/polyfill"
const arr=[
    new Promise(()=>{}),
    new Promise(()=>{}),
];
arr.map((item)=>{
    console.log(item)
})