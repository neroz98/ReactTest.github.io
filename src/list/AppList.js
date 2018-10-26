import React from 'react'
import ListDetails from './ListDetails'
import DataJSON from '../data/clients.json'


class AppList extends React.Component {
	constructor(props){
    super(props)
    this.state={displayedContacts:DataJSON}
  }

  handleSearch=(event)=>{
    var searchQuery = event.target.value.toLowerCase();

    var displayedContacts = DataJSON.filter(function(item){
    	var searchValue = item.general.firstName.toLowerCase() + 
									    	item.general.lastName.toLowerCase() + 
									    	item.job.company.toLowerCase() + 
									    	item.job.title.toLowerCase() + 
									    	item.contact.phone.toLowerCase() + 
									    	item.contact.email.toLowerCase() 				    	
    	console.log(searchValue)
      return  searchValue.indexOf(searchQuery) !== -1
  	})
    this.setState({
      displayedContacts:displayedContacts
    });
  }

	hendleDataCallback = (Msg) => {
		var data = Msg.list
		this.props.dataCallBackDetais(data)
	}

	render() {
		return(
			<div className="contacts">
	      <div className="coll">
          <label className="txt-input">
            <input className="valid" type="text" className="search-field" onChange={this.handleSearch} />
          </label>
	      </div>
				<div className="box-content">
					{
						this.state.displayedContacts.map((item ,clientsInfo ,index)=>{
						return <ListDetails 
							list={item} 
							key = {clientsInfo} 
							dataCallback={this.hendleDataCallback}/>
					})}
				</div>
			</div>
		)
	}
}

export default AppList