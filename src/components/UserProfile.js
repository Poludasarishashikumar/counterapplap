import Counter from './Counter';
import Header from './Header';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (<>
  <Header/>
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
    <Counter/>
  </>
  );
};

export default UserProfile;
