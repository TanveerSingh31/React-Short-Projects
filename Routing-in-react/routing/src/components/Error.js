import { useRouteError} from 'react-router-dom';

export const Error = () => {
    
    const err = useRouteError();
    console.log(err);

    return (
        <>
            <h1 style={{width: '90vh', height: '90vw', backgroundColor: 'red', color: "white"}}>
                This is Error page, route not found !
            </h1>
            <p>{err.statusText}</p>
        </>
        
    )
};