import React from 'react'

class Details extends React.Component {
	render() {
		var i = this.props.list.isClick
		if( i === true ){
			const detailsInfo = this.props.list.CallBack
			var img = {
				backgroundImage: `url(${detailsInfo.general.avatar})`
			}
			return(
				<div className="details">
					<div className="avatar">
			            <div className="a_img" style={img}>

			            </div>
		          	</div>
			        <div className="details_info">
			            <div className="info_block">
			                <div className="i_name">{detailsInfo.general.firstName}  {detailsInfo.general.lastName}</div>
			            </div>
			            <div className="info_block">
			                <div className="text-info">{detailsInfo.job.company}</div>
			                <div className="text-info">{detailsInfo.job.title}</div>
			            </div>
			            <div className="info_block">
			                <div className="text-info">{detailsInfo.contact.email}</div>
			                <div className="text-info">{detailsInfo.contact.phone}</div>
			            </div>
			            <div className="info_block">
			                <div className="text-info">{detailsInfo.address.street}</div>
			                <div className="text-info">{detailsInfo.address.city}</div>
			                <div className="text-info">{detailsInfo.address.zipCode}</div>
			                <div className="text-info">{detailsInfo.address.country}</div>
			            </div>
			        </div>
		        </div>
			);
		}else {
			return (null)
		}
		
	}
}
export default Details