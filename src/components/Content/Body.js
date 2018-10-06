import React from 'react'
import { connect } from 'react-redux'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import PageTitle from '../PageTitle';

const Body = (props) => {
    if (props.data.length <= 1) return (<></>)

    const match = props.data.find((f) => props.match.path.includes(f.slug)
        || (props.match.path === "/" && f.slug === "home"))

    return (
        <>
            <Helmet>
                <title>{`${match.name} - ${PageTitle}`}</title>
            </Helmet>

            {Parser(match.content)}
        </>
    )
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