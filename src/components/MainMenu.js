import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { slide as Menu } from 'react-burger-menu'

const MainMenu = (props) => {
    const [showSubMenu, setSubMenu] = useState(false);
    const { posts } = props

    const subMenu = (parentId, parentSlug, children) => {

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
            <Menu id="main-nav-list">
                {props.data.length > 0 && props.data.map((m) => {
                    return (
                        <Link
                            key={m.id}
                            to={(m.slug === "home" ? "/" : "/" + m.slug)}
                            className={props.location.pathname.includes(m.slug)
                                || (props.location.pathname === "/" && m.slug === "home") ? "menu-item active" : "menu-item"}>
                            {m.name}
                        </Link>
                    )
                }
                )}

                {posts && posts.length > 0 &&
                    <Link key={100}
                        to={"/blog"}
                        className={props.location.pathname === "/blog" ? "menu-item active" : "menu-item"}>
                        Blog
                    </Link>
                }
            </Menu>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return ({
        data: state.Result.data,
        posts: state.Result.posts
    })
}

export default withRouter(connect(
    mapStateToProps,
    {}
)(MainMenu))