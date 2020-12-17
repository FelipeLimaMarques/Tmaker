import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
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
  imageCardStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderRadius: 10,
    
  },
  cardHeader: {
    width: 270,
    height: 25,
    backgroundColor: '#252525',
    borderTopRightRadius: 10,
  },
  cardBody: {
    width: 270,
    height: 25,
    backgroundColor: '#404040',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomRightRadius: 10,
  },
  scrollView: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  scrollViewItems: {
    alignItems: 'center'
  },
  listWrapper: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'transparent',
  },
  cardView: {
    backgroundColor: 'transparent',
    width: 320,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  cardHeaderText: {
    alignSelf: 'center',
    color: '#FFC629',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardBodyText: {
    color: '#FFC629',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC629'
  },
  cardLine: {
    height: 0,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#FFC629',
    width: 320,
    backgroundColor: '#FFC629'
  },
  contentWrapper: {
    height: 483,
    width: 320,
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'transparent',
  },
  teamsWrapper: {
    height: 220,
    width: 320,
    justifyContent: 'flex-start',
  },
});

export default styles;