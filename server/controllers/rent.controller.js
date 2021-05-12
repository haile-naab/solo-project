const Rent = require('./../models/rent.model')

module.exports={

getAll: (req,res)=>{
    Rent.find({})
    .then((allRents)=> {console.log(allRents);
    res.json(allRents);
    })

    .catch((err)=>{
        console.log('error found',err);
        res.json(err);
    })
},

create: (req,res)=>{
    console.log(req.body)

    Rent.create(req.body)
    .then((newRent)=> {console.log(newRent);
    res.json(newRent);
    })

    .catch((err)=>{
        console.log('Rent not created',err);
        res.json(err);
    })
},

getOne: (req,res)=>{
    console.log(req.params);

    Rent.findById(req.params.id)
    .then( (oneRent)=> {console.log(oneRent)
    res.json(oneRent);
    })

    .catch((err)=>{
        console.log('Rent not found',err);
        res.json(err);
    })
},

update: (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    
    Rent.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
    })
    .then((updateRents)=> {console.log(updateRents);
    res.json(updateRents);
    })

    .catch((err)=>{
        console.log('Rents not updated',err);
        res.json(err);
    })
},

delete: (req,res)=>{
    console.log(req.params.id);

    Rent.findByIdAndDelete(req.params.id)
    .then( (deleteRents)=> {console.log(deleteRents)
    res.json(deleteRents);
    })

    .catch((err)=>{
        console.log(' error found in deleting Rents ',err);
        res.json(err);
    })
}





}