import React from 'react'
import AppList from './list/AppList'
import AppDetails from './details/AppDetails'



class App extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			CallBack : [],
			isClick : false
		}
	}

	callBackDetais = (CallBack) =>{
		var data = CallBack 
		this.setState({
			CallBack : data,
			isClick : true
		})
	}
	sadasd(){
		
	}
	render() {
		return(		
			<div> 
				<div className="left"> 
		         	<AppList dataCallBackDetais={this.callBackDetais}  />
			    </div>
		      	<div id="details" className="right">
		      		<AppDetails dataCall={this.state}  />
		      	</div>
		    </div>
		)
	}
}

export default App
