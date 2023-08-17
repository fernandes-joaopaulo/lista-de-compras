import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarItem(itemLista) {
    const lista = await getLista()
    lista.push(itemLista);
    const jsonLista = JSON.stringify(lista);
    await AsyncStorage.setItem("lista", jsonLista);
    //await AsyncStorage.setItem("lista", '[]');
}
export async function getLista() {
    const dados = await AsyncStorage.getItem("lista");
    const lista = dados ? JSON.parse(dados) : []
    return lista
}
export async function excluirItem(id) {
    const lista = await getLista()
    
    listaNova = lista.filter((item) => item.id != id)
    
    const jsonLista = JSON.stringify(listaNova);
    await AsyncStorage.setItem("lista", jsonLista);
    //await AsyncStorage.setItem("lista", '[]');
}


