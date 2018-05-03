const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(80);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Server Started');

	var curriculums = [{id: 1,course: 'B.ENG (COMPUTER ENGINEERING)' },
	{id: 2,course: 'B.SC (IMFORMAION TECHNOLOGY)' },
	{id: 3,course: 'B.SC (SOFTWARE ENGINEERING)' },
	{id: 4,course: 'B.SC (ELECTRONIC)' }];
	var id = curriculums.length + 1 ;

	app.get('/api/curriculums',(req,res)=> {
		res.send(curriculums);
	});

app.post('/api/curriculums',(req,res)=> {
	var course = req.body.course;
	curriculums.push({
		id: id ++,
		course: course
	});
	res.send(curriculums);
});

app.delete('/api/curriculums/:curriculum_id',(req,res)=> {
	var id = req.params.curriculum_id,
		 temp = [];
	curriculums.map(curriculum =>{
		if(curriculum.id != id)
			temp.push(curriculum);
	});
	curriculums = temp ;

	res.send(curriculums);
});
