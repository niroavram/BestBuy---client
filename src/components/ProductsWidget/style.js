import { makeStyles } from '@mui/styles';
import { COLORS, FONTS, SIZES } from '../../constants';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#f8f9fa",
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#9bf6ff",
    justifyContent: "center",
    textAlign: "center",
 },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  products:{
    width: '40vw',
    height: '70vh',
    flexGrow: 1,
    backgroundColor: COLORS.yellow,
    borderWidth: 0.5,
    borderRadius: 15,

  },
  product:{
     display: 'flex',
    backgroundColor: COLORS.gray2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    height: '12vh'
  },
  productSelected:{
    display: 'flex',
   backgroundColor: COLORS.orangePrimary,
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   alignContent: 'center',
   height: '12vh'
 },
  productType:{
    backgroundColor: COLORS.primary,
    borderWidth: 0.5,
    borderRadius: 15,
    width: '40vw',
    flexGrow: 1,

  },
  productsWrap:{
      display: 'flex',
      justifyContent:'center',
      flexWrap: 'wrap',
      height: '200px'
  },
  productImage :{
      flexGrow: 3
  },
  productDesc :{
    flexGrow: 9
},
productAction :{
    flexGrow: 1
},
titleA:{
    fontFamily: FONTS.largeTitle,
    fontSize: SIZES.h1,
    color: COLORS.darkGray,
}
}));
export default useStyles;
