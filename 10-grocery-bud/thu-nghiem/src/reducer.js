function reducer(state, { type, payload }) {
  const { value, list, editId, edit } = state
  if (type === 'remove') {
    return {
      ...state,
      list: list.filter((item) => item.id !== payload),
      showAlert: { show: true, msg: 'remove successfull', type: 'success' },
    }
  }

  if (type == 'change value') {
    return {
      ...state,
      value: payload,
    }
  }

  if (type === 'add') {
    if (!payload) {
      return {
        ...state,
        showAlert: { show: false, msg: 'empty list', type: 'failure' },
      }
    } else if (payload && !edit) {
      return {
        ...state,
        value: payload,
        list: [...list, { text: value, id: new Date().getTime().toString() }],
        showAlert: { show: true, msg: 'add successfull', type: 'success' },
      }
    } else {
      return {
        ...state,
        list: list.map((item) => {
          if (item.id === editId) {
            return { text: value, id: editId }
          }

          return item
        }),
        showAlert: { show: true, msg: 'edit successfully', type: 'success' },
        edit: false,
        editId: null,
        value: '',
      }
    }
  }

  if (type === 'edit') {
    return {
      ...state,
      edit: true,
      editId: list.find((item) => item.id === payload).id,
      value: list.find((item) => item.id === payload).text,
    }
  }

  if (type === 'remove all') {
    return {
      ...state,
      list: [],
      showAlert: { show: true, msg: 'remove all successfull', type: 'success' },
    }
  }

  if (type === 'back original status') {
    return {
      ...state,
      value: '',
      edit: false,
      editId: null,
      showAlert: { show: false, msg: '', type: '' },
    }
  }

  throw new Error('no match type of action')
}

export default reducer
