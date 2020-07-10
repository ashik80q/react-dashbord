import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import LinearProgressBar from './LineProgress';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    margin:'0 2px'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cartFooter: {
    '& p':{
      width:'30%',
      float:'left',
      paddingLeft:'5px'
    }

  },
  cardHeader: {
    '& div span' :{
      fontSize:'16px',
      fontWeight:'500',
      marginBottom:'-35px'
    }
    }

}));

export default function AppPerformance() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="App Performance"
      />
      <CardContent  >
        <Typography gutterBottom variant="h6" component="p">
        <Badge color="primary" variant="dot" >
            </Badge>  Integration  <span style={{paddingLeft:'20px'}}>   <Badge color="secondary" variant="dot" >
            </Badge>  SDK</span>
        </Typography>
        <p style={{margin:'8px 0'}}>Integration</p>
        <LinearProgressBar value={35} />
        <p style={{margin:'7px 0'}}>SDK</p>
        <LinearProgressBar value={70} />
        
        
      </CardContent>
    </Card>
  );
}
