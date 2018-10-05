import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import MyApproach from './MyApproach';
import Home from './Home';
import Faqs from './Faqs';
import TherapyForAdolescents from './TherapyForAdolescents';

const Content = () => (
    <section>
        <div className="wrapper">
            <div id="content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/my-approach' component={MyApproach} />
                    <Route path='/therapy-for-adolescents' component={TherapyForAdolescents} />
                    <Redirect from="/faq" to="/faqs" />
                    <Route path='/faqs' component={Faqs} />
                </Switch>
            </div>
        </div>
    </section>
)

export default Content;