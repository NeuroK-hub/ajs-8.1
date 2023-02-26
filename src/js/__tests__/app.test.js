import Team from '../team';
import Character from '../character';

test('добавление персонажа в команду', () => {
  const bowman = new Character('Legolas', 'Bowman');
  const team = new Team();

  team.add(bowman);

  expect(team.members.has(bowman)).toBeTruthy();
});

test('добавление персонажа, который уже есть в команде', () => {
  const bowman = new Character('Legolas', 'Bowman');
  const warrior = new Character('Aragorn', 'Warrior');
  const team = new Team();

  team.add(bowman);
  team.add(warrior);

  expect(() => team.add(bowman)).toThrowError(new Error('Игрок уже в команде'));
});

test('добавление всех персонажей в команду', () => {
  const bowman = new Character('Legolas', 'Bowman');
  const warrior = new Character('Aragorn', 'Warrior');
  const team = new Team();

  team.addAll(bowman, warrior);

  expect(team.members.size).toBe(2);
});

test('преобразование Set в массив', () => {
  const bowman = new Character('Legolas', 'Bowman');
  const warrior = new Character('Aragorn', 'Warrior');
  const team = new Team();

  team.addAll(bowman, warrior);

  const expected = [
    { name: 'Legolas', type: 'Bowman' },
    { name: 'Aragorn', type: 'Warrior' },
  ];

  expect(team.toArray()).toEqual(expected);
});
