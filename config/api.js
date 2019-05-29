module.exports = () => ({
  shifts_list: [
    {
      roleId: 1,
      shiftDate: 'Tuesday 11 June 2019',
      startTime: '07:00',
      endTime: '14:00',
      staff_required: 5,
      number_of_invited_staff: 3,
      jobType: 'Waiting staff'
    },
    {
      roleId: 2,
      shiftDate: 'Thursday 13 June 2019',
      startTime: '09:00',
      endTime: '17:00',
      staff_required: 2,
      number_of_invited_staff: 2,
      jobType: 'Retail store shift'
    },
    {
      roleId: 3,
      shiftDate: 'Thursday 13 June 2019',
      startTime: '13:00',
      endTime: '19:00',
      staff_required: 1,
      number_of_invited_staff: 2,
      jobType: 'Waiting staff'
    },
    {
      roleId: 4,
      shiftDate: 'Friday 14 June 2019',
      startTime: '10:00',
      endTime: '18:00',
      staff_required: 3,
      number_of_invited_staff: 0,
      jobType: 'Barista'
    },
    {
      roleId: 5,
      shiftDate: 'Saturday 15 June 2019',
      startTime: '11:00',
      endTime: '19:00',
      staff_required: 2,
      number_of_invited_staff: 1,
      jobType: 'Receptionist'
    },
    {
      roleId: 6,
      shiftDate: 'Saturday 15 June 2019',
      startTime: '10:00',
      endTime: '16:00',
      staff_required: 2,
      number_of_invited_staff: 0,
      jobType: 'Security'
    }
  ],
  ['invited_contracts_list']: [
    {
      id: 1,
      roleId: 1,
      candidateName: 'Joe Smith',
    },
    {
      id: 2,
      roleId: 1,
      candidateName: 'Samantha Brown',
    },
    {
      id: 3,
      roleId: 1,
      candidateName: 'John Doe',
    },
    {
      id: 4,
      roleId: 2,
      candidateName: 'Frank Jackson',
    },
    {
      id: 5,
      roleId: 2,
      candidateName: 'Freddie Mercury',
    },
    {
      id: 6,
      roleId: 3,
      candidateName: 'Joe Smith',
    },
    {
      id: 7,
      roleId: 3,
      candidateName: 'Samantha Brown',
    }
  ],
})
