import React  from 'react'


class ListDetails extends React.Component {
	constructor (props){
		super(props)
		this.listItemClicked = this.listItemClicked.bind(this)
	}
	listItemClicked(event){
		event.preventDefault()
		const {dataCallback} = this.props
		dataCallback(this.props)
	}
	render() {
		const {list} = this.props
		var img = {
			backgroundImage: `url(${list.general.avatar})`
		}
		return(
			<div onClick={this.listItemClicked} className="list">
				<div className="list-img" style={img}>
				</div>
				<div className="list_info">
					<div className="i_name">{list.general.firstName}  {list.general.lastName}</div>
					<div className="i_job">{list.job.company}</div>
					<div className="i_job">{list.job.title}</div>     
				</div>
			</div>
		);
	}
}
export default ListDetails