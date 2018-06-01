const initialUserList: any[] = []

export default function (userList = initialUserList, action: {type: string, userList: any[]}) {
  switch (action.type) {
    case 'SHOW_USERS':
      return action.userList

    default:
      return userList
  }
}
