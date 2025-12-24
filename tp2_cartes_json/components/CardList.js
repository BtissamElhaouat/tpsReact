import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import CardItem from './CardItem';
import cards from '../data/cards.json';

export function CardList() {
  const [searchText, setSearchText] = useState('');

  const filteredCards = cards.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) ||
    item.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher..."
            value={searchText}
            onChangeText={setSearchText}
          />
        }
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
