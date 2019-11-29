import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const MainMenu = (props) => {
    const [showSubMenu, setSubMenu] = useState(false);

    const subMenu = (parentId, parentSlug, children) => {
        console.log(showSubMenu)
        if (!children || children.length === 0 || !showSubMenu) return <></>

        return (
            <ul>
                {
                    children.map((m) => {
                        return (<li key={m.id}>
                            <Link to={parentSlug + '/' + m.slug}
                                className={props.location.pathname.includes(m.slug)
                                    ? "active" : ""}>
                                {m.name}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <nav role='navigation' className="main-nav" id="main-nav">
            <ul id="main-nav-list">
                {props.data.length > 0 && props.data.map((m) => {
                    return (
                        <li key={m.id}>
                            <Link
                                to={(m.slug === "home" ? "/" : "/" + m.slug)}
                                onMouseEnter={() => setSubMenu(true)}
                                className={props.location.pathname.includes(m.slug)
                                    || (props.location.pathname === "/" && m.slug === "home") ? "active" : ""}>
                                {m.name}
                            </Link>

                            {/* {subMenu(m.id, m.slug, m.children)} */}
                        </li>
                    )
                }
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