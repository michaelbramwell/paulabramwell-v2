import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';
import ReactGA from 'react-ga'

class Posts extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.match.path);
    }

    render() {
        const { posts, location } = this.props;

        if (posts.length === 0) return (<p>No Posts :(</p>)

        return (
            <>
                <Helmet>
                    <title>Blog - {`${PageTitle}`}</title>
                </Helmet>

                {
                    posts.map((p) => {
                        return (
                            <div key={p.id}>
                                <h2>{p.name}</h2>
                                <div dangerouslySetInnerHTML={{__html: p.excerpt}} />
                                <div>
                                    <Link
                                        to={`/blog/${p.slug}`}
                                        className={location.pathname === "/blog" ? "active" : ""}>
                                        {'Read on'}
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        posts: state.Result.posts
    })
}

export default withRouter(connect(
    mapStateToProps,
    {}
)(Posts))