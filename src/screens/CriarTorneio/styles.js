import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  scrollViewItems: {
    alignItems: 'center'
  },
  buttonView: {
    height: 200,
    width: '100%',
    marginTop: 360,
    alignItems: 'center',
  },
  imageStyle: {
    width: 286,
    height: 150,
    marginTop: 95,
    position: 'absolute'
  },
  inputBox: {
    width: 286,
    height: 46,
    color: '#FFC629',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFC629',
    padding: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginVertical: 5
  },
  picker: {
    color: '#FFC629',
    width: 286,
    height: 46,
  },
  pickerWrapper: {
    width: 286,
    height: 46,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFC629',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginVertical: 5
  },
  formWrapper: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  labelText: {
    color: '#FFC629',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row-reverse'
  }
});

export default styles;