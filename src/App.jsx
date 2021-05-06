import React from 'react';
import { createUseStyles } from 'react-jss';

import BooksPage from './components/BooksPage';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

const App = () => {
  const style = useStyles();
  return (
    <div className={style.item}>
      <BooksPage />
    </div>
  );
};

export default App;
