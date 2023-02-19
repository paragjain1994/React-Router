import { Route } from "react-router-dom";
const Welcome =()=>{


    return (
        <h1>
       Welcome page
       <Route path="/welcome/new-user">
       <p>welcome new user</p>
       </Route>
        </h1>
    )
}
export default Welcome;