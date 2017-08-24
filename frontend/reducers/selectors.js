import React from 'react';
import { values } from 'lodash';

export const selectAllNotes = (state) => values(state.notes);
