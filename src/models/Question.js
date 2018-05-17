import { types } from 'mobx-state-tree';

export default types.model('Question', {
  text: types.string,
});
