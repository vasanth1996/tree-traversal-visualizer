import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import Tree from '../containers/Tree/Tree'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Footer from '../components/Footer/Footer'
export default function Routes() {
    return (
        <Router>
            <TopNavBar />
            <Switch>
                <Route exact path = "/" component = {Tree}/>
                <Route path = "/tree" component = {Tree}/>
            </Switch>
            <Footer />
        </Router>
    )
}
