import React, {useState, useEffect} from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
        '& .MuiFormLabel-root.Mui-focused': {color: theme.palette.primary.dark}
    },
    inputLabel: {
    }
}));

export const SearchBar = ({setFilters, data}) => {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [season, setSeason] = useState('');
    const [color, setColor] = useState('');

    const types = [...new Set(data.map((d) => d.type))].sort().map((t) => {
        return <MenuItem value={t} key={t}>{t}</MenuItem>
    });

    const categories = [...new Set(data.flatMap((d) => d.categories))].sort().map((c) => {
        return <MenuItem value={c} key={c}>{c}</MenuItem>
    });

    const seasons = [...new Set(data.flatMap((d) => d.seasons))].sort().map((c) => {
        return <MenuItem value={c} key={c}>{c}</MenuItem>
    });

    const colors = [...new Set(data.flatMap((d) => d.colors))].sort().map((c) => {
        return <MenuItem value={c} key={c} style={{textTransform: "capitalize"}}>{c}</MenuItem>
    });

    useEffect(() => {
        setFilters({
            type: type,
            category: category,
            season: season,
            color: color
        });
    }, [type, category, season, color]);

    const reset = () => {
        setType('');
        setCategory('');
        setSeason('');
        setColor('');
    };

  return (
    <AppBar id="searchBar">
      <ToolBar>
          <Typography variant="h4" className="gardenboard">
              Gardenboard
          </Typography>
          <FormControl className={classes.formControl}>
              <InputLabel id="label-select-color">Color</InputLabel>
              <Select labelId="label-select-color" id="select-color" value={color} onChange={e => {reset(); setColor(e.target.value)}} style={{textTransform: "capitalize"}}>
                  {colors}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel id="label-select-type">Type</InputLabel>
              <Select labelId="label-select-type" id="select-type" value={type} onChange={e => {reset(); setType(e.target.value)}}>
                  {types}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel id="label-select-category">Category</InputLabel>
              <Select labelId="label-select-category" id="select-category" value={category} onChange={e => {reset(); setCategory(e.target.value)}}>
                  {categories}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel id="label-select-season">Season</InputLabel>
              <Select labelId="label-select-season" id="select-season" value={season} onChange={e => {reset(); setSeason(e.target.value)}}>
                  {seasons}
              </Select>
          </FormControl>
          <FormControl>
              <Button variant="contained" color="secondary" disableElevation onClick={reset}>Reset</Button>
          </FormControl>
      </ToolBar>
    </AppBar>
  );
};
