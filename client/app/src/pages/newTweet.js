import React from 'react'
import axios from "axios"; // package used to http methods (post, get, put...)
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup' // a library/package to verify that the content put in is correct (data type, length:min and max....)

function NewTweet() {   
    // we create an empty object to pass it in the Formik section as initial value 
    const initialValues ={
        title:"",
        postText:"",
        username:"",
    }
    // we create a function that defines the funtion that we will run when click on the button "post your tweet"
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/tweet", data).then((response) => {
            console.log('submition of the data is done')
        })
    }
    // we define what we should write in the form's sections 
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().max(200).required(),
        username: Yup.string().min(3).max(20).required(),
    })

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
            <br></br>
            <br></br>
                <label>Title : </label>
                <ErrorMessage name='title' component="span" />
                <Field id='inputCreatePost' name='title' placeholder='Fill the title field plz' /> 

                <label>Tweet : </label>
                <ErrorMessage name='postText' component="span" />
                <Field id='inputCreatePost' name='postText' placeholder='Tell us how you feel!' /> 

                <label>User : </label>
                <ErrorMessage name='username' component='span' />
                <Field id='inputCreatePost' name='username' placeholder='who are you?' /> 

                <button type='submit'> Post your tweet</button>
            </Form>
        </Formik>
    </div>
  )
}
export default NewTweet
