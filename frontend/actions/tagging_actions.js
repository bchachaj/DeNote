import * as TaggingAPI from '../util/taggings_util';

import { fetchSingleNote } from './note_actions';

export const createTagging = tagging => dispatch => (
  TaggingAPI.createTagging(tagging)
    .then(t => dispatch(fetchSingleNote(t.id)))
);
