import { useFormik } from "formik"; 
import * as Yup from "yup";


// USE HOOKS METHOD
const FormTwo = () => {

    const formik = useFormik({
      initialValues:{firstname:''},
      validationSchema:Yup.object({
        firstname:Yup.string().required('this is required')
      }),
      onSubmit:values =>{
        console.log(values)
      }
    })



    return(
        <div className="container">
            <div className="col-md-12 mt-5">
                <form onSubmit={formik.handleSubmit} >
                    <label htmlFor="firstname">First name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="firstname"
                        // getFieldProps DO ALL WORK BEHIN THE SCENE
                        {...formik.getFieldProps('firstname')}
                        // onChange={formik.handleChange}
                        // value={formik.values.firstname}
                        // onBlur={formik.handleBlur}

                    />
                    {formik.errors.firstname && formik.touched.firstname ?
                        <span>{formik.errors.firstname} </span>
               :null }
                    
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default FormTwo;