import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={styles.container}>
      <ClipLoader color="darkorange" size={60} />
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default Loader;