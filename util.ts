export type User = {
    name: string;
    city: string;
};

export const FetchFriends = async (id: number) => {
    return await fetch('https://social-net-backend.herokuapp.com/users/'+id+'/userFriends')
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result);
          var users = [];
          result.userFriends.map((d) => users.push({
            name: d.name,
            city: d.city
          }));
          return users;
          //dispatch({type:"ServerResponse", status: true, result: users}) 
         console.log(users);   
      },
      (error) => {
        console.log(error);
      }
    )
}

export const FetchSuggestedFriends = async (id: number, keyword: string) => {
    return await fetch('https://social-net-backend.herokuapp.com/users/'+id+'/'+keyword)
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result);
          var users = [];
          result.suggestedUserFriends.map((d) => users.push({
            name: d.name,
            city: d.city
          }));
          return users;
      },
      (error) => {
        console.log(error);
      }
    )
}

