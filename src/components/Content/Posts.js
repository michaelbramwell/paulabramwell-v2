import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle'
import ReactGA from 'react-ga'
import { getPostImage } from '../../actions'
import { pipe } from 'rxjs'

const replaceHtml = (content) => {
    const body = content ? content.replace(/<(.|\n)*?>/gi, "") : ""
    return body.substr(body, 200)
}

const getImageFromContent = (html) => {
    const matches = html ? html.match(/<img([\w\W]+?)>/gi) : ""

    return matches && matches.length > 0 ? matches[0] : "" 
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
                        if (!p) return <></>

                        return (
                            <div key={p.id} className="post">
                                <div className='posts-item-image' dangerouslySetInnerHTML={{__html: getImageFromContent(p.content)}}></div>
                                <div>
                                    <h2>
                                        <Link
                                            to={`/blog/${p.slug}`}
                                            className={location.pathname === "/blog" ? "readon active" : "readon"}>
                                            {p.name}
                                        </Link>
                                    </h2>
                                    <div>{replaceHtml(p.content)}</div>
                                    <div>
                                        <Link
                                            to={`/blog/${p.slug}`}
                                            className={location.pathname === "/blog" ? "readon active" : "readon"}>
                                            {'Read more >'}
                                        </Link>
                                    </div>
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
        posts: state.Result.posts,
        postImages: state.Result.postImages
    })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getPostImage
}, dispatch)

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts))