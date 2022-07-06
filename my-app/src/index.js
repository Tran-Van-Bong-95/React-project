
// if we want to create component, we need to import React from 'react' 

import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'
import {book} from './books'
import Book_follow_props from './Book_follow_props';

/*
const firstBook = {
 author : 'Tran Van Bong',
 title : 'Vuot len chinh minh',
 img : 'https://images-na.ssl-images-amazon.com/images/I/91QlpsqnTrL._AC_UL200_SR200,200_.jpg'
},

const secondBook = {
 author : 'Tran Van Bong',
 title : 'Kiem soat than tam',
 img : 'https://images-na.ssl-images-amazon.com/images/I/71951W96oWL._AC_UL200_SR200,200_.jpg'
}
*/
// we need to set up function that function will be component 
// stateless functional component
// always return JSX, always return something

/*
function Index() {
  return (
    <div>
      hello
    </div>
  )
// from the component we are returning  
}
*/

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

// nên làm cách này 
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }


//ReactDom.render(<Index/>, document.getElementById('root'));
// ReactDom.render(<Greeting />, document.getElementById('root'));


// JSX rules 
/*
return single element => luôn có 1 div bọc lại toàn bộ 
div/ section/ article or Fragment 
React.Fragment (=)  <>

use camelCase for html artribute
className instead of class
close every element 
formatting 
*/
 
/*
Mini book project 
- nested components 
- css basic 
- jsx css 
- jsx js  
- props
- props destructuring
- props children
- simple list 
- properlist 
- key prop
- event basic
- import , exprot 
- free hosting 

*/


function BookList() {
//   return (
// <section className="booklist">
//   {/* <Book/> */}
//   <Book_follow_props 
//    img = {firstBook.img}
//   author = {firstBook.author} 
//   title={firstBook.title}
//   >
//    {/* props children will between our tag  */}
// <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi libero voluptates animi voluptatem, dolor, adipisci in aperiam eveniet delectus dolorum ipsum praesentium quod. Dolor cumque quia odio ex optio et.</p>
//     </Book_follow_props>

//   <Book_follow_props 
//   img = {secondBook.img}
//   author = {secondBook.author} 
//   title={secondBook.title}
//   />

return (
<section className='booklist'>
  {book.map((book) => {
    // const{img, title, author} = book;
    return (
     <Book_follow_props key = {book.id} {...book}></Book_follow_props> 
    )
    ;
  })}
</section>

  )
}
// lý do dùng id chứ không dùng index là index có thể change when your array changing 
// thiết lập book prop thành object ta dùng book = {book} 
// nếu không muốn phía dưới props.book ta dùng spread operator {...book} (book = {...book} ? đúng ko) bây giờ props as an real object 

// job = "developer"  trong đó job là name of property of object props và developer là value of that property

// const Book = () => {
//   return (
//   <article className ="book">
//   {/* <Image></Image> */}
// <img src={img}/>
// <h1> {title} </h1>
// <h4> {author.toUpperCase()} </h4>
// {/* we always past something that always return a value  */}
// {/* <p> {let x = 6} </p>  ==> wrong
//     <p> {6+6} </p>  ==> right
// */}
//   </article>)
// }

/*
const Image = () =>{
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/91QlpsqnTrL._AC_UL200_SR200,200_.jpg" alt="" />
  )
}
*/
/*
const Title = () => <h1> Vuot len chinh minh </h1>
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Tran Van Bong</h4>
// style {} outside is for JS but we just want object so we put another {} inside it 
*/


// props  as an object parameter 



// key prop and spread operator 
// để theo dõi item nào đã được remove hay add ta dùng key prop 


ReactDom.render(<BookList/>, document.getElementById('root'));


