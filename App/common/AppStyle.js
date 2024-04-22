import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppColors from './AppColor';

const BaseTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    accent: AppColors.accent,
    text: AppColors.textSecondary,
    fontFamily: 'Poppins-Medium',
  },
};
const componentStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  searchComp: {
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
    height: 50,
    width: '95%',
    padding: 5,
    marginVertical: 3
  },
  cardView: {
    padding: 10,
    borderWidth: 0.5,
    margin: 10,
    elevation: 0.5
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 7
  },
  favBtn: {
    padding: 5,
    alignSelf: 'center',
    position: 'absolute',
    right: 1
  }
})

const TextStyle = StyleSheet.create({
  titleExtraLarge: {
    fontSize: 24,
    color: AppColors.primaryTextColor,
    fontFamily: 'Poppins-Medium',
  },
  titleLarge: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: AppColors.primaryTextColor,
  },
  titleNormal: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  inputTextFont: {
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontFamily: 'Poppins-Medium',
  },

  subTitle: { fontFamily: 'Poppins-Regular' },

  titleSmall: {
    fontSize: 12,
    color: AppColors.textPrimary,
    fontFamily: 'Poppins-ExtraLight ',
  },
  descNormalPrimary: {
    fontSize: 14,
    color: AppColors.textPrimary,
    fontFamily: 'Poppins-Medium',
  },
  descNormal: {
    fontSize: 14,
    color: AppColors.textSecondary,
    fontFamily: 'Poppins-Light',
  },
  descSmallPrimary: {
    fontSize: 12,
    color: AppColors.textPrimary,
    fontFamily: 'Poppins-Medium',
  },
  descSmall: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  optionMenuTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: AppColors.textPrimary,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  poppins: {
    fontFamily: 'Poppins-Medium',
  },
  secondaryFont: {
    fontFamily: 'Nunito-Medium',
  },
  semiBoldText: {
    fontFamily: 'NunitoSans-SemiBold',
  },
});

export default {
  BaseTheme,
  TextStyle,
  componentStyle
};
