import {assert} from 'chai';

const pointsLengtn9time = {
  answers: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  lives: 3,
  points: 0,
  time: 0,
};

const pointsLengtn9lives = {
  answers: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  lives: 0,
  points: 0,
  time: 30,
};

const pointsLengtn10 = {
  answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lives: 2,
  points: 0,
  time: 30,
};

const points11 = {
  answers: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lives: 3,
  points: 0,
  time: 30,
};

const pointsNegative1 = {
  answers: [-2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lives: 3,
  points: 0,
  time: 30,
};

const pointsNegative3 = {
  answers: [-2, -2, -2, 1, 1, 1, 1, 1, 1, 1],
  lives: 3,
  points: 0,
  time: 30,
};

const gamePoints = (data) => {
  if (data.answers.length < 10) {
    data.points = -1;
    return data;
  }

  if (data.answers.length === 10 && data.answers.indexOf(2) === -1 && data.answers.indexOf(-2) === -1) {
    data.points = 10;
    return data;
  }

  if (data.answers.indexOf(-2) !== -1) {
    const negativeAnswersCount = data.answers.filter((numb) => numb === -2);
    if (negativeAnswersCount.length >= 3) {
      data.points = -1;
      data.lives = 0;
      return data;
    }
    data.lives -= negativeAnswersCount.length;
  }

  data.answers.forEach((value) => {
    data.points += value;
  });

  return data;
};

describe(`scoring function`, () => {

  it(`should return -1 when the user did not answer all 10 questions`, () => {
    assert.equal(-1, gamePoints(pointsLengtn9lives).points);
    assert.equal(-1, gamePoints(pointsLengtn9time).points);
  });

  it(`should return 10 when the user answered 10 questions without errors and did not give quick answers`, () => {
    assert.equal(10, gamePoints(pointsLengtn10).points);
  });

  it(`should return 7 when the user answered all questions, but there are errors`, () => {
    assert.equal(7, gamePoints(pointsNegative1).points);
  });

  it(`should return -1 when the user made 3 errors`, () => {
    assert.equal(-1, gamePoints(pointsNegative3).points);
  });

  it(`must return the number of points`, () => {
    assert.equal(11, gamePoints(points11).points);
  });
});

const statistics = [4, 5, 8, 11];

const resultGame = (gameData, gameStatistic) => {
  const points = gameData.points;
  if (points === -1) {
    if (gameData.lives < 1) {
      return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
    }
    if (gameData.time < 1) {
      return `«Время вышло! Вы не успели отгадать все мелодии»`;
    }
  }

  gameStatistic.push(points);
  gameStatistic.sort((a, b) => a - b);
  const pointsIndex = gameStatistic.indexOf(points);
  const statisticLength = gameStatistic.length;
  return `Вы заняли ${statisticLength - pointsIndex} место из ${statisticLength} игроков. Это лучше, чем у ${pointsIndex / statisticLength * 100}% игроков`;
};

describe(`result function`, () => {
  it(`should return a string «У вас закончились все попытки. Ничего, повезёт в следующий раз!», when player the attempts are over`, () => {
    assert.equal(`«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`, resultGame(pointsLengtn9lives));
  });

  it(`should return a string «Время вышло! Вы не успели отгадать все мелодии», when player time runs out`, () => {
    assert.equal(`«Время вышло! Вы не успели отгадать все мелодии»`, resultGame(pointsLengtn9time));
  });

  it(`should return a string Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков when the player answered all questions`, () => {
    assert.equal(`Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`, resultGame(pointsLengtn10, statistics));
  });
});
