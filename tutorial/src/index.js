import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// setup vars 
import {books} from './books'
 
import SpecificBook from './book'

const names = ['john', 'peter', 'susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newName);
// const title = 'I love you forever :))'
// const author = 'Ameli Hepworth'
// const img = 'https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL200_SR200,200_.jpg'

// first component  in detail

// stateless functional component 
// always return JSX whether empty div

function Greeting(){
  return (
  <div>
    <h1>hello world</h1>
  </div>
  );
}

// const Greeting = () => {
//   return  React.createElement('div', {}, React.createElement('h1',{}, 'hello world'))
// };


ReactDom.render(<Greeting/>, document.getElementById('root'));


// JSX Rules :
// return single element 
// div / section/ article or element 
// use camelCase for html article (ex onClick)
// className instead of class (className='')
// close every element (<Greeting/>, <img/>, <input/>)
// formating : opening tag at a same line as return  (return <h1>
// hello world
// </h1>   ko dc viet return 
// <h1> hello </h1>)

/*
function BigGreeting() {
  return(
    <React.Fragment>
      <section>
      <article>
        <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
      </article>
      <div></div>
    </section>
    </React.Fragment>
    
  )
}
ReactDom.render(<BigGreeting/>, document.getElementById('root'));

// ta có thể thay <React.Fragment> bằng <>
*/

function BigGreeting(){
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#"> hello people</a>
        </li>
      </ul>
    </div>
  );
}
ReactDom.render(<BigGreeting/>, document.getElementById('root'));

// Nested Components, React Tools

function Greeting1() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2> John Doe</h2>;

const Message = () => {
  return <p> this is my message</p>
};

ReactDom.render(<Greeting1 />, document.getElementById('root'));


// MiniBook project 
/*
function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className ="book">
    <Image> </Image>
    <Title />
    <Author />
  </article>
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL200_SR200,200_.jpg" alt="" />


const Title = () => <h1> I love you forerver</h1>

const Author = () => <h4 style ={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem' }}> Ameli Hepworth</h4>
ReactDom.render(<BookList />, document.getElementById('root'))
*/
// CSS basic

//JSX javascript

// simple list 

// proper list 

// key prop and spread operator 

// event basic
function BookList() {
  return (
    <section className="bookList">

    {books.map((book) => {
      console.log(book);
      return (
        <SpecificBook key = {book.id} {...book}></SpecificBook>
      )
    })}


{/*       
      <Book img={firstBook.img}  title ={firstBook.title}  author ={firstBook.author}>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus quas soluta nesciunt architecto sit assumenda atque inventore delectus asperiores necessitatibus, ducimus explicabo quam fugiat! Beatae, minus. Voluptatum, aliquid ea.</p>
      </Book>

      <Book 
      img={secondBook.img}
      title ={secondBook.title}
      author ={secondBook.author}
      /> */}
      
    </section>
  );
}
// we can do another way
//const Book = ({img, title, author, children})

ReactDom.render(<BookList />, document.getElementById('root'))


// Props: using props we can pass unique value
// we can set up variable or we can set up object value

// Props Destructuring 

// Props children

// Simple list

// Import and export 

// free hosting 

/*
Timeline
Intro 00:00
About React 01:09
Goals 06:51
Structure 08:50
Course Requirements 09:46
Dev Environment Setup 11:45
Text Editor Setup 16:26
Command Line Basics 18:20
NPM Basics 25:00
Create-React-App 35:07
Install Create-React-App 37:05
Folder Structure 43:19
Clean Boilerplate 52:25
First Component 54:00
Text Editor Setup 1:04:13
First Component In Detail 1:12:29
JSX Rules 1:19:18
Nested Components And Tools 1:28:55
Mini Book Project 1:34:50
CSS Basics 1:42:59
JSX Css 1:54:41
JSX Javascript 2:01:31
Props 2:09:30
Props Destructuring 2:25:41
Props - Children 2:29:44
Simple List 2:36:13
Proper List 2:45:12
Key Prop And Spread Operator 2:52:49
Event Basics 2:58:52
Import And Export Statements 3:11:12
Free Hosting 3:23:25


Advanced Intro 3:28:22
Get Starter Project 3:30:42
Install Starter 3:31:35
Starter Overview 3:33:43
UseState - Simple Use Case 3:39:00
UseState - Basics 3:48:44
General Rules Of Hooks 4:00:47
UseState - Array Example 4:03:39
UseState - Object Example 4:17:27
UseState - Multiple State Values 4:23:00
Simple Counter 4:26:17
Functional Update Form 4:32:10
Matching Project 4:44:55
useEffect - Basics 4:47:27
useEffect - Conditional 4:57:47
useEffect - Dependency List 5:01:40
useEffect - Cleanup Function 5:07:13
useEffect - Fetch Data 5:19:24
Multiple Returns 5:31:29
Multiple Returns - Fetching Data 5:37:09
Short - Circuit Evaluation 5:52:07
Ternary Operator 6:02:50
Show/Hide Component 6:11:30
Form Basics 6:20:15
Controlled Inputs 6:28:53
Add Item To The List 6:38:09
Multiple Inputs 6:50:32
useRef 7:06:29
useReducer - UseState Setup 7:16:20
useReducer - Refactor 7:29:52
useReducer - Add Item 7:37:15
useReducer - Remove Item 7:53:14
Prop Drilling - 8:00:56
Context API / - useContext 8:14:36
Custom Hooks - useFetch 8:26:22
PropTypes - Setup 8:38:09
PropTypes - Images 8:47:48
PropTypes - Default Values 8:55:48
React Router Intro 9:00:41
React Router - Basic Setup 9:05:52
React Router - Error And Switch Component 9:15:50
React Router - Links 9:18:51
React Router - URL Params And Placeholder 9:23:22
React Optimization Warning 9:37:51
React.memo 9:41:21
useCallback 9:49:50
useMemo 9:58:00
useCallback - Fetch Example 10:04:15
*/