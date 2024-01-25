import Homepage from "./components/homepage/Homepage";
import Login from "./components/auth/Login";

const App = () => {
    const isAuthenticated = true;

    return (
        <div>
            {isAuthenticated ? <Homepage /> : <Login />}
        </div>
    )
};

export default App;
