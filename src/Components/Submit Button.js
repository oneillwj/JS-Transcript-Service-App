import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function SubmitButton() {
  return (
    <Grid container justifyContent="center">
        <Button
            
            size="medium"
            variant="contained"
            color="primary"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
            }}
    
        >
        Here We Go
        </Button>
    </Grid>
    
  );
}