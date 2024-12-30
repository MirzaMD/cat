import { Cat } from './Cat.jsx';
import { Header } from './Header.jsx'
import { Facts } from './Facts.jsx'
function App() {
  function refreshPage(){
    window.location.reload();
  }
  return (<div >
    <Header/>
    <Cat/>
    <Facts/>
    <button onClick={refreshPage} className='p-2 rounded-full text-orange-300
     bg-red-50 font-serif relative bottom-[350px] sm:bottom-[500px] ml-4  hover:bg-gray-200'>refresh</button>
    </div> )
}

export default App
