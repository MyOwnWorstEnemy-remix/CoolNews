type Article = {
  "title": string,
  "description": string,
  "content": string,
  "url": string,
  "image": string,
  "publishedAt": string,
  "source": {
    "name": string,
    "url": string
  }
}

function NewsArticle({article} : {article: Article}) {
  return (
    <>
      <h3>{article.title[0].toUpperCase()+article.title.slice(1)}</h3>
      <p>{article.description}</p>
      <p>{article.content}</p>
      <a href={article.url}>Подробнее</a>
      <img src={article.image} width={500}/>
      <div>
        <a href={article.source.url}>{article.source.name}</a>
        <time dateTime={article.publishedAt}>{article.publishedAt.slice(0, 10)} {article.publishedAt.slice(11, 16)}</time>
      </div>
    </>
  );
}

export default NewsArticle;
