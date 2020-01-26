import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {fetchContractorByRoleId} from '../../actions/contractorsActions'

class InvitedContractsContainer extends Component {
  handleContractsClick(roleId) {
    const {fetchContractorByRoleId} = this.props
    fetchContractorByRoleId(roleId)
  }

  render() {
    const {roleId, invitedContractsList, fetchContractors} = this.props

    if (fetchContractors) { return <div>Loading</div> }

    return (
      invitedContractsList.length ?
        invitedContractsList.map((contractor, idx) =>
          <div key={idx}>{contractor.candidateName}</div>)
      :
        <button onClick={() => this.handleContractsClick(roleId)}>Invited Candidates</button>
    )
  }
}

InvitedContractsContainer.propTypes = {
  roleId: PropTypes.number.isRequired,
  fetchContractors: PropTypes.bool.isRequired,
  invitedContractsList: PropTypes.arrayOf(PropTypes.shape({
    candidateName: PropTypes.string.isRequired,
  })),
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  fetchContractorByRoleId: (roleId) => dispatch(fetchContractorByRoleId(roleId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitedContractsContainer)
