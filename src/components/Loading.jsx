import "./Loading.css"
const Loading = () => {
    return ( 
        <div className="loading">
            <div>
                <img src="/loading.png" alt="loading" />
            </div>
            <p>Loading, please wait...</p>
        </div>
     );
}
 
export default Loading;