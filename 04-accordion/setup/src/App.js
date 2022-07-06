import React, { useState } from 'react';
import data from './data';
import Question from './Question';


function App() {

  const [questions, setQuestion] = useState(data);
  console.log(questions);
  return (
  
  <main>

    <div className="container">
       <h3> Questions And Answers About Login </h3>
       <section className='info'>
       {questions.map((question) => {
        return ( 
        <Question  key = {question.id} {...question}></Question>
        );
       })}
    </section>
    </div> 

  </main>
  );
}

export default App;
// viết {...question}  thì mới viết được {title, info}
// tương tự như question = {question}

// còn ví dụ như viết  data = {...question} thì không viết được {title, info}
