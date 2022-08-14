import hello from '@/assets/images/home/hello.png';

const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <img src={hello} alt="" style={{ width: '55%' }} />
      

    </div>
  );
};
export default Home;
