export const TESTALPHA = 'conan';

export function getAllFlowers(){
    return FLOWERDATA;
}

export function getFlowerById(id){

    return FLOWERDATA.find(item => item.id === id);    
}

export const FLOWERDATA = [
    {
      id: '001',
      title: 'Flower 1',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-01-md.png',
      description: 'I don\'t know some kind of daisy maybe? I\'m not a florist.',
    },
    {
      id: '002',
      title: 'Flower 2',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-02-md.png',
      description: 'A pink rose',
    },
    {
      id: '003',
      title: 'Flower 3',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-03-md.png',
      description: 'A violet? Could be I can\'t say for sure.',
    },
    {
      id: '004',
      title: 'Flower 4',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-04-md.png',
      description: 'I\'ll say a lily, but most likely I\'m wrong',
    },
    {
      id: '005',
      title: 'Flower 5',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-05-md.png',
      description: 'An orange rose.  Kinda creepy no?',
    },
    {
      id: '006',
      title: 'Flower 6',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-06-md.png',
      description: 'They look like cherry blossoms',
    },
    {
      id: '007',
      title: 'Flower 7',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-07-md.png',
      description: 'I got nothing',
    },
    {
      id: '008',
      title: 'Flower 8',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-08-md.png',
      description: 'Google says red water lily, so I\'ll go with that',
    },
    {
      id: '009',
      title: 'Flower 9',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-09-md.png',
      description: 'Another Rose.  BTW there was room on that plank, she just let Jack die IMO',
    },
    {
      id: '010',
      title: 'Flower 10',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-10-md.png',
      description: 'Ain\'t that a daisy? Do yourself a favour and watch Tombstone.  So good!',
    },
    {
      id: '011',
      title: 'Flower 11',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-11-md.png',
      description: 'Another rose, but this one\'s pretty cool',
    },
    {
      id: '012',
      title: 'Flower 12',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-12-md.png',
      description: 'I\'ll go with tulips',
    },
];