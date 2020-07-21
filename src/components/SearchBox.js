import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
	 <div classname='pa2'>	
		<input
		 className='pa3 ba b--grenn bg-lightest-blue'
		 type='search' 
		 placeholder = 'search robots'
		 onChange={searchChange}
		  />
	 </div>
		);
}
export default SearchBox;