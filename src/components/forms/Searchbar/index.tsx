import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { Field, SearchButton, SearchbarContainer } from './styled';

export const SearchBar = () => {
  const [ value, setValue ] = useState('');

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    alert('pesquisou')
  }

  return (
    <SearchbarContainer role={'search'} onSubmit={onSearch}>
      <label htmlFor='searchbar_header'>Pesquisar anotação</label>
      <Field
        value={value}
        type='search'
        id='searhbar_header'
        aria-label='pesquisar'
        placeholder='Pesquisar anotação'
        onChange={e => setValue(e.target.value)}
      />
      <SearchButton
        type='submit'
      >
        <HiMagnifyingGlass size={20} />
      </SearchButton>
    </SearchbarContainer>
  );
}