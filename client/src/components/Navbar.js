import React, { Component } from 'react';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))
export class Navbar extends Component {


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant='h6'>
                            SmartProp
                    </Typography>
                        <Button color="secondary">Log in</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar
