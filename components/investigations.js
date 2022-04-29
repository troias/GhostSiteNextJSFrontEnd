import React from 'react'
import Card from "../components/card"

 const Investigations = ({investigations}) => {

     const leftAInvestigationsCount = Math.ceil(investigations.length / 5)
     const leftInvestigations = investigations.slice(0, leftAInvestigationsCount)
     const rightInvestigations = investigations.slice(leftAInvestigationsCount, investigations.length)
    
    // console.log("investigations", investigations)
    // console.log("leftInvestigations", leftAInvestigationsCount)
  return (
    <div className="article-section pt-8">
    <h2 className="text-4xl pb-8 ">Investigations</h2>
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftInvestigations.map((investigation, i) => {
            // console.log("innerInvestigation", investigation)
            return (
              <Card
              
                investigation={investigation}
                key={`article__left__${investigation.attributes.slug}`}
              />
            
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            
            {rightInvestigations.map((investigation, i) => {
              return (
                <Card
                investigation={investigation}
                  key={`article__left__${investigation.attributes.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Investigations
