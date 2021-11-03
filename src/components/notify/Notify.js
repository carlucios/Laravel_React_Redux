import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Snackbar} from '@material-ui/core';
import {SnackbarContent} from '@material-ui/core';
import {changeNotify} from '../../store/actions/notifyAction';
import { withStyles } from '@material-ui/styles';

const myStyle = {
    message: {
        display: 'flex',
        alignItens: 'center',
    },
    error: {
        backgroundColor: '#f44336'
    },
    success: {
        backgroundColor: '#2196f3'
    }
}

export class Notify extends Component {

    handleClose = () => {
        this.props.changeNotify({
            open: false
        })
    }

    render() {
        const {classes} = this.props;
        const messageClasses = classNames({
            [classes[this.props.notify.class]]: this.props.notify.class
        })
        return (
            <Snackbar
                open={this.props.notify.open}
                anchorOrigin={{
                    vertical: this.props.notify.vertical,
                    horizontal: this.props.notify.horizontal
                    }}
                autoHideDuration={this.props.notify.time}
                onClose={this.handleClose}
            >

                <SnackbarContent className={messageClasses} message={
                    <span className={classes.message}>
                        {this.props.notify.msg}
                    </span> }
                />
            </Snackbar>
        )
    }
}

const mapStateToProps = (state) => ({
    notify: state.notifyReducer
})

const mapDispatchToProps = dispatch => ({
    changeNotify: (value) => dispatch(changeNotify(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(myStyle)(Notify))
