import PropTypes from 'prop-types';
import { List, Item, Name, DeleteBtn } from './ListContact.styled';
export const ListContacts = ({ visiableTodos, removeContacts }) => {
    return (
        <List>
            {visiableTodos.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}</Name>
                    <p>{number}</p>
                    <DeleteBtn
                        id={id}
                        onClick={e => {
                            removeContacts(e.target.id);
                        }}
                    >
                        delete
                    </DeleteBtn>
                </Item>
            ))}
        </List>
    );
};
ListContacts.propTypes = {
    visiableTodos: PropTypes.array.isRequired,
    removeContacts: PropTypes.func.isRequired,
};
