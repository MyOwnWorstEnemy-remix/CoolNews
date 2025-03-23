import { BsHeart, BsHeartFill } from "react-icons/bs";
import { LikesButton } from "./styles";

type CallbackType = () => void;

function Like({likes, isLiked, handleLikeClick}: {likes: number, isLiked: boolean, handleLikeClick: CallbackType}) {
    return <>
        <LikesButton type="button" onClick={handleLikeClick}>
            {isLiked ? <BsHeartFill/> : <BsHeart />}
            {likes ? <span>{likes}</span> : null}
        </LikesButton>
    </>
}

export default Like;