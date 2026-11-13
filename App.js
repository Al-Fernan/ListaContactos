import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

// Componente hijo ContactItem (recibe props nombre y telefono)
function ContactItem({ nombre, telefono }) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text>Teléfono: {telefono}</Text>
    </View>
  );
}

// Componente principal
export default function App() {
  const [listaContactos, setListaContactos] = useState([
    { id: '1', nombre: 'Fernando Guanopatin', telefono: '096‑271‑5893' },
    { id: '2', nombre: 'Kerly Tercero', telefono: '099-414-5020' },
    { id: '3', nombre: 'Ruben Cunalata', telefono: '098-702-5551' },
    { id: '4', nombre: 'Melany Lopez', telefono: '098-232-5231' }
  ]);

  const agregarContacto = () => {
    setListaContactos([
      ...listaContactos,
      { id: Date.now().toString(), nombre: 'Edison Chiluisa', telefono: '094-572-1680' }
    ]);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Contactos</Text>
      <Button title="Agregar contacto" onPress={agregarContacto} />
      <FlatList
        data={listaContactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem nombre={item.nombre} telefono={item.telefono} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    marginTop: 30
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  tarjeta: {
    backgroundColor: '#ccffe3',
    marginVertical: 8,
    padding: 14,
    borderRadius: 12
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});