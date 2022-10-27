import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { AppBar, Grid, TextField, Typography, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

import './App.css';
import { Box } from '@mui/system';

function App() {
  const [vcc, setVcc] = useState();
  const [vbb, setVbb] = useState();
  const [rb, setRb] = useState();
  const [r1, setR1] = useState();
  const [r2, setR2] = useState();
  const [re, setRe] = useState();
  const [rc, setRc] = useState();
  const [gain, setGain] = useState();
  const [transistor, setTransistor] = useState("");
  const [showResult, setShowResult] = useState(false);

  let circuit = "CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA7iGpBrVx0+AtCmLhuvfrQyMR4QnU4BzaaPHrexAY0gcALoLpYEKLafOMILNNDEYMxLGGfFCGFGDNRoKLI64hLjOwShehEhgcCAAJkwAZgCGAK4ANgZSAYyWxrQ+nABO4FgSudn5VlS48PoAblRkvJoYTWBKUJ1y4Eh6vggcDWClzRLDZT593d6detADxa3m7cIyK51icFJLo1piEvo8CvslEif6QA";
  let falstad = `https://www.falstad.com/circuit/circuitjs.html?hideSidebar=true&hideMenu=true&ctz=${circuit}&whiteBackground=true`;

  const renderTransistor = () => {

    switch (transistor) {
      case 10:
        return (
          <Grid container className="grida">

            {getValue("Vcc", setVcc)}
            {getValue("Vbb", setVbb)}
            {getValue("Rb", setRb)}
            {getValue("Rc", setRc)}
            {getValue("Ganho", setGain)}
          </Grid>)

      case 20:
        return (
          <Grid container className="grida">

            {getValue("Vcc", setVcc)}
            {getValue("Vbb", setVbb)}
            {getValue("Re", setRe)}
            {getValue("Rc", setRc)}
          </Grid>)

      case 30:
        return (
          <Grid container className="grida">
            {getValue("Vcc", setVcc)}
            {getValue("Re", setRe)}
            {getValue("Rc", setRc)}
            {getValue("R1", setR1)}
            {getValue("R2", setR2)}

          </Grid>)

      case 40:
        return (
          <Grid container className="grida">
            {getValue("Vcc", setVcc)}
            {getValue("Vbb", setVbb)}
            {getValue("Re", setRe)}
            {getValue("Rc", setRc)}
          </Grid>)

      case 50:
        return (
          <Grid container className="grida">
            {getValue("Vcc", setVcc)}
            {getValue("Re", setRe)}
            {getValue("Rc", setRc)}
            {getValue("R1", setR1)}
            {getValue("R2", setR2)}

          </Grid>)
      default:
        return null
    }

  }

  const handleChange = (event) => {
    setTransistor(event.target.value);
  };

  const getValue = (label, fn) => {
    return (
      <Grid item xs={3} className='input-textfield'>
        <TextField
          type="number"
          label={label}
          onChange={(event) => {
            fn(parseInt(event.target.value));
          }} />

      </Grid>
    )
  }

  const renderResult = () => {
    let ib, ic, vce, vc, ie, ve, vb, v2, vre, rcic, q, icsat, formulae;
    switch (transistor) {
      case 10:
        circuit = "CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA7iGpBrVx0+AtCmLhuvfrQyMR4QnU4BzaaPHrexAY0gcALoLpYEKLafOMILNNDEYMxLGGfFCGFGDNRoKLI64hLjOwShehEhgcCAAJkwAZgCGAK4ANgZSAYyWxrQ+nABO4FgSudn5VlS48PoAblRkvJoYTWBKUJ1y4Eh6vggcDWClzRLDZT593d6detADxa3m7cIyK51icFJLo1piEvo8CvslEif6QA";

        ib = (vbb - 0.7) / rb;
        ic = ib * gain;
        rcic = (rc * ic);
        vce = vcc - rcic;
        icsat = vcc / rc;
        q = `ic=${ic}, vce=${vce}`;
        formulae = `ib = (vbb - 0.7) / rb;
        ic = ib * gain;
        rcic = (rc * ic);
        vce = vcc - rcic;
        icsat = vcc / rc;
        q = [ic, vce];`
        break;
      case 20:
        circuit = 'CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA5iGgnWjQpe-EXUaQOAF16QMtDIz50siqOBAs0sLAlxY0q-ZGJCwSVGDTnckFAfaQE1ZIwAmTAGYBDAK4AbKQ4AdwVGVSU5MPAOADcqDGJeIQSksAx5CSpGMCyJaAQQsWThDKTBYUkAJ2KsVWL0zNdq2oRhZRL1OrgiiM6Oiqg46MG+vqy1C3UYQoAPKlx5VQgMQhUMqnA6ADUAY12OebBCCCxCcLAVQhp5S5BtgCMHw95j2kJCZJo0SDpbugASkwXoYkGBiLhkmlzps7gCDqEyuANh1GkMgA';

        ie = (vbb - 0.7) / re;
        ic = ie;
        vb = vcc;
        ve = (re * ic);
        vc = vcc - ve;
        rcic = (rc * ic);
        vce = vc - rcic;
        icsat = vcc / (rc + re);
        q = `ic=${ic}, vce=${vce}`;
        formulae = `ie = (vbb - 0.7) / re;
        ic = ie;
        vb = vcc;
        ve = (re * ic);
        vc = vcc - ve;
        rcic = (rc * ic);
        vce = vc - rcic;
        icsat = vcc / (rc + re);
        q = [ic, vce];`
        break;
      case 30:
        circuit = 'CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA5iGgnWjQpe-EXUaQOAF16QMtDIz50siqOBAs0sIoVyEsfFHqwHhqMGkiEzKRXIZ0wcEABMmAMwCGAVwA2UhwA7gqMqkpyoeAcAG5UGMS8QvGJYBjyElSMzuoS0AjBYknC6YmC5hwATkVYqkVpGchwVTUIwsrF6rXNIeGdHeVQHAAeVLjyqhAYBgry8mB0AGoAxssj4Da0M1iWW0jzdABKWOtoYIRbF4I0VnQHIIdMp1hIYMS4SamEjPeHayGlcDperAyTVPoQtSDbLwFqQsJqBrqZw9EETRGg9ZYFznJA7eYkKjgI6cIA';
        v2 = vcc * (r2 / (r1 + r2));
        ie = (v2 - 0.7) / re;
        ic = ie;
        vb = v2;
        ve = (re * ic);
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = vc - ve;
        icsat = vcc / (rc + re);
        q = `ic=${ic}, vce=${vce}`;
        formulae = `v2 = vcc * (r2 / (r1 + r2));
        ie = (v2 - 0.7) / re;
        ic = ie;
        vb = v2;
        ve = (re * ic);
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = vc - ve;
        icsat = vcc / (rc + re);
        q = [ic, vce];`
        break;
      case 40:
        circuit = 'CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA5iGgnWjQpe-EXUaQOAd1oZGWOb0gZZjTgDcqGYryFadYDColU1JidATSxu4UZ2DhkgE42sCm4eO0scDq746LARhQNsoZD8ZBUZHGzjJAA8qXBUFCAxCIKMqcDoANQBjQo5k3yDCYXd5QkJcsALi0t4ycBJdeUgMvJAAJSZmtDAHSFxdCCHGFQa+kpl7cBywrygOABclNMUwmIi2Xlhg3Cw0BWPIYiMsHRZUMCGEXEgUE-ZIBGpIkAATJgAzACGAFcADZrDiaXZxXa7EyKJDmSwcIA';
        ie = (vbb - 0.7) / re;
        ic = ie;
        vre = (re * ic);
        ve = vcc - vre
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = rcic - ve;
        icsat = vcc / (rc + re);
        q = `ic=${ic}, vce=${vce}`;
        formulae = `ie = (vbb - 0.7) / re;
        ic = ie;
        vre = (re * ic);
        ve = vcc - vre
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = rcic - ve;
        icsat = vcc / (rc + re);
        q = [ic, vce];`
        break;
      case 50:
        circuit = 'CQAgjCAMB0l3BWcMBsBmALAJhQdgWgJwAcYKCFIGaIWICk9ApgLRhgBQA5iGgnWjQpe-EXUaQOAd1oZGWOb0gZZjTgDcqGYryFadYDColU1JidATSxu4UZ2DhkgE42sCm4eO0scDq746LARhQNsoZD8ZBUZHGzjJAA8qXBUFCAxCIKMqcDoANQBjQo5k3zowQkJaMlpIOhUwOgAlLFLeWsqHNHlIDLyQZqZ2tDAHSFxdCFHGRpaSmXtwHLCvKH9VTZjwsz9XbYPFNd3JGVWc7eP23yQsQggsStpCFTnBzgAXJTTFMO3GNi8WBEQi4LJ8FCg0Z0FioMA9Ko4FByZSZGhgOAgAAmTAAZgBDACuABsPhwgA';

        v2 = vcc * (r2 / (r1 + r2));
        ie = (v2 - 0.7) / re;
        ic = ie;
        vb = v2;
        vre = (re * ic);
        ve = vcc - vre
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = rcic - ve;
        icsat = vcc / (rc + re);
        q = `ic=${ic}, vce=${vce}`;
        formulae = `v2 = vcc * (r2 / (r1 + r2));
        ie = (v2 - 0.7) / re;
        ic = ie;
        vb = v2;
        vre = (re * ic);
        ve = vcc - vre
        rcic = (rc * ic);
        vc = vcc - rcic;
        vce = rcic - ve;
        icsat = vcc / (rc + re);`
        break;
      default:
        ib = 0;
    }

    falstad = `https://www.falstad.com/circuit/circuitjs.html?hideSidebar=true&hideMenu=true&ctz=${circuit}&whiteBackground=true`;

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
          <Grid container className='gride'>
            <Typography>
              Ie = {ie} A
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              IcSat = {icsat} A
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Ve = {ve} V
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Vb = {vb} V
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Vc = {vc} V
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Rc*Ic = {rcic} V
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              Q = {q}
            </Typography>
          </Grid>
          <Grid container className='gride'>
            <Typography>
              pontos maximos = {vcc}, {icsat}
            </Typography>
          </Grid>
        </div>
        <iframe src={falstad} title="falstad" className='falstad'></iframe>
        <Grid container className='gride'>
          <Typography className='linebreak'>
            {formulae}
          </Typography>
        </Grid>
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
            sx={{ flexGrow: 1 }}
            className='head'>
            Calculadora de Transistores
          </Typography>
        </AppBar>
      </Box>

      <Box m='auto' className='box'>
        <FormControl sx={{ minWidth: 120, maxWidth: 300, align: 'center' }}>
          <InputLabel >Transistor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transistor}
            label="Transistor"
            onChange={handleChange}
          >
            <MenuItem value={10}>NPN base</MenuItem>
            <MenuItem value={20}>NPN emissor</MenuItem>
            <MenuItem value={30}>NPN emissor divisor</MenuItem>
            <MenuItem value={40}>PNP emissor</MenuItem>
            <MenuItem value={50}>PNP emissor divisor</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {transistor && (renderTransistor())}

      <Grid container className='grido'>
        <Button
          variant="contained"
          disabled={false}
          onClick={() => { setShowResult(true) }}>
          Calcular
        </Button>
      </Grid>
      {showResult && (renderResult())}

    </div >
  );
}

export default App;
