import { Article } from "../../../types/types";
import { StyledArticle, Title, Description, Content, Img, Link, Meta, Source } from "./styles";

function NewsArticle({article} : {article: Article}) {
  return (
    <StyledArticle>
      <Title>{article.title[0].toUpperCase()+article.title.slice(1)}</Title>
      <Description>{article.description}</Description>
      <Content>{article.content.split('...')[0]}... <Link href={article.url}>Подробнее</Link></Content>
      <Img src={article.image} width={500}/>
      <Meta>
        <Source>Ресурс: <Link href={article.source.url}>{article.source.name}</Link></Source>
        <time dateTime={article.publishedAt}>{article.publishedAt.slice(0, 10)} {article.publishedAt.slice(11, 16)}</time>
      </Meta>
    </StyledArticle>
  );
}

export default NewsArticle;
