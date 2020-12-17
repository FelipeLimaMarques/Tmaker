import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    height: 80,
    width: 320,
    flexDirection: 'row-reverse',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start'
    
  },
  imageStyle: {
    width: 286,
    height: 150,
    marginTop: 95,
    position: 'absolute'

  },
  labelText: {
    color: '#FFC629',
  },
  formStyle: {
    width: 250,
    padding: 10,
    height: 230,
    backgroundColor: '#303030',
    position: 'absolute',
    top: 55,
    zIndex: 1,

  },
  inputHorizontal: {
    flexDirection: 'row',
  },
  inputBox: {
    width: '100%',
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
  imageStyle: {
    width: 286,
    height: 150,
    marginTop: 95,
    position: 'absolute',
    marginBottom: 95,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC629'
  },
  scrollView: {
    width: '100%',
    backgroundColor: 'white',
    height: 20,
  },
  scrollViewItems: {
    alignItems: 'center',
  },
  contentWrapper: {
    height: 483,
    width: 320,
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'transparent',
  },
  cardLine: {
    height: 0,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#FFC629',
    width: 320,
    backgroundColor: '#FFC629'
  },
  teamCard: {
    width: 320,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#FFC629',
    borderWidth: 2,
    backgroundColor: '#404040',
  },
  teamCardText: {
    fontSize: 26,
    color: '#FFC629',
    fontWeight: 'bold',
  },
  teamInput: {
    backgroundColor: 'transparent',
    color: '#FFC629',
    fontSize: 24,
    borderColor: '#FFC629',
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonInputView: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  teamsWrapper: {
    height: 220,
    width: 320,
    justifyContent: 'flex-start',
  },

  // Single-Elimination 
  singleP1: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 52,
    left: 18,
  },
  singleP2: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 154,
    left: 18,
  },
  singleP3: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 80,
    height: 120,
    position: 'absolute',
    top: 68,
    left: 138,
  },
  singlePW: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 62,
    height: 50,
    position: 'absolute',
    top: 105,
    left: 240,
  },

  // Double-Elimination
  doubleP1: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 52,
    left: 18,
  },
  doubleP2: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 125,
    left: 18,
  },
  doubleP3: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 227,
    left: 18,
  },
  doubleP4: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 97,
    position: 'absolute',
    top: 65,
    left: 130,
  },
  doubleP5: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 212,
    left: 120,
  },
  doublePW: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 35,
    position: 'absolute',
    top: 165,
    left: 230,
  },

  // Round-Robin
  roundP1: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 52,
    left: 52,
  },
  roundP2: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 112,
    left: 52,
  },
  roundP3: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 172,
    left: 52,
  },
  roundP4: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 50,
    position: 'absolute',
    top: 232,
    left: 52,
  },
  roundPW: {
    backgroundColor: 'white',
    opacity: 0.1,
    width: 90,
    height: 35,
    position: 'absolute',
    top: 150,
    left: 170,
  },
});

export default styles;