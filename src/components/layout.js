import { CircularProgress, Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Layout({ loading, children, searchPanel }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <header className={classes.layout__hero}>
          <Typography className={classes.layout__title}>
            Hello, We Are NL Cities!
          </Typography>
          <Typography className={classes.layout__subTitle}>
            a Project for list all Netherlands cities in a web page
          </Typography>
          {searchPanel && (
            <aside className={classes.layout__search}>
              {searchPanel}
            </aside>
          )}
        </header>
        <Container>
          {!loading && children}
          {loading && (
            <CircularProgress />
          )}
        </Container>
      </main>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {

  },
  layout__hero: {
    padding: '64px 16px',
    backgroundColor: '#2a3eb1',
    position: 'relative',
    marginBottom: 72,
  },
  layout__title: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Bebas Neue',
    textAlign: 'center',
  },
  layout__subTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Quicksand',
    textAlign: 'center',
    opacity: 0.7,
  },
  layout__search: {
    padding: 16,
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    transform: 'translateY(50%)',
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      alignSelf: 'center',
      padding: '16px 32px',
      backgroundColor: 'white',
      borderRadius: 64,
      boxShadow: '0 0 16px rgb(0 0 0 / 16%)',
    }
  },
}));