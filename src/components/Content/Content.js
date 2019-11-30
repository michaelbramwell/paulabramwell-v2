import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Body from './Body';
import Post from './Post';
import Posts from './Posts';
import { getData, getPosts } from '../../actions'

class Content extends Component {

    componentDidMount() {
        this.props.getData();
        this.props.getPosts();
    }

    getChildSlug = (parentId, children) => {
        const { location } = this.props;
        const child = children.find((f) => parentId === f.parent && location.pathname.includes(f.slug));
        return child ? child.slug : "";
    };

    render() {
        return (
            <section>
                <div className="wrapper">
                    <div id="content">
                        <Switch>
                            <Redirect from="/faq" to="/faqs" />
                            {this.props.data.length > 1 && this.props.data.map((m) => (
                                <Route 
                                    key={m.id} 
                                    exact 
                                    path={m.slug === "home" 
                                        ? "/" 
                                        : m.children && m.children.length > 0 
                                            ? "/" + m.slug + "/" + this.getChildSlug(m.id, m.children) 
                                            : "/" + m.slug} 
                                    component={Body} />
                            ))}
                            
                            {this.props.posts.length > 0 && this.props.posts.map((m) => (
                                <Route 
                                    key={m.id} 
                                    exact 
                                    path={"/blog/" + m.slug} 
                                    component={Post} />
                            ))}
                            
                            <Route 
                                    key={100} 
                                    exact 
                                    path={"/blog/"} 
                                    component={Posts} />

                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.Result.data,
        posts: state.Result.posts
    })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getData, getPosts
}, dispatch)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Content))