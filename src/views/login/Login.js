import React, {Component} from 'react';
import {connect} from 'react-redux';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Grid} from '@mui/material';
import {Container, Button, TextField, Typography} from '@material-ui/core';
import {login, changeValue} from '../../store/actions/authAction';
import Loading from '../../components/loading/Loading';
import Notify from '../../components/notify/Notify';
import {homeUrl} from '../../config/globalConfig';

export class Login extends Component {

    login = () => {
        const {credentials} = this.props;
        this
            .props
            .login(credentials)
            .then(() => {
                if (this.props.success) {
                    window
                        .location
                        .replace(homeUrl + 'folha')
                }
            })
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Loading/>
                <Notify/>

                <div className="d-flex mt-4 mb-4 pl-3 pr-3 pl-md-0 pr-md-0">
                    <h3 className="font-weight-normal" > ... </h3>
                </div>

                <div className="card">
                    <div className="card-body">
                        <Grid container spacing={3}>
                            <Grid item xs={2}/>
                            <Grid item xs={8}>

                                <div className="text-center">
                                    <img className="mt-5" src="logo192.png" alt=""/>
                                    <Typography className="mt-3 font-10" component="h1" variant="h6">
                                        Efetue o seu login
                                    </Typography>
                                </div>

                                <div className="mt-4 text-center">
                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        margin="normal"
                                        required
                                        id="name"
                                        size="small"
                                        fullWidth
                                        label="Usuário"
                                        value={this.props.credentials.name}
                                        onChange={(text) => this.props.changeValue({username: text.target.value})}/>

                                    <TextField
                                        variant="outlined"
                                        color="secondary"
                                        margin="normal"
                                        required
                                        id="password"
                                        size="small"
                                        fullWidth
                                        label="Senha"
                                        type="password"
                                        value={this.props.credentials.password}
                                        onChange={(text) => this.props.changeValue({password: text.target.value})}/>

                                    <Button
                                        type="button"
                                        color="primary"
                                        variant="contained"
                                        size="normal"
                                        fullWidth
                                        endIcon={< LockOpenIcon />}
                                        className="mb-3 mb-md-4"
                                        onClick={() => this.login()}>
                                        Entrar
                                    </Button>

                                </div>

                            </Grid>
                            <Grid item xs={2}/>
                        </Grid>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({credentials: state.authReducer.credentials, success: state.authReducer.success})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
