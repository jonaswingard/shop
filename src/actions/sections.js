import database from '../firebase/firebase';

export const ADD_SECTION = 'ADD_SECTION';
export const addSection = section => ({
  type: ADD_SECTION,
  section
});

export const REMOVE_SECTION = 'REMOVE_SECTION';
export const removeSection = ({ id } = {}) => ({
  type: REMOVE_SECTION,
  id
});

export const EDIT_SECTION = 'EDIT_SECTION';
export const editSection = (id, updates) => ({
  type: EDIT_SECTION,
  id,
  updates
});

export const SET_SECTIONS = 'SET_SECTIONS';
export const setSections = sections => ({
  type: SET_SECTIONS,
  sections
});

// DB
export const startAddSection = (sectionData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name = '', sortId = 0 } = sectionData;

    const section = { name, sortId };

    return database
      .ref(`users/${uid}/sections`)
      .push(section)
      .then(ref => {
        dispatch(
          addSection({
            id: ref.key,
            ...section
          })
        );
      });
  };
};

export const startEditSection = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/sections/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editSection(id, updates));
      });
  };
};

export const startRemoveSection = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/sections`)
      .remove()
      .then(() => {
        dispatch(removeSection({ id }));
      });
  };
};

export const startSetSections = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/sections`)
      .once('value')
      .then(snapshot => {
        const sections = [];

        snapshot.forEach(childSnapshot => {
          sections.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setSections(sections));
      });
  };
};
