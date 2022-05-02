import React, {useRef, useState, useContext, useEffect} from 'react'
import AuthContext from "../context/authContext";
import {ScrollContext} from "../context/scrollContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Notification from "../components/notification";
import router from 'next/router';

const ContactUs = (props) => {

  const ctx = useContext(AuthContext);
  const scrollCtx = useContext(ScrollContext);

 
  console.log("ContactUser", ctx.user)


  // const parsedData = JSON.parse(ctx.user);
  // const userId = parsedData.user.id
  // console.log("ctxsuser", ctx.user.user.id)
  // console.log("userID", userId);

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");



  if (status === "success") {
    // console.log("inside success")
    setTimeout(() => {
      setMessage("")
      setTitle("")
      setSubmitting(false);
      setStatus("")
      formik.resetForm();
      fileRef.current.value = null;
      setFileArr([])
    }, 1000);

    clearTimeout();
}

  const [fileArr, setFileArr] = useState([]);
  const fileRef = useRef(null);
  // console.log("fileRef", fileRef)
  const formik = useFormik({
    initialValues: {
      name: '',
      reason: '',
      message: '', 
      media: null
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: Yup.string()
        .required('Required')
    }),
    onSubmit: async values => {
       console.log("clicked", ctx.modalOpen);
        !ctx.user && ctx.setModalOpen(true)

      const innerValbj = {
        name: values.name,
        reason: values.reason,
        info: values.message,  
        user: ctx.user.user.id,
      }
      
      const data = new FormData();

      for (let i = 0; i < values.media.length; i++) {
        data.append('files.media', values.media[i]);
      }

      data.append('data', JSON.stringify(innerValbj));
     
   

      if(ctx.user) {
        setMessage("pending")
        setTitle("Submitting investigation")
        setSubmitting(true);
        setStatus('pending')

        const userObj = localStorage.getItem("user")
        const token = JSON.parse(userObj).jwt


        const request = await fetch('http://localhost:1337/api/lead-form-submissions', {
          method: 'POST',
          authorization: `Bearer ${token}}`,
          body: data
        });
  
        const response = await request.json();
        // console.log("data", data);

        
  
        if (!response.error) {
        
          setTitle("Submitted investigation")
          setMessage("Success")
          setStatus("success")   
          
        }
        else {
          alert("Something went wrong");
          setTitle("Error submitting investigation")
          setMessage("error")
          setStatus('error')
        }

      }

   
      
    },
  });

  
    const onFileChange = (e) => {
      // console.log("e", e.target.files);
     formik.setFieldValue('media', e.target.files);
      const fileList = e.target.files;
      const fileArray = [];
      for (let i = 0; i < fileList.length; i++) {
        fileArray.push(fileList[i]);
      }
      setFileArr(fileArray);
        // console.log("firstFile", fileArray);
    }

    useEffect(() => {
     
      if (scrollCtx.contactRef.current) {
        if (router.asPath === "/#Contact") {
    
        scrollCtx.contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      }
 
     
 
      console.log("scrollCtx", scrollCtx.contactRef);
      console.log("aboutRef", scrollCtx.aboutRef);

    }, []);

  return (
    <section id="#contact" ref={scrollCtx.contactRef} >
      {status && <Notification message={message} title={title} submitting={submitting} status={status} />}
      <div className="uk-tile-default">
        <h1 className="text-4xl ">
          contact
        </h1>
        <div className=" pr-8 pt-8 pb-8">
          <p>
            {ctx.user ? "" : (<>
            <a href="#" onClick={() => ctx.setModalOpen(true)}>
              <span className="text-blue-500">
                <i className="fas fa-user-circle"></i>
              </span>
              <span className="text-blue-500">
                Login
              </span>
            </a>
            <span className="text-black mr-2 ml-2">
              or
            </span>
            <a href="#" onClick={() => { 
              ctx.setModalOpen(true);
              ctx.setRegistering(true);
            }}>
              <span className="text-blue-500">
                <i className="fas fa-user-circle"></i>
              </span>
              <span className="text-blue-500">
                Signup
              </span>
            </a>
            </>)} to submit your scary photo or contact us so we can investigate and get back to you.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <fieldset className="uk-fieldset pt-8">

              {/* <legend className="uk-legend">Legend</legend> */}

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="uk-margin">
                <select className="uk-select" name="reason" id="reason" value={formik.values.reason}   onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  >
                  <option value="">Select a reason</option>
                  <option>Investigate</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="uk-margin">
                <textarea
                  className="uk-textarea"
                  rows="5"
                  id="message"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}

                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </div>

              <div className="fileupload pb-4 pt-4" data-provides="fileupload">
                <div className="fileupload-preview uk-thumbnail uk-border-rounded"></div>
                <div>
                  <span className="btn btn-primary btn-file">
                    <span className="fileupload-new pr-4" >Select file</span>

  
                <input type="file" id="media"  multiple onChange={onFileChange}  ref={fileRef} />
                <div  className="w-full flex justify-around pt-4 flex-wrap ">
              {       
               
                  fileArr.map((file, index) => {
                        // console.log("file", file);
                        return (
                        
                            <span className="  uk-border-rounded flex justify-around  flex-wrap " key={index}>
                              <img src={URL.createObjectURL(file)} alt="preview" className="w-[150px] h-[150px]" />
                              </span>
                         
                        )})
                       
                      }
                       </div>

                  </span>
                 { fileRef.current === null ? null : <a href="#" id="remove" className="btn fileupload-exists" data-dismiss="fileupload"   onClick={(e) => {
                    e.preventDefault();
                      document.getElementById('file').value = null 
                      fileRef.current = null
                      setFileArr([])
                   } } >Remove</a>}
                </div>
              </div>

            </fieldset>
            <button
              type="submit"
              className="uk-button uk-button-default 
                        text-white
                          bg-blue-700
                          hover:bg-blue-800
                          focus:ring-4
                          focus:outline-none
                          focus:ring-blue-300
                          font-medium
                          rounded-lg 
                          text-sm
                          px-5
                          py-2.5
                          text-center
                        dark:bg-blue-600
                        dark:hover:bg-blue-700
                          dark:focus:ring-blue-800" >
              Submit</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactUs
