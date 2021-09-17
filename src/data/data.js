import {v4 as uuidv4} from 'uuid';

const dataListMusic = [
	{text: 'Pop', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Country', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Hip-hop', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Rock', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Metal', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Rap', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Techno', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Jazz', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Rhythm & blues', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Indie', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Electronic dance music', name: 'music', id: uuidv4(), isCheck:false},
	{text: 'Reggae', name: 'music', id: uuidv4(), isCheck:false},
];

const dataListWay = [
	{text: 'Vinyl', name: 'way', id: uuidv4(), isCheck:false},
	{text: 'Cassette', name: 'way', id: uuidv4(), isCheck:false},
	{text: 'CDs', name: 'way', id: uuidv4(), isCheck:false},
	{text: 'Radio', name: 'way', id: uuidv4(), isCheck:false},
	{text: 'Streaming Platforms', name: 'way', id: uuidv4(), isCheck:false},
];

const genderList = [
	{name: 'gender', text: 'Female', id: uuidv4()},
	{name: 'gender', text: 'Male', id: uuidv4()},
]

export {dataListMusic, genderList, dataListWay}; 