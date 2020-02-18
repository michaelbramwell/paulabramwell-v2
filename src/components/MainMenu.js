import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderMinus, faFolderPlus } from '@fortawesome/free-solid-svg-icons'

const MainMenu = (props) => {
    const [isOpen, setOpen] = useState(false);

    const pagesAndBlog = (arr, index, ...newItems) => [
        ...props.data.slice(0, 2),
        ...[{
            id: 999,
            name: 'Blog',
            slug: 'blog'
        }],
        ...props.data.slice(2)
      ]

    const subMenu = (parentSlug, children) => {

        if (!children || children.length === 0 || !isOpen) return <></>

        return (
            <div>
                {
                    children.map((m) => {
                        return (
                            <div key={m.id}>

                                <Link to={"/" + parentSlug + '/' + m.slug}
                                    onClick={() => setOpen(0)}
                                    className={props.location.pathname.includes(m.slug)
                                        ? "active" : ""}>
                                    {m.name}
                                </Link>
                            </div> 
                        )
                    })
                }
            </div>
        )
    }

    return (
        <nav role='navigation' className="main-nav" id="main-nav">
            <Menu id="main-nav-list">
                {props.data.length > 0 && pagesAndBlog().map((m) => {
                    return (
                        <div>
                            <Link
                                key={m.id}
                                to={(m.slug === "home" ? "/" : "/" + m.slug)}
                                onClick={() => setOpen(m.children && m.children.length > 0 ? !isOpen : isOpen)}
                                className={props.location.pathname.includes(m.slug)
                                    || (props.location.pathname === "/" && m.slug === "home") 
                                    ? "menu-item active" 
                                    : "menu-item"}>
                                {m.name}
                                
                                {m.children && m.children.length > 0 && 
                                    <FontAwesomeIcon 
                                        style={{marginLeft: '5px'}} 
                                        icon={isOpen ? faFolderMinus : faFolderPlus} 
                                    />
                                }
                                
                                {subMenu(m.slug, m.children)}
                            </Link>
                        </div>
                    )
                }
                )}
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