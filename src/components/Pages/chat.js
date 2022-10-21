import React  from 'react';
import "./pages.css"

const Chat = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 chat-section'>
            <h1>
              Chat US
            </h1>

            <form className='col-8'>
              <p>Name</p>
              <input className='col-8' type="text"  placeholder='enter your name'/>
              <p>enter you query</p>
              <textarea className='col-8' rows={8} placeholder="enter your query"></textarea>
              <div className='text-center'> 
              <button className='btn btn-primary '>submit</button>

              </div>


            </form>

          </div>

        </div>

      </div>
     
        
        
    )};
  
  export default Chat;