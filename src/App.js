import React, { useState , useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  const [content, setContent ] = useState(null)
  
  useEffect(() => {
    fetch('/.netlify/functions/hello')
    .then(response => response.json())
    .then(json => setContent(json))
  }, []);

  return (
    <React.Fragment>
    <CssBaseline />
    <Container>
      <Typography>
        {content && content.msg}
      </Typography>
    </Container>
  </React.Fragment>

  );
}

export default App;
