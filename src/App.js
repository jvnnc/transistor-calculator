import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { AppBar, Grid, TextField, Typography } from '@mui/material';
import './App.css';
import { Box } from '@mui/system';

function App() {
  const [vcc, setVcc] = useState();
  const [vbb, setVbb] = useState();
  const [rb, setRb] = useState();
  const [rc, setRc] = useState();
  const [gain, setGain] = useState();
  const [showResult, setShowResult] = useState(false);

  const circuit = "CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA7iGpBrVx0+AtCmLhuvfrQyMR4QnU4BzaaPHrexAY0gcALoLpYEKLafOMILNNDEYMxLGGfFCGFGDNRoKLI64hLjOwShehEhgcCAAJkwAZgCGAK4ANgZSAYyWxrQ+nABO4FgSudn5VlS48PoAblRkvJoYTWBKUJ1y4Eh6vggcDWClzRLDZT593d6detADxa3m7cIyK51icFJLo1piEvo8CvslEif6QA";
  const falstad = `https://www.falstad.com/circuit/circuitjs.html?hideSidebar=true&hideMenu=true&ctz=${circuit}&whiteBackground=true`;


  const getValue = (label, fn) => {
    return (
      <Grid item xs={3} className='input-textfield'>
        <TextField
          type="number"
          label={label}
          onChange={(event) => {
            fn(event.target.value);
          }} />

      </Grid>
    )
  }

  const renderResult = () => {
    const ib = (vbb - 0.7) / rb;
    const ic = ib * gain;
    const vce = vcc - (rc * ic);
    return (
      <div>

        <div className='gride'>
          <Grid container className='gride'>
            <Typography>
              Ib = {ib} A
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Ic = {ic} A
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Vce = {vce} V
            </Typography>
          </Grid>
        </div>
        <iframe src={falstad} title="falstad" className='falstad'></iframe>
      </div>
    )
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className='head'>
        <AppBar position="fixed">
          <Typography
            variant="h6"
            align='center'
            sx={{ flexGrow: 1}}
            className='head'>
            Calculadora de Transistores
          </Typography>
        </AppBar>
      </Box>

      <Grid container className="grida">

        {getValue("Vcc", setVcc)}
        {getValue("Vbb", setVbb)}
        {getValue("Rb", setRb)}
        {getValue("Rc", setRc)}
        {getValue("Ganho", setGain)}

      </Grid>
      <Grid container className='grido'>
        <Button
          variant="contained"
          disabled={vcc && vbb && rc && rb && gain ? false : true}
          onClick={() => { setShowResult(true) }}>
          Calcular
        </Button>
      </Grid>
      {showResult && (renderResult())}

    </div >
  );
}

export default App;
