console.log("hellow wo");

const nama = "Ziyad";
function Hello(){
    return(
        <div>
        <h1>makanan</h1>
        <p>nama saya {nama}</p>
    </div>
       
    );
}
function Header(){
    return(
        <nav>
            <ul>
                <li>about</li>
                <li>Contact</li>
                <li>Mka</li>
            </ul>
        </nav>

    );
}

function Main(){
    return(
        <main>
        <Hello/>
        <Hello/>
        <Hello/>
        <Hello/>
        <Hello/>
        </main>


    );
}
function Footer(){
    return(
        <div>
        <h2>Ziyad</h2>
        <p>copyright $copy;</p>
        </div>
    );
}


function App(){

    return(
        <div>
            <Header/>
            <Main/>
            <Footer />
         </div>
        


    )
}






const mas = <h1>fuck off</h1>
const root = document.getElementById("root");

ReactDOM.render(<App/>,root)