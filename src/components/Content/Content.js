import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Body from './Body';
import { getData } from '../../reducer'

class Content extends Component {
    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            <section>
                <div className="wrapper">
                    <div id="content">
                        <Switch>
                            <Redirect from="/faq" to="/faqs" />
                            {this.props.data.length > 1 && this.props.data.map((m) => (
                                <Route key={m.id} exact path={m.slug === "home" ? "/" : "/" + m.slug} component={Body} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.Result.data
    })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getData
}, dispatch)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Content))