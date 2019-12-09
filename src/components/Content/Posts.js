import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle'
import ReactGA from 'react-ga'

const replaceHtml = (content) => {
    const body = content ? content.replace(/<(.|\n)*?>/gi, "") : ""
    return body.substr(body, 200)
}

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
                <h1>Blog</h1><p></p>
                {
                    posts.map((p) => {
                        return (
                            <div key={p.id} className="post">
                                <h2>{p.name}</h2>
                                <div>{replaceHtml(p.content)}</div>
                                <div>
                                    <Link
                                        to={`/blog/${p.slug}`}
                                        className={location.pathname === "/blog" ? "readon active" : "readon"}>
                                        {'Read more >'}
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