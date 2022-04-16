import React, {useRef} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = (props) => {

  const fileRef = useRef(null);
  // console.log("fileRef", fileRef)
  const formik = useFormik({
    initialValues: {
      name: '',
      reason: '',
      message: '', 
      file: null
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
      console.log("contactFormValues", values);
      // const formData = new FormData();
      // formData.append('name', values.name);
      // formData.append('reason', values.reason);
      // formData.append('info', values.message);
      // formData.append('media', values.file);
      // console.log("formData", formData);
      // formData.forEach((value, key) => {
      //   console.log("key", key);
      //   console.log("value", value);
      // }
      // )
      // const response = await fetch('http://localhost:1337/api/form-infos', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();
      // console.log("data", data);

      // if (data.success) {
      //   alert("Your message has been sent successfully");
      // }
      // else {
      //   alert("Something went wrong");
      // }
    },
  });

  

  return (
    <section id="#contact" >
      <div className="uk-tile-default">
        <h1 className="text-4xl ">
          contact
        </h1>
        <div className=" pr-8 pt-8 pb-8">
          <p>
            Submit your scary photo or contact us so we can investigate and get back to you.
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
                    <input ref={fileRef} id="file" type="file" onChange={(e) =>  formik.setFieldValue('file', e.target.files[0])} />

              
               
                  </span>
                 { fileRef.current === null ? null : <a href="#" id="remove" className="btn fileupload-exists" data-dismiss="fileupload" onClick={(e) => document.getElementById('file').value = null }>Remove</a>}
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
