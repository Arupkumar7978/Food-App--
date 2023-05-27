import { COLORS_DICT } from './Constants';


const {GREEN_COLOR , ORANGE_COLOR} = COLORS_DICT ;

export const getRatingsColor = (rating) => {
  if (rating >= 4) return GREEN_COLOR;
  else return ORANGE_COLOR;
};
