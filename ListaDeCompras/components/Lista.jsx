import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemLista from './ItemLista';
import { useState, useEffect } from 'react';
import {getLista} from './dados';

export default function Lista(props) {
  const [itens, setItens] = useState([
    { id:1, quantidade:5, descricao: 'goiabada'},
    { id:2, quantidade:3, descricao: 'Bananada'},
    { id:3, quantidade:10, descricao: 'Marmelada'}
  ])

  useEffect(() => {
    getLista().then(lista => setItens(lista))
    },[itens])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {
          itens.map((item) => <ItemLista item={item} />)
        }
        {itens.length == 0 && <Text style={styles.text}>Lista Vazia</Text>}
      </ScrollView>
    </View>
  );
      }

const styles =
  StyleSheet.create({
    container: {
      backgroundColor: "#6655CC",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 15
    },
    scrollContainer: {
      width: '85%',
    },
    itemsContainer: {
      marginTop: 5,
      padding: 20,
      borderRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
    }
  });
