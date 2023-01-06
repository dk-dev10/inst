import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Bars } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import DetailedCard from '../../components/DetailedCard';
import Layout from '../../components/Layout';

import { getPhotos } from '../../redux/actions/photos';

import './style.css';

const MainPage = () => {
  const photos = useSelector(({photos}) => photos.photos);
  const loading = useSelector(({photos}) => photos.isPhotosLoading);
  const total = useSelector(({photos}) => photos.totalPhotos);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getPhotos(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextHandler =()=> {
    setPage(page + 1)
  }

  return (
    <Layout>
      <div className='cnMainPageRoot'>
        {loading ? (
          <div className='cnMainLoaderContainer'>
            <Bars color='#000bff' height={80} width={80} />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={
              <div className='cnMainLoaderContainer'>
                <Bars color='#000bff' height={15} width={15} />
              </div>
            }
            endMessage={<p>Thats all!</p>}
          >
            {photos.map(({ author, id, imgUrl, likes, comments }) => (
              <DetailedCard
                key={`${author.nickname}${id}${likes}`}
                userName={author.nickname}
                avatarUrl={''}
                userId={author.id}
                imgUrl={''}
                likes={likes.length}
                isLikedByYou={true}
                comments={comments}
                className='cnMainPageCard'
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </Layout>
  );
};

export default MainPage;
