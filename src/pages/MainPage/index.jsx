import DetailedCard from '../../components/DetailedCard';
import Layout from '../../components/Layout';

const MainPage = () => {
  return (
    <Layout>
      <div>MainPage</div>
      <DetailedCard
        userName='dkuba'
        avatarUrl='https://avatarko.ru/img/kartinka/25/igra_Dota_2_Ursa_24137.jpg'
        userId='123123'
        imgUrl='https://i1.wp.com/www.tennisitinerary.com/wp-content/uploads/2016/12/DSC_0457.jpg?ssl=1'
        likes='1231'
        isLikedByYou={true}
        comments={[
          { text: 'asdad', nickName: 'KuBa' },
          { text: 'yufgd', nickName: 'damir' },
          { text: 'zxcxb', nickName: 'cego' },
          { text: 'loph', nickName: 'logger' },
          { text: 'zxcxb', nickName: 'cego' },
          { text: 'loph', nickName: 'logger' },
        ]}
      />
    </Layout>
  );
};

export default MainPage;
