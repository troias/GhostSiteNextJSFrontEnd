import React from 'react'

 const Investigations = ({investigations}) => {

    // const leftArticlesCount = Math.ceil(articles.length / 5)
    // const leftArticles = articles.slice(0, leftArticlesCount)
    // const rightArticles = articles.slice(leftArticlesCount, articles.length)

    console.log("investigations", investigations)
  return (
    <div className="article-section pt-8">
    <h2 className="text-4xl pb-8 ">Investigations</h2>
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {/* {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            )
          })} */}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {/* {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.attributes.slug}`}
                />
              )
            })} */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Investigations
