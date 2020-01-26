import PropTypes from 'prop-types'
import React from 'react'
import InvitedContractsContainer from '../invitedContracts/InvitedContractsContainer'

function ShiftsList(props) {
  const {list} = props

  return (
    <div>
      <h1>Shifts List</h1>
      {
        list.map((shift) => (
          <div key={shift.roleId}>
              Job type:   {shift.jobType} <br />
              Start date: {shift.shiftDate} <br />
              Start time: {shift.startTime} <br />
              End time:   {shift.endTime} <br />
            <InvitedContractsContainer roleId={shift.roleId} />
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
  })).isRequired,
}

export default ShiftsList
