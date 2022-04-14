import { useContext } from "react"
import { MyContext, MyThemeContext } from "../App"

function Settings(){

    const userName = useContext(MyContext)
    const MyTheme = useContext(MyThemeContext)
    const name = userName.name

    const theme = MyTheme.theme

    console.log(userName);
    console.log(name);


    return(
        <>
        <h2>Settings</h2>
        <h2>{name}</h2>
        <h3>Theme: {theme}</h3>
        </>
    )
}

export default Settings