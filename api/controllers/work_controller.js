const {Work, validate} = require('../models/work');

exports.work_get_all = async (req, res)=>{
    const works = await Work.find().sort('name');
    res.send(works);
};
exports.work_by_id = async (req,res)=>{
    const work = await Work.findById(req.params.id);

    if(!work) return res.status(404).send('The cat with given ID not found!');

    res.send(work);
};

exports.post_work = async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let work = new Work({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    });

    work = await work.save();
    res.send(work);
};

exports.put_work = async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const work = await Work.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    }, {new: true});

    if(!work) return res.status(404).send('The project with given ID not found!');
    res.send(work);
};

exports.delete_work = async (req, res)=>{
    const Work = await Work.findByIdAndRemove(req.params.id);

    if(!Work) return res.status(404).send('The project with given ID not found!');
    res.send(Work);
};