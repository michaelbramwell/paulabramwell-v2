import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';
import ReactGA from 'react-ga'

class Body extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        ReactGA.pageview(this.props.location.pathname);
    }

    getMatchingContent = (data, location) => {
        const matchParent = data.find((f) => location.pathname.includes(f.slug)
            || (location.pathname === "/" && f.slug === "home"));

        let matchChild = null;

        for (let i = 0; i < data.length; i++) {
            if (!data[i].children || data[i].children.length === 0) {
                continue;
            }

            matchChild = data[i].children.find(child => location.pathname.includes(child.slug));
            if (matchChild) break;
        }

        return matchChild || matchParent;
    }

    render() {
        const { data, location } = this.props;

        if (data.length <= 1) return (<></>)

        const dataMatch = this.getMatchingContent(data, location);

        return (
            <>
                <Helmet>
                    <title>{`${dataMatch.name} - ${PageTitle}`}</title>
                </Helmet>
                {dataMatch.slug !== "home" && dataMatch.slug !== "faqs" &&
                    <h1>{dataMatch.name}</h1>
                }
                {Parser(dataMatch.content)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.Result.data
    })
}

export default connect(
    mapStateToProps,
    {}
)(Body)