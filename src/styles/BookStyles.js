export default {
  book: {
    height: '400px',
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid black',
  },
  title: {
    textAlign: 'center',
    width: '80%',
  },

  button: {
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: (state) => (state ? 'pink' : 'grey'),
  },
  smallButton: {
    border: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
    margin: '10px',
  },
};
