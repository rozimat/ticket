const { v4 : uuid } = require('uuid');
const Io = require("../utils/Io");
const Speakers = new Io ('./db/speakers.json');
const SpeakerModel = require('../models/speakers')



const speaker = async (req, res)=>{ 
  const speakers = await Speakers.read();
  const {name,field } = req.body;
  const { img } = req.files;
  const post_id = uuid();

  const newImgName =` ${uuid()}.${img.mimetype.split("/")[1]}`;
  img.mv(`${process.cwd()}/uploads/speakers/${newImgName}`);

  const newSpeaker = new SpeakerModel(post_id, name, field, newImgName);

  const data = speakers.length ? [...speakers, newSpeaker ] : [newSpeaker ];
  Speakers.write(data);
  res.status(201).json({ message : "Sucsessfully created!"})

}
const speakerDelete = async (req, res) =>{
  const speakers = await Speakers.read();
  const post_id = req.params.id;

  const findId = speakers.find((serId)=> post_id === serId.post_id);
  if(findId){
    const data = speakers.filter((l)=> l.post_id  !== post_id);
    Speakers.write(data)
    res.status(201).json({ message: "deleted"})
  }

}
const speagerGet = async(req, res)=>{
  const data = await Speakers.read();
  res.status(200).json(data);
  
}


module.exports = {
  speaker,
  speakerDelete,
  speagerGet,
}