import React, {useState} from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto !important',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export const Tile = ({data}) => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();

    let url = `./images/${data.photo}`;
    let storeLinks = data.links.map((s, i) => {
        return <IconButton key={i} href={s}><StorefrontIcon/></IconButton>;
    });

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
    <Card elevation={5} className="tile">
        <CardMedia component="img" image={url} height="auto" title={data.name} />
        <CardContent style={{paddingBottom: 0}}>
            <Typography variant="overline">{data.name}</Typography>
        </CardContent>
        <CardActions>
            {storeLinks}
            <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
            >
                <ExpandMoreIcon/>
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{textAlign: "left"}}>
                <Typography variant="body2" paragraph><span style={{fontWeight: "bold"}}>Ideal location:</span> {data.location}</Typography>
                <Typography variant="body2" paragraph><span style={{fontWeight: "bold"}}>Seasons:</span> {data.seasons.join(", ")}</Typography>
                <Typography variant="body2" paragraph><span style={{fontWeight: "bold"}}>Type:</span> {data.type}</Typography>
                <Typography variant="body2" paragraph><span style={{fontWeight: "bold"}}>Categories:</span> {data.categories.join(", ")}</Typography>
            </CardContent>
        </Collapse>
    </Card>
  );
};
