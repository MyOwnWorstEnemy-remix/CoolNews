import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../../../store/fav-slice";
import { Article } from "../../../types/types";
import { StyledArticle, Title, Description, Content, Img, Link, Meta, Source, StyledLikesButton } from "./styles";
import Like from "../like/like";

function NewsArticle({article, liked} : {article: Article, liked: boolean}) {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const serverUrl = 'http://localhost:3000/favourite';

  useEffect(() => {
    if(liked) {
      setIsLiked(true);
    }
  }, []);

  const handleLikeClick = async () => {
    if(!isLiked) {
      dispatch(addFav({data: article, type: "ADD_FILM"}));
      await fetch(serverUrl, {method: "POST", body: JSON.stringify({id: `news-${article.id}`})});

    } else {
      dispatch(removeFav({id: article.id, type: "news"}));
      await fetch(`${serverUrl}/news-${article.id}`, {method: "DELETE"});
    }
    setIsLiked((like) => !like);
  }

  return (
    <StyledArticle>
      <Title>{article.title[0].toUpperCase()+article.title.slice(1)}</Title>
      <StyledLikesButton>
        <Like likes={0} isLiked={isLiked} handleLikeClick={handleLikeClick} />
      </StyledLikesButton>
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
