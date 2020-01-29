import PropTypes from 'prop-types'
import React from 'react'
import InvitedContractsContainer from '../invitedContracts/InvitedContractsContainer'
import ShiftsFilterBar from './ShiftsFilterBar'

function ShiftsList(props) {
  const {list} = props

  return (
    <div>
      <h1>Shifts List</h1>
      <ShiftsFilterBar />
      <hr />
      {
        list.map((shift) => (
          <div key={shift.roleId}>
              Job type:   {shift.jobType} <br />
              Start date: {shift.shiftDate} <br />
              Start time: {shift.startTime} <br />
              End time:   {shift.endTime} <br />
              { shift.number_of_invited_staff ?
                <InvitedContractsContainer
                  roleId={shift.roleId}
                  fetchContractors={shift.fetchContractors}
                  invitedContractsList={shift.invitedContractsList} />
                : null
              }
            <hr />
          </div>
          ))
      }
    </div>
  )
}

ShiftsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    roleId: PropTypes.number.isRequired,
    shiftDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    staff_required: PropTypes.number.isRequired,
    number_of_invited_staff: PropTypes.number.isRequired,
    jobType: PropTypes.string.isRequired,
    invitedContractsList: PropTypes.arrayOf(PropTypes.shape({
      candidateName: PropTypes.string.isRequired,
    })),
    fetchContractors: PropTypes.bool.isRequired,
  })).isRequired,
}

export default ShiftsList
