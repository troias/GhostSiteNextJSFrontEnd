import React from 'react'

 const ContactUs = (props) => {
  return (
    <div className="uk-tile-default">
    <h1 className="text-4xl ">
      contact
    </h1>
    <div className=" pr-8 pt-8 pb-8">
      <p>
        Submit your scary photo so we can investigate and get back to you.
      </p>
      <form>
        <fieldset className="uk-fieldset pt-8">

          {/* <legend className="uk-legend">Legend</legend> */}

          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Name" />
          </div>

          <div className="uk-margin">
            <select className="uk-select">
              <option>Investigate</option>
              <option>Other</option>
            </select>
          </div>

          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
          </div>

          {/* <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input className="uk-radio" type="radio" name="radio2" checked /> A</label>
            <label><input className="uk-radio" type="radio" name="radio2" /> B</label>
          </div> */}

          {/* <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input className="uk-checkbox" type="checkbox" checked /> A</label>
            <label><input className="uk-checkbox" type="checkbox" /> B</label>
          </div> */}

          {/* <div className="uk-margin">
            <input className="uk-range" type="range" value="2" min="0" max="10" step="0.1" />
          </div> */}
          

        </fieldset>
      </form>
    </div>

  </div>
  )
}

export default ContactUs
