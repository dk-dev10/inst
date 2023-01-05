import { useState } from 'react';

import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserBadge from '../Userbadge';
import Comment from '../Comment';

import './styles.css';

const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
}) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
      const commentForRender = [...comments];
      commentForRender.splice(0, comments.length - 2);

      return (
        <>
          <span
            className='cnDetailedCardCommentTitle'
            onClick={() => setIsCommentsShow(true)}
          >{`Показать ещё ${comments.length - 2} комментариев`}</span>
          {commentForRender.map((comment, i) => (
            <Comment key={`${comment.nickName}${i}`} {...comment} />
          ))}
        </>
      );
    }

    return comments.map((comment, i) => <Comment  key={`${comment.nickName}${i}`} {...comment} />);
  };

  return (
    <div className='cnDetailedCardRoot'>
      <div className='cnDetailedCardHeader'>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt='' className='cnDetailedCardImg' />
      </div>
      <div className='cnDetailedCardBtns'>
        <FontAwesomeIcon
          icon={faHeart}
          color={isLikedByYou ? 'red' : 'black'}
          className='cnDetailedCardIconLike'
        />
        <FontAwesomeIcon
          icon={faComment}
          color='black'
          className='cnDetailedCardIconComment'
        />
      </div>
      <div className='cnDetailedCardLikes'>{`Оценили ${likes} человек`}</div>
      <div className='cnDetailedCardComments'>{renderComments()}</div>
      <textarea
        className='cnDetailedCardTextArea'
        placeholder='Написать комментари...'
      />
    </div>
  );
};

export default DetailedCard;
