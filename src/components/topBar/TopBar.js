import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBar, Link} from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { removeToken } from '../../store/actions/authAction';

export class TopBar extends Component {
    render() {
        return (
            <div>
              <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <div className="container">
                    <Link className="navbar-brand" to="/app">
                      <img src={"logo.png"} height="50" className="d-inline-block align-top" alt="" />
                    </Link>
                    <ul className="navbar-nav">
                      <li className="navbar-nav">
                        <Link component="button" to={() => this.props.removeToken()}>
                          <LogoutIcon />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>  
              </div>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
