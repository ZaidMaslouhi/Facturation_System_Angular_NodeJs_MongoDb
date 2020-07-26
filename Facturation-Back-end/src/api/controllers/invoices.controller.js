import HttpStatus from 'http-status-codes';
import Invoice from '../models/invoice.model'; 


module.exports = {
    findAll(req, res,){
        Invoice.find()
                .then((invoice)=>res.json(invoice))
                .catch((err)=>res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    create(req, res){
        const { item, qty, date, due, rate, tax } = req.body;
            item?? res.status(HttpStatus.BAD_REQUEST).json({err: 'item is required field !!'});
            qty?? res.status(HttpStatus.BAD_REQUEST).json({err: 'quantity is required field !!'});
            date?? res.status(HttpStatus.BAD_REQUEST).json({err: 'date is required field !!'});
            due?? res.status(HttpStatus.BAD_REQUEST).json({err: 'due is required field !!'});

        Invoice({ item, qty, date, due, rate, tax }).save()
            .then((invoice)=>res.json(invoice))
            .catch((err)=>res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    findOne(req, res){
        const id = req.params.id;
        Invoice.findById(id)
                .then((invoice)=>res.json(invoice))
                .catch((err)=>res.status(HttpStatus.NOT_FOUND)
                            .json({err: 'Couldn\'t find any invoice !!'}));
    },
    update(req, res){
        const id = req.params.id;
        const { item, qty, date, due, rate, tax } = req.body;
            item?? res.status(HttpStatus.BAD_REQUEST).json({err: 'item is required field !!'});
            qty?? res.status(HttpStatus.BAD_REQUEST).json({err: 'quantity is required field !!'});
            date?? res.status(HttpStatus.BAD_REQUEST).json({err: 'date is required field !!'});
            due?? res.status(HttpStatus.BAD_REQUEST).json({err: 'due is required field !!'});

        Invoice.findOneAndUpdate({ _id: id }, { item, qty, date, due, rate, tax })
            .then((invoice)=>res.json(invoice))
            .catch((err)=>res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    delete(req, res){
        const id = req.params.id;
        Invoice.findByIdAndRemove(id)
                .then((invoice)=>res.json(invoice))
                .catch((err)=>res.status(HttpStatus.NOT_FOUND)
                            .json({err: 'Couldn\'t delete any invoice !!'}));
    }
};
