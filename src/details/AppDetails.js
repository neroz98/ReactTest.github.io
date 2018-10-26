import React from 'react'
import Details from './Details'


class AppDetails extends React.Component {

	render() {
		const details = this.props.dataCall

		return(
			<Details list={details}  />
		)
	}
}

export default AppDetails 