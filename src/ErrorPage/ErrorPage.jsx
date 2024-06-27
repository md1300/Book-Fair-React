import { Link, useRouteError } from "react-router-dom";




const ErrorPage = () => {
    
    const error=useRouteError();
    console.log(error)
    return (
        <div className="text-center">
           <h1 className="text-3xl">oops.....</h1>
           <p className="m-9">{ error.data } </p> 
           <Link className="bg-primary text-white p-1 hover hover:bg-black " to="/">go to home</Link>
        </div>
    );
};

export default ErrorPage;