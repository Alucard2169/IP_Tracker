import '../styles/header.css'
import DetailBlock from './detail';
import SearchBar from './searchBar';

const Header = () => {
    return ( 
        <header>
            <h1 className='mainHeading'>IP Address Tracker</h1>
            <SearchBar />
            <DetailBlock/>
        </header>
     );
}
 
export default Header;