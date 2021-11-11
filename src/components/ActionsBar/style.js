import { makeStyles } from '@mui/styles';
import { COLORS, SIZES } from '../../constants';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: COLORS.lightGray1,
    borderWidth: 0.5,
    borderRadius: SIZES.radius,
    borderColor: "#9bf6ff",
    display: "flex",
    paddingLeft: 20,
    flexWrap: 'wrap',
    width: '99vw'
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
}));
export default useStyles;
