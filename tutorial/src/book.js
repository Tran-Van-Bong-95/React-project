
const book = (props) => {
  const {img, title, author, children} = props;
  console.log(props);

  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author);
  }
  return (
  <article className ="book" onMouseOver ={() => {
    console.log(title)
  }}>
    <img src = {img} alt="" />
    {/* <h1 onClick ={clickHandler}> {title}</h1> */}

    <h1 onClick ={() => console.log(title)}>{title}</h1>
    {children}
    <h4>{author.toUpperCase()} </h4>
   
   <button type="button" onClick ={clickHandler}> reference example</button>
   
   <button type="button" onClick={() => complexExample(author)}> more complex example</button>
{/* <p> {props.job}</p>
  <p>{props.title}</p>
  <p>{props.number}</p> */}
{/* we can set up js in css => we don't need code everything*/}
{/* <p>{let x = 6}</p> */}

    <p>{6+6}</p>
  </article>
  );
};


export default book
