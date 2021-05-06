export default {
  books: {
    alignSelf: 'flex-end',
    width: '75%',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    justifyContent: 'center',
    margin: '20px',
  },
  search: {
    alignSelf: 'flex-start',
    margin: '15px',
  },
  button: {
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: (state) => (state ? 'pink' : 'grey'),
  },
  smallButton: {
    border: 'none',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
  },
  sorts: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: '30px',

  },
  scrollable: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'max-content',
    minHeight: '150px',
    maxHeight: '50vh',
    overflowY: 'auto',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  columnFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '20%',
    maxWidth: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};
