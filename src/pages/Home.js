import "./Home.css";

const Home = () => {

    return (
        <div className="Home">
            <div>
            <h1>오늘은 📅</h1>
            </div>
            <div>
                <h1>{new Date().toDateString()}</h1> 
            </div>
            <div>
                <h1>좋은 하루 되세요</h1>
            </div>
        </div>
    );
};

export default Home;