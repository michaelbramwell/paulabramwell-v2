import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';
import ReactGA from 'react-ga'

class Body extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.match.path);
    }

    render() {
        if (this.props.data.length <= 1) return (<></>)

        const match = this.props.data.find((f) => this.props.match.path.includes(f.slug)
            || (this.props.match.path === "/" && f.slug === "home"))

        return (
            <>
                <Helmet>
                    <title>{`${match.name} - ${PageTitle}`}</title>
                </Helmet>

                {Parser(match.content)}
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