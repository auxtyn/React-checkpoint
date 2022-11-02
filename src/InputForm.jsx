
const InputForm = ({placeholder, type}) => {
  return (
   <>
        <div className="col mt-2 text-center m-0">
          <input type={type} placeholder={placeholder}className="form-control form-group"></input>
        </div>
       
        
   </>
  )
}

export default InputForm;