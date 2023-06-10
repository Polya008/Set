import Team from '../team';
import Character from '../character';

const team = new Team();

const user1 = new Character('Gendalf', 'mage');
const user2 = new Character('Frodo', 'warrior');
const user3 = new Character('Bilbo', 'archer');

test('Try to add repeating character in team using team.add()', () => {

  team.add(user1);
  team.add(user2);
  team.add(user3);

  expect(() => team.add(user1)).toThrow('Персонаж уже добавлен в вашу команду');
});

test('Adding multiple characters in team, using team.addAll(), trying to add only 3 unique characters', () => {

  team.addAll(user1, user2, user3, user1, user2);

  expect(team.members.size).toBe(3);
});

test('Should return Array from Set property using team.toArray()', () => {
  
  team.addAll(user1, user2, user3);

  expect(team.toArray()).toEqual([
    { name: 'Gendalf', type: 'mage' },
    { name: 'Frodo', type: 'warrior' },
    { name: 'Bilbo', type: 'archer' },
  ]);
});