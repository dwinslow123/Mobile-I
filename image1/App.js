import React from 'react';
import { StyleSheet, Text, View, Image, Button, Form } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Text>Lambda School</Text>
          </View>
          <View style={styles.heroImg}>
            <Image 
              style={styles.img}
              source={require('./img/lambda.png')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.buttons}>
              <View style={styles.btn}>
                <Button 
                  onPress={() => {}}
                  title="Like"
                  color="#000000"
                />
              </View>
              <View style={styles.btn}>
                <Button 
                  onPress={() => {}}                                
                  title="Share"
                  color="#000000"
                />
              </View>
              <View style={styles.btn}>
                <Button 
                  onPress={() => {}}
                  title="Comment"
                  color="#000000"
                />
              </View>
          </View>
          <View style={styles.commentSection}>
            <View style={styles.comment}>
              <Image 
                style={styles.userImg}
                source={require('./img/ben.png')}
                resizeMode="contain"
              />
              <Text> "What a cool pic!"</Text>
            </View>
            <View style={styles.comment}>
              <Image 
                style={styles.userImg}
                source={require('./img/ryan.png')}
                resizeMode="contain"
              />
              <Text>"This is a really awesome pic!"</Text>
            </View>
            <View style={styles.comment}>
              <Image 
                style={styles.userImg}
                source={require('./img/austen.png')}
                resizeMode="contain"
              />
              <Text>"This picture is okay."</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  header: {
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0,0,0,0.0975)',
    width: '100%',
    padding: '1.5%',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  heroImg: {
    display: 'flex',
    width: '98%',
    height: '50%',
    marginRight: '1%',
    marginLeft: '1%',
    marginTop: '1.5%',
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,

  },
  buttons: {
    height: '8%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
  btn: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28%',
    height: '70%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    marginRight: '2.5%',
    marginLeft: '2.5%',
  },
  commmentList: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    borderTopWidth: 3,
    borderTopColor: 'rgba(0,0,0,0.0975)',
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    margin: '3%',
  },
  userImg: {
    height: 40,
    width: 40,
    marginRight: '2%',
  },
});
