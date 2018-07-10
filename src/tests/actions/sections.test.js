import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  ADD_SECTION,
  EDIT_SECTION,
  REMOVE_SECTION,
  SET_SECTIONS,
  startAddSection,
  startEditSection,
  startRemoveSection,
  startSetSections
} from '../../actions/sections';
import database from '../../firebase/firebase';
import sections from '../fixtures/sections';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const sectionsData = {};
  sections.forEach(({ id, name, sortId }) => {
    sectionsData[id] = { name, sortId };
  });
  database
    .ref(`users/${uid}/sections`)
    .set(sectionsData)
    .then(() => done());
});

test('should remove section from the database', done => {
  const store = createMockStore(defaultAuthState);
  const id = sections[2].id;
  store
    .dispatch(startRemoveSection({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: REMOVE_SECTION,
        id
      });

      return database.ref(`sections/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should add section to the database and store', done => {
  const store = createMockStore(defaultAuthState);
  const sectionData = {
    name: 'Section Added By Test',
    sortId: '100'
  };

  store
    .dispatch(startAddSection(sectionData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: ADD_SECTION,
        section: {
          id: expect.any(String),
          ...sectionData
        }
      });

      return database
        .ref(`users/${uid}/sections/${actions[0].section.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(sectionData);
      done();
    });
});

test('should edit a section from the database', done => {
  const store = createMockStore(defaultAuthState);
  const id = sections[0].id;
  const updates = { name: 'edited by test' };

  store
    .dispatch(startEditSection(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: EDIT_SECTION,
        id,
        updates
      });

      return database.ref(`users/${uid}/sections/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val().name).toBe(updates.name);
      done();
    });
});

test('should fetch the sections from the database', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetSections()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: SET_SECTIONS,
      sections
    });
    done();
  });
});
