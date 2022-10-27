import PropTypes from 'prop-types';

export const SearchForm = ({ onSearch }) => {
    return <input type="text" onChange={onSearch} placeholder="Search" />;
};
SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
