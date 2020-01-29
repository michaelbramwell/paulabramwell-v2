import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';
import ReactGA from 'react-ga'

class Post extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.match.path);
    }

    getMatchingContent = (data, location) => {
        const matchPost =  data.find((f) => location.pathname === "/blog/" + f.slug);

        return matchPost;
    }

    render() {
        const { posts, location } = this.props;

        if (posts.length === 0) return (<></>)

        const dataMatch = this.getMatchingContent(posts, location);
        return (
            <>
                <Helmet>
                    <title>{`${dataMatch.name} - ${PageTitle}`}</title>
                </Helmet>
                {Parser(dataMatch.content)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        posts: state.Result.posts,
    })
}

export default connect(
    mapStateToProps,
    null
)(Post)