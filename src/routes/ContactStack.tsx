import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Contacts} from '../screens/Contacts';
import {ContactDetails} from '../screens/ContactDetails';
import React from 'react';
import {AddContact} from '../screens/AddContact';

const ContactStack = createNativeStackNavigator();

export function ContactStackNavigator() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Group>
        <ContactStack.Screen name="ContactsScreen" component={Contacts} />
        <ContactStack.Screen name="ContactDetails" component={ContactDetails} />
        <ContactStack.Screen name="AddContact" component={AddContact} />
      </ContactStack.Group>
    </ContactStack.Navigator>
  );
}
