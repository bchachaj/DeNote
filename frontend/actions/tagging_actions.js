import * as TaggingAPI from '../util/taggings_util';

import { fetchSingleNote } from './note_actions';

export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';

export const createTaggings = tagging => dispatch => {
  return TaggingAPI.createTagging(tagging)
    .then(tag => {dispatch(receiveTaggings(tag));
    }
  );
};

export const receiveTaggings = (tagging) => ({
  type: RECEIVE_TAGGING,
  tagging
});
