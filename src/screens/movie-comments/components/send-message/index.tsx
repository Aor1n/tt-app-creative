import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useController} from 'react-hook-form';

import {Button} from 'src/components/common/button';
import {UseSendMovieCommentReturn} from 'src/screens/movie-comments/useSendMovieComment';
import {globalStyles} from 'src/styles/globalStyles';

export const SendMessage: React.FC<UseSendMovieCommentReturn> = ({
  form,
  handleSubmit,
}) => {
  const {field} = useController({
    name: 'message',
    control: form.control,
  });

  return (
    <View style={styles.sendMessageContainer}>
      <TextInput
        onChangeText={e => field.onChange(e)}
        value={field.value}
        placeholder={'Type a message'}
        placeholderTextColor={'#a1a1a1'}
        multiline
      />

      <View style={styles.sendMessageButtonContainer}>
        <Button text={'Send'} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const sendMessageContainerHeight = 78;

const styles = StyleSheet.create({
  sendMessageContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: sendMessageContainerHeight,
    backgroundColor: '#dbdbdb',
    fontSize: 16,
    paddingLeft: 30,
    paddingRight: 128,
    marginHorizontal: -globalStyles.defaultMargin,
  },
  sendMessageButtonContainer: {
    position: 'absolute',
    top: -sendMessageContainerHeight + 10,
    right: 0,
    width: 90,
    margin: globalStyles.defaultMargin,
  },
});
