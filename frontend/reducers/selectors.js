import React from 'react';
import { values } from 'lodash';

export const selectAllNotes = (state) => values(state.notes);

export const selectOneNote = ({notes}, id) => {
  const note = notes[id] || {};
  return note;
};