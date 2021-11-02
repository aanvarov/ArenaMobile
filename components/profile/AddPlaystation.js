import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Modal, FormControl, Input} from 'native-base';
import {useState} from 'react';
import Axios from '../../utils/axios';
import {useToast} from 'native-base';
import {useSelector} from 'react-redux';

const AddPlaystationModal = ({nav}) => {
  const currentUser = useSelector(state => state.auth);
  const {_id} = currentUser.user;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    number: 0,
    type: 0,
    hourlyPrice: 0,
  });
  const [error, setError] = useState(null);
  const toast = useToast();

  const createPlaystation = () => {
    try {
      if (data.number === 0 || data.type === 0 || data.hourlyPrice === 0) {
        setError('Please enter number, type and price');
      } else {
        return Axios.post('/playstations', {...data, club: _id})
          .then(async ({data}) => {
            if (!data.success) {
              setError(data.msg);
              setShowModal(true);
            } else {
              setError(null);
              setShowModal(false);
              toast.show({
                description: 'Successfully created',
                placement: 'top',
              });
              nav.push('BottomTabNav', {routeName: 'playstationScreen'});
            }
          })
          .catch(err => {
            console.log(err);
            setError(err?.response?.data?.msg || err?.response?.data);
          });
      }
    } catch (err) {
      console.log(err, 'error=-=-=-=-=-');
    }
  };

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Add New Playstation</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add Playstation</Modal.Header>
          {error ? <Text style={styles.errorMsg}> X {error}</Text> : null}
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Number</FormControl.Label>
              <Input
                keyboardType="number-pad"
                onChangeText={number => setData(data => ({...data, number}))}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Type(3,4 or 5)</FormControl.Label>
              <Input
                keyboardType="number-pad"
                onChangeText={type =>
                  setData(data => ({...data, type: 'ps' + type}))
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Hourly Price</FormControl.Label>
              <Input
                keyboardType="number-pad"
                onChangeText={hourlyPrice =>
                  setData(data => ({...data, hourlyPrice}))
                }
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  createPlaystation();
                }}>
                Create
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = new StyleSheet.create({
  errorMsg: {
    color: '#000',
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default AddPlaystationModal;
