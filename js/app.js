// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
    DOM.render(<p>test 2</p>, document.querySelector('.container'))
    var AppView = React.createClass({
    	render: function() {
    		return (
    		<div className='headerContainer'>
	    		<img className="headerImage" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
	    		<div className="logoContainer">
	    			<img className="tiyLogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
	    		</div>
	    		<MainContainer/>
	    		
    		</div>
    		)
    	}
    })
    var MainContainer = React.createClass ({
    	render: function () {
    		return (
    			<div className="mainContainer"> 
	    			<SideColumnView/>
		    		<MainColumnView/>
		    		<SideTextBox/>
    			</div>
    			)
    	}
    })
    var SideColumnView = React.createClass ({
    	render: function() {
    		return (
    			<div className="sideColumnContainer">
    				<h1> The Iron Yard | Houston </h1>
    				<p> Happenings and updates from The Iron Yard in Houston, Tx</p>
    				<div className="line"></div>
    				<p> Search </p>
    				<input type="text"/>
    			</div>
    			)
    	}
    })

    var MainColumnView = React.createClass ({
    	render: function() {
    		return (
    			<div className="mainColumnContainer">
    				<h1> September 22 Starts a New Class of The Iron Yard Students</h1>
    				<p>By Brian Dorton, Campus Director at The Iron Yard Houston</p>
    				<div className="mainContainerImage">
    					<img class="mainColumnImage" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
    				</div>
    				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
    			)
    	}
    })
    var SideTextBox = React.createClass({
    	render: function() {
    		return (
	    		<div className="floatTextBoxContainer">
	    			<h2>Never miss a post!</h2>
	    			<div className="smallLogoContainer">
	    				<img className="tiyLogo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
	    			</div>
	    			<div className="textBoxtextContainer">
	    				<p>tiyHouston</p>
	    				<p>The Iron Yard | Houston</p>
	    			</div>
	    			<button> + Follow </button>
	    		</div>
    			)
    	}
    })

    DOM.render(<AppView/>,document.querySelector('.container'))
}

app()
