
import './App.css';
import InputForm from './InputForm';

function App() {
  return (

    <div className="App">
     <div className="parent">
          <img src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=700&dpr=1" alt="landscape" srcset="" className='w-100'/>  
       <div className="container child col-4">

        <form className='form-group'>
      <div className="form-row mt-5">
      <h4 className='color-white'>Input your details</h4>
       <InputForm placeholder="First name"/>
       <InputForm placeholder="last name"/>
       <InputForm type="email" placeholder="email"/>
       <button className='btn btn-primary mt-2'>Submit</button>
        </div>
      
        </form>
        </div>   
      </div>
        </div>
    
    
   

  );
}

export default App;
