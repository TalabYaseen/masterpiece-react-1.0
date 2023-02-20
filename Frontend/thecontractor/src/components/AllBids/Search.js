import {React} from 'react';
const Search = () => {
    return (
        <>
<div className="search">
<div className="search-container">
    <h1 style={{color: "white"}}>filter the to suite you more</h1>
    <form action="" method="get">
        <label htmlFor=""></label>
        <select name="" id="" className="drop-down">
            <option value="">filter</option>
            <option value="1">Painting</option>
            <option value="2">Tails</option>
            <option value="3">Doors</option>
        </select>
        <br/>
        <select name="" id="" className="drop-down">
            <option value="">Sort By</option>
            <option value="1">Publisher Name</option>
            <option value="2">Publish Date</option>
            <option value="3">Subject</option>
        </select>
        <br/>
        <input className="drop-down" type="text" name="" id="" placeholder="looking for"/>
        <br/>
        <button className="search-btn" type="submit">Go</button>
    </form>
</div>
</div>
</> )}

export default Search;