import React from 'react'

const Book_follow_props = (props) =>{
console.log(props);
// props destructuring 
// const {img, title, author, children} = props.book;
const {img, title, author, children} = props;

// hoặc ta cũng có thể viết 
// const Book_follow_props = ({img, title, author}) 

// attribute, eventHandler
// onClick, onMouseOver

const clickHandler = () => {
  alert('hello world');
};

  return (
<article className ="book">
  
  {/* <img src={props.img}/>
  <h1> {props.title} </h1>
  <h4> {props.author} </h4> */}

  <img src={img}/>
  <h1 onClick = {() => console.log(title)}> {title} </h1>
  <h4> {author} </h4>
  <button type="button" onClick={clickHandler}> reference example</button>
  {children}
 {/* {props.children}  nếu phía trên ta không có property children */}
</article>
)
}

export default Book_follow_props 
