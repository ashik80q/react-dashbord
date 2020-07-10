import React from 'react';
import { Card, CardHeader, IconButton, CardContent, Badge, makeStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PichartItem from './PichartItem';
import { red } from '@material-ui/core/colors';

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
        marginBottom:'-12px'
      }
      }
  
  }));

const Revenue = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const hadleExpandClick = () =>{
        setExpanded(!expanded);
    }
    return (
      <Card className={classes.root}>
          <CardHeader
            className={classes.cardHeader}
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title="Revenue Breakdown"
          />
          
          <CardContent>
              <div style={{display:'flex'}}>
                <PichartItem/>
                <div style={{paddingLeft:'9px'}}>
                    <p style={{margin:'2px 0'}}> <Badge color="primary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group A -800 </span> </p>
                    <p style={{margin:'2px 0'}}> <Badge color="secondary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group B -500 </span> </p>
                    <p style={{margin:'2px 0'}}> <Badge color="primary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group C -200 </span> </p>
                    <p style={{margin:'2px 0'}}> <Badge color="secondary" variant="dot" /> <span style={{paddingLeft:'5px'}}> Group D -100 </span> </p>

                 </div>

              </div>
          </CardContent>

      </Card>
    );
};

export default Revenue;