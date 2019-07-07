var listOfComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var firstName = ['Иван', 'Артем', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Саша', 'Данил'];
var userPhotoDescription = [];

var fillingUserCard = function (min, max) {
  //заполнение данными описания фото объекта
  var randomNumberImages = Math.floor(Math.random() * (max - min));
  return randomNumberImages;
}



var   creatingUserList = function () {
  //Создание объектов массива опиания фото пользователей
  for (var i = 0; i < 25; i++) {
    userPhotoDescription[i] = {
      url: 'photos/' + fillingUserCard(1, 25) + '.jpg',
      likes: fillingUserCard(15, 200),
      comments: listOfComments[fillingUserCard(0, 6)],
      avatar: 'img/avatar-' + fillingUserCard(1, 6) + '.svg',
      name: firstName[fillingUserCard(0, 8)]
    }
    console.log(userPhotoDescription[i]);
  }
}

creatingUserList();
//console.log(userPhotoDescription);
