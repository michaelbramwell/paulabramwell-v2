import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const MainMenu = (props) => {

    return (
        <nav role='navigation' className="main-nav" id="main-nav">
            <ul id="main-nav-list">
                {props.data.length > 1 && props.data.map((m) =>
                    (
                        <li key={m.id}>
                            <Link to={(m.slug === "home" ? "/" : "/" + m.slug)}
                                className={props.location.pathname.includes(m.slug)
                                    || (props.location.pathname === "/" && m.slug === "home") ? "active" : ""}>
                                {m.name}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.Result.data
    })
}

export default withRouter(connect(
    mapStateToProps,
    {}
)(MainMenu))