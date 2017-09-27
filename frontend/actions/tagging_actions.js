import * as TaggingAPI from '../util/taggings_util';

import { fetchSingleNote } from './note_actions';

export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const RECEIVE_ALL_TAGGINGS = 'RECEIVE_ALL_TAGGINGS';

export const createTaggings = tagging => dispatch => {
  return TaggingAPI.createTagging(tagging)
    .then(tag => {dispatch(receiveTaggings(tag));
    }
  );
};

export const requestAllTaggings = () => (dispatch) => {
  return TaggingAPI.fetchAllTaggings()
    .then(taggings => dispatch(receiveAllTaggings(taggings)));
};

export const receiveAllTaggings = taggings => ({
  type: RECEIVE_ALL_TAGGINGS,
  taggings
});



export const receiveTaggings = (tagging) => ({
  type: RECEIVE_TAGGING,
  tagging
});
